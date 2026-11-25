export default { title: "Skin/Field/Helper Texts/Stacked" };

export const characterMeterOnly = () => `
<span class="field">
    <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" aria-describedby="field-character-1" class="textbox__control" id="field-character-1-input" data-field-count="field-character-1" aria-live="off" />
    </span>
    <div class="field__description field__description--group">
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</span>
`;

export const descriptionCharacterMeter = () => `
<span class="field ">
    <label class="field__label field__label--stacked" for="field-character-2-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" aria-describedby="field-character-2-description field-character-2" class="textbox__control" id="field-character-2-input" data-field-count="field-character-2" aria-live="off" />
    </span>

    <div class="field__description field__description--group">
        <span id="field-character-2-description">
            Field description or error
        </span>
        <span id="field-character-2">
            0 of 140
        </span>
    </div>
</span>
`;

export const longDescriptionCharacterMeter = () => `
<span class="field" style="width:200px">
    <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" aria-describedby="field-character-1-description field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
    </span>

    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error which is long and should wrap to next line
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</span>
`;

export const fluidDescriptionCharacterMeter = () => `
<div class="field fluid">
    <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
    <div class="field__control textbox">
        <input type="text" aria-describedby="field-character-3-description field-character-3" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
    </div>
    <div class="field__description field__description--group">
        <span id="field-character-3-description">
            Field description or error
        </span>
        <span id="field-character-3">
            0 of 140
        </span>
    </div>
</div>
`;

export const textSpacing = () => `
<div class="field fluid demo-a11y-text-spacing">
    <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
    <div class="field__control textbox">
        <input type="text" aria-describedby="field-character-3-description field-character-3" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
    </div>
    <div class="field__description field__description--group">
        <span id="field-character-3-description">
            Field description or error
        </span>
        <span id="field-character-3">
            0 of 140
        </span>
    </div>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="field ">
        <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
        <span class="field__control textbox">
            <input type="text" aria-describedby="field-character-1-description field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
        </span>

        <div class="field__description field__description--group">
            <span id="field-character-1-description">
                Field description or error
            </span>
            <span id="field-character-1">
                0 / 140
            </span>
        </div>
    </span>
    <span class="field ">
        <label class="field__label field__label--stacked" for="field-character-2-input">Field 1</label>
        <span class="field__control textbox">
            <input type="text" aria-describedby="field-character-2" class="textbox__control" id="field-character-2-input" aria-live="off"  />
        </span>

        <div class="field__description field__description--group">
            <span id="field-character-2">
                0 / 140
            </span>
        </div>
    </span>
    <div class="field fluid">
        <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
        <div class="field__control textbox">
            <input type="text" aria-describedby="field-character-3-description field-character-3" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
        </div>
        <div class="field__description field__description--group">
            <span id="field-character-3-description">
                Field description or error
            </span>
            <span id="field-character-3">
                0 of 140
            </span>
        </div>
    </div>
</div>
`;

export const descriptionCharacterMeterTextarea = () => `
<span class="field">
    <label
        class="field__label field__label--stacked"
        for="field-textarea-2"
    >Field 2</label>
    <span class="field__control textbox">
        <textarea
            class="textbox__control"
            id="field-textarea-2"
            aria-describedby="field-describe-4 field-character-4"
            aria-live="off"
            data-field-count="field-character-4"
        ></textarea>
    </span>
    <div class="field__description field__description--group">
        <span id="field-describe-4">Field description or error</span>
        <span id="field-character-4">
            0 of 140 <span class="clipped">characters</span>
        </span>
    </div>
</span>
`;
