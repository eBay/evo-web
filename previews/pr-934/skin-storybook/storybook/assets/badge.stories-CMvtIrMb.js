const t={title:"Skin/Badge"},s=()=>`
<span class="badge"></span>
`,a=()=>`
<span class="badge">1</span>
`,e=()=>`
<span class="badge">10</span>
`,r=()=>`
<span class="badge">99+</span>
`,c=()=>`
<div dir="rtl">
    <span class="badge">+99</span>
</div>
`,n=()=>`
<span class="badge demo-a11y-text-spacing">99+</span>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'() => `\n<span class="badge"></span>\n`',...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'() => `\n<span class="badge">1</span>\n`',...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'() => `\n<span class="badge">10</span>\n`',...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'() => `\n<span class="badge">99+</span>\n`',...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="badge">+99</span>
</div>
\``,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'() => `\n<span class="badge demo-a11y-text-spacing">99+</span>\n`',...n.parameters?.docs?.source}}};const o=["empty","oneDigit","twoDigits","threeDigits","RTL","textSpacing"];export{c as RTL,o as __namedExportsOrder,t as default,s as empty,a as oneDigit,n as textSpacing,r as threeDigits,e as twoDigits};
