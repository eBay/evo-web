# 7. Tooltip Trigger Behavior

**Date:** 2026-09-03

## Status

Accepted

## Context

ARIA and MIND define a tooltip as content that appears when its host receives hover or focus.

The `noHover` option added a focus-only mode. That mode treated pointer-induced focus inconsistently across host types and browsers. Click history is not relevant to tooltip visibility. The relevant conditions are whether the pointer is over the host or the host has focus.

## Decision

Remove `noHover` from `@evo-web/react` and `@evo-web/marko`.

Evo Tooltip supports one trigger model:

- Hover opens the tooltip.
- Focus opens the tooltip.
- Mouse leave or blur closes the tooltip.
- Escape closes the tooltip.

The tooltip does not distinguish between keyboard focus and pointer-induced focus. Click has no separate tooltip behavior.

Use Evo Infotip when content should open through an explicit click rather than hover or focus.

## Consequences

Consumers have one tooltip behavior across React and Marko. Existing `noHover` usages must remove the prop. Click-triggered disclosure should use Evo Infotip.

Keyboard users still get tooltip content through focus. Pointer users get it through hover.
