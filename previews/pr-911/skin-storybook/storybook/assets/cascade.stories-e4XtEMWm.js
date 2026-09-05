const e={title:"Skin/Button/Cascade"},s=()=>`
<button type="button" class="btn" style="color: red;">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,n=()=>`
<div style="font-size: 200%;">
    <button type="button" class="btn">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
`,t=()=>`
<div dir="rtl">
    <button type="button" class="btn btn--primary">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn" style="color: red;">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<div style="font-size: 200%;">
    <button type="button" class="btn">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <button type="button" class="btn btn--primary">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
\``,...t.parameters?.docs?.source}}};const o=["color","fontSize","RTL"];export{t as RTL,o as __namedExportsOrder,s as color,e as default,n as fontSize};
