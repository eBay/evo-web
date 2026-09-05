import{v as b,b as g,_ as h,c as f}from"./defineComponent-B-Bg3Ud2.js";import{a as r}from"./attr-tag-Dvq4QMvY.js";import{_ as u}from"./index-Cw3bSwrm.js";import{_ as p}from"./render-tag-B9T2mz-j.js";import{_}from"./const-element-Ea3wmYuQ.js";import{_ as v}from"./dynamic-tag-B3Rndxlm.js";import{_ as E}from"./index-I3zWZF9K.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-D4_UUNUd.js";import"./index-eAGEw84U.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-Dc9wtS83.js";const $=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-toast-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

A dialog which shows up information on the side of the page. This is for non-blocking info that the user needs to see.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-toast-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-toast-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-toast-dialog/examples)
`,c="y3YMWdA",i=b.t(c);g.r(c,()=>i);const T={};i._=h(function(o,t,a,n,y,w){const{header:e={},class:d,renderBody:C,...x}=o;p(E,r.i(()=>(r.a("header",{...e,class:[e.class,"toast-dialog__title"]}),B=>{v(B,C,null,null,null,null,a,"1")}),{...x,baseEl:"aside",transitionList:["transform"],isModal:!1,classPrefix:"toast-dialog",closeButtonClass:["icon-btn--transparent"],class:[d,"toast-dialog--transition"],header:void 0}),t,a,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:c,s:!0},T);i.Component=f(T,i._);const m="hYERaW6",l=b.t(m),L=_("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),O=_("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");g.r(m,()=>l);const k={onCreate(){this.state={open:!1}},openToast(){this.state.open=!0},closeToast(){this.state.open=!1,this.emit("close")}};l._=h(function(o,t,a,n,y,w){p(i,r.i(()=>(r.a("header",{renderBody:e=>{e.t("Heading",n)}}),r.a("footer",{renderBody:e=>{p(u,{accesskey:"i",renderBody:d=>{d.t("Close",n)}},e,a,"1",[["click","closeToast",!1]])}}),e=>{e.n(L,n),e.n(O,n)}),{a11yCloseText:"Close Toast",open:y.open,...o,header:void 0,footer:void 0}),t,a,"0",[["open","emit",!1,["open"]],["close","closeToast",!1]]),p(u,{renderBody:e=>{e.t("Open Toast",n)}},t,a,"5",[["click","openToast",!1]])},{t:m},k);l.Component=f(k,l._);const S=`<ebay-toast-dialog
    a11yCloseText="Close Toast"
    open=state.open
    on-open("emit", "open")
    on-close("closeToast")
    ...input
>
    <@header>Heading</@header>
    <@footer>
        <ebay-button accesskey="i" on-click("closeToast")>
            Close
        </ebay-button>
    </@footer>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-toast-dialog>
<ebay-button on-click("openToast")>
    Open Toast
</ebay-button>
class {
    declare state: {
        open: boolean;
    };

    onCreate() {
        this.state = { open: false };
    }
    openToast() {
        this.state.open = true;
    }
    closeToast() {
        this.state.open = false;
        this.emit("close");
    }
}
`,D=o=>({input:{...o,spread:null,...o.spread,renderBody:o.renderBody?t=>{t.html(o.renderBody)}:null}}),Z={title:"dialogs/ebay-toast-dialog",component:l,parameters:{docs:{description:{component:$}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether toast is open.",table:{disable:!0}},a11yCloseText:{control:{type:"text"},description:"Localized, accessibility label for close button."},header:{name:"@header",description:"The header to be displayed in the toast dialog",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},s=D.bind({});s.args={};s.parameters={docs:{source:{code:S}}};const ee=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    spread: null,
    ...(args as any).spread,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...s.parameters?.docs?.source}}};export{s as Default,ee as __namedExportsOrder,Z as default};
