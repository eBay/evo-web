# ebay-list → evo-list

`EvoList` uses named regions so the component does not inspect or rearrange its children. The outer `<div>`, `<ul>`, `<li>`, item body, and optional leading or trailing `<div>` elements retain their Skin structure. A separator keeps its `<hr>` as a direct child of the `<ul>`, matching Skin.

**Before:**

```tsx
import {
  EbayList,
  EbayListItem,
  EbayListItemLeading,
} from "@ebay/ui-core-react/ebay-list";

<EbayList onButtonClick={(_, { index }) => handleItem(index)}>
  <EbayListItem as="button">
    <EbayListItemLeading>New</EbayListItemLeading>
    View offer
  </EbayListItem>
  <EbayListItem separator />
</EbayList>;
```

**After:**

```tsx
import {
  EvoList,
  EvoListItemContent,
  EvoListItemButton,
  EvoListItemLeading,
  EvoListSeparator,
} from "@evo-web/react/list";

<EvoList>
  <EvoListItemButton type="button" onClick={() => handleItem("offer")}>
    <EvoListItemLeading>New</EvoListItemLeading>
    <EvoListItemContent>View offer</EvoListItemContent>
  </EvoListItemButton>
  <EvoListSeparator />
</EvoList>;
```

| ebayui-core-react                             | evo-react                                         | Change                                                                            |
| --------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| Text directly in `EbayListItem`               | `EvoListItemContent` child                        | Wrap the main content explicitly to retain the inner `list__body` element.        |
| `EbayListItem separator`                      | `EvoListSeparator`                                | Use the named separator component between items.                                  |
| `onButtonClick(event, { index })` on the list | Native `onClick(event)` on an `EvoListItemButton` | Handle the chosen action on that button instead of relying on a positional index. |
| `EbayListItem as="button"`                    | `EvoListItemButton`                               | Pass native `<button>` attributes.                                                |
| `EbayListItem as="a"`                         | `EvoListItemLink`                                 | Pass native `<a>` attributes; use `as` for a router `Link` that renders an `<a>`. |
| No list label prop                            | `a11yText` or `a11yLabelId`                       | Name the nested `<ul>` when its purpose is not clear from nearby context.         |

`EvoListItemLeading` and `EvoListItemTrailing` remain available. They now accept native `<div>` props, including React 19 refs. Put the named regions in the desired order inside each item.
