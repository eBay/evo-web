import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{t={title:`Skin/Signal`},n=[[`neutral`,`Neutral`],[`information`,`Information`],[`positive`,`Positive`],[`warning`,`Warning`],[`attention`,`Attention`]],r=[[`Default`,``],[`Strong`,` signal--strong`],[`Subtle`,` signal--subtle`]],i=`<svg class="icon icon--12" aria-hidden="true"><use href="#icon-promotion-12"></use></svg>`,a=(e=``,t=``)=>r.map(([r,i])=>`
<h3>${r}</h3>
<p>
    ${n.map(([n,r])=>`<span class="signal signal--${n}${i}${t}">${e}${r}</span>`).join(`
    `)}
</p>`).join(``),o=(e=``,t=``)=>`
<p>
    ${n.map(([n,r])=>`<span class="signal signal--${n}${e}">${t}${r}</span>`).join(`
    `)}
</p>`,s=()=>`
<span class="signal">Draft</span>
`,c=()=>o(),l=()=>o(` signal--strong`),u=()=>o(` signal--subtle`),d=()=>o(``,i),f=()=>`
<div style="width: 120px">
    <span class="signal signal--positive">${i}Great price on this item</span>
</div>
`,p=()=>`
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">${i}Great price on this item</span>
</div>
`,m=()=>a(),h=()=>a(i),g=()=>`
<div style="width: 120px">
    <span class="signal signal--positive">Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--positive">${i}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--attention signal--strong">${i}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--information signal--subtle">${i}Great price on this item</span>
</div>
`,_=()=>`
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">${i}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--attention signal--strong signal--truncated">${i}Great price on this item</span>
</div>
<div style="width: 120px">
    <span class="signal signal--information signal--subtle signal--truncated">${i}Great price on this item</span>
</div>
`,v=()=>`
<span class="signal signal--trustworthy">Trustworthy</span>
`,y=()=>`
<span class="signal signal--recent">Recent</span>
`,b=()=>`
<span class="signal signal--time-sensitive">Time sensitive</span>
`,x=()=>`
<span class="signal signal--neutral">Neutral</span>
`,S=()=>`
<p>
    <span class="signal signal--trustworthy">Trustworthy</span>
    <span class="signal signal--recent">Recent</span>
    <span class="signal signal--time-sensitive">Time sensitive</span>
</p>
<p>
    <span class="signal signal--trustworthy signal--strong">Trustworthy</span>
    <span class="signal signal--recent signal--strong">Recent</span>
    <span class="signal signal--time-sensitive signal--strong">Time sensitive</span>
</p>
<p>
    <span class="signal signal--trustworthy signal--subtle">Trustworthy</span>
    <span class="signal signal--recent signal--subtle">Recent</span>
    <span class="signal signal--time-sensitive signal--subtle">Time sensitive</span>
</p>
`,C=()=>`
<div dir="rtl">${a(i)}
<h3>Wrapping</h3>
<div style="width: 120px">
    <span class="signal signal--positive">${i}Great price on this item</span>
</div>
<h3>Truncation</h3>
<div style="width: 120px">
    <span class="signal signal--positive signal--truncated">${i}Great price on this item</span>
</div>
</div>
`,w=()=>a(i,` demo-a11y-text-spacing`),T=[`base`,`tonesRow`,`strong`,`subtle`,`leadingIcon`,`wrapped`,`truncated`,`tonesAndEmphasis`,`withLeadingIcon`,`wrapping`,`truncation`,`trustWorthy`,`recent`,`timeSensitive`,`neutral`,`deprecatedAliases`,`RTL`,`textSpacing`]})))()}E();export{C as RTL,T as __namedExportsOrder,s as base,t as default,S as deprecatedAliases,d as leadingIcon,x as neutral,y as recent,l as strong,u as subtle,w as textSpacing,b as timeSensitive,m as tonesAndEmphasis,c as tonesRow,p as truncated,_ as truncation,v as trustWorthy,h as withLeadingIcon,f as wrapped,g as wrapping};