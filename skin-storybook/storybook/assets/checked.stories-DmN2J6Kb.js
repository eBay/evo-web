const r={title:"Skin/Radio/Checked"},e=()=>`
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r1" type="radio" checked />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`,a=()=>`
<div dir="rtl">
    <span class="radio">
        <input aria-label="Foreground SVG radio example" class="radio__control" name="r1" type="radio" checked />
        <span class="radio__icon" hidden>
            <svg aria-hidden="true" class="radio__unchecked">
                <use href="#icon-radio-unchecked-18"></use>
            </svg>
            <svg aria-hidden="true" class="radio__checked">
                <use href="#icon-radio-checked-18"></use>
            </svg>
        </span>
    </span>
</div>
`,i=()=>`
<span class="radio">
    <input aria-label="Disabled Foreground SVG radio example" class="radio__control" name="r3" disabled checked type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`,s=()=>`
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r5" type="radio" checked />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" style="color: #5ba71b">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
`,n=()=>`
<span class="radio">
<input aria-label="Custom radio example" class="radio__control" name="r7" type="radio" checked />
<span class="radio__icon" hidden>
    <svg aria-hidden="true" class="radio__unchecked">
        <use href="#icon-radio-unchecked-18"></use>
    </svg>
    <svg aria-hidden="true" class="radio__checked">
        <use href="#icon-confirmation-filled-24"></use>
    </svg>
</span>
</span>
`,o=()=>`
<fieldset>
    <legend>Choose an Option</legend>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-1" type="radio" value="1" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-1">Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 </label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-2" type="radio" value="2" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-2">Option 2</label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-3" type="radio" value="3" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-3">Option 3</label>
    </div>
</fieldset>`,d=()=>`
<fieldset class="demo-a11y-text-spacing">
    <legend>Choose an Option</legend>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-1" type="radio" value="1" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-1">Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 </label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-2" type="radio" value="2" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-2">Option 2</label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-3" type="radio" value="3" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-3">Option 3</label>
    </div>
</fieldset>`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r1" type="radio" checked />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="radio">
        <input aria-label="Foreground SVG radio example" class="radio__control" name="r1" type="radio" checked />
        <span class="radio__icon" hidden>
            <svg aria-hidden="true" class="radio__unchecked">
                <use href="#icon-radio-unchecked-18"></use>
            </svg>
            <svg aria-hidden="true" class="radio__checked">
                <use href="#icon-radio-checked-18"></use>
            </svg>
        </span>
    </span>
</div>
\``,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<span class="radio">
    <input aria-label="Disabled Foreground SVG radio example" class="radio__control" name="r3" disabled checked type="radio" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="radio">
    <input aria-label="Foreground SVG radio example" class="radio__control" name="r5" type="radio" checked />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" class="radio__unchecked">
            <use href="#icon-radio-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="radio__checked" style="color: #5ba71b">
            <use href="#icon-radio-checked-18"></use>
        </svg>
    </span>
</span>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="radio">
<input aria-label="Custom radio example" class="radio__control" name="r7" type="radio" checked />
<span class="radio__icon" hidden>
    <svg aria-hidden="true" class="radio__unchecked">
        <use href="#icon-radio-unchecked-18"></use>
    </svg>
    <svg aria-hidden="true" class="radio__checked">
        <use href="#icon-confirmation-filled-24"></use>
    </svg>
</span>
</span>
\``,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<fieldset>
    <legend>Choose an Option</legend>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-1" type="radio" value="1" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-1">Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 </label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-2" type="radio" value="2" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-2">Option 2</label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-3" type="radio" value="3" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-3">Option 3</label>
    </div>
</fieldset>\``,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<fieldset class="demo-a11y-text-spacing">
    <legend>Choose an Option</legend>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-1" type="radio" value="1" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-1">Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 </label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-2" type="radio" value="2" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-2">Option 2</label>
    </div>
    <div class="field" style="display: flex;">
        <span class="field__control radio">
            <input class="radio__control" id="group-radio-3" type="radio" value="3" name="radio-group" />
            <span class="radio__icon" hidden>
                <svg class="radio__unchecked" height="18" width="18">
                    <use href="#icon-radio-unchecked-18"></use>
                </svg>
                <svg class="radio__checked" height="18" width="18">
                    <use href="#icon-radio-checked-18"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-radio-3">Option 3</label>
    </div>
</fieldset>\``,...d.parameters?.docs?.source}}};const c=["base","RTL","disabled","customColour","customIcon","multiLineLabel","textSpacing"];export{a as RTL,c as __namedExportsOrder,e as base,s as customColour,n as customIcon,r as default,i as disabled,o as multiLineLabel,d as textSpacing};
