import{b as d}from"./utils-DyU2_5R1.js";import{a as o,b as e,z as _,d as b,i as h,e as v,f,_ as y}from"./dom-B_aQtK5Z.js";import"./iframe-DMl2D3CN.js";import"./preload-helper-PPVm8Dsz.js";const $=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

\`\`\`marko
<evo-signal status="trustworthy">
  Trustworthy
</evo-signal>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-signal)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-signal)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-signal/examples)
`,i="<span></span>",l=" b",w=()=>{},r=v(7,t=>f(t.a,[t.d,"signal",`signal--${t.g}`])),T=e(6,r),c=(t,s)=>T(t,s!==void 0?s:"neutral"),p=e(3,r),D=b("dpYQPjw",t=>h(t,"a")),u=e(5,t=>{_(t,"a",t.f,{class:1}),D(t)}),x=(t,s)=>{(({class:m,status:g,...n})=>u(t,n))(s),p(t,s.class),c(t,s.status)},S=o("rTePlTZ",i,l,w,x),k=i,E=(t=>`/${t}&`)(l),C=()=>{},z=y("gk0B_O1","Signal"),A=e(2,t=>{const s={...t.c,content:z(t)};p(t.a,s.class),c(t.a,s.status),u(t.a,(({class:m,status:g,...n})=>n)(s))}),B=o("mViDIBm",k,E,C,A),O=`<evo-signal ...input>
    Signal
</evo-signal>`,M={title:"graphics & icons/evo-signal",component:S,parameters:{docs:{description:{component:$}}},argTypes:{status:{type:"string",options:["neutral","trustworthy","recent","time-sensitive"],control:"radio",description:"Status of the signal",table:{defaultValue:{summary:"neutral"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},a=d(B,O);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...a.parameters?.docs?.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,M as default};
