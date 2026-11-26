import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import template from "../icons/ebay-add-24-icon/index.marko";
import template2 from "../icons/ebay-arrow-left-24-icon/index.marko";
import template3 from "../icons/ebay-arrow-right-24-icon/index.marko";
import template4 from "../icons/ebay-ai-spectrum-16-colored-icon/index.marko";
import template5 from "../icons/ebay-cart-24-icon/index.marko";

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

function checkIfHidden() {
    const svg = document.body.firstChild;

    expect(svg.tagName).to.equal("svg");
    expect(svg.style.position).to.equal(
        "absolute",
        "position should be absolute",
    );
    expect(svg.style.height).to.equal("0px", "height should be 0px");
    expect(svg.style.width).to.equal("0px", "width should be 0px");
}

function checkIcon(iconId) {
    const matches = document.querySelectorAll(`#${iconId}`);
    expect(matches, `${iconId} should be defined once`).toHaveLength(1);
    expect(matches[0].tagName).to.equal("symbol");
    expect(matches[0].parentNode).to.equal(document.body.firstChild);
}

describe("rendering an icon in the browser", () => {
    beforeEach(async () => {
        component = await render(template, { a11yText: "icon" });
    });

    it("should create root SVG", () => {
        checkIfHidden();
        checkIcon("icon-add-24");
    });

    it("should not have defs tag", () => {
        const icon = component.getByLabelText("icon");

        icon.childNodes.forEach((child) => {
            expect(child.tagName).to.not.equal("defs");
        });
    });
});

describe("rendering multiple icons in the browser", () => {
    beforeEach(async () => {
        await render(template, { a11yText: "icon" });
        await render(template2, { a11yText: "icon2" });
        await render(template3, { a11yText: "icon3" });
        // render first template again;
        component = await render(template, { a11yText: "another icon" });
    });

    it("should define each symbol once in the root SVG", () => {
        checkIfHidden();
        checkIcon("icon-add-24");
        checkIcon("icon-arrow-right-24");
        checkIcon("icon-arrow-left-24");
    });
});

describe("rendering icons with defs in the browser", () => {
    beforeEach(async () => {
        await render(template4, { a11yText: "icon" });
    });

    it("should parse the symbol's gradient as SVG", () => {
        checkIfHidden();
        checkIcon("icon-ai-spectrum-16-colored");
        expect(
            document.getElementById("ref-ai-spectrum-16-colored"),
        ).toBeInstanceOf(SVGLinearGradientElement);
    });
});

describe("rendering an icon whose symbol a server icon still holds", () => {
    beforeEach(async () => {
        document.body.insertAdjacentHTML(
            "beforeend",
            '<svg class="server-icon"><defs data-ebay-icon><symbol id="icon-cart-24"><path d="M0 0"></path></symbol></defs><use href="#icon-cart-24"></use></svg>',
        );
        await render(template5, { a11yText: "cart" });
    });

    it("moves that symbol to the root SVG, so removing the server icon keeps it", () => {
        document.querySelector(".server-icon").remove();
        checkIcon("icon-cart-24");
    });
});

describe("loading the sprite module after server rendering", () => {
    let serverIcon;

    beforeEach(async () => {
        document.body.insertAdjacentHTML(
            "beforeend",
            '<svg class="server-icon"><defs data-ebay-icon><symbol id="icon-server-only"></symbol></defs><use href="#icon-server-only"></use></svg>',
        );
        serverIcon = document.body.lastElementChild;
        await import(/* @vite-ignore */ `../sprite.ts?fresh=${Date.now()}`);
    });

    afterEach(() => {
        serverIcon.remove();
        document.body.firstChild.remove();
    });

    it("moves server symbols into the root SVG", () => {
        checkIfHidden();
        checkIcon("icon-server-only");
        expect(serverIcon.querySelector("defs")).toBeNull();
    });
});
