const o={title:"Skin/Button/Secondary"},s=()=>'<button class="btn btn--secondary">Button</button>',n=()=>`
<button type="button" class="btn btn--secondary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,t=()=>`
<button type="button" class="btn btn--secondary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,e=()=>`
<button type="button" class="btn btn--secondary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,a=()=>`
<button class="btn btn--secondary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--secondary">Button</button>'`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--secondary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--secondary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--secondary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button class="btn btn--secondary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
\``,...a.parameters?.docs?.source}}};const c=["textOnly","iconAndText","disabled","partiallyDisabled","busy"];export{c as __namedExportsOrder,a as busy,o as default,t as disabled,n as iconAndText,e as partiallyDisabled,s as textOnly};
