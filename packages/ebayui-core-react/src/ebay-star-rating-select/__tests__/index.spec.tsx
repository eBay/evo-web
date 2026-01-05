/* eslint-disable vitest/expect-expect */
import React from "react";
import { vi } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Isolated, Fieldset } from "./mocks";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

const htmlSnap = async (ui: React.ReactElement): Promise<void> => {
    const { asFragment } = await render(ui);
    expect(asFragment()).toMatchSnapshot();
};

let component;
const onChangeSpy = vi.fn();
const onFocusSpy = vi.fn();
const onKeyDownSpy = vi.fn();

describe("star-rating-select", () => {
    it("renders defaults", async () => {
        await htmlSnap(<Isolated a11yText={null} a11yStarText={null} />);
    });

    it("renders basic fieldset", async () => {
        await htmlSnap(<Fieldset />);
    });

    it("renders with 0 selected", async () => {
        await htmlSnap(<Isolated value="0" />);
    });

    it("renders with 2 selected", async () => {
        await htmlSnap(<Isolated value="2" />);
    });

    it("renders with 5 selected", async () => {
        await htmlSnap(<Isolated value="5" />);
    });

    describe("given star rating", () => {
        afterEach(cleanup);

        beforeEach(async () => {
            onChangeSpy.mockReset();
            component = await render(<Isolated onChange={onChangeSpy} />);
            await fireEvent.click(component.getByLabelText("2 stars"));
        });

        it("should emit the onChange event with 2", () => {
            expect(onChangeSpy).toHaveBeenCalledTimes(1);
            expect(onChangeSpy).toHaveBeenCalledWith(eventOfType("click"), { value: 2 });
        });

        describe("when star is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText("4 stars"));
            });

            it("should emit the onChange event with 4", () => {
                expect(onChangeSpy).toHaveBeenCalledTimes(2);
                expect(onChangeSpy).toHaveBeenCalledWith(eventOfType("click"), { value: 4 });
            });
        });
    });

    describe("given star is disabled", () => {
        beforeEach(async () => {
            onChangeSpy.mockReset();
            component = await render(<Isolated onChange={onChangeSpy} disabled />);
        });

        describe("when star is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText("2 stars"));
            });

            it("should not emit the change event", () => {
                expect(onChangeSpy).toHaveBeenCalledTimes(0);
            });
        });
    });

    describe("when native focus event is fired on star", () => {
        beforeEach(async () => {
            onFocusSpy.mockReset();
            component = await render(<Isolated onFocus={onFocusSpy} />);
            await fireEvent.focus(component.getByLabelText("2 stars"));
        });

        it("should emit the focus event", () => {
            expect(onFocusSpy).toHaveBeenCalledTimes(1);
            expect(onFocusSpy).toHaveBeenCalledWith(eventOfType("focus"), { value: 2 });
        });
    });

    describe("when native keyboard event is fired on star", () => {
        beforeEach(async () => {
            onKeyDownSpy.mockReset();
            component = await render(<Isolated onKeyDown={onKeyDownSpy} />);
            await fireEvent.keyDown(component.getByLabelText("5 stars"));
        });

        it("should emit the onKeyDown event", () => {
            expect(onKeyDownSpy).toHaveBeenCalledTimes(1);
            expect(onKeyDownSpy).toHaveBeenCalledWith(eventOfType("keydown"), { value: 5 });
        });
    });
});
