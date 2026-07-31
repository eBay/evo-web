# Contributing

This page contains instructions and guidelines for anybody contributing code to the evo-web project.

## Packages

Currently each package has their own contributing guide.

- [Skin](./packages/skin/CONTRIBUTING.md)
- [Ebayui-Core](./packages/ebayui-core/CONTRIBUTING.md)
- [Ebayui-Core-React](./packages/ebayui-core-react/CONTRIBUTING.md)

## AI-Assisted Development

Evo Web uses [Claude Code](https://claude.ai/claude-code) for AI-assisted development. The repo includes a set of skills under `.claude/skills/` that give Claude domain expertise specific to this codebase.

To create or improve skills, use the **skill-creator** plugin. Install it locally via Claude Code:

```
/plugins
```

Then invoke it to build a new skill:

```
/skill-creator
```

See [`.claude/README.md`](./.claude/README.md) for full details on the skills architecture, conventions, and how to contribute new skills.

## Releases

For releases, evo-web uses changesets.

For each commit that should be associated with a release, run `pnpm change` in the root.
Pick which package and what version (`major`, `minor`, `patch`) and check in the generated `.changeset` file.
When the changeset files are merged to `main` branch, an automatic PR will be generated.
Merging this PR will cause a version bump and publishing of the packages which are targeted by the changeset.

### How to merge the auto `ci: release` PR

The automated release PR opened by Changesets (title `ci: release`, from `changeset-release/main` into `main`) contains
only version bumps, changelog updates, and removal of `.changeset` files. All feature work is already in `main`
before this PR opens.

**Merge rules:**

- Use **"Squash and merge"** or regular merge (if available) for the `ci: release` PR.
- Do **not** use "Rebase and merge" for this PR.
- Do **not** edit the release PR contents by hand; if something is wrong, fix it on `main` and let Changesets regenerate.

### Post-release maintenance

After every major and minor release, take the opportunity to upgrade any outdated dependencies and devDependencies (run `pnpm outdated` to identify them). Except for major version upgrades, the version in `package.json` should reflect the last known working version, not the version you are upgrading to.

### Icon releases

When updating icons across the eBay UI ecosystem, follow this coordinated process:

1. Include all affected packages in the changeset for the icon PR, with the appropriate version bump (`patch`, `minor`, or `major`).
2. Commit the icon files and changeset file together, then open a PR.
3. After the icon PR is merged, Changesets automatically generates a release PR consolidating the icon updates.
4. Review the release PR for accuracy, then squash and merge it to publish the updated packages to NPM.
