export default { title: "Skin/Navigation Button/Dimensions" };

export const large = () => `
<a class="navigation-button navigation-button--large" href="http://www.ebay.com">
    <span class="navigation-button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Navigation Button</span>
    </span>
</a>
`;

export const fluid = () =>
    '<a class="navigation-button navigation-button--fluid" href="http://www.ebay.com">Navigation Button</a>';

export const fixedWidth = () => `
 <a class="navigation-button" href="http://www.ebay.com" style="width: 200px;">
    Navigation Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeight = () => `
<a style="width: 200px;" class="navigation-button navigation-button--fixed-height" href="http://www.ebay.com">
    Navigation Button with a lot of text that should wrap
</a>
`;

export const fixedWidthAndHeightTruncated = () => `
<a style="width: 200px;" class="navigation-button navigation-button--fixed-height navigation-button--truncated" href="http://www.ebay.com">
    Navigation Button with a lot of text that should wrap
</a>
`;
