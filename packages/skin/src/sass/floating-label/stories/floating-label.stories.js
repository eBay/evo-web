export default { title: "Skin/Floating Label" };

export const base = () => `
<span class="floating-label">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label" for="firstNameRtl">First Name</label>
        <span class="textbox">
            <input class="textbox__control" id="firstNameRtl" type="text" />
        </span>
    </span>
</div>
`;

export const value = () => `
<span class="floating-label">
    <label class="floating-label__label" for="lastName">Last Name</label>
    <span class="textbox">
        <input class="textbox__control" id="lastName" type="text" value="Smith" />
    </span>
</span>
`;

export const placeholder = () => `
<span class="floating-label">
    <label class="floating-label__label" for="dob">Date Of Birth</label>
    <span class="textbox">
        <input class="textbox__control" id="dob" type="text" placeholder="MM/DD/YYYY" />
    </span>
</span>
`;

export const disabledTextbox = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--disabled" for="firstName02">First Name</label>
    <span class="textbox textbox--disabled">
        <input class="textbox__control" id="firstName02" type="text" disabled />
    </span>
</span>
`;

export const invalidTextbox = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline floating-label__label--invalid" for="firstName03">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" />
    </span>
</span>
`;

export const invalidTextboxWithValue = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName04">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName04" type="text" aria-invalid="true" value="value" />
    </span>
</span>
`;

export const invalidTextboxWithPlaceholder = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName05">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName05" type="text" aria-invalid="true" placeholder="placeholder" />
    </span>
</span>
`;

export const longText = () => `
<span class="floating-label">
    <label class="floating-label__label" for="firstNameLongText">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstNameLongText" type="text" />
    </span>
</span>
`;

export const longTextInline = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="firstNameLongTextInline">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstNameLongTextInline" type="text" />
    </span>
</span>
`;

export const select = () => `
<span class="floating-label">
    <label class="floating-label__label" for="floating-select-0-1">Select Option</label>
    <span class="select">
        <select id="floating-select-0-1" name="options">
            <option value="">Choose an option</option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`;

export const selectInline = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="floating-select-1-1">Select Option long text</label>
    <span class="select">
        <select id="floating-select-1-1" name="options">
            <option value=""></option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`;

export const selectInlineDoubled = () => `
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="floating-select-2-1">Select Option long text with ellipsis</label>
    <span class="select">
        <select id="floating-select-2-1" name="options">
            <option value=""></option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="floating-select-2-2">Select Option long text</label>
    <span class="select">
        <select id="floating-select-2-2" name="options">
            <option value=""></option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>

`;

export const RTLSelectInline = () => `
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--inline" for="floating-select-4-1">Select Option long text</label>
        <span class="select">
            <select id="floating-select-4-1" name="options">
                <option value=""></option>
                <option value="item1">Pick Option 1 (default)</option>
                <option value="item2">Pick Option 2</option>
                <option value="item3">Pick Option 3</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </span>
</div>
`;

export const TextArea = () => `
<span class="floating-label floating-label--opaque">
    <label class="floating-label__label" for="floating-label-textarea-input">Enter list of users</label>
    <span class="textbox">
        <textarea class="textbox__control" id="floating-label-textarea-input"></textarea>
    </span>
</span>
`;

export const textSpacing = () => `
<span class="floating-label demo-a11y-text-spacing">
    <label class="floating-label__label" for="firstNameTextSpacing">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstNameTextSpacing" type="text" />
    </span>
</span>
`;

export const phoneInput = () => `
<span class="phone-input">
    <span class="listbox-button listbox-button--form">
    <button class="button button--form button--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: " aria-label="Country: United States of America (+1)">
        <span class="button__cell">
        <span class="button__text">
            <svg class="flag flag--us" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="1">
            <use href="#flag-us"></use>
            </svg>
        </span>
        <svg class="icon icon--12" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
        </span>
    </button>
    <div class="listbox-button__listbox listbox-button__listbox--set-position">
        <div class="listbox-button__options" role="listbox" aria-label="Country">
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--al" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="355">
                <use href="#flag-al"></use>
            </svg>
            <span>Albania</span>
            <span>(+355)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--in" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="91">
                <use href="#flag-in"></use>
            </svg>
            <span>India</span>
            <span>(+91)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--sh" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="290">
                <use href="#flag-sh"></use>
            </svg>
            <span>Saint Helena, Ascension and Tristan da Cunha</span>
            <span>(+290)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option">
            <span class="listbox-button__value">
            <svg class="flag flag--gb" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="44">
                <use href="#flag-gb"></use>
            </svg>
            <span>United Kingdom</span>
            <span>(+44)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="listbox-button__option" role="option" aria-selected="true">
            <span class="listbox-button__value">
            <svg class="flag flag--us" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="1">
                <use href="#flag-us"></use>
            </svg>
            <span>United States of America</span>
            <span>(+1)</span>
            </span>
            <svg class="icon icon--16" focusable="false" height="10" width="14" aria-hidden="true">
            <use href="#icon-tick-16"></use>
            </svg>
        </div>
        </div>
    </div>
    </span>
    <span class="field floating-label">
    <label class="floating-label__label" for="floating-phone-input-0"><span class="clipped">Area code + </span>Phone
        Number</label>
        <span class="textbox">
        <span id="floating-phone-prefix-0">+1</span>
        <input class="textbox__control" type="tel" id="floating-phone-input-0"
            autocomplete="tel-national" aria-describedby="floating-phone-prefix-0"/>
        </span>
    </span>
</span>
`;

export const large = () => `
<span class="floating-label floating-label--large">
    <label class="floating-label__label" for="dob-1">Date Of Birth</label>
    <span class="textbox textbox--large">
        <input class="textbox__control" id="dob-1" type="text">
    </span>
</span>
`;

export const combobox = () => `
<form action="index.html">
    <span class="combobox floating-label">
        <label class="floating-label__label" for="floating-label-combobox-input">
            Enter list of users
        </label>
        <span class="combobox__control">
            <input
                name="combobox-default"
                role="combobox"
                aria-expanded="false"
                type="text"
                aria-haspopup="listbox"
                aria-owns="floating-label-combobox-listbox" aria-controls="floating-label-combobox-listbox"
                id="floating-label-combobox-input"
            >
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
        <div class="combobox__listbox">
            <div id="floating-label-combobox-listbox" class="combobox__options" role="listbox" aria-label="Enter list of users">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 3</span>
                </div>
            </div>
        </div>
    </span>
</form>
`;

export const selectLarge = () => `
<span class="floating-label floating-label--large">
    <label class="floating-label__label" for="floating-select-5-1">
        Select Option
    </label>
    <span class="select select--large">
        <select id="floating-select-5-1" name="options">
            <option value="">Choose an option</option>
            <option value="item1">Pick Option 1 (default)</option>
            <option value="item2">Pick Option 2</option>
            <option value="item3">Pick Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`;
