import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import * as stories from "../tooltip.stories";

const { Standard } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

const renderBodyText = "View options";

describe("default tooltip", () => {
    beforeEach(async () => {
        component = await render(Standard);
        // Wait for floating-ui to load and tooltip to open
        await waitFor(() => expect(component.emitted("loaded")).has.length(1));
    });

    describe("when the host element is hovered", () => {
        beforeEach(async () => {
            await fireEvent.mouseEnter(component.getByText(renderBodyText));
        });

        it("then it emits the expand event", async () => {
            await waitFor(() =>
                expect(component.emitted("expand")).has.length(1),
            );
        });

        describe("when the escape key is pressed", () => {
            it("then it emits the collapse event", async () => {
                await fireEvent.keyDown(document, {
                    key: "Escape",
                    keyCode: 27,
                });

                await waitFor(() =>
                    expect(component.emitted("collapse")).has.length(1),
                );
            });
        });
    });
});

describe("given the a custom aligned tooltip", () => {
    beforeEach(async () => {
        component = await render(Standard, {
            offset: 50,
        });
        // Wait for floating-ui to load
        await waitFor(() => expect(component.emitted("loaded")).has.length(1));
    });

    describe("when the host element is hovered", () => {
        beforeEach(async () => {
            await fireEvent.mouseEnter(component.getByText(renderBodyText));
        });

        it("then it sets the overlay styles correctly", () => {
            const overlay =
                component.getByText(renderBodyText).nextElementSibling;
            expect(overlay.style.transform).to.equal("");
            expect(overlay.style.top).to.not.equal("");
            expect(overlay.style.right).to.equal("");
            expect(overlay.style.bottom).to.equal("");
        });
    });
});

describe("given a tooltip with the fixed strategy", () => {
    beforeEach(async () => {
        component = await render(Standard, { strategy: "fixed" });
        await waitFor(() => expect(component.emitted("loaded")).has.length(1));
    });

    describe("when the host element is hovered", () => {
        beforeEach(async () => {
            await fireEvent.mouseEnter(component.getByText(renderBodyText));
        });

        it("then it positions the overlay as fixed", async () => {
            const overlay =
                component.getByText(renderBodyText).nextElementSibling;
            await waitFor(() => expect(overlay.style.top).to.not.equal(""));
            expect(overlay.style.position).to.equal("fixed");
        });
    });
});

describe("given a fixed tooltip inside a clipping container", () => {
    let container;

    beforeEach(async () => {
        container = document.createElement("div");
        container.style.cssText =
            "overflow: hidden; height: 24px; margin-top: 100px;";
        document.body.appendChild(container);
        component = await render(
            Standard,
            { strategy: "fixed", pointer: "top" },
            { container },
        );
        await waitFor(() => expect(component.emitted("loaded")).has.length(1));
        await fireEvent.mouseEnter(component.getByText(renderBodyText));
    });

    afterEach(() => container.remove());

    it("then the overlay is not clipped by the container", async () => {
        const overlay = component.getByText(renderBodyText).nextElementSibling;
        await waitFor(() => expect(overlay.style.top).to.not.equal(""));
        const { left, width, bottom } = overlay.getBoundingClientRect();
        const { bottom: containerBottom } = container.getBoundingClientRect();
        expect(bottom).to.be.greaterThan(containerBottom);
        expect(
            overlay.contains(
                document.elementFromPoint(left + width / 2, bottom - 5),
            ),
        ).to.equal(true);
    });
});
