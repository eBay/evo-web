import{b as B}from"./utils-DWCsNc5l.js";import{t as O}from"./storybook-code-source-CCz6reEH.js";import{v as h,b as y,_ as f,c as _}from"./defineComponent-B-Bg3Ud2.js";import{a as i}from"./attr-tag-Dvq4QMvY.js";import{_ as s}from"./const-element-Ea3wmYuQ.js";import{_ as F}from"./dynamic-tag-B3Rndxlm.js";import{_ as L}from"./index-I3zWZF9K.js";import{_ as r}from"./render-tag-B9T2mz-j.js";import{_ as k}from"./index-Cw3bSwrm.js";import{_ as U}from"./index-DEuIlbT_.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-eAGEw84U.js";import"./index-Dc9wtS83.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-panel-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-panel-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-panel-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-panel-dialog/examples)
`,w="xdGDg4q",p=h.t(w);y.r(w,()=>p);const q={};p._=f(function(t,n,a,o,c,v){const{position:e,class:W,...P}=t;r(L,{...P,classPrefix:"panel-dialog",class:[W,"panel-dialog--mask-fade-slow"],windowClass:["panel-dialog__window--slide",t.position==="end"&&"panel-dialog__window--end"],renderBody:S=>{F(S,t.renderBody,null,null,null,null,a,"1")}},n,a,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["prevButtonClick","emit",!1,["prevButtonClick"]]])},{t:w,s:!0},q);p.Component=_(q,p._);const x="hEgYSqy",d=h.t(x),j=s("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),z=s("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");y.r(x,()=>d);const T={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};d._=f(function(t,n,a,o,c,v){r(p,i.i(()=>(i.a("header",{renderBody:e=>{e.t("Heading",o)}}),e=>{e.n(j,o),e.n(z,o)}),{a11yCloseText:"Close Dialog",open:c.open,...t,header:void 0}),n,a,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),r(k,{renderBody:e=>{e.t("Open Dialog",o)}},n,a,"4",[["click","openDialog",!1]])},{t:x},T);d.Component=_(T,d._);const C="JvbCppS",u=h.t(C),G=s("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),V=s("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");y.r(C,()=>u);const $={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};u._=f(function(t,n,a,o,c,v){r(p,i.i(()=>(i.a("header",{renderBody:e=>{e.t("Heading",o)}}),i.a("prevButton",{a11yText:"Go back",renderBody:e=>{r(U,{},e,a,"1")}}),e=>{e.n(G,o),e.n(V,o)}),{a11yCloseText:"Close Dialog",open:c.open,...t,header:void 0,prevButton:void 0}),n,a,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["prevButtonClick","emit",!1,["prev-button-click"]]]),r(k,{renderBody:e=>{e.t("Open Dialog",o)}},n,a,"5",[["click","openDialog",!1]])},{t:C},$);u.Component=_($,u._);const A=`<ebay-panel-dialog
    a11yCloseText="Close Dialog"
    open=state.open
    onClose("closeDialog")
    onOpen("emit", "open")
    onPrevButtonClick("emit", "prev-button-click")
    ...input
>
    <@header>Heading</@header>

    <@prev-button a11y-text="Go back">
        <ebay-chevron-left-16-icon/>
    </@prev-button>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-panel-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
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
        this.emit("close");
    }
}
`,D="jzh6bof",m=h.t(D),I=s("button",{class:"btn"},1).t("Button 1"),J=s("button",{class:"btn"},1).t("Button 2"),R=s("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Y=s("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");y.r(D,()=>m);const E={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};m._=f(function(t,n,a,o,c,v){r(p,i.i(()=>(i.a("header",{renderBody:e=>{e.t("Heading",o)}}),i.a("footer",{renderBody:e=>{e.n(I,o),e.n(J,o)}}),e=>{e.n(R,o),e.n(Y,o)}),{a11yCloseText:"Close Dialog",open:c.open,...t,header:void 0,footer:void 0}),n,a,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),r(k,{renderBody:e=>{e.t("Open Dialog",o)}},n,a,"6",[["click","openDialog",!1]])},{t:D},E);m.Component=_(E,m._);const K=`<ebay-panel-dialog
    a11yCloseText="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    ...input
>
    <@header>Heading</@header>
    <@footer>
        <button class="btn">
            Button 1
        </button>
        <button class="btn">
            Button 2
        </button>
    </@footer>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-panel-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
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
        this.emit("close");
    }
}
`,M=t=>({input:{...t,renderBody:t.renderBody?n=>{n.html(t.renderBody)}:null}}),_e={title:"dialogs/ebay-panel-dialog",component:d,parameters:{docs:{description:{component:H}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},position:{control:{type:"text"},description:'"end" or "start", defaults to "start", the position of the panel, either at the start (left side) of the page, or end (right side) of the page.'},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)"},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"Localized, a11y text for close button and mask."},prevButton:{name:"@prevButton",control:{type:"object"},table:{category:"@attribute tags"},description:"Previous button, shows up before header. Usually a chevron-left icon."},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onPrevButtonClick:{action:"on-prev-button-click",description:"Triggered when previous button is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},l=M.bind({});l.args={a11yCloseText:"Close Panel"};l.parameters={docs:{source:{code:O("ebay-panel-dialog",l.args)}}};const g=B(u,A),b=B(m,K),ve=["Default","WithPrevButton","WithFooter"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPrevButtonTemplate, WithPrevButtonCode)",...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithFooterTemplate, WithFooterCode)",...b.parameters?.docs?.source}}};export{l as Default,b as WithFooter,g as WithPrevButton,ve as __namedExportsOrder,_e as default};
