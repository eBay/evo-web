import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import EbayNumberInput from "../number-input";

describe("given a number input textbox", () => {
    let onChange: jest.Mock;
    let onIncrement: jest.Mock;
    let onDecrement: jest.Mock;

    beforeEach(() => {
        onChange = jest.fn();
        onIncrement = jest.fn();
        onDecrement = jest.fn();
    });

    describe("when increment is pressed", () => {
        beforeEach(async () => {
            const { container } = render(<EbayNumberInput value={1} onChange={onChange} onIncrement={onIncrement} />);
            const incrementButton = container.querySelector(".number-input__increment");
            await fireEvent.click(incrementButton!);
        });

        it("should increment the value", () => {
            expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: 2 });
        });

        it("should trigger increment event", () => {
            expect(onIncrement).toHaveBeenCalledWith(expect.anything(), { value: 2 });
        });
    });

    describe("when decrement is pressed", () => {
        beforeEach(async () => {
            const { container } = render(<EbayNumberInput value={2} onChange={onChange} onDecrement={onDecrement} />);
            const decrementButton = container.querySelector(".number-input__decrement");
            await fireEvent.click(decrementButton!);
        });

        it("should decrement the value", () => {
            expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: 1 });
        });

        it("should trigger decrement event", () => {
            expect(onDecrement).toHaveBeenCalledWith(expect.anything(), { value: 1 });
        });
    });
});

describe("given a number input textbox with delete", () => {
    let onChange: jest.Mock;
    let onIncrement: jest.Mock;
    let onDecrement: jest.Mock;
    let onDeleteClick: jest.Mock;

    beforeEach(() => {
        onChange = jest.fn();
        onIncrement = jest.fn();
        onDecrement = jest.fn();
        onDeleteClick = jest.fn();
    });

    describe("when delete is pressed", () => {
        beforeEach(async () => {
            const { container } = render(
                <EbayNumberInput
                    value={1}
                    min={1}
                    a11yDeleteText="Delete item"
                    onChange={onChange}
                    onDeleteClick={onDeleteClick}
                />,
            );
            const deleteButton = container.querySelector(".number-input__delete");
            await fireEvent.click(deleteButton!);
        });

        it("should trigger delete event", () => {
            expect(onDeleteClick).toHaveBeenCalledWith(expect.anything(), { value: 1 });
        });
    });

    describe("when increment is pressed", () => {
        beforeEach(async () => {
            const { container } = render(
                <EbayNumberInput
                    value={1}
                    min={1}
                    a11yDeleteText="Delete item"
                    onChange={onChange}
                    onIncrement={onIncrement}
                />,
            );
            const incrementButton = container.querySelector(".number-input__increment");
            await fireEvent.click(incrementButton!);
        });

        it("should increment the value", () => {
            expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: 2 });
        });

        it("should trigger increment event", () => {
            expect(onIncrement).toHaveBeenCalledWith(expect.anything(), { value: 2 });
        });
    });

    describe("when decrement is pressed", () => {
        beforeEach(async () => {
            const { container } = render(
                <EbayNumberInput
                    value={2}
                    min={1}
                    a11yDeleteText="Delete item"
                    onChange={onChange}
                    onDecrement={onDecrement}
                />,
            );
            const decrementButton = container.querySelector(".number-input__decrement");
            await fireEvent.click(decrementButton!);
        });

        it("should decrement the value", () => {
            expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: 1 });
        });

        it("should trigger decrement event", () => {
            expect(onDecrement).toHaveBeenCalledWith(expect.anything(), { value: 1 });
        });
    });
});

describe("given a number input textbox with constraints", () => {
    let onChange: jest.Mock;
    let onIncrement: jest.Mock;
    let onDecrement: jest.Mock;

    beforeEach(() => {
        onChange = jest.fn();
        onIncrement = jest.fn();
        onDecrement = jest.fn();
    });

    describe("when input value exceeds max", () => {
        it("should disable increment button", () => {
            const { container } = render(<EbayNumberInput max={10} min={1} value={1} onChange={onChange} />);
            const incrementDisabledButton = container.querySelector(".number-input__decrement");
            expect(incrementDisabledButton).toHaveAttribute("disabled");
        });
    });

    describe("when increment is pressed at max value", () => {
        beforeEach(async () => {
            const { container } = render(<EbayNumberInput max={10} min={1} value={10} onChange={onChange} onIncrement={onIncrement} />);
            const incrementButton = container.querySelector(".number-input__increment");
            await fireEvent.click(incrementButton!);
        });

        it("should not change the value", () => {
            expect(onChange).not.toHaveBeenCalled();
        });

        it("should not trigger increment event", () => {
            expect(onIncrement).not.toHaveBeenCalled();
        });
    });

    describe("when decrement is pressed", () => {
        beforeEach(async () => {
            const { container } = render(<EbayNumberInput max={10} min={1} value={10} onChange={onChange} onDecrement={onDecrement} />);
            const decrementButton = container.querySelector(".number-input__decrement");
            await fireEvent.click(decrementButton!);
        });

        it("should decrement the value", () => {
            expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: 9 });
        });

        it("should trigger decrement event", () => {
            expect(onDecrement).toHaveBeenCalledWith(expect.anything(), { value: 9 });
        });
    });
});
