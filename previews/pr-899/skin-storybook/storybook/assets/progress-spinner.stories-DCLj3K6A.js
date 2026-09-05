const n={title:"Skin/Progress Spinner"},s=()=>`<span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--24" aria-hidden="true">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>`,r=()=>`<div dir="rtl"><span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--24" aria-hidden="true">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span></div>`,e=()=>`<span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img">
        <svg class="icon icon--30" aria-hidden="true">
            <use href="#icon-spinner-30"></use>
        </svg>
    </span>`,a=()=>`<span class="progress-spinner progress-spinner--small" aria-label="Busy" role="img">
        <svg class="icon icon--20" aria-hidden="true">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`<span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--24" aria-hidden="true">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span>\``,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`<div dir="rtl"><span class="progress-spinner" aria-label="Busy animation" role="img">
        <svg class="icon icon--24" aria-hidden="true">
            <use href="#icon-spinner-24"></use>
        </svg>
    </span></div>\``,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`<span class="progress-spinner progress-spinner--large" aria-label="Busy" role="img">
        <svg class="icon icon--30" aria-hidden="true">
            <use href="#icon-spinner-30"></use>
        </svg>
    </span>\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`<span class="progress-spinner progress-spinner--small" aria-label="Busy" role="img">
        <svg class="icon icon--20" aria-hidden="true">
            <use href="#icon-spinner-20"></use>
        </svg>
    </span>\``,...a.parameters?.docs?.source}}};const i=["base","RTL","large","small"];export{r as RTL,i as __namedExportsOrder,s as base,n as default,e as large,a as small};
