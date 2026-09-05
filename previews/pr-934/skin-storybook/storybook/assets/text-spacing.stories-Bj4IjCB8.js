const e={title:"Skin/Button/Text Spacing"},t=()=>'<button class="btn demo-a11y-text-spacing">Button</button>',s=()=>'<button class="btn btn--form demo-a11y-text-spacing">Button</button>',n=()=>`
<button type="button" class="btn demo-a11y-text-spacing">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => '<button class="btn demo-a11y-text-spacing">Button</button>'`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--form demo-a11y-text-spacing">Button</button>'`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn demo-a11y-text-spacing">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...n.parameters?.docs?.source}}};const o=["textOnly","form","iconAndText"];export{o as __namedExportsOrder,e as default,s as form,n as iconAndText,t as textOnly};
