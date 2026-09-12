import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./storybook-code-source-DlBTenms.js";import{t as n}from"./utils-C7m-hPxw.js";import{n as r,t as i}from"./ebay-details-MfZ6wWWL.js";var a;function o(){return(o=e((()=>{a=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-details
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Details component which expands and collapses extra text on click

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-details)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-details)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-details/examples)
`})))()}var s,c,l,u;function d(){return(d=e((()=>{o(),r(),s=e=>({input:n(e)}),c={title:`navigation & disclosure/ebay-details`,component:i,parameters:{docs:{description:{component:a}}},argTypes:{renderBody:{},summary:{name:`@summary`,description:`The body which will be wrapped as the details summary`,table:{category:`@attribute tags`}},alignment:{type:`options`,description:`The position of the details`,table:{defaultValue:{summary:`regular`}},options:[`regular`,`center`]},size:{type:`options`,description:`Size of the details`,table:{defaultValue:{summary:`regular`}},options:[`regular`,`small`]},open:{type:`boolean`,description:`Whether details is open`,table:{defaultValue:{summary:`false`}}},as:{description:`The root element.`,table:{defaultValue:{summary:`div`}}},leading:{name:`@leading`,description:`Leading content before the label`,table:{category:`@attribute tags`}},onToggle:{action:`on-toggle`,description:`Triggered on toggle`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, open }`}}},onClick:{action:`on-click`,description:`Triggered on click`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}}}},l=s.bind({}),l.args={renderBody:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,summary:{renderBody:`Show me details!`},size:`regular`,open:!1,as:`p`},l.parameters={docs:{source:{code:t(`ebay-details`,l.args)}}},u=[`Standard`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...l.parameters?.docs?.source}}}})))()}d();export{l as Standard,u as __namedExportsOrder,c as default};