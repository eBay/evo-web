import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{i as n,k as r,t as i}from"./dom-CrmgVQ1h.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./evo-badge-Cj46mk1c.js";var p;function m(){return(m=e((()=>{p=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-badge
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

## evo-badge Usage

\`\`\`marko
<evo-badge number=5 aria-label="5 unread items"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-badge)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-badge)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-badge/examples)
`})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{o(),n(),h=(e=>`<!>${e}<!>`)(a),g=(e=>`b/${e}&b`)(`b%c`),_=(e,t)=>f(e.a,t),v=(e,t)=>{s(e.a,t),_(e,`${t} unread items`)},y=r(2,e=>{u(e.a,e.c.class),l(e.a,e.c.type),c(e.a,(({a11yText:e,class:t,number:n,type:r,...i})=>i)(e.c)),v(e,e.c.number)}),b=i(`DT3qf32`,h,g,0,y)})))()}var S;function C(){return(C=e((()=>{S=`import type { Input as BadgeInput } from "../index.marko";
export interface Input extends BadgeInput {}

<const/label=\`\${input.number} unread items\`>
<evo-badge ...input number=input.number a11yText=label/>
`})))()}function w(e){f(e.a,`new`),u(e.a),s(e.a),l(e.a),c(e.a,{})}var T,E,D;function O(){return(O=e((()=>{o(),n(),T=(e=>`<!>${e}<!>`)(a),E=(e=>`b/${e}&b`)(`b%c`),D=i(`qWKZ9v2`,T,E,w)})))()}var k;function A(){return(A=e((()=>{k=`<evo-badge a11yText="new"/>
`})))()}var j,M,N,P;function F(){return(F=e((()=>{m(),o(),x(),C(),O(),A(),j={title:`graphics & icons/evo-badge`,component:d,parameters:{docs:{description:{component:p}}},argTypes:{number:{type:`number`,control:`number`,description:`Used as the number to be placed in the badge`},type:{type:`string`,options:[`menu`,`icon`],control:`inline-radio`,description:`The badge type`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'A descriptive label of what the badge represents (e.g. "5 unread items"). May be set to `null` only if accessibility is provided through other means.'},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`."}}},M=t(b,S,{number:5}),N=t(D,k,{}),P=[`Default`,`Empty`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  number: 5
})`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`buildExtensionTemplate(EmptyTemplate, EmptyTemplateCode, {})`,...N.parameters?.docs?.source}}}})))()}F();export{M as Default,N as Empty,P as __namedExportsOrder,j as default};