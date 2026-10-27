export default { title: "Skin/Listbox Button/Error/Base" };

export const collapsedUnselected = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--form" aria-expanded="false" aria-haspopup="listbox">
        <span class="button__cell">
            <span class="button__label">Color: </span>
            <span class="button__text">-</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const expandedUnselected = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="button__cell">
            <span class="button__label">Color: </span>
            <span class="button__text">-</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const collapsedSelected = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--form" aria-expanded="false" aria-haspopup="listbox">
        <span class="button__cell">
            <span class="button__label">Color: </span>
            <span class="button__text">Blue</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const expandedSelected = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="button__cell">
            <span class="button__label">Color: </span>
            <span class="button__text">Blue</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const invalid = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--form" aria-expanded="false" aria-haspopup="listbox" aria-invalid="true">
        <span class="button__cell">
            <span class="button__label">Color: </span>
            <span class="button__text">Blue</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const longOption = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="button__cell">
            <span class="button__label">Color: </span>
            <span class="button__text">Red with very very very long text</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Red with very very very long text</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--16" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const borderless = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--borderless" style="min-width: 150px" aria-expanded="false" aria-haspopup="listbox">
        <span class="button__cell">
            <span class="button__label">Quantity: </span>
            <span class="button__text">1</span>
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox" tabindex="0">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">1</span>
                <svg class="icon icon--16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">2</span>
                <svg class="icon icon--16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">3</span>
                <svg class="icon icon--16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;

export const floatingLabelSelected = () => `
<span class="listbox-button listbox-button--error">
    <button class="button button--form button--floating-label" style="min-width: 150px" aria-expanded="false" aria-haspopup="listbox">
        <span class="button__cell">
            <span class="button__floating-label">Color:</span>
            <span class="button__text">Blue</span>
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox" tabindex="0">
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--16" height="10" width="14">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;
