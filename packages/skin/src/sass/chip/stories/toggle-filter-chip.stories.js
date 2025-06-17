export default { title: "Skin/Chip/Toggle Filter Chip" };

export const button = () => `
<button class="chip chip--filter" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="chip__text">Football</span>
</button>
`;

export const buttonSelected = () => `
<button class="chip chip--filter" type="button" aria-pressed="true">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="chip__text">Football</span>
</button>
`;

export const anchor = () => `
<a class="chip chip--filter" herf="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="chip__text">Football</span>
</a>
`;

export const anchorSelected = () => `
<a class="chip chip--filter chip--selected" herf="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="chip__text">Football <span class="clipped">- Selected</span></span>
</a>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="chip chip--filter" type="button" aria-pressed="false">
        <svg class="icon icon--16" width="16" height="16">
            <use href="#icon-sneaker-16"/>
        </svg>
        <span class="chip__text">Football</span>
    </button>
</div>
`;
