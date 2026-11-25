import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor, fireEvent } from "@marko/testing-library";
import { userEvent } from "vitest/browser";
import * as stories from "../number-input.stories";

const { Default, withDelete } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given an number input textbox", () => {
    beforeEach(async () => {
        component = await render(Default, { value: 1 });
    });

    describe("increment is pressed", () => {
        beforeEach(async () => {
            const increment = component.queryAllByRole("button", {
                hidden: true,
            })[1];
            await increment.click();
        });

        it("it should increment the value", async () => {
            await waitFor(() => {
                expect(component.getByLabelText("Enter a number").value).toBe(
                    "2",
                );
            });
        });
        it("should trigger increment event", async () => {
            await waitFor(() => {
                expect(component.emitted("increment")).has.length(1);
            });
        });

        it("it should set value", async () => {
            const [[data]] = component.emitted("change");
            expect(data.value).toBe(2);
        });
    });

    describe("decrement is pressed", () => {
        beforeEach(async () => {
            const decrement = component.queryAllByRole("button", {
                hidden: true,
            })[0];
            await decrement.click();
        });

        it("it should decrement the value", async () => {
            await waitFor(() => {
                expect(component.getByLabelText("Enter a number").value).toBe(
                    "0",
                );
            });
        });
        it("should trigger increment event", async () => {
            await waitFor(() => {
                expect(component.emitted("decrement")).has.length(0);
            });
        });
    });
});

describe("given an number input textbox when typing", () => {
    it("drops text that isn't part of a whole number", async () => {
        component = await render(Default, { value: 1 });
        const input = component.getByLabelText("Enter a number");
        await userEvent.click(input);
        input.setSelectionRange(1, 1);

        await userEvent.keyboard(".");

        await waitFor(() => expect(input.value).toBe("1"));
    });

    it("steps with the arrow keys and jumps to the bounds with Home and End", async () => {
        component = await render(Default, { min: 1, max: 5, value: 2 });
        const input = component.getByRole("spinbutton");
        await userEvent.click(input);

        await userEvent.keyboard("{ArrowUp}");
        await waitFor(() =>
            expect(input.getAttribute("aria-valuenow")).toBe("3"),
        );
        await userEvent.keyboard("{ArrowDown}{ArrowDown}");
        await waitFor(() => expect(input.value).toBe("1"));
        await userEvent.keyboard("{End}");
        await waitFor(() => expect(input.value).toBe("5"));
        await userEvent.keyboard("{Home}");
        await waitFor(() => expect(input.value).toBe("1"));
        expect(component.emitted("change").at(-1)[0].value).toBe(1);
    });
});

describe("given an number input textbox with delete", () => {
    beforeEach(async () => {
        component = await render(withDelete);
    });

    describe("delete is pressed", () => {
        beforeEach(async () => {
            const del = component.getByLabelText("Delete item");
            await del.click();
        });
        it("it should show delete and trigger event", async () => {
            expect(component.emitted("delete-click")).has.length(1);
        });
    });

    describe("increment is pressed", () => {
        beforeEach(async () => {
            const increment = component.queryAllByRole("button", {
                hidden: true,
            })[2];
            await increment.click();
        });

        it("it should increment the value and hide delete button", async () => {
            await waitFor(() => {
                expect(
                    component.queryByLabelText("Delete item"),
                ).not.toBeVisible();
            });
        });

        it("should trigger increment event", async () => {
            await waitFor(() => {
                expect(component.emitted("increment")).has.length(1);
            });
        });

        it("it should set value", async () => {
            const [[data]] = component.emitted("change");
            expect(data.value).toBe(2);
        });
    });

    describe("decrement is pressed", () => {
        beforeEach(async () => {
            const decrement = component.queryAllByRole("button", {
                hidden: true,
            })[0];
            await decrement.click();
        });

        it("it should decrement the value and keep delete icon", async () => {
            await waitFor(() => {
                expect(component.queryByLabelText("Delete item")).toBeVisible();
            });
        });
        it("should trigger decrement event", async () => {
            await waitFor(() => {
                expect(component.emitted("decrement")).has.length(0);
            });
        });
    });
});

describe("given an number-input textbox with constraints", () => {
    beforeEach(async () => {
        component = await render(Default, { max: 10, min: 1, value: 10 });
    });

    describe("input value", () => {
        beforeEach(async () => {
            await fireEvent.input(component.getByLabelText("Enter a number"), {
                target: { value: "11" },
            });
        });

        it("it should not set value", async () => {
            const [[data]] = component.emitted("change");
            expect(data.value).toBe(10);
        });
        it("should trigger input event", async () => {
            await waitFor(() => {
                expect(component.emitted("change")).has.length(1);
            });
        });
    });

    describe("increment is pressed", () => {
        beforeEach(async () => {
            const increment = component.queryAllByRole("button", {
                hidden: true,
            })[1];
            await increment.click();
        });

        it("it should decrement the value", async () => {
            await waitFor(() => {
                expect(component.getByLabelText("Enter a number").value).toBe(
                    "10",
                );
            });
        });

        it("should not trigger increment event", async () => {
            await waitFor(() => {
                expect(component.emitted("increment")).has.length(0);
            });
        });
    });

    describe("decrement is pressed", () => {
        beforeEach(async () => {
            const decrement = component.queryAllByRole("button", {
                hidden: true,
            })[0];
            await decrement.click();
        });

        it("it should decrement the value", async () => {
            await waitFor(() => {
                expect(component.getByLabelText("Enter a number").value).toBe(
                    "9",
                );
            });
        });

        it("it should set value", async () => {
            const [[data]] = component.emitted("change");
            expect(data.value).toBe(9);
        });

        it("should trigger decrement event", async () => {
            await waitFor(() => {
                expect(component.emitted("decrement")).has.length(1);
                expect(component.emitted("change")).has.length(1);
            });
        });
    });
});
