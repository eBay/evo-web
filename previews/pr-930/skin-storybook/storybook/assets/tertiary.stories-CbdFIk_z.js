const t={title:"Skin/Button/Destructive/Tertiary"},s=()=>'<button class="btn btn--tertiary btn--destructive">Destructive Button</button>',n=()=>`
<button type="button" class="btn btn--tertiary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,e=()=>`
<button disabled class="btn btn--tertiary btn--destructive">Tertiary</button
`,i=()=>`
<button type="button" class="btn btn--tertiary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,c=()=>`
<button class="btn btn--tertiary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
`,a=["textOnly","iconAndText","disabled","disabledWithIcon","busy"];export{a as __namedExportsOrder,c as busy,t as default,e as disabled,i as disabledWithIcon,n as iconAndText,s as textOnly};
