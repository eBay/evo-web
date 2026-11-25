export default { title: "Skin/Layout Grid" };

export const base = () => `
<div class="layout-grid">
    <ul aria-label="List of options">
        <li>
            <button class="button button--fluid">Button 1</button>
        </li>
        <li>
            <button class="button button--fluid">Button 2</button>
        </li>
        <li>
            <button class="button button--fluid">Button 3</button>
        </li>
        <li>
            <button class="button button--fluid">Button 4</button>
        </li>
        <li>
            <button class="button button--fluid">Button 5</button>
        </li>
        <li>
            <button class="button button--fluid">Button 6</button>
        </li>
        <li>
            <button class="button button--fluid">Button 7</button>
        </li>
        <li>
            <button class="button button--fluid">Button 8</button>
        </li>
        <li>
            <button class="button button--fluid">Button 9</button>
        </li>
        <li>
            <button class="button button--fluid">Button 10</button>
        </li>
    </ul>
</div>
`;

export const custom = () => `
<div class="layout-grid"
    data-columns-min="2"
    data-columns-xs="3"
    data-columns-sm="4"
    data-columns-md="6"
    data-columns-lg="8"
>
    <ul aria-label="List of options">
        <li>
            <button class="button button--fluid">Button 1</button>
        </li>
        <li>
            <button class="button button--fluid">Button 2</button>
        </li>
        <li>
            <button class="button button--fluid">Button 3</button>
        </li>
        <li>
            <button class="button button--fluid">Button 4</button>
        </li>
        <li>
            <button class="button button--fluid">Button 5</button>
        </li>
        <li>
            <button class="button button--fluid">Button 6</button>
        </li>
        <li>
            <button class="button button--fluid">Button 7</button>
        </li>
        <li>
            <button class="button button--fluid">Button 8</button>
        </li>
        <li>
            <button class="button button--fluid">Button 9</button>
        </li>
        <li>
            <button class="button button--fluid">Button 10</button>
        </li>
    </ul>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="layout-grid">
        <ul aria-label="List of options">
            <li>
                <button class="button button--fluid">Button 1</button>
            </li>
            <li>
                <button class="button button--fluid">Button 2</button>
            </li>
            <li>
                <button class="button button--fluid">Button 3</button>
            </li>
            <li>
                <button class="button button--fluid">Button 4</button>
            </li>
            <li>
                <button class="button button--fluid">Button 5</button>
            </li>
            <li>
                <button class="button button--fluid">Button 6</button>
            </li>
            <li>
                <button class="button button--fluid">Button 7</button>
            </li>
            <li>
                <button class="button button--fluid">Button 8</button>
            </li>
            <li>
                <button class="button button--fluid">Button 9</button>
            </li>
            <li>
                <button class="button button--fluid">Button 10</button>
            </li>
        </ul>
    </div>
</div>
`;

export const withRadios = () => `
<h3 id="layout-grid-radio-title">My Radio Buttons</h3>
<div class="layout-grid">
    <ul aria-labelledby="layout-grid-radio-title">
        <li>
            <span class="radio">
                <input id="layout-grid-radio-1" class="radio__control" type="radio" name="layout-grid-radio" />
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label for="layout-grid-radio-1">Option 1</label>
        </li>
        <li>
            <span class="radio">
                <input id="layout-grid-radio-2" class="radio__control" type="radio" name="layout-grid-radio" />
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label for="layout-grid-radio-2">Option 2</label>
        </li>
        <li>
            <span class="radio">
                <input id="layout-grid-radio-3" class="radio__control" type="radio" name="layout-grid-radio" />
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label for="layout-grid-radio-3">Option 3</label>
        </li>
        <li>
            <span class="radio">
                <input id="layout-grid-radio-4" class="radio__control" type="radio" name="layout-grid-radio" />
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label for="layout-grid-radio-4">Option 4</label>
        </li>
        <li>
            <span class="radio">
                <input id="layout-grid-radio-5" class="radio__control" type="radio" name="layout-grid-radio" />
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label for="layout-grid-radio-5">Option 5</label>
        </li>
        <li>
            <span class="radio">
                <input id="layout-grid-radio-6" class="radio__control" type="radio" name="layout-grid-radio" />
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label for="layout-grid-radio-6">Option 6</label>
        </li>
        <li>
            <span class="radio">
                <input id="layout-grid-radio-7" class="radio__control" type="radio" name="layout-grid-radio" />
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18" aria-hidden="true">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label for="layout-grid-radio-7">Option 7</label>
        </li>
    </ul>
</div>
`;
