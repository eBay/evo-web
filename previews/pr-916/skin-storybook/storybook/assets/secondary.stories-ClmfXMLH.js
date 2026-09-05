const t={title:"Skin/Fake Button/Secondary"},a=()=>'<a href="http://www.ebay/com" class="fake-btn fake-btn--secondary">Fake Button</a>',s=()=>`
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
    </span>
</a>
`,e=()=>`
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`,n=()=>`
<a class="fake-btn fake-btn--secondary">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`,c=()=>`
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => '<a href="http://www.ebay/com" class="fake-btn fake-btn--secondary">Fake Button</a>'`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
    </span>
</a>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn fake-btn--secondary">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
\``,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<a class="fake-btn fake-btn--secondary" href="http://www.ebay.com" aria-disabled="true">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
\``,...c.parameters?.docs?.source}}};const o=["textOnly","iconOnly","iconAndText","disabled","partiallyDisabled"];export{o as __namedExportsOrder,t as default,n as disabled,e as iconAndText,s as iconOnly,c as partiallyDisabled,a as textOnly};
