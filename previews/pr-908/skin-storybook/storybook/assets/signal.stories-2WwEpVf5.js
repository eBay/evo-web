const t={title:"Skin/Hotness Signals"},s=()=>`
<span class="signal signal--trustworthy">
    Trustworthy
</span>
`,a=()=>`
<span class="signal signal--recent">
    Recent
</span>
`,e=()=>`
<span class="signal signal--time-sensitive">
    Time Sensitive
</span>
`,n=()=>`
<span class="signal signal--neutral">
    Neutral
</span>
`,r=()=>`
<span class="signal signal--trustworthy demo-a11y-text-spacing">
    Trustworthy
</span>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="signal signal--trustworthy">
    Trustworthy
</span>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="signal signal--recent">
    Recent
</span>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="signal signal--time-sensitive">
    Time Sensitive
</span>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="signal signal--neutral">
    Neutral
</span>
\``,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<span class="signal signal--trustworthy demo-a11y-text-spacing">
    Trustworthy
</span>
\``,...r.parameters?.docs?.source}}};const o=["trustWorthy","recent","timeSensitive","neutral","textSpacing"];export{o as __namedExportsOrder,t as default,n as neutral,a as recent,r as textSpacing,e as timeSensitive,s as trustWorthy};
