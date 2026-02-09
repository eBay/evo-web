import React from "react";
import { beforeEach, expect, it, describe, vi } from "vitest";
import { fireEvent, render, act } from "@testing-library/react";
import { EbayPagination, EbayPaginationItem as Item } from "../index";
import { EbayTabs, EbayTab, EbayTabPanel } from "../../ebay-tabs";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

vi.mock("../../common/random-id");
vi.mock("../../common/debounce", () => ({
    debounce:
        (fn) =>
        (...args) =>
            act(() => fn(...args)),
}));

vi.mock("react-dom", () => {
    const original = jest.requireActual("react-dom");
    return {
        ...original,
        createPortal: (node) => node,
    };
});

describe("<EbayPagination>", () => {
    describe("on page click", () => {
        it("should fire an event", () => {
            const spy = vi.fn();
            const wrapper = render(
                <EbayPagination onSelect={spy}>
                    <Item type="previous" href="#" />
                    <Item href="#">1</Item>
                    <Item href="#">2</Item>
                    <Item href="#">3</Item>
                    <Item href="#">4</Item>
                    <Item href="#">5</Item>
                    <Item current href="#">
                        6
                    </Item>
                    <Item disabled type="next" href="#" />
                </EbayPagination>,
            );
            fireEvent.click(wrapper.getAllByRole("link")[1]);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("on click handler", () => {
        let wrapper;
        let spyOnPrev;
        let spyOnNext;
        let spyOnSelect;

        beforeEach(() => {
            spyOnPrev = vi.fn();
            spyOnNext = vi.fn();
            spyOnSelect = vi.fn();
            wrapper = render(
                <EbayPagination onPrevious={spyOnPrev} onNext={spyOnNext} onSelect={spyOnSelect}>
                    <Item type="previous" href="#" />
                    <Item href="#">1</Item>
                    <Item href="#">2</Item>
                    <Item href="#" current>
                        3
                    </Item>
                    <Item href="#">4</Item>
                    <Item href="#">5</Item>
                    <Item href="#">6</Item>
                    <Item type="next" href="#" />
                </EbayPagination>,
            );
        });

        it("should trigger onPrevious() on clicking prev arrow", () => {
            fireEvent.click(wrapper.getByLabelText("Previous page"));

            expect(spyOnSelect).not.toHaveBeenCalled();
            expect(spyOnPrev).toHaveBeenCalledWith(eventOfType("click"));
            expect(spyOnNext).not.toHaveBeenCalled();
        });

        it("should trigger onNext() on clicking next arrow", () => {
            fireEvent.click(wrapper.getByLabelText("Next page"));

            expect(spyOnSelect).not.toHaveBeenCalled();
            expect(spyOnPrev).not.toHaveBeenCalled();
            expect(spyOnNext).toHaveBeenCalledWith(eventOfType("click"));
        });

        it("should trigger onSelect() on clicking pagination item", () => {
            fireEvent.click(wrapper.getAllByRole("link")[1]);

            expect(spyOnSelect).toHaveBeenCalledWith(eventOfType("click"), { value: "", index: 2 });
            expect(spyOnPrev).not.toHaveBeenCalled();
            expect(spyOnNext).not.toHaveBeenCalled();
        });
    });

    describe("on page resize", () => {
        it("should hide some pagination items when the layout space is too narrow so the selected item is always visible on the center", async () => {
            const wrapper = render(
                <EbayPagination>
                    <Item type="previous" href="#" />
                    <Item href="#">1</Item>
                    <Item href="#">2</Item>
                    <Item href="#">3</Item>
                    <Item href="#">4</Item>
                    <Item href="#">5</Item>
                    <Item current href="#">
                        6
                    </Item>
                    <Item href="#">7</Item>
                    <Item href="#">8</Item>
                    <Item href="#">9</Item>
                    <Item type="next" href="#" />
                </EbayPagination>,
            );
            resizeWindow();
            expect(wrapper.container.querySelectorAll("li")[1]).toHaveAttribute("hidden", "");
        });

        it("should not hide any elements when all items are visible on given narrow space", () => {
            const wrapper = render(
                <EbayPagination>
                    <Item type="previous" href="#" />
                    <Item href="#">5</Item>
                    <Item current href="#">
                        6
                    </Item>
                    <Item href="#">7</Item>
                    <Item type="next" href="#" />
                </EbayPagination>,
            );
            resizeWindow();
            expect(wrapper.container.querySelectorAll("li")[1]).not.toHaveAttribute("hidden");
        });
    });

    describe("inside EbayTab", () => {
        // TODO: Enable this test when running in browser mode - IntersectionObserver and offsetWidth requires a real browser environment
        it.todo("should recalculate visible pages when tab becomes visible", async () => {
            const wrapper = render(
                <EbayTabs>
                    <EbayTab>First Tab</EbayTab>
                    <EbayTab>Second Tab</EbayTab>
                    <EbayTabPanel>
                        <p>First tab content</p>
                    </EbayTabPanel>
                    <EbayTabPanel>
                        <EbayPagination variant="show-last" a11yPreviousText="Previous page" a11yNextText="Next page">
                            <Item type="previous" />
                            <Item>1</Item>
                            <Item current>2</Item>
                            <Item>3</Item>
                            <Item type="next" />
                        </EbayPagination>
                    </EbayTabPanel>
                </EbayTabs>,
            );

            // Click on the second tab to make the pagination visible
            const tabs = wrapper.getAllByRole("tab");
            fireEvent.click(tabs[1]);

            const paginationItems = wrapper.container.querySelectorAll(".pagination__items li");
            expect(paginationItems[0]).not.toHaveAttribute("hidden");
            expect(paginationItems[1]).not.toHaveAttribute("hidden");
            expect(paginationItems[2]).not.toHaveAttribute("hidden");
        });
    });
});

function resizeWindow() {
    // todo: fix this
    // this thing doesn't affect any elements rendered by JSDOM
    // global.window.innerWidth = x
    // global.window.innerHeight = y
    global.window.dispatchEvent(new Event("resize"));
}
