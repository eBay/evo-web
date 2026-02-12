# 2. Component Development Process

**Date:** 2026‑02‑10

## Status

Accepted

## Context

There are many different ways to build components. Traditionally, this team has built components with a de facto ground-up approach. This approach was starting with semantic HTML and CSS, validating accessibility and interaction requirements, and then layering in behavior and framework-specific implementations. This practice has contributed to strong accessibility outcomes, a single source of truth, and long-term architecture.

Some other approaches to build components are to build everything together from the start. This approach can be quicker to ramp up and build components, but we see there are some long term issues with this approach.

## Decision

To adopt the following **ground‑up, accessibility‑first component development process**:

1. **Start with semantic HTML and CSS**

   * Define structure, design hooks, and theming.
   * Prefer native elements and web standards where appropriate.
   * Confirm cross‑browser expectations.

2. **Document accessibility and interaction requirements early**

   * Focus management (where applicable)
   * Keyboard support
   * Screen reader behavior
   * States, variants, and edge cases
   * Provide prose explanations that are understandable without requiring JavaScript knowledge.

3. **Add minimal JavaScript only when needed**

   * Build only the bare minumim interactions needed for validation.

## Consequences

This approach ensures:

* **Accessibility** is treated as first‑class from the start.
* **Transparency** for designers and accessibility partners.
* **Durability** across and APIs.
* **Consistent behavior** documented and validated before abstraction.

Trade‑offs include slower initial implementation velocity and potential duplication across different implementations. However, upholding accessibility, consistency, long term architecture, and a single source of truth is prioritized.
