import{a as P}from"./utils-DWCsNc5l.js";import{v as k,b as v,_ as x,c as C}from"./defineComponent-B-Bg3Ud2.js";import{_ as r}from"./dynamic-tag-B3Rndxlm.js";import{a}from"./attr-tag-Dvq4QMvY.js";import{_ as q}from"./const-element-Ea3wmYuQ.js";import{_ as b}from"./index-Cw3bSwrm.js";import{_ as m}from"./render-tag-B9T2mz-j.js";import{_ as z}from"./index-I3zWZF9K.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-D4_UUNUd.js";import"./index-eAGEw84U.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-Dc9wtS83.js";const F=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,h="rqifGMS",p=k.t(h);var G=["destructive"];v.r(h,()=>p);const I={};p._=x(function(n,f,e,t,j,w){var g=t.getElId("confirm-dialog-cancel"),s=t.getElId("confirm-dialog-confirm"),l=t.getElId("confirm-dialog-main");const{confirmCtaVariant:c,rejectText:o,confirmText:_,class:E,reject:D,confirm:$,renderBody:R,...V}=n,{renderBody:O,...A}=$||{},{renderBody:M,...S}=D||{};m(z,a.i(()=>(a.a("footer",{renderBody:y=>{m(b,{id:g,class:"confirm-dialog__reject",...S,renderBody:d=>{o?d.t(o,t):r(d,M,null,null,null,null,e,"2")}},y,e,"1",[["click","emit",!1,["reject"]]]),m(b,{priority:"primary",id:s,ariaDescribedby:l,class:["confirm-dialog__confirm",c&&G.includes(c)&&`btn--${c}`],...A,renderBody:d=>{_?d.t(_,t):r(d,O,null,null,null,null,e,"4")}},y,e,"3",[["click","emit",!1,["confirm"]]])}}),y=>{r(y,R,null,null,null,null,e,"5")}),{...V,mainId:l,focus:s,transitionList:["opacity","transform","background-color"],classPrefix:"confirm-dialog",class:[E,"confirm-dialog--mask-fade"],windowClass:["confirm-dialog__window--animate"],buttonPosition:"hidden",footer:void 0}),f,e,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["escape","emit",!1,["reject"]]])},{t:h,s:!0},I);p.Component=C(I,p._);const B="CEQJHnu",u=k.t(B),H=q("p",null,1).t("This 'confirm' text should be 1-2 lines.");v.r(B,()=>u);const T={onInput(n){this.state={open:n.open}},openDialog(){this.state.open=!0},onCreate(){this.closeDialog=n=>{this.state.open=!1,this.emit("reject",n)},this.success=n=>{this.state.open=!1,this.emit("confirm",n)}}};u._=x(function(n,f,e,t,j,w){const{header:g,confirm:s,reject:l,...c}=n;m(p,a.i(()=>(a.a("header",{...g,renderBody:o=>{r(o,g.renderBody,null,null,null,null,e,"1")}}),a.a("confirm",{...s,renderBody:o=>{r(o,s.renderBody,null,null,null,null,e,"2")}}),a.a("reject",{...l,renderBody:o=>{r(o,l.renderBody,null,null,null,null,e,"3")}}),o=>{r(o,n.renderBody,null,null,null,null,e,"4"),o.n(H,t)}),{open:j.open,...c,header:void 0,confirm:void 0,reject:void 0}),f,e,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["reject","closeDialog",!1],["confirm","success",!1]]),m(b,{renderBody:o=>{o.t("Open Confirm Dialog",t)}},f,e,"6",[["click","openDialog",!1]])},{t:B},T);u.Component=C(T,u._);const J=`import type { Input as ConfirmDialogInput } from "<ebay-confirm-dialog>";
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
`,L=n=>({input:P(n)}),ue={title:"dialogs/ebay-confirm-dialog",component:u,parameters:{docs:{description:{component:F}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirm:{name:"@confirm",table:{category:"@attribute tags"},description:"Render body will be text for confirm button"},reject:{name:"@reject",table:{category:"@attribute tags"},description:"Render body will be text for reject button"},header:{name:"@header",table:{category:"@attribute tags"}},confirmCtaVariant:{options:["none","destructive"],description:"The alternative main CTA button variant to use.",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},confirmText:{control:{type:"text"},description:"Text for confirm button"},rejectText:{control:{type:"text"},description:"Text for reject button"},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onReject:{action:"on-reject",description:"Triggered when reject button is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},i=L.bind({});i.args={header:{renderBody:"Delete Address?"},confirm:{renderBody:"Delete"},reject:{renderBody:"Cancel"},renderBody:"You will permanently lose this address."};i.parameters={docs:{source:{code:J}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...i.parameters?.docs?.source}}};const fe=["Default"];export{i as Default,fe as __namedExportsOrder,ue as default};
