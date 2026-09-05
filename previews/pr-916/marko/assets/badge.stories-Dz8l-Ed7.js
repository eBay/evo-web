import{b as s}from"./utils-DyU2_5R1.js";import{_ as o,f as b}from"./dom-Dsj3KrDg.js";import{d as r,b as p,e as i,a as m,$ as l,f as c,c as d,B as g}from"./index-fmJzfPD_.js";import"./iframe-IzysnPYE.js";import"./preload-helper-PPVm8Dsz.js";const y=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,h=(e=>`<!>${e}<!>`)(l),f=(e=>`b/${e}&b`)(m),T=()=>{},x=(e,t)=>d(e.a,t),v=(e,t)=>{c(e.a,t),x(e,`${t} unread items`)},$=b(2,e=>{r(e.a,e.c.class),p(e.a,e.c.type),i(e.a,(({a11yText:t,class:B,number:I,type:q,...u})=>u)(e.c)),v(e,e.c.number)}),E=o("DT3qf32",h,f,T,$),w=`import type { Input as BadgeInput } from "../index.marko";
export interface Input extends BadgeInput {}

<const/label=\`\${input.number} unread items\`>
<evo-badge ...input number=input.number a11yText=label/>
`,D=(e=>`<!>${e}<!>`)(l),k=(e=>`b/${e}&b`)(m);function C(e){d(e.a,"new"),r(e.a),c(e.a),p(e.a),i(e.a,{})}const S=o("qWKZ9v2",D,k,C),_=`<evo-badge a11yText="new"/>
`,L={title:"graphics & icons/evo-badge",component:g,parameters:{docs:{description:{component:y}}},argTypes:{number:{type:"number",control:"number",description:"Used as the number to be placed in the badge"},type:{type:"string",options:["menu","icon"],control:"inline-radio",description:"The badge type"},a11yText:{type:{name:"string",required:!0},control:"text",description:'A descriptive label of what the badge represents (e.g. "5 unread items"). May be set to `null` only if accessibility is provided through other means.'},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`."}}},a=s(E,w,{number:5}),n=s(S,_,{});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  number: 5
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(EmptyTemplate, EmptyTemplateCode, {})",...n.parameters?.docs?.source}}};const R=["Default","Empty"];export{a as Default,n as Empty,R as __namedExportsOrder,L as default};
