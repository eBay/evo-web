import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as ee,L as r,P as te,R as ne,Z as re,at as i,c as a,i as o,it as s,k as c,n as ie,rt as ae,s as oe,st as l,t as se,tt as u,w as ce}from"./dom-CUxLGBQ2.js";import{n as le,r as ue,t as de}from"./controllable.feat-Buq1Z8-2.js";import{i as d,n as f,o as p,r as m,t as h}from"./evo-button-JyGzuUeJ.js";import{t as fe}from"./dialog-BYWvBqS_.js";var pe;function me(){return(me=e((()=>{pe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-confirm-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

A confirm dialog that forces the user to make a choice to either confirm or reject. The dialog can be dismissed by clicking one of the two buttons, and pressing Escape triggers the reject action.

Uses a native \`<dialog>\` element with \`role="alertdialog"\` and \`closedby="closerequest"\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/navigation-disclosure-evo-confirm-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/navigation-disclosure-evo-confirm-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-confirm-dialog/examples)
`})))()}function he(){return(he=e((()=>{fe()})))()}function ge(e){f(e.e),f(e.f),O(e,re(e)),k(e)}var g,_,_e,v,ve,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,ye,U,be,xe,W,G,K,q,Se;function J(){return(J=e((()=>{p(),o(),ue(),le(),de(),he(),g=((e,t)=>`<dialog role=alertdialog aria-modal=true closedby=closerequest><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${e}${t}</div></dialog>`)(m,m),_=((e,t)=>` E%l D%lD/${e}&/${t}&m`)(d,d),_e=ne(3),v=s(22,e=>a(e.a,[`dialog`,`dialog--narrow`,!e.u&&`dialog--close`,e.l])),ve=l(`p2`,e=>{e.u&&!e.a.open&&e.a.showModal()}),y=u(20,e=>{v(e),ve(e)}),b=s(10,e=>y(e,e.i,e.j)),x=c(8,b),S=c(9,b),C=r(1),w=s(28,e=>C(e,e.a1,t=>({...e.z,id:e.x,class:[`dialog__title`,e.a0]})),3),T=c(23,e=>{oe(e.a,`aria-labelledby`,e.x),w(e)}),E=c(11,v),D=s(35,e=>h(e.f,{...e.a8,priority:`primary`,autofocus:!0,"aria-describedby":e.a3,onClick:K(e)}),2),O=c(29,e=>{oe(e.c,`id`,e.a3),D(e)}),k=l(`p3`,e=>{ae(e.a,`cancel`,function(t,n){t.preventDefault(),y(e,!1),e.r&&e.r(t,n)}),ae(e.a,`animationend`,function(t,n){t.target===n&&!e.u&&n.close(),e.s&&e.s(t,n)})}),A=l(`p4`,e=>ee(e,`a`)),j=c(19,e=>{ce(e,`a`,{...e.t,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},te),A(e)}),M=c(27,w),N=(e,t)=>M(e,t===void 0?`h2`:t),P=c(25,w),F=c(26,w),I=r(3),L=I,R=s(32,e=>h(e.e,{...e.a5,onClick:q(e)})),z=c(30,R),B=c(31,R),V=c(33,D),H=c(34,D),ye=(e,t)=>{j(e,(({class:e,confirm:t,content:n,header:ee,onAnimationEnd:r,onCancel:te,open:ne,openChange:re,reject:i,...a})=>a)(t)),x(e,t.open),S(e,t.openChange),E(e,t.class),U(e,t.header),be(e,t.confirm),xe(e,t.reject),L(e,t.content),W(e,t.onCancel),G(e,t.onAnimationEnd)},U=(e,t)=>{P(e,(({as:e,...t})=>t)(t)),T(e,t.id||re(e,`Jx`)),N(e,t.as),F(e,t.class)},be=(e,t)=>{H(e,(({onClick:e,...t})=>t)(t)),V(e,t.onClick)},xe=(e,t)=>{B(e,(({onClick:e,...t})=>t)(t)),z(e,t.onClick)},W=c(17),G=c(18),K=e=>function(t,n){y(e,!1),e.a7&&e.a7(t,n)},q=e=>function(t,n){e.a.requestClose(),e.a4&&e.a4(t,n)},i.p1=K,i.p0=q,Se=se(`p`,g,_,ge,ye)})))()}function Ce(e){f(e.a),h(e.a,{onClick:Q(e),content:Ae(e)}),ge(e.b),U(e.b,ie({content:Oe(e)})),z(e.b),B(e.b,{content:De(e)}),V(e.b),H(e.b,{content:Ee(e)}),_e(e.b,ke(e)),S(e.b,Z(e))}var we,Te,Ee,De,Oe,ke,Ae,Y,X,je,Me,Ne,Z,Q,Pe;function Fe(){return(Fe=e((()=>{J(),p(),o(),we=((e,t)=>`<!>${e}${t}`)(m,g),Te=((e,t)=>`b/${e}&/${t}&`)(d,_),Ee=n(`VGNpIQI`,`Delete`),De=n(`dVXnZdA`,`Cancel`),Oe=n(`zJK7$B0`,`Delete Address?`),ke=n(`k6blhrp`,`<p>You will permanently lose this address.</p>`),Ae=n(`fnI0HH$`,`Open Confirm Dialog`),Y=u(7,e=>x(e.b,e.h)),X=s(6,e=>Y(e,e.e,e.f)),je=c(4,X),Me=c(5,X),Ne=c(3,e=>{E(e.b,e.d.class),G(e.b,e.d.onAnimationEnd),W(e.b,e.d.onCancel),j(e.b,(({class:e,confirm:t,content:n,header:ee,onAnimationEnd:r,onCancel:te,open:ne,openChange:re,reject:i,...a})=>a)(e.d)),je(e,e.d.open),Me(e,e.d.openChange)}),Z=e=>t=>Y(e,t),Q=e=>function(){Y(e,!0)},i.WSA5NZC=Z,i.TtqdeWi=Q,Pe=se(`WRVu_YL`,we,Te,Ce,Ne)})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`import { type Input as ConfirmDialogInput } from "<evo-confirm-dialog>";
export interface Input extends ConfirmDialogInput {}

<let/open:=input.open>

<evo-button onClick() {
  open = true;
}>
  Open Confirm Dialog
</evo-button>

<evo-confirm-dialog ...input open:=open>
  <@header>Delete Address?</@header>
  <@reject>Cancel</@reject>
  <@confirm>Delete</@confirm>
  <p>You will permanently lose this address.</p>
</evo-confirm-dialog>
`})))()}var Re,$,ze;function Be(){return(Be=e((()=>{me(),J(),Fe(),Le(),Re={title:`navigation & disclosure/evo-confirm-dialog`,component:Se,parameters:{docs:{description:{component:pe}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the confirm dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},confirm:{description:`The confirm button (required). Render body is the button label text`,"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},reject:{description:`The reject/cancel button (required). Render body is the button label text. Also triggered by Escape key`,"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"},onCancel:{action:`onCancel`,description:"Triggered when the dialog's cancel event fires, via `esc` or the cancel button",table:{category:`Events`}}}},$=t(Pe,Ie),ze=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...$.parameters?.docs?.source}}}})))()}Be();export{$ as Default,ze as __namedExportsOrder,Re as default};