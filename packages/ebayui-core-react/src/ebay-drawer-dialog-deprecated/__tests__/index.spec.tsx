import React, { ComponentProps } from "react";
import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { EbayDrawerDialogDeprecated } from "../index";
import { EbayDialogHeader } from "../../ebay-dialog-base";

vi.mock("../../common/random-id");

const classPrefix = "drawer-dialog";
const closeDrawerHandler = vi.fn();
let wrapper;
const renderComponent = (props?: ComponentProps<typeof EbayDrawerDialogDeprecated>) => {
    wrapper = render(
        <EbayDrawerDialogDeprecated open onClose={closeDrawerHandler} {...props}>
            <EbayDialogHeader>Heading</EbayDialogHeader>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
            <input placeholder="Enter a value" />
        </EbayDrawerDialogDeprecated>,
    );
};

describe("<EbayDrawerDialogDeprecated>", () => {
    beforeEach(() => {
        renderComponent();
    });

    it("should have close button", () => {
        expect(document.querySelector(`button.${classPrefix}__close`)).toBeInTheDocument();
    });

    it("should trigger onClose when close button is clicked", () => {
        const closeButton = document.querySelector(`button.${classPrefix}__close`);
        fireEvent.click(closeButton);
        expect(closeDrawerHandler).toHaveBeenCalled();
    });

    it("should not render close button when buttonPosition is set to hidden", () => {
        renderComponent({ buttonPosition: "hidden" });
        const closeButton = wrapper.container.querySelector(`button.${classPrefix}__close`);
        expect(closeButton).toBeNull();
    });

    it("should apply custom dialog window class", () => {
        const windowClass = "windowClassName";
        renderComponent({ windowClass });
        const dialogWindow = wrapper.container.querySelector(".drawer-dialog__window");
        expect(dialogWindow.classList).toContain(windowClass);
    });
});
