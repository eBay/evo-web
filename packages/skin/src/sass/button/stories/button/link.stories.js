export default { title: "Skin/Button/Link" };

export const textOnly = () =>
    '<button class="btn btn--link" type="button">Link Button</button>';

export const inlineInText = () => `
<p>
    Seller ships within 2 days.
    <button class="btn btn--link" type="button">View seller details</button>
    before you buy.
</p>
`;

export const disabled = () =>
    '<button class="btn btn--link" type="button" disabled>Link Button</button>';

export const partiallyDisabled = () =>
    '<button class="btn btn--link" type="button" aria-disabled="true">Link Button</button>';

export const legal = () =>
    '<button class="btn btn--link legal-link" type="button">Privacy Policy</button>';

export const anchor = () =>
    '<a class="btn btn--link" href="http://www.ebay.com">Link Button</a>';

export const anchorDisabled = () => '<a class="btn btn--link">Link Button</a>';

export const RTL = () => `
<p dir="rtl">
    Seller ships within 2 days.
    <button class="btn btn--link" type="button">View seller details</button>
</p>
`;

export const textSpacing = () =>
    '<button class="btn btn--link demo-a11y-text-spacing" type="button">Link Button</button>';
