import { createDatePicker } from "./date-textbox-v2-interactive.js";

const localeNames = {
    "en-US": "English (US): MM/DD/YYYY, weeks start Sunday",
    "en-GB": "English (UK): DD/MM/YYYY, weeks start Monday",
    "de-DE": "German: DD.MM.YYYY, weeks start Monday",
    "ja-JP": "Japanese: YYYY/MM/DD, weeks start Sunday",
};

export default {
    title: "Skin/Date Textbox/V2",
    args: {
        label: "Time period",
        type: "single",
        calendarLayout: "double",
        size: "large",
        layout: "floating",
        helperText: true,
        locale: "en-US",
    },
    argTypes: {
        label: {
            type: { name: "string", required: true },
            control: "text",
            description: "Field label. Always required",
        },
        type: {
            control: "inline-radio",
            options: ["single", "range"],
            description: "One date, or a start and end date in one field",
        },
        calendarLayout: {
            control: "inline-radio",
            options: ["single", "double"],
            description:
                "One or two calendar months. Applies to range mode only; single mode always opens one month",
        },
        size: { control: "inline-radio", options: ["large", "medium"] },
        layout: {
            control: "inline-radio",
            options: ["floating", "stacked"],
            description: "Label inside the field, or above it",
        },
        helperText: {
            control: "boolean",
            description:
                "Show the expected date format below the field. An error message replaces it",
        },
        locale: {
            control: "select",
            options: Object.keys(localeNames),
            labels: localeNames,
            description:
                "Date order, separator, helper text, calendar month and weekday names, and first day of the week",
        },
    },
};

const picker = (args, locale = args.locale) =>
    createDatePicker({
        mode: args.type,
        layout: args.calendarLayout,
        size: args.size,
        labelLayout: args.layout,
        label: args.label?.trim() || "Time period",
        locale,
        showHelperText: args.helperText,
    });

export const interactive = (args) => {
    const wrapper = document.createElement("div");
    wrapper.style.minHeight = "560px";
    wrapper.append(picker(args));
    return wrapper;
};

export const locales = (args) => {
    const wrapper = document.createElement("div");
    wrapper.style.cssText =
        "display: flex; flex-direction: column; align-items: flex-start; gap: 32px; min-height: 900px";
    for (const [locale, name] of Object.entries(localeNames)) {
        const cell = document.createElement("div");
        cell.innerHTML = `<p style="margin: 0 0 8px; font: var(--typography-caption); color: var(--color-foreground-secondary)">${name}</p>`;
        cell.append(picker(args, locale));
        wrapper.append(cell);
    }
    return wrapper;
};
locales.parameters = { controls: { exclude: ["locale"] } };
