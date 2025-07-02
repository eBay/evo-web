import { it } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../button.stories"; // import all stories from the stories file
const { Default, ExpandButton } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

const properties = {
    priority: ["primary", "secondary", "delete"],
    size: ["large"],
};

Object.keys(properties).forEach((property) => {
    const values = properties[property];
    values.forEach((value) => {
        it(`renders button with ${property}=${value}`, async () => {
            await htmlSnap(Default, { [property]: value });
        });
    });
});

[false, true].forEach((fluid) => {
    it(`renders button with fluid=${fluid}`, async () => {
        await htmlSnap(Default, { fluid });
    });
});

it("renders defaults", async () => {
    await htmlSnap(Default);
});

it("renders with id override", async () => {
    await htmlSnap(Default, { id: "test" });
});

it("renders with type override", async () => {
    await htmlSnap(Default, { type: "submit" });
});

it("does not apply priority class for unsupported value", async () => {
    await htmlSnap(Default, { priority: "none" });
});

it("renders fake version", async () => {
    await htmlSnap(Default, {
        href: "#",
        size: "large",
        priority: "primary",
        ariaLabel: "fake button",
    });
});

it("renders disabled version", async () => {
    await htmlSnap(Default, { disabled: true });
});

it("renders partially disabled version", async () => {
    await htmlSnap(Default, { partiallyDisabled: true });
});

it("renders truncated button", async () => {
    await htmlSnap(Default, {
        truncate: true,
    });
});

it("renders small button", async () => {
    await htmlSnap(Default, {
        size: "small",
    });
});

it("renders large truncated button", async () => {
    await htmlSnap(Default, {
        truncate: true,
        size: "large",
    });
});

it("renders fixed-height button", async () => {
    await htmlSnap(Default, {
        fixedHeight: true,
    });
});

it("renders large fixed-height button", async () => {
    await htmlSnap(Default, {
        fixedHeight: true,
        size: "large",
    });
});

it("renders a11yText when bodyState === loading", async () => {
    await htmlSnap(Default, {
        priority: "primary",
        a11yText: "loading text",
        bodyState: "loading",
    });
});

it("renders expanded button", async () => {
    await htmlSnap(ExpandButton);
});
