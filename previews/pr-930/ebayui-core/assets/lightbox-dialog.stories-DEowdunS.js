import{b as B,a as z}from"./utils-DWCsNc5l.js";import{v,b as w,_,c as k}from"./defineComponent-B-Bg3Ud2.js";import{_ as j}from"./dynamic-tag-B3Rndxlm.js";import{a as i}from"./attr-tag-Dvq4QMvY.js";import{_ as s}from"./const-element-Ea3wmYuQ.js";import{_ as D}from"./index-BIl_hUE3.js";import{_ as r}from"./render-tag-B9T2mz-j.js";import{_ as C}from"./index-Cw3bSwrm.js";import{_ as V}from"./index-DEuIlbT_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-value-D9hyxyYb.js";import"./index-I3zWZF9K.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-eAGEw84U.js";import"./index-Dc9wtS83.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-lightbox-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

## Notes / FAQ

- \`@header\` is _required_, and styles will break if you do not include it

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-lightbox-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-lightbox-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-lightbox-dialog/examples)
`,T="Fz2GdwC",m=v.t(T),R=s("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),A=s("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");w.r(T,()=>m);const W={onInput(o){this.state={open:o.open}},onCreate(o){this.state={open:o.open||!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};m._=_(function(o,a,n,t,l,q){const{header:e,open:S,...d}=o;r(D,i.i(()=>(e&&e.renderBody&&i.a("header",{...e,renderBody:p=>{j(p,e.renderBody,null,null,null,null,n,"1")}}),p=>{p.n(R,t),p.n(A,t)}),{a11yCloseText:"Close Dialog",open:l.open,...d,header:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),r(C,{renderBody:p=>{p.t("Open Dialog",t)}},a,n,"5",[["click","openDialog",!1]])},{t:T},W);m.Component=k(W,m._);const O=`export interface Input {
    open: boolean;
    header: {
        renderBody: Marko.Body;
    };
}
$ const { header, open, ...dialogBaseInput } = input;
class {
    declare state: {
        open: boolean;
    };
    onInput(input: Input) {
        this.state = { open: input.open };
    }
    onCreate(input: Input) {
        this.state = { open: input.open || false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e: Event) {
        this.state.open = false;
        this.emit("close", e);
    }
}

<ebay-lightbox-dialog
    a11yCloseText="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    ...dialogBaseInput
>
    <if(header && header.renderBody)>
        <@header ...header>
            <\${header.renderBody}/>
        </@header>
    </if>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
`,E="b24K58M",g=v.t(E),M=s("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");w.r(E,()=>g);const U={onInput(o){this.state={open:o.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};g._=_(function(o,a,n,t,l,q){r(D,i.i(()=>(i.a("header",{renderBody:e=>{e.t("Heading",t)}}),e=>{for(let S=100/1,d=0;d<=S;d++){const F=`[${0+d*1}]`;e.be("p",null,"1"+F,t,null,0),e.t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t),e.ee()}e.n(M,t)}),{a11yCloseText:"Close Dialog",open:l.open,...o,header:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),r(C,{renderBody:e=>{e.t("Open Dialog",t)}},a,n,"4",[["click","openDialog",!1]])},{t:E},U);g.Component=k(U,g._);const K=`class {
    declare state: {
        open: boolean;
    };
    onInput(input: { open: boolean }) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e: Event) {
        this.state.open = false;
        this.emit("close", e);
    }
}

<ebay-lightbox-dialog
    a11yCloseText="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    ...input
>
    <@header>Heading</@header>
    <for|i| from=0 to=100>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </for>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
`,$="UU82kVp",b=v.t($),N=s("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Q=s("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");w.r($,()=>b);const P={onInput(o){this.state={open:o.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};b._=_(function(o,a,n,t,l,q){r(D,i.i(()=>(i.a("header",{renderBody:e=>{e.t("Heading",t)}}),i.a("prevButton",{a11yText:"Go back",renderBody:e=>{r(V,{},e,n,"1")}}),e=>{e.n(N,t),e.n(Q,t)}),{a11yCloseText:"Close Dialog",open:l.open,...o,header:void 0,prevButton:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["prevButtonClick","emit",!1,["prev-button-click"]]]),r(C,{renderBody:e=>{e.t("Open Dialog",t)}},a,n,"5",[["click","openDialog",!1]])},{t:$},P);b.Component=k(P,b._);const J=`<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-prevButtonClick("emit", "prev-button-click")
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
</ebay-lightbox-dialog>
<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
class {
    declare state: {
        open: boolean;
    };
    onInput(input: { open: boolean }) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e: Event) {
        this.state.open = false;
        this.emit("close", e);
    }
}
`,I="GIIvxHe",h=v.t(I),X=s("button",{class:"btn"},1).t("Button 1"),Y=s("button",{class:"btn"},1).t("Button 2"),Z=s("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ee=s("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");w.r(I,()=>h);const H={onInput(o){this.state={open:o.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};h._=_(function(o,a,n,t,l,q){r(D,i.i(()=>(i.a("header",{renderBody:e=>{e.t("Heading",t)}}),i.a("footer",{renderBody:e=>{e.n(X,t),e.n(Y,t)}}),e=>{e.n(Z,t),e.n(ee,t)}),{a11yCloseText:"Close Dialog",open:l.open,...o,header:void 0,footer:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),r(C,{renderBody:e=>{e.t("Open Dialog",t)}},a,n,"6",[["click","openDialog",!1]])},{t:I},H);h.Component=k(H,h._);const oe=`<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
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
</ebay-lightbox-dialog>
<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
class {
    declare state: {
        open: boolean;
    };
    onInput(input: { open: boolean }) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e: Event) {
        this.state.open = false;
        this.emit("close", e);
    }
}
`,L=o=>({input:z(o)}),qe={title:"dialogs/ebay-lightbox-dialog",component:m,parameters:{docs:{description:{component:G}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open."},expanded:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is expanded."},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"Localized, a11y text for close button and mask."},header:{name:"@header",type:{required:!0},control:{type:"object"},table:{category:"@attribute tags"},description:"The header text for the content of the dialog. This is a required attribute."},footer:{name:"@footer",control:{type:"object"},table:{category:"@attribute tags"}},prevButton:{name:"@prevButton",control:{type:"object"},table:{category:"@attribute tags"},description:"Previous button, shows up before header. Usually a chevron-left icon."},bannerImgSrc:{control:{type:"text"},description:"Image source for the expressive variant"},size:{options:["regular","wide","narrow","large"],description:"The size of the dialog",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},bannerImgPosition:{control:{type:"text"},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onPrevButtonClick:{action:"on-prevButtonClick",description:"Triggered when previous button is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},u=L.bind({});u.args={header:{renderBody:"Heading Text"},a11yCloseText:"Close dialog"};u.parameters={docs:{source:{code:O}}};const y=B(g,K),c=L.bind({});c.args={header:{renderBody:"Heading Text"},bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",bannerImgPosition:"top"};c.parameters={docs:{source:{code:O}}};const f=B(b,J),x=B(h,oe),Be=["Default","Scrolling","Expressive","WithPrevButton","WithFooter"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ScrollingTemplate, ScrollingTemplateCode)",...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPrevButtonTemplate, WithPrevButtonCode)",...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithFooterTemplate, WithFooterCode)",...x.parameters?.docs?.source}}};export{u as Default,c as Expressive,y as Scrolling,x as WithFooter,f as WithPrevButton,Be as __namedExportsOrder,qe as default};
