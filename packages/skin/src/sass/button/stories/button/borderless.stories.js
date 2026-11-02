export default { title: "Skin/Button/Borderless" };

export const base = () => `<button class="button button--borderless">
    <span class="button__cell">
        <span class="button__text">Button</span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;

export const disabled =
    () => `<button class="button button--borderless" disabled="true">
    <span class="button__cell">
        <span class="button__text">Button</span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;

export const ariaDisabled =
    () => `<button class="button button--borderless" aria-disabled="true">
    <span class="button__cell">
        <span class="button__text">Button</span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;

export const empty =
    () => `<button class="button button--borderless" disabled="true">
    <span class="button__cell">
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>`;
