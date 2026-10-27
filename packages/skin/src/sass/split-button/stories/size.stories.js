export default { title: "Skin/Split Button/Size" };
export const longTextCollapsed = () => `
<span class="split-button">
    <button class="button button--primary button--split-start button--truncated" aria-haspopup="true" type="button">
        <span class="button__cell">
            <span class="button__text">Longest Button Text Example Lorem Ipsum Dolor</span>
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

export const longTextExpanded = () => `
<span class="split-button">
    <button class="button button--primary button--split-start button--truncated" aria-haspopup="true" type="button">
        <span class="button__cell">
            <span class="button__text">Longest Button Text Example Lorem Ipsum Dolor</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="button button--primary button--split-end" aria-expanded="true" aria-haspopup="true" type="button">
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
