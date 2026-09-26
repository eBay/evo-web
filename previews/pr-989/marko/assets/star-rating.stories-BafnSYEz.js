import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{C as n,T as r,W as i,at as a,c as o,i as s,k as c,s as l,t as u,tt as d}from"./dom-CNWckxLY.js";import{a as ee,i as te,n as f,o as ne,r as re,t as ie}from"./evo-icon-COXCIbT1.js";var p;function m(){return(m=e((()=>{p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>evo-star-rating</span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>DS v1.0.0</span>
</h1>

Displays a read-only star rating from 0 to 5, with half-star support.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-star-rating)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-star-rating)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-star-rating/examples)
`})))()}function ae(e){f(e.a)}var h,g,_;function v(){return(v=e((()=>{ee(),h=re,g=(e=>`/${e}&`)(te),_=(e,t)=>ie(e.a,{...t,_name:`star-dynamic`,_type:`icon`,_symbol:`<symbol viewbox="0 0 16 16" id=icon-star-dynamic><!-- full star --><path d="M8.596 1.928a.625.625 0 0 0-1.19 0L6.055 6.136H1.62a.625.625 0 0 0-.346 1.146l3.56 2.364-1.366 4.035a.625.625 0 0 0 .953.71L8 11.862l3.578 2.528a.625.625 0 0 0 .953-.71l-1.366-4.036 3.55-2.364a.625.625 0 0 0-.346-1.145H9.955l-1.36-4.207Z" fill="var(--color-star-rating-full, transparent)" stroke="var(--color-star-rating-full-stroke, #707070)" stroke-width=1.25></path><!-- full star/half star clipped --><path d="M8.596 1.928a.625.625 0 0 0-1.19 0L6.055 6.136H1.62a.625.625 0 0 0-.346 1.146l3.56 2.364-1.366 4.035a.625.625 0 0 0 .953.71L8 11.862l3.578 2.528a.625.625 0 0 0 .953-.71l-1.366-4.036 3.55-2.364a.625.625 0 0 0-.346-1.145H9.955l-1.36-4.207Z" fill="var(--color-star-rating-half, transparent)" stroke="var(--color-star-rating-half-stroke, #707070)" stroke-width=1.25 clip-path="polygon(0 0, 50% 0, 50% 100%, 0 100%)"></path></symbol>`})})))()}function y(){return(y=e((()=>{ne()})))()}function oe(e){let t=Math.round(Math.max(0,Math.min(5,e))*2)/2,n=Math.floor(t);return t%1==0?`${n}`:`${n}-5`}function b(e){j(e,[5,0,1])}var x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{s(),v(),y(),x=`<div role=img></div>`,S=e=>{ae(e.a),_(e.a,{class:`star-rating__icon`})},C=(e,t)=>l(e.a,`aria-label`,t),w=d(8,e=>C(e,e.f===void 0?`Rating: ${e.h} out of 5`:e.f)),T=c(7,e=>{l(e.a,`data-stars`,oe(e.h)),w(e)}),E=(e,t)=>T(e,t===void 0?0:t),D=c(5,w),O=(e,t)=>o(e.a,[`star-rating`,t]),k=a(`X0`,e=>r(e,`a`)),A=c(6,e=>{n(e,`a`,e.g,{role:1,"aria-label":1,class:1,"data-stars":1}),k(e)}),j=i(0,h,(e=>`/${e}&`)(g),S),M=(e,t)=>{(({a11yText:t,class:n,value:r,...i})=>A(e,i))(t),O(e,t.class),E(e,t.value),D(e,t.a11yText)},N=u(`X`,x,` b`,b,M)})))()}function F(e){b(e.a)}var I,L,R,z;function B(){return(B=e((()=>{P(),s(),I=x,L=(e=>`/${e}&`)(` b`),R=c(2,e=>{D(e.a,e.c.a11yText),O(e.a,e.c.class),E(e.a,e.c.value),A(e.a,(({a11yText:e,class:t,value:n,...r})=>r)(e.c))}),z=u(`gjizQPA`,I,L,F,R)})))()}var V;function H(){return(H=e((()=>{V=`import type { Input as StarRatingInput } from "<evo-star-rating>";
export interface Input extends StarRatingInput {}
<evo-star-rating ...input/>
`})))()}function se(e){b(e.a),E(e.a,0),D(e.a,`0 stars`),O(e.a),A(e.a,{}),b(e.b),E(e.b,.5),D(e.b,`0.5 stars`),O(e.b),A(e.b,{}),b(e.c),E(e.c,1),D(e.c,`1 star`),O(e.c),A(e.c,{}),b(e.d),E(e.d,1.5),D(e.d,`1.5 stars`),O(e.d),A(e.d,{}),b(e.e),E(e.e,2),D(e.e,`2 stars`),O(e.e),A(e.e,{}),b(e.f),E(e.f,2.5),D(e.f,`2.5 stars`),O(e.f),A(e.f,{}),b(e.g),E(e.g,3),D(e.g,`3 stars`),O(e.g),A(e.g,{}),b(e.h),E(e.h,3.5),D(e.h,`3.5 stars`),O(e.h),A(e.h,{}),b(e.i),E(e.i,4),D(e.i,`4 stars`),O(e.i),A(e.i,{}),b(e.j),E(e.j,4.5),D(e.j,`4.5 stars`),O(e.j),A(e.j,{}),b(e.k),E(e.k,5),D(e.k,`5 stars`),O(e.k),A(e.k,{})}var U,W,G;function K(){return(K=e((()=>{P(),s(),U=((e,t,n,r,i,a,o,s,c,l,u)=>`<div class=star-rating-examples>${e}${t}${n}${r}${i}${a}${o}${s}${c}${l}${u}</div>`)(x,x,x,x,x,x,x,x,x,x,x),W=((e,t,n,r,i,a,o,s,c,l,u)=>`D/${e}&/${t}&/${n}&/${r}&/${i}&/${a}&/${o}&/${s}&/${c}&/${l}&/${u}&l`)(` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`),G=u(`Y0XfOIE`,U,W,se)})))()}var q;function J(){return(J=e((()=>{q=`<style>
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
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{m(),P(),B(),H(),K(),J(),Y={title:`graphics & icons/evo-star-rating`,component:N,parameters:{docs:{description:{component:p}}},argTypes:{value:{type:`number`,control:{type:`range`,min:0,max:5,step:.5},description:`The star rating value from 0 to 5. Supports half values (e.g. 2.5).`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'Accessible label for the star rating. English default to be overridden is `"Rating: ${value} out of 5"`. Pass `null` explicitly _only_ if alternative accessibility information is present, such as `aria-labelledby`.'},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) will be passed through"}}},X=t(z,V),X.args={value:3.5},Z=t(G,q),Q=[`Default`,`AllValues`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(AllValuesTemplate, AllValuesCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as AllValues,X as Default,Q as __namedExportsOrder,Y as default};