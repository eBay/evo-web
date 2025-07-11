export default { title: "Skin/Filter Chip/Expressive" };

export const button = () => `
<button class="filter-chip filter-chip--expressive" type="button" aria-pressed="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
</button>
`;

export const buttonSelected = () => `
<button class="filter-chip filter-chip--expressive" type="button" aria-pressed="true">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
</button>
`;

export const anchor = () => `
<a class="filter-chip filter-chip--expressive" href="https://www.ebay.com">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
</a>
`;

export const anchorSelected = () => `
<a class="filter-chip filter-chip--expressive filter-chip--selected" href="https://www.ebay.com">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football <span class="clipped">- Selected</span></span>
</a>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="filter-chip filter-chip--expressive" type="button" aria-pressed="false">
        <span class="filter-chip__media">
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            >
        </span>
        <span class="filter-chip__text">Football</span>
    </button>
</div>
`;

export const textSpacing = () => `
<button class="filter-chip filter-chip--expressive demo-a11y-text-spacing" type="button" aria-pressed="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
</button>
`;
