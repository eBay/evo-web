import{b as J}from"./utils-DyU2_5R1.js";import{a as g,m as K,p as h,b as e,c as P,r as p,d as s,t as u,i as V,e as i,f as G,g as b,u as f,h as Q,a1 as N,_ as d,l as X,j as Z}from"./dom-BQBHkMGv.js";import{a as v,b as y,c as C,$ as k}from"./index-B4NYxc4H.js";import"./controllable-open.feat-B4429lRB.js";import"./controllable.feat-Ct1C3I9X.js";/* empty css               */import"./iframe-rbTg3zTU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-inYeMHMi.js";import"./index-Corjdykz.js";import"./evo-icon-chevron-down-16-Dgq2Xcfj.js";import"./controllable-input.feat-D8X06sdI.js";import"./controllable-select.feat-C_lf_e4k.js";const nn=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,E=(n=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${n}</div></dialog>`)(C),D=(n=>` E%l D%lD/${n}&m`)(y);K();const tn=Q(3),T=i(20,n=>G(n.a,["dialog","dialog--narrow",!n.s&&"dialog--close",n.k])),en=s("FTg8ECV",n=>{n.s&&!n.a.open&&n.a.showModal()}),w=f(18,n=>{T(n),en(n)}),A=i(9,n=>w(n,n.h,n.i)),x=e(7,A),O=e(8,A),an=b(1),r=i(26,n=>an(n,n.z,()=>({...n.x,id:n.v,class:["dialog__title",n.y]})),3),on=e(21,n=>{p(n.a,"aria-labelledby",n.v),r(n)}),ln=(n,t)=>on(n,t||h(n,"Jv")),I=e(10,T),c=i(30,n=>k(n.e,{...n.a3,priority:"primary",autofocus:!0,"aria-describedby":n.a1,onClick:fn(n)}),2),rn=e(27,n=>{p(n.c,"id",n.a1),c(n)}),sn=s("PgeWQux",n=>{u(n.a,"cancel",function(t,a){t.preventDefault(),n.q&&n.q(t,a)}),u(n.a,"animationend",function(t,a){t.target===a&&!n.s&&a.close(),n.p&&n.p(t,a)})});function R(n){v(n.e),rn(n,h(n)),sn(n)}const dn=s("zEBsPo0",n=>V(n,"a")),S=e(17,n=>{P(n,"a",{...n.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},N),dn(n)}),cn=e(25,r),mn=(n,t)=>cn(n,t!==void 0?t:"h2"),_n=e(23,r),un=e(24,r),gn=b(3),hn=gn,q=e(28,c),z=e(29,c),pn=(n,t)=>{(({class:a,confirm:o,content:W,header:$,onAnimationEnd:U,onCancel:Y,open:j,openChange:_,...F})=>S(n,F))(t),x(n,t.open),O(n,t.openChange),I(n,t.class),B(n,t.header),bn(n,t.confirm),hn(n,t.content),H(n,t.onAnimationEnd),M(n,t.onCancel)},B=(n,t)=>{(({as:a,...o})=>_n(n,o))(t),ln(n,t.id),mn(n,t.as),un(n,t.class)},bn=(n,t)=>{(({onClick:a,...o})=>z(n,o))(t),q(n,t.onClick)},H=e(15),M=e(16),fn=n=>function(t,a){w(n,!1),n.a2&&n.a2(t,a)},vn=g("$xH4nEu",E,D,R,pn),yn=((n,t)=>`<!>${n}${t}`)(C,E),Cn=((n,t)=>`b/${n}&/${t}&`)(y,D),kn=d("n24u$Yd","OK"),En=d("FmEp4BE","Alert!"),Dn=Z("B2Gcg9l","<p>You must acknowledge this alert to continue.</p>"),Tn=d("rCTmabS","Open Alert Dialog"),m=f(7,n=>x(n.b,n.h)),L=i(6,n=>m(n,n.e,n.f)),wn=e(4,L),An=e(5,L);function xn(n){v(n.a),k(n.a,{onClick:Rn(n),content:Tn(n)}),R(n.b),B(n.b,X({content:En(n)})),q(n.b),z(n.b,{content:kn(n)}),tn(n.b,Dn(n)),O(n.b,In(n))}const On=e(3,n=>{I(n.b,n.d.class),H(n.b,n.d.onAnimationEnd),M(n.b,n.d.onCancel),S(n.b,(({class:t,confirm:a,content:o,header:W,onAnimationEnd:$,onCancel:U,open:Y,openChange:j,..._})=>_)(n.d)),wn(n,n.d.open),An(n,n.d.openChange)}),In=n=>t=>{m(n,t)},Rn=n=>function(){m(n,!0)},Sn=g("qDy_JOo",yn,Cn,xn,On),qn=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
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
`,Pn={title:"navigation & disclosure/evo-alert-dialog",component:vn,parameters:{docs:{description:{component:nn}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the alert dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},confirm:{description:"The confirm/acknowledge button (required). Render body is the button label text","@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},l=J(Sn,qn);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};const Vn=["Default"];export{l as Default,Vn as __namedExportsOrder,Pn as default};
