const p={title:"Skin/Button/Base"},s=()=>'<button class="btn">Button</button>',n=()=>'<button class="btn btn--form">Button</button>',t=()=>'<button class="btn btn--form btn--slim"><svg class="icon icon--12" width="16" height="16"><use href="#icon-chevron-down-12"></use></svg></button>',e=()=>`
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,a=()=>`
<button type="button" class="btn" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,r=()=>`
<button class="btn" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,o=()=>`
<button class="btn btn--large" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,c=()=>`
<button class="btn btn--form" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,u=()=>'<button type="submit" class="btn">Submit</button>',i=()=>'<button type="reset" class="btn">Reset</button>';s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => '<button class="btn">Button</button>'`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--form">Button</button>'`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => '<button class="btn btn--form btn--slim"><svg class="icon icon--12" width="16" height="16"><use href="#icon-chevron-down-12"></use></svg></button>'`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button type="button" class="btn" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
\``,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<button class="btn" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
\``,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<button class="btn btn--large" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
\``,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<button class="btn btn--form" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
\``,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => '<button type="submit" class="btn">Submit</button>'`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => '<button type="reset" class="btn">Reset</button>'`,...i.parameters?.docs?.source}}};const b=["textOnly","form","formSlim","iconAndText","disabled","busy","busyLarge","formBusy","submit","reset"];export{b as __namedExportsOrder,r as busy,o as busyLarge,p as default,a as disabled,n as form,c as formBusy,t as formSlim,e as iconAndText,i as reset,u as submit,s as textOnly};
