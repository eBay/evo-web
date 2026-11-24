import {
    calendarDay,
    calendarMonth,
    calendarYear,
    fromKey,
    localeNames,
    readable,
    toKey,
} from "./calendar-v2-markup.js";

const toDate = (key) => {
    const { year, month, day } = fromKey(key);
    return new Date(year, month, day);
};
const dateKey = (date) =>
    toKey(date.getFullYear(), date.getMonth(), date.getDate());

export const todayKey = () => dateKey(new Date());

const addDays = (key, days) => {
    const date = toDate(key);
    date.setDate(date.getDate() + days);
    return dateKey(date);
};

const addMonths = (key, months) => {
    const { year, month, day } = fromKey(key);
    const lastDay = new Date(year, month + months + 1, 0).getDate();
    return dateKey(new Date(year, month + months, Math.min(day, lastDay)));
};

const shiftMonth = ({ year, month }, months) => {
    const date = new Date(year, month + months, 1);
    return { year: date.getFullYear(), month: date.getMonth() };
};

const monthIndex = ({ year, month }) => year * 12 + month;

const dayKeys = {
    ArrowLeft: (key, rtl) => addDays(key, rtl ? 1 : -1),
    ArrowRight: (key, rtl) => addDays(key, rtl ? -1 : 1),
    ArrowUp: (key) => addDays(key, -7),
    ArrowDown: (key) => addDays(key, 7),
    Home: (key, rtl, shift, weekStart) =>
        addDays(key, -((toDate(key).getDay() - weekStart + 7) % 7)),
    End: (key, rtl, shift, weekStart) =>
        addDays(key, 6 - ((toDate(key).getDay() - weekStart + 7) % 7)),
    PageUp: (key, rtl, shift) => addMonths(key, shift ? -12 : -1),
    PageDown: (key, rtl, shift) => addMonths(key, shift ? 12 : 1),
};

const optionKeys = {
    ArrowLeft: (rtl) => (rtl ? 1 : -1),
    ArrowRight: (rtl) => (rtl ? -1 : 1),
    ArrowUp: () => -3,
    ArrowDown: () => 3,
};

/**
 * Prototype-only behavior for the Calendar V2 stories. Selection stays provisional
 * until Apply; production behavior belongs in the Marko/React components.
 */
export function createCalendar({
    mode = "single",
    layout = "single",
    initialView = "day",
    locale = "en-US",
    value = {},
    onApply,
    onCancel,
}) {
    const el = document.createElement("div");
    const view = document.createElement("div");
    const live = document.createElement("div");
    live.className = "clipped";
    live.setAttribute("aria-live", "polite");
    el.append(view, live);

    const today = todayKey();
    const current = fromKey(today);
    const years = Array.from({ length: 151 }, (_, i) => current.year - 100 + i);
    const panelCount = layout === "double" ? 2 : 1;

    const state = {
        view: initialView,
        start: value.start || null,
        end: mode === "range" ? value.end || null : null,
        hover: null,
        focus: value.start || today,
        panel: 0,
        optionFocus: null,
    };
    state.anchor = shiftMonth(fromKey(state.focus), 0);

    const panels = () =>
        Array.from({ length: panelCount }, (_, i) =>
            shiftMonth(state.anchor, i),
        );
    const awaitingEnd = () => mode === "range" && state.start && !state.end;
    const isRtl = () => getComputedStyle(el).direction === "rtl";
    const announce = (text) => {
        live.textContent = text;
    };

    const keepFocusVisible = () => {
        const focusMonth = fromKey(state.focus);
        const first = monthIndex(state.anchor);
        const target = monthIndex(focusMonth);
        if (target < first) state.anchor = shiftMonth(focusMonth, 0);
        if (target > first + panelCount - 1) {
            state.anchor = shiftMonth(focusMonth, -(panelCount - 1));
        }
    };

    const focusSelector = () => {
        const active = document.activeElement;
        if (!view.contains(active)) return null;
        if (active.dataset.date) return '[data-date][tabindex="0"]';
        if (active.dataset.value !== undefined) {
            return '.calendar__option[tabindex="0"]';
        }
        if (active.dataset.action) {
            const panel = active.dataset.panel;
            return `[data-action="${active.dataset.action}"]${panel ? `[data-panel="${panel}"]` : ""}`;
        }
        return null;
    };

    function render({ focusCell = false } = {}) {
        const restore = focusCell
            ? '[data-date][tabindex="0"], .calendar__option[tabindex="0"]'
            : focusSelector();
        const panel = shiftMonth(state.anchor, state.panel);

        if (state.view === "month") {
            view.innerHTML = calendarMonth({
                selected: panel.month,
                current: panel.year === current.year ? current.month : null,
                focus: state.optionFocus,
                locale,
            });
        } else if (state.view === "year") {
            view.innerHTML = calendarYear({
                years,
                selected: panel.year,
                current: current.year,
                focus: state.optionFocus,
            });
        } else {
            view.innerHTML = calendarDay({
                panels: panels(),
                start: state.start,
                end: state.end,
                preview: awaitingEnd() ? state.hover : null,
                today,
                focus: state.focus,
                locale,
            });
        }

        if (restore) view.querySelector(restore)?.focus();
    }

    const scrollSelectedYearToTop = () => {
        const list = view.querySelector(".calendar__options--scroll");
        const selected = list?.querySelector('[aria-selected="true"]');
        if (!selected) return;
        list.scrollTop +=
            selected.parentElement.getBoundingClientRect().top -
            list.getBoundingClientRect().top;
    };

    function select(key) {
        state.focus = key;
        state.hover = null;
        if (mode === "single") {
            state.start = key;
            announce(`Selected ${readable(key, locale)}`);
        } else if (!state.start || state.end) {
            state.start = key;
            state.end = null;
            announce(
                `Start date ${readable(key, locale)}. Choose an end date.`,
            );
        } else {
            [state.start, state.end] =
                key < state.start ? [key, state.start] : [state.start, key];
            announce(
                `Selected ${readable(state.start, locale)} to ${readable(state.end, locale)}`,
            );
        }
        render();
    }

    function chooseOption(optionValue) {
        const panel = shiftMonth(state.anchor, state.panel);
        const target =
            state.view === "month"
                ? { year: panel.year, month: optionValue }
                : { year: optionValue, month: panel.month };
        const lastDay = new Date(target.year, target.month + 1, 0).getDate();
        state.anchor = shiftMonth(target, -state.panel);
        state.focus = toKey(
            target.year,
            target.month,
            Math.min(fromKey(state.focus).day, lastDay),
        );
        state.view = "day";
        render({ focusCell: true });
    }

    const actions = {
        prev() {
            state.anchor = shiftMonth(state.anchor, -1);
            state.focus = addMonths(state.focus, -1);
            keepFocusVisible();
            render();
        },
        next() {
            state.anchor = shiftMonth(state.anchor, 1);
            state.focus = addMonths(state.focus, 1);
            keepFocusVisible();
            render();
        },
        "month-view"(button) {
            state.panel = Number(button.dataset.panel);
            state.view = "month";
            state.optionFocus = shiftMonth(state.anchor, state.panel).month;
            render({ focusCell: true });
        },
        "year-view"(button) {
            state.panel = Number(button.dataset.panel);
            state.view = "year";
            state.optionFocus = shiftMonth(state.anchor, state.panel).year;
            render({ focusCell: true });
            scrollSelectedYearToTop();
        },
        back() {
            state.view = "day";
            render({ focusCell: true });
        },
        today() {
            state.anchor = shiftMonth(current, 0);
            state.focus = today;
            render();
        },
        cancel() {
            onCancel?.();
        },
        apply() {
            if (mode === "single") {
                onApply?.(state.start ? { start: state.start } : null);
            } else {
                onApply?.(
                    state.start && state.end
                        ? { start: state.start, end: state.end }
                        : null,
                );
            }
        },
    };

    view.addEventListener("click", (event) => {
        const target = event.target.closest(
            "[data-date], [data-action], .calendar__option",
        );
        if (!target || target.disabled) return;
        if (target.dataset.date) select(target.dataset.date);
        else if (target.dataset.value !== undefined) {
            chooseOption(Number(target.dataset.value));
        } else actions[target.dataset.action]?.(target);
    });

    view.addEventListener("mouseover", (event) => {
        const key = event.target.closest("[data-date]")?.dataset.date;
        if (!awaitingEnd() || !key || key === state.hover) return;
        state.hover = key;
        render();
    });

    view.addEventListener("mouseleave", () => {
        if (!state.hover) return;
        state.hover = null;
        render();
    });

    view.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            onCancel?.();
            return;
        }

        const date = event.target.dataset.date;
        if (date && dayKeys[event.key]) {
            event.preventDefault();
            state.focus = dayKeys[event.key](
                date,
                isRtl(),
                event.shiftKey,
                localeNames(locale).weekStart,
            );
            if (awaitingEnd()) state.hover = state.focus;
            keepFocusVisible();
            render({ focusCell: true });
            return;
        }

        if (event.target.dataset.value !== undefined && optionKeys[event.key]) {
            event.preventDefault();
            const step = optionKeys[event.key](isRtl());
            const options =
                state.view === "month"
                    ? Array.from({ length: 12 }, (_, i) => i)
                    : years;
            const index = options.indexOf(Number(event.target.dataset.value));
            state.optionFocus =
                options[
                    Math.max(0, Math.min(options.length - 1, index + step))
                ];
            render({ focusCell: true });
        }
    });

    render();
    if (initialView === "year") requestAnimationFrame(scrollSelectedYearToTop);

    return {
        el,
        focus: () => view.querySelector('[data-date][tabindex="0"]')?.focus(),
        setSelection({ start = null, end = null }) {
            state.start = start;
            state.end = mode === "range" ? end : null;
            state.hover = null;
            if (state.start) {
                state.focus = state.start;
                state.anchor = shiftMonth(fromKey(state.start), 0);
                state.view = "day";
            }
            render();
        },
    };
}
