const n={title:"Skin/Textbox/RTL/Base"},e=()=>`
<div dir="rtl">
    <span class="textbox">
        <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
 </div>
`,t=()=>`
<div dir="rtl">
    <span class="textbox">
        <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
    </span>
</div>
`,a=()=>`
<div dir="rtl">
    <span class="textbox">
        <span>$</span>
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`,s=()=>`
<div dir="rtl">
    <span class="textbox">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <span>%</span>
    </span>
</div>
`,r=()=>`
<div dir="rtl">
    <span class="textbox">
        <span>$</span>
        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <span>/lb</span>
    </span>
</div>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="textbox">
        <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
 </div>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="textbox">
        <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
    </span>
</div>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="textbox">
        <span>$</span>
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
\``,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="textbox">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <span>%</span>
    </span>
</div>
\``,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="textbox">
        <span>$</span>
        <input class="textbox__control" type="text" placeholder="placeholder text" />
        <span>/lb</span>
    </span>
</div>
\``,...r.parameters?.docs?.source}}};const o=["singleLine","multiLine","prefix","suffix","prefixAndSuffix"];export{o as __namedExportsOrder,n as default,t as multiLine,a as prefix,r as prefixAndSuffix,e as singleLine,s as suffix};
