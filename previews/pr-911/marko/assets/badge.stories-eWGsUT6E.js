import{b as s}from"./utils-DyU2_5R1.js";import{a as o,b as u}from"./dom-C2BPWR5j.js";import{$ as r,a as p,b as i,c as m,d as l,e as c,f as b,B as g}from"./index-D4cQIC5K.js";import"./iframe-CZDi-Cmw.js";import"./preload-helper-PPVm8Dsz.js";const y=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,h=(e=>`<!>${e}<!>`)(l),f=(e=>`b/${e}&b`)(m),T=()=>{},x=(e,t)=>b(e.a,t),v=(e,t)=>{c(e.a,t),x(e,`${t} unread items`)},$=u(2,e=>{r(e.a,e.c.class),p(e.a,e.c.type),i(e.a,(({a11yText:t,class:I,number:_,type:q,...d})=>d)(e.c)),v(e,e.c.number)}),E=o("DT3qf32",h,f,T,$),w=`import type { Input as BadgeInput } from "../index.marko";
export interface Input extends BadgeInput {}

<const/label=\`\${input.number} unread items\`>
<evo-badge ...input number=input.number a11yText=label/>
`,D=(e=>`<!>${e}<!>`)(l),k=(e=>`b/${e}&b`)(m);function C(e){b(e.a,"new"),r(e.a),c(e.a),p(e.a),i(e.a,{})}const S=o("qWKZ9v2",D,k,C),B=`<evo-badge a11yText="new"/>
`,L={title:"graphics & icons/evo-badge",component:g,parameters:{docs:{description:{component:y}}},argTypes:{number:{type:"number",control:"number",description:"Used as the number to be placed in the badge"},type:{type:"string",options:["menu","icon"],control:"inline-radio",description:"The badge type"},a11yText:{type:{name:"string",required:!0},control:"text",description:'A descriptive label of what the badge represents (e.g. "5 unread items"). May be set to `null` only if accessibility is provided through other means.'},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through, except `role`."}}},a=s(E,w,{number:5}),n=s(S,B,{});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  number: 5
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(EmptyTemplate, EmptyTemplateCode, {})",...n.parameters?.docs?.source}}};const R=["Default","Empty"];export{a as Default,n as Empty,R as __namedExportsOrder,L as default};
