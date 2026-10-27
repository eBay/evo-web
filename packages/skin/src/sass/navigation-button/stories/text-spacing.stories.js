export default { title: "Skin/Navigation Button/Text Spacing" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="navigation-button demo-a11y-text-spacing">Navigation Button</a>';

export const iconAndText = () => `
<a class="navigation-button demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Navigation Button</span>
    </span>
</a>
`;
