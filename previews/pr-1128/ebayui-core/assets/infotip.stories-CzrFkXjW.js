import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{c as r,h as i,l as ee,n as a,r as o,s,t as c,u as l}from"./registry-95LfxIAE.js";import{t as u}from"./render-tag-hXgrwudm.js";import{t as d}from"./dynamic-tag-CCbAf3a9.js";import{t as f}from"./attr-tag--AgZ8oJt.js";import{t as p}from"./const-element-BfQ4jh6r.js";import{t as te}from"./icon-button-CW1rXrQU.js";import{n as ne,t as re}from"./ebay-information-16-icon-CdRnbimU.js";import{i as ie,n as ae,r as oe,t as se}from"./ebay-tooltip-base-fAx4OmP2.js";import{n as m,t as ce}from"./ebay-lightbox-dialog-BNurFw1I.js";var h;function g(){return(g=t((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-infotip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-infotip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-infotip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-infotip/examples)
`})))()}function _(){return(_=t((()=>{})))()}function v(){return(v=t((()=>{_(),te()})))()}var y;function b(){return(b=t((()=>{y=class extends Marko.Component{onInput(e){this.state={open:e.open||!1}}setOpen(e){this.input.variant===`modal`&&(this.state.open=e)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit(`expand`)}handleOverlayClose(){this.getComponent(`base`).collapse()}isExpanded(){return this.getComponent(`base`).isExpanded()}expand(){this.getComponent(`base`).expand()}collapse(){this.getComponent(`base`).collapse()}handleCollapse(){this.setOpen(!1),this.getEl(`host`).focus(),this.emit(`collapse`)}}})))()}var le,x,S,C,ue,w,T,E,D,O,k,A;function j(){return(j=t((()=>{le=l(),v(),r(),x=e(d()),ne(),S=e(u()),C=e(i()),ie(),ue=e(s()),ae(),w=f(),m(),b(),T=e(a()),E=c(),D=e(o()),O=`$`,k=(0,le.t)(O),(0,E.r)(O,()=>k),A=y,k._=(0,T.default)(function(e,t,n,r,i,a){let{a11yCloseButtonText:o,ariaLabel:s,class:c,content:l,disabled:u,heading:d,icon:f,open:p,pointer:te=`bottom`,variant:ne,noFlip:ie,noShift:ae,strategy:m,notInline:h,...g}=e;var _=e.variant===`modal`,v=_?`dialog--mini`:`infotip`;t.be(`span`,null,`0`,r,null,0),(0,S.default)(se,{open:i.open,type:v,overlayId:n.elId(`overlay`),noFlip:ie,noShift:ae,strategy:m,notInline:h,offset:e.offset,pointer:e.pointer,placement:e.placement,renderBody:e=>{e.be(`span`,(0,ue.default)(ee(g),{class:(0,C.default)([`infotip`,_===!0&&`dialog--mini`,c])}),`1`,r,null,4,{pa:{class:1}}),e.be(`button`,{class:(0,C.default)([`${v}__host`,`icon-btn`,`icon-btn--transparent`]),type:`button`,disabled:u,"aria-label":s},`@host`,r,null,0,{onclick:n.d(`click`,_&&`handleOpenModal`,!1)}),f?(0,x.default)(e,f,null,null,null,null,n,`2`):(0,S.default)(re,{},e,n,`3`),e.ee(),_!==!0&&(0,S.default)(oe,{type:`infotip`,id:n.elId(`overlay`),heading:d,content:l,a11yCloseText:o},e,n,`4`,[[`overlay-close`,`handleOverlayClose`,!1]]),e.ee()}},t,n,`@base`,[[`loaded`,`emit`,!1,[`loaded`]],[`base-expand`,_?void 0:`handleExpand`,!1],[`base-collapse`,_?void 0:`handleCollapse`,!1]]),t.ee(),_===!0&&(0,S.default)(ce,(0,w.i)(()=>((0,w.a)(`header`,{renderBody:e=>{(0,x.default)(e,d&&d.renderBody,null,null,null,null,n,`6`)}}),e=>{(0,x.default)(e,l,null,null,null,null,n,`7`)}),{open:i.open,a11yCloseText:o,ariaLabel:s}),t,n,`5`,[[`open`,`handleExpand`,!1],[`close`,`handleCollapse`,!1]])},{t:O},A),k.Component=(0,D.default)(A,k._)})))()}var M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{M=l(),N=f(),P=e(p()),j(),F=e(u()),I=e(a()),L=c(),R=e(o()),z=`WdkKChB`,B=(0,M.t)(z),V=(0,P.default)(`p`,null,1).t(`This is some important info`),(0,L.r)(z,()=>B),H={},B._=(0,I.default)(function(e,t,n,r,i,ee){(0,F.default)(k,(0,N.i)(()=>{(0,N.a)(`heading`,{renderBody:e=>{e.t(`Important`,r)}}),(0,N.a)(`content`,{renderBody:e=>{e.n(V,r)}})},{a11yCloseButtonText:`Dismiss infotip`,ariaLabel:`Important information`,...e,heading:void 0,content:void 0}),t,n,`0`,[[`loaded`,`emit`,!1,[`loaded`]],[`expand`,`emit`,!1,[`expand`]],[`collapse`,`emit`,!1,[`collapse`]]])},{t:z},H),B.Component=(0,R.default)(H,B._)})))()}var W;function de(){return(de=t((()=>{W=`class {}
<ebay-infotip
    a11yCloseButtonText="Dismiss infotip"
    ariaLabel="Important information"
    on-loaded("emit", "loaded")
    on-expand("emit", "expand")
    on-collapse("emit", "collapse")
    ...input
>
    <@heading>Important</@heading>
    <@content>
        <p>This is some important info</p>
    </@content>
</ebay-infotip>
`})))()}var G,K,q,fe,pe,me,he,J,Y,ge,X;function _e(){return(_e=t((()=>{G=l(),K=f(),q=e(p()),j(),fe=e(u()),pe=e(a()),me=c(),he=e(o()),J=`DOolBB1`,Y=(0,G.t)(J),ge=(0,q.default)(`p`,null,1).t(`This is some important info`),(0,me.r)(J,()=>Y),X={},Y._=(0,pe.default)(function(e,t,n,r,i,ee){(0,fe.default)(k,(0,K.i)(()=>{(0,K.a)(`heading`,{renderBody:e=>{e.t(`Important`,r)}}),(0,K.a)(`content`,{renderBody:e=>{e.n(ge,r)}})},{a11yCloseButtonText:`Dismiss infotip`,ariaLabel:`Important information`,open:!0,...e,heading:void 0,content:void 0}),t,n,`0`,[[`loaded`,`emit`,!1,[`loaded`]],[`expand`,`emit`,!1,[`expand`]],[`collapse`,`emit`,!1,[`collapse`]]])},{t:J,s:!0},X),Y.Component=(0,he.default)(X,Y._)})))()}var ve;function Z(){return(Z=t((()=>{ve=`<ebay-infotip
    a11yCloseButtonText="Dismiss infotip"
    ariaLabel="Important information"
    on-loaded("emit", "loaded")
    on-expand("emit", "expand")
    on-collapse("emit", "collapse")
    open
    ...input
>
    <@heading>Important</@heading>
    <@content>
        <p>This is some important info</p>
    </@content>
</ebay-infotip>
`})))()}var ye,Q,$,be;function xe(){return(xe=t((()=>{g(),j(),U(),de(),_e(),Z(),ye={title:`buttons/ebay-infotip`,component:k,parameters:{docs:{description:{component:h}}},argTypes:{heading:{name:`@heading`,table:{category:`@attribute tags`}},content:{name:`@content`,table:{category:`@attribute tags`}},icon:{name:`@icon`,table:{category:`@attribute tags`}},variant:{control:{type:`select`},options:[`default`,`modal`],description:`Either modal or default. If modal will show the mobile version of infotip`},placement:{options:[`top`,`right`,`bottom`,`left`,`top-start`,`right-start`,`bottom-start`,`left-start`,`top-end`,`right-end`,`bottom-end`,`left-end`],control:{type:`select`},description:`places infotip position`},offset:{control:{type:`number`},description:`offsets infotip position`,table:{defaultValue:{summary:`6`}}},noFlip:{control:{type:`boolean`},description:`disables flipping infotip when its offscreen`,table:{defaultValue:{summary:`false`}}},noShift:{control:{type:`boolean`},description:`disables shifting infotip when its offscreen`,table:{defaultValue:{summary:`false`}}},strategy:{description:"Positioning strategy for the overlay. Use `fixed` when a scrolling or `overflow: hidden` ancestor clips it.",control:{type:`inline-radio`},options:[`absolute`,`fixed`],table:{defaultValue:{summary:`absolute`}}},notInline:{control:{type:`boolean`},description:`disables moving infotip to be inline with content when it is rendered`,table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:`text`},description:`Localized, a11y text for close button`},ariaLabel:{control:{type:`text`},description:`A descriptive label of what the infotip button represents (e.g. "Important information")`},open:{control:{type:`boolean`},description:`allows dev to specify whether infotip is open or closed`},pointer:{control:{type:`select`},options:[`top`,`top-left`,`top-right`,`bottom`,`bottom-left`,`bottom-right`,`left`,`left-top`,`left-bottom`,`right`,`right-top`,`right-bottom`],description:`The position of the pointer. Note: Floating-UI flip middleware may adjust placement based on viewport space.`,table:{defaultValue:{summary:`bottom`}}},onCollapse:{action:`on-collapse`,description:`Triggered on menu collapse`,table:{category:`Events`,defaultValue:{summary:``}}},onExpand:{action:`on-expand`,description:`Triggered on menu expand`,table:{category:`Events`,defaultValue:{summary:``}}}}},Q=n(B,W,{a11yCloseButtonText:`Dismiss`,ariaLabel:`Info`}),$=n(Y,ve,{a11yCloseButtonText:`Dismiss`,ariaLabel:`Info`,open:!0}),be=[`Default`,`OpenOnRender`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss",
  ariaLabel: "Info"
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss",
  ariaLabel: "Info",
  open: true
})`,...$.parameters?.docs?.source}}}})))()}xe();export{Q as Default,$ as OpenOnRender,be as __namedExportsOrder,ye as default};