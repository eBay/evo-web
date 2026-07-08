# Figma MCP Capabilities for Component Generation

This document details what the Figma MCP extracts from a Figma design file, how
that data maps to the visual layer build, and where the boundaries are. All examples
are drawn from a live pull of the Avatar component in the eBay Evo Design System file.

**Source file:** eBay Evo Design System  
**Node pulled:** Avatar component set (`279892:147895`)  
**Tools used:** `get_design_context` + `get_variable_defs`  
**Relevant pipeline phase:** Phase 2 — Visual layer, triggered by PR 2 merge

---

## Role in the pipeline

The Figma MCP is the data source for the `/evo-style-component` skill — the Phase 2
build that generates the CSS visual layer after the behavioral layer (Phase 1) is
already in place. It is not used during Phase 1 (behavioral build), which runs from
the contract and audit snapshot alone.

```
PR 2 merged (contract updated with Figma URL)
        ↓
/evo-style-component reads manifest (has figmaUrl)
        ↓
get_design_context → structure, sizes, typography, colors, layout
get_variable_defs  → resolved token values
        ↓
Agent translates Tailwind → SCSS/BEM
        ↓
Visual CSS layer PR in evo-web
```

---

## The two tools and what each provides

### `get_design_context`

The primary tool. Returns:
- A React + Tailwind code representation of the selected node, with all variants
  and states encoded as conditional logic
- A screenshot of the node as rendered in Figma
- Component documentation, descriptions, and Playbook links if defined
- Image asset URLs for any images/icons embedded in the design (7-day expiry)
- Node IDs as `data-node-id` attributes throughout the code

### `get_variable_defs`

A secondary tool that resolves the token values referenced in the design. Returns:
- All Figma variables (design tokens) used in the selected node
- Their resolved values (hex colors, or image references for gradient tokens)

**Use both tools together.** `get_design_context` gives you token names;
`get_variable_defs` gives you their resolved hex values. Neither is sufficient alone.

---

## What is extracted — field by field

Verified against the live Avatar pull. Every value below came directly from the MCP,
not from estimation or visual inspection.

### Sizing

All 7 size steps extracted with exact pixel values:

| Size step | Container | Border radius | Initials font size |
|---|---|---|---|
| 32 | 32 × 32px | 16px | 16px |
| 40 | 40 × 40px | 20px | 20px |
| 48 | 48 × 48px | 24px | 24px |
| 56 | 56 × 56px | 28px | 28px |
| 64 | 64 × 64px | 32px | 32px |
| 96 | 96 × 96px | 48px | 48px |
| 128 | 128 × 128px | 64px | 64px |

Rule derivable by the agent: `border-radius = size / 2` (always circular);
`initials-font-size = size / 2`.

### Typography

```
font-family:  Market Sans, Bold (font-weight: 700)
font-size:    see size table above
color:        #002a69  (eBay navy — initials text on colored background)
text-align:   center
line-height:  1 (leading-none)
```

### Colors and design tokens

Extracted from `get_variable_defs` — these are the actual resolved values:

| Token name (Figma) | Resolved value | Usage |
|---|---|---|
| `--color-background-primary` | `#ffffff` | Image variant container background |
| `Background/Secondary` | `#f7f7f7` | Signed-out / eBay / eBay.ai container |
| `Foreground/Secondary` | `#707070` | Signed-out person icon color |
| `Color/Yellow/400` | `#ffbd14` | eBay logo — yellow bar |
| `Color/Blue/500` | `#0968f6` | eBay logo — blue bar |
| `Color/Green/500` | `#92c821` | eBay logo — green element |
| `Color/Red/500` | `#f02d2d` | eBay logo — red element |
| `AI/Solid/Blue/Strong` | `#0968f6` | eBay.ai sparkle |
| `AI/Solid/Yellow/Strong` | `#ffd80e` | eBay.ai sparkle |
| `AI/Solid/Purple/Strong` | `#993ee0` | eBay.ai sparkle |
| `AI/Solid/Red/Strong` | `#ff4242` | eBay.ai sparkle |
| `AI/Solid/Green/Strong` | `#4ee04b` | eBay.ai sparkle |

### Variants

All five `type` values extracted with their visual logic:

| Variant | Extracted details |
|---|---|
| `Image` | Circular container with photo; `--color-background-primary` bg; circular clip |
| `Default` | Circular container with initials; colored gradient background (per-size image); Market Sans Bold |
| `Signed out` | Container with person icon; `Background/Secondary` bg; icon scales with size |
| `eBay` | Container with eBay shopping bag logo; 4-color composition; proportional icon |
| `eBay.ai` | Container with AI sparkle; multi-color gradient; `Background/Secondary` bg |

### Layout and spacing

```
gap between container and text label: 8px  (signed-out / eBay / eBay.ai types)
container positioning: relative; content centered absolute
icon sizing relative to container:
  eBay logo — height: 76.92% of container, width varies per size
  eBay.ai sparkle — inset: 4.17% (sizes ≥ 48) or 5% (40) or 6.25% (32)
```

### Image and icon assets

The MCP returns temporary URLs (7-day expiry) for every image and icon embedded
in the design. For Avatar this includes:

- 7 container background images (one per size) for the Default (initials) variant
- 7 container background images for the Signed-out / eBay / eBay.ai variant
- 7 profile photo placeholders for the Image variant
- 7 signed-out person icons (one per size)
- Per-size eBay logo elements (green shape, red shape, handle stroke)
- Per-size AI sparkle shapes

For the SCSS/BEM implementation, these image assets are not used directly —
the colored backgrounds are CSS (`background-color` + `border-radius`) and the
icons are SVG components. The asset URLs serve as visual reference for the agent.

### Component documentation

The MCP returned the component's Figma description and its Playbook documentation
link directly:

```
Description: Avatars are informational assets that represent users' identities
             across our products.
Playbook:    https://playbook.ebay.com/design-system/components/avatar
Version:     1.3
```

---

## How this satisfies the visual layer build

### What the skill receives vs. what it needs

| Need | Source | Status |
|---|---|---|
| Container dimensions per size | `get_design_context` → size-[Npx] classes | ✅ Exact |
| Border radius per size | `get_design_context` → rounded-[Npx] classes | ✅ Exact |
| Background colors (token names) | `get_design_context` → var(--token-name) | ✅ Present |
| Background color values | `get_variable_defs` → resolved hex | ✅ Exact |
| Typography (family, weight, size) | `get_design_context` → font-* classes | ✅ Exact |
| All variant conditions | `get_design_context` → conditional logic | ✅ Complete |
| Layout/spacing values | `get_design_context` → gap/inset classes | ✅ Exact |
| Brand and AI color values | `get_variable_defs` → resolved hex | ✅ Exact |
| Visual reference | `get_design_context` → screenshot | ✅ Full render |
| Playbook / design documentation | `get_design_context` → description field | ✅ Present |

### The Tailwind → SCSS/BEM translation

The MCP output is React + Tailwind. evo-web uses SCSS + BEM. The translation is
mechanical — every Tailwind class maps to a known CSS property. The agent performs
this automatically:

```
Tailwind class              →  SCSS equivalent
─────────────────────────────────────────────────────────────────
size-[32px]                 →  width: 32px; height: 32px;
rounded-[16px]              →  border-radius: 16px;
text-[#002a69]              →  color: #002a69;
text-[16px]                 →  font-size: 16px;
font-["Market_Sans:Bold"]   →  font-family: "Market Sans"; font-weight: 700;
bg-[var(--color-bg,#fff)]   →  background-color: var(--color-background-primary);
gap-[8px]                   →  gap: 8px;
inset-[4.17%]               →  inset: 4.17%;
leading-none                →  line-height: 1;
```

BEM structure is determined from the component hierarchy in the MCP output and
cross-referenced with the audit snapshot (`skin.bemBlocks`, `skin.bemElements`,
`skin.bemModifiers`) which already exists for all 50 current evo-web components.
For new components, the BEM structure is derived from the hierarchy.

### Known rendering artifact — double dashes in token names

The MCP renders CSS variable names with extra leading dashes:

```
Figma MCP output:   var(----color-background-primary, white)
Correct form:       var(--color-background-primary)
```

This is a consistent Figma MCP artifact — not a design error. The `/evo-style-component`
skill must normalize token names by stripping extra leading dashes before writing SCSS.
A single regex handles this: `s/var\(---+/var(--/g`.

---

## What Figma cannot provide

These four categories are outside the scope of static Figma design files.
They must come from other sources as noted.

| Gap | Why Figma cannot provide it | Source to fill it |
|---|---|---|
| **Hover / focus / active / pressed states** | Static design — no interaction layer | Contract (Accessibility Contract → States table) or a separate Figma interaction spec frame |
| **Dark mode token values** | Only light theme shown in this component set | Separate dark-mode Figma frame or the skin token system's dark aliases |
| **Motion / transition specs** | No animation data in the component | Contract or skin SCSS motion conventions (`--motion-duration-*`, `--motion-easing-*`) |
| **Multi-color initials backgrounds** | Figma shows one demo color; the hash algorithm is behavioral | Contract documents the algorithm; audit snapshot confirms the skin class names |

Of these four, only interactive states and dark mode are relevant for most components.
Motion and the color algorithm are handled by existing skin conventions and the
behavioral layer respectively — neither requires the Figma design to specify them.

---

## Generating new components vs. revising existing ones

### Generating a new component (no existing skin module)

The full visual specification is derived from Figma:
1. `get_design_context` → extract all sizes, colors, typography, layout
2. `get_variable_defs` → resolve all token values
3. Translate Tailwind → SCSS; establish BEM class names from hierarchy
4. Write `packages/skin/src/sass/<component>/<component>.scss` from scratch

### Revising an existing component (skin module exists)

The audit snapshot already contains the current SCSS structure:
1. `get_design_context` → compare against current implementation
2. Identify what changed: new size step, updated token, changed border-radius, etc.
3. Produce a diff — change only what changed, leave the rest intact
4. This is the primary use case for `/evo-style-component` in the PR 2 workflow

The audit snapshot (`audit-output/components/<name>.json`) acts as the baseline.
The Figma design is the target. The diff between them is the PR.

---

## Summary assessment

The Figma MCP provides everything needed to build the visual CSS layer of an evo-web
component from a design file, with real values — not visual approximations:

- **Sizing, radii, spacing:** exact pixel values for every variant and size step
- **Typography:** exact font family, weight, and size per variant
- **Colors:** both token names and their resolved hex values
- **All variants:** complete conditional logic across every type × size combination
- **Token normalization:** a trivial fix to a known rendering artifact
- **Documentation:** Playbook links and design descriptions included

The only values that genuinely require sources other than Figma are interactive
states and dark mode — both of which are design decisions that belong in the contract
or a separate interaction spec, not in the static component design.

**The `/evo-style-component` skill is viable as designed.** The Figma MCP provides
sufficient fidelity to generate the skin SCSS visual layer without any manual
measurement or guesswork.
