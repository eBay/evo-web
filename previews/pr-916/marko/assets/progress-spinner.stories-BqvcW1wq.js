import{b as o}from"./utils-DyU2_5R1.js";import{_ as a,f as r}from"./dom-5LJ4Il7H.js";import{$ as i,b as p,c as l,d as c,e as m,a as u,P as d}from"./index-CKdOinKT.js";import"./iframe-DKc3M6i3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CotKNGF1.js";const g=i,b=(e=>`/${e}&`)(u),y=()=>{},h=r(2,e=>{const s={a11yText:"Busy",...e.c};p(e.a,s.a11yText),l(e.a,s.class),c(e.a,s.size),m(e.a,(({a11yText:T,class:$,size:z,...n})=>n)(s))}),f=a("jVeJV5z",g,b,y,h),v=`<evo-progress-spinner a11yText="Busy" ...input/>
`,x=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-progress-spinner
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<evo-progress-spinner size="large" aria-label="busy"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/progress-evo-progress-spinner)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/progress-evo-progress-spinner)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-progress-spinner/examples)
`,C={title:"progress/evo-progress-spinner",component:d,parameters:{docs:{description:{component:x}}},argTypes:{size:{options:["normal (default)","small","large"],control:"inline-radio",description:'size of spinner. Default is `24`, can be "small" (`20`) or "large" (`30`).'},a11yText:{type:{name:"string",required:!0},control:"text",description:'Localized, the accessibility label for the progress spinner. This is for internationalization. It should describe the purpose of the spinner, such as "Loading". May be set to `null` only if accessibility is provided through other means.'},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},t=o(f,v);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...t.parameters?.docs?.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,C as default};
