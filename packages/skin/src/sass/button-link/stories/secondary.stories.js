export default { title: "Skin/Button Link/Secondary" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="button-link button-link--secondary">Button Link</a>';

export const iconOnly = () => `
<a class="button-link button-link--secondary" href="http://www.ebay.com" aria-label="Close">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true"><use href="#icon-close-16"></use></svg>
    </span>
</a>
`;

export const iconAndText = () => `
<a class="button-link button-link--secondary" href="http://www.ebay.com">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="button-link button-link--secondary">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;

export const partiallyDisabled = () => `
<a class="button-link button-link--secondary" href="http://www.ebay.com" aria-disabled="true">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;
