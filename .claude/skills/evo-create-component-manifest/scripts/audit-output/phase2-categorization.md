# Phase 2 — Component Categorization

Generated from Phase 1 static analysis of 52 evo-marko components.

---

## Category Map

| # | Category | Components | Key patterns |
|---|---|---|---|
| 1 | Simple Presentational | 8 | decorative/informative aria-hidden split |
| 2 | Simple Interactive | 10 | aria-pressed, role="switch", aria-disabled |
| 3 | Form Inputs | 6 | aria-invalid, aria-describedby, prefix/postfix slots |
| 4 | Navigation | 5 | aria-current, aria-selected, roving tabindex |
| 5 | Overlays | 6 | aria-modal, aria-labelledby, aria-describedby, focus trap |
| 6 | Complex Interactive | 7 | widget roles (menu/listbox), aria-haspopup, keyboard models |
| 7 | Compound / Parent-Child | 10 | multi-level AttrTag slots, helper interfaces |
| — | Special / Miscellaneous | 1 | 3d-viewer (third-party embed) |

---

## 1 — Simple Presentational

**Already covered by baseline (avatar).**
These are display-only components with no interactive keyboard model.
The main new sub-pattern is the **decorative vs. informative aria-hidden split** on `evo-icon`.

| Component | New patterns vs baseline |
|---|---|
| evo-badge | `a11yText` → visually-hidden text appended for screen readers |
| evo-ccd | `role="figure"`, `aria-label` on figure |
| evo-eek | Decorative/informative split (`aria-hidden` vs `aria-label`) |
| evo-icon | Same split as eek; `aria-labelledby` when used with a label element |
| evo-image-placeholder | No ARIA — purely decorative placeholder |
| evo-progress-spinner | `a11yText`, `aria-label` — used as sub-component in button loading state |
| evo-signal | No ARIA — status dot purely visual |
| evo-skeleton | `a11yText`, `aria-label` — loading placeholder |

**Schema gaps:** None critical. The `a11yText` pattern (renders a visually hidden `<span>`) is not in the current schema. Should be added as a standard field type.

---

## 2 — Simple Interactive

**Partially covered by baseline (button).**
Single-action controls with straightforward ARIA. New patterns: `aria-pressed`, `role="switch"`, `aria-checked` for indeterminate state.

| Component | Key patterns |
|---|---|
| evo-button | `aria-disabled`, conditional `aria-label` (loading state) — baseline |
| evo-checkbox | Native `<input type="checkbox">` — no custom ARIA |
| evo-cta-button | Button variant, no additional patterns |
| evo-details | Native `<details>`/`<summary>` — browser-native disclosure |
| evo-icon-button | `a11yText` required, `aria-label` required, `aria-disabled`, `onEscape` |
| evo-radio | Native `<input type="radio">` — no custom ARIA |
| evo-selection-chip | `aria-pressed` (toggle chip) |
| evo-switch | `role="switch"` |
| evo-toggle-button | `aria-pressed`, `aria-label`, icon/image/subtitle slots |
| evo-tri-state-checkbox | `aria-checked="mixed"` (indeterminate — not expressible as native boolean) |

**Schema gaps:**
- `aria-pressed` toggle pattern (binary state, not open/close)
- `role="switch"` (boolean role on a control)
- `aria-checked` with three states (`true` / `false` / `"mixed"`)
- `aria-disabled` vs native `disabled` distinction (both used in button)

---

## 3 — Form Inputs

**Not covered by baseline.** Form controls that participate in a form validation flow. Key new ARIA: `aria-invalid`, `aria-describedby` for error-message linking, and `aria-live` for dynamic character counts.

| Component | Key patterns |
|---|---|
| evo-textbox | `aria-invalid`, `aria-describedby` (error), `aria-label`, prefixIcon/prefixText/postfixText/postfixIcon slots |
| evo-select | `option` AttrTag slots — wraps native `<select>` |
| evo-number-input | `aria-label` on up/down buttons (both `aria-hidden` in some contexts), increment/decrement |
| evo-file-input | header/subheader AttrTag slots, drag-and-drop zone |
| evo-character-count | `a11yText`, `role="status"` (live region) — counts characters for a sibling textbox |
| evo-filter-input | `a11yClearButtonText`, `aria-controls` (links to the list it filters) |

**Schema gaps:**
- `aria-invalid` / `aria-errormessage` validation state pattern
- `aria-describedby` cross-element linking (error message, hint text)
- `aria-live` / `role="status"` live region pattern
- `aria-controls` linking (filter → list relationship)
- Prefix/postfix slot pattern with associated ARIA

---

## 4 — Navigation

**Not covered by baseline.** Components managing spatial or linear navigation. New patterns: `role="navigation"`, `aria-current`, `aria-selected` with roving tabindex.

| Component | Key patterns |
|---|---|
| evo-tabs | `role="tablist"/"tab"/"tabpanel"`, `aria-controls`, `aria-selected`, roving tabindex via `evo-roving-tabindex` |
| evo-breadcrumbs | `role="navigation"`, `aria-labelledby`, `aria-current="page"`, overflow menu (`a11yMenuButtonText`) |
| evo-pagination | `role="navigation"`, `aria-live="polite"`, `aria-current`, prev/next/item AttrTag slots |
| evo-segmented-buttons | `aria-current`, button group (no tabindex management — relies on click) |
| evo-fake-tabs | `aria-current` only — lightweight tabs without full ARIA widget roles |

**Schema gaps:**
- `aria-current` (page, step, date — not just boolean)
- `aria-selected` (distinct from `aria-pressed` — used in widget contexts)
- Roving tabindex coordination pattern (delegated to `evo-roving-tabindex`)
- `role="tablist"/"tab"/"tabpanel"` widget role trio
- `aria-live` on pagination counters

---

## 5 — Overlays

**Not covered by baseline.** Triggered or persistent surfaces requiring focus management. The native `<dialog>` element handles most of the focus trap; tooltip/infotip use a manual expand pattern via `evo-expander`.

| Component | Key patterns |
|---|---|
| evo-dialog | Native `<dialog>` (showModal), `aria-labelledby`, `closedby` attr, animation lifecycle events |
| evo-alert-dialog | `role="alertdialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby` (body text) |
| evo-confirm-dialog | Same as alert-dialog + reject/confirm AttrTag actions |
| evo-tooltip | `role="tooltip"`, `aria-expanded` (via `evo-expander`), host AttrTag |
| evo-infotip | `role="tooltip"`, `aria-expanded`, `aria-labelledby`, trigger icon button + popover content |
| evo-tourtip | `role="region"`, `aria-labelledby`, `aria-label` — guided tour tooltip, closeable |

**Schema gaps:**
- `aria-modal` flag (alerts/dialogs)
- `role="alertdialog"` vs `role="dialog"` distinction
- `aria-describedby` on dialog pointing to body text (different from form error linking)
- Focus trap lifecycle (open → trap → close → restore)
- `evo-expander` delegation pattern (tooltip trigger/content relationship)
- `closedby` HTML attribute (new spec — evo-dialog uses it)

---

## 6 — Complex Interactive

**Not covered by baseline.** Full keyboard models with ARIA widget roles, type-ahead, and multi-component coordination. This is where most schema gaps will be.

| Component | Key patterns |
|---|---|
| evo-listbox | `role="listbox"/"option"`, `aria-selected`, `aria-disabled`, roving tabindex + type-ahead via internal tags |
| evo-listbox-button | `aria-haspopup="listbox"`, `aria-expanded`, `aria-describedby`, `aria-invalid`, `aria-labelledby` — trigger for listbox popup |
| evo-menu | `role="menu"/"menuitem"`, `aria-checked` (checkable items), `aria-disabled`, separator, keyboard model |
| evo-menu-button | `aria-haspopup="menu"`, `aria-expanded`, `aria-labelledby`, trigger for menu popup |
| evo-fake-menu | `aria-disabled`, `aria-current` — static list styled as menu, no keyboard widget |
| evo-fake-menu-button | `aria-haspopup`, `aria-expanded`, trigger for fake-menu |
| evo-filter-chip | `aria-selected`, `aria-expanded` — can act as a multi-select chip that opens a panel |

**Schema gaps:**
- `aria-haspopup` with specific value (`"menu"`, `"listbox"`) — not just boolean
- `aria-activedescendant` (expected on listbox/menu host — not yet confirmed in template, needs Phase 3)
- `role="menu"/"menuitem"/"menuitemcheckbox"` widget trio
- `aria-checked` on menuitemcheckbox (distinct from checkbox `aria-checked`)
- Type-ahead delegation (`evo-typeahead` internal tag)
- Roving tabindex + keyboard navigation model
- Popup anchor/trigger relationship

---

## 7 — Compound / Parent-Child

**Partially covered (dialog has AttrTag slots).** Components that orchestrate child components through typed AttrTag slots, often with helper interface definitions for child prop types.

| Component | AttrTag slots | Child helper interface | Key patterns |
|---|---|---|---|
| evo-accordion | `details` | — | `aria-roledescription` on wrapper |
| evo-avatar | `image` | — | Conditional slot for image vs text avatar |
| evo-card | `overline`, `title`, `description`, `action`, `image` | — | Content composition only |
| evo-file-preview-card | `deleteAction`, `action`, `seeMoreAction`, `cancelAction` | `FilePreviewCardEvent` | Multiple action types, icon-button wiring |
| evo-file-preview-card-group | `card` | — | Passes children to grid layout |
| evo-layout-grid | `item` | `LayoutOptions` | Grid config via helper interface |
| evo-list | `item` | `ListItem` | `role="list"/"listitem"`, item type union |
| evo-progress-stepper | `step` | `Step` | `role="list"/"listitem"`, `aria-current` on active step |
| evo-toggle-button-group | `button` | — | Group aria-label/labelledby, passes selection state to children |
| evo-toggle-button | `icon`, `image`, `subtitle` | — | `aria-pressed`, part of group or standalone |

**Schema gaps:**
- Helper interface pattern (child component types defined separately from parent Input)
- Multi-slot composition (5+ AttrTag slots with different types)
- Group-level ARIA (`aria-label` / `aria-labelledby` on container that wraps individual controls)
- `aria-current` on the active step in a stepper

---

## 8 — Special / Miscellaneous

| Component | Notes |
|---|---|
| evo-3d-viewer | Third-party embed (model-viewer). Loading/error lifecycle only. `a11yLoadingText`, `onLoadError`. Not a UI design system component — schema likely does not need to cover it. |

---

## Skin-only components (not yet in evo-marko)

38 skin components have no evo-marko counterpart. Notable ones that represent patterns absent from the current schema:

| Skin module | Pattern category | Why it matters |
|---|---|---|
| `combobox` / `chips-combobox` | Complex interactive | `aria-activedescendant`, expanded input+listbox pattern — the most complex ARIA widget |
| `carousel` | Complex interactive | Roving tabindex, `aria-live` on slide counter |
| `drawer-dialog` / `fullscreen-dialog` / `lightbox-dialog` / `panel-dialog` | Overlays | Dialog variants with different size/position; same ARIA as dialog |
| `snackbar-dialog` / `toast-dialog` | Overlays | `role="status"` / `role="alert"` — non-blocking live notifications |
| `star-rating` / `star-rating-select` | Simple interactive | `role="radiogroup"`, individual stars as radios |
| `field` | Form inputs | `<fieldset>`/`<legend>` pattern — the root wrapper for form inputs |
| `floating-label` | Form inputs | Internal tag used by textbox; label animation |

---

## Phase 3 Deep-Dive Candidates

From each uncovered category, one representative:

| Category | Chosen component | Why |
|---|---|---|
| Form inputs | **evo-textbox** | `aria-invalid`, `aria-describedby`, prefix/postfix slots — densest form-input patterns |
| Navigation | **evo-tabs** | tab/tablist/tabpanel trio, roving tabindex, parent-child coordination |
| Overlays | **evo-dialog** | Native `<dialog>`, focus trap, `aria-labelledby`, lifecycle |
| Complex interactive | **evo-listbox** | Closest analog to combobox; listbox/option widget, roving tabindex, type-ahead |
| Compound | **evo-menu-button** | Orchestrates menu + button + filter-chip; most complex AttrTag slot composition |

Phases 3 and 4 (website docs mining) can run in parallel once this file is reviewed.
