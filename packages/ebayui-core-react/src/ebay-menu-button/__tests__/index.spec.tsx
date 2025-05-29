import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { EbayMenuButton, EbayMenuButtonItem } from "../index";

const spy = jest.fn();

describe("<EbayMenuButton>", () => {
    describe("on button click", () => {
        it("should fire onExpand event", () => {
            const wrapper = render(
                <EbayMenuButton onExpand={spy}>
                    <EbayMenuButtonItem />
                </EbayMenuButton>,
            );
            fireEvent.click(wrapper.container.querySelector("button"));

            expect(spy).toHaveBeenCalled();
        });
        it("should fire onCollapse event", () => {
            const wrapper = render(
                <EbayMenuButton onCollapse={spy}>
                    <EbayMenuButtonItem />
                </EbayMenuButton>,
            );

            const button = wrapper.container.querySelector("button");
            fireEvent.click(button);
            fireEvent.click(button);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("on menu item click", () => {
        it("should fire onSelect event", () => {
            const wrapper = render(
                <EbayMenuButton onSelect={spy}>
                    <EbayMenuButtonItem value="first" />
                    <EbayMenuButtonItem value="second" />
                </EbayMenuButton>,
            );

            const button = wrapper.container.querySelector("button");
            fireEvent.click(button);
            const item = screen.getAllByRole("menuitem")[1];
            fireEvent.click(item);

            const expectedEventProps = {
                index: 1,
                checked: [1],
            };
            expect(spy).toHaveBeenCalledWith(expect.any(Object), expectedEventProps);
        });
    });

    describe('type="radio"', () => {
        it("should fire onChange event", () => {
            const wrapper = render(
                <EbayMenuButton type="radio" onChange={spy}>
                    <EbayMenuButtonItem value="first" />
                    <EbayMenuButtonItem value="second" />
                </EbayMenuButton>,
            );

            const button = wrapper.container.querySelector("button");
            fireEvent.click(button);
            const item = screen.getAllByRole("menuitemradio")[1];
            fireEvent.click(item);

            const expectedEventProps = {
                index: 1,
                indexes: [1],
                checked: [1],
                checkedValues: ["second"],
            };
            expect(spy).toHaveBeenCalledWith(expect.any(Object), expectedEventProps);
        });
    });

    describe('type="checkbox"', () => {
        it("should fire onChange event", () => {
            const wrapper = render(
                <EbayMenuButton type="checkbox" onChange={spy}>
                    <EbayMenuButtonItem value="first" />
                    <EbayMenuButtonItem value="second" />
                </EbayMenuButton>,
            );

            const button = wrapper.container.querySelector("button");
            fireEvent.click(button);
            const item = screen.getAllByRole("menuitemcheckbox")[1];
            fireEvent.click(item);

            const expectedEventProps = {
                index: 1,
                indexes: [1],
                checked: [1],
                checkedValues: ["second"],
            };

            expect(spy).toHaveBeenCalledWith(expect.any(Object), expectedEventProps);
        });
    });
});
