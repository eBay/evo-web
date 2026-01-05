import React from "react";
import { vi } from "vitest";
import { screen, fireEvent, render } from "@testing-library/react";
import { EbayFakeMenuButton, EbayFakeMenuButtonItem } from "..";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

vi.useFakeTimers();

describe("<EbayFakeMenuButton>", () => {
    describe("on button click", () => {
        let expandSpy;

        beforeEach(() => {
            expandSpy = vi.fn();
        });
        afterEach(() => {
            expandSpy.mockClear();
        });
        it("should fire onExpand event", () => {
            render(
                <EbayFakeMenuButton onExpand={expandSpy}>
                    <EbayFakeMenuButtonItem />
                </EbayFakeMenuButton>,
            );
            fireEvent.click(screen.getByRole("button"));

            expect(expandSpy).toHaveBeenCalled();
        });
        it("should fire onCollapse event", () => {
            render(
                <EbayFakeMenuButton onCollapse={expandSpy}>
                    <EbayFakeMenuButton />
                </EbayFakeMenuButton>,
            );

            const button = screen.getByRole("button");
            fireEvent.click(button);
            fireEvent.click(button);

            expect(expandSpy).toHaveBeenCalled();
        });
    });

    describe("on opened menu", () => {
        let collapseSpy, keyDownSpy, mouseDownSpy, selectSpy, button;

        beforeEach(() => {
            collapseSpy = vi.fn();
            keyDownSpy = vi.fn();
            mouseDownSpy = vi.fn();
            selectSpy = vi.fn();
            render(
                <EbayFakeMenuButton
                    onCollapse={collapseSpy}
                    onKeyDown={keyDownSpy}
                    onMouseDown={mouseDownSpy}
                    onSelect={selectSpy}
                >
                    <EbayFakeMenuButtonItem>link 1</EbayFakeMenuButtonItem>
                    <EbayFakeMenuButtonItem>link 2</EbayFakeMenuButtonItem>
                </EbayFakeMenuButton>,
            );
            button = screen.getByRole("button");
            fireEvent.click(button);
        });
        afterEach(() => {
            collapseSpy.mockClear();
        });

        it("should call onMouseDown", () => {
            const link = screen.getByText("link 2");
            fireEvent.mouseDown(link);
            fireEvent.click(link);

            expect(mouseDownSpy).toHaveBeenCalledWith(eventOfType("mousedown"), { index: 1 });
            expect(selectSpy).toHaveBeenCalledWith(eventOfType("click"), { index: 1 });
        });

        it("should close on button click", () => {
            fireEvent.click(button);

            expect(collapseSpy).toHaveBeenCalled();
        });

        it("should close on Esc press", () => {
            fireEvent.focus(button);
            fireEvent.keyDown(button, { key: "Escape" });

            expect(keyDownSpy).toHaveBeenCalledWith(eventOfType("keydown"));
            expect(collapseSpy).toHaveBeenCalled();
        });

        it("should close on BG click", () => {
            vi.runAllTimers();
            document.body.click();

            expect(collapseSpy).toHaveBeenCalled();
        });
    });
});
