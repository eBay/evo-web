import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as ee}from"./utils-C7m-hPxw.js";import{n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as te}from"./icon-yrMh4EQf.js";import{t as c}from"./render-tag-hXgrwudm.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as u}from"./const-element-BfQ4jh6r.js";import{n as ne,t as re}from"./ebay-notice-base-DGm8iM5D.js";import{n as ie,t as ae}from"./ebay-fake-link-BmUK378k.js";var oe;function d(){return(d=t((()=>{oe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-section-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-section-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

This notice should be used at the top of various sections to display information needed.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-section-notice)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-section-notice)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-section-notice/examples)
`})))()}function f(){return(f=t((()=>{})))()}function p(){return(p=t((()=>{f(),te()})))()}var m;function h(){return(h=t((()=>{m=class extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(e){this.state={dismissed:e.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit(`dismiss`)}}})))()}var se,ce,le,ue,de,g,_,v;function y(){return(y=t((()=>{se=s(),p(),ne(),ce=e(c()),h(),le=e(i()),ue=o(),de=e(a()),g=`wb`,_=(0,se.t)(g),(0,ue.r)(g,()=>_),v=m,_._=(0,le.default)(function(e,t,n,r,ee,i){let{a11yRoleDescription:a=`Notice`,status:o,class:s,...te}=e;ee.dismissed||(0,ce.default)(re,{...te,status:o,role:`region`,prefixClass:`section-notice`,type:`section`,mainRoot:`span`,a11yRoleDescription:a,class:[o===`education`&&`section-notice--large-icon`,s]},t,n,`0`,[[`dismiss`,`onDismiss`,!1],[`cta-click`,`emit`,!1,[`cta-click`]]])},{t:g},v),_.Component=(0,de.default)(v,_._)})))()}var fe,b,x,S,pe,me,he,C,w,T,E,D,O;function k(){return(k=t((()=>{fe=s(),b=e(u()),x=l(),ie(),S=e(c()),y(),pe=e(i()),me=o(),he=e(a()),C=`ilZYT_w`,w=(0,fe.t)(C),T=(0,b.default)(`div`,null,1).t(`Notice title`),E=(0,b.default)(`p`,null,2).e(`strong`,null,1).t(`Error:`).t(` Please take another look at the following:`),D=(0,b.default)(`p`,null,5).e(`a`,{href:`#`},1).t(`Card number`).t(` , `).e(`a`,{href:`#`},1).t(`Expiration date`).t(` & `).e(`a`,{href:`#`},1).t(`Security code`),(0,me.r)(C,()=>w),O={},w._=(0,pe.default)(function(e,t,n,r,ee,i){(0,S.default)(_,(0,x.i)(()=>((0,x.a)(`title`,{renderBody:e=>{e.n(T,r)}}),(0,x.a)(`footer`,{renderBody:e=>{(0,S.default)(ae,{renderBody:e=>{e.t(`Footer`,r)}},e,n,`2`)}}),e=>{e.n(E,r),e.n(D,r)}),{...e,title:void 0,footer:void 0}),t,n,`0`)},{t:C,i:!0},O),w.Component=(0,he.default)(O,w._)})))()}var A;function j(){return(j=t((()=>{A=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>";
export type Input = SectionNoticeInput;

<ebay-section-notice ...input>
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
</ebay-section-notice>
`})))()}var M,N,P,F,I,L,R,z,B,ge,_e,ve,V;function ye(){return(ye=t((()=>{M=s(),N=e(u()),P=l(),y(),F=e(c()),I=e(i()),L=o(),R=e(a()),z=`JfCX7OL`,B=(0,M.t)(z),ge=(0,N.default)(`div`,null,1).t(`Notice title`),_e=(0,N.default)(`p`,null,2).e(`strong`,null,1).t(`Error:`).t(` Please take another look at the following:`),ve=(0,N.default)(`p`,null,5).e(`a`,{href:`#`},1).t(`Card number`).t(` , `).e(`a`,{href:`#`},1).t(`Expiration date`).t(` & `).e(`a`,{href:`#`},1).t(`Security code`),(0,L.r)(z,()=>B),V={},B._=(0,I.default)(function(e,t,n,r,ee,i){(0,F.default)(_,(0,P.i)(()=>((0,P.a)(`title`,{renderBody:e=>{e.n(ge,r)}}),(0,P.a)(`cta`,{href:`https://www.ebay.com`,renderBody:e=>{e.t(`Link here`,r)}}),e=>{e.n(_e,r),e.n(ve,r)}),{...e,title:void 0,cta:void 0}),t,n,`0`,[[`dismiss`,`emit`,!1,[`dismiss`]]])},{t:z},V),B.Component=(0,R.default)(V,B._)})))()}var be;function xe(){return(xe=t((()=>{be=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>";
export type Input = SectionNoticeInput;
class {}

<ebay-section-notice ...input on-dismiss("emit", "dismiss")>
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
</ebay-section-notice>
`})))()}var Se,H,U,Ce,we,Te,Ee,W,G,De,Oe,ke,K;function Ae(){return(Ae=t((()=>{Se=s(),ie(),H=e(u()),U=l(),y(),Ce=e(c()),we=e(i()),Te=o(),Ee=e(a()),W=`$QouamL`,G=(0,Se.t)(W),De=(0,H.default)(`div`,null,1).t(`Notice title`),Oe=(0,H.default)(`p`,null,2).e(`strong`,null,1).t(`Error:`).t(` Please take another look at the following:`),ke=(0,H.default)(`p`,null,5).e(`a`,{href:`#`},1).t(`Card number`).t(` , `).e(`a`,{href:`#`},1).t(`Expiration date`).t(` & `).e(`a`,{href:`#`},1).t(`Security code`),(0,Te.r)(W,()=>G),K={},G._=(0,we.default)(function(e,t,n,r,ee,i){(0,Ce.default)(_,(0,U.i)(()=>((0,U.a)(`title`,{renderBody:e=>{e.n(De,r)}}),(0,U.a)(`cta`,{as:ae,renderBody:e=>{e.t(`Link here`,r)}}),e=>{e.n(Oe,r),e.n(ke,r)}),{...e,title:void 0,cta:void 0}),t,n,`0`,[[`dismiss`,`emit`,!1,[`dismiss`]],[`cta-click`,`emit`,!1,[`cta-click`]]])},{t:W},K),G.Component=(0,Ee.default)(K,G._)})))()}var je;function Me(){return(Me=t((()=>{je=`class {}
import fakeLink from "<ebay-fake-link>";

<ebay-section-notice
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
</ebay-section-notice>
`})))()}var q,J,Y,X,Z,Q,$,Ne;function Pe(){return(Pe=t((()=>{d(),y(),k(),j(),ye(),xe(),Ae(),Me(),q=e=>({input:ee(e)}),J={title:`notices & tips/ebay-section-notice`,component:_,parameters:{docs:{description:{component:oe}}},argTypes:{status:{table:{defaultValue:{summary:`attention`}},description:`The icon used and status of the notice`,options:[`attention`,`confirmation`,`information`],type:`select`},icon:{table:{defaultValue:{summary:`default`}},options:[`default`,`none`],type:`select`,description:`matches whatever is specified by the "status", or if none hides icon`},a11yText:{description:`Localized, adding description for the notice for a11y users`},a11yRoleDescription:{table:{defaultValue:{summary:`Notice`}},description:`Localized, the roledescription to announce the component type for a11y users.`},dismissed:{description:`whether or not the notice is dismissed`,type:`boolean`},title:{name:`@title`,description:`The title content to be displayed.`,table:{category:`@attribute tags`}},footer:{name:`@footer`,description:`The footer content to be displayed. Used to show a CTA button generally`,table:{category:`@attribute tags`}},cta:{name:`@cta`,description:`This allows the addition of a main CTA link`,table:{category:`@attribute tags`}},onDismiss:{action:`on-dismiss`,description:`Triggered on notice dismiss`,table:{category:`Events`,defaultValue:{summary:``}}},"on-cta-click":{action:`on-cta-click`,description:`Triggered when CTA is clicked`,table:{category:`Events`,defaultValue:{summary:``}}}}},Y=q.bind({}),Y.args={a11yText:`attention`,status:`attention`,a11yRoleDescription:`Notice`,renderBody:`<p>Section notice info. Things you need to know.</p>`},Y.parameters={docs:{source:{code:n(`ebay-section-notice`,Y.args)}}},X=q.bind({}),X.args={a11yText:`attention`,status:`attention`,a11yRoleDescription:`Notice`,title:{renderBody:`Section notice title`},renderBody:`<p>Section notice info. Things you need to know.</p>`},X.parameters={docs:{source:{code:n(`ebay-section-notice`,X.args)}}},Z=r(w,A,{a11yText:`attention`,status:`attention`}),Q=r(B,be,{a11yText:`information`,a11yIconText:``,a11yDismissText:`Dismiss Notice`,status:`information`,icon:null}),$=e=>({input:e,component:G}),$.args={a11yText:`information`,a11yIconText:``,a11yDismissText:`Dismiss Notice`,status:`information`,icon:null},$.parameters={docs:{source:{code:je}}},Ne=[`Basic`,`WithTitle`,`WithAction`,`WithDismiss`,`WithCustomCTADismiss`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withCustomCTADismiss
})`,...$.parameters?.docs?.source}}}})))()}Pe();export{Y as Basic,Z as WithAction,$ as WithCustomCTADismiss,Q as WithDismiss,X as WithTitle,Ne as __namedExportsOrder,J as default};