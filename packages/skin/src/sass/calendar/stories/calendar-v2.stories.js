import { createCalendar } from "./calendar-v2-interactive.js";
import { fromKey } from "./calendar-v2-markup.js";

export default {
    title: "Skin/Calendar/V2",
    args: {
        layout: "single",
        mode: "single",
    },
    argTypes: {
        layout: {
            control: "inline-radio",
            options: ["single", "double"],
            description:
                "One or two adjacent months. Month and year views always use a single panel",
        },
        mode: {
            control: "inline-radio",
            options: ["single", "range"],
            description: "Select one date, or a start and end date",
        },
    },
};

const numeric = (key) => {
    const { year, month, day } = fromKey(key);
    return [month + 1, day]
        .map((n) => String(n).padStart(2, "0"))
        .concat(year)
        .join("/");
};

const interactiveCalendar = ({ mode, layout, view }) => {
    const wrapper = document.createElement("div");
    const output = document.createElement("p");
    output.style.font = "var(--typography-caption)";
    output.style.color = "var(--color-foreground-secondary)";
    output.textContent = "Nothing applied yet";
    let applied = {};

    const mount = (initialView = view) => {
        const calendar = createCalendar({
            mode,
            layout,
            initialView,
            value: applied,
            onApply(value) {
                if (value) applied = value;
                output.textContent = value
                    ? `Applied: ${[value.start, value.end].filter(Boolean).map(numeric).join(" — ")}`
                    : "Apply with an incomplete range: nothing committed";
                mount("day");
            },
            onCancel() {
                output.textContent =
                    "Cancelled: restored the last applied value";
                mount("day");
            },
        });
        wrapper.replaceChildren(calendar.el, output);
    };
    mount();
    return wrapper;
};

export const interactive = ({ mode, layout }) =>
    interactiveCalendar({ mode, layout, view: "day" });
interactive.parameters = { controls: { include: ["mode", "layout"] } };

export const dayView = ({ mode }) =>
    interactiveCalendar({ mode, layout: "single", view: "day" });
dayView.storyName = "Day View";
dayView.parameters = { controls: { include: ["mode"] } };

export const monthView = ({ mode }) =>
    interactiveCalendar({ mode, layout: "single", view: "month" });
monthView.storyName = "Month View";
monthView.parameters = { controls: { include: ["mode"] } };

export const yearView = ({ mode }) =>
    interactiveCalendar({ mode, layout: "single", view: "year" });
yearView.storyName = "Year View";
yearView.parameters = { controls: { include: ["mode"] } };

export const doubleLayout = ({ mode }) =>
    interactiveCalendar({ mode, layout: "double", view: "day" });
doubleLayout.args = { mode: "range" };
doubleLayout.parameters = { controls: { include: ["mode"] } };
