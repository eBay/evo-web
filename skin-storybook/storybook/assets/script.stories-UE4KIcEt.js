const e={title:"Skin/Switch/Script"},s=()=>`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true"></span>
    <span class="switch__button"></span>
</div>
`,a=()=>`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`,c=()=>`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false"></span>
    <span class="switch__button"></span>
</div>
`,t=()=>`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true"></span>
    <span class="switch__button"></span>
</div>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
\``,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false"></span>
    <span class="switch__button"></span>
</div>
\``,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
\``,...t.parameters?.docs?.source}}};const r=["on","onDisabled","off","offDisabled"];export{r as __namedExportsOrder,e as default,c as off,t as offDisabled,s as on,a as onDisabled};
