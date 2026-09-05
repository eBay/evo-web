const n={title:"Skin/Fake Button/Cascade"},s=()=>`
<div dir="rtl">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`,e=()=>`
<div style="color: red;">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`,a=()=>`
<div style="font-size: 200%">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div style="color: red;">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div style="font-size: 200%">
    <a class="fake-btn" href="http://www.ebay.com">
        <span class="fake-btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Fake Button</span>
        </span>
    </a>
</div>
\``,...a.parameters?.docs?.source}}};const t=["RTL","color","fontSize"];export{s as RTL,t as __namedExportsOrder,e as color,n as default,a as fontSize};
