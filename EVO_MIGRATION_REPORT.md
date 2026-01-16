# Migration Report

**Last Updated:** January 14, 2026

## Current Architecture

Component documentation is now split into three separate files per component:

| File                       | Purpose                             |
| -------------------------- | ----------------------------------- |
| `+page.marko`              | Component overview and introduction |
| `css+page.marko`           | CSS examples and usage patterns     |
| `accessibility+page.marko` | Accessibility documentation         |

**Location:** `src/routes/_index/components/[component]/`

---

## Summary

| Metric                             | Count |
| ---------------------------------- | ----- |
| Total Components                   | 81    |
| CSS Documentation Pages            | 79    |
| Accessibility Pages (total)        | 77    |
| Accessibility Pages (with content) | 43    |
| Accessibility Pages (placeholder)  | 34    |

---

## Component Status

**Legend:** ✅ Complete | ⏸️ Placeholder | — No page

| Component               | A11y |
| ----------------------- | ---- |
| accordion               | ✅   |
| alert-dialog            | ✅   |
| avatar                  | ✅   |
| badge                   | ✅   |
| breadcrumbs             | ✅   |
| button                  | ✅   |
| calendar                | ⏸️   |
| card                    | ✅   |
| carousel                | ✅   |
| ccd                     | ✅   |
| chart-legend            | ⏸️   |
| checkbox                | ✅   |
| chip                    | ⏸️   |
| chips-combobox          | ✅   |
| combobox                | ✅   |
| confirm-dialog          | ✅   |
| date-textbox            | ✅   |
| details                 | ✅   |
| donut-chart             | ⏸️   |
| education-notice        | ⏸️   |
| eek                     | ⏸️   |
| field                   | ⏸️   |
| file-input              | ✅   |
| file-preview-card       | ✅   |
| file-preview-card-group | ⏸️   |
| filter-chip             | ⏸️   |
| filter-input            | ⏸️   |
| flag                    | ⏸️   |
| floating-label          | ⏸️   |
| global                  | ⏸️   |
| icon                    | ⏸️   |
| icon-button             | ⏸️   |
| image-placeholder       | ⏸️   |
| infotip                 | ✅   |
| inline-notice           | ✅   |
| item-tile               | ⏸️   |
| item-tile-group         | ⏸️   |
| layout-grid             | ✅   |
| lightbox-dialog         | ✅   |
| link                    | ✅   |
| list                    | ⏸️   |
| listbox                 | ✅   |
| listbox-button          | ✅   |
| marketsans              | ⏸️   |
| menu                    | ✅   |
| menu-button             | ✅   |
| number-input            | ✅   |
| page-grid               | ⏸️   |
| page-notice             | ✅   |
| pagination              | ✅   |
| panel-dialog            | ⏸️   |
| phone-input             | ✅   |
| progress-bar            | ⏸️   |
| progress-bar-expressive | ⏸️   |
| progress-spinner        | ⏸️   |
| progress-stepper        | ⏸️   |
| radio                   | ✅   |
| sass                    | —    |
| section-notice          | ⏸️   |
| section-title           | ⏸️   |
| segmented-buttons       | ✅   |
| select                  | ✅   |
| selection-chip          | —    |
| signal                  | ⏸️   |
| skeleton                | ⏸️   |
| snackbar-dialog         | ✅   |
| split-button            | ⏸️   |
| star-rating             | ✅   |
| star-rating-select      | ⏸️   |
| switch                  | ✅   |
| table                   | ✅   |
| tabs                    | ✅   |
| textbox                 | ⏸️   |
| toast-dialog            | ✅   |
| toggle-button           | ✅   |
| toggle-button-group     | ✅   |
| tokens                  | —    |
| tooltip                 | ✅   |
| tourtip                 | ✅   |
| typography              | ⏸️   |
| utility                 | —    |

---

## Next Steps

### Priority 1: Complete Placeholder Accessibility Docs

These components need accessibility documentation written:

**Interactive Components (High Priority):**

- calendar, filter-chip, filter-input, icon-button
- panel-dialog, progress-stepper, split-button, star-rating-select, textbox

**Display Components:**

- chip, donut-chart, eek, flag, icon, image-placeholder
- progress-bar, progress-bar-expressive, progress-spinner
- section-notice, section-title, signal, skeleton

**Layout/Utility Components (Lower Priority):**

- field, floating-label, global, layout-grid, list
- marketsans, page-grid, typography

---

**Report Generated:** January 14, 2026
