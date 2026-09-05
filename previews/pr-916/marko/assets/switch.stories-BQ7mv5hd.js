import{b as c}from"./utils-DyU2_5R1.js";import{_ as r,f as p}from"./dom-CK48op32.js";import{$ as d,a as m,b,c as u,C as h}from"./index-BqGFK4ke.js";import"./iframe-BNpSE5cT.js";import"./preload-helper-PPVm8Dsz.js";import"./controllable-input.feat-BVHUjJDH.js";const f=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-switch
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-switch)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-switch)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-switch/examples)
`,_=d,$=(e=>`/${e}&`)(u),w=()=>{},g=p(2,e=>{m(e.a,e.c.class),b(e.a,(({class:t,...n})=>n)(e.c))}),v=r("WIj620c",_,$,w,g),D=`<evo-switch ...input/>
`,y=(e=>`<span class=field><label class="field__label field__label--start" for=switch>Option</label>${e}</span>`)(d),T=(e=>`Db/${e}&l`)(u),k=()=>{},x=p(2,e=>{const t={...e.c,id:"switch"};m(e.a,t.class),b(e.a,(({class:n,...i})=>i)(t))}),C=r("HfITpZ1",y,T,k,x),E=`<span class="field">
  <label class="field__label field__label--start" for="switch">
    Option
  </label>
  <evo-switch ...input id="switch"/>
</span>
`,L=(e=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=switch>Option</label>${e}</span>`)(d),S=(e=>`Db/${e}&l`)(u),W=()=>{},I=p(2,e=>{const t={...e.c,disabled:!0,id:"switch"};m(e.a,t.class),b(e.a,(({class:n,...i})=>i)(t))}),O=r("PlsrXPd",L,S,W,I),j=`<span class="field">
  <label
    class="field__label field__label--start field__label--disabled"
    for="switch">
    Option
  </label>
  <evo-switch ...input disabled id="switch"/>
</span>
`,B={title:"form input/evo-switch",component:h,parameters:{docs:{description:{component:f}}},argTypes:{checked:{controllable:!0,type:"boolean",control:"boolean",description:"The checked/selected state."},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},s=c(v,D),a=c(C,E),l=c(O,j),o={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const U=["Default","WithLabel","Disabled","Isolated"];export{s as Default,l as Disabled,o as Isolated,a as WithLabel,U as __namedExportsOrder,B as default};
