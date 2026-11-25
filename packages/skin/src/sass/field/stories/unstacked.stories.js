export default { title: "Skin/Field/Unstacked" };

export const inlineLevel = () => `
<span class="field">
    <label class="field__label" for="field-unstacked-1">Field 1</label>
    <span class="field__control textbox">
        <input class="textbox__control" id="field-unstacked-1" type="text" placeholder="placeholder text" />
    </span>
</span>
<span class="field">
    <label class="field__label" for="field-unstacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-unstacked-2" name="options">
            <option value="item1">Option 1</option>
            <option value="item2">Option 2</option>
            <option value="item3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
<span class="field">
    <label class="field__label" for="field-unstacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-unstacked-3" role="switch" type="checkbox" aria-label="Switch Demo" />
        <span class="switch__button"></span>
    </span>
</span>
<span class="field field--align-top">
    <label class="field__label" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="field">
        <label class="field__label" for="field-unstacked-1">Field 1</label>
        <span class="field__control textbox">
            <input class="textbox__control" id="field-unstacked-1" type="text" placeholder="placeholder text" />
        </span>
    </span>
    <span class="field">
        <label class="field__label" for="field-unstacked-2">Field 2</label>
        <span class="field__control select">
            <select id="field-unstacked-2" name="options">
                <option value="item1">Option 1</option>
                <option value="item2">Option 2</option>
                <option value="item3">Option 3</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </span>
    <span class="field">
        <label class="field__label" for="field-unstacked-3">Field 3</label>
        <span class="field__control switch">
            <input class="switch__control" id="field-unstacked-3" role="switch" type="checkbox" aria-label="Switch Demo" />
            <span class="switch__button"></span>
        </span>
    </span>
    <span class="field field--align-top">
        <label class="field__label" for="field-unstacked-4">Field 4</label>
        <span class="field__control textbox">
            <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
        </span>
    </span>
</div>
`;

export const blockLevel = () => `
<div class="field" style="margin-top: 0">
    <label class="field__label" for="field-block-1">Field 1</label>
    <span class="textbox">
        <input class="textbox__control" id="field-block-1" type="text" placeholder="placeholder text" />
    </span>
</div>
<div class="field">
    <label class="field__label" for="field-block-2">Field 2</label>
    <span class="field__control select">
        <select id="field-block-2" name="options">
            <option value="item1">Option 1</option>
            <option value="item2">Option 2</option>
            <option value="item3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</div>
<div class="field">
    <label class="field__label" for="field-block-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-block-3" role="switch" type="checkbox" aria-label="Switch Demo" />
        <span class="switch__button"></span>
    </span>
</div>
<div class="field field--align-top">
    <label class="field__label" for="field-block-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-block-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</div>
`;

export const disabled = () => `
<span class="field">
    <label class="field__label field__label--disabled" for="field-disabled-1">Field 1</label>
    <span class="field__control textbox">
        <input class="textbox__control" id="field-disabled-1" type="text" placeholder="placeholder text" disabled />
    </span>
</span>
<span class="field">
    <label class="field__label field__label--disabled" for="field-disabled-2">Field 2</label>
    <span class="field__control select">
        <select id="field-disabled-2" name="options" disabled>
            <option value="item1">Option 1</option>
            <option value="item2">Option 2</option>
            <option value="item3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
<span class="field">
    <label class="field__label field__label--disabled" for="field-disabled-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-disabled-3" role="switch" type="checkbox" aria-label="Switch Demo" disabled />
        <span class="switch__button"></span>
    </span>
</span>
<span class="field field--align-top">
    <label class="field__label field__label--disabled" for="field-disabled-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-disabled-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</span>
`;

export const alignTop = () => `
<span class="field field--align-top">
    <label class="field__label" for="field-textarea-1">Field 1</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-textarea-1"></textarea>
    </span>
</span>
`;

export const fontSize = () => `
<span class="field" style="font-size: 18px;">
    <span class="field__group">
        <label class="field__label" for="field-fontsize-1">Field 1</label>
        <span class="field__control textbox">
            <input
                class="textbox__control"
                id="field-fontsize-1"
                type="text"
                placeholder="placeholder text"
            >
        </span>
    </span>
</span>
<span class="field" style="font-size: 18px;">
    <span class="field__group">
        <label class="field__label" for="field-fontsize-2">Field 2</label>
        <span class="field__control">
            <span class="select">
                <select name="field-fontsize-2" id="field-fontsize-2">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <svg
                    class="icon icon--12"
                    height="8"
                    width="8"
                    aria-hidden="true"
                >
                    <use href="#icon-chevron-down-12"></use>
                </svg>
            </span>
        </span>
    </span>
</span>
<span class="field" style="font-size: 18px;">
    <span class="field__group">
        <label class="field__label" for="field-fontsize-3">Field 3</label>
        <span class="field__control switch switch--form">
            <input
                class="switch__control"
                role="switch"
                type="checkbox"
                id="field-fontsize-3"
            >
            <span class="switch__button"></span>
        </span>
    </span>
</span>
`;

export const readonly = () => `
<span class="field">
    <label class="field__label" for="field-readonly-1">Field 1</label>
    <span class="field__control textbox">
        <input
            class="textbox__control"
            id="field-readonly-1"
            type="text"
            name="disabled-textbox"
            value="placeholder text"
            readonly
        >
    </span>
</span>
<span class="field">
    <label class="field__label" for="field-readonly-2">Field 2</label>
    <span class="field__control">
        <span class="select">
            <select name="field-readonly-2" id="field-readonly-2">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </span>
</span>
`;

export const required = () => `
<span class="field">
    <label class="field__label" for="field-required-1">
        Field 1 <sup>*</sup>
    </label>
    <span class="field__control textbox">
        <input
            aria-required="true"
            class="textbox__control"
            id="field-required-1"
            type="text"
            placeholder="placeholder text"
        >
    </span>
</span>
<span class="field">
    <label class="field__label" for="field-required-2">
        Field 2 <sup>*</sup>
    </label>
    <span class="field__control">
        <span class="select">
            <select aria-required="true" id="field-required-2">
                <option value="0" disabled selected>-select-</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </span>
</span>
`;

export const invalid = () => `
<span class="field">
    <label class="field__label" for="field-invalid-1">Field 1</label>
    <span class="field__control textbox">
        <input
            aria-invalid="true"
            class="textbox__control"
            id="field-invalid-1"
            type="text"
            placeholder="placeholder text"
            value="foobar"
        >
    </span>
</span>
<span class="field">
    <label class="field__label" for="field-invalid-2">Field 2</label>
    <span class="field__control">
        <span class="select">
            <select aria-invalid="true" id="field-invalid-2">
                <option value="0" disabled selected>-select-</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </span>
</span>
`;

export const sideDescription = () => `
<span class="field">
    <label class="field__label" for="field-description-1">Field 1</label>
    <span class="field__control textbox">
        <input
            aria-describedby="field-description-1-description"
            class="textbox__control"
            id="field-description-1"
            type="text"
        >
    </span>
    <span class="field__description" id="field-description-1-description">
        <span>Field description or error</span>
    </span>
</span>
`;

export const tableDescription = () => `
<span class="field field--table">
    <div class="field__row">
        <span>
            <!-- empty cell-->
        </span>
        <span class="field__description" id="field-description-3-description">
            <span>Field description or error</span>
        </span>
    </div>
    <div class="field__row">
        <label class="field__label" for="field-description-3">Field 1</label>
        <span class="textbox">
            <input
                aria-describedby="field-description-3-description"
                class="textbox__control"
                id="field-description-3"
                type="text"
            >
        </span>
    </div>
</span>
`;

export const fluid = () => `
<div class="field-group" style="margin: 0">
    <span class="field fluid">
        <span class="field__group fluid">
            <label class="field__label no-wrap" for="field-fluid-unstacked-1">Field 1</label>
            <span class="field__control fluid textbox">
                <input
                    class="textbox__control fluid"
                    id="field-fluid-unstacked-1"
                    type="text"
                    placeholder="placeholder text"
                >
            </span>
        </span>
    </span>
    <span class="field fluid">
        <span class="field__group fluid">
            <label class="field__label no-wrap" for="field-fluid-unstacked-2">Field 2</label>
            <span class="field__control fluid">
                <span class="select select--fluid">
                    <select
                        name="field-fluid-unstacked-2"
                        id="field-fluid-unstacked-2"
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <svg
                        class="icon icon--12"
                        height="8"
                        width="8"
                        aria-hidden="true"
                    >
                        <use href="#icon-chevron-down-12"></use>
                    </svg>
                </span>
            </span>
        </span>
    </span>
</div>
`;
