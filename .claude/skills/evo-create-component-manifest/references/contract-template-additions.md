# Contract Template Additions

The real design contract format (as used at eBay) is a rich, design-team-oriented
document with sections like Core Invariants, Flex Zones, Interaction & Lifecycle,
Platform Realizations, and an Accessibility Contract. It is intentionally
implementation-agnostic.

The manifest skill needs specific pieces of information that are typically absent from
contracts written in this format. Each addition below maps to the section of the real
contract where it naturally belongs — no new top-level sections are needed.

---

## 0. Figma URL → Component header

The contract may be written and merged before the Figma design exists. This is a
first-class workflow — the behavioral spec is independent of the visual design.

When writing the contract before Figma exists, explicitly state the absence rather
than omitting the field. This tells the manifest skill the null is intentional, not
a missing piece:

```markdown
**Figma URL**: Not yet available — will be added in the visual-layer contract update.
```

When the Figma design is ready, a second contract update (PR 2) adds the link:

```markdown
**Figma URL**: https://figma.com/design/...
```

Merging PR 2 (after engineer review of the Figma design) triggers the visual-layer
build phase. The engineer's PR approval is the gate — no separate manifest review
step is needed for the visual layer.

---

## 1. Required label strings → Accessibility Contract

The Accessibility Contract describes what assistive technologies must be able to do.
It should also name the specific overridable text strings consumers must supply for
localization.

Without this, the manifest skill cannot populate `a11yProps` and must flag every
i18n-able string as a 🔴 gap.

**Add a "Required label strings" subsection inside Accessibility Contract:**

```markdown
### Required label strings

These strings are passed as props and must be overridable for localization.

- `a11yText` (required, allowNull) — default: none — The accessible label for
  the component. Typically "Signed in as [name]" or "Signed out". Pass null
  only if a parent element already provides an accessible label for this
  component.
- `a11yLoadingText` (optional) — default: "loading" — Announced when the
  component enters a loading state.
```

Include one entry per string. State the prop name, whether it is required,
its default English value, and when it is announced or used.

---

## 2. Explicit screen reader announcement → Accessibility Contract

The Accessibility Contract often states what assistive technologies *must be
able to do* but not what they *actually say*. The manifest skill needs the latter
to populate `a11y.screenReaderAnnouncement`.

**Add a "Screen reader announcement" subsection inside Accessibility Contract:**

```markdown
### Screen reader announcement

When encountered, a screen reader announces the value of `a11yText` — typically
"Signed in as [name]" or "Signed out". This component is purely presentational;
it is not announced as a button or interactive element.
```

For components with state changes:

```markdown
### Screen reader announcement

The button label is announced normally. When in loading state, the label is
replaced by the value of `a11yLoadingText` (default: "loading"). This change
is announced reactively — the screen reader does not need to refocus.
```

Plain English is sufficient. The engineer translates this to ARIA.

---

## 3. Keyboard focusability → Accessibility Contract

Many contracts address interactive vs. non-interactive in general terms but do
not explicitly state whether the component is keyboard focusable by default,
or what happens to focus when disabled.

**Add a "Keyboard focusability" subsection inside Accessibility Contract:**

For a non-interactive component:
```markdown
### Keyboard focusability

Not keyboard focusable on its own. If placed inside a `<button>` or `<a>`,
the parent receives focus — not this component. No tab stop.
```

For an interactive component with a disabled state:
```markdown
### Keyboard focusability

Focusable. When `disabled` is true, the element is removed from tab order
entirely. When `partiallyDisabled` is true, the element remains in tab order
but does not respond to activation (Space/Enter).
```

If the component has non-native keyboard interactions, add a table:
```markdown
### Keyboard interactions

| Key    | Condition    | Action                          |
|--------|--------------|---------------------------------|
| Escape | not disabled | Dismiss/cancel — fires onEscape |
```

If no custom interactions exist, state: "No custom keyboard interactions.
Native element semantics apply."

---

## 4. Slot structure → Platform Realizations › Web

The Platform Realizations › Web section is where named content regions (slots)
should be called out. The key distinction is whether a named slot accepts free
content or structured markup — these are different implementation patterns.

**Add a "Content regions" table inside Platform Realizations › Web:**

```markdown
### Web

...existing content...

**Content regions:**

| Slot    | Required | Type                           | Description |
|---------|----------|--------------------------------|-------------|
| `image` | No       | Structured markup (`<@image>`) | Profile photo. Passes through all `<img>` attributes; `alt` is forced to `""` since the root element provides the label. |
| default | No       | Any content                    | Optional overlay (e.g. status badge). |
```

If the component has no named slots, state: "Single content area — no named slots."

---

## 5. Widget type → Accessibility Contract

For interactive components that implement a WAI-ARIA widget role (menu, listbox,
tabs, combobox), the contract must declare which widget pattern applies. This
determines the keyboard model, ARIA role system, and focus strategy the engineer
uses.

Without this, the manifest skill cannot populate `widgetRole`, `keyboardModel`,
or `a11y.focusStrategy`.

**Add a "Widget type" subsection inside Accessibility Contract:**

For a full widget:
```markdown
### Widget type

This component implements the WAI-ARIA **Tabs** widget pattern:
- The tab list (`role="tablist"`) contains tab buttons (`role="tab"`)
- Each tab controls a panel (`role="tabpanel"`) via `aria-controls`
- Keyboard navigation uses a roving tab index — only one tab is in the
  tab order at any time; arrow keys navigate between tabs
- `autoSelect` mode: arrow key navigation also selects the panel
- `manual` mode: arrow key moves focus; SPACE or ENTER selects
```

For a simpler widget:
```markdown
### Widget type

This component implements the WAI-ARIA **Listbox** widget pattern
(`role="listbox"` + `role="option"`). Uses roving tabindex with type-ahead
character search. Renders an additional hidden native `<select>` for form
submission.
```

For a non-widget:
```markdown
### Widget type

Not a widget — native element semantics handle all keyboard behavior.
```

---

## 6. Open/close trigger rules → Accessibility Contract

For components with expanded/collapsed states (dialogs, menus, tooltips, infotips),
the contract must state what may open and close them. This populates
`callerObligations`, `a11y.initialFocus`, `a11y.focusReturn`, and the
`lightDismiss` behavior.

**Add an "Open/close rules" subsection inside Accessibility Contract:**

For a dialog:
```markdown
### Open/close rules

**Opens on:** Click-event on a trigger button, or via application event. Must
NOT open on hover or focus of the trigger — this violates WCAG 3.2.1.

**Closes on:** Click of the dismiss button, or Escape key (light dismiss).

**Initial focus:** First interactive element inside the dialog (browser-native
`showModal()` behavior).

**Focus return:** Focus must return to the element that opened the dialog.
This is the caller's responsibility — the component does not handle it.
```

For a menu:
```markdown
### Open/close rules

**Opens on:** Click of the trigger button (not hover, not focus).

**Closes on:** Escape key; click outside the menu (light dismiss); selecting
an item (when collapseOnSelect is enabled).

**Initial focus:** First item in the menu (the menu container itself does not
receive focus).

**Focus return:** Returns to the trigger button automatically when menu closes.
```

For a tooltip:
```markdown
### Open/close rules

**Opens on:** Focus or hover of the host element.

**Closes on:** Blur or mouseout of the host element. Must NOT close on
mouseout/blur of the overlay itself — the user must be able to read the content.

**Initial focus:** Not applicable — tooltip is non-modal and does not receive focus.

**Focus return:** Not applicable.
```

---

## 7. Form context → Platform Realizations › Web

Form controls that must live inside a `<form>` with a submit button need to declare
this explicitly. Without it, the manifest skill cannot populate `callerObligations`
for form-context requirements.

**Add a "Form context" line inside Platform Realizations › Web:**

For a form control:
```markdown
### Form context

This component is a form control. It must be placed inside a `<form>` element
that has a submit button. Changing the input value should not immediately submit
the form or trigger a page reload — wait for explicit form submission.

Add `novalidate` to the `<form>` element to suppress browser built-in validation
UI, which conflicts with design system validation patterns.
```

For a component that is NOT a form control:
```markdown
### Form context

Not a form control. Does not need to be inside a `<form>`.
```

---

## 8. Label mechanism → Accessibility Contract

When a component requires an external `<label>` element or a `<fieldset>`/`<legend>`
group, the contract must state this. Without it, the manifest skill cannot add the
appropriate `callerObligation`.

**Add a "Label mechanism" subsection inside Accessibility Contract:**

For a simple form control:
```markdown
### Label mechanism

Requires a visible `<label>` element with `for=` matching the component's `id`
prop. Placeholder text is NOT a substitute for a label — it disappears on input
and has insufficient contrast.

If a visible label is not possible (e.g. search field), use the `aria-label`
prop to provide an accessible name.
```

For a form control group (checkboxes, radios, switch):
```markdown
### Label mechanism

Individual controls require a visible `<label>` element.
The group requires a visible group label provided via `<fieldset>` and `<legend>`.
```

For a component that provides its own label:
```markdown
### Label mechanism

Self-labelled — no external label element required. The component's accessible
name comes from [the a11yText prop | the visible button content | ...].
```

---

## 9. Toggle state strategy → Accessibility Contract

Toggle controls (buttons that switch between two states) must declare whether they
use `aria-pressed` or visible text to convey state. These are mutually exclusive —
using both is incorrect.

**Add a "Toggle state" line inside Accessibility Contract:**

If using `aria-pressed`:
```markdown
### Toggle state

State is conveyed via `aria-pressed`. The visible button label stays constant
(e.g. always "Mute"). Do NOT also change the label text to reflect state — that
would double-announce the state.
```

If using visible text:
```markdown
### Toggle state

State is conveyed by the visible button label, which changes between "Follow"
and "Following". Do NOT also add `aria-pressed` — the changing label already
communicates state.
```

---

## What does NOT belong in the design contract

These fields are filled autonomously by the agent from codebase data — adding them
to the contract creates false completeness and burdens design teams unnecessarily.

| What to omit | Where the agent gets it instead |
|---|---|
| BEM class names | `audit-output/components/<name>.json` → `skin.bemBlocks/Elements/Modifiers` |
| CSS custom property names | `audit-output/components/<name>.json` → `skin.cssCustomProperties` |
| ARIA attribute names and values | `audit-output/components/<name>.json` → `marko.templateAriaUsages` |
| Icon and component dependencies | `audit-output/components/<name>.json` → `marko.subComponents` |
| RTL behavior | `audit-output/components/<name>.json` → `skin.rtlOverrides` |
| TypeScript types and prop signatures | Engineer fills at Gate 2 — genuinely requires interpretation |
| Storybook category path | Engineer fills at Gate 2 — naming convention decision |
| Internal algorithms (color hashing, etc.) | Engineer fills at Gate 2 — but contract *should* describe the behavior in plain English so the engineer knows what to implement |

---

## Summary

Nine targeted additions to the existing contract format — all fitting inside sections
that already exist — cover everything the manifest skill needs:

| What to add | Where in the real contract |
|---|---|
| Required label strings (prop names + defaults) | Accessibility Contract |
| Explicit screen reader announcement | Accessibility Contract |
| Keyboard focusability (+ custom key interactions) | Accessibility Contract |
| Widget type (ARIA widget pattern, keyboard model) | Accessibility Contract |
| Open/close trigger rules (initial focus, focus return) | Accessibility Contract |
| Label mechanism (external label / fieldset required?) | Accessibility Contract |
| Toggle state strategy (aria-pressed vs visible text) | Accessibility Contract |
| Slot structure (free content vs. structured markup) | Platform Realizations › Web |
| Form context (must be in `<form>`? novalidate?) | Platform Realizations › Web |

RTL and color/spacing behavior are not listed here — these are Skin-layer invariants
enforced by convention across all components and do not need to be declared in the
design contract.
