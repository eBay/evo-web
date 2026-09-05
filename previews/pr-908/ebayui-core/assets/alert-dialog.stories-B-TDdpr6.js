import{a as R}from"./utils-DWCsNc5l.js";import{v as h,b as _,_ as k,c as B}from"./defineComponent-B-Bg3Ud2.js";import{_ as a}from"./dynamic-tag-B3Rndxlm.js";import{a as i}from"./attr-tag-Dvq4QMvY.js";import{_ as A}from"./const-element-Ea3wmYuQ.js";import{_ as w}from"./index-Cw3bSwrm.js";import{_ as m}from"./render-tag-B9T2mz-j.js";import{_ as S}from"./index-I3zWZF9K.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-D4_UUNUd.js";import"./index-eAGEw84U.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-Dc9wtS83.js";const M=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="RXT4oEh",l=h.t(p);_.r(p,()=>l);const x={};l._=k(function(n,d,o,t,g,v){var e=t.getElId("alert-dialog-confirm"),y=t.getElId("alert-dialog-main");const{class:E,confirmText:f,confirm:C,renderBody:D,...$}=n,{renderBody:I,...O}=C||{};m(S,i.i(()=>(i.a("footer",{renderBody:c=>{m(w,{priority:"primary",ariaDescribedby:y,id:e,class:"alert-dialog__acknowledge",...O,renderBody:b=>{f?b.t(f,t):a(b,I,null,null,null,null,o,"1")}},c,o,"@confirm",[["click","emit",!1,["confirm"]]])}}),c=>{a(c,D,null,null,null,null,o,"2")}),{...$,role:"alertdialog",classPrefix:"alert-dialog",ignoreEscape:!0,mainId:y,transitionList:["opacity","transform","background-color"],buttonPosition:"hidden",focus:e,class:[E,"alert-dialog--mask-fade"],windowClass:["alert-dialog__window alert-dialog__window--animate"],footer:void 0}),d,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:p,s:!0},x);l.Component=B(x,l._);const u="ZJ5wqBa",s=h.t(u),V=A("p",null,1).t("This 'alert' text should be 1-2 lines.");_.r(u,()=>s);const T={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("confirm")}};s._=k(function(n,d,o,t,g,v){m(l,i.i(()=>(i.a("header",{renderBody:e=>{a(e,n.header.renderBody,null,null,null,null,o,"1")}}),i.a("confirm",{renderBody:e=>{a(e,n.confirm.renderBody,null,null,null,null,o,"2")}}),e=>{a(e,n.renderBody,null,null,null,null,o,"3"),e.n(V,t)}),{open:g.open,...n,header:void 0,confirm:void 0}),d,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["confirm","closeDialog",!1]]),m(w,{renderBody:e=>{e.t("Open Alert Dialog",t)}},d,o,"5",[["click","openDialog",!1]])},{t:u},T);s.Component=B(T,s._);const K=`export interface Input {
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
`,P=n=>({input:R(n)}),ie={title:"dialogs/ebay-alert-dialog",component:s,parameters:{docs:{description:{component:M}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirm:{name:"@confirm",table:{category:"@attribute tags"},description:"Render body will be text for OK button"},header:{name:"@header",table:{category:"@attribute tags"}},confirmText:{control:{type:"text"},description:"Text for confirm button"},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}}}},r=P.bind({});r.args={header:{renderBody:"Alert!"},confirm:{renderBody:"OK"},renderBody:"You must acknowledge this alert to continue."};r.parameters={docs:{source:{code:K}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...r.parameters?.docs?.source}}};const le=["Default"];export{r as Default,le as __namedExportsOrder,ie as default};
