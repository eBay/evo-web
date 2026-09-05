import{b as n}from"./utils-DyU2_5R1.js";import{b as a,_ as s}from"./dom-BCmBFxnG.js";import{$ as r,c as i,b as p,a as c,I as l}from"./index-C5i4FlRB.js";import{$ as b,a as u,b as d,c as m}from"./evo-icon-menu-24-BH3TiE1J.js";import"./iframe-neL4uaf-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-p2AooE6j.js";import"./index-CyuLV89p.js";import"./index-DV0LQG27.js";import"./evo-icon-chevron-down-16-DJqkLgc1.js";import"./index-DrLwciA-.js";import"./controllable.feat-HsyvwF1o.js";import"./controllable-input.feat-_IrcFlQw.js";import"./controllable-open.feat-rRFqX3BQ.js";import"./controllable-select.feat-H3sDHw1U.js";/* empty css                    */const h=(t=>`<!>${t}<!>`)(c),y=(t=>`b/${t}&b`)(p),g=t=>{d(t.a),m(t.a,{})},f=a("rVusg23",u,(t=>`/${t}&`)(b),g);function v(t){i(t.a)}const $=(t,o)=>r(t.a,{a11yText:"Menu",...o,content:f(t)}),x=s("E86Pxgv",h,y,v,$),T=`<evo-icon-button a11yText="Menu" ...input>
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
`,W={title:"buttons/evo-icon-button",component:l,parameters:{docs:{description:{component:w}}},argTypes:{badge:{description:"An optional badge attached to the button","@":{"<evo-badge> attributes":{description:"All attributes and event handlers from [the `<evo-badge>` tag](?path=/docs/graphics-icons-evo-badge--docs) will be passed through to `<@badge>`, _except_ `a11yText`. The a11y label for the badge should be included in `a11yText` for the button."}}},href:{type:"string",control:"text",description:"URL for link behavior (switches to `<a>` tag)"},transparent:{type:"boolean",control:"boolean",description:"Uses transparent styles for the button."},size:{options:["regular (default)","small","large"],control:"inline-radio",description:"Alternative size for the icon button"},priority:{options:["none (default)","primary","secondary","tertiary"],control:"inline-radio",description:"Priority of the button. Changes color and border."},a11yText:{type:{name:"string",required:!0},control:"text",description:"A descriptive label of what the icon button represents. May be set to `null` only if accessibility is provided through other means."},partiallyDisabled:{type:"boolean",control:"boolean",description:"programmatically disabled, but remains keyboard focusable"},onEscape:{action:"onEscape",description:"Triggered on escape key",table:{category:"Events"}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)"}}},e=n(x,T);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...e.parameters?.docs?.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,W as default};
