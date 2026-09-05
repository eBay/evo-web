const t={title:"Skin/Button/Dimensions"},n=()=>`
<button type="button" class="btn btn--large">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,s=()=>`
<button type="button" class="btn btn--small">
    <span class="btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`,o=()=>'<button class="btn btn--form btn--large">Button</button>',e=()=>'<button class="btn btn--form btn--small">Button</button>',i=()=>'<button class="btn btn--fluid">Button</button>',a=()=>`
<button class="btn" style="width: 200px;">
    Button with a lot of text that should wrap
</button>
`,l=()=>`
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    Button with a lot of text that should wrap
</button>
`,u=()=>`
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    Button with a lot of text that should wrap
</button>
`,b=["large","small","formLarge","formSmall","fluid","fixedWidth","fixedWidthAndHeight","fixedWidthAndHeightTruncated"];export{b as __namedExportsOrder,t as default,a as fixedWidth,l as fixedWidthAndHeight,u as fixedWidthAndHeightTruncated,i as fluid,o as formLarge,e as formSmall,n as large,s as small};
