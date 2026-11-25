export default { title: "Skin/Icon" };

export const insideHeading = () => `
<h2>
    <svg class="icon icon--24">
        <use href="#icon-information-24"></use>
    </svg>
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</h2>
`;

export const RTLInsideHeading = () => `
<div dir="rtl">
    <h2>
        <svg class="icon icon--24">
            <use href="#icon-information-24"></use>
        </svg>
        <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
    </h2>
</div>
`;

export const insideParagraph = () => `
<p>
    <svg class="icon icon--24">
        <use href="#icon-information-24"></use>
    </svg>
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</p>
`;

export const insideLink = () => `
<a href="http://www.ebay.com">
    <svg class="icon icon--24">
        <use href="#icon-external-link-24"></use>
    </svg>
    <span>There was an error with your payment. Please try again.</span>
</a>
`;

export const beforeLink = () => `
<svg class="icon icon--24">
    <use href="#icon-external-link-24"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">There was an error with your payment. Please try again.</span>
</a>
`;

export const base = () => `
<svg aria-label="Icon example" class="icon icon--24" height="24" width="24" role="img">
    <use href="#icon-information-24"></use>
</svg>
`;

export const simpleDisabled = () => `
<svg aria-label="Disabled icon example" class="icon icon--24 icon--disabled" height="24" width="24" role="img">
    <use href="#icon-chevron-right-24"></use>
</svg>
`;

export const filled = () => `
<svg aria-label="Confirmation" class="icon icon--16" height="16" width="16" role="img">
    <use href="#icon-confirmation-filled-16"></use>
</svg>
<svg aria-label="Attention" class="icon icon--16" height="16" width="16" role="img">
    <use href="#icon-attention-filled-16"></use>
</svg>
<svg aria-label="Information" class="icon icon--16" height="16" width="16" role="img">
    <use href="#icon-information-filled-16"></use>
</svg>
`;

export const complexDisabled = () => `
<svg aria-label="Disabled icon example" class="icon icon--24-colored icon--disabled" height="24" width="24" role="img">
    <use href="#icon-mastercard-24-colored"></use>
</svg>
`;
