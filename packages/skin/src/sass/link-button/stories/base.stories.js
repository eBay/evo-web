export default { title: "Skin/Link Button/Base" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="link-button">Link Button</a>';

export const iconAndText = () => `
<a class="link-button" href="http://www.ebay.com">
    <span class="link-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Link Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="link-button">
    <span class="link-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Link Button</span>
    </span>
</a>
`;
