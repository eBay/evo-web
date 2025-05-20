# Contributing

This page contains instructions and guidelines for anybody contributing code to the evo-web project.

## Packages

Currently each package has their own contributing guide.

- [Skin](./packages/skin/CONTRIBUTING.md)
- [Ebayui-Core](./packages/ebayui-core/CONTRIBUTING.md)
- [Ebayui-Core-React](./packages/ebayui-core-react/CONTRIBUTING.md)

## Releases

For releases, evo-web uses changesets. For each commit that should be associated with a release, run `npm run change` in the root. Pick which package and what version (`major`, `minor`, `patch`) and check in the generated `.changeset` file.
When the changeset files are merged to `main` branch, a automatic PR will be generated. Merging this PR will cause a version bump and publishing of the packages which are targeted by the changeset.
