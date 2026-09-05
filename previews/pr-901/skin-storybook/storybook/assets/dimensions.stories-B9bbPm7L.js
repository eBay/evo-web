const s={title:"Skin/CTA Button/Dimensions"},a=()=>`
<a class="cta-btn cta-btn--large" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`,t=()=>`
<a style="width: 200px;" class="cta-btn cta-btn--large cta-btn--truncated" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link with a lot of text that should wrap</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<a class="cta-btn cta-btn--large" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
\``,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<a style="width: 200px;" class="cta-btn cta-btn--large cta-btn--truncated" href="http://www.ebay.com">
    <span class="cta-btn__cell">
        <span>Link with a lot of text that should wrap</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
\``,...t.parameters?.docs?.source}}};const n=["large","largeFixedWidthTruncated"];export{n as __namedExportsOrder,s as default,a as large,t as largeFixedWidthTruncated};
