export default { title: "Skin/Button/Anchor/Base" };

export const textOnly = () =>
    '<a href="http://www.ebay/com" class="btn">Anchor Button</a>';

export const iconAndText = () => `
<a class="btn" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Anchor Button</span>
    </span>
</a>
`;

export const disabled = () => `
<a class="btn">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Anchor Button</span>
    </span>
</a>
`;
