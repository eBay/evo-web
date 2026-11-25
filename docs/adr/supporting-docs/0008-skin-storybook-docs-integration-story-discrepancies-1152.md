# Story and Docs Discrepancies: Progress, media and content (#1152)

**Date:** 2026-11-25
**Status:** Reference document for the pull request that fixes #1152
**Related:** [ADR 0008](../0008-skin-storybook-docs-integration.md) (the `<component-demo>` design), [#1146](https://github.com/eBay/evo-web/issues/1146) (parent issue), [#1152](https://github.com/eBay/evo-web/issues/1152)

## Purpose

This pull request moves the progress, media and content Skin CSS docs demos onto `<component-demo>`, which renders each demo and its code sample from the Skin story. The hand-written docs markup and the stories had drifted, and the stories had defects of their own. Because the same markup now serves Storybook and the docs, this pull request fixes those defects instead of carrying them onto the docs: nothing may work or read worse than the old docs example did, and every markup and accessibility defect found in these components' stories and pages is fixed. This document itemizes each discrepancy and what was done about it.

Components: `progress-bar`, `progress-bar-expressive`, `progress-spinner`, `progress-stepper`, `skeleton`, `carousel`, `video`, `avatar`, `card`, `item-tile`, `item-tile-group`, `file-preview-card`, `file-preview-card-group`, `list`, `layout-grid`, `image-placeholder`, `icon`, `flag`, `eek`, `ccd`, `chart-legend`, `donut-chart`, `calendar`, `star-rating`.

## 1. Summary

### 1.1 How the stories were checked

1. **Axe:** axe-core with the WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices, on every story of these components in Skin Storybook. Page-level rules that do not apply to an isolated fragment (`region`, `landmark-one-main`, `page-has-heading-one`, `bypass`, `html-has-lang`, `document-title`, `landmark-complementary-is-top-level`) were off.
2. **Static audit:** every story export parsed with the Prettier HTML parser `<highlight-code>` uses, plus checks for unbalanced tags, duplicate ids, `for` and `aria-*` references to missing ids, Marko-only syntax, and root-relative asset paths.
3. **Docs pages:** each page loaded in a browser: HTTP status, script errors, broken images, and the docs-site behaviors these components use.

### 1.2 Results

| Check                                                    | Before          | After |
| -------------------------------------------------------- | --------------- | ----- |
| Stories with any axe violation                           | 25              | 22    |
| Of those, stories whose only violation is color contrast | not recorded    | 9     |
| Story exports with static-audit findings                 | see 3.1 and 3.2 | 0     |

Remaining axe findings other than color contrast:

- skin-progress-stepper--small-screens (scrollable-region-focusable)
- skin-progress-stepper--custom-size (scrollable-region-focusable)
- skin-carousel--image-treatment (scrollable-region-focusable)
- skin-carousel--image-treatment-large (scrollable-region-focusable)
- skin-carousel--continuous (scrollable-region-focusable)
- skin-carousel--slideshow (scrollable-region-focusable)
- skin-carousel--slides (scrollable-region-focusable)
- skin-carousel--hidden-scrollbar (scrollable-region-focusable)
- skin-carousel--rtl (scrollable-region-focusable)
- skin-carousel--slides-with-paddles-visible (scrollable-region-focusable)
- skin-carousel--continuous-with-paddles-visible (scrollable-region-focusable)
- skin-carousel--slideshow-with-paddles-visible (scrollable-region-focusable)
- skin-carousel--hidden-scrollbar-with-paddles-visible (scrollable-region-focusable)

Color contrast is reported but not changed: the findings are disabled states (exempt under WCAG 1.4.3), stories that apply a deliberate test color, or `aria-hidden` text (two findings to confirm are in the follow-up items).

### 1.3 Follow-up items

1. [Decide how keyboard users scroll carousel and progress-stepper overflow regions](../../../agent-feedback/items/2026-11-25-scrollable-regions-not-focusable.md)
1. [Check two color-contrast findings that are not disabled states](../../../agent-feedback/items/2026-11-25-color-contrast-review.md)
1. [Resolve the duplicate `image-placeholder` id on its docs page](../../../agent-feedback/items/2026-11-25-image-placeholder-page-id-collision.md)

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

- `list/stories/list.stories.js` `withDivider`: closed the list that ended with `</div>`. Reason: unparseable markup. Percy: none.
- All 24 `card` exports with a hero image (the Card page renders 14 of them): `src="/img/cards-card.jpeg"` changed to the same file on `ir.ebaystatic.com`. Reason: root-relative path 404s on the deployed docs site. Percy: none.
- `progress-bar-expressive` `withMediumText`: `unique-id` renamed `unique-id-medium`; `withMessages`, `withMediumText`: added class `progress-bar-expressive-messages-example`. Reason: id collision, and the docs-site script selects on the class to cycle messages. Percy: none.

### 3.2 Accessibility and markup fixes, by component

### avatar

- avatar/stories/avatar.stories.js variations: added the pink avatar (letter H). Reason: the page prose lists pink among the colors and the old docs showed it, but the story stopped at magenta. Percy: visible (one more avatar).

### card

- card/stories/card.{aspect,content,disabled,hybrid-actionable,rtl,self-actionable,style,text-spacing}.stories.js, every export with a hero image (24): `/img/cards-card.jpeg` changed to https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg (same file). Reason: static finding (root-relative path). Percy: none.

### carousel

- carousel/stories/carousel.stories.js imageTreatment, imageTreatmentLarge: added alt text to the 12 slide images (Aztec pyramid, Waterfall, Mountain, Shoes, Tall cat, Wide cat). Reason: axe image-alt. Percy: none.

### chart-legend

- chart-legend/stories/chart-legend.stories.js all 3 exports: added aria-label="Example chart legend" to the legend <dl>. Reason: restores old docs attribute (the old docs labelled the legend). Percy: none.

### donut-chart

- donut-chart/stories/donut-chart.stories.js base: closed the legend wrapper with </div> instead of a second opening <div>. Reason: static finding (unbalanced <div>). Percy: none.
- donut-chart/stories/donut-chart.stories.js base, smallContainer: added aria-label="Example donut chart legend" to the legend <dl>. Reason: restores old docs attribute. Percy: none.

### eek

- eek/stories/eek.stories.js ratings, largeRatings: the rating 7 range showed `A+ - E` while its `aria-label` and rating said `A+ - G`; the visible end of the range is now G. Reason: the displayed range did not contain the displayed rating and contradicted the accessible name. Percy: visible (one letter in two stories).

### image-placeholder

- image-placeholder/stories/image-placeholder.stories.js insideHeading, RTLInsideHeading, differentWidths, inContainerVariableWidth: added role="img" aria-label="image not found" to the placeholder svg, as the old docs and the newer stories do. Reason: axe empty-heading; restores old docs attribute; defect found during the migration (unnamed image placeholders). Percy: none.

### list

- list/stories/list.stories.js withDivider: the two `<hr>` dividers sat directly inside `<ul>`; the list is now split into three `<ul>` groups with the `<hr>` between them (same `.list hr` styling). Reason: axe list. Percy: none expected.
- list/stories/list.stories.js action, RTL: `<span class="switch__button"/>` (not self-closing in HTML) written as `<span class="switch__button"></span>`. Reason: invalid self-closing tag (static finding). Percy: none (browser produced the same DOM).

### progress-bar

- progress-bar/stories/progress-bar.stories.js empty, half, full: class "progress" (no styles, rendered as the browser's default control) changed to "progress-bar"; values set to 0, 50 and 100 (empty was 1); fallback text set to 0%, 50% and 100% (all three said 0%). Reason: defect found during the migration; restores the documented markup. Percy: visible (now the styled Skin bar).

### progress-bar-expressive

- progress-bar-expressive/stories/progress-bar-expressive.stories.js withMediumText: removed the root class progress-bar-expressive--medium, which no rule styles (the medium size comes from progress-bar-expressive__messages--medium, which the story already has). Reason: defect found during the migration (unstyled class). Percy: none.

### progress-stepper

- progress-stepper/stories/progress-stepper.stories.js 15 exports (all but customSize, which already had it): added a clipped heading "Shipment progress" (one level above the step titles, so heading order holds) and aria-labelledby on the stepper, as evo-marko and the old docs do; status icons changed from aria-hidden to role="img" with aria-label complete / current / blocked / upcoming, following evo-marko's state logic. Reason: defect found during the migration (hidden status icons); restores old docs aria-labelledby. Percy: none.
- progress-stepper/stories/progress-stepper.stories.js verticalUpcoming: `aria-current="current"` (not a valid token) changed to `aria-current="step"`, and that item's icon label from complete to current. Reason: invalid ARIA value; the item is the current step. Percy: none.

### video

- video/stories/video.stories.js all 12 exports (shared media constant): restored the old docs' playable sample (src) and poster, so the video is no longer a black box. Reason: restores old docs function (a defect found during the migration). Percy: visible (poster image instead of a black box).

## 4. Docs pages

- Docs edit, src/routes/_index/components/progress-bar-expressive/css+page.marko, "Medium text" prose: named the real class progress-bar-expressive__messages--medium instead of the unstyled progress-bar-expressive--medium. Reason: docs prose taught a class that does nothing.
- Docs edit, src/routes/_index/components/calendar/css+page.marko: `calendar__range-end` in the date range prose changed to the real class `calendar__range--end`. Reason: prose taught a class that does not exist.
- Docs edit, src/routes/_index/components/progress-bar-expressive/css+page.marko, message steps: `expressive_loader__message--out` changed to `progress-bar-expressive__message--out`. Reason: prose taught a class that does not exist.
- Docs edit, src/routes/_index/components/star-rating/css+page.marko, Method 2 catalogue: each rating's aria-label now comes from the loop value (Rating: 0/5 through Rating: 5/5) instead of a hard-coded "Rating: 2.5/5" on all eleven. Reason: defect found during the migration.
- Docs edit, src/routes/_index/components/progress-bar/css+page.marko: the Initial, Loading and Completed demos, static until now, use <component-demo> for empty, half and full.
- src/routes/_index/components/avatar/css+page.marko: second `id="avatar-custom"` (Custom Avatar with Fit) changed to `avatar-custom-fit`. Reason: defect found during the migration (duplicate id).
- Duplicate heading ids renamed, nothing linked to them: List (`list-variable-width`, `list-fieldset`).

Demos that stay static on purpose:

- The Icon, Flag and Star Rating catalogues are generated from data and sit outside any demo wrapper.

## 5. Docs-site changes outside the CSS pages

- `src/routes/_index/main.js`, expressive progress bar: sets `aria-live="off"` on each cycling demo's status element, the docs-only override the page prose describes; the stories correctly omit it.
- `src/routes/_index/components/file-preview-card/css+page.marko`: a scoped style sets the cards to 168px, which Storybook applies through the story file's decorator; decorators never reach docs pages.

## 6. New story exports

21 new exports. They add Percy snapshots and change none.

- `calendar/stories/calendar.stories.js`: `interactiveSingle`, `readonly`, `readonlyInactive`
- `card/stories/card.style.stories.js`: `verticalFullHero`
- `donut-chart/stories/donut-chart.stories.js`: `smallContainer`
- `eek/stories/eek.stories.js`: `largeRatings`, `ratings`
- `flag/stories/flag.stories.js`: `base`, `sizes`
- `icon/stories/icon.stories.js`: `base`, `complexDisabled`, `filled`, `simpleDisabled`
- `image-placeholder/stories/image-placeholder.stories.js`: `base`, `variableWidthsWithBorders`
- `layout-grid/stories/layout-grid.stories.js`: `withRadios`
- `progress-bar-expressive/stories/progress-bar-expressive.stories.js`: `withSingleMessage`
- `progress-bar/stories/progress-bar.stories.js`: `animated`, `fluid`
- `progress-stepper/stories/progress-stepper.stories.js`: `customSize`
- `skeleton/stories/composite.stories.js`: `viewTransition`

## 7. Accessibility attributes compared with the old docs examples

For each migrated demo, the accessibility attributes (`role`, `aria-*`, `tabindex`, `for`, `alt`) counted by name in the old docs example and in the story. A count difference can mean the story has more or fewer elements, so each entry says why it is not a regression.

### 7.1 Attributes the old example had that the story does not

1. avatar, **Default Avatar** (`avatar:variations`): lacks `role="img"`, `aria-label`. Not a gap: the story shows the same 8 colors with different letters.
1. calendar, **Interactive Calendar With Date Range Selection** (`calendar:interactive`): lacks `aria-label ×4`. The story adds `tabindex ×30`. Not a gap: the story highlights four fewer days; every day it shows is labelled.
1. layout-grid, **Default Layouts with Radio Buttons** (`layout-grid:withRadios`): lacks `aria-label ×7`. Improvement (new story): dropped seven identical `aria-label`s that overrode each radio's visible label.
1. list, **Actionable list** (`list:action`): lacks `tabindex`. Not a gap: the action is a native checkbox, focusable without `tabindex`.
1. progress-bar-expressive, **Expressive Progress Bar with Single Message** (`progress-bar-expressive:withSingleMessage`): lacks `aria-live`. Not a gap (new story): the docs-site script supplies `aria-live="off"`.
1. progress-bar-expressive, **Reduced motion behavior** (`progress-bar-expressive:withMessages`): lacks `aria-live`. Not a gap: `aria-live="off"` is a docs-only override the docs-site script supplies.
1. progress-bar-expressive, **Medium text** (`progress-bar-expressive:withMediumText`): lacks `aria-live`. Not a gap: `aria-live="off"` is a docs-only override the docs-site script supplies.
1. video, **Base Video** (`video:base`): lacks `aria-label`, `role="group"`. The story adds `aria-hidden`, `aria-valuetext`. Decision: no `role="group"` on the control bar, following evo-marko and evo-react.
1. video, **Popover Controls** (`video:captionsPopover` + `video:volumePopover`): lacks `role="group"`, `role="menu"`. The story adds `aria-label ×3`, `role="menuitemradio"`, `aria-checked`, `aria-hidden ×2`, `aria-valuetext ×3`, `aria-haspopup`, `tabindex`. Decision: no `role="group"`, following evo-marko and evo-react.
1. video, **Control Bar Variants** (`video:withoutSeek`): lacks `aria-label`, `role="group"`. Decision: no `role="group"`, following evo-marko and evo-react.
1. video, **Overlays** (`video:errorOverlay` + `video:loadingOverlay` + `video:playOverlay` + `video:navLink`): lacks `role="group"`. The story adds `aria-label`, `aria-hidden`, `aria-valuetext`. Decision: no `role="group"`, following evo-marko and evo-react.

### 7.2 Attributes the story adds

1. avatar, **Custom Avatar** (`avatar:withImage`): adds `role="img"`, `aria-label`, `alt`.
1. avatar, **Custom Avatar with Fit** (`avatar:withFitImage`): adds `role="img"`, `aria-label`, `alt`.
1. card, **Disabled Internally-Actionable Card** (`card:disabled/internallyActionable`): adds `tabindex`.
1. file-preview-card-group, **Base** (`file-preview-card-group:mixedTypesWithDetails`): adds `aria-label ×2`, `alt`.
1. item-tile-group, **Set of Grid View Item Tiles** (`item-tile-group:galleryView`): adds `alt ×8`, `aria-label ×8`.
1. item-tile-group, **Set of List View Item Tiles** (`item-tile-group:listView`): adds `alt ×8`, `aria-label ×8`.
1. progress-stepper, **Vertical Progress Stepper** (`progress-stepper:vertical`): adds `aria-labelledby`.

## 8. Per-demo comparison: old docs markup against the story that replaced it

96 old demos compared: 45 identical and 51 with differences.

The old demo is the markup inside its `demo__inner` wrapper on `main`, with Marko-only syntax converted to HTML; the new markup is the story output with `<script>` removed. Compared: class names; `role`, `aria-*`, `tabindex`, `hidden`, `disabled`, `type`, `data-*`, `src`, `checked`, `selected`, `readonly`, `required`, `name` and `value` attributes; element count; and text content. Ignored: whitespace, attribute order, `id` values, and anything inside `<svg>`; id-reference attributes are compared by presence only. "Identical" means identical under these rules, not byte for byte. Old demos are matched to new tags by the prose between them, or in order where the page had examples without a demo wrapper or corrected prose.

### avatar

1. **Default Avatar** → `avatar:base`: identical.
1. **Default Avatar** → `avatar:variations`: same 8 colors; attributes differ only in the `aria-label` letters (the old pink avatar was labelled G but showed H); text content differs.
1. **Custom Avatar** → `avatar:withImage`: classes added: avatar, avatar--128; attributes added: role="img", aria-label="Profile picture - Elizabeth", src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"; elements 2 → 4.
1. **Custom Avatar with Fit** → `avatar:withFitImage`: classes added: avatar, avatar--fit, avatar--128; removed: image-treatment; attributes added: role="img", aria-label="Profile picture - Elizabeth", src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"; elements 2 → 4.
1. **Signed-Out Avatar** → `avatar:signedOut`: identical.
1. **Avatar Sizes** → `avatar:sizesProfilePic`: elements 14 → 15.

### calendar

1. **Readonly Calendar** → `calendar:readonly`: identical.
1. **Read-Only Calendar with Inactive Dates** → `calendar:readonlyInactive`: identical.
1. **Read-Only Calendar with Date Range** → `calendar:base`: classes removed: clipped ×4, calendar__range ×4; elements 107 → 102; text content differs.
1. **Interactive Calendar With Single Date Selection** → `calendar:interactiveSingle`: identical.
1. **Interactive Calendar With Date Range Selection** → `calendar:interactive`: classes removed: calendar__range ×4; attributes added: tabindex="-1" ×30, aria-label="23 - start of range", aria-label="25 - in range", aria-label="26 - in range", aria-label="27 - end of range"; removed: aria-label="17 - start of range", aria-label="18 - in range", aria-label="19 - in range", aria-label="20 - in range", aria-label="21 - in range", aria-label="22 - in range", aria-label="23 - in range", aria-label="25 - end of range"; elements 84 → 83; text content differs.
1. **Calendar With Header Pagination** → `calendar:header`: classes added: clipped ×18, calendar__cell--disabled ×13, calendar__cell--selected ×2, calendar__range ×5, calendar__range--start, calendar__range--end; attributes added: aria-label="Previous Month - July 2019", aria-label="Next Month - September 2019"; removed: aria-label="Previous month, July 2023", aria-label="Next month, September 2023"; elements 92 → 109; text content differs.
1. **Multi-month Calendar with Header Pagination** → `calendar:doubleWithHeader`: classes added: clipped ×23, calendar__cell--disabled ×13, calendar__cell--selected ×2, calendar__range ×10, calendar__range--start, calendar__range--end; removed: demo__inner, calendar__month; attributes added: aria-label="Previous Month - July 2019", aria-label="Next Month - October 2019"; removed: aria-label="Previous month, July 2019", aria-label="Next month, November 2019"; elements 257 → 193; text content differs.

### card

1. **Vertical Card (default)** → `card:content/usingAnchor`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Vertical Card (default)** → `card:aspect/verticalAspectSquare`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Card with a 5:4 Aspect Ratio** → `card:aspect/verticalAspect_5by4`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Card with a 16:9 Aspect Ratio** → `card:aspect/verticalAspect_9by16`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Loaded Card with All the Options** → `card:style/verticalFilled`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Outlined Card** → `card:style/verticalOutlined`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards"; text content differs.
1. **Card with Full Hero** → `card:style/verticalFullHero`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Disabled Internally-Actionable Card** → `card:disabled/internallyActionable`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg", tabindex="-1"; removed: src="imgCards".
1. **Disabled Self-Actionable Card with Link** → `card:disabled/selfActionableLink`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Disabled Self-Actionable Card with Button** → `card:disabled/selfActionableButton`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".
1. **Horizontal Card** → `card:style/horizontalOutlined`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards"; text content differs.
1. **Self-Actionable Card** → `card:self-actionable/verticalButton` + `card:self-actionable/verticalLink`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg" ×2; removed: src="imgCards" ×2; elements 13 → 12.
1. **Important Usage Guidelines** → `card:hybrid-actionable/vertical`: classes added: button--primary; removed: button--tertiary; attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/cards-card.jpeg"; removed: src="imgCards".

### carousel

1. **Continuous Carousel** → `carousel:continuous`: identical.
1. **Slide Carousel** → `carousel:slides`: identical.
1. **Slideshow Carousel** → `carousel:slideshow`: identical.

### ccd

1. **Charger included with USB PD** → `ccd:withChargerAndUsb`: identical.
1. **Charger not included** → `ccd:withoutChargerAndUsb`: identical.
1. **Charger included without USB PD** → `ccd:withChargerAndNoUsb`: identical.

### chart-legend

1. **(top of page)** → `chart-legend:charts-chart-legend/fiveValues`: classes added: chart-legend__item--primary, chart-legend__item--secondary, chart-legend__item--tertiary, chart-legend__item--quaternary, chart-legend__item--quinary; removed: chart-legend__item ×5; attributes added: aria-label="Example chart legend"; removed: aria-label="Example donut chart legend".

### donut-chart

1. **Small container** → `donut-chart:charts-donut-chart/smallContainer`: classes added: chart-legend__item--primary, chart-legend__item--secondary, chart-legend__item--tertiary.
1. **Variable width container** → `donut-chart:charts-donut-chart/base`: classes added: chart-legend__item--primary, chart-legend__item--secondary, chart-legend__item--tertiary.

### eek

1. **EEK examples** → `eek:ratings`: identical except the rating 7 range now ends in G (see 3.2).
1. **Large EEK** → `eek:largeRatings`: identical except the rating 7 range now ends in G (see 3.2).

### file-preview-card

1. **Uploading File Preview Card** → `file-preview-card:uploading`: elements 7 → 6.
1. **Image File Preview Card** → `file-preview-card:landscapeImage`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg"; removed: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"; elements 6 → 5.
1. **Video File Preview Card** → `file-preview-card:video`: elements 8 → 7; text content differs.
1. **Document File Preview Card** → `file-preview-card:withDescription`: elements 10 → 9.
1. **See More File Preview Card** → `file-preview-card:seeMore`: elements 6 → 5.

### file-preview-card-group

1. **Base** → `file-preview-card-group:mixedTypesWithDetails`: classes added: file-preview-card ×2, file-preview-card__body ×2, icon-button ×2, file-preview-card__action ×2, file-preview-card__info, file-preview-card__asset ×2; attributes added: type="button" ×2, aria-label="Open menu" ×2, src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg"; elements 21 → 33; text content differs.

### flag

1. **(top of page)** → `flag:base`: identical.
1. **Flag sizes** → `flag:sizes`: identical.

### icon

1. **General Markup Approach** → `icon:base`: identical.
1. **Simple Icons** → `icon:simpleDisabled`: identical.
1. **Filled Icons** → `icon:filled`: identical.
1. **Complex Icons** → `icon:complexDisabled`: identical.

### image-placeholder

1. **(top of page)** → `image-placeholder:base`: identical.
1. **Variable widths with borders** → `image-placeholder:variableWidthsWithBorders`: identical.

### item-tile

1. **Item Tile in Gallery View** → `item-tile:galleryView`: identical.
1. **Item Tile in List View** → `item-tile:listView`: identical.

### item-tile-group

1. **Set of Grid View Item Tiles** → `item-tile-group:galleryView`: classes added: item-tile ×8, item-tile__header ×8, file-preview-card ×8, file-preview-card__body ×8, file-preview-card__asset ×8, icon-button ×8, file-preview-card__action ×8, item-tile__body ×8, item-tile__section-primary ×8, signal ×6, signal--trustworthy ×6, item-tile__section-secondary ×8, item-tile__title ×8, item-tile__subtitle ×6, item-tile__section-tertiary ×8, clipped ×8, item-tile__list-price ×8; attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" ×4, type="button" ×8, aria-label="Open menu" ×8, src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg" ×2, src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" ×2; elements 92 → 272; text content differs.
1. **Set of List View Item Tiles** → `item-tile-group:listView`: classes added: item-tile ×8, item-tile--list-view ×8, item-tile__header ×8, file-preview-card ×8, file-preview-card__body ×8, file-preview-card__asset ×8, icon-button ×8, file-preview-card__action ×8, item-tile__body ×8, item-tile__section-primary ×8, signal ×6, signal--trustworthy ×6, item-tile__section-secondary ×8, item-tile__title ×8, item-tile__subtitle ×6, item-tile__section-tertiary ×8, clipped ×8, item-tile__list-price ×8; attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" ×4, type="button" ×8, aria-label="Open menu" ×8, src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg" ×2, src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" ×2; elements 92 → 272; text content differs.

### layout-grid

1. **Default Layouts with Radio Buttons** → `layout-grid:withRadios`: attributes added: name="layout-grid-radio" ×7; removed: aria-label="Default radio example" ×7, name="radio-default" ×7.
1. **Default Layouts with Buttons** → `layout-grid:base`: text content differs.
1. **Custom Layouts with Buttons** → `layout-grid:custom`: text content differs.

### list

1. **Default List** → `list:withLeading`: text content differs.
1. **Actionable list** → `list:action`: attributes added: type="checkbox"; removed: tabindex="0".
1. **List with dividers** → `list:withDivider`: classes added: list__leading ×3, list__body ×3; elements 18 → 36; text content differs.
1. **List with variable width** → `list:variableWidth`: identical.
1. **List with fieldset** → `list:withRadio`: identical.

### progress-bar

1. **Initial State** → `progress-bar:empty`: identical.
1. **Loading State** → `progress-bar:half`: identical.
1. **Completed State** → `progress-bar:full`: identical.
1. **Fluid Progress Bar** → `progress-bar:fluid`: identical.
1. **Animated Progress Bar** → `progress-bar:animated`: identical.

### progress-bar-expressive

1. **Default Expressive Progress Bar** → `progress-bar-expressive:base`: identical.
1. **Expressive Progress Bar with Single Message** → `progress-bar-expressive:withSingleMessage`: attributes removed: aria-live="off".
1. **Reduced motion behavior** → `progress-bar-expressive:withMessages`: attributes removed: aria-live="off".
1. **Medium text** → `progress-bar-expressive:withMediumText`: attributes removed: aria-live="off".

### progress-spinner

1. **(top of page)** → `progress-spinner:base`: attributes added: aria-label="Busy animation"; removed: aria-label="Busy".
1. **Small Progress Spinner** → `progress-spinner:small`: identical.
1. **Large Progress Spinner** → `progress-spinner:large`: identical.

### progress-stepper

1. **Default Progress Stepper** → `progress-stepper:base`: classes removed: progress-stepper__icon; elements 30 → 29; text content differs.
1. **Delivered** → `progress-stepper:customSize`: identical.
1. **Vertical Progress Stepper** → `progress-stepper:vertical`: classes added: clipped; removed: progress-stepper__icon; attributes added: aria-labelledby; elements 23 → 24; text content differs.
1. **Delivered** → `progress-stepper:errorState`: text content differs.

### skeleton

1. **Avatar Skeleton** → `skeleton:base/avatar`: identical.
1. **Button Skeleton** → `skeleton:base/button`: identical.
1. **Button Skeleton** → `skeleton:base/buttonSmall`: identical.
1. **Button Skeleton** → `skeleton:base/buttonLarge`: identical.
1. **Textbox Skeleton** → `skeleton:base/textBox`: identical.
1. **Image Skeleton** → `skeleton:base/smallImage`: identical.
1. **Image Skeleton** → `skeleton:base/image`: identical.
1. **Text Block Skeleton** → `skeleton:base/textSmall`: identical.
1. **Text Block Skeleton** → `skeleton:base/textLarge`: identical.
1. **Text Block Skeleton** → `skeleton:base/textSmallMultiLine`: identical.
1. **Composite Skeleton** → `skeleton:composite/tile`: classes added: skeleton--blue; removed: skeleton--purple.
1. **Composite Skeleton** → `skeleton:composite/inlineSkeletons`: classes added: skeleton--green; removed: skeleton--blue.
1. **Skeleton Animation EXPERIMENTAL** → `skeleton:composite/viewTransition`: identical.

### video

1. **Base Video** → `video:base`: attributes added: aria-label="Sample video", aria-hidden="true", value="0.35", aria-valuetext="0:29"; removed: aria-label="sample video", role="group", aria-label="Video controls", value="0"; text content differs.
1. **Popover Controls** → `video:captionsPopover` + `video:volumePopover`: classes added: video, video__controls, video__control ×2, video__timestamp ×2, video__scrubber, menu__item; removed: menu__items; attributes added: src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4", type="button" ×2, aria-label="Play", type="range", aria-label="Seek", role="menuitemradio", aria-label="Fullscreen", aria-label="Sample video" ×2, aria-hidden="true" ×2, value="0.35" ×2, aria-valuetext="0:29" ×2, aria-haspopup="true", aria-expanded="true", tabindex="0", aria-checked="true", value="0.8", aria-valuetext="80%"; removed: aria-label="sample video", role="group", aria-label="Video controls", value="0", aria-expanded="false", role="menu", value="80"; elements 26 → 40; text content differs.
1. **Control Bar Variants** → `video:withoutSeek`: attributes added: aria-label="Sample video", src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"; removed: aria-label="sample video", role="group", aria-label="Video controls".
1. **Overlays** → `video:errorOverlay` + `video:loadingOverlay` + `video:playOverlay` + `video:navLink`: classes added: video__control, video__timestamp ×2, video__scrubber; attributes added: type="button", aria-label="Sample video" ×4, src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" ×4, aria-hidden="true", type="range", value="0.35", aria-label="Seek", aria-valuetext="0:29", aria-label="Fullscreen"; removed: aria-label="sample video" ×4, role="group", aria-label="Video controls"; elements 20 → 25; text content differs.
