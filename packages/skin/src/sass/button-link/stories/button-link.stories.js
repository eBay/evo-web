export default { title: "Skin/Button Link" };

export const base = () =>
    `<button class="button-link" type="button">Button</button>`;

export const disabled = () =>
    `<button class="button-link" disabled type="button">Button</button>`;

export const legal = () =>
    `<button class="button-link legal-link" type="button">Button</button>`;

export const RTL = () => `
<div dir="rtl">
    <button class="button-link" type="button">Button</button>
</div>
`;

export const textSpacing = () =>
    `<button class="button-link demo-a11y-text-spacing" type="button">Button</button>`;
