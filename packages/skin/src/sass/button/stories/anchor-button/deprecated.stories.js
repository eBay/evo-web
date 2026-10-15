export default { title: "Skin/Button/Anchor/Deprecated" };

export const fakeButton = () =>
    '<a href="http://www.ebay.com" class="fake-btn">Fake Button</a>';

export const fakeButtonIconAndText = () => `
<a class="fake-btn fake-btn--primary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;

export const fakeButtonSecondaryLarge = () =>
    '<a href="http://www.ebay.com" class="fake-btn fake-btn--secondary fake-btn--large">Fake Button</a>';

export const fakeButtonDisabled = () =>
    '<a class="fake-btn fake-btn--primary">Fake Button</a>';
