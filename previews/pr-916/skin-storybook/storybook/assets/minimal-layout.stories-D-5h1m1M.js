const r={title:"Skin/Toggle Button/Minimal Layout"},t=()=>`
<button type="button" class="toggle-button" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`,s=()=>`
<button type="button" class="toggle-button" aria-pressed="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`,e=()=>`
<button type="button" class="toggle-button" aria-pressed="false" disabled>
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`,n=()=>`
<button type="button" class="toggle-button" aria-pressed="true" disabled>
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`,a=()=>`
<button type="button" class="toggle-button" aria-pressed="false" aria-disabled="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`,o=()=>`
<button type="button" class="toggle-button" aria-pressed="true" aria-disabled="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`,l=()=>`
<button type="button" class="toggle-button demo-a11y-text-spacing" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="toggle-button" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="toggle-button" aria-pressed="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="toggle-button" aria-pressed="false" disabled>
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="toggle-button" aria-pressed="true" disabled>
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
\``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="toggle-button" aria-pressed="false" aria-disabled="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="toggle-button" aria-pressed="true" aria-disabled="true">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
\``,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="toggle-button demo-a11y-text-spacing" aria-pressed="false">
    <span class="toggle-button__content">
        <span class="toggle-button__title">4.5</span>
    </span>
</button>
\``,...l.parameters?.docs?.source}}};const g=["toggledOff","toggledOn","toggledOffDisabled","toggledOnDisabled","toggledOffAriaDisabled","toggledOnAriaDisabled","textSpacing"];export{g as __namedExportsOrder,r as default,l as textSpacing,t as toggledOff,a as toggledOffAriaDisabled,e as toggledOffDisabled,s as toggledOn,o as toggledOnAriaDisabled,n as toggledOnDisabled};
