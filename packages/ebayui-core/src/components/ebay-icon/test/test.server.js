import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";

import { snapshotHTML } from "../../../common/test-utils/snapshots";
import template from "../index.marko";
import cartIcon from "../icons/ebay-cart-24-icon/index.marko";

const iconName = "mic";
const progrmaBadgeIcon = "program-badge-authenticity-guaranteed";
const htmlSnap = snapshotHTML(__dirname);

describe("icon", () => {
    it("renders icon inline type with title text", async () => {
        const input = {
            _name: iconName,
            _type: "icon",
            a11yText: "inline icon",
        };
        await htmlSnap(template, input);
    });

    it("renders icon inline type without title text", async () => {
        const input = {
            _name: iconName,
            _type: "icon",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });

    it("renders icon no-skin-classes", async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: "icon",
            class: "custom-class",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });

    it("renders filled status icon with no color modifier class", async () => {
        const input = {
            _name: "attention-filled-16",
            _size: "16",
            _type: "icon",
        };
        const { container } = await render(template, input);
        const icon = container.querySelector("svg");
        expect(icon.classList.contains("icon--16")).toBe(true);
        expect(icon.classList.contains("icon--attention-filled")).toBe(false);
    });
});

describe("program badges", () => {
    it("renders program badge inline type with title text", async () => {
        const input = {
            _name: progrmaBadgeIcon,
            _type: "program-badge",
            a11yText: "inline icon",
        };

        await htmlSnap(template, input);
    });

    it("renders program badge inline type without title text", async () => {
        const input = {
            _name: iconName,
            _type: "program-badge",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });

    it("renders program badge no-skin-classes", async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: "program-badge",
            class: "custom-class",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });
});

describe("symbol", () => {
    it("inlines each symbol once per render", async () => {
        const $global = {};
        const first = await render(cartIcon, { $global });
        const second = await render(cartIcon, { $global });

        expect(
            first.container.querySelectorAll("defs[data-ebay-icon] > symbol"),
        ).toHaveLength(1);
        expect(second.container.querySelector("defs")).toBeNull();
    });

    it("marks the symbol as rendered on $global", async () => {
        const $global = {};
        await render(cartIcon, { $global });

        expect($global["rendered_ebay_icon_cart-24"]).toBe(true);
    });

    it("skips a symbol $global marks as rendered", async () => {
        const { container } = await render(cartIcon, {
            $global: { "rendered_ebay_icon_cart-24": true },
        });

        expect(container.querySelector("defs")).toBeNull();
    });
});
