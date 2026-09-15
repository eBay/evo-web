import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,E as i,F as ee,N as a,R as te,T as ne,X as re,Y as ie,Z as o,a as ae,b as oe,c as s,i as c,it as se,j as l,n as u,nt as d,o as ce,ot as f,rt as p,s as le,t as m,tt as ue,w as de,z as fe}from"./dom-DAi6NM7T.js";import{t as pe}from"./controllable-open.feat-CJ2gPFEp.js";import{t as me}from"./controllable.feat--isLa5cW.js";import{i as he,n as ge,o as _e,r as ve,t as ye}from"./evo-button-BmAqMdj-.js";import{t as be}from"./dialog-Dd2_jjCz.js";import{i as xe,n as Se,t as Ce}from"./evo-icon-button-PqXv2_d4.js";import{a as we,i as Te,n as Ee,r as De,t as Oe}from"./evo-icon-chevron-left-16-Dph_QdA6.js";import{a as ke,i as Ae,n as je,r as Me,t as Ne}from"./evo-icon-close-16-BhqyOq0V.js";var Pe;function Fe(){return(Fe=e((()=>{Pe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function Ie(){return(Ie=e((()=>{be()})))()}var h,g,Le,_,Re,ze,Be,Ve,v,He,Ue,y,We,b,x,S,Ge,C,w,T,Ke,E,qe,Je,Ye,D,O,Xe,k,Ze,A,j,Qe,$e,M,et,tt,N,P,F,nt,I,rt,L,it,R,at,z,ot,st,ct,B,lt,ut,dt,V,ft,pt,mt,ht,gt,_t,H,vt,U,W,yt,bt;function G(){return(G=e((()=>{xe(),c(),pe(),we(),me(),ke(),Ie(),h=(e=>`<dialog><!><div class=dialog__header><!><!>${e}</div><div class=dialog__main><!></div><!></dialog>`)(Se),g=(e=>` D%bD%b%b/${e}&lD%l%l`)(`b%c`),Le=[`wide`,`narrow`,`large`],se(),_=fe(5),Re=e=>{je(e.a),Ne(e.a,{})},ze=a(`r1`,Me,(e=>`/${e}&`)(Ae),Re),Be=e=>{Ee(e.a),Oe(e.a,{})},Ve=a(`r2`,De,(e=>`/${e}&`)(Te),Be),v=o(2,0,e=>Ce(e.a,{...e._.u,class:[`dialog__prev`,e._.u?.class],content:Ve(e)})),He=v,Ue=f(`r3`,e=>i(e,`a`)),y=o(6,0,e=>{ne(e,`a`,e._.r,{class:1}),Ue(e)}),We=e=>{y._(e),b._(e)},b=o(6,0,e=>s(e.a,[`dialog__footer`,e._.s])),x=d(1,e=>oe(e.a,{...e._.ab,"background-image":e._.a8&&`url(${e._.a8})`,"background-position":e._.a9}),2),S=o(1,0,x),Ge=e=>{S._(e),C._(e),w._(e),T._(e),E._(e)},C=o(1,0,x),w=o(1,0,e=>s(e.a,[`dialog__image`,e._.aa])),T=o(1,0,x),Ke=f(`r4`,e=>i(e,`a`)),E=o(1,0,e=>{ne(e,`a`,e._.ac,{class:1,style:1}),Ke(e)}),qe=f(`r5`,e=>{e.a2&&!(`closedBy`in HTMLDialogElement.prototype)&&(e.a1===`any`?e.a.addEventListener(`click`,t=>{t.target===e.a&&k(e,!1)},{signal:ae(e,0)}):e.a1===`none`&&e.a.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()},{signal:ae(e,0)}))}),Je=d(30,e=>{ce(e,0),qe(e)}),Ye=r(27,e=>{le(e.a,`closedby`,e.a1),Je(e)}),D=(e,t)=>Ye(e,t===void 0?`any`:t),O=d(31,e=>s(e.a,[`dialog`,!e.a2&&`dialog--close`,e.n&&Le.includes(e.n)&&`dialog--${e.n}`,e.o&&`dialog--expressive`,e.m]),3),Xe=f(`r6`,e=>{e.a2&&!e.a.open&&e.a.showModal()}),k=n(28,e=>{Je(e),O(e),Xe(e)}),Ze=d(11,e=>k(e,e.j,e.k)),A=r(9,Ze),j=r(10,Ze),Qe=d(33,e=>le(e.a,`aria-labelledby`,e.w?`${e.w} ${e.a6}`:e.a6)),$e=te(3),M=d(42,e=>$e(e,e.ad||`h2`,()=>({...e.ae,id:e.a6,class:[`dialog__title`,e.af]})),3),et=r(32,e=>{Qe(e),M(e)}),tt=(e,t)=>et(e,t||ie(e,`Ja6`)),N=r(22,Qe),P=r(12,O),F=r(13,O),nt=re(1,`<div></div>`,` `,Ge),I=r(14,e=>{(({class:t,position:n,src:r,style:i,...ee})=>pt(e,ee))(e.o||{}),mt(e,e.o?.src),ht(e,e.o?.position),gt(e,e.o?.class),_t(e,e.o?.style),nt(e,+!e.o),O(e)}),rt=f(`r7`,e=>{ue(e.a,`cancel`,function(t,n){t.preventDefault(),k(e,!1),e.y&&e.y(t,n)}),ue(e.a,`animationend`,function(t,n){t.target===n&&!e.a2&&n.close(),e.z&&e.z(t,n)})}),L=rt,it=f(`r8`,e=>i(e,`a`)),R=r(26,e=>{de(e,`a`,{...e.a0,open:null},{closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},ee),it(e)}),at=re(2,(e=>`<!>${e}<!>`)(Se),(e=>`b/${e}&b`)(`b%c`),He),z=r(20,e=>{at(e,+!e.u),v(e)}),ot=r(39,M),st=r(40,M),ct=r(41,M),B=r(19,e=>Ce(e.e,{...e.t,class:[`dialog__close`,e.t?.class],onClick:yt(e),content:ze(e)})),lt=te(5),ut=lt,dt=re(6,`<div></div>`,` `,We),V=r(17,e=>{vt(e,e.r?.class),dt(e,+!e.r),y(e)}),ft=(e,t)=>{(({"aria-labelledby":t,banner:n,class:r,close:i,closedby:ee,content:a,footer:te,header:ne,onAnimationEnd:re,onCancel:ie,open:o,openChange:ae,previous:oe,size:s,...c})=>R(e,c))(t),A(e,t.open),j(e,t.openChange),P(e,t.class),F(e,t.size),I(e,t.banner),H(e,t.header),V(e,t.footer),B(e,t.close),z(e,t.previous),ut(e,t.content),N(e,t[`aria-labelledby`]),D(e,t.closedby),U(e,t.onCancel),W(e,t.onAnimationEnd)},pt=r(38,E),mt=r(34,S),ht=r(35,C),gt=r(36,w),_t=r(37,T),H=(e,t)=>{(({as:t,...n})=>st(e,n))(t),tt(e,t.id),ot(e,t.as),ct(e,t.class)},vt=r(18,b),U=r(24),W=r(25),yt=e=>function(t,n){e.a.requestClose(),e.t?.onClick&&(e.t?.onClick)(t,n)},p(`r0`,yt),bt=m(`r`,h,g,L,ft)})))()}function xt(e){ge(e.a),ye(e.a,{onClick:Mt(e),content:Et(e)}),L(e.b),H(e.b,u({content:wt(e)})),B(e.b,u({a11yText:`Close Dialog`})),_(e.b,Tt(e)),j(e.b,jt(e))}var St,Ct,wt,Tt,Et,K,Dt,Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{G(),_e(),c(),St=((e,t)=>`<!>${e}${t}`)(ve,h),Ct=((e,t)=>`b/${e}&/${t}&`)(he,g),wt=l(`MNPzHoS`,`Dialog Title`),Tt=l(`xcwmxct`,`<p>This is the default dialog content.</p>`),Et=a(`paBJeFS`,`Open Dialog`),K=n(7,e=>A(e.b,e.h)),Dt=d(6,e=>K(e,e.e,e.f)),Ot=r(4,Dt),kt=r(5,Dt),At=r(3,e=>{N(e.b,e.d[`aria-labelledby`]),I(e.b,e.d.banner),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,e.d.previous),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:i,content:ee,footer:a,header:te,onAnimationEnd:ne,onCancel:re,open:ie,openChange:o,previous:ae,size:oe,...s})=>s)(e.d)),Ot(e,e.d.open),kt(e,e.d.openChange)}),jt=e=>t=>{K(e,t)},Mt=e=>function(){K(e,!0)},p(`pLUCYHQ`,jt),p(`KKdUdJr`,Mt),Nt=m(`l2PEQiU`,St,Ct,xt,At)})))()}var Ft;function It(){return(It=e((()=>{Ft=`import { type Input as DialogInput } from "<evo-dialog>";
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
`})))()}function Lt(e){ge(e.a),ye(e.a,{onClick:Jt(e),content:Ht(e)}),L(e.b),I(e.b,u({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,position:`top`})),H(e.b,u({content:Bt(e)})),B(e.b,u({a11yText:`Close Dialog`})),_(e.b,Vt(e)),j(e.b,qt(e))}var Rt,zt,Bt,Vt,Ht,q,Ut,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{G(),_e(),c(),Rt=((e,t)=>`<!>${e}${t}`)(ve,h),zt=((e,t)=>`b/${e}&/${t}&`)(he,g),Bt=l(`i74ktqr`,`Dialog Title`),Vt=l(`P5tjIs3`,`<p>This dialog uses a banner image via the src attribute.</p>`),Ht=a(`cGCvuCU`,`Open Dialog With Banner`),q=n(7,e=>A(e.b,e.h)),Ut=d(6,e=>q(e,e.e,e.f)),Wt=r(4,Ut),Gt=r(5,Ut),Kt=r(3,e=>{N(e.b,e.d[`aria-labelledby`]),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,e.d.previous),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:i,content:ee,footer:a,header:te,onAnimationEnd:ne,onCancel:re,open:ie,openChange:o,previous:ae,size:oe,...s})=>s)(e.d)),Wt(e,e.d.open),Gt(e,e.d.openChange)}),qt=e=>t=>{q(e,t)},Jt=e=>function(){q(e,!0)},p(`BK8o4oW`,qt),p(`wbK1uER`,Jt),Yt=m(`rsNNHsJ`,Rt,zt,Lt,Kt)})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`import { type Input as DialogInput } from "<evo-dialog>";
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
`})))()}function $t(e){ge(e.a),ye(e.a,{onClick:X(e),content:on(e)}),L(e.b),I(e.b,u({class:`banner-demo`,content:rn(e)})),H(e.b,u({content:nn(e)})),B(e.b,u({a11yText:`Close Dialog`})),z(e.b,u({a11yText:`Back`})),_(e.b,an(e)),j(e.b,Y(e))}var en,tn,nn,rn,an,on,J,sn,cn,ln,un,Y,X,dn;function fn(){return(fn=e((()=>{G(),_e(),c(),en=((e,t)=>`<!>${e}${t}`)(ve,h),tn=((e,t)=>`b/${e}&/${t}&`)(he,g),nn=l(`P_xAK_h`,`Dialog Title`),rn=a(`y9QYH9y`,`Custom Banner`),an=l(`FxqpfrU`,`<p>This dialog uses a custom body inside the banner slot instead of a background image.</p>`),on=a(`AYRDQw0`,`Open Dialog With Custom Banner`),J=n(7,e=>A(e.b,e.h)),sn=d(6,e=>J(e,e.e,e.f)),cn=r(4,sn),ln=r(5,sn),un=r(3,e=>{N(e.b,e.d[`aria-labelledby`]),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:i,content:ee,footer:a,header:te,onAnimationEnd:ne,onCancel:re,open:ie,openChange:o,previous:ae,size:oe,...s})=>s)(e.d)),cn(e,e.d.open),ln(e,e.d.openChange)}),Y=e=>t=>{J(e,t)},X=e=>function(){J(e,!0)},p(`yddlo9O`,Y),p(`flvjIy8`,X),dn=m(`iPGVKvZ`,en,tn,$t,un)})))()}var pn;function mn(){return(mn=e((()=>{pn=`import { type Input as DialogInput } from "<evo-dialog>";
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
`})))()}var hn,Z,Q,$,gn;function _n(){return(_n=e((()=>{Fe(),G(),Pt(),It(),Xt(),Qt(),fn(),mn(),hn={title:`navigation & disclosure/evo-dialog`,component:bt,parameters:{docs:{description:{component:Pe}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the dialog is open`,table:{defaultValue:{summary:`false`}}},size:{type:`string`,options:[`regular (default)`,`wide`,`narrow`,`large`],control:`inline-radio`,description:`Size variant of the dialog`},closedby:{type:`string`,options:[`any`,`closerequest`,`none`],control:`inline-radio`,description:'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',table:{defaultValue:{summary:`any`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},footer:{description:`The footer content rendered below the dialog main content area`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the close button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},previous:{description:`Optional previous/back button rendered in the header`,"@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the previous button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},banner:{description:`Optional banner image displayed at the top of the dialog`,"@":{src:{type:`string`,description:`URL of the banner image`},position:{type:`string`,description:"Position of the image within the banner area using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},Z=t(Nt,Ft),Q=t(Yt,Zt),$=t(dn,pn),gn=[`Default`,`Banner`,`CustomBanner`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BannerTemplate, BannerTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomBannerTemplate, CustomBannerTemplateCode)`,...$.parameters?.docs?.source}}}})))()}_n();export{Q as Banner,$ as CustomBanner,Z as Default,gn as __namedExportsOrder,hn as default};