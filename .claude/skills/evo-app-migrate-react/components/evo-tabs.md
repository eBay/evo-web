# ebay-tabs → evo-tabs

This component has a **new id-based compound API**. The old flat, order-dependent children API is replaced by named sub-components.

Keyboard activation remains `"auto"` by default, matching both legacy React and Marko tabs: moving focus with an arrow key also selects the tab. Pass `activation="manual"` explicitly to require Enter or Space after moving focus.

**Before:**

```tsx
<EbayTabs
  selectedIndex={0}
  onSelect={({ selectedIndex }) => selectTab(selectedIndex)}
>
  <EbayTab>Overview</EbayTab>
  <EbayTabPanel>Overview content</EbayTabPanel>
</EbayTabs>
```

**After:**

```tsx
<EvoTabs defaultSelected={0} onSelectedChange={selectTab}>
  <EvoTabList>
    <EvoTab id={0}>Overview</EvoTab>
  </EvoTabList>
  <EvoTabPanelList>
    <EvoTabPanel id={0}>Overview content</EvoTabPanel>
  </EvoTabPanelList>
</EvoTabs>
```

**Prop changes:**

| ebayui-core-react             | evo-react                                  | Notes                                                                                                                                                                      |
| ----------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selectedIndex`               | `selected` / `defaultSelected`             | Preserve each positional index as the matching numeric tab and panel id. Use `selected` for controlled state or `defaultSelected` for uncontrolled state. One is required. |
| `onSelect({ selectedIndex })` | `onSelectedChange(selected)`               | Receives the selected string or number directly.                                                                                                                           |
| Flat `EbayTab` children       | `EvoTabList` containing `EvoTab`           | Every tab requires a unique `id`.                                                                                                                                          |
| Flat `EbayTabPanel` children  | `EvoTabPanelList` containing `EvoTabPanel` | Every panel requires the matching tab `id`.                                                                                                                                |
| `size`                        | `size`                                     | Same values: `"medium" \| "large"`.                                                                                                                                        |
| `activation`                  | `activation`                               | Same values: `"auto" \| "manual"`; defaults to `"auto"`.                                                                                                                   |
| `disabled` on `EbayTab`       | `disabled` on `EvoTab`                     | No behavior change.                                                                                                                                                        |
