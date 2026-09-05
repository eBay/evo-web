const t={title:"Skin/Textbox/Base"},e=()=>`
<span class="textbox">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,o=()=>`
<span class="textbox">
    <textarea aria-label="Description" class="textbox__control" placeholder="placeholder text"></textarea>
</span>
`,l=()=>`
<span class="textbox textbox--large">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,s=()=>`
<span class="textbox" style="font-size: 200%;">
     <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,a=()=>`
<span class="textbox" style="color: green">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,x=()=>`
<div style="font-size: 200%;">
    <span class="textbox">
         <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`,n=()=>`
<div style="color: green">
    <span class="textbox">
        <input class="textbox__control" type="text" placeholder="placeholder text" />
    </span>
</div>
`,p=()=>`
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text"  aria-invalid="true" placeholder="placeholder text" />
</span>
`,r=()=>`
<span class="textbox textbox--invalid">
    <input class="textbox__control" type="text" placeholder="placeholder text" aria-invalid="true" value="value" />
</span>
`,c=()=>`
<div class="textbox textbox--fluid">
    <input class="textbox__control" type="text" placeholder="placeholder text" />
</div>
`,i=()=>`
<span class="textbox demo-a11y-text-spacing">
    <input aria-label="Email Address" class="textbox__control" type="text" placeholder="placeholder text" />
</span>
`,d=()=>`
<span class="textbox">
    <span class="textbox__prefix">$</span>
    <input class="textbox__control" type="text" placeholder"0.00" />
</span>
`,b=()=>`
<span class="textbox">
    <input class="textbox__control" type="text" placeholder="percentage" />
    <span>%</span>
</span>
`,_=()=>`
<span class="textbox">
    <span>$</span>
    <input class="textbox__control" type="text" placeholder="0.00" />
    <span>/lb</span>
</span>
`,h=["singleLine","multiLine","large","overrideFontSize","overrideColor","inheritFontSize","inheritColor","error","errorWithValue","fluid","textSpacing","prefix","suffix","prefixAndSuffix"];export{h as __namedExportsOrder,t as default,p as error,r as errorWithValue,c as fluid,n as inheritColor,x as inheritFontSize,l as large,o as multiLine,a as overrideColor,s as overrideFontSize,d as prefix,_ as prefixAndSuffix,e as singleLine,b as suffix,i as textSpacing};
