#!/usr/bin/env bash
# Keeps the gh-pages branch under GitHub Pages' 10GB deploy artifact limit by
# evicting the least-recently-deployed PR previews whenever previews/ grows
# past PREVIEW_BUDGET_BYTES. This caps previews/ regardless of how many PRs
# are open or closed, since organic PR volume alone can (and did) exceed the
# 10GB cap with every PR still open.
#
# Evicted previews aren't gone for good: they regenerate on the PR's next
# push, or by re-running the "PR Preview" workflow. When one is evicted, its
# PR's preview comment is edited so the (now 404ing) links aren't clickable.
#
# Requires: GITHUB_TOKEN, GITHUB_REPOSITORY in the environment.
# Optional: PREVIEW_BUDGET_BYTES (default 8 GiB).

set -euo pipefail

budget_bytes="${PREVIEW_BUDGET_BYTES:-$((8 * 1024 * 1024 * 1024))}"
repo_url="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
export GH_TOKEN="$GITHUB_TOKEN"

git config --global user.name "github-actions[bot]"
git config --global user.email "github-actions[bot]@users.noreply.github.com"

# Strikes the heading and turns the preview comment's links into plain
# (non-clickable) strikethrough text, so reviewers don't click through to a
# 404. Best-effort: a failure here never fails the budget enforcement itself,
# since the eviction (the part that actually frees space) already happened.
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

# Blobless clone: tree listings and file sizes come from commit metadata, and
# the only blob contents we ever fetch are the small .deployed-at markers.
git clone --filter=blob:none --no-checkout --depth 1 --branch gh-pages "$repo_url" "$work_dir"
cd "$work_dir"

for attempt in 1 2 3; do
  git fetch --depth 1 origin gh-pages
  git reset --soft origin/gh-pages
  git read-tree origin/gh-pages

  declare -A size_of=()
  declare -A time_of=()
  total=0
  for dir in $(git ls-tree --name-only origin/gh-pages previews/ 2>/dev/null | grep -E '^previews/pr-[0-9]+$' || true); do
    bytes=$(git ls-tree -r -l origin/gh-pages "$dir" | awk '{sum+=$4} END {print sum+0}')
    # Missing/unreadable timestamp sorts first (oldest), so previews deployed
    # before this script existed are evicted ahead of anything timestamped.
    ts=$(git cat-file -p "origin/gh-pages:$dir/.deployed-at" 2>/dev/null || echo "1970-01-01T00:00:00Z")
    size_of["$dir"]=$bytes
    time_of["$dir"]=$ts
    total=$((total + bytes))
  done

  if [ "$total" -le "$budget_bytes" ]; then
    echo "previews/ total ${total} bytes is within the ${budget_bytes} byte budget. Nothing to evict."
    exit 0
  fi

  evict=()
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

  echo "previews/ exceeds the ${budget_bytes} byte budget; evicting oldest-deployed: ${evict[*]}"
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
