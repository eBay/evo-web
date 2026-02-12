# 2. Percy Automation

Date: 2026-02-12

## Status

Accepted

## Context

We need automated visual regression testing to catch unintended UI changes. Previously, Percy snapshots were executed manually with ~990 snapshots total, which was paused due to high costs and slow execution times. Running the full snapshot suite for every PR was not sustainable.

## Decision

We will automate Percy visual regression testing through GitHub Actions with intelligent partial builds:

1. **Partial builds for PRs**: Execute only snapshots related to changed files by:
   - Detecting changed components from git diff against main branch
   - Using the existing `component-metadata.json` mappings (component and submodules fields) to determine snapshot dependencies
   - Triggering full builds only when global files change (tokens, variables, mixins)

2. **Full builds for main commits**: Execute and auto-approve the complete snapshot suite on the main branch

3. **Simplified dependency tracking**: Re-use existing component metadata instead of automated code analysis (e.g., mixin dependency detection), as the additional complexity provides minimal benefit

## Consequences

**Positive:**
- Significantly reduced Percy build times and costs for PRs by running only relevant snapshots
- Automated workflow reduces manual effort and human error
- Catches visual regressions before merge
- Full coverage maintained on main branch

**Negative:**
- Dependency mapping must be manually maintained in `component-metadata.json`
- Risk of missing visual regressions if dependencies are not accurately mapped
- Global changes (tokens, variables, mixins) still trigger full builds
