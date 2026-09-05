const t={title:"Skin/Button/Tertiary"},s=()=>`
<button class="btn btn--tertiary">Tertiary</button
`,n=()=>`
<button type="button" class="btn btn--tertiary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,a=()=>`
<button type="button" class="btn btn--tertiary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,e=()=>`
<button type="button" class="btn btn--tertiary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,i=()=>`
<button class="btn btn--tertiary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,o=["textOnly","iconAndText","disabled","partiallyDisabled","busy"];export{o as __namedExportsOrder,i as busy,t as default,a as disabled,n as iconAndText,e as partiallyDisabled,s as textOnly};
