export default { title: "Skin/Link Button/Dimensions" };

export const large = () => `
<a class="link-button link-button--large" href="http://www.ebay.com">
    <span class="link-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Link Button</span>
    </span>
</a>
`;

export const fluid = () =>
    '<a class="link-button link-button--fluid" href="http://www.ebay.com">Link Button</a>';

export const fixedWidth = () => `
 <a class="link-button" href="http://www.ebay.com" style="width: 200px;">
    Link Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeight = () => `
<a style="width: 200px;" class="link-button link-button--fixed-height" href="http://www.ebay.com">
    Link Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeightTruncated = () => `
<a style="width: 200px;" class="link-button link-button--fixed-height link-button--truncated" href="http://www.ebay.com">
    Link Button with a lot of text that should wrap
</a>
`;
