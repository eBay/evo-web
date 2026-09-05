const r={title:"Skin/Button/Primary"},s=()=>'<button class="btn btn--primary">Button</button>',n=()=>`
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,t=()=>`
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,a=()=>`
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,e=()=>`
<button class="btn btn--primary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--primary">Button</button>'`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button class="btn btn--primary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
\``,...e.parameters?.docs?.source}}};const o=["textOnly","iconAndText","disabled","partiallyDisabled","busy"];export{o as __namedExportsOrder,e as busy,r as default,t as disabled,n as iconAndText,a as partiallyDisabled,s as textOnly};
