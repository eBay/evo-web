import{b as w}from"./utils-DyU2_5R1.js";import{a as c,b as n,c as v,d as T,e as $,f as x,g as z,h as C,i as D,j as E}from"./dom-DF5f8Ddd.js";import{$ as k,a as R,b as A,c as B}from"./evo-icon-arrow-right-24-DNeZfeUU.js";import"./iframe-CuDE3HaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGOhNcPA.js";const i=(t=>`<a><span class=cta-btn__cell><span><!></span>${t}</span></a>`)(B),l=(t=>` F%l/${t}&m`)(A),S=C(1),s=$(9,t=>x(t.a,["cta-btn",t.g&&`cta-btn--${t.g}`,t.f&&"cta-btn--fluid",t.h&&"cta-btn--truncated",t.i]),3),r=n(5,s),u=n(6,s),d=n(7,s),p=n(8,s),j=T("AQzlYCh",t=>D(t,"a")),m=n(11,t=>{v(t,"a",t.l,{class:1}),j(t)}),G=z(1),O=G;function b(t){k(t.c),R(t.c,{})}const U=(t,e)=>{(({class:f,content:_,fluid:h,size:g,truncated:o,...y})=>m(t,y))(e),r(t,e.fluid),u(t,e.size),d(t,e.truncated),p(t,e.class),O(t,e.content)},I=c("sXG7G49",i,l,b,U),L=i,H=(t=>`/${t}&`)(l),M=E("zCGPk4G","CTA Button");function F(t){b(t.a),S(t.a,M(t))}const P=n(2,t=>{p(t.a,t.c.class),r(t.a,t.c.fluid),u(t.a,t.c.size),d(t.a,t.c.truncated),m(t.a,(({class:e,content:f,fluid:_,size:h,truncated:g,...o})=>o)(t.c))}),Q=c("UjEj7Rd",L,H,F,P),W=`<evo-cta-button ...input>
    CTA Button
</evo-cta-button>`,X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,Z={title:"buttons/evo-cta-button",component:I,parameters:{docs:{description:{component:X}}},argTypes:{fluid:{type:"boolean",control:"boolean",description:"Expand to the full width of the parent element"},size:{type:"string",options:["large"],control:"select",description:"Use the large CTA button size"},truncated:{type:"boolean",control:"boolean",description:"Truncate overflowing text to a single line with an ellipsis"},href:{type:"string",control:"text",description:"The URL. If not present, the button inherits disabled styles"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through"}}},a=w(Q,W,{href:"https://www.ebay.com",fluid:!1,truncated:!1});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  href: "https://www.ebay.com",
  fluid: false,
  truncated: false
})`,...a.parameters?.docs?.source}}};const tt=["Default"];export{a as Default,tt as __namedExportsOrder,Z as default};
