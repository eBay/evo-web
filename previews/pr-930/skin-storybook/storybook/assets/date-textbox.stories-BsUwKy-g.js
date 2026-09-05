const t={title:"Skin/Date Textbox"},a=()=>`
<span class="date-textbox">
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" />
        <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar">
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-calendar-24"></use>
            </svg>
        </button>
    </span>
</span>
`,e=()=>`
<span class="date-textbox textbox--disabled">
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" disabled />
        <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar" disabled>
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-calendar-24"></use>
            </svg>
        </button>
    </span>
</span>
`,n=()=>`
<span class="date-textbox demo-a11y-text-spacing">
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" />
        <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar">
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-calendar-24"></use>
            </svg>
        </button>
    </span>
</span>
`,s=()=>`
<span class="date-textbox">
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" />
    </span>
    <span class="textbox">
        <input class="textbox__control" placeholder="YYYY-MM-DD" type="text" />
        <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar">
            <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                <use href="#icon-calendar-24"></use>
            </svg>
        </button>
    </span>
</span>
`,o=["base","disabled","textSpacing","range"];export{o as __namedExportsOrder,a as base,t as default,e as disabled,s as range,n as textSpacing};
