export default { title: "Skin/Selection Chip" };

export const button = () => `
<button class="selection-chip" type="button" aria-pressed="false">
    <span class="selection-chip__text">Football</span>
    <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
`;

export const buttonSelected = () => `
<button class="selection-chip" type="button" aria-pressed="true">
    <span class="selection-chip__text">Football</span>
    <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="selection-chip" type="button" aria-pressed="false">
        <span class="selection-chip__text">Football</span>
        <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-close-12"></use>
        </svg>
    </button>
</div>
`;

export const textSpacing = () => `
    <button class="selection-chip demo-a11y-text-spacing" type="button" aria-pressed="false">
        <span class="selection-chip__text">Football</span>
        <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-close-12"></use>
        </svg>
    </button>`;
