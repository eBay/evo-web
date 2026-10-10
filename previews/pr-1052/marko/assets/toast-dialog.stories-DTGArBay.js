import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,E as ee,F as te,Q as ne,R as i,T as re,a as ie,at as a,c as o,ct as s,et as ae,i as oe,it as c,j as l,n as u,nt as d,o as se,ot as f,s as ce,t as p,w as le,z as ue}from"./dom-BJr4MHiD.js";import{n as de,t as fe}from"./controllable.feat-Cluo05Rw.js";import{t as pe}from"./dynamic-tag-script.feat-HXJ_YFdo.js";import{i as me,n as he,o as ge,r as _e,t as ve}from"./evo-button-Dltge7Gv.js";import{i as ye,n as be,t as xe}from"./evo-icon-button-Cm1I-zho.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./evo-icon-close-16-CN5KMe9-.js";var m;function h(){return(h=e((()=>{m=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function g(){return(g=e((()=>{})))()}function _(){return(_=e((()=>{g()})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,De,P,Oe,ke,F,I,Ae,L,je,R,Me,Ne,Pe,Fe,z,Ie,Le,B,V,Re,H,ze,U,W,G,Be;function K(){return(K=e((()=>{ye(),oe(),de(),pe(),fe(),Se(),_(),v=(e=>`<dialog role=dialog aria-modal=false aria-live=polite closedby=closerequest><div class=toast-dialog__window><div class=toast-dialog__header><!>${e}</div><div class=toast-dialog__main><!></div><!></div></dialog>`)(be),y=(e=>` F%b/${e}&lD%l%m`)(`b%c`),b=ue(3),x=e=>{we(e.a),Ee(e.a,{})},S=l(`eb1`,Te,(e=>`/${e}&`)(Ce),x),C=s(`eb2`,e=>ee(e,`a`)),w=ae(4,0,e=>{re(e,`a`,e._.n,{class:1}),C(e)}),T=e=>{w._(e),E._(e)},E=ae(4,0,e=>o(e.a,[`toast-dialog__footer`,e._.o])),D=a(23,e=>o(e.a,[`toast-dialog`,!e.v&&`toast-dialog--close`,e.k])),O=s(`eb3`,e=>{if(e.v&&!e.a.open){let t=document.activeElement;e.a.show(),t?.focus()}e.v&&!(`closedBy`in HTMLDialogElement.prototype)&&document.addEventListener(`keydown`,({key:t,defaultPrevented:n})=>{t===`Escape`&&!n&&k(e,!1)},{signal:ie(e,0)})}),k=d(21,e=>{se(e,0),D(e),O(e)}),A=a(9,e=>k(e,e.h,e.i)),j=r(7,A),M=r(8,A),N=a(25,e=>ce(e.a,`aria-labelledby`,e.r?`${e.r} ${e.y}`:e.y)),De=i(1),P=a(30,e=>De(e,e.a3,()=>({...e.a1,id:e.y,class:[`toast-dialog__title`,e.a2]})),3),Oe=r(24,e=>{N(e),P(e)}),ke=(e,t)=>Oe(e,t||ne(e,`Jy`)),F=r(17,N),I=r(10,D),Ae=s(`eb4`,e=>{c(e.a,`cancel`,function(t,n){t.preventDefault(),k(e,!1),e.s&&e.s(t,n)}),c(e.a,`animationend`,function(t,n){t.target===n&&!e.v&&n.close(),e.t&&e.t(t,n)})}),L=Ae,je=s(`eb5`,e=>ee(e,`a`)),R=r(20,e=>{le(e,`a`,{...e.u,open:null},{role:1,"aria-modal":1,"aria-live":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},te),je(e)}),Me=r(29,P),Ne=(e,t)=>Me(e,t===void 0?`h2`:t),Pe=r(27,P),Fe=r(28,P),z=r(15,e=>xe(e.c,{...e.p,transparent:!0,class:[`toast-dialog__close`,e.p?.class],onClick:G(e),content:S(e)})),Ie=i(3),Le=Ie,B=n(4,`<div></div>`,` `,T),V=r(13,e=>{ze(e,e.n?.class),B(e,+!e.n),w(e)}),Re=(e,t)=>{(({"aria-labelledby":t,class:n,close:r,content:ee,footer:te,header:ne,onAnimationEnd:i,onCancel:re,open:ie,openChange:a,...o})=>R(e,o))(t),j(e,t.open),M(e,t.openChange),I(e,t.class),H(e,t.header),V(e,t.footer),z(e,t.close),Le(e,t.content),F(e,t[`aria-labelledby`]),U(e,t.onCancel),W(e,t.onAnimationEnd)},H=(e,t)=>{(({as:t,...n})=>Pe(e,n))(t),ke(e,t.id),Ne(e,t.as),Fe(e,t.class)},ze=r(14,E),U=r(18),W=r(19),G=e=>function(t,n){e.a.requestClose(),e.p?.onClick&&(e.p?.onClick)(t,n)},f.eb0=G,Be=p(`eb`,v,y,L,Re)})))()}function Ve(e){he(e.a),ve(e.a,{onClick:Z(e),content:qe(e)}),L(e.b),H(e.b,u({content:Ge(e)})),z(e.b,u({a11yText:`Close Toast`})),V(e.b,u({content:Ye(e)})),b(e.b,Ke(e)),M(e.b,X(e))}var He,Ue,We,Ge,Ke,qe,Je,Ye,q,J,Xe,Ze,Qe,Y,X,Z,$e;function et(){return(et=e((()=>{K(),ge(),oe(),He=((e,t)=>`<!>${e}${t}`)(_e,v),Ue=((e,t)=>`b/${e}&/${t}&`)(me,y),We=l(`iRdE4rF`,`Close`),Ge=l(`RxNCR$y`,`Heading`),Ke=l(`K02XIpB`,`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p><a href=http://www.ebay.com>www.ebay.com</a></p>`),qe=l(`SGN4mNe`,`Open Toast`),Je=e=>{he(e.a),ve(e.a,{onClick:Y(e),content:We(e)})},Ye=l(`iGSgvsm`,(e=>`<!>${e}<!>`)(_e),(e=>`b/${e}&b`)(me),Je),q=d(7,e=>j(e.b,e.h)),J=a(6,e=>q(e,e.e,e.f)),Xe=r(4,J),Ze=r(5,J),Qe=r(3,e=>{F(e.b,e.d[`aria-labelledby`]),I(e.b,e.d.class),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),R(e.b,(({"aria-labelledby":e,class:t,close:n,content:r,footer:ee,header:te,onAnimationEnd:ne,onCancel:i,open:re,openChange:ie,...a})=>a)(e.d)),Xe(e,e.d.open),Ze(e,e.d.openChange)}),Y=e=>function(){q(e._,!1)},X=e=>t=>{q(e,t)},Z=e=>function(){q(e,!0)},f.xhaUTUK=Y,f.HpqcC9V=X,f.btnvzdx=Z,$e=p(`KZof7nu`,He,Ue,Ve,Qe)})))()}var tt;function nt(){return(nt=e((()=>{tt=`import { type Input as ToastDialogInput } from "<evo-toast-dialog>";
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
  <p><a href="http://www.ebay.com">www.ebay.com</a></p>
</evo-toast-dialog>
`})))()}var rt,Q,it;function $(){return($=e((()=>{h(),K(),et(),nt(),rt={title:`navigation & disclosure/evo-toast-dialog`,component:Be,parameters:{docs:{description:{component:m}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the toast dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the toast dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},footer:{description:`Optional footer content rendered below the toast dialog main content area`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the toast dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the close button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},Q=t($e,tt),it=[`Default`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Default,it as __namedExportsOrder,rt as default};