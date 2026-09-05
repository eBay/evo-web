import{b as w}from"./utils-DyU2_5R1.js";import{_ as c,f as n,g as v,i as T,m as $,h as x,p as z,Y as C,l as D,Q as E}from"./dom-CK48op32.js";import{$ as k,a as R,b as A,c as B}from"./evo-icon-arrow-right-24-Bw-XSSk5.js";import"./iframe-BNpSE5cT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-IFKzbDrV.js";const l=(t=>`<a><span class=cta-btn__cell><span><!></span>${t}</span></a>`)(B),i=(t=>` F%l/${t}&m`)(A),S=C(1),s=$(9,t=>x(t.a,["cta-btn",t.g&&`cta-btn--${t.g}`,t.f&&"cta-btn--fluid",t.h&&"cta-btn--truncated",t.i]),3),r=n(5,s),u=n(6,s),d=n(7,s),p=n(8,s),G=T("AQzlYCh",t=>D(t,"a")),m=n(11,t=>{v(t,"a",t.l,{class:1}),G(t)}),O=z(1),U=O;function b(t){k(t.c),R(t.c,{})}const j=(t,e)=>{(({class:_,content:f,fluid:h,size:g,truncated:o,...y})=>m(t,y))(e),r(t,e.fluid),u(t,e.size),d(t,e.truncated),p(t,e.class),U(t,e.content)},I=c("sXG7G49",l,i,b,j),L=l,H=(t=>`/${t}&`)(i),M=E("zCGPk4G","CTA Button");function Q(t){b(t.a),S(t.a,M(t))}const Y=n(2,t=>{p(t.a,t.c.class),r(t.a,t.c.fluid),u(t.a,t.c.size),d(t.a,t.c.truncated),m(t.a,(({class:e,content:_,fluid:f,size:h,truncated:g,...o})=>o)(t.c))}),F=c("UjEj7Rd",L,H,Q,Y),P=`<evo-cta-button ...input>
  CTA Button
</evo-cta-button>
`,W=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-cta-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-cta-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-cta-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-cta-button/examples)
`,Z={title:"buttons/evo-cta-button",component:I,parameters:{docs:{description:{component:W}}},argTypes:{fluid:{type:"boolean",control:"boolean",description:"Expand to the full width of the parent element"},size:{type:"string",options:["large"],control:"select",description:"Use the large CTA button size"},truncated:{type:"boolean",control:"boolean",description:"Truncate overflowing text to a single line with an ellipsis"},href:{type:"string",control:"text",description:"The URL. If not present, the button inherits disabled styles"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through"}}},a=w(F,P,{href:"https://www.ebay.com",fluid:!1,truncated:!1});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  href: "https://www.ebay.com",
  fluid: false,
  truncated: false
})`,...a.parameters?.docs?.source}}};const tt=["Default"];export{a as Default,tt as __namedExportsOrder,Z as default};
