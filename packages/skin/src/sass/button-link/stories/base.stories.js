export default { title: "Skin/Button Link/Base" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="button-link">Button Link</a>';

export const iconAndText = () => `
<a class="button-link" href="http://www.ebay.com">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="button-link">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;
