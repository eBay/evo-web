# 9. Static Component Boundaries

**Date:** 2026-10-13

## Status

Accepted

## Context

With visually similar controls there is a general rule to combine the variants as modifiers in a single component. While generally true, sometimes the underlying markup can make it confusing and difficult to maintain. For example, `fake-button`, `fake-tabs`, and `fake-link` render the same visual styling as `button`, `tabs`, and `link`, but using a different native HTML element for behavioral reasons: an `<a>` in place of a `<button>`, or a list of links in place of an ARIA tablist. Today these three live inconsistently inside their visual counterpart's folder: `fake-button` and `fake-tabs` are nested but their Storybook titles do not reflect that nesting, and `fake-link` is not a component at all, only two story exports inside `link`'s own story file. None of the three have the modifier structure (`.btn--fake`) that true nesting would require, and none of them share their parent's root element, which a true modifier would.

A `<button>` and an `<a>` differ at the native element level, not only in appearance. Space activates a button; it scrolls the page when focused on a link, which activates on Enter instead. `disabled` has native meaning on a button, removing it from the tab order; an anchor has no native `disabled`, so a disabled-looking `fake-button` has to fake the state and still requires manual `tabindex` handling to leave the tab order. These differences exist independent of how the components are organized in the static layer.

The static layer was originally organized around semantic and behavioral boundaries defining module boundaries, and has drifted toward merging visually similar controls over time, which have surfaced a tension. That drift has already produced observed cases where accessibility-relevant differences between a real control and its visually-identical counterpart were lost once they were merged into one documented variant.

## Decision

`fake-button`, `fake-tabs`, and `fake-link` are promoted to standalone, top-level static components, renamed `link-button`, `navigation-tabs`, and `button-link`. They are not modifiers or nested variants of `button`, `tabs`, and `link`.

Each gets its own SCSS module, its own Storybook entry, and its own documentation page. Shared visual styling across a component and its counterpart is implemented through Sass mixins, not through a shared top-level class or a shared component boundary. `fake-menu` is similarly renamed `navigation-menu` and remains separate from `menu`.

Naming convention: `btn` & `link-button`, `tabs` & `navigation-tabs`, `menu` & `navigation-menu`, `link` & `button-link`.

This decision covers the static layer only. How the Marko and React component APIs expose these patterns (for example, a separate component or a `variant` prop) belongs to their owners.

## Consequences

A change to `button`'s behavior (keyboard handling, disabled state, ARIA attributes) cannot silently affect `link-button`, because the two no longer share an implementation surface. The same applies to the `tabs`/`navigation-tabs` and `link`/`button-link` pairs.

Each component gets independent documentation, Storybook discoverability, and accessibility guidance, rather than inheriting a parent's documentation with caveats for the counterpart.

Shared visual styling will be implemented with Sass mixins to avoid duplicating CSS across the separated modules.

The `fake-button`, `fake-tabs`, `fake-link`, and `fake-menu` names are deprecated now and removed in the next major version, so existing consumers are not broken by the new names.

## Accessibility test for module boundaries

This decision generalizes. A visual variant that differs from its parent only in a BEM modifier shares its parent's behavioral contract. A variant that differs in any of the following does not, and the difference is itself the signal that it needs its own module, not a modifier:

- **Keyboard activation.** A `<button>` activates on both Enter and Space. A focused `<a>` activates on Enter; Space scrolls the page instead. A variant that changes the root element to an anchor has changed this contract, regardless of how it's styled.
- **Disabled semantics.** `disabled` has native meaning on `<button>`: it's removed from the tab order and cannot fire. `<a>` has no native `disabled`. A "disabled" anchor has to fake the state (drop `href`, add `aria-disabled`) and still needs manual `tabindex` handling to actually leave the tab order. A variant that can't inherit native `disabled` behavior from its parent element has changed this contract.
- **Screen reader announcement.** The two elements are announced differently to assistive technology (e.g. "button" vs. "link"), independent of how either is styled. If the announcement a user hears doesn't match the parent's, the variant is a different control for AT purposes, whatever the CSS says.

If a proposed variant trips any of these three, it gets its own static module, sharing visual styling through mixins, not a shared component boundary. Visual similarity alone does not settle this question in either direction.

## Modifier compatibility test

A BEM modifier should combine cleanly with every other modifier on the same block, such as size and priority. A proposed modifier that cannot is a smell: it usually means the variant changes what the control is, not how it looks. A `btn--link` modifier is the case that prompted this rule. It would carry different semantics and behavior, which is not what a modifier expresses, so it would not sit alongside the size and priority modifiers the way `btn--borderless` does. A separate module has no such problem, because nothing in it has to combine with the parent's modifiers.

## Naming

The last word of a name is the pattern the control looks like. The words before it say what the control is underneath. `link-button` is a button-styled control built as a link, `button-link` is a link-styled control built as a button, and `navigation-tabs` is tab-styled navigation. This follows the existing convention of putting the type last, as in `icon-button`, `split-button`, and `lightbox-dialog`.

## Precedent: single-variant modules already exist

A standalone module for a pattern with no modifiers of its own is not unusual in the static layer. `link`, `list`, `confirm-dialog`, `split-button`, `donut-chart`, `chip`, `chart-legend`, `image-placeholder`, `file-preview-card-group`, `layout-grid`, and `star-rating` are all top-level modules with zero BEM modifiers today. `link` is the direct sibling of `button-link` under this decision's naming convention, and it has stood as a single-variant top-level module without controversy. A single-variant shape is not, on its own, evidence that a module is unwarranted.

## What doesn't settle this question

Some arguments that may come up in this discussion. None of them decides the separation on their own:

- **Visual similarity alone.** Two controls rendering identically is a claim about appearance, not about behavior or semantics. `button` and `button-link` can share every pixel of styling through mixins while remaining different controls for keyboard activation, disabled handling, and AT announcement. "It looks the same" is not evidence the module boundary is wrong. Appearances can be deceiving.
