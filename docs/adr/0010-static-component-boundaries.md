# 10. Static Component Boundaries

**Date:** 2026-10-13

## Status

Accepted

## Context

With visually similar controls there is a general rule to combine the variants as modifiers in a single component. While generally true, sometimes the underlying markup can make it confusing and difficult to maintain. For example, `fake-button`, `fake-tabs`, and `fake-link` render the same visual styling as `button`, `tabs`, and `link`, but using a different native HTML element for behavioral reasons: an `<a>` in place of a `<button>`, or a list of links in place of an ARIA tablist. Today these three live inconsistently inside their visual counterpart's folder: `fake-button` and `fake-tabs` are nested but their Storybook titles do not reflect that nesting, and `fake-link` is not a component at all, only two story exports inside `link`'s own story file. None of the three have the modifier structure (`.btn--fake`) that true nesting would require, and none of them share their parent's root element, which a true modifier would.

A `<button>` and an `<a>` differ at the native element level, not only in appearance. Space activates a button; it scrolls the page when focused on a link, which activates on Enter instead. `disabled` has native meaning on a button, removing it from the tab order; an anchor has no native `disabled`, so a disabled-looking `fake-button` has to fake the state. Removing `href` takes it out of the tab order but also strips its link role; `aria-disabled` keeps it focusable but needs JavaScript to stop it navigating. These differences exist independent of how the components are organized in the static layer.

Ian McBurnie, the evo-web team lead, describes the static layer as originally organized around semantic and behavioral boundaries, and as having drifted toward grouping visually similar controls together over time. He reports seeing accessibility-relevant differences between a real control and its visually identical counterpart lost once the two were documented as one variant. The fake patterns are where that drift shows. Modules split along behavioral lines over the years (`cta-button`, `expand-button`, `listbox-button` and `menu-button` in v8; dialog, notice and tooltip in v11), but the fakes stayed with the controls they look like. [eBay/skin#712](https://github.com/eBay/skin/issues/712) proposed splitting `fake-menu` out of `menu` in 2019 and was closed with "For now, let's keep the fake things in with the real things." This decision revisits that one.

## Decision

`fake-button`, `fake-tabs`, and `fake-link` are promoted to standalone, top-level static components, renamed `navigation-button`, `navigation-tabs`, and `text-button`. They are not modifiers or nested variants of `button`, `tabs`, and `link`.

Each gets its own SCSS module, its own Storybook entry, and its own documentation page. Shared visual styling across a component and its counterpart is implemented through Sass mixins, not through a shared top-level class or a shared component boundary. `fake-menu` is similarly renamed `navigation-menu` and remains separate from `menu`.

Naming convention: `button` & `navigation-button`, `tabs` & `navigation-tabs`, `menu` & `navigation-menu`, `link` & `text-button`. Bare `<a>` elements keep their global styling, with no class required.

This decision covers the static layer only. How the Marko and React component APIs expose these patterns (for example, a separate component or a `variant` prop) belongs to their owners.

## Consequences

A change to `button`'s behavior (keyboard handling, disabled state, ARIA attributes) cannot silently affect `navigation-button`, because the two no longer share an implementation surface. The same applies to the `tabs`/`navigation-tabs` and `link`/`text-button` pairs.

Each component gets independent documentation, Storybook discoverability, and accessibility guidance, rather than inheriting a parent's documentation with caveats for the counterpart.

Shared visual styling will be implemented with Sass mixins to avoid duplicating CSS across the separated modules.

The `fake-button`, `fake-tabs`, `fake-link`, and `fake-menu` names are deprecated now and removed in the next major version, so existing consumers are not broken by the new names.

## Accessibility test for module boundaries

This decision generalizes. A visual variant that differs from its parent only in a BEM modifier shares its parent's behavioral contract. A variant that differs in any of the following does not, and the difference is itself the signal that it needs its own module, not a modifier:

- **Keyboard activation.** A `<button>` activates on both Enter and Space. A focused `<a>` activates on Enter; Space scrolls the page instead. A variant that changes the root element to an anchor has changed this contract, regardless of how it's styled.
- **Disabled semantics.** `disabled` has native meaning on `<button>`: it's removed from the tab order and cannot fire. `<a>` has no native `disabled`. A "disabled" anchor has to fake the state: dropping `href` takes it out of the tab order but also strips its link role, and `aria-disabled` keeps it focusable but needs JavaScript to stop it navigating. A variant that can't inherit native `disabled` behavior from its parent element has changed this contract.
- **Screen reader announcement.** The two elements are announced differently to assistive technology (e.g. "button" vs. "link"), independent of how either is styled. If the announcement a user hears doesn't match the parent's, the variant is a different control for AT purposes, whatever the CSS says.

If a proposed variant trips any of these three, it gets its own static module, sharing visual styling through mixins, not a shared component boundary. Visual similarity alone does not settle this question in either direction.

## Modifier compatibility test

A BEM modifier should combine cleanly with every other modifier on the same block, such as size and priority. A proposed modifier that cannot is a smell: it usually means the variant changes what the control is, not how it looks. A `btn--link` modifier is the case that prompted this rule. A link-styled button has no primary or large version, because it replaces the whole look instead of adjusting it, so it would not sit alongside the size and priority modifiers the way `btn--borderless` does. A separate module has no such problem, because nothing in it has to combine with the parent's modifiers.

## Naming

The last word names the family a component belongs to. The words before it say how it differs: what it adds, does or looks like, never the element it's built from. `icon-button` adds an icon, `menu-button` opens a menu, `navigation-button` navigates and `text-button` looks like text. `link-button` broke this, because `link` named the element underneath, so the name read just as well as "a link that looks like a button" or "a button that behaves like a link."

Class names spell out `button`. The abbreviated `.btn`, `.icon-btn`, `.cta-btn` and `.expand-btn` gain `.button`, `.icon-button`, `.cta-button` and `.expand-button` beside them in a minor release, and the abbreviated names are removed in the next major version.

## Precedent: single-variant modules already exist

A standalone module for a pattern with no modifiers of its own is not unusual in the static layer. `link`, `list`, `confirm-dialog`, `split-button`, `donut-chart`, `chip`, `chart-legend`, `image-placeholder`, `file-preview-card-group`, `layout-grid`, and `star-rating` are all top-level modules with zero BEM modifiers today. `link`, which `text-button` is styled to match, has stood as a single-variant top-level module without controversy. A single-variant shape is not, on its own, evidence that a module is unwarranted.

## What doesn't settle this question

Some arguments that may come up in this discussion. None of them decides the separation on their own:

- **Visual similarity alone.** Two controls rendering identically is a claim about appearance, not about behavior or semantics. `button` and `navigation-button` can share every pixel of styling through mixins while remaining different controls for keyboard activation, disabled handling, and AT announcement. "It looks the same" is not evidence the module boundary is wrong. Appearances can be deceiving.
