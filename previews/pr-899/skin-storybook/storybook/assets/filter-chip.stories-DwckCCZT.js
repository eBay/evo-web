const r={title:"Skin/Filter Chip/Base"},s=()=>`
<button class="filter-chip" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
`,e=()=>`
<button class="filter-chip" type="button" aria-pressed="true">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</button>
`,t=()=>`
<a class="filter-chip" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</a>
`,a=()=>`
<a class="filter-chip filter-chip--selected" herf="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football <span class="clipped">- Selected</span></span>
</a>
`,n=()=>`
<div dir="rtl">
    <button class="filter-chip" type="button" aria-pressed="false">
        <svg class="icon icon--16" width="16" height="16">
            <use href="#icon-sneaker-16"/>
        </svg>
        <span class="filter-chip__text">Football</span>
    </button>
</div>
`,c=()=>`
<button class="filter-chip demo-a11y-text-spacing" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip" type="button" aria-pressed="true">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</button>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<a class="filter-chip" href="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football</span>
</a>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<a class="filter-chip filter-chip--selected" herf="https://www.ebay.com">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>

    <span class="filter-chip__text">Football <span class="clipped">- Selected</span></span>
</a>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <button class="filter-chip" type="button" aria-pressed="false">
        <svg class="icon icon--16" width="16" height="16">
            <use href="#icon-sneaker-16"/>
        </svg>
        <span class="filter-chip__text">Football</span>
    </button>
</div>
\``,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<button class="filter-chip demo-a11y-text-spacing" type="button" aria-pressed="false">
    <svg class="icon icon--16" width="16" height="16">
        <use href="#icon-sneaker-16"/>
    </svg>
    <span class="filter-chip__text">Football</span>
</button>
\``,...c.parameters?.docs?.source}}};const i=["button","buttonSelected","anchor","anchorSelected","RTL","textSpacing"];export{n as RTL,i as __namedExportsOrder,t as anchor,a as anchorSelected,s as button,e as buttonSelected,r as default,c as textSpacing};
