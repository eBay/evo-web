export default { title: "Skin/Button Link/Text Spacing" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="button-link demo-a11y-text-spacing">Button Link</a>';

export const iconAndText = () => `
<a class="button-link demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;
