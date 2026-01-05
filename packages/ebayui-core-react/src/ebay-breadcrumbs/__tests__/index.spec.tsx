import React from "react";
import { vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbayBreadcrumbs, EbayBreadcrumbItem } from "../index";

describe("<EbayBreadcrumbs>", () => {
    describe("on category click", () => {
        it("should fire an event", async () => {
            const spy = vi.fn();
            const wrapper = render(
                <EbayBreadcrumbs onSelect={spy}>
                    <EbayBreadcrumbItem>home</EbayBreadcrumbItem>
                </EbayBreadcrumbs>,
            );
            const button = wrapper.getByRole("button");
            await userEvent.click(button);

            expect(spy).toHaveBeenCalledWith(eventOfType("click"));
        });
    });

    describe("rendering lists", () => {
        it("should render breadcrumb items from a list", () => {
            const items = ["home", "listings", "about"];

            const wrapper = render(
                <EbayBreadcrumbs>
                    {items.map((item, index) => (
                        <EbayBreadcrumbItem key={index}>{item}</EbayBreadcrumbItem>
                    ))}
                </EbayBreadcrumbs>,
            );

            // Test all items are displayed in correct order.
            items.forEach((value, index) => {
                expect(wrapper.getAllByRole("button")[index].textContent).toEqual(value);
            });
        });
    });
});
