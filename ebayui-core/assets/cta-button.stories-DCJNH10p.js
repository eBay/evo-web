import{t as a}from"./storybook-code-source-CCz6reEH.js";import{_ as n}from"./index-CHHi-qUv.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-CdR04xAO.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./render-tag-B9T2mz-j.js";const r=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-cta-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-cta-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-cta-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-cta-button/examples)
`,s=e=>({input:{...e,renderBody:function(o){o.html(e.renderBody)}}}),g={title:"buttons/ebay-cta-button",component:n,parameters:{docs:{description:{component:r}}},argTypes:{renderBody:{},size:{type:"options",description:'Can be "large"',table:{defaultValue:{summary:"default"}},options:["default","large"]},href:{description:"link target",table:{defaultValue:{summary:""}}}}},t=s.bind({});t.args={renderBody:"CTA button",href:"http://www.ebay.com",size:"regular"};t.parameters={docs:{source:{code:a("ebay-cta-button",t.args)}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: function (out: any) {
      out.html(args.renderBody);
    } as any
  }
})`,...t.parameters?.docs?.source}}};const h=["Standard"];export{t as Standard,h as __namedExportsOrder,g as default};
