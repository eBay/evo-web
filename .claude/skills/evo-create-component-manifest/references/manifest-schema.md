# Manifest Schema Reference

Derived from auditing the full evo-web component library across all three package layers
(skin SCSS, evo-marko, evo-react) and the website accessibility docs. Every field here
corresponds to something real components needed during implementation.

## Source key

Each field is tagged with where the value comes from:

- **[CONTRACT]** — extract from the design contract
- **[AUDIT]** — agent reads directly from `scripts/audit-output/components/<name>.json`; no human needed. When found: `confidence: high, source: audit` — do NOT log as a gap. When missing (new component not yet in audit): `confidence: medium, source: missing` — soft gap, not blocking.
- **[INFER]** — agent infers from contract text or library conventions; always log as gap with `confidence: medium, source: inferred`
- **[ENGINEER]** — requires human interpretation; cannot be derived from contract or audit data. Log as gap with `confidence: low, source: missing` — these are the only fields that should block Gate 2

---

## Full schema

```json
{
  "$schema": "../manifest.schema.json",
  "generatedAt": "<ISO 8601 timestamp>",

  "component": {
    "name": "<kebab-case tag name, e.g. evo-button>",        // [CONTRACT]
    "displayName": "<human name, e.g. Button>",              // [CONTRACT]
    "description": "<one-sentence purpose>",                 // [CONTRACT]
    "category": "<storybook category, e.g. buttons>",        // [CONTRACT/INFER]
    "designSystemVersion": "<from README header>"            // [ENGINEER]
  },

  "figmaUrl": "<URL or null>",
  // [CONTRACT] — null is a valid first-class value when the contract predates the
  // Figma design (PR 1 in the two-phase workflow). Do NOT log as a gap when the
  // contract explicitly states null or "not yet available". Add an informational
  // note instead: "figmaUrl will be populated in the visual-layer contract update."

  "figma": {
    // [SPEC] — populated from spec.metadata.figma when a *.spec.json is present.
    // fileKey is always available from the spec; nodeId requires a full figmaUrl.
    "fileKey": "<Figma file key string or null>",
    "nodeId": "<node ID string (e.g. '1:2') or null>"
  },

  // ─── Root element ───────────────────────────────────────────────────────────
  // What HTML element does the component render as its root?
  // Critical for code gen — wrong element = wrong semantics + wrong pass-through.

  "rootElement": {
    "default": "<button | div | span | a | dialog | ...>",   // [INFER/ENGINEER]
    "conditional": {
      "condition": "<when this changes, e.g. 'href is provided'>",
      "element": "<alternate element>"
    },
    "passthroughAttributes": "<which native attrs pass through, e.g. 'all <button> attributes'>",
    "excludedAttributes": ["<attrs managed internally, e.g. 'role', 'aria-label'>"]
  },

  // ─── Props ──────────────────────────────────────────────────────────────────
  // Visual and behavioral props. Do NOT include a11y text strings here — those
  // go in a11yProps. Do NOT include state-lifting callbacks — those go in
  // stateLiftingCallbacks.

  "props": [
    {
      "name": "<prop name>",                                  // [CONTRACT]
      "type": "<string | boolean | number | enum | function>",// [ENGINEER]
      "values": ["<enum values>"],                            // [CONTRACT/INFER]
      "default": "<default value or null>",                  // [CONTRACT/ENGINEER]
      "required": false,                                      // [ENGINEER]
      "description": "<what this controls>"                   // [CONTRACT]
    }
  ],

  // ─── A11y props ─────────────────────────────────────────────────────────────
  // SEPARATE from regular props. These are i18n-able accessibility text strings
  // that must be overridable by consumers for localization.
  // Examples: a11yLoadingText (button), a11yText (avatar), a11ySelectedText (listbox).
  // The contract's Accessibility section should name these; if it doesn't, flag as gap.

  "a11yProps": [
    {
      "name": "<prop name, e.g. a11yText>",                  // [CONTRACT/INFER]
      "type": "<string | string | null>",                    // [ENGINEER]
      "default": "<default English string or null>",         // [CONTRACT/INFER]
      "required": false,                                      // [CONTRACT]
      "allowNull": false,                                     // [ENGINEER]
      "nullMeaning": "<what null means, if allowNull is true>",
      "condition": "<when this prop is used, if conditional>",
      "offscreenMethod": "clipped-span | aria-label | aria-labelledby",  // [ENGINEER]
      "appendsToVisible": false,                             // [ENGINEER] true = appended after visible text (.clipped span)
      "description": "<what is announced and when>"          // [CONTRACT]
    }
  ],

  // ─── Slots ──────────────────────────────────────────────────────────────────
  // Named content regions. In Marko these can be default slots or named AttrTag
  // slots (<@image>, <@label>, etc.) which have a different implementation pattern.

  "slots": [
    {
      "name": "<slot name>",                                  // [CONTRACT]
      "type": "default | named-attrtag | named",             // [ENGINEER]
      "markoSyntax": "<@name>",                              // [ENGINEER] (only for named-attrtag)
      "passesThrough": "<which attrs pass to inner element>", // [ENGINEER]
      "required": false,                                      // [CONTRACT]
      "requiredReason": "functionality | accessibility | both", // [ENGINEER] only when required:true
      "elementTypeOverride": "<prop name that overrides rendered element, e.g. 'as'>", // [ENGINEER] or omit
      "decorative": false,                                   // [ENGINEER] true = CSS background-image, not announced by AT
      "pinned": false,                                       // [ENGINEER] true = outside scrollable area
      "description": "<what content goes here>"              // [CONTRACT]
    }
  ],

  // ─── Nested slots ────────────────────────────────────────────────────────────
  // When a slot's own definition contains named AttrTag sub-slots.
  // Example: evo-tabs has `tab` slot, and each Tab definition has a `panel` sub-slot.

  "nestedSlots": [                                           // omit if no nesting
    {
      "parentSlot": "<name of the parent slot>",             // [ENGINEER]
      "childSlots": ["<names of nested slots within it>"],   // [ENGINEER]
      "description": "<why this nesting exists>"             // [CONTRACT]
    }
  ],

  // ─── Slot a11y props ─────────────────────────────────────────────────────────
  // A11y text props that belong to a slot's interface, not the component root.
  // Example: evo-textbox's postfixIcon slot has an a11yText prop that becomes
  // aria-label on the inner button element.

  "slotA11yProps": [                                         // omit if none
    {
      "slot": "<slot name>",                                 // [ENGINEER]
      "prop": "<prop name, e.g. a11yText>",                  // [ENGINEER]
      "appliedAs": "<aria-label | aria-labelledby | ...>",   // [ENGINEER]
      "description": "<what this text announces>"            // [CONTRACT]
    }
  ],

  // ─── Variants ───────────────────────────────────────────────────────────────
  // Distinct rendering modes. For avatar: image / initials / signedOut / custom.
  // For button: different bodyState renders different content.

  "variants": [
    {
      "name": "<variant name>",                              // [CONTRACT]
      "trigger": "<prop or condition that activates it>",    // [CONTRACT/INFER]
      "description": "<what is rendered differently>"        // [CONTRACT]
    }
  ],

  // ─── States ─────────────────────────────────────────────────────────────────
  // Visual + ARIA states the component can enter.

  "states": [
    {
      "name": "<state name>",                                // [CONTRACT]
      "trigger": "<what causes this state>",                 // [CONTRACT]
      "cssSelector": "<CSS selector, e.g. [disabled] or [aria-invalid='true']>",  // [ENGINEER]
      "ariaAttribute": "<aria attribute added in this state, or null>",            // [ENGINEER]
      "keyboardAccess": "full | focusable | none",           // [CONTRACT/ENGINEER]
      "renderChange": "<what visually changes, if any>",     // [CONTRACT]
      "description": "<plain English description>"           // [CONTRACT]
    }
  ],

  // ─── A11y ───────────────────────────────────────────────────────────────────
  // The accessibility contract. One of the most critical sections for code gen —
  // wrong ARIA patterns produce inaccessible components.
  //
  // The design contract's Accessibility section should supply the plain-English
  // answers. The skill translates those to the technical fields below.

  "a11y": {
    "role": "<ARIA role string or null>",                    // [CONTRACT→ENGINEER]
    "explicitRole": false,                                   // [ENGINEER] true = role="" attr added
    "labelStrategy": "content | aria-label-prop | aria-labelledby | aria-hidden | compound-labelledby",
                                                             // [ENGINEER]
                                                             // compound-labelledby = space-separated IDs
                                                             //   that stitch external + internal elements
    "focusable": true,                                       // [CONTRACT]
    "focusableWhenDisabled": "<always | partiallyDisabled-only | never>", // [CONTRACT]
    "tabOrder": "natural | manual | none",                   // [CONTRACT]

    // Focus management (for overlays and widgets)
    "focusTrap": "browser-native | javascript | none",       // [ENGINEER]
    "initialFocus": "<where focus lands when component opens, e.g. 'first-item' | 'acknowledgement-button' | null>",
                                                             // [CONTRACT]
    "focusReturn": "<where focus returns on close; 'trigger-element' is most common; null if not applicable>",
                                                             // [CONTRACT] — often a CALLER OBLIGATION

    "screenReaderAnnouncement": "<what is announced, plain English>",  // [CONTRACT]

    // ARIA attribute ownership — which are managed internally vs. caller passthrough
    "ariaAttributeOwnership": {                              // [ENGINEER]
      "managed": ["<aria-* attributes managed internally — caller MUST NOT set these>"],
      "passthrough": ["<aria-* attributes the caller can set — merged or forwarded to root>"]
    },

    "ariaAttributes": [
      {
        "attr": "<aria-* attribute name>",                   // [AUDIT] marko.templateAriaUsages[].attr
        "value": "<value or description>",                   // [AUDIT] marko.templateAriaUsages[].value
        "condition": "<when applied>"                        // [INFER] from value expression; soft gap
      }
    ]
  },

  // ─── Widget role ────────────────────────────────────────────────────────────
  // For components that implement a WAI-ARIA widget role system:
  // menu + menuitem, tablist + tab + tabpanel, listbox + option, etc.
  // Omit for simple interactive components (button, checkbox, switch).

  "widgetRole": {                                            // omit if not a widget
    "containerRole": "<role on the host element, e.g. listbox | menu | tablist>",  // [ENGINEER]
    "itemRole": "<default role on each child, e.g. option | menuitem | tab>",      // [ENGINEER]
    "itemRoleVariants": [                                    // only when role varies at runtime
      {
        "role": "<e.g. menuitemradio | menuitemcheckbox>",
        "condition": "<e.g. 'selected prop is a single value' or 'selected prop is an array'>"
      }
    ],
    "supportingRoles": ["<additional roles, e.g. tabpanel | separator>"],  // [ENGINEER]
    "relatedRoles": {                                        // ARIA relationships between widget elements
      "aria-controls": "<which element controls which>",
      "aria-labelledby": "<cross-element labelling>",
      "aria-selected": "<when used; NOTE: listbox/tabs use aria-selected, NOT aria-checked>",
      "aria-checked": "<when used; NOTE: menu items use aria-checked, NOT aria-selected>",
      "aria-expanded": "<which element carries aria-expanded and when>"
    }
  },

  // ─── Keyboard model ─────────────────────────────────────────────────────────
  // How keyboard navigation works inside this widget. Omit for simple components
  // where native element semantics handle all keyboard behavior.
  //
  // focusStrategy decision guide:
  //   roving-tabindex  → physical focus moves to each item (menu, tabs, listbox standalone)
  //   aria-activedescendant → focus stays on host (combobox, grid — textbox must retain focus)

  "keyboardModel": {                                         // omit for simple components
    "focusStrategy": "roving-tabindex | aria-activedescendant | none",  // [ENGINEER]
    "focusStrategyReason": "<why this strategy — e.g. 'physical focus for better SR support'>",
    "autoSelect": {
      "supported": false,                                    // [CONTRACT]
      "prop": "<prop name that enables auto-select>",
      "description": "<auto-select = arrow key navigation also selects; manual = SPACE/ENTER needed>"
    },
    "wraps": false,                                          // [ENGINEER] navigation wraps at list ends
    "keys": [
      {
        "key": "<key, e.g. Escape | Home | End>",
        "action": "<plain English>",
        "condition": "<when>"
      }
    ],
    "typeahead": {
      "supported": false,                                    // [ENGINEER]
      "timeoutMs": 2000,                                     // [ENGINEER]
      "implementation": "evo-typeahead | custom | none"
    }
  },

  // ─── State-lifting callbacks ─────────────────────────────────────────────────
  // Callbacks that synchronize internal state to the parent. NOT DOM events.
  // Pattern: indexChange, openChange, selectedChange — called with a plain value
  // (number, boolean, string/array), not a DOM Event object.
  // Distinguish from `events` which are custom DOM-event-like callbacks (onEscape).

  "stateLiftingCallbacks": [                                 // omit if none
    {
      "name": "<e.g. indexChange | openChange | selectedChange>",  // [ENGINEER]
      "signature": "<TypeScript, e.g. (index: number) => void>",   // [ENGINEER]
      "stateLifted": "<plain English — what state is being synced>",  // [CONTRACT]
      "defaultBehavior": "<what happens internally if the callback is not provided>"  // [ENGINEER]
    }
  ],

  // ─── Dual output ─────────────────────────────────────────────────────────────
  // When a component renders both a custom accessible widget AND a hidden native
  // form control. Example: evo-listbox renders div[role=listbox] + select[hidden].

  "dualOutput": null,                                        // or:
  // "dualOutput": {
  //   "customElement": "<e.g. div[role=listbox]>",          // [ENGINEER]
  //   "nativeElement": "<e.g. select[hidden]>",             // [ENGINEER]
  //   "syncProp": "<prop that drives both, e.g. selected>", // [ENGINEER]
  //   "purpose": "<why native element exists>"              // [ENGINEER]
  // },

  // ─── Floating positioner ─────────────────────────────────────────────────────
  // For components with floating overlays (menu, tooltip, listbox-button, combobox).
  // Captures positioning implementation so code gen writes correct import/setup.

  "floatingPositioner": null,                                // or:
  // "floatingPositioner": {
  //   "implementation": "evo-expander | browser-anchor | none",  // [ENGINEER]
  //   "library": "<e.g. @floating-ui/dom>",               // [ENGINEER]
  //   "placement": "<e.g. bottom-start>",                  // [CONTRACT/ENGINEER]
  //   "strategy": "fixed | absolute",                      // [CONTRACT/ENGINEER]
  //   "triggerElement": "<which element anchors the overlay>"  // [ENGINEER]
  // },

  // ─── Caller obligations ──────────────────────────────────────────────────────
  // A11y requirements imposed on the consumer that the component CANNOT enforce.
  // If not met by the caller, the component will not satisfy WCAG 2.2 AA.
  // Critical to surface clearly — these will become blocking 🔴 gap entries.

  "callerObligations": [                                     // omit if none
    {
      "category": "form-context | label | heading-structure | focus-management | open-trigger | icon-treatment | live-region | other",
      "description": "<plain English — what the caller must do>",  // [CONTRACT]
      "wcagCriterion": "<e.g. 1.3.1 | 4.1.2 | 2.4.3>",           // [ENGINEER]
      "consequence": "<what breaks if this obligation is not met>"  // [ENGINEER]
    }
  ],

  // ─── Internal data protocol ──────────────────────────────────────────────────
  // data-* attributes placed on child elements by the component for internal
  // coordination with internal tags (e.g. evo-roving-tabindex reads data-value).
  // Invisible to consumers but necessary for code gen to reproduce the pattern.

  "internalDataProtocol": [                                  // omit if none
    {
      "attribute": "<data-* name, e.g. data-value>",         // [ENGINEER]
      "purpose": "<which internal tag reads it and why>",    // [ENGINEER]
      "appliedTo": "<which child element gets this attribute>"  // [ENGINEER]
    }
  ],

  // ─── Keyboard interactions ───────────────────────────────────────────────────
  // Explicit key-to-action mapping. Native button Space/Enter don't need listing.
  // Only non-obvious or custom interactions belong here.
  // NOTE: Widget arrow-key navigation goes in keyboardModel, not here.

  "keyboardInteractions": [
    {
      "key": "<key name, e.g. Escape>",                      // [CONTRACT]
      "action": "<what happens in plain English>",           // [CONTRACT]
      "condition": "<when this fires>",                      // [CONTRACT]
      "emittedEvent": "<callback name if any, e.g. onEscape>"  // [ENGINEER]
    }
  ],

  // ─── Events ─────────────────────────────────────────────────────────────────
  // Custom DOM-event-like callbacks (onEscape, onLoadError, onAnimationEnd).
  // These receive a DOM Event object or equivalent.
  // DO NOT put state-lifting callbacks here (openChange, indexChange) — those
  // go in stateLiftingCallbacks above.

  "events": [
    {
      "name": "<event name, e.g. onEscape>",                 // [CONTRACT/INFER]
      "signature": "<TypeScript signature>",                 // [ENGINEER]
      "trigger": "<plain English trigger>",                  // [CONTRACT]
      "condition": "<when this fires>"                       // [CONTRACT]
    }
  ],

  // ─── BEM ────────────────────────────────────────────────────────────────────
  // Read from audit snapshot: skin.bemBlocks → block, skin.bemElements → elements,
  // skin.bemModifiers → modifiers. alternateBlock still requires engineer interpretation.

  "bem": {
    "block": "<BEM block class, e.g. btn>",                  // [AUDIT] skin.bemBlocks[0]
    "alternateBlock": "<alternate block if root el changes>",// [ENGINEER] requires reading template
    "alternateBlockCondition": "<when alternate block applies>",  // [ENGINEER]
    "elements": [
      { "name": "<element name>", "description": "<purpose>" }   // [AUDIT] skin.bemElements[]
    ],
    "modifiers": [
      { "name": "<modifier name>", "description": "<what changes>" }  // [AUDIT] skin.bemModifiers[]
    ]
  },

  // ─── Design tokens ──────────────────────────────────────────────────────────

  "tokens": {
    // [SPEC] — named map from semantic purpose → CSS custom property name.
    // Sourced from spec.tokens, with dot-notation translated to kebab + "--" prefix.
    // e.g. spec "background": "color.background.primary" → "background": "--color-background-primary"
    // This is the primary input to evo-style-component for SCSS generation.
    // Example:
    // "background": "--color-background-primary",
    // "border": "--color-border-subtle",
    // "titlePaddingVertical": "--spacing-200",
    // "titleTypography": "--typography-title2"
  },

  "designTokens": ["<--css-custom-property-name>"],          // [AUDIT] skin.cssCustomProperties[]

  // ─── Behaviors ──────────────────────────────────────────────────────────────
  // Non-obvious algorithms or runtime logic the code generator cannot infer.
  // Standard behavior kinds (use these names for consistency):
  //   animationGatedClose   — two-phase close: state → animation → DOM close
  //   typeaheadSearch       — character accumulation + timeout + match algorithm
  //   lightDismiss          — closedby attribute or click-outside close
  //   collapseOnSelect      — auto-close overlay after item selection
  //   reactiveVisibility    — element shown/hidden based on reactive state (not CSS only)
  //   dualOutputSync        — hidden native element mirrors custom widget state
  //   colorDerived          — computed value from hash/algorithm

  "behaviors": [
    {
      "name": "<behavior name — use standard kinds above where possible>",
      "description": "<plain English>",                      // [CONTRACT]
      "algorithm": "<implementation detail if needed>"       // [ENGINEER]
    }
  ],

  // ─── Dependencies ───────────────────────────────────────────────────────────
  // Read from audit snapshot: marko.subComponents → component entries,
  // marko.internalImports → internal-tag entries.
  // Icon entries (evo-icon-*) are a subset of subComponents — filter by name prefix.
  // usedWhen requires reading the template; default to 'always' and log as soft gap.

  "dependencies": [
    {
      "type": "component | icon | internal-tag",             // [AUDIT] derived from name prefix
      "name": "<evo-component-name or evo-internal-tag>",    // [AUDIT] marko.subComponents[]
      "usedWhen": "<condition or 'always'>"                  // [INFER] default 'always'; engineer refines
    }
  ],

  // ─── RTL ────────────────────────────────────────────────────────────────────
  // RTL and color/spacing are Skin-layer invariants — always required by convention.
  // Read from audit snapshot: skin.rtlOverrides (boolean) and skin.stateSelectors
  // for any [dir="rtl"] entries. Do NOT ask the contract to specify this.

  "rtl": {
    "notes": "<what changes in RTL>"  // [AUDIT] skin.rtlOverrides + skin.stateSelectors
  },

  // ─── Storybook ──────────────────────────────────────────────────────────────

  "storybook": {
    "category": "<Storybook title path, e.g. buttons/evo-button>",  // [ENGINEER]
    "stories": [
      { "name": "<story name>", "description": "<what it demonstrates>" }
    ]
  },

  // ─── Gaps ───────────────────────────────────────────────────────────────────

  "gaps": [
    {
      "field": "<dot-path, e.g. a11y.role | callerObligations[0]>",
      "assumed": "<value used or null>",
      "confidence": "high | medium | low",
      "source": "inferred | missing",
      "note": "<what the engineer needs to confirm or provide>"
    }
  ]
}
```

---

## Real component examples

### evo-button — baseline simple interactive

```json
{
  "rootElement": {
    "default": "button",
    "conditional": { "condition": "href prop provided", "element": "a" },
    "passthroughAttributes": "all native <button> and <a> attributes",
    "excludedAttributes": ["aria-label (overridden in loading state)", "type (managed internally)"]
  },
  "a11yProps": [
    {
      "name": "a11yLoadingText",
      "type": "string",
      "default": "loading",
      "required": false,
      "offscreenMethod": "aria-label",
      "appendsToVisible": false,
      "condition": "replaces aria-label when bodyState='loading'",
      "description": "Localized text announced by screen readers when button is in loading state"
    }
  ],
  "a11y": {
    "role": null,
    "explicitRole": false,
    "labelStrategy": "content",
    "focusable": true,
    "focusableWhenDisabled": "partiallyDisabled-only",
    "tabOrder": "natural",
    "focusTrap": "none",
    "ariaAttributeOwnership": {
      "managed": ["aria-label (overridden in loading state)", "aria-disabled (from partiallyDisabled)"],
      "passthrough": ["aria-controls", "aria-expanded", "aria-pressed", "aria-haspopup"]
    },
    "ariaAttributes": [
      { "attr": "aria-disabled", "value": "true", "condition": "partiallyDisabled=true" },
      { "attr": "aria-label", "value": "a11yLoadingText value", "condition": "bodyState='loading'" }
    ]
  },
  "bem": { "block": "btn", "alternateBlock": "fake-btn", "alternateBlockCondition": "href prop provided" },
  "dependencies": [
    { "type": "component", "name": "evo-progress-spinner", "usedWhen": "bodyState='loading'" },
    { "type": "icon", "name": "evo-icon-chevron-down-16", "usedWhen": "bodyState='expand'" }
  ]
}
```

### evo-avatar — baseline simple presentational

```json
{
  "rootElement": {
    "default": "div",
    "excludedAttributes": ["role (hardcoded 'img')", "aria-label (managed by a11yText)"]
  },
  "a11yProps": [
    {
      "name": "a11yText",
      "type": "string | null",
      "default": null,
      "required": true,
      "allowNull": true,
      "nullMeaning": "Parent element provides accessibility via its own label",
      "offscreenMethod": "aria-label",
      "appendsToVisible": false,
      "description": "aria-label. Typically 'Signed in as [name]' or 'Signed out'. Pass null ONLY if a parent already labels this element."
    }
  ],
  "slots": [
    {
      "name": "image",
      "type": "named-attrtag",
      "markoSyntax": "<@image>",
      "passesThrough": "all <img> attributes except alt (forced to empty string)",
      "required": false
    }
  ],
  "a11y": {
    "role": "img",
    "explicitRole": true,
    "labelStrategy": "aria-label-prop",
    "focusable": false,
    "tabOrder": "none",
    "focusTrap": "none",
    "screenReaderAnnouncement": "Value of a11yText (e.g. 'Signed in as Elizabeth')"
  },
  "behaviors": [
    {
      "name": "colorDerived",
      "description": "Background color for initials variant derived from username hash",
      "algorithm": "djb2 hash of username mod 8 → one of 8 preset colors"
    },
    {
      "name": "imageFitDetection",
      "description": "After image loads, natural aspect ratio determines object-fit (contain vs cover)"
    }
  ]
}
```

### evo-textbox — form input with validation

```json
{
  "rootElement": {
    "default": "span (or div when fluid=true)",
    "conditional": { "condition": "multiline=true", "element": "inner control changes from input to textarea" },
    "passthroughAttributes": "all <input> / <textarea> attributes on the control element"
  },
  "props": [
    { "name": "invalid", "type": "boolean", "required": false, "description": "Triggers aria-invalid='true' on control AND textbox--invalid CSS modifier on wrapper" },
    { "name": "multiline", "type": "boolean", "default": false, "required": false, "description": "Switches inner element from <input> to <textarea>" }
  ],
  "a11yProps": [],
  "slots": [
    { "name": "prefixIcon", "type": "named-attrtag", "decorative": true, "description": "Icon before the input — aria-hidden by evo-icon, purely visual" },
    { "name": "prefixText", "type": "named-attrtag", "description": "Text before the input — receives a generated ID and linked to control via aria-describedby" },
    { "name": "postfixText", "type": "named-attrtag", "description": "Text after the input — same aria-describedby pattern as prefixText" },
    {
      "name": "postfixIcon",
      "type": "named-attrtag",
      "required": false,
      "description": "Icon button after the input — renders as <button> when a11yText is provided"
    }
  ],
  "slotA11yProps": [
    {
      "slot": "postfixIcon",
      "prop": "a11yText",
      "appliedAs": "aria-label on the inner <button> element",
      "description": "Label for the postfix action button (e.g. 'Clear input', 'Show password')"
    }
  ],
  "states": [
    {
      "name": "invalid",
      "trigger": "invalid=true",
      "cssSelector": ".textbox--invalid, input[aria-invalid='true']",
      "ariaAttribute": "aria-invalid='true'",
      "keyboardAccess": "full",
      "renderChange": "Red border on wrapper; validation styles on control",
      "description": "Indicates the input value failed validation"
    }
  ],
  "a11y": {
    "role": null,
    "explicitRole": false,
    "labelStrategy": "aria-labelledby",
    "focusable": true,
    "tabOrder": "natural",
    "focusTrap": "none",
    "ariaAttributeOwnership": {
      "managed": ["aria-invalid (from invalid prop)", "aria-describedby (auto-computed from slot IDs)"],
      "passthrough": ["aria-label", "aria-required", "aria-disabled", "aria-errormessage"]
    },
    "ariaAttributes": [
      { "attr": "aria-invalid", "value": "true", "condition": "invalid=true" },
      { "attr": "aria-describedby", "value": "auto-computed space-joined IDs of prefixText + postfixText slots", "condition": "prefixText or postfixText slot is used" }
    ]
  },
  "callerObligations": [
    {
      "category": "label",
      "description": "Must provide a visible <label> with for= matching the textbox id. Placeholder text is NOT a substitute for a label.",
      "wcagCriterion": "1.3.1",
      "consequence": "Screen reader will not announce the textbox purpose"
    },
    {
      "category": "label",
      "description": "Error message element must exist in the DOM and be referenced by the textbox's aria-describedby. The component does not create the error message element.",
      "wcagCriterion": "3.3.1",
      "consequence": "Screen reader announces invalid state but cannot describe the error"
    },
    {
      "category": "form-context",
      "description": "Add novalidate to the parent <form> to suppress browser built-in validation UI",
      "wcagCriterion": "3.3.1",
      "consequence": "Browser and design system both show conflicting validation messages"
    }
  ],
  "behaviors": [
    {
      "name": "reactiveVisibility",
      "description": "Placeholder is only shown when the input is focused AND the value is empty — not the native browser placeholder behavior",
      "algorithm": "focused state + value state reactive: currentPlaceholder = (placeholder && focused && !value ? placeholder : '')"
    }
  ]
}
```

### evo-tabs — navigation widget

```json
{
  "rootElement": { "default": "div", "passthroughAttributes": "all <div> attributes" },
  "props": [
    { "name": "activation", "type": "enum", "values": ["auto", "manual"], "default": "auto", "description": "auto: arrow key moves focus AND selects; manual: arrow key moves focus, SPACE/ENTER selects" },
    { "name": "index", "type": "number", "required": false, "description": "Currently selected tab index (controlled)" }
  ],
  "slots": [
    {
      "name": "tab",
      "type": "named-attrtag",
      "required": false,
      "description": "Each tab. The tab's content renders in the tab button; panel sub-slot renders the panel content"
    }
  ],
  "nestedSlots": [
    {
      "parentSlot": "tab",
      "childSlots": ["panel"],
      "description": "Each tab AttrTag contains a panel AttrTag for the tab panel content"
    }
  ],
  "widgetRole": {
    "containerRole": "tablist",
    "itemRole": "tab",
    "supportingRoles": ["tabpanel"],
    "relatedRoles": {
      "aria-controls": "Each tab has aria-controls pointing to its panel's generated ID",
      "aria-selected": "aria-selected='true' on active tab; omitted on inactive tabs",
      "aria-labelledby": "Each tabpanel has aria-labelledby pointing to its tab's generated ID"
    }
  },
  "keyboardModel": {
    "focusStrategy": "roving-tabindex",
    "focusStrategyReason": "Physical focus provides better cross-browser screen reader support for tab navigation",
    "autoSelect": {
      "supported": true,
      "prop": "activation",
      "description": "activation='auto': arrow key navigation also selects. activation='manual': SPACE or ENTER required to select."
    },
    "wraps": true,
    "keys": [],
    "typeahead": { "supported": false }
  },
  "stateLiftingCallbacks": [
    {
      "name": "indexChange",
      "signature": "(index: number) => void",
      "stateLifted": "Currently selected tab index",
      "defaultBehavior": "Index state managed internally when callback not provided"
    }
  ],
  "a11y": {
    "role": null,
    "explicitRole": false,
    "labelStrategy": "aria-labelledby",
    "focusable": true,
    "tabOrder": "manual",
    "focusTrap": "none",
    "screenReaderAnnouncement": "Tab list with N tabs. Selected tab announced as 'Tab label, tab, N of M, selected'. Panel announced as 'Tab label, tab panel'."
  },
  "callerObligations": [
    {
      "category": "heading-structure",
      "description": "A visible heading must immediately precede the tablist in the DOM. The heading level determines the offscreen heading level required inside each panel.",
      "wcagCriterion": "1.3.1",
      "consequence": "Document heading structure breaks — AT users cannot understand page hierarchy"
    },
    {
      "category": "heading-structure",
      "description": "Each tab panel SHOULD contain an offscreen heading at exactly one level below the preceding heading. Heading text must match the tab text.",
      "wcagCriterion": "1.3.1",
      "consequence": "Screen reader users lose heading structure navigation inside panels"
    }
  ]
}
```

### evo-dialog — overlay with native focus trap

```json
{
  "rootElement": { "default": "dialog (native HTML element)" },
  "props": [
    { "name": "open", "type": "boolean", "required": false, "description": "Controls visibility. When true, calls showModal(). When false, triggers exit animation then el.close()." },
    { "name": "size", "type": "enum", "values": ["wide", "narrow", "large"], "description": "Dialog width variant" }
  ],
  "slots": [
    { "name": "header", "type": "named-attrtag", "required": true, "requiredReason": "accessibility", "elementTypeOverride": "as", "description": "Dialog title. Renders as <h2> by default. Receives auto-generated ID for aria-labelledby." },
    { "name": "close", "type": "named-attrtag", "required": true, "requiredReason": "accessibility", "description": "Dismiss button (icon-button). Required by a11y guidelines — dialog must contain a dismiss button." },
    { "name": "banner", "type": "named-attrtag", "required": false, "decorative": true, "description": "Expressive header image. Rendered as CSS background-image on a div — not announced by AT." },
    { "name": "footer", "type": "named-attrtag", "required": false, "description": "Footer action area" },
    { "name": "previous", "type": "named-attrtag", "required": false, "description": "Back navigation button for multi-step dialogs" }
  ],
  "stateLiftingCallbacks": [
    {
      "name": "openChange",
      "signature": "(open: boolean) => void",
      "stateLifted": "Dialog open/closed state",
      "defaultBehavior": "Open state managed internally"
    }
  ],
  "a11y": {
    "role": null,
    "explicitRole": false,
    "labelStrategy": "aria-labelledby",
    "focusable": true,
    "tabOrder": "manual",
    "focusTrap": "browser-native",
    "initialFocus": "First interactive element inside dialog (browser-native showModal behavior)",
    "focusReturn": "Trigger element — CALLER OBLIGATION, not handled by component",
    "ariaAttributeOwnership": {
      "managed": ["aria-labelledby (auto-computed from header slot ID, extensible)"],
      "passthrough": ["aria-describedby"]
    },
    "ariaAttributes": [
      { "attr": "aria-labelledby", "value": "header slot generated ID (caller can prepend additional IDs)", "condition": "always" }
    ]
  },
  "callerObligations": [
    {
      "category": "focus-management",
      "description": "Caller must return focus to the trigger element when the dialog closes. The component does not handle focus return.",
      "wcagCriterion": "2.4.3",
      "consequence": "After dialog closes, focus is lost or lands in an unexpected location"
    },
    {
      "category": "open-trigger",
      "description": "Dialog must be opened on click-event of button or via application event only. Must NOT open on hover or focus.",
      "wcagCriterion": "3.2.1",
      "consequence": "WCAG violation — unexpected change of context on focus/hover"
    },
    {
      "category": "heading-structure",
      "description": "Dialog heading must start at level 2 (h2). The header slot renders h2 by default; use header.as to override only if the document context requires a different level.",
      "wcagCriterion": "1.3.1",
      "consequence": "Heading hierarchy inside dialog is incorrect"
    }
  ],
  "behaviors": [
    {
      "name": "animationGatedClose",
      "description": "Two-phase close: (1) open=false adds dialog--close class and starts exit animation; (2) onAnimationEnd fires and calls el.close() to remove from DOM/AT",
      "algorithm": "onCancel: preventDefault + open=false. onAnimationEnd: if !open then el.close()"
    },
    {
      "name": "lightDismiss",
      "description": "closedby='any' enables browser-native light dismiss (Escape key or click outside). NOTE: closedby is an emerging HTML attribute — not yet widely supported.",
      "algorithm": "closedby prop defaults to 'any'; set to 'closerequest' or 'none' to restrict"
    }
  ]
}
```

### evo-listbox — complex interactive widget

```json
{
  "rootElement": { "default": "div" },
  "a11yProps": [
    {
      "name": "a11ySelectedText",
      "type": "string",
      "default": "selected",
      "required": false,
      "allowNull": false,
      "offscreenMethod": "clipped-span",
      "appendsToVisible": true,
      "description": "Visually hidden text appended inside selected option element. Announces selection state to screen readers without relying on the visual checkmark."
    }
  ],
  "slots": [
    {
      "name": "option",
      "type": "named-attrtag",
      "required": false,
      "description": "Each list option. Value prop identifies the option; disabled prop marks it inert."
    }
  ],
  "widgetRole": {
    "containerRole": "listbox",
    "itemRole": "option",
    "relatedRoles": {
      "aria-selected": "aria-selected='true' on selected option. Omitted (NOT 'false') on unselected options.",
      "aria-disabled": "aria-disabled='true' on disabled options (not native disabled — allows focus)"
    }
  },
  "keyboardModel": {
    "focusStrategy": "roving-tabindex",
    "focusStrategyReason": "Physical focus chosen over aria-activedescendant for better cross-browser screen reader support. NOTE: older documentation describes aria-activedescendant — the implementation intentionally differs.",
    "autoSelect": {
      "supported": true,
      "prop": "listSelection",
      "description": "listSelection='auto': arrow key navigation also selects. listSelection='manual': SPACE/ENTER required."
    },
    "wraps": true,
    "typeahead": { "supported": true, "timeoutMs": 2000, "implementation": "evo-typeahead" }
  },
  "dualOutput": {
    "customElement": "div[role=listbox]",
    "nativeElement": "select[hidden]",
    "syncProp": "selected",
    "purpose": "Form submission — the hidden native select carries the selected value to the server when the listbox is inside a <form>"
  },
  "internalDataProtocol": [
    {
      "attribute": "data-value",
      "purpose": "Read by evo-roving-tabindex to identify items by value string rather than by DOM index",
      "appliedTo": "Each option div element"
    }
  ],
  "a11y": {
    "focusTrap": "none",
    "ariaAttributeOwnership": {
      "managed": ["role (listbox/option)", "aria-selected", "aria-disabled", "tabindex"],
      "passthrough": ["aria-label", "aria-labelledby"]
    }
  }
}
```

### evo-menu-button — compound trigger + widget

```json
{
  "widgetRole": {
    "containerRole": "menu",
    "itemRole": "menuitem",
    "itemRoleVariants": [
      { "role": "menuitemradio", "condition": "selected prop is a single number or string value" },
      { "role": "menuitemcheckbox", "condition": "selected prop is an array" }
    ],
    "supportingRoles": ["separator"],
    "relatedRoles": {
      "aria-checked": "Applied to menuitemradio and menuitemcheckbox items. ALWAYS present when checkable — aria-checked='true' or aria-checked='false'. NOTE: aria-checked NOT aria-selected (menu uses checked; listbox uses selected).",
      "aria-haspopup": "aria-haspopup='true' on trigger button",
      "aria-expanded": "aria-expanded='true'/'false' on trigger button, driven by evo-expander"
    }
  },
  "keyboardModel": {
    "focusStrategy": "roving-tabindex",
    "focusStrategyReason": "Menu is a pure command widget — no text input — so physical focus movement is correct",
    "wraps": true,
    "typeahead": { "supported": true, "timeoutMs": 2000, "implementation": "evo-typeahead" },
    "keys": [
      { "key": "Escape", "action": "Closes the menu overlay", "condition": "Menu is open" }
    ]
  },
  "floatingPositioner": {
    "implementation": "evo-expander",
    "library": "@floating-ui/dom",
    "placement": "bottom-start (default) or bottom-end (when reverse=true)",
    "strategy": "fixed",
    "triggerElement": "The trigger button element ($root span)"
  },
  "stateLiftingCallbacks": [
    {
      "name": "openChange",
      "signature": "(open: boolean) => void",
      "stateLifted": "Menu open/closed state",
      "defaultBehavior": "Open state managed internally"
    },
    {
      "name": "selectedChange",
      "signature": "(selected: Index) => void",
      "stateLifted": "Currently selected item value(s)",
      "defaultBehavior": "Selection state managed internally"
    }
  ],
  "a11y": {
    "labelStrategy": "compound-labelledby",
    "focusTrap": "none",
    "initialFocus": "First item in the menu (menu container itself does not receive focus)",
    "ariaAttributeOwnership": {
      "managed": ["aria-haspopup", "aria-expanded", "aria-labelledby (on trigger, when prefixId provided)"],
      "passthrough": []
    }
  },
  "behaviors": [
    {
      "name": "collapseOnSelect",
      "description": "When collapseOnSelect=true, the menu closes automatically after an item is clicked",
      "algorithm": "onClick on evo-menu: if collapseOnSelect then open=false"
    }
  ],
  "callerObligations": [
    {
      "category": "label",
      "description": "The trigger button's accessible label must always reflect its current function. When prefixId is provided, aria-labelledby concatenates the external prefix element with the internal value span.",
      "wcagCriterion": "4.1.2",
      "consequence": "Screen reader announces a label that does not reflect the current state/value"
    }
  ]
}
```

---

## What the design contract should explicitly supply

Fields marked `[CONTRACT]` cannot be inferred without the contract. Critical gaps
that prevent the skill from producing a useful manifest:

1. **A11y props** — list every required text string with its default English value
2. **Keyboard interactions** — explicit key → action table
3. **Focusability** — is this component focusable? what happens when disabled?
4. **Screen reader announcement** — what exactly does a screen reader say?
5. **Slot types** — are named slots structured markup (AttrTag) or free content?
6. **Widget role** — for interactive widgets: is this a listbox? menu? tab widget?
8. **Caller obligations** — what must the page/consumer provide that the component cannot enforce?
9. **Open/close trigger rules** — what opens/closes this component; is light dismiss allowed?
10. **Initial focus placement** — where should focus go when this component opens?
11. **Focus return** — where should focus return when this component closes?
12. **Toggle state strategy** — for toggle controls: aria-pressed or visible text? (mutually exclusive)
13. **Form context** — must this component be inside a `<form>` with a submit button?

See `contract-template-additions.md` for the proposed contract section additions.
