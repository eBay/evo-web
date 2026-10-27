# 9. Percy PR Build Trigger

Date: 2026-10-26

## Status

Proposed

## Context

[ADR 3](0003-visual-regression-testing-tool.md) chose Percy, partial builds for PRs, and full builds on `main`. Its automated PR trigger runs after each qualifying update, including intermediate commits made before a change is ready for visual review. Each update starts another build and can create another snapshot set. A partial build can still grow large when a change affects many components, and global changes call for the full suite.

Regular PR CI already rebuilds Skin and verifies that generated assets are committed. Running Percy after every update repeats work and consumes snapshots before developers know the PR is ready for final visual review.

In a team discussion, cost and repeated builds on each PR commit and push prompted the change. The team agreed that developers should request Percy when it makes sense for a PR; some PRs do not need a visual run. A developer can judge when the code has settled, while an automated push trigger cannot.

## Decision

Keep Percy's component scoping for PRs and automatic full baseline builds on `main`. Run PR visual regression when a developer with write access comments `/run-percy` on an open, ready PR targeting `main`, after CI passes for its current commit.

The request starts a build of GitHub's PR merge result. That build uses the committed Skin assets, detects the affected components, builds Storybook, and passes it to Percy. Percy takes scoped snapshots unless a global change calls for a full build. The result is attached to the requested commit; another code change requires another request and review. The PR checklist reminds developers to request Percy after their final code change.

A PR label is not the trigger. It would require a dedicated label and removing and adding it again for another run. Each `/run-percy` comment instead leaves a separate, dated request in the PR discussion.

The workflow change is in [PR #1081](https://github.com/eBay/evo-web/pull/1081). This decision changes the PR trigger in ADR 3; it does not change the choice of Percy or the automatic baseline on `main`.

## Consequences

Developers choose when a PR is ready for visual review, so intermediate commits no longer create Percy builds and snapshots. The PR comment records when the check was requested. The Percy workflow also avoids a second Skin rebuild that CI has already performed.

When visual review is needed, the final check depends on a developer remembering to request and review it. A later commit needs another Percy run, and a requested build can still be large when the change affects many components or global styles. The existing PR checklist makes the manual step visible, but the check itself runs only when requested.
