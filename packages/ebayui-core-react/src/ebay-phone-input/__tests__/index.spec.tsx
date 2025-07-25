/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { EbayPhoneInput } from "../index";

describe("<EbayPhoneInput />", () => {
    it("should render with default props", () => {
        const { container } = render(<EbayPhoneInput />);
        expect(container.querySelector(".phone-input")).toBeInTheDocument();
    });

    it("should render with floating label", () => {
        const { getByText } = render(<EbayPhoneInput floatingLabel="Phone Number" />);
        expect(getByText("Phone Number")).toBeInTheDocument();
    });

    it("should set initial country based on countryCode prop", () => {
        const { container } = render(<EbayPhoneInput countryCode="gb" />);
        const prefixText = container.querySelector('[id="phone-prefix"]');
        expect(prefixText).toHaveTextContent("+ 44");
    });

    it("should trigger onInputChange when phone number is entered", async () => {
        const user = userEvent.setup();
        const onInputChange = jest.fn();
        const { container } = render(<EbayPhoneInput countryCode="us" onInputChange={onInputChange} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        expect(input).toBeInTheDocument();

        await user.type(input, "5551234567");

        expect(onInputChange).toHaveBeenCalled();
    });

    it("should trigger onFocus when input is focused", async () => {
        const user = userEvent.setup();
        const onFocus = jest.fn();
        const { container } = render(<EbayPhoneInput onFocus={onFocus} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.click(input);

        expect(onFocus).toHaveBeenCalled();
    });

    it("should trigger onBlur when input loses focus", async () => {
        const user = userEvent.setup();
        const onBlur = jest.fn();
        const { container } = render(<EbayPhoneInput onBlur={onBlur} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.click(input);
        await user.tab(); // Move focus away

        expect(onBlur).toHaveBeenCalled();
    });

    it("should trigger keyboard events", async () => {
        const user = userEvent.setup();
        const onKeyDown = jest.fn();
        const onKeyPress = jest.fn();
        const onKeyUp = jest.fn();

        const { container } = render(
            <EbayPhoneInput onKeyDown={onKeyDown} onKeyPress={onKeyPress} onKeyUp={onKeyUp} />,
        );

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.click(input);
        await user.keyboard("1");

        expect(onKeyDown).toHaveBeenCalled();
        expect(onKeyUp).toHaveBeenCalled();
    });

    it("should support disabled state", () => {
        const { container } = render(<EbayPhoneInput disabled />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        const button = container.querySelector("button") as HTMLButtonElement;

        expect(input).toBeDisabled();
        expect(button).toBeDisabled();
        expect(container.querySelector(".phone-input")).toHaveClass("phone-input--disabled");
    });

    it("should support readonly state", () => {
        const { container } = render(<EbayPhoneInput readonly />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        const button = container.querySelector("button") as HTMLButtonElement;

        expect(input).toHaveAttribute("readonly");
        expect(button).toBeDisabled();
        expect(container.querySelector(".phone-input")).toHaveClass("phone-input--readonly");
    });

    it("should support invalid state", () => {
        const { container } = render(<EbayPhoneInput invalid />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;

        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(container.querySelector(".phone-input")).toHaveClass("phone-input--error");
    });

    it("should support custom className", () => {
        const { container } = render(<EbayPhoneInput className="custom-class" />);
        expect(container.querySelector(".phone-input")).toHaveClass("custom-class");
    });

    it("should display country flag in dropdown", () => {
        const { container } = render(<EbayPhoneInput countryCode="us" />);
        expect(container.querySelector(".fflag--us")).toBeInTheDocument();
    });

    it("should trigger expand/collapse events when dropdown opens/closes", async () => {
        const user = userEvent.setup();
        const onExpand = jest.fn();
        const onCollapse = jest.fn();

        const { container } = render(<EbayPhoneInput onExpand={onExpand} onCollapse={onCollapse} />);

        const button = container.querySelector("button") as HTMLButtonElement;

        // Open dropdown
        await user.click(button);
        expect(onExpand).toHaveBeenCalled();

        // Close dropdown (click outside or escape)
        fireEvent.keyUp(button, { key: "Escape" });
        expect(onCollapse).toHaveBeenCalled();
    });

    it("should change country when different option is selected", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onChange={onChange} />);

        const button = container.querySelector("button") as HTMLButtonElement;
        await user.click(button);

        const options = container.querySelectorAll('[role="option"]');
        if (options.length > 1) {
            await user.click(options[1]);
            expect(onChange).toHaveBeenCalled();
        }
    });

    it("should format phone number according to country mask", () => {
        const { container } = render(<EbayPhoneInput countryCode="us" value="5551234567" />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        expect(input.value).toMatch(/\(\d{3}\) \d{3}-\d{4}/);
    });

    it("should provide correct event data in onInputChange", async () => {
        const user = userEvent.setup();
        const onInputChange = jest.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onInputChange={onInputChange} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.type(input, "5551234567");

        expect(onInputChange).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                value: expect.any(String),
                rawValue: expect.any(String),
                callingCode: "1",
                countryCode: "US",
            }),
        );
    });

    it("should provide the correct event data on inputChange after changing the country", async () => {
        const user = userEvent.setup();
        const onInputChange = jest.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onInputChange={onInputChange} />);

        const button = container.querySelector("button") as HTMLButtonElement;
        await user.click(button);

        const options = container.querySelectorAll('[role="option"]');
        await user.click(options[1]);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.type(input, "5551234567");

        expect(onInputChange).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                value: expect.any(String),
                rawValue: expect.any(String),
                callingCode: "55",
                countryCode: "BR",
            }),
        );
    });
});
