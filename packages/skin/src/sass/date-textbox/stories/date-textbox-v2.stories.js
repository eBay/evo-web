import { createDatePicker } from "./date-textbox-v2-interactive.js";
import {
    dateField,
    dateFormat,
    textValueMarkup,
} from "./date-textbox-v2-markup.js";

const localeNames = {
    "en-US": "English (US): MM/DD/YYYY, weeks start Sunday",
    "en-GB": "English (UK): DD/MM/YYYY, weeks start Monday",
    "de-DE": "German: DD.MM.YYYY, weeks start Monday",
    "ja-JP": "Japanese: YYYY/MM/DD, weeks start Sunday",
};

const defaults = {
    label: "Time period",
    type: "single",
    calendarLayout: "double",
    size: "large",
    layout: "floating",
    helperText: true,
    locale: "en-US",
};

export default {
    title: "Skin/Date Textbox/V2",
    args: defaults,
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

const label = (args) => args.label?.trim() || defaults.label;

const staticField = (args, locale) => {
    const id = `date-textbox-v2-${locale}`;
    const format = dateFormat(locale);
    const helper = args.helperText ? format.pattern : "";
    return dateField({
        id,
        label: label(args),
        size: args.size,
        layout: args.layout,
        helper,
        valueHtml: textValueMarkup(
            Array(args.type === "range" ? 2 : 1).fill(format.masks),
            {
                labelId: `${id}-label`,
                placeholder: true,
                describedBy: helper ? `${id}-helper` : null,
                format,
            },
        ),
    });
};

const picker = (args, locale) =>
    createDatePicker({
        mode: args.type,
        layout: args.calendarLayout,
        size: args.size,
        labelLayout: args.layout,
        label: label(args),
        locale,
        showHelperText: args.helperText,
    });

const localeCaption = (locale) =>
    `<p style="margin: 0 0 8px; font: var(--typography-caption); color: var(--color-foreground-secondary)">${localeNames[locale]}</p>`;

export const interactive = (args) => {
    const options = { ...defaults, ...args };
    return `<div style="min-height: 560px">${staticField(options, options.locale)}</div>`;
};
interactive.play = ({ canvasElement, args }) => {
    const options = { ...defaults, ...args };
    const wrapper = canvasElement.firstElementChild;
    wrapper.replaceChildren(picker(options, options.locale));
};

const localeList = Object.keys(localeNames);

export const locales = (args) => {
    const options = { ...defaults, ...args };
    return `<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 32px; min-height: 900px">${localeList
        .map(
            (locale) =>
                `<div data-locale="${locale}">${localeCaption(locale)}${staticField(options, locale)}</div>`,
        )
        .join("")}</div>`;
};
locales.play = ({ canvasElement, args }) => {
    const options = { ...defaults, ...args };
    canvasElement.querySelectorAll("[data-locale]").forEach((cell) => {
        cell.lastElementChild.replaceWith(picker(options, cell.dataset.locale));
    });
};
locales.parameters = { controls: { exclude: ["locale"] } };
