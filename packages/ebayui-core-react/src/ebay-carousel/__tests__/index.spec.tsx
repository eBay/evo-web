/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Continuous, ItemsPerSlide, PreserveTabIndex } from "./index.stories";
import { EbayCarousel, EbayCarouselItem } from "..";
import { beforeEach, afterEach, expect, vi, describe, it } from "vitest";

const ContinuousStory = composeStory(Continuous, Meta);
const ItemsPerSlideStory = composeStory(ItemsPerSlide, Meta);
const PreserveTabIndexStory = composeStory(PreserveTabIndex, Meta);

// NOTE: need to mock scrollTo since JSDOM does not support it
vi.mock("../scroll-to-transition");

// Testing current slide or items per slides is not possible
// because we are using `getBoundingClientRect()` and when testing it returns 0 everytime
describe("ebay-carousel rendering", () => {
    it("renders continuous story correctly", () => {
        const { container } = render(<ContinuousStory />);
        const carousel = container.querySelector(".carousel .carousel__container");
        expect(carousel).toBeInTheDocument();

        const [buttonPrev, buttonNext] = screen.getAllByRole("button");
        expect(buttonPrev).toMatchSnapshot();
        expect(buttonNext).toMatchSnapshot();

        expect(carousel.querySelector(".carousel__viewport")).toBeInTheDocument();
        const itemList = screen.getByRole("list");
        expect(itemList).toHaveClass("carousel__list");
        expect(itemList).toHaveAttribute("style", "transform: translate3d(0px, 0, 0);");

        const items = screen.getAllByRole("listitem");
        const firstItem = items[0];
        expect(firstItem).toHaveClass("carousel__snap-point");
        expect(firstItem).toHaveAttribute(
            "style",
            "color: rgb(10, 28, 107); background: rgb(194, 245, 255); font-size: 24px; font-weight: bold; width: 200px; height: 120px; line-height: 120px; text-align: center; margin-right: 16px;",
        );

        const visibleItems = items.filter((item) => item.getAttribute("aria-hidden"));
        expect(visibleItems.length).toBe(items.length);
    });

    it("renders items per slide story correctly", () => {
        render(<ItemsPerSlideStory />);

        const itemList = screen.getByRole("list");
        expect(itemList).toHaveClass("carousel__list");

        const items = screen.getAllByRole("listitem");
        const firstItem = items[0];
        expect(firstItem).toHaveAttribute("aria-hidden", "false");

        // todo: fix this test
        // const lastItem = items[items.length - 1]
        // expect(lastItem).toHaveAttribute('aria-hidden', 'true')
        const visibleItems = items.filter((item) => item.getAttribute("aria-hidden"));
        // expect(visibleItems.length).toBe(3)
        expect(visibleItems.length).toBe(items.length);
    });

    it("should disable focus when elements are not visible", () => {
        render(<PreserveTabIndexStory />);

        const itemList = screen.getByRole("list");
        expect(itemList).toHaveClass("carousel__list");

        const items = screen.getAllByRole("listitem");
        const firstItem = items[0];
        expect(firstItem).toHaveAttribute("aria-hidden", "false");

        // TODO: enable with browser mode testing
        // const [dataTabIndexLink, link] = firstItem.querySelectorAll("a");
        // expect(dataTabIndexLink).toHaveAttribute("tabindex", "-1");
        // expect(dataTabIndexLink).toHaveAttribute("data-carousel-tabindex", "-1");
        // expect(link).not.toHaveAttribute("tabindex");

        // TODO: enable with browser mode testing
        // const lastItem = items[items.length - 1];
        // expect(lastItem).toHaveAttribute('aria-hidden', 'true')
        // expect(lastItemDataLink).toHaveAttribute("tabindex", "-1");
        // expect(lastItemLink).toHaveAttribute('tabindex', '-1')
    });

    describe("autoplay", () => {
        beforeEach(() => {
            vi.useFakeTimers();
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it("should autoplay the carousel", () => {
            render(
                <div style={{ width: `300px`, maxWidth: `300px` }}>
                    <EbayCarousel autoplay itemsPerSlide={1}>
                        <EbayCarouselItem style={{ width: `300px` }}>Item 1</EbayCarouselItem>
                        <EbayCarouselItem style={{ width: `300px` }}>Item 2</EbayCarouselItem>
                        <EbayCarouselItem style={{ width: `300px` }}>Item 3</EbayCarouselItem>
                    </EbayCarousel>
                </div>,
            );
            const firstItem = screen.getByText("Item 1");
            const secondItem = screen.getByText("Item 2");

            expect(firstItem.closest("li")).toHaveAttribute("aria-hidden", "false");

            // TODO: Update when using vitest browser mode as getBoundingClientRect() is not supported in JSDOM
            // expect(secondItem.closest('li')).toHaveAttribute('aria-hidden', 'true')

            vi.advanceTimersByTime(4000);
            // expect(firstItem.closest('li')).toHaveAttribute('aria-hidden', 'true')
            expect(secondItem.closest("li")).toHaveAttribute("aria-hidden", "false");
        });
    });

    describe("single item", () => {
        it("renders without throwing when there is only one item", () => {
            render(
                <EbayCarousel>
                    <EbayCarouselItem>Item 1</EbayCarouselItem>
                </EbayCarousel>,
            );

            expect(screen.getByText("Item 1")).toBeInTheDocument();
        });

        it("does not throw when the index prop is out of range for a single item", () => {
            render(
                <EbayCarousel index={1}>
                    <EbayCarouselItem>Item 1</EbayCarouselItem>
                </EbayCarousel>,
            );

            expect(screen.getByText("Item 1")).toBeInTheDocument();
        });

        it("does not throw when the index prop is negative", () => {
            render(
                <EbayCarousel index={-1}>
                    <EbayCarouselItem>Item 1</EbayCarouselItem>
                </EbayCarousel>,
            );

            expect(screen.getByText("Item 1")).toBeInTheDocument();
        });
    });

    describe("measuring with ResizeObserver", () => {
        class FakeResizeObserver {
            static instances: FakeResizeObserver[] = [];
            targets = new Set<Element>();

            constructor(public callback: ResizeObserverCallback) {
                FakeResizeObserver.instances.push(this);
            }

            observe(target: Element) {
                this.targets.add(target);
            }

            unobserve(target: Element) {
                this.targets.delete(target);
            }

            disconnect() {
                this.targets.clear();
            }
        }

        const rectOf = (el: Element) => {
            if (el.classList.contains("carousel__container")) {
                return { left: 0, right: 300, width: 300 };
            }
            if (el.tagName === "LI") {
                const left = Array.from(el.parentElement.children).indexOf(el) * 216;
                return { left, right: left + 200, width: 200 };
            }
            return { left: 0, right: 0, width: 0 };
        };

        const notifyResize = (height: number) =>
            act(() => {
                for (const observer of FakeResizeObserver.instances) {
                    const entries = Array.from(observer.targets, (target) => ({
                        target,
                        contentRect: { width: rectOf(target).width, height },
                    })) as unknown as ResizeObserverEntry[];
                    if (entries.length) {
                        observer.callback(entries, observer as unknown as ResizeObserver);
                    }
                }
            });

        let getBoundingClientRect;

        beforeEach(() => {
            FakeResizeObserver.instances = [];
            vi.stubGlobal("ResizeObserver", FakeResizeObserver);
            getBoundingClientRect = vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function (
                this: Element,
            ) {
                const { left, right, width } = rectOf(this);
                return { left, right, width, top: 0, bottom: 0, height: 100, x: left, y: 0 } as DOMRect;
            });
        });

        afterEach(() => {
            vi.unstubAllGlobals();
            vi.restoreAllMocks();
        });

        const renderCarousel = () =>
            render(
                <EbayCarousel a11yPreviousText="Previous" a11yNextText="Next">
                    <EbayCarouselItem>Item 1</EbayCarouselItem>
                    <EbayCarouselItem>Item 2</EbayCarouselItem>
                    <EbayCarouselItem>Item 3</EbayCarouselItem>
                </EbayCarousel>,
            );

        it("hides items that do not fit after a resize notification", () => {
            renderCarousel();
            expect(screen.getByLabelText("Next")).toHaveAttribute("aria-disabled", "true");

            notifyResize(100);

            const items = screen.getAllByRole("listitem", { hidden: true });
            expect(items.map((item) => item.getAttribute("aria-hidden"))).toEqual(["false", "true", "true"]);
            expect(screen.getByLabelText("Next")).toHaveAttribute("aria-disabled", "false");
        });

        it("measures on width changes but not on height-only changes", () => {
            renderCarousel();
            getBoundingClientRect.mockClear();

            notifyResize(100);
            expect(getBoundingClientRect).toHaveBeenCalled();

            getBoundingClientRect.mockClear();
            notifyResize(150);
            expect(getBoundingClientRect).not.toHaveBeenCalled();
        });

        it("does not measure when hovering the carousel", () => {
            const { container } = renderCarousel();
            notifyResize(100);
            getBoundingClientRect.mockClear();

            fireEvent.mouseEnter(container.querySelector(".carousel__container"));

            expect(getBoundingClientRect).not.toHaveBeenCalled();
        });

        it("removes hidden items' focusable children from the tab order", () => {
            vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(100);
            render(<PreserveTabIndexStory />);
            notifyResize(100);

            const [firstItem, secondItem] = screen.getAllByRole("listitem", { hidden: true });
            const [firstDataTabIndexLink, firstLink] = firstItem.querySelectorAll("a");
            const [secondDataTabIndexLink, secondLink] = secondItem.querySelectorAll("a");

            expect(firstDataTabIndexLink).toHaveAttribute("tabindex", "-1");
            expect(firstLink).not.toHaveAttribute("tabindex");
            expect(secondDataTabIndexLink).toHaveAttribute("tabindex", "-1");
            expect(secondLink).toHaveAttribute("tabindex", "-1");
        });
    });
});
