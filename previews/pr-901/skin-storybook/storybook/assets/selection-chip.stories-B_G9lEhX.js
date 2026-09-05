const i={title:"Skin/Selection Chip"},e=()=>`
<button class="selection-chip" type="button" aria-pressed="false">
    <span class="selection-chip__text">Football</span>
    <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
`,s=()=>`
<button class="selection-chip" type="button" aria-pressed="true">
    <span class="selection-chip__text">Football</span>
    <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
`,t=()=>`
<div dir="rtl">
    <button class="selection-chip" type="button" aria-pressed="false">
        <span class="selection-chip__text">Football</span>
        <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-close-12"></use>
        </svg>
    </button>
</div>
`,n=()=>`
    <button class="selection-chip demo-a11y-text-spacing" type="button" aria-pressed="false">
        <span class="selection-chip__text">Football</span>
        <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-close-12"></use>
        </svg>
    </button>`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button class="selection-chip" type="button" aria-pressed="false">
    <span class="selection-chip__text">Football</span>
    <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button class="selection-chip" type="button" aria-pressed="true">
    <span class="selection-chip__text">Football</span>
    <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
        <use href="#icon-close-12"></use>
    </svg>
</button>
\``,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <button class="selection-chip" type="button" aria-pressed="false">
        <span class="selection-chip__text">Football</span>
        <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-close-12"></use>
        </svg>
    </button>
</div>
\``,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
    <button class="selection-chip demo-a11y-text-spacing" type="button" aria-pressed="false">
        <span class="selection-chip__text">Football</span>
        <svg class="icon icon--12 selection-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-close-12"></use>
        </svg>
    </button>\``,...n.parameters?.docs?.source}}};const c=["button","buttonSelected","RTL","textSpacing"];export{t as RTL,c as __namedExportsOrder,e as button,s as buttonSelected,i as default,n as textSpacing};
