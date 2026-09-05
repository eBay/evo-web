const c={title:"Skin/Button/Dimensions"},t=()=>`
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,s=()=>`
<button type="button" class="btn btn--small">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,n=()=>'<button class="btn btn--form btn--large">Button</button>',e=()=>'<button class="btn btn--form btn--small">Button</button>',o=()=>'<button class="btn btn--fluid">Button</button>',a=()=>`
<button class="btn" style="width: 200px;">
    Button with a lot of text that should wrap
</button>
`,r=()=>`
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    Button with a lot of text that should wrap
</button>
`,u=()=>`
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    Button with a lot of text that should wrap
</button>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--small">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--form btn--large">Button</button>'`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--form btn--small">Button</button>'`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--fluid">Button</button>'`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button class="btn" style="width: 200px;">
    Button with a lot of text that should wrap
</button>
\``,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    Button with a lot of text that should wrap
</button>
\``,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    Button with a lot of text that should wrap
</button>
\``,...u.parameters?.docs?.source}}};const i=["large","small","formLarge","formSmall","fluid","fixedWidth","fixedWidthAndHeight","fixedWidthAndHeightTruncated"];export{i as __namedExportsOrder,c as default,a as fixedWidth,r as fixedWidthAndHeight,u as fixedWidthAndHeightTruncated,o as fluid,n as formLarge,e as formSmall,t as large,s as small};
