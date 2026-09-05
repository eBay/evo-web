import{b as Z}from"./utils-DyU2_5R1.js";import{a as p,m as Q,_ as o,b as e,c as tt,d as l,t as b,i as h,e as i,f as g,p as nt,w as et,y as f,z as at,g as v,r as ot,u as y,$ as it,L as st,h as lt,a1 as rt,l as _,j as dt}from"./dom-C92X7IE7.js";import{a as ct,b as _t,c as ut,$ as mt}from"./index-CzpPmtyw.js";import"./controllable-open.feat-CKAPhp9i.js";import"./controllable.feat-BMmHeBlQ.js";import{$ as bt,a as pt,b as ht,c as gt}from"./evo-icon-close-16-6f159zE2.js";import{b as C,c as w,a as T,$ as k}from"./index-BvCzKE75.js";import"./iframe-CVMY3Erk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8xL3Mxr.js";/* empty css                    */import"./controllable-input.feat-Che4uygx.js";import"./controllable-select.feat-D56CVTS_.js";import"./index-B5-1XC0l.js";import"./index-DqUdVZBS.js";import"./evo-icon-chevron-down-16-vRpDIFRr.js";const ft=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,$=(t=>`<dialog role=dialog aria-modal=false aria-live=polite closedby=closerequest><div class=toast-dialog__window><div class=toast-dialog__header><!>${t}</div><div class=toast-dialog__main><!></div><!></div></dialog>`)(ut),E=(t=>` F%b/${t}&lD%l%m`)(_t);Q();const vt=lt(3),yt=t=>{ht(t.a),gt(t.a,{})},Ct=o("YtyPdSy",pt,(t=>`/${t}&`)(bt),yt),wt=l("Ox1XM5H",t=>h(t,"a")),x=f(4,0,t=>{at(t,"a",t._.n,{class:1}),wt(t)}),Tt=t=>{x._(t),D._(t)},D=f(4,0,t=>g(t.a,["toast-dialog__footer",t._.o])),R=i(23,t=>g(t.a,["toast-dialog",!t.v&&"toast-dialog--close",t.k])),kt=l("Gu3tJTk",t=>{if(t.v&&!t.a.open){const n=document.activeElement;t.a.show(),n?.focus()}t.v&&!("closedBy"in HTMLDialogElement.prototype)&&document.addEventListener("keydown",({key:n,defaultPrevented:a})=>{n==="Escape"&&!a&&u(t,!1)},{signal:st(t,0)})}),u=y(21,t=>{it(t,0),R(t),kt(t)}),O=i(9,t=>u(t,t.h,t.i)),A=e(7,O),I=e(8,O),L=i(25,t=>ot(t.a,"aria-labelledby",t.r?`${t.r} ${t.y}`:t.y)),$t=v(1),r=i(30,t=>$t(t,t.a3,()=>({...t.a1,id:t.y,class:["toast-dialog__title",t.a2]})),3),Et=e(24,t=>{L(t),r(t)}),xt=(t,n)=>Et(t,n||nt(t,"Jy")),H=e(17,L),S=e(10,R),Dt=l("qNfJHit",t=>{b(t.a,"cancel",function(n,a){n.preventDefault(),u(t,!1),t.s&&t.s(n,a)}),b(t.a,"animationend",function(n,a){n.target===a&&!t.v&&a.close(),t.t&&t.t(n,a)})});function M(t){ct(t.c),Dt(t)}const Rt=l("O7tjYmY",t=>h(t,"a")),q=e(20,t=>{tt(t,"a",{...t.u,open:null},{role:1,"aria-modal":1,"aria-live":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},rt),Rt(t)}),Ot=e(29,r),At=(t,n)=>Ot(t,n!==void 0?n:"h2"),It=e(27,r),Lt=e(28,r),z=e(15,t=>mt(t.c,{...t.p,transparent:!0,class:["toast-dialog__close",t.p?.class],onClick:Ut(t),content:Ct(t)})),Ht=v(3),St=Ht,Mt=et(4,"<div></div>"," ",Tt),U=e(13,t=>{zt(t,t.n?.class),Mt(t,t.n?0:1),x(t)}),qt=(t,n)=>{(({"aria-labelledby":a,class:c,close:W,content:j,footer:Y,header:F,onAnimationEnd:K,onCancel:P,open:V,openChange:m,...X})=>q(t,X))(n),A(t,n.open),I(t,n.openChange),S(t,n.class),B(t,n.header),U(t,n.footer),z(t,n.close),St(t,n.content),H(t,n["aria-labelledby"]),G(t,n.onCancel),J(t,n.onAnimationEnd)},B=(t,n)=>{(({as:a,...c})=>It(t,c))(n),xt(t,n.id),At(t,n.as),Lt(t,n.class)},zt=e(14,D),G=e(18),J=e(19),Ut=t=>function(n,a){t.a.requestClose(),t.p?.onClick&&(t.p?.onClick)(n,a)},Bt=p("J9vqGwV",$,E,M,qt),Gt=((t,n)=>`<!>${t}${n}`)(w,$),Jt=((t,n)=>`b/${t}&/${n}&`)(C,E),Nt=o("iRdE4rF","Close"),Wt=o("RxNCR$y","Heading"),jt=dt("K02XIpB","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p><a href=http://www.ebay.com>www.ebay.com</a></p>"),Yt=o("SGN4mNe","Open Toast"),Ft=t=>{T(t.a),k(t.a,{onClick:Qt(t),content:Nt(t)})},Kt=o("iGSgvsm",(t=>`<!>${t}<!>`)(w),(t=>`b/${t}&b`)(C),Ft),d=y(7,t=>A(t.b,t.h)),N=i(6,t=>d(t,t.e,t.f)),Pt=e(4,N),Vt=e(5,N);function Xt(t){T(t.a),k(t.a,{onClick:nn(t),content:Yt(t)}),M(t.b),B(t.b,_({content:Wt(t)})),z(t.b,_({a11yText:"Close Toast"})),U(t.b,_({content:Kt(t)})),vt(t.b,jt(t)),I(t.b,tn(t))}const Zt=e(3,t=>{H(t.b,t.d["aria-labelledby"]),S(t.b,t.d.class),J(t.b,t.d.onAnimationEnd),G(t.b,t.d.onCancel),q(t.b,(({"aria-labelledby":n,class:a,close:c,content:W,footer:j,header:Y,onAnimationEnd:F,onCancel:K,open:P,openChange:V,...m})=>m)(t.d)),Pt(t,t.d.open),Vt(t,t.d.openChange)}),Qt=t=>function(){d(t._,!1)},tn=t=>n=>{d(t,n)},nn=t=>function(){d(t,!0)},en=p("KZof7nu",Gt,Jt,Xt,Zt),an=`import { type Input as ToastDialogInput } from "<evo-toast-dialog>";
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
`,Cn={title:"navigation & disclosure/evo-toast-dialog",component:Bt,parameters:{docs:{description:{component:ft}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the toast dialog is open",table:{defaultValue:{summary:"false"}}},header:{description:"The header content rendered inside the toast dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},footer:{description:"Optional footer content rendered below the toast dialog main content area","@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the toast dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:"string",required:!0},description:"Accessible label for the close button"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},s=Z(en,an);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};const wn=["Default"];export{s as Default,wn as __namedExportsOrder,Cn as default};
