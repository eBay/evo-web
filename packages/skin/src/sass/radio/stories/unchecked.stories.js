export default { title: "Skin/Radio/Unchecked" };

export const base = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r2" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const disabled = () => `
<span class="radio">
    <input aria-label="Disabled Foreground SVG radio example" class="radio__control" name="r4" type="radio" disabled />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const customColour = () => `
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r6" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" style="color: #5ba71b">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const customIcon = () => `
<span class="radio" style="color: #5ba71b">
    <input aria-label="Custom radio example" class="radio__control" name="r8" type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked">
            <use href="#icon-confirmation"></use>
        </svg>
    </span>
</span>
`;

export const large = () => `
<span class="radio radio--large">
    <input
        aria-label="Large radio example"
        class="radio__control"
        type="radio"
        name="radio-large">
    <span class="radio__icon" hidden>
        <svg
            class="radio__unchecked"
            height="24"
            width="24"
            aria-hidden="true">
            <use href="#icon-radio-unchecked-24"></use>
        </svg>
        <svg class="radio__checked" height="24" width="24" aria-hidden="true">
            <use href="#icon-radio-checked-24"></use>
        </svg>
    </span>
</span>
`;

export const groupedInline = () => `
<fieldset>
    <legend>Choose an Option</legend>
    <span class="field">
        <span class="field__control radio">
            <input
                class="radio__control"
                id="group-radio-1"
                type="radio"
                value="1"
                name="radio-group">
            <span class="radio__icon" hidden>
                <svg
                    class="radio__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg
                    class="radio__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-1">
            Option 1
        </label>
    </span>
    <span class="field">
        <span class="field__control radio">
            <input
                class="radio__control"
                id="group-radio-2"
                type="radio"
                value="3"
                name="radio-group">
            <span class="radio__icon" hidden>
                <svg
                    class="radio__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg
                    class="radio__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-2">
            Option 2
        </label>
    </span>
    <span class="field">
        <span class="field__control radio">
            <input
                class="radio__control"
                id="group-radio-3"
                type="radio"
                value="3"
                name="radio-group">
            <span class="radio__icon" hidden>
                <svg
                    class="radio__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg
                    class="radio__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-3">
            Option 3
        </label>
    </span>
</fieldset>
`;

export const groupedStacked = () => `
<fieldset>
    <legend>Choose an Option</legend>
    <div class="field">
        <span class="field__control radio">
            <input
                class="radio__control"
                id="group-radio-4"
                type="radio"
                value="1"
                name="radio-group">
            <span class="radio__icon" hidden>
                <svg
                    class="radio__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg
                    class="radio__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-4">
            Option 1
        </label>
    </div>
    <div class="field">
        <span class="field__control radio">
            <input
                class="radio__control"
                id="group-radio-5"
                type="radio"
                value="3"
                name="radio-group">
            <span class="radio__icon" hidden>
                <svg
                    class="radio__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg
                    class="radio__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-5">
            Option 2
        </label>
    </div>
    <div class="field">
        <span class="field__control radio">
            <input
                class="radio__control"
                id="group-radio-6"
                type="radio"
                value="3"
                name="radio-group">
            <span class="radio__icon" hidden>
                <svg
                    class="radio__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg
                    class="radio__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-6">
            Option 3
        </label>
    </div>
</fieldset>
`;
