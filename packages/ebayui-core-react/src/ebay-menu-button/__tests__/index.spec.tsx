import React, { useState } from "react";
import { vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayMenuButton, EbayMenuButtonItem } from "../index";

const spy = vi.fn();

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

    it("should update the checkboxes on click", async () => {
        render(
            <EbayMenuButton type="checkbox" text="Open">
                <EbayMenuButtonItem value="first" />
                <EbayMenuButtonItem value="second" />
            </EbayMenuButton>,
        );

        await userEvent.click(screen.getByText("Open"));

        const [firstCheck, secondCheck] = screen.getAllByRole("menuitemcheckbox");

        expect(firstCheck).toHaveAttribute("aria-checked", "false");
        expect(secondCheck).toHaveAttribute("aria-checked", "false");

        await userEvent.click(firstCheck);
        expect(firstCheck).toHaveAttribute("aria-checked", "true");
        expect(secondCheck).toHaveAttribute("aria-checked", "false");

        await userEvent.click(secondCheck);
        expect(firstCheck).toHaveAttribute("aria-checked", "true");
        expect(secondCheck).toHaveAttribute("aria-checked", "true");
    });

    it("should update the checked values when children checked are changed", async () => {
        const TestCase = () => {
            const [checked, setChecked] = useState([false, true]);
            return (
                <>
                    <EbayMenuButton type="checkbox" text="Open">
                        <EbayMenuButtonItem value="first" checked={checked[0]} />
                        <EbayMenuButtonItem value="second" checked={checked[1]} />
                    </EbayMenuButton>

                    <button onClick={() => setChecked([true, false])}>Reset</button>
                </>
            );
        };

        render(<TestCase />);

        await userEvent.click(screen.getByText("Open"));

        {
            const [firstCheck, secondCheck] = screen.getAllByRole("menuitemcheckbox");

            expect(firstCheck).toHaveAttribute("aria-checked", "false");
            expect(secondCheck).toHaveAttribute("aria-checked", "true");
        }

        const reset = screen.getByText("Reset");
        await userEvent.click(reset);
        await userEvent.click(screen.getByText("Open"));

        {
            const [firstCheck, secondCheck] = screen.getAllByRole("menuitemcheckbox");
            expect(firstCheck).toHaveAttribute("aria-checked", "true");
            expect(secondCheck).toHaveAttribute("aria-checked", "false");
        }
    });

    it("should not emit events when disabled", async () => {
        const spyCall = vi.fn();
        render(
            <EbayMenuButton type="radio" text="Open" onChange={spyCall}>
                <EbayMenuButtonItem value="first" disabled />
                <EbayMenuButtonItem value="second" />
                <EbayMenuButtonItem value="third" />
            </EbayMenuButton>,
        );

        await userEvent.click(screen.getByText("Open"));

        const itemFirst = screen.getAllByRole("menuitemradio")[0];

        await userEvent.click(itemFirst);

        expect(spyCall).not.toHaveBeenCalled();

        const itemSecond = screen.getAllByRole("menuitemradio")[1];

        await userEvent.click(itemSecond);

        const expectedEventProps = {
            index: 1,
            indexes: [1],
            checked: [1],
            checkedValues: ["second"],
        };

        expect(spyCall).toHaveBeenCalledWith(expect.any(Object), expectedEventProps);
    });
});
