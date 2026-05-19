# Phase 4 — Website Docs Mining

Scanned `/src/routes/_index/components/*/accessibility+page.marko` (76 files) and
`/src/routes/_index/accessibility/` (techniques, patterns, anti-patterns, FAQ).

Output organized into five themes that directly feed Phase 5 schema updates.

---

## Theme 1 — Caller obligations not enforceable by the component

These are accessibility requirements that the docs mandate but the component code
cannot enforce. They belong in a new `callerObligations` schema field.

### Form context requirements
Several components require being inside a `<form>` with a submit button — not validated
by the component:
- **checkbox, radio, select**: "must belong inside a form element, and that form element must have a submit button"
- **checkbox**: "Toggling a checkbox should not cause an app update until the related form is submitted"
- **radio**: "Toggling a radio button should not trigger a page reload, popup or any change of context until the related form is explicitly submitted"
- **select**: "select must support form-autofill behaviour of browser"
- **switch**: contrast to checkbox — switch IS appropriate for instant updates (different contract)

**Schema impact**: `callerObligations` needs a `formContext: true` flag and a note about submit-vs-instant-update semantics.

### Visible label requirements
- **checkbox, radio**: "must have a visible, onscreen label" via `<label>` tag
- **checkbox group, radio group, switch group**: "must have a group label" via `<fieldset>`/`<legend>`
- **textbox**: "every textbox must have an associated visible label" via `<label for=...>`; placeholder is NOT a substitute

**Schema impact**: `labelRequirement` field: whether a `<label>` is required, whether a `<fieldset>/<legend>` group is required.

### Structural context requirements
- **pagination**: "must have a heading element" (can be offscreen)
- **tabs**: tablist must be preceded by a heading (from Phase 3 docs)
- **tabs**: panels SHOULD contain an offscreen heading one level below the tablist heading
- **accordion**: Tab navigates through headers; auto-collapse mode "should be used cautiously — it prevents users from comparing content"

**Schema impact**: `callerObligations` needs `precedingHeading` and `panelHeading` fields.

### Open/close behavior obligations
- **infotip**: "must remain expanded until explicitly closed with the close button or programmatically closed by another component" — must NOT collapse on mouseout, blur, or page click
- **infotip**: "must not have overlay content duplicated within an aria-describedby attribute"
- **dialog**: "must not be opened on hover or focus of button" — only on click or application event
- **alert/confirm-dialog**: "should be opened as a result of a user action or critical system event" — not proactively

**Schema impact**: `dismissBehavior` field — when the overlay can and cannot be dismissed.

### Focus placement obligations
- **alert-dialog**: "Initial keyboard focus should be placed on the acknowledgement button"
- **dialog**: "focus must return to the trigger element when dialog is closed" (from Phase 3)
- **menu**: "focus must go to the first item in the menu" when it opens (the menu itself does not receive focus)

**Schema impact**: `initialFocus` field (where focus goes when component opens) and `focusReturn` field (where focus returns on close).

---

## Theme 2 — ARIA patterns documented with explicit guidance

### aria-haspopup rules
- **infotip**: "must NOT have aria-haspopup attribute. Despite the name of this property, it is actually intended specifically for a menu"
- **tooltip**: "must not use aria-haspopup attribute. Tooltips are not considered 'popups' in this context"
- **menu-button**: does use `aria-haspopup` (the correct case)

**Schema impact**: `aria-haspopup` is NOT generic "has popup" — it is specifically for menu/listbox patterns. The schema must document when it is and is not appropriate.

### aria-labelledby composition pattern
Menu-button docs show the pattern for stitching an external label with an internal value:
```html
<span id="el1">Sort by</span>
<button aria-labelledby="el1 el2"><span id="el2">blue</span></button>
```
- The button's label = "Sort by blue" (concatenation of two elements)
- The accessible label must always reflect the current function/value

**Schema impact**: `aria-labelledby` can reference multiple IDs (space-separated) to compose a label from external + internal elements. Schema needs `compoundLabelledBy` pattern.

### aria-invalid + aria-describedby as a pair
From form-validation and input-validation docs:
- `aria-invalid="true"` on the input → announces invalid state
- `aria-describedby` on the input → references the error message element
- These ALWAYS appear together for validation errors
- `aria-required` also works as a CSS hook (not just ARIA)
- `novalidate` on the `<form>` is required to disable browser built-in validation

**Schema impact**: Validation state is a 3-part pattern: `aria-invalid` + `aria-describedby` + `aria-required`. The schema should document them together.

### aria-current vs aria-selected vs aria-pressed
Docs clarify when each is used:
- `aria-current`: used for navigation items (breadcrumb = `aria-current="page"`; active step = `aria-current="step"`; selected tab in fake-tabs)
- `aria-selected`: used for widget selection (real tabs, listbox options)
- `aria-pressed`: used for toggle buttons with two states

These three are mutually exclusive patterns for conveying "this item is active/selected."

**Schema impact**: Schema needs a `selectionAttribute` field that explicitly states which of the three applies, with a note distinguishing when each is correct.

### Badge aria-label composition rule
From icon-button docs:
- Badge count MUST be included in the host button's `aria-label`, not just on the badge
- The badge element itself uses `role="img"` + `aria-label` for standalone use
- When inside a button, badge is typically `aria-hidden`

**Schema impact**: `contextualAriaLabel` — when a component's a11y text must be composed into the parent's label rather than announced independently.

---

## Theme 3 — Roving tabindex vs aria-activedescendant decision matrix

The docs explicitly distinguish the two approaches:

**Roving tabindex** (physical focus movement):
- Focus physically moves to each item
- Each item gets `tabindex=0` when focused, `-1` when not
- Used by: **menu**, **tabs**, **listbox** (implementation), **toggle-button-group** (inferred)
- Characteristic: user can TAB out of the widget from the currently focused item

**aria-activedescendant** (pseudo-focus):
- Focus always stays on one host element (usually a textbox)
- Arrow keys move a visual focus indicator while `aria-activedescendant` tracks which item is "active"
- Used by: **combobox** (docs), **grid** (docs)
- Characteristic: textbox retains focus so user can continue typing

This is a schema-level decision:

| Component category | Strategy | Why |
|---|---|---|
| Menu | Roving tabindex | No typing — pure command list |
| Tabs | Roving tabindex | No typing — panel switching |
| Listbox (standalone) | Roving tabindex | Implementation choice — better cross-browser SR support |
| Combobox / chips-combobox | aria-activedescendant | Textbox must retain focus for continued input |

**Schema impact**: `keyboardModel.focusStrategy: "roving-tabindex" | "aria-activedescendant"` with a `reason` field explaining why.

---

## Theme 4 — Live region rules

From live-region technique page and FAQ:

### When to use
- Dynamic content changes **upstream** from the current focus (error messages, notification counts)
- NOT for downstream changes (the user will encounter them naturally in tab order)
- Snackbar/Toast patterns are the canonical use case — inform without stealing focus

### When NOT to use
- On a focused element (double announcement with some screen readers)
- For content the user just activated (they'll encounter it naturally)
- For every dynamic update — "think about the experience" before adding

### Critical implementation rule
The CSS `display` change must happen on a **descendant** of the live region, NOT on the live
region node itself:
```html
<!-- CORRECT -->
<div aria-live="polite">
  <p style="display:block">Goal!</p>  <!-- descendant changes -->
</div>

<!-- WRONG -->
<div aria-live="polite" style="display:block">  <!-- changing the region itself -->
  <p>Goal!</p>
</div>
```

### Loading state note (from FAQ)
"If visually conveying a loading/waiting state within a button, change the label to 'Busy'. 
If wishing to also convey a final completion state, do that outside of the button (in a 
Snackbar/Toast) using a live-region."

**Schema impact**: `liveRegion` field: `{ type: "polite" | "assertive", reason: string, descendantToggle: boolean }`. The `descendantToggle` flag documents whether the region is shown/hidden by toggling a descendant (not the region itself).

---

## Theme 5 — Toggle button constraint

From toggle-button docs:
- "must be a button (not a link) when using `aria-pressed`"
- "must have only two states (whether conveyed via aria-pressed or text)"
- "The toggle button that uses **visible text** to convey state change must NOT also use `aria-pressed`"

This is an either-or contract:
1. Use `aria-pressed` → state is hidden, button text stays constant
2. Use visible text to convey state → no `aria-pressed`

**Schema impact**: `toggleStateStrategy: "aria-pressed" | "visible-text"` with a note that these are mutually exclusive.

---

## Theme 6 — Offscreen text (`.clipped`) conventions

From offscreen-text technique page:
- The `.clipped` CSS class is the standard for visually hidden text (not `display:none` or `visibility:hidden`)
- **Always append** after visible text — never prepend
- Same rule for `aria-label`: beginning of the `aria-label` must match the visual label
- Use cases: disambiguating links, strikethrough prices, offscreen headings for sections

**Schema impact**: When a component appends offscreen text (like `a11ySelectedText` in listbox), document the pattern as `offscreenTextAppend` with `position: "after"`.

---

## Theme 7 — Icon accessibility rules

From icon and icon-button docs:

**Decorative icon** (inside a labeled button or adjacent to text):
- Must have `aria-hidden="true"`
- The parent context provides the accessible name

**Informative icon** (standalone, conveys meaning):
- Must have `role="img"` and `aria-label`
- No `aria-hidden`

**Icon button**:
- Icon must have `aria-hidden="true"` (button label comes from `aria-label`)
- Badge inside icon button: badge element itself gets `aria-hidden`, count included in button's `aria-label`

**Schema impact**: `iconTreatment: "decorative" | "informative"` on any component that contains icons. `decorative` → `aria-hidden="true"`; `informative` → `role="img"` + `aria-label`.

---

## Theme 8 — Known limitations and spec-edge items

| Item | Source | Schema treatment |
|---|---|---|
| `aria-errormessage` not well supported — use `aria-describedby` | input-validation docs | Note in `validationAriaLinks` |
| HTML5 input type validation (number, date, url) should be avoided | input-validation docs | Caller obligation note |
| `novalidate` on form required to suppress browser validation UI | form-validation docs | Caller obligation for form context |
| `closedby` attribute on dialog — not yet widely supported | dialog overview docs (Phase 3) | `specEdge: true` flag on the behavior |
| Chromium listbox/listbox-button bugs (2 open issues) | known-issues page | Note in `knownIssues` field |
| Active-descendant not used in listbox implementation despite docs describing it | Phase 3 audit | `implementationNote` on keyboardModel |

---

## Cross-cutting additions to contract template

These are guidance items that the design contract MUST supply but currently has no
section for (inputs for `contract-template-additions.md` update in Phase 5):

1. **Form context**: Is this a form control? Must it be inside `<form>`? With submit button?
2. **Label mechanism**: Is a visible `<label>` required? A `<fieldset>/<legend>` group?
3. **Preceding/surrounding structure**: Does this component require a heading before it? An offscreen heading inside it?
4. **Focus placement**: Where should focus go when this component opens? Where should focus return on close?
5. **Open/close trigger rules**: What user actions may open this component? What may close it (light dismiss, explicit button only, etc.)?
6. **Toggle state strategy**: If toggle, use `aria-pressed` or visible text — which?
7. **Icon treatment**: Decorative or informative? Consequence for aria-hidden vs role="img"
8. **Live region justification**: If the component updates content dynamically, does the update need a live region? Upstream or downstream?
