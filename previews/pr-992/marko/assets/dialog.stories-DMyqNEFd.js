import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,C as ee,J as te,L as ne,M as r,P as re,Q as i,R as ie,T as ae,X as a,Y as oe,a as se,at as o,c as s,et as ce,i as c,k as l,n as u,nt as d,o as le,rt as ue,s as de,t as f,tt as p,w as fe,y as pe}from"./dom-CNWckxLY.js";import{n as me,t as he}from"./controllable.feat-BOmJcZCb.js";import{i as ge,n as _e,o as ve,r as ye,t as be}from"./evo-button-DCHqE7Ja.js";import{t as xe}from"./dialog-Dd2_jjCz.js";import{i as Se,n as Ce,t as we}from"./evo-icon-button-Cv3N38Ss.js";import{a as Te,i as Ee,n as De,r as Oe,t as ke}from"./evo-icon-chevron-left-16-CXpfbDWZ.js";import{a as Ae,i as je,n as Me,r as Ne,t as Pe}from"./evo-icon-close-16-C7sMSyyo.js";var Fe;function Ie(){return(Ie=e((()=>{Fe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function Le(){return(Le=e((()=>{xe()})))()}var m,h,Re,g,ze,Be,Ve,He,_,Ue,We,v,Ge,y,b,x,Ke,S,C,w,qe,T,Je,E,Ye,D,O,Xe,k,Ze,A,j,Qe,$e,M,et,tt,N,P,F,nt,I,rt,L,it,R,at,z,ot,st,ct,B,lt,ut,dt,V,ft,pt,mt,ht,gt,_t,H,vt,U,W,yt,bt;function G(){return(G=e((()=>{Se(),c(),me(),Te(),he(),Ae(),Le(),m=(e=>`<dialog><!><div class=dialog__header><!><!>${e}</div><div class=dialog__main><!></div><!></dialog>`)(Ce),h=(e=>` D%bD%b%b/${e}&lD%l%l`)(`b%c`),Re=[`wide`,`narrow`,`large`],ue(),g=ie(5),ze=e=>{Me(e.a),Pe(e.a,{})},Be=r(`s1`,Ne,(e=>`/${e}&`)(je),ze),Ve=e=>{De(e.a),ke(e.a,{})},He=r(`s2`,Oe,(e=>`/${e}&`)(Ee),Ve),_=a(2,0,e=>we(e.a,{...e._.u,class:[`dialog__prev`,e._.u?.class],content:He(e)})),Ue=_,We=o(`s3`,e=>ae(e,`a`)),v=a(6,0,e=>{fe(e,`a`,e._.r,{class:1}),We(e)}),Ge=e=>{v._(e),y._(e)},y=a(6,0,e=>s(e.a,[`dialog__footer`,e._.s])),b=p(1,e=>pe(e.a,{...e._.ab,"background-image":e._.a8&&`url(${e._.a8})`,"background-position":e._.a9}),2),x=a(1,0,b),Ke=e=>{x._(e),S._(e),C._(e),w._(e),T._(e)},S=a(1,0,b),C=a(1,0,e=>s(e.a,[`dialog__image`,e._.aa])),w=a(1,0,b),qe=o(`s4`,e=>ae(e,`a`)),T=a(1,0,e=>{fe(e,`a`,e._.ac,{class:1,style:1}),qe(e)}),Je=o(`s5`,e=>{e.a2&&!(`closedBy`in HTMLDialogElement.prototype)&&(e.a1===`any`?e.a.addEventListener(`click`,t=>{t.target===e.a&&k(e,!1)},{signal:se(e,0)}):e.a1===`none`&&e.a.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()},{signal:se(e,0)}))}),E=p(30,e=>{le(e,0),Je(e)}),Ye=l(27,e=>{de(e.a,`closedby`,e.a1),E(e)}),D=(e,t)=>Ye(e,t===void 0?`any`:t),O=p(31,e=>s(e.a,[`dialog`,!e.a2&&`dialog--close`,e.n&&Re.includes(e.n)&&`dialog--${e.n}`,e.o&&`dialog--expressive`,e.m]),3),Xe=o(`s6`,e=>{e.a2&&!e.a.open&&e.a.showModal()}),k=i(28,e=>{E(e),O(e),Xe(e)}),Ze=p(11,e=>k(e,e.j,e.k)),A=l(9,Ze),j=l(10,Ze),Qe=p(33,e=>de(e.a,`aria-labelledby`,e.w?`${e.w} ${e.a6}`:e.a6)),$e=ne(3),M=p(42,e=>$e(e,e.ad||`h2`,()=>({...e.ae,id:e.a6,class:[`dialog__title`,e.af]})),3),et=l(32,e=>{Qe(e),M(e)}),tt=(e,t)=>et(e,t||te(e,`Ja6`)),N=l(22,Qe),P=l(12,O),F=l(13,O),nt=oe(1,`<div></div>`,` `,Ke),I=l(14,e=>{(({class:t,position:n,src:ee,style:te,...ne})=>pt(e,ne))(e.o||{}),mt(e,e.o?.src),ht(e,e.o?.position),gt(e,e.o?.class),_t(e,e.o?.style),nt(e,+!e.o),O(e)}),rt=o(`s7`,e=>{ce(e.a,`cancel`,function(t,n){t.preventDefault(),k(e,!1),e.y&&e.y(t,n)}),ce(e.a,`animationend`,function(t,n){t.target===n&&!e.a2&&n.close(),e.z&&e.z(t,n)})}),L=rt,it=o(`s8`,e=>ae(e,`a`)),R=l(26,e=>{ee(e,`a`,{...e.a0,open:null},{closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},re),it(e)}),at=oe(2,(e=>`<!>${e}<!>`)(Ce),(e=>`b/${e}&b`)(`b%c`),Ue),z=l(20,e=>{at(e,+!e.u),_(e)}),ot=l(39,M),st=l(40,M),ct=l(41,M),B=l(19,e=>we(e.e,{...e.t,class:[`dialog__close`,e.t?.class],onClick:yt(e),content:Be(e)})),lt=ne(5),ut=lt,dt=oe(6,`<div></div>`,` `,Ge),V=l(17,e=>{vt(e,e.r?.class),dt(e,+!e.r),v(e)}),ft=(e,t)=>{(({"aria-labelledby":t,banner:n,class:ee,close:te,closedby:ne,content:r,footer:re,header:i,onAnimationEnd:ie,onCancel:ae,open:a,openChange:oe,previous:se,size:o,...s})=>R(e,s))(t),A(e,t.open),j(e,t.openChange),P(e,t.class),F(e,t.size),I(e,t.banner),H(e,t.header),V(e,t.footer),B(e,t.close),z(e,t.previous),ut(e,t.content),N(e,t[`aria-labelledby`]),D(e,t.closedby),U(e,t.onCancel),W(e,t.onAnimationEnd)},pt=l(38,T),mt=l(34,x),ht=l(35,S),gt=l(36,C),_t=l(37,w),H=(e,t)=>{(({as:t,...n})=>st(e,n))(t),tt(e,t.id),ot(e,t.as),ct(e,t.class)},vt=l(18,y),U=l(24),W=l(25),yt=e=>function(t,n){e.a.requestClose(),e.t?.onClick&&(e.t?.onClick)(t,n)},d(`s0`,yt),bt=f(`s`,m,h,L,ft)})))()}function xt(e){_e(e.a),be(e.a,{onClick:Mt(e),content:Et(e)}),L(e.b),H(e.b,u({content:wt(e)})),B(e.b,u({a11yText:`Close Dialog`})),g(e.b,Tt(e)),j(e.b,jt(e))}var St,Ct,wt,Tt,Et,K,Dt,Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{G(),ve(),c(),St=((e,t)=>`<!>${e}${t}`)(ye,m),Ct=((e,t)=>`b/${e}&/${t}&`)(ge,h),wt=n(`MNPzHoS`,`Dialog Title`),Tt=n(`xcwmxct`,`<p>This is the default dialog content.</p>`),Et=r(`paBJeFS`,`Open Dialog`),K=i(7,e=>A(e.b,e.h)),Dt=p(6,e=>K(e,e.e,e.f)),Ot=l(4,Dt),kt=l(5,Dt),At=l(3,e=>{N(e.b,e.d[`aria-labelledby`]),I(e.b,e.d.banner),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,e.d.previous),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:ee,closedby:te,content:ne,footer:r,header:re,onAnimationEnd:i,onCancel:ie,open:ae,openChange:a,previous:oe,size:se,...o})=>o)(e.d)),Ot(e,e.d.open),kt(e,e.d.openChange)}),jt=e=>t=>{K(e,t)},Mt=e=>function(){K(e,!0)},d(`pLUCYHQ`,jt),d(`KKdUdJr`,Mt),Nt=f(`l2PEQiU`,St,Ct,xt,At)})))()}var Ft;function It(){return(It=e((()=>{Ft=`import { type Input as DialogInput } from "<evo-dialog>";
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
`})))()}function Lt(e){_e(e.a),be(e.a,{onClick:Jt(e),content:Ht(e)}),L(e.b),I(e.b,u({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,position:`top`})),H(e.b,u({content:Bt(e)})),B(e.b,u({a11yText:`Close Dialog`})),g(e.b,Vt(e)),j(e.b,qt(e))}var Rt,zt,Bt,Vt,Ht,q,Ut,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{G(),ve(),c(),Rt=((e,t)=>`<!>${e}${t}`)(ye,m),zt=((e,t)=>`b/${e}&/${t}&`)(ge,h),Bt=n(`i74ktqr`,`Dialog Title`),Vt=n(`P5tjIs3`,`<p>This dialog uses a banner image via the src attribute.</p>`),Ht=r(`cGCvuCU`,`Open Dialog With Banner`),q=i(7,e=>A(e.b,e.h)),Ut=p(6,e=>q(e,e.e,e.f)),Wt=l(4,Ut),Gt=l(5,Ut),Kt=l(3,e=>{N(e.b,e.d[`aria-labelledby`]),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),z(e.b,e.d.previous),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:ee,closedby:te,content:ne,footer:r,header:re,onAnimationEnd:i,onCancel:ie,open:ae,openChange:a,previous:oe,size:se,...o})=>o)(e.d)),Wt(e,e.d.open),Gt(e,e.d.openChange)}),qt=e=>t=>{q(e,t)},Jt=e=>function(){q(e,!0)},d(`BK8o4oW`,qt),d(`wbK1uER`,Jt),Yt=f(`rsNNHsJ`,Rt,zt,Lt,Kt)})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`import { type Input as DialogInput } from "<evo-dialog>";
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
`})))()}function $t(e){_e(e.a),be(e.a,{onClick:X(e),content:on(e)}),L(e.b),I(e.b,u({class:`banner-demo`,content:rn(e)})),H(e.b,u({content:nn(e)})),B(e.b,u({a11yText:`Close Dialog`})),z(e.b,u({a11yText:`Back`})),g(e.b,an(e)),j(e.b,Y(e))}var en,tn,nn,rn,an,on,J,sn,cn,ln,un,Y,X,dn;function fn(){return(fn=e((()=>{G(),ve(),c(),en=((e,t)=>`<!>${e}${t}`)(ye,m),tn=((e,t)=>`b/${e}&/${t}&`)(ge,h),nn=n(`P_xAK_h`,`Dialog Title`),rn=r(`y9QYH9y`,`Custom Banner`),an=n(`FxqpfrU`,`<p>This dialog uses a custom body inside the banner slot instead of a background image.</p>`),on=r(`AYRDQw0`,`Open Dialog With Custom Banner`),J=i(7,e=>A(e.b,e.h)),sn=p(6,e=>J(e,e.e,e.f)),cn=l(4,sn),ln=l(5,sn),un=l(3,e=>{N(e.b,e.d[`aria-labelledby`]),P(e.b,e.d.class),D(e.b,e.d.closedby),V(e.b,e.d.footer),W(e.b,e.d.onAnimationEnd),U(e.b,e.d.onCancel),F(e.b,e.d.size),R(e.b,(({"aria-labelledby":e,banner:t,class:n,close:ee,closedby:te,content:ne,footer:r,header:re,onAnimationEnd:i,onCancel:ie,open:ae,openChange:a,previous:oe,size:se,...o})=>o)(e.d)),cn(e,e.d.open),ln(e,e.d.openChange)}),Y=e=>t=>{J(e,t)},X=e=>function(){J(e,!0)},d(`yddlo9O`,Y),d(`flvjIy8`,X),dn=f(`iPGVKvZ`,en,tn,$t,un)})))()}var pn;function mn(){return(mn=e((()=>{pn=`import { type Input as DialogInput } from "<evo-dialog>";
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
`})))()}var hn,Z,Q,$,gn;function _n(){return(_n=e((()=>{Ie(),G(),Pt(),It(),Xt(),Qt(),fn(),mn(),hn={title:`navigation & disclosure/evo-dialog`,component:bt,parameters:{docs:{description:{component:Fe}}},argTypes:{open:{type:`boolean`,controllable:!0,description:`Whether the dialog is open`,table:{defaultValue:{summary:`false`}}},size:{type:`string`,options:[`regular (default)`,`wide`,`narrow`,`large`],control:`inline-radio`,description:`Size variant of the dialog`},closedby:{type:`string`,options:[`any`,`closerequest`,`none`],control:`inline-radio`,description:'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',table:{defaultValue:{summary:`any`}}},header:{description:`The header content rendered inside the dialog title (required)`,"@":{as:{type:`string`,description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:`All attributes and event handlers from the heading element will be passed through`}}},footer:{description:`The footer content rendered below the dialog main content area`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the close button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},previous:{description:`Optional previous/back button rendered in the header`,"@":{a11yText:{type:{name:`string`,required:!0},description:`Accessible label for the previous button`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},banner:{description:`Optional banner image displayed at the top of the dialog`,"@":{src:{type:`string`,description:`URL of the banner image`},position:{type:`string`,description:"Position of the image within the banner area using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},Z=t(Nt,Ft),Q=t(Yt,Zt),$=t(dn,pn),gn=[`Default`,`Banner`,`CustomBanner`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BannerTemplate, BannerTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomBannerTemplate, CustomBannerTemplateCode)`,...$.parameters?.docs?.source}}}})))()}_n();export{Q as Banner,$ as CustomBanner,Z as Default,gn as __namedExportsOrder,hn as default};