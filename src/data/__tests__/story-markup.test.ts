import { describe, expect, it } from "vitest";

import {
  buildStoryMarkup,
  getStoryHtml,
  getStorybookUrl,
  type DiscoveredStoryModule,
} from "../story-markup";

function story(
  relativePath: string,
  title: string | undefined,
  exports: Record<string, unknown>,
): DiscoveredStoryModule {
  return {
    relativePath,
    mod: { default: title === undefined ? {} : { title }, ...exports },
  };
}

describe("buildStoryMarkup", () => {
  it("extracts html and storybookId for every export, keyed by component directory", () => {
    const result = buildStoryMarkup([
      story("example/stories/example.stories.js", "Skin/Example", {
        base: () => `<div class="example">base</div>`,
        withModifier: () => `<div class="example example--mod">mod</div>`,
      }),
    ]);

    // Title "Skin/Example" strips down to exactly the component key
    // ("example"), so the variant key is just the bare export name, the
    // common case for a single-story-file component.
    expect(result).toEqual({
      example: {
        base: {
          html: `<div class="example">base</div>`,
          storybookId: "skin-example--base",
        },
        withModifier: {
          html: `<div class="example example--mod">mod</div>`,
          storybookId: "skin-example--with-modifier",
        },
      },
    });
  });

  // Pins our use of Storybook's own toId/storyNameFromExport, not Storybook's
  // algorithm itself. Literal IDs cross-checked against a real `storybook build`.
  it.each([
    ["Skin/Accordion", "autoCollapse", "skin-accordion--auto-collapse"],
    // Acronym boundary: "RTLLarge" splits to "RTL Large", not "R T L Large".
    ["Skin/Eek", "RTLLarge", "skin-eek--rtl-large"],
    [
      "Skin/Section Notice/Base",
      "dismissAndLinkCTALongAnchor",
      "skin-section-notice-base--dismiss-and-link-cta-long-anchor",
    ],
  ])(
    "derives the Storybook ID for title=%s export=%s as %s",
    (title, exportName, expected) => {
      const result = buildStoryMarkup([
        story("any/stories/any.stories.js", title, { [exportName]: () => "" }),
      ]);

      expect(Object.values(result.any)[0].storybookId).toBe(expected);
    },
  );

  it("strips <script> tags, since a script written for Storybook's single-story preview (e.g. Dialog's showModal() on load) executes verbatim when rendered into a docs page via raw HTML interpolation, which can run before its own preceding sibling element exists", () => {
    const result = buildStoryMarkup([
      story("dialog-like/stories/dialog-like.stories.js", "Skin/Dialog Like", {
        base: () =>
          `<script>document.querySelector(".dialog-like").showModal()</script><dialog class="dialog-like">content</dialog>`,
      }),
    ]);

    expect(result["dialog-like"].base.html).toBe(
      `<dialog class="dialog-like">content</dialog>`,
    );
  });

  it("throws when a story renders different HTML on each call, since the extracted markup would change on every build", () => {
    let calls = 0;

    expect(() =>
      buildStoryMarkup([
        story("flaky/stories/flaky.stories.js", "Skin/Flaky", {
          base: () => `<div>${calls++}</div>`,
        }),
      ]),
    ).toThrow(/renders different HTML on each call/);
  });

  it("throws a clear error when a stories file has no title", () => {
    expect(() =>
      buildStoryMarkup([
        story("no-title/stories/no-title.stories.js", undefined, {
          base: () => "<div/>",
        }),
      ]),
    ).toThrow(/must have a non-empty string "title"/);
  });

  it("skips non-function named exports without crashing", () => {
    const result = buildStoryMarkup([
      story("with-meta/stories/meta.stories.js", "Skin/With Meta", {
        argTypes: { foo: { control: "text" } },
        base: () => "<div/>",
      }),
    ]);

    expect(Object.keys(result["with-meta"])).toEqual(["base"]);
  });

  it("merges multiple stories files in the same component directory, keying each variant by its file's title with the component key stripped off, so same-named exports in different files never collide", () => {
    const result = buildStoryMarkup([
      story("duplicate/stories/a.stories.js", "Skin/Duplicate/A", {
        base: () => `<div class="a"/>`,
      }),
      story("duplicate/stories/b.stories.js", "Skin/Duplicate/B", {
        base: () => `<div class="b"/>`,
        onlyInB: () => `<div class="only-in-b"/>`,
      }),
    ]);

    expect(result.duplicate).toEqual({
      "a/base": {
        html: `<div class="a"/>`,
        storybookId: "skin-duplicate-a--base",
      },
      "b/base": {
        html: `<div class="b"/>`,
        storybookId: "skin-duplicate-b--base",
      },
      "b/onlyInB": {
        html: `<div class="only-in-b"/>`,
        storybookId: "skin-duplicate-b--only-in-b",
      },
    });
  });

  it("throws a clear error when two files declare the exact same title, since Storybook itself would have duplicate story IDs", () => {
    expect(() =>
      buildStoryMarkup([
        story("dup/stories/one.stories.js", "Skin/Dup", { base: () => "" }),
        story("dup/stories/two.stories.js", "Skin/Dup", { base: () => "" }),
      ]),
    ).toThrow(/duplicate title "Skin\/Dup"/);
  });

  it("throws a clear error when two DIFFERENT titles strip down to the same variant key within one component (e.g. a mistitled file landing under the wrong component folder), rather than silently overwriting one story's data with another's", () => {
    expect(() =>
      buildStoryMarkup([
        story("button/stories/primary.stories.js", "Skin/Button/Primary", {
          base: () => "",
        }),
        story("button/stories/extra/mistitled.stories.js", "Skin/Primary", {
          base: () => "",
        }),
      ]),
    ).toThrow(/variant key "primary\/base" for component="button" collides/);
  });

  it("merges a nested subfolder into the top-level directory's component key by default, and routes it to its own key when TEMPORARY_COMPONENT_KEY_OVERRIDES names it (fake-button)", () => {
    const result = buildStoryMarkup([
      story("button/stories/primary.stories.js", "Skin/Button/Primary", {
        base: () => `<button class="btn btn--primary">Primary</button>`,
      }),
      story(
        "button/stories/destructive-button/primary.stories.js",
        "Skin/Button/Destructive/Primary",
        { base: () => `<button class="btn btn--destructive-primary"/>` },
      ),
      story(
        "button/stories/fake-button/base.stories.js",
        "Skin/Fake Button/Base",
        { base: () => `<a class="fake-btn">Fake</a>` },
      ),
    ]);

    expect(Object.keys(result).sort()).toEqual(["button", "fake-button"]);
    expect(Object.keys(result.button).sort()).toEqual([
      "destructive-primary/base",
      "primary/base",
    ]);
    // Title "Skin/Fake Button/Base" strips its own component key ("fake-button")
    // off the front -> "base", joined with export "base" -> "base/base".
    expect(result["fake-button"]).toEqual({
      "base/base": {
        html: `<a class="fake-btn">Fake</a>`,
        storybookId: "skin-fake-button-base--base",
      },
    });
  });

  it("ignores a nested subfolder's name when it matches the top-level directory (e.g. tabs/stories/tabs/*), since only the file's own title shapes the key", () => {
    const result = buildStoryMarkup([
      story("tabs/stories/tabs/block.stories.js", "Skin/Tabs/Block", {
        block: () => `<div class="tabs">block</div>`,
      }),
    ]);

    expect(result.tabs).toEqual({
      "block/block": {
        html: `<div class="tabs">block</div>`,
        storybookId: "skin-tabs-block--block",
      },
    });
  });
});

// Runs against the real Skin story files, so a glob that matches zero files or a
// wrong relativePathFromGlobKey fails here instead of silently blanking docs demos.
describe("story lookups over the real Skin stories", () => {
  it("finds a plain component's variant", () => {
    expect(getStoryHtml("badge", "empty")).toContain("badge");
    expect(getStorybookUrl("badge", "empty")).toContain(
      "path=/story/skin-badge--empty",
    );
  });

  it("finds a variant nested under its title's sub-path", () => {
    expect(getStorybookUrl("button", "base/iconAndText")).toContain(
      "path=/story/skin-button-base--icon-and-text",
    );
  });

  it("finds a variant under a TEMPORARY_COMPONENT_KEY_OVERRIDES key", () => {
    expect(getStorybookUrl("fake-button", "base/textOnly")).toContain(
      "path=/story/skin-fake-button-base--text-only",
    );
  });

  it("throws for an unknown component or variant", () => {
    expect(() => getStoryHtml("not-a-component", "x")).toThrow(
      /No Skin stories found/,
    );
    expect(() => getStoryHtml("badge", "not-a-variant")).toThrow(
      /No Skin story found/,
    );
  });
});
