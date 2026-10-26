---
source: observed-failure
disposition: open
---

# Consume a local `@evo-web/marko` as a packed tarball, never as a `file:` symlink

To try an unreleased `evo-video` in a downstream Marko 5 app, I installed
`"@evo-web/marko": "file:../evo-web/packages/evo-marko"`. npm resolves a `file:`
directory to a **symlink**, so when the consumer ran its own `mtc`, the type
checker treated the linked package as project source and wrote back through the
link: 29 tracked `.marko` files under `packages/evo-marko/src/tags/` were
rewritten in place (`evo-video/index.marko` went 792 lines to 547, its exported
`Input` interface replaced by compiled output) and 29 `.d.marko` files appeared
next to sources that do not keep them. Nothing warned; it surfaced only because
a later `git status` looked wrong, and recovery needed
`git checkout -- packages/evo-marko/` plus deleting the untracked files. The
general rule: a consumer's build tools have write access to whatever a `file:`
dep points at, so local integration must go through an artifact instead —
`npm pack` the package (after `npm run build` and the `./src/` to `./dist/`
`marko.json` rewrite that `scripts/prepublish` performs) and install the
resulting `.tgz`. Running `mtc` inside evo-web itself is unaffected and stays
the correct way to build.

Disposition: open — maintainers, raised 2026-09-24. Mechanically checkable, so
it likely belongs in a hook rather than prose: fail if any
`node_modules/@evo-web/*` entry is a symlink resolving inside the repo.
