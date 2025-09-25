import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import * as testUtils from "../../../common/test-utils/server";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../menu-button.stories"; // import all stories from the stories file

const {
    Default,
    Typeahead,
    Badged,
    Separator,
    IconText,
    PrefixLabel,
    Filter,
    Footer,
} = composeStories(stories);

describe("menu-button", () => {
    it("renders basic version", async () => {
        await snapshotHTML(Default);
    });

    it("renders with reverse=true", async () => {
        await snapshotHTML(Default, { reverse: true });
    });

    it("renders with fix-width=true", async () => {
        await snapshotHTML(Default, { fixWidth: true });
    });

    it("renders with fixed strategy", async () => {
        await snapshotHTML(Default, { strategy: "fixed" });
    });

    it("renders with borderless=true", async () => {
        await snapshotHTML(Default, { borderless: true });
    });

    it("renders with size=small", async () => {
        await snapshotHTML(Default, { size: "small" });
    });

    it("renders with icon", async () => {
        await snapshotHTML(IconText);
    });

    it("renders without toggle icon", async () => {
        await snapshotHTML(Default, { noToggleIcon: true });
    });

    it("renders with disabled state", async () => {
        await snapshotHTML(Default, { disabled: true });
    });

    it("renders with a badge", async () => {
        await snapshotHTML(Badged);
    });

    it("renders with typeahead", async () => {
        await snapshotHTML(Typeahead);
    });

    it("renders with overflow variant", async () => {
        await snapshotHTML(Default, { text: "", variant: "overflow" });
    });

    it("renders with button variant", async () => {
        await snapshotHTML(Default, { text: "Button", variant: "button" });
    });

    it("renders with separators", async () => {
        await snapshotHTML(Separator);
    });

    it("renders with prefix label", async () => {
        await snapshotHTML(PrefixLabel);
    });

    it("renders with filter", async () => {
        await snapshotHTML(Filter);
    });

    it("renders with footer", async () => {
        await snapshotHTML(Footer);
    });

    ["radio", "checkbox"].forEach((type) => {
        [true, false].forEach((checked) => {
            it(`renders with type=${type} and checked=${checked}`, async () => {
                await snapshotHTML(Default, { type, item: [{ checked }] });
            });

            it(`renders with type=${type} and checked=${checked} and as filter`, async () => {
                await snapshotHTML(Filter, { type, item: [{ checked }] });
            });
        });
    });
});
