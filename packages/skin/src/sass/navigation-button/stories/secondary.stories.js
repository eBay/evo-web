export default { title: "Skin/Navigation Button/Secondary" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="navigation-button navigation-button--secondary">Navigation Button</a>';

export const iconOnly = () => `
<a class="navigation-button navigation-button--secondary" href="http://www.ebay.com" aria-label="Close">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true"><use href="#icon-close-16"></use></svg>
    </span>
</a>
`;

export const iconAndText = () => `
<a class="navigation-button navigation-button--secondary" href="http://www.ebay.com">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Navigation Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="navigation-button navigation-button--secondary">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Navigation Button</span>
    </span>
</a>
`;

export const partiallyDisabled = () => `
<a class="navigation-button navigation-button--secondary" href="http://www.ebay.com" aria-disabled="true">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Navigation Button</span>
    </span>
</a>
`;
