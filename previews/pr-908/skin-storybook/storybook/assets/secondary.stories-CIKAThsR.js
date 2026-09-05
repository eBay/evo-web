const c={title:"Skin/Button/Destructive/Secondary"},s=()=>'<button class="btn btn--secondary btn--destructive">Destructive Button</button>',t=()=>`
<button type="button" class="btn btn--secondary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,n=()=>`
<button disabled class="btn btn--secondary btn--destructive">Tertiary</button
`,e=()=>`
<button type="button" class="btn btn--secondary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,a=()=>`
<button class="btn btn--secondary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--secondary btn--destructive">Destructive Button</button>'`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--secondary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
\``,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'() => `\n<button disabled class="btn btn--secondary btn--destructive">Tertiary</button\n`',...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--secondary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button class="btn btn--secondary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
\``,...a.parameters?.docs?.source}}};const r=["textOnly","iconAndText","disabled","disabledWithIcon","busy"];export{r as __namedExportsOrder,a as busy,c as default,n as disabled,e as disabledWithIcon,t as iconAndText,s as textOnly};
