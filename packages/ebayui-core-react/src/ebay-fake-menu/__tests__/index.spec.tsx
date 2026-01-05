/* eslint-disable jsx-a11y/no-autofocus */
import { vi } from "vitest";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { EbayFakeMenu, EbayFakeMenuItem } from "../index";

const clickEvent = expect.objectContaining({ type: "click" });
const keyDownEvent = expect.objectContaining({ type: "keydown" });

describe("<EbayFakeMenu>", () => {
    describe("on menu item click", () => {
        it("should fire onClick event", () => {
            const onClickSpy = vi.fn();
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" onClick={onClickSpy} />
                </EbayFakeMenu>,
            );

            fireEvent.click(wrapper.container.querySelectorAll(".fake-menu__item")[0]);

            expect(onClickSpy).toHaveBeenCalled();
        });
    });
    describe("on key down", () => {
        it("should fire onKeyDown event", () => {
            const onKeyDownSpy = vi.fn();
            const wrapper = render(
                <EbayFakeMenu onKeyDown={onKeyDownSpy}>
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>,
            );

            const index = 0;
            fireEvent.keyDown(wrapper.container.querySelectorAll(".fake-menu__item")[index]);

            expect(onKeyDownSpy).toHaveBeenCalledWith(keyDownEvent, { index });
        });
    });
    describe("on item select", () => {
        it("should fire onSelect event", () => {
            const onSelectSpy = vi.fn();
            const wrapper = render(
                <EbayFakeMenu onSelect={onSelectSpy}>
                    <EbayFakeMenuItem href="#" />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>,
            );

            const index = 1;
            fireEvent.click(wrapper.container.querySelectorAll(".fake-menu__item")[index]);

            expect(onSelectSpy).toHaveBeenCalledWith(clickEvent, { index });
        });
    });

    describe("on appear", () => {
        it("should not autofocus", () => {
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>,
            );
            const firstMenuItem = wrapper.container.querySelectorAll(".fake-menu__item")[0];

            expect(firstMenuItem).not.toHaveFocus();
        });
        it("should autofocus on first item", () => {
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" autoFocus />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>,
            );
            const firstMenuItem = wrapper.container.querySelectorAll(".fake-menu__item")[0];

            expect(firstMenuItem).toHaveFocus();
        });
    });
});
