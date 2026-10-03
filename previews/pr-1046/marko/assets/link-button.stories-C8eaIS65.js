import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as r,T as i,at as a,c as o,ct as s,i as c,j as l,s as u,t as d}from"./dom-BJr4MHiD.js";import{t as f}from"./link-DJNtH3mE.js";var p;function m(){return(m=e((()=>{p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-link-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

Looks like a link, but under the hood is a button.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/marko/?path=/story/buttons-evo-link-button)
- [Storybook Docs](https://ebay.github.io/evo-web/marko/?path=/docs/buttons-evo-link-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-link-button/examples)
`})))()}function h(){return(h=e((()=>{f()})))()}var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{c(),h(),g=`<button></button>`,_=(e,t)=>u(e.a,`type`,t),v=(e,t)=>_(e,t===void 0?`button`:t),y=a(6,e=>o(e.a,[`fake-link`,e.f===`standalone`&&`standalone-link`,e.d])),b=n(3,y),x=n(5,y),S=s(`K0`,e=>r(e,`a`)),C=n(7,e=>{i(e,`a`,e.h,{class:1,type:1}),S(e)}),w=(e,t)=>{(({class:t,type:n,variant:r,...i})=>C(e,i))(t),b(e,t.class),v(e,t.type),x(e,t.variant)},T=d(`K`,g,` b`,0,w)})))()}var D,O,k,A,j;function M(){return(M=e((()=>{E(),c(),D=g,O=(e=>`/${e}&`)(` b`),k=l(`Xyn5rI1`,`View seller details`),A=n(2,e=>{let t={...e.c,content:k(e)};b(e.a,t.class),v(e.a,t.type),x(e.a,t.variant),C(e.a,(({class:e,type:t,variant:n,...r})=>r)(t))}),j=d(`QBFK1TP`,D,O,0,A)})))()}var N;function P(){return(P=e((()=>{N=`<evo-link-button ...input>View seller details</evo-link-button>
`})))()}var F,I,L;function R(){return(R=e((()=>{m(),E(),M(),P(),F={title:`buttons/evo-link-button`,component:T,parameters:{docs:{description:{component:p}}},argTypes:{variant:{type:`string`,options:[`inline`,`standalone`],control:`inline-radio`,description:"Adds the `standalone-link` class when `standalone`. Only use `standalone` where it is clear from context that this is a link",table:{defaultValue:{summary:`inline`}}},type:{type:`string`,options:[`button`,`submit`,`reset`],control:`inline-radio`,description:`The button type`,table:{defaultValue:{summary:`button`}}},disabled:{type:`boolean`,control:`boolean`,description:`Disabled state`,table:{defaultValue:{summary:`false`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},I=t(j,N),L=[`Default`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...I.parameters?.docs?.source}}}})))()}R();export{I as Default,L as __namedExportsOrder,F as default};