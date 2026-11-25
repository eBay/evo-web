export default { title: "Skin/Icon Button/Links" };

export const base = () => `
<a aria-label="settings" class="icon-link icon-link--large" href="https://www.ebay.com">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a aria-label="settings" class="icon-link" href="https://www.ebay.com">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a aria-label="settings" class="icon-link icon-link--small" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const baseSpinner = () => `
<a aria-label="loading" class="icon-link icon-link--large" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link" href="https://www.ebay.com">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link icon-link--small" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
`;

export const baseDisabled = () => `
<a role="link" aria-disabled="true" aria-label="settings" class="icon-link icon-link--large">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="settings" class="icon-link">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="settings" class="icon-link icon-link--small">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const primary = () => `
<a aria-label="loading" class="icon-link icon-link--large icon-link--primary" href="https://www.ebay.com">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a aria-label="loading" class="icon-link icon-link--primary" href="https://www.ebay.com">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a aria-label="loading" class="icon-link icon-link--small icon-link--primary" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const primarySpinner = () => `
<a aria-label="loading" class="icon-link icon-link--large icon-link--primary" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link icon-link--primary" href="https://www.ebay.com">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link icon-link--small icon-link--primary" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
`;

export const primaryDisabled = () => `
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--large icon-link--primary">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--primary">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--small icon-link--primary">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const secondary = () => `
<a aria-label="loading" class="icon-link icon-link--large icon-link--secondary" href="https://www.ebay.com">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a aria-label="loading" class="icon-link icon-link--secondary" href="https://www.ebay.com">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a aria-label="loading" class="icon-link icon-link--small icon-link--secondary" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const secondarySpinner = () => `
<a aria-label="loading" class="icon-link icon-link--large icon-link--secondary" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link icon-link--secondary" href="https://www.ebay.com">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link icon-link--small icon-link--secondary" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
`;

export const secondaryDisabled = () => `
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--large icon-link--secondary">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--secondary">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--small icon-link--secondary">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const tertiary = () => `
<a aria-label="loading" class="icon-link icon-link--large icon-link--tertiary" href="https://www.ebay.com">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a aria-label="loading" class="icon-link icon-link--tertiary" href="https://www.ebay.com">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a aria-label="loading" class="icon-link icon-link--small icon-link--tertiary" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const tertiarySpinner = () => `
<a aria-label="loading" class="icon-link icon-link--large icon-link--tertiary" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--large">
        <svg aria-hidden="true" class="icon icon--24" height="24" width="24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link icon-link--tertiary" href="https://www.ebay.com">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
<a aria-label="loading" class="icon-link icon-link--small icon-link--tertiary" href="https://www.ebay.com">
    <span class="progress-spinner progress-spinner--small">
        <svg aria-hidden="true" class="icon icon--20" height="24" width="24">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>
</a>
`;

export const tertiaryDisabled = () => `
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--large icon-link--tertiary">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-24"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--tertiary">
    <svg class="icon icon--20" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-20"></use>
    </svg>
</a>
<a role="link" aria-disabled="true" aria-label="loading" class="icon-link icon-link--small icon-link--tertiary">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-heart-16"></use>
    </svg>
</a>
`;

export const transparent = () => `
<a class="icon-link icon-link--transparent" href="https://www.ebay.com" aria-label="Attention">
    <svg class="icon icon--24" width="16" height="16" aria-hidden="true">
        <use href="#icon-attention-filled-24"></use>
    </svg>
</a>
`;

export const badged = () => `
<a aria-label="Inbox (4 notifications)" class="icon-link icon-link--badged" href="https://www.ebay.com">
    <svg class="icon icon--24" width="24" height="24" aria-hidden="true">
        <use href="#icon-notification-24"></use>
    </svg>
    <span aria-hidden="true" class="badge">99+</span>
</a>
`;
