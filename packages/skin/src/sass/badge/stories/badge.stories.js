export default { title: "Skin/Badge" };

export const empty = () => `
<span class="badge" role="img" aria-label="new"></span>
`;

export const oneDigit = () => `
<span class="badge" role="img" aria-label="1 notification">1</span>
`;

export const twoDigits = () => `
<span class="badge" role="img" aria-label="10 notifications">10</span>
`;

export const threeDigits = () => `
<span class="badge" role="img" aria-label="99+ notifications">99+</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="badge" role="img" aria-label="99+ notifications">+99</span>
</div>
`;

export const textSpacing = () => `
<span class="badge demo-a11y-text-spacing" role="img" aria-label="99+ notifications">99+</span>
`;
