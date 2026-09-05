import{t}from"./storybook-code-source-CCz6reEH.js";import{_ as n}from"./index-BmRbtDLs.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-badge
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

## ebay-badge Usage

\`\`\`marko
<ebay-badge number=5 aria-label="5 unread items"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-ebay-badge)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-ebay-badge)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-badge/examples)
`,o=a=>({input:a}),c={title:"graphics & icons/ebay-badge",component:n,parameters:{docs:{description:{component:s}}},argTypes:{number:{type:"number",description:"Used as the number to be placed in the badge"},"aria-label":{description:'A descriptive label of what the badge represents (e.g. "5 unread items")'}}},e=o.bind({});e.args={number:5,"aria-label":"5 unread items"};e.parameters={docs:{source:{code:t("ebay-badge",e.args)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args
})`,...e.parameters?.docs?.source}}};const m=["Standard"];export{e as Standard,m as __namedExportsOrder,c as default};
