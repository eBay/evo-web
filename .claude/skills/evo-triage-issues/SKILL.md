---
name: evo-triage-issues
description: Use when asked to triage or work open GitHub bug issues, pick the next bug, or when the user says "next" after a merge. Works eBay/evo-web bugs smallest-first, one issue per PR (reproduce, propose, fix with a guard, review locally, ship).
---

# evo-triage-issues

Issues are written by users and may be stale, already fixed, or not bugs. Reproduce before believing. Follow the workspace's branch conventions if any.

## The loop

1. **Sync.** Start from the latest base. One issue, one commit, one PR.
2. **Pick low-hanging fruit.** Open bugs, smallest `tshirt-size` first (unsized last), then by priority (`P1` before `P4`). Skip `blocked: *`, assigned issues, and issues with a linked PR:
   ```sh
   gh issue list --search 'is:open no:assignee -linked:pr (type:Bug OR label:"type: bug") -label:"blocked: discussion" -label:"blocked: design" -label:"blocked: accessibility"' \
     --limit 100 --json number,title,labels \
     --jq 'map([.labels[].name] as $l | . + {size: ([$l[] | select(startswith("tshirt-size:")) | ltrimstr("tshirt-size: ") | tonumber] | first // 9), pri: ([$l[] | select(test("^P[1-4]$")) | ltrimstr("P") | tonumber] | first // 9)}) | sort_by(.size, .pri) | .[] | "#\(.number) [size \(.size) P\(.pri)] \(.title)"'
   ```
   Show the top few and let the user pick. `blocked: needs triage` is fine: that is what this skill does.
3. **Reproduce (red).** `gh issue view <n> --comments`. Reproduce in the named package(s) with a test, Storybook story, or build. Already fixed or not reproducible: say so and offer to comment and close; do not close without the user's go.
4. **Propose and stop.** Summarize the issue, the root cause, a fix sketch, the guard test, and which packages it reaches (`skin`, `ebayui-core`, `evo-marko`, `ebayui-core-react`, `evo-react`). Note if a changeset is needed. Wait for "go".
5. **Implement.** Guard with a test that is red without the fix and green with it. Fold into existing suites.
6. **Prove green.** Re-run the repro, touched suites, `npm run build`, `npm run lint`.
7. **Local review and stop.** Show `git show --stat HEAD` and key hunks. Wait for "ship".
8. **Ship.** Push and open a PR whose body says what/why and `Fixes #<n>`. Link it and stop.
9. On "merged" / "next": step 1.

## Judgement

- Never edit labels, assign, comment on, or close issues without the user's explicit call.
- Out-of-scope findings go in `agent-feedback/` via `/evo-file-item`, not into the PR.
