const t={title:"Skin/Filter/Button/Link"},e=()=>`
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
`,s=()=>`
<a href="http://www.ebay.com" class="filter-link filter-link--selected">
    <span class="filter-link__cell">Link<span class="clipped"> - Selected</span></span>
</a>
`,a=()=>`
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link with lots of text that will become truncated</span>
</a>
`,l=()=>`
<a class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<a href="http://www.ebay.com" class="filter-link filter-link--selected">
    <span class="filter-link__cell">Link<span class="clipped"> - Selected</span></span>
</a>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<a href="http://www.ebay.com" class="filter-link">
    <span class="filter-link__cell">Link with lots of text that will become truncated</span>
</a>
\``,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<a class="filter-link">
    <span class="filter-link__cell">Link</span>
</a>
\``,...l.parameters?.docs?.source}}};const r=["base","selected","truncated","disabled"];export{r as __namedExportsOrder,e as base,t as default,l as disabled,s as selected,a as truncated};
