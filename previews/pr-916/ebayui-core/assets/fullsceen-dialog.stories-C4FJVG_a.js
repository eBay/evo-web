import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./utils-C7m-hPxw.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as c}from"./dynamic-tag-CCbAf3a9.js";import{n as l,t as u}from"./ebay-button-ev-RMJXM.js";import{n as d,t as f}from"./ebay-dialog-base-BxJ4_-JJ.js";var p;function m(){return(m=t((()=>{p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fullscreen-dialog-deprecated
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

\`\`\`marko
<ebay-fullscreen-dialog-deprecated open a11y-close-text="Close Dialog">
    <@header>Hello World</@header>
    Body content
</ebay-fullscreen-dialog-deprecated>
\`\`\`

** Deprecated will be removed next major ** (Use lightbox-dialog instead)

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/deprecated-ebay-fullscreen-dialog-deprecated)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/deprecated-ebay-fullscreen-dialog-deprecated)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-fullscreen-dialog-deprecated/examples)
`})))()}function h(){return(h=t((()=>{})))()}function g(){return(g=t((()=>{h()})))()}var _,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{_=o(),g(),v=e(c()),d(),y=e(s()),b=e(r()),x=a(),S=e(i()),C=`W`,w=(0,_.t)(C),(0,x.r)(C,()=>w),T={},w._=(0,b.default)(function(e,t,n,r,i,a){let{class:o,renderBody:s,slideFrom:c,...l}=e;(0,y.default)(f,{...l,classPrefix:`fullscreen-dialog`,transitionList:[`transform`],class:o,useHiddenProperty:!0,windowClass:c===`end`?`fullscreen-dialog__window--slide-end`:`fullscreen-dialog__window--slide`,renderBody:e=>{(0,v.default)(e,s,null,null,null,null,n,`1`)}},t,n,`0`,[[`open`,`emit`,!1,[`open`]],[`close`,`emit`,!1,[`close`]]])},{t:C,s:!0},T),w.Component=(0,S.default)(T,w._)})))()}var D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{D=o(),E(),O=e(s()),l(),k=e(r()),A=a(),j=e(i()),M=`JVHkGkh`,N=(0,D.t)(M),(0,A.r)(M,()=>N),P={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit(`close`)}},N._=(0,k.default)(function(e,t,n,r,i,a){(0,O.default)(w,{a11yCloseText:`Close Dialog`,open:i.open,...e},t,n,`0`,[[`close`,`closeDialog`,!1],[`open`,`emit`,!1,[`open`]]]),(0,O.default)(u,{renderBody:e=>{e.t(`Open Dialog`,r)}},t,n,`1`,[[`click`,`openDialog`,!1]])},{t:M},P),N.Component=(0,j.default)(P,N._)})))()}var I;function L(){return(L=t((()=>{I=`<ebay-fullscreen-dialog-deprecated
    a11yCloseText="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    ...input
/>

<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
class {
    declare state: {
        open: boolean;
    };

    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog() {
        this.state.open = false;
        this.emit("close");
    }
}
`})))()}var R,z,B,V;function H(){return(H=t((()=>{m(),F(),L(),R=e=>({input:n(e)}),z={title:`deprecated/ebay-fullscreen-dialog-deprecated`,component:N,parameters:{docs:{description:{component:p}}},argTypes:{open:{type:`boolean`,control:{type:`boolean`},description:`Whether dialog is open.`,table:{disable:!0}},focus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog opens (defaults to close button).`},slideFrom:{options:[`bottom`,`end`],description:`Either bottom or end. Where the panel slide begins from, either on the bottom or the end of the page.`,table:{defaultValue:{summary:`bottom`}},type:{category:`Options`}},closeFocus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened`},a11yCloseText:{control:{type:`text`},description:`Localized, a11y text for close button and mask.`},header:{name:`@header`,table:{category:`@attribute tags`}},footer:{name:`@footer`,table:{category:`@attribute tags`}},onOpen:{action:`on-open`,description:`Triggered on dialog opened`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`on-close`,description:`Triggered on dialog closed.`,table:{category:`Events`,defaultValue:{summary:``}}}}},B=R.bind({}),B.args={header:{renderBody:`Heading Text`},a11yCloseText:`Close Button`,renderBody:`Body Content`,footer:{renderBody:`Footer Text`},slideFrom:null},B.parameters={docs:{source:{code:I}}},V=[`Default`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...B.parameters?.docs?.source}}}})))()}H();export{B as Default,V as __namedExportsOrder,z as default};