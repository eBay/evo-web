# 2. Component Development Foundations

**Date:** 2026-02-10

## Status

Accepted

## Context

Components should have a clear, framework-agnostic foundation grounded in semantic HTML and CSS. This supports accessibility, clarity of intent, and long-term maintainability independent of any specific implementation technology.

This ADR defines the required foundation for new components. It does not prescribe a specific development workflow or restrict exploratory approaches.

## Decision

For all new components:

1. A semantic HTML and CSS representation must exist as a framework-agnostic foundation for the component.
   * Prefer native elements and established web standards.
   * Define structure, states, and styling hooks.

2. Accessibility and interaction expectations must be documented alongside the HTML/CSS foundation.
   * Focus behavior (where applicable)
   * Keyboard interaction
   * Screen reader expectations
   * States and variants

3. JavaScript must be minimal and introduced only where required for behavior.
   * A complete vanilla JavaScript component is not required.
   * Framework implementations must preserve the validated HTML/CSS foundation and documented behavior.

This ADR establishes required artifacts, not a mandated step-by-step process.

## Consequences

* Accessibility and semantics are defined independently of framework abstractions.
* Implementations remain durable across frameworks.
* Contributors have a clear, framework-agnostic reference point.
