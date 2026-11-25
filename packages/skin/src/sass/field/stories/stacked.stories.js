export default { title: "Skin/Field/Stacked" };

export const group = () => `
<fieldset>
    <legend class="clipped">Account Type</legend>
    <div class="field-group">
        <span class="field">
            <span class="radio">
                <input class="radio__control" id="paccount" type="radio" name="account"/>
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label class="field__label field__label--end" for="paccount">Personal account</label>
        </span>
        <span class="field">
            <span class="radio">
                <input class="radio__control" id="baccount" type="radio" name="account"/>
                <span class="radio__icon" hidden>
                    <svg class="radio__unchecked" height="18" width="18">
                        <use href="#icon-radio-unchecked-18"></use>
                    </svg>
                    <svg class="radio__checked" height="18" width="18">
                        <use href="#icon-radio-checked-18"></use>
                    </svg>
                </span>
            </span>
            <label class="field__label field__label--end" for="baccount">Business account</label>
        </span>
    </div>
</fieldset>

<div class="field">
    <label class="field__label field__label--stacked" for="email">Email</label>
    <div class="field__control textbox">
        <input class="textbox__control textbox__control--fluid" id="email" name="email" type="text" />
    </div>
</div>

<div class="field">
    <label class="field__label field__label--stacked" for="password">Password</label>
    <div class="field__control textbox">
        <input class="textbox__control textbox__control--fluid" id="password" name="password" type="password" />
    </div>
</div>

<div class="field-group">
    <span class="field fluid">
        <label class="field__label field__label--stacked" for="fname">First Name</label>
        <div class="field__control textbox">
            <input class="textbox__control textbox__control--fluid" name="fname" id="fname" type="text" />
        </div>
    </span>

    <span class="field fluid">
        <label class="field__label field__label--stacked" for="lname">Last Name</label>
        <div class="field__control textbox">
            <input class="textbox__control textbox__control--fluid" name="lname" id="lname" type="text" />
        </div>
    </span>
</div>

<div class="field-group">
    <span class="field fluid">
        <label class="field__label field__label--stacked" for="dial-code">Dialing Code</label>
        <div class="field__control select">
            <select class="fluid" id="dial-code" name="dc">
                <option value="1">United States +1</option>
                <option value="44">United Kingdom +44</option>
                <option value="1">Canada +1</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </div>
    </span>

    <span class="field fluid">
        <label class="field__label field__label--stacked" for="phone">Mobile Phone</label>
        <div class="field__control textbox">
            <input class="textbox__control textbox__control--fluid" name="phone" id="phone" type="text" />
        </div>
    </span>
</div>

<div class="field">
    <button class="button button--fluid button--primary" type="submit">Register</button>
</div>
`;

export const descriptions = () => `
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-1">Textbox Field - Default</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-1-description" class="textbox__control textbox__control--fluid" id="field-descriptions-1" type="text" />
    </div>
    <div class="field__description" id="field-descriptions-1-description">
        <span>Field description - default</span>
    </div>
</div>
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-2">Textbox Field - Confirmation</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-2-description" class="textbox__control textbox__control--fluid" id="field-descriptions-2" type="text" />
    </div>
    <div class="field__description field__description--confirmation" id="field-descriptions-2-description">
        <span>Field description - confirmation</span>
    </div>
</div>
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-3">Textbox Field - Information</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-3-description" class="textbox__control textbox__control--fluid" id="field-descriptions-3" type="text" />
    </div>
    <div class="field__description field__description--information" id="field-descriptions-3-description">
        <span>Field description - information</span>
    </div>
</div>
<div class="field">
    <label class="field__label field__label--stacked" for="field-descriptions-4">Textbox Field - Error</label>
    <div class="field__control textbox">
        <input aria-describedby="field-descriptions-4-description" class="textbox__control textbox__control--fluid" id="field-descriptions-4" type="text" aria-invalid="true" />
    </div>
    <div class="field__description field__description--attention" id="field-descriptions-4-description">
        <svg class="icon icon--16" height="10" width="14" aria-hidden="true">
            <use href="#icon-attention-filled-16"></use>
        </svg>
        <span>Field description - error</span>
    </div>
</div>

<span class="field">
    <label class="field__label field__label--stacked" for="field-listbox-button-1">Listbox Button Field - Error</label>
    <div class="field__control textbox">
        <span class="listbox-button listbox-button--form listbox-button--error" data-makeup-auto-select="false">
            <button class="button button--form" style="min-width: 150px" aria-expanded="false" aria-haspopup="listbox" aria-describedby="field-listbox-button-1-description">
                <span class="button__cell">
                    <span class="button__label">Color: </span>
                    <span class="button__text">-</span>
                    <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                        <use href="#icon-chevron-down-12"></use>
                    </svg>
                </span>
            </button>
            <div class="listbox-button__listbox">
                <div class="listbox-button__options" role="listbox">
                    <div class="listbox-button__option" role="option">
                        <span class="listbox-button__value">Red</span>
                        <svg class="icon icon--16" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                    <div class="listbox-button__option" role="option">
                        <span class="listbox-button__value">Blue</span>
                        <svg class="icon icon--16" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                    <div class="listbox-button__option" role="option" aria-disabled="true">
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
            <select id="field-listbox-button-1" hidden="" class="listbox__native">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
            </select>
        </span>
    </div>
    <div class="field__description field__description--attention" id="field-listbox-button-1-description">
        <svg class="icon icon--16" height="10" width="14" aria-hidden="true">
            <use href="#icon-attention-filled-16"></use>
        </svg>
        <span>There was an error</span>
    </div>
</span>
`;

export const inlineLevel = () => `
<span class="field">
    <label class="field__label field__label--stacked" for="field-stacked-1">Field 1</label>
    <span class="textbox">
        <input
            class="textbox__control"
            id="field-stacked-1"
            type="text"
            placeholder="placeholder text"
        >
    </span>
</span>
<span class="field">
    <label class="field__label field__label--stacked" for="field-stacked-2">Field 2</label>
    <span class="field__control">
        <span class="select">
            <select name="field-stacked-2" id="field-stacked-2">
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
<span class="field">
    <label class="field__label field__label--stacked" for="field-stacked-3">Field 3</label>
    <span class="field__control switch switch--form">
        <input
            class="switch__control"
            role="switch"
            type="checkbox"
            id="field-stacked-3"
        >
        <span class="switch__button"></span>
    </span>
</span>
`;

export const blockLevel = () => `
<div class="field" style="margin-top: 0">
    <label class="field__label field__label--stacked" for="field-stacked-4">Field 1</label>
    <span class="textbox">
        <input
            class="textbox__control"
            id="field-stacked-4"
            type="text"
            placeholder="placeholder text"
        >
    </span>
</div>
<div class="field">
    <label class="field__label field__label--stacked" for="field-stacked-5">Field 2</label>
    <span class="field__control">
        <span class="select">
            <select name="field-stacked-5" id="field-stacked-5">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </span>
</div>
<div class="field" style="margin-bottom: 0">
    <label class="field__label field__label--stacked" for="field-stacked-6">Field 3</label>
    <span class="field__control switch switch--form">
        <input
            class="switch__control"
            role="switch"
            type="checkbox"
            id="field-stacked-6"
        >
        <span class="switch__button"></span>
    </span>
</div>
`;

export const sideDescription = () => `
<div class="field">
    <label
        class="field__label field__label--stacked"
        for="field-description-variant-1"
    >Field 1</label>
    <span class="textbox field__control">
        <input
            aria-describedby="field-descripiton-variant-1-description"
            class="textbox__control"
            id="field-description-variant-1"
            type="text"
            placeholder="placeholder text"
        >
    </span>
    <span
        class="field__description"
        id="field-descripiton-variant-1-description"
    >
        <span>Field description - default</span>
    </span>
</div>
<div class="field">
    <label
        class="field__label field__label--stacked"
        for="field-description-variant-2"
    >Field 2</label>
    <span class="textbox field__control">
        <input
            aria-describedby="field-descripiton-variant-2-description"
            class="textbox__control"
            id="field-description-variant-2"
            type="text"
            placeholder="placeholder text"
        >
    </span>
    <span
        class="field__description field__description--confirmation"
        id="field-descripiton-variant-2-description"
    >
        <span>Field description - confirmation</span>
    </span>
</div>
<div class="field">
    <label
        class="field__label field__label--stacked"
        for="field-description-variant-3"
    >Field 3</label>
    <span class="textbox field__control">
        <input
            aria-describedby="field-descripiton-variant-3-description"
            class="textbox__control"
            id="field-description-variant-3"
            type="text"
            placeholder="placeholder text"
        >
    </span>
    <span
        class="field__description field__description--information"
        id="field-descripiton-variant-3-description"
    >
        <span>Field description - information</span>
    </span>
</div>
<div class="field">
    <label
        class="field__label field__label--stacked"
        for="field-description-variant-4"
    >Field 4</label>
    <span class="textbox field__control">
        <input
            aria-describedby="field-descripiton-variant-4-description"
            class="textbox__control"
            id="field-description-variant-4"
            type="text"
            placeholder="placeholder text"
            aria-invalid="true"
        >
    </span>
    <span
        class="field__description field__description--attention"
        id="field-descripiton-variant-4-description"
    >
        <span>Field description - error (attention)</span>
    </span>
</div>
`;

export const descriptionBelow = () => `
<span class="field">
    <label
        class="field__label field__label--stacked"
        for="field-description-2"
    >Field 1</label>
    <div class="field__control textbox">
        <input
            aria-describedby="field-description-2-description"
            class="textbox__control"
            id="field-description-2"
            type="text"
        >
    </div>
    <div class="field__description" id="field-description-2-description">
        <span>Field description or error</span>
    </div>
</span>
`;

export const floatingLabelDescription = () => `
<span class="field floating-label">
    <label class="floating-label__label" for="field-description-4">Field 1</label>
    <div class="field__control textbox">
        <input
            aria-describedby="field-description-4-description"
            class="textbox__control"
            id="field-description-4"
            type="text"
        >
    </div>
    <div class="field__description" id="field-description-4-description">
        <span>Field description or error</span>
    </div>
</span>
`;

export const listboxButtonError = () => `
<span class="field">
    <label
        class="field__label field__label--stacked"
        for="field-listbox-button-1"
    >Listbox Button 1</label>
    <div class="field__control">
        <span
            class="listbox-button listbox-button--form listbox-button--error"
            data-makeup-auto-select="false"
        >
            <button
                class="button button--form"
                style="min-width: 150px"
                aria-expanded="false"
                aria-haspopup="listbox"
                aria-describedby="field-listbox-button-1-description"
            >
                <span class="button__cell">
                    <span class="button__label">Color:</span>
                    <span class="button__text">-</span>
                    <svg
                        class="icon icon--12"
                        height="10"
                        width="14"
                        aria-hidden="true"
                    >
                        <use href="#icon-chevron-down-12"></use>
                    </svg>
                </span>
            </button>
            <div class="listbox-button__listbox">
                <div class="listbox-button__options" role="listbox">
                    <div class="listbox-button__option" role="option">
                        <span class="listbox-button__value">Red</span>
                        <svg class="icon icon--16" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                    <div class="listbox-button__option" role="option">
                        <span class="listbox-button__value">Blue</span>
                        <svg class="icon icon--16" height="10" width="14">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </div>
                    <div
                        class="listbox-button__option"
                        role="option"
                        aria-disabled="true"
                    >
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
            <select id="field-listbox-button-1" hidden class="listbox__native">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
            </select>
        </span>
    </div>
    <div
        class="field__description field__description--attention"
        id="field-listbox-button-1-description"
    >
        <svg class="icon icon--16" height="10" width="14" aria-hidden="true">
            <use href="#icon-attention-filled-16"></use>
        </svg>
        <span>There was an error</span>
    </div>
</span>
`;

export const textboxError = () => `
<span class="field">
    <label class="field__label field__label--stacked" for="field-textbox-1">Textbox 1</label>
    <div class="field__control textbox">
        <input
            aria-describedby="field-textbox-1-description"
            class="textbox__control"
            id="field-textbox-1"
            type="text"
            aria-invalid="true"
        >
    </div>
    <div
        class="field__description field__description--attention"
        id="field-textbox-1-description"
    >
        <svg class="icon icon--16" height="10" width="14" aria-hidden="true">
            <use href="#icon-attention-filled-16"></use>
        </svg>
        <span>There was an error</span>
    </div>
</span>
`;

export const fluidBlock = () => `
<div class="field-group" style="margin: 0">
    <span class="field fluid">
        <label
            class="field__label field__label--stacked"
            for="field-fluid-block-1"
        >Field 1</label>
        <div class="field__control textbox">
            <input
                class="textbox__control fluid"
                id="field-fluid-block-1"
                type="text"
                placeholder="placeholder text"
            >
        </div>
    </span>
    <span class="field fluid">
        <label
            class="field__label field__label--stacked"
            for="field-fluid-block-2"
        >Field 2</label>
        <div class="field__control fluid">
            <div class="select select--fluid">
                <select name="field-fluid-block-2" id="field-fluid-block-2">
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
            </div>
        </div>
    </span>
</div>
`;

export const fluidGroup = () => `
<div class="field-group" style="margin: 0">
    <span class="field fluid">
        <label
            class="field__label field__label--stacked"
            for="field-fluid-block-3"
        >Field 1</label>
        <div class="field__group">
            <span class="field__control textbox fluid">
                <input
                    class="textbox__control fluid"
                    id="field-fluid-block-3"
                    aria-describedby="field-fluid-block-3-description"
                    type="text"
                    placeholder="placeholder text"
                >
            </span>
            <span
                class="field__description"
                id="field-fluid-block-3-description"
            >
                <span>Field description or error</span>
            </span>
        </div>
    </span>
    <span class="field fluid">
        <label
            class="field__label field__label--stacked"
            for="field-fluid-block-4"
        >Field 2</label>
        <div class="field__group">
            <div class="field__control fluid">
                <div class="select select--fluid">
                    <select
                        id="field-fluid-block-4"
                        aria-describedby="field-fluid-block-4-description"
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
                </div>
            </div>
            <span
                class="field__description"
                id="field-fluid-block-4-description"
            >
                <span>Field description or error</span>
            </span>
        </div>
    </span>
</div>
`;
