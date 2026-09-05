import{b as F}from"./utils-DyU2_5R1.js";import{_ as g,a as J,K as h,f as e,g as P,w as p,i as s,j as u,l as Q,m as i,h as V,p as b,o as f,Y as G,B as N,b as d,S as X,Q as Z}from"./dom-CK48op32.js";import{c as v,a as y,$ as C,b as k}from"./index-4Zpi8n-y.js";import"./controllable-open.feat-DWinryiA.js";import"./controllable.feat-BJgVrh9O.js";/* empty css               */import"./iframe-BNpSE5cT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQcT7S2z.js";import"./index-IFKzbDrV.js";import"./evo-icon-chevron-down-16-1tcFEK-f.js";import"./controllable-input.feat-BVHUjJDH.js";import"./controllable-select.feat-B_1KoW2_.js";const nn=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,E=(n=>`<dialog role=alertdialog aria-modal=true closedby=none><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${n}</div></dialog>`)(C),w=(n=>` E%l D%lD/${n}&m`)(y);J();const tn=G(3),D=i(20,n=>V(n.a,["dialog","dialog--narrow",!n.s&&"dialog--close",n.k])),en=s("FTg8ECV",n=>{n.s&&!n.a.open&&n.a.showModal()}),T=f(18,n=>{D(n),en(n)}),A=i(9,n=>T(n,n.h,n.i)),x=e(7,A),O=e(8,A),an=b(1),r=i(26,n=>an(n,n.z,()=>({...n.x,id:n.v,class:["dialog__title",n.y]})),3),on=e(21,n=>{p(n.a,"aria-labelledby",n.v),r(n)}),ln=(n,t)=>on(n,t||h(n,"Jv")),I=e(10,D),c=i(30,n=>k(n.e,{...n.a3,priority:"primary",autofocus:!0,"aria-describedby":n.a1,onClick:fn(n)}),2),rn=e(27,n=>{p(n.c,"id",n.a1),c(n)}),sn=s("PgeWQux",n=>{u(n.a,"cancel",function(t,a){t.preventDefault(),n.q&&n.q(t,a)}),u(n.a,"animationend",function(t,a){t.target===a&&!n.s&&a.close(),n.p&&n.p(t,a)})});function R(n){v(n.e),rn(n,h(n)),sn(n)}const dn=s("zEBsPo0",n=>Q(n,"a")),S=e(17,n=>{P(n,"a",{...n.r,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},N),dn(n)}),cn=e(25,r),mn=(n,t)=>cn(n,t!==void 0?t:"h2"),_n=e(23,r),un=e(24,r),gn=b(3),hn=gn,B=e(28,c),q=e(29,c),pn=(n,t)=>{(({class:a,confirm:o,content:W,header:Y,onAnimationEnd:$,onCancel:K,open:U,openChange:_,...j})=>S(n,j))(t),x(n,t.open),O(n,t.openChange),I(n,t.class),z(n,t.header),bn(n,t.confirm),hn(n,t.content),H(n,t.onAnimationEnd),M(n,t.onCancel)},z=(n,t)=>{(({as:a,...o})=>_n(n,o))(t),ln(n,t.id),mn(n,t.as),un(n,t.class)},bn=(n,t)=>{(({onClick:a,...o})=>q(n,o))(t),B(n,t.onClick)},H=e(15),M=e(16),fn=n=>function(t,a){T(n,!1),n.a2&&n.a2(t,a)},vn=g("$xH4nEu",E,w,R,pn),yn=((n,t)=>`<!>${n}${t}`)(C,E),Cn=((n,t)=>`b/${n}&/${t}&`)(y,w),kn=d("n24u$Yd","OK"),En=d("FmEp4BE","Alert!"),wn=Z("B2Gcg9l","<p>You must acknowledge this alert to continue.</p>"),Dn=d("rCTmabS","Open Alert Dialog"),m=f(7,n=>x(n.b,n.h)),L=i(6,n=>m(n,n.e,n.f)),Tn=e(4,L),An=e(5,L);function xn(n){v(n.a),k(n.a,{onClick:Rn(n),content:Dn(n)}),R(n.b),z(n.b,X({content:En(n)})),B(n.b),q(n.b,{content:kn(n)}),tn(n.b,wn(n)),O(n.b,In(n))}const On=e(3,n=>{I(n.b,n.d.class),H(n.b,n.d.onAnimationEnd),M(n.b,n.d.onCancel),S(n.b,(({class:t,confirm:a,content:o,header:W,onAnimationEnd:Y,onCancel:$,open:K,openChange:U,..._})=>_)(n.d)),Tn(n,n.d.open),An(n,n.d.openChange)}),In=n=>t=>{m(n,t)},Rn=n=>function(){m(n,!0)},Sn=g("qDy_JOo",yn,Cn,xn,On),Bn=`import { type Input as AlertDialogInput } from "<evo-alert-dialog>";
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
`,Pn={title:"navigation & disclosure/evo-alert-dialog",component:vn,parameters:{docs:{description:{component:nn}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the alert dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},confirm:{description:"The confirm/acknowledge button (required). Render body is the button label text","@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},l=F(Sn,Bn);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...l.parameters?.docs?.source}}};const Qn=["Default"];export{l as Default,Qn as __namedExportsOrder,Pn as default};
