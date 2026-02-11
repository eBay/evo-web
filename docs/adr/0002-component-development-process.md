# 2. Component Development Process

**Date:** 2026‑02‑10

## Status

Accepted

## Context

For years, the team has followed a de facto ground-up approach when building components: starting with semantic HTML and CSS, validating accessibility and interaction requirements, and then layering in behavior and framework-specific implementations. This practice has contributed to strong accessibility outcomes, framework agnosticism, and long-term maintainability.

Recently, we have observed a tendency to begin directly within frameworks (e.g., Marco, React) for speed or convenience. While efficient in the short term, this shift risks reducing accessibility transparency, introducing framework-specific assumptions too early, and making components harder to reason about outside of a specific implementation.

To preserve the strengths of our established practice and prevent further drift, we are formalizing the default authoring approach for all new components.

## Decision

We will adopt the following **ground‑up, accessibility‑first component development process** for all new components:

1. **Start with semantic HTML and CSS**

   * Define structure, design hooks, and theming.
   * Prefer native elements and web standards where appropriate.

2. **Document accessibility and interaction requirements early**

   * Focus management (where applicable)
   * Keyboard support
   * Screen reader behavior
   * States, variants, and edge cases
   * Provide prose explanations that are understandable without requiring JavaScript knowledge.

3. **Add minimal JavaScript only when needed**

   * Support required interaction and state management.
   * Avoid premature framework abstractions.

4. **Validate the foundation before framework implementations**

   * Review semantics, styling, and accessibility behavior.
   * Confirm cross‑browser expectations.

5. **Implement framework‑specific versions thereafter**

   * Create Marco, React, or other wrappers that preserve the validated foundation and documented behavior.

This process serves as the default authoring model unless an explicit exception is documented in a separate ADR.

## Consequences

This approach ensures:

* **Accessibility** is treated as first‑class from the start.
* **Transparency** for designers, accessibility partners, and non‑framework consumers.
* **Durability** across frameworks and APIs.
* **Consistent behavior** documented and validated before abstraction.

Trade‑offs include slower initial implementation velocity and potential duplication across vanilla and framework versions. However, upholding accessibility, consistency, and long‑term maintainability is prioritized.
