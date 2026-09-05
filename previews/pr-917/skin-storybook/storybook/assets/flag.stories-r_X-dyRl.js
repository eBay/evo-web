const l={title:"Skin/Flag"},s=()=>`
<h2>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</h2>
`,a=()=>`
<div dir="rtl">
    <h2>
        <svg class="flag flag--us">
            <use href="#flag-us"></use>
        </svg>
        <span style="vertical-align: middle;">United States of America</span>
    </h2>
</div>
`,e=()=>`
<p>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
`,n=()=>`
<a href="http://www.ebay.com">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span>United States of America</span>
</a>
`,r=()=>`
<svg class="flag flag--us">
    <use href="#flag-us"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">United States of America</span>
</a>
`,t=()=>`
<p class="demo-a11y-text-spacing">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<h2>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</h2>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <h2>
        <svg class="flag flag--us">
            <use href="#flag-us"></use>
        </svg>
        <span style="vertical-align: middle;">United States of America</span>
    </h2>
</div>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<p>
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<a href="http://www.ebay.com">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span>United States of America</span>
</a>
\``,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<svg class="flag flag--us">
    <use href="#flag-us"></use>
</svg>
<a href="http://www.ebay.com">
    <span style="vertical-align: middle;">United States of America</span>
</a>
\``,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<p class="demo-a11y-text-spacing">
    <svg class="flag flag--us">
        <use href="#flag-us"></use>
    </svg>
    <span style="vertical-align: middle;">United States of America</span>
</p>
\``,...t.parameters?.docs?.source}}};const i=["insideHeading","RTLInsideHeading","insideParagraph","insideLink","beforeLink","textSpacing"];export{a as RTLInsideHeading,i as __namedExportsOrder,r as beforeLink,l as default,s as insideHeading,n as insideLink,e as insideParagraph,t as textSpacing};
