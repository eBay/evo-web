import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./storybook-code-source-DlBTenms.js";import{n,t as r}from"./ebay-fake-link-BmUK378k.js";var i;function a(){return(a=e((()=>{i=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}var o,s,c,l;function u(){return(u=e((()=>{n(),a(),o=e=>({input:{...e,renderBody:function(t){t.html(e.renderBody)}}}),s={title:`buttons/ebay-fake-link`,component:r,parameters:{docs:{description:{component:i}}},argTypes:{renderBody:{},disabled:{description:``,table:{category:`Toggles`,defaultValue:{summary:`false`}}},variant:{description:`Should only be standalone when it is clear contextually that this is a link, regardless of styles`,options:[`inline`,`standalone`],control:{type:`select`},table:{defaultValue:{summary:`inline`}}},type:{control:{type:`select`},options:[`button`,`submit`,`reset`],description:`The button type`,table:{defaultValue:{summary:`button`}}},onClick:{action:`on-click`,description:`Triggered on click`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}},onEscape:{action:`on-escape`,description:`Triggered on escape key`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}},onFocus:{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}},onBlur:{action:`on-blur`,description:`Triggered on blur`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}}}},c=o.bind({}),c.args={renderBody:`Fake-Link`,disabled:!1},c.parameters={docs:{source:{code:t(`ebay-fake-link`,c.args)}}},l=[`Standard`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: function (out: any) {
      out.html(args.renderBody);
    } as any
  }
})`,...c.parameters?.docs?.source}}}})))()}u();export{c as Standard,l as __namedExportsOrder,s as default};