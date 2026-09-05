import{t as I}from"./storybook-code-source-CCz6reEH.js";import{_ as l}from"./index-CjSj6Ml2.js";import{v as d,b,_,c as h}from"./defineComponent-B-Bg3Ud2.js";import{_ as u}from"./const-element-Ea3wmYuQ.js";import{_ as g}from"./render-tag-B9T2mz-j.js";import"./style-value-D9hyxyYb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-switch
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-switch)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-switch)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-switch/examples)
`,p="CPah$TH",r=d.t(p),S=u("label",{class:"field__label field__label--start",for:"switch"},1).t("Option");b.r(p,()=>r);const f={};r._=_(function(e,t,c,o,w,k){t.be("span",{class:"field"},"0",o,null,1),t.n(S,o),g(l,{...e,id:"switch"},t,c,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:p},f);r.Component=h(f,r._);const m="sCZCvPz",i=d.t(m),v=u("label",{class:"field__label field__label--start field__label--disabled",for:"switch"},1).t("Option");b.r(m,()=>i);const y={};i._=_(function(e,t,c,o,w,k){t.be("span",{class:"field"},"0",o,null,1),t.n(v,o),g(l,{...e,disabled:!0,id:"switch"},t,c,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:m},y);i.Component=h(y,i._);const C=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;
class {}

<span class="field">
    <label class="field__label field__label--start" for="switch">
        Option
    </label>
    <ebay-switch ...input id="switch" on-change("emit", "change")/>
</span>
`,T=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;
class {}

<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="switch"
    >
        Option
    </label>
    <ebay-switch ...input disabled id="switch" on-change("emit", "change")/>
</span>
`,E=e=>({input:e}),j={title:"form input/ebay-switch",component:l,parameters:{docs:{description:{component:x}}},argTypes:{onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}}}},n=e=>({input:e,component:r});n.args={};n.parameters={docs:{source:{code:C}}};const s=e=>({input:e,component:i});s.args={};s.parameters={docs:{source:{code:T}}};const a=E.bind({});a.args={};a.parameters={docs:{source:{code:I("ebay-switch",a.args)}}};const B=["WithLabel","Disabled","Isolated"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args
})`,...a.parameters?.docs?.source}}};export{s as Disabled,a as Isolated,n as WithLabel,B as __namedExportsOrder,j as default};
