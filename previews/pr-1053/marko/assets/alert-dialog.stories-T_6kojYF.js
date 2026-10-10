import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as ee,F as te,Q as r,R as i,at as a,c as o,ct as s,i as c,it as l,j as u,n as ne,nt as d,ot as f,s as p,t as m,w as re,z as ie}from"./dom-BJr4MHiD.js";import{n as ae,t as oe}from"./controllable.feat-Cluo05Rw.js";import{t as se}from"./dynamic-tag-script.feat-HXJ_YFdo.js";import{i as ce,n as le,o as ue,r as de,t as fe}from"./evo-button-Dltge7Gv.js";import{t as pe}from"./dialog-Dd2_jjCz.js";var me;function he(){return(he=e((()=>{me=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function ge(){return(ge=e((()=>{pe()})))()}function h(e){le(e.e),j(e,r(e)),M(e)}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,_e,U,ve,W,G,K,ye;function q(){return(q=e((()=>{ue(),c(),ae(),se(),oe(),ge(),g=(e=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${e}</div></dialog>`)(de),_=(e=>` E%l D%lD/${e}&m`)(ce),v=ie(3),y=a(20,e=>o(e.a,[`dialog`,`dialog--narrow`,!e.s&&`dialog--close`,e.k])),b=s(`c1`,e=>{e.s&&!e.a.open&&e.a.showModal()}),x=d(18,e=>{y(e),b(e)}),S=a(9,e=>x(e,e.h,e.i)),C=n(7,S),w=n(8,S),T=i(1),E=a(26,e=>T(e,e.z,()=>({...e.x,id:e.v,class:[`dialog__title`,e.y]})),3),D=n(21,e=>{p(e.a,`aria-labelledby`,e.v),E(e)}),O=(e,t)=>D(e,t||r(e,`Jv`)),k=n(10,y),A=a(30,e=>fe(e.e,{...e.a3,priority:`primary`,autofocus:!0,"aria-describedby":e.a1,onClick:K(e)}),2),j=n(27,e=>{p(e.c,`id`,e.a1),A(e)}),M=s(`c2`,e=>{l(e.a,`cancel`,function(t,n){t.preventDefault(),e.q&&e.q(t,n)}),l(e.a,`animationend`,function(t,n){t.target===n&&!e.s&&n.close(),e.p&&e.p(t,n)})}),N=s(`c3`,e=>ee(e,`a`)),P=n(17,e=>{re(e,`a`,{...e.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},te),N(e)}),F=n(25,E),I=(e,t)=>F(e,t===void 0?`h2`:t),L=n(23,E),R=n(24,E),z=i(3),B=z,V=n(28,A),H=n(29,A),_e=(e,t)=>{(({class:t,confirm:n,content:ee,header:te,onAnimationEnd:r,onCancel:i,open:a,openChange:o,...s})=>P(e,s))(t),C(e,t.open),w(e,t.openChange),k(e,t.class),U(e,t.header),ve(e,t.confirm),B(e,t.content),W(e,t.onAnimationEnd),G(e,t.onCancel)},U=(e,t)=>{(({as:t,...n})=>L(e,n))(t),O(e,t.id),I(e,t.as),R(e,t.class)},ve=(e,t)=>{(({onClick:t,...n})=>H(e,n))(t),V(e,t.onClick)},W=n(15),G=n(16),K=e=>function(t,n){x(e,!1),e.a2&&e.a2(t,n)},f.c0=K,ye=m(`c`,g,_,h,_e)})))()}function be(e){le(e.a),fe(e.a,{onClick:Z(e),content:Ee(e)}),h(e.b),U(e.b,ne({content:we(e)})),V(e.b),H(e.b,{content:Ce(e)}),v(e.b,Te(e)),w(e.b,X(e))}var xe,Se,Ce,we,Te,Ee,J,Y,De,Oe,ke,X,Z,Ae;function je(){return(je=e((()=>{q(),ue(),c(),xe=((e,t)=>`<!>${e}${t}`)(de,g),Se=((e,t)=>`b/${e}&/${t}&`)(ce,_),Ce=u(`n24u$Yd`,`OK`),we=u(`FmEp4BE`,`Alert!`),Te=u(`B2Gcg9l`,`<p>You must acknowledge this alert to continue.</p>`),Ee=u(`rCTmabS`,`Open Alert Dialog`),J=d(7,e=>C(e.b,e.h)),Y=a(6,e=>J(e,e.e,e.f)),De=n(4,Y),Oe=n(5,Y),ke=n(3,e=>{k(e.b,e.d.class),W(e.b,e.d.onAnimationEnd),G(e.b,e.d.onCancel),P(e.b,(({class:e,confirm:t,content:n,header:ee,onAnimationEnd:te,onCancel:r,open:i,openChange:a,...o})=>o)(e.d)),De(e,e.d.open),Oe(e,e.d.openChange)}),X=e=>t=>{J(e,t)},Z=e=>function(){J(e,!0)},f.m8uPveD=X,f.tazE9Pk=Z,Ae=m(`qDy_JOo`,xe,Se,be,ke)})))()}var Q;function Me(){return(Me=e((()=>{Q=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
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
`})))()}var Ne,$,Pe;function Fe(){return(Fe=e((()=>{he(),q(),je(),Me(),Ne={title:`navigation & disclosure/evo-alert-dialog`,component:ye,parameters:{docs:{description:{component:me}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the alert dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},confirm:{description:`The confirm/acknowledge button (required). Render body is the button label text`,"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},$=t(Ae,Q),Pe=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...$.parameters?.docs?.source}}}})))()}Fe();export{$ as Default,Pe as __namedExportsOrder,Ne as default};