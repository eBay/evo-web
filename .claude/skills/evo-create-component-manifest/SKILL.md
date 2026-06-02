---
name: evo-create-component-manifest
description: >
  Pipeline entry point for evo-web AI component generation. Reads an approved
  component contract (`src/routes/_index/components/[component]/_contract.md`)
  and produces two structured files: `manifest.json` (machine-readable spec for
  downstream code generation) and `gap-report.json` (a full log of every
  assumption made). Invoke this skill whenever the user runs
  `/evo-create-component-manifest`, says "create manifest for [component]",
  "generate manifest from contract", "run the manifest step", or "kick off the
  pipeline for [component]". Do NOT wait for the user to spell out all of these
  phrases — if they're asking to start the component pipeline or convert a
  contract to a manifest, this is the skill to use.
---

# Create Component Manifest

This skill is the **first and only human gate before code generation begins**.
Its value is rigor: every ambiguity in the contract must surface here, in a
form the engineer can read and resolve, before a single line of SCSS or React
is written. Silently filling in gaps or skipping uncertain fields defeats the
entire purpose.

**Scope: read contract → write two files → surface gaps → stop.**

Do NOT generate component code (no SCSS, Marko, React, JS).
Do NOT invoke `/evo-component` or any downstream skill.
Do NOT silently populate fields you are not certain about — log the gap instead.

See `references/manifest-schema.md` for the full annotated schema and real component
examples. See `references/contract-template-additions.md` for what the design contract
should supply.

---

## Step 1 — Parse the component name

The component name is `$ARGUMENTS` (e.g. `ebay-avatar`).

If `$ARGUMENTS` is empty, ask:
> "Which component should I generate a manifest for? (e.g. `ebay-avatar`)"

Then wait. Do not proceed until you have a component name.

---

## Step 2 — Read the contract

Read `src/routes/_index/components/$COMPONENT/_contract.md` in full before writing anything.

If the file does not exist, stop and report:

```
ERROR: No contract found at src/routes/_index/components/$COMPONENT/_contract.md

Create the contract first using the _contract.md template.
No manifest was generated.
```

---

## Step 2a — Run spec-to-manifest script (if spec present), then read

Check for `src/routes/_index/components/$COMPONENT/*.spec.json` (any file matching that glob).

**If found:** First run the deterministic translation script before doing any AI inference.
This writes the spec-derived fields (props, tokens, slots, states, figma) into `manifest.json`
with byte-identical precision, so you do not need to infer those fields:

```bash
npx tsx scripts/codegen/spec-to-manifest.ts $COMPONENT
```

If the script succeeds, `manifest.json` now has the spec-derived sections pre-filled.
Then read the updated `manifest.json` and the spec file (`$SPEC`) for your remaining work.
Only handle the **contract-sourced fields** in your AI inference step — do not re-derive
props, tokens, slots, states, or figma.fileKey from the spec yourself (the script already did this).

**If the script fails or no spec is found:** Continue with AI inference for all fields.

Read the spec in full and store it as `$SPEC`. This is a machine-readable
handoff from the design team. It is the **authoritative source** for the fields it
covers — treat spec-sourced values as `confidence: high, source: spec` with no gap entry.

`$SPEC` fields and how they map:

| Spec field | Manifest field | Translation |
|---|---|---|
| `props.*` | `props[]` | Each key → prop object; `enum` type → values array |
| `slots.*` | `slots[]` | Each key → slot with `required` flag |
| `states.state[]` | `states[]` | Direct array of state names |
| `tokens.*` | `tokens` | Replace `.` with `-`, prepend `--` (e.g. `color.background.primary` → `--color-background-primary`) |
| `a11y.role` | `a11y.role` | Direct |
| `a11y.aria.*` | `a11y.ariaAttributes[]` | Each key-value → attribute entry |
| `metadata.figma.fileKey` | `figma.fileKey` | Store as-is alongside any `figmaUrl` from contract |
| `description` | `component.description` | Use if contract description is absent |

**Spec does NOT replace:**
- `a11yProps` — these are i18n strings, not in the spec
- `bem` — structural concern, from audit
- `behaviors`, `events`, `keyboardModel`, `callerObligations` — engineering/contract concerns
- `figmaUrl` — the spec only has `fileKey`; full URL (with nodeId) comes from the contract

**If not found:** Continue. All fields fall back to contract inference and audit.

---

## Step 2b — Load the audit snapshot

Check for `scripts/audit-output/components/$COMPONENT.json`.

**If it exists:** Read it in full and store it as `$AUDIT`. You will use it to fill
`[AUDIT]`-tagged fields directly — no inference, no gap entry needed when data is present.

**If it does not exist** (brand-new component not yet in the codebase):
- All `[AUDIT]` fields become soft gaps: `confidence: medium, source: missing`
- Add a single note at the top of the gap report:
  `"Component not in audit snapshot. Run component-audit.js after the skin module exists to auto-fill BEM, tokens, dependencies, and ARIA attributes."`
- Do not let this block progress — proceed with contract-sourced fields only.

---

## Step 3 — Extract fields

Work through the manifest structure field by field. For each field, apply this
sourcing priority:

| Source | Action | Gap entry? |
|---|---|---|
| `$SPEC` — present and explicit | Use it; `confidence: high, source: spec` | No |
| `$AUDIT` — found in snapshot | Use it; `confidence: high, source: audit` | No |
| Contract — clearly and explicitly stated | Use it verbatim | No |
| Contract — implied, inferable | Use inferred value | Yes — `confidence: medium, source: inferred` |
| Not mentioned anywhere | Set to `null` | Yes — `confidence: low, source: missing` |

Every populated field must be traceable to a source. Every `null` must have
an explanation in the gap report. If you infer from domain knowledge alone (not
from the contract or spec), log a gap regardless of how obvious the value seems.

### Fields to extract

Work through each section in order. Fields tagged **[CONTRACT]** should be
extractable from the contract. Fields tagged **[ENGINEER]** are expected to be
`null` with a gap entry — the engineer fills these in during GATE 2.
Fields tagged **[INFER]** can be attempted with medium confidence.

**Component identity** [CONTRACT; `description` also from SPEC]
- `component.name` — kebab-case tag name (e.g. `evo-button`)
- `component.displayName` — human name (e.g. `Button`)
- `component.description` — one-sentence purpose; prefer `$SPEC.description` if present
- `component.category` — UI category (e.g. `buttons`, `graphics & icons`, `form`)
- `figmaUrl` — Figma design link from contract (full URL with nodeId); null if not in contract
- `figma.fileKey` — from `$SPEC.metadata.figma.fileKey` if present; stored alongside figmaUrl

**Root element** [INFER]
- `rootElement.default` — the primary HTML element (button, div, a, span, dialog, etc.)
- `rootElement.conditional` — if the element can change based on a prop, capture the condition and alternate element
- `rootElement.passthroughAttributes` — which native attributes pass through to the root
- `rootElement.excludedAttributes` — which attributes are managed internally and must not be passed through

**Props** [SPEC when present, otherwise CONTRACT for existence/purpose, ENGINEER for types/defaults]
- If `$SPEC.props` exists: use it as the authoritative source. Each spec prop has `type`,
  `enum` (values list), `default`, and `description` — extract all directly, no gap needed.
- If no spec: for each prop: `name`, `type`, `values` (enum only), `default`, `required`, `description`
- Do not guess types without spec. If the contract only mentions a prop exists, log its type and default as gaps.

**A11y props** [CONTRACT] — CRITICAL, often missing from contracts
- These are i18n-able text strings consumers must override for localization (e.g. `a11yText`, `a11yLoadingText`, `a11ySelectedText`)
- For each: `name`, `type`, `default` (English string), `required`, `allowNull`, `nullMeaning`, `condition`, `offscreenMethod`, `appendsToVisible`, `description`
- If the contract's "Required label strings" section names these → extract them
- If the contract is silent → add a 🔴 gap. Every interactive or announced component needs at least one a11y prop.

**Slots** [SPEC when present, otherwise CONTRACT]
- If `$SPEC.slots` exists: use it as the base. Each spec slot has `required` and `description`.
  Infer `type` (default | named-attrtag | named) from the slot's role described in the contract —
  spec does not provide the Marko slot type, so that still requires contract/engineering judgement.
- Named content regions: `name`, `type` (default | named-attrtag | named), `required`, `requiredReason` (when required: true), `description`
- Also check: `elementTypeOverride` (slot accepts `as` prop to change element), `decorative` (CSS background only), `pinned` (outside scrollable area)
- Marko's named AttrTag slots (`<@image>`) are a distinct pattern — call out the type explicitly

**Nested slots** [CONTRACT/ENGINEER]
- When a slot's definition itself contains named sub-slots (e.g. evo-tabs' `tab` slot contains a `panel` sub-slot)
- Populate `nestedSlots[]` with `parentSlot`, `childSlots[]`, `description`
- Log as gap if not mentioned in contract — this is a non-obvious structural pattern

**Slot a11y props** [CONTRACT/ENGINEER]
- When a slot's interface includes an a11y text string (e.g. postfixIcon.a11yText becomes aria-label on the inner button)
- Populate `slotA11yProps[]` with `slot`, `prop`, `appliedAs`, `description`

**Variants** [CONTRACT]
- Distinct rendering modes: `name`, `trigger` (which prop/condition activates), `description`

**States** [SPEC when present, otherwise CONTRACT]
- If `$SPEC.states.state[]` exists: use the array as the list of state names.
  `trigger`, `cssSelector`, `ariaAttribute`, `keyboardAccess`, `renderChange` still come from contract/engineering.
- Visual or ARIA states: `name`, `trigger`, `cssSelector` [ENGINEER], `ariaAttribute` [ENGINEER], `keyboardAccess`, `renderChange`, `description`

**A11y** [CONTRACT→ENGINEER translation]
Extract from the contract's Accessibility section and translate to technical fields:
- `role` — ARIA role if a non-semantic element is used; null if a semantic element handles it
- `explicitRole` — true if `role=""` must be added as an attribute
- `labelStrategy` — `content` | `aria-label-prop` | `aria-labelledby` | `aria-hidden` | `compound-labelledby`
- `focusable` — is this component keyboard focusable?
- `focusableWhenDisabled` — `always` | `partiallyDisabled-only` | `never`
- `tabOrder` — `natural` | `manual` | `none`
- `focusTrap` — `browser-native` | `javascript` | `none` [ENGINEER]
- `initialFocus` — where focus lands when component opens [CONTRACT — look for "Open/close rules"]
- `focusReturn` — where focus returns on close [CONTRACT — often a caller obligation]
- `screenReaderAnnouncement` — plain English: what does a screen reader announce? [CONTRACT]
- `ariaAttributeOwnership.managed` — aria-* attrs managed internally; caller must not set [ENGINEER]
- `ariaAttributeOwnership.passthrough` — aria-* attrs the caller can set [ENGINEER]
- `ariaAttributes[]` — specific aria-* attributes with their values and conditions [ENGINEER]

**Widget role** [CONTRACT] — for interactive widget components only
- If the contract's "Widget type" section names a WAI-ARIA pattern (tabs, menu, listbox, combobox):
  - `widgetRole.containerRole` — role on the host element (tablist, menu, listbox)
  - `widgetRole.itemRole` — default role on child items (tab, menuitem, option)
  - `widgetRole.itemRoleVariants[]` — when item role varies at runtime (e.g. menuitem vs menuitemradio)
  - `widgetRole.supportingRoles[]` — additional roles (tabpanel, separator)
  - `widgetRole.relatedRoles` — cross-element ARIA relationships (aria-controls, aria-selected, aria-checked, aria-expanded)
- NOTE: listbox uses `aria-selected`; menu uses `aria-checked` — do not confuse these
- Log as gap if contract does not declare widget type

**Keyboard model** [CONTRACT] — for widget components only
- If widgetRole is populated, also populate keyboardModel:
  - `focusStrategy` — `roving-tabindex` | `aria-activedescendant` | `none`
    - Decision: roving-tabindex for menu/tabs/listbox; aria-activedescendant for combobox (textbox must retain focus)
  - `focusStrategyReason` — brief rationale
  - `autoSelect.supported`, `autoSelect.prop`, `autoSelect.description`
  - `wraps` — does navigation wrap at list ends?
  - `keys[]` — non-arrow-key interactions (Escape, Home, End)
  - `typeahead` — if type-ahead search is supported
- Log as gap if not described in contract

**State-lifting callbacks** [CONTRACT] — SEPARATE from events
- Callbacks that synchronize state to parent (openChange, indexChange, selectedChange)
- These receive a plain value (boolean, number, string/array), NOT a DOM Event
- For each: `name`, `signature` [ENGINEER], `stateLifted`, `defaultBehavior`
- Distinguish from `events` (onEscape, onLoadError — these receive a DOM Event)

**Dual output** [ENGINEER]
- When component renders both a custom widget AND a hidden native form element (e.g. listbox + select[hidden])
- Look for: "form submission", "native select", "hidden input" in the contract
- `customElement`, `nativeElement`, `syncProp`, `purpose`
- Log as gap if not mentioned in contract

**Floating positioner** [ENGINEER]
- For components with floating overlays (menus, tooltips, combobox)
- `implementation` (evo-expander | browser-anchor | none), `library`, `placement`, `strategy`, `triggerElement`
- Log as gap — engineer determines from implementation

**Caller obligations** [CONTRACT] — CRITICAL for a11y compliance
- Derive from the contract's "Label mechanism", "Open/close rules", "Form context", "Widget type" sections
- Common categories: `form-context`, `label`, `heading-structure`, `focus-management`, `open-trigger`, `icon-treatment`
- For each: `category`, `description`, `wcagCriterion` [ENGINEER], `consequence` [ENGINEER]
- If the contract has a "Required label strings" section but no explicit caller obligations section,
  derive obligations from the described requirements
- 🔴 Any unmet obligation = WCAG AA failure — these MUST surface as blocking gaps

**Internal data protocol** [ENGINEER — always a gap]
- data-* attributes placed on children for internal coordination (e.g. data-value on listbox options)
- Log as gap — engineer determines from source audit

**Keyboard interactions** [CONTRACT]
- Only non-native interactions (Space/Enter on a button do not need listing)
- Widget arrow-key navigation goes in `keyboardModel`, not here
- For each: `key`, `action`, `condition`, `emittedEvent` [ENGINEER]

**Events** [CONTRACT/INFER]
- Custom DOM-event-like callbacks (onEscape, onLoadError, onAnimationEnd)
- These receive a DOM Event object or equivalent
- Do NOT put state-lifting callbacks here — those go in `stateLiftingCallbacks`
- For each: `name`, `signature` [ENGINEER], `trigger`, `condition`

**BEM** [AUDIT for block/elements/modifiers — ENGINEER for alternateBlock]
- `block` ← `$AUDIT.skin.bemBlocks[0]` (the primary block name)
- `elements[]` ← `$AUDIT.skin.bemElements[]` (name only; description is a soft gap)
- `modifiers[]` ← `$AUDIT.skin.bemModifiers[]` (name only; description is a soft gap)
- `alternateBlock` / `alternateBlockCondition` — still `[ENGINEER]`; log as low confidence gap
- If audit snapshot absent: log block/elements/modifiers as medium confidence gaps

**Design tokens** [SPEC when present, otherwise AUDIT]
- `tokens` (named map) ← `$SPEC.tokens` translated to CSS custom property names:
  replace `.` with `-`, prepend `--` (e.g. `color.background.primary` → `--color-background-primary`)
  Store as `{ "background": "--color-background-primary", "border": "--color-border-subtle", ... }`
  This map is the primary input to the `evo-style-component` skill.
- `designTokens[]` (flat list) ← `$AUDIT.skin.cssCustomProperties[]` — keep this separately for
  audit-sourced token enumeration; no gap when found in snapshot
- If spec absent and audit absent: log `tokens` as medium confidence gap

**Token variants** [SPEC when present]
- `tokenVariants` (keyed by prop name → enum value → token map) ← `$SPEC.tokenVariants`
  Translate each token value from dot-notation to CSS custom property name (same rule as above).
  Store as a nested map: `{ "type": { "warning": { "background": "--color-background-warning", ... } } }`
  This is the primary input for the static component skill when generating per-modifier SCSS rules.
  Include a `note` string on any variant whose token raises a dark mode concern (e.g. a foreground
  token that is globally adaptive and may flip to a light value in dark mode).
- If spec absent: omit entirely; no gap needed (the static skill will infer from manifest.bem.modifiers)

**Behaviors** [CONTRACT hint → ENGINEER]
- Non-obvious algorithms (e.g. color hash, aspect ratio detection, animation-gated close)
- Standard behavior kinds to use (see manifest-schema.md for full list):
  `animationGatedClose`, `typeaheadSearch`, `lightDismiss`, `collapseOnSelect`,
  `reactiveVisibility`, `dualOutputSync`, `colorDerived`
- The contract describes the *behavior*; the engineer supplies the implementation detail

**Dependencies** [AUDIT for name/type — INFER for usedWhen]
- `name` ← `$AUDIT.marko.subComponents[]` (all evo-* tags used in the template)
- `type` ← derive from name: `evo-icon-*` → `icon`; names in `$AUDIT.marko.internalImports[]` → `internal-tag`; others → `component`
- `usedWhen` ← default to `'always'`; log each as a soft gap (`confidence: medium, source: inferred`) for engineer to refine to conditional where needed
- If audit snapshot absent: log as medium confidence gaps

**RTL** [AUDIT — never from contract]
- RTL is a Skin-layer invariant — the contract does not declare it
- `notes` ← if `$AUDIT.skin.rtlOverrides === true`: populate with "This component has RTL-specific overrides in skin SCSS" and log as `confidence: high, source: audit`
- If `$AUDIT.skin.rtlOverrides === false`: omit the `rtl` field entirely (no gap needed)
- If audit snapshot absent: log as medium confidence gap

**Storybook** [ENGINEER — always a gap]
- `category` (Storybook title path), `stories[]`

---

## Step 4 — Write manifest.json

Write `src/routes/_index/components/$COMPONENT/manifest.json`. Use the full schema from
`references/manifest-schema.md`. Omit sections where no information is available
rather than writing empty arrays — except for `gaps`, which is always present.

Key structural rules:

| Source | Gap entry? | Confidence | Blocks Gate 2? |
|---|---|---|---|
| `[SPEC]` — explicit in spec file | No | high | No |
| `[CONTRACT]` — explicit | No | — | — |
| `[AUDIT]` — found in snapshot | No | high | No |
| `[INFER]` — inferred from context | Yes | medium | No |
| `[AUDIT]` — snapshot absent | Yes | medium | No |
| `[ENGINEER]` — requires interpretation | Yes | low | **Yes** |
| `figmaUrl: null` — contract-first workflow | No | — | **Never blocks** |

- `a11yProps` — extract from contract's "Required label strings" section; if silent, add a 🔴 low-confidence gap
- `bem.block/elements/modifiers`, `designTokens`, `dependencies` — fill from audit snapshot; no gap when found
- `bem.alternateBlock` — always low-confidence gap for the engineer
- `storybook.stories` — always a gap, but mark as `"informational": true` so the validator does not treat it as blocking. Story names cannot be known before generation runs; this field is post-generation by design.
- `figmaUrl` — if the contract explicitly states null or "not yet available", treat as a valid value with NO gap entry. A contract written before the Figma design exists is a first-class workflow, not a missing field. Add a single informational note: "figmaUrl will be populated in the subsequent visual-layer contract update (PR 2)."
- Never produce an empty `gaps` array — even a fully contract-sourced manifest will have alternateBlock gaps

---

## Step 5 — Write gap-report.json

Write `src/routes/_index/components/$COMPONENT/gap-report.json`:

```json
{
  "component": "<component name>",
  "generatedAt": "<ISO 8601 timestamp>",
  "summary": {
    "totalGaps": 0,
    "highConfidence": 0,
    "mediumConfidence": 0,
    "lowConfidence": 0,
    "missingFields": 0
  },
  "requiresEngineerAction": [
    "<field paths where confidence is low or source is missing — these block approval>"
  ],
  "gaps": [],
  "deviations": []
}
```

The `gaps` array must be identical to `manifest.json["gaps"]`.
`requiresEngineerAction` contains only `low` confidence or `missing` source gaps.
Medium-confidence gaps go in `gaps` only.

**`deviations[]`** — records intentional departures from the spec's stated values.
When an implementation must differ from a spec-specified value (e.g. for WCAG compliance,
dark mode correctness, or engineering constraints), record the deviation here rather than
silently implementing a different value:

```json
{
  "field": "tokenVariants.type.warning.iconColor",
  "specValue": "color.foreground.primary",
  "implementedValue": "color.foreground.on-warning",
  "reason": "--color-foreground-primary resolves to #f7f7f7 in dark mode (1.6:1 contrast on yellow, fails 3:1 WCAG AA minimum for non-text). --color-foreground-on-warning is always neutral-800 (#191919).",
  "wcagCriterion": "1.4.11",
  "designReviewNeeded": true
}
```

Each deviation entry:
- `field` — the manifest/spec field path
- `specValue` — exact value the spec specified
- `implementedValue` — what was actually implemented
- `reason` — why the deviation was necessary (be specific — cite contrast ratios, token resolution behavior, etc.)
- `wcagCriterion` — WCAG criterion that motivated the change (omit if not WCAG-driven)
- `designReviewNeeded` — `true` if the spec must be updated to reflect this, `false` if it is a local implementation detail

Deviations surface in the Gate 2 review so the engineer can decide whether to:
1. Confirm the deviation and flag it for design team follow-up
2. Revert to the spec value and solve the underlying cause differently

---

## Step 6 — Validate

Check if `scripts/codegen/validate-manifest.ts` exists.

- **If yes:** Run `npx tsx scripts/codegen/validate-manifest.ts $COMPONENT`.
  Report every validation error. Mark the manifest as `INVALID` if any errors
  are found — do not suppress them or proceed.
- **If no:** Skip silently. Do not print anything about this step.

---

## Step 7 — Surface the report and stop

Print the following summary and then **stop completely**:

```
## Manifest generated: $COMPONENT

Files written:
  ✅  src/routes/_index/components/$COMPONENT/manifest.json
  ✅  src/routes/_index/components/$COMPONENT/gap-report.json

Gap summary:
  🔴 Requires engineer action (low confidence / missing): N
  🟡 Needs verification (inferred from context): N
  🟢 Confirmed from contract: N

[If 🔴 gaps exist — list each with field path and what the engineer must provide]
[If 🟡 gaps exist — list each with what was assumed and why]

[If deviations[] is non-empty:]
⚠️  Spec deviations (N) — implementation differs from spec-stated values:
  • <field>: spec=<specValue> → implemented=<implementedValue>
    Reason: <reason>
    Design review needed: [yes/no]

─────────────────────────────────────────────────
GATE 2: Awaiting engineer approval.

Review src/routes/_index/components/$COMPONENT/manifest.json and src/routes/_index/components/$COMPONENT/gap-report.json.
Resolve any 🔴 items. Verify 🟡 items. Confirm or escalate any ⚠️ deviations.
When satisfied, run `/evo-component $COMPONENT` to begin code generation.
─────────────────────────────────────────────────
```

Do not write any more files. Do not invoke any skills. The engineer owns what
happens next.
