# 3. Visual Regression Testing Tool

Date: 2026-02-12

## Status

Accepted

## Context

We need visual regression testing to catch unintended UI changes across our component library. We have approximately 990 snapshots, and Percy snapshots were previously executed manually. That process was paused because full runs were costly and slow, and running the full suite for every PR was not sustainable.

The primary options considered were:

- **Percy**: A visual testing platform with cross-browser support and cloud infrastructure
- **visual-html**: An eBay open-source tool for visual regression testing (https://github.com/eBay/visual-html)
- **Vitest snapshot testing**: Built-in snapshot capabilities in our existing test framework

## Decision

We will use Percy for visual regression testing and run it through automated GitHub Actions with partial builds for PRs and full builds on `main`.

Implementation approach:

1. **Partial builds for PRs**: Run snapshots only for components affected by changed files, and run full builds only when global files change (tokens, variables, mixins).
2. **Full builds on `main`**: Run and auto-approve the complete snapshot suite for baseline coverage.
3. **Metadata-based dependency tracking**: Reuse `component-metadata.json` mappings (including component/submodule relationships) instead of adding higher-complexity automated dependency analysis.

## Consequences

**Positive:**

- Existing Percy account avoids procurement and setup overhead
- Cross-browser and responsive coverage out of the box, including mobile browser testing
- Accurate visual diffing with fewer false positives than alternatives
- Partial PR builds reduce build time and cost by running only snapshots impacted by changed files
- Full builds on `main` preserve complete baseline coverage
- Automation reduces manual effort and human error
- Cloud UI and PR integration improve collaboration and review speed
- Active product maintenance should improve long-term scalability and automation
- No need to maintain custom visual regression infrastructure

**Negative:**

- Ongoing costs based on snapshot count (~990 snapshots), even with partial build optimization
- Dependency mapping in `component-metadata.json` must be kept accurate and maintained
- Risk of missing visual regressions when component dependencies are incomplete or stale
- Dependency on external service rather than an internal eBay tool
- Must trigger full builds when global files change (tokens, variables, mixins)
