import{b as N}from"./utils-DyU2_5R1.js";import{a as v,m as P,p as C,b as e,c as X,r as y,d as u,t as p,i as $,e as i,f as F,g as k,u as T,h as nn,a1 as tn,_ as l,l as en,j as an}from"./dom-B_aQtK5Z.js";import{a as d,b as c,c as m,$ as _}from"./index-CbvBTQbH.js";import"./controllable-open.feat-Co2vF3JB.js";import"./controllable.feat-CmDpOgp5.js";/* empty css               */import"./iframe-DMl2D3CN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-v-vPhLax.js";import"./evo-icon-spinner-24-CYQqzRmH.js";import"./index-fw6h05cN.js";import"./evo-icon-chevron-down-16-CNjCMSU5.js";import"./controllable-input.feat-BWTl2t6G.js";import"./controllable-select.feat-BWENUZLB.js";const on=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,D=((n,t)=>`<dialog role=alertdialog aria-modal=true closedby=closerequest><div class=dialog__header><!></div><div class=dialog__main><!></div><div class=dialog__footer>${n}${t}</div></dialog>`)(m,m),w=((n,t)=>` E%l D%lD/${n}&/${t}&m`)(c,c);P();const rn=nn(3),E=i(22,n=>F(n.a,["dialog","dialog--narrow",!n.u&&"dialog--close",n.l])),ln=u("kwZ_Q5Q",n=>{n.u&&!n.a.open&&n.a.showModal()}),h=T(20,n=>{E(n),ln(n)}),I=i(10,n=>h(n,n.i,n.j)),j=e(8,I),x=e(9,I),sn=k(1),s=i(28,n=>sn(n,n.a1,()=>({...n.z,id:n.x,class:["dialog__title",n.a0]})),3),dn=e(23,n=>{y(n.a,"aria-labelledby",n.x),s(n)}),cn=(n,t)=>dn(n,t||C(n,"Jx")),A=e(11,E),g=i(35,n=>_(n.f,{...n.a8,priority:"primary",autofocus:!0,"aria-describedby":n.a3,onClick:Tn(n)}),2),mn=e(29,n=>{y(n.c,"id",n.a3),g(n)}),un=u("Ej3OMEr",n=>{p(n.a,"cancel",function(t,a){t.preventDefault(),h(n,!1),n.r&&n.r(t,a)}),p(n.a,"animationend",function(t,a){t.target===a&&!n.u&&a.close(),n.s&&n.s(t,a)})});function O(n){d(n.e),d(n.f),mn(n,C(n)),un(n)}const _n=u("dMd4rSP",n=>$(n,"a")),R=e(19,n=>{X(n,"a",{...n.t,open:null},{role:1,"aria-modal":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},tn),_n(n)}),hn=e(27,s),gn=(n,t)=>hn(n,t!==void 0?t:"h2"),bn=e(25,s),fn=e(26,s),pn=k(3),vn=pn,M=i(32,n=>_(n.e,{...n.a5,onClick:Dn(n)})),S=e(30,M),L=e(31,M),q=e(33,g),H=e(34,g),Cn=(n,t)=>{(({class:a,confirm:o,content:Q,header:V,onAnimationEnd:J,onCancel:Y,open:Z,openChange:G,reject:f,...K})=>R(n,K))(t),j(n,t.open),x(n,t.openChange),A(n,t.class),z(n,t.header),yn(n,t.confirm),kn(n,t.reject),vn(n,t.content),U(n,t.onCancel),W(n,t.onAnimationEnd)},z=(n,t)=>{(({as:a,...o})=>bn(n,o))(t),cn(n,t.id),gn(n,t.as),fn(n,t.class)},yn=(n,t)=>{(({onClick:a,...o})=>H(n,o))(t),q(n,t.onClick)},kn=(n,t)=>{(({onClick:a,...o})=>L(n,o))(t),S(n,t.onClick)},U=e(17),W=e(18),Tn=n=>function(t,a){h(n,!1),n.a7&&n.a7(t,a)},Dn=n=>function(t,a){n.a.requestClose(),n.a4&&n.a4(t,a)},wn=v("THr5ILM",D,w,O,Cn),En=((n,t)=>`<!>${n}${t}`)(m,D),In=((n,t)=>`b/${n}&/${t}&`)(c,w),jn=l("VGNpIQI","Delete"),xn=l("dVXnZdA","Cancel"),An=l("zJK7$B0","Delete Address?"),On=an("k6blhrp","<p>You will permanently lose this address.</p>"),Rn=l("qofUSC$","Open Confirm Dialog"),b=T(7,n=>j(n.b,n.h)),B=i(6,n=>b(n,n.e,n.f)),Mn=e(4,B),Sn=e(5,B);function Ln(n){d(n.a),_(n.a,{onClick:zn(n),content:Rn(n)}),O(n.b),z(n.b,en({content:An(n)})),S(n.b),L(n.b,{content:xn(n)}),q(n.b),H(n.b,{content:jn(n)}),rn(n.b,On(n)),x(n.b,Hn(n))}const qn=e(3,n=>{A(n.b,n.d.class),W(n.b,n.d.onAnimationEnd),U(n.b,n.d.onCancel),R(n.b,(({class:t,confirm:a,content:o,header:Q,onAnimationEnd:V,onCancel:J,open:Y,openChange:Z,reject:G,...f})=>f)(n.d)),Mn(n,n.d.open),Sn(n,n.d.openChange)}),Hn=n=>t=>{b(n,t)},zn=n=>function(){b(n,!0)},Un=v("gTsmaUL",En,In,Ln,qn),Wn=`import { type Input as ConfirmDialogInput } from "<evo-confirm-dialog>";
export interface Input extends ConfirmDialogInput {}

<let/open:=input.open>

<evo-button onClick() { open = true; }>
    Open Confirm Dialog
</evo-button>

<evo-confirm-dialog ...input open:=open>
    <@header>Delete Address?</@header>
    <@reject>Cancel</@reject>
    <@confirm>Delete</@confirm>
    <p>You will permanently lose this address.</p>
</evo-confirm-dialog>
`,tt={title:"navigation & disclosure/evo-confirm-dialog",component:wn,parameters:{docs:{description:{component:on}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the confirm dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},confirm:{description:"The confirm button (required). Render body is the button label text","@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},reject:{description:"The reject/cancel button (required). Render body is the button label text. Also triggered by Escape key","@":{"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"},onCancel:{action:"onCancel",description:"Triggered when the dialog's cancel event fires, via `esc` or the cancel button",table:{category:"Events"}}}},r=N(Un,Wn);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...r.parameters?.docs?.source}}};const et=["Default"];export{r as Default,et as __namedExportsOrder,tt as default};
