export default { title: "Skin/Button/Base" };

export const textOnly = () => '<button class="button">Button</button>';

export const form = () => '<button class="button button--form">Button</button>';

export const formSlim = () =>
    '<button class="button button--form button--slim" type="button" aria-expanded="false" aria-label="Expand/Collapse"><svg class="icon icon--12" width="16" height="16" aria-hidden="true"><use href="#icon-chevron-down-12"></use></svg></button>';

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

export const formExpandable = () => `
<button class="button button--form" aria-expanded="false" type="button">
    <span class="button__cell">
        <span class="button__text">Button</span>
        <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>
`;

export const flexibleLayout = () => `
<button class="button button--primary button--fluid" type="button" style="padding-left: 16px; padding-right: 16px;">
    <span class="button__cell" style="justify-content: space-between">
        <span>Select</span>
        <span style="display: inline-flex;">
            <span>Any</span>
            <svg aria-hidden="true" class="icon icon--16" width="8" height="8">
                <use href="#icon-chevron-down-16"></use>
            </svg>
        </span>
    </span>
</button>
`;

export const floatingLabel = () => `
<button class="button button--form button--floating-label" style="min-width: 150px;">
    <span class="button__cell">
        <span class="button__floating-label">Color</span>
        <span class="button__text">Blue</span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>
`;

export const floatingLabelInline = () => `
<button class="button button--form button--floating-label" style="min-width: 150px;">
    <span class="button__cell">
        <span class="button__floating-label button__floating-label--inline">Color</span>
        <span class="button__text"></span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</button>
`;
