import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{i as n,k as r,t as i}from"./dom-CUxLGBQ2.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./evo-badge-4Gpydzdl.js";var p;function m(){return(m=e((()=>{p=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-badge
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

## evo-badge Usage

\`\`\`marko
<evo-badge number=5 a11yText="5 unread items"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://opensource.ebay.com/evo-web/marko/?path=/story/graphics-icons-evo-badge)
- [Storybook Docs](https://opensource.ebay.com/evo-web/marko/?path=/docs/graphics-icons-evo-badge)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-badge/examples)
`})))()}var h,g,_,v,y;function b(){return(b=e((()=>{o(),n(),h=(e=>`<!>${e}<!>`)(a),g=(e=>`b/${e}&b`)(`b%c`),_=(e,t)=>{s(e.a,t),f(e.a,`${t} unread items`)},v=r(2,e=>{u(e.a,e.c.class),l(e.a,e.c.type),c(e.a,(({a11yText:e,class:t,number:n,type:r,...i})=>i)(e.c)),_(e,e.c.number)}),y=i(`sSwz472`,h,g,0,v)})))()}var x;function S(){return(S=e((()=>{x=`import type { Input as BadgeInput } from "../index.marko";
export interface Input extends BadgeInput {}

<const/label=\`\${input.number} unread items\`>
<evo-badge ...input number=input.number a11yText=label/>
`})))()}function C(e){f(e.a,`new notification`),u(e.a),s(e.a),l(e.a),c(e.a,{})}var w,T,E;function D(){return(D=e((()=>{o(),n(),w=(e=>`<!>${e}<!>`)(a),T=(e=>`b/${e}&b`)(`b%c`),E=i(`fVb6$A2`,w,T,C)})))()}var O;function k(){return(k=e((()=>{O=`<evo-badge a11yText="new notification"/>
`})))()}var A,j,M,N;function P(){return(P=e((()=>{m(),o(),b(),S(),D(),k(),A={title:`graphics & icons/evo-badge`,component:d,parameters:{docs:{description:{component:p}}},argTypes:{number:{type:`number`,control:`number`,description:`Used as the number to be placed in the badge`},type:{type:`string`,options:[`menu`,`icon`],control:`inline-radio`,description:`The badge type`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'A descriptive label of what the badge represents (e.g. "5 unread items"). May be set to `null` only if accessibility is provided through other means.'},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`."}}},j=t(y,x,{number:5}),M=t(E,O,{}),N=[`Default`,`Empty`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  number: 5
})`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`buildExtensionTemplate(EmptyTemplate, EmptyTemplateCode, {})`,...M.parameters?.docs?.source}}}})))()}P();export{j as Default,M as Empty,N as __namedExportsOrder,A as default};