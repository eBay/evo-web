const o={title:"Skin/Fake Button/Dimensions"},t=()=>`
<a class="fake-btn fake-btn--large" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`,e=()=>'<a class="fake-btn fake-btn--fluid" href="http://www.ebay.com">Fake Button</a>',a=()=>`
 <a class="fake-btn" href="http://www.ebay.com" style="width: 200px;">
    Fake Button with a lot of text that should wrap
</a>
`,s=()=>`
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`,n=()=>`
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn fake-btn--large" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => '<a class="fake-btn fake-btn--fluid" href="http://www.ebay.com">Fake Button</a>'`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
 <a class="fake-btn" href="http://www.ebay.com" style="width: 200px;">
    Fake Button with a lot of text that should wrap
</a>
\``,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
\``,...n.parameters?.docs?.source}}};const r=["large","fluid","fixedWidth","fixedWidthAndHeight","fixedWidthAndHeightTruncated"];export{r as __namedExportsOrder,o as default,a as fixedWidth,s as fixedWidthAndHeight,n as fixedWidthAndHeightTruncated,e as fluid,t as large};
