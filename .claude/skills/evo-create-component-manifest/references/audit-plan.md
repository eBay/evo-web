# Comprehensive Component Audit Plan

## Context

The manifest skill (`/evo-create-component-manifest`) was built after auditing only
two components: `evo-button` and `evo-avatar`. While those were enough to establish
the schema structure, they are both simple components. The goal of this audit is to
ensure the schema and contract template additions cover every pattern that exists
across the full evo-web component library — including complex keyboard navigation,
ARIA relationships, compound components, focus management, and MakeupJS delegation.

## Current state (before this audit)

- `manifest-schema.md` — schema derived from button + avatar audit; likely missing
  fields for ARIA relationships, focus management, compound components, multi-event
  patterns, and MakeupJS delegation
- `contract-template-additions.md` — describes what to add to the eBay design
  contract format (NOT a separate structure); targets Accessibility Contract and
  Platform Realizations › Web sections
- `SKILL.md` — updated to extract all fields from current schema

## Goal

Update `manifest-schema.md`, `contract-template-additions.md`, and `SKILL.md` to
reflect the full range of patterns found across all evo-web components.

---

## Phase 1 — Static analysis script

Write a script that scans all three package layers and produces a structured JSON
summary per component. Save output to
`.claude/skills/evo-create-component-manifest/scripts/audit-output/`.

**From `packages/evo-marko/src/tags/`:**
- All Input interface props (name, type, required/optional)
- All `a11y*` and `aria-*` props
- All `on-*` event callbacks
- All AttrTag slot definitions (`<@name>`)
- All `aria-*` attribute usages directly in templates
- All MakeupJS imports (`@ebay/makeup-*`)
- All sub-component and icon imports

**From `packages/skin/src/`:**
- All BEM blocks, elements, and modifiers
- All CSS custom properties consumed (`var(--*)`)
- All state selectors (`[disabled]`, `[aria-*]`, `[hidden]`, etc.)
- All RTL overrides (`[dir="rtl"]`)

**From `packages/evo-react/src/`:**
- TypeScript prop interface definitions
- `aria-*` attribute usages
- Event handler type signatures

Output: one JSON file per component + a cross-component summary of every unique
pattern found.

---

## Phase 2 — Component categorization

Group components from the script output by pattern type:

| Category | Why it matters |
|---|---|
| Simple presentational | Baseline — already covered (avatar) |
| Simple interactive | Baseline — already covered (button) |
| Form inputs | `aria-invalid`, `aria-errormessage`, `aria-required`, fieldset/legend |
| Navigation | Tabs, breadcrumb — roving tabindex, `aria-selected` |
| Overlays | Dialog, tooltip, drawer — focus trap, `aria-modal`, `aria-controls` |
| Complex interactive | Combobox, menu, carousel — full keyboard models, ARIA relationships |
| Compound/parent-child | Components that orchestrate child components |

---

## Phase 3 — Deep manual audit of representative complex components

Pick one component from each uncovered category and read all three layers + docs.
Target candidates:

- **Combobox** — complex keyboard model, ARIA relationships (`aria-controls`,
  `aria-activedescendant`), MakeupJS delegation
- **Dialog** — focus trap, `aria-modal`, `aria-labelledby`, lifecycle events
- **Tabs** — compound pattern, `aria-selected`, roving tabindex, parent-child
  coordination

For each: skin SCSS → evo-marko → evo-react → website docs page.

---

## Phase 4 — Website docs mining

Scan `/src/routes/_index/components/` and `/src/routes/_index/accessibility/` for:
- Plain-English a11y guidance not reflected in source code
- Props documented with behavioral context
- RTL notes
- Known limitations or caveats

Phases 3 and 4 can run in parallel once Phase 2 is complete.

---

## Phase 5 — Schema gap analysis and updates

1. Compare all discovered patterns against current `manifest-schema.md`
2. Identify fields the schema cannot represent
3. Update `manifest-schema.md` with new fields and real component examples
4. Update `contract-template-additions.md` if new contract-level information is needed
5. Update `SKILL.md` to extract any newly discovered field patterns

---

## Important notes

- The real eBay design contract format is a rich design-team document (Core
  Invariants, Flex Zones, Interaction & Lifecycle, Platform Realizations, etc.).
  `contract-template-additions.md` describes additions that fit *within* that
  existing structure — NOT a replacement format.
- Not all information will be on the static layer. Some patterns only appear at
  runtime (MakeupJS behavior, focus management). The manual audit (Phase 3) is
  needed to catch these.
- The script should be saved to
  `.claude/skills/evo-create-component-manifest/scripts/` for future re-runs as
  new components are added.
