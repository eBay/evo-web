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

Create a new file in `.changeset/` with a unique name (e.g., `word1-word2-word3.md`) with random words in the following format:

```markdown
---
"@package/name": patch | minor | major
"@another/package": patch | minor | major
---

Brief description of the changes
```

**File naming convention:**

- Use random words separated by hyphens in lowercase, like `big-breads-jog.md`

**Version bump types:**

- `patch` - Bug fixes, minor updates (0.0.x)
- `minor` - New features, non-breaking changes (0.x.0)
- `major` - Breaking changes (x.0.0)

**Example changeset file** (`.changeset/big-breads-jog.md`):

```markdown
---
"@ebay/ui-core-react": minor
"@ebay/ebayui-core": minor
"@ebay/skin": minor
---

feat(module): adding a new feature
```

**Package inclusion rules:**

- Include all packages that were directly modified by your changes.
- Do not include packages that were not affected.
- If a package depends on another package that changed, include it only if the changes affect its public API.

**Common package names:**

- `@ebay/skin` - markup CSS/SCSS changes
- `@ebay/ebayui-core` - legacy Marko 5 components
- `@evo-web/marko` - new Marko 6 components
- `@ebay/ebayui-core-react` - legacy React components
- `@evo-web/react` - new React components

### 3. Commit the Changeset File

```bash
git add .changeset/*.md
git commit -m "Add changeset for [feature/fix description]"
```

### 4. Merge to Main

Push your branch and create a PR. Once merged to `main`:

- Changesets bot automatically creates a "Version Packages" PR
- This PR updates package.json versions and CHANGELOG.md files

### 5. Release to npm

Merge the "Version Packages" PR. GitHub Actions will automatically publish updated packages to npm.

## Important Notes

- **Packages version independently** (no monorepo version linking)
- **Breaking changes:** Only allowed in major version releases
- **Changeset required** for all PRs (unless docs-only under `/src/routes/`)
- **Must document breaking changes** clearly in changeset description
