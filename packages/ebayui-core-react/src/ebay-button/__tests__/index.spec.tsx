import React, { FC, Ref } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import Meta, { Default, Size, Priority, DestructiveVariant } from "./index.stories";
import { EbayButton, EbayButtonProps } from "../index";

const DefaultStory = composeStory(Default, Meta);
const SizeStory = composeStory(Size, Meta);
const PriorityStory = composeStory(Priority, Meta);
const DestructiveVariantStory = composeStory(DestructiveVariant, Meta);

describe("<EbayButton>", () => {
    describe("Default story", () => {
        beforeEach(() => {
            render(<DefaultStory />);
        });

        it("renders button correctly", () => {
            const button = screen.getByRole("button");
            expect(button).toHaveTextContent("Hello, I am a button!");
            expect(button).toHaveClass("btn btn--secondary");
        });

        it("renders link correctly", () => {
            const link = screen.getByRole("link");
            expect(link).toHaveAttribute("href", "https://ebay.com");
            expect(link).toHaveTextContent("Hello, I am a link!");
            expect(link).toHaveClass("fake-btn fake-btn--secondary");
        });
    });

    describe("Size story", () => {
        beforeEach(() => {
            render(<SizeStory />);
        });

        it("renders large button correctly", () => {
            const button = screen.getByText("Large Button");
            expect(button).toHaveClass("btn btn--secondary btn--large");
        });

        it("renders default size button correctly", () => {
            const button = screen.getByText("Default Size Button");
            expect(button).toHaveClass("btn btn--secondary");
        });
    });

    describe("Priority story", () => {
        beforeEach(() => {
            render(<PriorityStory />);
        });

        it("renders primary button correctly", () => {
            const button = screen.getByText("Primary Button");
            expect(button).toHaveClass("btn btn--primary");
        });

        it("renders secondary button correctly", () => {
            const button = screen.getByText("Secondary Button");
            expect(button).toHaveClass("btn btn--secondary");
        });
    });

    describe("DestructiveVariant story", () => {
        beforeEach(() => {
            render(<DestructiveVariantStory />);
        });

        it("renders primary destructive button correctly", () => {
            const button = screen.getByText("Primary Button");
            expect(button).toHaveClass("btn btn--primary btn--destructive");
        });

        it("renders secondary destructive button correctly", () => {
            const button = screen.getByText("Secondary Button");
            expect(button).toHaveClass("btn btn--secondary btn--destructive");
        });
    });

    describe("on passing a ref", () => {
        it("should set the ref to button element", () => {
            const ref = React.createRef<HTMLButtonElement>();
            render(<EbayButton ref={ref as unknown as Ref<FC<EbayButtonProps>>} />);

            expect(ref.current!.tagName).toBe("BUTTON");
        });

        it("should set the ref to a element", () => {
            const ref = React.createRef<HTMLAnchorElement>();
            render(<EbayButton href="https://www.ebay.com" ref={ref as unknown as Ref<FC<EbayButtonProps>>} />);

            expect(ref.current!.tagName).toBe("A");
        });
    });

    describe("should fire the corresponding callbacks", () => {
        it("on click", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayButton onClick={spy} />);

            fireEvent.click(wrapper.getByRole("button"));

            expect(spy).toHaveBeenCalledWith(eventOfType("click"));
        });
        it("on escape", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayButton onEscape={spy} />);

            fireEvent.keyDown(wrapper.getByRole("button"), { key: "Escape" });

            expect(spy).toHaveBeenCalledWith(eventOfType("keydown"));
        });
        it("on focus", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayButton onFocus={spy} />);

            fireEvent.focus(wrapper.getByRole("button"));

            expect(spy).toHaveBeenCalledWith(eventOfType("focus"));
        });
        it("on blur", () => {
            const spy = jest.fn();
            const wrapper = render(<EbayButton onBlur={spy} />);

            fireEvent.blur(wrapper.getByRole("button"));

            expect(spy).toHaveBeenCalledWith(eventOfType("blur"));
        });
    });
});
