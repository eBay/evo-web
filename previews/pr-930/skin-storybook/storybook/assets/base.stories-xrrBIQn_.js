const s={title:"Skin/Button/Base"},n=()=>'<button class="btn">Button</button>',t=()=>'<button class="btn btn--form">Button</button>',e=()=>'<button class="btn btn--form btn--slim"><svg class="icon icon--12" width="16" height="16"><use href="#icon-chevron-down-12"></use></svg></button>',o=()=>`
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
`,c=()=>`
<button class="btn" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,b=()=>`
<button class="btn btn--large" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,i=()=>`
<button class="btn btn--form" aria-label="Busy">
    <span class="btn__cell">
        <span class="progress-spinner">
            <svg class="icon icon--24" aria-hidden="true">
                <use href="#icon-spinner-24"></use>
            </svg>
        </span>
    </span>
</button>
`,u=()=>'<button type="submit" class="btn">Submit</button>',l=()=>'<button type="reset" class="btn">Reset</button>',r=["textOnly","form","formSlim","iconAndText","disabled","busy","busyLarge","formBusy","submit","reset"];export{r as __namedExportsOrder,c as busy,b as busyLarge,s as default,a as disabled,t as form,i as formBusy,e as formSlim,o as iconAndText,l as reset,u as submit,n as textOnly};
