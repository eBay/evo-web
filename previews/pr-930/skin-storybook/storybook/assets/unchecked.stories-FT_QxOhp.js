const c={title:"Skin/Checkbox/Unchecked"},e=()=>`
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
`,s=()=>`
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
`,o=()=>`
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
`,n=["base","disabled","customColour","customIcon"];export{n as __namedExportsOrder,e as base,o as customColour,a as customIcon,c as default,s as disabled};
