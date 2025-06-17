export default { title: "Skin/Chip/Toggle Chip" };

export const button = () => `
<button class="chip" type="button" aria-pressed="false">
    <span class="chip__text">Football</span>
    <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
`;

export const buttonSelected = () => `
<button class="chip" type="button" aria-pressed="true">
    <span class="chip__text">Football</span>
    <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
`;

export const anchor = () => `
<a class="chip" herf="https://www.ebay.com">
    <span class="chip__text">Football</span>
    <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</a>
`;

export const anchorSelected = () => `
<a class="chip chip--selected" herf="https://www.ebay.com">
    <span class="chip__text">Football <span class="clipped">- Selected</span></span>
    <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</a>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="chip" type="button" aria-pressed="false">
        <span class="chip__text">Football</span>
        <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-close-12"></use>
        </svg>
    </button>
</div>
`;
