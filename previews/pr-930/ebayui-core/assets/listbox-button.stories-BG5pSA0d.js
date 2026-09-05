import{t as E}from"./storybook-code-source-CCz6reEH.js";import{b as x,a as O}from"./utils-DWCsNc5l.js";import{_ as m}from"./index-aIRDg1n8.js";import{v as f,b as y,_ as h,c as g}from"./defineComponent-B-Bg3Ud2.js";import{a as e}from"./attr-tag-Dvq4QMvY.js";import{_ as c}from"./render-tag-B9T2mz-j.js";import{_ as k}from"./index-CFEW7sTq.js";import{_ as C}from"./const-element-Ea3wmYuQ.js";/* empty css               */import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4_UUNUd.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./of-fallback-DrWEmKV1.js";import"./index-CGb72_gT.js";import"./index-CiJctCOb.js";import"./index-bvC3UV1n.js";import"./index-VUB2KSuG.js";import"./index-BO82MG2q.js";import"./index-DptDIuuf.js";import"./index-By62WOW2.js";import"./index-eAGEw84U.js";import"./dynamic-import-rn7iEbEb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cab9KH13.js";const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-listbox-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-listbox-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-listbox-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-listbox-button/examples)
`,b="fupEHKF",r=f.t(b);y.r(b,()=>r);const w={};r._=h(function(l,t,i,o,v,T){c(m,e.i(()=>{e.r("option",e.i(()=>{e.a("description",{renderBody:a=>{a.t("Option 1 info",o)}})},{selected:!0,value:"1",text:"Option 1"})),e.r("option",e.i(()=>{e.a("description",{renderBody:a=>{a.t("Option 2 info",o)}})},{value:"2",text:"Option 2"})),e.r("option",e.i(()=>{e.a("description",{renderBody:a=>{a.t("Option 3 info",o)}})},{value:"3",text:"Option 3"}))},{prefixLabel:"Select",name:"formFieldName",...l,option:void 0}),t,i,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:b,s:!0},w);r.Component=g(w,r._);const D=`<ebay-listbox-button
    prefix-label="Select"
    name="formFieldName"
    onChange("emit", "change")
    onCollapse("emit", "collapse")
    onExpand("emit", "expand")
    ...input
>
    <@option selected value="1" text="Option 1">
        <@description>Option 1 info</@description>
    </@option>
    <@option value="2" text="Option 2">
        <@description>Option 2 info</@description>
    </@option>
    <@option value="3" text="Option 3">
        <@description>Option 3 info</@description>
    </@option>
</ebay-listbox-button>
`,u="K$k7dM8",s=f.t(u),I=C("span",null,1).t("There was an error");y.r(u,()=>s);const _={};s._=h(function(l,t,i,o,v,T){t.be("span",{class:"field"},"0",o,null,1),c(m,e.i(()=>{e.r("option",{value:"1",text:"Option 1",selected:!0}),e.r("option",{value:"2",text:"Option 2"}),e.r("option",{value:"3",text:"Option 3"})},{name:"formFieldName",hasError:!0,ariaDescribedby:i.elId("listbox-description")}),t,i,"1"),t.be("div",{class:"field__description field__description--attention",id:i.elId("listbox-description")},"2",o,null,1),c(k,{},t,i,"3"),t.n(I,o),t.ee(),t.ee()},{t:u,i:!0},_);s.Component=g(_,s._);const W=`<span class="field">
    <ebay-listbox-button
        name="formFieldName"
        hasError
        aria-describedby:scoped="listbox-description"
    >
        <@option value="1" text="Option 1" selected/>
        <@option value="2" text="Option 2"/>
        <@option value="3" text="Option 3"/>
    </ebay-listbox-button>

    <div
        class="field__description field__description--attention"
        id:scoped="listbox-description"
    >
        <ebay-attention-filled-16-icon/>
        <span>There was an error</span>
    </div>
</span>
`,$=l=>({input:O(l)}),ae={title:"buttons/ebay-listbox-button",component:m,parameters:{docs:{description:{component:S}}},argTypes:{selected:{description:"allows you to set the selected index option to `selected`"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders "},fluid:{type:"boolean",control:{type:"boolean"},description:"whether listbox width is 100% "},buttonName:{control:{type:"text"},description:"used for the `name` attribute of the native `<button>` "},truncate:{type:"boolean",control:{type:"boolean"},description:"will truncate the text of the button onto a single line, and adds an ellipsis, when the buttons text overflows"},hasError:{type:"boolean",control:{type:"boolean"},description:"whether listbox is in an error state or not"},invalid:{control:{type:"text"},description:"The ID of an element that describes the error state"},split:{control:{type:"select"},options:["none","start","end"],description:"Whether to render in split button format"},a11yIconPrefixText:{control:{type:"text"},description:"Accessibility text for icon prefix"},postfixLabel:{name:"@postfix-label",table:{category:"@attribute tags"},description:"Custom label content to display after selected items"},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"When an option is selected, the dropdown menu collapses into the button"},listSelection:{table:{defaultValue:{summary:"manual"}},description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",option:["manual","auto"],type:"select"},flip:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}},description:"Adds flip to dropdown middleware. This allows the dropdown to flip automatically if it overflows"},strategy:{control:{type:"select"},options:["absolute","fixed"],table:{defaultValue:{summary:"absolute"}},description:"Swap between fixed and absolute positioning strategy. Use fixed when dropdown is in contained in an overflow and needs to be visible as you scroll the screen."},prefixId:{control:{type:"text"},description:"id of an external element to use as the prefix label for the listbox button. Cannot be used with `prefix-label`"},floatingLabel:{control:{type:"text"},description:"The label to add that floats to the top when item is selected. Cannot be used with `prefix-label`"},unselectedText:{control:{type:"text"},description:'The text to be shown when no options are selected. Default is "-". Cannot be used with `floating-label`'},prefixLabel:{control:{type:"text"},description:"The label to add before each selected item on the button. Cannot be used with `prefix-id`"},option:{name:"@option",table:{category:"@attribute tags"}},text:{table:{control:{type:"text"},category:"@option attributes"}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Localized text to be read by screen readers when an option is selected",table:{defaultValue:{summary:"selected"}}},value:{table:{control:{type:"value"},category:"@option attributes"}},variant:{description:"If `form`, changes appearance to match other form-specific dropdown-esque components for visual consistency.",option:["standard","form"],type:"select"},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, index, selected, wasClicked }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},n=$.bind({});n.args={prefixLabel:"Selected:",option:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}]};n.parameters={docs:{source:{code:E("ebay-listbox-button",n.args)}}};const p=x(r,D),d=x(s,W),re=["Default","withDescription","withError"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithErrorTemplate, WithErrorTemplateCode)",...d.parameters?.docs?.source}}};export{n as Default,re as __namedExportsOrder,ae as default,p as withDescription,d as withError};
