const n={title:"Skin/Fake Button/Base"},s=()=>'<a href="http://www.ebay/com" class="fake-btn">Fake Button</a>',a=()=>`
<a class="fake-btn" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`,e=()=>`
<a class="fake-btn">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => '<a href="http://www.ebay/com" class="fake-btn">Fake Button</a>'`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
\``,...e.parameters?.docs?.source}}};const t=["textOnly","iconAndText","disabled"];export{t as __namedExportsOrder,n as default,e as disabled,a as iconAndText,s as textOnly};
