# Breadcrumbs Accessibility

## Best Practices

Breadcrumbs are typically used as secondary navigation on sites that are organized in a hierarchical manner.

An SVG symbol is used to separate each breadcrumb link.

The last breadcrumb link, representing the current place in the hierarchy, is non-interactive.

Breadcrumbs **must** have a heading of 'You are here', or words to those effect. This heading can be visually hidden offscreen.

## Interaction Design

Breadcrumb interaction is similar to a simple list of ordered links.

### Keyboard

TAB key moves from breadcrumb to breadcrumb.

Separator symbols **must not** be keyboard focusable.

The last breadcrumb lacks an `href` value and therefore is omitted from the tab order.

### Screen Reader

The screen reader will recognize the breadcrumbs as a navigation landmark.

Each breadcrumb will be announced as 'link', followed by the link text.

The screen reader should ignore each separator icon.

### Pointer

Clicking a breadcrumb link will navigate to that location in the site hierarchy.

The last breadcrumb (current location) is non-interactive and therefore not clickable.

## ARIA Reference

| Attribute                   | Description                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| **aria-current="location"** | Provides AT with programmatic state on the breadcrumb that reflects the current site location. |
| **role="navigation"**       | Creates a navigational landmark for AT.                                                        |
| **aria-labelledby**         | References the heading element that labels the breadcrumbs navigation (e.g., "You are here").  |

## Further Reading

- [APG Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [Pattern Naming Scheme](../appendix/pattern-naming-scheme.md)
