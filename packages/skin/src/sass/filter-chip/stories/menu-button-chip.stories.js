export default { title: "Skin/Filter Chip/Menu" };

export const collapsed = () => `
<button class="filter-chip" aria-expanded="false" aria-pressed="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const expanded = () => `
<button class="filter-chip" aria-expanded="true" aria-pressed="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const collapsedSelected = () => `
<button class="filter-chip" aria-expanded="false" aria-pressed="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const expandedSelected = () => `
<button class="filter-chip" aria-expanded="true" aria-pressed="true">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="filter-chip" aria-expanded="false" aria-pressed="false">
        <span class="filter-chip__text">Football</span>
        <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-chevron-down-12"/>
        </svg>
    </button>
</div>
`;

export const textSpacing = () => `
<button class="filter-chip demo-a11y-text-spacing" aria-expanded="false" aria-pressed="false">
    <span class="filter-chip__text">Football</span>
    <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;
