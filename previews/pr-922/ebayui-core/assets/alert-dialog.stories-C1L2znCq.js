import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./utils-C7m-hPxw.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as c}from"./dynamic-tag-CCbAf3a9.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as u}from"./const-element-BfQ4jh6r.js";import{n as d,t as f}from"./ebay-button-ev-RMJXM.js";import{n as p,t as m}from"./ebay-dialog-base-BxJ4_-JJ.js";var h;function g(){return(g=t((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-alert-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

Used to force the user to read an import message. The dialog will only be dismissed when the user presses the confirm button. This is the only way to close the dialog.

\`\`\`marko
<ebay-alert-dialog open alert-text="Confirm">
    <@header>Title</@header>
    <p>Hello some important info</p>
</ebay-alert-dialog>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-alert-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-alert-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-alert-dialog/examples)
`})))()}function _(){return(_=t((()=>{})))()}function v(){return(v=t((()=>{_()})))()}var y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{y=o(),v(),b=e(c()),d(),x=e(s()),S=l(),p(),C=e(r()),w=a(),T=e(i()),E=`h`,D=(0,y.t)(E),(0,w.r)(E,()=>D),O={},D._=(0,C.default)(function(e,t,n,r,i,a){var o=r.getElId(`alert-dialog-confirm`),s=r.getElId(`alert-dialog-main`);let{class:c,confirmText:l,confirm:u,renderBody:d,...p}=e,{renderBody:h,...g}=u||{};(0,x.default)(m,(0,S.i)(()=>((0,S.a)(`footer`,{renderBody:e=>{(0,x.default)(f,{priority:`primary`,ariaDescribedby:s,id:o,class:`alert-dialog__acknowledge`,...g,renderBody:e=>{l?e.t(l,r):(0,b.default)(e,h,null,null,null,null,n,`1`)}},e,n,`@confirm`,[[`click`,`emit`,!1,[`confirm`]]])}}),e=>{(0,b.default)(e,d,null,null,null,null,n,`2`)}),{...p,role:`alertdialog`,classPrefix:`alert-dialog`,ignoreEscape:!0,mainId:s,transitionList:[`opacity`,`transform`,`background-color`],buttonPosition:`hidden`,focus:o,class:[c,`alert-dialog--mask-fade`],windowClass:[`alert-dialog__window alert-dialog__window--animate`],footer:void 0}),t,n,`0`,[[`open`,`emit`,!1,[`open`]],[`close`,`emit`,!1,[`close`]]])},{t:E,s:!0},O),D.Component=(0,T.default)(O,D._)})))()}var A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{A=o(),j=e(c()),M=l(),N=e(u()),k(),P=e(s()),d(),F=e(r()),I=a(),L=e(i()),R=`ZJ5wqBa`,z=(0,A.t)(R),B=(0,N.default)(`p`,null,1).t(`This 'alert' text should be 1-2 lines.`),(0,I.r)(R,()=>z),V={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit(`confirm`)}},z._=(0,F.default)(function(e,t,n,r,i,a){(0,P.default)(D,(0,M.i)(()=>((0,M.a)(`header`,{renderBody:t=>{(0,j.default)(t,e.header.renderBody,null,null,null,null,n,`1`)}}),(0,M.a)(`confirm`,{renderBody:t=>{(0,j.default)(t,e.confirm.renderBody,null,null,null,null,n,`2`)}}),t=>{(0,j.default)(t,e.renderBody,null,null,null,null,n,`3`),t.n(B,r)}),{open:i.open,...e,header:void 0,confirm:void 0}),t,n,`0`,[[`open`,`emit`,!1,[`open`]],[`close`,`emit`,!1,[`close`]],[`confirm`,`closeDialog`,!1]]),(0,P.default)(f,{renderBody:e=>{e.t(`Open Alert Dialog`,r)}},t,n,`5`,[[`click`,`openDialog`,!1]])},{t:R},V),z.Component=(0,L.default)(V,z._)})))()}var U;function W(){return(W=t((()=>{U=`export interface Input {
    renderBody?: Marko.Body;
    header: {
        renderBody?: Marko.Body;
    };
    confirm: {
        renderBody?: Marko.Body;
    };
}

<ebay-alert-dialog
    open=state.open
    on-open("emit", "open")
    on-close("emit", "close")
    on-confirm("closeDialog")
    ...input
>
    <@header>
        <\${input.header.renderBody}/>
    </@header>
    <@confirm>
        <\${input.confirm.renderBody}/>
    </@confirm>
    <\${input.renderBody}/>
    <p>This 'alert' text should be 1-2 lines.</p>
</ebay-alert-dialog>

<ebay-button on-click("openDialog")>
    Open Alert Dialog
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
        this.emit("confirm");
    }
}
`})))()}var G,K,q,J;function Y(){return(Y=t((()=>{g(),H(),W(),G=e=>({input:n(e)}),K={title:`dialogs/ebay-alert-dialog`,component:z,parameters:{docs:{description:{component:h}}},argTypes:{open:{type:`boolean`,control:{type:`boolean`},description:`Whether dialog is open.`,table:{disable:!0}},closeFocus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened`},confirm:{name:`@confirm`,table:{category:`@attribute tags`},description:`Render body will be text for OK button`},header:{name:`@header`,table:{category:`@attribute tags`}},confirmText:{control:{type:`text`},description:`Text for confirm button`},onOpen:{action:`on-open`,description:`Triggered on dialog open`,table:{category:`Events`,defaultValue:{summary:``}}},onConfirm:{action:`on-confirm`,description:`Triggered on dialog confirm button click`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`on-close`,description:`Triggered when dialog is closed`,table:{category:`Events`,defaultValue:{summary:``}}}}},q=G.bind({}),q.args={header:{renderBody:`Alert!`},confirm:{renderBody:`OK`},renderBody:`You must acknowledge this alert to continue.`},q.parameters={docs:{source:{code:U}}},J=[`Default`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...q.parameters?.docs?.source}}}})))()}Y();export{q as Default,J as __namedExportsOrder,K as default};