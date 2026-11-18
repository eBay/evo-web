const namesCache = new Map();

export const localeNames = (locale = "en-US") => {
    if (namesCache.has(locale)) return namesCache.get(locale);
    const format = (options) => new Intl.DateTimeFormat(locale, options).format;
    const longMonth = format({ month: "long" });
    const shortMonth = format({ month: "short" });
    const weekday = format({ weekday: "short" });
    const intlLocale = new Intl.Locale(locale);
    const weekInfo = intlLocale.getWeekInfo?.() ?? intlLocale.weekInfo;
    const weekStart = (weekInfo?.firstDay ?? 7) % 7;
    const names = {
        weekStart,
        months: Array.from({ length: 12 }, (_, m) =>
            longMonth(new Date(2026, m, 1)),
        ),
        shortMonths: Array.from({ length: 12 }, (_, m) =>
            shortMonth(new Date(2026, m, 1)),
        ),
        weekdays: Array.from({ length: 7 }, (_, i) =>
            weekday(new Date(2026, 1, 1 + ((weekStart + i) % 7))),
        ),
        monthYear: format({ month: "long", year: "numeric" }),
        spoken: format({ dateStyle: "long" }),
        readable: format({ dateStyle: "medium" }),
    };
    namesCache.set(locale, names);
    return names;
};

export const icon = (name) => `
    <svg class="icon icon--16" aria-hidden="true" width="16" height="16">
        <use href="#icon-${name}-16"></use>
    </svg>`;

const pad = (n, length = 2) => String(n).padStart(length, "0");

export const toKey = (year, month, day) =>
    `${pad(year, 4)}-${pad(month + 1)}-${pad(day)}`;

export const fromKey = (key) => {
    const [year, month, day] = key.split("-").map(Number);
    return { year, month: month - 1, day };
};

const keyDate = (key) => {
    const { year, month, day } = fromKey(key);
    return new Date(year, month, day);
};

export const readable = (key, locale) =>
    localeNames(locale).readable(keyDate(key));

const dayCell = (
    key,
    { start, end, preview, today, focus, disabled, locale },
) => {
    const classes = [];
    const other = end || preview;
    let label = localeNames(locale).spoken(keyDate(key));

    if (start && other) {
        const [lo, hi] = start < other ? [start, other] : [other, start];
        if (key >= lo && key <= hi) {
            classes.push("calendar__range");
            if (key === lo) classes.push("calendar__range--start");
            if (key === hi) classes.push("calendar__range--end");
        }
    }
    const isSelected = key === start || key === end;
    if (isSelected) {
        classes.push("calendar__cell--selected");
        if (end)
            label += key === start ? " - start of range" : " - end of range";
    }

    const attrs = [
        'type="button"',
        `data-date="${key}"`,
        `tabindex="${key === focus ? 0 : -1}"`,
        `aria-label="${label}"`,
    ];
    if (key === today) attrs.push('aria-current="date"');
    if (isSelected) attrs.push('aria-pressed="true"');
    if (disabled?.(key)) attrs.push("disabled");

    return `<td${classes.length ? ` class="${classes.join(" ")}"` : ""}><button ${attrs.join(" ")}>${fromKey(key).day}</button></td>`;
};

const dayTable = ({ year, month }, selection) => {
    const names = localeNames(selection.locale);
    const leading =
        (new Date(year, month, 1).getDay() - names.weekStart + 7) % 7;
    const days = new Date(year, month + 1, 0).getDate();
    const cells = Array.from({ length: leading }, () => "<td></td>");

    for (let day = 1; day <= days; day++) {
        cells.push(dayCell(toKey(year, month, day), selection));
    }

    const rows = [];
    for (let i = 0; i < cells.length; i += 7) {
        rows.push(`<tr>${cells.slice(i, i + 7).join("")}</tr>`);
    }

    return `
            <table>
                <caption class="clipped">${names.monthYear(new Date(year, month, 1))}</caption>
                <thead>
                    <tr>${names.weekdays.map((d) => `<th scope="col">${d}</th>`).join("")}</tr>
                </thead>
                <tbody>
                    ${rows.join("\n                    ")}
                </tbody>
            </table>`;
};

const pickers = ({ year, month }, panel, locale) => {
    const name = localeNames(locale).months[month];
    return `
                <span class="calendar__pickers">
                    <button class="button button--tertiary button--small calendar__picker" type="button" data-action="month-view" data-panel="${panel}" aria-label="Choose month, ${name}">${name}</button>
                    <button class="button button--tertiary button--small calendar__picker" type="button" data-action="year-view" data-panel="${panel}" aria-label="Choose year, ${year}">${year}</button>
                </span>`;
};

const prev = `
                    <button class="icon-button icon-button--small" type="button" data-action="prev" aria-label="Previous month">${icon("chevron-left")}</button>`;

const next = `
                    <button class="icon-button icon-button--small" type="button" data-action="next" aria-label="Next month">${icon("chevron-right")}</button>`;

const footer = `
    <div class="calendar__footer">
        <button class="button button--borderless button--small" type="button" data-action="today">
            <span class="button__cell">${icon("calendar")}<span class="button__text">Today</span></span>
        </button>
        <span class="calendar__actions">
            <button class="button button--tertiary button--small" type="button" data-action="cancel">Cancel</button>
            <button class="button button--primary button--small" type="button" data-action="apply">Apply</button>
        </span>
    </div>`;

export const calendarDay = ({ panels, ...selection }) => `
<div class="calendar calendar--v2">
    <div class="calendar__content">
        <div class="calendar__body">
            ${panels
                .map(
                    (panel, i) => `
            <div class="calendar__month">
                <div class="calendar__header">${i === 0 ? prev : ""}${pickers(panel, i, selection.locale)}${i === panels.length - 1 ? next : ""}
                </div>${dayTable(panel, selection)}
            </div>`,
                )
                .join("")}
        </div>
    </div>${footer}
</div>`;

const titleHeader = (title) => `
        <div class="calendar__header">
            <button class="icon-button icon-button--small" type="button" data-action="back" aria-label="Back to day view">${icon("arrow-left")}</button>
            <h3 class="calendar__title" id="calendar-v2-${title.toLowerCase()}">${title}</h3>
        </div>`;

const option = (label, value, { selected, current, focus }) =>
    `<li><button class="calendar__option" type="button" role="option" data-value="${value}" tabindex="${focus ? 0 : -1}" aria-selected="${selected}"${current ? ' aria-current="date"' : ""}>${label}</button></li>`;

export const calendarMonth = ({
    selected,
    current,
    focus = selected,
    locale,
}) => `
<div class="calendar calendar--v2">
    <div class="calendar__content">${titleHeader("Month")}
        <ul class="calendar__options" role="listbox" aria-labelledby="calendar-v2-month">
            ${localeNames(locale)
                .shortMonths.map((m, i) =>
                    option(m, i, {
                        selected: i === selected,
                        current: i === current && i !== selected,
                        focus: i === focus,
                    }),
                )
                .join("\n            ")}
        </ul>
    </div>
</div>`;

export const calendarYear = ({
    years,
    selected,
    current,
    focus = selected,
}) => `
<div class="calendar calendar--v2">
    <div class="calendar__content">${titleHeader("Year")}
        <ul class="calendar__options calendar__options--scroll" role="listbox" aria-labelledby="calendar-v2-year">
            ${years
                .map((y) =>
                    option(y, y, {
                        selected: y === selected,
                        current: y === current && y !== selected,
                        focus: y === focus,
                    }),
                )
                .join("\n            ")}
        </ul>
    </div>
</div>`;
