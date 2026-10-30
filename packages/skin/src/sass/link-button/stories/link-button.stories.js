export default { title: "Skin/Link Button" };

export const base = () =>
    `<button class="link-button" type="button">Button</button>`;

export const disabled = () =>
    `<button class="link-button" disabled type="button">Button</button>`;

export const legal = () =>
    `<button class="link-button legal-link" type="button">Button</button>`;

export const RTL = () => `
<div dir="rtl">
    <button class="link-button" type="button">Button</button>
</div>
`;

export const textSpacing = () =>
    `<button class="link-button demo-a11y-text-spacing" type="button">Button</button>`;
