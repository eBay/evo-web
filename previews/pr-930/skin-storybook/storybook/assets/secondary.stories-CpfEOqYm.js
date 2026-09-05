const t={title:"Skin/Button/Destructive/Secondary"},s=()=>'<button class="btn btn--secondary btn--destructive">Destructive Button</button>',n=()=>`
<button type="button" class="btn btn--secondary btn--destructive">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,e=()=>`
<button disabled class="btn btn--secondary btn--destructive">Tertiary</button
`,c=()=>`
<button type="button" class="btn btn--secondary btn--destructive" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Destructive Button</span>
    </span>
</button>
`,o=()=>`
<button class="btn btn--secondary btn--destructive" aria-label="Busy">
    <span class="progress-spinner">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>
</button>
`,a=["textOnly","iconAndText","disabled","disabledWithIcon","busy"];export{a as __namedExportsOrder,o as busy,t as default,e as disabled,c as disabledWithIcon,n as iconAndText,s as textOnly};
