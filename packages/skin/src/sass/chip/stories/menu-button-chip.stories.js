export default { title: "Skin/Chip/Menu Button Chip" };

export const collapsed = () => `
<button class="chip chip--filter" aria-expanded="false">
    <span class="chip__text">Football</span>
    <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const expanded = () => `
<button class="chip chip--filter" aria-expanded="true">
    <span class="chip__text">Football</span>
    <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-chevron-down-12"/>
    </svg>
</button>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="chip chip--discovery" aria-expanded="false">
        <span class="chip__text">Football</span>
        <svg class="icon icon--12 chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-chevron-down-12"/>
        </svg>
    </button>
</div>
`;
