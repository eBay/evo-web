/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { EbayFilterChip } from "../index";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbayFilterChip />", () => {
    describe("default variant", () => {
        it("should trigger onClick when button is clicked", async () => {
            const onClick = jest.fn();
            const { getByRole } = render(<EbayFilterChip onClick={onClick}>Filter Chip</EbayFilterChip>);

            await userEvent.click(getByRole("button"));

            expect(onClick).toHaveBeenCalledWith(eventOfType("click"), {
                selected: true,
                expanded: false,
            });
        });

        it("should toggle selected state on click", async () => {
            const onClick = jest.fn();
            const { getByRole } = render(<EbayFilterChip onClick={onClick}>Filter Chip</EbayFilterChip>);

            const button = getByRole("button");

            // First click - should select
            await userEvent.click(button);
            expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
                selected: true,
                expanded: false,
            });

            // Second click - should deselect
            await userEvent.click(button);
            expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
                selected: false,
                expanded: false,
            });
        });

        it("should set aria-pressed based on selected state", async () => {
            const { getByRole } = render(<EbayFilterChip>Filter Chip</EbayFilterChip>);

            const button = getByRole("button");
            expect(button).toHaveAttribute("aria-pressed", "false");

            await userEvent.click(button);
            expect(button).toHaveAttribute("aria-pressed", "true");
        });

        it("should support controlled selected state", () => {
            const { getByRole } = render(<EbayFilterChip selected>Filter Chip</EbayFilterChip>);

            expect(getByRole("button")).toHaveAttribute("aria-pressed", "true");
        });
    });

    describe("menu variant", () => {
        it("should toggle expanded state on click", async () => {
            const onClick = jest.fn();
            const { getByRole } = render(
                <EbayFilterChip variant="menu" onClick={onClick}>
                    Menu Filter
                </EbayFilterChip>,
            );

            const button = getByRole("button");

            // First click - should expand
            await userEvent.click(button);
            expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
                selected: false,
                expanded: true,
            });

            // Second click - should collapse
            await userEvent.click(button);
            expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
                selected: false,
                expanded: false,
            });
        });

        it("should set aria-expanded based on expanded state", async () => {
            const { getByRole } = render(<EbayFilterChip variant="menu">Menu Filter</EbayFilterChip>);

            const button = getByRole("button");
            expect(button).toHaveAttribute("aria-expanded", "false");

            await userEvent.click(button);
            expect(button).toHaveAttribute("aria-expanded", "true");
        });

        it("should support controlled expanded state", () => {
            const { getByRole } = render(
                <EbayFilterChip variant="menu" expanded>
                    Menu Filter
                </EbayFilterChip>,
            );

            expect(getByRole("button")).toHaveAttribute("aria-expanded", "true");
        });

        it("should render trailing chevron icon", () => {
            const { container } = render(<EbayFilterChip variant="menu">Menu Filter</EbayFilterChip>);

            expect(container.querySelector(".filter-chip__trailing")).toBeInTheDocument();
        });
    });

    describe("anchor variant", () => {
        it("should render as anchor when href is provided", () => {
            const { getByRole } = render(<EbayFilterChip href="/test">Link Filter</EbayFilterChip>);

            expect(getByRole("link")).toBeInTheDocument();
            expect(getByRole("link")).toHaveAttribute("href", "/test");
        });

        it("should show selected text when selected", () => {
            const { container } = render(
                <EbayFilterChip href="/test" selected>
                    Link Filter
                </EbayFilterChip>,
            );

            expect(container.querySelector(".clipped")).toHaveTextContent("- Filter Applied");
        });

        it("should use custom a11ySelectedText", () => {
            const { container } = render(
                <EbayFilterChip href="/test" selected a11ySelectedText="Custom Selected">
                    Link Filter
                </EbayFilterChip>,
            );

            expect(container.querySelector(".clipped")).toHaveTextContent("- Custom Selected");
        });
    });

    describe("expressive variant", () => {
        it("should render image when provided", () => {
            const { container } = render(
                <EbayFilterChip variant="expressive" image={<img src="test.jpg" alt="test" />}>
                    Expressive Filter
                </EbayFilterChip>,
            );

            expect(container.querySelector(".filter-chip__media")).toBeInTheDocument();
            expect(container.querySelector("img")).toHaveAttribute("src", "test.jpg");
        });

        it("should use custom image component when as prop is provided", () => {
            const CustomImage = (props: Record<string, unknown>) => <div data-testid="custom-image" {...props} />;
            const { getByTestId } = render(
                <EbayFilterChip variant="expressive" image={<CustomImage src="test.jpg" alt="test" />}>
                    Expressive Filter
                </EbayFilterChip>,
            );

            expect(getByTestId("custom-image")).toBeInTheDocument();
        });
    });

    describe("disabled state", () => {
        it("should not trigger onClick when disabled", async () => {
            const onClick = jest.fn();
            const { getByRole } = render(
                <EbayFilterChip disabled onClick={onClick}>
                    Disabled Filter
                </EbayFilterChip>,
            );

            await userEvent.click(getByRole("button"));

            expect(onClick).not.toHaveBeenCalled();
        });

        it("should have disabled attribute when disabled", () => {
            const { getByRole } = render(<EbayFilterChip disabled>Disabled Filter</EbayFilterChip>);

            expect(getByRole("button")).toBeDisabled();
        });
    });

    describe("styling and classes", () => {
        it("should support passing a className", () => {
            const { container } = render(<EbayFilterChip className="my-class">Filter Chip</EbayFilterChip>);

            expect(container.querySelector(".filter-chip")).toHaveClass("my-class");
        });

        it("should add animated class when mounted", () => {
            const { container } = render(<EbayFilterChip>Filter Chip</EbayFilterChip>);

            expect(container.querySelector(".filter-chip")).toHaveClass("filter-chip--animated");
        });

        it("should add expressive class for expressive variant", () => {
            const { container } = render(<EbayFilterChip variant="expressive">Expressive Filter</EbayFilterChip>);

            expect(container.querySelector(".filter-chip")).toHaveClass("filter-chip--expressive");
        });

        it("should add selected class for selected anchor", () => {
            const { container } = render(
                <EbayFilterChip href="/test" selected>
                    Link Filter
                </EbayFilterChip>,
            );

            expect(container.querySelector(".filter-chip")).toHaveClass("filter-chip--selected");
        });
    });
});
