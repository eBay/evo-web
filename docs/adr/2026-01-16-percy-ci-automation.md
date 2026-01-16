# Percy Snapshots CI/CD Automation

## Context

Visual regression testing is critical for maintaining the consistency and quality of Skin. Previously, Percy snapshot testing relied on a manual workflow that had several issues:

- **Manual execution**: Developers had to remember to run Percy tests locally before pushing changes
- **Gulp-based scripts**: Required `gulpfile.js` with complex logic to orchestrate snapshot builds
- **Separate build phase**: Required running `npm run build:snapshots` before Percy could execute
- **No PR integration**: Percy results lived in a separate dashboard with no GitHub workflow integration
- **External contributor barrier**: Contributors without Percy tokens couldn't validate visual changes

The old workflow required developers to:

1. Build a separate Storybook bundle (`.storybook-percy`)
2. Run Gulp tasks that wrapped Percy CLI commands
3. Manually specify which components to test via `--stories` flag
4. Check Percy dashboard separately from the PR review process

This manual approach was introduced before the Percy team implemented Storybook integration and led to missed visual regressions and slowed down the contribution workflow.

Additionally, running full Percy builds for every change was costly and time-consuming. With ~180 stories tested at 4 viewport widths (320px, 512px, 768px, 1280px), each full build generates over 900 snapshots and takes approximately 25 minutes. Most PRs only affect 1-3 components, making full builds wasteful. We needed intelligent partial builds to test only affected components, reducing both cost and build time while maintaining comprehensive coverage.

## Decision

We automated Percy snapshot testing by replacing the Gulp-based manual workflow with a GitHub Actions CI/CD pipeline. The implementation includes three main components:

### 1. GitHub Actions Workflow

Created an automated workflow with two jobs:

**PR Job** - Runs on every pull request:

- Automatically detects which components changed
- Executes partial builds (only changed components) or full builds (global changes)

**Main Branch Job** - Runs after merge to main:

- Always executes full snapshot suite (all ~180 stories)
- Auto-approves builds to update baseline images
- Ensures baseline stays synchronized with production code

### 2. Change Detection Action

Built a custom GitHub Action that determines which components need testing:

**Detection logic:**

- Analyzes `git diff` between PR branch and main
- Checks if global files changed (tokens, variables, mixins, Storybook config) → triggers full build
- Extracts component directories from changed CSS files in `packages/skin/dist/`
- Detects direct changes to `.stories.js` files
- Uses `component-metadata.json` to find transitive dependencies (e.g., if `button` changes and `cta-button` depends on it, both are tested)
- Imports story files to extract actual story titles instead of guessing from directory names
- Outputs comma-separated component list (e.g., "Button,Icon,Alert Dialog") or "all"

### 3. Simplified Percy Scripts

Removed Gulp dependency and simplified npm scripts with modern Percy command line with Storybook integration.

### Why GitHub Actions over Node.js Scripts?

We evaluated multiple approaches for automating Percy:

**Option 1: Keep Gulp scripts in CI** - Rejected because it uses an outdated tool that was only used to detect stories and can now be replaced with Percy commands.

**Option 2: Custom Node.js orchestration scripts** - Rejected because outputting results to GitHub Actions requires using stdout, making it hard to debug the script in case of issues.

**Option 3: Weekly Percy builds with GitHub Actions** - Rejected because it doesn't directly correlate changes with PRs, and Skin might release with visual change issues.

**GitHub Actions in a PR wins because:**

- Explicitly sets action results by calling GitHub Actions APIs
- Superior error logging with step-by-step visibility
- Transparent execution visible in GitHub UI
- Built-in concurrency control and secret management
- Declarative workflow configuration
- Easier for contributors to understand what's happening

## Consequences

### Easier

- **Automated coverage**: Every PR affecting Skin components automatically receives visual regression testing without manual intervention
- **Faster feedback**: Developers see Percy results directly in PR checks - no need to visit separate dashboard
- **Cost optimization**: Partial builds reduce snapshot count by 80-90% for typical PRs (3-8 minutes vs 25 minutes for full builds)
- **Better debugging**: GitHub Actions UI provides clear, step-by-step logs making it much easier to diagnose failures compared to script output
- **External contributions**: Contributors without Percy tokens can submit visual changes with confidence - Percy runs automatically in CI
- **Reliable baselines**: Main branch auto-approval ensures baseline images always match what's in production
- **Simpler codebase**: Removed 34 lines of Gulp code and an entire dependency, reducing maintenance burden
- **Zero manual runs**: Developers no longer need to remember to run Percy locally before pushing
- **Clear workflows**: PERCY-FAQ.md proactively answers common questions before developers need to ask

### More Difficult

- **CI dependency**: Percy testing now requires GitHub Actions to be operational (can't test if GitHub is down)
- **Build wait time**: PRs must wait for Percy builds to complete before merging (though partial builds mitigate this to 3-8 minutes for most PRs)
- **Token management**: Percy token must be configured in GitHub Secrets (one-time setup, but requires repository admin access)
- **Maintainer approval**: Visual changes require a maintainer to review and approve Percy builds before PR can merge (intentional safeguard, but adds approval step)
- **Snapshot instability**: Risk of visual snapshots being flaky or inconsistent, causing friction for contributors when legitimate code changes trigger false positives.

### Expected Results

- **100% automation**: All Skin PRs receive automated visual regression testing
- **Time savings**: Average Percy build time reduced from 25 minutes (full, 900+ snapshots) to 3-8 minutes (partial) for typical PRs
- **Cost reduction**: Partial builds test only affected components (10-80 snapshots) instead of all 900+ snapshots, reducing Percy costs by 80-90% per PR
- **Simplified workflow**: Single component changes: ~3-5 minutes, multiple components: ~5-10 minutes, global changes: ~25 minutes
- **Better visibility**: Percy status visible as PR check with direct link to dashboard
- **Cleaner codebase**: Removed gulpfile.js and build:snapshots script
- **Inclusive contributions**: External contributors can participate in visual testing without local Percy setup
