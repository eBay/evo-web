const s={title:"Skin/Button/Primary"},t=()=>'<button class="btn btn--primary">Button</button>',n=()=>`
<button type="button" class="btn btn--primary">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,a=()=>`
<button type="button" class="btn btn--primary" disabled>
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,e=()=>`
<button type="button" class="btn btn--primary" aria-disabled="true">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,o=()=>`
<button class="btn btn--primary" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,i=["textOnly","iconAndText","disabled","partiallyDisabled","busy"];export{i as __namedExportsOrder,o as busy,s as default,a as disabled,n as iconAndText,e as partiallyDisabled,t as textOnly};
