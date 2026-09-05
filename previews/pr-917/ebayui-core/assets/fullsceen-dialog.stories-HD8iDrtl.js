import{a as w}from"./utils-DWCsNc5l.js";import{v as m,b as u,_ as g,c as y}from"./defineComponent-B-Bg3Ud2.js";import{_ as C}from"./dynamic-tag-B3Rndxlm.js";import{_ as v}from"./index-I3zWZF9K.js";import{_ as l}from"./render-tag-B9T2mz-j.js";import{_ as B}from"./index-Cw3bSwrm.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-eAGEw84U.js";import"./index-Dc9wtS83.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";const T=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fullscreen-dialog-deprecated
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

\`\`\`marko
<ebay-fullscreen-dialog-deprecated open a11y-close-text="Close Dialog">
    <@header>Hello World</@header>
    Body content
</ebay-fullscreen-dialog-deprecated>
\`\`\`

** Deprecated will be removed next major ** (Use lightbox-dialog instead)

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/deprecated-ebay-fullscreen-dialog-deprecated)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/deprecated-ebay-fullscreen-dialog-deprecated)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-fullscreen-dialog-deprecated/examples)
`,i="okq0IIv",n=m.t(i);u.r(i,()=>n);const f={};n._=g(function(o,s,t,p,c,h){const{class:r,renderBody:_,slideFrom:k,...x}=o;l(v,{...x,classPrefix:"fullscreen-dialog",transitionList:["transform"],class:r,useHiddenProperty:!0,windowClass:k==="end"?"fullscreen-dialog__window--slide-end":"fullscreen-dialog__window--slide",renderBody:D=>{C(D,_,null,null,null,null,t,"1")}},s,t,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:i,s:!0},f);n.Component=y(f,n._);const d="JVHkGkh",a=m.t(d);u.r(d,()=>a);const b={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};a._=g(function(o,s,t,p,c,h){l(n,{a11yCloseText:"Close Dialog",open:c.open,...o},s,t,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),l(B,{renderBody:r=>{r.t("Open Dialog",p)}},s,t,"1",[["click","openDialog",!1]])},{t:d},b);a.Component=y(b,a._);const E=`<ebay-fullscreen-dialog-deprecated
    a11yCloseText="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    ...input
/>

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
`,$=o=>({input:w(o)}),N={title:"deprecated/ebay-fullscreen-dialog-deprecated",component:a,parameters:{docs:{description:{component:T}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},slideFrom:{options:["bottom","end"],description:"Either bottom or end. Where the panel slide begins from, either on the bottom or the end of the page.",table:{defaultValue:{summary:"bottom"}},type:{category:"Options"}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"Localized, a11y text for close button and mask."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},e=$.bind({});e.args={header:{renderBody:"Heading Text"},a11yCloseText:"Close Button",renderBody:"Body Content",footer:{renderBody:"Footer Text"},slideFrom:null};e.parameters={docs:{source:{code:E}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...e.parameters?.docs?.source}}};const Q=["Default"];export{e as Default,Q as __namedExportsOrder,N as default};
