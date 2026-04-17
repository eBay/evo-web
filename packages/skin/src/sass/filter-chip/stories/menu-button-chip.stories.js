export default { title: "Skin/Filter Chip/Menu" };

export const collapsed = () => `
<button class="filter-chip" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const expanded = () => `
<button class="filter-chip" type="button" aria-expanded="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const collapsedSelected = () => `
<button class="filter-chip filter-chip--selected" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
`;

export const expandedSelected = () => `
<button class="filter-chip filter-chip--selected" type="button" aria-expanded="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="filter-chip" type="button" aria-expanded="false">
        <span class="filter-chip__text">Football</span>
        <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-chevron-down-12"/>
        </svg>
    </button>
</div>
`;

export const expressiveCollapsed = () => `
<button class="filter-chip filter-chip--expressive" type="button" aria-expanded="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const expressiveCollapsedSelected = () => `
<button class="filter-chip filter-chip--expressive filter-chip--selected" type="button" aria-expanded="false">
    <span class="filter-chip__media">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
    </span>
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
    <span class="clipped">Filter Applied</span>
</button>
`;

export const textSpacing = () => `
<button class="filter-chip demo-a11y-text-spacing" type="button" aria-expanded="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;
