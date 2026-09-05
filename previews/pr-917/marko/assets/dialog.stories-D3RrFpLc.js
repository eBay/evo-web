import{b as N}from"./utils-DyU2_5R1.js";import{a as h,m as In,_ as i,b as e,c as Sn,d as _,t as sn,i as Q,e as l,f as F,w as G,p as Ln,y as r,z as _n,g as bn,r as un,u as p,$ as An,O as Hn,L as dn,h as Mn,a1 as Un,l as o,j as Y}from"./dom-CQcMsOgj.js";import{a as cn,b as gn,c as mn,$ as hn}from"./index-Ddeo_lZV.js";import"./controllable-open.feat-36QAdjbX.js";import{$ as Wn,a as qn,b as jn,c as Pn}from"./evo-icon-chevron-left-16-DG3kuOnx.js";import"./controllable.feat-BUOkN5Na.js";import{$ as Vn,a as Jn,b as Kn,c as Nn}from"./evo-icon-close-16-CVhjHvya.js";/* empty css               */import{a as X,$ as Z,b as $,c as nn}from"./index-BRQvb8o9.js";import"./iframe-BZMe_UG6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2_6BRUp.js";/* empty css                    */import"./index-CydVXlZl.js";import"./controllable-input.feat-DlB-GNko.js";import"./controllable-select.feat-BFiBaDmS.js";import"./index-C66xovE_.js";import"./evo-icon-chevron-down-16-PWIL4J-Q.js";const Qn=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,f=(n=>`<dialog><!><div class=dialog__header><!><!>${n}</div><div class=dialog__main><!></div><!></dialog>`)(mn),y=(n=>` D%bD%b%b/${n}&lD%l%l`)(gn),Fn=["wide","narrow","large"];In();const tn=Mn(5),Gn=n=>{Kn(n.a),Nn(n.a,{})},Yn=i("XUtfRSI",Jn,(n=>`/${n}&`)(Vn),Gn),Xn=n=>{jn(n.a),Pn(n.a,{})},Zn=i("O5VbPn2",qn,(n=>`/${n}&`)(Wn),Xn),pn=r(2,0,n=>hn(n.a,{...n._.u,class:["dialog__prev",n._.u?.class],content:Zn(n)})),$n=n=>{pn._(n),cn(n.a)},nt=_("KnVvjku",n=>Q(n,"a")),fn=r(6,0,n=>{_n(n,"a",n._.r,{class:1}),nt(n)}),tt=n=>{fn._(n),yn._(n)},yn=r(6,0,n=>F(n.a,["dialog__footer",n._.s])),en=l(1,n=>Hn(n.a,{...n._.ab,"background-image":n._.a8&&`url(${n._.a8})`,"background-position":n._.a9}),2),vn=r(1,0,en),et=n=>{vn._(n),Cn._(n),Tn._(n),kn._(n),Dn._(n)},Cn=r(1,0,en),Tn=r(1,0,n=>F(n.a,["dialog__image",n._.aa])),kn=r(1,0,en),at=_("LuhnqSo",n=>Q(n,"a")),Dn=r(1,0,n=>{_n(n,"a",n._.ac,{class:1,style:1}),at(n)}),ot=_("VCx55LS",n=>{n.a2&&!("closedBy"in HTMLDialogElement.prototype)&&(n.a1==="any"?n.a.addEventListener("click",t=>{t.target===n.a&&an(n,!1)},{signal:dn(n,0)}):n.a1==="none"&&n.a.addEventListener("keydown",t=>{t.key==="Escape"&&t.preventDefault()},{signal:dn(n,0)}))}),wn=l(30,n=>{An(n,0),ot(n)}),it=e(27,n=>{un(n.a,"closedby",n.a1),wn(n)}),v=(n,t)=>it(n,t!==void 0?t:"any"),C=l(31,n=>F(n.a,["dialog",!n.a2&&"dialog--close",n.n&&Fn.includes(n.n)&&`dialog--${n.n}`,n.o&&"dialog--expressive",n.m]),3),lt=_("emOjPiR",n=>{n.a2&&!n.a.open&&n.a.showModal()}),an=p(28,n=>{wn(n),C(n),lt(n)}),xn=l(11,n=>an(n,n.j,n.k)),T=e(9,xn),k=e(10,xn),On=l(33,n=>un(n.a,"aria-labelledby",n.w?`${n.w} ${n.a6}`:n.a6)),rt=bn(3),D=l(42,n=>rt(n,n.ad||"h2",()=>({...n.ae,id:n.a6,class:["dialog__title",n.af]})),3),st=e(32,n=>{On(n),D(n)}),dt=(n,t)=>st(n,t||Ln(n,"Ja6")),w=e(22,On),x=e(12,C),O=e(13,C),_t=G(1,"<div></div>"," ",et),z=e(14,n=>{(({class:t,position:a,src:s,style:u,...b})=>Ct(n,b))(n.o||{}),Tt(n,n.o?.src),kt(n,n.o?.position),Dt(n,n.o?.class),wt(n,n.o?.style),_t(n,n.o?0:1),C(n)}),bt=_("Jwenq5J",n=>{sn(n.a,"cancel",function(t,a){t.preventDefault(),an(n,!1),n.y&&n.y(t,a)}),sn(n.a,"animationend",function(t,a){t.target===a&&!n.a2&&a.close(),n.z&&n.z(t,a)})});function E(n){cn(n.e),bt(n)}const ut=_("ihV0Dz9",n=>Q(n,"a")),R=e(26,n=>{Sn(n,"a",{...n.a0,open:null},{closedby:1,"aria-labelledby":1,class:1,"on-cancel":1,"on-animationend":1},Un),ut(n)}),ct=G(2,(n=>`<!>${n}<!>`)(mn),(n=>`b/${n}&b`)(gn),$n),B=e(20,n=>{ct(n,n.u?0:1),pn(n)}),gt=e(39,D),mt=e(40,D),ht=e(41,D),I=e(19,n=>hn(n.e,{...n.t,class:["dialog__close",n.t?.class],onClick:Ot(n),content:Yn(n)})),pt=bn(5),ft=pt,yt=G(6,"<div></div>"," ",tt),S=e(17,n=>{xt(n,n.r?.class),yt(n,n.r?0:1),fn(n)}),vt=(n,t)=>{(({"aria-labelledby":a,banner:s,class:u,close:b,closedby:M,content:U,footer:W,header:q,onAnimationEnd:j,onCancel:P,open:V,openChange:J,previous:K,size:d,...Bn})=>R(n,Bn))(t),T(n,t.open),k(n,t.openChange),x(n,t.class),O(n,t.size),z(n,t.banner),L(n,t.header),S(n,t.footer),I(n,t.close),B(n,t.previous),ft(n,t.content),w(n,t["aria-labelledby"]),v(n,t.closedby),A(n,t.onCancel),H(n,t.onAnimationEnd)},Ct=e(38,Dn),Tt=e(34,vn),kt=e(35,Cn),Dt=e(36,Tn),wt=e(37,kn),L=(n,t)=>{(({as:a,...s})=>mt(n,s))(t),dt(n,t.id),gt(n,t.as),ht(n,t.class)},xt=e(18,yn),A=e(24),H=e(25),Ot=n=>function(t,a){n.a.requestClose(),n.t?.onClick&&(n.t?.onClick)(t,a)},zt=h("ULl9UTJ",f,y,E,vt),Et=((n,t)=>`<!>${n}${t}`)(nn,f),Rt=((n,t)=>`b/${n}&/${t}&`)($,y),Bt=i("MNPzHoS","Dialog Title"),It=Y("xcwmxct","<p>This is the default dialog content.</p>"),St=i("paBJeFS","Open Dialog"),on=p(7,n=>T(n.b,n.h)),zn=l(6,n=>on(n,n.e,n.f)),Lt=e(4,zn),At=e(5,zn);function Ht(n){X(n.a),Z(n.a,{onClick:Wt(n),content:St(n)}),E(n.b),L(n.b,o({content:Bt(n)})),I(n.b,o({a11yText:"Close Dialog"})),tn(n.b,It(n)),k(n.b,Ut(n))}const Mt=e(3,n=>{w(n.b,n.d["aria-labelledby"]),z(n.b,n.d.banner),x(n.b,n.d.class),v(n.b,n.d.closedby),S(n.b,n.d.footer),H(n.b,n.d.onAnimationEnd),A(n.b,n.d.onCancel),B(n.b,n.d.previous),O(n.b,n.d.size),R(n.b,(({"aria-labelledby":t,banner:a,class:s,close:u,closedby:b,content:M,footer:U,header:W,onAnimationEnd:q,onCancel:j,open:P,openChange:V,previous:J,size:K,...d})=>d)(n.d)),Lt(n,n.d.open),At(n,n.d.openChange)}),Ut=n=>t=>{on(n,t)},Wt=n=>function(){on(n,!0)},qt=h("l2PEQiU",Et,Rt,Ht,Mt),jt=`import { type Input as DialogInput } from "<evo-dialog>";
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
`,Pt=((n,t)=>`<!>${n}${t}`)(nn,f),Vt=((n,t)=>`b/${n}&/${t}&`)($,y),Jt=i("i74ktqr","Dialog Title"),Kt=Y("P5tjIs3","<p>This dialog uses a banner image via the src attribute.</p>"),Nt=i("cGCvuCU","Open Dialog With Banner"),ln=p(7,n=>T(n.b,n.h)),En=l(6,n=>ln(n,n.e,n.f)),Qt=e(4,En),Ft=e(5,En);function Gt(n){X(n.a),Z(n.a,{onClick:Zt(n),content:Nt(n)}),E(n.b),z(n.b,o({src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",position:"top"})),L(n.b,o({content:Jt(n)})),I(n.b,o({a11yText:"Close Dialog"})),tn(n.b,Kt(n)),k(n.b,Xt(n))}const Yt=e(3,n=>{w(n.b,n.d["aria-labelledby"]),x(n.b,n.d.class),v(n.b,n.d.closedby),S(n.b,n.d.footer),H(n.b,n.d.onAnimationEnd),A(n.b,n.d.onCancel),B(n.b,n.d.previous),O(n.b,n.d.size),R(n.b,(({"aria-labelledby":t,banner:a,class:s,close:u,closedby:b,content:M,footer:U,header:W,onAnimationEnd:q,onCancel:j,open:P,openChange:V,previous:J,size:K,...d})=>d)(n.d)),Qt(n,n.d.open),Ft(n,n.d.openChange)}),Xt=n=>t=>{ln(n,t)},Zt=n=>function(){ln(n,!0)},$t=h("rsNNHsJ",Pt,Vt,Gt,Yt),ne=`import { type Input as DialogInput } from "<evo-dialog>";
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
`,te=((n,t)=>`<!>${n}${t}`)(nn,f),ee=((n,t)=>`b/${n}&/${t}&`)($,y),ae=i("P_xAK_h","Dialog Title"),oe=i("y9QYH9y","Custom Banner"),ie=Y("FxqpfrU","<p>This dialog uses a custom body inside the banner slot instead of a background image.</p>"),le=i("AYRDQw0","Open Dialog With Custom Banner"),rn=p(7,n=>T(n.b,n.h)),Rn=l(6,n=>rn(n,n.e,n.f)),re=e(4,Rn),se=e(5,Rn);function de(n){X(n.a),Z(n.a,{onClick:ue(n),content:le(n)}),E(n.b),z(n.b,o({class:"banner-demo",content:oe(n)})),L(n.b,o({content:ae(n)})),I(n.b,o({a11yText:"Close Dialog"})),B(n.b,o({a11yText:"Back"})),tn(n.b,ie(n)),k(n.b,be(n))}const _e=e(3,n=>{w(n.b,n.d["aria-labelledby"]),x(n.b,n.d.class),v(n.b,n.d.closedby),S(n.b,n.d.footer),H(n.b,n.d.onAnimationEnd),A(n.b,n.d.onCancel),O(n.b,n.d.size),R(n.b,(({"aria-labelledby":t,banner:a,class:s,close:u,closedby:b,content:M,footer:U,header:W,onAnimationEnd:q,onCancel:j,open:P,openChange:V,previous:J,size:K,...d})=>d)(n.d)),re(n,n.d.open),se(n,n.d.openChange)}),be=n=>t=>{rn(n,t)},ue=n=>function(){rn(n,!0)},ce=h("iPGVKvZ",te,ee,de,_e),ge=`import { type Input as DialogInput } from "<evo-dialog>";
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
`,Se={title:"navigation & disclosure/evo-dialog",component:zt,parameters:{docs:{description:{component:Qn}}},argTypes:{open:{type:"boolean",controllable:!0,description:"Whether the dialog is open",table:{defaultValue:{summary:"false"}}},size:{type:"string",options:["regular (default)","wide","narrow","large"],control:"inline-radio",description:"Size variant of the dialog"},closedby:{type:"string",options:["any","closerequest","none"],control:"inline-radio",description:'The [`closedby=` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#closedby) from the native `<dialog>` component. Defaults to `"any"` if not specified',table:{defaultValue:{summary:"any"}}},header:{description:"The header content rendered inside the dialog title (required)","@":{as:{type:"string",description:"The heading element to use for the title. Defaults to `h2`"},"<h2> attributes":{description:"All attributes and event handlers from the heading element will be passed through"}}},footer:{description:"The footer content rendered below the dialog main content area","@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},close:{description:"Close button rendered in the dialog header (required). Pass `a11yText` for the accessible label","@":{a11yText:{type:{name:"string",required:!0},description:"Accessible label for the close button"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},previous:{description:"Optional previous/back button rendered in the header","@":{a11yText:{type:{name:"string",required:!0},description:"Accessible label for the previous button"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},banner:{description:"Optional banner image displayed at the top of the dialog","@":{src:{type:"string",description:"URL of the banner image"},position:{type:"string",description:"Position of the image within the banner area using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},"<dialog> attributes":{description:"All attributes and event handlers from [the native HTML `<dialog>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) will be passed through"}}},c=N(qt,jt),g=N($t,ne),m=N(ce,ge);c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(BannerTemplate, BannerTemplateCode)",...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomBannerTemplate, CustomBannerTemplateCode)",...m.parameters?.docs?.source}}};const Le=["Default","Banner","CustomBanner"];export{g as Banner,m as CustomBanner,c as Default,Le as __namedExportsOrder,Se as default};
