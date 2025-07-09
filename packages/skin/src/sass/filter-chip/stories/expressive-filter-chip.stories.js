export default { title: "Skin/Filter Chip/Expressive" };

export const button = () => `
<button class="filter-chip filter-chip--expressive" type="button" aria-pressed="false">
    <img
        class="filter-chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="filter-chip__text">Football</span>
</button>
`;

export const buttonSelected = () => `
<button class="filter-chip filter-chip--expressive" type="button" aria-pressed="true">
    <img
        class="filter-chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="filter-chip__text">Football</span>
</button>
`;

export const anchor = () => `
<a class="filter-chip filter-chip--expressive" herf="https://www.ebay.com">
    <img
        class="filter-chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="filter-chip__text">Football</span>
</a>
`;

export const anchorSelected = () => `
<a class="filter-chip filter-chip--expressive filter-chip--selected" herf="https://www.ebay.com">
    <img
        class="filter-chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="filter-chip__text">Football <span class="clipped">- Selected</span></span>
</a>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="filter-chip filter-chip--expressive" type="button" aria-pressed="false">
        <img
            class="filter-chip__media"
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
        <span class="filter-chip__text">Football</span>
    </button>
</div>
`;

export const textSpacing = () => `
<button class="filter-chip filter-chip--expressive demo-a11y-text-spacing" type="button" aria-pressed="false">
    <img
        class="filter-chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="filter-chip__text">Football</span>
</button>
`;
