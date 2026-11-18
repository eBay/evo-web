---
name: evo-safe-coding
description: Safe coding rules for any code, docs or story change in evo-web, by a person in an editor or by an unattended agent such as the Copilot coding agent. Covers when to proceed and when to stop, how to match each package's style, which checks to run for the files changed, and what to put in the PR.
---

# Safe coding in evo-web

Correctness and the house style of each package come before speed. A reviewer reads every PR, so a wrong guess that is written down costs less than a session that stops and waits.

## Pick the mode

- **Interactive.** A person is in the conversation. Ask before HIGH risk work, then proceed.
- **Unattended.** Copilot coding agent, CI, or nobody to answer. Never stop to ask. Pick the most conservative reading of the issue, write the assumption down, finish the work and open the PR. The PR review is where a person approves it.

If you can't tell, treat the session as unattended.

## Rate the risk

| Risk   | What counts                                                                                                                 | Interactive               | Unattended                                                                                                                |
| ------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| LOW    | Consumers see no change, or only the fix the issue asks for                                                                 | Proceed                   | Proceed                                                                                                                   |
| MEDIUM | Adds something consumers can use, changes what they see or how it behaves, or changes build and tooling config              | Proceed, list assumptions | Proceed, list assumptions in the PR                                                                                       |
| HIGH   | Removes or renames anything consumers rely on, adds a dependency, changes CI workflows or release, or goes beyond the issue | Ask first                 | Open a draft PR with a plan and failing tests, or the smallest part that adds without breaking. Mark it `NOT MERGE-READY` |

Before touching public classes, selectors or exports, read the release strategy (additive minor or breaking major) from the linked ADR or issue and state it in the PR.

## Never, in either mode

- Push to `main`, force-push, merge, or touch release PRs (`changeset-release/main`).
- Edit generated files by hand. Regenerate them with the script that owns them.
- Add or upgrade dependencies.
- Disable, skip or loosen a lint rule, type check or test to get green.
- Run `npm run change`, `npm run version` or `npm run release`. They prompt or publish. Write the changeset file by hand instead.
- Fix things the issue didn't ask for. File them in `agent-feedback/` (see the `evo-file-item` skill).

## Match the package

Before the first edit:

1. Name the package from the path and apply its rules from `AGENTS.md`: Marko 6 syntax in `evo-marko`, BEM and `packages/skin/STYLEGUIDE.md` in `skin`. `evo-react` uses React 19 APIs: `use()`, `useId`, native `ref`. `ebayui-core-react` keeps pre-19 patterns (`forwardRef` through `common/component-utils/forwardRef.tsx`, `useContext`) even though its peer dependency is React 19. Don't bring 19-only APIs into it.
2. Open the closest existing component in the same package and copy its file layout, prop naming, test setup and story shape. If two components disagree, follow the newer one (`git log -1 -- <dir>`).
3. When a change crosses layers, start at Skin, then Marko, then React, as `AGENTS.md` describes.

## Write the change

- Make the smallest diff that solves the issue. Look for code to delete before adding any.
- Find the cause of a bug and fix it there. A guard that hides the symptom is not a fix. Search for the same pattern in sibling components and list other hits in `agent-feedback/` instead of fixing them here.
- Keep names, formatting and comments as they are unless the issue is about them.
- No new abstraction unless you can name the second caller that needs it today.
- Tests render the component the way a consumer does and check what a user observes: text, roles, ARIA state, focus, emitted events with their payload. A test that would still pass if the component rendered nothing is not a test.

## Verify only what changed

CI runs the full `npm run build` on every PR, so run the checks for the files you touched. Pick every row that matches.

| Changed                                                                              | Run                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docs only: `*.md`, `src/routes/**`, `agent-feedback/`, `agent-lessons/`              | `npx prettier --check <files>`. Add `npm run test:site` if `src/data/**` changed. No build.                                                                                                                                           |
| Stories in `skin` or `evo-react`                                                     | `npm run lint -w <package>`. For `evo-react`, add `npm run type:check -w packages/evo-react`.                                                                                                                                         |
| Stories in `ebayui-core`, `evo-marko` or `ebayui-core-react`                         | The checks for component code below. Tests in these packages import the stories.                                                                                                                                                      |
| Component code in one framework package                                              | `npm run lint -w <package>`, the type check, and `npm test -w <package> -- <component dir>`, for example `npm test -w packages/evo-marko -- src/tags/evo-button`. Run the whole package's tests if `common/` or shared utils changed. |
| Skin SCSS or markup                                                                  | `npm run build -w packages/skin` and commit the regenerated `dist/`, because CI fails on uncommitted files. If a class name or markup changed, also run the tests of the framework components that use it.                            |
| Root config, `package.json`, build scripts, tokens, icons, or more than two packages | Full `npm run build`.                                                                                                                                                                                                                 |

The type check is `npm run type:check -w <package>` in the React packages. `evo-marko` runs `mtc` inside `lint`. In `ebayui-core`, run `npx mtc` from the package directory.

Read the output yourself. A command that didn't run is not a pass. If a check can't run in your environment, say so in the PR.

Add a changeset in `.changeset/` for every change to a published package (`patch` for fixes, `minor` for additions, `major` for breaking changes). Skip it for docs, stories, tests, `src/routes/` and agent files. None of them ship in the published packages.

## Hand off

The PR description carries what a reviewer needs:

- `Fixes #<issue>`
- What changed and why, in two or three sentences
- Assumptions made
- Risk, and the reason for it
- What was left out on purpose
- Checks run with their result, and why the full build was skipped
- Questions for the reviewer

End with one status: `READY FOR REVIEW`, `NOT MERGE-READY: <what is left>`, or, in interactive mode only, `BLOCKED: <question>`.

Before finishing, file anything out of scope in `agent-feedback/` and any correction to how you worked in `agent-lessons/`.
