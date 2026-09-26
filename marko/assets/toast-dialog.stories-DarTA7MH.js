import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,C as ee,J as te,L as r,M as i,P as ne,Q as re,R as ie,T as a,X as o,Y as ae,a as oe,at as s,c,et as l,i as u,k as d,n as f,nt as p,o as se,rt as ce,s as le,t as ue,tt as m,w as de}from"./dom-CNWckxLY.js";import{n as fe,t as pe}from"./controllable.feat-BOmJcZCb.js";import{i as me,n as he,o as ge,r as _e,t as ve}from"./evo-button-DCHqE7Ja.js";import{i as ye,n as be,t as xe}from"./evo-icon-button-Cv3N38Ss.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./evo-icon-close-16-C7sMSyyo.js";var h;function g(){return(g=e((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function _(){return(_=e((()=>{})))()}function v(){return(v=e((()=>{_()})))()}var y,b,x,S,C,w,T,E,D,O,De,k,A,j,M,N,Oe,P,ke,Ae,F,I,L,R,je,z,Me,Ne,Pe,Fe,B,Ie,Le,Re,V,ze,H,Be,U,W,G,Ve;function K(){return(K=e((()=>{ye(),u(),fe(),pe(),Se(),v(),y=(e=>`<dialog role=dialog aria-modal=false aria-live=polite closedby=closerequest><div class=toast-dialog__window><div class=toast-dialog__header><!>${e}</div><div class=toast-dialog__main><!></div><!></div></dialog>`)(be),b=(e=>` F%b/${e}&lD%l%m`)(`b%c`),ce(),x=ie(3),S=e=>{we(e.a),Ee(e.a,{})},C=i(`ab1`,Te,(e=>`/${e}&`)(Ce),S),w=s(`ab2`,e=>a(e,`a`)),T=o(4,0,e=>{de(e,`a`,e._.n,{class:1}),w(e)}),E=e=>{T._(e),D._(e)},D=o(4,0,e=>c(e.a,[`toast-dialog__footer`,e._.o])),O=m(23,e=>c(e.a,[`toast-dialog`,!e.v&&`toast-dialog--close`,e.k])),De=s(`ab3`,e=>{if(e.v&&!e.a.open){let t=document.activeElement;e.a.show(),t?.focus()}e.v&&!(`closedBy`in HTMLDialogElement.prototype)&&document.addEventListener(`keydown`,({key:t,defaultPrevented:n})=>{t===`Escape`&&!n&&k(e,!1)},{signal:oe(e,0)})}),k=re(21,e=>{se(e,0),O(e),De(e)}),A=m(9,e=>k(e,e.h,e.i)),j=d(7,A),M=d(8,A),N=m(25,e=>le(e.a,`aria-labelledby`,e.r?`${e.r} ${e.y}`:e.y)),Oe=r(1),P=m(30,e=>Oe(e,e.a3,()=>({...e.a1,id:e.y,class:[`toast-dialog__title`,e.a2]})),3),ke=d(24,e=>{N(e),P(e)}),Ae=(e,t)=>ke(e,t||te(e,`Jy`)),F=d(17,N),I=d(10,O),L=s(`ab4`,e=>{l(e.a,`cancel`,function(t,n){t.preventDefault(),k(e,!1),e.s&&e.s(t,n)}),l(e.a,`animationend`,function(t,n){t.target===n&&!e.v&&n.close(),e.t&&e.t(t,n)})}),R=L,je=s(`ab5`,e=>a(e,`a`)),z=d(20,e=>{ee(e,`a`,{...e.u,open:null},{role:1,"aria-modal":1,"aria-live":1,closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},ne),je(e)}),Me=d(29,P),Ne=(e,t)=>Me(e,t===void 0?`h2`:t),Pe=d(27,P),Fe=d(28,P),B=d(15,e=>xe(e.c,{...e.p,transparent:!0,class:[`toast-dialog__close`,e.p?.class],onClick:G(e),content:C(e)})),Ie=r(3),Le=Ie,Re=ae(4,`<div></div>`,` `,E),V=d(13,e=>{Be(e,e.n?.class),Re(e,+!e.n),T(e)}),ze=(e,t)=>{(({"aria-labelledby":t,class:n,close:ee,content:te,footer:r,header:i,onAnimationEnd:ne,onCancel:re,open:ie,openChange:a,...o})=>z(e,o))(t),j(e,t.open),M(e,t.openChange),I(e,t.class),H(e,t.header),V(e,t.footer),B(e,t.close),Le(e,t.content),F(e,t[`aria-labelledby`]),U(e,t.onCancel),W(e,t.onAnimationEnd)},H=(e,t)=>{(({as:t,...n})=>Pe(e,n))(t),Ae(e,t.id),Ne(e,t.as),Fe(e,t.class)},Be=d(14,D),U=d(18),W=d(19),G=e=>function(t,n){e.a.requestClose(),e.p?.onClick&&(e.p?.onClick)(t,n)},p(`ab0`,G),Ve=ue(`ab`,y,b,R,ze)})))()}function He(e){he(e.a),ve(e.a,{onClick:Z(e),content:Je(e)}),R(e.b),H(e.b,f({content:Ke(e)})),B(e.b,f({a11yText:`Close Toast`})),V(e.b,f({content:Xe(e)})),x(e.b,qe(e)),M(e.b,X(e))}var Ue,We,Ge,Ke,qe,Je,Ye,Xe,q,J,Ze,Qe,$e,Y,X,Z,et;function tt(){return(tt=e((()=>{K(),ge(),u(),Ue=((e,t)=>`<!>${e}${t}`)(_e,y),We=((e,t)=>`b/${e}&/${t}&`)(me,b),Ge=i(`iRdE4rF`,`Close`),Ke=n(`RxNCR$y`,`Heading`),qe=n(`K02XIpB`,`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><p><a href=http://www.ebay.com>www.ebay.com</a></p>`),Je=i(`SGN4mNe`,`Open Toast`),Ye=e=>{he(e.a),ve(e.a,{onClick:Y(e),content:Ge(e)})},Xe=i(`iGSgvsm`,(e=>`<!>${e}<!>`)(_e),(e=>`b/${e}&b`)(me),Ye),q=re(7,e=>j(e.b,e.h)),J=m(6,e=>q(e,e.e,e.f)),Ze=d(4,J),Qe=d(5,J),$e=d(3,e=>{F(e.b,e.d[`aria-labelledby`]),I(e.b,e.d.class),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,(({"aria-labelledby":e,class:t,close:n,content:ee,footer:te,header:r,onAnimationEnd:i,onCancel:ne,open:re,openChange:ie,...a})=>a)(e.d)),Ze(e,e.d.open),Qe(e,e.d.openChange)}),Y=e=>function(){q(e._,!1)},X=e=>t=>{q(e,t)},Z=e=>function(){q(e,!0)},p(`xhaUTUK`,Y),p(`HpqcC9V`,X),p(`btnvzdx`,Z),et=ue(`KZof7nu`,Ue,We,He,$e)})))()}var nt;function rt(){return(rt=e((()=>{nt=`import { type Input as ToastDialogInput } from "<evo-toast-dialog>";
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
`})))()}var it,Q,at;function $(){return($=e((()=>{g(),K(),tt(),rt(),it={title:`navigation & disclosure/evo-toast-dialog`,component:Ve,parameters:{docs:{description:{component:h}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the toast dialog is open`,table:{defaultValue:{summary:`false`}}},header:{description:`The header content rendered inside the toast dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},footer:{description:`Optional footer content rendered below the toast dialog main content area`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the toast dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the close button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},Q=t(et,nt),at=[`Default`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Default,at as __namedExportsOrder,it as default};