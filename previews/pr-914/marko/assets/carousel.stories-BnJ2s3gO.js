import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,D as i,E as a,H as o,M as s,O as c,Q as l,T as ee,W as te,_t as ne,a as u,at as d,b as re,c as f,ct as p,et as m,i as h,it as ie,j as g,k as ae,nt as oe,o as se,ot as _,r as v,rt as ce,s as y,t as b,tt as x,ut as S,vt as le,w as ue}from"./dom-BJr4MHiD.js";import{i as de,n as fe,o as pe,r as me,t as he}from"./evo-button-B8-2LgAi.js";import{a as ge,i as _e,n as ve,r as ye,t as be}from"./evo-icon-chevron-right-16-DGlzy7In.js";import{a as xe,i as Se,n as Ce,r as we,t as Te}from"./evo-icon-chevron-left-16-DzlVw-6y.js";import{a as Ee,c as De,i as Oe,l as ke,n as Ae,o as je,r as Me,s as Ne,t as Pe,u as Fe}from"./evo-icon-pause-24-HmqJJ1ih.js";var Ie;function Le(){return(Le=e((()=>{Ie=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-carousel
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A horizontally scrolling list of items with previous and next controls. Continuous by default, where each item sizes itself; discrete with \`itemsPerSlide\`, where a set number fill the view; and a rotator with \`autoplay\`, which advances on a timer and goes round from the last slide to the first.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-carousel)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-carousel)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-carousel/examples)

## Items out of view

Items not wholly in view, peeks included, are \`inert\`: out of the tab order and the accessibility tree, and not clickable. Unlike \`ebay-carousel\`, tab indexes inside items are left alone, so there is no \`data-carousel-tabindex\`.

## Reduced motion

Presses jump rather than scroll, and autoplay starts paused, for users who prefer reduced motion.
`})))()}function Re(){return(Re=e((()=>{})))()}function ze(){return(ze=e((()=>{Re()})))()}function Be(e,t,n){if(!e&&!n)return 0;let r=(e||1)%1||(t||n?0:.1);return Math.max(Math.floor(e||1),1)+r}function C(e){tt._(e.d,e),_t(e.d,-1),tt._(e.f,e),_t(e.f,1),on(e,!0),cn(e,!1),ln(e,null),fn(e,Cn(e)),pn(e,wn(e)),mn(e,Tn(e)),hn(e,En(e)),gn(e,l(e))}var Ve,He,w,T,E,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,D,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,O,Ft,k,It,Lt,Rt,zt,A,Bt,Vt,Ht,Ut,Wt,Gt,Kt,j,qt,Jt,Yt,Xt,Zt,Qt,M,N,P,$t,en,tn,nn,F,I,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,L,R,z,B,V,H,U,yn,W,G,K,bn,q,xn,Sn,Cn,wn,Tn,En,Dn;function J(){return(J=e((()=>{h(),ge(),xe(),Fe(),Ee(),ze(),Ve=` b`,He=`<button type=button></button>`,w=((e,t)=>`<div role=group><!><div>${e}<div class=carousel__viewport><ul></ul></div>${t}</div></div>`)(He,He),T=((e,t)=>` D%b D/${e}&D l/${t}&m`)(Ve,Ve),E=new WeakMap,Ue=6.64/.45,We=e=>{Ae(e.a),Pe(e.a,{})},Ge=e=>{Ne(e.a),je(e.a,{})},Ke=e=>{Ce(e.a),Te(e.a,{})},qe=e=>{ve(e.a),be(e.a,{})},Je=o(4,e=>y(e.a,`inert`,!!e._.ai&&!e._.ai[e.M])),Ye=Je,Xe=p(`j6`,e=>a(e,`a`)),Ze=r(2,e=>{ee(e,`a`,e.c,{inert:1}),Xe(e)}),Qe=(e,t)=>Ze(e,t[0]),$e=r(14,e=>y(e.a,`aria-disabled`,e.o&&`true`)),D=d(5,e=>$e(e,!e._.a6&&(e.e===1?e._.af:e._.ae)),3),et=ae(61,D,0,`j7`),tt=i(e=>{et(e),nt(e),rt(e),it(e)}),nt=ae(62,D,0,`j8`),rt=ae(63,D,0,`j9`),it=ae(66,e=>y(e.a,`aria-controls`,e._.ax)),at=(e,t)=>{(({a11yText:t,class:n,onClick:r,...i})=>st(e,i))(t),ut(e,t.a11yText),ft(e,t.class),mt(e,t.onClick)},ot=p(`j10`,e=>a(e,`a`)),st=r(12,e=>{ue(e,`a`,e.m,{type:1,"aria-label":1,"aria-controls":1,"aria-disabled":1,class:1,"on-click":1}),ot(e)}),ct=(e,t)=>y(e.a,`aria-label`,t),lt=d(8,e=>ct(e,e.h===void 0?e.e===1?`Next slide`:`Previous slide`:e.h)),ut=r(7,lt),dt=d(10,e=>f(e.a,[`carousel__control`,e.e===1?`carousel__control--next`:`carousel__control--prev`,e.j])),ft=r(9,dt),pt=p(`j11`,e=>ie(e.a,`click`,function(t,n){e.o||e._.as(e.e),e.l&&e.l(t,n)})),mt=r(11,pt),ht=(e,t)=>at(e,t||{}),gt=n(0,ye,(e=>`/${e}&`)(_e),qe,we,(e=>`/${e}&`)(Se),Ke),_t=r(4,e=>{gt(e,e.e===1?0:1),lt(e),D(e),dt(e)}),vt=(e,t)=>{(({a11yPauseText:t,a11yPlayText:n,class:r,onClick:i,...a})=>Tt(e,a))(t),Dt(e,t.a11yPlayText),kt(e,t.a11yPauseText),At(e,t.class),Mt(e,t.onClick)},yt=m(1,0,e=>vt(e,e._.u||{})),bt=e=>{yt._(e),Ct._(e)},xt=n(0,De,(e=>`/${e}&`)(ke),Ge,Me,(e=>`/${e}&`)(Oe),We),St=d(9,e=>y(e.a,`aria-label`,e._.at?e.h:e.i),2),Ct=m(1,0,e=>{xt(e,+!e._.at),St(e)}),wt=p(`j12`,e=>a(e,`a`)),Tt=r(6,e=>{ue(e,`a`,e.g,{type:1,"aria-label":1,class:1,"on-click":1}),wt(e)}),Et=r(7,St),Dt=(e,t)=>Et(e,t===void 0?`Play carousel`:t),Ot=r(8,St),kt=(e,t)=>Ot(e,t===void 0?`Pause carousel`:t),At=(e,t)=>f(e.a,[`carousel__playback`,t]),jt=p(`j13`,e=>ie(e.a,`click`,function(t,n){_n(e._,!e._.at),e.f&&e.f(t,n)})),Mt=r(5,jt),Nt=d(35,e=>f(e.e,[`carousel__list`,`carousel__list--snap`,!!e.a8&&`carousel__list--slides`,e.a3===`matte`&&`carousel__list--image-treatment`,e.a3===`large`&&`carousel__list--image-treatment-large`])),Pt=r(29,Nt),O=(e,t)=>Pt(e,t===void 0?`none`:t),Ft=(e,t)=>y(e.a,`aria-roledescription`,t),k=(e,t)=>Ft(e,t===void 0?`carousel`:t),It=te(4,`<li></li>`,` `,Ye,Qe),Lt=p(`j14`,e=>{{let t=e.e,n=[],r,i,a=()=>{let r=t.getBoundingClientRect(),i=Array.from(t.children,e=>{let{left:t,right:n}=e.getBoundingClientRect();return t>r.left-1&&n<r.right+1||t<r.left+1&&n>r.right-1});i.join()!==n.join()&&ln(e,n=i);let a=Math.abs(t.scrollLeft);on(e,a<1),cn(e,a>t.scrollWidth-t.clientWidth-1)};t.addEventListener(`scroll`,a,{passive:!0,signal:u(e,0)}),t.addEventListener(`scrollend`,()=>{if(E.has(t))return;a();let i=n.indexOf(!0),o=Array.from(t.children).filter(e=>e.style.order);o.length&&(o.forEach(e=>e.style.order=``),e.am(i,`instant`)),i!==-1&&i!==e.ac&&i!==r&&tn(e,r=i)},{signal:u(e,0)}),`onscrollend`in window||t.addEventListener(`scroll`,()=>{clearTimeout(i),i=setTimeout(()=>t.dispatchEvent(new Event(`scrollend`)),100)},{passive:!0,signal:u(e,0)});let o=new ResizeObserver(a);o.observe(t),e.a5.forEach((e,n)=>o.observe(t.children[n])),u(e,0).onabort=()=>{o.disconnect(),clearTimeout(i)}}}),Rt=d(50,e=>{se(e,0),Lt(e)},2),zt=r(31,e=>{It(e,[e.a5]),Rt(e)}),A=(e,t)=>zt(e,[...t||[]]),Bt=d(36,e=>f(e.a,[`carousel`,e.z&&`carousel--hidden-scrollbar`,!!e.a8&&`carousel--slides`,!!(e.a8%1)&&`carousel--peek`,e.o]),2),Vt=d(37,e=>re(e.a,[e.p,e.x!=null&&`--carousel-gap: ${typeof e.x==`number`?`${e.x}px`:e.x}`,!!e.a8&&`--carousel-items-in-view: ${e.a8}`]),2),Ht=r(34,e=>{Bt(e),Vt(e),Nt(e)}),Ut=d(33,e=>Ht(e,Be(e.v,e.w,e.a6)),2),Wt=p(`j15`,e=>{if(e.a6&&!e.at){let t=e.a,n=()=>{let e=document.activeElement;return t.matches(`:hover`)||t.contains(e)&&!e.classList.contains(`carousel__playback`)},r,i=()=>{clearTimeout(r),r=setTimeout(()=>n()?i():e.as(1),e.a6)};e.e.addEventListener(`scrollend`,i,{signal:u(e,1)}),i(),u(e,1).onabort=()=>clearTimeout(r)}}),Gt=d(58,e=>{se(e,1),Wt(e)},2),Kt=r(54,Gt),j=d(53,e=>Kt(e,xn(e)),4),qt=n(1,`<button type=button></button>`,` `,bt),Jt=d(43,e=>qt(e,e.a6&&!(e.ae&&e.af)?0:1),2),Yt=d(57,e=>y(e.e,`aria-live`,e.a6?e.at?`polite`:`off`:void 0)),Xt=c(et),Zt=p(`j16`,e=>{e.a6&&matchMedia(`(prefers-reduced-motion: reduce)`).matches&&_n(e,!0)}),Qt=r(32,e=>{Ut(e),j(e),Gt(e),Jt(e),Yt(e),Xt(e),Zt(e)}),M=(e,t)=>Qt(e,t===!0?4e3:t||0),N=r(21,Ut),P=r(22,Ut),$t=p(`j17`,e=>ce(e,{onMount:function(){e.ac&&e.am(e.ac,`instant`)},onUpdate:function(){let t=e.e;e.ac!==void 0&&t.children[e.ac]!==t.querySelector(`:scope > :not([inert])`)&&e.am(e.ac)}})),en=d(49,$t),tn=oe(38,e=>{Rt(e),en(e)}),nn=d(10,e=>tn(e,e.i,e.j)),F=r(8,nn),I=r(9,nn),rn=d(42,e=>f(e.c,[`carousel__container`,e.ae&&e.af&&`carousel__container--controls-disabled`])),an=c(nt),on=x(40,e=>{Jt(e),rn(e),an(e)}),sn=c(rt),cn=x(41,e=>{Jt(e),rn(e),sn(e)}),ln=x(44,Je),un=r(48,e=>{Rt(e),en(e)}),dn=d(47,e=>un(e,Sn(e))),fn=r(45,e=>{dn(e),j(e)}),pn=r(46,e=>{dn(e),j(e)}),mn=r(51,j),hn=r(52,j),gn=r(59,e=>y(e.e,`id`,e.ax)),_n=oe(55,e=>{Gt(e),Yt(e),Ct(e)}),vn=d(13,e=>_n(e,e.l,e.m)),L=r(11,vn),R=r(12,vn),z=(e,t)=>y(e.a,`aria-label`,t),B=r(14,Bt),V=r(25,Bt),H=r(15,Vt),U=r(23,Vt),yn=p(`j18`,e=>a(e,`a`)),W=r(28,e=>{ue(e,`a`,e.a2,{role:1,"aria-roledescription":1,"aria-label":1,class:1,style:1}),yn(e)}),G=(e,t)=>ht(e.d,t),K=(e,t)=>ht(e.f,t),bn=(e,t)=>{(({a11yText:t,"aria-roledescription":n,autoplay:r,class:i,gap:a,hiddenScrollbar:o,imageTreatment:s,index:c,indexChange:l,item:ee,itemsPerSlide:te,next:ne,noPeek:u,paused:d,pausedChange:re,playback:f,previous:p,style:m,...h})=>W(e,h))(t),F(e,t.index),I(e,t.indexChange),L(e,t.paused),R(e,t.pausedChange),B(e,t.class),H(e,t.style),z(e,t.a11yText),A(e,t.item),G(e,t.previous),K(e,t.next),q(e,t.playback),N(e,t.itemsPerSlide),P(e,t.noPeek),U(e,t.gap),O(e,t.imageTreatment),V(e,t.hiddenScrollbar),M(e,t.autoplay),k(e,t[`aria-roledescription`])},q=r(20,yt),xn=e=>function(t){let n=e.e,r=n.clientWidth,i=E.get(n),a=i?i.to:Math.abs(n.scrollLeft),o=e.aj(),s=()=>t===1?o.find(e=>e.end>a+r+1):o.findLast(e=>e.start<a-1);if(e.a6&&!s()){let i=Math.abs(n.scrollLeft),s=o.filter(e=>t===1?e.end<i+1:e.start>i+r-1);if(!(s.length>0&&s.at(-1).end-s[0].start>r-1)){e.ak(t===1?0:1/0);return}let c=o.find(e=>e.end>i+1);e.ap(s.map(({el:e})=>e),t),o=e.aj();let l=o.find(({el:e})=>e===c.el).start-c.start;e.aq(l),a+=l}let c=s();c&&e.ak(t===1?c.start:o.find(({start:e})=>e>c.end-r-1).start)},Sn=e=>function(t,n){let r=e.aj().find(({el:n})=>n===e.e.children[t]);r&&e.ak(r.start,n)},Cn=e=>function(){let t=e.e,n=getComputedStyle(t).direction===`rtl`,r=t.getBoundingClientRect(),i=Math.abs(t.scrollLeft);return Array.from(t.children,e=>{let t=e.getBoundingClientRect(),a=i+(n?r.right-t.right:t.left-r.left);return{el:e,start:a,end:a+t.width}}).sort((e,t)=>e.start-t.start)},wn=e=>function(t,n){let r=e.e,i=getComputedStyle(r).direction===`rtl`?-1:1,a=Math.max(Math.min(t,r.scrollWidth-r.clientWidth),0),o=Math.abs(r.scrollLeft),s=E.get(r),c=()=>{E.delete(r),r.style.scrollSnapType=``};if(n===`instant`||!s&&Math.abs(a-o)<1||matchMedia(`(prefers-reduced-motion: reduce)`).matches)c(),r.scrollTo({left:i*a,behavior:`instant`});else if(s)s.to=a;else{let e={to:a,at:o,speed:0,time:performance.now()};E.set(r,e),r.style.scrollSnapType=`none`,requestAnimationFrame(function t(n){if(E.get(r)!==e)return;if(Math.abs(Math.abs(r.scrollLeft)-e.at)>2)return c();let a=Math.max(Math.min(n-e.time,50),0)/1e3,o=e.to-e.at,s=Ue*o-e.speed,l=Math.exp(-14.755555555555555*a),ee=(o+s*a)*l,te=Math.abs(ee)<.5&&Math.abs(e.speed)<60;e.speed=(Ue*(o+s*a)-s)*l,e.at=te?e.to:e.to-ee,e.time=n,te&&c(),r.scrollTo({left:i*e.at,behavior:`instant`}),te?r.dispatchEvent(new Event(`scrollend`)):requestAnimationFrame(t)})}},Tn=e=>function(t,n){let r=Array.from(e.e.children,e=>Number(e.style.order)),i=n===1?Math.max(...r):Math.min(...r);(n===1?t:[...t].reverse()).forEach((e,t)=>e.style.order=`${i+n*(t+1)}`)},En=e=>function(t){let n=e.e,r=E.get(n);r&&(r.at+=t,r.to+=t),n.scrollTo({left:(getComputedStyle(n).direction===`rtl`?-1:1)*(Math.abs(n.scrollLeft)+t),behavior:`instant`})},_.j5=xn,_.j2=Sn,_.j0=Cn,_.j1=wn,_.j3=Tn,_.j4=En,Dn=b(`j`,w,T,C,bn)})))()}function On(e){C(e.a);let t;le(10,1,1,n=>{t=v(t,{content:jn(e,{1:n})})}),A(e.a,t),z(e.a,`Top products`)}var kn,An,jn,Mn,Nn;function Pn(){return(Pn=e((()=>{h(),J(),kn=w,An=(e=>`/${e}&`)(T),jn=s(g(`MXCzTHJ`,`<div class=demo-carousel-card>Card <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.MXCzTHJ=jn,Mn=r(2,e=>{k(e.a,e.c[`aria-roledescription`]),M(e.a,e.c.autoplay),B(e.a,e.c.class),U(e.a,e.c.gap),V(e.a,e.c.hiddenScrollbar),O(e.a,e.c.imageTreatment),F(e.a,e.c.index),I(e.a,e.c.indexChange),N(e.a,e.c.itemsPerSlide),K(e.a,e.c.next),P(e.a,e.c.noPeek),L(e.a,e.c.paused),R(e.a,e.c.pausedChange),q(e.a,e.c.playback),G(e.a,e.c.previous),H(e.a,e.c.style),W(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(e.c))}),Nn=b(`J32wzXt`,kn,An,On,Mn)})))()}var Fn;function In(){return(In=e((()=>{Fn=`<style>
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
`})))()}function Ln(e){C(e.a);let t;le(12,1,1,n=>{t=v(t,{content:Bn(e,{1:n})})}),A(e.a,t)}var Rn,zn,Bn,Vn,Hn;function Un(){return(Un=e((()=>{h(),J(),Rn=w,zn=(e=>`/${e}&`)(T),Bn=s(g(`rLwssvN`,`<div class=demo-carousel-slide>Card <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.rLwssvN=Bn,Vn=r(2,e=>{let t={a11yText:`Top products`,itemsPerSlide:3,...e.c};z(e.a,t.a11yText),k(e.a,t[`aria-roledescription`]),M(e.a,t.autoplay),B(e.a,t.class),U(e.a,t.gap),V(e.a,t.hiddenScrollbar),O(e.a,t.imageTreatment),F(e.a,t.index),I(e.a,t.indexChange),N(e.a,t.itemsPerSlide),K(e.a,t.next),P(e.a,t.noPeek),L(e.a,t.paused),R(e.a,t.pausedChange),q(e.a,t.playback),G(e.a,t.previous),H(e.a,t.style),W(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(t))}),Hn=b(`bsVG05Y`,Rn,zn,Ln,Vn)})))()}var Wn;function Gn(){return(Gn=e((()=>{Wn=`<style>
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
`})))()}function Kn(e){fe(e.b),he(e.b,{onClick:nr(e),content:Zn(e)}),fe(e.c),he(e.c,{onClick:tr(e),content:Xn(e)}),C(e.d);let t;le(12,1,1,n=>{t=v(t,{content:Yn(e,{1:n})})}),A(e.d,t),z(e.d,`Top products`),N(e.d,2),I(e.d,er(e)),Qn(e,0)}var qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr;function ir(){return(ir=e((()=>{h(),pe(),J(),qn=((e,t,n)=>`<p>Showing card <!></p>${e}${t}${n}`)(me,me,w),Jn=((e,t,n)=>`Db%l/${e}&/${t}&/${n}&`)(de,de,T),Yn=s(g(`qDYfmKS`,`<div class=demo-carousel-slide>Card <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.qDYfmKS=Yn,Xn=g(`Sdiy4d0`,`Jump to card 9`),Zn=g(`eNUZfFz`,`Back to the start`),Qn=x(6,e=>{S(e.a,e.g+1),F(e.d,e.g)}),$n=r(5,e=>{k(e.d,e.f[`aria-roledescription`]),M(e.d,e.f.autoplay),B(e.d,e.f.class),U(e.d,e.f.gap),V(e.d,e.f.hiddenScrollbar),O(e.d,e.f.imageTreatment),K(e.d,e.f.next),P(e.d,e.f.noPeek),L(e.d,e.f.paused),R(e.d,e.f.pausedChange),q(e.d,e.f.playback),G(e.d,e.f.previous),H(e.d,e.f.style),W(e.d,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(e.f))}),er=e=>t=>{Qn(e,t)},tr=e=>function(){Qn(e,8)},nr=e=>function(){Qn(e,0)},_.o6yWID8=er,_.VtTFyR4=tr,_.yWULTcZ=nr,rr=b(`m8AKf3F`,qn,Jn,Kn,$n)})))()}var ar;function or(){return(or=e((()=>{ar=`<style>
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
`})))()}function sr(e){C(e.a);let t;ne([`aztec-pyramid`,`falls`,`mountain`,`shoes`,`tall-cat`,`wide-cat`],n=>{t=v(t,{class:`demo-carousel-image`,content:ur(e,{1:n})})}),A(e.a,t),z(e.a,`Travel photos`),O(e.a,`matte`)}var cr,lr,ur,dr,fr;function pr(){return(pr=e((()=>{h(),J(),cr=w,lr=(e=>`/${e}&`)(T),ur=s(g(`RwLvRXr`,`<img>`,` `),{1(e){y(e.a,`alt`,e.b),y(e.a,`src`,`https://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/${e.b}.jpeg`)}}),_.RwLvRXr=ur,dr=r(2,e=>{k(e.a,e.c[`aria-roledescription`]),M(e.a,e.c.autoplay),B(e.a,e.c.class),U(e.a,e.c.gap),V(e.a,e.c.hiddenScrollbar),F(e.a,e.c.index),I(e.a,e.c.indexChange),N(e.a,e.c.itemsPerSlide),K(e.a,e.c.next),P(e.a,e.c.noPeek),L(e.a,e.c.paused),R(e.a,e.c.pausedChange),q(e.a,e.c.playback),G(e.a,e.c.previous),H(e.a,e.c.style),W(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(e.c))}),fr=b(`uBJGMWm`,cr,lr,sr,dr)})))()}var mr;function hr(){return(hr=e((()=>{mr=`<style>
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
`})))()}function gr(e){C(e.b);let t;le(4,1,1,n=>{t=v(t,{content:yr(e,{1:n})})}),A(e.b,t),R(e.b,Sr(e)),br(e,!1)}var _r,vr,yr,br,xr,Sr,Cr;function wr(){return(wr=e((()=>{h(),J(),_r=(e=>`<p>The carousel is <!>.</p>${e}`)(w),vr=(e=>`Db%l/${e}&`)(T),yr=s(g(`LiSZLUw`,`<div class=demo-carousel-banner>Slide <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.LiSZLUw=yr,br=x(4,e=>{S(e.a,e.e?`paused`:`playing`),L(e.b,e.e)}),xr=r(3,e=>{let t={a11yText:`Featured deals`,autoplay:!0,...e.d};z(e.b,t.a11yText),k(e.b,t[`aria-roledescription`]),M(e.b,t.autoplay),B(e.b,t.class),U(e.b,t.gap),V(e.b,t.hiddenScrollbar),O(e.b,t.imageTreatment),F(e.b,t.index),I(e.b,t.indexChange),N(e.b,t.itemsPerSlide),K(e.b,t.next),P(e.b,t.noPeek),q(e.b,t.playback),G(e.b,t.previous),H(e.b,t.style),W(e.b,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(t))}),Sr=e=>t=>{br(e,t)},_.s3gXTPR=Sr,Cr=b(`pj41iw2`,_r,vr,gr,xr)})))()}var Tr;function Er(){return(Er=e((()=>{Tr=`<style>
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
`})))()}var Dr,Y,X,Z,Q,$,Or;function kr(){return(kr=e((()=>{Le(),J(),Pn(),In(),Un(),Gn(),ir(),or(),pr(),hr(),wr(),Er(),Dr={title:`navigation & disclosure/evo-carousel`,component:Dn,parameters:{docs:{description:{component:Ie}}},argTypes:{a11yText:{type:{name:`string`,required:!0},control:`text`,description:"The accessible name for the carousel. Pass `null` explicitly _only_ if alternative accessibility information is present",table:{category:`accessibility attributes`}},itemsPerSlide:{type:`number`,control:`number`,description:"Makes the carousel discrete: this many items fill the view and each press moves by that many. A fraction sets how much of the next item peeks in; a whole number peeks a tenth of one unless `noPeek` is set. Leave unset for a continuous carousel where each item sizes itself"},noPeek:{type:`boolean`,description:"With a whole `itemsPerSlide`, fill the view exactly instead of peeking a tenth of the next item",table:{defaultValue:{summary:`false`}}},gap:{control:`text`,description:`Space between items, as a number of pixels or any CSS length`,table:{defaultValue:{summary:`16px`}}},imageTreatment:{type:`string`,options:[`none`,`matte`,`large`],control:`inline-radio`,description:`Applies the image treatment styles, at the default or the large corner radius`,table:{defaultValue:{summary:`none`}}},hiddenScrollbar:{type:`boolean`,description:`Hide the scrollbar that otherwise shows on hover`,table:{defaultValue:{summary:`false`}}},autoplay:{control:`number`,description:"Advance on a timer of this many milliseconds (`true` for 4000), going round from the last slide to the first. Implies one item per slide unless `itemsPerSlide` says otherwise. Holds still while hovered or focused, and starts paused for users who prefer reduced motion"},paused:{controllable:!0,type:`boolean`,description:`Whether autoplay is paused`,table:{defaultValue:{summary:`false`}}},index:{controllable:!0,type:`number`,control:`number`,description:`Zero-based index of the first item wholly in view, reported once scrolling comes to rest. Setting it scrolls that item to the leading edge`},item:{description:`An item in the carousel`,"@":{"<li> attributes":{description:"All attributes and event handlers from [the native HTML `<li>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) will be passed through"}}},previous:{description:`The control that scrolls backwards`,"@":{a11yText:{type:`string`,description:`Accessible label for the previous control`,table:{defaultValue:{summary:`Previous slide`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},next:{description:`The control that scrolls forwards`,"@":{a11yText:{type:`string`,description:`Accessible label for the next control`,table:{defaultValue:{summary:`Next slide`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},playback:{description:`The control that pauses and plays autoplay`,"@":{a11yPlayText:{type:`string`,description:`Accessible label while paused`,table:{defaultValue:{summary:`Play carousel`}}},a11yPauseText:{type:`string`,description:`Accessible label while playing`,table:{defaultValue:{summary:`Pause carousel`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"aria-roledescription":{description:`a11y role description for the carousel`,table:{defaultValue:{summary:`carousel`},category:`accessibility attributes`},control:`text`},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},Y=t(Nn,Fn),X=t(Hn,Wn),Z=t(rr,ar),Q=t(fr,mr),$=t(Cr,Tr),Or=[`Continuous`,`Discrete`,`Controlled`,`ImageTreatment`,`Autoplay`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ContinuousTemplate, ContinuousTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DiscreteTemplate, DiscreteTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ImageTreatmentTemplate, ImageTreatmentTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(AutoplayTemplate, AutoplayTemplateCode)`,...$.parameters?.docs?.source}}}})))()}kr();export{$ as Autoplay,Y as Continuous,Z as Controlled,X as Discrete,Q as ImageTreatment,Or as __namedExportsOrder,Dr as default};