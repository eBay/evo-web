export default { title: "Skin/Button/Anchor/Secondary" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="btn btn--secondary">Anchor Button</a>';

export const iconOnly = () => `
<a class="btn btn--secondary" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
    </span>
</a>
`;

export const iconAndText = () => `
<a class="btn btn--secondary" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Anchor Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="btn btn--secondary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Anchor Button</span>
    </span>
</a>
`;

export const partiallyDisabled = () => `
<a class="btn btn--secondary" href="http://www.ebay.com" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Anchor Button</span>
    </span>
</a>
`;
