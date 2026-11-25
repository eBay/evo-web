export default { title: "Skin/Checkbox/Checked" };

export const base = () => `
<span class="checkbox">
    <input aria-label="Base checkbox" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const disabled = () => `
<span class="checkbox">
    <input aria-label="Disabled checkbox" class="checkbox__control" disabled checked type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const customColour = () => `
<span class="checkbox">
    <input aria-label="Custom colour checkbox" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" style="color: #5ba71b">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="checkbox">
        <input aria-label="RTL checkbox" class="checkbox__control" type="checkbox" checked />
        <span class="checkbox__icon" hidden>
            <svg aria-hidden="true" class="checkbox__unchecked">
                <use href="#icon-checkbox-unchecked-18"></use>
            </svg>
            <svg aria-hidden="true" class="checkbox__checked" style="color: #5ba71b">
                <use href="#icon-checkbox-checked-18"></use>
            </svg>
        </span>
    </span>
</div>
`;

export const customIcon = () => `
<span class="checkbox">
    <input aria-label="Custom icon checkbox" class="checkbox__control" type="checkbox" checked />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-attention-24"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" style="color: #5ba71b">
            <use href="#icon-confirmation-24"></use>
        </svg>
    </span>
</span>
`;

export const multiLineLabel = () => `
<fieldset>
    <legend>Choose an Option</legend>
    <div style="display: flex;" class="field">
        <span class="checkbox field__control">
            <input class="checkbox__control" id="group-checkbox-1" type="checkbox" value="1" name="checkbox-group" checked />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="checkbox__checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-1">Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 </label>
    </div>
    <div style="display: flex;" class="field">
        <span class="checkbox field__control">
            <input class="checkbox__control" id="group-checkbox-2" type="checkbox" value="2" name="checkbox-group" />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="checkbox__checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-2">Option 2</label>
    </div>
    <div style="display: flex;" class="field">
        <span class="checkbox field__control">
            <input class="checkbox__control" id="group-checkbox-3" type="checkbox" value="3" name="checkbox-group" />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="checkbox__checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-3">Option 3</label>
    </div>
</fieldset>
`;

export const textSpacing = () => `
<div class="demo-a11y-text-spacing">
    <legend>Choose an Option</legend>
    <div style="display: flex;" class="field">
        <span class="checkbox field__control">
            <input aria-label="Multiline checkbox 2" class="checkbox__control" id="group-checkbox-2" type="checkbox" value="2" name="checkbox-group" />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" height="18" width="18">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg class="checkbox__checked" height="18" width="18">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-2">Option 2</label>
    </div>
</div>
`;

export const large = () => `
<span class="checkbox checkbox--large">
    <input
        aria-label="Large checkbox example"
        class="checkbox__control"
        type="checkbox"
        name="checkbox-large"
        checked>
    <span class="checkbox__icon" hidden>
        <svg
            class="checkbox__unchecked"
            height="24"
            width="24"
            aria-hidden="true">
            <use href="#icon-checkbox-unchecked-24"></use>
        </svg>
        <svg
            class="checkbox__checked"
            height="24"
            width="24"
            aria-hidden="true">
            <use href="#icon-checkbox-checked-24"></use>
        </svg>
    </span>
</span>
`;

export const groupedInline = () => `
<fieldset>
    <legend>Choose an Option</legend>
    <span class="field">
        <span class="checkbox field__control">
            <input
                class="checkbox__control"
                id="group-checkbox-1"
                type="checkbox"
                value="1"
                name="checkbox-group"
                checked>
            <span class="checkbox__icon" hidden>
                <svg
                    class="checkbox__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg
                    class="checkbox__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-1">
            Option 1
        </label>
    </span>
    <span class="field">
        <span class="checkbox field__control">
            <input
                class="checkbox__control"
                id="group-checkbox-2"
                type="checkbox"
                value="2"
                name="checkbox-group">
            <span class="checkbox__icon" hidden>
                <svg
                    class="checkbox__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg
                    class="checkbox__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-2">
            Option 2
        </label>
    </span>
    <span class="field">
        <span class="checkbox field__control">
            <input
                class="checkbox__control"
                id="group-checkbox-3"
                type="checkbox"
                value="3"
                name="checkbox-group">
            <span class="checkbox__icon" hidden>
                <svg
                    class="checkbox__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg
                    class="checkbox__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-3">
            Option 3
        </label>
    </span>
</fieldset>
`;

export const groupedStacked = () => `
<fieldset>
    <legend>Choose an Option</legend>
    <div class="field">
        <span class="checkbox field__control">
            <input
                class="checkbox__control"
                id="group-checkbox-4"
                type="checkbox"
                value="1"
                name="checkbox-group"
                checked>
            <span class="checkbox__icon" hidden>
                <svg
                    class="checkbox__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg
                    class="checkbox__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-4">
            Option 1
        </label>
    </div>
    <div class="field">
        <span class="checkbox field__control">
            <input
                class="checkbox__control"
                id="group-checkbox-5"
                type="checkbox"
                value="2"
                name="checkbox-group">
            <span class="checkbox__icon" hidden>
                <svg
                    class="checkbox__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg
                    class="checkbox__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-5">
            Option 2
        </label>
    </div>
    <div class="field">
        <span class="checkbox field__control">
            <input
                class="checkbox__control"
                id="group-checkbox-6"
                type="checkbox"
                value="3"
                name="checkbox-group">
            <span class="checkbox__icon" hidden>
                <svg
                    class="checkbox__unchecked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-unchecked-18"></use>
                </svg>
                <svg
                    class="checkbox__checked"
                    height="18"
                    width="18"
                    aria-hidden="true">
                    <use href="#icon-checkbox-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-6">
            Option 3
        </label>
    </div>
</fieldset>
`;
