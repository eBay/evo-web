import{b as _}from"./utils-DyU2_5R1.js";import{a as T,b as c,c as D,f as S,U as A,d as E,i as j,r as k,e as M}from"./dom-BHuf_wjI.js";import{$ as C,a as I,b as L,c as R}from"./index-3OPMgxGk.js";import"./iframe-D1vEsa04.js";import"./preload-helper-PPVm8Dsz.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>evo-star-rating</span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>DS v1.0.0</span>
</h1>

Displays a read-only star rating from 0 to 5, with half-star support.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-star-rating)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-star-rating)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-star-rating/examples)
`,V=C,z=(a=>`/${a}&`)(I);function O(a){L(a.a)}const $=(a,t)=>R(a.a,{...t,_name:"star-dynamic",_type:"icon",_symbol:'<symbol viewbox="0 0 16 16" id=icon-star-dynamic><!-- full star --><path d="M8.596 1.928a.625.625 0 0 0-1.19 0L6.055 6.136H1.62a.625.625 0 0 0-.346 1.146l3.56 2.364-1.366 4.035a.625.625 0 0 0 .953.71L8 11.862l3.578 2.528a.625.625 0 0 0 .953-.71l-1.366-4.036 3.55-2.364a.625.625 0 0 0-.346-1.145H9.955l-1.36-4.207Z" fill="var(--color-star-rating-full, transparent)" stroke="var(--color-star-rating-full-stroke, #707070)" stroke-width=1.25></path><!-- full star/half star clipped --><path d="M8.596 1.928a.625.625 0 0 0-1.19 0L6.055 6.136H1.62a.625.625 0 0 0-.346 1.146l3.56 2.364-1.366 4.035a.625.625 0 0 0 .953.71L8 11.862l3.578 2.528a.625.625 0 0 0 .953-.71l-1.366-4.036 3.55-2.364a.625.625 0 0 0-.346-1.145H9.955l-1.36-4.207Z" fill="var(--color-star-rating-half, transparent)" stroke="var(--color-star-rating-half-stroke, #707070)" stroke-width=1.25 clip-path="polygon(0 0, 50% 0, 50% 100%, 0 100%)"></path></symbol>'}),r="<div role=img></div>",s=" b";function Q(a){const t=Math.max(0,Math.min(5,a)),u=Math.round(t*2)/2,m=Math.floor(u);return u%1!==0?`${m}-5`:`${m}`}const U=a=>{O(a.a),$(a.a,{class:"star-rating__icon"})},Z=(a,t)=>k(a.a,"aria-label",t),w=M(8,a=>Z(a,a.f!==void 0?a.f:`Rating: ${a.h} out of 5`)),q=c(7,a=>{k(a.a,"data-stars",Q(a.h)),w(a)}),n=(a,t)=>q(a,t!==void 0?t:0),e=c(5,w),l=(a,t)=>S(a.a,["star-rating",t]),B=E("ljm99QT",a=>j(a,"a")),i=c(6,a=>{D(a,"a",a.g,{role:1,"aria-label":1,class:1,"data-stars":1}),B(a)}),P=A(0,V,(a=>`/${a}&`)(z),U);function o(a){P(a,[5,0,1])}const W=(a,t)=>{(({a11yText:u,class:m,value:d,...g})=>i(a,g))(t),l(a,t.class),n(a,t.value),e(a,t.a11yText)},X=T("bxLDet2",r,s,o,W),Y=r,F=(a=>`/${a}&`)(s);function G(a){o(a.a)}const J=c(2,a=>{e(a.a,a.c.a11yText),l(a.a,a.c.class),n(a.a,a.c.value),i(a.a,(({a11yText:t,class:u,value:m,...d})=>d)(a.c))}),K=T("gjizQPA",Y,F,G,J),N=`import type { Input as StarRatingInput } from "<evo-star-rating>";
export interface Input extends StarRatingInput {}
<evo-star-rating ...input/>
`,aa=((a,t,u,m,d,g,h,y,x,b,p)=>`<div class=star-rating-examples>${a}${t}${u}${m}${d}${g}${h}${y}${x}${b}${p}</div>`)(r,r,r,r,r,r,r,r,r,r,r),ta=((a,t,u,m,d,g,h,y,x,b,p)=>`D/${a}&/${t}&/${u}&/${m}&/${d}&/${g}&/${h}&/${y}&/${x}&/${b}&/${p}&l`)(s,s,s,s,s,s,s,s,s,s,s);function ra(a){o(a.a),n(a.a,0),e(a.a,"0 stars"),l(a.a),i(a.a,{}),o(a.b),n(a.b,.5),e(a.b,"0.5 stars"),l(a.b),i(a.b,{}),o(a.c),n(a.c,1),e(a.c,"1 star"),l(a.c),i(a.c,{}),o(a.d),n(a.d,1.5),e(a.d,"1.5 stars"),l(a.d),i(a.d,{}),o(a.e),n(a.e,2),e(a.e,"2 stars"),l(a.e),i(a.e,{}),o(a.f),n(a.f,2.5),e(a.f,"2.5 stars"),l(a.f),i(a.f,{}),o(a.g),n(a.g,3),e(a.g,"3 stars"),l(a.g),i(a.g,{}),o(a.h),n(a.h,3.5),e(a.h,"3.5 stars"),l(a.h),i(a.h,{}),o(a.i),n(a.i,4),e(a.i,"4 stars"),l(a.i),i(a.i,{}),o(a.j),n(a.j,4.5),e(a.j,"4.5 stars"),l(a.j),i(a.j,{}),o(a.k),n(a.k,5),e(a.k,"5 stars"),l(a.k),i(a.k,{})}const sa=T("Y0XfOIE",aa,ta,ra),na=`<style>
  .star-rating-examples {
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
</style>

<div class="star-rating-examples">
  <evo-star-rating value=0 a11yText="0 stars"/>
  <evo-star-rating value=0.5 a11yText="0.5 stars"/>
  <evo-star-rating value=1 a11yText="1 star"/>
  <evo-star-rating value=1.5 a11yText="1.5 stars"/>
  <evo-star-rating value=2 a11yText="2 stars"/>
  <evo-star-rating value=2.5 a11yText="2.5 stars"/>
  <evo-star-rating value=3 a11yText="3 stars"/>
  <evo-star-rating value=3.5 a11yText="3.5 stars"/>
  <evo-star-rating value=4 a11yText="4 stars"/>
  <evo-star-rating value=4.5 a11yText="4.5 stars"/>
  <evo-star-rating value=5 a11yText="5 stars"/>
</div>
`,ma={title:"graphics & icons/evo-star-rating",component:X,parameters:{docs:{description:{component:H}}},argTypes:{value:{type:"number",control:{type:"range",min:0,max:5,step:.5},description:"The star rating value from 0 to 5. Supports half values (e.g. 2.5)."},a11yText:{type:{name:"string",required:!0},control:"text",description:'Accessible label for the star rating. English default to be overridden is `"Rating: ${value} out of 5"`.'},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) will be passed through"}}},v=_(K,N);v.args={value:3.5};const f=_(sa,na);v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(AllValuesTemplate, AllValuesCode)",...f.parameters?.docs?.source}}};const da=["Default","AllValues"];export{f as AllValues,v as Default,da as __namedExportsOrder,ma as default};
