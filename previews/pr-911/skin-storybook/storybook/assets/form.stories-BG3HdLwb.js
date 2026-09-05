const r={title:"Skin/Switch/Form"},s=()=>`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" checked />
    <span class="switch__button"></span>
</div>
`,c=()=>`
<div class="switch" dir="rtl">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" checked />
    <span class="switch__button"></span>
</div>
`,e=()=>`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" disabled checked />
    <span class="switch__button"></span>
</div>
`,t=()=>`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" />
    <span class="switch__button"></span>
</div>
`,a=()=>`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" disabled />
    <span class="switch__button"></span>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" checked />
    <span class="switch__button"></span>
</div>
\``,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<div class="switch" dir="rtl">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" checked />
    <span class="switch__button"></span>
</div>
\``,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" disabled checked />
    <span class="switch__button"></span>
</div>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" />
    <span class="switch__button"></span>
</div>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" disabled />
    <span class="switch__button"></span>
</div>
\``,...a.parameters?.docs?.source}}};const o=["on","RTL","onDisabled","off","offDisabled"];export{c as RTL,o as __namedExportsOrder,r as default,t as off,a as offDisabled,s as on,e as onDisabled};
