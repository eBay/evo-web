import React, { ComponentProps, FC } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbayTextbox, EbayTextboxPostfixIcon } from "../index";
import { EbayIconClear16 } from "../../ebay-icon/icons/ebay-icon-clear-16";

describe("<EbayTextbox>", () => {
    describe("on textbox change", () => {
        it("should fire an onInputChange event", () => {
            const spy = jest.fn();
            render(<EbayTextbox onInputChange={spy} />);

            const value = `It's a spy!`;
            const textbox = screen.getByRole("textbox");

            fireEvent.change(textbox, { target: { value } });
            expect(spy).toHaveBeenCalledWith(eventOfType("change"), { value });
        });
    });

    describe("on textbox change (and focus leaving the field)", () => {
        it("should fire an onChange event", () => {
            const spy = jest.fn();
            render(<EbayTextbox onChange={spy} />);

            const value = `It's a spy!`;
            const textbox = screen.getByRole("textbox");

            fireEvent.change(textbox, { target: { value } });
            expect(spy).not.toHaveBeenCalled();

            fireEvent.blur(textbox, { target: { value } });
            expect(spy).toHaveBeenCalledWith(eventOfType("blur"), { value });
        });
    });

    describe("on textbox focus", () => {
        it("should fire an onFocus event", () => {
            const spy = jest.fn();
            render(<EbayTextbox onFocus={spy} />);
            const value = `It's a spy!`;

            fireEvent.focus(screen.getByRole("textbox"), { target: { value } });
            expect(spy).toHaveBeenCalledWith(eventOfType("focus"), { value });
        });
    });

    describe("on textbox blur", () => {
        it("should fire an onBlur event", () => {
            const spy = jest.fn();
            render(<EbayTextbox onBlur={spy} />);
            const value = `It's a spy!`;

            fireEvent.blur(screen.getByRole("textbox"), { target: { value } });
            expect(spy).toHaveBeenCalledWith(eventOfType("blur"), { value });
        });
        it('should have "inline" class after blur event when no value is present', () => {
            const { container } = render(<EbayTextbox floatingLabel="Test label" />);
            fireEvent.blur(screen.getByRole("textbox"), { target: { value: "" } });
            expect(container.querySelector(".floating-label__label")).toHaveClass("floating-label__label--inline");
        });
        it('should not have "inline" class after blur event when value is present', () => {
            const { container } = render(<EbayTextbox floatingLabel="Test label" />);
            fireEvent.input(screen.getByRole("textbox"), { target: { value: "New Value" } });
            fireEvent.blur(screen.getByRole("textbox"));
            expect(container.querySelector(".floating-label__label")).not.toHaveClass("floating-label__label--inline");
        });
    });

    describe("on textbox key down", () => {
        it("should fire an onKeyDown event", () => {
            const spy = jest.fn();
            render(<EbayTextbox onKeyDown={spy} />);
            const value = `It's a spy!`;

            fireEvent.keyDown(screen.getByRole("textbox"), { target: { value } });
            expect(spy).toHaveBeenCalledWith(eventOfType("keydown"), { value });
        });
    });

    describe("on textbox key up", () => {
        it("should fire an onKeyUp event", () => {
            const spy = jest.fn();
            render(<EbayTextbox onKeyUp={spy} />);
            const value = `It's a spy!`;

            fireEvent.keyUp(screen.getByRole("textbox"), { target: { value } });
            expect(spy).toHaveBeenCalledWith(eventOfType("keyup"), { value });
        });
    });

    describe("on textbox key press", () => {
        it("should fire an onKeyPress event", async () => {
            const spy = jest.fn();
            const value = `It's a spy!`;
            render(<EbayTextbox onKeyPress={spy} defaultValue={value} />);

            const textbox = screen.getByRole("textbox");
            await userEvent.type(textbox, "a");
            expect(spy).toHaveBeenCalledWith(eventOfType("keypress"), { value });
        });
    });

    describe("on textbox invalid value", () => {
        it("should fire an onInvalid event", () => {
            const spy = jest.fn();
            const ref = React.createRef<HTMLFormElement>();
            render(
                <form ref={ref}>
                    <EbayTextbox onInvalid={spy} required />
                </form>,
            );

            ref.current?.reportValidity();
            expect(spy).toHaveBeenCalledWith(eventOfType("invalid"), { value: "" });
        });
    });

    describe("on textbox button click", () => {
        it("textbox should fire two events", () => {
            const textboxSpy = jest.fn();
            const iconSpy = jest.fn();
            const value = "test";
            const wrapper = render(
                <EbayTextbox defaultValue={value} onButtonClick={textboxSpy}>
                    <EbayTextboxPostfixIcon icon={<EbayIconClear16 />} buttonAriaLabel="Clear!" onClick={iconSpy} />
                </EbayTextbox>,
            );
            fireEvent.click(wrapper.getByRole("button"));

            expect(textboxSpy).toHaveBeenCalledWith(eventOfType("click"), { value });
            expect(iconSpy).toHaveBeenCalledWith(eventOfType("click"));
        });

        it("button should fire an event", () => {
            const spy = jest.fn();
            const wrapper = render(
                <EbayTextbox>
                    <EbayTextboxPostfixIcon icon={<EbayIconClear16 />} buttonAriaLabel="Clear!" onClick={spy} />
                </EbayTextbox>,
            );
            fireEvent.click(wrapper.getByRole("button"));

            expect(spy).toHaveBeenCalledWith(eventOfType("click"));
        });
    });

    describe("on passing a ref", () => {
        it("should set the ref as the input reference", () => {
            const ref = React.createRef<FC<ComponentProps<"input">>>();
            render(<EbayTextbox ref={ref} />);

            expect((ref.current as unknown as HTMLInputElement).tagName).toBe("INPUT");
        });
    });
});
