export default { title: "Skin/Link Button/Secondary" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="link-button link-button--secondary">Link Button</a>';

export const iconOnly = () => `
<a class="link-button link-button--secondary" href="http://www.ebay.com">
    <span class="link-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
    </span>
</a>
`;

export const iconAndText = () => `
<a class="link-button link-button--secondary" href="http://www.ebay.com">
    <span class="link-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Link Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="link-button link-button--secondary">
    <span class="link-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Link Button</span>
    </span>
</a>
`;

export const partiallyDisabled = () => `
<a class="link-button link-button--secondary" href="http://www.ebay.com" aria-disabled="true">
    <span class="link-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Link Button</span>
    </span>
</a>
`;
