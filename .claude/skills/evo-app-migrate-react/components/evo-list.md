# ebay-list → evo-list

`EvoList` uses named regions so the component does not inspect or rearrange its children. The outer `<div>`, `<ul>`, `<li>`, item body, and optional leading or trailing `<div>` elements retain their Skin structure. A separator keeps its `<hr>` and adds a decorative `<li>` wrapper so the `<ul>` has valid children.

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
  EvoListItem,
  EvoListItemBody,
  EvoListItemLeading,
  EvoListSeparator,
} from "@evo-web/react/list";

<EvoList>
  <EvoListItem as="button" type="button" onClick={() => handleItem("offer")}>
    <EvoListItemLeading>New</EvoListItemLeading>
    <EvoListItemBody>View offer</EvoListItemBody>
  </EvoListItem>
  <EvoListSeparator />
</EvoList>;
```

| ebayui-core-react                             | evo-react                                               | Change                                                                                       |
| --------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Text directly in `EbayListItem`               | `EvoListItemBody` child                                 | Wrap the main content explicitly to retain the inner `list__body` element.                   |
| `EbayListItem separator`                      | `EvoListSeparator`                                      | Use the named separator component between items.                                             |
| `onButtonClick(event, { index })` on the list | Native `onClick(event)` on an `EvoListItem as="button"` | Handle the chosen action on that button instead of relying on a positional index.            |
| `as` accepts any element                      | `as="div"`, `"button"`, or `"a"`                        | These are the supported semantic forms; pass the native attributes for the selected element. |
| No list label prop                            | `a11yText` or `a11yLabelId`                             | Name the nested `<ul>` when its purpose is not clear from nearby context.                    |

`EvoListItemLeading` and `EvoListItemTrailing` remain available. They now accept native `<div>` props, including React 19 refs. Put the named regions in the desired order inside each item.
