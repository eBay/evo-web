export default { title: "Skin/Split Button/Base" };
export const primaryCollapsed = () => `
<span class="split-button">
    <button class="button button--primary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="menu" type="button" aria-expanded="false" aria-label="More actions" id="split-button-1-trigger" aria-controls="split-button-1-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-1-content" aria-labelledby="split-button-1-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const primaryExpanded = () => `
<span class="split-button">
    <button class="button button--primary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="menu" aria-expanded="true" type="button" aria-label="More actions" id="split-button-2-trigger" aria-controls="split-button-2-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-2-content" aria-labelledby="split-button-2-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const secondaryCollapsed = () => `
<span class="split-button">
    <button class="button button--secondary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--secondary button--split-end" aria-haspopup="menu" type="button" aria-expanded="false" aria-label="More actions" id="split-button-3-trigger" aria-controls="split-button-3-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-3-content" aria-labelledby="split-button-3-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const secondaryExpanded = () => `
<span class="split-button">
    <button class="button button--secondary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--secondary button--split-end" aria-expanded="true" aria-haspopup="menu" type="button" aria-label="More actions" id="split-button-4-trigger" aria-controls="split-button-4-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-4-content" aria-labelledby="split-button-4-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const tertiaryCollapsed = () => `
<span class="split-button">
    <button class="button button--tertiary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--tertiary button--split-end" aria-haspopup="menu" type="button" aria-expanded="false" aria-label="More actions" id="split-button-5-trigger" aria-controls="split-button-5-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-5-content" aria-labelledby="split-button-5-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const tertiaryExpanded = () => `
<span class="split-button">
    <button class="button button--tertiary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--tertiary button--split-end" aria-expanded="true" aria-haspopup="menu" type="button" aria-label="More actions" id="split-button-6-trigger" aria-controls="split-button-6-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-6-content" aria-labelledby="split-button-6-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakePrimaryCollapsed = () => `
<span class="split-button">
    <a class="button-link button-link--primary button-link--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="menu" type="button" aria-expanded="false" aria-label="More actions" id="split-button-7-trigger" aria-controls="split-button-7-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-7-content" aria-labelledby="split-button-7-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakePrimaryExpanded = () => `
<span class="split-button">
    <a class="button-link button-link--primary button-link--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="menu" aria-expanded="true" type="button" aria-label="More actions" id="split-button-8-trigger" aria-controls="split-button-8-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-8-content" aria-labelledby="split-button-8-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeSecondaryCollapsed = () => `
<span class="split-button">
    <a class="button-link button-link--secondary button-link--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--secondary button--split-end" aria-haspopup="menu" type="button" aria-expanded="false" aria-label="More actions" id="split-button-9-trigger" aria-controls="split-button-9-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-9-content" aria-labelledby="split-button-9-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeSecondaryExpanded = () => `
<span class="split-button">
    <a class="button-link button-link--secondary button-link--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--secondary button--split-end" aria-expanded="true" aria-haspopup="menu" type="button" aria-label="More actions" id="split-button-10-trigger" aria-controls="split-button-10-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-10-content" aria-labelledby="split-button-10-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeTertiaryCollapsed = () => `
<span class="split-button">
    <a class="button-link button-link--tertiary button-link--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--tertiary button--split-end" aria-haspopup="menu" type="button" aria-expanded="false" aria-label="More actions" id="split-button-11-trigger" aria-controls="split-button-11-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-11-content" aria-labelledby="split-button-11-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeTertiaryExpanded = () => `
<span class="split-button">
    <a class="button-link button-link--tertiary button-link--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--tertiary button--split-end" aria-expanded="true" aria-haspopup="menu" type="button" aria-label="More actions" id="split-button-12-trigger" aria-controls="split-button-12-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-12-content" aria-labelledby="split-button-12-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const textSpacing = () => `
<span class="split-button demo-a11y-text-spacing">
    <button class="button button--primary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="menu" aria-expanded="true" type="button" aria-label="More actions" id="split-button-13-trigger" aria-controls="split-button-13-content">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse">
            <div class="action-menu" role="menu" id="split-button-13-content" aria-labelledby="split-button-13-trigger">
                <div class="action-menu__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="action-menu__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;
