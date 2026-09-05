const a={title:"Skin/Button/Destructive/Primary"},t=()=>'<button class="btn btn--primary btn--destructive">Destructive Button</button>',s=()=>`
<button type="button" class="btn btn--primary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,n=()=>`
<button disabled class="btn btn--primary btn--destructive">Tertiary</button
`,e=()=>`
<button type="button" class="btn btn--primary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,r=()=>`
<button class="btn btn--primary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--primary btn--destructive">Destructive Button</button>'`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--primary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'() => `\n<button disabled class="btn btn--primary btn--destructive">Tertiary</button\n`',...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn btn--primary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
\``,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<button class="btn btn--primary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
\``,...r.parameters?.docs?.source}}};const c=["textOnly","iconAndText","disabled","disabledWithIcon","busy"];export{c as __namedExportsOrder,r as busy,a as default,n as disabled,e as disabledWithIcon,s as iconAndText,t as textOnly};
