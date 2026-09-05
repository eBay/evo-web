import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-C7m-hPxw.js";import{n,t as r}from"./ebay-file-preview-card-group-9rwiXY25.js";var i;function a(){return(a=e((()=>{i=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-file-preview-card
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Group of file preview cards, primarily used alongside \`ebay-file-input\`.

## Compatibility

This component only works on Marko 5 and later.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-ebay-file-preview-card-group)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-ebay-file-preview-card-group)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-file-preview-card-group/examples)
`})))()}var o,s,c,l,u,d;function f(){return(f=e((()=>{a(),n(),o=e=>({input:t(e)}),s={title:`media/ebay-file-preview-card-group`,component:r,parameters:{docs:{description:{component:i}}},argTypes:{card:{name:`@card`,table:{category:`@attribute tags`},description:`A repeatable attribute tag for each file preview card`},a11yCancelUploadText:{type:`string`,control:{type:`text`},description:`Localized, a11y text for cancel upload button, applied to all cards`},deleteText:{type:`string`,control:{type:`text`},description:`Text for delete button, applied to all cards`},menuActions:{type:`array`,description:`List of menu actions, applied to all cards`,control:{type:`object`}},a11ySeeMoreText:{type:`string`,control:{type:`text`},description:`Localized, a11y text for see more button, applied to all cards`},"onMenu-action":{action:`on-menu-action`,description:`Triggered when an action is selected from the menu on a card`,table:{category:`Events`,defaultValue:{summary:`index, eventName, event /* from ebay-menu-button */`}}},onDelete:{action:`on-delete`,description:`Triggered when the delete button is clicked on a card`,table:{category:`Events`,defaultValue:{summary:`index`}}},onCancel:{action:`on-cancel`,description:`Triggered when the cancel button is clicked on a card`,table:{category:`Events`,defaultValue:{summary:`index`}}}}},c={name:`frog.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},l=o.bind({}),l.args={a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,card:[{file:{...c}},{file:{...c}},{file:{...c}}]},u=o.bind({}),u.args={a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,card:[...Array(35)].map(()=>({file:{...c}}))},d=[`Default`,`ManyCards`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...u.parameters?.docs?.source}}}})))()}f();export{l as Default,u as ManyCards,d as __namedExportsOrder,s as default};