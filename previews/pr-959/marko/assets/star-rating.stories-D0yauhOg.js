import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{C as n,T as r,W as i,c as a,et as o,i as s,it as c,k as l,s as u,t as d}from"./dom-CrmgVQ1h.js";import{a as ee,i as te,n as f,o as ne,r as re,t as ie}from"./evo-icon-CFoPYBpm.js";var p;function m(){return(m=e((()=>{p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>evo-star-rating</span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>DS v1.0.0</span>
</h1>

Displays a read-only star rating from 0 to 5, with half-star support.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-star-rating)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-star-rating)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-star-rating/examples)
`})))()}function h(e){f(e.a)}var g,_,v;function y(){return(y=e((()=>{ee(),g=re,_=(e=>`/${e}&`)(te),v=(e,t)=>ie(e.a,{...t,_name:`star-dynamic`,_type:`icon`,_symbol:`<symbol viewbox="0 0 16 16" id=icon-star-dynamic><!-- full star --><path d="M8.596 1.928a.625.625 0 0 0-1.19 0L6.055 6.136H1.62a.625.625 0 0 0-.346 1.146l3.56 2.364-1.366 4.035a.625.625 0 0 0 .953.71L8 11.862l3.578 2.528a.625.625 0 0 0 .953-.71l-1.366-4.036 3.55-2.364a.625.625 0 0 0-.346-1.145H9.955l-1.36-4.207Z" fill="var(--color-star-rating-full, transparent)" stroke="var(--color-star-rating-full-stroke, #707070)" stroke-width=1.25></path><!-- full star/half star clipped --><path d="M8.596 1.928a.625.625 0 0 0-1.19 0L6.055 6.136H1.62a.625.625 0 0 0-.346 1.146l3.56 2.364-1.366 4.035a.625.625 0 0 0 .953.71L8 11.862l3.578 2.528a.625.625 0 0 0 .953-.71l-1.366-4.036 3.55-2.364a.625.625 0 0 0-.346-1.145H9.955l-1.36-4.207Z" fill="var(--color-star-rating-half, transparent)" stroke="var(--color-star-rating-half-stroke, #707070)" stroke-width=1.25 clip-path="polygon(0 0, 50% 0, 50% 100%, 0 100%)"></path></symbol>`})})))()}function b(){return(b=e((()=>{ne()})))()}function ae(e){let t=Math.round(Math.max(0,Math.min(5,e))*2)/2,n=Math.floor(t);return t%1==0?`${n}`:`${n}-5`}function x(e){M(e,[5,0,1])}var S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{s(),y(),b(),S=`<div role=img></div>`,C=e=>{h(e.a),v(e.a,{class:`star-rating__icon`})},w=(e,t)=>u(e.a,`aria-label`,t),T=o(8,e=>w(e,e.f===void 0?`Rating: ${e.h} out of 5`:e.f)),E=l(7,e=>{u(e.a,`data-stars`,ae(e.h)),T(e)}),D=(e,t)=>E(e,t===void 0?0:t),O=l(5,T),k=(e,t)=>a(e.a,[`star-rating`,t]),A=c(`W0`,e=>r(e,`a`)),j=l(6,e=>{n(e,`a`,e.g,{role:1,"aria-label":1,class:1,"data-stars":1}),A(e)}),M=i(0,g,(e=>`/${e}&`)(_),C),N=(e,t)=>{(({a11yText:t,class:n,value:r,...i})=>j(e,i))(t),k(e,t.class),D(e,t.value),O(e,t.a11yText)},P=d(`W`,S,` b`,x,N)})))()}function oe(e){x(e.a)}var I,L,R,z;function B(){return(B=e((()=>{F(),s(),I=S,L=(e=>`/${e}&`)(` b`),R=l(2,e=>{O(e.a,e.c.a11yText),k(e.a,e.c.class),D(e.a,e.c.value),j(e.a,(({a11yText:e,class:t,value:n,...r})=>r)(e.c))}),z=d(`gjizQPA`,I,L,oe,R)})))()}var V;function H(){return(H=e((()=>{V=`import type { Input as StarRatingInput } from "<evo-star-rating>";
export interface Input extends StarRatingInput {}
<evo-star-rating ...input/>
`})))()}function se(e){x(e.a),D(e.a,0),O(e.a,`0 stars`),k(e.a),j(e.a,{}),x(e.b),D(e.b,.5),O(e.b,`0.5 stars`),k(e.b),j(e.b,{}),x(e.c),D(e.c,1),O(e.c,`1 star`),k(e.c),j(e.c,{}),x(e.d),D(e.d,1.5),O(e.d,`1.5 stars`),k(e.d),j(e.d,{}),x(e.e),D(e.e,2),O(e.e,`2 stars`),k(e.e),j(e.e,{}),x(e.f),D(e.f,2.5),O(e.f,`2.5 stars`),k(e.f),j(e.f,{}),x(e.g),D(e.g,3),O(e.g,`3 stars`),k(e.g),j(e.g,{}),x(e.h),D(e.h,3.5),O(e.h,`3.5 stars`),k(e.h),j(e.h,{}),x(e.i),D(e.i,4),O(e.i,`4 stars`),k(e.i),j(e.i,{}),x(e.j),D(e.j,4.5),O(e.j,`4.5 stars`),k(e.j),j(e.j,{}),x(e.k),D(e.k,5),O(e.k,`5 stars`),k(e.k),j(e.k,{})}var U,W,G;function K(){return(K=e((()=>{F(),s(),U=((e,t,n,r,i,a,o,s,c,l,u)=>`<div class=star-rating-examples>${e}${t}${n}${r}${i}${a}${o}${s}${c}${l}${u}</div>`)(S,S,S,S,S,S,S,S,S,S,S),W=((e,t,n,r,i,a,o,s,c,l,u)=>`D/${e}&/${t}&/${n}&/${r}&/${i}&/${a}&/${o}&/${s}&/${c}&/${l}&/${u}&l`)(` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`),G=d(`Y0XfOIE`,U,W,se)})))()}var q;function J(){return(J=e((()=>{q=`<style>
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
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{m(),F(),B(),H(),K(),J(),Y={title:`graphics & icons/evo-star-rating`,component:P,parameters:{docs:{description:{component:p}}},argTypes:{value:{type:`number`,control:{type:`range`,min:0,max:5,step:.5},description:`The star rating value from 0 to 5. Supports half values (e.g. 2.5).`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'Accessible label for the star rating. English default to be overridden is `"Rating: ${value} out of 5"`.'},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) will be passed through"}}},X=t(z,V),X.args={value:3.5},Z=t(G,q),Q=[`Default`,`AllValues`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(AllValuesTemplate, AllValuesCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as AllValues,X as Default,Q as __namedExportsOrder,Y as default};