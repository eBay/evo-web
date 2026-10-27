export default { title: "Skin/Split Button/Base" };
export const primaryCollapsed = () => `
<span class="split-button">
    <button class="button button--primary button--split-start" type="button">
        <span class="button__cell">
            <span class="button__text">Button</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
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
        <button class="button button--primary button--split-end" aria-haspopup="true" aria-expanded="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
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
        <button class="button button--secondary button--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
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
        <button class="button button--secondary button--split-end" aria-expanded="true" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
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
        <button class="button button--tertiary button--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
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
        <button class="button button--tertiary button--split-end" aria-expanded="true" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakePrimaryCollapsed = () => `
<span class="split-button">
    <a class="navigation-button navigation-button--primary navigation-button--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakePrimaryExpanded = () => `
<span class="split-button">
    <a class="navigation-button navigation-button--primary navigation-button--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-haspopup="true" aria-expanded="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeSecondaryCollapsed = () => `
<span class="split-button">
    <a class="navigation-button navigation-button--secondary navigation-button--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--secondary button--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeSecondaryExpanded = () => `
<span class="split-button">
    <a class="navigation-button navigation-button--secondary navigation-button--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--secondary button--split-end" aria-expanded="true" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeTertiaryCollapsed = () => `
<span class="split-button">
    <a class="navigation-button navigation-button--tertiary navigation-button--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--tertiary button--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fakeTertiaryExpanded = () => `
<span class="split-button">
    <a class="navigation-button navigation-button--tertiary navigation-button--split-start" href="https://ebay.com">
        Link
    </a>
    <span class="menu-button">
        <button class="button button--tertiary button--split-end" aria-expanded="true" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
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
        <button class="button button--primary button--split-end" aria-haspopup="true" aria-expanded="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;
