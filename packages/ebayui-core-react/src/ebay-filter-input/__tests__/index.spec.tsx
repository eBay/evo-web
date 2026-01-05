/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { EbayFilterInput, type Size } from "../index";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbayFilterInput />", () => {
    describe("basic rendering", () => {
        it("should render filter input with default placeholder", () => {
            render(<EbayFilterInput />);

            const input = screen.getByRole("searchbox");
            expect(input).toBeInTheDocument();
            expect(input).toHaveAttribute("placeholder", "Filter");
            expect(input).toHaveAttribute("type", "search");
        });

        it("should render with custom placeholder", () => {
            render(<EbayFilterInput placeholder="Search items" />);

            const input = screen.getByRole("searchbox");
            expect(input).toHaveAttribute("placeholder", "Search items");
        });

        it("should render search icon", () => {
            const { container } = render(<EbayFilterInput />);

            // Check that search icon is present (svg with specific path or data-testid)
            expect(container.querySelector("svg")).toBeInTheDocument();
        });

        it("should apply custom className", () => {
            const { container } = render(<EbayFilterInput className="custom-class" />);

            const filterInputContainer = container.querySelector(".filter-input");
            expect(filterInputContainer).toHaveClass("custom-class");
        });
    });

    describe("size variants", () => {
        it("should apply large size class", () => {
            const { container } = render(<EbayFilterInput size="large" />);

            const filterInputContainer = container.querySelector(".filter-input");
            expect(filterInputContainer).toHaveClass("filter-input--large");
        });

        it("should apply small size class", () => {
            const { container } = render(<EbayFilterInput size="small" />);

            const filterInputContainer = container.querySelector(".filter-input");
            expect(filterInputContainer).toHaveClass("filter-input--small");
        });

        it("should not apply size class for invalid size", () => {
            const { container } = render(<EbayFilterInput size={"invalid" as Size} />);

            const filterInputContainer = container.querySelector(".filter-input");
            expect(filterInputContainer).not.toHaveClass("filter-input--invalid");
        });
    });

    describe("clear button functionality", () => {
        it("should not render clear button when a11yClearButton is not provided", () => {
            const { container } = render(<EbayFilterInput />);

            const clearButton = container.querySelector(".filter-input__clear-btn");
            expect(clearButton).not.toBeInTheDocument();
        });

        it("should render clear button when a11yClearButton is provided", () => {
            const { container } = render(<EbayFilterInput a11yClearButton="Clear filter" />);

            const clearButton = container.querySelector(".filter-input__clear-btn");
            expect(clearButton).toBeInTheDocument();
            expect(clearButton).toHaveAttribute("aria-label", "Clear filter");
        });

        it("should clear input value when clear button is clicked", async () => {
            const onClear = vi.fn();
            const onInputChange = vi.fn();

            const { container } = render(
                <EbayFilterInput a11yClearButton="Clear filter" onClear={onClear} onInputChange={onInputChange} />,
            );

            const input = screen.getByRole("searchbox");
            const clearButton =
                container.querySelector(".filter-input__clear-btn") || screen.getByLabelText("Clear filter");

            // Type some text
            await userEvent.type(input, "test value");
            expect(input).toHaveValue("test value");

            // Clear the input
            await userEvent.click(clearButton);

            expect(input).toHaveValue("");
            expect(onClear).toHaveBeenCalledWith(expect.any(Object), { value: "" });
            expect(onInputChange).toHaveBeenCalledWith(expect.any(Object), { value: "" });
        });
    });

    describe("accessibility", () => {
        it("should set aria-controls attribute when a11yControlsId is provided", () => {
            render(<EbayFilterInput a11yControlsId="controlled-element" />);

            const input = screen.getByRole("searchbox");
            expect(input).toHaveAttribute("aria-controls", "controlled-element");
        });

        it("should not set aria-controls when a11yControlsId is not provided", () => {
            render(<EbayFilterInput />);

            const input = screen.getByRole("searchbox");
            expect(input).not.toHaveAttribute("aria-controls");
        });
    });

    describe("event handlers", () => {
        it("should call onInputChange when input value changes", async () => {
            const onInputChange = vi.fn();
            render(<EbayFilterInput onInputChange={onInputChange} />);

            const input = screen.getByRole("searchbox");
            await userEvent.type(input, "test");

            expect(onInputChange).toHaveBeenCalledWith(eventOfType("change"), { value: "test" });
        });

        it("should call onChange when input loses focus", async () => {
            const onChange = vi.fn();
            render(<EbayFilterInput onChange={onChange} />);

            const input = screen.getByRole("searchbox");
            await userEvent.type(input, "test");
            await userEvent.tab(); // Blur the input

            expect(onChange).toHaveBeenCalledWith(eventOfType("blur"), { value: "test" });
        });

        it("should call onFocus when input gains focus", async () => {
            const onFocus = vi.fn();
            render(<EbayFilterInput onFocus={onFocus} />);

            const input = screen.getByRole("searchbox");
            await userEvent.click(input);

            expect(onFocus).toHaveBeenCalledWith(eventOfType("focus"), { value: "" });
        });

        it("should call onBlur when input loses focus", async () => {
            const onBlur = vi.fn();
            render(<EbayFilterInput onBlur={onBlur} />);

            const input = screen.getByRole("searchbox");
            await userEvent.click(input);
            await userEvent.tab(); // Blur the input

            expect(onBlur).toHaveBeenCalledWith(eventOfType("blur"), { value: "" });
        });

        it("should call onKeyDown when key is pressed down", async () => {
            const onKeyDown = vi.fn();
            render(<EbayFilterInput onKeyDown={onKeyDown} />);

            const input = screen.getByRole("searchbox");
            await userEvent.type(input, "a");

            expect(onKeyDown).toHaveBeenCalledWith(
                eventOfType("keydown"),
                { value: "" }, // keydown fires before input value is updated
            );
        });

        it("should call onKeyPress when key is pressed", async () => {
            const onKeyPress = vi.fn();
            render(<EbayFilterInput onKeyPress={onKeyPress} />);

            const input = screen.getByRole("searchbox");
            await userEvent.type(input, "a");

            expect(onKeyPress).toHaveBeenCalledWith(
                eventOfType("keypress"),
                { value: "" }, // keypress fires before input value is updated
            );
        });

        it("should call onKeyUp when key is released", async () => {
            const onKeyUp = vi.fn();
            render(<EbayFilterInput onKeyUp={onKeyUp} />);

            const input = screen.getByRole("searchbox");
            await userEvent.type(input, "a");

            expect(onKeyUp).toHaveBeenCalledWith(eventOfType("keyup"), { value: "a" });
        });
    });

    describe("input props passthrough", () => {
        it("should pass through standard input props", () => {
            render(<EbayFilterInput id="test-input" name="filterInput" disabled required />);

            const input = screen.getByRole("searchbox");
            expect(input).toHaveAttribute("id", "test-input");
            expect(input).toHaveAttribute("name", "filterInput");
            expect(input).toBeDisabled();
            expect(input).toBeRequired();
        });

        it("should support controlled input with value prop", () => {
            const { rerender } = render(<EbayFilterInput value="initial" />);

            const input = screen.getByRole("searchbox");
            expect(input).toHaveValue("initial");

            rerender(<EbayFilterInput value="updated" />);
            expect(input).toHaveValue("updated");
        });

        it("should support defaultValue prop", () => {
            render(<EbayFilterInput defaultValue="default text" />);

            const input = screen.getByRole("searchbox");
            expect(input).toHaveValue("default text");
        });
    });
});
