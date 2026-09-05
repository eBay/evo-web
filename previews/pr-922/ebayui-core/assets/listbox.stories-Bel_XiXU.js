import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{n as a,r as o,t as s,u as c}from"./registry-95LfxIAE.js";import{t as l}from"./render-tag-hXgrwudm.js";import{t as u}from"./attr-tag--AgZ8oJt.js";import{n as d,t as f}from"./ebay-listbox-CpCN76l4.js";var p;function m(){return(m=t((()=>{p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}var h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{h=c(),g=u(),d(),_=e(l()),v=e(a()),y=s(),b=e(o()),x=`DehoTOv`,S=(0,h.t)(x),(0,y.r)(x,()=>S),C={},S._=(0,v.default)(function(e,t,n,r,i,a){(0,_.default)(f,(0,g.i)(()=>{(0,g.r)(`option`,(0,g.i)(()=>{(0,g.a)(`description`,{renderBody:e=>{e.t(`Option 1 extra info`,r)}})},{value:`1`,text:`Option 1`})),(0,g.r)(`option`,(0,g.i)(()=>{(0,g.a)(`description`,{renderBody:e=>{e.t(`Option 2 extra info`,r)}})},{value:`2`,text:`Option 2`})),(0,g.r)(`option`,(0,g.i)(()=>{(0,g.a)(`description`,{renderBody:e=>{e.t(`Option 3 extra info`,r)}})},{value:`3`,text:`Option 3`}))},{name:`formFieldName`}),t,n,`0`)},{t:x,i:!0},C),S.Component=(0,b.default)(C,S._)})))()}var T;function E(){return(E=t((()=>{T=`<ebay-listbox name="formFieldName">
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
`})))()}var D,O,k,A,j;function M(){return(M=t((()=>{m(),d(),w(),E(),D=e=>({input:i(e)}),O={title:`building blocks/ebay-listbox`,component:f,parameters:{docs:{description:{component:p}}},argTypes:{name:{control:{type:`text`},description:"used for the `name` attribute of the native `<select>`"},listSelection:{table:{defaultValue:{summary:`manual`}},description:`If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down`,option:[`manual`,`auto`],type:`select`},selected:{description:"allows you to set the selected index option to `selected`"},a11ySelectedText:{type:`text`,control:{type:`text`},description:`Localized text to be read by screen readers when an option is selected`,table:{defaultValue:{summary:`selected`}}},option:{name:`@option`,table:{category:`@attribute tags`}},text:{control:{type:`text`},table:{category:`@option attributes`}},value:{control:{type:`text`},table:{category:`@option attributes`}},disabled:{control:{type:`boolean`},table:{category:`@option attributes`}},typeaheadTimeoutLength:{control:{type:`number`},description:`Timeout length in milliseconds for typeahead functionality`,table:{defaultValue:{summary:`1300`}}},onChange:{action:`on-change`,description:`Triggered on item clicked`,table:{category:`Events`,defaultValue:{summary:`{ el, index, selected, wasClicked }`}}}}},k=D.bind({}),k.args={option:[{value:`1`,text:`Option 1`},{value:`2`,text:`Option 2`},{value:`3`,text:`Option 3`}]},k.parameters={docs:{source:{code:n(`ebay-listbox`,k.args)}}},A=r(S,T),j=[`Standard`,`withDescription`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)`,...A.parameters?.docs?.source}}}})))()}M();export{k as Standard,j as __namedExportsOrder,O as default,A as withDescription};