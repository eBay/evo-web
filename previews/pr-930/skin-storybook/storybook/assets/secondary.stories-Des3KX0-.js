const s={title:"Skin/Button/Secondary"},n=()=>'<button class="btn btn--secondary">Button</button>',t=()=>`
<button type="button" class="btn btn--secondary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,a=()=>`
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
`,o=()=>`
<button class="btn btn--secondary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,c=["textOnly","iconAndText","disabled","partiallyDisabled","busy"];export{c as __namedExportsOrder,o as busy,s as default,a as disabled,t as iconAndText,e as partiallyDisabled,n as textOnly};
