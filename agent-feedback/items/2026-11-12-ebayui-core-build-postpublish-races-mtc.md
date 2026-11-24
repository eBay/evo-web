---
type: dx
impact: low
effort: low
site: packages/ebayui-core/package.json › scripts.build
---

# Stop ebayui-core's build from deleting `dist` while `mtc` writes it

`build` runs `mtc` and `node scripts/check-postpublish` in parallel under `concurrently`. `check-postpublish` runs `scripts/postpublish.js`, which deletes `dist`, the directory `mtc` is emitting into. When the two overlap, `postpublish` fails with `ENOTEMPTY, Directory not empty: '…/packages/ebayui-core/dist'`, and `--kill-others-on-fail` fails the whole build. Otherwise `mtc`'s output can be left partly deleted. Run `check-postpublish` before `concurrently`, or make it check `marko.json` without deleting `dist`. Checked: ebayui-core only; evo-marko's build runs `mtc` alone.

Check: in `packages/ebayui-core`, keep writing into `dist` while the script runs, as `mtc` does: `(end=$((SECONDS+5)); while [ $SECONDS -lt $end ]; do mkdir -p dist/c$RANDOM; done) & sleep 0.3; node scripts/check-postpublish`. It throws `ENOTEMPTY` from `rmSync` on `dist`. A real `mtc` run overlapping `check-postpublish` in the same checkout failed the same way.
