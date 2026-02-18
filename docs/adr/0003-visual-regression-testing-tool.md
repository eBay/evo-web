# 3. Visual Regression Testing Tool

Date: 2026-02-12

## Status

Accepted

## Context

We need visual regression testing to catch unintended UI changes across our component library. With approximately 990 visual snapshots across our components, we needed to evaluate different visual regression testing tools to determine the best fit for our needs.

The primary options considered were:

- **Percy**: A visual testing platform with cross-browser support and cloud infrastructure
- **visual-html**: An eBay open-source tool for visual regression testing (https://github.com/eBay/visual-html)
- **Vitest snapshot testing**: Built-in snapshot capabilities in our existing test framework

## Decision

We will use Percy for visual regression testing.

Key factors in this decision:

1. **Existing infrastructure**: We already have an enterprise Percy plan at eBay, eliminating procurement and setup overhead
2. **Cross-browser testing**: Percy provides testing across multiple browsers (Chrome, Firefox, Safari, Edge), which visual-html does not natively support
3. **Accurate**: Percy has been found to be accurate in finding differences between snapshots. Some other tools tend to show a lot of false positive
4. **Cloud infrastructure**: Percy's cloud-based service provides a good UI to quickly see the visual differences and approve the build.

## Consequences

**Positive:**

- Cross-browser visual regression coverage without additional infrastructure
- Leverages existing eBay Percy enterprise plan
- No need to maintain custom visual regression infrastructure
- Better collaboration through Percy's PR integration and review UI

**Negative:**

- Ongoing costs based on snapshot count (~990 snapshots)
- Requires careful cost management through partial builds (only running snapshots for changed components)
- Dependency on external service rather than an internal eBay tool
- Must trigger full builds when global files change (tokens, variables, mixins)
