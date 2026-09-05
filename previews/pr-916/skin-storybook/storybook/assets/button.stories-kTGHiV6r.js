const o={title:"Skin/Filter/Button"},t=()=>`
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
`,n=()=>`
<button type="button" class="filter-button" disabled>
    <span class="filter-button__cell">Button</span>
</button>
`,a=()=>`
<button type="button" class="filter-button demo-a11y-text-spacing">
    <span class="filter-button__cell">
        <span class="filter-button__text">Button</span>
    </span>
</button>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="filter-button">
    <span class="filter-button__cell">
        <span class="filter-button__text">Button</span>
    </span>
</button>
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="filter-button" aria-pressed="true">
    <span class="filter-button__cell">Button</span>
</button>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="filter-button">
    <span class="filter-button__cell">Button with lots of text that will become truncated</span>
</button>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="filter-button" disabled>
    <span class="filter-button__cell">Button</span>
</button>
\``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="filter-button demo-a11y-text-spacing">
    <span class="filter-button__cell">
        <span class="filter-button__text">Button</span>
    </span>
</button>
\``,...a.parameters?.docs?.source}}};const r=["base","pressed","truncated","disabled","textSpacing"];export{r as __namedExportsOrder,t as base,o as default,n as disabled,s as pressed,a as textSpacing,e as truncated};
