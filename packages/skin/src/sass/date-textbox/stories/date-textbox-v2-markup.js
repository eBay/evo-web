import { icon } from "../../calendar/stories/calendar-v2-markup.js";

const partSpecs = {
    month: { mask: "MM", length: 2, min: 1, max: 12 },
    day: { mask: "DD", length: 2, min: 1, max: 31 },
    year: { mask: "YYYY", length: 4, min: 1, max: 9999 },
};

export const dateFormat = (locale = "en-US") => {
    const parts = new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(new Date(2026, 8, 1));
    const order = parts
        .filter(({ type }) => type in partSpecs)
        .map(({ type }) => type);
    const separator = parts.find(({ type }) => type === "literal").value.trim();
    const masks = order.map((type) => partSpecs[type].mask);
    return {
        order,
        separator,
        masks,
        pattern: masks.join(separator),
        part: (index) => ({
            type: order[index % 3],
            ...partSpecs[order[index % 3]],
        }),
    };
};

export const separator = (text) =>
    `<span class="date-textbox__separator" aria-hidden="true">${text}</span>`;

const segmentName = (type, index, range) => {
    if (!range) return type[0].toUpperCase() + type.slice(1);
    return `${index < 3 ? "Start" : "End"} ${type}`;
};

const segment = (
    { text, placeholder, active },
    index,
    { focus, format, range },
) => {
    const classes = ["date-textbox__segment"];
    if (placeholder) classes.push("date-textbox__segment--placeholder");
    if (active) classes.push("date-textbox__segment--active");
    const { type, min, max } = format.part(index);
    const valueAttrs = placeholder
        ? 'aria-valuetext="Empty"'
        : `aria-valuenow="${Number(text.replace(/\D/g, "")) || 0}" aria-valuetext="${text}"`;
    const tabindex = index === focus ? 0 : -1;

    return `<span class="${classes.join(" ")}" role="spinbutton" data-segment="${index}" aria-label="${segmentName(type, index, range)}" aria-valuemin="${min}" aria-valuemax="${max}" ${valueAttrs} tabindex="${tabindex}">${text}</span>`;
};

const segmentedDate = (segments, offset, options) => `
                <span class="date-textbox__date">${segments
                    .slice(offset, offset + 3)
                    .map((s, i) => segment(s, offset + i, options))
                    .join(separator(options.format.separator))}</span>`;

export const segmentsMarkup = (
    segments,
    { labelId, describedBy, focus = 0, format },
) => {
    const options = { focus, format, range: segments.length > 3 };
    return `<span class="date-textbox__value" role="group" aria-labelledby="${labelId}"${describedBy ? ` aria-describedby="${describedBy}"` : ""}>${segmentedDate(segments, 0, options)}${
        options.range
            ? `${separator("—")}${segmentedDate(segments, 3, options)}`
            : ""
    }
            </span>`;
};

export const textValueMarkup = (
    dates,
    { labelId, placeholder, describedBy, format },
) => {
    const partClass = placeholder
        ? ' class="date-textbox__segment--placeholder"'
        : "";
    const text = dates
        .map(
            (parts) =>
                `<span class="date-textbox__date">${parts
                    .map((part) => `<span${partClass}>${part}</span>`)
                    .join(separator(format.separator))}</span>`,
        )
        .join(separator("—"));
    return `<span class="date-textbox__value" tabindex="0" role="group" aria-labelledby="${labelId}"${describedBy ? ` aria-describedby="${describedBy}"` : ""}>${text}</span>`;
};

export const dateField = ({ id, label, size, layout, valueHtml }) => {
    const rootClasses = ["date-textbox", "date-textbox--v2"];
    if (size === "medium") rootClasses.push("date-textbox--medium");
    if (layout === "stacked") rootClasses.push("date-textbox--stacked");

    const labelEl = `<span class="date-textbox__label" id="${id}-label">${label}</span>`;

    return `
<span class="${rootClasses.join(" ")}">
    ${layout === "stacked" ? labelEl : ""}
    <span class="textbox">
        <span class="date-textbox__content">
            ${layout === "floating" ? labelEl : ""}
            ${valueHtml}
        </span>
        <button class="icon-button icon-button--small" type="button" data-action="toggle" aria-label="Open calendar" aria-haspopup="dialog" aria-expanded="false">${icon("calendar")}</button>
    </span>
</span>`;
};
