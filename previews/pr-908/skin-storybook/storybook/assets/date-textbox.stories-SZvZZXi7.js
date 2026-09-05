const o={title:"Skin/Date Textbox"},t=()=>`
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
`,a=()=>`
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
`,e=()=>`
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
`,s=()=>`
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label" for="date-start">Start</label>
        <span class="textbox">
            <input id="date-start" class="textbox__control" type="text" />
        </span>
    </span>
    <span class="floating-label">
        <label class="floating-label__label" for="date-end">End</label>
        <span class="textbox">
            <input id="date-end" class="textbox__control" type="text" />
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
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
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
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
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
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
\``,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
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
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label" for="date-start">Start</label>
        <span class="textbox">
            <input id="date-start" class="textbox__control" type="text" />
        </span>
    </span>
    <span class="floating-label">
        <label class="floating-label__label" for="date-end">End</label>
        <span class="textbox">
            <input id="date-end" class="textbox__control" type="text" />
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="Calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
\``,...s.parameters?.docs?.source}}};const l=["base","disabled","textSpacing","range","rangeWithFloatingLabels"];export{l as __namedExportsOrder,t as base,o as default,a as disabled,e as range,s as rangeWithFloatingLabels,n as textSpacing};
