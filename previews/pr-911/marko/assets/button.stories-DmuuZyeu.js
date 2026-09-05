import{b as a}from"./utils-DyU2_5R1.js";import{_ as s,a as r}from"./dom-C2BPWR5j.js";import{$ as i,a as l,b as p,c as u,B as d}from"./index-RsOYpWsi.js";import"./iframe-CZDi-Cmw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5ULCu8lW.js";import"./index-CUWbjRdR.js";import"./evo-icon-chevron-down-16-hr7sdh2n.js";const c=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Button styled with core classes.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-button/examples)
`,b=(t=>`<!>${t}<!>`)(u),m=(t=>`b/${t}&b`)(p),y=s("XpOqgXg","Button");function f(t){l(t.a)}const h=(t,n)=>i(t.a,{...n,content:y(t)}),g=r("ayoFQBk",b,m,f,h),v=`<evo-button ...input>
  Button
</evo-button>
`,x=(t=>`<!>${t}<!>`)(u),$=(t=>`b/${t}&b`)(p),w=s("E4E_75O","Button");function B(t){l(t.a)}const T=(t,n)=>i(t.a,{bodyState:"expand",variant:"form",...n,content:w(t)}),E=r("n3tUgdf",x,$,B,T),k=`<evo-button bodyState="expand" variant="form" ...input>
  Button
</evo-button>
`,A={title:"buttons/evo-button",component:d,parameters:{docs:{description:{component:c}}},argTypes:{href:{description:"URL for link behavior (switches to anchor tag)"},size:{type:"string",options:["regular (default)","large","small"],control:"inline-radio",description:"The size of the button"},priority:{type:"string",options:["primary","secondary","tertiary","none"],control:"inline-radio",description:"Button priority",table:{defaultValue:{summary:"secondary"}}},fluid:{type:"boolean",description:"If `true`, button will fill 100% of the container width.",control:"boolean",table:{defaultValue:{summary:"false"}}},borderless:{type:"boolean",description:"If `true`, border is removed.",control:"boolean",table:{defaultValue:{summary:"false"}}},bodyState:{type:"string",description:"when state is loading, adds progress spinner. when user interacts with button, reset should be called to reset aria-live state. default is none",options:["none","loading","reset","expand"],control:"inline-radio",table:{defaultValue:{summary:"none"}}},a11yLoadingText:{type:"string",description:"Localized aria label for button when `bodyState` is `loading`",control:"text"},disabled:{type:"boolean",description:"Disabled state",table:{defaultValue:{summary:"false"}}},variant:{type:"string",options:["standard (default)","destructive","form"],control:"inline-radio",description:"Additional style transformations beyond `priority`."},partiallyDisabled:{type:"boolean",description:"programmatically disabled, but remains keyboard focusable",control:"boolean",table:{defaultValue:{summary:"false"}}},transparent:{type:"boolean",description:"transparent background color (overrides `priority`).",control:"boolean",table:{defaultValue:{summary:"false"}}},fixedHeight:{type:"boolean",description:"fixes the height based on `size`",control:"boolean",table:{defaultValue:{summary:"false"}}},truncate:{type:"boolean",description:"used in conjunction with `fixedHeight`; truncates text to single line with ellipsis when text overflows",control:"boolean",table:{defaultValue:{summary:"false"}}},split:{type:"string",options:["none (default)","start","end"],control:"inline-radio",description:"Apply split button styles."},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},e=a(g,v),o=a(E,k);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ButtonTemplate, ButtonTemplateCode)",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ExpandButtonTemplate, ExpandButtonTemplateCode)",...o.parameters?.docs?.source}}};const O=["Default","ExpandButton"];export{e as Default,o as ExpandButton,O as __namedExportsOrder,A as default};
