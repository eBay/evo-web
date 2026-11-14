import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,E as i,L as ee,P as te,Q as ne,R as re,T as ie,Z as ae,a as oe,at as a,b as se,c as o,i as s,it as c,k as l,n as u,o as ce,rt as le,s as ue,st as d,t as f,tt as p,w as de}from"./dom-CUxLGBQ2.js";import{n as fe,r as pe,t as me}from"./controllable.feat-Buq1Z8-2.js";import{i as he,n as m,o as ge,r as _e,t as ve}from"./evo-button-JyGzuUeJ.js";import{t as ye}from"./dialog-BYWvBqS_.js";import{i as be,n as xe,t as Se}from"./evo-icon-button-Bn_DkC2Y.js";import{a as Ce,i as we,n as Te,r as Ee,t as De}from"./evo-icon-chevron-left-16-BVvLMPRV.js";import{a as Oe,i as ke,n as Ae,r as je,t as Me}from"./evo-icon-close-16-KniFaJPH.js";var Ne;function Pe(){return(Pe=e((()=>{Ne=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

A native HTML \`<dialog>\` component that opens as a modal with backdrop scrim, close animation, and cancel support.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-dialog/examples)
`})))()}function Fe(){return(Fe=e((()=>{ye()})))()}var h,g,Ie,_,Le,Re,ze,Be,v,Ve,He,y,Ue,b,x,S,We,C,w,T,Ge,Ke,qe,Je,Ye,E,D,Xe,O,k,A,j,M,Ze,N,Qe,P,F,I,$e,L,et,R,tt,z,nt,B,rt,it,at,V,ot,st,ct,H,lt,ut,dt,ft,pt,mt,U,ht,W,G,K,gt;function q(){return(q=e((()=>{be(),s(),pe(),Ce(),fe(),me(),Oe(),Fe(),h=(e=>`<dialog><!><div class=dialog__header><!><!>${e}</div><div class=dialog__main><!></div><!></dialog>`)(xe),g=(e=>` D%bD%b%b/${e}&lD%l%l`)(`b%c`),Ie=[`wide`,`narrow`,`large`],_=re(5),Le=e=>{Ae(e.a),Me(e.a,{})},Re=r(`u1`,je,(e=>`/${e}&`)(ke),Le),ze=e=>{Te(e.a),De(e.a,{})},Be=r(`u2`,Ee,(e=>`/${e}&`)(we),ze),v=n(2,0,e=>Se(e.a,{...e._.u,class:[`dialog__prev`,e._.u.class],content:Be(e)})),Ve=v,He=d(`u3`,e=>i(e,`a`)),y=n(6,0,e=>{ie(e,`a`,e._.r,{class:1}),He(e)}),Ue=e=>{y._(e),b._(e)},b=n(6,0,e=>o(e.a,[`dialog__footer`,e._.s])),x=c(1,e=>se(e.a,{...e._.ab,"background-image":e._.a8&&`url(${e._.a8})`,"background-position":e._.a9}),2),S=n(1,0,x),We=e=>{S._(e),C._(e),w._(e),T._(e),Ke._(e)},C=n(1,0,x),w=n(1,0,e=>o(e.a,[`dialog__image`,e._.aa])),T=n(1,0,x),Ge=d(`u4`,e=>i(e,`a`)),Ke=n(1,0,e=>{ie(e,`a`,e._.ac,{class:1,style:1}),Ge(e)}),qe=d(`u5`,e=>{e.a2&&!(`closedBy`in HTMLDialogElement.prototype)&&(e.a1===`any`?e.a.addEventListener(`click`,t=>{t.target===e.a&&O(e,!1)},{signal:oe(e,0)}):e.a1===`none`&&e.a.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()},{signal:oe(e,0)}))}),Je=c(30,e=>{ce(e,0),qe(e)}),Ye=l(27,e=>{ue(e.a,`closedby`,e.a1),Je(e)}),E=(e,t)=>Ye(e,t===void 0?`any`:t),D=c(31,e=>o(e.a,[`dialog`,!e.a2&&`dialog--close`,e.n&&Ie.includes(e.n)&&`dialog--${e.n}`,e.o&&`dialog--expressive`,e.m]),3),Xe=d(`u6`,e=>{e.a2&&!e.a.open&&e.a.showModal()}),O=p(28,e=>{Je(e),D(e),Xe(e)}),k=c(11,e=>O(e,e.j,e.k)),A=l(9,k),j=l(10,k),M=c(33,e=>ue(e.a,`aria-labelledby`,e.w?`${e.w} ${e.a6}`:e.a6)),Ze=ee(3),N=c(42,e=>Ze(e,e.ad||`h2`,t=>({...e.ae,id:e.a6,class:[`dialog__title`,e.af]})),3),Qe=l(32,e=>{M(e),N(e)}),P=l(22,M),F=l(12,D),I=l(13,D),$e=ne(1,`<div></div>`,` `,We),L=l(14,e=>{ut(e,(({class:e,position:t,src:n,style:r,...i})=>i)(e.o||{})),dt(e,e.o?.src),ft(e,e.o?.position),pt(e,e.o?.class),mt(e,e.o?.style),$e(e,+!e.o),D(e)}),et=d(`u7`,e=>{le(e.a,`cancel`,function(t,n){t.preventDefault(),O(e,!1),e.y&&e.y(t,n)}),le(e.a,`animationend`,function(t,n){t.target===n&&!e.a2&&n.close(),e.z&&e.z(t,n)})}),R=et,tt=d(`u8`,e=>i(e,`a`)),z=l(26,e=>{de(e,`a`,{...e.a0,open:null},{closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},te),tt(e)}),nt=ne(2,(e=>`<!>${e}<!>`)(xe),(e=>`b/${e}&b`)(`b%c`),Ve),B=l(20,e=>{nt(e,+!e.u),v(e)}),rt=l(39,N),it=l(40,N),at=l(41,N),V=l(19,e=>Se(e.e,{...e.t,class:[`dialog__close`,e.t.class],onClick:K(e),content:Re(e)})),ot=ee(5),st=ot,ct=ne(6,`<div></div>`,` `,Ue),H=l(17,e=>{ht(e,e.r?.class),ct(e,+!e.r),y(e)}),lt=(e,t)=>{z(e,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:i,content:ee,footer:te,header:ne,onAnimationEnd:re,onCancel:ie,open:ae,openChange:oe,previous:a,size:se,...o})=>o)(t)),A(e,t.open),j(e,t.openChange),F(e,t.class),I(e,t.size),L(e,t.banner),U(e,t.header),H(e,t.footer),V(e,t.close),B(e,t.previous),st(e,t.content),P(e,t[`aria-labelledby`]),E(e,t.closedby),W(e,t.onCancel),G(e,t.onAnimationEnd)},ut=l(38,Ke),dt=l(34,S),ft=l(35,C),pt=l(36,w),mt=l(37,T),U=(e,t)=>{it(e,(({as:e,...t})=>t)(t)),Qe(e,t.id||ae(e,`Ja6`)),rt(e,t.as),at(e,t.class)},ht=l(18,b),W=l(24),G=l(25),K=e=>function(t,n){e.a.requestClose(),e.t.onClick&&e.t.onClick(t,n)},a.u0=K,gt=f(`u`,h,g,R,lt)})))()}function _t(e){m(e.a),ve(e.a,{onClick:Ot(e),content:St(e)}),R(e.b),U(e.b,u({content:bt(e)})),V(e.b,u({a11yText:`Close Dialog`})),_(e.b,xt(e)),j(e.b,Dt(e))}var vt,yt,bt,xt,St,J,Ct,wt,Tt,Et,Dt,Ot,kt;function At(){return(At=e((()=>{q(),ge(),s(),vt=((e,t)=>`<!>${e}${t}`)(_e,h),yt=((e,t)=>`b/${e}&/${t}&`)(he,g),bt=r(`MNPzHoS`,`Dialog Title`),xt=r(`xcwmxct`,`<p>This is the default dialog content.</p>`),St=r(`paBJeFS`,`Open Dialog`),J=p(7,e=>A(e.b,e.h)),Ct=c(6,e=>J(e,e.e,e.f)),wt=l(4,Ct),Tt=l(5,Ct),Et=l(3,e=>{P(e.b,e.d[`aria-labelledby`]),L(e.b,e.d.banner),F(e.b,e.d.class),E(e.b,e.d.closedby),H(e.b,e.d.footer),G(e.b,e.d.onAnimationEnd),W(e.b,e.d.onCancel),B(e.b,e.d.previous),I(e.b,e.d.size),z(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:i,content:ee,footer:te,header:ne,onAnimationEnd:re,onCancel:ie,open:ae,openChange:oe,previous:a,size:se,...o})=>o)(e.d)),wt(e,e.d.open),Tt(e,e.d.openChange)}),Dt=e=>t=>J(e,t),Ot=e=>function(){J(e,!0)},a.pLUCYHQ=Dt,a.zJG02Nr=Ot,kt=f(`l2PEQiU`,vt,yt,_t,Et)})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`import { type Input as DialogInput } from "<evo-dialog>";
export interface Input extends DialogInput {}

<let/open:=input.open>

<evo-button onClick() {
  open = true;
}>
  Open Dialog
</evo-button>

<evo-dialog ...input open:=open>
  <@header>Dialog Title</@header>
  <@close a11yText="Close Dialog"/>
  <p>This is the default dialog content.</p>
</evo-dialog>
`})))()}function Nt(e){m(e.a),ve(e.a,{onClick:Wt(e),content:Rt(e)}),R(e.b),L(e.b,u({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,position:`top`})),U(e.b,u({content:It(e)})),V(e.b,u({a11yText:`Close Dialog`})),_(e.b,Lt(e)),j(e.b,Ut(e))}var Pt,Ft,It,Lt,Rt,Y,zt,Bt,Vt,Ht,Ut,Wt,Gt;function Kt(){return(Kt=e((()=>{q(),ge(),s(),Pt=((e,t)=>`<!>${e}${t}`)(_e,h),Ft=((e,t)=>`b/${e}&/${t}&`)(he,g),It=r(`Y5xtivr`,`Dialog Title`),Lt=r(`P5tjIs3`,`<p>This dialog uses a banner image via the src attribute.</p>`),Rt=r(`cGCvuCU`,`Open Dialog With Banner`),Y=p(7,e=>A(e.b,e.h)),zt=c(6,e=>Y(e,e.e,e.f)),Bt=l(4,zt),Vt=l(5,zt),Ht=l(3,e=>{P(e.b,e.d[`aria-labelledby`]),F(e.b,e.d.class),E(e.b,e.d.closedby),H(e.b,e.d.footer),G(e.b,e.d.onAnimationEnd),W(e.b,e.d.onCancel),B(e.b,e.d.previous),I(e.b,e.d.size),z(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:i,content:ee,footer:te,header:ne,onAnimationEnd:re,onCancel:ie,open:ae,openChange:oe,previous:a,size:se,...o})=>o)(e.d)),Bt(e,e.d.open),Vt(e,e.d.openChange)}),Ut=e=>t=>Y(e,t),Wt=e=>function(){Y(e,!0)},a.BK8o4oW=Ut,a.wbK1uER=Wt,Gt=f(`greWwxJ`,Pt,Ft,Nt,Ht)})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`import { type Input as DialogInput } from "<evo-dialog>";
export interface Input extends DialogInput {}

<let/open:=input.open>

<evo-button onClick() {
  open = true;
}>
  Open Dialog With Banner
</evo-button>

<evo-dialog ...input open:=open>
  <@banner
    src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg"
    position="top"
  />
  <@header>Dialog Title</@header>
  <@close a11yText="Close Dialog"/>
  <p>This dialog uses a banner image via the src attribute.</p>
</evo-dialog>
`})))()}function Yt(e){m(e.a),ve(e.a,{onClick:cn(e),content:tn(e)}),R(e.b),L(e.b,u({class:`banner-demo`,content:$t(e)})),U(e.b,u({content:Qt(e)})),V(e.b,u({a11yText:`Close Dialog`})),B(e.b,u({a11yText:`Back`})),_(e.b,en(e)),j(e.b,sn(e))}var Xt,Zt,Qt,$t,en,tn,X,nn,rn,an,on,sn,cn,ln;function un(){return(un=e((()=>{q(),ge(),s(),Xt=((e,t)=>`<!>${e}${t}`)(_e,h),Zt=((e,t)=>`b/${e}&/${t}&`)(he,g),Qt=r(`E$$Iz4h`,`Dialog Title`),$t=r(`y9QYH9y`,`Custom Banner`),en=r(`FxqpfrU`,`<p>This dialog uses a custom body inside the banner slot instead of a background image.</p>`),tn=r(`AYRDQw0`,`Open Dialog With Custom Banner`),X=p(7,e=>A(e.b,e.h)),nn=c(6,e=>X(e,e.e,e.f)),rn=l(4,nn),an=l(5,nn),on=l(3,e=>{P(e.b,e.d[`aria-labelledby`]),F(e.b,e.d.class),E(e.b,e.d.closedby),H(e.b,e.d.footer),G(e.b,e.d.onAnimationEnd),W(e.b,e.d.onCancel),I(e.b,e.d.size),z(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:i,content:ee,footer:te,header:ne,onAnimationEnd:re,onCancel:ie,open:ae,openChange:oe,previous:a,size:se,...o})=>o)(e.d)),rn(e,e.d.open),an(e,e.d.openChange)}),sn=e=>t=>X(e,t),cn=e=>function(){X(e,!0)},a.yddlo9O=sn,a.VjYrxD8=cn,ln=f(`iPGVKvZ`,Xt,Zt,Yt,on)})))()}var dn;function fn(){return(fn=e((()=>{dn=`import { type Input as DialogInput } from "<evo-dialog>";
export interface Input extends DialogInput {}

<style>
  .banner-demo {
    background: linear-gradient(90deg, #2f7ede, #17a7ce);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
</style>

<let/open:=input.open>

<evo-button onClick() {
  open = true;
}>
  Open Dialog With Custom Banner
</evo-button>

<evo-dialog ...input open:=open>
  <@banner class="banner-demo">Custom Banner</@banner>
  <@header>Dialog Title</@header>
  <@close a11yText="Close Dialog"/>
  <@previous a11yText="Back"/>
  <p>
    This dialog uses a custom body inside the banner slot instead of a
    background image.
  </p>
</evo-dialog>
`})))()}var pn,Z,Q,$,mn;function hn(){return(hn=e((()=>{Pe(),q(),At(),Mt(),Kt(),Jt(),un(),fn(),pn={title:`navigation & disclosure/evo-dialog`,component:gt,parameters:{docs:{description:{component:Ne}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the dialog is open`,table:{defaultValue:{summary:`false`}}},size:{type:`string`,options:[`regular (default)`,`wide`,`narrow`,`large`],control:`inline-radio`,description:`Size variant of the dialog`},closedby:{type:`string`,options:[`any`,`closerequest`,`none`],control:`inline-radio`,description:'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',table:{defaultValue:{summary:`any`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},footer:{description:`The footer content rendered below the dialog main content area`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the close button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},previous:{description:`Optional previous/back button rendered in the header`,"@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the previous button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},banner:{description:`Optional banner image displayed at the top of the dialog`,"@":{src:{type:`string`,description:`URL of the banner image`},position:{type:`string`,description:"Position of the image within the banner area using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},Z=t(kt,jt),Q=t(Gt,qt),$=t(ln,dn),mn=[`Default`,`Banner`,`CustomBanner`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BannerTemplate, BannerTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomBannerTemplate, CustomBannerTemplateCode)`,...$.parameters?.docs?.source}}}})))()}hn();export{Q as Banner,$ as CustomBanner,Z as Default,mn as __namedExportsOrder,pn as default};