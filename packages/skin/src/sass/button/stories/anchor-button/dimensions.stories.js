export default { title: "Skin/Button/Anchor/Dimensions" };

export const large = () => `
<a class="btn btn--large" href="http://www.ebay.com">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Anchor Button</span>
    </span>
</a>
`;

export const fluid = () =>
    '<a class="btn btn--fluid" href="http://www.ebay.com">Anchor Button</a>';

export const fixedWidth = () => `
 <a class="btn" href="http://www.ebay.com" style="width: 200px;">
    Anchor Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeight = () => `
<a style="width: 200px;" class="btn btn--fixed-height" href="http://www.ebay.com">
    Anchor Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeightTruncated = () => `
<a style="width: 200px;" class="btn btn--fixed-height btn--truncated" href="http://www.ebay.com">
    Anchor Button with a lot of text that should wrap
</a>
`;
