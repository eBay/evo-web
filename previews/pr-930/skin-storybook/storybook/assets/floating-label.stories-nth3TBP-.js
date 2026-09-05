const e={title:"Skin/Select/Select/Floating Label"},l=()=>`
<span class="floating-label">
    <label class="floating-label__label" for="select-01">Choose Option</label>
    <span class="select">
        <select id="select-01">
            <option value="1">Option 1 with long text</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`,o=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--inline" for="select-01">Here are your options</label>
    <span class="select">
        <select id="select-01">
            <option value=""></option>
            <option value="1">Option 1 with long text</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`,t=()=>`
<span class="floating-label">
    <label class="floating-label__label floating-label__label--invalid" for="select-03">Choose Option</label>
    <span class="select">
        <select id="select-03" aria-invalid="true">
            <option value="1">Option 1 with long text</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`,n=()=>`
<span class="floating-label">
    <label class="floating-label__label" for="select-03">Choose Option</label>
    <span class="select">
        <select disabled>
            <option value="1">Option 1</option>
            <option value="2">Option 2 can't pick</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</span>
`,a=["defaultLabel","selectedOption","errorState","disabled"];export{a as __namedExportsOrder,e as default,l as defaultLabel,n as disabled,t as errorState,o as selectedOption};
