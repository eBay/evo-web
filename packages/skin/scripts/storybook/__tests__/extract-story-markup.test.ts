import { describe, it, expect } from "vitest";
import path from "path";
import {
    deriveStorybookId,
    extractStoryMarkup,
} from "../extract-story-markup";

describe("deriveStorybookId", () => {
    it("slugifies a simple title and export name", () => {
        expect(deriveStorybookId("Skin/CTA Button", "base")).toBe(
            "skin-cta-button--base",
        );
    });

    it("slugifies a multi-word component title", () => {
        expect(deriveStorybookId("Skin/Accordion", "closed")).toBe(
            "skin-accordion--closed",
        );
    });

    it("splits a camelCase export name on capital-letter boundaries before slugifying, matching Storybook's own CSF display-name conversion", () => {
        expect(deriveStorybookId("Skin/Accordion", "autoCollapse")).toBe(
            "skin-accordion--auto-collapse",
        );
    });

    // Cross-checked against a real `storybook build` output's index.json (Task 2).
    // These are literal real IDs, not re-derived — a regression here means
    // deriveStorybookId has drifted from what Storybook itself actually generates.
    it.each([
        ["Skin/CTA Button", "base", "skin-cta-button--base"],
        ["Skin/Accordion", "autoCollapse", "skin-accordion--auto-collapse"],
        ["Skin/Button/Base", "iconAndText", "skin-button-base--icon-and-text"],
        [
            "Skin/Button/Dimensions",
            "fixedWidthAndHeight",
            "skin-button-dimensions--fixed-width-and-height",
        ],
        [
            "Skin/Button/Primary",
            "partiallyDisabled",
            "skin-button-primary--partially-disabled",
        ],
        [
            "Skin/Fake Button/Base",
            "textOnly",
            "skin-fake-button-base--text-only",
        ],
        [
            "Skin/Tabs/Fake Tabs/Block",
            "two",
            "skin-tabs-fake-tabs-block--two",
        ],
        // Acronym boundary: "RTLLarge" splits to "RTL Large" (before the LAST
        // capital of the run, since it starts a new word), not "R T L Large".
        ["Skin/Eek", "RTLLarge", "skin-eek--rtl-large"],
        [
            "Skin/Section Notice/Base",
            "dismissAndLinkCTALongAnchor",
            "skin-section-notice-base--dismiss-and-link-cta-long-anchor",
        ],
    ])(
        "title=%s export=%s -> %s (matches real storybook build output)",
        (title, exportName, expected) => {
            expect(deriveStorybookId(title, exportName)).toBe(expected);
        },
    );
});

describe("extractStoryMarkup", () => {
    const fixturesRoot = path.join(__dirname, "fixtures");

    it("extracts html and storybookId for every export, keyed by component directory", async () => {
        const result = await extractStoryMarkup(fixturesRoot);

        expect(result).toEqual({
            example: {
                // Title "Skin/Example" strips down to exactly the component key
                // ("example"), so the variant key is just the bare export name —
                // the common case for a single-story-file component.
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
});

describe("extractStoryMarkup edge cases", () => {
    it("throws a clear error when a stories file has no title", async () => {
        await expect(
            extractStoryMarkup(path.join(__dirname, "fixtures-no-title")),
        ).rejects.toThrow(/must have a non-empty string "title"/);
    });

    it("skips non-function named exports without crashing", async () => {
        const result = await extractStoryMarkup(
            path.join(__dirname, "fixtures-non-function-export"),
        );
        // Folder "with-meta" slugifies to "with-meta", but title "Skin/WithMeta"
        // slugifies to "withmeta" (no hyphen — one camelCase word) — they don't
        // match as strings, so the strip doesn't apply and "withmeta" stays as a
        // sub-path prefix. Narrow fixture-naming quirk, not a real-repo case.
        expect(Object.keys(result["with-meta"])).toEqual(["withmeta/base"]);
    });

    it("merges multiple stories files in the same component directory with no name overlap", async () => {
        const result = await extractStoryMarkup(path.join(__dirname, "fixtures-merge"));

        expect(result["merged-component"]).toEqual({
            "one/first": {
                html: `<div class="one"/>`,
                storybookId: "skin-merged-component-one--first",
            },
            "two/second": {
                html: `<div class="two"/>`,
                storybookId: "skin-merged-component-two--second",
            },
        });
    });

    it("keys each variant by its file's title with the component key stripped off (never a bare export name alone, and never the full un-stripped title), so same-named exports in different files never collide", async () => {
        const result = await extractStoryMarkup(path.join(__dirname, "fixtures-collision"));

        expect(result["duplicate"]).toEqual({
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

    it("throws a clear error when two files declare the exact same title, since Storybook itself would have duplicate story IDs", async () => {
        await expect(
            extractStoryMarkup(path.join(__dirname, "fixtures-duplicate-title")),
        ).rejects.toThrow(/duplicate title "Skin\/Dup"/);
    });

    it("merges a nested subfolder into the top-level directory's component key by default (e.g. Destructive variant of Button), stripping the component key off each file's title so same-named exports never collide", async () => {
        const result = await extractStoryMarkup(
            path.join(__dirname, "fixtures-nested-divergent"),
        );

        expect(result["button"]).toEqual({
            "primary/base": {
                html: `<button class="btn btn--primary">Primary</button>`,
                storybookId: "skin-button-primary--base",
            },
            "destructive-primary/base": {
                html: `<button class="btn btn--destructive-primary">Delete</button>`,
                storybookId: "skin-button-destructive-primary--base",
            },
        });
        expect(Object.keys(result)).not.toContain("destructive-button");
    });

    it("routes a nested subfolder to its own component key when TEMPORARY_COMPONENT_KEY_OVERRIDES names it explicitly (e.g. fake-button), instead of merging into its parent directory's key", async () => {
        const result = await extractStoryMarkup(
            path.join(__dirname, "fixtures-nested-divergent"),
        );

        // Title "Skin/Fake Button/Base" strips its OWN component key
        // ("fake-button", from the override) off the front -> "base", joined with
        // export "base" -> "base/base". Looks redundant but correct: the title
        // segment and the export name are coincidentally both "Base"/"base". This
        // never collides with real Button's own "primary/base" etc. above because
        // they're in separate component buckets ("fake-button" vs "button").
        expect(result["fake-button"]).toEqual({
            "base/base": {
                html: `<a class="fake-btn">Fake</a>`,
                storybookId: "skin-fake-button-base--base",
            },
        });
        expect(result["button"]["base/base"]).toBeUndefined();
    });

    it("merges a nested subfolder that happens to share its name with the top-level directory (e.g. button/stories/button/*, tabs/stories/tabs/*) the same way as any other subfolder — the subfolder NAME has no bearing on the key, only the file's own title does", async () => {
        const result = await extractStoryMarkup(
            path.join(__dirname, "fixtures-self-named-subfolder"),
        );

        // Title is "Skin/Tabs/Block" regardless of which subfolder the file sits in
        // (tabs/stories/tabs/block.stories.js in the real repo) -> stripping
        // component key "tabs" off "tabs-block" leaves "block", joined with export
        // "block" -> "block/block". The subfolder name "tabs" never appears in the
        // key; only the component key (from the top-level dir) and the file's own
        // title matter.
        expect(result["tabs"]).toEqual({
            "block/block": {
                html: `<div class="tabs">block</div>`,
                storybookId: "skin-tabs-block--block",
            },
        });
    });
});
