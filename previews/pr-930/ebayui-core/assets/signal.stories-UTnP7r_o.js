import{t as a}from"./storybook-code-source-CCz6reEH.js";import{_ as o}from"./index-Drz0WDSr.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dynamic-tag-B3Rndxlm.js";const s=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

\`\`\`marko
<ebay-signal status="trustworthy">
    Trustworthy
</ebay-signal>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-ebay-signal)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-ebay-signal)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-signal/examples)
`,r=n=>({input:{...n,renderBody:n.renderBody?t=>{t.html(n.renderBody)}:null}}),d={title:"graphics & icons/ebay-signal",component:o,parameters:{docs:{description:{component:s}}},argTypes:{status:{type:"enum",control:{type:"select"},options:["trustworthy","recent","time-sensitive","neutral"]}}},e=r.bind({});e.args={renderBody:"Signal Text"};e.parameters={docs:{source:{code:a("ebay-signal",e.args)}}};const l=["Standard"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...e.parameters?.docs?.source}}};export{e as Standard,l as __namedExportsOrder,d as default};
