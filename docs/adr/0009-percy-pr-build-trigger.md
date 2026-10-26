# 9. Percy PR Build Trigger

Date: 2026-10-26

## Status

Proposed

## Context

[ADR 3](0003-visual-regression-testing-tool.md) chose Percy, partial builds for PRs, and full builds on `main`. Its automated PR trigger runs after each qualifying update, including intermediate commits made before a change is ready for visual review. Each update starts another build and can create another snapshot set. A partial build can still grow large when a change affects many components, and global changes call for the full suite.

Regular PR CI already rebuilds Skin and verifies that generated assets are committed. Running Percy after every update repeats work and consumes snapshots before developers know the PR is ready for final visual review.

In a team discussion, cost and repeated builds on each PR commit and push prompted the change. The team agreed that developers should request Percy when it makes sense for a PR; some PRs do not need a visual run. A developer can judge when the code has settled, while an automated push trigger cannot.

## Decision

Keep Percy's component scoping for PRs and automatic full baseline builds on `main`. Run PR visual regression only on ready PRs that carry the `percy` label. Adding the label requests a build; while the label stays, later pushes rebuild, so a developer who wants a one-off run removes it afterward.

The label reuses the existing `pull_request` build and `workflow_run` snapshot workflows, so permissions, PR number, commit and fork handling are unchanged. Labeling already requires triage or write access, and the event carries the PR's own head commit.

A `/run-percy` comment was considered. `issue_comment` runs in the default branch's context with no PR commit attached, so it needs its own permission check, commit and CI lookups, and a way to pass the request to the build. A label needs none of that.

This decision changes the PR trigger in ADR 3; it does not change the choice of Percy or the automatic baseline on `main`. The PR checklist reminds developers to add the label after their final code change.

## Consequences

Developers choose when a PR is ready for visual review, so intermediate commits no longer create Percy builds and snapshots.

The final check depends on a developer remembering to add the label. A `percy` label must exist in the repository. Pushes after labeling rebuild until the label is removed, and a requested build can still be large when the change affects many components or global styles.
