const e={title:"Skin/CTA Button/Cascade"},s=()=>`
<a class="cta-btn" href="http://www.ebay.com" style="color: red">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`,a=()=>`
<div dir="rtl">
    <a class="cta-btn" href="http://www.ebay.com" style="color: red">
        <span class="cta-btn__cell">
            <span style="margin-right: 2px;">Link</span>
            <svg style="margin-right: 5px; margin-left: 2px;" class="icon icon--24" height="8" width="8" aria-hidden="true">
                <use href="#icon-arrow-right-24"></use>
            </svg>
        </span>
    </a>
<div>
`,n=()=>`
<a class="cta-btn" href="http://www.ebay.com" style="font-size: 200%">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<a class="cta-btn" href="http://www.ebay.com" style="color: red">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <a class="cta-btn" href="http://www.ebay.com" style="color: red">
        <span class="cta-btn__cell">
            <span style="margin-right: 2px;">Link</span>
            <svg style="margin-right: 5px; margin-left: 2px;" class="icon icon--24" height="8" width="8" aria-hidden="true">
                <use href="#icon-arrow-right-24"></use>
            </svg>
        </span>
    </a>
<div>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<a class="cta-btn" href="http://www.ebay.com" style="font-size: 200%">
    <span class="cta-btn__cell">
        <span>Link</span>
        <svg class="icon icon--24" height="8" width="8" aria-hidden="true">
            <use href="#icon-arrow-right-24"></use>
        </svg>
    </span>
</a>
\``,...n.parameters?.docs?.source}}};const r=["color","RTL","fontSize"];export{a as RTL,r as __namedExportsOrder,s as color,e as default,n as fontSize};
