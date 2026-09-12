import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,E as ee,F as te,N as i,R as ne,Y as a,c as re,i as o,it as ie,j as s,n as ae,nt as c,ot as l,rt as u,s as d,t as f,tt as p,w as oe,z as se}from"./dom-DAi6NM7T.js";import{t as ce}from"./controllable-open.feat-CJ2gPFEp.js";import{t as le}from"./controllable.feat--isLa5cW.js";import{i as ue,n as m,o as de,r as fe,t as pe}from"./evo-button-BmAqMdj-.js";import{t as me}from"./dialog-Dd2_jjCz.js";var he;function ge(){return(ge=e((()=>{he=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function _e(){return(_e=e((()=>{me()})))()}function h(e){m(e.e),j(e,a(e)),M(e)}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,ve,G,K,q,ye;function J(){return(J=e((()=>{de(),o(),ce(),le(),_e(),g=(e=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${e}</div></dialog>`)(fe),_=(e=>` E%l D%lD/${e}&m`)(ue),ie(),v=se(3),y=c(20,e=>re(e.a,[`dialog`,`dialog--narrow`,!e.s&&`dialog--close`,e.k])),b=l(`c1`,e=>{e.s&&!e.a.open&&e.a.showModal()}),x=n(18,e=>{y(e),b(e)}),S=c(9,e=>x(e,e.h,e.i)),C=r(7,S),w=r(8,S),T=ne(1),E=c(26,e=>T(e,e.z,()=>({...e.x,id:e.v,class:[`dialog__title`,e.y]})),3),D=r(21,e=>{d(e.a,`aria-labelledby`,e.v),E(e)}),O=(e,t)=>D(e,t||a(e,`Jv`)),k=r(10,y),A=c(30,e=>pe(e.e,{...e.a3,priority:`primary`,autofocus:!0,"aria-describedby":e.a1,onClick:q(e)}),2),j=r(27,e=>{d(e.c,`id`,e.a1),A(e)}),M=l(`c2`,e=>{p(e.a,`cancel`,function(t,n){t.preventDefault(),e.q&&e.q(t,n)}),p(e.a,`animationend`,function(t,n){t.target===n&&!e.s&&n.close(),e.p&&e.p(t,n)})}),N=l(`c3`,e=>ee(e,`a`)),P=r(17,e=>{oe(e,`a`,{...e.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},te),N(e)}),F=r(25,E),I=(e,t)=>F(e,t===void 0?`h2`:t),L=r(23,E),R=r(24,E),z=ne(3),B=z,V=r(28,A),H=r(29,A),U=(e,t)=>{(({class:t,confirm:n,content:r,header:ee,onAnimationEnd:te,onCancel:i,open:ne,openChange:a,...re})=>P(e,re))(t),C(e,t.open),w(e,t.openChange),k(e,t.class),W(e,t.header),ve(e,t.confirm),B(e,t.content),G(e,t.onAnimationEnd),K(e,t.onCancel)},W=(e,t)=>{(({as:t,...n})=>L(e,n))(t),O(e,t.id),I(e,t.as),R(e,t.class)},ve=(e,t)=>{(({onClick:t,...n})=>H(e,n))(t),V(e,t.onClick)},G=r(15),K=r(16),q=e=>function(t,n){x(e,!1),e.a2&&e.a2(t,n)},u(`c0`,q),ye=f(`c`,g,_,h,U)})))()}function be(e){m(e.a),pe(e.a,{onClick:Q(e),content:Ee(e)}),h(e.b),W(e.b,ae({content:we(e)})),V(e.b),H(e.b,{content:Ce(e)}),v(e.b,Te(e)),w(e.b,Z(e))}var xe,Se,Ce,we,Te,Ee,Y,X,De,Oe,ke,Z,Q,Ae;function je(){return(je=e((()=>{J(),de(),o(),xe=((e,t)=>`<!>${e}${t}`)(fe,g),Se=((e,t)=>`b/${e}&/${t}&`)(ue,_),Ce=i(`n24u$Yd`,`OK`),we=s(`FmEp4BE`,`Alert!`),Te=s(`B2Gcg9l`,`<p>You must acknowledge this alert to continue.</p>`),Ee=i(`rCTmabS`,`Open Alert Dialog`),Y=n(7,e=>C(e.b,e.h)),X=c(6,e=>Y(e,e.e,e.f)),De=r(4,X),Oe=r(5,X),ke=r(3,e=>{k(e.b,e.d.class),G(e.b,e.d.onAnimationEnd),K(e.b,e.d.onCancel),P(e.b,(({class:e,confirm:t,content:n,header:r,onAnimationEnd:ee,onCancel:te,open:i,openChange:ne,...a})=>a)(e.d)),De(e,e.d.open),Oe(e,e.d.openChange)}),Z=e=>t=>{Y(e,t)},Q=e=>function(){Y(e,!0)},u(`m8uPveD`,Z),u(`tazE9Pk`,Q),Ae=f(`qDy_JOo`,xe,Se,be,ke)})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
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
`})))()}var Pe,$,Fe;function Ie(){return(Ie=e((()=>{ge(),J(),je(),Ne(),Pe={title:`navigation & disclosure/evo-alert-dialog`,component:ye,parameters:{docs:{description:{component:he}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the alert dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},confirm:{description:`The confirm/acknowledge button (required). Render body is the button label text`,"@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},$=t(Ae,Me),Fe=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...$.parameters?.docs?.source}}}})))()}Ie();export{$ as Default,Fe as __namedExportsOrder,Pe as default};