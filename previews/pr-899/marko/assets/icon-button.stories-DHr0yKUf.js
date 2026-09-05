import{b as n}from"./utils-DyU2_5R1.js";import{_ as a,a as r}from"./dom-TuxgW4Cw.js";import{$ as s,a as i,b as p,c,I as l}from"./index-CS7I55Y_.js";import{$ as u,a as b,b as m,c as d}from"./evo-icon-menu-24-CpGk5Rs3.js";import"./iframe-CqOKIB7R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDet7eI1.js";import"./index-8qYnZTSO.js";import"./evo-icon-spinner-24-VIGeOWV8.js";import"./index-DV25PJpD.js";import"./evo-icon-chevron-down-16-leBCgr6L.js";import"./index-CzQKX1bI.js";import"./controllable.feat-BQBTTchw.js";import"./controllable-input.feat-B1hLslMI.js";import"./controllable-open.feat-DqfHMwIQ.js";import"./controllable-select.feat-CRqABgS3.js";/* empty css                    */const h=(t=>`<!>${t}<!>`)(c),y=(t=>`b/${t}&b`)(p),g=t=>{m(t.a),d(t.a,{})},f=a("rVusg23",b,(t=>`/${t}&`)(u),g);function v(t){i(t.a)}const $=(t,o)=>s(t.a,{a11yText:"Menu",...o,content:f(t)}),x=r("E86Pxgv",h,y,v,$),T=`<evo-icon-button
    a11yText="Menu"
    ...input
>
    <evo-icon-menu-24/>
</evo-icon-button>
`,w=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-icon-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

This is a circular button with an icon only.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-icon-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-icon-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-icon-button/examples)
`,j={title:"buttons/evo-icon-button",component:l,parameters:{docs:{description:{component:w}}},argTypes:{badge:{description:"An optional badge attached to the button","@":{"<evo-badge> attributes":{description:"All attributes and event handlers from [the `<evo-badge>` tag](?path=/docs/graphics-icons-evo-badge--docs) will be passed through to `<@badge>`, _except_ `a11yText`. The a11y label for the badge should be included in `a11yText` for the button."}}},href:{type:"string",control:"text",description:"URL for link behavior (switches to `<a>` tag)"},transparent:{type:"boolean",control:"boolean",description:"Uses transparent styles for the button."},size:{options:["regular (default)","small","large"],control:"inline-radio",description:"Alternative size for the icon button"},priority:{options:["none (default)","primary","secondary","tertiary"],control:"inline-radio",description:"Priority of the button. Changes color and border."},a11yText:{type:{name:"string",required:!0},control:"text",description:"A descriptive label of what the icon button represents. May be set to `null` only if accessibility is provided through other means."},partiallyDisabled:{type:"boolean",control:"boolean",description:"programmatically disabled, but remains keyboard focusable"},onEscape:{action:"onEscape",description:"Triggered on escape key",table:{category:"Events"}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)"}}},e=n(x,T);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...e.parameters?.docs?.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,j as default};
