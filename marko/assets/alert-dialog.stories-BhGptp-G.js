import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,C as ee,L as i,M as a,P as te,R as ne,T as re,Z as o,c as ie,et as s,i as c,it as l,k as u,n as ae,nt as oe,q as d,s as f,t as p,tt as m}from"./dom-CrmgVQ1h.js";import{t as se}from"./controllable-open.feat-H_cIBEOf.js";import{t as ce}from"./controllable.feat-Zzhbi3Cf.js";import{i as h,n as le,o as ue,r as de,t as fe}from"./evo-button-OmHu2dco.js";import{t as pe}from"./dialog-Dd2_jjCz.js";var me;function he(){return(he=e((()=>{me=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-alert-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

An alert dialog that forces the user to acknowledge a message before continuing. The dialog can only be dismissed by clicking the confirm button -- Escape and backdrop clicks are blocked.

Uses a native \`<dialog>\` element with \`role="alertdialog"\` and \`closedby="none"\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/navigation-disclosure-evo-alert-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/navigation-disclosure-evo-alert-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-alert-dialog/examples)
`})))()}function ge(){return(ge=e((()=>{pe()})))()}function g(e){le(e.e),M(e,d(e)),N(e)}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,_e,W,ve,G,K,q,ye;function J(){return(J=e((()=>{ue(),c(),se(),ce(),ge(),_=(e=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${e}</div></dialog>`)(de),v=(e=>` E%l D%lD/${e}&m`)(h),oe(),y=ne(3),b=s(20,e=>ie(e.a,[`dialog`,`dialog--narrow`,!e.s&&`dialog--close`,e.k])),x=l(`c1`,e=>{e.s&&!e.a.open&&e.a.showModal()}),S=o(18,e=>{b(e),x(e)}),C=s(9,e=>S(e,e.h,e.i)),w=u(7,C),T=u(8,C),E=i(1),D=s(26,e=>E(e,e.z,()=>({...e.x,id:e.v,class:[`dialog__title`,e.y]})),3),O=u(21,e=>{f(e.a,`aria-labelledby`,e.v),D(e)}),k=(e,t)=>O(e,t||d(e,`Jv`)),A=u(10,b),j=s(30,e=>fe(e.e,{...e.a3,priority:`primary`,autofocus:!0,"aria-describedby":e.a1,onClick:q(e)}),2),M=u(27,e=>{f(e.c,`id`,e.a1),j(e)}),N=l(`c2`,e=>{n(e.a,`cancel`,function(t,n){t.preventDefault(),e.q&&e.q(t,n)}),n(e.a,`animationend`,function(t,n){t.target===n&&!e.s&&n.close(),e.p&&e.p(t,n)})}),P=l(`c3`,e=>re(e,`a`)),F=u(17,e=>{ee(e,`a`,{...e.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},te),P(e)}),I=u(25,D),L=(e,t)=>I(e,t===void 0?`h2`:t),R=u(23,D),z=u(24,D),B=i(3),V=B,H=u(28,j),U=u(29,j),_e=(e,t)=>{(({class:t,confirm:n,content:r,header:ee,onAnimationEnd:i,onCancel:a,open:te,openChange:ne,...re})=>F(e,re))(t),w(e,t.open),T(e,t.openChange),A(e,t.class),W(e,t.header),ve(e,t.confirm),V(e,t.content),G(e,t.onAnimationEnd),K(e,t.onCancel)},W=(e,t)=>{(({as:t,...n})=>R(e,n))(t),k(e,t.id),L(e,t.as),z(e,t.class)},ve=(e,t)=>{(({onClick:t,...n})=>U(e,n))(t),H(e,t.onClick)},G=u(15),K=u(16),q=e=>function(t,n){S(e,!1),e.a2&&e.a2(t,n)},m(`c0`,q),ye=p(`c`,_,v,g,_e)})))()}function be(e){le(e.a),fe(e.a,{onClick:Q(e),content:Ee(e)}),g(e.b),W(e.b,ae({content:we(e)})),H(e.b),U(e.b,{content:Ce(e)}),y(e.b,Te(e)),T(e.b,Z(e))}var xe,Se,Ce,we,Te,Ee,Y,X,De,Oe,ke,Z,Q,Ae;function je(){return(je=e((()=>{J(),ue(),c(),xe=((e,t)=>`<!>${e}${t}`)(de,_),Se=((e,t)=>`b/${e}&/${t}&`)(h,v),Ce=a(`n24u$Yd`,`OK`),we=r(`FmEp4BE`,`Alert!`),Te=r(`B2Gcg9l`,`<p>You must acknowledge this alert to continue.</p>`),Ee=a(`rCTmabS`,`Open Alert Dialog`),Y=o(7,e=>w(e.b,e.h)),X=s(6,e=>Y(e,e.e,e.f)),De=u(4,X),Oe=u(5,X),ke=u(3,e=>{A(e.b,e.d.class),G(e.b,e.d.onAnimationEnd),K(e.b,e.d.onCancel),F(e.b,(({class:e,confirm:t,content:n,header:r,onAnimationEnd:ee,onCancel:i,open:a,openChange:te,...ne})=>ne)(e.d)),De(e,e.d.open),Oe(e,e.d.openChange)}),Z=e=>t=>{Y(e,t)},Q=e=>function(){Y(e,!0)},m(`m8uPveD`,Z),m(`tazE9Pk`,Q),Ae=p(`qDy_JOo`,xe,Se,be,ke)})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
export interface Input extends AlertDialogInput {}

<let/open:=input.open>

<evo-button onClick() {
  open = true;
}>
  Open Alert Dialog
</evo-button>

<evo-alert-dialog ...input open:=open>
  <@header>Alert!</@header>
  <@confirm>OK</@confirm>
  <p>You must acknowledge this alert to continue.</p>
</evo-alert-dialog>
`})))()}var Pe,$,Fe;function Ie(){return(Ie=e((()=>{he(),J(),je(),Ne(),Pe={title:`navigation & disclosure/evo-alert-dialog`,component:ye,parameters:{docs:{description:{component:me}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the alert dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},confirm:{description:`The confirm/acknowledge button (required). Render body is the button label text`,"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},$=t(Ae,Me),Fe=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...$.parameters?.docs?.source}}}})))()}Ie();export{$ as Default,Fe as __namedExportsOrder,Pe as default};