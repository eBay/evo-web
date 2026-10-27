export default { title: "Skin/Text Button" };

export const base = () =>
    `<button class="text-button" type="button">Button</button>`;

export const disabled = () =>
    `<button class="text-button" disabled type="button">Button</button>`;

export const legal = () =>
    `<button class="text-button legal-link" type="button">Button</button>`;

export const RTL = () => `
<div dir="rtl">
    <button class="text-button" type="button">Button</button>
</div>
`;

export const textSpacing = () =>
    `<button class="text-button demo-a11y-text-spacing" type="button">Button</button>`;
