# Story and Docs Discrepancies: Choice controls (#1155)

**Date:** 2026-11-25
**Status:** Reference document for the pull request that fixes #1155
**Related:** [ADR 0008](../0008-skin-storybook-docs-integration.md) (the `<component-demo>` design), [#1146](https://github.com/eBay/evo-web/issues/1146) (parent issue), [#1155](https://github.com/eBay/evo-web/issues/1155)

## Purpose

This pull request moves the choice controls Skin CSS docs demos onto `<component-demo>`, which renders each demo and its code sample from the Skin story. The hand-written docs markup and the stories had drifted, and the stories had defects of their own. Because the same markup now serves Storybook and the docs, this pull request fixes those defects instead of carrying them onto the docs: nothing may work or read worse than the old docs example did, and every markup and accessibility defect found in these components' stories and pages is fixed. This document itemizes each discrepancy and what was done about it.

Components: `checkbox`, `radio`, `switch`, `select`, `combobox`, `chips-combobox`, `listbox`, `listbox-button`, `file-input`, `star-rating-select`, `global`.

## 1. Summary

### 1.1 How the stories were checked

1. **Axe:** axe-core with the WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices, on every story of these components in Skin Storybook. Page-level rules that do not apply to an isolated fragment (`region`, `landmark-one-main`, `page-has-heading-one`, `bypass`, `html-has-lang`, `document-title`, `landmark-complementary-is-top-level`) were off.
2. **Static audit:** every story export parsed with the Prettier HTML parser `<highlight-code>` uses, plus checks for unbalanced tags, duplicate ids, `for` and `aria-*` references to missing ids, Marko-only syntax, and root-relative asset paths.
3. **Docs pages:** each page loaded in a browser: HTTP status, script errors, broken images, and the docs-site behaviors these components use.

### 1.2 Results

| Check                                                    | Before          | After |
| -------------------------------------------------------- | --------------- | ----- |
| Stories with any axe violation                           | 79              | 4     |
| Of those, stories whose only violation is color contrast | not recorded    | 3     |
| Story exports with static-audit findings                 | see 3.1 and 3.2 | 0     |

Remaining axe findings other than color contrast:

- skin-checkbox-mixed--base (aria-conditional-attr)

Color contrast is reported but not changed: the findings are disabled states (exempt under WCAG 1.4.3), stories that apply a deliberate test color, or `aria-hidden` text.

### 1.3 Follow-up items

1. [Replace `aria-checked="mixed"` on the native mixed checkbox with the `indeterminate` property](../../../agent-feedback/items/2026-11-25-checkbox-mixed-aria-checked.md)

## Mixed checkbox, carried over unchanged

Decision recorded 2026-11-25: the mixed checkbox moves to `<component-demo>` exactly as it was, and its pattern is left for a follow-up ([feedback item](../../../agent-feedback/items/2026-11-25-checkbox-mixed-aria-checked.md)). It is the one remaining non-contrast axe finding in this pull request's components.

**What the story and docs do.** The only mixed story is `Skin/Checkbox/Mixed` `base` (`packages/skin/src/sass/checkbox/stories/mixed.stories.js`). It matches the old docs demo apart from the `aria-label` text and a `name` attribute:

```html
<span class="checkbox">
  <input
    aria-checked="mixed"
    aria-label="Mixed checkbox"
    class="checkbox__control"
    type="checkbox"
    checked
  />
  <span class="checkbox__icon" hidden>
    <svg aria-hidden="true" class="checkbox__unchecked">
      <use href="#icon-checkbox-unchecked-18"></use>
    </svg>
    <svg aria-hidden="true" class="checkbox__checked">
      <use href="#icon-checkbox-mixed-18"></use>
    </svg>
  </span>
</span>
```

1. **How it looks mixed.** The input is natively `checked`, and the icon in the `checkbox__checked` slot is the mixed glyph instead of the checkmark. `checkbox.scss` has no rule for `aria-checked` or `:indeterminate`; the mixed look comes entirely from that icon swap.
2. **What the page tells consumers.** "For a mixed checkbox, that is partially checked, or indeterminate, apply the `aria-checked="mixed"` state and use `icon-checkbox-mixed-18`", with the note "JavaScript is required to toggle the aria-checked state."
3. **Frameworks.** evo-marko, evo-react and ebayui-core have no mixed checkbox, so there is no implementation to follow.

**Why it is a defect.**

1. **Semantics.** ARIA in HTML says authors must not use `aria-checked` on `<input type="checkbox">`, and HTML-AAM exposes the native checked state for it, so by specification assistive technology is told "checked" while the control looks mixed. Axe reports this as `aria-conditional-attr`. Not yet confirmed with a screen reader.
2. **Behavior.** Activating the checkbox flips its native `checked` state, so the icon switches to unchecked while `aria-checked="mixed"` stays in the markup unless script removes it.

**Options for the follow-up.**

1. **Native `indeterminate` property (recommended).** Browsers expose an indeterminate checkbox as "mixed". The property cannot be set in HTML, so the story would set it in a Storybook-only `<script>` (the precedent this pull request uses for dialogs), and `src/routes/_index/main.js` would set it on the docs demo. The icon swap stays, so nothing changes visually. The prose changes to "set the `indeterminate` property", and `aria-checked` is removed.
2. **Custom checkbox.** A non-native element with `role="checkbox"`, `tabindex="0"` and `aria-checked="mixed"`, where `aria-checked` is allowed. This needs keyboard handling the native input gives for free and does not match the rest of the Checkbox component.
3. **Either way**, a framework mixed-checkbox implementation should follow the same pattern.

## 2. Why an existing story changed

1. **Unparseable markup.** `<highlight-code>` formats story markup with Prettier; markup it cannot parse returns HTTP 500 for the whole docs page.
2. **Root-relative asset paths.** The docs site is served under a base path, so `/img/...` 404s once deployed.
3. **Ids that collide on one page.** A docs page renders several stories together; shared ids make labels and `aria-*` references point at another story's element.
4. **Dialogs that render open.** Legacy dialogs show unless `hidden`; following the Dialog page's precedent, each story carries the docs trigger, `hidden`, an `id`, and a Storybook-only script that reveals it.
5. **Hooks the docs-site script reads.** Only the attribute `src/routes/_index/main.js` needs, where the demo does nothing without it.
6. **Accessibility defects.** Axe violations (WCAG 2.2 A and AA, best practices) and static-audit findings.
7. **Function or accessibility the old docs example had.** Where the story was weaker than the hand-written example it replaces.

## 3. Existing stories changed

### 3.1 Changes forced by the docs page

- `radio` `groupedInline` and `groupedStacked` (new exports): the stacked group uses `name="radio-group-stacked"` and both groups use values 1, 2, 3. Reason: both demos render on one page, and a shared `name` made them one radio group (choosing in one cleared the other); the old docs had the same collision and a duplicate `value="3"`. Percy: none.
- `chips-combobox` `fluid`, `prefilled`, `disabledState`, `errorState`: renumbered from instance 1 to instances 2 to 5 (`chips-combobox-N-input`, `listbox-chips-combobox-N`, `chip-interactive-N-*-text`). Reason: ids collided when the stories share the docs page. Percy: none.
- `combobox` `disabled`: `listbox1` renamed `listbox2`. Reason: id collided with `collapsed` on the docs page. Percy: none.

### 3.2 Accessibility and markup fixes, by component

### checkbox

- checkbox/stories/checked.stories.js multiLineLabel: wrapped in `<fieldset>` (it had a `<legend>` with no `<fieldset>` and a stray closing `</div>`); removed `aria-label="Multiline checkbox N"` from the inputs, which overrode their associated visible labels. Reason: static finding (unparseable, unbalanced tags); defect found during the migration. Percy: possibly visible (fieldset border/legend default styles).

### chips-combobox

- chips-combobox/stories/chips-combobox.stories.js, rtl-chips-combobox.stories.js (all exports): combobox input gained `aria-expanded`, `aria-controls` (same listbox as its `aria-owns`) and `aria-label="Add Sport"` (matching its placeholder); the listbox gained `aria-label="Add Sport"`. Reason: axe aria-required-attr; defect found during the migration (placeholder-only name). Percy: none.
- chips-combobox/stories/chips-combobox.stories.js, rtl-chips-combobox.stories.js manyChips: chip text ids renumbered `chip-interactive-1-1-text` to `-15-text` (13 chips reused `-1-text`), with each Remove button's `aria-describedby` following. Reason: static finding (duplicate ids). Percy: none.

- chips-combobox/stories/chips-combobox.stories.js, rtl-chips-combobox.stories.js disabledState: the three chip Remove buttons gained `disabled`. Reason: the old docs demo and its prose require `disabled` on all buttons inside; the story left them keyboard-focusable in a "frozen" control. Percy: possibly visible (disabled button default colors).

### combobox

- combobox/stories/combobox.stories.js (all 11 exports): every `role="combobox"` input now has `aria-expanded` (`true` in the `combobox--expanded` stories, which lacked it in actionable and actionableRTL), `aria-label="Combobox demo"` (named only by placeholder) and `aria-owns` pointing at its listbox (missing in 9) plus `aria-controls` to the same listbox (ARIA 1.2 requires it on an expanded combobox); every `role="listbox"` gained `aria-label="Combobox demo"`. Reason: axe aria-required-attr, aria-input-field-name; restores old docs attributes (`aria-label`, `aria-owns`). Percy: none.

### global

- global/stories/global.stories.js alignment, RTLAlignment, alignmentLarge: added `aria-label="Select demo"` to `<select>` and `aria-label="Combobox demo"` to the combobox input (named only by placeholder). Reason: axe select-name; defect found during the migration (placeholder-only names). Percy: none.
- global/stories/global.stories.js RTLAlignment: closing `<div>` changed to `</div>`. Reason: static finding (unbalanced tags). Percy: none.

### listbox

- listbox/stories/listbox.stories.js unselected, selected, multiSelected, subtitleUnselected, subtitleSelected, textSpacing: added `aria-label="Listbox demo"` to the `role="listbox"` element. Reason: axe aria-input-field-name; restores old docs attribute. Percy: none.
- listbox/stories/cascade.stories.js RTL, color, fontSize: added `aria-label="Listbox demo"`. Reason: axe aria-input-field-name. Percy: none.
- listbox/stories/listbox.stories.js unselected: Option 3 now `aria-disabled="true"` and an Option 4 added, as in the old docs demo. Reason: restores old docs attribute (the docs showed a disabled option). Percy: visible (fourth option, third option disabled).
- listbox/stories/listbox.stories.js unselected, selected, subtitleSelected: added `data-makeup-auto-select="true"` to the root. Reason: restores old docs attribute; `src/routes/_index/main.js` reads it to make selection follow focus, as the old docs demos did. Percy: none.

### listbox-button

- listbox-button/stories/{base,cascade,dimensions,form,subtitle}.stories.js and error/{error.base,error.cascade,error.dimensions,error.form}.stories.js (all 40 exports with a listbox popup): added `aria-label` to the `role="listbox"` element, taken from the button's own label ("Color" or "Quantity"). Reason: axe aria-input-field-name. Percy: none.
- listbox-button/stories/base.stories.js collapsedUnselected, error/error.base.stories.js collapsedUnselected, form.stories.js enabled: the "Yellow" option now has `aria-disabled="true"`. Reason: restores old docs attribute (the docs demos showed a disabled option). Percy: none (popup is collapsed).
- listbox-button/stories/base.stories.js collapsedSelected: added `tabindex="0"` to the listbox. Reason: restores old docs attribute. Percy: none.

### radio

- radio/stories/unchecked.stories.js base, checked.stories.js disabled: `aria-label` "Foreground SVG radio example" and "Disabled Foreground SVG radio example" changed to "Base radio example" and "Disabled radio example", close to the old docs text. Reason: the names described an implementation detail, and the docs code sample copies them. Percy: none.

### select

- select/stories/default.stories.js defaultSelection, forcedSelection, disabled, fluid, borderless, large, underline, invalid, textSpacing: added `aria-label="Select demo"` to `<select>`. Reason: axe select-name; restores old docs attribute (the Select page's demos all had it). Percy: none.
- select/stories/cascade.stories.js RTL, fontSize, color: added `aria-label="Select demo"` to `<select>`. Reason: axe select-name. Percy: none.
- select/stories/floating-label.stories.js selectedOption: label `for` and select `id` `select-01` to `select-02`. Reason: static finding (id shared with defaultLabel; collides when both render on one page). Percy: none.
- select/stories/floating-label.stories.js disabled: label `for="select-03"` pointed at the errorState select; gave the select `id="select-04"` and pointed the label at it. Reason: static finding (dangling/misdirected for); axe select-name. Percy: none.

### switch

- switch/stories/script.stories.js on, onDisabled, off, offDisabled: added `aria-label="Switch Demo"` and `tabindex="0"` (enabled) or `tabindex="-1"` (disabled) to the `switch__control`. Reason: axe aria-toggle-field-name; restores old docs attributes (the Switch page prose requires the tabindex). Percy: none.
- switch/stories/script.stories.js customProperties (new this PR): label text aligned to `Switch Demo`. Reason: consistency with the restored docs value. Percy: none.
- switch/stories/form.stories.js on, RTL, onDisabled, off, offDisabled: added `aria-label="Checkbox switch demo"` to the input. Reason: axe label; restores old docs attribute. Percy: none.

## 4. Docs pages

- src/routes/_index/components/switch/css+page.marko: "Default Switch" and "Disabled Switch" demos, static until now, replaced with `<component-demo>` for `switch:script/off` and `switch:script/offDisabled` (stories fixed above).
- src/routes/_index/components/listbox/css+page.marko: "Listbox with subtitles" heading reused `id="listbox-selected"`; now `id="listbox-subtitles"`.
- src/routes/_index/components/listbox-button/css+page.marko: "Listbox Button with option description" heading reused `id="listbox-button-unselected"`; now `id="listbox-button-description"`.

Demos that stay static on purpose:

None.

## 5. Docs-site changes outside the CSS pages

- `src/routes/_index/main.js`, switch: `makeup-switch` attaches only to `.switch:has(> span.switch__control)`; the form-switch stories lack the docs-only `switch--form` class, so the checkbox switches would otherwise get the script-driven widget.

## 6. New story exports

10 new exports. They add Percy snapshots and change none.

- `checkbox/stories/checked.stories.js`: `groupedInline`, `groupedStacked`, `large`
- `listbox-button/stories/base.stories.js`: `floatingLabelUnselected`
- `radio/stories/unchecked.stories.js`: `groupedInline`, `groupedStacked`, `large`
- `select/stories/default.stories.js`: `selectedOption`
- `star-rating-select/stories/star-rating-select.stories.js`: `withFieldset`
- `switch/stories/script.stories.js`: `customProperties`

## 7. Accessibility attributes compared with the old docs examples

For each migrated demo, the accessibility attributes (`role`, `aria-*`, `tabindex`, `for`, `alt`) counted by name in the old docs example and in the story. A count difference can mean the story has more or fewer elements, so each entry says why it is not a regression.

### 7.1 Attributes the old example had that the story does not

1. combobox, **Default Combobox** (`combobox:collapsed`): lacks `role="option"`. The story adds `aria-label`, `aria-controls`, `aria-expanded`. Not a gap: the collapsed story renders no options; the input gained its name, `aria-controls` and `aria-expanded`.
1. combobox, **Disabled Combobox** (`combobox:disabled`): lacks `role="option"`. The story adds `aria-label`, `aria-controls`, `aria-expanded`. Not a gap: the disabled story renders no options; the input gained its name, `aria-controls` and `aria-expanded`.

### 7.2 Attributes the story adds

1. chips-combobox, **Empty Chips Combobox** (`chips-combobox:base/empty`): adds `aria-label ×2`, `aria-expanded`, `aria-controls`.
1. chips-combobox, **Fluid Chips Combobox** (`chips-combobox:base/fluid`): adds `aria-label ×2`, `aria-expanded`, `aria-controls`.
1. chips-combobox, **Prefilled Chips Combobox** (`chips-combobox:base/prefilled`): adds `aria-label ×2`, `aria-expanded`, `aria-controls`.
1. chips-combobox, **Chips Combobox in Disabled State** (`chips-combobox:base/disabledState`): adds `aria-label ×2`, `aria-expanded`, `aria-controls`.
1. chips-combobox, **Chips Combobox in Error State** (`chips-combobox:base/errorState`): adds `aria-label ×2`, `aria-expanded`, `aria-controls`.
1. listbox-button, **Unselected Listbox Button** (`listbox-button:base/collapsedUnselected`): adds `aria-label`.
1. listbox-button, **Unselected Listbox Button** (`listbox-button:base/floatingLabelUnselected`): adds `aria-label`.
1. listbox-button, **Selected Listbox Button** (`listbox-button:base/collapsedSelected`): adds `aria-label`.
1. listbox-button, **Selected Listbox Button** (`listbox-button:base/floatingLabelSelected`): adds `tabindex`, `aria-label`.
1. listbox-button, **Listbox Button with option description** (`listbox-button:with-subtitle/collapsedUnselected`): adds `aria-label`.
1. listbox-button, **Borderless** (`listbox-button:base/borderless`): adds `aria-label`.
1. listbox-button, **Error State** (`listbox-button:error-base/collapsedUnselected`): adds `aria-label`.
1. listbox-button, **Form Variant** (`listbox-button:form/enabled`): adds `aria-label`.

## 8. Per-demo comparison: old docs markup against the story that replaced it

44 old demos compared: 10 identical and 34 with differences.

The old demo is the markup inside its `demo__inner` wrapper on `main`, with Marko-only syntax converted to HTML; the new markup is the story output with `<script>` removed. Compared: class names; `role`, `aria-*`, `tabindex`, `hidden`, `disabled`, `type`, `data-*`, `src`, `checked`, `selected`, `readonly`, `required`, `name` and `value` attributes; element count; and text content. Ignored: whitespace, attribute order, `id` values, and anything inside `<svg>`; id-reference attributes are compared by presence only. "Identical" means identical under these rules, not byte for byte. Old demos are matched to new tags by the prose between them, or in order where the page had examples without a demo wrapper or corrected prose.

### checkbox

1. **Default Checkbox** → `checkbox:checked/base`: attributes added: aria-label="Base checkbox"; removed: aria-label="Default checkbox example", name="checkbox-default".
1. **Mixed Checkbox** → `checkbox:mixed/base`: attributes added: aria-label="Mixed checkbox"; removed: aria-label="Mixed checkbox example", name="checkbox-default".
1. **Large Checkbox** → `checkbox:checked/large`: identical.
1. **Disabled Checkbox** → `checkbox:checked/disabled`: attributes added: aria-label="Disabled checkbox"; removed: aria-label="Disabled checkbox example", name="checkbox-svg".
1. **Grouped Checkboxes** → `checkbox:checked/groupedInline`: identical.
1. **Grouped Checkboxes** → `checkbox:checked/groupedStacked`: identical.

### chips-combobox

1. **Empty Chips Combobox** → `chips-combobox:base/empty`: classes added: combobox__listbox--set-position; attributes added: aria-label="Add Sport" ×2, aria-expanded="false", aria-controls.
1. **Fluid Chips Combobox** → `chips-combobox:base/fluid`: classes added: combobox__listbox--set-position; attributes added: aria-label="Add Sport" ×2, aria-expanded="false", aria-controls.
1. **Prefilled Chips Combobox** → `chips-combobox:base/prefilled`: classes added: combobox__listbox--set-position; attributes added: aria-label="Add Sport" ×2, aria-expanded="false", aria-controls.
1. **Chips Combobox in Disabled State** → `chips-combobox:base/disabledState`: classes added: combobox__listbox--set-position; attributes added: aria-label="Add Sport" ×2, aria-expanded="false", aria-controls.
1. **Chips Combobox in Error State** → `chips-combobox:base/errorState`: classes added: combobox__listbox--set-position; attributes added: aria-label="Add Sport" ×2, aria-expanded="false", aria-controls.

### combobox

1. **Default Combobox** → `combobox:collapsed`: classes added: combobox__listbox--set-position; removed: combobox__option; attributes added: aria-label="Combobox demo", aria-controls, aria-expanded="false"; removed: role="option"; elements 12 → 9; text content differs.
1. **Disabled Combobox** → `combobox:disabled`: classes added: combobox__listbox--set-position; removed: combobox__option; attributes added: aria-label="Combobox demo", name="combobox-default", aria-controls, aria-expanded="false"; removed: name="combobox-disabled", role="option"; elements 12 → 9; text content differs.

### file-input

1. **Base** → `file-input:base`: identical.

### listbox

1. **Unselected Listbox** → `listbox:unselected`: attributes added: aria-label="Listbox demo"; removed: aria-label="Listbox demo 1".
1. **Selected Listbox** → `listbox:selected`: attributes added: aria-label="Listbox demo"; removed: aria-label="Listbox demo 2".
1. **Listbox with subtitles** → `listbox:subtitleSelected`: attributes added: aria-label="Listbox demo"; removed: aria-label="Listbox demo 2"; text content differs.

### listbox-button

1. **Unselected Listbox Button** → `listbox-button:base/collapsedUnselected`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Color"; removed: data-makeup-auto-select="false".
1. **Unselected Listbox Button** → `listbox-button:base/floatingLabelUnselected`: attributes added: aria-label="Color".
1. **Selected Listbox Button** → `listbox-button:base/collapsedSelected`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Color"; removed: data-makeup-auto-select="false", data-listbox-button-prefix="Color: ".
1. **Selected Listbox Button** → `listbox-button:base/floatingLabelSelected`: classes added: listbox-button__listbox--set-position; attributes added: tabindex="0", aria-label="Color"; removed: data-makeup-auto-select="false"; text content differs.
1. **Listbox Button with option description** → `listbox-button:with-subtitle/collapsedUnselected`: classes added: listbox-button__listbox--set-position; removed: listbox-button__description, clipped; attributes added: aria-label="Color"; removed: data-makeup-auto-select="false"; elements 28 → 26; text content differs.
1. **Borderless** → `listbox-button:base/borderless`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Quantity"; removed: data-listbox-button-prefix="Quantity: ".
1. **Error State** → `listbox-button:error-base/collapsedUnselected`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Color"; removed: data-makeup-auto-select="false".
1. **Form Variant** → `listbox-button:form/enabled`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Color"; removed: data-makeup-auto-select="false".

### radio

1. **Default Radio** → `radio:unchecked/base`: attributes added: aria-label="Base radio example", name="r2"; removed: aria-label="Default radio example", name="radio-default".
1. **Large Radio** → `radio:unchecked/large`: identical.
1. **Disabled Radio** → `radio:checked/disabled`: attributes added: name="r3"; removed: name="radio-disabled".
1. **Grouped Radio** → `radio:unchecked/groupedInline`: attributes added: value="2"; removed: value="3".
1. **Grouped Radio** → `radio:unchecked/groupedStacked`: attributes added: value="2", name="radio-group-stacked" ×3; removed: value="3", name="radio-group" ×3.

### select

1. **Default select** → `select:defaultSelection`: attributes added: value="1", value="2", value="3"; removed: name="options", value="item1", value="item2", value="item3".
1. **Disabled select** → `select:disabled`: attributes added: value="1", value="2", value="3"; removed: name="options", value="item1", value="item2", selected="", value="item3".
1. **Selected option** → `select:selectedOption`: identical.
1. **Unselected Select** → `select:forcedSelection`: identical.
1. **Fluid select** → `select:fluid`: attributes removed: name="options", selected="".
1. **Borderless select** → `select:borderless`: attributes added: value="0", disabled=""; removed: name="options"; elements 6 → 7; text content differs.
1. **Large Select** → `select:large`: attributes removed: value="0", disabled="", selected=""; elements 7 → 6; text content differs.

### star-rating-select

1. **Star Rating Select with Visual Semantic Grouping** → `star-rating-select:withFieldset`: identical.
1. **Star Rating Select with Invisible ARIA Semantic Grouping** → `star-rating-select:empty`: attributes added: name="radio-star-rating-select" ×5; removed: name="star-rating-select-aria" ×5.

### switch

1. **Default Switch** → `switch:script/off`: identical.
1. **Disabled Switch** → `switch:script/offDisabled`: identical.
1. **Checkbox Switch** → `switch:form/off`: classes removed: switch--form.
1. **Disabled Checkbox Switch** → `switch:form/offDisabled`: classes removed: switch--form.
1. **Custom Properties of Switch EXPERIMENTAL** → `switch:script/customProperties`: text content differs.
