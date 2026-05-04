# 5. Evo React Child Component Composition

**Date:** 2026-04-23

## Status

Accepted

## Context

`@ebay/ui-core-react` uses `React.Children.map` / `findComponent` to introspect children and wire up composite component structures. This API is fragile, order-sensitive, and deprecated by React.

### Alternatives considered

- **`summary={<span />}`** — requires `React.cloneElement` to inject BEM classes into the passed element, which is equally discouraged.
- **`summary={{ children: "", className, ...spanProps }}`** — avoids cloning but forces consumers to pass a plain object instead of JSX, which is poor DX.

## Decision

`@evo-web/react` uses **named sub-components** (compound component pattern) instead of `React.Children` scanning. Shared state is passed via React context from the parent. Sub-components consume only what they need.

```tsx
<EvoDetails size="small" onToggle={handler}>
  <EvoDetailsSummary>
    <EvoDetailsLeading>
      <EvoIconLightbulb16 />
    </EvoDetailsLeading>
    <EvoDetailsLabel>How do I get started?</EvoDetailsLabel>
  </EvoDetailsSummary>
  <EvoDetailsContent>Content</EvoDetailsContent>
</EvoDetails>
```

All sub-components are exported from the package entry point.

## Consequences

### Positive

- More option for developers to customize the layout when possible.
- Better DX with simpler to use component APIs.
- Removes dependency of `React.Children` APIs and `React.cloneElement`.

### Negative

- Child rendering order is the consumer's responsibility — the parent does not enforce it.
- The evo-react API will diverge from evo-marko's attribute tag pattern (`<@summary>`), which is a Marko 6-specific construct with no React equivalent.
- More verbose component APIs
