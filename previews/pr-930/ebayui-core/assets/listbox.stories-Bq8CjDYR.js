import{b as d,a as u}from"./utils-DWCsNc5l.js";import{t as b}from"./storybook-code-source-CCz6reEH.js";import{_ as p}from"./index-CGb72_gT.js";import{v as y,b as x,_ as g,c as h}from"./defineComponent-B-Bg3Ud2.js";import{a as t}from"./attr-tag-Dvq4QMvY.js";import{_ as f}from"./render-tag-B9T2mz-j.js";import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CiJctCOb.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./of-fallback-DrWEmKV1.js";import"./index-bvC3UV1n.js";import"./index-VUB2KSuG.js";import"./index-BO82MG2q.js";import"./index-DptDIuuf.js";import"./index-By62WOW2.js";import"./index-eAGEw84U.js";const _=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-listbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

Used to generate a menu portion of listbox. For use with a button which hides and shows the menu use \`ebay-listbox-button\` instead.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-listbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-listbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-listbox/examples)
`,r="DehoTOv",i=y.t(r);x.r(r,()=>i);const l={};i._=g(function(s,c,m,a,w,k){f(p,t.i(()=>{t.r("option",t.i(()=>{t.a("description",{renderBody:o=>{o.t("Option 1 extra info",a)}})},{value:"1",text:"Option 1"})),t.r("option",t.i(()=>{t.a("description",{renderBody:o=>{o.t("Option 2 extra info",a)}})},{value:"2",text:"Option 2"})),t.r("option",t.i(()=>{t.a("description",{renderBody:o=>{o.t("Option 3 extra info",a)}})},{value:"3",text:"Option 3"}))},{name:"formFieldName"}),c,m,"0")},{t:r,i:!0},l);i.Component=h(l,i._);const v=`<ebay-listbox name="formFieldName">
    <@option value="1" text="Option 1">
        <@description>Option 1 extra info</@description>
    </@option>
    <@option value="2" text="Option 2">
        <@description>Option 2 extra info</@description>
    </@option>
    <@option value="3" text="Option 3">
        <@description>Option 3 extra info</@description>
    </@option>
</ebay-listbox>
`,O=s=>({input:u(s)}),A={title:"building blocks/ebay-listbox",component:p,parameters:{docs:{description:{component:_}}},argTypes:{name:{control:{type:"text"},description:"used for the `name` attribute of the native `<select>`"},listSelection:{table:{defaultValue:{summary:"manual"}},description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",option:["manual","auto"],type:"select"},selected:{description:"allows you to set the selected index option to `selected`"},a11ySelectedText:{type:"text",control:{type:"text"},description:"Localized text to be read by screen readers when an option is selected",table:{defaultValue:{summary:"selected"}}},option:{name:"@option",table:{category:"@attribute tags"}},text:{control:{type:"text"},table:{category:"@option attributes"}},value:{control:{type:"text"},table:{category:"@option attributes"}},disabled:{control:{type:"boolean"},table:{category:"@option attributes"}},typeaheadTimeoutLength:{control:{type:"number"},description:"Timeout length in milliseconds for typeahead functionality",table:{defaultValue:{summary:"1300"}}},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, index, selected, wasClicked }"}}}}},e=O.bind({});e.args={option:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}]};e.parameters={docs:{source:{code:b("ebay-listbox",e.args)}}};const n=d(i,v),G=["Standard","withDescription"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...n.parameters?.docs?.source}}};export{e as Standard,G as __namedExportsOrder,A as default,n as withDescription};
