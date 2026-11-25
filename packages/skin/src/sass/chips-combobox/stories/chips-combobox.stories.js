export default { title: "Skin/Chips Combobox/Base" };

export const empty = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports"></ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" aria-label="Add Sport" role="combobox" aria-expanded="false" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" aria-controls="listbox-chips-combobox-1" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const fluid = () => `
<span class="chips-combobox chips-combobox--fluid">
    <ul class="chips-combobox__items" aria-label="Selected sports"></ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-2-input" aria-label="Add Sport" role="combobox" aria-expanded="false" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-2" aria-controls="listbox-chips-combobox-2" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-2" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const prefilled = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-3-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-1-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-3-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-2-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-3-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-3-3-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-3-input" aria-label="Add Sport" role="combobox" aria-expanded="false" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-3" aria-controls="listbox-chips-combobox-3" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-3" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const manyChips = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-4-text" class="chip__text">Soccer</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-4-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-5-text" class="chip__text">Hockey</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-5-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-6-text" class="chip__text">Tennis</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-6-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-7-text" class="chip__text">Swimming</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-7-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-8-text" class="chip__text">Cricket</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-8-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-9-text" class="chip__text">Table Tennis</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-9-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-10-text" class="chip__text">Rugby</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-10-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-11-text" class="chip__text">Boxing</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-11-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-12-text" class="chip__text">Judo</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-12-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-13-text" class="chip__text">Fencing</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-13-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-14-text" class="chip__text">Volleyball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-14-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-15-text" class="chip__text">Golf</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-15-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" aria-label="Add Sport" role="combobox" aria-expanded="false" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" aria-controls="listbox-chips-combobox-1" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const expanded = () => `
<span class="chips-combobox">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js combobox--expanded chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" aria-label="Add Sport" role="combobox" aria-expanded="true" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" aria-controls="listbox-chips-combobox-1" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const textSpacing = () => `
<span class="chips-combobox demo-a11y-text-spacing">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-1-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-1-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-2-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-1-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-1-3-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js combobox--expanded chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-1-input" aria-label="Add Sport" role="combobox" aria-expanded="true" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-1" aria-controls="listbox-chips-combobox-1" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-1" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const disabledState = () => `
<span class="chips-combobox" aria-disabled="true">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-4-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-4-1-text" disabled>
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-4-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-4-2-text" disabled>
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-4-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-4-3-text" disabled>
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-4-input" aria-label="Add Sport" role="combobox" aria-expanded="false" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-4" aria-controls="listbox-chips-combobox-4" disabled />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-4" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;

export const errorState = () => `
<span class="chips-combobox chips-combobox--error">
    <ul class="chips-combobox__items" aria-label="Selected sports">
        <li>
            <span class="chip">
                <span id="chip-interactive-5-1-text" class="chip__text">Football</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-5-1-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-5-2-text" class="chip__text">Basketball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-5-2-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
        <li>
            <span class="chip">
                <span id="chip-interactive-5-3-text" class="chip__text">Baseball</span>
                <button class="chip__button" type="button" aria-label="Remove" aria-describedby="chip-interactive-5-3-text">
                    <svg class="icon icon--12" width="13" height="12" aria-hidden="true">
                        <use href="#icon-close-12"></use>
                    </svg>
                </button>
            </span>
        </li>
    </ul>
    <span class="combobox combobox--js chips-combobox__combobox">
        <span class="combobox__control chips-combobox_combobox__control">
            <input id="chips-combobox-5-input" aria-label="Add Sport" role="combobox" aria-expanded="false" type="text" placeholder="Add Sport" aria-haspopup="listbox" aria-owns="listbox-chips-combobox-5" aria-controls="listbox-chips-combobox-5" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox-chips-combobox-5" class="combobox__options" role="listbox" aria-label="Add Sport">
                <div class="combobox__option" role="option">
                    <span>Soccer</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Hockey</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Tennis</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;
