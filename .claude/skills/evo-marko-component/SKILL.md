---
name: evo-marko-component
description: >
  Generates the Marko 6 structural layer for a new evo-web component from an
  approved manifest.json. Produces index.marko (Marko 6 template), style.ts
  (skin CSS import), test/test.server.ts (SSR snapshot scaffold), and
  test/test.browser.ts (browser interaction scaffold, only for interactive
  components). Called inline by /evo-component as Step 4. Use this skill
  whenever the user says "generate the Marko layer", "create the Marko files
  from the manifest", "generate the evo-marko component", or when /evo-component
  delegates Step 4 to this skill. Do NOT confuse with /evo-migrate-marko which
  ports existing Marko 5 components — this skill generates new components from scratch.
---

# Marko 6 Generation from manifest.json

This skill translates a locked `manifest.json` into production-ready Marko 6
source files. All design decisions were made by the engineer during manifest
review. Your job is accurate translation, not interpretation.

**Output location:** `packages/evo-marko/src/tags/[component.name]/`

**Output files:**
- `index.marko` — Marko 6 single-file component (types + logic + template)
- `style.ts` — skin CSS import
- `test/test.server.ts` — SSR snapshot tests via vitest
- `test/test.browser.ts` — browser interaction tests (only if the manifest has
  events or keyboard behaviors)
- `util.ts` — standalone helper functions (only if behaviors require non-trivial
  logic that would clutter the template)

There is **no** `component.ts` and **no** `browser.json` in evo-marko — those
are Marko 5 patterns. Everything lives in `index.marko`.

---

## Step 1 — Check for scaffold files, then read the manifest

**Check for scaffold files first.** If the orchestrator ran `generate-component-scaffold.ts`
(Step 6.5), scaffold files already exist at the target paths. If they exist, read them
before proceeding — do not regenerate the deterministic parts they contain.

```
packages/evo-marko/src/tags/<name>/style.ts          — if present, it's complete (skip generation)
packages/evo-marko/src/tags/<name>/index.marko        — if present, read and complete the TODO sections only
packages/evo-marko/src/tags/<name>/test/test.server.ts — if present, it's complete (skip generation)
packages/evo-marko/src/tags/<name>/test/test.browser.ts — if present, add interaction test content only
```

When scaffold files exist, your job for those files is **completion, not generation**:
read the existing file, find the `// TODO:` sections, and fill them in. The Input interface,
BEM modifier names, ARIA attribute names, and test structure are already correct — do not
re-derive or overwrite them.

Read `src/routes/_index/components/[component-name]/manifest.json` in full. Note:

- `component.name` — kebab-case name (e.g. `evo-avatar`)
- `rootElement.default` — which HTML element to extend in the `Input` interface
- `rootElement.excludedAttributes` — which attributes to `Omit<>` from the spread
- `props` + `a11yProps` — Input interface prop definitions
- `slots` — named slots → `Marko.AttrTag<>` types
- `bem` — block/elements/modifiers → class array
- `a11y` — role, label strategy, aria attributes
- `behaviors` — custom logic (determines whether to create `util.ts`)
- `gaps` — medium-confidence fields become `// TODO: verify` inline comments

---

## Step 2 — Generate `index.marko`

Build the file in this order:

### Imports

Import utilities only if behaviors require them:
```marko
import { helperFunction } from "./util";
```
Import evo-icon tags via their tag name — Marko resolves them automatically.
No explicit import needed for `<evo-icon-*>` tags.

### Static types

Define compile-time constants and type guards with `static`:
```marko
static type Size = 32 | 40 | 48 | 56 | 64 | 96 | 128;
static export const validSizes = ["large", "small"] as const;
```

### Input interface

Translate manifest props into the TypeScript `Input` interface:

```marko
export interface Input extends Omit<Marko.HTML.Div, "role" | "aria-label"> {
    // from manifest.props[]
    size?: Size | `${Size}`;
    color?: string;
    // from manifest.a11yProps[]
    a11yText: string | null;
    // from manifest.slots[] where type === "named-attrtag"
    image?: Marko.AttrTag<Omit<Marko.HTML.Img, "alt">>;
    // default slot is via input.content — no type declaration needed
}
```

**Prop type mapping:**

| manifest `type`   | TypeScript type                             |
|-------------------|---------------------------------------------|
| `"string"`        | `string`                                    |
| `"number"`        | `number`                                    |
| `"boolean"`       | `boolean`                                   |
| `"enum"` + values | union of string literals                    |
| `"string \| null"` | `string \| null`                          |
| `"function"`      | `(event: Event) => void` or appropriate sig |

**Omit rules:** Only `Omit<>` attributes that the component hardcodes and must
not accept from consumers. Read `manifest.rootElement.excludedAttributes` for
the exact list.

**Slot mapping:**

| manifest slot `type`  | Input type                                  |
|-----------------------|---------------------------------------------|
| `"named-attrtag"`     | `Marko.AttrTag<Marko.HTML.Img>` etc         |
| `"default"`           | No declaration — accessed as `input.content` |

### Template body

**Destructure at the top, then compute:**
```marko
<const/{
    class: inputClass,
    size,
    color,
    image,
    content,
    a11yText = "default label",
    ...htmlInput
}=input>
```

Declare tag variables close to where they are first used (not all grouped at
the top), except variables needed in multiple distant locations.

**Root element with BEM and ARIA:**
```marko
<div
    ...htmlInput
    role="img"
    aria-label=(a11yText !== null ? a11yText : undefined)
    aria-hidden=(a11yText === null ? "true" : undefined)
    class=[
        "avatar",
        size && `avatar--${size}`,
        inputClass,
    ]>
```

**Translate `manifest.bem`:**
- Block: `manifest.bem.block` — always applied
- Elements: `manifest.bem.elements[]` — applied to child elements
- Modifiers: `manifest.bem.modifiers[]` — conditional expressions in the class array

**Translate `manifest.a11y.ariaAttributes[]`:**
Map each entry: if `condition === "always"` it's unconditional; otherwise it's
a conditional expression. The `manifest.a11y.labelStrategy` tells you how the
label is applied:
- `"aria-label-prop"` → `aria-label=a11yText`
- `"aria-labelledby"` → `<id/labelId>` on the label element, then `aria-labelledby=labelId`

**Rendering slots:**
```marko
// named slot: <@image src="..."> → rendered as:
<if=image>
    <img ...image alt=""/>
</if>

// default slot: content between component tags → rendered as:
<${content}/>
```

**State and two-way binding:**

Mutable state uses `<let/>`. If the manifest has a prop that consumers can
control externally (e.g., `open`), use two-way binding syntax:
```marko
<let/open:=input.open>
```
The `:=` creates a controllable prop — consumers can pass `open` and
`openChange` to control it, or leave it uncontrolled.

**Behaviors from `manifest.behaviors[]`:**

If a behavior is a deterministic pure function (e.g., `getColorForText`), put
it in `util.ts` and import it. If it's event-driven inline logic, write it
directly as an inline handler:
```marko
onLoad(_, el) {
    aspectRatio = el.naturalWidth / el.naturalHeight;
}
```

**ID generation:** Use `<id/>` for any element that needs a stable generated ID:
```marko
<id/headerId=input.id>
<h2 id=headerId .../>
```

**Medium-confidence gaps** (from `manifest.gaps` where `confidence === "medium"`):
Add a `// TODO: verify — [gap note]` comment next to the affected field.

---

## Step 3 — Generate `style.ts`

Always:
```ts
import "@ebay/skin/[manifest.bem.block]";
```

If the skin module name differs from the BEM block, check
`packages/skin/src/sass/` for the correct directory name.

---

## Step 4 — Generate `test/test.server.ts`

Scaffold SSR snapshot tests for each entry in `manifest.variants` and key
states from `manifest.states`. The tests import stories — write the story names
as they will exist (Default, plus one per variant).

```ts
import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../[name].stories";

const { Default, WithImage } = composeStories(stories);

describe("[component-name]", () => {
    it("renders defaults", async () => {
        await snapshotHTML(Default);
    });
    it("renders with image", async () => {
        await snapshotHTML(WithImage);
    });
});
```

---

## Step 5 — Generate `test/test.browser.ts` (conditional)

Only generate this file if `manifest.behaviors[]` contains event-driven
interactions, or if `manifest.keyboardModel` is present.

Use `@marko/testing-library` + vitest:

```ts
import { describe, it, expect, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../[name].stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

describe("[component-name]", () => {
    it("should render correctly", async () => {
        const { container } = await render(Default);
        expect(container.querySelector(".[bem-block]")).toBeTruthy();
    });

    // One describe("when...") + it("then...") block per behavior/keyboard interaction
});
```

---

## Critical Marko 6 syntax rules

**Tag variables — NOT scriptlets:**
```marko
// ✅ Marko 6
<const/{ class: inputClass, size, ...htmlInput }=input>
<let/aspectRatio=knownAspectRatio>

// ❌ Marko 5 — never use
$ const { class: inputClass } = input;
$ let aspectRatio = knownAspectRatio;
```

**Conditionals:**
```marko
// ✅ Marko 6
<if=condition>  <else-if=other>  <else>

// ❌ Marko 5
<if(condition)>  <else-if(other)>
```

**Events — inline, not string refs:**
```marko
// ✅ Marko 6
<button onClick(e) { input.onEscape?.(e); }>

// ❌ Marko 5
<button onClick("handleClick")>
```

**Attribute containing `>` — wrap in parens:**
```marko
// ✅ Required
<const/x=(a > b ? 1 : 0)>

// ❌ Parser error
<const/x=a > b ? 1 : 0>
```

**Slots — `content` not `renderBody`:**
```marko
// ✅ Marko 6
<${content}/>

// ❌ Marko 5
<${input.renderBody}/>
```

**No `component.ts`, no `browser.json`:** These do not exist in evo-marko.

---

## Output verification

After generating, confirm:
- `index.marko` exports an `Input` interface
- All manifest props and a11yProps are in the interface with correct types/optionality
- All named slots appear as `Marko.AttrTag<>` types
- BEM block class always applied to root element; modifiers conditional
- All `manifest.a11y.ariaAttributes[]` entries are present
- No `$ var`, `$ let`, `$ const` scriptlets; no `this.emit()`; no `renderBody`
- `style.ts` imports the correct skin module
- Tests reference story names that match `manifest.variants[]`

Report generated file paths to the orchestrator.
