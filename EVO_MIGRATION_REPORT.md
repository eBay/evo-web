# Migration Report

**Date:** November 25, 2025  
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
- **Banner image** - `<img class="component-banner-img" src="/src/routes/static/img/components/[component]-400.png" aria-hidden="true" />`
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
- **Components with Pattern Documentation:** 61
- **Components with Terminology Migrated:** 25
- **Components Pending Full Restructuring:** 59

---

## Migration Progress Tracking

### Status Legend

- **✅ ✅** - Both Pattern Available AND Terminology Migrated (Step 1 complete)
- **✅ ❌** - Pattern Available but Terminology NOT migrated (Step 1 pending)
- **❌ ❌** - No Pattern Documentation (Not applicable for migration)

### Next Steps Required

For components marked **✅ ❌**, complete all migration steps:

1. ✅ Move Introduction/overview (partially done for some)
2. ✅ Move Terminology section (done for 25 components)
3. ⏳ Add subtitle with `class="component-subtitle"`
4. ⏳ Add banner image with `class="component-banner-img"`
5. ⏳ Clean up a11y markdown (keep only Best Practices, Interaction Design, ARIA Reference, Further Reading)
6. ⏳ Standardize ARIA Reference table format

### Completed Terminology Migration (25 components)

These components have Step 1 (Terminology) complete but still need Steps 3-6:

- accordion, alert-dialog, avatar, breadcrumbs, calendar
- carousel, chips-combobox, combobox, confirm-dialog
- file-preview-card, infotip, lightbox-dialog
- listbox, listbox-button, menu, menu-button
- number-input, pagination, phone-input
- segmented-buttons, select, tabs
- toggle-button-group, tooltip, tourtip

---

## Component Status Table

| Component               | Pattern Available | Terminology |
| ----------------------- | ----------------- | ----------- |
| accordion               | ✅                | ✅          |
| alert-dialog            | ✅                | ✅          |
| avatar                  | ✅                | ✅          |
| badge                   | ✅                | ❌          |
| breadcrumbs             | ✅                | ✅          |
| button                  | ✅                | ❌          |
| calendar                | ✅                | ✅          |
| card                    | ✅                | ❌          |
| carousel                | ✅                | ✅          |
| ccd                     | ❌                | ❌          |
| chart-legend            | ❌                | ❌          |
| checkbox                | ✅                | ❌          |
| chip                    | ❌                | ❌          |
| chips-combobox          | ✅                | ✅          |
| combobox                | ✅                | ✅          |
| confirm-dialog          | ✅                | ✅          |
| cta-button              | ❌                | ❌          |
| date-textbox            | ❌                | ❌          |
| details                 | ✅                | ❌          |
| donut-chart             | ❌                | ❌          |
| education-notice        | ❌                | ❌          |
| eek                     | ❌                | ❌          |
| field                   | ❌                | ❌          |
| file-input              | ✅                | ❌          |
| file-preview-card       | ✅                | ✅          |
| file-preview-card-group | ❌                | ❌          |
| filter-chip             | ❌                | ❌          |
| filter-input            | ❌                | ❌          |
| flag                    | ❌                | ❌          |
| floating-label          | ❌                | ❌          |
| global                  | ❌                | ❌          |
| icon                    | ❌                | ❌          |
| icon-button             | ❌                | ❌          |
| image-placeholder       | ❌                | ❌          |
| infotip                 | ✅                | ✅          |
| inline-notice           | ✅                | ❌          |
| item-tile               | ❌                | ❌          |
| item-tile-group         | ❌                | ❌          |
| layout-grid             | ✅                | ❌          |
| less                    | ❌                | ❌          |
| lightbox-dialog         | ✅                | ✅          |
| link                    | ✅                | ❌          |
| list                    | ❌                | ❌          |
| listbox                 | ✅                | ✅          |
| listbox-button          | ✅                | ✅          |
| marketsans              | ❌                | ❌          |
| menu                    | ✅                | ✅          |
| menu-button             | ✅                | ✅          |
| number-input            | ✅                | ✅          |
| page-grid               | ❌                | ❌          |
| page-notice             | ✅                | ❌          |
| pagination              | ✅                | ✅          |
| panel-dialog            | ✅                | ❌          |
| phone-input             | ✅                | ✅          |
| progress-bar            | ❌                | ❌          |
| progress-bar-expressive | ❌                | ❌          |
| progress-spinner        | ❌                | ❌          |
| progress-stepper        | ❌                | ❌          |
| radio                   | ✅                | ❌          |
| sass                    | ❌                | ❌          |
| section-notice          | ❌                | ❌          |
| section-title           | ❌                | ❌          |
| segmented-buttons       | ✅                | ✅          |
| select                  | ✅                | ✅          |
| selection-chip          | ❌                | ❌          |
| signal                  | ❌                | ❌          |
| skeleton                | ❌                | ❌          |
| snackbar-dialog         | ❌                | ❌          |
| split-button            | ❌                | ❌          |
| star-rating             | ✅                | ❌          |
| star-rating-select      | ❌                | ❌          |
| svg                     | ❌                | ❌          |
| switch                  | ✅                | ❌          |
| table                   | ✅                | ❌          |
| tabs                    | ✅                | ✅          |
| textbox                 | ❌                | ❌          |
| toast-dialog            | ✅                | ❌          |
| toggle-button           | ✅                | ❌          |
| toggle-button-group     | ✅                | ✅          |
| tokens                  | ❌                | ❌          |
| tooltip                 | ✅                | ✅          |
| tourtip                 | ✅                | ✅          |
| typography              | ❌                | ❌          |
| utility                 | ❌                | ❌          |

---

## Patterns in A11y Docs but Not in Component Routes

The following pattern documentation exists but has no corresponding component page:

| Pattern File          | Status                                           |
| --------------------- | ------------------------------------------------ |
| description-list.md   | No component page                                |
| fake-menu-button.md   | No component page                                |
| fake-tabs.md          | No component page                                |
| footnote.md           | No component page                                |
| form.md               | No component page                                |
| form-validation.md    | No component page                                |
| heading.md            | No component page                                |
| image.md              | No component page                                |
| input-dialog.md       | No component page                                |
| input-meter.md        | No component page                                |
| input-validation.md   | No component page                                |
| popover.md            | No component page                                |
| pulldown-list.md      | No component page                                |
| region.md             | No component page                                |
| skip-navigation.md    | No component page                                |
| star-rating-static.md | Component named differently (star-rating-select) |
| table-cell.md         | No component page                                |
| tile.md               | No component page                                |
| time.md               | No component page                                |

---

## Migration Details

### Patterns with No Terminology Section (16 components)

These components have a11y pattern documentation, but the pattern docs don't include a terminology section:

- badge
- button
- card
- checkbox
- details
- file-input
- inline-notice
- layout-grid
- link
- page-notice
- panel-dialog (content not yet available)
- radio
- star-rating
- switch
- table
- toast-dialog (content not yet available)
- toggle-button

### Components Without Pattern Documentation (43 components)

These components exist in the routes but have no corresponding a11y pattern documentation:

- ccd, chart-legend, chip, cta-button, date-textbox, donut-chart
- education-notice, eek, field, file-preview-card-group
- filter-chip, filter-input, flag, floating-label, global
- icon, icon-button, image-placeholder, item-tile, item-tile-group
- less, list, marketsans, page-grid
- progress-bar, progress-bar-expressive, progress-spinner, progress-stepper
- sass, section-notice, section-title, selection-chip, signal, skeleton
- snackbar-dialog, split-button, star-rating-select, svg
- textbox, tokens, typography, utility

**Report Generated:** November 25, 2025
