---
name: evo-icon
description: >
  Icon pipeline for evo-web: add new icons, deprecate icons, or delete icons (major
  version only). Manages the full chain from SVG source through skin sprite assembly,
  evo-react component generation, evo-marko tag generation, and docs data.
  Use this whenever the user says "add an icon", "deprecate an icon", "delete an icon",
  "remove an icon", "new icon", or describes any icon asset work.
  Also invoked by /evo-component when a major version icon deletion requires
  framework layer removal.
---

# evo-icon

You manage icons across three layers: the SVG source in skin, auto-generated React
components in evo-react, and auto-generated Marko tags in evo-marko. The React and
Marko layers are entirely script-generated — you never edit those files manually.

## Step 1 — Parse the action

`$ARGUMENTS` format: `<action> <icon-name>` — e.g. `add add-24` or `deprecate cart-16`

| Action      | Meaning                                                   |
| ----------- | --------------------------------------------------------- |
| `add`       | Add a new SVG and regenerate all layers                   |
| `edit`      | Replace an existing SVG and regenerate                    |
| `deprecate` | Mark as deprecated in docs; keep in sprite and components |
| `delete`    | Remove permanently (major version only)                   |

If the issue says "rename", "replaced by", or "renamed to", treat this as **deprecate**
(not delete). The old icon is deprecated; the new name either already exists or is a
separate add action.

If `$ARGUMENTS` is empty or ambiguous, ask:

> "Which icon action? (add / edit / deprecate / delete) and what is the icon name?"

---

## Add or Edit

### Step 2a — Validate and place the SVG

**Naming convention** — strict, enforced by the build:

```
icon-{name}-{size}.svg           (monochrome)
icon-{name}-{size}-colored.svg   (multi-color)
```

Valid sizes: `12`, `16`, `18`, `20`, `24`, `30`, `32`, `40`, `48`, `64`

Examples: `icon-add-24.svg`, `icon-afterpay-32-colored.svg`

**SVG requirements:**

- Must have a `viewBox` attribute
- Must NOT have `width` or `height` attributes (the build strips them, but omitting is cleaner)
- Inner content should be optimized SVG paths — no `<title>`, no `id` on child elements
- `fill` and `stroke` should use `currentColor` where possible so the CSS color cascade works

Place the SVG at:

```
packages/skin/src/svg/icon/<icon-name>.svg
```

If this is an **edit** (replacing an existing icon), confirm the file exists before overwriting.

### Step 3a — Run the pipeline

Run these commands in order:

```bash
# 1. Rebuild skin sprite + update icons.json
cd packages/skin && npm run build:icons

# 2. Full skin build (compiles SCSS, copies dist/)
cd packages/skin && npm run build

# 3. Regenerate all React icon components (wipes + rewrites the entire icons/ dir)
cd packages/evo-react && npm run update-icons

# 4. Regenerate all Marko icon tags (wipes + rewrites all evo-icon-*.marko files)
cd packages/evo-marko && npm run importSVG
```

**Important:** Steps 3 and 4 wipe and regenerate the entire icon component directory.
Do not manually create or edit files in:

- `packages/evo-react/src/evo-icon/icons/`
- `packages/evo-marko/src/tags/evo-icon/tags/`

### Step 4a — Verify

After the pipeline completes:

1. **Sprite**: confirm `packages/skin/src/svg/icons.svg` contains a `<symbol id="<icon-name>">` entry
2. **Icons data**: confirm `src/data/icons.json` → `icons.list` contains the new icon
3. **React component**: confirm `packages/evo-react/src/evo-icon/icons/evo-icon-<name>.tsx` exists
4. **Marko tag**: confirm `packages/evo-marko/src/tags/evo-icon/tags/evo-icon-<name>.marko` exists
5. **CSS class**: the icon renders via `<svg class="icon icon--{size}">` — no per-icon CSS class needed
6. **Colored icons**: if the SVG is a `-colored` variant, verify it uses `icon--{size}-colored` class (`width: fit-content`)

### Step 5a — Usage reference

Generated components are consumed as:

**React:**

```tsx
import { EvoIconAdd24 } from "@evo-web/react/evo-icon-add-24";
// Component name: EvoIcon + PascalCase name (e.g. EvoIconAdd24, EvoIconAfterPay32Colored)
```

**Marko:**

```marko
<evo-icon-add-24/>
// Tag name: evo-icon-{name} (matches the filename exactly)
```

**Skin (HTML):**

```html
<svg class="icon icon--24" focusable="false">
  <use href="#icon-add-24" />
</svg>
```

---

## Deprecate

Deprecation hides an icon from the main docs grid and shows it in a "Deprecated Icons"
warning section. The icon remains in the sprite and in all generated framework components
until a future major-version deletion.

**Rename scenario:** if an issue says an icon was renamed or replaced, this is a two-part
operation — **add the new icon first** (using the full Add pipeline in Steps 2a–3a above),
then deprecate the old name using this Deprecate workflow. Do not skip the Add pipeline.
The Add pipeline (build:icons + update-icons + importSVG) is required to generate the
React and Marko components for the new icon name and to add it to the sprite.

### Step 2b — Update icons.json

Edit `src/data/icons.json`. Two fields must be updated:

**1. Add to `icons.deprecated`** (create the array if it is `null`):

The entry must be an **object** matching the same shape as entries in `icons.list` — all
values are **strings**, including `size`, `height`, and `width`. Copy the exact values
from the entry you are about to remove from `icons.list`:

```json
"deprecated": [
  { "name": "cart-old-16", "size": "16", "height": "16", "width": "16" }
]
```

This entry is used by the docs page to render the "Deprecated Icons" section with the
correct icon dimensions. If you put strings instead of objects, or numbers instead of
string values, the docs section will render blank.

**2. Add to `icons.skipDocs`**:

The value is the icon's **full name without the `icon-` prefix** — this includes the size
suffix. It matches the `name` field in `icons.list` exactly:

```json
"skipDocs": ["cart-old-16"]
```

`skipDocs` is what the build script actually uses to exclude the icon from `icons.list`.
The `deprecated` array check in `generate-images.ts` is unreliable for objects — always
use `skipDocs` to control list exclusion.

**Do NOT manually edit `icons.list`.** That field is fully auto-generated by
`build:icons` and any manual changes will be overwritten on the next run.

### Step 3b — Rebuild sprite

```bash
cd packages/skin && npm run build:icons
```

This re-reads `src/data/icons.json`, filters out `skipDocs` entries, and rebuilds
`icons.list`. The deprecated icon stays in `icons.svg` (the sprite) for backwards
compatibility — that is correct and intentional.

**Do NOT run `update-icons` or `importSVG`** for the deprecation step itself — the
deprecated icon must remain in the framework components. Removing it from generated code
is a breaking change reserved for the delete workflow.

If this is a rename (add + deprecate), you will have already run `update-icons` and
`importSVG` in the Add step. Do not run them again here — the framework components from
the Add step are already correct.

### Step 4b — Verify

- `src/data/icons.json` → `icons.deprecated` contains the full object entry with string values
- `src/data/icons.json` → `icons.skipDocs` contains the icon name
- `src/data/icons.json` → `icons.list` does NOT contain the icon (auto-removed by build script)
- `packages/skin/src/svg/icons.svg` DOES still contain `<symbol id="icon-<name>">` (correct — kept for compat)
- The docs page deprecated section will show the icon at runtime (reads from `icons.json`)

### Step 5b — Changeset

Create a changeset at `.changeset/<description>.md`. Use **minor** level — deprecation
is a consumer-visible API surface change signalling future removal:

```markdown
---
"@ebay/skin": minor
---

Deprecate `<icon-name>` icon; use `<replacement-name>` instead.
```

If there is no known replacement, omit the "use X instead" clause.

---

## Delete (major version only)

**This is a breaking change.** Consumers using the icon will get a build error. Only do
this as part of a planned major version release.

### Step 2c — Confirm major version context

Before proceeding, confirm with the engineer:

> "Deleting an icon is a breaking change that requires a major version bump.
> Is this part of a planned major release?"

Do not proceed until confirmed.

### Step 3c — Remove the SVG

Delete the file:

```
packages/skin/src/svg/icon/<icon-name>.svg
```

### Step 4c — Clean up icons.json

Edit `src/data/icons.json`:

- Remove the entry from `icons.deprecated` (if present)
- Remove the name from `icons.skipDocs` (if present)
- Remove the name from `icons.skip` (if present — some internal icons live here)

### Step 5c — Run the full pipeline

```bash
# 1. Rebuild sprite (removed SVG will be absent from icons.svg)
cd packages/skin && npm run build:icons

# 2. Full skin build
cd packages/skin && npm run build

# 3. Regenerate React components (deleted icon's .tsx will not be recreated)
cd packages/evo-react && npm run update-icons

# 4. Regenerate Marko tags (deleted icon's .marko will not be recreated)
cd packages/evo-marko && npm run importSVG
```

### Step 6c — Verify removal

1. `packages/skin/src/svg/icons.svg` does NOT contain a `<symbol id="<icon-name>">` entry
2. `src/data/icons.json` does NOT contain the icon anywhere
3. `packages/evo-react/src/evo-icon/icons/evo-icon-<name>.tsx` does NOT exist
4. `packages/evo-marko/src/tags/evo-icon/tags/evo-icon-<name>.marko` does NOT exist
5. Run `npm run build` from the repo root — the build must pass

### Step 7c — Migration note

Surface a migration note for the engineer to include in the changeset:

```
BREAKING: icon-{name} has been removed.
Consumers using EvoIcon{Name} (React) or <evo-icon-{name}/> (Marko) or
<use href="#icon-{name}"/> (HTML) must update to an alternative icon.
```

---

## Key system facts

- **React and Marko icon files are 100% auto-generated.** Never edit them manually.
  The scripts wipe and recreate the entire icons directory on every run.

- **One SVG → one sprite symbol → one React component → one Marko tag.**
  The name `icon-add-24.svg` produces `<symbol id="icon-add-24">`, `EvoIconAdd24`, and `<evo-icon-add-24/>`.

- **No per-icon CSS.** Icons render using the shared `svg.icon` block and size modifiers
  (`icon--24`, `icon--32-colored`). Color inherits from `currentColor`.

- **Colored icons** use `width: fit-content` (aspect-ratio-variable). The CSS class suffix
  is `-colored` (e.g. `icon--32-colored`).

- **`skipDocs`** hides an icon from the public docs grid but keeps it in the sprite and
  framework components. The value is the full icon name without the `icon-` prefix
  (e.g. `"bank-group-logo-24-colored"`, NOT `"bank-group-logo"`).

- **`deprecated`** controls the "Deprecated Icons" docs section. Must be an array of
  objects matching `icons.list` shape — all string values.

- **`skip`** prevents the SVG from entering the sprite at all (star-rating, flags, etc.
  have separate pipelines).

- **`icons.list` is fully auto-generated** by `build:icons`. Never edit it by hand.
