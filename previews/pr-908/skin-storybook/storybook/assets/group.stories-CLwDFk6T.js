const n={title:"Skin/Filter/Button/Group"},t=()=>`
<div class="filter-group">
    <button type="button" class="filter-button">
        <span class="filter-button__cell">
            <span class="filter-button__text">Button</span>
        </span>
    </button>
    <a href="http://www.ebay.com" class="filter-link">
        <span class="filter-link__cell">Link</span>
    </a>
</div>
`,s=()=>`
<div dir="rtl">
    <div class="filter-group">
        <button type="button" class="filter-button">
            <span class="filter-button__cell">
                <span class="filter-button__text">Button</span>
            </span>
        </button>
        <a href="http://www.ebay.com" class="filter-link">
            <span class="filter-link__cell">Link</span>
        </a>
    </div>
</div>`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div class="filter-group">
    <button type="button" class="filter-button">
        <span class="filter-button__cell">
            <span class="filter-button__text">Button</span>
        </span>
    </button>
    <a href="http://www.ebay.com" class="filter-link">
        <span class="filter-link__cell">Link</span>
    </a>
</div>
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <div class="filter-group">
        <button type="button" class="filter-button">
            <span class="filter-button__cell">
                <span class="filter-button__text">Button</span>
            </span>
        </button>
        <a href="http://www.ebay.com" class="filter-link">
            <span class="filter-link__cell">Link</span>
        </a>
    </div>
</div>\``,...s.parameters?.docs?.source}}};const a=["group","RTL"];export{s as RTL,a as __namedExportsOrder,n as default,t as group};
