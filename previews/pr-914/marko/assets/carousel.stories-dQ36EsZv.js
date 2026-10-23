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

Items not wholly in view, peeks included, are hidden from assistive technology with \`aria-hidden\`, and whatever is focusable inside them gets \`tabindex="-1"\` until they scroll into view. They can still be clicked, and focus stays where it is when its item scrolls out of view.

An item's own \`tabindex\` comes back when it scrolls into view. As in \`ebay-carousel\`, \`data-carousel-tabindex="-1"\` on a focusable element keeps it out of the tab order even when in view.

## Reduced motion

Presses jump rather than scroll, and autoplay starts paused, for users who prefer reduced motion.
`})))()}function Re(e,t=!1,n){if(n){let r=requestAnimationFrame(()=>{n(ze(e,t))});return()=>{cancelAnimationFrame(r)}}return ze(e,t)}function ze(e,t=!1){let n=Array.prototype.slice.call(e.querySelectorAll(Be));return n=n.filter(function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}),t===!0&&(n=n.filter(function(e){return e.getAttribute(`tabindex`)!==`-1`})),n}var Be;function Ve(){return(Ve=e((()=>{Be=[`a[href]`,`area[href]`,`button:not([disabled])`,`embed`,`iframe`,`input:not([disabled])`,`object`,`select:not([disabled])`,`textarea:not([disabled])`,`*[tabindex]`,`*[contenteditable]`].join()})))()}function He(){return(He=e((()=>{})))()}function Ue(){return(Ue=e((()=>{He()})))()}function We(e,t,n){if(!e&&!n)return 0;let r=(e||1)%1||(t||n?0:.1);return Math.max(Math.floor(e||1),1)+r}function C(e){ot._(e.d,e),St(e.d,-1),ot._(e.f,e),St(e.f,1),pn(e,!0),hn(e,!1),gn(e,null),yn(e,An(e)),bn(e,jn(e)),xn(e,Mn(e)),Sn(e,Nn(e)),Cn(e,l(e))}var Ge,Ke,w,T,E,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,D,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,O,Bt,k,Vt,Ht,Ut,Wt,Gt,Kt,A,qt,Jt,Yt,Xt,Zt,Qt,$t,j,en,tn,nn,rn,an,on,M,N,P,sn,cn,ln,un,F,I,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,L,R,z,B,V,H,U,En,W,G,K,Dn,q,On,kn,An,jn,Mn,Nn,Pn;function J(){return(J=e((()=>{Ve(),h(),ge(),xe(),Fe(),Ee(),Ue(),Ge=` b`,Ke=`<button type=button></button>`,w=((e,t)=>`<div role=group><!><div>${e}<div class=carousel__viewport><ul></ul></div>${t}</div></div>`)(Ke,Ke),T=((e,t)=>` D%b D/${e}&D l/${t}&m`)(Ge,Ge),E=new WeakMap,qe=new WeakMap,Je=6.64/.45,Ye=e=>{Ae(e.a),Pe(e.a,{})},Xe=e=>{Ne(e.a),je(e.a,{})},Ze=e=>{Ce(e.a),Te(e.a,{})},Qe=e=>{ve(e.a),be(e.a,{})},$e=o(4,e=>y(e.a,`aria-hidden`,!!e._.ai&&!e._.ai[e.M]&&`true`)),et=$e,tt=p(`j6`,e=>a(e,`a`)),nt=r(2,e=>{ee(e,`a`,e.c,{"aria-hidden":1}),tt(e)}),rt=(e,t)=>nt(e,t[0]),it=r(14,e=>y(e.a,`aria-disabled`,e.o&&`true`)),D=d(5,e=>it(e,!e._.a6&&(e.e===1?e._.af:e._.ae)),3),at=ae(62,D,0,`j7`),ot=i(e=>{at(e),st(e),ct(e),lt(e)}),st=ae(63,D,0,`j8`),ct=ae(64,D,0,`j9`),lt=ae(67,e=>y(e.a,`aria-controls`,e._.ay)),ut=(e,t)=>{(({a11yText:t,class:n,onClick:r,...i})=>ft(e,i))(t),ht(e,t.a11yText),_t(e,t.class),yt(e,t.onClick)},dt=p(`j10`,e=>a(e,`a`)),ft=r(12,e=>{ue(e,`a`,e.m,{type:1,"aria-label":1,"aria-controls":1,"aria-disabled":1,class:1,"on-click":1}),dt(e)}),pt=(e,t)=>y(e.a,`aria-label`,t),mt=d(8,e=>pt(e,e.h===void 0?e.e===1?`Next slide`:`Previous slide`:e.h)),ht=r(7,mt),gt=d(10,e=>f(e.a,[`carousel__control`,e.e===1?`carousel__control--next`:`carousel__control--prev`,e.j])),_t=r(9,gt),vt=p(`j11`,e=>ie(e.a,`click`,function(t,n){e.o||e._.at(e.e),e.l&&e.l(t,n)})),yt=r(11,vt),bt=(e,t)=>ut(e,t||{}),xt=n(0,ye,(e=>`/${e}&`)(_e),Qe,we,(e=>`/${e}&`)(Se),Ze),St=r(4,e=>{xt(e,e.e===1?0:1),mt(e),D(e),gt(e)}),Ct=(e,t)=>{(({a11yPauseText:t,a11yPlayText:n,class:r,onClick:i,...a})=>At(e,a))(t),Mt(e,t.a11yPlayText),Pt(e,t.a11yPauseText),Ft(e,t.class),Lt(e,t.onClick)},wt=m(1,0,e=>Ct(e,e._.u||{})),Tt=e=>{wt._(e),Ot._(e)},Et=n(0,De,(e=>`/${e}&`)(ke),Xe,Me,(e=>`/${e}&`)(Oe),Ye),Dt=d(9,e=>y(e.a,`aria-label`,e._.au?e.h:e.i),2),Ot=m(1,0,e=>{Et(e,+!e._.au),Dt(e)}),kt=p(`j12`,e=>a(e,`a`)),At=r(6,e=>{ue(e,`a`,e.g,{type:1,"aria-label":1,class:1,"on-click":1}),kt(e)}),jt=r(7,Dt),Mt=(e,t)=>jt(e,t===void 0?`Play carousel`:t),Nt=r(8,Dt),Pt=(e,t)=>Nt(e,t===void 0?`Pause carousel`:t),Ft=(e,t)=>f(e.a,[`carousel__playback`,t]),It=p(`j13`,e=>ie(e.a,`click`,function(t,n){wn(e._,!e._.au),e.f&&e.f(t,n)})),Lt=r(5,It),Rt=d(35,e=>f(e.e,[`carousel__list`,`carousel__list--snap`,!!e.a8&&`carousel__list--slides`,e.a3===`matte`&&`carousel__list--image-treatment`,e.a3===`large`&&`carousel__list--image-treatment-large`])),zt=r(29,Rt),O=(e,t)=>zt(e,t===void 0?`none`:t),Bt=(e,t)=>y(e.a,`aria-roledescription`,t),k=(e,t)=>Bt(e,t===void 0?`carousel`:t),Vt=te(4,`<li></li>`,` `,et,rt),Ht=p(`j14`,e=>{{let t=e.e,n=[],r,i,a=()=>{let r=t.getBoundingClientRect(),i=Array.from(t.children,e=>{let{left:t,right:n}=e.getBoundingClientRect();return t>r.left-1&&n<r.right+1||t<r.left+1&&n>r.right-1});i.join()!==n.join()&&gn(e,n=i);let a=Math.abs(t.scrollLeft);pn(e,a<1),hn(e,a>t.scrollWidth-t.clientWidth-1)};t.addEventListener(`scroll`,a,{passive:!0,signal:u(e,0)}),t.addEventListener(`scrollend`,()=>{if(E.has(t))return;a();let i=n.indexOf(!0),o=Array.from(t.children).filter(e=>e.style.order);o.length&&(o.forEach(e=>e.style.order=``),e.an(i,`instant`)),i!==-1&&i!==e.ac&&i!==r&&ln(e,r=i)},{signal:u(e,0)}),`onscrollend`in window||t.addEventListener(`scroll`,()=>{clearTimeout(i),i=setTimeout(()=>t.dispatchEvent(new Event(`scrollend`)),100)},{passive:!0,signal:u(e,0)});let o=new ResizeObserver(a);o.observe(t),e.a5.forEach((e,n)=>o.observe(t.children[n])),u(e,0).onabort=()=>{o.disconnect(),clearTimeout(i)}}}),Ut=d(51,e=>{se(e,0),Ht(e)},2),Wt=p(`j15`,e=>{{let t=e.e.children;e.a5.forEach((n,r)=>{let i=!!e.ai&&!e.ai[r];Re(t[r]).forEach(e=>{qe.has(e)||qe.set(e,e.getAttribute(`tabindex`));let t=i?`-1`:e.hasAttribute(`data-carousel-tabindex`)?e.getAttribute(`data-carousel-tabindex`)||`-1`:qe.get(e)??null;t===null?e.removeAttribute(`tabindex`):e.setAttribute(`tabindex`,t)})})}}),Gt=d(45,Wt),Kt=r(31,e=>{Vt(e,[e.a5]),Ut(e),Gt(e)}),A=(e,t)=>Kt(e,[...t||[]]),qt=d(37,e=>f(e.a,[`carousel`,e.z&&`carousel--hidden-scrollbar`,!!e.a8&&`carousel--slides`,!!(e.a8%1)&&`carousel--peek`,!!e.a6&&`carousel__autoplay`,e.o]),3),Jt=d(36,e=>re(e.a,[e.p,e.x!=null&&`--carousel-gap: ${typeof e.x==`number`?`${e.x}px`:e.x}`,!!e.a8&&`--carousel-items-in-view: ${e.a8}`]),2),Yt=r(34,e=>{qt(e),Jt(e),Rt(e)}),Xt=d(33,e=>Yt(e,We(e.v,e.w,e.a6)),2),Zt=p(`j16`,e=>{if(e.a6&&!e.au){let t=e.a,n=()=>{let e=document.activeElement;return t.matches(`:hover`)||t.contains(e)&&!e.classList.contains(`carousel__playback`)},r=e.e,i,a=!1,o=!1,s=()=>{clearTimeout(i),a=!1,i=setTimeout(()=>{a=!0,E.has(r)||c()},e.a6)},c=()=>{s(),o=!1,n()||e.at(1)};r.addEventListener(`pointerdown`,()=>o=!0,{signal:u(e,1)}),r.addEventListener(`scrollend`,()=>{E.has(r)||(o?s():a&&c(),o=!1)},{signal:u(e,1)}),s(),u(e,1).onabort=()=>clearTimeout(i)}}),Qt=d(59,e=>{se(e,1),Zt(e)},2),$t=r(55,Qt),j=d(54,e=>$t(e,On(e)),4),en=n(1,`<button type=button></button>`,` `,Tt),tn=d(43,e=>en(e,e.a6&&!(e.ae&&e.af)?0:1),2),nn=d(58,e=>y(e.e,`aria-live`,e.a6?e.au?`polite`:`off`:void 0)),rn=c(at),an=p(`j17`,e=>{e.a6&&matchMedia(`(prefers-reduced-motion: reduce)`).matches&&wn(e,!0)}),on=r(32,e=>{Xt(e),j(e),Qt(e),qt(e),tn(e),nn(e),rn(e),an(e)}),M=(e,t)=>on(e,t===!0?4e3:t||0),N=r(21,Xt),P=r(22,Xt),sn=p(`j18`,e=>ce(e,{onMount:function(){e.ac&&e.an(e.ac,`instant`)},onUpdate:function(){let t=e.e;e.ac!==void 0&&t.children[e.ac]!==t.querySelector(`:scope > :not([aria-hidden="true"])`)&&e.an(e.ac)}})),cn=d(50,sn),ln=oe(38,e=>{Ut(e),cn(e)}),un=d(10,e=>ln(e,e.i,e.j)),F=r(8,un),I=r(9,un),dn=d(42,e=>f(e.c,[`carousel__container`,e.ae&&e.af&&`carousel__container--controls-disabled`])),fn=c(st),pn=x(40,e=>{tn(e),dn(e),fn(e)}),mn=c(ct),hn=x(41,e=>{tn(e),dn(e),mn(e)}),gn=x(44,e=>{Gt(e),$e(e)}),_n=r(49,e=>{Ut(e),cn(e)}),vn=d(48,e=>_n(e,kn(e))),yn=r(46,e=>{vn(e),j(e)}),bn=r(47,e=>{vn(e),j(e)}),xn=r(52,j),Sn=r(53,j),Cn=r(60,e=>y(e.e,`id`,e.ay)),wn=oe(56,e=>{Qt(e),nn(e),Ot(e)}),Tn=d(13,e=>wn(e,e.l,e.m)),L=r(11,Tn),R=r(12,Tn),z=(e,t)=>y(e.a,`aria-label`,t),B=r(14,qt),V=r(25,qt),H=r(15,Jt),U=r(23,Jt),En=p(`j19`,e=>a(e,`a`)),W=r(28,e=>{ue(e,`a`,e.a2,{role:1,"aria-roledescription":1,"aria-label":1,class:1,style:1}),En(e)}),G=(e,t)=>bt(e.d,t),K=(e,t)=>bt(e.f,t),Dn=(e,t)=>{(({a11yText:t,"aria-roledescription":n,autoplay:r,class:i,gap:a,hiddenScrollbar:o,imageTreatment:s,index:c,indexChange:l,item:ee,itemsPerSlide:te,next:ne,noPeek:u,paused:d,pausedChange:re,playback:f,previous:p,style:m,...h})=>W(e,h))(t),F(e,t.index),I(e,t.indexChange),L(e,t.paused),R(e,t.pausedChange),B(e,t.class),H(e,t.style),z(e,t.a11yText),A(e,t.item),G(e,t.previous),K(e,t.next),q(e,t.playback),N(e,t.itemsPerSlide),P(e,t.noPeek),U(e,t.gap),O(e,t.imageTreatment),V(e,t.hiddenScrollbar),M(e,t.autoplay),k(e,t[`aria-roledescription`])},q=r(20,wt),On=e=>function(t){let n=e.e,r=n.clientWidth,i=E.get(n),a=i?i.to:Math.abs(n.scrollLeft),o=e.ak(),s=()=>t===1?o.find(e=>e.end>a+r+1):o.findLast(e=>e.start<a-1);if(e.a6&&!s()){let i=Math.abs(n.scrollLeft),s=o.filter(e=>t===1?e.end<i+1:e.start>i+r-1);if(!(s.length>0&&s.at(-1).end-s[0].start>r-1)){e.al(t===1?0:1/0);return}let c=o.find(e=>e.end>i+1);e.aq(s.map(({el:e})=>e),t),o=e.ak();let l=o.find(({el:e})=>e===c.el).start-c.start;e.ar(l),a+=l}let c=s();c&&e.al(t===1?c.start:o.find(({start:e})=>e>c.end-r-1).start)},kn=e=>function(t,n){let r=e.ak().find(({el:n})=>n===e.e.children[t]);r&&e.al(r.start,n)},An=e=>function(){let t=e.e,n=getComputedStyle(t).direction===`rtl`,r=t.getBoundingClientRect(),i=Math.abs(t.scrollLeft);return Array.from(t.children,e=>{let t=e.getBoundingClientRect(),a=i+(n?r.right-t.right:t.left-r.left);return{el:e,start:a,end:a+t.width}}).sort((e,t)=>e.start-t.start)},jn=e=>function(t,n){let r=e.e,i=getComputedStyle(r).direction===`rtl`?-1:1,a=Math.max(Math.min(t,r.scrollWidth-r.clientWidth),0),o=Math.abs(r.scrollLeft),s=E.get(r),c=()=>{E.delete(r),r.style.scrollSnapType=``};if(n===`instant`||!s&&Math.abs(a-o)<1||matchMedia(`(prefers-reduced-motion: reduce)`).matches)c(),r.scrollTo({left:i*a,behavior:`instant`});else if(s)s.to=a;else{let e={to:a,at:o,speed:0,time:performance.now()};E.set(r,e),r.style.scrollSnapType=`none`,requestAnimationFrame(function t(n){if(E.get(r)!==e)return;if(Math.abs(Math.abs(r.scrollLeft)-e.at)>2)return c();let a=Math.max(Math.min(n-e.time,50),0)/1e3,o=e.to-e.at,s=Je*o-e.speed,l=Math.exp(-14.755555555555555*a),ee=(o+s*a)*l,te=Math.abs(ee)<.5&&Math.abs(e.speed)<60;e.speed=(Je*(o+s*a)-s)*l,e.at=te?e.to:e.to-ee,e.time=n,te&&c(),r.scrollTo({left:i*e.at,behavior:`instant`}),te?r.dispatchEvent(new Event(`scrollend`)):requestAnimationFrame(t)})}},Mn=e=>function(t,n){let r=Array.from(e.e.children,e=>Number(e.style.order)),i=n===1?Math.max(...r):Math.min(...r);(n===1?t:[...t].reverse()).forEach((e,t)=>e.style.order=`${i+n*(t+1)}`)},Nn=e=>function(t){let n=e.e,r=E.get(n);r&&(r.at+=t,r.to+=t),n.scrollTo({left:(getComputedStyle(n).direction===`rtl`?-1:1)*(Math.abs(n.scrollLeft)+t),behavior:`instant`})},_.j5=On,_.j2=kn,_.j0=An,_.j1=jn,_.j3=Mn,_.j4=Nn,Pn=b(`j`,w,T,C,Dn)})))()}function Fn(e){C(e.a);let t;le(10,1,1,n=>{t=v(t,{content:Rn(e,{1:n})})}),A(e.a,t),z(e.a,`Top products`)}var In,Ln,Rn,zn,Bn;function Vn(){return(Vn=e((()=>{h(),J(),In=w,Ln=(e=>`/${e}&`)(T),Rn=s(g(`MXCzTHJ`,`<div class=demo-carousel-card>Card <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.MXCzTHJ=Rn,zn=r(2,e=>{k(e.a,e.c[`aria-roledescription`]),M(e.a,e.c.autoplay),B(e.a,e.c.class),U(e.a,e.c.gap),V(e.a,e.c.hiddenScrollbar),O(e.a,e.c.imageTreatment),F(e.a,e.c.index),I(e.a,e.c.indexChange),N(e.a,e.c.itemsPerSlide),K(e.a,e.c.next),P(e.a,e.c.noPeek),L(e.a,e.c.paused),R(e.a,e.c.pausedChange),q(e.a,e.c.playback),G(e.a,e.c.previous),H(e.a,e.c.style),W(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(e.c))}),Bn=b(`J32wzXt`,In,Ln,Fn,zn)})))()}var Hn;function Un(){return(Un=e((()=>{Hn=`<style>
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
`})))()}function Wn(e){C(e.a);let t;le(12,1,1,n=>{t=v(t,{content:qn(e,{1:n})})}),A(e.a,t)}var Gn,Kn,qn,Jn,Yn;function Xn(){return(Xn=e((()=>{h(),J(),Gn=w,Kn=(e=>`/${e}&`)(T),qn=s(g(`rLwssvN`,`<div class=demo-carousel-slide>Card <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.rLwssvN=qn,Jn=r(2,e=>{let t={a11yText:`Top products`,itemsPerSlide:3,...e.c};z(e.a,t.a11yText),k(e.a,t[`aria-roledescription`]),M(e.a,t.autoplay),B(e.a,t.class),U(e.a,t.gap),V(e.a,t.hiddenScrollbar),O(e.a,t.imageTreatment),F(e.a,t.index),I(e.a,t.indexChange),N(e.a,t.itemsPerSlide),K(e.a,t.next),P(e.a,t.noPeek),L(e.a,t.paused),R(e.a,t.pausedChange),q(e.a,t.playback),G(e.a,t.previous),H(e.a,t.style),W(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(t))}),Yn=b(`bsVG05Y`,Gn,Kn,Wn,Jn)})))()}var Zn;function Qn(){return(Qn=e((()=>{Zn=`<style>
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
`})))()}function $n(e){fe(e.b),he(e.b,{onClick:lr(e),content:ir(e)}),fe(e.c),he(e.c,{onClick:cr(e),content:rr(e)}),C(e.d);let t;le(12,1,1,n=>{t=v(t,{content:nr(e,{1:n})})}),A(e.d,t),z(e.d,`Top products`),N(e.d,2),I(e.d,sr(e)),ar(e,0)}var er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur;function dr(){return(dr=e((()=>{h(),pe(),J(),er=((e,t,n)=>`<p>Showing card <!></p>${e}${t}${n}`)(me,me,w),tr=((e,t,n)=>`Db%l/${e}&/${t}&/${n}&`)(de,de,T),nr=s(g(`qDYfmKS`,`<div class=demo-carousel-slide>Card <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.qDYfmKS=nr,rr=g(`Sdiy4d0`,`Jump to card 9`),ir=g(`eNUZfFz`,`Back to the start`),ar=x(6,e=>{S(e.a,e.g+1),F(e.d,e.g)}),or=r(5,e=>{k(e.d,e.f[`aria-roledescription`]),M(e.d,e.f.autoplay),B(e.d,e.f.class),U(e.d,e.f.gap),V(e.d,e.f.hiddenScrollbar),O(e.d,e.f.imageTreatment),K(e.d,e.f.next),P(e.d,e.f.noPeek),L(e.d,e.f.paused),R(e.d,e.f.pausedChange),q(e.d,e.f.playback),G(e.d,e.f.previous),H(e.d,e.f.style),W(e.d,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(e.f))}),sr=e=>t=>{ar(e,t)},cr=e=>function(){ar(e,8)},lr=e=>function(){ar(e,0)},_.o6yWID8=sr,_.VtTFyR4=cr,_.yWULTcZ=lr,ur=b(`m8AKf3F`,er,tr,$n,or)})))()}var fr;function pr(){return(pr=e((()=>{fr=`<style>
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
`})))()}function mr(e){C(e.a);let t;ne([`aztec-pyramid`,`falls`,`mountain`,`shoes`,`tall-cat`,`wide-cat`],n=>{t=v(t,{class:`demo-carousel-image`,content:_r(e,{1:n})})}),A(e.a,t),z(e.a,`Travel photos`),O(e.a,`matte`)}var hr,gr,_r,vr,yr;function br(){return(br=e((()=>{h(),J(),hr=w,gr=(e=>`/${e}&`)(T),_r=s(g(`RwLvRXr`,`<img>`,` `),{1(e){y(e.a,`alt`,e.b),y(e.a,`src`,`https://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/${e.b}.jpeg`)}}),_.RwLvRXr=_r,vr=r(2,e=>{k(e.a,e.c[`aria-roledescription`]),M(e.a,e.c.autoplay),B(e.a,e.c.class),U(e.a,e.c.gap),V(e.a,e.c.hiddenScrollbar),F(e.a,e.c.index),I(e.a,e.c.indexChange),N(e.a,e.c.itemsPerSlide),K(e.a,e.c.next),P(e.a,e.c.noPeek),L(e.a,e.c.paused),R(e.a,e.c.pausedChange),q(e.a,e.c.playback),G(e.a,e.c.previous),H(e.a,e.c.style),W(e.a,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(e.c))}),yr=b(`uBJGMWm`,hr,gr,mr,vr)})))()}var xr;function Sr(){return(Sr=e((()=>{xr=`<style>
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
`})))()}function Cr(e){C(e.b);let t;le(4,1,1,n=>{t=v(t,{content:Er(e,{1:n})})}),A(e.b,t),R(e.b,kr(e)),Dr(e,!1)}var wr,Tr,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{h(),J(),wr=(e=>`<p>The carousel is <!>.</p>${e}`)(w),Tr=(e=>`Db%l/${e}&`)(T),Er=s(g(`LiSZLUw`,`<div class=demo-carousel-banner>Slide <!></div>`,`Db%`),{1(e){S(e.a,e.b)}}),_.LiSZLUw=Er,Dr=x(4,e=>{S(e.a,e.e?`paused`:`playing`),L(e.b,e.e)}),Or=r(3,e=>{let t={a11yText:`Featured deals`,autoplay:!0,...e.d};z(e.b,t.a11yText),k(e.b,t[`aria-roledescription`]),M(e.b,t.autoplay),B(e.b,t.class),U(e.b,t.gap),V(e.b,t.hiddenScrollbar),O(e.b,t.imageTreatment),F(e.b,t.index),I(e.b,t.indexChange),N(e.b,t.itemsPerSlide),K(e.b,t.next),P(e.b,t.noPeek),q(e.b,t.playback),G(e.b,t.previous),H(e.b,t.style),W(e.b,(({a11yText:e,"aria-roledescription":t,autoplay:n,class:r,gap:i,hiddenScrollbar:a,imageTreatment:o,index:s,indexChange:c,item:l,itemsPerSlide:ee,next:te,noPeek:ne,paused:u,pausedChange:d,playback:re,previous:f,style:p,...m})=>m)(t))}),kr=e=>t=>{Dr(e,t)},_.s3gXTPR=kr,Ar=b(`pj41iw2`,wr,Tr,Cr,Or)})))()}var Mr;function Nr(){return(Nr=e((()=>{Mr=`<style>
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
`})))()}var Pr,Y,X,Z,Q,$,Fr;function Ir(){return(Ir=e((()=>{Le(),J(),Vn(),Un(),Xn(),Qn(),dr(),pr(),br(),Sr(),jr(),Nr(),Pr={title:`navigation & disclosure/evo-carousel`,component:Pn,parameters:{docs:{description:{component:Ie}}},argTypes:{a11yText:{type:{name:`string`,required:!0},control:`text`,description:"The accessible name for the carousel. Pass `null` explicitly _only_ if alternative accessibility information is present",table:{category:`accessibility attributes`}},itemsPerSlide:{type:`number`,control:`number`,description:"Makes the carousel discrete: this many items fill the view and each press moves by that many. A fraction sets how much of the next item peeks in; a whole number peeks a tenth of one unless `noPeek` is set. Leave unset for a continuous carousel where each item sizes itself"},noPeek:{type:`boolean`,description:"With a whole `itemsPerSlide`, fill the view exactly instead of peeking a tenth of the next item",table:{defaultValue:{summary:`false`}}},gap:{control:`text`,description:`Space between items, as a number of pixels or any CSS length`,table:{defaultValue:{summary:`16px`}}},imageTreatment:{type:`string`,options:[`none`,`matte`,`large`],control:`inline-radio`,description:`Applies the image treatment styles, at the default or the large corner radius`,table:{defaultValue:{summary:`none`}}},hiddenScrollbar:{type:`boolean`,description:`Hide the scrollbar that otherwise shows on hover`,table:{defaultValue:{summary:`false`}}},autoplay:{control:`number`,description:"Advance on a timer of this many milliseconds (`true` for 4000), going round from the last slide to the first. Implies one item per slide unless `itemsPerSlide` says otherwise. Holds still while hovered or focused, and starts paused for users who prefer reduced motion"},paused:{controllable:!0,type:`boolean`,description:`Whether autoplay is paused`,table:{defaultValue:{summary:`false`}}},index:{controllable:!0,type:`number`,control:`number`,description:`Zero-based index of the first item wholly in view, reported once scrolling comes to rest. Setting it scrolls that item to the leading edge`},item:{description:`An item in the carousel`,"@":{"<li> attributes":{description:"All attributes and event handlers from [the native HTML `<li>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) will be passed through"}}},previous:{description:`The control that scrolls backwards`,"@":{a11yText:{type:`string`,description:`Accessible label for the previous control`,table:{defaultValue:{summary:`Previous slide`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},next:{description:`The control that scrolls forwards`,"@":{a11yText:{type:`string`,description:`Accessible label for the next control`,table:{defaultValue:{summary:`Next slide`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},playback:{description:`The control that pauses and plays autoplay`,"@":{a11yPlayText:{type:`string`,description:`Accessible label while paused`,table:{defaultValue:{summary:`Play carousel`}}},a11yPauseText:{type:`string`,description:`Accessible label while playing`,table:{defaultValue:{summary:`Pause carousel`}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},"aria-roledescription":{description:`a11y role description for the carousel`,table:{defaultValue:{summary:`carousel`},category:`accessibility attributes`},control:`text`},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},Y=t(Bn,Hn),X=t(Yn,Zn),Z=t(ur,fr),Q=t(yr,xr),$=t(Ar,Mr),Fr=[`Continuous`,`Discrete`,`Controlled`,`ImageTreatment`,`Autoplay`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ContinuousTemplate, ContinuousTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DiscreteTemplate, DiscreteTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ImageTreatmentTemplate, ImageTreatmentTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(AutoplayTemplate, AutoplayTemplateCode)`,...$.parameters?.docs?.source}}}})))()}Ir();export{$ as Autoplay,Y as Continuous,Z as Controlled,X as Discrete,Q as ImageTreatment,Fr as __namedExportsOrder,Pr as default};