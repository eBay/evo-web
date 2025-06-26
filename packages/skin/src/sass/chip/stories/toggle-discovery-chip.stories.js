export default { title: "Skin/Chip/Toggle Discovery Chip" };

export const button = () => `
<button class="chip chip--discovery" type="button" aria-pressed="false">
    <img
        class="chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="chip__text">Football</span>
</button>
`;

export const buttonSelected = () => `
<button class="chip chip--discovery" type="button" aria-pressed="true">
    <img
        class="chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="chip__text">Football</span>
</button>
`;

export const anchor = () => `
<a class="chip chip--discovery" herf="https://www.ebay.com">
    <img
        class="chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="chip__text">Football</span>
</a>
`;

export const anchorSelected = () => `
<a class="chip chip--discovery chip--selected" herf="https://www.ebay.com">
    <img
        class="chip__media"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
        alt=""
    >
    <span class="chip__text">Football <span class="clipped">- Selected</span></span>
</a>
`;

export const RTL = () => `
<div dir="rtl">
    <button class="chip chip--discovery" type="button" aria-pressed="false">
        <img
            class="chip__media"
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        >
        <span class="chip__text">Football</span>
    </button>
</div>
`;
