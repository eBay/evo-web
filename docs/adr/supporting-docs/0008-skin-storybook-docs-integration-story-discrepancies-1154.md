# Story and Docs Discrepancies: Text inputs (#1154)

**Date:** 2026-11-25
**Status:** Reference document for the pull request that fixes #1154
**Related:** [ADR 0008](../0008-skin-storybook-docs-integration.md) (the `<component-demo>` design), [#1146](https://github.com/eBay/evo-web/issues/1146) (parent issue), [#1154](https://github.com/eBay/evo-web/issues/1154)

## Purpose

This pull request moves the text inputs Skin CSS docs demos onto `<component-demo>`, which renders each demo and its code sample from the Skin story. The hand-written docs markup and the stories had drifted, and the stories had defects of their own. Because the same markup now serves Storybook and the docs, this pull request fixes those defects instead of carrying them onto the docs: nothing may work or read worse than the old docs example did, and every markup and accessibility defect found in these components' stories and pages is fixed. This document itemizes each discrepancy and what was done about it.

Components: `textbox`, `field`, `floating-label`, `number-input`, `phone-input`, `date-textbox`, `filter-input`.

## 1. Summary

### 1.1 How the stories were checked

1. **Axe:** axe-core with the WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices, on every story of these components in Skin Storybook. Page-level rules that do not apply to an isolated fragment (`region`, `landmark-one-main`, `page-has-heading-one`, `bypass`, `html-has-lang`, `document-title`, `landmark-complementary-is-top-level`) were off.
2. **Static audit:** every story export parsed with the Prettier HTML parser `<highlight-code>` uses, plus checks for unbalanced tags, duplicate ids, `for` and `aria-*` references to missing ids, Marko-only syntax, and root-relative asset paths.
3. **Docs pages:** each page loaded in a browser: HTTP status, script errors, broken images, and the docs-site behaviors these components use.

### 1.2 Results

| Check                                                    | Before          | After |
| -------------------------------------------------------- | --------------- | ----- |
| Stories with any axe violation                           | 32              | 2     |
| Of those, stories whose only violation is color contrast | not recorded    | 2     |
| Story exports with static-audit findings                 | see 3.1 and 3.2 | 0     |

Remaining axe findings other than color contrast:

None.

Color contrast is reported but not changed: the findings are disabled states (exempt under WCAG 1.4.3), stories that apply a deliberate test color, or `aria-hidden` text.

### 1.3 Follow-up items

None for these components.

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

- `textbox/stories/textbox.stories.js` `prefix`: `placeholder"0.00"` fixed to `placeholder="0.00"`. Reason: unparseable markup. Percy: visible (placeholder shows).
- `field/unstacked` `blockLevel` and `disabled`, and `field/helper-texts-stacked` `descriptionCharacterMeter`: colliding ids renamed (`field-block-*`, `field-disabled-*`, `field-character-2*`). Reason: ids collided on the docs page. Percy: none.
- `field/helper-texts-stacked` `characterMeterOnly`, `descriptionCharacterMeter`: added `data-field-count`. Reason: the docs-site script reads it to update the counter. Percy: none.
- `floating-label` `longText`: `firstName` renamed `firstNameLongText`; `invalidTextbox`: label `for` pointed at the `base` story's input, now its own `firstName03`. Reason: ids collided on the docs page. Percy: none.
- `number-input/with-label` `fluid`: `number-input-1` renamed `number-input-2`. Reason: id collided with `base`. Percy: none.

### 3.2 Accessibility and markup fixes, by component

### date-textbox

- date-textbox/stories/date-textbox.stories.js base, range: added the hidden `.date-textbox__popover` with its calendar, taken verbatim from the old docs demos (Marko icons converted to `<use>`). Reason: restores old docs function; `src/routes/_index/main.js` opens the button's sibling popover, which the stories lacked (the page threw "Cannot read properties of null (reading 'toggleAttribute')"). Percy: none (popover is `hidden`).
- date-textbox/stories/date-textbox.stories.js base, disabled, textSpacing, range: added `aria-label="Date Textbox demo"` to each input. Reason: restores old docs attribute (inputs were named only by placeholder). Percy: none.

### field

- field/stories/stacked.stories.js group: the "First Name" label had `for="password"`; now `for="fname"`, its own input. Reason: axe label (`#fname` unlabelled; the Password input had two labels). Percy: none.
- field/stories/helper-texts-stacked.stories.js fluidDescriptionCharacterMeter, textSpacing: the input's `aria-describedby="field-character-3-description field-character-1"` pointed at a description id that did not exist; the description and counter now use `field-character-3-description` and `field-character-3`. Reason: static finding (dangling aria-describedby). Percy: none.
- field/stories/helper-texts-stacked.stories.js RTL: its three fields reused `field-character-1*` ids; renumbered to `field-character-1*`, `-2*`, `-3*`, which also resolves the third field's dangling `field-character-3-description` reference. Reason: static finding (duplicate ids, dangling aria-describedby). Percy: none.

### filter-input

- filter-input/stories/filter-input.stories.js base, filled, small, large, textSpacing, RTL: `aria-controls="search-results-container-id"` pointed at nothing; each story now ends with an empty `<div id="filter-input-results-<story>">` results container and the input's `aria-controls` points at it. Reason: axe aria-valid-attr-value; static finding (dangling aria-controls); the Filter Input prose requires `aria-controls` to reference the results container. Percy: none.

### floating-label

- floating-label/stories/floating-label.stories.js RTL: `firstName` id and `for` renamed `firstNameRtl`; closing `<div>` changed to `</div>`. Reason: static finding (unbalanced tags; id shared with base). Percy: none.
- floating-label/stories/floating-label.stories.js disabledTextbox: label `for` pointed at `firstName`; now `firstName02`, its own input. Reason: static finding (dangling for); axe label. Percy: none.
- floating-label/stories/floating-label.stories.js invalidTextboxWithValue, invalidTextboxWithPlaceholder: labels pointed at `firstName` and inputs reused `firstName03`; now `firstName04` and `firstName05`, each label pointing at its own input. Reason: static finding (dangling for, duplicate id); axe label. Percy: none.
- floating-label/stories/floating-label.stories.js longTextInline, textSpacing: `firstName` renamed `firstNameLongTextInline`, `firstNameTextSpacing`. Reason: static finding (id shared with base). Percy: none.
- floating-label/stories/floating-label.stories.js TextArea: label `for="first-name"` matched nothing; the textarea now has `id="floating-label-textarea-input"` and the label points at it; its `aria-label="Textbox demo"` (which overrode the visible label) removed. Reason: static finding (dangling for); 1.2 item. Percy: none.
- floating-label/stories/floating-label.stories.js phoneInput: label `for="field1"` matched nothing; the input now has `id="floating-phone-input-0"` and the label points at it; the input's `aria-label` (which overrode the visible label) removed; the country listbox gained `aria-label="Country"`. Reason: static finding (dangling for); axe aria-input-field-name; 1.2 item. Percy: none.
- floating-label/stories/floating-label.stories.js combobox (new this PR): input gained `aria-expanded="false"` and `aria-controls`; listbox gained `aria-label`; input id `floating-label-combobox` renamed `floating-label-combobox-input` (with its label `for`) because the Floating Label page's heading already uses `id="floating-label-combobox"`. Reason: axe aria-required-attr; duplicate id on the docs page. Percy: none.
- floating-label/stories/floating-label.stories.js select, selectInline, selectInlineDoubled (2 selects), RTLSelectInline, selectLarge: each visible floating label now has `for` pointing at its select's new `id`, replacing `aria-label="Select demo"`, which overrode the visible label text. Reason: 1.2 item (labels not associated with their controls; accessible name did not match visible label). Percy: none.

### number-input

- number-input/stories/number-input.stories.js base, fluid, large, withDeleteHidden, withDeleteShown and number-input-with-label.stories.js base, fluid, large: both paddle buttons gained `aria-hidden="true"`; the decrement paddle gained `disabled` where the value is at `min` (all except withDeleteHidden). Reason: axe button-name; restores old docs attributes; matches ebayui-core `ebay-number-input` (`aria-hidden="true"`, `disabled` at min/max) and the page prose ("When the number input is at min or max, the decrement or increment button should be disabled"). Percy: visible (disabled decrement paddle).
- number-input/stories/number-input-with-label.stories.js base, fluid, large: `<span class="textbox number-input">` split into `<span class="number-input"><span class="textbox ...">`. Reason: 1.2 item; the single-element form never matches `.number-input .textbox` rules, and the old docs, the base stories and `ebay-number-input` all nest the textbox inside `number-input`. Percy: possibly visible (number-input textbox rules now apply).
- number-input/stories/number-input.stories.js withDeleteHidden: Marko `<icon-symbol name="delete-24"/>` changed to `<use href="#icon-delete-24"></use>`. Reason: static finding (Marko syntax; the delete icon rendered nothing). Percy: none (button hidden in this story).

### phone-input

- phone-input/stories/phone-input.stories.js Default, Large, ReadOnly, Disabled, Error, Fluid, RTL: the "+1" prefix changed from `<span aria-hidden="true">` to `<span id="phone-prefix-<story>">`, and the input gained `aria-describedby` pointing at it. Reason: restores old docs attribute; 1.2 decision resolved by precedent: both framework implementations (ebayui-core `ebay-phone-input` via `ebay-textbox` prefix-text, and ebayui-core-react `EbayPhoneInput` via `EbayTextboxPrefixText`) give the prefix an id and reference it with `aria-describedby`. There is no evo-marko or evo-react phone input. Percy: none.
- phone-input/stories/phone-input.stories.js (all 11 exports): added `aria-label="Country"` to the country `role="listbox"`. Reason: axe aria-input-field-name. Percy: none.
- phone-input/stories/phone-input.stories.js TextSpacing, overrideFontSize: renamed `phone-number-label-0` and `phone-prefix-1` to per-story ids. Reason: static finding (ids shared with withGroupLabel; collide when stories share a page). Percy: none.
- phone-input/stories/phone-input.stories.js overrideFontSize: closing `<div>` changed to `</div>`. Reason: static finding (unbalanced tags). Percy: none.

### textbox

- textbox/stories/textbox.stories.js large, overrideFontSize, overrideColor, inheritFontSize, inheritColor, error, errorWithValue, disabled, disabledWithValue, fluid, prefix, suffix, prefixAndSuffix: added `aria-label="Textbox demo"` to the unnamed inputs. Reason: axe label (disabledWithValue); 1.2 item (unnamed controls); restores old docs attribute (the Textbox page's demos used it). Percy: none.
- textbox/stories/textbox.stories.js prefix: `<span class="textbox__prefix">$</span>` changed to `<span>$</span>`. Reason: 1.2 item; the class matches no rule, and the Textbox page documents the prefix as a plain `span`. Percy: none.
- textbox/stories/icon.stories.js (8 inputs across base, end, dual, actionable, actionableLarge, dualActionable, dualActionableLarge, fullyDecorated): added `aria-label="Textbox demo"`. Reason: 1.2 item (unnamed controls); restores old docs attribute. Percy: none.
- textbox/stories/rtl/textbox.stories.js, rtl/icon.stories.js (all inputs): added `aria-label="Textbox demo"`. Reason: 1.2 item (unnamed controls, named only by placeholder). Percy: none.

## 4. Docs pages

- src/routes/_index/components/date-textbox/css+page.marko: "Single Select Date Textbox" and "Date Range Textbox" demos, static until now, replaced with `<component-demo>` for `date-textbox:base` and `date-textbox:range` (popover added to the stories above). The "Date Range Textbox" heading reused `id="date-textbox-single"`; now `id="date-textbox-range"`.
- src/routes/_index/components/textbox/css+page.marko: three headings shared `id="textbox-prefix-suffix"`; now `textbox-prefix`, `textbox-postfix`, `textbox-mixed-prefix-postfix`.

Demos that stay static on purpose:

None.

## 5. Docs-site changes outside the CSS pages

None.

## 6. New story exports

25 new exports. They add Percy snapshots and change none.

- `field/stories/helper-texts-stacked.stories.js`: `descriptionCharacterMeterTextarea`
- `field/stories/stacked.stories.js`: `blockLevel`, `descriptionBelow`, `floatingLabelDescription`, `fluidBlock`, `fluidGroup`, `inlineLevel`, `listboxButtonError`, `sideDescription`, `textboxError`
- `field/stories/unstacked.stories.js`: `alignTop`, `fluid`, `fontSize`, `invalid`, `readonly`, `required`, `sideDescription`, `tableDescription`
- `floating-label/stories/floating-label.stories.js`: `combobox`, `large`, `selectLarge`
- `phone-input/stories/phone-input.stories.js`: `errorWithDescription`, `withGroupLabel`
- `textbox/stories/icon.stories.js`: `clearable`, `dualClearable`

## 7. Accessibility attributes compared with the old docs examples

For each migrated demo, the accessibility attributes (`role`, `aria-*`, `tabindex`, `for`, `alt`) counted by name in the old docs example and in the story. A count difference can mean the story has more or fewer elements, so each entry says why it is not a regression.

### 7.1 Attributes the old example had that the story does not

1. floating-label, **Floating Label with Textarea** (`floating-label:TextArea`): lacks `aria-label`. Improvement: named by `<label for>` instead of an `aria-label` that overrode the visible label.
1. floating-label, **Floating Label with select** (`floating-label:select`): lacks `aria-label`. The story adds `for`. Improvement: named by `<label for>` instead of an `aria-label` that overrode the visible label.
1. floating-label, **Floating Label with large select** (`floating-label:selectLarge`): lacks `aria-label`. The story adds `for`. Improvement (new story): named by `<label for>`.

### 7.2 Attributes the story adds

1. field, **Unstacked Field** (`field:unstacked/inlineLevel`): adds `for`, `aria-label`.
1. field, **Unstacked Field** (`field:unstacked/blockLevel`): adds `for`, `aria-label`.
1. field, **Disabled Field** (`field:unstacked/disabled`): adds `for`, `aria-label`.
1. floating-label, **Floating label with Combobox** (`floating-label:combobox`): adds `aria-expanded`, `aria-controls`.
1. number-input, **Large input field** (`number-input:base/large`): adds `aria-label`.
1. phone-input, **Default Phone input** (`phone-input:base/Default`): adds `aria-label`.
1. phone-input, **With Group Label** (`phone-input:base/withGroupLabel`): adds `aria-label`.
1. phone-input, **Large Phone input** (`phone-input:base/Large`): adds `aria-label`.
1. phone-input, **Readonly Phone input** (`phone-input:base/ReadOnly`): adds `aria-label`.
1. phone-input, **Disabled Phone Input** (`phone-input:base/Disabled`): adds `aria-label`.
1. phone-input, **Error Phone Input** (`phone-input:base/errorWithDescription`): adds `aria-label`.
1. phone-input, **Fluid Phone input** (`phone-input:base/Fluid`): adds `aria-label`.
1. textbox, **Textbox Prefix** (`textbox:base/prefix`): adds `aria-label`.
1. textbox, **Textbox Postfix** (`textbox:base/suffix`): adds `aria-label`.
1. textbox, **Mixed icons and static text** (`textbox:icon/fullyDecorated`): adds `aria-label`.

## 8. Per-demo comparison: old docs markup against the story that replaced it

67 old demos compared: 36 identical and 31 with differences.

The old demo is the markup inside its `demo__inner` wrapper on `main`, with Marko-only syntax converted to HTML; the new markup is the story output with `<script>` removed. Compared: class names; `role`, `aria-*`, `tabindex`, `hidden`, `disabled`, `type`, `data-*`, `src`, `checked`, `selected`, `readonly`, `required`, `name` and `value` attributes; element count; and text content. Ignored: whitespace, attribute order, `id` values, and anything inside `<svg>`; id-reference attributes are compared by presence only. "Identical" means identical under these rules, not byte for byte. Old demos are matched to new tags by the prose between them, or in order where the page had examples without a demo wrapper or corrected prose.

### date-textbox

1. **Single Select Date Textbox** → `date-textbox:base`: identical.
1. **Disabled Date Textbox** → `date-textbox:disabled`: identical.
1. **Date Range Textbox** → `date-textbox:range`: identical.

### field

1. **Unstacked Field** → `field:unstacked/inlineLevel`: classes added: field, field__label, field__control, textbox, textbox__control, field--align-top; removed: switch--form; attributes added: for, type="text", name="options", value="item1", value="item2", value="item3", aria-label="Switch Demo"; removed: name="field-unstacked-2", value="1", value="2", value="3"; elements 18 → 21; text content differs.
1. **Unstacked Field** → `field:unstacked/blockLevel`: classes added: field, field__label, textbox, textbox__control, field__control, field--align-top; removed: switch--form; attributes added: for, type="text", name="options", value="item1", value="item2", value="item3", aria-label="Switch Demo"; removed: name="field-unstacked-5", value="1", value="2", value="3"; elements 18 → 21; text content differs.
1. **Unstacked Field** → `field:unstacked/alignTop`: identical.
1. **Stacked Field** → `field:stacked/inlineLevel`: identical.
1. **Stacked Field** → `field:stacked/blockLevel`: identical.
1. **Field Font-Size** → `field:unstacked/fontSize`: identical.
1. **Disabled Field** → `field:unstacked/disabled`: classes added: field, field__label, field__label--disabled, field__control, textbox, textbox__control, field--align-top; removed: switch--form; attributes added: for, type="text", name="options", value="item1", value="item2", value="item3", aria-label="Switch Demo"; removed: value="placeholder text", name="field-disabled-2", value="1", value="2", value="3"; elements 18 → 21; text content differs.
1. **Readonly Field** → `field:unstacked/readonly`: identical.
1. **Required Field** → `field:unstacked/required`: identical.
1. **Invalid Field** → `field:unstacked/invalid`: identical.
1. **Text on Side of Field** → `field:unstacked/sideDescription`: identical.
1. **Text on Side of Field** → `field:stacked/sideDescription`: identical.
1. **Text Below Stacked Field** → `field:stacked/descriptionBelow`: identical.
1. **Text Above or Below Unstacked Field** → `field:unstacked/tableDescription`: identical.
1. **Text Below Floating label** → `field:stacked/floatingLabelDescription`: identical.
1. **Listbox Button with Label in Error State** → `field:stacked/listboxButtonError`: identical.
1. **Textbox in Error State** → `field:stacked/textboxError`: identical.
1. **Fluid Field** → `field:stacked/fluidBlock`: identical.
1. **Fluid Field** → `field:unstacked/fluid`: identical.
1. **Fluid Field** → `field:stacked/fluidGroup`: identical.
1. **Field with Character Count Only** → `field:helper-texts-stacked/characterMeterOnly`: classes removed: clipped; elements 7 → 6; text content differs.
1. **Field Description and Character Count** → `field:helper-texts-stacked/descriptionCharacterMeter`: classes removed: clipped; elements 8 → 7; text content differs.
1. **Field Description and Character Count with Text area** → `field:helper-texts-stacked/descriptionCharacterMeterTextarea`: text content differs.

### filter-input

1. **Default Filter Input** → `filter-input:base`: elements 6 → 7.
1. **Filter Input Size Variations** → `filter-input:small` + `filter-input:large`: identical.

### floating-label

1. **Floating Label with no Value** → `floating-label:base`: identical.
1. **Floating Label with Value** → `floating-label:value`: identical.
1. **Large floating label** → `floating-label:large`: identical.
1. **Floating Label with Disabled Textbox** → `floating-label:disabledTextbox`: identical.
1. **Floating Label with Placeholder** → `floating-label:placeholder`: text content differs.
1. **Floating Label with Invalid Textbox** → `floating-label:invalidTextbox`: classes added: floating-label__label--inline, floating-label__label--invalid.
1. **Floating Label with Textarea** → `floating-label:TextArea`: attributes removed: aria-label="Textbox demo".
1. **Floating label with Combobox** → `floating-label:combobox`: attributes added: aria-expanded="false", aria-controls, aria-label="Enter list of users"; removed: aria-label="Combobox demo".
1. **Floating Label with long text** → `floating-label:longText`: identical.
1. **Floating Label with select** → `floating-label:select`: attributes added: for; removed: aria-label="Select demo".
1. **Floating Label with large select** → `floating-label:selectLarge`: classes removed: floating-label__label; attributes added: for; removed: aria-label="Select demo".
1. **Floating Label with Phone input** → `floating-label:phoneInput`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Country"; removed: aria-label="area code + phone number".

### number-input

1. **Base** → `number-input:base/base`: identical.
1. **Base with inline label** → `number-input:with-label/base`: classes removed: icon-button--small ×2.
1. **With delete button** → `number-input:base/withDeleteShown`: attributes added: disabled="".
1. **Large input field** → `number-input:base/large`: attributes added: aria-label="Number input".
1. **Fluid input field** → `number-input:base/fluid`: identical.
1. **Fluid input field with label** → `number-input:with-label/fluid`: classes removed: icon-button--small ×2.

### phone-input

1. **Default Phone input** → `phone-input:base/Default`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Country: United States of America (+1)", aria-label="Country"; removed: aria-label="Country: United States of America".
1. **With Group Label** → `phone-input:base/withGroupLabel`: attributes added: aria-label="Country".
1. **Large Phone input** → `phone-input:base/Large`: classes added: listbox-button__listbox--set-position, textbox--large; attributes added: aria-label="Country: United States of America (+1)", aria-label="Country"; removed: aria-label="Country: United States of America".
1. **Readonly Phone input** → `phone-input:base/ReadOnly`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Country: United States of America (+1)", aria-label="Country", aria-label="Area code + phone number"; removed: aria-label="Country: United States of America", aria-label="area code + phone number".
1. **Disabled Phone Input** → `phone-input:base/Disabled`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Country: United States of America (+1)", aria-label="Country", value="123456789"; removed: aria-label="Country: United States of America".
1. **Error Phone Input** → `phone-input:base/errorWithDescription`: attributes added: aria-label="Country".
1. **Fluid Phone input** → `phone-input:base/Fluid`: classes added: listbox-button__listbox--set-position; attributes added: aria-label="Country: United States of America (+1)", aria-label="Country"; removed: aria-label="Country: United States of America".

### textbox

1. **Single-Line Textbox** → `textbox:base/singleLine`: attributes added: aria-label="Email Address"; removed: aria-label="Textbox demo".
1. **Readonly Textbox** → `textbox:base/readonlyWithValue`: attributes added: aria-label="Username", value="blueladybug463"; removed: aria-label="Textbox demo", value="Readonly textbox".
1. **Disabled Textbox** → `textbox:base/disabled`: identical.
1. **Error-State Textbox** → `textbox:base/error`: identical.
1. **Multi-line Textbox** → `textbox:base/multiLine`: attributes added: aria-label="Description"; removed: aria-label="Textbox demo".
1. **Fluid Textbox** → `textbox:base/fluid`: identical.
1. **Textbox with Icon** → `textbox:icon/base`: identical.
1. **Textbox with Icon** → `textbox:icon/end`: identical.
1. **Textbox with Icon Button** → `textbox:icon/clearable`: identical.
1. **Textbox with Icon Button** → `textbox:icon/dualClearable`: identical.
1. **Large Textbox** → `textbox:base/large`: identical.
1. **Textbox Prefix** → `textbox:base/prefix`: attributes added: aria-label="Textbox demo".
1. **Textbox Postfix** → `textbox:base/suffix`: attributes added: aria-label="Textbox demo"; text content differs.
1. **Mixed icons and static text** → `textbox:icon/fullyDecorated`: attributes added: aria-label="Textbox demo", aria-label="Mail"; removed: aria-label="Clear text"; elements 5 → 7; text content differs.
