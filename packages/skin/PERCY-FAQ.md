# Percy Visual Regression Testing - FAQ

## What is Percy?

Percy is a visual testing platform that captures screenshots of UI components and compares them against baseline images to detect visual changes. It helps catch unintended visual regressions before they reach production.

## Why does my PR have a Percy check?

When you modify Skin components (CSS, tokens, or Storybook configuration), Percy automatically runs to ensure your changes don't introduce unintended visual regressions. This is a required check that must pass before your PR can be merged.

## How does Percy know which components to test?

We map all the modules dependencies in the [component-metadata.json](../../src/data/component-metadata.json) file and based on the files that changes we build the stories that needs snapshots.

- **Component-specific changes**: Only tests the components you modified (e.g., if you change `button.scss`, only Button stories are tested)
- **Global changes**: If you modify shared files like tokens, variables, or mixins, all components are tested
- **Non-component changes**: If you only change documentation or non-Skin files, Percy is skipped entirely

## How long does Percy take?

- **Partial builds** (single component): 3-5 minutes
- **Partial builds** (multiple components): 5-10 minutes
- **Full builds** (all components): 25 minutes

Build time depends on the number of stories being captured and Percy's current load.

## What if Percy finds differences?

When Percy detects visual differences, it means your changes altered the visual appearance of components. This could be:

**Intentional changes**: You meant to change how the component looks

- Action: A maintainer will review the changes in Percy dashboard and approve the build

**Unintended regressions**: Your changes accidentally affected other components or states

- Action: Review the diffs, fix the issues, and push an update to the PR

## How do I view Percy results?

1. Go to your PR on GitHub
2. Scroll to the checks section at the bottom
3. Click on "Details" next to the Percy check
4. This will take you to the Percy dashboard where you can see:
    - All captured snapshots
    - Visual diffs highlighting what changed
    - Side-by-side comparisons of before/after

## How do I approve Percy changes?

Only maintainers with Percy access can approve builds. As a contributor:

1. Review the Percy results yourself
2. Confirm the visual changes are intentional
3. Request review from a maintainer
4. The maintainer will review and approve the Percy build
5. Once approved, the Percy check will pass

## Can I skip Percy for my PR?

No, Percy is a required check for PRs that modify Skin components. However, Percy automatically skips if your PR doesn't touch any Skin files.

If you're making changes that shouldn't require visual testing (like internal refactoring that doesn't change output), discuss with a maintainer about the best approach.

## What triggers a full Percy run vs partial?

**Full run (all ~180 stories)**:

- Changes to `packages/skin/src/tokens/`
- Changes to `packages/skin/src/sass/global/`
- Changes to `packages/skin/src/sass/variables/`
- Changes to `packages/skin/src/sass/mixins/`
- Changes to `packages/skin/.storybook/`

**Partial run (only affected components)**:

- Changes to specific component directories like `packages/skin/src/sass/button/`
- Changes to component stories

## How are baselines updated?

When your PR is merged to the main branch:

1. Percy runs automatically with all snapshots
2. The build is auto-approved
3. These become the new baseline images for future PRs

This ensures the baseline always reflects what's in production.

## What if Percy keeps failing?

Common issues and solutions:

**"Percy token not found"**

- This is a CI configuration issue - contact a maintainer
- They need to ensure `PERCY_TOKEN` is set in GitHub Secrets

**"Build timed out"**

- Percy may be experiencing issues - check [Percy status page](https://status.percy.io/)
- Try re-running the workflow

**"No snapshots captured"**

- The detection script may not have found any changed components
- Verify your changes are in `packages/skin/src/sass/` or related directories

**"Build pending for too long"**

- Check the Percy dashboard for the build status
- If it's stuck, contact a maintainer to restart it

## Can I run Percy locally?

Internal contributors can run Percy locally:

```bash
# Set Percy token (one-time setup)
export PERCY_TOKEN=[TOKEN_FROM_PERCY_DASHBOARD]

# Run Percy for specific components
cd packages/skin
export STORIES="Button,Icon"
npm run snapshots

# Or run all components
npm run snapshots:all
```

External contributors cannot run Percy locally but it runs automatically in CI for all PRs.

## What are the snapshot widths?

Percy captures each story at 4 different viewport widths to test responsive behavior:

- 320px (mobile)
- 512px (large mobile/small tablet)
- 768px (tablet)
- 1280px (desktop)

Each story generates 4 snapshots, one for each width.

## Does Percy test accessibility?

No, Percy only does visual testing. For accessibility testing, refer to the other testing sections in the CONTRIBUTING.md file.

## How much does Percy cost?

Percy is paid for by the eBay team. Contributors don't need to worry about costs. However, we optimize builds using partial snapshots to keep costs reasonable while maintaining good coverage.

## Where can I learn more?

- [Percy Documentation](https://www.browserstack.com/docs/percy)
- [Percy Dashboard](https://percy.io/f1364dca/eBay-Skin)
- Skin CONTRIBUTING.md - Visual Regression Testing section
- Ask questions in PR comments or team channels

## Who maintains the Percy integration?

The eBay team maintains the Percy integration. If you have issues or questions:

1. Check this FAQ
2. Check the CONTRIBUTING.md documentation
3. Ask in your PR comments
4. Reach out to maintainers in team channels
