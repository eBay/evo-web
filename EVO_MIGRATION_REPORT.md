# Migration Report

**Last Updated:** January 14, 2026

## Generating Accessibility Documentation

### Current Architecture

Component documentation is now split into three separate files per component:

| File                       | Purpose                             |
| -------------------------- | ----------------------------------- |
| `+page.marko`              | Component overview and introduction |
| `css+page.marko`           | CSS examples and usage patterns     |
| `accessibility+page.marko` | Accessibility documentation         |

**Location:** `src/routes/_index/components/[component]/`

### Content Guidelines

1. **Match existing patterns** - Reference other accessibility component pages (avatar, accordion, CCD) to understand the structure and format

2. **Match the tone** - Direct, concise language:
   - Short declarative sentences
   - Use **must** (bold) for requirements
   - Avoid wordy explanations
   - No intro paragraphs like "This section provides..."

3. **Align terminology with the component intro** - Use the same terms from `+page.marko`:
   - Use consistent naming (e.g., "pictogram" not "element")
   - Match descriptive terms from the overview

4. **Use correct ARIA from CSS examples** - Check `css+page.marko` for actual implementation:
   - Verify the correct `role` attribute used
   - Match the `aria-label` format from examples

### Structure

Standard sections: Best Practices → Interaction Design (Keyboard, Screen Reader, Pointer) → ARIA Reference table → Further Reading

### Cleanup Rules

- Remove redundancy between sections
- Consolidate where possible (e.g., Pointer section: 2 sentences instead of 2 paragraphs)
- Keep intro (`+page.marko`) and accessibility page terminology consistent

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
| skeleton                | ✅   |
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

**Report Generated:** January 14, 2026
