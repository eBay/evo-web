# Phase 3 — Deep Manual Audit

Five representative components read across all three layers (skin SCSS, evo-marko, evo-react)
and the website docs pages. Each section records confirmed patterns, new discoveries,
surprises/discrepancies, and concrete schema gaps.

---

## 1 — evo-textbox

### What it does

Wraps `<input>` (or `<textarea>` when `multiline=true`) inside a `.textbox` container.
Supports prefix/postfix icons and text, floating label, invalid state, and readonly.

### New patterns vs baseline

**1. Validation state → dual output (CSS modifier + ARIA attribute)**
`invalid` prop drives two things simultaneously:
- CSS modifier on the wrapper: `textbox--invalid` (visual styling)
- `aria-invalid="true"` on the `<input>` element (ARIA)

These are linked but live on different elements. The schema has no concept of a prop
that produces both a CSS modifier and an ARIA attribute.

**2. Auto-computed `aria-describedby` from slot IDs**
The `<input>` gets `aria-describedby` automatically:
```js
aria-describedby=([prefixId, postfixId].filter(Boolean).join(" ") || undefined)
```
The IDs are generated via `<id/>` tag variables. The consumer never provides these.
This is an internal ARIA linking pattern — not a prop.

**3. Sub-element accessibility (postfixIcon button)**
When `postfixIcon.a11yText` is provided, an icon-button renders with that text as `aria-label`.
This is an accessibility prop on a **slot** (not on the component root):
```ts
postfixIcon?: Marko.AttrTag<Marko.HTML.Button & { a11yText?: string }>;
```
The schema has no mechanism for "a11y props on a slot's inner element."

**4. `aria-required` as passthrough**
`aria-required` is documented in the a11y docs and works, but is NOT in the `Input` interface.
Callers pass it via `...htmlInput`. The schema needs to document which ARIA attributes
are managed internally vs. which are consumer passthrough.

**5. `:has()` migration in progress**
Comments in SCSS and template note that modifier classes (`textbox--disabled`, `textbox--invalid`,
`textbox--readonly`) are being phased out in favor of CSS `:has()`. Schema should note this
as a transitional state, not the permanent design.

**6. Floating label delegation**
Floating label behavior is fully delegated to `evo-floating-label` (internal tag). The
`floatingLabel`, `floatingLabelStatic`, `opaqueLabel`, `value`, and `focused` state are
all passed through. Schema needs a `delegatedBehaviors` concept.

### Discrepancies / surprises
- The `placeholder` is managed reactively: only shown when focused AND input is empty
  (not standard browser behavior). This is a non-obvious behavior the schema needs to capture.
- There is no `aria-errormessage` prop — error message linking is purely through
  `aria-describedby` pointed at external elements the caller provides.

### Schema gaps

| ID | Gap description |
|---|---|
| T1 | `validationState` concept: a single prop (`invalid`) that drives both a CSS modifier on the wrapper AND `aria-invalid` on the control element |
| T2 | `internalAriaLinks`: auto-computed `aria-describedby` from slot IDs (not a prop, not caller-controlled) |
| T3 | `slotA11yProps`: a11y text strings that live on a slot definition, not on the component root |
| T4 | `passthroughAriaList`: which ARIA attributes are managed internally vs. caller passthrough |
| T5 | `delegatedBehavior`: internal sub-component that handles a major feature (floating label) |
| T6 | `nonStandardBehavior`: placeholder reactive visibility (only shows when focused + empty) |

---

## 2 — evo-tabs

### What it does

Renders a tab list + tab panels. Uses roving tabindex for keyboard navigation. Supports
auto-selection (arrow key moves focus AND selects) or manual activation (arrow key moves
focus; SPACE/ENTER selects).

### New patterns vs baseline

**1. Two-level slot nesting (AttrTag inside AttrTag)**
`Tab` is a helper interface whose `panel` slot is itself an AttrTag:
```ts
export interface Tab extends Marko.HTML.Div {
    panel: Marko.AttrTag<Marko.HTML.Div>;
}
export interface Input extends Marko.HTML.Div {
    tab?: Marko.AttrTag<Tab>;
}
```
Usage: `<@tab><@panel>...</@panel></@tab>`. The schema's slot model only handles one level
of nesting.

**2. Cross-element ARIA relationships (tab ↔ panel)**
Each tab is linked to its panel via generated IDs:
- Tab element: `id="${tabId}-${i}"` + `aria-controls="${tabpanelId}-${i}"`
- Panel element: `id="${tabpanelId}-${i}"` + `aria-labelledby="${tabId}-${i}"`

This is a bidirectional, index-keyed relationship across two iteration loops.
The schema has no way to express cross-element ARIA ID relationships.

**3. Roving tabindex pattern**
Only one tab is keyboard-focusable at a time (`tabindex=0`, rest are `-1`). This is managed
by `evo-roving-tabindex`. The focused tab receives physical DOM focus (not aria-activedescendant).
Keyboard: arrow keys move focus; if `autoSelect=true`, also selects; SPACE/ENTER selects
when `autoSelect=false`.

**4. State-lifting callback (`indexChange`)**
`indexChange` is not a DOM event — it's a state-lifting function called when the selected
index changes:
```ts
indexChange?: (index: number) => void;
```
Pattern used also in: `openChange`, `selectedChange`, `selectedChange` throughout the library.
The schema's `events` array currently mixes DOM events and state-lifting callbacks.

**5. `hidden` attribute for panel visibility**
Non-selected panels use `hidden` (not `display:none` / CSS class):
```marko
hidden=!isSelected
```
This is semantically correct (hidden removes from AT tree) and differs from a purely CSS
approach.

**6. Undocumented offscreen heading requirement**
The a11y docs say tab panels SHOULD contain an offscreen heading matching the tab text.
This is NOT enforced by the component. It's a caller contract documented only in the
accessibility page. The schema needs a concept for "caller obligations" not enforced
by the component.

### Discrepancies / surprises
- `activation` prop maps to `autoSelect` in `evo-roving-tabindex`. The external API
  name and the internal implementation name differ.
- There is no `aria-label` or `aria-labelledby` on the `tablist` element. The docs
  say the tablist must be preceded by a heading — that heading is not linked programmatically.
  This may be a missing ARIA connection.

### Schema gaps

| ID | Gap description |
|---|---|
| TB1 | `nestedSlots`: slot whose definition itself contains named AttrTag slots (two-level nesting) |
| TB2 | `crossElementAriaLinks`: ARIA relationships between elements within an iteration (tab ↔ panel) |
| TB3 | `rovingTabindex` behavior: which elements participate, what keys navigate, physical focus vs aria-activedescendant |
| TB4 | `stateLiftingCallbacks`: callbacks like `indexChange` that are state-lifting not DOM events (separate from `events`) |
| TB5 | `panelVisibility`: `hidden` attribute vs CSS (impacts AT behavior, not just visual) |
| TB6 | `callerObligations`: accessibility requirements imposed on the consumer that the component cannot enforce |
| TB7 | `widgetRole`: composite ARIA role system — role trio tab/tablist/tabpanel |

---

## 3 — evo-dialog

### What it does

Wraps the native `<dialog>` element with showModal() behavior, CSS animation lifecycle,
a required close button, and optional banner/header/footer slots.

### New patterns vs baseline

**1. Native element with JavaScript lifecycle management**
Dialog uses `<dialog>` with `showModal()` called from a `<script>` block:
```marko
<script>
  if (open && !$dialog().open) {
    $dialog().showModal();
  }
</script>
```
The focus trap is browser-native (from `showModal()`), not implemented in the component.

**2. Two-step close lifecycle (animation-aware)**
Close is not immediate:
1. `open = false` → adds `dialog--close` CSS class → starts exit animation
2. `onAnimationEnd` fires → calls `el.close()` → removes from DOM/AT

The schema has no concept of an animation-gated lifecycle phase.

**3. `closedby` attribute (emerging browser API)**
`closedby="any"` enables browser-native light dismiss (Escape key or click outside).
The docs warn this is not yet widely supported. This is a new HTML attribute not
in the baseline schema.

**4. Required slot (close)**
The `close` AttrTag slot is NOT optional:
```ts
close: Marko.AttrTag<IconButtonInput>;  // no `?`
```
A11y docs also mandate: "dialog must contain a dismiss button."
The schema schema marks slots as `required: true/false` but the distinction between
"required for functionality" vs "required for accessibility" is not captured.

**5. Heading element type override on slot**
`header` slot accepts `as?: string` to override the heading element:
```ts
header: Marko.AttrTag<Marko.Input<"h2"> & { as?: string }>;
```
Rendered as: `<${headerAs || "h2"}>`. This allows the heading hierarchy to be adapted.
The a11y docs require starting at h2 — this is an enforced default.

**6. Auto-linked `aria-labelledby` (not a prop)**
`aria-labelledby` is auto-computed:
```marko
aria-labelledby=(inputLabelledBy ? `${inputLabelledBy} ${headerId}` : headerId)
```
The consumer can prepend an additional ID, but the component always appends its own
generated header ID. This is a managed + extensible ARIA link.

**7. Focus return: caller responsibility**
When dialog closes, focus must return to the element that triggered it. This is NOT
in the component code — the caller must handle it. The docs do not mention this.

**8. Banner slot: CSS background-image (no `<img>` element)**
The banner is applied as a CSS `background-image` on a `<div>`, not as an `<img>`.
This means it is not announced by screen readers (purely decorative).

### Discrepancies / surprises
- `requestClose()` is used instead of direct `el.close()` in the close button handler.
  This routes through the browser's close pipeline and fires `cancel` event, which the
  component intercepts to manage the animated close sequence.
- `open=null` is passed to the dialog element with a comment explaining Marko would
  otherwise include it in the spread, conflicting with browser DOM management.

### Schema gaps

| ID | Gap description |
|---|---|
| D1 | `nativeElementLifecycle`: native browser element (dialog) whose key API is called from a script block, not component logic |
| D2 | `animationGatedClose`: two-phase close (state change → animation → DOM close), `onAnimationEnd` hook |
| D3 | `lightDismiss`: `closedby` attribute behavior, browser support caveat |
| D4 | `requiredSlotSemantics`: distinguish "required for functionality" vs "required for a11y compliance" |
| D5 | `slotElementTypeOverride`: slot accepts `as` to override the rendered HTML element |
| D6 | `managedPlusExtensibleAriaLink`: aria-labelledby that the component manages but consumer can prepend to |
| D7 | `callerObligation_focusReturn`: focus-return-to-trigger on close — not component behavior |
| D8 | `decorativeSlot`: slot rendered as CSS background, not semantic HTML (no AT announcement) |

---

## 4 — evo-listbox

### What it does

Renders a `role="listbox"` widget for selecting one or multiple options. Supports keyboard
navigation (arrow keys, type-ahead). Also renders a hidden native `<select>` for form
submission. Exposes its root DOM element via `<return>` for parent components to use as
anchor.

### New patterns vs baseline

**1. Roving tabindex (NOT aria-activedescendant)**
The a11y docs mention `aria-activedescendant` as the expected pattern. The actual
implementation uses **physical focus movement** via `evo-roving-tabindex` — each option
gets `tabindex=0/-1` and physical DOM focus.

This is an intentional, documented tradeoff: physical focus provides better cross-browser
screen reader support than aria-activedescendant.

**2. Dual output: custom widget + hidden native form control**
Listbox renders both:
- `<div role="listbox">` — the visible, accessible widget
- `<select hidden>` — invisible native select with `name` prop for form submission

The native select is not announced (hidden from AT) but participates in form submission.

**3. `aria-selected` (not `aria-checked`)**
Selected options use `aria-selected="true"`. This is the correct ARIA attribute for
listbox (vs `aria-checked` which is used for menuitemcheckbox).

**4. `a11ySelectedText` — visually hidden text in selected options**
Instead of relying on a checkmark icon (which could be visually-hidden anyway), a
`<span class="clipped">` with the text (default: "selected") is appended inside the
option. This is an i18n-able text string required by all consumers:
```marko
<span class="clipped">
    ${a11ySelectedText}
</span>
```

**5. Tag variable exposure (`<return=$root>`)**
The listbox exposes its root DOM element to parent components:
```marko
<return=$root>
```
This allows `evo-listbox-button` to position a floating overlay anchored to the listbox.
Not a React concept — purely a Marko compound component pattern.

**6. `data-value` attribute as internal identifier**
Each option gets `data-value=value`. The roving-tabindex reads this to identify elements.
This is an internal data attribute protocol not visible in the Input interface.

**7. Type-ahead via `evo-typeahead`**
`evo-typeahead` is a separate internal tag that handles type-ahead search. It:
- Accumulates typed characters into a string
- Clears after `typeaheadTimeoutLength` ms (default 2000ms)
- Returns the index of the first matching option

**8. `listbox__option--active` CSS class**
The focused (not selected) option gets a CSS class for visual keyboard focus styling.
This is separate from `aria-selected` and from browser `:focus` — it's a component-managed
visual indicator.

### Discrepancies / surprises
- `a11ySelectedText` is typed as required (no `?`) but has a default value in the
  destructuring. This means TypeScript type says required, but runtime has a fallback.
  This is an inconsistency — probably should be `required: false` with `default: "selected"`.

### Schema gaps

| ID | Gap description |
|---|---|
| L1 | `rovingTabindexVsAriaActivedescendant`: schema must document which strategy is used and why (tradeoff reasoning) |
| L2 | `dualOutput`: component renders both a custom accessible widget AND a hidden native form control |
| L3 | `ariaSelectedVsChecked`: distinguish `aria-selected` (listbox) vs `aria-checked` (menu) — schema must state which applies |
| L4 | `internalDataProtocol`: `data-value` attribute used internally for item identification |
| L5 | `typeaheadDelegation`: evo-typeahead internal tag, configurable timeout, match algorithm |
| L6 | `tagVariableExposure`: `<return>` exposes DOM element to parent — compound component anchoring pattern |
| L7 | `activeStateCssClass`: CSS class for keyboard focus (separate from aria-selected and :focus) |
| L8 | `requiredWithDefault`: a11yProps that TypeScript types as required but has a runtime default |

---

## 5 — evo-menu / evo-menu-button

### What they do

`evo-menu` renders a floating menu with keyboard navigation. `evo-menu-button` wraps
it with a trigger button and positions the menu using `evo-expander` (which uses
@floating-ui/dom for positioning).

### New patterns vs baseline

**1. Dynamic item role based on `selected` prop type**
Menu items render with different ARIA roles depending on the parent's `selected` prop:
```js
const itemRole = (
    isRadio ? "menuitemradio" :
    isCheckbox ? "menuitemcheckbox" :
    "menuitem"
)
```
Where:
- `typeof selected === "number" | "string"` → radio mode → `menuitemradio`
- `Array.isArray(selected)` → checkbox mode → `menuitemcheckbox`
- `selected === undefined` → plain mode → `menuitem`

This is a runtime polymorphic role system — the menu component renders fundamentally
different ARIA roles based on input type.

**2. `aria-checked` on menu items (not `aria-selected`)**
Checkable menu items use `aria-checked`, not `aria-selected`:
```marko
aria-checked=isCheckable && (checked ? "true" : "false")
```
Even when `selected === false` (unchecked), `aria-checked="false"` is set. This differs
from listbox where unselected options omit `aria-selected` entirely.

**3. Floating positioning via `evo-expander`**
Menu positioning uses `evo-expander` which wraps `@floating-ui/dom`:
- Computes position (flip, shift, offset)
- Returns `floatingStyles` and `ariaExpanded`
- No `aria-controls` — evo-expander does NOT add ARIA relationships

**4. `aria-haspopup="true"` (not `"menu"` or `"listbox"`)**
The trigger button uses:
```marko
aria-haspopup="true"
```
Not the specific value `"menu"` or `"listbox"`. This is a simpler declaration.

**5. Polymorphic trigger (3 button variants)**
`evo-menu-button` renders one of three trigger types based on `variant`:
- `"icon"` → `evo-icon-button`
- `"filter"` → `evo-filter-chip`
- else → `evo-button` (default)

Each has different ARIA behavior. The schema has no concept of a polymorphic trigger.

**6. `classPrefix` for BEM namespace flexibility**
`evo-menu` accepts `classPrefix` to change its BEM block name:
```marko
const baseClass = classPrefix || "menu";
```
When used inside `evo-menu-button`, `classPrefix="menu-button"` is passed, so menu
items render as `menu-button__item` not `menu__item`. This is a CSS scoping mechanism.

**7. `aria-labelledby` on trigger referencing external prefix element**
When `prefixId` is provided, the button's `aria-labelledby` concatenates:
- For icon variant: just `prefixId`
- For others: `${prefixId} ${labelId}` (external + internal)

**8. Escape key in `evo-menu-button`'s wrapper span**
The wrapping `<span>` handles Escape to close the menu:
```marko
onKeyDown(e, el) {
    if (open && e.key === "Escape") open = false;
}
```
This means Escape is handled on the container, not the button or menu itself.

**9. `collapseOnSelect` behavior**
When enabled, clicking any menu item closes the menu. This is a behavioral mode not
expressed in the current schema.

**10. `footerButton` slot pinned outside menu scroll**
A button slot that renders outside the scrollable menu items, pinned at the bottom.
This is architecturally different from regular item slots.

### Discrepancies / surprises
- There is no explicit `aria-controls` from the trigger to the menu. The menu button
  relies on visual proximity and `aria-haspopup` + `aria-expanded` only.
- The menu's `role="menu"` is on an inner `<div>`, not on the outer `<span>` root
  element returned. The outer element is just a positioning container.

### Schema gaps

| ID | Gap description |
|---|---|
| M1 | `polymorphicItemRole`: item role determined at runtime by the type of `selected` prop |
| M2 | `ariaCheckedOnAllStates`: `aria-checked="false"` always set on checkable items (unlike listbox which omits aria-selected on unselected) |
| M3 | `floatingPositioner`: delegation to evo-expander / @floating-ui/dom — placement, strategy, flip/shift |
| M4 | `aria-haspopup` value semantics: "true" vs "menu" vs "listbox" — which is used and when |
| M5 | `polymorphicTrigger`: trigger element changes based on variant prop (icon-button, filter-chip, button) |
| M6 | `classPrefixNamespace`: BEM class namespace override for embedding component in another's CSS scope |
| M7 | `escapeKeyOnContainer`: Escape handled on wrapper element, not button or menu |
| M8 | `collapseOnSelect`: behavioral mode — auto-close menu after selection |
| M9 | `pinnedFooterSlot`: slot that renders outside scrollable area, pinned at bottom |

---

## Consolidated schema gaps (all 5 components)

Grouped by the schema section they affect.

### A. New top-level fields needed

| Field | Type | Notes |
|---|---|---|
| `widgetRole` | object | Composite ARIA role system: primary role + child roles (tablist/tab/tabpanel, menu/menuitem*, listbox/option) |
| `keyboardModel` | object | Which keys do what; whether roving tabindex or aria-activedescendant; autoSelect vs manual |
| `stateLiftingCallbacks` | array | State-lifting callbacks (`indexChange`, `openChange`, `selectedChange`) separate from DOM event callbacks |
| `dualOutput` | object | When component renders both a custom widget AND a hidden native form control |
| `floatingPositioner` | object | Expander/positioning info: placement, strategy, @floating-ui reference |
| `callerObligations` | array | A11y requirements imposed on the consumer that the component cannot enforce (heading before tablist, focus return on dialog close) |

### B. Additions to existing `a11y` section

| Addition | Notes |
|---|---|
| `focusTrap` | "browser-native" (via showModal) vs "javascript" vs "none" |
| `rovingTabindexVsAriaActivedescendant` | Which strategy is used; if roving tabindex, which elements participate |
| `ariaAttributeOwnership` | Which aria-* are managed internally, which are consumer passthrough |
| `crossElementAriaLinks` | Bidirectional ARIA relationships (tab ↔ panel) with ID generation pattern |
| `internalAriaLinks` | Auto-computed aria-describedby from slot IDs (not props) |

### C. Additions to existing `slots` section

| Addition | Notes |
|---|---|
| `nestedSlots` | Slot whose definition itself contains AttrTag slots |
| `slotA11yProps` | A11y text strings belonging to a slot, not the component root |
| `slotElementTypeOverride` | Slot accepts `as` to override the rendered HTML element |
| `decorativeSlot` | Slot rendered as CSS background-image — not announced by AT |
| `pinnedSlot` | Slot rendered outside scrollable area |
| `requiredReason` | "functionality" vs "accessibility" — why a slot is required |

### D. Additions to existing `props` section

| Addition | Notes |
|---|---|
| `validationStateProp` | A prop that drives both a CSS modifier on wrapper AND aria-* on inner control element |
| `polymorphicRoleProp` | Prop whose type (number/string/array) determines ARIA role at runtime |
| `classPrefixProp` | BEM class namespace override |

### E. New `behaviors` entries (kinds of behaviors to document)

| Behavior kind | Example |
|---|---|
| `animationGatedClose` | Dialog two-phase close: state → animation → DOM close |
| `typeaheadSearch` | evo-typeahead delegation, timeout, match algorithm |
| `lightDismiss` | closedby attribute / click-outside close |
| `collapseOnSelect` | Auto-close menu after item selection |
| `reactiveVisibility` | Placeholder only shown when focused + empty |
| `dualOutputSync` | Hidden native select mirrors custom widget state |

### F. New field: `internalDataProtocol`

Some components attach internal data attributes to child elements for use by
internal tags. Example: `data-value` on listbox options (read by evo-roving-tabindex).
This protocol is invisible to consumers but essential for code generation.

---

## Phase 3 → Phase 5 handoff notes

1. **Listbox vs menu `aria-selected`/`aria-checked`** — the schema must explicitly
   document this distinction so code gen doesn't confuse them.

2. **`evo-roving-tabindex` as a schema concept** — it appears in tabs, listbox, and menu.
   The schema should have a standard `keyboardModel.rovingTabindex` block that all three
   reference, rather than re-speccing it per component.

3. **Dialog `closedby`** — should be noted as emerging spec, document that the component
   uses it but it's not yet reliable. Schema needs a way to flag spec-edge features.

4. **State-lifting callbacks** — `indexChange`, `openChange`, `selectedChange` all follow
   the same pattern but are currently confused with DOM events in the schema. Need a
   distinct type field: `"type": "stateLift"` vs `"type": "domEvent"`.

5. **The `callerObligations` concept** — this will be the most impactful addition to the
   contract template. Many a11y requirements that look like component features are actually
   consumer responsibilities: offscreen heading in tabs, focus return in dialog, label
   element before listbox. The contract template additions file must add a section for these.
