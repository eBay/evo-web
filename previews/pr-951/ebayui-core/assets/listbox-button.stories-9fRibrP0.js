import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{n as a,r as o,t as s,u as c}from"./registry-95LfxIAE.js";import{t as l}from"./render-tag-hXgrwudm.js";import{t as u}from"./attr-tag--AgZ8oJt.js";import{t as d}from"./const-element-BfQ4jh6r.js";import{n as f,t as p}from"./ebay-attention-filled-16-icon-B3uPF_W4.js";import{n as m,t as h}from"./ebay-listbox-button-D06CB76o.js";var g;function _(){return(_=t((()=>{g=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}var v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{v=c(),y=u(),m(),b=e(l()),x=e(a()),S=s(),C=e(o()),w=`fupEHKF`,T=(0,v.t)(w),(0,S.r)(w,()=>T),E={},T._=(0,x.default)(function(e,t,n,r,i,a){(0,b.default)(h,(0,y.i)(()=>{(0,y.r)(`option`,(0,y.i)(()=>{(0,y.a)(`description`,{renderBody:e=>{e.t(`Option 1 info`,r)}})},{selected:!0,value:`1`,text:`Option 1`})),(0,y.r)(`option`,(0,y.i)(()=>{(0,y.a)(`description`,{renderBody:e=>{e.t(`Option 2 info`,r)}})},{value:`2`,text:`Option 2`})),(0,y.r)(`option`,(0,y.i)(()=>{(0,y.a)(`description`,{renderBody:e=>{e.t(`Option 3 info`,r)}})},{value:`3`,text:`Option 3`}))},{prefixLabel:`Select`,name:`formFieldName`,...e,option:void 0}),t,n,`0`,[[`change`,`emit`,!1,[`change`]],[`collapse`,`emit`,!1,[`collapse`]],[`expand`,`emit`,!1,[`expand`]]])},{t:w,s:!0},E),T.Component=(0,C.default)(E,T._)})))()}var O;function k(){return(k=t((()=>{O=`<ebay-listbox-button
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
`})))()}var A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{A=c(),j=u(),m(),M=e(l()),f(),N=e(d()),P=e(a()),F=s(),I=e(o()),L=`K$k7dM8`,R=(0,A.t)(L),z=(0,N.default)(`span`,null,1).t(`There was an error`),(0,F.r)(L,()=>R),B={},R._=(0,P.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),(0,M.default)(h,(0,j.i)(()=>{(0,j.r)(`option`,{value:`1`,text:`Option 1`,selected:!0}),(0,j.r)(`option`,{value:`2`,text:`Option 2`}),(0,j.r)(`option`,{value:`3`,text:`Option 3`})},{name:`formFieldName`,hasError:!0,ariaDescribedby:n.elId(`listbox-description`)}),t,n,`1`),t.be(`div`,{class:`field__description field__description--attention`,id:n.elId(`listbox-description`)},`2`,r,null,1),(0,M.default)(p,{},t,n,`3`),t.n(z,r),t.ee(),t.ee()},{t:L,i:!0},B),R.Component=(0,I.default)(B,R._)})))()}var H;function U(){return(U=t((()=>{H=`<span class="field">
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
`})))()}var W,G,K,q,J,Y;function X(){return(X=t((()=>{_(),m(),D(),k(),V(),U(),W=e=>({input:i(e)}),G={title:`buttons/ebay-listbox-button`,component:h,parameters:{docs:{description:{component:g}}},argTypes:{selected:{description:"allows you to set the selected index option to `selected`"},borderless:{type:`boolean`,control:{type:`boolean`},description:`whether button has borders `},fluid:{type:`boolean`,control:{type:`boolean`},description:`whether listbox width is 100% `},buttonName:{control:{type:`text`},description:"used for the `name` attribute of the native `<button>` "},truncate:{type:`boolean`,control:{type:`boolean`},description:`will truncate the text of the button onto a single line, and adds an ellipsis, when the buttons text overflows`},hasError:{type:`boolean`,control:{type:`boolean`},description:`whether listbox is in an error state or not`},invalid:{control:{type:`text`},description:`The ID of an element that describes the error state`},split:{control:{type:`select`},options:[`none`,`start`,`end`],description:`Whether to render in split button format`},a11yIconPrefixText:{control:{type:`text`},description:`Accessibility text for icon prefix`},postfixLabel:{name:`@postfix-label`,table:{category:`@attribute tags`},description:`Custom label content to display after selected items`},collapseOnSelect:{type:`boolean`,control:{type:`boolean`},description:`When an option is selected, the dropdown menu collapses into the button`},listSelection:{table:{defaultValue:{summary:`manual`}},description:`If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down`,option:[`manual`,`auto`],type:`select`},flip:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Adds flip to dropdown middleware. This allows the dropdown to flip automatically if it overflows`},strategy:{control:{type:`select`},options:[`absolute`,`fixed`],table:{defaultValue:{summary:`absolute`}},description:`Swap between fixed and absolute positioning strategy. Use fixed when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.`},prefixId:{control:{type:`text`},description:"id of an external element to use as the prefix label for the listbox button. Cannot be used with `prefix-label`"},floatingLabel:{control:{type:`text`},description:"The label to add that floats to the top when item is selected. Cannot be used with `prefix-label`"},unselectedText:{control:{type:`text`},description:'The text to be shown when no options are selected. Default is "-". Cannot be used with `floating-label`'},prefixLabel:{control:{type:`text`},description:"The label to add before each selected item on the button. Cannot be used with `prefix-id`"},option:{name:`@option`,table:{category:`@attribute tags`}},text:{table:{control:{type:`text`},category:`@option attributes`}},a11ySelectedText:{type:`text`,control:{type:`text`},description:`Localized text to be read by screen readers when an option is selected`,table:{defaultValue:{summary:`selected`}}},value:{table:{control:{type:`value`},category:`@option attributes`}},variant:{description:"If `form`, changes appearance to match other form-specific dropdown-esque components for visual consistency.",option:[`standard`,`form`],type:`select`},onChange:{action:`on-change`,description:`Triggered on item clicked`,table:{category:`Events`,defaultValue:{summary:`{ el, index, selected, wasClicked }`}}},onCollapse:{action:`on-collapse`,description:`Triggered on menu collapse`,table:{category:`Events`,defaultValue:{summary:``}}},onExpand:{action:`on-expand`,description:`Triggered on menu expand`,table:{category:`Events`,defaultValue:{summary:``}}}}},K=W.bind({}),K.args={prefixLabel:`Selected:`,option:[{value:`1`,text:`Option 1`},{value:`2`,text:`Option 2`},{value:`3`,text:`Option 3`}]},K.parameters={docs:{source:{code:n(`ebay-listbox-button`,K.args)}}},q=r(T,O),J=r(R,H),Y=[`Default`,`withDescription`,`withError`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithErrorTemplate, WithErrorTemplateCode)`,...J.parameters?.docs?.source}}}})))()}X();export{K as Default,Y as __namedExportsOrder,G as default,q as withDescription,J as withError};