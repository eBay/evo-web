import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./storybook-code-source-DlBTenms.js";import{n,t as r}from"./ebay-progress-spinner-eCj3T0Ha.js";var i;function a(){return(a=e((()=>{i=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-spinner
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<ebay-progress-spinner size="large" aria-label="busy"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/progress-ebay-progress-spinner)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/progress-ebay-progress-spinner)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-progress-spinner/examples)
`})))()}var o,s,c,l;function u(){return(u=e((()=>{a(),n(),o=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),s={title:`progress/ebay-progress-spinner`,component:r,parameters:{docs:{description:{component:i}}},argTypes:{size:{options:[`small`,`large`],control:{type:`select`},description:`size of spinner - can be "small", "large". default is small `},ariaLabel:{control:{type:`text`},description:`Description for accessibility`}}},c=o.bind({}),c.args={ariaLabel:`loading`},c.parameters={docs:{source:{code:`<ebay-progress-spinner aria-label="Busy"/>`}}},c.parameters={docs:{source:{code:t(`ebay-progress-spinner`,c.args)}}},l=[`Loading`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...c.parameters?.docs?.source}}}})))()}u();export{c as Loading,l as __namedExportsOrder,s as default};