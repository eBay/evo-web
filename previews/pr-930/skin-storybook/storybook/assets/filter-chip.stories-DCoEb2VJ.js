const t={title:"Skin/Filter Chip/Base"},e=()=>`
<button class="filter-chip" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
`,s=()=>`
<button class="filter-chip" type="button" aria-pressed="true">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</button>
`,a=()=>`
<a class="filter-chip" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</a>
`,i=()=>`
<a class="filter-chip filter-chip--selected" herf="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football <span class="clipped">- Selected</span></span>
</a>
`,n=()=>`
<div dir="rtl">
    <button class="filter-chip" type="button" aria-pressed="false">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
            <use href="#icon-sneaker-16"/>
        </svg>
        <span class="filter-chip__text">Football</span>
    </button>
</div>
`,c=()=>`
<button class="filter-chip demo-a11y-text-spacing" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
`,o=["button","buttonSelected","anchor","anchorSelected","RTL","textSpacing"];export{n as RTL,o as __namedExportsOrder,a as anchor,i as anchorSelected,e as button,s as buttonSelected,t as default,c as textSpacing};
