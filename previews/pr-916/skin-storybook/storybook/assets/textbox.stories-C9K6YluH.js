const b={title:"Skin/Textbox/Base"},e=()=>`
<span class="textbox">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,t=()=>`
<span class="textbox">
    <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
</span>
`,a=()=>`
<span class="textbox textbox--large">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,s=()=>`
<span class="textbox" style="font-size: 200%;">
     <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,o=()=>`
<span class="textbox" style="color: green">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,r=()=>`
<div style="font-size: 200%;">
    <span class="textbox">
         <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`,l=()=>`
<div style="color: green">
    <span class="textbox">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`,n=()=>`
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text"  aria-invalid="true" placeholder="placeholder text" />
</span>
`,c=()=>`
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text" placeholder="placeholder text" aria-invalid="true" value="value" />
</span>
`,p=()=>`
<div class="textbox textbox--fluid">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</div>
`,x=()=>`
<span class="textbox demo-a11y-text-spacing">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,i=()=>`
<span class="textbox">
    <span class="textbox__prefix">$</span>
    <input class="textbox__control" type="text" placeholder"0.00" />
</span>
`,d=()=>`
<span class="textbox">
    <input class="textbox__control" type="text" placeholder="percentage" />
    <span>%</span>
</span>
`,u=()=>`
<span class="textbox">
    <span>$</span>
    <input class="textbox__control" type="text" placeholder="0.00" />
    <span>/lb</span>
</span>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox">
    <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
</span>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox textbox--large">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
\``,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox" style="font-size: 200%;">
     <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
\``,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox" style="color: green">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
\``,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<div style="font-size: 200%;">
    <span class="textbox">
         <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
\``,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<div style="color: green">
    <span class="textbox">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
\``,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text"  aria-invalid="true" placeholder="placeholder text" />
</span>
\``,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text" placeholder="placeholder text" aria-invalid="true" value="value" />
</span>
\``,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<div class="textbox textbox--fluid">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</div>
\``,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox demo-a11y-text-spacing">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
\``,...x.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox">
    <span class="textbox__prefix">$</span>
    <input class="textbox__control" type="text" placeholder"0.00" />
</span>
\``,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox">
    <input class="textbox__control" type="text" placeholder="percentage" />
    <span>%</span>
</span>
\``,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`
<span class="textbox">
    <span>$</span>
    <input class="textbox__control" type="text" placeholder="0.00" />
    <span>/lb</span>
</span>
\``,...u.parameters?.docs?.source}}};const m=["singleLine","multiLine","large","overrideFontSize","overrideColor","inheritFontSize","inheritColor","error","errorWithValue","fluid","textSpacing","prefix","suffix","prefixAndSuffix"];export{m as __namedExportsOrder,b as default,n as error,c as errorWithValue,p as fluid,l as inheritColor,r as inheritFontSize,a as large,t as multiLine,o as overrideColor,s as overrideFontSize,i as prefix,u as prefixAndSuffix,e as singleLine,d as suffix,x as textSpacing};
