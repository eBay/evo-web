import{b as E}from"./utils-DWCsNc5l.js";import{v as u,b as x,_ as f,e as V,c as y}from"./defineComponent-B-Bg3Ud2.js";import{_ as X}from"./index-Lfvu3Z-D.js";import{_ as h}from"./render-tag-B9T2mz-j.js";import{_ as v}from"./of-fallback-DrWEmKV1.js";import{a as t}from"./attr-tag-Dvq4QMvY.js";import{_ as j}from"./index-B8-DGxTW.js";import{d as J}from"./index-eAGEw84U.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-CZk20XcS.js";import"./index-CL8ZzwFK.js";/* empty css             *//* empty css                    */import"./index-Qtpjd4O_.js";import"./style-value-D9hyxyYb.js";import"./index-bvC3UV1n.js";import"./index-VUB2KSuG.js";import"./index-BO82MG2q.js";import"./dynamic-import-rn7iEbEb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cab9KH13.js";const L=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-combobox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v2.0.0
    </span>
</h1>

The \`<ebay-combobox>\` is a combination of a text \`<input>\`, and a listbox (\`aria-role="listbox"\`). It supports both written text by the user, as well as text selected from the listbox options.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-combobox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-combobox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-combobox/examples)
`;class M extends Marko.Component{onCreate(e){this.state={selected:e.selected??[]}}onInput(e){e.selected===null?this.state.selected=[]:e.selected&&(this.state.selected=e.selected)}handleKeydown(e){J(e,()=>{const o=e.target.value;e.preventDefault(),o&&this.selectChip(o)})}selectChip(e){this.state.selected.includes(e)||(this.state.selected=[...this.state.selected,e],this.emit("change",{selected:this.state.selected}))}handleDelete(e){this.state.selected=[...this.state.selected.slice(0,e),...this.state.selected.slice(e+1)],this.emit("change",{selected:this.state.selected})}getDropdownEl(){return()=>this.getEl("root")}}const _="vJYCU$i",a=u.t(_);x.r(_,()=>a);const T=M;a._=f(function(s,e,o,n,i,C){const{option:S=[],selected:U,class:A,fluid:I,error:B,value:Y,disabled:b,a11yDeleteButtonText:K="Remove",...R}=s;if(e.be("span",{class:V(["chips-combobox",I&&"chips-combobox--fluid",B&&"chips-combobox--error",A]),"aria-disabled":b&&"true"},"@root",n,null,0),i.selected&&i.selected.length){e.be("ul",{class:"chips-combobox__items"},"0",n,null,1);{let c=0;for(const r of v(i.selected)){let k=c++;const O=`[${k}]`;e.be("li",null,"1"+O,n,null,0),h(X,{a11yDeleteButtonText:`${K} ${r}`,disabled:b,renderBody:z=>{z.t(r,n)}},e,o,"2"+O,[["delete","handleDelete",!1,[k]]]),e.ee()}}e.ee()}h(j,t.i(()=>{for(const{text:c}of v(S))(!i.selected||!i.selected.some(r=>r===c))&&t.r("option",{text:c})},{class:"chips-combobox__combobox",disabled:b,dropdownElement:n.getDropdownEl(),...R,autocomplete:"list",option:void 0}),e,o,"3",[["keydown","handleKeydown",!1],["option-click","selectChip",!1],["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]]),e.ee()},{t:_},T);a.Component=y(T,a._);const g="kTv2Xlk",l=u.t(g);x.r(g,()=>l);const D={};l._=f(function(s,e,o,n,i,C){h(a,t.i(()=>{t.r("option",{text:"Option 1"}),t.r("option",{text:"Option 2"}),t.r("option",{text:"Option 3"})},{placeholder:"Add item",...s,option:void 0}),e,o,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:g,s:!0},D);l.Component=y(D,l._);const P=`<ebay-chips-combobox
    placeholder="Add item"
    ...input
    onChange("emit", "change")
    onCollapse("emit", "collapse")
    onExpand("emit", "expand")
>
    <@option text="Option 1"/>
    <@option text="Option 2"/>
    <@option text="Option 3"/>
</ebay-chips-combobox>
`,w="CsQ6$SX",p=u.t(w);x.r(w,()=>p);const $={};p._=f(function(s,e,o,n,i,C){h(a,t.i(()=>{t.r("option",{text:"Option 1"}),t.r("option",{text:"Option 2"}),t.r("option",{text:"Option 3"})},{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"],...s,option:void 0}),e,o,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:w,s:!0},$);p.Component=y($,p._);const Q=`<ebay-chips-combobox
    placeholder="Add item"
    selected=["Option 1", "Option 3", "Custom Option"]
    ...input
    onChange("emit", "change")
    onCollapse("emit", "collapse")
    onExpand("emit", "expand")
>
    <@option text="Option 1"/>
    <@option text="Option 2"/>
    <@option text="Option 3"/>
</ebay-chips-combobox>
`,ue={title:"form input/ebay-chips-combobox",component:a,parameters:{docs:{description:{component:L}}},argTypes:{disabled:{type:"boolean",control:{type:"boolean"},description:"sets the disabled attribute of the input"},expanded:{control:{type:"boolean"},description:"sets whether the listbox is expanded"},fluid:{control:{type:"boolean"},type:"boolean",description:"If true, combobox will span the entire width of it's container"},error:{control:{type:"boolean"},type:"boolean",description:"sets the error state of the input"},listSelection:{control:{type:"text"},description:"default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys."},a11yDeleteButtonText:{control:{type:"text"},description:"Localized, the aria-label for the delete button on each chip."},roledescription:{control:{type:"text"},description:"The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales"},placeholder:{control:{type:"text"},description:"The input placeholder text. This will be the label for the input when no text is entered."},selected:{control:{type:"array"},table:{defaultValue:{summary:"[]"}},description:"A list of selected options. Each item is the string that will be displayed in the selected list of chips. If it matches an item in the dropdown, it won't be shown in dropdown"},option:{name:"@option",description:"Repeatable attribute tag containing the autofill options"},text:{table:{category:"@option attributes"},description:"The text contained in the autofill option"},onChange:{action:"on-change",table:{category:"Events",defaultValue:{summary:"{ selected }"}},description:"fires when the selected chips change"},onCollapse:{action:"on-collapse",table:{category:"Events"},description:" collapsed content"},onExpand:{action:"on-expand",table:{category:"Events"},description:" expanded content"}}},d=E(l,P,{placeholder:"Add item"}),m=E(p,Q,{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"]}),xe=["Default","Selected"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  placeholder: "Add item"
})`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`buildExtensionTemplate(SelectedTemplate, SelectedCode, {
  placeholder: "Add item",
  selected: ["Option 1", "Option 3", "Custom Option"]
})`,...m.parameters?.docs?.source}}};export{d as Default,m as Selected,xe as __namedExportsOrder,ue as default};
