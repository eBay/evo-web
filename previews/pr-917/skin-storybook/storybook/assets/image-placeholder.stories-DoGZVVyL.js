const d={title:"Skin/Image Placeholder"},e=()=>`
<h2>
    <svg class="image-placeholder">
        <use href="#image-placeholder"></use>
    </svg>
</h2>
`,s=()=>`
<div dir="rtl">
    <h2>
        <svg class="image-placeholder">
            <use href="#image-placeholder"></use>
        </svg>
    </h2>
</div>
`,a=()=>`
<p>
    <svg class="image-placeholder" style="border: 1px solid black; width: 50px; height: 50px">
        <use href="#image-placeholder"></use>
    </svg>
</p>
`,r=()=>`
<div style="border: 1px dotted black; width: 150px; height: 150px">
    <svg class="image-placeholder" >
        <use href="#image-placeholder"></use>
    </svg>
</div>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<h2>
    <svg class="image-placeholder">
        <use href="#image-placeholder"></use>
    </svg>
</h2>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <h2>
        <svg class="image-placeholder">
            <use href="#image-placeholder"></use>
        </svg>
    </h2>
</div>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<p>
    <svg class="image-placeholder" style="border: 1px solid black; width: 50px; height: 50px">
        <use href="#image-placeholder"></use>
    </svg>
</p>
\``,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<div style="border: 1px dotted black; width: 150px; height: 150px">
    <svg class="image-placeholder" >
        <use href="#image-placeholder"></use>
    </svg>
</div>
\``,...r.parameters?.docs?.source}}};const i=["insideHeading","RTLInsideHeading","differentWidths","inContainerVariableWidth"];export{s as RTLInsideHeading,i as __namedExportsOrder,d as default,a as differentWidths,r as inContainerVariableWidth,e as insideHeading};
