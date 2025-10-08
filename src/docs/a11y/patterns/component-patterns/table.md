# Table Accessibility

### Best Practices

1. In order to be well-formed and appear in the accessibility tree for assistive technology, a table **requires** the table head (`<thead>`) and table body (`<tbody>`) elements.
2. Every table cell **requires** a logical column header and/or row header.
3. Columns with string data should be left aligned, while columns with numeric data should be right aligned (vice versa for RTL).
4. A table accessibility may be enhanced by adding a `<caption>` to relay the subject of the table.

<pre class="language-html"><code class="lang-html">&#x3C;div class="table" role="group" aria-label="Video games for sale" tabindex="0">
<strong>  &#x3C;table>
</strong>    &#x3C;caption>
      Video game consoles for sale.
    &#x3C;/caption>
    &#x3C;thead>
      &#x3C;tr>
        &#x3C;th scope="col">Seller&#x3C;/th>
        &#x3C;th scope="col">Item&#x3C;/th>
        &#x3C;th scope="col">Image&#x3C;/th>
        &#x3C;th scope="col" class="numeric">List Price&#x3C;/th>
        &#x3C;th scope="col" class="numeric">Quantity Available&#x3C;/th>
        &#x3C;th scope="col" class="numeric">Quantity Sold&#x3C;/th>
        &#x3C;th scope="col" class="numeric">Watchers&#x3C;/th>
        &#x3C;th scope="col" class="numeric">Protection&#x3C;/th>
        &#x3C;th scope="col">Shipping&#x3C;/th>
        &#x3C;th scope="col">Delivery&#x3C;/th>
      &#x3C;/tr>
    &#x3C;/thead>
    &#x3C;tbody>
      &#x3C;tr>
        &#x3C;td data-title="Seller">Nintendo&#x3C;/td>
        &#x3C;td data-title="Item">Switch&#x3C;/td>
        &#x3C;td data-title="Image">&#x3C;/td>
        &#x3C;td class="numeric">$287.96&#x3C;/td>
        &#x3C;td class="numeric">300&#x3C;/td>
        &#x3C;td class="numeric">207&#x3C;/td>
        &#x3C;td class="numeric">95&#x3C;/td>
        &#x3C;td class="numeric">$17.99&#x3C;/td>
        &#x3C;td>FREE&#x3C;/td>
        &#x3C;td>4/1 - 4/5&#x3C;/td>
      &#x3C;/tr>
    &#x3C;/tbody>
  &#x3C;/table>
&#x3C;/div>
</code></pre>

**Do** **NOT** use tables as a means for visual layout of page structure in rows and columns. Use CSS instead! See the [Layout Tables Anti-Pattern](../antipatterns/layout-table) for more information.

### Sortable Table

A sortable table is a table that allows users to sort the data in the table by clicking on the column headers. You can make tables sortable by using sort buttons in `thead > th` . Additionally, for accessibility purposes, `aria-sort="ascending"` or `aria-sort="descending"` should be added respectively to the `<th>` to reflect the current sort order.

```html
<div class="table" role="group" aria-label="Video games for sale" tabindex="0">
    <table>
        <thead>
            <tr>
                <th class="table-cell" aria-sort="descending">
                    <button type="button">
                        Seller
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-down-12"></use>
                        </svg>
                    </button>
                </th>
                <th class="table-cell">
                    <button type="button">
                        Item
                        <svg aria-hidden="true" class="icon icon--12" height="28" width="28">
                            <use href="#icon-sort-12"></use>
                        </svg>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="table-cell">Nintendo</th>
                <td class="table-cell">
                    <div class="table-cell__layout">
                        <div class="table-cell__thumbnail">
                            <img src="src/routes/static/img/tb-profile-pic.jpg" alt="Nintendo Switch" />
                        </div>
                        <div class="table-cell__multiline">
                            <div class="table-cell__data">
                                Nintendo Switch Brand New Gaming System with Four Controllers
                            </div>
                            <div class="table-cell__data table-cell__data--secondary">
                                SKU : A43BTR5678  •  Quantity : 1
                            </div>
                        </div>
                    </div>
                </td>
                <td class="table-cell">
                    <span class="signal signal--recent">Ready to Ship</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

### Responsive Layouts

Responsive considerations should be made to ensure that tables are easily consumable and consistent across all screens.&#x20;

1. Data Tables should continue to look like tables on all screens including smallest phone screens.
2. Data Tables should be fluid stretching to the width of the container.
3. Data Tables should span the full width of containers.
4. Data Tables should allow the columns to scroll horizontally inside the table only. The entire page body should not be scrolling horizontally.
5. Data Tables that have a sticky header with an infinite scroll and no pagination, should typically have a max-height less than the total height of the viewport to allow users to easily scroll past the table without having to exhaust the entire contents of the table before being allowed to scroll to the rest of the page.

### Interaction Design

This section provides interaction design for keyboard, screen reader and pointing devices.

#### Keyboard

The top-level container element should have a `tabindex="0"`to make it focusable, an `aria-label` or `aria-labeledby` to relay context of the table, and should have a `role="group"` to make it accessible to screen readers. That will also allow the table elements to be scrollable inside the container, both vertically (when overflowing) and horizontally.

Tabbing order for interactive elements inside a table need to follow the natural sequencing of the elements as they appear row by row from top to bottom, and column by column per the respective RTL/LTR modes.

Sortable columns are achieved by adding a tri-state button (at rest, toggled sort descending, toggled sort ascending) as the contents of the table header cell. The three states would be cycled through on click/tap/keyboard as such: Rest > Sort Descending > Sort Ascending > Rest ...

The usual rules for [button](../input/button) apply.

#### Screen Reader

1. Table **must** be listed in screen reader list of tables.
2. Screen reader **must** be navigable with screen reader table command. For example, in VoiceOver this command is `VO+CMD+T`.
3. Screen reader **must** announce value of every cell.
4. Screen reader **must** announce value of column header when instructed to do so. For example, in VoiceOver this command is `VO+C`.
5. Sortable column **must** be announced by screen reader.
6. Current sort state of sortable columns **must** be announce by screen reader.
7. When moving from column to column, screen reader announces new column scope. Typically this scope is the value of the column header.
8. When moving from row to row, screen reader announces new row scope. Typically this scope is the value of the row header.

#### Pointer

The only special consideration for table is sortable columns. Typically this is achieved by adding a toggle button as the contents of the table header cell. The usual rules for [button](../input/button) apply.

### Loading State

When the `table`  is in a loading state, it needs to become inaccessible to the user as new data is fetched and loaded. While that happens, we also need to indicate to users that \[new] data is loading.

This can be achieved by adding the table--loading-state class to the .table element.

Additionally, in the loading state, the module should be inaccessible to the user. This can be achieved by setting `tabindex="-1"` to the container to make the container non-focusable/scrollable, and adding the `inert` attribute. However, since `inert` is not fully supported in older browsers, it is recommended to either use a polyfill or use JavaScript to disable all interactive elements inside the `table` when in loading state.&#x20;

#### Disabling Interactive Elements

Elements that support `disabled` should be disabled. Anchors do NOT support `disabled`, so they should instead have their `href` attribute values removed.&#x20;

{% hint style="info" %}
Anchors that need to have their `href` attributes removed during loading, may require those `href` attributes to be restored once the loading state is done. For example, table head anchors that do server-side sorting/filtering. A good way to make those links inaccessible is to rename `href`  to some other attribute, such as `data-href`  during loading, and then revert them all back to `href`  when loading state is complete.
{% endhint %}

Here are some other steps to manually ensure the module is inaccessible:

* All interactive elements inside table should be forced to NOT be focusable.
* The module container should be forced to be unscrollable.
* The progress bar should be forced to gain focus.
* All interactive elements inside the table should be disabled or, for links, `href` attributes emptied while loading.

### ARIA Reference

#### [aria-sort](https://www.w3.org/TR/wai-aria-1.1/#aria-sort)

Applied to column headings to convey descending or ascending sorted stated.
