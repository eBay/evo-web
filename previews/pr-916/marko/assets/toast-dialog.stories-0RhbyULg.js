import{b as Q}from"./utils-DyU2_5R1.js";import{_ as p,a as Z,b as o,f as e,g as tt,i as l,j as b,l as h,m as i,h as g,K as nt,k as et,v as f,q as at,p as v,w as ot,o as y,$ as it,J as st,Y as lt,B as rt,S as _,Q as dt}from"./dom-5LJ4Il7H.js";import{c as ct,b as _t,a as ut,$ as mt}from"./index-QTMu8ADb.js";import"./controllable-open.feat-BAHTyOoC.js";import"./controllable.feat-CkjI4KTw.js";import{$ as bt,a as pt,b as ht,c as gt}from"./evo-icon-close-16-BymrpT2d.js";import{a as C,$ as w,c as T,b as k}from"./index-8HcnXc30.js";import"./iframe-DKc3M6i3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPWgBQnt.js";/* empty css                    */import"./controllable-input.feat-CAOcI0Or.js";import"./controllable-select.feat-D5wUvc2a.js";import"./index-CotKNGF1.js";import"./index-CKdOinKT.js";import"./evo-icon-chevron-down-16-CY1kV1hN.js";const ft=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-toast-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

A non-modal toast dialog that slides up from the bottom of the page. Used for non-blocking notifications that the user needs to see.

Uses a native \`<dialog>\` element opened non-modally via \`.show()\`, with \`aria-live="polite"\` for screen reader announcements.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/navigation-disclosure-evo-toast-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/navigation-disclosure-evo-toast-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-toast-dialog/examples)
`,$=(t=>`<dialog role=dialog aria-modal=false aria-live=polite closedby=closerequest><div class=toast-dialog__window><div class=toast-dialog__header><!>${t}</div><div class=toast-dialog__main><!></div><!></div></dialog>`)(ut),E=(t=>` F%b/${t}&lD%l%m`)(_t);Z();const vt=lt(3),yt=t=>{ht(t.a),gt(t.a,{})},Ct=o("YtyPdSy",pt,(t=>`/${t}&`)(bt),yt),wt=l("Ox1XM5H",t=>h(t,"a")),x=f(4,0,t=>{at(t,"a",t._.n,{class:1}),wt(t)}),Tt=t=>{x._(t),D._(t)},D=f(4,0,t=>g(t.a,["toast-dialog__footer",t._.o])),R=i(23,t=>g(t.a,["toast-dialog",!t.v&&"toast-dialog--close",t.k])),kt=l("Gu3tJTk",t=>{if(t.v&&!t.a.open){const n=document.activeElement;t.a.show(),n?.focus()}t.v&&!("closedBy"in HTMLDialogElement.prototype)&&document.addEventListener("keydown",({key:n,defaultPrevented:a})=>{n==="Escape"&&!a&&u(t,!1)},{signal:st(t,0)})}),u=y(21,t=>{it(t,0),R(t),kt(t)}),O=i(9,t=>u(t,t.h,t.i)),A=e(7,O),I=e(8,O),H=i(25,t=>ot(t.a,"aria-labelledby",t.r?`${t.r} ${t.y}`:t.y)),$t=v(1),r=i(30,t=>$t(t,t.a3,()=>({...t.a1,id:t.y,class:["toast-dialog__title",t.a2]})),3),Et=e(24,t=>{H(t),r(t)}),xt=(t,n)=>Et(t,n||nt(t,"Jy")),L=e(17,H),S=e(10,R),Dt=l("qNfJHit",t=>{b(t.a,"cancel",function(n,a){n.preventDefault(),u(t,!1),t.s&&t.s(n,a)}),b(t.a,"animationend",function(n,a){n.target===a&&!t.v&&a.close(),t.t&&t.t(n,a)})});function q(t){ct(t.c),Dt(t)}const Rt=l("O7tjYmY",t=>h(t,"a")),M=e(20,t=>{tt(t,"a",{...t.u,open:null},{role:1,"aria-modal":1,"aria-live":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},rt),Rt(t)}),Ot=e(29,r),At=(t,n)=>Ot(t,n!==void 0?n:"h2"),It=e(27,r),Ht=e(28,r),B=e(15,t=>mt(t.c,{...t.p,transparent:!0,class:["toast-dialog__close",t.p?.class],onClick:Jt(t),content:Ct(t)})),Lt=v(3),St=Lt,qt=et(4,"<div></div>"," ",Tt),J=e(13,t=>{Bt(t,t.n?.class),qt(t,t.n?0:1),x(t)}),Mt=(t,n)=>{(({"aria-labelledby":a,class:c,close:W,content:Y,footer:j,header:K,onAnimationEnd:F,onCancel:P,open:V,openChange:m,...X})=>M(t,X))(n),A(t,n.open),I(t,n.openChange),S(t,n.class),U(t,n.header),J(t,n.footer),B(t,n.close),St(t,n.content),L(t,n["aria-labelledby"]),z(t,n.onCancel),G(t,n.onAnimationEnd)},U=(t,n)=>{(({as:a,...c})=>It(t,c))(n),xt(t,n.id),At(t,n.as),Ht(t,n.class)},Bt=e(14,D),z=e(18),G=e(19),Jt=t=>function(n,a){t.a.requestClose(),t.p?.onClick&&(t.p?.onClick)(n,a)},Ut=p("J9vqGwV",$,E,q,Mt),zt=((t,n)=>`<!>${t}${n}`)(w,$),Gt=((t,n)=>`b/${t}&/${n}&`)(C,E),Nt=o("iRdE4rF","Close"),Wt=o("RxNCR$y","Heading"),Yt=dt("K02XIpB","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p><a href=http://www.ebay.com>www.ebay.com</a></p>"),jt=o("SGN4mNe","Open Toast"),Kt=t=>{T(t.a),k(t.a,{onClick:Zt(t),content:Nt(t)})},Ft=o("iGSgvsm",(t=>`<!>${t}<!>`)(w),(t=>`b/${t}&b`)(C),Kt),d=y(7,t=>A(t.b,t.h)),N=i(6,t=>d(t,t.e,t.f)),Pt=e(4,N),Vt=e(5,N);function Xt(t){T(t.a),k(t.a,{onClick:nn(t),content:jt(t)}),q(t.b),U(t.b,_({content:Wt(t)})),B(t.b,_({a11yText:"Close Toast"})),J(t.b,_({content:Ft(t)})),vt(t.b,Yt(t)),I(t.b,tn(t))}const Qt=e(3,t=>{L(t.b,t.d["aria-labelledby"]),S(t.b,t.d.class),G(t.b,t.d.onAnimationEnd),z(t.b,t.d.onCancel),M(t.b,(({"aria-labelledby":n,class:a,close:c,content:W,footer:Y,header:j,onAnimationEnd:K,onCancel:F,open:P,openChange:V,...m})=>m)(t.d)),Pt(t,t.d.open),Vt(t,t.d.openChange)}),Zt=t=>function(){d(t._,!1)},tn=t=>n=>{d(t,n)},nn=t=>function(){d(t,!0)},en=p("KZof7nu",zt,Gt,Xt,Qt),an=`import { type Input as ToastDialogInput } from "<evo-toast-dialog>";
export interface Input extends ToastDialogInput {}

<let/open:=input.open>

<evo-button onClick() {
  open = true;
}>
  Open Toast
</evo-button>

<evo-toast-dialog ...input open:=open>
  <@header>Heading</@header>
  <@close a11yText="Close Toast"/>
  <@footer>
    <evo-button onClick() {
      open = false;
    }>
      Close
    </evo-button>
  </@footer>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  <p>
    <a href="http://www.ebay.com">
      www.ebay.com
    </a>
  </p>
</evo-toast-dialog>
`,Cn={title:"navigation & disclosure/evo-toast-dialog",component:Ut,parameters:{docs:{description:{component:ft}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the toast dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the toast dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},footer:{description:"Optional footer content rendered below the toast dialog main content area","@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the toast dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:"string",required:!0},description:"Accessible label for the close button"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},s=Q(en,an);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};const wn=["Default"];export{s as Default,wn as __namedExportsOrder,Cn as default};
