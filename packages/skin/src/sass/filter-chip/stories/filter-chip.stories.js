export default { title: "Skin/Filter Chip/Base" };

export const button = () => `
<button class="filter-chip" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
`;

export const buttonSelected = () => `
<button class="filter-chip" type="button" aria-pressed="true">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</button>
`;

export const anchor = () => `
<a class="filter-chip" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</a>
`;

export const anchorSelected = () => `
<a class="filter-chip filter-chip--selected" herf="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football <span class="clipped">- Selected</span></span>
</a>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="filter-chip" type="button" aria-pressed="false">
        <svg class="icon icon--16" width="16" height="16">
            <use href="#icon-sneaker-16"/>
        </svg>
        <span class="filter-chip__text">Football</span>
    </button>
</div>
`;

export const textSpacing = () => `
<button class="filter-chip demo-a11y-text-spacing" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
`;
