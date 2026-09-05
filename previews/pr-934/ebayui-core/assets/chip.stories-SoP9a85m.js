import{t as o}from"./storybook-code-source-CCz6reEH.js";import{a as n}from"./utils-DWCsNc5l.js";import{_ as s}from"./index-Lfvu3Z-D.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-CZk20XcS.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./render-tag-B9T2mz-j.js";const i=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A discrete highlighted value.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-chip/examples)
`,a=r=>({input:n(r)}),x={title:"building blocks/ebay-chip",component:s,parameters:{docs:{description:{component:i}}},argTypes:{renderBody:{control:{type:"text"},description:"Text to be displayed in the chip"},a11yDeleteButtonText:{control:{type:"text"},description:"Localized, a11y text for the delete button, also determines if delete button is shown"},disabled:{control:{type:"boolean"},description:"Whether the chip delete button is disabled"},onDelete:{action:"on-delete",description:"Triggered when delete button is clicked",table:{category:"Events",defaultValue:{summary:"[ Event, HTMLElement ]"}}}}},e=a.bind({});e.args={renderBody:"chip text"};e.parameters={docs:{source:{code:o("ebay-chip",e.args)}}};const t=a.bind({});t.args={renderBody:"chip text",a11yDeleteButtonText:"Delete"};t.parameters={docs:{source:{code:o("ebay-chip",t.args)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...t.parameters?.docs?.source}}};const f=["Default","WithDelete"];export{e as Default,t as WithDelete,f as __namedExportsOrder,x as default};
