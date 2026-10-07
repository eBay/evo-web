#!/usr/bin/env bash
# Evicts the least-recently-deployed PR previews from gh-pages' previews/ dir
# once it exceeds PREVIEW_BUDGET_BYTES, to stay under GitHub Pages' 10GB
# deploy limit. Run after every preview deploy (see preview.yml).
#
# Requires: GITHUB_TOKEN, GITHUB_REPOSITORY.
# Optional: PREVIEW_BUDGET_BYTES (default 8 GiB).

set -euo pipefail

budget_bytes="${PREVIEW_BUDGET_BYTES:-$((8 * 1024 * 1024 * 1024))}"
repo_url="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
export GH_TOKEN="$GITHUB_TOKEN"

git config --global user.name "github-actions[bot]"
git config --global user.email "github-actions[bot]@users.noreply.github.com"

# Strikes an evicted preview's PR comment so its links aren't left clickable.
# Best-effort: never fails the eviction itself.
decommission_comment() {
  local pr="$1" comment_id body marker new_body
  comment_id=$(gh api "repos/${GITHUB_REPOSITORY}/issues/${pr}/comments?per_page=100" \
    --jq '[.[] | select(.user.login == "github-actions[bot]" and (.body | contains("PR Preview Deployed")))] | last | .id // empty' \
    2>/dev/null) || return 0
  [ -z "$comment_id" ] && return 0

  body=$(gh api "repos/${GITHUB_REPOSITORY}/issues/comments/${comment_id}" --jq '.body' 2>/dev/null) || return 0
  marker=' _(evicted to free up space — push a new commit, or re-run "PR Preview", to bring it back)_'
  new_body=${body/### PR Preview Deployed/### PR Preview Deployed${marker}}
  new_body=$(printf '%s' "$new_body" | perl -pe 's/\[([^\]]+)\]\([^)]+\)/~~$1~~/g')
  gh api --method PATCH "repos/${GITHUB_REPOSITORY}/issues/comments/${comment_id}" -f body="$new_body" >/dev/null 2>&1 || true
}

work_dir="$(mktemp -d)"
trap 'rm -rf "$work_dir"' EXIT

# Blobless: git ls-tree -l would lazily fetch each blob just to size it, so
# sizes come from each preview's own .size-bytes marker instead.
git clone --filter=blob:none --no-checkout --depth 1 --branch gh-pages "$repo_url" "$work_dir"
cd "$work_dir"

for attempt in 1 2 3; do
  git fetch --depth 1 origin gh-pages
  git reset --soft origin/gh-pages
  git read-tree origin/gh-pages

  declare -A size_of=()
  declare -A time_of=()
  total=0
  unsized=() # no (or invalid) .size-bytes marker: evicted regardless of budget
  for dir in $(git ls-tree --name-only origin/gh-pages previews/ 2>/dev/null | grep -E '^previews/pr-[0-9]+$' || true); do
    bytes=$(git cat-file -p "origin/gh-pages:$dir/.size-bytes" 2>/dev/null || echo "")
    if ! [[ "$bytes" =~ ^[0-9]+$ ]]; then
      unsized+=("$dir")
      continue
    fi
    ts=$(git cat-file -p "origin/gh-pages:$dir/.deployed-at" 2>/dev/null || echo "1970-01-01T00:00:00Z") # missing: sorts as oldest
    size_of["$dir"]=$bytes
    time_of["$dir"]=$ts
    total=$((total + bytes))
  done

  if [ "${#unsized[@]}" -eq 0 ] && [ "$total" -le "$budget_bytes" ]; then
    echo "previews/ total ${total} bytes is within the ${budget_bytes} byte budget. Nothing to evict."
    exit 0
  fi

  evict=("${unsized[@]}")
  while IFS=' ' read -r _ dir; do
    [ "$total" -le "$budget_bytes" ] && break
    [ -z "$dir" ] && continue
    evict+=("$dir")
    total=$((total - size_of["$dir"]))
  done < <(for d in "${!time_of[@]}"; do echo "${time_of[$d]} $d"; done | sort)

  if [ "${#evict[@]}" -eq 0 ]; then
    echo "previews/ total ${total} bytes exceeds the ${budget_bytes} byte budget, but found nothing evictable."
    exit 1
  fi

  echo "Evicting: ${evict[*]}"
  git rm -r -q --cached --ignore-unmatch "${evict[@]}"
  git commit -q -m "cleanup: evict oldest previews to stay under the gh-pages size budget (${evict[*]#previews/})"
  if git push origin HEAD:gh-pages; then
    for dir in "${evict[@]}"; do
      decommission_comment "${dir#previews/pr-}"
    done
    exit 0
  fi
  echo "Push rejected (attempt ${attempt}); gh-pages moved, retrying."
  sleep $((attempt * 5))
done

echo "Failed to enforce preview budget after 3 attempts."
exit 1
