# Tabs Accessibility

## Best Practices

Tab list **must** be preceded by a heading. All tabs **must** be thematically related to this heading. For example, a set of 'Shipping Services' tabs might contain a tab each for USPS, FedEx and UPS.

To maintain correct heading structure, tab panels **should** contain an [offscreen](https://ebay.gitbook.io/mindpatterns/techniques/offscreen-text) heading. The level of this panel heading **must** be exactly one level lower than the heading preceding the tablist. The heading text must match the corresponding tab text.

Tab list **must** have exactly one selected tab.

If all tab panel content is rendered on page load, tabs should be configured with `autoSelect` enabled.

If all tab panel content is rendered lazily on client (i.e. using AJAX call), tabs should be configured with `autoSelect` turned off.

## Interaction Design

This section provides guidance for keyboard, screen reader and pointing devices.

### Keyboard

Only one tab can be keyboard focusable at any time. This is known as a [roving tab index](https://ebay.gitbook.io/mindpatterns/techniques/roving-tabindex).

For tabs with `autoSelect` enabled, `ARROW` keys move keyboard focus to next/previous tab and also select that tab (i.e. `aria-selected="true"`).

For tabs without `autoSelect` enabled, `ARROW` keys move keyboard focus to next/previous tab, but `ENTER` or `SPACEBAR` key is required to set the tab to a selected state.

If tab panel contains focusable element(s), `TAB` key on selected tab **must** move focus to first focusable element in tab panel.

If tab panel does not contain focusable element(s), `TAB` key on selected tab **must** move focus to next focusable element on page.

### Screen Reader

Tab **must** be announce as "Tab".

Tab label **must** be announced, for example "Select Shipping for me".

Tab selected state **must** be announced.

Virtual cursor navigation can move from tab to tab _without_ changing the active tab selection.

## Further Reading

- [WAI-ARIA Authoring Practices 1.1: Tabs](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel)
