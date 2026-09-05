import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./utils-C7m-hPxw.js";import{n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as c}from"./render-tag-hXgrwudm.js";import{t as ee}from"./dynamic-tag-CCbAf3a9.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as u}from"./const-element-BfQ4jh6r.js";import{n as d,t as f}from"./ebay-button-ev-RMJXM.js";import{n as te,t as ne}from"./ebay-chevron-left-16-icon-CuU3iCTZ.js";import{n as p,t as m}from"./ebay-lightbox-dialog-DUEKL-s2.js";var re;function ie(){return(ie=t((()=>{re=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}var ae,oe,h,g,_,v,se,ce,y,b,le,ue,x;function S(){return(S=t((()=>{ae=s(),oe=e(ee()),h=l(),g=e(u()),p(),_=e(c()),d(),v=e(i()),se=o(),ce=e(a()),y=`Fz2GdwC`,b=(0,ae.t)(y),le=(0,g.default)(`p`,null,1).t(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),ue=(0,g.default)(`p`,null,1).e(`a`,{href:`http://www.ebay.com`},1).t(`www.ebay.com`),(0,se.r)(y,()=>b),x={onInput(e){this.state={open:e.open}},onCreate(e){this.state={open:e.open||!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit(`close`,e)}},b._=(0,v.default)(function(e,t,n,r,i,a){let{header:o,open:s,...c}=e;(0,_.default)(m,(0,h.i)(()=>(o&&o.renderBody&&(0,h.a)(`header`,{...o,renderBody:e=>{(0,oe.default)(e,o.renderBody,null,null,null,null,n,`1`)}}),e=>{e.n(le,r),e.n(ue,r)}),{a11yCloseText:`Close Dialog`,open:i.open,...c,header:void 0}),t,n,`0`,[[`close`,`closeDialog`,!1],[`open`,`emit`,!1,[`open`]]]),(0,_.default)(f,{renderBody:e=>{e.t(`Open Dialog`,r)}},t,n,`5`,[[`click`,`openDialog`,!1]])},{t:y},x),b.Component=(0,ce.default)(x,b._)})))()}var C;function de(){return(de=t((()=>{C=`export interface Input {
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
`})))()}var fe,w,pe,T,me,he,ge,E,D,_e,O;function k(){return(k=t((()=>{fe=s(),w=l(),pe=e(u()),p(),T=e(c()),d(),me=e(i()),he=o(),ge=e(a()),E=`b24K58M`,D=(0,fe.t)(E),_e=(0,pe.default)(`p`,null,1).e(`a`,{href:`http://www.ebay.com`},1).t(`www.ebay.com`),(0,he.r)(E,()=>D),O={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit(`close`,e)}},D._=(0,me.default)(function(e,t,n,r,i,a){(0,T.default)(m,(0,w.i)(()=>((0,w.a)(`header`,{renderBody:e=>{e.t(`Heading`,r)}}),e=>{for(let t=0;t<=100;t++){let n=`[${0+t*1}]`;e.be(`p`,null,`1`+n,r,null,0),e.t(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,r),e.ee()}e.n(_e,r)}),{a11yCloseText:`Close Dialog`,open:i.open,...e,header:void 0}),t,n,`0`,[[`close`,`closeDialog`,!1],[`open`,`emit`,!1,[`open`]]]),(0,T.default)(f,{renderBody:e=>{e.t(`Open Dialog`,r)}},t,n,`4`,[[`click`,`openDialog`,!1]])},{t:E},O),D.Component=(0,ge.default)(O,D._)})))()}var A;function j(){return(j=t((()=>{A=`class {
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
`})))()}var M,N,P,F,I,L,ve,R,z,ye,be,B;function xe(){return(xe=t((()=>{M=s(),N=l(),te(),P=e(c()),F=e(u()),p(),d(),I=e(i()),L=o(),ve=e(a()),R=`UU82kVp`,z=(0,M.t)(R),ye=(0,F.default)(`p`,null,1).t(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),be=(0,F.default)(`p`,null,1).e(`a`,{href:`http://www.ebay.com`},1).t(`www.ebay.com`),(0,L.r)(R,()=>z),B={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit(`close`,e)}},z._=(0,I.default)(function(e,t,n,r,i,a){(0,P.default)(m,(0,N.i)(()=>((0,N.a)(`header`,{renderBody:e=>{e.t(`Heading`,r)}}),(0,N.a)(`prevButton`,{a11yText:`Go back`,renderBody:e=>{(0,P.default)(ne,{},e,n,`1`)}}),e=>{e.n(ye,r),e.n(be,r)}),{a11yCloseText:`Close Dialog`,open:i.open,...e,header:void 0,prevButton:void 0}),t,n,`0`,[[`close`,`closeDialog`,!1],[`open`,`emit`,!1,[`open`]],[`prevButtonClick`,`emit`,!1,[`prev-button-click`]]]),(0,P.default)(f,{renderBody:e=>{e.t(`Open Dialog`,r)}},t,n,`5`,[[`click`,`openDialog`,!1]])},{t:R},B),z.Component=(0,ve.default)(B,z._)})))()}var Se;function Ce(){return(Ce=t((()=>{Se=`<ebay-lightbox-dialog
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
`})))()}var we,V,H,U,Te,Ee,De,W,G,Oe,ke,Ae,je,K;function Me(){return(Me=t((()=>{we=s(),V=l(),H=e(u()),p(),U=e(c()),d(),Te=e(i()),Ee=o(),De=e(a()),W=`GIIvxHe`,G=(0,we.t)(W),Oe=(0,H.default)(`button`,{class:`btn`},1).t(`Button 1`),ke=(0,H.default)(`button`,{class:`btn`},1).t(`Button 2`),Ae=(0,H.default)(`p`,null,1).t(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),je=(0,H.default)(`p`,null,1).e(`a`,{href:`http://www.ebay.com`},1).t(`www.ebay.com`),(0,Ee.r)(W,()=>G),K={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit(`close`,e)}},G._=(0,Te.default)(function(e,t,n,r,i,a){(0,U.default)(m,(0,V.i)(()=>((0,V.a)(`header`,{renderBody:e=>{e.t(`Heading`,r)}}),(0,V.a)(`footer`,{renderBody:e=>{e.n(Oe,r),e.n(ke,r)}}),e=>{e.n(Ae,r),e.n(je,r)}),{a11yCloseText:`Close Dialog`,open:i.open,...e,header:void 0,footer:void 0}),t,n,`0`,[[`close`,`closeDialog`,!1],[`open`,`emit`,!1,[`open`]]]),(0,U.default)(f,{renderBody:e=>{e.t(`Open Dialog`,r)}},t,n,`6`,[[`click`,`openDialog`,!1]])},{t:W},K),G.Component=(0,De.default)(K,G._)})))()}var Ne;function q(){return(q=t((()=>{Ne=`<ebay-lightbox-dialog
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
`})))()}var J,Pe,Y,X,Z,Q,$,Fe;function Ie(){return(Ie=t((()=>{ie(),S(),de(),k(),j(),xe(),Ce(),Me(),q(),J=e=>({input:r(e)}),Pe={title:`dialogs/ebay-lightbox-dialog`,component:b,parameters:{docs:{description:{component:re}}},argTypes:{open:{type:`boolean`,control:{type:`boolean`},description:`Whether dialog is open.`},expanded:{type:`boolean`,control:{type:`boolean`},description:`Whether dialog is expanded.`},focus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog opens (defaults to close button).`},closeFocus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened`},a11yCloseText:{control:{type:`text`},description:`Localized, a11y text for close button and mask.`},header:{name:`@header`,type:{required:!0},control:{type:`object`},table:{category:`@attribute tags`},description:`The header text for the content of the dialog. This is a required attribute.`},footer:{name:`@footer`,control:{type:`object`},table:{category:`@attribute tags`}},prevButton:{name:`@prevButton`,control:{type:`object`},table:{category:`@attribute tags`},description:`Previous button, shows up before header. Usually a chevron-left icon.`},bannerImgSrc:{control:{type:`text`},description:`Image source for the expressive variant`},size:{options:[`regular`,`wide`,`narrow`,`large`],description:`The size of the dialog`,table:{defaultValue:{summary:`regular`}},type:{category:`Options`}},bannerImgPosition:{control:{type:`text`},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},onOpen:{action:`on-open`,description:`Triggered on dialog opened`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`on-close`,description:`Triggered on dialog closed.`,table:{category:`Events`,defaultValue:{summary:``}}},onPrevButtonClick:{action:`on-prevButtonClick`,description:`Triggered when previous button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}}}},Y=J.bind({}),Y.args={header:{renderBody:`Heading Text`},a11yCloseText:`Close dialog`},Y.parameters={docs:{source:{code:C}}},X=n(D,A),Z=J.bind({}),Z.args={header:{renderBody:`Heading Text`},bannerImgSrc:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg`,bannerImgPosition:`top`},Z.parameters={docs:{source:{code:C}}},Q=n(z,Se),$=n(G,Ne),Fe=[`Default`,`Scrolling`,`Expressive`,`WithPrevButton`,`WithFooter`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ScrollingTemplate, ScrollingTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithPrevButtonTemplate, WithPrevButtonCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithFooterTemplate, WithFooterCode)`,...$.parameters?.docs?.source}}}})))()}Ie();export{Y as Default,Z as Expressive,X as Scrolling,$ as WithFooter,Q as WithPrevButton,Fe as __namedExportsOrder,Pe as default};