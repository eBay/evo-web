import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./utils-C7m-hPxw.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as c}from"./dynamic-tag-CCbAf3a9.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as u}from"./const-element-BfQ4jh6r.js";import{n as d,t as f}from"./ebay-button-ev-RMJXM.js";import{n as p,t as m}from"./ebay-dialog-base-BxJ4_-JJ.js";var h;function g(){return(g=t((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-confirm-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

Used to force the user to make a choice to either confirm or reject. Cannot be closed unless one of the two options are pressed. Pressing escape will trigger reject.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-confirm-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-confirm-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-confirm-dialog/examples)
`})))()}function _(){return(_=t((()=>{})))()}function v(){return(v=t((()=>{_()})))()}var y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{y=o(),v(),b=e(c()),d(),x=e(s()),S=l(),p(),C=e(r()),w=a(),T=e(i()),E=`A`,D=(0,y.t)(E),O=[`destructive`],(0,w.r)(E,()=>D),k={},D._=(0,C.default)(function(e,t,n,r,i,a){var o=r.getElId(`confirm-dialog-cancel`),s=r.getElId(`confirm-dialog-confirm`),c=r.getElId(`confirm-dialog-main`);let{confirmCtaVariant:l,rejectText:u,confirmText:d,class:p,reject:h,confirm:g,renderBody:_,...v}=e,{renderBody:y,...C}=g||{},{renderBody:w,...T}=h||{};(0,x.default)(m,(0,S.i)(()=>((0,S.a)(`footer`,{renderBody:e=>{(0,x.default)(f,{id:o,class:`confirm-dialog__reject`,...T,renderBody:e=>{u?e.t(u,r):(0,b.default)(e,w,null,null,null,null,n,`2`)}},e,n,`1`,[[`click`,`emit`,!1,[`reject`]]]),(0,x.default)(f,{priority:`primary`,id:s,ariaDescribedby:c,class:[`confirm-dialog__confirm`,l&&O.includes(l)&&`btn--${l}`],...C,renderBody:e=>{d?e.t(d,r):(0,b.default)(e,y,null,null,null,null,n,`4`)}},e,n,`3`,[[`click`,`emit`,!1,[`confirm`]]])}}),e=>{(0,b.default)(e,_,null,null,null,null,n,`5`)}),{...v,mainId:c,focus:s,transitionList:[`opacity`,`transform`,`background-color`],classPrefix:`confirm-dialog`,class:[p,`confirm-dialog--mask-fade`],windowClass:[`confirm-dialog__window--animate`],buttonPosition:`hidden`,footer:void 0}),t,n,`0`,[[`open`,`emit`,!1,[`open`]],[`close`,`emit`,!1,[`close`]],[`escape`,`emit`,!1,[`reject`]]])},{t:E,s:!0},k),D.Component=(0,T.default)(k,D._)})))()}var j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{j=o(),M=e(c()),N=l(),P=e(u()),A(),F=e(s()),d(),I=e(r()),L=a(),R=e(i()),z=`CEQJHnu`,B=(0,j.t)(z),V=(0,P.default)(`p`,null,1).t(`This 'confirm' text should be 1-2 lines.`),(0,L.r)(z,()=>B),H={onInput(e){this.state={open:e.open}},openDialog(){this.state.open=!0},onCreate(){this.closeDialog=e=>{this.state.open=!1,this.emit(`reject`,e)},this.success=e=>{this.state.open=!1,this.emit(`confirm`,e)}}},B._=(0,I.default)(function(e,t,n,r,i,a){let{header:o,confirm:s,reject:c,...l}=e;(0,F.default)(D,(0,N.i)(()=>((0,N.a)(`header`,{...o,renderBody:e=>{(0,M.default)(e,o.renderBody,null,null,null,null,n,`1`)}}),(0,N.a)(`confirm`,{...s,renderBody:e=>{(0,M.default)(e,s.renderBody,null,null,null,null,n,`2`)}}),(0,N.a)(`reject`,{...c,renderBody:e=>{(0,M.default)(e,c.renderBody,null,null,null,null,n,`3`)}}),t=>{(0,M.default)(t,e.renderBody,null,null,null,null,n,`4`),t.n(V,r)}),{open:i.open,...l,header:void 0,confirm:void 0,reject:void 0}),t,n,`0`,[[`open`,`emit`,!1,[`open`]],[`close`,`emit`,!1,[`close`]],[`reject`,`closeDialog`,!1],[`confirm`,`success`,!1]]),(0,F.default)(f,{renderBody:e=>{e.t(`Open Confirm Dialog`,r)}},t,n,`6`,[[`click`,`openDialog`,!1]])},{t:z},H),B.Component=(0,R.default)(H,B._)})))()}var W;function G(){return(G=t((()=>{W=`import type { Input as ConfirmDialogInput } from "<ebay-confirm-dialog>";
export interface Input {
    open?: boolean;
    renderBody?: Marko.Body;
    header: {
        renderBody?: Marko.Body;
    };
    reject: {
        renderBody?: Marko.Body;
    };
    confirm: {
        renderBody?: Marko.Body;
    };
}
$ const { header, confirm, reject, ...dialogBaseInput } = input;

<ebay-confirm-dialog
    open=state.open
    on-open("emit", "open")
    on-close("emit", "close")
    on-reject("closeDialog")
    on-confirm("success")
    ...dialogBaseInput
>
    <@header ...header>
        <\${header.renderBody}/>
    </@header>
    <@confirm ...confirm>
        <\${confirm.renderBody}/>
    </@confirm>
    <@reject ...reject>
        <\${reject.renderBody}/>
    </@reject>
    <\${input.renderBody}/>
    <p>This 'confirm' text should be 1-2 lines.</p>
</ebay-confirm-dialog>

<ebay-button on-click("openDialog")>
    Open Confirm Dialog
</ebay-button>
class {
    declare state: {
        open?: boolean;
    };
    onInput(input: Input) {
        this.state = { open: input.open };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog: ConfirmDialogInput["on-reject"] = (e: Event) => {
        this.state.open = false;
        this.emit("reject", e);
    };
    success: ConfirmDialogInput["on-confirm"] = (e) => {
        this.state.open = false;
        this.emit("confirm", e);
    };
}
`})))()}var K,q,J,Y;function X(){return(X=t((()=>{g(),U(),G(),K=e=>({input:n(e)}),q={title:`dialogs/ebay-confirm-dialog`,component:B,parameters:{docs:{description:{component:h}}},argTypes:{open:{type:`boolean`,control:{type:`boolean`},description:`Whether dialog is open.`,table:{disable:!0}},closeFocus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened`},confirm:{name:`@confirm`,table:{category:`@attribute tags`},description:`Render body will be text for confirm button`},reject:{name:`@reject`,table:{category:`@attribute tags`},description:`Render body will be text for reject button`},header:{name:`@header`,table:{category:`@attribute tags`}},confirmCtaVariant:{options:[`none`,`destructive`],description:`The alternative main CTA button variant to use.`,table:{defaultValue:{summary:`none`}},type:{category:`Options`}},confirmText:{control:{type:`text`},description:`Text for confirm button`},rejectText:{control:{type:`text`},description:`Text for reject button`},onOpen:{action:`on-open`,description:`Triggered on dialog open`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`on-close`,description:`Triggered when dialog is closed`,table:{category:`Events`,defaultValue:{summary:``}}},onConfirm:{action:`on-confirm`,description:`Triggered on dialog confirm button click`,table:{category:`Events`,defaultValue:{summary:``}}},onReject:{action:`on-reject`,description:`Triggered when reject button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}}}},J=K.bind({}),J.args={header:{renderBody:`Delete Address?`},confirm:{renderBody:`Delete`},reject:{renderBody:`Cancel`},renderBody:`You will permanently lose this address.`},J.parameters={docs:{source:{code:W}}},Y=[`Default`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...J.parameters?.docs?.source}}}})))()}X();export{J as Default,Y as __namedExportsOrder,q as default};