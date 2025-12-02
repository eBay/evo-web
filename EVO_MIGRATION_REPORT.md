# Migration Report

**Date:** December 2, 2025
**Task:** Restructuring component documentation to match the accordion pattern
**Source:** `src/docs/a11y/patterns/component-patterns/[component].md`
**Destination:** `src/routes/component/[component]/+page.marko`

## Migration Steps

For each component, the following restructuring is required:

### Important Guidelines

- **No rewording or rephrasing** - Text content must be moved as-is without changing tone, style, or meaning
- **Structure only** - Focus on moving sections to the correct location and converting format (markdown → HTML or vice versa)
- **Preserve content** - All content must be preserved; only the location and format should change

### Step 1: Move Content from A11y Markdown to Component Page

Move the following sections from `src/docs/a11y/patterns/component-patterns/[component].md` to `src/routes/component/[component]/+page.marko`:

- **Introduction/overview content** - Convert to HTML paragraphs
- **Terminology section** - Convert to HTML with `<h2>`, `<ul>`, `<li>`, `<strong>` tags

### Step 2: Update Component Page Structure

The component page should include:

- **Component title** - `<h1>[Component] Component</h1>`
- **Subtitle** - `<p class="component-subtitle">Brief description</p>`
- **Banner image** - `<component-banner-img />`
- **Introduction paragraphs** - Moved from a11y markdown
- **Terminology section** - Moved from a11y markdown with proper HTML structure

### Step 3: Clean Up A11y Markdown

Keep only the following sections in `src/docs/a11y/patterns/component-patterns/[component].md`:

- **Best Practices** section
- **Interaction Design** section (with Keyboard, Screen Reader, Pointer subsections)
- **ARIA Reference** section (convert to clean markdown table format)
- **Further Reading** section (if present)

### Step 4: Standardize ARIA Reference Format

Convert ARIA Reference from old format to a markdown table:

```markdown
| Attribute      | Description                  |
| -------------- | ---------------------------- |
| **role="..."** | Description of the role      |
| **aria-...**   | Description of the attribute |
```

## Summary

- **Total Components:** 84
- **Components with Pattern Documentation:** 62
- **Components with Terminology Migrated:** 25
- **Components with Subtitle Added:** 44
- **Components with Banner Image Added:** 42
- **Components with ARIA Reference Tables:** 35
- **Components Pending Full Restructuring:** 59

---

## Migration Progress Tracking

### Status Legend

- **✅** - Feature/section is complete and in proper format
- **❌** - Feature/section is missing or not applicable
- **⏸️** - Content not yet available (placeholder exists)

### Next Steps Required

For components marked **✅ ❌**, complete all migration steps:

1. ✅ Move Introduction/overview (partially done for some)
2. ✅ Move Terminology section (done for 25 components)
3. ⏳ Add subtitle with `class="component-subtitle"`
4. ⏳ Add banner image with `class="component-banner-img"`
5. ⏳ Clean up a11y markdown (keep only Best Practices, Interaction Design, ARIA Reference, Further Reading)
6. ⏳ Standardize ARIA Reference table format

### Column Descriptions

- **Pattern Available**: Component has accessibility pattern documentation in `src/docs/a11y/patterns/component-patterns/`
- **Terminology**: Component page includes Terminology section moved from a11y docs
- **Subtitle**: Component page has subtitle with `class="component-subtitle"`
- **Banner**: Component page has banner image with `class="component-banner-img"`
- **ARIA Reference**: A11y pattern docs include ARIA Reference section in clean markdown table format
  - ✅ = Has ARIA Reference table
  - ❌ = No ARIA Reference section or N/A
  - ⏸️ = ARIA Reference placeholder exists but content not yet available

### Completed Terminology Migration (25 components)

These components have Step 1 (Terminology) complete but still need Steps 3-6:

- accordion, alert-dialog, avatar, breadcrumbs, calendar
- carousel, chips-combobox, combobox, confirm-dialog
- file-preview-card, infotip, lightbox-dialog
- listbox, listbox-button, menu, menu-button
- number-input, pagination, phone-input
- segmented-buttons, select, tabs
- toggle-button-group, tooltip, tourtip

### Fully Migrated Components (22 components)

These components have all 4 elements complete (Pattern + Terminology + Subtitle + Banner):

- accordion, alert-dialog, avatar, breadcrumbs, calendar
- carousel, combobox, confirm-dialog
- file-preview-card, infotip, lightbox-dialog
- listbox, listbox-button, menu-button
- number-input, pagination, phone-input
- segmented-buttons, select, tabs
- toggle-button-group, tooltip, tourtip

### ARIA Reference Tables Converted (34 components)

All component pattern docs with ARIA Reference sections now use clean markdown table format:

**With Pattern + ARIA Reference (22):**

- accordion, alert-dialog, avatar, badge, breadcrumbs, button
- carousel, checkbox, chips-combobox, combobox, date-textbox
- infotip, lightbox-dialog, link, menu, menu-button
- pagination, radio, segmented-buttons, switch, table
- toggle-button, toggle-button-group

**Pattern docs with ARIA Reference but non-component patterns (13):**

- fake-menu-button, fake-tabs, footnote, form-validation
- image (⏸️), input-validation, panel-dialog (⏸️), popover
- pulldown-list, region, star-rating-select, toast-dialog

**Note:** Two components (image, panel-dialog) have ARIA Reference placeholders marked as "content not yet available" (⏸️)

### Nearly Complete (2 components)

These components have Pattern + Terminology + Subtitle but are missing Banner:

- chips-combobox, menu

### Subtitle & Banner Added (Non-Pattern Components)

These components don't have pattern documentation but have subtitle and banner added:

- ccd, chip, cta-button, icon-button
- progress-stepper, section-notice, skeleton, snackbar-dialog, textbox

### Components Needing Subtitle & Banner (Pattern with No Terminology)

These components have pattern documentation (no terminology section) but need subtitle and banner:

- file-input, layout-grid, link, panel-dialog, star-rating
- star-rating-select, table, toast-dialog, toggle-button

---

## Component Status Table

| Component               | Pattern Available | Terminology | Subtitle | Banner | ARIA Reference |
| ----------------------- | ----------------- | ----------- | -------- | ------ | -------------- |
| accordion               | ✅                | ✅          | ✅       | ✅     | ✅             |
| alert-dialog            | ✅                | ✅          | ✅       | ✅     | ✅             |
| avatar                  | ✅                | ✅          | ✅       | ✅     | ✅             |
| badge                   | ✅                | ❌          | ✅       | ✅     | ✅             |
| breadcrumbs             | ✅                | ✅          | ✅       | ✅     | ✅             |
| button                  | ✅                | ❌          | ✅       | ✅     | ✅             |
| calendar                | ✅                | ✅          | ✅       | ✅     | ❌             |
| card                    | ✅                | ❌          | ✅       | ✅     | ❌             |
| carousel                | ✅                | ✅          | ✅       | ✅     | ✅             |
| ccd                     | ❌                | ❌          | ❌       | ✅     | ❌             |
| chart-legend            | ❌                | ❌          | ❌       | ❌     | ❌             |
| checkbox                | ✅                | ❌          | ✅       | ✅     | ✅             |
| chip                    | ❌                | ❌          | ✅       | ✅     | ❌             |
| chips-combobox          | ✅                | ✅          | ✅       | ❌     | ✅             |
| combobox                | ✅                | ✅          | ✅       | ✅     | ✅             |
| confirm-dialog          | ✅                | ✅          | ✅       | ✅     | ❌             |
| cta-button              | ❌                | ❌          | ✅       | ✅     | ❌             |
| date-textbox            | ✅                | ❌          | ✅       | ✅     | ✅             |
| details                 | ✅                | ❌          | ✅       | ✅     | ❌             |
| donut-chart             | ❌                | ❌          | ❌       | ❌     | ❌             |
| education-notice        | ❌                | ❌          | ❌       | ❌     | ❌             |
| eek                     | ❌                | ❌          | ❌       | ❌     | ❌             |
| field                   | ❌                | ❌          | ❌       | ❌     | ❌             |
| file-input              | ✅                | ❌          | ❌       | ❌     | ❌             |
| file-preview-card       | ✅                | ✅          | ✅       | ✅     | ❌             |
| file-preview-card-group | ❌                | ❌          | ❌       | ❌     | ❌             |
| filter-chip             | ❌                | ❌          | ❌       | ❌     | ❌             |
| filter-input            | ❌                | ❌          | ❌       | ❌     | ❌             |
| flag                    | ❌                | ❌          | ❌       | ❌     | ❌             |
| floating-label          | ❌                | ❌          | ❌       | ❌     | ❌             |
| global                  | ❌                | ❌          | ❌       | ❌     | ❌             |
| icon                    | ❌                | ❌          | ❌       | ❌     | ❌             |
| icon-button             | ❌                | ❌          | ✅       | ✅     | ❌             |
| image-placeholder       | ❌                | ❌          | ❌       | ❌     | ❌             |
| infotip                 | ✅                | ✅          | ✅       | ✅     | ✅             |
| inline-notice           | ✅                | ❌          | ✅       | ✅     | ❌             |
| item-tile               | ❌                | ❌          | ❌       | ❌     | ❌             |
| item-tile-group         | ❌                | ❌          | ❌       | ❌     | ❌             |
| layout-grid             | ✅                | ❌          | ❌       | ❌     | ❌             |
| less                    | ❌                | ❌          | ❌       | ❌     | ❌             |
| lightbox-dialog         | ✅                | ✅          | ✅       | ✅     | ✅             |
| link                    | ✅                | ❌          | ❌       | ❌     | ✅             |
| list                    | ❌                | ❌          | ✅       | ❌     | ❌             |
| listbox                 | ✅                | ✅          | ✅       | ✅     | ❌             |
| listbox-button          | ✅                | ✅          | ✅       | ✅     | ❌             |
| marketsans              | ❌                | ❌          | ❌       | ❌     | ❌             |
| menu                    | ✅                | ✅          | ✅       | ❌     | ✅             |
| menu-button             | ✅                | ✅          | ✅       | ✅     | ✅             |
| number-input            | ✅                | ✅          | ✅       | ✅     | ❌             |
| page-grid               | ❌                | ❌          | ❌       | ❌     | ❌             |
| page-notice             | ✅                | ❌          | ✅       | ✅     | ❌             |
| pagination              | ✅                | ✅          | ✅       | ✅     | ✅             |
| panel-dialog            | ✅                | ❌          | ❌       | ❌     | ⏸️             |
| phone-input             | ✅                | ✅          | ✅       | ✅     | ❌             |
| progress-bar            | ❌                | ❌          | ❌       | ❌     | ❌             |
| progress-bar-expressive | ❌                | ❌          | ❌       | ❌     | ❌             |
| progress-spinner        | ❌                | ❌          | ❌       | ❌     | ❌             |
| progress-stepper        | ❌                | ❌          | ✅       | ✅     | ❌             |
| radio                   | ✅                | ❌          | ✅       | ✅     | ✅             |
| sass                    | ❌                | ❌          | ❌       | ❌     | ❌             |
| section-notice          | ❌                | ❌          | ✅       | ✅     | ❌             |
| section-title           | ❌                | ❌          | ❌       | ❌     | ❌             |
| segmented-buttons       | ✅                | ✅          | ✅       | ✅     | ✅             |
| select                  | ✅                | ✅          | ✅       | ✅     | ❌             |
| selection-chip          | ❌                | ❌          | ❌       | ❌     | ❌             |
| signal                  | ❌                | ❌          | ❌       | ❌     | ❌             |
| skeleton                | ❌                | ❌          | ✅       | ✅     | ❌             |
| snackbar-dialog         | ❌                | ❌          | ✅       | ✅     | ❌             |
| split-button            | ❌                | ❌          | ❌       | ❌     | ❌             |
| star-rating             | ✅                | ❌          | ❌       | ❌     | ❌             |
| star-rating-select      | ✅                | ❌          | ❌       | ❌     | ⏸️             |
| svg                     | ❌                | ❌          | ❌       | ❌     | ❌             |
| switch                  | ✅                | ❌          | ✅       | ✅     | ✅             |
| table                   | ✅                | ❌          | ❌       | ❌     | ✅             |
| tabs                    | ✅                | ✅          | ✅       | ✅     | ❌             |
| textbox                 | ❌                | ❌          | ✅       | ✅     | ❌             |
| toast-dialog            | ✅                | ❌          | ❌       | ❌     | ✅             |
| toggle-button           | ✅                | ❌          | ❌       | ❌     | ✅             |
| toggle-button-group     | ✅                | ✅          | ✅       | ✅     | ✅             |
| tokens                  | ❌                | ❌          | ❌       | ❌     | ❌             |
| tooltip                 | ✅                | ✅          | ✅       | ✅     | ❌             |
| tourtip                 | ✅                | ✅          | ✅       | ✅     | ❌             |
| typography              | ❌                | ❌          | ❌       | ❌     | ❌             |
| utility                 | ❌                | ❌          | ❌       | ❌     | ❌             |

---

## Patterns in A11y Docs but Not in Component Routes

The following pattern documentation exists but has no corresponding component page:

| Pattern File        | Status            |
| ------------------- | ----------------- |
| description-list.md | No component page |
| fake-menu-button.md | No component page |
| fake-tabs.md        | No component page |
| footnote.md         | No component page |
| form.md             | No component page |
| form-validation.md  | No component page |
| heading.md          | No component page |
| image.md            | No component page |
| input-dialog.md     | No component page |
| input-meter.md      | No component page |
| input-validation.md | No component page |
| popover.md          | No component page |
| pulldown-list.md    | No component page |
| region.md           | No component page |
| skip-navigation.md  | No component page |
| table-cell.md       | No component page |
| tile.md             | No component page |
| time.md             | No component page |

---

## Migration Details

### Patterns with No Terminology Section (18 components)

These components have a11y pattern documentation, but the pattern docs don't include a terminology section:

- badge
- button
- card
- checkbox
- date-textbox
- details
- file-input
- inline-notice
- layout-grid
- link
- page-notice
- panel-dialog (content not yet available)
- radio
- star-rating
- star-rating-select (content not yet available)
- switch
- table
- toast-dialog (content not yet available)
- toggle-button

### Components Without Pattern Documentation (41 components)

These components exist in the routes but have no corresponding a11y pattern documentation:

- ccd, chart-legend, chip, cta-button, donut-chart
- education-notice, eek, field, file-preview-card-group
- filter-chip, filter-input, flag, floating-label, global
- icon, icon-button, image-placeholder, item-tile, item-tile-group
- less, list, marketsans, page-grid
- progress-bar, progress-bar-expressive, progress-spinner, progress-stepper
- sass, section-notice, section-title, selection-chip, signal, skeleton
- snackbar-dialog, split-button, svg
- textbox, tokens, typography, utility

**Report Generated:** December 2, 2025
