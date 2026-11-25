# Story and Docs Discrepancies: Buttons and navigation (#1153)

**Date:** 2026-11-25
**Status:** Reference document for the pull request that fixes #1153
**Related:** [ADR 0008](../0008-skin-storybook-docs-integration.md) (the `<component-demo>` design), [#1146](https://github.com/eBay/evo-web/issues/1146) (parent issue), [#1153](https://github.com/eBay/evo-web/issues/1153)

## Purpose

This pull request moves the buttons and navigation Skin CSS docs demos onto `<component-demo>`, which renders each demo and its code sample from the Skin story. The hand-written docs markup and the stories had drifted, and the stories had defects of their own. Because the same markup now serves Storybook and the docs, this pull request fixes those defects instead of carrying them onto the docs: nothing may work or read worse than the old docs example did, and every markup and accessibility defect found in these components' stories and pages is fixed. This document itemizes each discrepancy and what was done about it.

Components: `button`, `button-link`, `link-button`, `cta-button`, `icon-button`, `link`, `toggle-button`, `toggle-button-group`, `segmented-buttons`, `chip`, `navigation-menu`, `navigation-tabs`, `tabs`, `details`, `accordion`.

## 1. Summary

### 1.1 How the stories were checked

1. **Axe:** axe-core with the WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices, on every story of these components in Skin Storybook. Page-level rules that do not apply to an isolated fragment (`region`, `landmark-one-main`, `page-has-heading-one`, `bypass`, `html-has-lang`, `document-title`, `landmark-complementary-is-top-level`) were off.
2. **Static audit:** every story export parsed with the Prettier HTML parser `<highlight-code>` uses, plus checks for unbalanced tags, duplicate ids, `for` and `aria-*` references to missing ids, Marko-only syntax, and root-relative asset paths.
3. **Docs pages:** each page loaded in a browser: HTTP status, script errors, broken images, and the docs-site behaviors these components use.

### 1.2 Results

| Check                                                    | Before          | After |
| -------------------------------------------------------- | --------------- | ----- |
| Stories with any axe violation                           | 23              | 15    |
| Of those, stories whose only violation is color contrast | not recorded    | 15    |
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

- `button/stories/button/tertiary.stories.js` `textOnly`: closed `</button` with no `>`; added `>`. Reason: unparseable markup (the docs page returned HTTP 500). Percy: none.
- `link/stories/link.stories.js` `nav`: removed a stray `</li>`. Reason: unparseable markup. Percy: none.

### 3.2 Accessibility and markup fixes, by component

### button

- button/stories/button/base.stories.js formSlim: added type="button", aria-expanded="false", aria-label="Expand/Collapse"; aria-hidden on the icon. Reason: axe button-name; restores old docs attributes. Percy: none.
- button/stories/button/borderless.stories.js empty: added aria-label="Expand" to the icon-only disabled button. Reason: axe button-name. Percy: none.
- button/stories/fake-button/primary.stories.js, secondary.stories.js iconOnly: added aria-label="Close" to the icon-only link and aria-hidden on its icon. Reason: axe link-name. Percy: none.
- button/stories/destructive-button/{primary,secondary,tertiary}.stories.js disabled: closed the unterminated `</button`; label "Tertiary" changed to "Destructive Button" to match the sibling exports. Reason: static finding (unparseable). Percy: visible (label text).

### cta-button

- cta-button/stories/cascade.stories.js RTL: `<div>` closer changed to `</div>`. Reason: static finding. Percy: none.

### icon-button

- icon-button/stories/links.stories.js baseDisabled, primaryDisabled, secondaryDisabled, tertiaryDisabled: added role="link" aria-disabled="true" to the 12 href-less icon links so their aria-label is allowed; `a[aria-disabled="true"].icon-link` keeps the disabled styling. Reason: axe aria-prohibited-attr. Percy: none.

### link

- link/stories/link.stories.js RTL: `<div>` closer changed to `</div>`. Reason: static finding. Percy: none.
- link/stories/link.stories.js disabledFake: `disbaled` corrected to `disabled`. Reason: static finding. Percy: visible (button now renders disabled).
- link/stories/link.stories.js nav: replaced the bare link with the old docs example: `<nav aria-labelledby>` with a heading and five nav links in a list; `role="navigation"` omitted as redundant on `<nav>`; 8px between items so targets meet WCAG 2.5.8. Reason: restores old docs attributes (labelled navigation landmark); axe target-size. Percy: visible.

### toggle-button-group

- toggle-button-group/stories/list-layout.stories.js titlaSubtitle: export renamed to titleSubtitle (Storybook id changes to skin-toggle-button-group-list-layout--title-subtitle). Reason: 1.2 item. Percy: snapshot renamed.

## 4. Docs pages

- src/routes/_index/components/segmented-buttons/css+page.marko: four `id="button-default"` headings changed to segmented-buttons-default, -large, -icons, -container. Reason: 1.2 item (duplicate id). Nothing linked to the old ids.
- src/routes/_index/components/toggle-button-group/css+page.marko: `<component-demo>` variant updated to list-layout/titleSubtitle; unused `imgSquarePic` import and `basePath` removed. Reason: 1.2 items.
- src/routes/_index/components/toggle-button/css+page.marko: "Resonsive" corrected to "Responsive"; unused `imgLandscapePic`, `imgSquarePic` imports and `basePath` removed. Reason: 1.2 items.
- Duplicate heading ids renamed, nothing linked to them: Toggle Button Group second width-slider demo (`toggle-button-group-c2`).

Demos that stay static on purpose:

- Deprecated `fake-btn` sizes, tertiary and destructive variants on the Button page have no story and sit beside the `<component-demo>` for the current `button` markup.
- Button "Activate Spinner" and the Toggle Button Group width sliders exist only to drive the docs-site script.
- Two Link page demos sit inside an HTML comment.

## 5. Docs-site changes outside the CSS pages

None.

## 6. New story exports

36 new exports. They add Percy snapshots and change none.

- `button-link/stories/destructive.stories.js`: `primary`, `secondary`, `tertiary`
- `button-link/stories/dimensions.stories.js`: `largeFixedHeightTruncated`, `small`
- `button-link/stories/tertiary.stories.js`: `disabled`, `textOnly`
- `button/stories/button/base.stories.js`: `flexibleLayout`, `floatingLabel`, `floatingLabelInline`, `formExpandable`
- `button/stories/button/dimensions.stories.js`: `fixedHeight`
- `button/stories/button/primary.stories.js`: `expandable`, `textAndIcon`
- `chip/stories/static-chip.stories.js`: `inContainer`
- `cta-button/stories/cta-button.stories.js`: `disabled`, `partiallyDisabled`
- `cta-button/stories/dimensions.stories.js`: `fluid`
- `details/stories/details.stories.js`: `leadingIcon`
- `icon-button/stories/buttons.stories.js`: `badged`, `transparent`
- `icon-button/stories/links.stories.js`: `badged`, `transparent`
- `link/stories/link.stories.js`: `nested`
- `toggle-button-group/stories/gallery-layout.stories.js`: `withIcons`
- `toggle-button-group/stories/list-layout.stories.js`: `titleSubtitle`, `withIcons`
- `toggle-button-group/stories/minimal-layout.stories.js`: `base`, `multiSelect`, `offScreenHeading`, `onScreenHeading`, `singleSelectOptional`, `singleSelectRequired`
- `toggle-button/stories/gallery-layout.stories.js`: `disabledStates`
- `toggle-button/stories/list-layout.stories.js`: `profileCSSImageContainBackground`, `profileCSSImageCoverBackground`

## 7. Accessibility attributes compared with the old docs examples

For each migrated demo, the accessibility attributes (`role`, `aria-*`, `tabindex`, `for`, `alt`) counted by name in the old docs example and in the story. A count difference can mean the story has more or fewer elements, so each entry says why it is not a regression.

### 7.1 Attributes the old example had that the story does not

1. button, **Partially Disabled Button** (`button:primary/partiallyDisabled`): lacks `aria-disabled`. Not a gap: one partially disabled button where the old docs showed two.
1. link, **Nav Link** (`link:nav`): lacks `role="navigation"`. Not a gap: `<nav>` already has the navigation role.
1. toggle-button-group, **List Layout Toggle Button Group with Title** (`toggle-button-group:list-layout/titleOnly`): lacks `aria-labelledby`. The story adds `aria-pressed ×2`, `aria-label`. Not a gap: the group is named with `aria-label` instead of `aria-labelledby`.
1. toggle-button-group, **List Layout Toggle Button Group with Subtitles (multiple buttons toggled on)** (`toggle-button-group:list-layout/titleSubtitle`): lacks `aria-labelledby`. The story adds `aria-pressed ×2`, `aria-label`. Not a gap: the group is named with `aria-label` instead of `aria-labelledby`.
1. toggle-button-group, **Gallery Layout Toggle Button Group with Images** (`toggle-button-group:gallery-layout/usingIMGTag`): lacks `aria-labelledby`. The story adds `aria-label`. Not a gap: the group is named with `aria-label` instead of `aria-labelledby`.
1. toggle-button-group, **Gallery Layout Toggle Button Group with CSS Images** (`toggle-button-group:gallery-layout/usingCSSImage`): lacks `aria-labelledby`. The story adds `aria-label`. Not a gap: the group is named with `aria-label` instead of `aria-labelledby`.

### 7.2 Attributes the story adds

1. tabs, **Default Tabs** (`tabs:block/three`): adds `tabindex`.

## 8. Per-demo comparison: old docs markup against the story that replaced it

96 old demos compared: 45 identical and 51 with differences.

The old demo is the markup inside its `demo__inner` wrapper on `main`, with Marko-only syntax converted to HTML; the new markup is the story output with `<script>` removed. Compared: class names; `role`, `aria-*`, `tabindex`, `hidden`, `disabled`, `type`, `data-*`, `src`, `checked`, `selected`, `readonly`, `required`, `name` and `value` attributes; element count; and text content. Ignored: whitespace, attribute order, `id` values, and anything inside `<svg>`; id-reference attributes are compared by presence only. "Identical" means identical under these rules, not byte for byte. Old demos are matched to new tags by the prose between them, or in order where the page had examples without a demo wrapper or corrected prose.

### accordion

1. **Default Accordion** → `accordion:closed`: identical.
1. **Opened Accordion** → `accordion:open`: text content differs.
1. **Large Accordion** → `accordion:large`: identical.
1. **Auto-Collapsing Accordion** → `accordion:autoCollapse`: attributes added: name="accordion-1" ×3.
1. **Accordion with Leading Icon** → `accordion:leadingIconClosed`: identical.

### button

1. **Default Button** → `button:base/textOnly` + `fake-button:base/textOnly`: text content differs.
1. **Default Button** → `button:dimensions/large` + `fake-button:dimensions/large`: classes added: button__cell, fake-btn__cell; attributes added: type="button"; elements 2 → 8; text content differs.
1. **Default Button**: kept static, edited (deprecated `fake-*` part beside its `<component-demo>`, or a duplicate id renamed).
1. **Default Button** → `button:dimensions/small`: classes added: button__cell; removed: fake-btn, fake-btn--small; attributes added: type="button"; elements 2 → 4; text content differs.
1. **Primary Button** → `button:primary/textOnly` + `fake-button:primary/textOnly`: text content differs.
1. **Secondary Button** → `button:secondary/textOnly` + `fake-button:secondary/textOnly`: text content differs.
1. **Tertiary Button**: kept static, edited (deprecated `fake-*` part beside its `<component-demo>`, or a duplicate id renamed).
1. **Tertiary Button** → `button:tertiary/textOnly`: classes removed: fake-btn, fake-btn--tertiary; elements 2 → 1; text content differs.
1. **Disabled Button** → `button:primary/disabled` + `button:secondary/disabled` + `button:tertiary/disabled`: classes added: button__cell ×3; elements 3 → 12; text content differs.
1. **Disabled Button**: kept static, edited (deprecated `fake-*` part beside its `<component-demo>`, or a duplicate id renamed).
1. **Disabled Button** → `fake-button:primary/disabled` + `fake-button:secondary/disabled`: classes added: fake-btn__cell ×2; removed: fake-btn, fake-btn--tertiary; elements 3 → 8; text content differs.
1. **Partially Disabled Button** → `button:primary/partiallyDisabled`: classes added: button__cell; removed: button, button--primary; attributes removed: aria-disabled="true", type="button"; elements 2 → 4; text content differs.
1. **Primary Destructive Button**: kept static, edited (deprecated `fake-*` part beside its `<component-demo>`, or a duplicate id renamed).
1. **Primary Destructive Button** → `button:destructive-primary/textOnly`: classes removed: fake-btn, fake-btn--primary, fake-btn--destructive; elements 2 → 1; text content differs.
1. **Secondary Destructive Button**: kept static, edited (deprecated `fake-*` part beside its `<component-demo>`, or a duplicate id renamed).
1. **Secondary Destructive Button** → `button:destructive-secondary/textOnly`: classes removed: fake-btn, fake-btn--secondary, fake-btn--destructive; elements 2 → 1; text content differs.
1. **Tertiary Destructive Button**: kept static, edited (deprecated `fake-*` part beside its `<component-demo>`, or a duplicate id renamed).
1. **Tertiary Destructive Button** → `button:destructive-tertiary/textOnly`: classes removed: fake-btn, fake-btn--tertiary, fake-btn--destructive; elements 2 → 1; text content differs.
1. **Adjacent Icon Button** → `button:primary/iconAndText` + `button:primary/textAndIcon`: attributes added: type="button" ×2.
1. **Busy State for Button** → `button:primary/busy`: attributes added: aria-label="Busy"; removed: aria-label="Busy...".
1. **Busy State for Button**: kept static, unchanged from `main`.
1. **Flexible Button** → `button:base/flexibleLayout`: identical.
1. **Fixed Height Button** → `button:dimensions/fixedHeight`: identical.
1. **Fixed Width Button** → `button:dimensions/fixedWidth`: classes removed: button--primary; text content differs.
1. **Fixed Width and Height Button** → `button:dimensions/fixedWidthAndHeight`: classes removed: button--primary; attributes added: type="button"; text content differs.
1. **Fixed Width and Height Button** → `button:dimensions/fixedWidthAndHeightTruncated`: classes removed: button--primary; attributes added: type="button"; text content differs.
1. **Expandable Buttons** → `button:primary/expandable`: identical.
1. **Expandable Buttons** → `button:borderless/base`: attributes removed: type="button".
1. **Expandable Buttons** → `button:base/formExpandable`: identical.
1. **Expandable Buttons** → `button:base/formSlim`: classes removed: expand-btn-example.
1. **Expandable Buttons** → `button:base/floatingLabel`: identical.
1. **Expandable Buttons** → `button:base/floatingLabelInline`: identical.

### button-link

1. **Default Button Link** → `button-link:base/textOnly`: text content differs.
1. **Default Button Link** → `button-link:dimensions/large`: classes added: button-link__cell; elements 1 → 4; text content differs.
1. **Default Button Link** → `button-link:dimensions/small`: classes added: button-link__cell; elements 1 → 4; text content differs.
1. **Primary Button Link** → `button-link:primary/textOnly`: text content differs.
1. **Secondary Button Link** → `button-link:secondary/textOnly`: text content differs.
1. **Tertiary Button Link** → `button-link:tertiary/textOnly`: text content differs.
1. **Disabled Button Link** → `button-link:primary/disabled` + `button-link:secondary/disabled` + `button-link:tertiary/disabled`: classes added: button-link__cell ×3; elements 3 → 12; text content differs.
1. **Partially Disabled Button Link** → `button-link:primary/partiallyDisabled`: classes added: button-link__cell; elements 1 → 4; text content differs.
1. **Primary Destructive Button Link** → `button-link:destructive/primary`: text content differs.
1. **Secondary Destructive Button Link** → `button-link:destructive/secondary`: text content differs.
1. **Tertiary Destructive Button Link** → `button-link:destructive/tertiary`: text content differs.
1. **Adjacent Icon Button Link** → `button-link:primary/iconAndText`: text content differs.
1. **Fluid Button Link** → `button-link:dimensions/fluid`: classes removed: button-link--primary; text content differs.
1. **Fixed Width Button Link** → `button-link:dimensions/fixedWidth`: classes removed: button-link--primary; text content differs.
1. **Fixed Width Button Link** → `button-link:dimensions/largeFixedHeightTruncated`: text content differs.

### chip

1. **(top of page)** → `chip:destructive-chip/typical`: attributes added: aria-label="Remove"; removed: aria-label="Remove value - Football".
1. **(top of page)** → `chip:static-chip/typical`: identical.
1. **Note on Chips in Containers** → `chip:static-chip/inContainer`: classes removed: chip-container-demo-1.

### cta-button

1. **Default CTA Button** → `cta-button:base`: identical.
1. **Large CTA Button** → `cta-button:dimensions/large`: identical.
1. **Fluid CTA Button** → `cta-button:dimensions/fluid`: identical.
1. **Fixed Width Truncated CTA Button** → `cta-button:dimensions/largeFixedWidthTruncated`: identical.
1. **Disabled CTA Button** → `cta-button:disabled`: identical.
1. **Partially Disabled CTA Button** → `cta-button:partiallyDisabled`: identical.

### details

1. **Default Details** → `details:closed`: identical.
1. **Opened Details** → `details:open`: identical.
1. **Centered Details** → `details:centered`: identical.
1. **Small Details** → `details:small`: identical.
1. **Details with leading icon** → `details:leadingIcon`: identical.
1. **RTL Details** → `details:cascade/RTL`: elements 6 → 7.

### icon-button

1. **Deprecated** → `icon-button:alignment/menu`: attributes added: aria-label="menu" ×2; removed: aria-label="Menu", aria-label="Settings".
1. **Deprecated** → `icon-button:buttons/base`: identical.
1. **Deprecated** → `icon-button:buttons/transparent` + `icon-button:links/transparent`: identical.
1. **Badged Icon Button** → `icon-button:buttons/badged` + `icon-button:links/badged`: identical.
1. **Primary Icon Button** → `icon-button:buttons/primary`: identical.
1. **Secondary Icon Button** → `icon-button:buttons/secondary`: identical.
1. **Tertiary Icon Button** → `icon-button:buttons/tertiary`: identical.
1. **Using with a Progress Spinner** → `icon-button:buttons/primarySpinner`: identical.
1. **Using a Link** → `icon-button:links/primary`: identical.

### link

1. **Nested Link** → `link:nested`: identical.
1. **Action Link**: kept static, unchanged from `main`.
1. **Nav Link** → `link:nav`: attributes removed: role="navigation".
1. **Legal Link** → `link:legal` + `link:legalFake`: elements 4 → 2; text content differs.
1. **Deprecated** → `link:fake`: identical.
1. **Deprecated**: kept static, unchanged from `main`.

### link-button

1. **(top of page)** → `link-button:base`: identical.
1. **Legal Link Button** → `link-button:legal`: text content differs.

### navigation-menu

1. **(top of page)** → `navigation-menu:linksSelected`: identical.

### navigation-tabs

1. **(top of page)** → `navigation-tabs:block/three`: classes added: navigation-tabs__item--current, clipped; text content differs.

### segmented-buttons

1. **Default Segmented Buttons** → `segmented-buttons:base`: identical.
1. **Segmented Buttons - large** → `segmented-buttons:large`: identical.
1. **Segmented buttons - with icons** → `segmented-buttons:withIcons`: identical.
1. **Segmented buttons - in fixed width container** → `segmented-buttons:inContainer`: identical.

### tabs

1. **Default Tabs** → `tabs:block/three`: classes removed: tabs__panel ×3; attributes added: tabindex="0"; elements 24 → 18; text content differs.
1. **Deprecated** → `fake-tabs:tabs-fake-tabs-block/three`: classes added: fake-tabs__item--current, clipped; text content differs.

### toggle-button

1. **Minimal Layout** → `toggle-button:minimal-layout/toggledOff` + `toggle-button:list-layout/titleOnly` + `toggle-button:list-layout/titleSubtitle` + `toggle-button:list-layout/titleMultilineSubtitle` + `toggle-button:list-layout/iconTitleSubtitle` + `toggle-button:list-layout/profileImageTitleSubtitle` + `toggle-button:list-layout/profileCSSImageContainBackground` + `toggle-button:list-layout/profileCSSImageCoverBackground` + `toggle-button:gallery-layout/profileImageTitleSubtitle` + `toggle-button:gallery-layout-responsive/smallButtonWithImage` + `toggle-button:gallery-layout-responsive/mediumButtonWithImage` + `toggle-button:gallery-layout-responsive/largeButtonWithImage` + `toggle-button:gallery-layout-responsive/smallButtonWithCSSImageContainBackground` + `toggle-button:gallery-layout-responsive/mediumButtonWithCSSImageContainBackground` + `toggle-button:gallery-layout-responsive/largeButtonWithCSSImageContainBackground` + `toggle-button:gallery-layout-responsive/smallButtonWithCSSImageCoverBackground` + `toggle-button:gallery-layout-responsive/mediumButtonWithCSSImageCoverBackground` + `toggle-button:gallery-layout-responsive/largeButtonWithCSSImageCoverBackground` + `toggle-button:gallery-layout/iconTitleSubtitle` + `toggle-button:gallery-layout/disabledStates`: attributes added: src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" ×5; removed: src="imgProfilePic" ×5; elements 144 → 143; text content differs. Compared against 14 old demos together. Old markup contained Marko loops or expressions, so the comparison is approximate.

### toggle-button-group

1. **On-screen Heading with Associated List (a - preferred)** → `toggle-button-group:minimal-layout/onScreenHeading`: identical.
1. **Off-screen Heading with Associated List (b)** → `toggle-button-group:minimal-layout/offScreenHeading`: identical.
1. **Multi-select** → `toggle-button-group:minimal-layout/multiSelect`: identical.
1. **Single-select Optional** → `toggle-button-group:minimal-layout/singleSelectOptional`: identical.
1. **Single-select Required** → `toggle-button-group:minimal-layout/singleSelectRequired`: identical.
1. **Responsive Out of the Box**: kept static, unchanged from `main`.
1. **Exception Cases for Preferred Number of Toggle Buttons Per Line**: kept static, unchanged from `main`.
1. **Minimal Layout (default)** → `toggle-button-group:minimal-layout/base`: identical.
1. **List Layout Toggle Button Group with Title** → `toggle-button-group:list-layout/titleOnly`: classes added: toggle-button ×2, toggle-button__content ×2, toggle-button__title ×2, toggle-button--list-layout ×5; attributes added: type="button" ×2, aria-pressed="false" ×3, aria-label="Buttons"; removed: aria-labelledby, aria-pressed="true"; elements 16 → 22; text content differs.
1. **List Layout Toggle Button Group with Subtitles (multiple buttons toggled on)** → `toggle-button-group:list-layout/titleSubtitle`: classes added: toggle-button ×2, toggle-button__content ×2, toggle-button__title ×2, toggle-button__subtitle ×2, toggle-button--list-layout ×5; attributes added: type="button" ×2, aria-pressed="false" ×4, aria-label="Buttons"; removed: aria-labelledby, aria-pressed="true" ×2; elements 19 → 27; text content differs.
1. **List Layout Toggle Button Group with Icons** → `toggle-button-group:list-layout/withIcons`: identical.
1. **Gallery Layout Toggle Button Group with Images** → `toggle-button-group:gallery-layout/usingIMGTag`: attributes added: aria-label="Toggle buttons", src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg", src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg", src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-square-pic.jpg"; removed: aria-labelledby, src="imgProfilePic" ×3; elements 31 → 29; text content differs.
1. **Gallery Layout Toggle Button Group with CSS Images** → `toggle-button-group:gallery-layout/usingCSSImage`: attributes added: aria-label="Toggle buttons"; removed: aria-labelledby; elements 25 → 23; text content differs. Old markup contained Marko loops or expressions, so the comparison is approximate.
1. **Gallery Layout Toggle Button Group with Icons** → `toggle-button-group:gallery-layout/withIcons`: identical.
