---
name: evo-testing
description: Write, extend, or review tests for ebayui-core (Marko) and ebayui-core-react in the evo-web monorepo using Testing Library and Storybook interactions, aligned with WCAG 2.2 A/AA. Use this skill whenever the user asks for component tests, accessibility tests, Storybook play functions, keyboard or focus coverage, ARIA assertions, a test plan for an ebay-* component, or help avoiding duplicate or undocumented a11y tests. Also use for flaky test diagnosis, given/when/then structure, or splitting simple vs complex interaction coverage.
---

# Evo-Web component testing (Marko + React)

You are helping write thorough unit and end-to-end (Storybook interaction) tests for **@ebay/ebayui-core** and **@ebay/ebayui-core-react**. Other packages (@evo-web/react, @evo-web/marko) may mirror these patterns where present; default to the paths below for the two main libraries.

**Standard:** WCAG 2.2 levels A and AA. Prefer what the component’s accessibility doc promises over inventing new ARIA contracts.

**Naming:** Components use the `ebay-` prefix on disk. Documentation URLs omit it (e.g. `ebay-button` → `button`).

## Documentation (read before testing)

For component `{component}` (URL segment without `ebay-`):

- Overview: `https://opensource.ebay.com/evo-web/components/{component}`
- Accessibility: `https://opensource.ebay.com/evo-web/components/{component}/accessibility`
- CSS: `https://opensource.ebay.com/evo-web/components/{component}/css`

## Where tests live

**Marko (ebayui-core)**

- Browser / interaction: `packages/ebayui-core/src/components/ebay-{component}/test/test.browser.js`
- SSR: `.../test/test.server.js`
- Stories (for `play` interaction tests): `.../{component}.stories.ts`

**React (ebayui-core-react)**

- Unit / integration: `packages/ebayui-core-react/src/ebay-{component}/__tests__/*.spec.tsx`
- Stories (for `play` interaction tests): `.../__tests__/index.stories.tsx` (and other `*.stories.tsx` in that folder)

**Commands:** See the `evo-commands` skill for `npx vitest run ...` and workspace-scoped npm scripts.

## Test categories (group and label tests this way)

1. **Click interactions**
2. **Keyboard interactions**
3. **Focus management**
4. **ARIA attributes** (only what docs / implemented behavior specify)

Include **disabled** (or non-interactive) states when the component supports them.

## Simple vs complex interactions

- **Unit / simple:** One action → one outcome (e.g. key press → state or event). Keep in `test.browser.js` or `*.spec.tsx`.
- **E2E / complex:** Multiple steps (e.g. open dialog → assert focus target). Prefer Storybook **`play`** functions: [Storybook interaction testing](https://storybook.js.org/docs/writing-tests/interaction-testing).

### Marko simple example (Vitest browser + `@marko/testing-library`)

```javascript
describe("when Space key is pressed", () => {
  beforeEach(async () => {
    const checkbox = component.getByRole("checkbox");
    checkbox.focus();
    await userEvent.keyboard(" ");
  });

  it("then it toggles to checked state", () => {
    expect(component.getByRole("checkbox")).toBeChecked();
  });

  it("then it emits change event", () => {
    const changeEvents = component.emitted("change");
    expect(changeEvents).has.length(1);

    const [[changeEvent]] = changeEvents;
    expect(changeEvent).has.property("checked", true);
  });
});
```

### Marko complex example (nested given/when/then)

```javascript
describe("given disabled checkbox is initially checked", () => {
  beforeEach(async () => {
    component = await render(Disabled, {
      checked: true,
    });
  });

  it("then it renders in checked state", () => {
    expect(component.getByRole("checkbox")).has.property("checked", true);
  });

  describe("when checkbox is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByRole("checkbox"));
    });

    it("then it remains checked", () => {
      expect(component.getByRole("checkbox")).has.property("checked", true);
    });

    it("then it does not emit change event", () => {
      expect(component.emitted("change")).has.length(0);
    });
  });
});
```

## Workflow

### Analysis

1. Read overview, accessibility, and CSS docs for the component.
2. Infer **Marko vs React** from path (`packages/ebayui-core/...` vs `packages/ebayui-core-react/...`).
3. Read existing tests in that component’s `test/` or `__tests__/` to **avoid duplication**.
4. Produce a short **test plan** split into unit vs Storybook interaction tests. If repeated scenarios apply across many variants, plan a **shared helper** (colocated module or existing `common/test-utils` patterns)—do not assume a `storybook-tests/` root unless you confirm it exists in the repo.

#### Test Plan Format

Structure the **test plan** as follows:

```markdown
# Test Plan for {component}

## Existing Tests

Overview of the existing tests and their purpose.

## Marko Browser Tests

List the test cases to be created, use given/when/then language, group by test focus.

## React Browser Tests

List the test cases to be created, use given/when/then language, group by test focus.

## Interaction Tests

List the test cases to be created, use given/when/then language, group by test focus and steps.

## Clarifying Questions

Ask questions about any tests or requirements that there is low confidence about.
```

### Generation

1. **Marko a11y-focused browser tests:** add accessibility tests to `test.browser.js` and group according to test focus.
2. **React a11y-focused tests:** add accessibility tests to `*.spec.tsx` and group according to test focus.
3. **Storybook plays:** Marko → `ebay-{component}.stories.ts` (or the component’s `*.stories.ts`). React → `__tests__/index.stories.tsx` (or colocated stories).
4. Organize by Click / Keyboard / Focus / ARIA.
5. Use **`beforeEach`** for nested setup (given/when/then).
6. Prefer **`userEvent`** from `@testing-library/user-event` (or `vitest/browser` where the existing file already does) over ad-hoc `pressKey` helpers.

## Constraints

- Do not duplicate tests already covered in the same framework for that component.
- Do not assert ARIA or keyboard behavior that is **not** documented or clearly implemented—tie tests to the accessibility page and real markup.

## Examples by type

### Keyboard — React unit

```javascript
describe("when Enter key is pressed", () => {
  beforeEach(async () => {
    const button = screen.getByRole("button");
    button.focus();
    await user.keyboard("{Enter}");
  });

  it("then it emits click event", () => {
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
```

### Keyboard — Storybook `play`

```typescript
Default.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");

  await step("Test keyboard interaction - Enter key", async () => {
    button.focus();
    await userEvent.keyboard("{Enter}");
    await expect(button).toHaveFocus();
  });
};
```

### Focus — Marko unit

```javascript
describe("when button receives focus", () => {
  beforeEach(async () => {
    const button = component.getByRole("button");
    button.focus();
  });

  it("then button has focus", () => {
    const button = component.getByRole("button");
    expect(document.activeElement).toBe(button);
  });

  it("then it emits focus event", () => {
    const focusEvents = component.emitted("focus");
    expect(focusEvents).has.length(1);

    const [[focusEvent]] = focusEvents;
    expect(focusEvent).has.property("originalEvent").is.an.instanceOf(Event);
  });
});
```

### Focus — Storybook `play`

```typescript
Default.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");

  await step("Test focus management", async () => {
    await userEvent.click(button);
    await expect(button).toHaveFocus();

    await userEvent.keyboard("{Tab}");
    await expect(button).not.toHaveFocus();
  });
};
```

### ARIA — Marko unit

```javascript
describe("given a standard button", () => {
  beforeEach(async () => {
    component = await render(template, {
      renderBody: "Standard button",
    });
  });

  it("then it has correct role", () => {
    const button = component.getByRole("button");
    expect(button).toBeTruthy();
  });
});
```

### ARIA — Storybook `play`

```typescript
LoadingState.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");

  await step("Verify loading state and aria-label", async () => {
    await expect(button).toHaveAttribute("aria-label", "Loading, please wait");

    const spinner = button.querySelector(".progress-spinner");
    await expect(spinner).toBeInTheDocument();
  });

  await step("Test button is still interactive in loading state", async () => {
    button.focus();
    await expect(button).toHaveFocus();
  });
};
```

## Story / locator naming

Story exports may not be `Default`. Open the component’s `*.stories.ts` and use the **actual story names** when attaching `play` or selecting canvases.
