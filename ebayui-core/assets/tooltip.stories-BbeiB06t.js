import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{t as r}from"./utils-C7m-hPxw.js";import{c as i,l as ee,n as a,r as o,s,t as c,u as l}from"./registry-95LfxIAE.js";import{t as u}from"./render-tag-hXgrwudm.js";import{t as d}from"./dynamic-tag-CCbAf3a9.js";import{t as f}from"./attr-tag--AgZ8oJt.js";import{t as p}from"./const-element-BfQ4jh6r.js";import{a as m,c as h}from"./event-utils-Bu5IuP5L.js";import{t as g}from"./icon-button-CW1rXrQU.js";import{n as _,t as te}from"./subscribe-i6MKJXfO.js";import{t as ne}from"./tooltip-CpYdxX3o.js";import{n as re,t as ie}from"./ebay-cart-24-icon-CcOWeDTM.js";import{i as ae,n as oe,r as se,t as ce}from"./ebay-tooltip-base-fAx4OmP2.js";var v;function y(){return(y=t((()=>{v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function b(){return(b=t((()=>{g(),ne()})))()}var x;function S(){return(S=t((()=>{h(),x=class extends Marko.Component{onCreate(){this.state={open:!1}}onInput(e){(e.open===!0||e.open===!1)&&(this.state.open=e.open)}handleExpand(){this.state.open=!0,this.emit(`expand`)}handleCollapse(){this.state.open=!1,this.emit(`collapse`)}handleKeydown(e){m(e,()=>{this.state.open=!1})}}})))()}var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{C=l(),b(),i(),_(),w=e(u()),T=e(d()),ae(),E=e(s()),oe(),S(),D=e(a()),O=c(),k=e(o()),A=`Pb`,j=(0,C.t)(A),M=typeof window<`u`,(0,O.r)(A,()=>j),N=x,j._=(0,D.default)(function(e,t,n,r,i,a){let{content:o,heading:s,host:c,noHover:l,offset:u,placement:d,pointer:f=`bottom`,noShift:p,strategy:m,notInline:h,noFlip:g,..._}=e;M&&i.open&&(0,w.default)(te,{to:typeof window==`object`&&document,__events:[`on`,`keydown`]},t,n,`0`,[[`keydown`,`handleKeydown`,!1]]),t.be(`span`,null,`1`,r,null,0),(0,w.default)(ce,{open:i.open,type:`tooltip`,overlayId:n.elId(`overlay`),noFlip:g,notInline:h,noShift:p,strategy:m,noHover:l,pointer:f,placement:d,offset:u,renderBody:e=>{e.be(`span`,(0,E.default)(ee(_),{class:`tooltip`}),`2`,r,null,4,{pa:{class:1}}),(0,T.default)(e,c,null,null,null,null,n,`3`),(0,w.default)(se,{type:`tooltip`,id:n.elId(`overlay`),heading:s,content:o},e,n,`4`),e.ee()}},t,n,`@base`,[[`loaded`,`emit`,!1,[`loaded`]],[`base-expand`,`handleExpand`,!1],[`base-collapse`,`handleCollapse`,!1]]),t.ee()},{t:A},N),j.Component=(0,k.default)(N,j._)})))()}var F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{F=l(),re(),I=e(u()),L=f(),R=e(p()),P(),z=e(a()),B=c(),V=e(o()),H=`V3jhqT2`,U=(0,F.t)(H),W=(0,R.default)(`p`,null,1).t(`Use Access Key 'S' to display settings.`),(0,B.r)(H,()=>U),G={},U._=(0,z.default)(function(e,t,n,r,i,ee){(0,I.default)(j,(0,L.i)(()=>{(0,L.a)(`host`,{renderBody:e=>{e.be(`button`,{name:`icon-btn-1`,accesskey:`i`,class:`icon-btn tooltip__host`,type:`button`,"aria-label":`Developer-handled label`},`1`,r,null,0),(0,I.default)(ie,{},e,n,`2`),e.ee()}}),(0,L.a)(`content`,{renderBody:e=>{e.n(W,r)}})},{open:e.open}),t,n,`0`)},{t:H,i:!0},G),U.Component=(0,V.default)(G,U._)})))()}var q;function J(){return(J=t((()=>{q=`export interface Input {
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
`})))()}var Y,le,X,Z,Q;function $(){return($=t((()=>{y(),P(),K(),J(),Y=e=>({input:r(e)}),le={title:`notices & tips/ebay-tooltip`,component:j,parameters:{docs:{description:{component:v}}},argTypes:{placement:{options:[`top`,`right`,`bottom`,`left`,`top-start`,`right-start`,`bottom-start`,`left-start`,`top-end`,`right-end`,`bottom-end`,`left-end`],control:{type:`select`},description:`places tooltip position`},offset:{control:{type:`number`},description:`offsets tooltip position`},noHover:{control:{type:`boolean`},description:`disable hover (and only use focus) to open the tooltip`},host:{name:`@host`,description:`The body which will be wrapped as the tooltip's host`,table:{category:`@attribute tags`}},content:{name:`@content`,description:`The content to be displayed in the tooltip`,table:{category:`@attribute tags`}},open:{control:{type:`boolean`},description:`allows dev to specify whether tooltip is open or closed`},noFlip:{control:{type:`boolean`},description:`disables flipping tooltip when its offscreen`,table:{defaultValue:{summary:`false`}}},noShift:{control:{type:`boolean`},description:`disables shifting tooltip when its offscreen`,table:{defaultValue:{summary:`false`}}},strategy:{description:"Positioning strategy for the overlay. Use `fixed` when a scrolling or `overflow: hidden` ancestor clips it.",control:{type:`inline-radio`},options:[`absolute`,`fixed`],table:{defaultValue:{summary:`absolute`}}},notInline:{control:{type:`boolean`},description:`disables moving tooltip to be inline with content when it is rendered`,table:{defaultValue:{summary:`false`}}},onCollapse:{action:`on-collapse`,description:`Triggered on menu collapse`,table:{category:`Events`,defaultValue:{summary:``}}},onExpand:{action:`on-expand`,description:`Triggered on menu expand`,table:{category:`Events`,defaultValue:{summary:``}}},onLoaded:{action:`on-loaded`,description:`Triggered when tooltip finishes loading`,table:{category:`Events`}}}},X=Y.bind({}),X.args={host:{renderBody:`<a href="https://www.ebay.com" class="tooltip__host">View options</a>`},content:{renderBody:`<p>Use Access Key 'S' to display settings.</p>`}},X.parameters={docs:{source:{code:n(`ebay-tooltip`,X.args)}}},Z=(e,t)=>({input:Y(e,t).input,component:U}),Z.parameters={controls:{exclude:/./}},Z.parameters={docs:{source:{code:q}}},Q=[`Standard`,`buttonHost`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input, context: any) => ({
  // eslint-disable-next-line new-cap
  input: Template(args, context).input,
  component: buttonComponent
})`,...Z.parameters?.docs?.source}}}})))()}$();export{X as Standard,Q as __namedExportsOrder,Z as buttonHost,le as default};