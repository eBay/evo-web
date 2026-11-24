export default { title: "Skin/Signal" };

const tones = [
    ["neutral", "Neutral"],
    ["information", "Information"],
    ["positive", "Positive"],
    ["warning", "Warning"],
    ["attention", "Attention"],
];

const emphases = [
    ["Default", ""],
    ["Strong", " signal--strong"],
    ["Subtle", " signal--subtle"],
];

const icon = `<svg class="icon icon--12" aria-hidden="true"><use href="#icon-promotion-12"></use></svg>`;

const matrix = (content = "", extra = "") =>
    emphases
        .map(
            ([name, modifier]) => `
<h3>${name}</h3>
<p>
    ${tones
        .map(
            ([tone, label]) =>
                `<span class="signal signal--${tone}${modifier}${extra}">${content}${label}</span>`,
        )
        .join("\n    ")}
</p>`,
        )
        .join("");

const row = (modifier = "", content = "") => `
<p>
    ${tones
        .map(
            ([tone, label]) =>
                `<span class="signal signal--${tone}${modifier}">${content}${label}</span>`,
        )
        .join("\n    ")}
</p>`;

export const base = () => `
<span class="signal">Draft</span>
`;

export const tonesRow = () => row();

export const strong = () => row(" signal--strong");

export const subtle = () => row(" signal--subtle");

export const leadingIcon = () => row("", icon);

export const wrapped = () => `
<div style="width: 120px">
    <span class="signal signal--positive">${icon}Great price on this item</span>
</div>
`;

export const truncated = () => `
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">${icon}Great price on this item</span>
</div>
`;

export const tonesAndEmphasis = () => matrix();

export const withLeadingIcon = () => matrix(icon);

export const wrapping = () => `
<div style="width: 120px">
    <span class="signal signal--positive">Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--positive">${icon}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--attention signal--strong">${icon}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--information signal--subtle">${icon}Great price on this item</span>
</div>
`;

export const truncation = () => `
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">${icon}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--attention signal--strong signal--truncated">${icon}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--information signal--subtle signal--truncated">${icon}Great price on this item</span>
</div>
`;

export const trustWorthy = () => `
<span class="signal signal--trustworthy">Trustworthy</span>
`;

export const recent = () => `
<span class="signal signal--recent">Recent</span>
`;

export const timeSensitive = () => `
<span class="signal signal--time-sensitive">Time sensitive</span>
`;

export const neutral = () => `
<span class="signal signal--neutral">Neutral</span>
`;

export const deprecatedAliases = () => `
<p>
    <span class="signal signal--trustworthy">Trustworthy</span>
    <span class="signal signal--recent">Recent</span>
    <span class="signal signal--time-sensitive">Time sensitive</span>
</p>
<p>
    <span class="signal signal--trustworthy signal--strong">Trustworthy</span>
    <span class="signal signal--recent signal--strong">Recent</span>
    <span class="signal signal--time-sensitive signal--strong">Time sensitive</span>
</p>
<p>
    <span class="signal signal--trustworthy signal--subtle">Trustworthy</span>
    <span class="signal signal--recent signal--subtle">Recent</span>
    <span class="signal signal--time-sensitive signal--subtle">Time sensitive</span>
</p>
`;

export const RTL = () => `
<div dir="rtl">${matrix(icon)}
<h3>Wrapping</h3>
<div style="width: 120px">
    <span class="signal signal--positive">${icon}Great price on this item</span>
</div>
<h3>Truncation</h3>
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">${icon}Great price on this item</span>
</div>
</div>
`;

export const textSpacing = () => matrix(icon, " demo-a11y-text-spacing");
