import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i,u as a}from"./registry-95LfxIAE.js";import{t as o}from"./render-tag-hXgrwudm.js";import{t as s}from"./dynamic-tag-CCbAf3a9.js";import{t as c}from"./attr-tag--AgZ8oJt.js";import{t as l}from"./const-element-BfQ4jh6r.js";import{n as u,t as d}from"./ebay-button-ev-RMJXM.js";import{n as f,t as p}from"./ebay-dialog-base-BxJ4_-JJ.js";var m;function h(){return(h=t((()=>{m=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function g(){return(g=t((()=>{})))()}function _(){return(_=t((()=>{g()})))()}var v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{v=a(),_(),y=c(),b=e(s()),f(),x=e(o()),S=e(n()),C=i(),w=e(r()),T=`Mb`,E=(0,v.t)(T),(0,C.r)(T,()=>E),D={},E._=(0,S.default)(function(e,t,n,r,i,a){let{header:o={},class:s,renderBody:c,...l}=e;(0,x.default)(p,(0,y.i)(()=>((0,y.a)(`header`,{...o,class:[o.class,`toast-dialog__title`]}),e=>{(0,b.default)(e,c,null,null,null,null,n,`1`)}),{...l,baseEl:`aside`,transitionList:[`transform`],isModal:!1,classPrefix:`toast-dialog`,closeButtonClass:[`icon-btn--transparent`],class:[s,`toast-dialog--transition`],header:void 0}),t,n,`0`,[[`open`,`emit`,!1,[`open`]],[`close`,`emit`,!1,[`close`]]])},{t:T,s:!0},D),E.Component=(0,w.default)(D,E._)})))()}var k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{k=a(),A=c(),u(),j=e(o()),M=e(l()),O(),N=e(n()),P=i(),F=e(r()),I=`hYERaW6`,L=(0,k.t)(I),R=(0,M.default)(`p`,null,1).t(`Lorem ipsum dolor sit amet, consectetur adipiscing elit`),z=(0,M.default)(`p`,null,1).e(`a`,{href:`http://www.ebay.com`},1).t(`www.ebay.com`),(0,P.r)(I,()=>L),B={onCreate(){this.state={open:!1}},openToast(){this.state.open=!0},closeToast(){this.state.open=!1,this.emit(`close`)}},L._=(0,N.default)(function(e,t,n,r,i,a){(0,j.default)(E,(0,A.i)(()=>((0,A.a)(`header`,{renderBody:e=>{e.t(`Heading`,r)}}),(0,A.a)(`footer`,{renderBody:e=>{(0,j.default)(d,{accesskey:`i`,renderBody:e=>{e.t(`Close`,r)}},e,n,`1`,[[`click`,`closeToast`,!1]])}}),e=>{e.n(R,r),e.n(z,r)}),{a11yCloseText:`Close Toast`,open:i.open,...e,header:void 0,footer:void 0}),t,n,`0`,[[`open`,`emit`,!1,[`open`]],[`close`,`closeToast`,!1]]),(0,j.default)(d,{renderBody:e=>{e.t(`Open Toast`,r)}},t,n,`5`,[[`click`,`openToast`,!1]])},{t:I},B),L.Component=(0,F.default)(B,L._)})))()}var H;function U(){return(U=t((()=>{H=`<ebay-toast-dialog
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
`})))()}var W,G,K,q;function J(){return(J=t((()=>{h(),V(),U(),W=e=>({input:{...e,spread:null,...e.spread,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),G={title:`dialogs/ebay-toast-dialog`,component:L,parameters:{docs:{description:{component:m}}},argTypes:{open:{type:`boolean`,control:{type:`boolean`},description:`Whether toast is open.`,table:{disable:!0}},a11yCloseText:{control:{type:`text`},description:`Localized, accessibility label for close button.`},header:{name:`@header`,description:`The header to be displayed in the toast dialog`,table:{category:`@attribute tags`}},onOpen:{action:`on-open`,description:`Triggered on dialog opened`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`on-close`,description:`Triggered on dialog closed.`,table:{category:`Events`,defaultValue:{summary:``}}}}},K=W.bind({}),K.args={},K.parameters={docs:{source:{code:H}}},q=[`Default`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    spread: null,
    ...(args as any).spread,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...K.parameters?.docs?.source}}}})))()}J();export{K as Default,q as __namedExportsOrder,G as default};