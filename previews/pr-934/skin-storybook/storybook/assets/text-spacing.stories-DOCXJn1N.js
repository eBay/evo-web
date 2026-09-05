const t={title:"Skin/Fake Button/Text Spacing"},e=()=>'<a href="http://www.ebay/com" class="fake-btn demo-a11y-text-spacing">Fake Button</a>',a=()=>`
<a class="fake-btn demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => '<a href="http://www.ebay/com" class="fake-btn demo-a11y-text-spacing">Fake Button</a>'`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
\``,...a.parameters?.docs?.source}}};const s=["textOnly","iconAndText"];export{s as __namedExportsOrder,t as default,a as iconAndText,e as textOnly};
