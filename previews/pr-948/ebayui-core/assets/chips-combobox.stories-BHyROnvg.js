import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{h as r,n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as c}from"./render-tag-hXgrwudm.js";import{t as l}from"./of-fallback-rY0Dkoru.js";import{t as u}from"./attr-tag--AgZ8oJt.js";import{c as ee,i as d}from"./event-utils-Bu5IuP5L.js";import{n as f,t as te}from"./ebay-chip-D0ZVkKmJ.js";import{n as p,t as ne}from"./ebay-combobox-DRJXvcLA.js";var m;function h(){return(h=t((()=>{m=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function g(){return(g=t((()=>{})))()}function _(){return(_=t((()=>{g()})))()}var v;function re(){return(re=t((()=>{ee(),v=class extends Marko.Component{onCreate(e){this.state={selected:e.selected??[]}}onInput(e){e.selected===null?this.state.selected=[]:e.selected&&(this.state.selected=e.selected)}handleKeydown(e){d(e,()=>{let t=e.target.value;e.preventDefault(),t&&this.selectChip(t)})}selectChip(e){this.state.selected.includes(e)||(this.state.selected=[...this.state.selected,e],this.emit(`change`,{selected:this.state.selected}))}handleDelete(e){this.state.selected=[...this.state.selected.slice(0,e),...this.state.selected.slice(e+1)],this.emit(`change`,{selected:this.state.selected})}getDropdownEl(){return()=>this.getEl(`root`)}}})))()}var y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{y=s(),_(),f(),b=e(c()),x=e(l()),S=u(),p(),C=e(r()),re(),w=e(i()),T=o(),E=e(a()),D=`y`,O=(0,y.t)(D),(0,T.r)(D,()=>O),k=v,O._=(0,w.default)(function(e,t,n,r,i,a){let{option:o=[],selected:s,class:c,fluid:l,error:u,value:ee,disabled:d,a11yDeleteButtonText:f=`Remove`,...p}=e;if(t.be(`span`,{class:(0,C.default)([`chips-combobox`,l&&`chips-combobox--fluid`,u&&`chips-combobox--error`,c]),"aria-disabled":d&&`true`},`@root`,r,null,0),i.selected&&i.selected.length){t.be(`ul`,{class:`chips-combobox__items`},`0`,r,null,1);{let e=0;for(let a of(0,x.default)(i.selected)){let i=e++,o=`[${i}]`;t.be(`li`,null,`1`+o,r,null,0),(0,b.default)(te,{a11yDeleteButtonText:`${f} ${a}`,disabled:d,renderBody:e=>{e.t(a,r)}},t,n,`2`+o,[[`delete`,`handleDelete`,!1,[i]]]),t.ee()}}t.ee()}(0,b.default)(ne,(0,S.i)(()=>{for(let{text:e}of(0,x.default)(o))(!i.selected||!i.selected.some(t=>t===e))&&(0,S.r)(`option`,{text:e})},{class:`chips-combobox__combobox`,disabled:d,dropdownElement:r.getDropdownEl(),...p,autocomplete:`list`,option:void 0}),t,n,`3`,[[`keydown`,`handleKeydown`,!1],[`option-click`,`selectChip`,!1],[`expand`,`emit`,!1,[`expand`]],[`collapse`,`emit`,!1,[`collapse`]]]),t.ee()},{t:D},k),O.Component=(0,E.default)(k,O._)})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{j=s(),M=u(),A(),N=e(c()),P=e(i()),F=o(),I=e(a()),L=`kTv2Xlk`,R=(0,j.t)(L),(0,F.r)(L,()=>R),z={},R._=(0,P.default)(function(e,t,n,r,i,a){(0,N.default)(O,(0,M.i)(()=>{(0,M.r)(`option`,{text:`Option 1`}),(0,M.r)(`option`,{text:`Option 2`}),(0,M.r)(`option`,{text:`Option 3`})},{placeholder:`Add item`,...e,option:void 0}),t,n,`0`,[[`change`,`emit`,!1,[`change`]],[`collapse`,`emit`,!1,[`collapse`]],[`expand`,`emit`,!1,[`expand`]]])},{t:L,s:!0},z),R.Component=(0,I.default)(z,R._)})))()}var ie;function V(){return(V=t((()=>{ie=`<ebay-chips-combobox
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
`})))()}var H,U,W,G,K,q,J,Y,X;function Z(){return(Z=t((()=>{H=s(),U=u(),A(),W=e(c()),G=e(i()),K=o(),q=e(a()),J=`CsQ6$SX`,Y=(0,H.t)(J),(0,K.r)(J,()=>Y),X={},Y._=(0,G.default)(function(e,t,n,r,i,a){(0,W.default)(O,(0,U.i)(()=>{(0,U.r)(`option`,{text:`Option 1`}),(0,U.r)(`option`,{text:`Option 2`}),(0,U.r)(`option`,{text:`Option 3`})},{placeholder:`Add item`,selected:[`Option 1`,`Option 3`,`Custom Option`],...e,option:void 0}),t,n,`0`,[[`change`,`emit`,!1,[`change`]],[`collapse`,`emit`,!1,[`collapse`]],[`expand`,`emit`,!1,[`expand`]]])},{t:J,s:!0},X),Y.Component=(0,q.default)(X,Y._)})))()}var ae;function oe(){return(oe=t((()=>{ae=`<ebay-chips-combobox
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
`})))()}var se,Q,$,ce;function le(){return(le=t((()=>{h(),A(),B(),V(),Z(),oe(),se={title:`form input/ebay-chips-combobox`,component:O,parameters:{docs:{description:{component:m}}},argTypes:{disabled:{type:`boolean`,control:{type:`boolean`},description:`sets the disabled attribute of the input`},expanded:{control:{type:`boolean`},description:`sets whether the listbox is expanded`},fluid:{control:{type:`boolean`},type:`boolean`,description:`If true, combobox will span the entire width of it's container`},error:{control:{type:`boolean`},type:`boolean`,description:`sets the error state of the input`},listSelection:{control:{type:`text`},description:"default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys."},a11yDeleteButtonText:{control:{type:`text`},description:`Localized, the aria-label for the delete button on each chip.`},roledescription:{control:{type:`text`},description:`The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales`},placeholder:{control:{type:`text`},description:`The input placeholder text. This will be the label for the input when no text is entered.`},selected:{control:{type:`array`},table:{defaultValue:{summary:`[]`}},description:`A list of selected options. Each item is the string that will be displayed in the selected list of chips. If it matches an item in the dropdown, it won't be shown in dropdown`},option:{name:`@option`,description:`Repeatable attribute tag containing the autofill options`},text:{table:{category:`@option attributes`},description:`The text contained in the autofill option`},onChange:{action:`on-change`,table:{category:`Events`,defaultValue:{summary:`{ selected }`}},description:`fires when the selected chips change`},onCollapse:{action:`on-collapse`,table:{category:`Events`},description:` collapsed content`},onExpand:{action:`on-expand`,table:{category:`Events`},description:` expanded content`}}},Q=n(R,ie,{placeholder:`Add item`}),$=n(Y,ae,{placeholder:`Add item`,selected:[`Option 1`,`Option 3`,`Custom Option`]}),ce=[`Default`,`Selected`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  placeholder: "Add item"
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(SelectedTemplate, SelectedCode, {
  placeholder: "Add item",
  selected: ["Option 1", "Option 3", "Custom Option"]
})`,...$.parameters?.docs?.source}}}})))()}le();export{Q as Default,$ as Selected,ce as __namedExportsOrder,se as default};