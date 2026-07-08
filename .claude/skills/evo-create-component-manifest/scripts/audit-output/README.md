# Audit Output

Static analysis and human/agent analysis of the full evo-web component library,
produced as part of a comprehensive 5-phase audit. The outputs here drive the
`/evo-create-component-manifest` skill — specifically the `[AUDIT]` source tier,
which lets the agent fill manifest fields directly from codebase data rather than
waiting for a human engineer.

---

## Background

### Why this audit exists

The manifest skill generates `manifest.json` from a design contract. Many fields in
that manifest — BEM classes, CSS tokens, ARIA attributes, dependencies — are not in
the design contract; they live in the codebase. Before this audit, those fields were
tagged `[ENGINEER]`, meaning a human had to fill them in at Gate 2. The audit
eliminates most of that by giving the agent a pre-built snapshot of the entire library.

### What was audited

Every component across three package layers (52 components total in evo-marko):

| Package | Path | What it contains |
|---|---|---|
| `@evo-web/marko` | `packages/evo-marko/src/tags/` | Marko 6 components — TypeScript `Input` interfaces, template markup, skin imports |
| `@ebay/skin` | `packages/skin/src/sass/` | Pure CSS/SCSS — BEM classes, CSS custom properties, state selectors, RTL overrides |
| `@evo-web/react` | `packages/evo-react/src/` | React 19 ESM components — currently only `evo-button` and `evo-icon` |

The audit also scanned the website docs at `src/routes/_index/components/` and
`src/routes/_index/accessibility/` for a11y guidance that is documented but not
derivable from source code.

### How the packages relate

```
@ebay/skin  ←  CSS foundation (BEM classes, design tokens, RTL)
     ↑
@evo-web/marko  ←  Marko 6 wrapper; imports skin CSS, adds TypeScript interface,
                    renders accessible markup, wires up keyboard behavior
     ↑
@evo-web/react  ←  React 19 wrapper; same skin imports, different framework
```

evo-marko components import their skin module in `style.ts`
(e.g. `import "@ebay/skin/button"`). That import is the link between a Marko component
and its BEM/token/RTL data in the skin package. The script follows that import to
associate the right skin module with each component.

---

## How the data was produced

### Machine-extracted: `component-audit.js`

The script at `../component-audit.js` performs static analysis — no component is
imported or executed. It uses regex and bracket-counting to parse TypeScript and SCSS
source files directly.

**Per evo-marko component** (`packages/evo-marko/src/tags/<name>/`):

- `style.ts` → skin module name (e.g. `@ebay/skin/button` → `button`)
- `index.marko` → TypeScript `export interface Input` block parsed with depth-aware
  splitting; props categorized by name pattern:
  - `a11y*` → `a11yProps`
  - `aria-*` → `ariaProps`
  - `on[A-Z]*` → `eventCallbacks`
  - types containing `Marko.AttrTag<` → `attrTagSlots`
  - everything else → `regularProps`
- `index.marko` → non-`Input` helper interfaces (e.g. `Tab`, `Option`, `Item`)
  that define child slot types
- `index.marko` → template body scanned for `<evo-*` tag usages (sub-components),
  `import ... from "<evo-*>"` (static imports), `aria-*=` assignments, `role=` assignments

**Per skin module** (`packages/skin/src/sass/<module>/`):

- All `.scss` files concatenated and scanned for:
  - BEM class names split into blocks, elements, modifiers
  - `var(--...)` usages → CSS custom properties consumed
  - `:root { --... }` definitions → CSS custom properties defined (overridable tokens)
  - `[aria-*]`, `[disabled]`, `[hidden]`, `[role]`, etc. → state selectors
  - `[dir="rtl"]` → boolean RTL flag

**Per evo-react component** (`packages/evo-react/src/<name>/`):

- TypeScript interface bodies parsed for prop names and types
- `aria-*=` usages in JSX scanned
- `@ebay/makeup-*` imports scanned (none found currently)

Re-run the script any time components are added or changed:

```bash
node .claude/skills/evo-create-component-manifest/scripts/component-audit.js
```

### Human/agent-analyzed: phase documents

Five phases of analysis were conducted on top of the machine data:

| Phase | Method | Output |
|---|---|---|
| 1 | Script run | `components/*.json` + `summary.json` |
| 2 | Pattern analysis of script output | `phase2-categorization.md` |
| 3 | Deep read of 5 component source files + docs | `phase3-deep-audit.md` |
| 4 | Scan of 76 component a11y pages + technique library | `phase4-docs-mining.md` |
| 5 | Schema updates | Edits to `references/manifest-schema.md`, `SKILL.md`, `contract-template-additions.md` |

---

## Files

### `components/<name>.json` — per-component static analysis

One file per evo-marko component. All 52 components from `packages/evo-marko/src/tags/`
are represented. The `skin` and `react` sections are absent (or `hasImplementation: false`)
when no counterpart exists in those packages.

| Field | Source file | What was extracted |
|---|---|---|
| `marko.skinImports` | `style.ts` | `import "@ebay/skin/..."` — links component to its skin module |
| `marko.makeupImports` | `index.marko` | `@ebay/makeup-*` imports (none found in current library; evo-marko uses internal tags instead) |
| `marko.internalImports` | `index.marko` | Static `import ... from "<evo-*>"` (e.g. `<evo-icon-button>`) |
| `marko.subComponents` | `index.marko` | All `<evo-*` tag usages in the template — superset of internalImports; includes dynamic icon tags |
| `marko.helperInterfaces` | `index.marko` | Non-`Input` exported interfaces that define child slot types (e.g. `Tab`, `Option`, `Item`, `Step`) |
| `marko.inputInterface.a11yProps` | `index.marko` | Props starting with `a11y` — localization strings |
| `marko.inputInterface.ariaProps` | `index.marko` | Props matching `aria-*` in the interface (distinct from ARIA set in the template) |
| `marko.inputInterface.eventCallbacks` | `index.marko` | Props matching `on[A-Z]*` — custom event callbacks |
| `marko.inputInterface.attrTagSlots` | `index.marko` | Props typed as `Marko.AttrTag<...>` — named content slots |
| `marko.inputInterface.regularProps` | `index.marko` | All other props |
| `marko.templateAriaUsages` | `index.marko` | Every `aria-*=<value>` assignment in the template body (not the interface) |
| `marko.templateRoleUsages` | `index.marko` | Every `role=<value>` in the template — includes literal role strings and dynamic expressions |
| `skin.bemBlocks` | `sass/<module>/*.scss` | Root BEM class names (no `__` or `--`) |
| `skin.bemElements` | `sass/<module>/*.scss` | BEM element class names (contain `__`) |
| `skin.bemModifiers` | `sass/<module>/*.scss` | BEM modifier class names (contain `--`) |
| `skin.nestedBemElementSuffixes` | `sass/<module>/*.scss` | `&__name` nested SCSS selectors — partial names only, need parent class context |
| `skin.nestedBemModifierSuffixes` | `sass/<module>/*.scss` | `&--name` nested SCSS selectors — partial names only |
| `skin.cssCustomProperties` | `sass/<module>/*.scss` | All `var(--name)` usages — tokens consumed |
| `skin.cssCustomPropertyDefinitions` | `sass/<module>/*.scss` | All `--name:` declarations in `:root` — overridable tokens defined by the component |
| `skin.stateSelectors` | `sass/<module>/*.scss` | Attribute selectors like `[aria-disabled="true"]`, `[disabled]`, `[hidden]`, `[open]`, `[role="..."]` |
| `skin.rtlOverrides` | `sass/<module>/*.scss` | `true` if the file contains any `[dir="rtl"]` selector |
| `react.props` | `packages/evo-react/src/<name>/` | TypeScript prop interface definitions |
| `react.ariaUsages` | `packages/evo-react/src/<name>/` | `aria-*=` attribute usages in JSX |
| `react.eventHandlers` | `packages/evo-react/src/<name>/` | Prop names matching `on[A-Z]*` |

**Note on `templateRoleUsages`:** Some entries are dynamic expressions rather than
literal ARIA role strings — e.g. `itemRole` (a variable), `!!hasA11yText` (a
conditional), `type` (a prop name). These indicate components that compute their role
at runtime based on props. The genuine ARIA role literals (`listbox`, `menu`, `tab`,
`tablist`, etc.) are also present in the same array.

### `summary.json` — cross-component aggregate

A flattened view across all 52 components, useful for auditing schema coverage and
understanding library-wide patterns.

| Field | Contents |
|---|---|
| `counts` | Total components; how many have marko / skin / react implementations |
| `makeupPackages` | All unique `@ebay/makeup-*` packages imported (currently empty — evo-marko uses internal tags) |
| `a11yPropNames` | Every unique `a11y*` prop name across all components |
| `ariaProps` | Every unique `aria-*` prop declared in Input interfaces |
| `eventCallbacks` | Every unique `on[A-Z]*` event callback in Input interfaces |
| `attrTagSlots` | Every unique AttrTag slot name |
| `templateAriaAttrs` | Every `aria-*` attribute actually set in template bodies |
| `templateRoles` | Every `role=` value set in template bodies (includes dynamic expressions) |
| `allBemBlocks` | All BEM block class names across all skin modules |
| `allStateSelectors` | All state-based CSS attribute selectors across all skin modules |
| `allCssVars` | All CSS custom properties consumed across all skin modules |
| `withMakeup` | Components that use `@ebay/makeup-*` imports |
| `withAttrTagSlots` | Compound components — have one or more named AttrTag slots |
| `withRtl` | Components with `[dir="rtl"]` overrides in their skin module |
| `withHelperInterfaces` | Components that define helper interfaces for child slot types |
| `withSubComponents` | Components that use other `evo-*` components internally |

### Phase documents — human/agent analysis

| File | What it covers |
|---|---|
| `phase2-categorization.md` | All 52 components grouped into 7 categories (simple presentational, simple interactive, form inputs, navigation, overlays, complex interactive, compound/parent-child) with schema gap notes per category. Also lists 38 skin-only components not yet in evo-marko. |
| `phase3-deep-audit.md` | Deep read of 5 representative components (evo-textbox, evo-tabs, evo-dialog, evo-listbox, evo-menu-button) across all source layers and docs pages. Documents confirmed patterns, non-obvious behaviors, implementation discrepancies, and 35+ concrete schema gaps with IDs. |
| `phase4-docs-mining.md` | Findings from scanning 76 component accessibility pages and the site-wide technique/pattern library (`/src/routes/_index/accessibility/`). Covers caller obligations not in source code, ARIA attribute usage rules, roving tabindex vs. aria-activedescendant decision matrix, live-region rules, known browser limitations. |

---

## How to use these files

### Manifest generation (`/evo-create-component-manifest`)

The skill reads `components/$COMPONENT.json` in Step 2b before field extraction.
Fields tagged `[AUDIT]` in the schema are filled directly from this snapshot:

| Manifest field | Audit field |
|---|---|
| `bem.block` | `skin.bemBlocks[0]` |
| `bem.elements[]` | `skin.bemElements[]` |
| `bem.modifiers[]` | `skin.bemModifiers[]` |
| `designTokens[]` | `skin.cssCustomProperties[]` |
| `dependencies[].name` | `marko.subComponents[]` |
| `dependencies[].type` | derived: `evo-icon-*` → `icon`; `marko.internalImports[]` → `internal-tag`; else → `component` |
| `a11y.ariaAttributes[]` | `marko.templateAriaUsages[]` |
| `rtl.notes` | `skin.rtlOverrides` (boolean flag) |

When a component is not in the snapshot (brand-new, skin module not yet created),
all `[AUDIT]` fields become soft gaps and the engineer is prompted to re-run the script
once the skin module exists.

### Schema and contract development

Use `summary.json` to verify the manifest schema can represent every ARIA attribute,
role, and slot name that appears across the library. If a pattern appears in the summary
but has no corresponding schema field, that is a schema gap.

Use the phase documents when writing contracts for new components. The relevant category
section in `phase2-categorization.md` lists the schema fields that matter most for that
component type and the caller obligations that must appear in the contract.
