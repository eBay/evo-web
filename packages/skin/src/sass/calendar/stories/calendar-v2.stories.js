import { createCalendar } from "./calendar-v2-interactive.js";
import {
    calendarDay,
    calendarMonth,
    calendarYear,
    fromKey,
} from "./calendar-v2-markup.js";

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

const interactiveCalendar = ({ mode = "single", layout = "single", view }) => {
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

const staticCalendar = ({ mode = "single", layout = "single", view }) => {
    if (view === "month") return calendarMonth({ selected: 8 });
    if (view === "year") {
        return calendarYear({
            years: Array.from({ length: 18 }, (_, i) => 2024 + i),
            selected: 2026,
        });
    }
    return calendarDay({
        panels: [
            { year: 2026, month: 8 },
            { year: 2026, month: 9 },
        ].slice(0, layout === "double" ? 2 : 1),
        start: "2026-09-20",
        end: mode === "range" ? "2026-09-24" : null,
        today: "2026-09-01",
        focus: "2026-09-20",
    });
};

const story = ({ view, layout }) => {
    const options = (args = {}) => ({
        mode: args.mode,
        layout: layout ?? args.layout,
        view,
    });
    const render = (args) => staticCalendar(options(args));
    render.play = ({ canvasElement, args }) => {
        canvasElement.replaceChildren(interactiveCalendar(options(args)));
    };
    return render;
};

export const interactive = story({ view: "day" });
interactive.parameters = { controls: { include: ["mode", "layout"] } };

export const dayView = story({ view: "day", layout: "single" });
dayView.storyName = "Day View";
dayView.parameters = { controls: { include: ["mode"] } };

export const monthView = story({ view: "month", layout: "single" });
monthView.storyName = "Month View";
monthView.parameters = { controls: { include: ["mode"] } };

export const yearView = story({ view: "year", layout: "single" });
yearView.storyName = "Year View";
yearView.parameters = { controls: { include: ["mode"] } };

export const doubleLayout = story({ view: "day", layout: "double" });
doubleLayout.args = { mode: "range" };
doubleLayout.parameters = { controls: { include: ["mode"] } };
