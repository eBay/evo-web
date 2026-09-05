import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./storybook-code-source-DlBTenms.js";import{t as n}from"./utils-C7m-hPxw.js";import{n as r,t as i}from"./ebay-chip-D0ZVkKmJ.js";var a;function o(){return(o=e((()=>{a=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}var s,c,l,u,d;function f(){return(f=e((()=>{o(),r(),s=e=>({input:n(e)}),c={title:`building blocks/ebay-chip`,component:i,parameters:{docs:{description:{component:a}}},argTypes:{renderBody:{control:{type:`text`},description:`Text to be displayed in the chip`},a11yDeleteButtonText:{control:{type:`text`},description:`Localized, a11y text for the delete button, also determines if delete button is shown`},disabled:{control:{type:`boolean`},description:`Whether the chip delete button is disabled`},onDelete:{action:`on-delete`,description:`Triggered when delete button is clicked`,table:{category:`Events`,defaultValue:{summary:`[ Event, HTMLElement ]`}}}}},l=s.bind({}),l.args={renderBody:`chip text`},l.parameters={docs:{source:{code:t(`ebay-chip`,l.args)}}},u=s.bind({}),u.args={renderBody:`chip text`,a11yDeleteButtonText:`Delete`},u.parameters={docs:{source:{code:t(`ebay-chip`,u.args)}}},d=[`Default`,`WithDelete`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...u.parameters?.docs?.source}}}})))()}f();export{l as Default,u as WithDelete,d as __namedExportsOrder,c as default};