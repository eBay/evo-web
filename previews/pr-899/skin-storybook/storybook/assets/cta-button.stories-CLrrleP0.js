const n={title:"Skin/CTA Button"},a=()=>`
<a class="cta-btn" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`,s=()=>`
<a class="cta-btn demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<a class="cta-btn" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
\``,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<a class="cta-btn demo-a11y-text-spacing" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
\``,...s.parameters?.docs?.source}}};const e=["base","textSpacing"];export{e as __namedExportsOrder,a as base,n as default,s as textSpacing};
