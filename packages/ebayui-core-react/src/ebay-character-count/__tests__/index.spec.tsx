/// <reference types="@testing-library/jest-dom" />
import { vi } from "vitest";
import React from "react";
import { render, screen, act } from "@testing-library/react";
import EbayCharacterCount from "../character-count";

describe("EbayCharacterCount", () => {
    it("should render with initial value", () => {
        render(<EbayCharacterCount value="Hello world" max={120} />);
        expect(screen.getByText("11/120")).toBeInTheDocument();
    });

    it("should update count after timeout when value changes", () => {
        vi.useFakeTimers();
        const { rerender } = render(<EbayCharacterCount value="Hello" max={120} />);
        rerender(<EbayCharacterCount value="Hello world" max={120} />);

        expect(screen.getByText("5/120")).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(500);
        });

        expect(screen.getByText("11/120")).toBeInTheDocument();
    });

    it("should call onChange handler", () => {
        const handleChange = vi.fn();
        render(<EbayCharacterCount value="Hello" max={120} onChange={handleChange} />);

        act(() => {
            vi.advanceTimersByTime(500);
        });

        expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ count: 5 }));
    });

    it("should render custom text when children are passed", () => {
        render(<EbayCharacterCount max={120}>Custom text</EbayCharacterCount>);
        expect(screen.getByText("Custom text")).toBeInTheDocument();
    });
});
