import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{t as r}from"./utils-C7m-hPxw.js";import{n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as ee}from"./icon-yrMh4EQf.js";import{t as c}from"./render-tag-hXgrwudm.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as u}from"./const-element-BfQ4jh6r.js";import{n as te,t as ne}from"./ebay-notice-base-DGm8iM5D.js";import{n as re,t as ie}from"./ebay-fake-link-BmUK378k.js";var ae;function oe(){return(oe=t((()=>{ae=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-page-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-page-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-page-notice)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-page-notice)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-page-notice/examples)
`})))()}function d(){return(d=t((()=>{})))()}function f(){return(f=t((()=>{d(),ee()})))()}var p;function m(){return(m=t((()=>{p=class extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(e){this.state={dismissed:e.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit(`dismiss`)}}})))()}var h,g,se,ce,le,_,v,y;function b(){return(b=t((()=>{h=s(),f(),te(),g=e(c()),m(),se=e(i()),ce=o(),le=e(a()),_=`nb`,v=(0,h.t)(_),(0,ce.r)(_,()=>v),y=p,v._=(0,se.default)(function(e,t,n,r,i,a){let{status:o=`attention`,...s}=e;i.dismissed||(0,g.default)(ne,{...s,class:[`page-notice--${o}`,e.class],status:o,role:`region`,prefixClass:`page-notice`},t,n,`0`,[[`dismiss`,`onDismiss`,!1],[`cta-click`,`emit`,!1,[`cta-click`]]])},{t:_},y),v.Component=(0,le.default)(y,v._)})))()}var ue,x,S,C,de,fe,w,T,E,D,O,k,A;function j(){return(j=t((()=>{ue=s(),x=e(u()),S=l(),re(),C=e(c()),b(),de=e(i()),fe=o(),w=e(a()),T=`fVZlr7a`,E=(0,ue.t)(T),D=(0,x.default)(`div`,null,1).t(`Notice title`),O=(0,x.default)(`p`,null,2).e(`strong`,null,1).t(`Error:`).t(` Please take another look at the following:`),k=(0,x.default)(`p`,null,5).e(`a`,{href:`#`},1).t(`Card number`).t(` , `).e(`a`,{href:`#`},1).t(`Expiration date`).t(` & `).e(`a`,{href:`#`},1).t(`Security code`),(0,fe.r)(T,()=>E),A={},E._=(0,de.default)(function(e,t,n,r,i,a){(0,C.default)(v,(0,S.i)(()=>((0,S.a)(`title`,{renderBody:e=>{e.n(D,r)}}),(0,S.a)(`footer`,{renderBody:e=>{(0,C.default)(ie,{renderBody:e=>{e.t(`Footer`,r)}},e,n,`2`)}}),e=>{e.n(O,r),e.n(k,r)}),{...e,title:void 0,footer:void 0}),t,n,`0`)},{t:T,i:!0},A),E.Component=(0,w.default)(A,E._)})))()}var M;function N(){return(N=t((()=>{M=`<ebay-page-notice ...input>
    <@title>
        <div>Notice title</div>
    </@title>
    <@footer>
        <ebay-fake-link>Footer</ebay-fake-link>
    </@footer>
    <p>
        <strong>Error:</strong>
         Please take another look at the following:
    </p>
    <p>
        <a href="#">
            Card number
        </a>
        ,
        <a href="#">
            Expiration date
        </a>
         &amp;
        <a href="#">
            Security code
        </a>
    </p>
</ebay-page-notice>
`})))()}var P,F,I,L,R,z,B,V,H,pe,me,he,U;function ge(){return(ge=t((()=>{P=s(),F=e(u()),I=l(),b(),L=e(c()),R=e(i()),z=o(),B=e(a()),V=`QRh4IZl`,H=(0,P.t)(V),pe=(0,F.default)(`div`,null,1).t(`Notice title`),me=(0,F.default)(`p`,null,2).e(`strong`,null,1).t(`Error:`).t(` Please take another look at the following:`),he=(0,F.default)(`p`,null,5).e(`a`,{href:`#`},1).t(`Card number`).t(` , `).e(`a`,{href:`#`},1).t(`Expiration date`).t(` & `).e(`a`,{href:`#`},1).t(`Security code`),(0,z.r)(V,()=>H),U={},H._=(0,R.default)(function(e,t,n,r,i,a){(0,L.default)(v,(0,I.i)(()=>((0,I.a)(`title`,{renderBody:e=>{e.n(pe,r)}}),(0,I.a)(`cta`,{href:`https://www.ebay.com`,renderBody:e=>{e.t(`Link here`,r)}}),e=>{e.n(me,r),e.n(he,r)}),{...e,title:void 0,cta:void 0}),t,n,`0`,[[`dismiss`,`emit`,!1,[`dismiss`]]])},{t:V},U),H.Component=(0,B.default)(U,H._)})))()}var _e;function ve(){return(ve=t((()=>{_e=`class {}
<ebay-page-notice ...input on-dismiss("emit", "dismiss")>
    <@title>
        <div>Notice title</div>
    </@title>
    <@cta href="https://www.ebay.com">
        Link here
    </@cta>
    <p>
        <strong>Error:</strong>
         Please take another look at the following:
    </p>
    <p>
        <a href="#">
            Card number
        </a>
        ,
        <a href="#">
            Expiration date
        </a>
         &amp;
        <a href="#">
            Security code
        </a>
    </p>
</ebay-page-notice>
`})))()}var ye,W,G,be,xe,Se,Ce,K,q,we,Te,Ee,J;function De(){return(De=t((()=>{ye=s(),re(),W=e(u()),G=l(),b(),be=e(c()),xe=e(i()),Se=o(),Ce=e(a()),K=`pH6hsU9`,q=(0,ye.t)(K),we=(0,W.default)(`div`,null,1).t(`Notice title`),Te=(0,W.default)(`p`,null,2).e(`strong`,null,1).t(`Error:`).t(` Please take another look at the following:`),Ee=(0,W.default)(`p`,null,5).e(`a`,{href:`#`},1).t(`Card number`).t(` , `).e(`a`,{href:`#`},1).t(`Expiration date`).t(` & `).e(`a`,{href:`#`},1).t(`Security code`),(0,Se.r)(K,()=>q),J={},q._=(0,xe.default)(function(e,t,n,r,i,a){(0,be.default)(v,(0,G.i)(()=>((0,G.a)(`title`,{renderBody:e=>{e.n(we,r)}}),(0,G.a)(`cta`,{as:ie,renderBody:e=>{e.t(`Link here`,r)}}),e=>{e.n(Te,r),e.n(Ee,r)}),{...e,title:void 0,cta:void 0}),t,n,`0`,[[`dismiss`,`emit`,!1,[`dismiss`]],[`cta-click`,`emit`,!1,[`cta-click`]]])},{t:K},J),q.Component=(0,Ce.default)(J,q._)})))()}var Y;function Oe(){return(Oe=t((()=>{Y=`class {}
import fakeLink from "<ebay-fake-link>";

<ebay-page-notice
    ...input
    on-dismiss("emit", "dismiss")
    on-cta-click("emit", "cta-click")
>
    <@title>
        <div>Notice title</div>
    </@title>
    <@cta as=fakeLink>
        Link here
    </@cta>
    <p>
        <strong>Error:</strong>
         Please take another look at the following:
    </p>
    <p>
        <a href="#">
            Card number
        </a>
        ,
        <a href="#">
            Expiration date
        </a>
         &amp;
        <a href="#">
            Security code
        </a>
    </p>
</ebay-page-notice>
`})))()}var ke,Ae,X,Z,Q,$,je;function Me(){return(Me=t((()=>{oe(),b(),j(),N(),ge(),ve(),De(),Oe(),ke=e=>({input:r(e)}),Ae={title:`notices & tips/ebay-page-notice`,component:v,parameters:{docs:{description:{component:ae}}},argTypes:{status:{table:{defaultValue:{summary:`attention`}},description:`The icon used and status of the notice`,options:[`attention`,`confirmation`,`information`],type:`select`},icon:{table:{defaultValue:{summary:`default`}},options:[`default`,`none`],type:`select`,description:`matches whatever is specified by the "status", or if none hides icon`},a11yIconText:{description:`Localized, adding description for the icon in the notice for a11y users`},a11yDismissText:{description:`Localized, this adds a dismiss icon allowing the notice to be dismissed/hidden and sets the a11y text on the icon`},dismissed:{description:`whether or not the notice is dismissed`,type:`boolean`},title:{name:`@title`,description:`The title content to be displayed.`,table:{category:`@attribute tags`}},footer:{name:`@footer`,description:`The footer content to be displayed. Used to show the dismiss button generally`,table:{category:`@attribute tags`}},cta:{name:`@cta`,description:`This allows the addition of a main CTA link`,table:{category:`@attribute tags`}},onDismiss:{action:`on-dismiss`,description:`Triggered on notice dismiss`,table:{category:`Events`,defaultValue:{summary:``}}},"on-cta-click":{action:`on-cta-click`,description:`Triggered when CTA is clicked`,table:{category:`Events`,defaultValue:{summary:``}}}}},X=ke.bind({}),X.args={a11yText:`attention`,a11yIconText:``,a11yDismissText:``,status:null,icon:null,cta:null,dismissed:!1,title:{renderBody:`An error has occurred`},renderBody:`<p><strong>Error:</strong> Please take another look at the following:</p>
    <p>
        <a href='#'>Card number</a>
        ,
        <a href='#'>Expiration date</a>
        &amp;
        <a href='#'>Security code</a>
    </p>`},X.parameters={docs:{source:{code:n(`ebay-page-notice`,X.args)}}},Z=e=>({input:e,component:E}),Z.args={a11yText:`attention`,a11yIconText:``,a11yDismissText:``,status:null,icon:null},Z.parameters={docs:{source:{code:M}}},Q=e=>({input:e,component:H}),Q.args={a11yText:`information`,a11yIconText:``,a11yDismissText:`Dismiss Notice`,status:`information`,icon:null},Q.parameters={docs:{source:{code:_e}}},$=e=>({input:e,component:q}),$.args={a11yText:`information`,a11yIconText:``,a11yDismissText:`Dismiss Notice`,status:`information`,icon:null},$.parameters={docs:{source:{code:Y}}},je=[`Basic`,`WithAction`,`WithDismiss`,`WithCustomCTADismiss`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withAction
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withDismiss
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withCustomCTADismiss
})`,...$.parameters?.docs?.source}}}})))()}Me();export{X as Basic,Z as WithAction,$ as WithCustomCTADismiss,Q as WithDismiss,je as __namedExportsOrder,Ae as default};