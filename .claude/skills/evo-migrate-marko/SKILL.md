---
name: evo-migrate-marko
description: Migrate a component from @ebay/ebayui-core (Marko 5) to @evo-web/marko (Marko 6). Receives the ebayui-core component name as the argument (e.g. /evo-migrate-marko ebay-button).
---

# Migrate ebayui-core (Marko 5) to evo-marko (Marko 6)

You are migrating `$ARGUMENTS` from `packages/ebayui-core/src/components/$ARGUMENTS/` to a new `packages/evo-marko/src/tags/evo-${ARGUMENTS#ebay-}/` directory.

This is an ACTIVE PROCESS, before making any decision you should consult with the user. Especially important for user-facing decisions like APIs.

`evo-marko` is expected to have breaking changes from `ebayui-core`. If something seems unnecessary or could be simplified at the API level talk to the user about pruning it.

## Step 0 --- Read before writing

1. Read **every file** in `packages/ebayui-core/src/components/$ARGUMENTS/` including:
   - `index.marko` (template)
   - `component.ts` or `component-browser.ts` (JS class)
   - `style.ts` (Skin CSS imports)
   - `marko-tag.json` (attribute definitions)
   - All files in `examples/` subdirectory
2. Read **2--3 already-migrated evo-marko components** of similar complexity for reference patterns:
   - Simple (no JS): `packages/evo-marko/src/tags/evo-signal/index.marko`
   - Simple (with events): `packages/evo-marko/src/tags/evo-switch/index.marko`
   - Medium (floating label + state): `packages/evo-marko/src/tags/evo-textbox/index.marko`
   - Complex (roving tabindex + children): `packages/evo-marko/src/tags/evo-tabs/index.marko`
   - Complex (floating UI positioning): `packages/evo-marko/src/tags/evo-tooltip/index.marko`
3. If the Marko 5 component uses shared base classes or utilities from `src/common/`, read those too.
4. If the Marko 5 component uses `makeup-*` libraries, check whether an evo-marko headless replacement exists:
   - `makeup-roving-tabindex` / `makeup-active-descendant` -> `<evo-roving-tabindex>` (in `src/tags/tags/`)
   - `makeup-expander` + `@floating-ui/dom` -> `<evo-expander>` (in `src/tags/tags/`)
   - `makeup-floating-label` -> `<evo-floating-label>` (in `src/tags/tags/`)
   - `makeup-typeahead` -> `<evo-typeahead>` (in `src/tags/tags/`)

---

## Naming conventions

| ebayui-core (Marko 5)         | evo-marko (Marko 6)            |
| ----------------------------- | ------------------------------ |
| `ebay-button` (dir)           | `evo-button` (dir)             |
| `src/components/ebay-*`       | `src/tags/evo-*`               |
| `<ebay-button>`               | `<evo-button>`                 |
| `<ebay-chevron-down-12-icon>` | `<evo-icon-chevron-down-12>`   |
| `component-browser.ts`        | _(none -- inline in template)_ |
| `component.ts`                | _(none -- inline in template)_ |
| `marko-tag.json`              | _(none -- types in template)_  |
| `browser.json`                | _(none -- not used)_           |

---

## File structure

```
packages/evo-marko/src/tags/evo-{name}/
  index.marko           <-- single-file component (template + types + logic)
  style.ts              <-- Skin CSS imports (same as Marko 5)
  README.md             <-- component docs
  {name}.stories.ts     <-- Storybook stories
  examples/
    default.marko       <-- minimal usage example
    *.marko             <-- additional examples
  test/
    test.browser.ts     <-- browser interaction tests
    test.server.ts      <-- SSR snapshot tests
```

**Key difference from ebayui-core:** Everything lives in `index.marko`. There is no separate `component.ts`, `component-browser.ts`, or `marko-tag.json`.

---

## Template syntax migration rules

These are the critical Marko 5 -> Marko 6 syntax transformations. Apply them systematically.

### Scriptlets -> Tag variables

```marko
// Marko 5 -- $ scriptlet
$ const { class: inputClass, size, ...htmlInput } = input;
$ var isLarge = size === "large";

// Marko 6 -- <const/> and <let/> tags
<const/{ class: inputClass, size, ...htmlInput }=input>
<const/isLarge=(size === "large")>
```

Use `<const/>` for immutable values, `<let/>` for mutable state.

### Conditionals

```marko
// Marko 5
<if(condition)>
  ...
</if>
<else-if(condition)>
  ...
</else-if>
<else>...</else>
// Marko 6
<if=condition>
  ...
</if>
<else-if=condition>
  ...
</else-if>
<else>...</else>
```

### Type declarations and Input interface

```marko
// Marko 5 -- static block + WithNormalizedProps wrapper
import type { WithNormalizedProps } from "../../global";
static {
  interface SomeInput extends Omit<Marko.HTML.Span, `on${string}`> {
    "my-prop"?: string;
    "on-change"?: (e: SomeEvent) => void;
  }
}
export interface Input extends WithNormalizedProps<SomeInput> {}
// Marko 6 -- direct export, camelCase props, no event stripping
export interface Input extends Marko.HTML.Span {
  myProp?: string;
}
```

Key changes:

- **Remove `WithNormalizedProps`** -- Marko 6 does not need it.
- **Remove `Omit<..., 'on${string}'>`** -- Marko 6 handles events natively via spread.
- **Remove custom `on-*` event props** from the interface -- consumers bind native DOM events directly or use two-way binding callbacks (e.g., `valueChange`, `openChange`, `indexChange`).
- **Use camelCase** for all prop names (not kebab-case).
- **Use `Marko.HTML.*`** for element types -- e.g., `Marko.HTML.H2`, `Marko.HTML.Div`, `Marko.HTML.Button`. Do **not** use `Marko.Input<"h2">` or `Marko.Input<"div">`.
- **Omit only props the component hardcodes** (e.g., `Omit<Marko.HTML.Input, "type" | "role">`).

### HTML attribute pass-through

```marko
// Marko 5 -- processHtmlAttributes helper
import { processHtmlAttributes } from "../../common/html-attributes";
<div ...processHtmlAttributes(htmlInput)>

// Marko 6 -- native spread (no helper needed)
<div ...htmlInput>
```

**Drop the `processHtmlAttributes` import entirely.** Marko 6 handles attribute normalization natively.

### Event handling

```marko
// Marko 5 -- string handler refs + component class
<button onClick("handleClick") onKeydown("handleKeydown")>
// In component-browser.ts:
handleClick(originalEvent: MouseEvent) {
    this.emit("click", { originalEvent });
}

// Marko 6 -- inline handlers or native pass-through
// Option A: pure pass-through (preferred for simple components)
<button ...htmlInput>  // onChange, onClick etc. come through the spread

// Option B: intercept + forward (when component needs to react)
<button
    onClick(e, el) {
        // component logic here
        onClick && onClick(e, el);
    }>
```

**Eliminate custom event wrapping.** In Marko 5, events are wrapped in `{ originalEvent, value, checked }` objects via `this.emit()`. In Marko 6, pass native DOM events through directly. Consumers bind native handlers (`onChange`, `onClick`, etc.).

### State management

```marko
// Marko 5 -- class-based state
// In component.ts:
interface State { selectedIndex: number; }
class Foo extends Marko.Component<Input, State> {
    onCreate() { this.state = { selectedIndex: 0 }; }
    onInput(input: Input) { this.state.selectedIndex = findIndex(input); }
}
// In index.marko:
<div hidden=!state.selectedIndex>

// Marko 6 -- reactive <let/> tags with two-way binding
<let/selectedIndex:=input.selectedIndex>  // two-way bindable from parent
<div hidden=!selectedIndex>
```

The `:=` syntax creates two-way binding. The parent can pass `selectedIndex` and `selectedIndexChange` to control the value, or leave it uncontrolled. This replaces the Marko 5 pattern of `onInput` + `state` + `this.emit("event")`.

### ID generation

```marko
// Marko 5 -- component.getElId() or id:scoped
$ var id = input.id || component.getElId("textbox");
<div id:scoped=`panel-${i}`>

// Marko 6 -- <id/> tag
<id/textboxId=input.id>  // uses input.id if provided, otherwise auto-generates
<id/panelId>
<div id=`${panelId}-${i}`>
```

### Element refs

```marko
// Marko 5 -- key + this.getEl()
<div key="menu">
// In component.ts:
this.getEl("menu") as HTMLElement

// Marko 6 -- tag variable on element
<div/$menuEl>
// Reference directly as $menuEl in template or <script> blocks
```

### Lifecycle hooks -> `<script>` blocks

```marko
// Marko 5 -- component lifecycle
class {
  onMount() {
    this._setup();
  }
  onUpdate() {
    this._setup();
  }
  onDestroy() {
    this._cleanup();
  }
}
// Marko 6 -- <script> with $signal for cleanup
// WARNING: `<script>` should be used _very rarely_, usually `<let>`/`<const>` or other Marko features are better
script --
  // runs on mount and re-runs on dependency changes
  setupSomething();
  $signal.onabort = () => {
    cleanupSomething();
  };
```

`<script>` blocks run client-side. `$signal` is an `AbortSignal` that fires when the effect re-runs or the component unmounts. Use it for cleanup.

### renderBody -> content

```marko
// Marko 5
<${input.renderBody}/>
<${tab.renderBody}/>
// Marko 6
<${input.content}/>
<${tab.content}/>
```

In Marko 6, the body of an attribute tag is accessed via `.content` (not `.renderBody`). For the root component body, it's `input.content`. For self-closing elements that should render their children, use spread: `<span ...htmlInput/>` -- this passes `content` through automatically.

### MakeupJS library replacement

Replace imperative MakeupJS usage with declarative evo-marko headless components:

#### Roving tabindex

```marko
// Marko 5 -- imperative makeup-roving-tabindex
// component.ts:
import { createLinear } from "makeup-roving-tabindex";
onMount() {
    this.rovingTabindex = createLinear(this.getEl("tabs"), ".tabs__item", {
        index: state.selectedIndex, wrap: true,
    });
}
onDestroy() { this.rovingTabindex.destroy(); }

// Marko 6 -- declarative <evo-roving-tabindex>
<evo-roving-tabindex/rovingTabIndex
    autoSelect=activation === "auto"
    nodeList=$item
    selected:=index/>
// Use in template:
<div/$item
    onClick(e, target) { rovingTabIndex.onClick(i); }
    onKeyDown(e, target) { rovingTabIndex.onKeyDown(e); }
    tabindex=(rovingTabIndex.isFocused(i) ? 0 : -1)>
```

The `<evo-roving-tabindex>` tag variable exposes: `onClick(index)`, `onKeyDown(event)`, `isFocused(index)`, `setFocusIndex(index)`.

#### Floating UI positioning (tooltips, popovers)

```marko
// Marko 5 -- imperative with makeup-expander + @floating-ui/dom
// Spread across component.ts + ebay-tooltip-base
// Marko 6 -- declarative <evo-expander>
<evo-expander/expander
  open=open
  placement=placement
  offset=offset
  flip=flip
  shift=shift
  inline=inline
  strategy="absolute"
  host=$host
  overlay=$overlay
  arrow=$arrow/>
<input/$host>
<span/$overlay style=expander.floatingStyles>
  <span/$arrow style=expander.arrowStyles/>
</span>
```

The `<evo-expander>` tag variable exposes: `floatingStyles`, `arrowStyles`, `ariaExpanded`.

### Custom event emission -> controllable pattern

```marko
// Marko 5 -- this.emit pattern
this.emit("select", { selectedIndex })
// Consumer: <ebay-tabs on-select("handler")>
// Marko 6 -- callback prop + controllable pattern
// In component: the <let/:=> handles this automatically
let/index:=input.index
// Consumer: <evo-tabs index:=myIndex>
// Or: <evo-tabs index=5 indexChange=handleChange>
```

The naming convention for change callbacks is `{propName}Change` (e.g., `indexChange`, `openChange`, `valueChange`).

### `static` blocks

```marko
// Marko 5 -- compile-time code in static blocks
static var validSizes = ["large", "small"] as const;
static function isGroup(v) {
  return !!v.optgroup;
}
// Marko 6 -- same syntax, still works
static function isGroup(v: Option | OptGroup): v is OptGroup {
  return !!v.optgroup;
}
```

`static` blocks work the same way in Marko 6. Use them for compile-time constants and type guard functions.

### toJSON hack removal

```marko
// Marko 5 -- prevents serialization bugs
static function noop() {}
$ (input as any).toJSON = noop;
// Marko 6 -- not needed, remove entirely
```

### `<subscribe>` tag removal

```marko
// Marko 5 -- global event listener
<subscribe to=document on-keydown("handleKeydown")/>
// Marko 6 -- use <script> block with addEventListener
<script>
  document.addEventListener("keydown", handleEscape, {
    signal: $signal,
  });
</script>
```

### Polymorphic elements -> `<define>` pattern

When a Marko 5 component uses a dynamic tag to switch between element types (e.g., `<a>` vs `<button>`), replace it with a `<define>` block in Marko 6. The `<define>` should **own all branch-specific attributes**, and the call site should only pass shared attributes.

```marko
// Marko 5 -- dynamic tag with isButton guards everywhere
$ var isButton = type === "button";
<${isButton ? "button" : "a"}
  ...htmlItem
  class="my-item"
  disabled=isButton && disabled
  aria-disabled=!isButton && disabled && "true"
  href=!isButton && href
  type=isButton && type>
  ...
</>
// Marko 6 -- <define> with branch-specific attributes inside each branch
<define/ItemTag|itemInput: Item|>
  <const/{ type, disabled, href, ...rest }=itemInput>
  <if=type === "button" || type === "submit">
    <button ...rest as Marko.HTML.Button type=type disabled=disabled/>
  </if>
  <else>
    <a
      ...rest as Marko.HTML.A
      href=(disabled ? undefined : href)
      aria-disabled=disabled && "true"/>
  </else>
</define>
// Call site is clean -- only shared attributes
<ItemTag ...htmlItem class="my-item" aria-current=ariaCurrent>
  ...
</ItemTag>
```

Key principles:

- **Each branch owns its element-specific attributes.** `type` and `disabled` only appear on `<button>`, `href` and `aria-disabled` only on `<a>`. This eliminates `isButton`-style guards from the call site entirely.
- **Destructure branch-specific props inside the `<define>`**, spread the rest onto the element, and cast with `as Marko.HTML.Button` / `as Marko.HTML.A`.
- See `evo-filter-chip/index.marko` for a production reference of this pattern.

---

## Attribute tags (`@tag`)

In Marko 5, attribute tags like `@option`, `@item`, `@panel` are defined in `marko-tag.json`. In Marko 6, they're defined as TypeScript types in the `Input` interface.

```marko
// Marko 5 marko-tag.json:
// "@item <item>[]": { "text": "string", "value": "string" }
// Marko 6 Input interface:
export interface Item extends Marko.HTML.Div {
  panel?: Marko.AttrTag<Marko.HTML.Div>; // nested attr tag
}
export interface Input extends Marko.HTML.Div {
  item?: Marko.AttrTag<Item>; // repeatable attr tag (iterable)
  tab?: Marko.AttrTag<Tab>;
}
```

Consumer usage is the same: `<@item>content</@item>`.

For polymorphic content (host/heading that can be a different tag), use:

```marko
export interface Input extends Marko.HTML.Span {
  host: Marko.AttrTag<Marko.HTML.Span & { as?: Marko.Renderable }>;
}
// Usage in template:
<const/{ as: hostAs = "span", class: hostClass, ...htmlHost }=host>
<${hostAs} ...htmlHost class=["tooltip__host", hostClass]/>
```

---

## Style

`style.ts` is identical between Marko 5 and Marko 6. Copy it directly.

---

## Storybook stories

The items in the storybook for eBayUI should not be trusted fully. Table keys should be generated FIRST from the TS `Input` definition and only descriptions should be pulled from Marko 5.

### Pattern differences

| Aspect            | Marko 5 (ebayui-core)                  | Marko 6 (evo-marko)                                       |
| ----------------- | -------------------------------------- | --------------------------------------------------------- |
| Story creation    | Manual `Story<Input>` + `.bind({})`    | `buildExtensionTemplate(Template, Code, args?)`           |
| Code source       | `tagToString()` or `?raw` import       | Always `?raw` import via `buildExtensionTemplate`         |
| Meta typing       | Untyped `export default { }`           | `export default { } satisfies Meta<Input>`                |
| Input type import | From `./component-browser`             | From `./index.marko`                                      |
| Event argTypes    | Explicit `action: "on-change"` entries | Omitted -- native events documented via pass-through note |
| Story boilerplate | ~10--15 lines per story                | 1--3 lines per story                                      |

### Template

```ts
import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";

export default {
    title: "category/evo-{name}",
    component: Component,
    parameters: {
        docs: {
            description: { component: Readme },
        },
    },
    argTypes: {
        // Custom props with controls
        myProp: {
            type: "string",
            control: "text",
            description: "Description of prop",
        },
        // Attribute tags with attributes
        myAttrTag: {
            description: "Attr tag",
            "@": {
                /* nested argTypes */
            }
        }
        // controllable two-way bound props
        value: {
            controllable: true,
            type: "string",
            control: "text",
            description: "The current value",
        },
        // Pass-through HTML attributes note
        ["<element> attributes" as any]: {
            description: "All attributes and event handlers from [the native HTML `<element>` tag](...) will be passed through",
        },
    },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
```

### Example files

Each example `.marko` file should be a minimal self-contained usage:

```marko
// examples/default.marko
<evo-{name} ...input/>
```

```marko
// examples/with-label.marko
<span class="field">
  <label class="field__label field__label--start" for="my-id">
    Label
  </label>
  <evo-{name} ...input id="my-id"/>
</span>
```

Do not move all examples from Marko 5, start with `default.marko` and `controllable.marko` and only add new ones as necessary to be mostly comprehensive.

---

## Test patterns

### Browser tests -- `test/test.browser.ts`

```ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../{name}.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-{name}", () => {
  beforeEach(async () => {
    component = await render(Default);
  });

  it("should render correctly", () => {
    expect(component.getByRole("...")).toBeTruthy();
  });
});
```

### Server tests -- `test/test.server.ts`

```ts
import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../{name}.stories";

const { Default, Disabled } = composeStories(stories);

describe("evo-{name} SSR", () => {
  it("renders default", async () => {
    await snapshotHTML(Default);
  });
  it("renders disabled", async () => {
    await snapshotHTML(Disabled);
  });
});
```

### Key differences from Marko 5 tests

- File extension: `.js` -> `.ts`
- Remove `testPassThroughAttributes` calls -- Marko 6 handles this natively
- Replace `snapshotHTML(__dirname)` factory with direct `snapshotHTML(story)` calls
- Remove `component-browser` imports and renderer patching
- `@marko/testing-library` API (`render`, `fireEvent`, `cleanup`, `emitted`) is unchanged

---

## Prop audit -- align with Marko 5 and simplify

Before finalizing the `Input` interface, compare the Marko 5 props:

1. **Remove event wrapper props** -- `"on-change"`, `"on-select"`, etc. are replaced by native DOM events or two-way binding callbacks.
2. **Remove framework workarounds** -- `toJSON`, `processHtmlAttributes`, `WithNormalizedProps` are not needed.
3. **Convert kebab-case to camelCase** -- `"input-size"` -> `inputSize`, `"floating-label"` -> `floatingLabel`.
4. **Simplify boolean semantics** -- convert negative booleans to positive where appropriate (see table above).
5. **Add `a11yText` prop** if the component needs an accessible label and the Marko 5 version used `aria-label`. Use the pattern:
   ```marko
   export interface Input extends Marko.HTML.Span {
       a11yText: string | null;
   }
   <span aria-label=a11yText ...htmlInput>
   ```
6. **If uncertain about a prop**, stop and ask before proceeding.

---

## Checklist before finishing

- [ ] Single `index.marko` file -- no separate `component.ts` or `component-browser.ts`
- [ ] No `marko-tag.json` -- all types in `export interface Input`
- [ ] No `processHtmlAttributes` -- native spread with `...htmlInput`
- [ ] No `WithNormalizedProps` wrapper
- [ ] No `Omit<..., 'on${string}'>` -- Marko 6 handles events natively
- [ ] No `this.emit()` -- use two-way binding (`:=`) or native event pass-through
- [ ] No `this.state` / `this.getEl()` / `component.getElId()` -- use `<let/>`, `<div/$ref>`, `<id/>`
- [ ] No `$ var` scriptlets -- use `<const/>` and `<let/>`
- [ ] No dynamic tags for polymorphic elements -- use `<define>` with branch-specific attributes
- [ ] `<if(...)>` converted to `<if=...>`
- [ ] `renderBody` references converted to `content`
- [ ] MakeupJS libraries replaced with evo headless components where available
- [ ] `toJSON` hacks removed
- [ ] Props are camelCase (not kebab-case)
- [ ] `style.ts` copied (identical content)
- [ ] Icon tags renamed: `<ebay-*-icon>` -> `<evo-icon-*>`
- [ ] Stories use `buildExtensionTemplate()` + `satisfies Meta<Input>`
- [ ] Tests use `.ts` extension, no `testPassThroughAttributes`, direct `snapshotHTML()` calls
- [ ] Examples in `examples/` directory with `default.marko`
- [ ] `npm run build -w packages/evo-marko` passes
