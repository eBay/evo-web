export default { title: "Skin/Button Link/Dimensions" };

export const large = () => `
<a class="button-link button-link--large" href="http://www.ebay.com">
    <span class="button-link__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button Link</span>
    </span>
</a>
`;

export const fluid = () =>
    '<a class="button-link button-link--fluid" href="http://www.ebay.com">Button Link</a>';

export const fixedWidth = () => `
 <a class="button-link" href="http://www.ebay.com" style="width: 200px;">
    Button Link with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeight = () => `
<a style="width: 200px;" class="button-link button-link--fixed-height" href="http://www.ebay.com">
    Button Link with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeightTruncated = () => `
<a style="width: 200px;" class="button-link button-link--fixed-height button-link--truncated" href="http://www.ebay.com">
    Button Link with a lot of text that should wrap
</a>
`;
