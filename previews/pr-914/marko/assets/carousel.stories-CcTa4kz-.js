import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,D as i,E as a,H as o,M as s,O as ee,Q as te,T as ne,W as re,_t as ie,a as c,at as l,b as ae,c as u,ct as d,et as f,i as p,it as oe,j as m,k as se,nt as ce,o as le,ot as h,r as g,rt as ue,s as _,t as v,tt as y,ut as b,vt as de,w as fe}from"./dom-BJr4MHiD.js";import{i as pe,n as me,o as he,r as ge,t as _e}from"./evo-button-Do0_gdgb.js";import{a as ve,i as ye,n as be,r as xe,t as Se}from"./evo-icon-chevron-right-16-CNES_F8f.js";import{a as Ce,i as we,n as Te,r as Ee,t as De}from"./evo-icon-chevron-left-16-DhsLRjyi.js";import{a as Oe,c as ke,i as Ae,l as je,n as Me,o as Ne,r as Pe,s as Fe,t as Ie,u as Le}from"./evo-icon-pause-24-B9jd__g8.js";var Re;function ze(){return(ze=e((()=>{Re=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-carousel
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A horizontally scrolling list of items with previous and next controls. Continuous by default, where each item sizes itself; discrete with \`itemsPerSlide\`, where a set number fill the view; and a rotator with \`autoplay\`, which advances on a timer and goes back to the start after the last slide.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-carousel)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-carousel)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-carousel/examples)

## Items out of view

Items not wholly in view, peeks included, are \`inert\`: out of the tab order and the accessibility tree, and not clickable. Unlike \`ebay-carousel\`, tab indexes inside items are left alone, so there is no \`data-carousel-tabindex\`.

## Reduced motion

Presses jump rather than scroll, and autoplay starts paused, for users who prefer reduced motion.
`})))()}function Be(){return(Be=e((()=>{})))()}function Ve(){return(Ve=e((()=>{Be()})))()}function He(e,t,n){if(!e&&!n)return{perSlide:0,inView:0};let r=Math.max(Math.floor(e||1),1);return{perSlide:r,inView:r+((e||1)%1||(t||n?0:.1))}}function x(e){at._(e.d,e),xt(e.d,-1),at._(e.g,e),xt(e.g,1),fn(e,!0),mn(e,!1),hn(e,null),gn(e,wn(e)),_n(e,te(e))}var Ue,We,S,C,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,w,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,T,zt,E,Bt,Vt,Ht,Ut,D,Wt,Gt,Kt,O,qt,Jt,Yt,Xt,Zt,Qt,$t,en,k,tn,A,nn,j,rn,an,on,sn,M,N,cn,ln,P,F,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,I,L,R,z,B,V,H,bn,U,W,G,xn,K,Sn,Cn,wn,Tn;function q(){return(q=e((()=>{p(),ve(),Ce(),Le(),Oe(),Ve(),Ue=` b`,We=`<button type=button></button>`,S=((e,t)=>`<div role=group><!><div>${e}<div><ul></ul></div>${t}</div></div>`)(We,We),C=((e,t)=>` D%b D/${e}& D l/${t}&m`)(Ue,Ue),Ge=e=>{Me(e.a),Ie(e.a,{})},Ke=e=>{Fe(e.a),Ne(e.a,{})},qe=e=>{Te(e.a),De(e.a,{})},Je=e=>{be(e.a),Se(e.a,{})},Ye=l(4,e=>u(e.a,[`carousel__item`,(!e._.aa||e.M%e._.aa===0)&&`carousel__item--snap`,e.d])),Xe=o(5,Ye),Ze=e=>{Xe._(e),Qe._(e)},Qe=o(5,e=>_(e.a,`inert`,!!e._.an&&!e._.an[e.M])),$e=r(3,Ye),et=d(`j3`,e=>a(e,`a`)),tt=r(2,e=>{ne(e,`a`,e.c,{class:1,inert:1}),$e(e,e.c?.class),et(e)}),nt=(e,t)=>tt(e,t[0]),rt=r(14,e=>_(e.a,`aria-disabled`,e.o&&`true`)),w=l(5,e=>rt(e,!e._.a7&&(e.e===1?e._.aj:e._.ai)),3),it=se(61,w,0,`j4`),at=i(e=>{it(e),ot(e),st(e),ct(e)}),ot=se(63,w,0,`j5`),st=se(64,w,0,`j6`),ct=se(67,e=>_(e.a,`aria-controls`,e._.ax)),lt=(e,t)=>{(({a11yText:t,class:n,onClick:r,...i})=>dt(e,i))(t),mt(e,t.a11yText),gt(e,t.class),vt(e,t.onClick)},ut=d(`j7`,e=>a(e,`a`)),dt=r(12,e=>{fe(e,`a`,e.m,{type:1,"aria-label":1,"aria-controls":1,"aria-disabled":1,class:1,"on-click":1}),ut(e)}),ft=(e,t)=>_(e.a,`aria-label`,t),pt=l(8,e=>ft(e,e.h===void 0?e.e===1?`Next slide`:`Previous slide`:e.h)),mt=r(7,pt),ht=l(10,e=>u(e.a,[`carousel__control`,e.e===1?`carousel__control--next`:`carousel__control--prev`,e.j])),gt=r(9,ht),_t=d(`j8`,e=>oe(e.a,`click`,function(t,n){e.o||e._.as(e.e),e.l&&e.l(t,n)})),vt=r(11,_t),yt=(e,t)=>lt(e,t||{}),bt=n(0,xe,(e=>`/${e}&`)(ye),Je,Ee,(e=>`/${e}&`)(we),qe),xt=r(4,e=>{bt(e,e.e===1?0:1),pt(e),w(e),ht(e)}),St=(e,t)=>{(({a11yPauseText:t,a11yPlayText:n,class:r,onClick:i,...a})=>kt(e,a))(t),jt(e,t.a11yPlayText),Nt(e,t.a11yPauseText),Pt(e,t.class),It(e,t.onClick)},Ct=f(1,0,e=>St(e,e._.v||{})),wt=e=>{Ct._(e),Dt._(e)},Tt=n(0,ke,(e=>`/${e}&`)(je),Ke,Pe,(e=>`/${e}&`)(Ae),Ge),Et=l(9,e=>_(e.a,`aria-label`,e._.at?e.h:e.i),2),Dt=f(1,0,e=>{Tt(e,+!e._.at),Et(e)}),Ot=d(`j9`,e=>a(e,`a`)),kt=r(6,e=>{fe(e,`a`,e.g,{type:1,"aria-label":1,class:1,"on-click":1}),Ot(e)}),At=r(7,Et),jt=(e,t)=>At(e,t===void 0?`Play carousel`:t),Mt=r(8,Et),Nt=(e,t)=>Mt(e,t===void 0?`Pause carousel`:t),Pt=(e,t)=>u(e.a,[`carousel__playback`,t]),Ft=d(`j10`,e=>oe(e.a,`click`,function(t,n){vn(e._,!e._.at),e.f&&e.f(t,n)})),It=r(5,Ft),Lt=l(37,e=>u(e.f,[`carousel__list`,`carousel__list--snap`,!!e.aa&&`carousel__list--slides`,e.a4===`matte`&&`carousel__list--image-treatment`,e.a4===`large`&&`carousel__list--image-treatment-large`])),Rt=r(30,Lt),T=(e,t)=>Rt(e,t===void 0?`none`:t),zt=(e,t)=>_(e.a,`aria-roledescription`,t),E=(e,t)=>zt(e,t===void 0?`carousel`:t),Bt=re(5,`<li></li>`,` `,Ze,nt),Vt=d(`j11`,e=>{{let t=e.f,n=[],r,i=()=>{let r=t.getBoundingClientRect(),i=Array.from(t.children,e=>{let{left:t,right:n}=e.getBoundingClientRect();return t>r.left-1&&n<r.right+1||t<r.left+1&&n>r.right-1});i.join()!==n.join()&&hn(e,n=i);let a=Math.abs(t.scrollLeft);fn(e,a<1),mn(e,a>t.scrollWidth-t.clientWidth-1)},a=()=>{let t=n.indexOf(!0);t!==-1&&t!==e.af&&cn(e,t)};t.addEventListener(`scroll`,i,{passive:!0,signal:c(e,0)}),`onscrollend`in window?t.addEventListener(`scrollend`,a,{signal:c(e,0)}):t.addEventListener(`scroll`,()=>{clearTimeout(r),r=setTimeout(a,100)},{passive:!0,signal:c(e,0)});let o=new ResizeObserver(i);o.observe(t),e.a6.forEach((e,n)=>o.observe(t.children[n])),c(e,0).onabort=()=>{o.disconnect(),clearTimeout(r)}}}),Ht=l(43,e=>{le(e,0),Vt(e)}),Ut=r(32,e=>{Bt(e,[e.a6]),Ht(e)}),D=(e,t)=>Ut(e,[...t||[]]),Wt=(e,t)=>{an(e,t.perSlide),sn(e,t.inView)},Gt=l(34,e=>Wt(e,He(e.w,e.x,e.a7)),2),Kt=d(`j12`,e=>{if(e.af,e.a7&&!e.at){let t=e.a,n=()=>{let e=document.activeElement;return t.matches(`:hover`)||t.contains(e)&&!e.classList.contains(`carousel__playback`)},r=()=>{n()?i=setTimeout(r,e.a7):e.as(1)},i=setTimeout(r,e.a7);c(e,1).onabort=()=>clearTimeout(i)}}),O=l(58,e=>{le(e,1),Kt(e)},3),qt=r(54,O),Jt=l(51,e=>qt(e,Sn(e))),Yt=n(1,`<button type=button></button>`,` `,wt),Xt=l(48,e=>Yt(e,e.a7&&!(e.ai&&e.aj)?0:1),2),Zt=l(57,e=>_(e.f,`aria-live`,e.a7?e.at?`polite`:`off`:void 0)),Qt=ee(it),$t=d(`j13`,e=>{e.a7&&matchMedia(`(prefers-reduced-motion: reduce)`).matches&&vn(e,!0)}),en=r(33,e=>{Gt(e),Jt(e),O(e),Xt(e),Zt(e),Qt(e),$t(e)}),k=(e,t)=>en(e,t===!0?4e3:t||0),tn=d(`j14`,e=>ue(e,{onMount:function(){e.af&&e.ao(e.aq(e.af),`start`,`instant`)},onUpdate:function(){e.af!==void 0&&e.ao(e.aq(e.af),`start`)}})),A=l(53,tn,2),nn=r(52,A),j=l(40,e=>u(e.a,[`carousel`,e.a0&&`carousel--hidden-scrollbar`,!!e.aa&&`carousel--slides`,!!(e.ac%1)&&`carousel--peek`,e.p]),3),rn=l(46,e=>u(e.e,[`carousel__viewport`,!e.aa&&!e.aj&&`carousel__viewport--mask`])),an=r(36,e=>{nn(e,Cn(e)),j(e),rn(e),Lt(e),Xe(e)}),on=l(39,e=>ae(e.a,[e.q,e.y!=null&&`--carousel-gap: ${typeof e.y==`number`?`${e.y}px`:e.y}`,!!e.ac&&`--carousel-items-in-view: ${e.ac}`]),2),sn=r(38,e=>{j(e),on(e)}),M=r(22,Gt),N=r(23,Gt),cn=ce(41,e=>{Ht(e),A(e),O(e)}),ln=l(11,e=>cn(e,e.j,e.k)),P=r(9,ln),F=r(10,ln),un=l(47,e=>u(e.c,[`carousel__container`,e.ai&&e.aj&&`carousel__container--controls-disabled`])),dn=ee(ot),fn=y(44,e=>{Xt(e),un(e),dn(e)}),pn=ee(st),mn=y(45,e=>{Xt(e),un(e),rn(e),pn(e)}),hn=y(49,Qe),gn=r(50,e=>{A(e),Jt(e)}),_n=r(59,e=>_(e.f,`id`,e.ax)),vn=ce(55,e=>{O(e),Zt(e),Dt(e)}),yn=l(14,e=>vn(e,e.m,e.n)),I=r(12,yn),L=r(13,yn),R=(e,t)=>_(e.a,`aria-label`,t),z=r(15,j),B=r(26,j),V=r(16,on),H=r(24,on),bn=d(`j15`,e=>a(e,`a`)),U=r(29,e=>{fe(e,`a`,e.a3,{role:1,"aria-roledescription":1,"aria-label":1,class:1,style:1}),bn(e)}),W=(e,t)=>yt(e.d,t),G=(e,t)=>yt(e.g,t),xn=(e,t)=>{(({a11yText:t,"aria-roledescription":n,autoplay:r,class:i,gap:a,hiddenScrollbar:o,imageTreatment:s,index:ee,indexChange:te,item:ne,itemsPerSlide:re,next:ie,noPeek:c,paused:l,pausedChange:ae,playback:u,previous:d,style:f,...p})=>U(e,p))(t),P(e,t.index),F(e,t.indexChange),I(e,t.paused),L(e,t.pausedChange),z(e,t.class),V(e,t.style),R(e,t.a11yText),D(e,t.item),W(e,t.previous),G(e,t.next),K(e,t.playback),M(e,t.itemsPerSlide),N(e,t.noPeek),H(e,t.gap),T(e,t.imageTreatment),B(e,t.hiddenScrollbar),k(e,t.autoplay),E(e,t[`aria-roledescription`])},K=r(21,Ct),Sn=e=>function(t){let n=e.f,r=n.querySelectorAll(`:scope > :not([inert])`);if(!r.length)return;let i=t===1?r[r.length-1].nextElementSibling??(e.a7?n.firstElementChild:null):r[0].previousElementSibling??(e.a7?n.lastElementChild:null);e.ao(i,t===1?`start`:`end`)},Cn=e=>function(t){return e.f.children[e.aa?t-t%e.aa:t]},wn=e=>function(t,n,r){if(!(t instanceof HTMLElement))return;let i=e.f,a=getComputedStyle(i).direction===`rtl`;i.scrollTo({left:a===(n===`start`)?t.offsetLeft+t.offsetWidth-i.clientWidth:t.offsetLeft,behavior:r})},h.j2=Sn,h.j1=Cn,h.j0=wn,Tn=v(`j`,S,C,x,xn)})))()}function En(e){x(e.a);let t;de(10,1,1,n=>{t=g(t,{content:kn(e,{1:n})})}),D(e.a,t),R(e.a,`Top products`)}var Dn,On,kn,An,jn;function Mn(){return(Mn=e((()=>{p(),q(),Dn=S,On=(e=>`/${e}&`)(C),kn=s(m(`MXCzTHJ`,`<div class=demo-carousel-card>Card <!></div>`,`Db%`),{1(e){b(e.a,e.b)}}),h.MXCzTHJ=kn,An=r(2,e=>{E(e.a,e.c[`aria-roledescription`]),k(e.a,e.c.autoplay),z(e.a,e.c.class),H(e.a,e.c.gap),B(e.a,e.c.hiddenScrollbar),T(e.a,e.c.imageTreatment),P(e.a,e.c.index),F(e.a,e.c.indexChange),M(e.a,e.c.itemsPerSlide),G(e.a,e.c.next),N(e.a,e.c.noPeek),I(e.a,e.c.paused),L(e.a,e.c.pausedChange),K(e.a,e.c.playback),W(e.a,e.c.previous),V(e.a,e.c.style),U(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:ee,item:te,itemsPerSlide:ne,next:re,noPeek:ie,paused:c,pausedChange:l,playback:ae,previous:u,style:d,...f})=>f)(e.c))}),jn=v(`J32wzXt`,Dn,On,En,An)})))()}var Nn;function Pn(){return(Pn=e((()=>{Nn=`<style>
  .demo-carousel-card {
    align-items: center;
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-50);
    display: flex;
    height: 120px;
    justify-content: center;
    width: 200px;
  }
</style>

<evo-carousel ...input a11yText="Top products">
  <for|i| from=1 to=10>
    <@item>
      <div class="demo-carousel-card">Card \${i}</div>
    </@item>
  </for>
</evo-carousel>
`})))()}function Fn(e){x(e.a);let t;de(12,1,1,n=>{t=g(t,{content:Rn(e,{1:n})})}),D(e.a,t)}var In,Ln,Rn,zn,Bn;function Vn(){return(Vn=e((()=>{p(),q(),In=S,Ln=(e=>`/${e}&`)(C),Rn=s(m(`rLwssvN`,`<div class=demo-carousel-slide>Card <!></div>`,`Db%`),{1(e){b(e.a,e.b)}}),h.rLwssvN=Rn,zn=r(2,e=>{let t={a11yText:`Top products`,itemsPerSlide:3,...e.c};R(e.a,t.a11yText),E(e.a,t[`aria-roledescription`]),k(e.a,t.autoplay),z(e.a,t.class),H(e.a,t.gap),B(e.a,t.hiddenScrollbar),T(e.a,t.imageTreatment),P(e.a,t.index),F(e.a,t.indexChange),M(e.a,t.itemsPerSlide),G(e.a,t.next),N(e.a,t.noPeek),I(e.a,t.paused),L(e.a,t.pausedChange),K(e.a,t.playback),W(e.a,t.previous),V(e.a,t.style),U(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:ee,item:te,itemsPerSlide:ne,next:re,noPeek:ie,paused:c,pausedChange:l,playback:ae,previous:u,style:d,...f})=>f)(t))}),Bn=v(`bsVG05Y`,In,Ln,Fn,zn)})))()}var Hn;function Un(){return(Un=e((()=>{Hn=`<style>
  .demo-carousel-slide {
    align-items: center;
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-50);
    display: flex;
    height: 120px;
    justify-content: center;
  }
</style>

<evo-carousel a11yText="Top products" itemsPerSlide=3 ...input>
  <for|i| from=1 to=12>
    <@item>
      <div class="demo-carousel-slide">Card \${i}</div>
    </@item>
  </for>
</evo-carousel>
`})))()}function Wn(e){me(e.b),_e(e.b,{onClick:$n(e),content:Yn(e)}),me(e.c),_e(e.c,{onClick:Qn(e),content:Jn(e)}),x(e.d);let t;de(12,1,1,n=>{t=g(t,{content:qn(e,{1:n})})}),D(e.d,t),R(e.d,`Top products`),M(e.d,2),F(e.d,Zn(e)),J(e,0)}var Gn,Kn,qn,Jn,Yn,J,Xn,Zn,Qn,$n,er;function tr(){return(tr=e((()=>{p(),he(),q(),Gn=((e,t,n)=>`<p>Showing card <!></p>${e}${t}${n}`)(ge,ge,S),Kn=((e,t,n)=>`Db%l/${e}&/${t}&/${n}&`)(pe,pe,C),qn=s(m(`qDYfmKS`,`<div class=demo-carousel-slide>Card <!></div>`,`Db%`),{1(e){b(e.a,e.b)}}),h.qDYfmKS=qn,Jn=m(`Sdiy4d0`,`Jump to card 9`),Yn=m(`eNUZfFz`,`Back to the start`),J=y(6,e=>{b(e.a,e.g+1),P(e.d,e.g)}),Xn=r(5,e=>{E(e.d,e.f[`aria-roledescription`]),k(e.d,e.f.autoplay),z(e.d,e.f.class),H(e.d,e.f.gap),B(e.d,e.f.hiddenScrollbar),T(e.d,e.f.imageTreatment),G(e.d,e.f.next),N(e.d,e.f.noPeek),I(e.d,e.f.paused),L(e.d,e.f.pausedChange),K(e.d,e.f.playback),W(e.d,e.f.previous),V(e.d,e.f.style),U(e.d,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:ee,item:te,itemsPerSlide:ne,next:re,noPeek:ie,paused:c,pausedChange:l,playback:ae,previous:u,style:d,...f})=>f)(e.f))}),Zn=e=>t=>{J(e,t)},Qn=e=>function(){J(e,8)},$n=e=>function(){J(e,0)},h.o6yWID8=Zn,h.VtTFyR4=Qn,h.yWULTcZ=$n,er=v(`m8AKf3F`,Gn,Kn,Wn,Xn)})))()}var nr;function rr(){return(rr=e((()=>{nr=`<style>
  .demo-carousel-slide {
    align-items: center;
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-50);
    display: flex;
    height: 120px;
    justify-content: center;
  }
</style>

<let/index=0>

<p>Showing card \${index + 1}</p>

<evo-button onClick() {
  index = 0;
}>
  Back to the start
</evo-button>
<evo-button onClick() {
  index = 8;
}>
  Jump to card 9
</evo-button>

<evo-carousel ...input a11yText="Top products" itemsPerSlide=2 index:=index>
  <for|i| from=1 to=12>
    <@item>
      <div class="demo-carousel-slide">Card \${i}</div>
    </@item>
  </for>
</evo-carousel>
`})))()}function ir(e){x(e.a);let t;ie([`aztec-pyramid`,`falls`,`mountain`,`shoes`,`tall-cat`,`wide-cat`],n=>{t=g(t,{class:`demo-carousel-image`,content:sr(e,{1:n})})}),D(e.a,t),R(e.a,`Travel photos`),T(e.a,`matte`)}var ar,or,sr,cr,lr;function ur(){return(ur=e((()=>{p(),q(),ar=S,or=(e=>`/${e}&`)(C),sr=s(m(`RwLvRXr`,`<img>`,` `),{1(e){_(e.a,`alt`,e.b),_(e.a,`src`,`https://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/${e.b}.jpeg`)}}),h.RwLvRXr=sr,cr=r(2,e=>{E(e.a,e.c[`aria-roledescription`]),k(e.a,e.c.autoplay),z(e.a,e.c.class),H(e.a,e.c.gap),B(e.a,e.c.hiddenScrollbar),P(e.a,e.c.index),F(e.a,e.c.indexChange),M(e.a,e.c.itemsPerSlide),G(e.a,e.c.next),N(e.a,e.c.noPeek),I(e.a,e.c.paused),L(e.a,e.c.pausedChange),K(e.a,e.c.playback),W(e.a,e.c.previous),V(e.a,e.c.style),U(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:ee,item:te,itemsPerSlide:ne,next:re,noPeek:ie,paused:c,pausedChange:l,playback:ae,previous:u,style:d,...f})=>f)(e.c))}),lr=v(`uBJGMWm`,ar,or,ir,cr)})))()}var dr;function fr(){return(fr=e((()=>{dr=`<style>
  .demo-carousel-image {
    height: 120px;
    width: 200px;
  }
</style>

<evo-carousel ...input a11yText="Travel photos" imageTreatment="matte">
  <for|name|
    of=["aztec-pyramid", "falls", "mountain", "shoes", "tall-cat", "wide-cat"]
  >
    <@item class="demo-carousel-image">
      <img
        alt=name
        src=\`https://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/\${name}.jpeg\`
      >
    </@item>
  </for>
</evo-carousel>
`})))()}function pr(e){x(e.b);let t;de(4,1,1,n=>{t=g(t,{content:gr(e,{1:n})})}),D(e.b,t),L(e.b,yr(e)),_r(e,!1)}var mr,hr,gr,_r,vr,yr,br;function xr(){return(xr=e((()=>{p(),q(),mr=(e=>`<p>The carousel is <!>.</p>${e}`)(S),hr=(e=>`Db%l/${e}&`)(C),gr=s(m(`LiSZLUw`,`<div class=demo-carousel-banner>Slide <!></div>`,`Db%`),{1(e){b(e.a,e.b)}}),h.LiSZLUw=gr,_r=y(4,e=>{b(e.a,e.e?`paused`:`playing`),I(e.b,e.e)}),vr=r(3,e=>{let t={a11yText:`Featured deals`,autoplay:!0,...e.d};R(e.b,t.a11yText),E(e.b,t[`aria-roledescription`]),k(e.b,t.autoplay),z(e.b,t.class),H(e.b,t.gap),B(e.b,t.hiddenScrollbar),T(e.b,t.imageTreatment),P(e.b,t.index),F(e.b,t.indexChange),M(e.b,t.itemsPerSlide),G(e.b,t.next),N(e.b,t.noPeek),K(e.b,t.playback),W(e.b,t.previous),V(e.b,t.style),U(e.b,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:ee,item:te,itemsPerSlide:ne,next:re,noPeek:ie,paused:c,pausedChange:l,playback:ae,previous:u,style:d,...f})=>f)(t))}),yr=e=>t=>{_r(e,t)},h.s3gXTPR=yr,br=v(`pj41iw2`,mr,hr,pr,vr)})))()}var Sr;function Cr(){return(Cr=e((()=>{Sr=`<style>
  .demo-carousel-banner {
    align-items: center;
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-50);
    display: flex;
    font-size: 24px;
    height: 240px;
    justify-content: center;
  }
</style>

<let/paused=false>

<p>The carousel is \${paused ? "paused" : "playing"}.</p>

<evo-carousel a11yText="Featured deals" autoplay ...input paused:=paused>
  <for|i| from=1 to=4>
    <@item>
      <div class="demo-carousel-banner">Slide \${i}</div>
    </@item>
  </for>
</evo-carousel>
`})))()}var wr,Y,X,Z,Q,$,Tr;function Er(){return(Er=e((()=>{ze(),q(),Mn(),Pn(),Vn(),Un(),tr(),rr(),ur(),fr(),xr(),Cr(),wr={title:`navigation & disclosure/evo-carousel`,component:Tn,parameters:{docs:{description:{component:Re}}},argTypes:{a11yText:{type:{name:`string`,required:!0},control:`text`,description:"The accessible name for the carousel. Pass `null` explicitly _only_ if alternative accessibility information is present",table:{category:`accessibility attributes`}},itemsPerSlide:{type:`number`,control:`number`,description:"Makes the carousel discrete: this many items fill the view and each press moves by that many. A fraction sets how much of the next item peeks in; a whole number peeks a tenth of one unless `noPeek` is set. Leave unset for a continuous carousel where each item sizes itself"},noPeek:{type:`boolean`,description:"With a whole `itemsPerSlide`, fill the view exactly instead of peeking a tenth of the next item",table:{defaultValue:{summary:`false`}}},gap:{control:`text`,description:`Space between items, as a number of pixels or any CSS length`,table:{defaultValue:{summary:`16px`}}},imageTreatment:{type:`string`,options:[`none`,`matte`,`large`],control:`inline-radio`,description:`Applies the image treatment styles, at the default or the large corner radius`,table:{defaultValue:{summary:`none`}}},hiddenScrollbar:{type:`boolean`,description:`Hide the scrollbar that otherwise shows on hover`,table:{defaultValue:{summary:`false`}}},autoplay:{control:`number`,description:"Advance on a timer of this many milliseconds (`true` for 4000), going back to the start after the last slide. Implies one item per slide unless `itemsPerSlide` says otherwise. Holds still while hovered or focused, and starts paused for users who prefer reduced motion"},paused:{controllable:!0,type:`boolean`,description:`Whether autoplay is paused`,table:{defaultValue:{summary:`false`}}},index:{controllable:!0,type:`number`,control:`number`,description:`Zero-based index of the item at the leading edge. A press reports where it is headed straight away; scrolling by hand reports once it comes to rest. Setting it scrolls there, to the start of the slide for a discrete carousel`},item:{description:`An item in the carousel`,"@":{"<li> attributes":{description:"All attributes and event handlers from [the native HTML `<li>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) will be passed through"}}},previous:{description:`The control that scrolls backwards`,"@":{a11yText:{type:`string`,description:`Accessible label for the previous control`,table:{defaultValue:{summary:`Previous slide`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},next:{description:`The control that scrolls forwards`,"@":{a11yText:{type:`string`,description:`Accessible label for the next control`,table:{defaultValue:{summary:`Next slide`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},playback:{description:`The control that pauses and plays autoplay`,"@":{a11yPlayText:{type:`string`,description:`Accessible label while paused`,table:{defaultValue:{summary:`Play carousel`}}},a11yPauseText:{type:`string`,description:`Accessible label while playing`,table:{defaultValue:{summary:`Pause carousel`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"aria-roledescription":{description:`a11y role description for the carousel`,table:{defaultValue:{summary:`carousel`},category:`accessibility attributes`},control:`text`},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},Y=t(jn,Nn),X=t(Bn,Hn),Z=t(er,nr),Q=t(lr,dr),$=t(br,Sr),Tr=[`Continuous`,`Discrete`,`Controlled`,`ImageTreatment`,`Autoplay`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ContinuousTemplate, ContinuousTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DiscreteTemplate, DiscreteTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ImageTreatmentTemplate, ImageTreatmentTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(AutoplayTemplate, AutoplayTemplateCode)`,...$.parameters?.docs?.source}}}})))()}Er();export{$ as Autoplay,Y as Continuous,Z as Controlled,X as Discrete,Q as ImageTreatment,Tr as __namedExportsOrder,wr as default};