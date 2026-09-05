const t={title:"Skin/Field/Helper Texts/Stacked"},e=()=>`
<span class="field">
    <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" aria-describedby="field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
    </span>
    <div class="field__description field__description--group">
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</span>
`,i=()=>`
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
            0 of 140
        </span>
    </div>
</span>
`,a=()=>`
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
`,r=()=>`
<div class="field fluid">
    <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
    <div class="field__control textbox">
        <input type="text" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
    </div>
    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</div>
`,l=()=>`
<div class="field fluid demo-a11y-text-spacing">
    <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
    <div class="field__control textbox">
        <input type="text" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
    </div>
    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</div>
`,d=()=>`
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
        <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
        <span class="field__control textbox">
            <input type="text" aria-describedby="field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off"  />
        </span>

        <div class="field__description field__description--group">
            <span id="field-character-1">
                0 / 140
            </span>
        </div>
    </span>
    <div class="field fluid">
        <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
        <div class="field__control textbox">
            <input type="text" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
        </div>
        <div class="field__description field__description--group">
            <span id="field-character-1-description">
                Field description or error
            </span>
            <span id="field-character-1">
                0 of 140
            </span>
        </div>
    </div>
</div>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="field">
    <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
    <span class="field__control textbox">
        <input type="text" aria-describedby="field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off" />
    </span>
    <div class="field__description field__description--group">
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</span>
\``,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
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
            0 of 140
        </span>
    </div>
</span>
\``,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
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
\``,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<div class="field fluid">
    <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
    <div class="field__control textbox">
        <input type="text" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
    </div>
    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</div>
\``,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<div class="field fluid demo-a11y-text-spacing">
    <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
    <div class="field__control textbox">
        <input type="text" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
    </div>
    <div class="field__description field__description--group">
        <span id="field-character-1-description">
            Field description or error
        </span>
        <span id="field-character-1">
            0 of 140
        </span>
    </div>
</div>
\``,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
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
        <label class="field__label field__label--stacked" for="field-character-1-input">Field 1</label>
        <span class="field__control textbox">
            <input type="text" aria-describedby="field-character-1" class="textbox__control" id="field-character-1-input" aria-live="off"  />
        </span>

        <div class="field__description field__description--group">
            <span id="field-character-1">
                0 / 140
            </span>
        </div>
    </span>
    <div class="field fluid">
        <label class="field__label field__label--stacked" for="field-character-3-input">Field 1</label>
        <div class="field__control textbox">
            <input type="text" aria-describedby="field-character-3-description field-character-1" class="textbox__control textbox__control--fluid" id="field-character-3-input" aria-live="off" />
        </div>
        <div class="field__description field__description--group">
            <span id="field-character-1-description">
                Field description or error
            </span>
            <span id="field-character-1">
                0 of 140
            </span>
        </div>
    </div>
</div>
\``,...d.parameters?.docs?.source}}};const c=["characterMeterOnly","descriptionCharacterMeter","longDescriptionCharacterMeter","fluidDescriptionCharacterMeter","textSpacing","RTL"];export{d as RTL,c as __namedExportsOrder,e as characterMeterOnly,t as default,i as descriptionCharacterMeter,r as fluidDescriptionCharacterMeter,a as longDescriptionCharacterMeter,l as textSpacing};
