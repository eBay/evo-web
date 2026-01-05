import React from "react";
import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";
import { EbaySwitch } from "../index";

describe("<EbaySwitch>", () => {
    describe("on switch-button click", () => {
        it("should fire an onChange callback", () => {
            const spy = vi.fn();
            const value = "test";
            const wrapper = render(<EbaySwitch value={value} onChange={spy} />);
            fireEvent.click(wrapper.container.querySelector("input"));

            expect(spy).toHaveBeenCalledWith(eventOfType("change"), { value, checked: true });
        });

        it("should not change when controlled", () => {
            const checked = true;
            const wrapper = render(<EbaySwitch checked={checked} />);
            const input = wrapper.container.querySelector("input");
            fireEvent.click(input);

            expect(input?.checked).toBe(checked);
        });
    });
});
