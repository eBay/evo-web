const t={title:"Skin/Selection Chip"},e=()=>`
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
`,i=()=>`
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
    </button>`,c=["button","buttonSelected","RTL","textSpacing"];export{i as RTL,c as __namedExportsOrder,e as button,s as buttonSelected,t as default,n as textSpacing};
