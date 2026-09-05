const t={title:"Skin/Fake Button/Dimensions"},e=()=>`
<a class="fake-btn fake-btn--large" href="http://www.ebay.com">
    <span class="fake-btn__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Fake Button</span>
    </span>
</a>
`,a=()=>'<a class="fake-btn fake-btn--fluid" href="http://www.ebay.com">Fake Button</a>',n=()=>`
 <a class="fake-btn" href="http://www.ebay.com" style="width: 200px;">
    Fake Button with a lot of text that should wrap
</a>
`,s=()=>`
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`,i=()=>`
<a style="width: 200px;" class="fake-btn fake-btn--fixed-height fake-btn--truncated" href="http://www.ebay.com">
    Fake Button with a lot of text that should wrap
</a>
`,h=["large","fluid","fixedWidth","fixedWidthAndHeight","fixedWidthAndHeightTruncated"];export{h as __namedExportsOrder,t as default,n as fixedWidth,s as fixedWidthAndHeight,i as fixedWidthAndHeightTruncated,a as fluid,e as large};
