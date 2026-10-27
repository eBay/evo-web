export default { title: "Skin/Navigation Button/Base" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="navigation-button">Navigation Button</a>';

export const iconAndText = () => `
<a class="navigation-button" href="http://www.ebay.com">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Navigation Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="navigation-button">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Navigation Button</span>
    </span>
</a>
`;
