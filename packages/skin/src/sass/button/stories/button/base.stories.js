export default { title: "Skin/Button/Base" };

export const textOnly = () => '<button class="button">Button</button>';

export const form = () => '<button class="button button--form">Button</button>';

export const formSlim = () =>
    '<button class="button button--form button--slim"><svg class="icon icon--12" width="16" height="16"><use href="#icon-chevron-down-12"></use></svg></button>';

export const iconAndText = () => `
<button type="button" class="button">
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button type="button" class="button" disabled>
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="button" aria-label="Busy">
    <span class="button__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const busyLarge = () => `
<button class="button button--large" aria-label="Busy">
    <span class="button__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const formBusy = () => `
<button class="button button--form" aria-label="Busy">
    <span class="button__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const submit = () =>
    '<button type="submit" class="button">Submit</button>';

export const reset = () => '<button type="reset" class="button">Reset</button>';
