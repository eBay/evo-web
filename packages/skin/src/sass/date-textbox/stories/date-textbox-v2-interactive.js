import { icon, toKey } from "../../calendar/stories/calendar-v2-markup.js";
import { createCalendar } from "../../calendar/stories/calendar-v2-interactive.js";
import {
    dateField,
    dateFormat,
    segmentsMarkup,
    textValueMarkup,
} from "./date-textbox-v2-markup.js";

const parseDate = (segments, { order }) => {
    const { month, day, year } = Object.fromEntries(
        order.map((type, i) => [type, segments[i]]),
    );
    if (!month && !day && !year) return { empty: true };
    if (month.length !== 2 || day.length !== 2 || year.length !== 4) {
        return { invalid: true };
    }
    const m = Number(month);
    const d = Number(day);
    const y = Number(year);
    if (m < 1 || m > 12 || d < 1 || y < 1) return { invalid: true };
    if (d > new Date(y, m, 0).getDate()) return { invalid: true };
    return { key: toKey(y, m - 1, d) };
};

const keyToSegments = (key, { order }) => {
    if (!key) return ["", "", ""];
    const [year, month, day] = key.split("-");
    const parts = { year, month, day };
    return order.map((type) => parts[type]);
};

let uid = 0;

/**
 * Prototype-only behavior for the Date Textbox V2 stories. Typing and calendar
 * selections stay pending while the calendar is open; production behavior
 * belongs in Marko/React.
 */
export function createDatePicker({
    mode = "single",
    layout = "single",
    size = "large",
    labelLayout = "floating",
    label = "Date",
    locale = "en-US",
    showHelperText = false,
}) {
    const format = dateFormat(locale);
    const id = `date-textbox-v2-interactive-${uid++}`;
    const count = mode === "range" ? 6 : 3;
    const state = {
        committed: { start: null, end: null },
        editing: false,
        segments: Array(count).fill(""),
        active: 0,
        invalid: false,
        open: false,
    };
    let calendar = null;
    let rendering = false;
    let suppressEdit = false;

    const root = document.createElement("div");
    root.innerHTML = dateField({
        id,
        label,
        size,
        layout: labelLayout,
        valueHtml: '<span class="date-textbox__value"></span>',
    });
    const field = root.querySelector(".date-textbox--v2");
    const box = field.querySelector(".textbox");
    const toggle = field.querySelector('[data-action="toggle"]');
    const helperId = `${id}-helper`;

    const helperHtml = () => {
        if (state.invalid) return `${icon("attention-filled")}Invalid date`;
        return showHelperText ? format.pattern : "";
    };

    const valueHtml = () => {
        const describedBy = helperHtml() ? helperId : null;
        if (state.editing) {
            const segments = state.segments.map((text, i) => ({
                text: text + format.masks[i % 3].slice(text.length),
                placeholder: !text,
                active: i === state.active,
            }));
            return segmentsMarkup(segments, {
                labelId: `${id}-label`,
                describedBy,
                focus: state.active,
                format,
            });
        }
        const { start, end } = state.committed;
        const dates = start
            ? [start, end]
                  .filter(Boolean)
                  .map((key) => keyToSegments(key, format))
            : Array(count / 3).fill(format.masks);
        return textValueMarkup(dates, {
            labelId: `${id}-label`,
            placeholder: !start,
            describedBy,
            format,
        });
    };

    function update() {
        rendering = true;
        box.classList.toggle("textbox--focus", state.editing || state.open);
        box.classList.toggle("textbox--invalid", state.invalid);
        field.querySelector(".date-textbox__value").outerHTML = valueHtml();

        const helper = field.querySelector(".date-textbox__helper");
        const html = helperHtml();
        if (html && !helper) {
            box.insertAdjacentHTML(
                "afterend",
                `<span class="date-textbox__helper" id="${helperId}">${html}</span>`,
            );
        } else if (html) {
            helper.innerHTML = html;
        } else if (helper) {
            helper.remove();
        }

        toggle.setAttribute("aria-expanded", String(state.open));

        const popover = field.querySelector(".date-textbox__popover");
        if (state.open && !popover) {
            field.insertAdjacentHTML(
                "beforeend",
                `<div class="date-textbox__popover" role="dialog" aria-label="Choose ${mode === "range" ? "dates" : "date"}"></div>`,
            );
            field.querySelector(".date-textbox__popover").append(calendar.el);
        } else if (!state.open && popover) {
            popover.remove();
        }

        if (state.editing) {
            field.querySelector(`[data-segment="${state.active}"]`)?.focus();
        }
        rendering = false;
    }

    const focusQuietly = (element) => {
        suppressEdit = true;
        element?.focus();
        suppressEdit = false;
    };

    function startEditing(segment = 0) {
        const { start, end } = state.committed;
        state.segments = [
            ...keyToSegments(start, format),
            ...(mode === "range" ? keyToSegments(end, format) : []),
        ];
        state.active = segment;
        state.editing = true;
        update();
    }

    const typed = () => [
        parseDate(state.segments.slice(0, 3), format),
        mode === "range"
            ? parseDate(state.segments.slice(3), format)
            : { empty: true },
    ];

    function commit() {
        const [first, second] = typed();
        if (first.empty && second.empty) {
            state.committed = { start: null, end: null };
            state.invalid = false;
        } else if (first.key && second.empty) {
            state.committed = { start: first.key, end: null };
            state.invalid = false;
        } else if (first.key && second.key) {
            const [start, end] = [first.key, second.key].sort();
            state.committed = { start, end };
            state.invalid = false;
        } else {
            state.invalid = true;
        }
        state.editing = false;
        update();
    }

    function discard() {
        state.editing = false;
        if (state.open) close();
        else update();
    }

    function syncCalendar() {
        if (!state.open) return;
        const [first, second] = typed();
        if (!first.key) return;
        calendar.setSelection({ start: first.key, end: second.key || null });
    }

    function typeDigit(digit) {
        const i = state.active;
        const { type, length } = format.part(i);
        let text = state.segments[i];
        if (text.length >= length) text = "";
        text += digit;
        if (
            text.length === 1 &&
            ((type === "month" && digit >= 2) || (type === "day" && digit >= 4))
        ) {
            text = `0${text}`;
        }
        state.segments[i] = text;
        if (text.length === length && i < count - 1) {
            state.active = i + 1;
        }
        update();
        syncCalendar();
    }

    function open() {
        state.open = true;
        const [first, second] = state.editing ? typed() : [{}, {}];
        calendar = createCalendar({
            mode,
            layout: mode === "range" ? layout : "single",
            locale,
            value: first.key
                ? { start: first.key, end: second.key || null }
                : state.committed,
            onApply(value) {
                if (value) {
                    state.committed = { end: null, ...value };
                    state.invalid = false;
                }
                state.editing = false;
                close();
            },
            onCancel: discard,
        });
        update();
        calendar.focus();
    }

    function close() {
        state.open = false;
        calendar = null;
        update();
        focusQuietly(toggle);
    }

    toggle.addEventListener("click", () => {
        if (state.open) discard();
        else open();
    });

    field.addEventListener("focusin", (event) => {
        if (rendering || suppressEdit) return;
        const segment = event.target.dataset.segment;
        if (segment !== undefined) {
            if (Number(segment) !== state.active) {
                state.active = Number(segment);
                update();
            }
        } else if (
            !state.editing &&
            event.target.matches(".date-textbox__value")
        ) {
            startEditing();
        }
    });

    field.addEventListener("focusout", (event) => {
        if (rendering || !state.editing || state.open) return;
        if (field.contains(event.relatedTarget)) return;
        commit();
    });

    field.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && (state.open || state.editing)) {
            event.preventDefault();
            discard();
            return;
        }
        if (
            !state.editing &&
            /^\d$/.test(event.key) &&
            event.target.matches(".date-textbox__value")
        ) {
            event.preventDefault();
            startEditing();
            typeDigit(Number(event.key));
            return;
        }
        if (event.target.dataset.segment === undefined) return;

        if (/^\d$/.test(event.key)) {
            event.preventDefault();
            typeDigit(Number(event.key));
        } else if (event.key === "Backspace") {
            event.preventDefault();
            const text = state.segments[state.active];
            if (text) state.segments[state.active] = text.slice(0, -1);
            else state.active = Math.max(0, state.active - 1);
            update();
            syncCalendar();
        } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            const rtl = getComputedStyle(field).direction === "rtl";
            const step = (event.key === "ArrowRight") !== rtl ? 1 : -1;
            state.active = Math.max(
                0,
                Math.min(count - 1, state.active + step),
            );
            update();
        } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            commit();
            if (state.open) {
                close();
            } else {
                focusQuietly(field.querySelector(".date-textbox__value"));
            }
        }
    });

    update();
    return root;
}
