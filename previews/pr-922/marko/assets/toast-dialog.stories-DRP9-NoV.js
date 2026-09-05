import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as ee,C as te,J as ne,L as r,M as i,P as re,R as ie,T as a,Y as o,Z as ae,a as oe,c as se,et as s,i as c,it as l,k as u,n as d,nt as ce,o as le,q as ue,s as de,t as f,tt as p,w as fe}from"./dom-CrmgVQ1h.js";import{t as pe}from"./controllable-open.feat-H_cIBEOf.js";import{t as me}from"./controllable.feat-Zzhbi3Cf.js";import{i as he,n as ge,o as _e,r as ve,t as ye}from"./evo-button-OmHu2dco.js";import{i as be,n as xe,t as Se}from"./evo-icon-button-CFYZQjNt.js";import{a as Ce,i as we,n as Te,r as Ee,t as De}from"./evo-icon-close-16-BYQaAXGG.js";var m;function h(){return(h=e((()=>{m=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function g(){return(g=e((()=>{})))()}function _(){return(_=e((()=>{g()})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,Oe,P,ke,Ae,F,I,L,R,je,z,Me,Ne,Pe,Fe,B,Ie,Le,Re,V,ze,H,Be,U,W,G,Ve;function K(){return(K=e((()=>{be(),c(),pe(),me(),Ce(),_(),v=(e=>`<dialog role=dialog aria-modal=false aria-live=polite closedby=closerequest><div class=toast-dialog__window><div class=toast-dialog__header><!>${e}</div><div class=toast-dialog__main><!></div><!></div></dialog>`)(xe),y=(e=>` F%b/${e}&lD%l%m`)(`b%c`),ce(),b=ie(3),x=e=>{Te(e.a),De(e.a,{})},S=i(`$1`,Ee,(e=>`/${e}&`)(we),x),C=l(`$2`,e=>a(e,`a`)),w=o(4,0,e=>{fe(e,`a`,e._.n,{class:1}),C(e)}),T=e=>{w._(e),E._(e)},E=o(4,0,e=>se(e.a,[`toast-dialog__footer`,e._.o])),D=s(23,e=>se(e.a,[`toast-dialog`,!e.v&&`toast-dialog--close`,e.k])),O=l(`$3`,e=>{if(e.v&&!e.a.open){let t=document.activeElement;e.a.show(),t?.focus()}e.v&&!(`closedBy`in HTMLDialogElement.prototype)&&document.addEventListener(`keydown`,({key:t,defaultPrevented:n})=>{t===`Escape`&&!n&&k(e,!1)},{signal:oe(e,0)})}),k=ae(21,e=>{le(e,0),D(e),O(e)}),A=s(9,e=>k(e,e.h,e.i)),j=u(7,A),M=u(8,A),N=s(25,e=>de(e.a,`aria-labelledby`,e.r?`${e.r} ${e.y}`:e.y)),Oe=r(1),P=s(30,e=>Oe(e,e.a3,()=>({...e.a1,id:e.y,class:[`toast-dialog__title`,e.a2]})),3),ke=u(24,e=>{N(e),P(e)}),Ae=(e,t)=>ke(e,t||ue(e,`Jy`)),F=u(17,N),I=u(10,D),L=l(`$4`,e=>{n(e.a,`cancel`,function(t,n){t.preventDefault(),k(e,!1),e.s&&e.s(t,n)}),n(e.a,`animationend`,function(t,n){t.target===n&&!e.v&&n.close(),e.t&&e.t(t,n)})}),R=L,je=l(`$5`,e=>a(e,`a`)),z=u(20,e=>{te(e,`a`,{...e.u,open:null},{role:1,"aria-modal":1,"aria-live":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},re),je(e)}),Me=u(29,P),Ne=(e,t)=>Me(e,t===void 0?`h2`:t),Pe=u(27,P),Fe=u(28,P),B=u(15,e=>Se(e.c,{...e.p,transparent:!0,class:[`toast-dialog__close`,e.p?.class],onClick:G(e),content:S(e)})),Ie=r(3),Le=Ie,Re=ne(4,`<div></div>`,` `,T),V=u(13,e=>{Be(e,e.n?.class),Re(e,+!e.n),w(e)}),ze=(e,t)=>{(({"aria-labelledby":t,class:n,close:ee,content:te,footer:ne,header:r,onAnimationEnd:i,onCancel:re,open:ie,openChange:a,...o})=>z(e,o))(t),j(e,t.open),M(e,t.openChange),I(e,t.class),H(e,t.header),V(e,t.footer),B(e,t.close),Le(e,t.content),F(e,t[`aria-labelledby`]),U(e,t.onCancel),W(e,t.onAnimationEnd)},H=(e,t)=>{(({as:t,...n})=>Pe(e,n))(t),Ae(e,t.id),Ne(e,t.as),Fe(e,t.class)},Be=u(14,E),U=u(18),W=u(19),G=e=>function(t,n){e.a.requestClose(),e.p?.onClick&&(e.p?.onClick)(t,n)},p(`$0`,G),Ve=f(`$`,v,y,R,ze)})))()}function He(e){ge(e.a),ye(e.a,{onClick:Z(e),content:Je(e)}),R(e.b),H(e.b,d({content:Ke(e)})),B(e.b,d({a11yText:`Close Toast`})),V(e.b,d({content:Xe(e)})),b(e.b,qe(e)),M(e.b,X(e))}var Ue,We,Ge,Ke,qe,Je,Ye,Xe,q,J,Ze,Qe,$e,Y,X,Z,et;function tt(){return(tt=e((()=>{K(),_e(),c(),Ue=((e,t)=>`<!>${e}${t}`)(ve,v),We=((e,t)=>`b/${e}&/${t}&`)(he,y),Ge=i(`iRdE4rF`,`Close`),Ke=ee(`RxNCR$y`,`Heading`),qe=ee(`K02XIpB`,`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p><a href=http://www.ebay.com>www.ebay.com</a></p>`),Je=i(`SGN4mNe`,`Open Toast`),Ye=e=>{ge(e.a),ye(e.a,{onClick:Y(e),content:Ge(e)})},Xe=i(`iGSgvsm`,(e=>`<!>${e}<!>`)(ve),(e=>`b/${e}&b`)(he),Ye),q=ae(7,e=>j(e.b,e.h)),J=s(6,e=>q(e,e.e,e.f)),Ze=u(4,J),Qe=u(5,J),$e=u(3,e=>{F(e.b,e.d[`aria-labelledby`]),I(e.b,e.d.class),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,(({"aria-labelledby":e,class:t,close:n,content:ee,footer:te,header:ne,onAnimationEnd:r,onCancel:i,open:re,openChange:ie,...a})=>a)(e.d)),Ze(e,e.d.open),Qe(e,e.d.openChange)}),Y=e=>function(){q(e._,!1)},X=e=>t=>{q(e,t)},Z=e=>function(){q(e,!0)},p(`xhaUTUK`,Y),p(`HpqcC9V`,X),p(`btnvzdx`,Z),et=f(`KZof7nu`,Ue,We,He,$e)})))()}var nt;function rt(){return(rt=e((()=>{nt=`import { type Input as ToastDialogInput } from "<evo-toast-dialog>";
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
`})))()}var it,Q,at;function $(){return($=e((()=>{h(),K(),tt(),rt(),it={title:`navigation & disclosure/evo-toast-dialog`,component:Ve,parameters:{docs:{description:{component:m}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the toast dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the toast dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},footer:{description:`Optional footer content rendered below the toast dialog main content area`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the toast dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the close button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},Q=t(et,nt),at=[`Default`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Default,at as __namedExportsOrder,it as default};