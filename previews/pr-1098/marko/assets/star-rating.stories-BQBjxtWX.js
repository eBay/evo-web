import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as r,J as i,at as a,c as o,ct as s,i as c,s as l,t as u,w as d}from"./dom-BJr4MHiD.js";import{o as ee}from"./evo-icon-DsGMj8vM.js";import{a as te,i as f,n as p,r as m,t as ne}from"./evo-icon-star-dynamic-B3LxsXW-.js";var h;function g(){return(g=e((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>evo-star-rating</span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>DS v1.0.0</span>
</h1>

Displays a read-only star rating from 0 to 5, with half-star support.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-star-rating)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-star-rating)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-star-rating/examples)
`})))()}function _(){return(_=e((()=>{ee()})))()}function v(e){let t=Math.round(Math.max(0,Math.min(5,e))*2)/2,n=Math.floor(t);return t%1==0?`${n}`:`${n}-5`}function y(e){A(e,[5,0,1])}var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{c(),te(),_(),b=`<div role=img></div>`,x=e=>{p(e.a),ne(e.a,{class:`star-rating__icon`})},S=(e,t)=>l(e.a,`aria-label`,t),C=a(8,e=>S(e,e.f===void 0?`Rating: ${e.h} out of 5`:e.f)),w=n(7,e=>{l(e.a,`data-stars`,v(e.h)),C(e)}),T=(e,t)=>w(e,t===void 0?0:t),E=n(5,C),D=(e,t)=>o(e.a,[`star-rating`,t]),O=s(`cb0`,e=>r(e,`a`)),k=n(6,e=>{d(e,`a`,e.g,{role:1,"aria-label":1,class:1,"data-stars":1}),O(e)}),A=i(0,m,(e=>`/${e}&`)(f),x),j=(e,t)=>{(({a11yText:t,class:n,value:r,...i})=>k(e,i))(t),D(e,t.class),T(e,t.value),E(e,t.a11yText)},M=u(`cb`,b,` b`,y,j)})))()}function P(e){y(e.a)}var F,I,L,R;function z(){return(z=e((()=>{N(),c(),F=b,I=(e=>`/${e}&`)(` b`),L=n(2,e=>{E(e.a,e.c.a11yText),D(e.a,e.c.class),T(e.a,e.c.value),k(e.a,(({a11yText:e,class:t,value:n,...r})=>r)(e.c))}),R=u(`gjizQPA`,F,I,P,L)})))()}var B;function V(){return(V=e((()=>{B=`import type { Input as StarRatingInput } from "<evo-star-rating>";
export interface Input extends StarRatingInput {}
<evo-star-rating ...input/>
`})))()}function H(e){y(e.a),T(e.a,0),E(e.a,`0 stars`),D(e.a),k(e.a,{}),y(e.b),T(e.b,.5),E(e.b,`0.5 stars`),D(e.b),k(e.b,{}),y(e.c),T(e.c,1),E(e.c,`1 star`),D(e.c),k(e.c,{}),y(e.d),T(e.d,1.5),E(e.d,`1.5 stars`),D(e.d),k(e.d,{}),y(e.e),T(e.e,2),E(e.e,`2 stars`),D(e.e),k(e.e,{}),y(e.f),T(e.f,2.5),E(e.f,`2.5 stars`),D(e.f),k(e.f,{}),y(e.g),T(e.g,3),E(e.g,`3 stars`),D(e.g),k(e.g,{}),y(e.h),T(e.h,3.5),E(e.h,`3.5 stars`),D(e.h),k(e.h,{}),y(e.i),T(e.i,4),E(e.i,`4 stars`),D(e.i),k(e.i,{}),y(e.j),T(e.j,4.5),E(e.j,`4.5 stars`),D(e.j),k(e.j,{}),y(e.k),T(e.k,5),E(e.k,`5 stars`),D(e.k),k(e.k,{})}var U,W,G;function K(){return(K=e((()=>{N(),c(),U=((e,t,n,r,i,a,o,s,c,l,u)=>`<div class=star-rating-examples>${e}${t}${n}${r}${i}${a}${o}${s}${c}${l}${u}</div>`)(b,b,b,b,b,b,b,b,b,b,b),W=((e,t,n,r,i,a,o,s,c,l,u)=>`D/${e}&/${t}&/${n}&/${r}&/${i}&/${a}&/${o}&/${s}&/${c}&/${l}&/${u}&l`)(` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`,` b`),G=u(`Y0XfOIE`,U,W,H)})))()}var q;function J(){return(J=e((()=>{q=`<style>
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
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{g(),N(),z(),V(),K(),J(),Y={title:`graphics & icons/evo-star-rating`,component:M,parameters:{docs:{description:{component:h}}},argTypes:{value:{type:`number`,control:{type:`range`,min:0,max:5,step:.5},description:`The star rating value from 0 to 5. Supports half values (e.g. 2.5).`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'Accessible label for the star rating. English default to be overridden is `"Rating: ${value} out of 5"`. Pass `null` explicitly _only_ if alternative accessibility information is present, such as `aria-labelledby`.'},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) will be passed through"}}},X=t(R,B),X.args={value:3.5},Z=t(G,q),Q=[`Default`,`AllValues`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(AllValuesTemplate, AllValuesCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as AllValues,X as Default,Q as __namedExportsOrder,Y as default};