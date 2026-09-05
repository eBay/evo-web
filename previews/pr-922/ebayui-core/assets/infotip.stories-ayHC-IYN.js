import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{c as r,h as i,l as ee,n as a,r as o,s,t as c,u as l}from"./registry-95LfxIAE.js";import{t as u}from"./render-tag-hXgrwudm.js";import{t as d}from"./dynamic-tag-CCbAf3a9.js";import{t as f}from"./attr-tag--AgZ8oJt.js";import{t as p}from"./const-element-BfQ4jh6r.js";import{t as te}from"./icon-button-BNGaPj6P.js";import{n as ne,t as re}from"./ebay-information-16-icon-ByzV8KIo.js";import{i as ie,n as ae,r as oe,t as se}from"./ebay-tooltip-base-B4EnD-sy.js";import{n as m,t as ce}from"./ebay-lightbox-dialog-DUEKL-s2.js";var h;function g(){return(g=t((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function _(){return(_=t((()=>{})))()}function v(){return(v=t((()=>{_(),te()})))()}var y;function le(){return(le=t((()=>{y=class extends Marko.Component{onInput(e){this.state={open:e.open||!1}}setOpen(e){this.input.variant===`modal`&&(this.state.open=e)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit(`expand`)}handleOverlayClose(){this.getComponent(`base`).collapse()}isExpanded(){return this.getComponent(`base`).isExpanded()}expand(){this.getComponent(`base`).expand()}collapse(){this.getComponent(`base`).collapse()}handleCollapse(){this.setOpen(!1),this.getEl(`host`).focus(),this.emit(`collapse`)}}})))()}var ue,b,x,S,de,C,w,T,E,D,O,k;function A(){return(A=t((()=>{ue=l(),v(),r(),b=e(d()),ne(),x=e(u()),S=e(i()),ie(),de=e(s()),ae(),C=f(),m(),le(),w=e(a()),T=c(),E=e(o()),D=`$`,O=(0,ue.t)(D),(0,T.r)(D,()=>O),k=y,O._=(0,w.default)(function(e,t,n,r,i,a){let{a11yCloseButtonText:o,ariaLabel:s,class:c,content:l,disabled:u,heading:d,icon:f,open:p,pointer:te=`bottom`,variant:ne,noFlip:ie,noShift:ae,notInline:m,...h}=e;var g=e.variant===`modal`,_=g?`dialog--mini`:`infotip`;t.be(`span`,null,`0`,r,null,0),(0,x.default)(se,{open:i.open,type:_,overlayId:n.elId(`overlay`),noFlip:ie,noShift:ae,notInline:m,offset:e.offset,pointer:e.pointer,placement:e.placement,renderBody:e=>{e.be(`span`,(0,de.default)(ee(h),{class:(0,S.default)([`infotip`,g===!0&&`dialog--mini`,c])}),`1`,r,null,4,{pa:{class:1}}),e.be(`button`,{class:(0,S.default)([`${_}__host`,`icon-btn`,`icon-btn--transparent`]),type:`button`,disabled:u,"aria-label":s},`@host`,r,null,0,{onclick:n.d(`click`,g&&`handleOpenModal`,!1)}),f?(0,b.default)(e,f,null,null,null,null,n,`2`):(0,x.default)(re,{},e,n,`3`),e.ee(),g!==!0&&(0,x.default)(oe,{type:`infotip`,id:n.elId(`overlay`),heading:d,content:l,a11yCloseText:o},e,n,`4`,[[`overlay-close`,`handleOverlayClose`,!1]]),e.ee()}},t,n,`@base`,[[`loaded`,`emit`,!1,[`loaded`]],[`base-expand`,g?void 0:`handleExpand`,!1],[`base-collapse`,g?void 0:`handleCollapse`,!1]]),t.ee(),g===!0&&(0,x.default)(ce,(0,C.i)(()=>((0,C.a)(`header`,{renderBody:e=>{(0,b.default)(e,d&&d.renderBody,null,null,null,null,n,`6`)}}),e=>{(0,b.default)(e,l,null,null,null,null,n,`7`)}),{open:i.open,a11yCloseText:o,ariaLabel:s}),t,n,`5`,[[`open`,`handleExpand`,!1],[`close`,`handleCollapse`,!1]])},{t:D},k),O.Component=(0,E.default)(k,O._)})))()}var j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{j=l(),M=f(),N=e(p()),A(),P=e(u()),F=e(a()),I=c(),L=e(o()),R=`WdkKChB`,z=(0,j.t)(R),B=(0,N.default)(`p`,null,1).t(`This is some important info`),(0,I.r)(R,()=>z),V={},z._=(0,F.default)(function(e,t,n,r,i,ee){(0,P.default)(O,(0,M.i)(()=>{(0,M.a)(`heading`,{renderBody:e=>{e.t(`Important`,r)}}),(0,M.a)(`content`,{renderBody:e=>{e.n(B,r)}})},{a11yCloseButtonText:`Dismiss infotip`,ariaLabel:`Important information`,...e,heading:void 0,content:void 0}),t,n,`0`,[[`loaded`,`emit`,!1,[`loaded`]],[`expand`,`emit`,!1,[`expand`]],[`collapse`,`emit`,!1,[`collapse`]]])},{t:R},V),z.Component=(0,L.default)(V,z._)})))()}var U;function W(){return(W=t((()=>{U=`class {}
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
`})))()}var G,K,q,fe,pe,me,he,J,Y,ge,X;function _e(){return(_e=t((()=>{G=l(),K=f(),q=e(p()),A(),fe=e(u()),pe=e(a()),me=c(),he=e(o()),J=`DOolBB1`,Y=(0,G.t)(J),ge=(0,q.default)(`p`,null,1).t(`This is some important info`),(0,me.r)(J,()=>Y),X={},Y._=(0,pe.default)(function(e,t,n,r,i,ee){(0,fe.default)(O,(0,K.i)(()=>{(0,K.a)(`heading`,{renderBody:e=>{e.t(`Important`,r)}}),(0,K.a)(`content`,{renderBody:e=>{e.n(ge,r)}})},{a11yCloseButtonText:`Dismiss infotip`,ariaLabel:`Important information`,open:!0,...e,heading:void 0,content:void 0}),t,n,`0`,[[`loaded`,`emit`,!1,[`loaded`]],[`expand`,`emit`,!1,[`expand`]],[`collapse`,`emit`,!1,[`collapse`]]])},{t:J,s:!0},X),Y.Component=(0,he.default)(X,Y._)})))()}var ve;function Z(){return(Z=t((()=>{ve=`<ebay-infotip
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
`})))()}var ye,Q,$,be;function xe(){return(xe=t((()=>{g(),A(),H(),W(),_e(),Z(),ye={title:`buttons/ebay-infotip`,component:O,parameters:{docs:{description:{component:h}}},argTypes:{heading:{name:`@heading`,table:{category:`@attribute tags`}},content:{name:`@content`,table:{category:`@attribute tags`}},icon:{name:`@icon`,table:{category:`@attribute tags`}},variant:{control:{type:`select`},options:[`default`,`modal`],description:`Either modal or default. If modal will show the mobile version of infotip`},placement:{options:[`top`,`right`,`bottom`,`left`,`top-start`,`right-start`,`bottom-start`,`left-start`,`top-end`,`right-end`,`bottom-end`,`left-end`],control:{type:`select`},description:`places infotip position`},offset:{control:{type:`number`},description:`offsets infotip position`,table:{defaultValue:{summary:`6`}}},noFlip:{control:{type:`boolean`},description:`disables flipping infotip when its offscreen`,table:{defaultValue:{summary:`false`}}},noShift:{control:{type:`boolean`},description:`disables shifting infotip when its offscreen`,table:{defaultValue:{summary:`false`}}},notInline:{control:{type:`boolean`},description:`disables moving infotip to be inline with content when it is rendered`,table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:`text`},description:`Localized, a11y text for close button`},ariaLabel:{control:{type:`text`},description:`A descriptive label of what the infotip button represents (e.g. "Important information")`},open:{control:{type:`boolean`},description:`allows dev to specify whether infotip is open or closed`},pointer:{control:{type:`select`},options:[`top`,`top-left`,`top-right`,`bottom`,`bottom-left`,`bottom-right`,`left`,`left-top`,`left-bottom`,`right`,`right-top`,`right-bottom`],description:`The position of the pointer. Note: Floating-UI flip middleware may adjust placement based on viewport space.`,table:{defaultValue:{summary:`bottom`}}},onCollapse:{action:`on-collapse`,description:`Triggered on menu collapse`,table:{category:`Events`,defaultValue:{summary:``}}},onExpand:{action:`on-expand`,description:`Triggered on menu expand`,table:{category:`Events`,defaultValue:{summary:``}}}}},Q=n(z,U,{a11yCloseButtonText:`Dismiss infotip`,ariaLabel:`Important information`}),$=n(Y,ve,{a11yCloseButtonText:`Dismiss infotip`,ariaLabel:`Important information`,open:!0}),be=[`Default`,`OpenOnRender`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information"
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information",
  open: true
})`,...$.parameters?.docs?.source}}}})))()}xe();export{Q as Default,$ as OpenOnRender,be as __namedExportsOrder,ye as default};