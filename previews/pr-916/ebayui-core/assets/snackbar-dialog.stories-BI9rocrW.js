import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as c}from"./dynamic-tag-CCbAf3a9.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{n as u,t as d}from"./ebay-button-ev-RMJXM.js";import{n as ee,t as te}from"./ebay-dialog-base-BxJ4_-JJ.js";import{n as ne,t as re}from"./ebay-fake-link-BmUK378k.js";var f;function p(){return(p=t((()=>{f=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-snackbar-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

\`\`\`marko
<ebay-snackbar-dialog>Basic Snackbar</ebay-snackbar-dialog>
\`\`\`

A snackbar is a non-modal dialog that appears in response to a lightweight user action. It disappears automatically after a minimum of 6 seconds.

The user usually will want to manage the state of the snackbar, and so should provide the open state as a boolean as well as a function to synchronize the app state with the snackbar state when the on-close event occurs.

In the case where the application developer only wants to manage the initial state of the snackbar, the dev can choose to provide only the open state as a boolean. This is useful when a dev wants the snackbar to appear only once on initial render and then disappear.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-snackbar-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-snackbar-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-snackbar-dialog/examples)
`})))()}function m(){return(m=t((()=>{})))()}function h(){return(h=t((()=>{m()})))()}var g,_;function v(){return(v=t((()=>{g=6e3,_=class extends Marko.Component{_clearTimeout(){clearTimeout(this.timeout)}_setupTimeout(){this.state.open!==!1&&(this.timeout=setTimeout(()=>{this.state.open=!1},g))}onInput(e){this.state={open:e.open??(this.state.open||!1)}}onMount(){this._setupTimeout()}onUpdate(){this._setupTimeout()}onRender(){typeof window<`u`&&this._clearTimeout()}onDestroy(){this._clearTimeout()}onCreate(){this.eventSet=new Set,this.state={open:!1}}handleAction(){this._clearTimeout(),this.emit(`action`),this.state.open=!1}handleFocus(){this._clearTimeout(),this.eventSet.add(`focus`)}handleBlur(){this.eventSet.delete(`focus`),this.eventSet.size===0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},g))}handleMouseEnter(){this._clearTimeout(),this.eventSet.add(`mouseOver`)}handleMouseLeave(){this.eventSet.delete(`mouseOver`),this.eventSet.size===0&&this.state.open===!0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},g))}handleClose(){this._clearTimeout(),this.state.open=!1,this.emit(`close`)}}})))()}var y,b,x,S,C,ie,ae,w,T,E;function D(){return(D=t((()=>{y=o(),h(),b=e(c()),ne(),x=e(s()),S=l(),ee(),v(),C=e(r()),ie=a(),ae=e(i()),w=`Db`,T=(0,y.t)(w),(0,ie.r)(w,()=>T),E=_,T._=(0,C.default)(function(e,t,n,r,i,a){let{action:o,class:s,layout:c,open:l,renderBody:u,...d}=e;(0,x.default)(te,(0,S.i)(()=>(o&&(0,S.a)(`action`,{renderBody:e=>{(0,x.default)(re,{...o,accesskey:o.accesskey||o.accessKey,renderBody:e=>{(0,b.default)(e,o.renderBody,null,null,null,null,n,`2`),e.be(`span`,{class:`clipped`},`3`,r,null,1),e.t(`- Access Key: `,r),e.t(o.accesskey||o.accessKey,r),e.ee()}},e,n,`1`,[[`click`,`handleAction`,!1],[`focus`,`handleFocus`,!1],[`blur`,`handleBlur`,!1]])}}),e=>{(0,b.default)(e,u,null,null,null,null,n,`4`)}),{...d,open:i.open,isModal:!1,classPrefix:`snackbar-dialog`,class:[s,`snackbar-dialog--transition`],windowClass:[c===`column`&&`snackbar-dialog__window--column`],buttonPosition:`hidden`,transitionList:[`transform`],action:void 0}),t,n,`0`,[[`close`,`handleClose`,!1],[`open`,`emit`,!1,[`open`]],[`mouseEnter`,`handleMouseEnter`,!1],[`mouseLeave`,`handleMouseLeave`,!1]])},{t:w},E),T.Component=(0,ae.default)(E,T._)})))()}var O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{O=o(),u(),k=e(s()),D(),A=e(r()),j=a(),M=e(i()),N=`AsRcdrI`,P=(0,O.t)(N),(0,j.r)(N,()=>P),F={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit(`close`)}},P._=(0,A.default)(function(e,t,n,r,i,a){(0,k.default)(d,{renderBody:e=>{e.t(`Open Default Snackbar`,r)}},t,n,`0`,[[`click`,`handleOpen`,!1]]),(0,k.default)(T,{open:i.open,...e,renderBody:e=>{e.t(`This 'snackbar' text should be 1-2 lines.`,r)}},t,n,`1`,[[`close`,`handleClose`,!1],[`open`,`emit`,!1,[`open`]]])},{t:N},F),P.Component=(0,M.default)(F,P._)})))()}var L;function R(){return(R=t((()=>{L=`export interface Input {
    snacktext: string;
}
class {
    declare state: {
        open: boolean;
    };

    onCreate() {
        this.state = { open: false };
    }

    handleOpen() {
        this.state.open = true;
    }

    handleClose() {
        this.state.open = false;
        this.emit("close");
    }
}
<ebay-button on-click("handleOpen")>
    Open Default Snackbar
</ebay-button>
<ebay-snackbar-dialog
    open=state.open
    on-close("handleClose")
    on-open("emit", "open")
    ...input
>
    This 'snackbar' text should be 1-2 lines.
</ebay-snackbar-dialog>
`})))()}var z,B,V,H,U,W,G,K,q;function J(){return(J=t((()=>{z=o(),u(),B=e(s()),V=l(),D(),H=e(r()),U=a(),W=e(i()),G=`GlmkQTH`,K=(0,z.t)(G),(0,U.r)(G,()=>K),q={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit(`close`)}},K._=(0,H.default)(function(e,t,n,r,i,a){(0,B.default)(d,{renderBody:e=>{e.t(`Open Action Snackbar`,r)}},t,n,`0`,[[`click`,`handleOpen`,!1]]),(0,B.default)(T,(0,V.i)(()=>((0,V.a)(`action`,{accesskey:`U`,renderBody:e=>{e.t(`Undo`,r)}}),e=>{e.t(`This 'snackbar' text should be 1-2 lines.`,r)}),{open:i.open,...e,action:void 0}),t,n,`1`,[[`close`,`handleClose`,!1],[`open`,`emit`,!1,[`open`]],[`action`,`emit`,!1,[`action`]]])},{t:G},q),K.Component=(0,W.default)(q,K._)})))()}var Y;function X(){return(X=t((()=>{Y=`class {
    declare state: {
        open: boolean;
    };

    onCreate() {
        this.state = { open: false };
    }

    handleOpen() {
        this.state.open = true;
    }

    handleClose() {
        this.state.open = false;
        this.emit("close");
    }
}
<ebay-button on-click("handleOpen")>
    Open Action Snackbar
</ebay-button>
<ebay-snackbar-dialog
    open=state.open
    on-close("handleClose")
    on-open("emit", "open")
    on-action("emit", "action")
    ...input
>
    <@action accesskey="U">
        Undo
    </@action>
    This 'snackbar' text should be 1-2 lines.
</ebay-snackbar-dialog>
`})))()}var Z,Q,$,oe;function se(){return(se=t((()=>{p(),D(),I(),R(),J(),X(),Z={title:`dialogs/ebay-snackbar-dialog`,component:T,parameters:{docs:{description:{component:f}}},argTypes:{open:{type:`boolean`,control:{type:`boolean`},table:{disable:!0}},layout:{type:`enum`,control:{type:`radio`},options:[`row`,`column`]},action:{name:`@action`,description:`If present, shows an action button on snackbar`,table:{category:`@attribute tags`}},onOpen:{action:`on-open`,description:`Triggered on dialog opened`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`on-close`,description:`Triggered on dialog closed.`,table:{category:`Events`,defaultValue:{summary:``}}},onAction:{action:`on-action`,description:`Triggered on action pressed`,table:{category:`Events`,defaultValue:{summary:``}}}}},Q=n(P,L),$=n(K,Y),oe=[`Default`,`WithAction`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(defaultTemplate, defaultTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withActionTemplate, withActionTemplateCode)`,...$.parameters?.docs?.source}}}})))()}se();export{Q as Default,$ as WithAction,oe as __namedExportsOrder,Z as default};