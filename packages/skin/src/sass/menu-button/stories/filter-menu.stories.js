export default { title: "Skin/Menu Button/Filter Menu" };

export const collapsed = () => `
<span class="menu-button menu-button--filter">
    <button
        class="filter-chip"
        aria-pressed="false"
        aria-haspopup="true"
        aria-expanded="false"
    >
        <span class="filter-chip__text">
            Sport: (+2)
        </span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="true"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 1</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="true"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 2</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const checkboxExpanded = () => `
<span class="menu-button menu-button--filter">
    <button
        class="filter-chip"
        aria-pressed="false"
        aria-haspopup="true"
        aria-expanded="true"
    >
        <span class="filter-chip__text">
            Sport: (+2)
        </span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 1</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 2</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const checkboxExpandedSelected = () => `
<span class="menu-button menu-button--filter">
    <button
        class="filter-chip"
        aria-pressed="true"
        aria-haspopup="true"
        aria-expanded="true"
    >
        <span class="filter-chip__text">
            Sport: (+2)
        </span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="true"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 1</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="true"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 2</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const radioExpanded = () => `
<span class="menu-button menu-button--filter">
    <button
        class="filter-chip"
        aria-pressed="false"
        aria-haspopup="true"
        aria-expanded="true"
    >
        <span class="filter-chip__text">
            Sport: (+2)
        </span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div
                class="menu-button__item"
                role="menuitemradio"
                aria-checked="false"
            >
                <svg
                    aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-checked-18"/>
                </svg>
                <span>Menu Item 1</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemradio"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-checked-18"/>
                </svg>
                <span>Menu Item 2</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemradio"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-checked-18"/>
                </svg>
                <span>Menu Item 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const radioExpandedSelected = () => `
<span class="menu-button menu-button--filter">
    <button
        class="filter-chip"
        aria-pressed="true"
        aria-haspopup="true"
        aria-expanded="true"
    >
        <span class="filter-chip__text">
            Sport: (+2)
        </span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div
                class="menu-button__item"
                role="menuitemradio"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-checked-18"/>
                </svg>
                <span>Menu Item 1</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemradio"
                aria-checked="true"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-checked-18"/>
                </svg>
                <span>Menu Item 2</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemradio"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-radio-checked-18"/>
                </svg>
                <span>Menu Item 3</span>
            </div>
        </div>
    </div>
</span>
`;

export const expandedWithFooter = () => `
<span class="menu-button menu-button--filter">
    <button
        class="filter-chip"
        aria-pressed="false"
        aria-haspopup="true"
        aria-expanded="true"
    >
        <span class="filter-chip__text">
            Sport: (+2)
        </span>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </button>
    <div class="menu-button__menu menu-button__menu--set-position">
        <div class="menu-button__items" role="menu">
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 1</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 2</span>
            </div>
            <div
                class="menu-button__item"
                role="menuitemcheckbox"
                aria-checked="false"
            >
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--unchecked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-unchecked-18"/>
                </svg>
                <svg
                aria-hidden="true"
                    class="icon icon--18 icon--checked"
                    height="18"
                    width="18"
                >
                    <use href="#icon-checkbox-checked-18"/>
                </svg>
                <span>Menu Item 3</span>
            </div>
       </div>
        <div class="menu-button__footer">
            <button class="btn btn--tertiary" type="submit">
                Apply
            </button>
        </div>
    </div>
</span>
`;
