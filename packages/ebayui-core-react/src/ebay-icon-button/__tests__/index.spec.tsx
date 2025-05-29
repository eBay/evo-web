import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { EbayIconButton } from "../../ebay-icon-button";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbayIconButton>", () => {
    describe("on passing a ref", () => {
        it("should set the ref to button element", () => {
            const ref = React.createRef<HTMLButtonElement & HTMLAnchorElement>();
            render(<EbayIconButton ref={ref} icon="menu20" />);

            expect(ref.current?.tagName).toBe("BUTTON");
        });
    });
    describe("on button click", () => {
        it("should fire onClick event", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayIconButton onClick={spy} icon="add16" />);
            fireEvent.click(wrapper.getByRole("button"));

            expect(spy).toHaveBeenCalledWith(eventOfType("click"));
        });
    });
    describe("on focus", () => {
        it("should fire onFocus event", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayIconButton onFocus={spy} icon="add16" />);
            fireEvent.focus(wrapper.getByRole("button"));

            expect(spy).toHaveBeenCalledWith(eventOfType("focus"));
        });
    });
    describe("on blur", () => {
        it("should fire onBlur event", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayIconButton onBlur={spy} icon="add16" />);
            fireEvent.blur(wrapper.getByRole("button"));

            expect(spy).toHaveBeenCalledWith(eventOfType("blur"));
        });
    });
    describe("on Esc press", () => {
        it("should fire onEscape event", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayIconButton onEscape={spy} icon="add16" />);
            fireEvent.keyDown(wrapper.getByRole("button"), { key: "Escape" });

            expect(spy).toHaveBeenCalledWith(eventOfType("keydown"));
        });
    });
});
