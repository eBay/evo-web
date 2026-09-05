import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,C as ee,J as i,L as te,M as a,P as ne,R as re,T as o,Y as s,Z as c,a as ie,c as l,et as u,i as d,it as f,k as p,n as m,nt as ae,o as oe,q as se,s as ce,t as h,tt as g,w as le,y as ue}from"./dom-CrmgVQ1h.js";import{t as de}from"./controllable-open.feat-H_cIBEOf.js";import{t as fe}from"./controllable.feat-Zzhbi3Cf.js";import{i as pe,n as me,o as he,r as ge,t as _e}from"./evo-button-OmHu2dco.js";import{t as ve}from"./dialog-Dd2_jjCz.js";import{i as ye,n as be,t as xe}from"./evo-icon-button-CFYZQjNt.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./evo-icon-chevron-left-16-4-guEX3B.js";import{a as De,i as Oe,n as ke,r as Ae,t as je}from"./evo-icon-close-16-BYQaAXGG.js";var Me;function Ne(){return(Ne=e((()=>{Me=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function Pe(){return(Pe=e((()=>{ve()})))()}var _,v,Fe,y,Ie,Le,Re,ze,b,Be,Ve,x,He,S,C,w,Ue,T,E,We,Ge,Ke,qe,Je,Ye,D,O,Xe,k,Ze,A,j,Qe,$e,M,et,tt,N,P,F,nt,I,rt,L,it,R,at,z,ot,st,ct,B,lt,ut,dt,V,ft,pt,mt,ht,gt,_t,H,vt,U,W,yt,bt;function G(){return(G=e((()=>{ye(),d(),de(),Se(),fe(),De(),Pe(),_=(e=>`<dialog><!><div class=dialog__header><!><!>${e}</div><div class=dialog__main><!></div><!></dialog>`)(be),v=(e=>` D%bD%b%b/${e}&lD%l%l`)(`b%c`),Fe=[`wide`,`narrow`,`large`],ae(),y=re(5),Ie=e=>{ke(e.a),je(e.a,{})},Le=a(`r1`,Ae,(e=>`/${e}&`)(Oe),Ie),Re=e=>{we(e.a),Ee(e.a,{})},ze=a(`r2`,Te,(e=>`/${e}&`)(Ce),Re),b=s(2,0,e=>xe(e.a,{...e._.u,class:[`dialog__prev`,e._.u?.class],content:ze(e)})),Be=b,Ve=f(`r3`,e=>o(e,`a`)),x=s(6,0,e=>{le(e,`a`,e._.r,{class:1}),Ve(e)}),He=e=>{x._(e),S._(e)},S=s(6,0,e=>l(e.a,[`dialog__footer`,e._.s])),C=u(1,e=>ue(e.a,{...e._.ab,"background-image":e._.a8&&`url(${e._.a8})`,"background-position":e._.a9}),2),w=s(1,0,C),Ue=e=>{w._(e),T._(e),E._(e),We._(e),Ke._(e)},T=s(1,0,C),E=s(1,0,e=>l(e.a,[`dialog__image`,e._.aa])),We=s(1,0,C),Ge=f(`r4`,e=>o(e,`a`)),Ke=s(1,0,e=>{le(e,`a`,e._.ac,{class:1,style:1}),Ge(e)}),qe=f(`r5`,e=>{e.a2&&!(`closedBy`in HTMLDialogElement.prototype)&&(e.a1===`any`?e.a.addEventListener(`click`,t=>{t.target===e.a&&k(e,!1)},{signal:ie(e,0)}):e.a1===`none`&&e.a.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()},{signal:ie(e,0)}))}),Je=u(30,e=>{oe(e,0),qe(e)}),Ye=p(27,e=>{ce(e.a,`closedby`,e.a1),Je(e)}),D=(e,t)=>Ye(e,t===void 0?`any`:t),O=u(31,e=>l(e.a,[`dialog`,!e.a2&&`dialog--close`,e.n&&Fe.includes(e.n)&&`dialog--${e.n}`,e.o&&`dialog--expressive`,e.m]),3),Xe=f(`r6`,e=>{e.a2&&!e.a.open&&e.a.showModal()}),k=c(28,e=>{Je(e),O(e),Xe(e)}),Ze=u(11,e=>k(e,e.j,e.k)),A=p(9,Ze),j=p(10,Ze),Qe=u(33,e=>ce(e.a,`aria-labelledby`,e.w?`${e.w} ${e.a6}`:e.a6)),$e=te(3),M=u(42,e=>$e(e,e.ad||`h2`,()=>({...e.ae,id:e.a6,class:[`dialog__title`,e.af]})),3),et=p(32,e=>{Qe(e),M(e)}),tt=(e,t)=>et(e,t||se(e,`Ja6`)),N=p(22,Qe),P=p(12,O),F=p(13,O),nt=i(1,`<div></div>`,` `,Ue),I=p(14,e=>{(({class:t,position:n,src:r,style:ee,...i})=>pt(e,i))(e.o||{}),mt(e,e.o?.src),ht(e,e.o?.position),gt(e,e.o?.class),_t(e,e.o?.style),nt(e,+!e.o),O(e)}),rt=f(`r7`,e=>{n(e.a,`cancel`,function(t,n){t.preventDefault(),k(e,!1),e.y&&e.y(t,n)}),n(e.a,`animationend`,function(t,n){t.target===n&&!e.a2&&n.close(),e.z&&e.z(t,n)})}),L=rt,it=f(`r8`,e=>o(e,`a`)),R=p(26,e=>{ee(e,`a`,{...e.a0,open:null},{closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},ne),it(e)}),at=i(2,(e=>`<!>${e}<!>`)(be),(e=>`b/${e}&b`)(`b%c`),Be),z=p(20,e=>{at(e,+!e.u),b(e)}),ot=p(39,M),st=p(40,M),ct=p(41,M),B=p(19,e=>xe(e.e,{...e.t,class:[`dialog__close`,e.t?.class],onClick:yt(e),content:Le(e)})),lt=te(5),ut=lt,dt=i(6,`<div></div>`,` `,He),V=p(17,e=>{vt(e,e.r?.class),dt(e,+!e.r),x(e)}),ft=(e,t)=>{(({"aria-labelledby":t,banner:n,class:r,close:ee,closedby:i,content:te,footer:a,header:ne,onAnimationEnd:re,onCancel:o,open:s,openChange:c,previous:ie,size:l,...u})=>R(e,u))(t),A(e,t.open),j(e,t.openChange),P(e,t.class),F(e,t.size),I(e,t.banner),H(e,t.header),V(e,t.footer),B(e,t.close),z(e,t.previous),ut(e,t.content),N(e,t[`aria-labelledby`]),D(e,t.closedby),U(e,t.onCancel),W(e,t.onAnimationEnd)},pt=p(38,Ke),mt=p(34,w),ht=p(35,T),gt=p(36,E),_t=p(37,We),H=(e,t)=>{(({as:t,...n})=>st(e,n))(t),tt(e,t.id),ot(e,t.as),ct(e,t.class)},vt=p(18,S),U=p(24),W=p(25),yt=e=>function(t,n){e.a.requestClose(),e.t?.onClick&&(e.t?.onClick)(t,n)},g(`r0`,yt),bt=h(`r`,_,v,L,ft)})))()}function xt(e){me(e.a),_e(e.a,{onClick:Mt(e),content:Et(e)}),L(e.b),H(e.b,m({content:wt(e)})),B(e.b,m({a11yText:`Close Dialog`})),y(e.b,Tt(e)),j(e.b,jt(e))}var St,Ct,wt,Tt,Et,K,Dt,Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{G(),he(),d(),St=((e,t)=>`<!>${e}${t}`)(ge,_),Ct=((e,t)=>`b/${e}&/${t}&`)(pe,v),wt=r(`MNPzHoS`,`Dialog Title`),Tt=r(`xcwmxct`,`<p>This is the default dialog content.</p>`),Et=a(`paBJeFS`,`Open Dialog`),K=c(7,e=>A(e.b,e.h)),Dt=u(6,e=>K(e,e.e,e.f)),Ot=p(4,Dt),kt=p(5,Dt),At=p(3,e=>{N(e.b,e.d[`aria-labelledby`]),I(e.b,e.d.banner),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,e.d.previous),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:ee,content:i,footer:te,header:a,onAnimationEnd:ne,onCancel:re,open:o,openChange:s,previous:c,size:ie,...l})=>l)(e.d)),Ot(e,e.d.open),kt(e,e.d.openChange)}),jt=e=>t=>{K(e,t)},Mt=e=>function(){K(e,!0)},g(`pLUCYHQ`,jt),g(`KKdUdJr`,Mt),Nt=h(`l2PEQiU`,St,Ct,xt,At)})))()}var Ft;function It(){return(It=e((()=>{Ft=`import { type Input as DialogInput } from "<evo-dialog>";
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
`})))()}function Lt(e){me(e.a),_e(e.a,{onClick:Jt(e),content:Ht(e)}),L(e.b),I(e.b,m({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,position:`top`})),H(e.b,m({content:Bt(e)})),B(e.b,m({a11yText:`Close Dialog`})),y(e.b,Vt(e)),j(e.b,qt(e))}var Rt,zt,Bt,Vt,Ht,q,Ut,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{G(),he(),d(),Rt=((e,t)=>`<!>${e}${t}`)(ge,_),zt=((e,t)=>`b/${e}&/${t}&`)(pe,v),Bt=r(`i74ktqr`,`Dialog Title`),Vt=r(`P5tjIs3`,`<p>This dialog uses a banner image via the src attribute.</p>`),Ht=a(`cGCvuCU`,`Open Dialog With Banner`),q=c(7,e=>A(e.b,e.h)),Ut=u(6,e=>q(e,e.e,e.f)),Wt=p(4,Ut),Gt=p(5,Ut),Kt=p(3,e=>{N(e.b,e.d[`aria-labelledby`]),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,e.d.previous),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:ee,content:i,footer:te,header:a,onAnimationEnd:ne,onCancel:re,open:o,openChange:s,previous:c,size:ie,...l})=>l)(e.d)),Wt(e,e.d.open),Gt(e,e.d.openChange)}),qt=e=>t=>{q(e,t)},Jt=e=>function(){q(e,!0)},g(`BK8o4oW`,qt),g(`wbK1uER`,Jt),Yt=h(`rsNNHsJ`,Rt,zt,Lt,Kt)})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`import { type Input as DialogInput } from "<evo-dialog>";
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
    position="top"/>
  <@header>Dialog Title</@header>
  <@close a11yText="Close Dialog"/>
  <p>This dialog uses a banner image via the src attribute.</p>
</evo-dialog>
`})))()}function $t(e){me(e.a),_e(e.a,{onClick:X(e),content:on(e)}),L(e.b),I(e.b,m({class:`banner-demo`,content:rn(e)})),H(e.b,m({content:nn(e)})),B(e.b,m({a11yText:`Close Dialog`})),z(e.b,m({a11yText:`Back`})),y(e.b,an(e)),j(e.b,Y(e))}var en,tn,nn,rn,an,on,J,sn,cn,ln,un,Y,X,dn;function fn(){return(fn=e((()=>{G(),he(),d(),en=((e,t)=>`<!>${e}${t}`)(ge,_),tn=((e,t)=>`b/${e}&/${t}&`)(pe,v),nn=r(`P_xAK_h`,`Dialog Title`),rn=a(`y9QYH9y`,`Custom Banner`),an=r(`FxqpfrU`,`<p>This dialog uses a custom body inside the banner slot instead of a background image.</p>`),on=a(`AYRDQw0`,`Open Dialog With Custom Banner`),J=c(7,e=>A(e.b,e.h)),sn=u(6,e=>J(e,e.e,e.f)),cn=p(4,sn),ln=p(5,sn),un=p(3,e=>{N(e.b,e.d[`aria-labelledby`]),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:r,closedby:ee,content:i,footer:te,header:a,onAnimationEnd:ne,onCancel:re,open:o,openChange:s,previous:c,size:ie,...l})=>l)(e.d)),cn(e,e.d.open),ln(e,e.d.openChange)}),Y=e=>t=>{J(e,t)},X=e=>function(){J(e,!0)},g(`yddlo9O`,Y),g(`flvjIy8`,X),dn=h(`iPGVKvZ`,en,tn,$t,un)})))()}var pn;function mn(){return(mn=e((()=>{pn=`import { type Input as DialogInput } from "<evo-dialog>";
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
  <@banner class="banner-demo">
    Custom Banner
  </@banner>
  <@header>Dialog Title</@header>
  <@close a11yText="Close Dialog"/>
  <@previous a11yText="Back"/>
  <p>
    This dialog uses a custom body inside the banner slot instead of a
    background image.
  </p>
</evo-dialog>
`})))()}var hn,Z,Q,$,gn;function _n(){return(_n=e((()=>{Ne(),G(),Pt(),It(),Xt(),Qt(),fn(),mn(),hn={title:`navigation & disclosure/evo-dialog`,component:bt,parameters:{docs:{description:{component:Me}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the dialog is open`,table:{defaultValue:{summary:`false`}}},size:{type:`string`,options:[`regular (default)`,`wide`,`narrow`,`large`],control:`inline-radio`,description:`Size variant of the dialog`},closedby:{type:`string`,options:[`any`,`closerequest`,`none`],control:`inline-radio`,description:'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',table:{defaultValue:{summary:`any`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},footer:{description:`The footer content rendered below the dialog main content area`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the close button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},previous:{description:`Optional previous/back button rendered in the header`,"@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the previous button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},banner:{description:`Optional banner image displayed at the top of the dialog`,"@":{src:{type:`string`,description:`URL of the banner image`},position:{type:`string`,description:"Position of the image within the banner area using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},Z=t(Nt,Ft),Q=t(Yt,Zt),$=t(dn,pn),gn=[`Default`,`Banner`,`CustomBanner`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BannerTemplate, BannerTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomBannerTemplate, CustomBannerTemplateCode)`,...$.parameters?.docs?.source}}}})))()}_n();export{Q as Banner,$ as CustomBanner,Z as Default,gn as __namedExportsOrder,hn as default};