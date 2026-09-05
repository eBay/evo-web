import{t as a}from"./storybook-code-source-CCz6reEH.js";import{_ as o}from"./index-Bl6XLQ_q.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css             */import"./dynamic-tag-B3Rndxlm.js";import"./index-eAGEw84U.js";const r=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-fake-link
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Looks like a link, but under the hood is a button.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-fake-link)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-fake-link)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-fake-link/examples)
`,s=t=>({input:{...t,renderBody:function(n){n.html(t.renderBody)}}}),y={title:"buttons/ebay-fake-link",component:o,parameters:{docs:{description:{component:r}}},argTypes:{renderBody:{},disabled:{description:"",table:{category:"Toggles",defaultValue:{summary:"false"}}},variant:{description:"Should only be standalone when it is clear contextually that this is a link, regardless of styles",options:["inline","standalone"],control:{type:"select"},table:{defaultValue:{summary:"inline"}}},type:{control:{type:"select"},options:["button","submit","reset"],description:"The button type",table:{defaultValue:{summary:"button"}}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},e=s.bind({});e.args={renderBody:"Fake-Link",disabled:!1};e.parameters={docs:{source:{code:a("ebay-fake-link",e.args)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: function (out: any) {
      out.html(args.renderBody);
    } as any
  }
})`,...e.parameters?.docs?.source}}};const b=["Standard"];export{e as Standard,b as __namedExportsOrder,y as default};
