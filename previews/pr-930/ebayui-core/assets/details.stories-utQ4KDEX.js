import{t as a}from"./storybook-code-source-CCz6reEH.js";import{a as o}from"./utils-DWCsNc5l.js";import{_ as i}from"./index-BeDN17_6.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-D4_UUNUd.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./render-tag-B9T2mz-j.js";const n=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,r=t=>({input:o(t)}),h={title:"navigation & disclosure/ebay-details",component:i,parameters:{docs:{description:{component:n}}},argTypes:{renderBody:{},summary:{name:"@summary",description:"The body which will be wrapped as the details summary",table:{category:"@attribute tags"}},alignment:{type:"options",description:"The position of the details",table:{defaultValue:{summary:"regular"}},options:["regular","center"]},size:{type:"options",description:"Size of the details",table:{defaultValue:{summary:"regular"}},options:["regular","small"]},open:{type:"boolean",description:"Whether details is open",table:{defaultValue:{summary:"false"}}},as:{description:"The root element.",table:{defaultValue:{summary:"div"}}},leading:{name:"@leading",description:"Leading content before the label",table:{category:"@attribute tags"}},onToggle:{action:"on-toggle",description:"Triggered on toggle",table:{category:"Events",defaultValue:{summary:"{ originalEvent, open }"}}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},e=r.bind({});e.args={renderBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",summary:{renderBody:"Show me details!"},size:"regular",open:!1,as:"p"};e.parameters={docs:{source:{code:a("ebay-details",e.args)}}};const f=["Standard"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...e.parameters?.docs?.source}}};export{e as Standard,f as __namedExportsOrder,h as default};
