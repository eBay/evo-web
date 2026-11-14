import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as r,T as i,at as a,c as o,ct as s,i as c,s as l,t as u}from"./dom-BJr4MHiD.js";var d;function f(){return(f=e((()=>{d=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-flag
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A country flag, rendered from the Skin flag sprite.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-flag)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-flag)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-flag/examples)
`})))()}function p(){return(p=e((()=>{})))()}function m(){return(m=e((()=>{p()})))()}var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{c(),m(),h=`<span></span>`,g=()=>{},_={small:`ff-sm`,medium:`ff-md`,large:`ff-lg`,"x-large":`ff-xl`},v=a(6,e=>o(e.a,[`fflag`,`fflag--${e.e.toLowerCase()}`,e.f&&_[e.f],e.d]),2),y=n(3,v),b=n(4,v),x=n(5,v),S=(e,t)=>{l(e.a,`role`,!!t&&`img`),l(e.a,`aria-label`,t),l(e.a,`aria-hidden`,!t&&`true`)},C=s(`E0`,e=>r(e,`a`)),w=n(8,e=>{i(e,`a`,e.i,{class:1,role:1,"aria-label":1,"aria-hidden":1}),C(e)}),T=(e,t)=>{(({a11yText:t,class:n,country:r,size:i,...a})=>w(e,a))(t),y(e,t.class),b(e,t.country),x(e,t.size),S(e,t.a11yText)},E=u(`E`,h,` b`,g,T)})))()}function O(e){e.a}var k,A,j,M;function N(){return(N=e((()=>{D(),c(),k=h,A=(e=>`/${e}&`)(` b`),j=n(2,e=>{S(e.a,e.c.a11yText),y(e.a,e.c.class),b(e.a,e.c.country),x(e.a,e.c.size),w(e.a,(({a11yText:e,class:t,country:n,size:r,...i})=>i)(e.c))}),M=u(`SDijNd2`,k,A,O,j)})))()}var P;function F(){return(F=e((()=>{P=`import type { Input as FlagInput } from "../index.marko";
export interface Input extends FlagInput {}

<evo-flag ...input/>
`})))()}function I(e){e.a}var L,R,z,B;function V(){return(V=e((()=>{D(),c(),L=(e=>`<span>${e} United States</span>`)(h),R=(e=>`D/${e}&l`)(` b`),z=n(2,e=>{S(e.a,e.c.a11yText),y(e.a,e.c.class),b(e.a,e.c.country),x(e.a,e.c.size),w(e.a,(({a11yText:e,class:t,country:n,size:r,...i})=>i)(e.c))}),B=u(`Z4HH0ZC`,L,R,I,z)})))()}var H;function U(){return(U=e((()=>{H=`import type { Input as FlagInput } from "../index.marko";
export interface Input extends FlagInput {}

<span>
  <evo-flag ...input/>
  United States
</span>
`})))()}var W,G,K,q;function J(){return(J=e((()=>{f(),D(),N(),F(),V(),U(),W={title:`graphics & icons/evo-flag`,component:E,parameters:{docs:{description:{component:d}}},argTypes:{country:{type:{name:`string`,required:!0},control:`text`,description:'The 2 letter country code of the flag to display, e.g. `"us"`'},size:{type:`string`,options:[`small`,`medium`,`large`,`x-large`],control:`radio`,description:`Size of the flag. When omitted, the flag takes its size from surrounding CSS`},a11yText:{type:`string`,control:`text`,description:`Localized name of the country, used as the flag's accessible name. The flag is decorative if this is not passed`},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`, `aria-label` and `aria-hidden`."}}},G=t(M,P,{country:`us`,size:`medium`,a11yText:`United States`}),K=t(B,H,{country:`us`,size:`medium`}),q=[`Default`,`WithText`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  country: "us",
  size: "medium",
  a11yText: "United States"
})`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithTextTemplate, WithTextTemplateCode, {
  country: "us",
  size: "medium"
})`,...K.parameters?.docs?.source}}}})))()}J();export{G as Default,K as WithText,q as __namedExportsOrder,W as default};