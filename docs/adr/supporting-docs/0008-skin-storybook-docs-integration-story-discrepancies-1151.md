# Story and Docs Discrepancies: Dialogs and notices (#1151)

**Date:** 2026-11-25
**Status:** Reference document for the pull request that fixes #1151
**Related:** [ADR 0008](../0008-skin-storybook-docs-integration.md) (the `<component-demo>` design), [#1146](https://github.com/eBay/evo-web/issues/1146) (parent issue), [#1151](https://github.com/eBay/evo-web/issues/1151)

## Purpose

This pull request moves the dialogs and notices Skin CSS docs demos onto `<component-demo>`, which renders each demo and its code sample from the Skin story. The hand-written docs markup and the stories had drifted, and the stories had defects of their own. Because the same markup now serves Storybook and the docs, this pull request fixes those defects instead of carrying them onto the docs: nothing may work or read worse than the old docs example did, and every markup and accessibility defect found in these components' stories and pages is fixed. This document itemizes each discrepancy and what was done about it.

Components: `alert-dialog`, `confirm-dialog`, `snackbar-dialog`, `toast-dialog`, `panel-dialog`, `lightbox-dialog`, `education-notice`, `inline-notice`, `page-notice`, `section-notice`, `infotip`, `tooltip`, `tourtip` (plus RTL fixes in the `dialog` stories).

## 1. Summary

### 1.1 How the stories were checked

1. **Axe:** axe-core with the WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices, on every story of these components in Skin Storybook. Page-level rules that do not apply to an isolated fragment (`region`, `landmark-one-main`, `page-has-heading-one`, `bypass`, `html-has-lang`, `document-title`, `landmark-complementary-is-top-level`) were off.
2. **Static audit:** every story export parsed with the Prettier HTML parser `<highlight-code>` uses, plus checks for unbalanced tags, duplicate ids, `for` and `aria-*` references to missing ids, Marko-only syntax, and root-relative asset paths.
3. **Docs pages:** each page loaded in a browser: HTTP status, script errors, broken images, and the docs-site behaviors these components use.

### 1.2 Results

| Check                                                    | Before          | After |
| -------------------------------------------------------- | --------------- | ----- |
| Stories with any axe violation                           | 53              | 3     |
| Of those, stories whose only violation is color contrast | not recorded    | 0     |
| Story exports with static-audit findings                 | see 3.1 and 3.2 | 0     |

Remaining axe findings other than color contrast:

- skin-section-notice-iconless--dismiss-and-link-cta (target-size)
- skin-section-notice-iconless--dismiss-and-fake-link-cta (target-size)
- skin-section-notice-iconless--rtl (target-size)

Color contrast is reported but not changed: the findings are disabled states (exempt under WCAG 1.4.3), stories that apply a deliberate test color, or `aria-hidden` text.

### 1.3 Follow-up items

1. [Fix markup and accessibility defects in the menu-family, pagination and table stories](../../../agent-feedback/items/2026-11-24-skin-stories-malformed-markup.md)
1. [Space the section-notice CTA and dismiss targets to meet WCAG 2.5.8](../../../agent-feedback/items/2026-11-25-section-notice-target-size.md)
1. [Align the toast and snackbar root element across Skin and the frameworks](../../../agent-feedback/items/2026-11-25-toast-snackbar-root-element.md)

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

- `page-notice/stories/page-notice.stories.js` `dismissableWithTitle`: `<button>` was closed with `</a>`; now `</button>`. Reason: unparseable markup. Percy: none.
- `panel-dialog` `panelWithPrev`, `panelEnd`: `panel-title` renamed `panel-title-prev`, `panel-title-end`. Reason: id collided with `panelStart`. Percy: none.
- `lightbox-dialog` `scrollingLightbox`, `basePrev`, `wide`, `narrow`, `large`, `baseWithFooter`, `expressiveBase`: `lightbox-dialog-title` renamed per export. Reason: id collided with `base`. Percy: none.
- `tourtip` `withActions`: `tourtip-label` renamed `tourtip-label-actions`. Reason: id collided with `expanded`. Percy: none.
- `alert-dialog` `base`: docs trigger button, `hidden` and `id="alert-dialog-0"` on the dialog, and a Storybook-only reveal `<script>`. Reason: the dialog rendered open on the docs page. Percy: visible (trigger button).
- `confirm-dialog` `base`: docs trigger, `hidden`, `id="confirm-dialog-0"`, reveal script. Reason: dialog rendered open. Percy: visible (trigger button).
- `snackbar-dialog/base` `noAction`, `action`, `actionsStacked`: docs trigger, `hidden`, `id="snackbar-dialog-1..3"`, reveal script. Reason: the fixed-position dialogs covered the docs page. Percy: visible (trigger button).
- `toast-dialog` `primaryAction`, `secondaryAction`: docs trigger, `hidden`, `id="toast-dialog-1..2"`, reveal script. Reason: the fixed-position dialogs covered the docs page. Percy: visible (trigger button).
- `panel-dialog` `panelStart`, `panelWithPrev`, `panelEnd`: docs trigger, `hidden`, docs `id`, reveal script. Reason: dialog rendered open. Percy: visible (trigger button).
- `lightbox-dialog` `base`, `scrollingLightbox`, `basePrev`, `wide`, `narrow`, `large`, `baseWithFooter`, `expressiveBase`: docs trigger, `hidden`, docs `id`, reveal script. Reason: dialog rendered open. Percy: visible (trigger button).
- `infotip` `infotipModal`: `hidden`, `id="lightbox-dialog-mini-infotip-0"` and a reveal script (the story already had its trigger). Reason: dialog rendered open. Percy: none.

### 3.2 Accessibility and markup fixes, by component

### dialog

- dialog/stories/dialog.stories.js baseRTL, prevRTL: closed the <div dir="rtl"> wrapper that was never closed. Reason: static finding (unbalanced <div>). Percy: none.

### infotip

- infotip/stories/infotip.stories.js infotipModal: the lightbox-dialog__handle button had no name; added aria-label="Expand dialog" (the Lightbox docs say the handle expands the dialog height; ebayui-core's drawer handle is labelled the same way). Reason: axe button-name. Percy: none.

### inline-notice

- inline-notice/stories/inline.stories.js all 11 status-icon exports: added aria-label (Confirmation, Attention, Information, Warning, matching the icon) to the role="img" status icon; longParagraphAndLink moved role="img" from the header span onto the svg. Reason: axe svg-img-alt / role-img-alt; restores old docs aria-label. Percy: none.

### page-notice

- page-notice/stories/page-notice.stories.js dismissableWithoutTitle, textSpacing: dismiss <button> was closed with </a>; changed to </button>. Reason: static finding (unparseable). Percy: none.
- page-notice/stories/test.stories.js legacyLongText, legacyLongTextAndCTA, legacyMultiParagraph, legacyMultiParagraphWithCTA: the <section> root was closed with </div>; changed to </section>. Reason: static finding (unparseable). Percy: none.
- page-notice/stories/test.stories.js RTL: the dir="rtl" wrapper ended with <div> instead of </div>. Reason: static finding (unbalanced <div>). Percy: none.

### section-notice

- section-notice/stories/{variants,iconless,icon-16,test}.stories.js all 27 exports: root changed from an unnamed <div role="region"> to <section role="region" aria-label="<status or Notice>" aria-roledescription="Notice">; removed the second role="region" and aria-roledescription from section-notice__header; status icon changed from aria-hidden to role="img" with the status as aria-label. Reason: axe landmark-unique; 1.2 item (Section Notice regions); restores old docs aria-label. Percy: none.

### snackbar-dialog

- snackbar-dialog/stories/{base,font-size,rtl}.stories.js all exports (13), toast-dialog/stories/toast-dialog.stories.js all exports (5): dialog root <aside role="dialog"> changed to <div role="dialog"> (SCSS is class-based; evo-marko uses a dialog element, ebayui-core snackbar a div). Reason: axe aria-allowed-role. Percy: none.

### tooltip

- tooltip/stories/tooltip.stories.js floatingUI: host accesskey changed from "s" to "t"; the Tooltip page renders it next to collapsed, which also uses "s", so the shortcut could reach only one of them. Reason: 1.2 item (duplicate accesskey). Percy: none.

## 4. Docs pages

- Duplicate heading ids renamed, nothing linked to them: Education Notice (`education-notice-dismissable`), Lightbox Dialog (`lightbox-large`).

Demos that stay static on purpose:

None.

## 5. Docs-site changes outside the CSS pages

None.

## 6. New story exports

8 new exports. They add Percy snapshots and change none.

- `infotip/stories/infotip.stories.js`: `floatingUI`, `paragraphFloatingUI`
- `lightbox-dialog/stories/lightbox-dialog.stories.js`: `transitioned`
- `panel-dialog/stories/panel-dialog.stories.js`: `panelSlideEnd`, `panelSlideStart`, `panelWithFooter`
- `tooltip/stories/tooltip.stories.js`: `floatingUI`
- `tourtip/stories/tourtip.stories.js`: `floatingUI`

## 7. Accessibility attributes compared with the old docs examples

For each migrated demo, the accessibility attributes (`role`, `aria-*`, `tabindex`, `for`, `alt`) counted by name in the old docs example and in the story. A count difference can mean the story has more or fewer elements, so each entry says why it is not a regression.

### 7.1 Attributes the old example had that the story does not

1. lightbox-dialog, **Wide Lightbox** (`lightbox-dialog:wide`): lacks `aria-label`. Not a gap: the old demo carried an extra "Go back" button (the `basePrev` pattern); every button in `wide` is named.

### 7.2 Attributes the story adds

1. infotip, **Modal Infotip** (`infotip:infotipModal`): adds `aria-label`.
1. page-notice, **(top of page)** (`page-notice:general` + `page-notice:confirmationWithLink` + `page-notice:attentionWithButton` + `page-notice:informationWithLink` + `page-notice:warningWithButton` + `page-notice:dismissableWithTitle` + `page-notice:formErrors`): adds `role="region" ×2`, `aria-label ×3`.
1. panel-dialog, **End Panel** (`panel-dialog:panelEnd`): adds `aria-label`.
1. section-notice, **(top of page)** (`section-notice:iconless/body` + `section-notice:variants/confirmation` + `section-notice:variants/attention` + `section-notice:variants/information` + `section-notice:variants/warning` + `section-notice:base/title` + `section-notice:base/dismiss` + `section-notice:base/dismissAndLinkCTA`): adds `role="region"`, `aria-label ×2`, `aria-roledescription`.

## 8. Per-demo comparison: old docs markup against the story that replaced it

39 old demos compared: 12 identical and 27 with differences.

The old demo is the markup inside its `demo__inner` wrapper on `main`, with Marko-only syntax converted to HTML; the new markup is the story output with `<script>` removed. Compared: class names; `role`, `aria-*`, `tabindex`, `hidden`, `disabled`, `type`, `data-*`, `src`, `checked`, `selected`, `readonly`, `required`, `name` and `value` attributes; element count; and text content. Ignored: whitespace, attribute order, `id` values, and anything inside `<svg>`; id-reference attributes are compared by presence only. "Identical" means identical under these rules, not byte for byte. Old demos are matched to new tags by the prose between them, or in order where the page had examples without a demo wrapper or corrected prose.

### alert-dialog

1. **(top of page)** → `alert-dialog:base`: classes added: alert-dialog__window--fade; removed: alert-dialog__window--animate.

### confirm-dialog

1. **(top of page)** → `confirm-dialog:base`: classes added: confirm-dialog__window--fade; removed: confirm-dialog__window--animate.

### education-notice

1. **Education Notice** → `education-notice:base`: identical.
1. **Education Notice with a Prominent Icon** → `education-notice:prominentIcon`: identical.
1. **Prominent Education Notice** → `education-notice:prominentNotice`: identical.
1. **Dismissable Education Notice** → `education-notice:dismissable`: identical.
1. **Actionable Education Notice Using Link** → `education-notice:actionableLink`: classes removed: icon-button--small.
1. **Actionable Education Notice Using Fake Button** → `education-notice:actionableButton`: identical.

### infotip

1. **(top of page)** → `infotip:collapsed`: classes removed: icon-button--transparent.
1. **Infotip** → `infotip:floatingUI`: identical.
1. **Infotip** → `infotip:paragraphFloatingUI`: identical.
1. **Modal Infotip** → `infotip:infotipModal`: attributes added: aria-expanded="true", aria-label="Expand dialog"; removed: aria-expanded="false".

### inline-notice

1. **(top of page)** → `inline-notice:general` + `inline-notice:confirmation` + `inline-notice:information` + `inline-notice:attention` + `inline-notice:warning`: classes removed: link-button; attributes removed: type="button"; elements 26 → 24; text content differs.

### lightbox-dialog

1. **(top of page)** → `lightbox-dialog:base`: classes removed: large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 11 → 16; text content differs.
1. **Scrolling Lightbox** → `lightbox-dialog:scrollingLightbox`: classes removed: lightbox-dialog--mask-fade; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 12 → 81; text content differs. Old markup contained Marko loops or expressions, so the comparison is approximate.
1. **Previous button in header Lightbox** → `lightbox-dialog:basePrev`: classes removed: large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 13 → 18; text content differs.
1. **Wide Lightbox** → `lightbox-dialog:wide`: classes removed: icon-button, lightbox-dialog__prev, large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: type="button", aria-label="Go back", aria-label="Close dialog"; elements 13 → 16; text content differs.
1. **Narrow Lightbox** → `lightbox-dialog:narrow`: classes removed: large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 11 → 16; text content differs.
1. **Large Lightbox** → `lightbox-dialog:large`: classes removed: large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 11 → 16; text content differs.
1. **Transitioned Lightbox** → `lightbox-dialog:transitioned`: identical.
1. **Footer in Lightbox** → `lightbox-dialog:baseWithFooter`: classes added: button--primary; removed: button, lightbox-dialog--no-mask, large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 13 → 19; text content differs.
1. **Expressive Lightbox** → `lightbox-dialog:expressiveBase`: classes removed: large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 12 → 17; text content differs. Old markup contained Marko loops or expressions, so the comparison is approximate.

### page-notice

1. **(top of page)** → `page-notice:general` + `page-notice:confirmationWithLink` + `page-notice:attentionWithButton` + `page-notice:informationWithLink` + `page-notice:warningWithButton` + `page-notice:dismissableWithTitle` + `page-notice:formErrors`: classes added: page-notice ×2, page-notice__main ×2, page-notice__title ×2, page-notice__header ×2, page-notice__footer, page-notice--attention, link-button, page-notice--information, page-notice--general, page-notice__cta, page-notice__dismiss; attributes added: role="region" ×2, aria-label="Attention", aria-label="Information" ×2, aria-label="Dismiss notification"; removed: aria-label="Notice"; elements 31 → 51; text content differs.

### panel-dialog

1. **(top of page)** → `panel-dialog:panelStart`: classes removed: large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 11 → 16; text content differs.
1. **Panel dialog with Previous button** → `panel-dialog:panelWithPrev`: classes removed: large-text-1, bold-text; attributes added: aria-label="Close Dialog"; removed: aria-label="Close dialog"; elements 13 → 18; text content differs.
1. **Panel dialog with footer** → `panel-dialog:panelWithFooter`: identical.
1. **End Panel** → `panel-dialog:panelEnd`: classes added: icon-button, panel-dialog__close; removed: panel-dialog__title, large-text-1, bold-text, link-button, panel-dialog__reset; attributes added: aria-label="Close Dialog"; elements 10 → 16; text content differs.
1. **Sliding Panel** → `panel-dialog:panelSlideStart` + `panel-dialog:panelSlideEnd`: identical.

### section-notice

1. **(top of page)** → `section-notice:iconless/body` + `section-notice:variants/confirmation` + `section-notice:variants/attention` + `section-notice:variants/information` + `section-notice:variants/warning` + `section-notice:base/title` + `section-notice:base/dismiss` + `section-notice:base/dismissAndLinkCTA`: classes added: section-notice, section-notice__main, section-notice--confirmation, section-notice__header, section-notice__title, section-notice__footer, link-button, section-notice__dismiss, section-notice__cta; attributes added: role="region", aria-roledescription="Notice", aria-label="Confirmation", aria-label="Close notice"; elements 38 → 49; text content differs. Compared against 4 old demos together.

### snackbar-dialog

1. **Default Snackbar** → `snackbar-dialog:base/noAction`: classes removed: snackbar-dialog--transition.
1. **Action Snackbar** → `snackbar-dialog:base/action`: classes removed: snackbar-dialog--transition, clipped; elements 8 → 7; text content differs.
1. **Stacked Snackbar** → `snackbar-dialog:base/actionsStacked`: classes added: link-button, snackbar-dialog__close; removed: snackbar-dialog--transition, clipped; text content differs.

### toast-dialog

1. **Default Toast** → `toast-dialog:primaryAction`: classes removed: toast-dialog--transition, toast-dialog__title, toast-dialog__cta; text content differs.
1. **Toast Secondary Action** → `toast-dialog:secondaryAction`: classes removed: toast-dialog--transition, toast-dialog__title, toast-dialog__cta; text content differs.

### tooltip

1. **(top of page)** → `tooltip:collapsed`: classes added: tooltip__pointer--bottom-left; removed: tooltip__pointer--top-left.
1. **(top of page)** → `tooltip:floatingUI`: identical.

### tourtip

1. **(top of page)** → `tourtip:expanded`: classes added: tourtip__pointer--top; removed: tourtip__pointer--top-left, icon-button--transparent.
1. **Tourtip** → `tourtip:floatingUI`: identical.
1. **With footer** → `tourtip:withActions`: classes added: tourtip__pointer--top; removed: tourtip--js, icon-button--transparent.
