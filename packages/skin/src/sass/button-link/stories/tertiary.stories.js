export default { title: "Skin/Button Link/Tertiary" };

export const textOnly = () =>
    '<a href="http://www.ebay.com" class="button-link button-link--tertiary">Button Link</a>';

export const disabled = () => `
<a class="button-link button-link--tertiary">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;
