import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as ee,L as r,P as te,R as ne,Z as i,at as a,c as re,i as o,it as s,k as c,n as ie,rt as l,s as u,st as d,t as f,tt as p,w as ae}from"./dom-CUxLGBQ2.js";import{n as oe,r as se,t as ce}from"./controllable.feat-Buq1Z8-2.js";import{i as m,n as le,o as ue,r as de,t as fe}from"./evo-button-JyGzuUeJ.js";import{t as pe}from"./dialog-BYWvBqS_.js";var me;function he(){return(he=e((()=>{me=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function h(){return(h=e((()=>{pe()})))()}function g(e){le(e.e),j(e,i(e)),M(e)}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,ge,U,W,G,K,q,_e;function J(){return(J=e((()=>{ue(),o(),se(),oe(),ce(),h(),_=(e=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${e}</div></dialog>`)(de),v=(e=>` E%l D%lD/${e}&m`)(m),y=ne(3),b=s(20,e=>re(e.a,[`dialog`,`dialog--narrow`,!e.s&&`dialog--close`,e.k])),x=d(`c1`,e=>{e.s&&!e.a.open&&e.a.showModal()}),S=p(18,e=>{b(e),x(e)}),C=s(9,e=>S(e,e.h,e.i)),w=c(7,C),T=c(8,C),E=r(1),D=s(26,e=>E(e,e.z,t=>({...e.x,id:e.v,class:[`dialog__title`,e.y]})),3),O=c(21,e=>{u(e.a,`aria-labelledby`,e.v),D(e)}),k=c(10,b),A=s(30,e=>fe(e.e,{...e.a3,priority:`primary`,autofocus:!0,"aria-describedby":e.a1,onClick:q(e)}),2),j=c(27,e=>{u(e.c,`id`,e.a1),A(e)}),M=d(`c2`,e=>{l(e.a,`cancel`,function(t,n){t.preventDefault(),e.q&&e.q(t,n)}),l(e.a,`animationend`,function(t,n){t.target===n&&!e.s&&n.close(),e.p&&e.p(t,n)})}),N=d(`c3`,e=>ee(e,`a`)),P=c(17,e=>{ae(e,`a`,{...e.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},te),N(e)}),F=c(25,D),I=(e,t)=>F(e,t===void 0?`h2`:t),L=c(23,D),R=c(24,D),z=r(3),B=z,V=c(28,A),H=c(29,A),ge=(e,t)=>{P(e,(({class:e,confirm:t,content:n,header:ee,onAnimationEnd:r,onCancel:te,open:ne,openChange:i,...a})=>a)(t)),w(e,t.open),T(e,t.openChange),k(e,t.class),U(e,t.header),W(e,t.confirm),B(e,t.content),G(e,t.onAnimationEnd),K(e,t.onCancel)},U=(e,t)=>{L(e,(({as:e,...t})=>t)(t)),O(e,t.id||i(e,`Jv`)),I(e,t.as),R(e,t.class)},W=(e,t)=>{H(e,(({onClick:e,...t})=>t)(t)),V(e,t.onClick)},G=c(15),K=c(16),q=e=>function(t,n){S(e,!1),e.a2&&e.a2(t,n)},a.c0=q,_e=f(`c`,_,v,g,ge)})))()}function ve(e){le(e.a),fe(e.a,{onClick:Q(e),content:we(e)}),g(e.b),U(e.b,ie({content:Se(e)})),V(e.b),H(e.b,{content:xe(e)}),y(e.b,Ce(e)),T(e.b,Z(e))}var ye,be,xe,Se,Ce,we,Y,X,Te,Ee,De,Z,Q,Oe;function ke(){return(ke=e((()=>{J(),ue(),o(),ye=((e,t)=>`<!>${e}${t}`)(de,_),be=((e,t)=>`b/${e}&/${t}&`)(m,v),xe=n(`n24u$Yd`,`OK`),Se=n(`FmEp4BE`,`Alert!`),Ce=n(`q17k5dm`,`<p>You must acknowledge this alert to continue.</p>`),we=n(`rCTmabS`,`Open Alert Dialog`),Y=p(7,e=>w(e.b,e.h)),X=s(6,e=>Y(e,e.e,e.f)),Te=c(4,X),Ee=c(5,X),De=c(3,e=>{k(e.b,e.d.class),G(e.b,e.d.onAnimationEnd),K(e.b,e.d.onCancel),P(e.b,(({class:e,confirm:t,content:n,header:ee,onAnimationEnd:r,onCancel:te,open:ne,openChange:i,...a})=>a)(e.d)),Te(e,e.d.open),Ee(e,e.d.openChange)}),Z=e=>t=>Y(e,t),Q=e=>function(){Y(e,!0)},a.m8uPveD=Z,a.tazE9Pk=Q,Oe=f(`fC_7yTo`,ye,be,ve,De)})))()}var Ae;function je(){return(je=e((()=>{Ae=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
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
`})))()}var Me,$,Ne;function Pe(){return(Pe=e((()=>{he(),J(),ke(),je(),Me={title:`navigation & disclosure/evo-alert-dialog`,component:_e,parameters:{docs:{description:{component:me}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the alert dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},confirm:{description:`The confirm/acknowledge button (required). Render body is the button label text`,"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},$=t(Oe,Ae),Ne=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...$.parameters?.docs?.source}}}})))()}Pe();export{$ as Default,Ne as __namedExportsOrder,Me as default};