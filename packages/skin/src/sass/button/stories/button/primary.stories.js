export default { title: "Skin/Button/Primary" };

export const textOnly = () =>
    '<button class="button button--primary">Button</button>';

export const iconAndText = () => `
<button type="button" class="button button--primary">
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="button button--primary" disabled>
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const partiallyDisabled = () => `
<button type="button" class="button button--primary" aria-disabled="true">
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="button button--primary" aria-label="Busy">
    <span class="button__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const textAndIcon = () => `
<button type="button" class="button button--primary">
    <span class="button__cell">
        <span>Button</span>
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
    </span>
</button>
`;

export const expandable = () => `
<button class="button button--primary" aria-expanded="false" type="button">
    <span class="button__cell">
        <span class="button__text">Button</span>
        <svg class="icon icon--16" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-16"></use>
        </svg>
    </span>
</button>
`;
