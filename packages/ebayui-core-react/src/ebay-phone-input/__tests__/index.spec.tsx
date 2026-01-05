/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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
        const onInputChange = vi.fn();
        const { container } = render(<EbayPhoneInput countryCode="us" onInputChange={onInputChange} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        expect(input).toBeInTheDocument();

        await user.type(input, "5551234567");

        expect(onInputChange).toHaveBeenCalled();
    });

    it("should trigger onFocus when input is focused", async () => {
        const user = userEvent.setup();
        const onFocus = vi.fn();
        const { container } = render(<EbayPhoneInput onFocus={onFocus} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.click(input);

        expect(onFocus).toHaveBeenCalled();
    });

    it("should trigger onBlur when input loses focus", async () => {
        const user = userEvent.setup();
        const onBlur = vi.fn();
        const { container } = render(<EbayPhoneInput onBlur={onBlur} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.click(input);
        await user.tab(); // Move focus away

        expect(onBlur).toHaveBeenCalled();
    });

    it("should trigger keyboard events", async () => {
        const user = userEvent.setup();
        const onKeyDown = vi.fn();
        const onKeyPress = vi.fn();
        const onKeyUp = vi.fn();

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
        const onExpand = vi.fn();
        const onCollapse = vi.fn();

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
        const onChange = vi.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onChange={onChange} />);

        const button = container.querySelector("button") as HTMLButtonElement;
        await user.click(button);

        const options = container.querySelectorAll('[role="option"]');
        await user.click(options[1]);
        expect(onChange).toHaveBeenCalled();
    });

    it("should format phone number according to country mask", () => {
        const { container } = render(<EbayPhoneInput countryCode="us" value="5551234567" />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        expect(input.value).toMatch(/\(\d{3}\) \d{3}-\d{4}/);
    });

    it("should provide correct event data in onInputChange", async () => {
        const user = userEvent.setup();
        const onInputChange = vi.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onInputChange={onInputChange} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.type(input, "5551234567");

        expect(onInputChange).toHaveBeenCalledWith(expect.any(Object), {
            value: "(555) 123-4567",
            rawValue: "5551234567",
            callingCode: "1",
            countryCode: "US",
        });
    });

    it("should provide the correct event data on inputChange after changing the country", async () => {
        const user = userEvent.setup();
        const onInputChange = vi.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onInputChange={onInputChange} />);

        const button = container.querySelector("button") as HTMLButtonElement;
        await user.click(button);

        const option = screen.getByText(/Brazil/);
        await user.click(option);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
        await user.type(input, "48999216078");

        expect(onInputChange).toHaveBeenCalledWith(expect.any(Object), {
            value: "(48) 99921-6078",
            rawValue: "48999216078",
            callingCode: "55",
            countryCode: "BR",
        });
    });

    it("should not select multiple countries when the same calling code exists", async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onChange={onChange} />);

        const button = container.querySelector("button") as HTMLButtonElement;
        await user.click(button);

        const options = container.querySelectorAll('[role="option"]');
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            if (option.textContent?.includes("+1")) {
                await user.click(option);
                break;
            }
        }

        expect(container.querySelectorAll('[role="option"][aria-selected="true"]')).toHaveLength(1);
    });

    it("should maintain formatting when entering a fully formatted phone number", async () => {
        const user = userEvent.setup();
        const onInputChange = vi.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" onInputChange={onInputChange} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;

        // Enter a fully formatted phone number
        await user.type(input, "(555) 123-4567");

        // Click outside the textbox (blur event)
        await user.tab();

        expect(onInputChange).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                value: expect.stringMatching(/\(\d{3}\) \d{3}-\d{4}/),
            }),
        );
    });

    it("should reformat when pasting an unformatted phone number over existing value", async () => {
        const user = userEvent.setup();
        const onInputChange = vi.fn();

        const { container } = render(
            <EbayPhoneInput countryCode="us" defaultValue="5551234567" onInputChange={onInputChange} />,
        );

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;

        // Initially, the value should be formatted
        expect(input.value).toMatch(/\(\d{3}\) \d{3}-\d{4}/);

        // Clear the input and paste an unformatted number
        await user.clear(input);
        await user.click(input);
        await user.paste("4152881234");

        // Click outside the textbox (blur event)
        await user.tab();

        expect(onInputChange).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                value: "(415) 288-1234",
            }),
        );
    });

    it("should reformat when partially editing a formatted phone number", async () => {
        const user = userEvent.setup();
        const onBlur = vi.fn();

        const { container } = render(<EbayPhoneInput countryCode="us" defaultValue="5551234567" onBlur={onBlur} />);

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;

        // Initially formatted as (555) 123-4567
        const initialValue = input.value;
        expect(initialValue).toBe("(555) 123-4567");

        // Focus the input
        await user.click(input);

        // Find the position of '3' in '123' and change it to '9'
        // The formatted value is "(555) 123-4567"
        // We want to change '3' to '9' to get "(555) 129-4567"
        const positionOf3 = initialValue.indexOf("123") + 2;

        // Set cursor position and select the '3'
        input.setSelectionRange(positionOf3, positionOf3 + 1);

        // Type '9' to replace '3'
        await user.keyboard("9");

        // Click outside the textbox (blur event)
        await user.tab();

        expect(onBlur).toHaveBeenCalled();
        // The value should be reformatted with the change
        expect(input.value).toBe("(555) 129-4567");
    });

    it("should handle typing over selected digit", async () => {
        const user = userEvent.setup();
        const onInputChange = vi.fn();
        const onBlur = vi.fn();

        const { container } = render(
            <EbayPhoneInput countryCode="us" defaultValue="5551234567" onInputChange={onInputChange} onBlur={onBlur} />,
        );

        const input = container.querySelector('input[type="tel"]') as HTMLInputElement;

        await user.click(input);

        // Select a portion of the text and type to replace
        // This simulates editing the number
        await user.clear(input);
        await user.type(input, "5551294567");

        await user.tab();

        expect(onBlur).toHaveBeenCalled();
        expect(input.value).toBe("(555) 129-4567");
    });

    describe("controlled mode", () => {
        it("should apply mask when value prop is updated externally", () => {
            const { container, rerender } = render(<EbayPhoneInput countryCode="us" value="5551234567" />);

            const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
            expect(input.value).toBe("(555) 123-4567");

            // Update value prop externally
            rerender(<EbayPhoneInput countryCode="us" value="4152881234" />);

            expect(input.value).toBe("(415) 288-1234");
        });

        it("should maintain mask when value is updated after user input", async () => {
            const user = userEvent.setup();
            const onInputChange = vi.fn();

            const TestComponent = () => {
                const [value, setValue] = React.useState("5551234567");

                return (
                    <div>
                        <EbayPhoneInput
                            countryCode="us"
                            value={value}
                            onInputChange={(e, data) => {
                                setValue(data.rawValue || "");
                                onInputChange(e, data);
                            }}
                        />
                        <button onClick={() => setValue("4152881234")}>Update Value</button>
                    </div>
                );
            };

            const { container } = render(<TestComponent />);

            const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
            expect(input.value).toBe("(555) 123-4567");

            // User types to change the value
            await user.clear(input);
            await user.click(input);
            await user.type(input, "5551294567");

            expect(input.value).toBe("(555) 129-4567");
            expect(onInputChange).toHaveBeenCalledWith(expect.any(Object), {
                value: "(555) 129-4567",
                rawValue: "5551294567",
                callingCode: "1",
                countryCode: "US",
            });

            // Programmatically update value via button
            const button = screen.getByText("Update Value");
            await user.click(button);

            expect(input.value).toBe("(415) 288-1234");
        });

        it("should correctly format when value prop changes from empty to filled", () => {
            const { container, rerender } = render(<EbayPhoneInput countryCode="us" value="" />);

            const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
            expect(input.value).toBe("");

            rerender(<EbayPhoneInput countryCode="us" value="5551234567" />);

            expect(input.value).toBe("(555) 123-4567");
        });

        it("should correctly format when value prop changes from filled to empty", () => {
            const { container, rerender } = render(<EbayPhoneInput countryCode="us" value="5551234567" />);

            const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
            expect(input.value).toBe("(555) 123-4567");

            rerender(<EbayPhoneInput countryCode="us" value="" />);

            expect(input.value).toBe("");
        });

        it("should maintain correct mask when country changes with controlled value", () => {
            const { container, rerender } = render(<EbayPhoneInput countryCode="us" value="5551234567" />);

            const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
            expect(input.value).toBe("(555) 123-4567");

            // Change country to Brazil
            rerender(<EbayPhoneInput countryCode="br" value="48999216078" />);

            expect(input.value).toBe("(48) 99921-6078");
        });

        it("should handle partial phone numbers in controlled mode", () => {
            const { container, rerender } = render(<EbayPhoneInput countryCode="us" value="555" />);

            const input = container.querySelector('input[type="tel"]') as HTMLInputElement;
            expect(input.value).toBe("(555");

            rerender(<EbayPhoneInput countryCode="us" value="55512" />);
            expect(input.value).toBe("(555) 12");

            rerender(<EbayPhoneInput countryCode="us" value="5551234" />);
            expect(input.value).toBe("(555) 123-4");
        });
    });
});
