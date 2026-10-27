export default { title: "Skin/CTA Button/Dimensions" };

export const large = () => `
<a class="cta-button cta-button--large" href="http://www.ebay.com">
    <span class="cta-button__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;

export const largeFixedWidthTruncated = () => `
<a style="width: 200px;" class="cta-button cta-button--large cta-button--truncated" href="http://www.ebay.com">
    <span class="cta-button__cell">
        <span>Link with a lot of text that should wrap</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;
