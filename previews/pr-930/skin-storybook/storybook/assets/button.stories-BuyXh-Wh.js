const t={title:"Skin/Filter/Button"},n=()=>`
<button type="button" class="filter-button">
    <span class="filter-button__cell">
        <span class="filter-button__text">Button</span>
    </span>
</button>
`,s=()=>`
<button type="button" class="filter-button" aria-pressed="true">
    <span class="filter-button__cell">Button</span>
</button>
`,e=()=>`
<button type="button" class="filter-button">
    <span class="filter-button__cell">Button with lots of text that will become truncated</span>
</button>
`,o=()=>`
<button type="button" class="filter-button" disabled>
    <span class="filter-button__cell">Button</span>
</button>
`,a=()=>`
<button type="button" class="filter-button demo-a11y-text-spacing">
    <span class="filter-button__cell">
        <span class="filter-button__text">Button</span>
    </span>
</button>
`,l=["base","pressed","truncated","disabled","textSpacing"];export{l as __namedExportsOrder,n as base,t as default,o as disabled,s as pressed,a as textSpacing,e as truncated};
