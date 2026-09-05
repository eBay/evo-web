const t={title:"Skin/Field/Unstacked"},e=()=>`
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
`,l=()=>`
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
`,a=()=>`
<div class="field" style="margin-top: 0">
    <label class="field__label" for="field-stacked-1">Field 1</label>
    <span class="textbox">
        <input class="textbox__control" id="field-stacked-1" type="text" placeholder="placeholder text" />
    </span>
</div>
<div class="field">
    <label class="field__label" for="field-stacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-stacked-2" name="options">
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
    <label class="field__label" for="field-stacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-stacked-3" role="switch" type="checkbox" aria-label="Switch Demo" />
        <span class="switch__button"></span>
    </span>
</div>
<div class="field field--align-top">
    <label class="field__label" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</div>
`,s=()=>`
<span class="field">
    <label class="field__label field__label--disabled" for="field-unstacked-1">Field 1</label>
    <span class="field__control textbox">
        <input class="textbox__control" id="field-unstacked-1" type="text" placeholder="placeholder text" disabled />
    </span>
</span>
<span class="field">
    <label class="field__label field__label--disabled" for="field-unstacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-unstacked-2" name="options" disabled>
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
    <label class="field__label field__label--disabled" for="field-unstacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-unstacked-3" role="switch" type="checkbox" aria-label="Switch Demo" disabled />
        <span class="switch__button"></span>
    </span>
</span>
<span class="field field--align-top">
    <label class="field__label field__label--disabled" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</span>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
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
\``,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
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
\``,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div class="field" style="margin-top: 0">
    <label class="field__label" for="field-stacked-1">Field 1</label>
    <span class="textbox">
        <input class="textbox__control" id="field-stacked-1" type="text" placeholder="placeholder text" />
    </span>
</div>
<div class="field">
    <label class="field__label" for="field-stacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-stacked-2" name="options">
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
    <label class="field__label" for="field-stacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-stacked-3" role="switch" type="checkbox" aria-label="Switch Demo" />
        <span class="switch__button"></span>
    </span>
</div>
<div class="field field--align-top">
    <label class="field__label" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</div>
\``,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="field">
    <label class="field__label field__label--disabled" for="field-unstacked-1">Field 1</label>
    <span class="field__control textbox">
        <input class="textbox__control" id="field-unstacked-1" type="text" placeholder="placeholder text" disabled />
    </span>
</span>
<span class="field">
    <label class="field__label field__label--disabled" for="field-unstacked-2">Field 2</label>
    <span class="field__control select">
        <select id="field-unstacked-2" name="options" disabled>
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
    <label class="field__label field__label--disabled" for="field-unstacked-3">Field 3</label>
    <span class="field__control switch">
        <input class="switch__control" id="field-unstacked-3" role="switch" type="checkbox" aria-label="Switch Demo" disabled />
        <span class="switch__button"></span>
    </span>
</span>
<span class="field field--align-top">
    <label class="field__label field__label--disabled" for="field-unstacked-4">Field 4</label>
    <span class="field__control textbox">
        <textarea class="textbox__control" id="field-unstacked-4" type="text" placeholder="placeholder text"></textarea>
    </span>
</span>
\``,...s.parameters?.docs?.source}}};const n=["inlineLevel","RTL","blockLevel","disabled"];export{l as RTL,n as __namedExportsOrder,a as blockLevel,t as default,s as disabled,e as inlineLevel};
