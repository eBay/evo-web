const m={title:"Skin/Menu"},s=()=>`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
`,e=()=>`
<span class="menu">
    <span class="menu__items" role="menu">
        <div class="menu__item" role="menuitem"><span>Button 1<span class="badge">1</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 2<span class="badge">10</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 3<span class="badge">99+</span></span></div>
    </span>
</span>
`,n=()=>`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <hr class="menu__separator" role="separator" />
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
`,a=()=>`
<span class="menu demo-a11y-text-spacing">
    <span class="menu__items" role="menu">
        <div class="menu__item" role="menuitem"><span>Button 1<span class="badge">1</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 2<span class="badge">10</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 3<span class="badge">99+</span></span></div>
    </span>
</span>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="menu">
    <span class="menu__items" role="menu">
        <div class="menu__item" role="menuitem"><span>Button 1<span class="badge">1</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 2<span class="badge">10</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 3<span class="badge">99+</span></span></div>
    </span>
</span>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitem" tabindex="0"><span>Item 1</span></div>
        <hr class="menu__separator" role="separator" />
        <div class="menu__item" role="menuitem"><span>Item 2</span></div>
        <div class="menu__item" role="menuitem"><span>Item 3</span></div>
    </div>
</span>
\``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="menu demo-a11y-text-spacing">
    <span class="menu__items" role="menu">
        <div class="menu__item" role="menuitem"><span>Button 1<span class="badge">1</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 2<span class="badge">10</span></span></div>
        <div class="menu__item" role="menuitem"><span>Button 3<span class="badge">99+</span></span></div>
    </span>
</span>
\``,...a.parameters?.docs?.source}}};const t=["stateless","badged","separator","textSpacing"];export{t as __namedExportsOrder,e as badged,m as default,n as separator,s as stateless,a as textSpacing};
