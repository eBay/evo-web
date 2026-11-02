export default { title: "Skin/Button/Dimensions" };

export const large = () => `
<button type="button" class="button button--large">
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const small = () => `
<button type="button" class="button button--small">
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const formLarge = () =>
    '<button class="button button--form button--large">Button</button>';

export const formSmall = () =>
    '<button class="button button--form button--small">Button</button>';

export const fluid = () =>
    '<button class="button button--fluid">Button</button>';

export const fixedWidth = () => `
<button class="button" style="width: 200px;">
    Button with a lot of text that should wrap
</button>
`;

export const fixedWidthAndHeight = () => `
<button style="width: 200px;" type="button" class="button button--fixed-height">
    Button with a lot of text that should wrap
</button>
`;

export const fixedWidthAndHeightTruncated = () => `
<button style="width: 200px;" type="button" class="button button--fixed-height button--truncated">
    Button with a lot of text that should wrap
</button>
`;
