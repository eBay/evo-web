import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{c as r,h as i,l as ee,n as a,r as o,t as s,u as c}from"./registry-95LfxIAE.js";import{t as l}from"./icon-yrMh4EQf.js";import{t as u}from"./render-tag-hXgrwudm.js";import{t as d}from"./attr-tag--AgZ8oJt.js";import{n as f,t as te}from"./ebay-icon-button-CHXMQb7X.js";import{n as p,r as ne,t as re}from"./ebay-textbox-4Woy562k.js";import{n as ie,t as ae}from"./ebay-clear-16-icon-DUjlL7Aa.js";import{n as oe,t as se}from"./ebay-search-16-icon-C0XbRsx3.js";var m;function h(){return(h=t((()=>{m=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A filter-input is a textbox which is used specifally to filter out content.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-ebay-filter-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-ebay-filter-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/ebayui-core/src/components/ebay-filter-input/examples)
`})))()}function g(){return(g=t((()=>{})))()}function _(){return(_=t((()=>{l(),ne(),g()})))()}var v;function y(){return(y=t((()=>{v=[`large`,`small`]})))()}var b;function x(){return(x=t((()=>{b=class extends Marko.Component{onMount(){this.textbox=this.getComponent(`input`)?.getEl(`input`)}handleClear(e){let t=e.originalEvent;this.textbox.value=``,this.emit(`input-change`,{originalEvent:t,value:``}),this.emit(`clear`,{originalEvent:t,value:``})}}})))()}var S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{S=c(),_(),r(),y(),oe(),C=e(u()),w=d(),ie(),f(),p(),T=e(i()),x(),E=e(a()),D=s(),O=e(o()),k=`S`,A=(0,S.t)(k),(0,D.r)(k,()=>A),j=b,A._=(0,E.default)(function(e,t,n,r,i,a){let{class:o,placeholder:s,a11yClearButton:c,a11yControlsId:l,size:u,...d}=e;var f=u&&v.includes(u)?u:null;let p=s??`Filter`;t.be(`span`,{class:(0,T.default)([`filter-input`,f&&`filter-input--${f}`,o])},`0`,r,null,1),(0,C.default)(re,(0,w.i)(()=>{(0,w.a)(`prefixIcon`,{renderBody:e=>{(0,C.default)(se,{},e,n,`1`)}}),(0,w.a)(`postfixIcon`,{renderBody:e=>{c&&p&&(0,C.default)(te,{ariaLabel:c,class:`filter-input__clear-btn`,size:`small`,transparent:!0,renderBody:e=>{(0,C.default)(ae,{},e,n,`3`)}},e,n,`2`,[[`click`,`handleClear`,!1]])}})},{fluid:!0,type:`search`,ariaControls:l,placeholder:p,...ee(d),prefixIcon:void 0,postfixIcon:void 0}),t,n,`@input`,[[`keydown`,`emit`,!1,[`keydown`]],[`keypress`,`emit`,!1,[`keypress`]],[`keyup`,`emit`,!1,[`keyup`]],[`change`,`emit`,!1,[`change`]],[`input-change`,`emit`,!1,[`input-change`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]]]),t.ee()},{t:k},j),A.Component=(0,O.default)(j,A._)})))()}var N,P,F,I,ce,L,R,z;function B(){return(B=t((()=>{N=c(),M(),P=e(u()),F=e(a()),I=s(),ce=e(o()),L=`vc_bz_y`,R=(0,N.t)(L),(0,I.r)(L,()=>R),z={},R._=(0,F.default)(function(e,t,n,r,i,ee){(0,P.default)(A,{ariaLabel:`Filter input`,a11yClearButton:`Clear filter input`,...e},t,n,`0`,[[`keyup`,`emit`,!1,[`keyup`]],[`keydown`,`emit`,!1,[`keydown`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]],[`keypress`,`emit`,!1,[`keypress`]],[`change`,`emit`,!1,[`change`]],[`clear`,`emit`,!1,[`clear`]],[`input-change`,`emit`,!1,[`input-change`]]])},{t:L},z),R.Component=(0,ce.default)(z,R._)})))()}var V;function H(){return(H=t((()=>{V=`class {}

<ebay-filter-input
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-clear("emit", "clear")
    on-input-change("emit", "input-change")
    aria-label="Filter input"
    a11y-clear-button="Clear filter input"
    ...input
/>
`})))()}var U,W,G,K,q,J,Y,X;function Z(){return(Z=t((()=>{U=c(),M(),W=e(u()),G=e(a()),K=s(),q=e(o()),J=`q0qKgJi`,Y=(0,U.t)(J),(0,K.r)(J,()=>Y),X={onCreate(){this.state={value:``}},handleInputChange(e){console.log(e),this.state.value=e.value,this.emit(`input-change`,e)}},Y._=(0,G.default)(function(e,t,n,r,i,ee){t.be(`div`,null,`0`,r,null,0),(0,W.default)(A,{a11yControlsId:`filter-input-controls`,ariaLabel:`Filter input`,a11yClearButton:`Clear filter input`,...e},t,n,`1`,[[`keyup`,`emit`,!1,[`keyup`]],[`keydown`,`emit`,!1,[`keydown`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]],[`keypress`,`emit`,!1,[`keypress`]],[`change`,`emit`,!1,[`change`]],[`clear`,`emit`,!1,[`clear`]],[`input-change`,`handleInputChange`,!1]]),t.be(`div`,{id:`filter-input-controls`},`2`,r,null,1),t.t(`Current value: "`,r),t.t(i.value,r),t.t(`"`,r),t.ee(),t.ee()},{t:J},X),Y.Component=(0,q.default)(X,Y._)})))()}var le;function ue(){return(ue=t((()=>{le=`class {
    declare state: {
        value: string;
    };

    onCreate() {
        this.state = {
            value: "",
        };
    }
    handleInputChange(event: any) {
        console.log(event);
        this.state.value = event.value;
        this.emit("input-change", event);
    }
}

<div>
    <ebay-filter-input
        a11y-controls-id="filter-input-controls"
        on-keyup("emit", "keyup")
        on-keydown("emit", "keydown")
        on-focus("emit", "focus")
        on-blur("emit", "blur")
        on-keypress("emit", "keypress")
        on-change("emit", "change")
        on-clear("emit", "clear")
        on-input-change("handleInputChange")
        aria-label="Filter input"
        a11y-clear-button="Clear filter input"
        ...input
    />
    <div id="filter-input-controls">
        Current value: "\${state.value}"
    </div>
</div>
`})))()}var de,Q,$,fe;function pe(){return(pe=t((()=>{h(),M(),B(),H(),Z(),ue(),de={title:`form input/ebay-filter-input`,component:A,parameters:{docs:{description:{component:m}}},argTypes:{size:{options:[`regular`,`small`,`large`],type:{category:`Options`},description:`either "regular" "small" or "large". If large, then renders larger sized textbox`,table:{defaultValue:{summary:`regular`}}},a11yClearButton:{type:`string`,control:{type:`text`},description:`Localized, text for the clear button. If not provided, then no clear button is rendered`},"aria-label":{type:`string`,control:{type:`text`},description:`Either this or <label> is required. Renders text for screen readers`},a11yControlsId:{type:`string`,control:{type:`text`},description:`Requied. This is the id of the element that this input controls, such as the list of filtered items.`},placeholder:{type:`string`,control:{type:`text`},table:{defaultValue:{summary:`Filter`}},description:`Reqired. Text to show when input is empty. This is not a label`},value:{type:`string`,control:{type:`text`},table:{defaultValue:{summary:``}},description:`The value of the input. This is not a label. This is not required`},"on-change":{action:`on-change`,description:`Triggered whenever the value of the input changes`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-input-change":{action:`on-input-change`,description:`Triggered when the value of the input is changed`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-focus":{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-blur":{action:`on-blur`,description:`Triggered on blur`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-keypress":{action:`on-keypress`,description:`Triggered on keypress`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-keyup":{action:`on-keyup`,description:`Triggered on keup`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},"on-keydown":{action:`on-keydown`,description:`Triggered on keydown`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},onClear:{action:`on-clear`,description:`Triggered when clear button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}}}},Q=n(R,V,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`}),$=n(Y,le,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`,a11yControlsId:`filter-input-controls`}),fe=[`Default`,`Controls`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...$.parameters?.docs?.source}}}})))()}pe();export{$ as Controls,Q as Default,fe as __namedExportsOrder,de as default};