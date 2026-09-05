const h={title:"Skin/Floating Label"},a=()=>`
<span class="floating-label">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`,e=()=>`
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label" for="firstName">First Name</label>
        <span class="textbox">
            <input class="textbox__control" id="firstName" type="text" />
        </span>
    </span>
<div>
`,l=()=>`
<span class="floating-label">
    <label class="floating-label__label" for="lastName">Last Name</label>
    <span class="textbox">
        <input class="textbox__control" id="lastName" type="text" value="Smith" />
    </span>
</span>
`,s=()=>`
<span class="floating-label">
    <label class="floating-label__label" for="dob">Date Of Birth</label>
    <span class="textbox">
        <input class="textbox__control" id="dob" type="text" placeholder="MM/DD/YYYY" />
    </span>
</span>
`,n=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--disabled" for="firstName">First Name</label>
    <span class="textbox textbox--disabled">
        <input class="textbox__control" id="firstName02" type="text" disabled />
    </span>
</span>
`,t=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" />
    </span>
</span>
`,o=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" value="value" />
    </span>
</span>
`,i=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" placeholder="placeholder" />
    </span>
</span>
`,c=()=>`
<span class="floating-label">
    <label class="floating-label__label" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`,r=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`,p=()=>`
<span class="floating-label">
    <label class="floating-label__label">Select Option</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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
`,b=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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
`,d=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline">Select Option long text with ellipsis</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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
    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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

`,u=()=>`
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
        <span class="select">
            <select aria-label="Select demo" name="options">
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
`,f=()=>`
<span class="floating-label floating-label--opaque">
    <label class="floating-label__label" for="first-name">Enter list of users</label>
    <span class="textbox">
        <textarea aria-label="Textbox demo" class="textbox__control"></textarea>
    </span>
</span>
`,g=()=>`
<span class="floating-label demo-a11y-text-spacing">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
`,x=()=>`
<span class="phone-input">
    <span class="listbox-button listbox-button--form">
    <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: " aria-label="Country: United States of America (+1)">
        <span class="btn__cell">
        <span class="btn__text">
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
        <div class="listbox-button__options" role="listbox">
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
    <label class="floating-label__label" for="field1"><span class="clipped">Area code + </span>Phone
        Number</label>
        <span class="textbox">
        <span id="floating-phone-prefix-0">+1</span>
        <input class="textbox__control" type="tel" aria-label="area code + phone number"
            autocomplete="tel-national" aria-describedby="floating-phone-prefix-0"/>
        </span>
    </span>
</span>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label" for="firstName">First Name</label>
        <span class="textbox">
            <input class="textbox__control" id="firstName" type="text" />
        </span>
    </span>
<div>
\``,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label" for="lastName">Last Name</label>
    <span class="textbox">
        <input class="textbox__control" id="lastName" type="text" value="Smith" />
    </span>
</span>
\``,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label" for="dob">Date Of Birth</label>
    <span class="textbox">
        <input class="textbox__control" id="dob" type="text" placeholder="MM/DD/YYYY" />
    </span>
</span>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--disabled" for="firstName">First Name</label>
    <span class="textbox textbox--disabled">
        <input class="textbox__control" id="firstName02" type="text" disabled />
    </span>
</span>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" />
    </span>
</span>
\``,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" value="value" />
    </span>
</span>
\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>
    <span class="textbox textbox--invalid">
        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" placeholder="placeholder" />
    </span>
</span>
\``,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
\``,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
\``,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label">Select Option</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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
\``,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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
\``,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline">Select Option long text with ellipsis</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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
    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
    <span class="select">
        <select aria-label="Select demo" name="options">
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

\``,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--inline">Select Option long text</label>
        <span class="select">
            <select aria-label="Select demo" name="options">
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
\``,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label floating-label--opaque">
    <label class="floating-label__label" for="first-name">Enter list of users</label>
    <span class="textbox">
        <textarea aria-label="Textbox demo" class="textbox__control"></textarea>
    </span>
</span>
\``,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => \`
<span class="floating-label demo-a11y-text-spacing">
    <label class="floating-label__label" for="firstName">First Name</label>
    <span class="textbox">
        <input class="textbox__control" id="firstName" type="text" />
    </span>
</span>
\``,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => \`
<span class="phone-input">
    <span class="listbox-button listbox-button--form">
    <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"
        data-listbox-button-prefix="Country: " aria-label="Country: United States of America (+1)">
        <span class="btn__cell">
        <span class="btn__text">
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
        <div class="listbox-button__options" role="listbox">
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
    <label class="floating-label__label" for="field1"><span class="clipped">Area code + </span>Phone
        Number</label>
        <span class="textbox">
        <span id="floating-phone-prefix-0">+1</span>
        <input class="textbox__control" type="tel" aria-label="area code + phone number"
            autocomplete="tel-national" aria-describedby="floating-phone-prefix-0"/>
        </span>
    </span>
</span>
\``,...x.parameters?.docs?.source}}};const _=["base","RTL","value","placeholder","disabledTextbox","invalidTextbox","invalidTextboxWithValue","invalidTextboxWithPlaceholder","longText","longTextInline","select","selectInline","selectInlineDoubled","RTLSelectInline","TextArea","textSpacing","phoneInput"];export{e as RTL,u as RTLSelectInline,f as TextArea,_ as __namedExportsOrder,a as base,h as default,n as disabledTextbox,t as invalidTextbox,i as invalidTextboxWithPlaceholder,o as invalidTextboxWithValue,c as longText,r as longTextInline,x as phoneInput,s as placeholder,p as select,b as selectInline,d as selectInlineDoubled,g as textSpacing,l as value};
