import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as ee}from"./utils-C7m-hPxw.js";import{n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as te}from"./icon-yrMh4EQf.js";import{t as c}from"./render-tag-hXgrwudm.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as u}from"./const-element-BfQ4jh6r.js";import{n as ne,t as re}from"./ebay-notice-base-DGm8iM5D.js";import{n as ie,t as ae}from"./ebay-fake-link-BmUK378k.js";import{i as oe,n as se,r as ce,t as le}from"./ebay-authenticity-guarantee-24-icon-CGGJYF2Y.js";var ue;function de(){return(de=t((()=>{ue=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-education-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-education-notice>\` is a tag used to create an education notice element. The notice requires a \`@title\` element and should be wrapped inside a \`<p>\` tag.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-education-notice)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-education-notice)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-education-notice/examples)
`})))()}function fe(){return(fe=t((()=>{})))()}function pe(){return(pe=t((()=>{fe(),te()})))()}var me;function he(){return(he=t((()=>{me=class extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(e){this.state={dismissed:e.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit(`dismiss`)}}})))()}var ge,_e,ve,ye,d,f,p,m;function h(){return(h=t((()=>{ge=s(),pe(),ne(),_e=e(c()),he(),ve=e(i()),ye=o(),d=e(a()),f=`H`,p=(0,ge.t)(f),(0,ye.r)(f,()=>p),m=me,p._=(0,ve.default)(function(e,t,n,r,ee,i){let{a11yRoleDescription:a=`Notice`,status:o,class:s,variant:te,iconVariant:c,...l}=e;ee.dismissed||(0,_e.default)(re,{...l,role:`region`,prefixClass:`education-notice`,type:`section`,mainRoot:`div`,iconClass:[c===`prominent`&&`icon--prominent`],a11yRoleDescription:a,class:[te===`prominent`&&`education-notice--prominent`,s]},t,n,`0`,[[`dismiss`,`onDismiss`,!1]])},{t:f},m),p.Component=(0,d.default)(m,p._)})))()}var be,g,_,v,xe,Se,Ce,y,b,x,S,C;function w(){return(w=t((()=>{be=s(),g=e(u()),_=l(),ie(),v=e(c()),h(),xe=e(i()),Se=o(),Ce=e(a()),y=`ZD6Ug$X`,b=(0,be.t)(y),x=(0,g.default)(`div`,null,1).t(`Educaiton title`),S=(0,g.default)(`p`,null,1).t(`Please take another look at the following`),(0,Se.r)(y,()=>b),C={},b._=(0,xe.default)(function(e,t,n,r,ee,i){(0,v.default)(p,(0,_.i)(()=>((0,_.a)(`title`,{renderBody:e=>{e.n(x,r)}}),(0,_.a)(`footer`,{renderBody:e=>{(0,v.default)(ae,{renderBody:e=>{e.t(`Footer`,r)}},e,n,`2`)}}),e=>{e.n(S,r)}),{...e,title:void 0,footer:void 0}),t,n,`0`)},{t:y,i:!0},C),b.Component=(0,Ce.default)(C,b._)})))()}var T;function E(){return(E=t((()=>{T=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
export type Input = EducationNoticeInput;

<ebay-education-notice ...input>
    <@title>
        <div>Educaiton title</div>
    </@title>
    <@footer>
        <ebay-fake-link>Footer</ebay-fake-link>
    </@footer>
    <p>Please take another look at the following</p>
</ebay-education-notice>
`})))()}var D,O,k,A,j,M,N,P,F,we,Te,I;function Ee(){return(Ee=t((()=>{D=s(),oe(),O=e(u()),k=l(),h(),A=e(c()),j=e(i()),M=o(),N=e(a()),P=`hEmXeOY`,F=(0,D.t)(P),we=(0,O.default)(`div`,null,1).t(`Notice title`),Te=(0,O.default)(`p`,null,1).t(`The eBay vault will store items for you.`),(0,M.r)(P,()=>F),I={},F._=(0,j.default)(function(e,t,n,r,ee,i){(0,A.default)(p,(0,k.i)(()=>((0,k.a)(`title`,{renderBody:e=>{e.n(we,r)}}),e=>{e.n(Te,r)}),{...e,a11yText:`ebay vault`,variant:`prominent`,educationIcon:ce,title:void 0}),t,n,`0`)},{t:P,i:!0},I),F.Component=(0,N.default)(I,F._)})))()}var De;function Oe(){return(Oe=t((()=>{De=`import vaultIcon from "<ebay-the-ebay-vault-24-icon>";

<ebay-education-notice
    ...input
    a11y-text="ebay vault"
    variant="prominent"
    education-icon=vaultIcon
>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>The eBay vault will store items for you.</p>
</ebay-education-notice>
`})))()}var ke,L,R,z,Ae,je,Me,B,V,Ne,Pe,H;function Fe(){return(Fe=t((()=>{ke=s(),se(),L=e(u()),R=l(),h(),z=e(c()),Ae=e(i()),je=o(),Me=e(a()),B=`Io8JzSh`,V=(0,ke.t)(B),Ne=(0,L.default)(`div`,null,1).t(`Notice title`),Pe=(0,L.default)(`p`,null,1).t(`The eBay vault will store items for you.`),(0,je.r)(B,()=>V),H={},V._=(0,Ae.default)(function(e,t,n,r,ee,i){(0,z.default)(p,(0,R.i)(()=>((0,R.a)(`title`,{renderBody:e=>{e.n(Ne,r)}}),e=>{e.n(Pe,r)}),{...e,a11yText:`ebay vault`,iconVariant:`prominent`,educationIcon:le,title:void 0}),t,n,`0`)},{t:B,i:!0},H),V.Component=(0,Me.default)(H,V._)})))()}var Ie;function Le(){return(Le=t((()=>{Ie=`import authGuarantee from "<ebay-authenticity-guarantee-24-icon>";

<ebay-education-notice
    ...input
    a11y-text="ebay vault"
    icon-variant="prominent"
    education-icon=authGuarantee
>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>The eBay vault will store items for you.</p>
</ebay-education-notice>
`})))()}var Re,U,W,ze,Be,Ve,He,G,K,Ue,We,q;function Ge(){return(Ge=t((()=>{Re=s(),U=e(u()),W=l(),h(),ze=e(c()),Be=e(i()),Ve=o(),He=e(a()),G=`zxwQ_1z`,K=(0,Re.t)(G),Ue=(0,U.default)(`div`,null,1).t(`Notice title`),We=(0,U.default)(`p`,null,1).t(`The eBay vault will store items for you.`),(0,Ve.r)(G,()=>K),q={},K._=(0,Be.default)(function(e,t,n,r,ee,i){(0,ze.default)(p,(0,W.i)(()=>((0,W.a)(`title`,{renderBody:e=>{e.n(Ue,r)}}),e=>{e.n(We,r)}),{...e,title:void 0}),t,n,`0`,[[`dismiss`,`emit`,!1,[`dismiss`]]])},{t:G},q),K.Component=(0,He.default)(q,K._)})))()}var Ke;function qe(){return(qe=t((()=>{Ke=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
export type Input = EducationNoticeInput;
class {}

<ebay-education-notice ...input on-dismiss("emit", "dismiss")>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>The eBay vault will store items for you.</p>
</ebay-education-notice>
`})))()}var Je,Ye,J,Y,X,Z,Q,Xe;function $(){return($=t((()=>{de(),h(),w(),E(),Ee(),Oe(),Fe(),Le(),Ge(),qe(),Je=e=>({input:ee(e)}),Ye={title:`notices & tips/ebay-education-notice`,component:p,parameters:{docs:{description:{component:ue}}},argTypes:{educationIcon:{name:`@educationIcon`,description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{defaultValue:{summary:`ebay-lightbulb-24-icon`,category:`@attribute tags`}}},variant:{description:`Either none or prominent. If prominent, the notice will be more prominent`,options:[`none`,`prominent`],type:`select`,defaultValue:{summary:`none`}},iconVariant:{description:`Either none or prominent. If prominent, the icon will be more prominent`,options:[`none`,`prominent`],type:`select`,defaultValue:{summary:`none`}},a11yText:{description:`Localized, adding description for the notice for a11y users`},a11yRoleDescription:{table:{defaultValue:{summary:`Notice`}},description:`Localized, the roledescription to announce the component type for a11y users.`},dismissed:{description:`whether or not the notice is dismissed`,type:`boolean`},a11yDismissText:{control:{type:`text`},description:`Localized text for dismiss button`},title:{name:`@title`,description:`The title content to be displayed.`,table:{required:!0,category:`@attribute tags`}},footer:{name:`@footer`,description:`The footer content to be displayed. Contains a button or link.`,table:{category:`@attribute tags`}},onDismiss:{action:`on-dismiss`,description:`Triggered on notice dismiss`,table:{category:`Events`,defaultValue:{summary:``}}}}},J=Je.bind({}),J.args={a11yText:`education`,a11yRoleDescription:`Notice`,title:{renderBody:`Education notice title`},renderBody:`<p>Education notice info. Things you need to know.</p>`},J.parameters={docs:{source:{code:n(`ebay-education-notice`,J.args)}}},Y=r(F,De,{a11yText:`attention`,status:`attention`}),X=r(V,Ie,{a11yText:`attention`,status:`attention`}),Z=r(K,Ke,{a11yText:`information`,a11yIconText:``,a11yDismissText:`Dismiss Notice`}),Q=r(b,T,{a11yText:`information`}),Xe=[`Default`,`Prominent`,`ProminentIcon`,`WithDismiss`,`WithFooter`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ProminentTemplate, ProminentTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ProminentIconTemplate, ProminentIconTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice"
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withFooter, withFooterCode, {
  a11yText: "information"
})`,...Q.parameters?.docs?.source}}}})))()}$();export{J as Default,Y as Prominent,X as ProminentIcon,Z as WithDismiss,Q as WithFooter,Xe as __namedExportsOrder,Ye as default};