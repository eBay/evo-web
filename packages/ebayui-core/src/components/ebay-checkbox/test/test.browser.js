import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { userEvent } from "vitest/browser";
import template from "../index.marko";

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given checkbox button is enabled", () => {
    beforeEach(async () => {
        component = await render(template, {
            htmlAttributes: { value: "food" },
        });
    });

    describe("when checkbox button is clicked", () => {
        beforeEach(async () => {
            await component.getByRole("checkbox").click();
        });

        it("then it emitted the change event", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("value", "food");
            expect(changeEvent).has.property("checked", true);
        });

        it("then it is checked", () => {
            expect(component.getByRole("checkbox")).has.property(
                "checked",
                true,
            );
        });
    });
});

describe("given checkbox button is disabled", () => {
    beforeEach(async () => {
        component = await render(template, { disabled: true });
    });

    describe("when checkbox button is clicked", () => {
        beforeEach(async () => {
            await component.getByRole("checkbox").click();
        });

        it("then it does not emit the change event", () => {
            expect(component.emitted("change")).has.length(0);
        });

        it("then it remains unchecked", () => {
            expect(component.getByRole("checkbox")).has.property(
                "checked",
                false,
            );
        });
    });
});

describe("given checkbox button is initially checked", () => {
    beforeEach(async () => {
        component = await render(template, {
            htmlAttributes: { value: "food", checked: true },
        });
    });

    describe("when checkbox button is clicked", () => {
        beforeEach(async () => {
            await component.getByRole("checkbox").click();
        });

        it("then it unchecks", () => {
            expect(component.getByRole("checkbox")).has.property(
                "checked",
                false,
            );
        });

        it("then it emits change event with checked false", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("checked", false);
        });
    });
});

describe("given checkbox button is enabled", () => {
    beforeEach(async () => {
        component = await render(template, {
            htmlAttributes: { value: "food" },
        });
    });

    describe("when Space key is pressed", () => {
        beforeEach(async () => {
            component.getByRole("checkbox").focus();
            await userEvent.keyboard(" ");
        });

        it("then it toggles to checked state", () => {
            expect(component.getByRole("checkbox")).has.property(
                "checked",
                true,
            );
        });

        it("then it emits change event with checked true", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("value", "food");
            expect(changeEvent).has.property("checked", true);
        });
    });

    describe("when a key is pressed", () => {
        beforeEach(async () => {
            component.getByRole("checkbox").focus();
            await fireEvent.keyDown(component.getByRole("checkbox"));
        });

        it("then it emits keydown event with originalEvent and value", () => {
            const keydownEvents = component.emitted("keydown");
            expect(keydownEvents).has.length(1);

            const [[keydownEvent]] = keydownEvents;
            expect(keydownEvent)
                .has.property("originalEvent")
                .is.an.instanceOf(Event);
            expect(keydownEvent).has.property("value", "food");
        });
    });
});

describe("given checkbox button is initially checked and enabled", () => {
    beforeEach(async () => {
        component = await render(template, {
            htmlAttributes: { value: "food", checked: true },
        });
    });

    describe("when Space key is pressed", () => {
        beforeEach(async () => {
            component.getByRole("checkbox").focus();
            await userEvent.keyboard(" ");
        });

        it("then it unchecks", () => {
            expect(component.getByRole("checkbox")).has.property(
                "checked",
                false,
            );
        });

        it("then it emits change event with checked false", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("checked", false);
        });
    });
});

describe("ARIA attributes", () => {
    describe("given a default checkbox", () => {
        beforeEach(async () => {
            component = await render(template, {
                htmlAttributes: { value: "food" },
            });
        });

        it("then it has type checkbox", () => {
            expect(component.getByRole("checkbox")).has.property(
                "type",
                "checkbox",
            );
        });

        it("then it is unchecked by default", () => {
            expect(component.getByRole("checkbox")).has.property(
                "checked",
                false,
            );
        });
    });

    describe("given a checked checkbox", () => {
        beforeEach(async () => {
            component = await render(template, {
                htmlAttributes: { checked: true },
            });
        });

        it("then it renders as checked", () => {
            expect(component.getByRole("checkbox")).has.property(
                "checked",
                true,
            );
        });
    });

    describe("given a disabled checkbox", () => {
        beforeEach(async () => {
            component = await render(template, { disabled: true });
        });

        it("then it has the disabled attribute", () => {
            expect(component.getByRole("checkbox")).has.property(
                "disabled",
                true,
            );
        });
    });
});

describe("when native focus event is fired", () => {
    beforeEach(async () => {
        component = await render(template, {
            htmlAttributes: { value: "food" },
        });
        await fireEvent.focus(component.getByRole("checkbox"));
    });

    it("then it emits the event", () => {
        const events = component.emitted("focus");
        expect(events).has.length(1);

        const [[eventArg]] = events;
        expect(eventArg).has.property("value", "food");
        expect(eventArg).has.property("originalEvent").is.an.instanceOf(Event);
    });
});
