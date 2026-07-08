# Ephemeral Pipeline Files

These files are generated during a pipeline run as working memory. They are
**not component artifacts** and must not be committed to the repository.

---

## Files to delete before opening a PR

| File                  | Location                               | Why it exists                                                       | Why not to commit                                                                                                        |
| --------------------- | -------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `manifest.json`       | `src/routes/_index/components/<name>/` | Structured translation of contract + spec used by generation skills | Ephemeral runtime memory — the contract and spec are the sources of truth; the manifest is derived from them on each run |
| `gap-report.json`     | `src/routes/_index/components/<name>/` | Log of every inferred or missing field surfaced at Gate 2           | Describes the state of a specific pipeline run, not the component itself; becomes stale immediately after generation     |
| `pipeline-state.json` | `src/routes/_index/components/<name>/` | Tracks step progress for resumability                               | Session state only — meaningless outside the run that created it                                                         |

---

## Files that ARE committed

Everything else the pipeline writes is a real artifact that belongs in the
repository:

| What                                                           | Why it's committed                          |
| -------------------------------------------------------------- | ------------------------------------------- |
| `_contract.md`                                                 | Input — reviewed and approved at Gate 1     |
| `<name>.spec.json`                                             | Input — authoritative design data           |
| `packages/skin/src/sass/<name>/`                               | The component's CSS implementation          |
| `packages/skin/dist/`                                          | Compiled CSS — always rebuilt and committed |
| `packages/evo-marko/src/tags/evo-<name>/`                      | The Marko component                         |
| `packages/evo-react/src/<name>/`                               | The React component                         |
| `src/routes/_index/components/<name>/css+page.marko`           | CSS docs tab                                |
| `src/routes/_index/components/<name>/accessibility+page.marko` | Accessibility docs tab                      |
| `src/routes/_index/components/<name>/+page.marko`              | Overview docs tab                           |
| `src/data/component-metadata.json`                             | Component registry                          |

---

## How to clean up before a PR

```bash
rm src/routes/_index/components/<name>/manifest.json
rm src/routes/_index/components/<name>/gap-report.json
rm src/routes/_index/components/<name>/pipeline-state.json
```

Or check `git status` — if any of these appear as untracked files, do not
stage them.

---

## If you accidentally committed them

Remove them from the branch before merging:

```bash
git rm --cached src/routes/_index/components/<name>/manifest.json
git rm --cached src/routes/_index/components/<name>/gap-report.json
git rm --cached src/routes/_index/components/<name>/pipeline-state.json
git commit -m "chore: remove ephemeral pipeline files"
```

Consider adding these paths to `.gitignore` to prevent it happening again:

```
src/routes/_index/components/*/manifest.json
src/routes/_index/components/*/gap-report.json
src/routes/_index/components/*/pipeline-state.json
```
