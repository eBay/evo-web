import{v as f,b as y,_ as k,c as g}from"./defineComponent-B-Bg3Ud2.js";import{_ as w}from"./dynamic-tag-B3Rndxlm.js";import{_ as U}from"./index-Bl6XLQ_q.js";import{_ as i}from"./render-tag-B9T2mz-j.js";import{a as h}from"./attr-tag-Dvq4QMvY.js";import{_ as D}from"./index-I3zWZF9K.js";import{b as x}from"./utils-DWCsNc5l.js";import{_ as S}from"./index-Cw3bSwrm.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css             */import"./index-eAGEw84U.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-Dc9wtS83.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";const L=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,b=6e3;class z extends Marko.Component{_clearTimeout(){clearTimeout(this.timeout)}_setupTimeout(){this.state.open!==!1&&(this.timeout=setTimeout(()=>{this.state.open=!1},b))}onInput(a){this.state={open:a.open??(this.state.open||!1)}}onMount(){this._setupTimeout()}onUpdate(){this._setupTimeout()}onRender(){typeof window<"u"&&this._clearTimeout()}onDestroy(){this._clearTimeout()}onCreate(){this.eventSet=new Set,this.state={open:!1}}handleAction(){this._clearTimeout(),this.emit("action"),this.state.open=!1}handleFocus(){this._clearTimeout(),this.eventSet.add("focus")}handleBlur(){this.eventSet.delete("focus"),this.eventSet.size===0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},b))}handleMouseEnter(){this._clearTimeout(),this.eventSet.add("mouseOver")}handleMouseLeave(){this.eventSet.delete("mouseOver"),this.eventSet.size===0&&this.state.open===!0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},b))}handleClose(){this._clearTimeout(),this.state.open=!1,this.emit("close")}}const _="zrZj9UG",o=f.t(_);y.r(_,()=>o);const E=z;o._=k(function(s,a,t,n,l,C){const{action:e,class:B,layout:$,open:K,renderBody:I,...M}=s;i(D,h.i(()=>(e&&h.a("action",{renderBody:u=>{i(U,{...e,accesskey:e.accesskey||e.accessKey,renderBody:r=>{w(r,e.renderBody,null,null,null,null,t,"2"),r.be("span",{class:"clipped"},"3",n,null,1),r.t("- Access Key: ",n),r.t(e.accesskey||e.accessKey,n),r.ee()}},u,t,"1",[["click","handleAction",!1],["focus","handleFocus",!1],["blur","handleBlur",!1]])}}),u=>{w(u,I,null,null,null,null,t,"4")}),{...M,open:l.open,isModal:!1,classPrefix:"snackbar-dialog",class:[B,"snackbar-dialog--transition"],windowClass:[$==="column"&&"snackbar-dialog__window--column"],buttonPosition:"hidden",transitionList:["transform"],action:void 0}),a,t,"0",[["close","handleClose",!1],["open","emit",!1,["open"]],["mouseEnter","handleMouseEnter",!1],["mouseLeave","handleMouseLeave",!1]])},{t:_},E);o.Component=g(E,o._);const T="AsRcdrI",c=f.t(T);y.r(T,()=>c);const O={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};c._=k(function(s,a,t,n,l,C){i(S,{renderBody:e=>{e.t("Open Default Snackbar",n)}},a,t,"0",[["click","handleOpen",!1]]),i(o,{open:l.open,...s,renderBody:e=>{e.t("This 'snackbar' text should be 1-2 lines.",n)}},a,t,"1",[["close","handleClose",!1],["open","emit",!1,["open"]]])},{t:T},O);c.Component=g(O,c._);const F=`export interface Input {
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
`,v="GlmkQTH",p=f.t(v);y.r(v,()=>p);const A={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};p._=k(function(s,a,t,n,l,C){i(S,{renderBody:e=>{e.t("Open Action Snackbar",n)}},a,t,"0",[["click","handleOpen",!1]]),i(o,h.i(()=>(h.a("action",{accesskey:"U",renderBody:e=>{e.t("Undo",n)}}),e=>{e.t("This 'snackbar' text should be 1-2 lines.",n)}),{open:l.open,...s,action:void 0}),a,t,"1",[["close","handleClose",!1],["open","emit",!1,["open"]],["action","emit",!1,["action"]]])},{t:v},A);p.Component=g(A,p._);const G=`class {
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
`,ce={title:"dialogs/ebay-snackbar-dialog",component:o,parameters:{docs:{description:{component:L}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},table:{disable:!0}},layout:{type:"enum",control:{type:"radio"},options:["row","column"]},action:{name:"@action",description:"If present, shows an action button on snackbar",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"on-action",description:"Triggered on action pressed",table:{category:"Events",defaultValue:{summary:""}}}}},d=x(c,F),m=x(p,G);d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultTemplateCode)",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(withActionTemplate, withActionTemplateCode)",...m.parameters?.docs?.source}}};const pe=["Default","WithAction"];export{d as Default,m as WithAction,pe as __namedExportsOrder,ce as default};
