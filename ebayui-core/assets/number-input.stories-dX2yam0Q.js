import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as ee,n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as c}from"./icon-yrMh4EQf.js";import{t as l}from"./render-tag-hXgrwudm.js";import{t as te}from"./dynamic-tag-CCbAf3a9.js";import{t as ne}from"./attr-tag--AgZ8oJt.js";import{n as re,t as u}from"./ebay-icon-button-CHXMQb7X.js";import{n as ie,r as ae,t as oe}from"./ebay-textbox-4Woy562k.js";import{a as se,i as ce,n as le,o as ue,r as de,t as fe}from"./ebay-remove-24-icon-zwbpFYsc.js";var d;function f(){return(f=t((()=>{d=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-number-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A number-input is a textbox which only takes numbers as input

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-ebay-number-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-ebay-number-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/ebayui-core/src/components/ebay-number-input/examples)
`})))()}function p(){return(p=t((()=>{})))()}function m(){return(m=t((()=>{c(),ae(),p()})))()}var pe;function me(){return(me=t((()=>{pe=class extends Marko.Component{onCreate(){this.state={value:0,min:0,max:1/0}}onMount(){this.textbox=this.getComponent(`input`)?.getEl(`input`)}onInput(e){let t=+!!e.a11yDeleteText;this.state.min=e.min?parseInt(e.min.toString(),10):t,this.state.max=e.max?parseInt(e.max.toString(),10):1/0;let n=e.value??t;this.state.value=typeof n==`number`?n:parseInt(n.toString(),10)}checkBoundary(e,t=0){let n=+!!this.input.a11yDeleteText,r=parseInt(e,10)+t;return isNaN(r)?r=n:r>this.state.max?r=this.state.max:r<this.state.min&&(r=this.state.min),r}updateInputValue(e){let t=this.checkBoundary(this.textbox.value,0);this.state.value=t,this.textbox.value=t.toString(),this.emit(`input-change`,{originalEvent:e.originalEvent,value:t}),this.emit(`change`,{originalEvent:e.originalEvent,value:t})}updateInputValueChange(e){let t=this.checkBoundary(this.textbox.value,0);this.state.value=t,this.textbox.value=t.toString(),this.emit(`change`,{originalEvent:e.originalEvent,value:t})}handleAnimation(e){let t=this.el;t.classList.remove(`number-input--increment`),t.classList.remove(`number-input--decrement`),t.classList.remove(`number-input--increment-disabled`),t.classList.remove(`number-input--decrement-disabled`),t.offsetWidth,t.classList.add(`number-input--${e}`)}handleIncrement(e){let t=this.checkBoundary(this.textbox.value,1);this.handleAnimation(t>=this.state.max?`increment-disabled`:`increment`),this.state.value=t,this.textbox.value=t.toString(),this.emit(`increment`,{originalEvent:e.originalEvent,value:t}),this.emit(`change`,{originalEvent:e.originalEvent,value:t})}handleDecrement(e){let t=this.checkBoundary(this.textbox.value,-1);this.handleAnimation(t<=this.state.min?`decrement-disabled`:`decrement`),this.state.value=t,this.textbox.value=t.toString(),this.emit(`decrement`,{originalEvent:e.originalEvent,value:t}),this.emit(`change`,{originalEvent:e.originalEvent,value:t})}}})))()}var he,h,g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{he=s(),m(),n(),h=e(te()),le(),g=e(l()),re(),_=ne(),ce(),ue(),ie(),v=e(r()),me(),y=e(i()),b=o(),x=e(a()),S=`mb`,C=(0,he.t)(S),(0,b.r)(S,()=>C),w=pe,C._=(0,y.default)(function(e,t,n,r,i,a){let{label:o,a11yDeleteText:s,class:c,value:l,min:te,max:ne,...re}=e;t.be(`span`,{class:(0,v.default)([`number-input`,s&&i.value===1&&`number-input--show-delete`,c])},`0`,r,null,1),(0,g.default)(oe,(0,_.i)(()=>{(0,_.a)(`prefixIcon`,{renderBody:e=>{o&&(e.be(`label`,{for:n.elId(`number-input`)},`1`,r,null,0),(0,h.default)(e,o,null,null,null,null,n,`2`),e.ee()),(0,g.default)(u,{ariaHidden:`true`,disabled:i.value<=i.min,size:`small`,class:`number-input__decrement`,transparent:!0,tabindex:`-1`,renderBody:e=>{(0,g.default)(fe,{},e,n,`4`)}},e,n,`3`,[[`click`,`handleDecrement`,!1]])}}),(0,_.a)(`postfixIcon`,{renderBody:e=>{s&&(0,g.default)(u,{class:`number-input__delete`,size:`small`,transparent:!0,ariaLabel:s,renderBody:e=>{(0,g.default)(de,{},e,n,`6`)}},e,n,`5`,[[`click`,`emit`,!1,[`delete-click`]]]),(0,g.default)(u,{ariaHidden:`true`,disabled:i.value>=i.max,class:`number-input__increment`,size:`small`,transparent:!0,tabindex:`-1`,renderBody:e=>{(0,g.default)(se,{},e,n,`8`)}},e,n,`7`,[[`click`,`handleIncrement`,!1]])}})},{...ee(re),min:i.min,max:i.max,id:n.elId(`number-input`),type:`number`,value:i.value,prefixIcon:void 0,postfixIcon:void 0}),t,n,`@input`,[[`input-change`,`updateInputValue`,!1],[`change`,`updateInputValueChange`,!1],[`keydown`,`emit`,!1,[`keydown`]],[`keyup`,`emit`,!1,[`keyup`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]],[`keypress`,`emit`,!1,[`keypress`]]]),t.ee()},{t:S},w),C.Component=(0,x.default)(w,C._)})))()}var E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{E=s(),T(),D=e(l()),O=e(i()),k=o(),A=e(a()),j=`J0xl3el`,M=(0,E.t)(j),(0,k.r)(j,()=>M),N={},M._=(0,O.default)(function(e,t,n,r,ee,i){(0,D.default)(C,{min:0,max:100,ariaLabel:`Enter a number`,...e},t,n,`0`,[[`keyup`,`emit`,!1,[`keyup`]],[`keydown`,`emit`,!1,[`keydown`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]],[`keypress`,`emit`,!1,[`keypress`]],[`change`,`emit`,!1,[`change`]],[`delete-click`,`emit`,!1,[`delete-click`]],[`input-change`,`emit`,!1,[`input-change`]],[`increment`,`emit`,!1,[`increment`]],[`decrement`,`emit`,!1,[`decrement`]]])},{t:j},N),M.Component=(0,A.default)(N,M._)})))()}var F;function I(){return(I=t((()=>{F=`class {}

<ebay-number-input
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-delete-click("emit", "delete-click")
    on-input-change("emit", "input-change")
    on-increment("emit", "increment")
    on-decrement("emit", "decrement")
    min=0
    max=100
    aria-label="Enter a number"
    ...input
/>
`})))()}var L,ge,R,z,B,V,H,U;function W(){return(W=t((()=>{L=s(),T(),ge=e(l()),R=e(i()),z=o(),B=e(a()),V=`Ua72AyF`,H=(0,L.t)(V),(0,z.r)(V,()=>H),U={},H._=(0,R.default)(function(e,t,n,r,ee,i){(0,ge.default)(C,{a11yDeleteText:`Delete item`,ariaLabel:`Enter a number`,...e},t,n,`0`,[[`keydown`,`emit`,!1,[`keydown`]],[`keyup`,`emit`,!1,[`keyup`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]],[`keypress`,`emit`,!1,[`keypress`]],[`change`,`emit`,!1,[`change`]],[`input-change`,`emit`,!1,[`input-change`]],[`delete-click`,`emit`,!1,[`delete-click`]],[`increment`,`emit`,!1,[`increment`]],[`decrement`,`emit`,!1,[`decrement`]]])},{t:V},U),H.Component=(0,B.default)(U,H._)})))()}var G;function K(){return(K=t((()=>{G=`class {}

<ebay-number-input
    a11y-delete-text="Delete item"
    on-keydown("emit", "keydown")
    on-keyup("emit", "keyup")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-input-change("emit", "input-change")
    on-delete-click("emit", "delete-click")
    on-increment("emit", "increment")
    on-decrement("emit", "decrement")
    aria-label="Enter a number"
    ...input
/>
`})))()}var _e,q,ve,ye,be,xe,J,Y,X;function Se(){return(Se=t((()=>{_e=s(),q=ne(),T(),ve=e(l()),ye=e(i()),be=o(),xe=e(a()),J=`LIrE2gH`,Y=(0,_e.t)(J),(0,be.r)(J,()=>Y),X={},Y._=(0,ye.default)(function(e,t,n,r,ee,i){(0,ve.default)(C,(0,q.i)(()=>{(0,q.a)(`label`,{renderBody:e=>{e.t(`Enter a number`,r)}})},{min:0,max:100,...e,label:void 0}),t,n,`0`,[[`keydown`,`emit`,!1,[`keydown`]],[`keyup`,`emit`,!1,[`keyup`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]],[`keypress`,`emit`,!1,[`keypress`]],[`change`,`emit`,!1,[`change`]],[`input-change`,`emit`,!1,[`input-change`]],[`delete-click`,`emit`,!1,[`delete-click`]],[`increment`,`emit`,!1,[`increment`]],[`decrement`,`emit`,!1,[`decrement`]]])},{t:J},X),Y.Component=(0,xe.default)(X,Y._)})))()}var Ce;function we(){return(we=t((()=>{Ce=`class {}

<ebay-number-input
    on-keydown("emit", "keydown")
    on-keyup("emit", "keyup")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-input-change("emit", "input-change")
    on-delete-click("emit", "delete-click")
    on-increment("emit", "increment")
    on-decrement("emit", "decrement")
    min=0
    max=100
    ...input
>
    <@label>Enter a number</@label>
</ebay-number-input>
`})))()}var Te,Z,Q,$,Ee;function De(){return(De=t((()=>{f(),T(),P(),I(),W(),K(),Se(),we(),Te={title:`form input/ebay-number-input`,component:C,parameters:{docs:{description:{component:d}}},argTypes:{fluid:{type:`boolean`,control:{type:`boolean`}},inputSize:{options:[`regular`,`large`],type:{category:`Options`},description:`either "regular" or "large". If large, then renders larger sized textbox`,table:{defaultValue:{summary:`regular`}}},multiline:{type:`boolean`,control:{type:`boolean`},description:`renders a multi-line texbox if true`},invalid:{type:`boolean`,control:{type:`boolean`},description:`indicates a field-level error with red border if true`},"aria-label":{type:`string`,control:{type:`Options`},description:`Either this or @label is required. Renders text for screen readers`},label:{description:`Either this or aria-label is required. Renders label inside input if set`,control:{type:`text`},table:{category:`@attribute tags`,defaultValue:{summary:``}}},a11yDeleteText:{control:{type:`text`},description:`Localized text for delete button. Shows delete button when value is 1`},"on-change":{action:`on-change`,description:`Triggered whenever the value of the input changes`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-input-change":{action:`on-input-change`,description:`Triggered when the value of the input is changed`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-focus":{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-blur":{action:`on-blur`,description:`Triggered on blur`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-keypress":{action:`on-keypress`,description:`Triggered on keypress`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-keyup":{action:`on-keyup`,description:`Triggered on keup`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-keydown":{action:`on-keydown`,description:`Triggered on keydown`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},onIncrement:{action:`on-increment`,description:`Triggered when increment button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onDecrement:{action:`on-decrement`,description:`Triggered when decrement button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onDelete:{action:`on-delete`,description:`Triggered when delete button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}}}},Z=e=>({input:e,component:M}),Z.args={},Z.parameters={docs:{source:{code:F}}},Q=e=>({input:e,component:H}),Q.args={},Q.parameters={docs:{source:{code:G}}},$=e=>({input:e,component:Y}),$.args={},$.parameters={docs:{source:{code:Ce}}},Ee=[`Default`,`withDelete`,`withLabel`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: defaultTemplate
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withDeleteTemplate
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withLabelTemplate
})`,...$.parameters?.docs?.source}}}})))()}De();export{Z as Default,Ee as __namedExportsOrder,Te as default,Q as withDelete,$ as withLabel};