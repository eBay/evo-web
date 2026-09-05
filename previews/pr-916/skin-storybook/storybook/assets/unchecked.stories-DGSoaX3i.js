const n={title:"Skin/Checkbox/Unchecked"},c=()=>`
<span class="checkbox">
    <input aria-label="Base checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`,e=()=>`
<span class="checkbox">
    <input aria-label="Disabled checkbox" class="checkbox__control" disabled type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`,s=()=>`
<span class="checkbox">
    <input aria-label="Custom colour checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" style="color: #5ba71b">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
`,a=()=>`
<span class="checkbox">
    <input aria-label="Custom icon checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-attention-24"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" style="color: #5ba71b">
            <use href="#icon-confirmation-24"></use>
        </svg>
    </span>
</span>
`;c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<span class="checkbox">
    <input aria-label="Base checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
\``,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="checkbox">
    <input aria-label="Disabled checkbox" class="checkbox__control" disabled type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="checkbox">
    <input aria-label="Custom colour checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-checkbox-unchecked-18"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" style="color: #5ba71b">
            <use href="#icon-checkbox-checked-18"></use>
        </svg>
    </span>
</span>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="checkbox">
    <input aria-label="Custom icon checkbox" class="checkbox__control" type="checkbox" />
    <span class="checkbox__icon" hidden>
        <svg aria-hidden="true" class="checkbox__unchecked">
            <use href="#icon-attention-24"></use>
        </svg>
        <svg aria-hidden="true" class="checkbox__checked" style="color: #5ba71b">
            <use href="#icon-confirmation-24"></use>
        </svg>
    </span>
</span>
\``,...a.parameters?.docs?.source}}};const o=["base","disabled","customColour","customIcon"];export{o as __namedExportsOrder,c as base,s as customColour,a as customIcon,n as default,e as disabled};
