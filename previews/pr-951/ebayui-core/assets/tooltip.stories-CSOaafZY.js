import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{t as r}from"./utils-C7m-hPxw.js";import{c as i,l as ee,n as a,r as o,s,t as c,u as l}from"./registry-95LfxIAE.js";import{t as u}from"./render-tag-hXgrwudm.js";import{t as d}from"./dynamic-tag-CCbAf3a9.js";import{t as f}from"./attr-tag--AgZ8oJt.js";import{t as p}from"./const-element-BfQ4jh6r.js";import{a as m,c as h}from"./event-utils-Bu5IuP5L.js";import{t as g}from"./icon-button-BNGaPj6P.js";import{n as te,t as ne}from"./subscribe-i6MKJXfO.js";import{t as re}from"./tooltip-BSX_iuj2.js";import{n as ie,t as ae}from"./ebay-cart-24-icon-DzcX9mI2.js";import{i as oe,n as se,r as ce,t as le}from"./ebay-tooltip-base-B4EnD-sy.js";var _;function v(){return(v=t((()=>{_=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-tooltip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

**Note:** You must supply the \`.tooltip__host\` class to the element in the \`<@host>\` to
which you would like to have the tooltip hover and focus event bindings. In the case that your element
is not focusable, the first focusable element will trigger the tooltip's focus events.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-tooltip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-tooltip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-tooltip/examples)
`})))()}function y(){return(y=t((()=>{g(),re()})))()}var b;function x(){return(x=t((()=>{h(),b=class extends Marko.Component{onCreate(){this.state={open:!1}}onInput(e){(e.open===!0||e.open===!1)&&(this.state.open=e.open)}handleExpand(){this.state.open=!0,this.emit(`expand`)}handleCollapse(){this.state.open=!1,this.emit(`collapse`)}handleKeydown(e){m(e,()=>{this.state.open=!1})}}})))()}var S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{S=l(),y(),i(),te(),C=e(u()),w=e(d()),oe(),T=e(s()),se(),x(),E=e(a()),D=c(),O=e(o()),k=`Pb`,A=(0,S.t)(k),j=typeof window<`u`,(0,D.r)(k,()=>A),M=b,A._=(0,E.default)(function(e,t,n,r,i,a){let{content:o,heading:s,host:c,noHover:l,offset:u,placement:d,pointer:f=`bottom`,noShift:p,notInline:m,noFlip:h,...g}=e;j&&i.open&&(0,C.default)(ne,{to:typeof window==`object`&&document,__events:[`on`,`keydown`]},t,n,`0`,[[`keydown`,`handleKeydown`,!1]]),t.be(`span`,null,`1`,r,null,0),(0,C.default)(le,{open:i.open,type:`tooltip`,overlayId:n.elId(`overlay`),noFlip:h,notInline:m,noShift:p,noHover:l,pointer:f,placement:d,offset:u,renderBody:e=>{e.be(`span`,(0,T.default)(ee(g),{class:`tooltip`}),`2`,r,null,4,{pa:{class:1}}),(0,w.default)(e,c,null,null,null,null,n,`3`),(0,C.default)(ce,{type:`tooltip`,id:n.elId(`overlay`),heading:s,content:o},e,n,`4`),e.ee()}},t,n,`@base`,[[`loaded`,`emit`,!1,[`loaded`]],[`base-expand`,`handleExpand`,!1],[`base-collapse`,`handleCollapse`,!1]]),t.ee()},{t:k},M),A.Component=(0,O.default)(M,A._)})))()}var P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{P=l(),ie(),F=e(u()),I=f(),L=e(p()),N(),R=e(a()),z=c(),B=e(o()),V=`V3jhqT2`,H=(0,P.t)(V),U=(0,L.default)(`p`,null,1).t(`Use Access Key 'S' to display settings.`),(0,z.r)(V,()=>H),W={},H._=(0,R.default)(function(e,t,n,r,i,ee){(0,F.default)(A,(0,I.i)(()=>{(0,I.a)(`host`,{renderBody:e=>{e.be(`button`,{name:`icon-btn-1`,accesskey:`i`,class:`icon-btn tooltip__host`,type:`button`,"aria-label":`Developer-handled label`},`1`,r,null,0),(0,F.default)(ae,{},e,n,`2`),e.ee()}}),(0,I.a)(`content`,{renderBody:e=>{e.n(U,r)}})},{open:e.open}),t,n,`0`)},{t:V,i:!0},W),H.Component=(0,B.default)(W,H._)})))()}var K;function q(){return(q=t((()=>{K=`export interface Input {
    open: boolean;
}

<ebay-tooltip open=input.open>
    <@host>
        <button
            name="icon-btn-1"
            accesskey="i"
            class="icon-btn tooltip__host"
            type="button"
            aria-label="Developer-handled label"
        >
            <ebay-cart-24-icon/>
        </button>
    </@host>
    <@content>
        <p>Use Access Key 'S' to display settings.</p>
    </@content>
</ebay-tooltip>
`})))()}var J,Y,X,Z,Q;function $(){return($=t((()=>{v(),N(),G(),q(),J=e=>({input:r(e)}),Y={title:`notices & tips/ebay-tooltip`,component:A,parameters:{docs:{description:{component:_}}},argTypes:{placement:{options:[`top`,`right`,`bottom`,`left`,`top-start`,`right-start`,`bottom-start`,`left-start`,`top-end`,`right-end`,`bottom-end`,`left-end`],control:{type:`select`},description:`places tooltip position`},offset:{control:{type:`number`},description:`offsets tooltip position`},noHover:{control:{type:`boolean`},description:`disable hover (and only use focus) to open the tooltip`},host:{name:`@host`,description:`The body which will be wrapped as the tooltip's host`,table:{category:`@attribute tags`}},content:{name:`@content`,description:`The content to be displayed in the tooltip`,table:{category:`@attribute tags`}},open:{control:{type:`boolean`},description:`allows dev to specify whether tooltip is open or closed`},noFlip:{control:{type:`boolean`},description:`disables flipping tooltip when its offscreen`,table:{defaultValue:{summary:`false`}}},noShift:{control:{type:`boolean`},description:`disables shifting tooltip when its offscreen`,table:{defaultValue:{summary:`false`}}},notInline:{control:{type:`boolean`},description:`disables moving tooltip to be inline with content when it is rendered`,table:{defaultValue:{summary:`false`}}},onCollapse:{action:`on-collapse`,description:`Triggered on menu collapse`,table:{category:`Events`,defaultValue:{summary:``}}},onExpand:{action:`on-expand`,description:`Triggered on menu expand`,table:{category:`Events`,defaultValue:{summary:``}}},onLoaded:{action:`on-loaded`,description:`Triggered when tooltip finishes loading`,table:{category:`Events`}}}},X=J.bind({}),X.args={host:{renderBody:`<a href="https://www.ebay.com" class="tooltip__host">View options</a>`},content:{renderBody:`<p>Use Access Key 'S' to display settings.</p>`}},X.parameters={docs:{source:{code:n(`ebay-tooltip`,X.args)}}},Z=(e,t)=>({input:J(e,t).input,component:H}),Z.parameters={controls:{exclude:/./}},Z.parameters={docs:{source:{code:K}}},Q=[`Standard`,`buttonHost`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input, context: any) => ({
  // eslint-disable-next-line new-cap
  input: Template(args, context).input,
  component: buttonComponent
})`,...Z.parameters?.docs?.source}}}})))()}$();export{X as Standard,Q as __namedExportsOrder,Z as buttonHost,Y as default};