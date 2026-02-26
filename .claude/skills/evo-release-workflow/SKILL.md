---
name: evo-release-workflow
description: Step-by-step guide for versioning and releasing packages using Changesets in the evo-web monorepo.
---

# Evo-Web Release Workflow

Step-by-step guide for versioning and releasing packages using Changesets.

## Changesets Workflow

### 1. Make Changes to Packages

Edit code in one or more packages as needed.

### 2. Create a Changeset

```bash
npm run change
```

This will prompt you to:

- Select which packages changed
- Specify bump type (major/minor/patch)
- Write a summary of the changes

### 3. Commit the Changeset File

```bash
git add .changeset/*.md
git commit -m "Add changeset for [feature/fix description]"
```

### 4. Merge to Main

Push your branch and create a PR. Once merged to `main`:

- Changesets bot automatically creates a "Version Packages" PR
- This PR updates package.json versions and CHANGELOG.md files

### 5. Trigger Release

Merge the "Version Packages" PR to trigger:

```bash
npm run release
```

This publishes updated packages to npm.

## Important Notes

- **Packages version independently** (no monorepo version linking)
- **Breaking changes:** Only allowed in major version releases
- **Changeset required** for all PRs (unless docs-only)
- **Must document breaking changes** clearly in changeset description
