export default { title: "Skin/Button/Destructive/Primary" };

export const textOnly = () =>
    '<button class="button button--primary button--destructive">Destructive Button</button>';

export const iconAndText = () => `
<button type="button" class="button button--primary button--destructive">
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`;

export const disabled = () => `
<button disabled class="button button--primary button--destructive">Tertiary</button
`;

export const disabledWithIcon = () => `
<button type="button" class="button button--primary button--destructive" disabled>
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`;

export const busy = () => `
<button class="button button--primary button--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
`;
