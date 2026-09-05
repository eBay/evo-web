import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,T as n,at as r,c as i,et as a,i as o,it as s,k as c,s as l,t as u}from"./dom-CrmgVQ1h.js";import{a as d,i as f,n as p,r as m,t as h}from"./evo-icon-CFoPYBpm.js";function g(e,t,n={},r=``,i=!1){let a=r+`	`,{body:o,attrs:s}=_(t,n,a),c=e;return i&&(c=`@${n[c]||c}`),`<${c+s+(o?`>\n${o.replace(/^|\n/gm,`$&${a}`)}\n</${c}>`:`/>`)}`}function _(e,t,n){let r=``,i=``;for(let a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&a!==`renderBody`){let o=e[a],s=a.replace(/([a-z])([A-Z])/g,(e,t,n)=>`${t}-${n.toLowerCase()}`);if(Array.isArray(o))for(let e of o)i+=g(s,e,t,n,!0);else o&&typeof o==`object`?a===`spread`?Object.keys(o).forEach(e=>{r+=` ${e}=${JSON.stringify(o[e])}`}):i+=g(s,o,t,n,!0):r+=` ${s}=${JSON.stringify(o)}`}return e.renderBody&&(i+=e.renderBody),{attrs:r,body:i}}var v;function y(){return(y=e((()=>{v=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-eek
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

EU energy label

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-eek)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-eek)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-eek/examples)
`})))()}function b(e){p(e.a)}var x,S,C;function w(){return(w=e((()=>{d(),x=m,S=(e=>`/${e}&`)(f),C=(e,t)=>h(e.a,{...t,_name:`eek-range-arrow`,_type:`icon`,_symbol:`<symbol viewbox="0 0 5 6" id=icon-eek-range-arrow><path fill-rule=evenodd clip-rule=evenodd d="M2.32203 0.108736L1.0202 2.6473C0.951945 2.78038 1.04859 2.93856 1.19816 2.93856H1.95692V5.99786H3.04303V2.93856H3.80182C3.95139 2.93856 4.04804 2.78038 3.97979 2.6473L2.67796 0.108736C2.60361 -0.0362453 2.39638 -0.0362455 2.32203 0.108736Z" fill=black></path></symbol>`})})))()}function ee(e){p(e.a)}var te,ne,T;function re(){return(re=e((()=>{d(),te=m,ne=(e=>`/${e}&`)(f),T=(e,t)=>h(e.a,{...t,_name:`eek-arrow`,_type:`icon`,_symbol:`<symbol viewbox="0 0 11 28" id=icon-eek-arrow><path d="M0 27.75H1.13239C1.76009 27.75 2.35161 27.4145 2.73099 26.8434L10.342 15.3851C10.886 14.5662 10.886 13.4338 10.342 12.6149L2.73099 1.15661C2.35161 0.585476 1.76009 0.25 1.13239 0.25H3.09944e-06" stroke=black stroke-width=1></path></symbol>`})})))()}function ie(){return(ie=e((()=>{})))()}function ae(){return(ae=e((()=>{ie()})))()}function oe(e,t,n){let r=k[e];if(!(r&&r.indexOf(t)>-1))return null;let i=e,a=1;for(;i!==n;){if(a++,t===i)return null;i=i.length>1?i.slice(0,i.length-1):String.fromCharCode(i.charCodeAt(0)+1)}return a>7?7:a}function E(e){b(e.c),C(e.c,{}),ee(e.f),T(e.f,{})}var D,O,k,A,se,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{o(),w(),re(),ae(),D=((e,t)=>`<div role=img><div class=eek__container aria-hidden=true><span class=eek__rating-range><span> </span>${e}<span> </span></span><span class=eek__rating> </span></div>${t}</div>`)(x,te),O=((e,t)=>` G l/${e}&D mD m/${t}&l`)(S,ne),k={"A+++":[`D`,`E`,`G`],"A++":[`E`,`G`],"A+":[`F`,`G`],A:[`G`]},A=a(17,e=>i(e.a,[`eek`,e.q?`eek--rating-${e.q}`:null,e.k===`large`&&`eek--large`,e.i]),2),se=c(16,A),j=a(14,e=>se(e,oe(e.l,e.m,e.n)),2),M=c(11,e=>{r(e.b,e.l),j(e)}),N=c(12,e=>{r(e.d,e.m),j(e)}),P=c(13,e=>{r(e.e,e.n),j(e)}),F=(e,t)=>l(e.a,`aria-label`,t),I=c(8,A),L=c(10,A),R=s(`s0`,e=>n(e,`a`)),z=c(15,e=>{t(e,`a`,e.p,{"aria-label":1,role:1,class:1}),R(e)}),B=(e,t)=>{(({a11yText:t,class:n,max:r,min:i,rating:a,size:o,...s})=>z(e,s))(t),I(e,t.class),F(e,t.a11yText),L(e,t.size),M(e,t.max),N(e,t.min),P(e,t.rating)},V=u(`s`,D,O,E,B)})))()}function ce(e){E(e.a),M(e.a,`A+++`),N(e.a,`D`),P(e.a,`A+++`),F(e.a,`Energy Rating: A+++. Range A+++ - D`),I(e.a),L(e.a),z(e.a,{}),E(e.b),M(e.b,`A+++`),N(e.b,`D`),P(e.b,`A++`),F(e.b,`Energy Rating: A++. Range A+++ - D`),I(e.b),L(e.b),z(e.b,{}),E(e.c),M(e.c,`A+++`),N(e.c,`D`),P(e.c,`A+`),F(e.c,`Energy Rating: A+. Range A+++ - D`),I(e.c),L(e.c),z(e.c,{}),E(e.d),M(e.d,`A+++`),N(e.d,`D`),P(e.d,`A`),F(e.d,`Energy Rating: A. Range A+++ - D`),I(e.d),L(e.d),z(e.d,{}),E(e.e),M(e.e,`A+++`),N(e.e,`D`),P(e.e,`B`),F(e.e,`Energy Rating: B. Range A+++ - D`),I(e.e),L(e.e),z(e.e,{}),E(e.f),M(e.f,`A+++`),N(e.f,`D`),P(e.f,`C`),F(e.f,`Energy Rating: C. Range A+++ - D`),I(e.f),L(e.f),z(e.f,{}),E(e.g),M(e.g,`A+++`),N(e.g,`D`),P(e.g,`D`),F(e.g,`Energy Rating: D. Range A+++ - D`),I(e.g),L(e.g),z(e.g,{}),E(e.h),M(e.h,`A+++`),N(e.h,`E`),P(e.h,`A+++`),F(e.h,`Energy Rating: A+++. Range A+++ - E`),I(e.h),L(e.h),z(e.h,{}),E(e.i),M(e.i,`A+++`),N(e.i,`E`),P(e.i,`A++`),F(e.i,`Energy Rating: A++. Range A+++ - E`),I(e.i),L(e.i),z(e.i,{}),E(e.j),M(e.j,`A+++`),N(e.j,`E`),P(e.j,`A+`),F(e.j,`Energy Rating: A+. Range A+++ - E`),I(e.j),L(e.j),z(e.j,{}),E(e.k),M(e.k,`A+++`),N(e.k,`E`),P(e.k,`A`),F(e.k,`Energy Rating: A. Range A+++ - E`),I(e.k),L(e.k),z(e.k,{}),E(e.l),M(e.l,`A+++`),N(e.l,`E`),P(e.l,`B`),F(e.l,`Energy Rating: B. Range A+++ - E`),I(e.l),L(e.l),z(e.l,{}),E(e.m),M(e.m,`A+++`),N(e.m,`E`),P(e.m,`C`),F(e.m,`Energy Rating: C. Range A+++ - E`),I(e.m),L(e.m),z(e.m,{}),E(e.n),M(e.n,`A+++`),N(e.n,`E`),P(e.n,`D`),F(e.n,`Energy Rating: D. Range A+++ - E`),I(e.n),L(e.n),z(e.n,{}),E(e.o),M(e.o,`A+++`),N(e.o,`E`),P(e.o,`E`),F(e.o,`Energy Rating: E. Range A+++ - E`),I(e.o),L(e.o),z(e.o,{}),E(e.p),M(e.p,`A+++`),N(e.p,`G`),P(e.p,`A+++`),F(e.p,`Energy Rating: A+++. Range A+++ - G`),I(e.p),L(e.p),z(e.p,{}),E(e.q),M(e.q,`A+++`),N(e.q,`G`),P(e.q,`A++`),F(e.q,`Energy Rating: A++. Range A+++ - G`),I(e.q),L(e.q),z(e.q,{}),E(e.r),M(e.r,`A+++`),N(e.r,`G`),P(e.r,`A+`),F(e.r,`Energy Rating: A+. Range A+++ - G`),I(e.r),L(e.r),z(e.r,{}),E(e.s),M(e.s,`A+++`),N(e.s,`G`),P(e.s,`A`),F(e.s,`Energy Rating: A. Range A+++ - G`),I(e.s),L(e.s),z(e.s,{}),E(e.t),M(e.t,`A+++`),N(e.t,`G`),P(e.t,`B`),F(e.t,`Energy Rating: B. Range A+++ - G`),I(e.t),L(e.t),z(e.t,{}),E(e.u),M(e.u,`A+++`),N(e.u,`G`),P(e.u,`C`),F(e.u,`Energy Rating: C. Range A+++ - G`),I(e.u),L(e.u),z(e.u,{}),E(e.v),M(e.v,`A+++`),N(e.v,`G`),P(e.v,`D`),F(e.v,`Energy Rating: D. Range A+++ - G`),I(e.v),L(e.v),z(e.v,{}),E(e.w),M(e.w,`A+++`),N(e.w,`G`),P(e.w,`E`),F(e.w,`Energy Rating: E. Range A+++ - G`),I(e.w),L(e.w),z(e.w,{}),E(e.x),M(e.x,`A+++`),N(e.x,`G`),P(e.x,`F`),F(e.x,`Energy Rating: F. Range A+++ - G`),I(e.x),L(e.x),z(e.x,{}),E(e.y),M(e.y,`A+++`),N(e.y,`G`),P(e.y,`G`),F(e.y,`Energy Rating: G. Range A+++ - G`),I(e.y),L(e.y),z(e.y,{})}var U,W,G;function K(){return(K=e((()=>{H(),o(),U=((e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w)=>`<div>${e}${t}${n}${r}${i}${a}${o}</div><div>${s}${c}${l}${u}${d}${f}${p}${m}</div><div>${h}${g}${_}${v}${y}${b}${x}${S}${C}${w}</div>`)(D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D),W=((e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w)=>`D/${e}&/${t}&/${n}&/${r}&/${i}&/${a}&/${o}&lD/${s}&/${c}&/${l}&/${u}&/${d}&/${f}&/${p}&/${m}&lD/${h}&/${g}&/${_}&/${v}&/${y}&/${b}&/${x}&/${S}&/${C}&/${w}&l`)(O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O),G=u(`wP8jPlO`,U,W,ce)})))()}function le(e){E(e.a),M(e.a,`A++`),N(e.a,`E`),P(e.a,`A++`),F(e.a,`Energy Rating: A++. Range A++ - E`),I(e.a),L(e.a),z(e.a,{}),E(e.b),M(e.b,`A++`),N(e.b,`E`),P(e.b,`A+`),F(e.b,`Energy Rating: A+. Range A++ - E`),I(e.b),L(e.b),z(e.b,{}),E(e.c),M(e.c,`A++`),N(e.c,`E`),P(e.c,`A`),F(e.c,`Energy Rating: A. Range A++ - E`),I(e.c),L(e.c),z(e.c,{}),E(e.d),M(e.d,`A++`),N(e.d,`E`),P(e.d,`B`),F(e.d,`Energy Rating: B. Range A++ - E`),I(e.d),L(e.d),z(e.d,{}),E(e.e),M(e.e,`A++`),N(e.e,`E`),P(e.e,`C`),F(e.e,`Energy Rating: C. Range A++ - E`),I(e.e),L(e.e),z(e.e,{}),E(e.f),M(e.f,`A++`),N(e.f,`E`),P(e.f,`D`),F(e.f,`Energy Rating: D. Range A++ - E`),I(e.f),L(e.f),z(e.f,{}),E(e.g),M(e.g,`A++`),N(e.g,`E`),P(e.g,`E`),F(e.g,`Energy Rating: E. Range A++ - E`),I(e.g),L(e.g),z(e.g,{}),E(e.h),M(e.h,`A++`),N(e.h,`G`),P(e.h,`A++`),F(e.h,`Energy Rating: A++. Range A++ - G`),I(e.h),L(e.h),z(e.h,{}),E(e.i),M(e.i,`A++`),N(e.i,`G`),P(e.i,`A+`),F(e.i,`Energy Rating: A+. Range A++ - G`),I(e.i),L(e.i),z(e.i,{}),E(e.j),M(e.j,`A++`),N(e.j,`G`),P(e.j,`A`),F(e.j,`Energy Rating: A. Range A++ - G`),I(e.j),L(e.j),z(e.j,{}),E(e.k),M(e.k,`A++`),N(e.k,`G`),P(e.k,`B`),F(e.k,`Energy Rating: B. Range A++ - G`),I(e.k),L(e.k),z(e.k,{}),E(e.l),M(e.l,`A++`),N(e.l,`G`),P(e.l,`C`),F(e.l,`Energy Rating: C. Range A++ - G`),I(e.l),L(e.l),z(e.l,{}),E(e.m),M(e.m,`A++`),N(e.m,`G`),P(e.m,`D`),F(e.m,`Energy Rating: D. Range A++ - G`),I(e.m),L(e.m),z(e.m,{}),E(e.n),M(e.n,`A++`),N(e.n,`G`),P(e.n,`E`),F(e.n,`Energy Rating: E. Range A++ - G`),I(e.n),L(e.n),z(e.n,{}),E(e.o),M(e.o,`A++`),N(e.o,`G`),P(e.o,`F`),F(e.o,`Energy Rating: F. Range A++ - G`),I(e.o),L(e.o),z(e.o,{}),E(e.p),M(e.p,`A++`),N(e.p,`G`),P(e.p,`G`),F(e.p,`Energy Rating: G. Range A++ - G`),I(e.p),L(e.p),z(e.p,{})}var ue,de,fe;function pe(){return(pe=e((()=>{H(),o(),ue=((e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>`<div>${e}${t}${n}${r}${i}${a}${o}</div><div>${s}${c}${l}${u}${d}${f}${p}${m}${h}</div>`)(D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D),de=((e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>`D/${e}&/${t}&/${n}&/${r}&/${i}&/${a}&/${o}&lD/${s}&/${c}&/${l}&/${u}&/${d}&/${f}&/${p}&/${m}&/${h}&l`)(O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O),fe=u(`hJ9GqC2`,ue,de,le)})))()}function me(e){E(e.a),M(e.a,`A+`),N(e.a,`F`),P(e.a,`A+`),F(e.a,`Energy Rating: A+. Range A+ - F`),I(e.a),L(e.a),z(e.a,{}),E(e.b),M(e.b,`A+`),N(e.b,`F`),P(e.b,`A`),F(e.b,`Energy Rating: A. Range A+ - F`),I(e.b),L(e.b),z(e.b,{}),E(e.c),M(e.c,`A+`),N(e.c,`F`),P(e.c,`B`),F(e.c,`Energy Rating: B. Range A+ - F`),I(e.c),L(e.c),z(e.c,{}),E(e.d),M(e.d,`A+`),N(e.d,`F`),P(e.d,`C`),F(e.d,`Energy Rating: C. Range A+ - F`),I(e.d),L(e.d),z(e.d,{}),E(e.e),M(e.e,`A+`),N(e.e,`F`),P(e.e,`D`),F(e.e,`Energy Rating: D. Range A+ - F`),I(e.e),L(e.e),z(e.e,{}),E(e.f),M(e.f,`A+`),N(e.f,`F`),P(e.f,`E`),F(e.f,`Energy Rating: E. Range A+ - F`),I(e.f),L(e.f),z(e.f,{}),E(e.g),M(e.g,`A+`),N(e.g,`F`),P(e.g,`F`),F(e.g,`Energy Rating: F. Range A+ - F`),I(e.g),L(e.g),z(e.g,{}),E(e.h),M(e.h,`A+`),N(e.h,`G`),P(e.h,`A+`),F(e.h,`Energy Rating: A+. Range A+ - G`),I(e.h),L(e.h),z(e.h,{}),E(e.i),M(e.i,`A+`),N(e.i,`G`),P(e.i,`A`),F(e.i,`Energy Rating: A. Range A+ - G`),I(e.i),L(e.i),z(e.i,{}),E(e.j),M(e.j,`A+`),N(e.j,`G`),P(e.j,`B`),F(e.j,`Energy Rating: B. Range A+ - G`),I(e.j),L(e.j),z(e.j,{}),E(e.k),M(e.k,`A+`),N(e.k,`G`),P(e.k,`C`),F(e.k,`Energy Rating: C. Range A+ - G`),I(e.k),L(e.k),z(e.k,{}),E(e.l),M(e.l,`A+`),N(e.l,`G`),P(e.l,`D`),F(e.l,`Energy Rating: D. Range A+ - G`),I(e.l),L(e.l),z(e.l,{}),E(e.m),M(e.m,`A+`),N(e.m,`G`),P(e.m,`E`),F(e.m,`Energy Rating: E. Range A+ - G`),I(e.m),L(e.m),z(e.m,{}),E(e.n),M(e.n,`A+`),N(e.n,`G`),P(e.n,`F`),F(e.n,`Energy Rating: F. Range A+ - G`),I(e.n),L(e.n),z(e.n,{}),E(e.o),M(e.o,`A+`),N(e.o,`G`),P(e.o,`G`),F(e.o,`Energy Rating: G. Range A+ - G`),I(e.o),L(e.o),z(e.o,{})}var he,ge,_e;function ve(){return(ve=e((()=>{H(),o(),he=((e,t,n,r,i,a,o,s,c,l,u,d,f,p,m)=>`<div>${e}${t}${n}${r}${i}${a}${o}</div><div>${s}${c}${l}${u}${d}${f}${p}${m}</div>`)(D,D,D,D,D,D,D,D,D,D,D,D,D,D,D),ge=((e,t,n,r,i,a,o,s,c,l,u,d,f,p,m)=>`D/${e}&/${t}&/${n}&/${r}&/${i}&/${a}&/${o}&lD/${s}&/${c}&/${l}&/${u}&/${d}&/${f}&/${p}&/${m}&l`)(O,O,O,O,O,O,O,O,O,O,O,O,O,O,O),_e=u(`D8XpFqW`,he,ge,me)})))()}function ye(e){E(e.a),M(e.a,`A`),N(e.a,`G`),P(e.a,`A`),F(e.a,`Energy Rating: A. Range A - G`),I(e.a),L(e.a),z(e.a,{}),E(e.b),M(e.b,`A`),N(e.b,`G`),P(e.b,`B`),F(e.b,`Energy Rating: B. Range A - G`),I(e.b),L(e.b),z(e.b,{}),E(e.c),M(e.c,`A`),N(e.c,`G`),P(e.c,`C`),F(e.c,`Energy Rating: C. Range A - G`),I(e.c),L(e.c),z(e.c,{}),E(e.d),M(e.d,`A`),N(e.d,`G`),P(e.d,`D`),F(e.d,`Energy Rating: D. Range A - G`),I(e.d),L(e.d),z(e.d,{}),E(e.e),M(e.e,`A`),N(e.e,`G`),P(e.e,`E`),F(e.e,`Energy Rating: E. Range A - G`),I(e.e),L(e.e),z(e.e,{}),E(e.f),M(e.f,`A`),N(e.f,`G`),P(e.f,`F`),F(e.f,`Energy Rating: F. Range A - G`),I(e.f),L(e.f),z(e.f,{}),E(e.g),M(e.g,`A`),N(e.g,`G`),P(e.g,`G`),F(e.g,`Energy Rating: G. Range A - G`),I(e.g),L(e.g),z(e.g,{})}var be,xe,Se;function Ce(){return(Ce=e((()=>{H(),o(),be=((e,t,n,r,i,a,o)=>`<div>${e}${t}${n}${r}${i}${a}${o}</div>`)(D,D,D,D,D,D,D),xe=((e,t,n,r,i,a,o)=>`D/${e}&/${t}&/${n}&/${r}&/${i}&/${a}&/${o}&l`)(O,O,O,O,O,O,O),Se=u(`a2yCjv9`,be,xe,ye)})))()}function we(e){E(e.a),M(e.a,`B`),N(e.a,`G`),P(e.a,`D`),F(e.a,`Energy Rating: D. Range B - G`),I(e.a),L(e.a),z(e.a,{}),E(e.b),M(e.b,`A`),N(e.b,`G`),P(e.b,`A+++`),F(e.b,`Energy Rating: A+++. Range A - G`),I(e.b),L(e.b),z(e.b,{}),E(e.c),M(e.c,`A++`),N(e.c,`B`),P(e.c,`A++`),F(e.c,`Energy Rating: A++. Range A++ - B`),I(e.c),L(e.c),z(e.c,{}),E(e.d),M(e.d,`A+`),N(e.d,`B`),P(e.d,`A++`),F(e.d,`Energy Rating: A++. Range A+ - B`),I(e.d),L(e.d),z(e.d,{})}var Te,Ee,De;function Oe(){return(Oe=e((()=>{H(),o(),Te=((e,t,n,r)=>`<div>${e}${t}${n}${r}</div>`)(D,D,D,D),Ee=((e,t,n,r)=>`D/${e}&/${t}&/${n}&/${r}&l`)(O,O,O,O),De=u(`PFAU8N5`,Te,Ee,we)})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`<div>
  <evo-eek
    max="A+++"
    min="D"
    rating="A+++"
    a11yText="Energy Rating: A+++. Range A+++ - D"/>
  <evo-eek
    max="A+++"
    min="D"
    rating="A++"
    a11yText="Energy Rating: A++. Range A+++ - D"/>
  <evo-eek
    max="A+++"
    min="D"
    rating="A+"
    a11yText="Energy Rating: A+. Range A+++ - D"/>
  <evo-eek
    max="A+++"
    min="D"
    rating="A"
    a11yText="Energy Rating: A. Range A+++ - D"/>
  <evo-eek
    max="A+++"
    min="D"
    rating="B"
    a11yText="Energy Rating: B. Range A+++ - D"/>
  <evo-eek
    max="A+++"
    min="D"
    rating="C"
    a11yText="Energy Rating: C. Range A+++ - D"/>
  <evo-eek
    max="A+++"
    min="D"
    rating="D"
    a11yText="Energy Rating: D. Range A+++ - D"/>
</div>
<div>
  <evo-eek
    max="A+++"
    min="E"
    rating="A+++"
    a11yText="Energy Rating: A+++. Range A+++ - E"/>
  <evo-eek
    max="A+++"
    min="E"
    rating="A++"
    a11yText="Energy Rating: A++. Range A+++ - E"/>
  <evo-eek
    max="A+++"
    min="E"
    rating="A+"
    a11yText="Energy Rating: A+. Range A+++ - E"/>
  <evo-eek
    max="A+++"
    min="E"
    rating="A"
    a11yText="Energy Rating: A. Range A+++ - E"/>
  <evo-eek
    max="A+++"
    min="E"
    rating="B"
    a11yText="Energy Rating: B. Range A+++ - E"/>
  <evo-eek
    max="A+++"
    min="E"
    rating="C"
    a11yText="Energy Rating: C. Range A+++ - E"/>
  <evo-eek
    max="A+++"
    min="E"
    rating="D"
    a11yText="Energy Rating: D. Range A+++ - E"/>
  <evo-eek
    max="A+++"
    min="E"
    rating="E"
    a11yText="Energy Rating: E. Range A+++ - E"/>
</div>
<div>
  <evo-eek
    max="A+++"
    min="G"
    rating="A+++"
    a11yText="Energy Rating: A+++. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="A++"
    a11yText="Energy Rating: A++. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="A+"
    a11yText="Energy Rating: A+. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="A"
    a11yText="Energy Rating: A. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="B"
    a11yText="Energy Rating: B. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="C"
    a11yText="Energy Rating: C. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="D"
    a11yText="Energy Rating: D. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="E"
    a11yText="Energy Rating: E. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="F"
    a11yText="Energy Rating: F. Range A+++ - G"/>
  <evo-eek
    max="A+++"
    min="G"
    rating="G"
    a11yText="Energy Rating: G. Range A+++ - G"/>
</div>
`})))()}var je;function Me(){return(Me=e((()=>{je=`<div>
  <evo-eek
    max="A++"
    min="E"
    rating="A++"
    a11yText="Energy Rating: A++. Range A++ - E"/>
  <evo-eek
    max="A++"
    min="E"
    rating="A+"
    a11yText="Energy Rating: A+. Range A++ - E"/>
  <evo-eek
    max="A++"
    min="E"
    rating="A"
    a11yText="Energy Rating: A. Range A++ - E"/>
  <evo-eek
    max="A++"
    min="E"
    rating="B"
    a11yText="Energy Rating: B. Range A++ - E"/>
  <evo-eek
    max="A++"
    min="E"
    rating="C"
    a11yText="Energy Rating: C. Range A++ - E"/>
  <evo-eek
    max="A++"
    min="E"
    rating="D"
    a11yText="Energy Rating: D. Range A++ - E"/>
  <evo-eek
    max="A++"
    min="E"
    rating="E"
    a11yText="Energy Rating: E. Range A++ - E"/>
</div>
<div>
  <evo-eek
    max="A++"
    min="G"
    rating="A++"
    a11yText="Energy Rating: A++. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="A+"
    a11yText="Energy Rating: A+. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="A"
    a11yText="Energy Rating: A. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="B"
    a11yText="Energy Rating: B. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="C"
    a11yText="Energy Rating: C. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="D"
    a11yText="Energy Rating: D. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="E"
    a11yText="Energy Rating: E. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="F"
    a11yText="Energy Rating: F. Range A++ - G"/>
  <evo-eek
    max="A++"
    min="G"
    rating="G"
    a11yText="Energy Rating: G. Range A++ - G"/>
</div>
`})))()}var Ne;function q(){return(q=e((()=>{Ne=`<div>
  <evo-eek
    max="A+"
    min="F"
    rating="A+"
    a11yText="Energy Rating: A+. Range A+ - F"/>
  <evo-eek
    max="A+"
    min="F"
    rating="A"
    a11yText="Energy Rating: A. Range A+ - F"/>
  <evo-eek
    max="A+"
    min="F"
    rating="B"
    a11yText="Energy Rating: B. Range A+ - F"/>
  <evo-eek
    max="A+"
    min="F"
    rating="C"
    a11yText="Energy Rating: C. Range A+ - F"/>
  <evo-eek
    max="A+"
    min="F"
    rating="D"
    a11yText="Energy Rating: D. Range A+ - F"/>
  <evo-eek
    max="A+"
    min="F"
    rating="E"
    a11yText="Energy Rating: E. Range A+ - F"/>
  <evo-eek
    max="A+"
    min="F"
    rating="F"
    a11yText="Energy Rating: F. Range A+ - F"/>
</div>
<div>
  <evo-eek
    max="A+"
    min="G"
    rating="A+"
    a11yText="Energy Rating: A+. Range A+ - G"/>
  <evo-eek
    max="A+"
    min="G"
    rating="A"
    a11yText="Energy Rating: A. Range A+ - G"/>
  <evo-eek
    max="A+"
    min="G"
    rating="B"
    a11yText="Energy Rating: B. Range A+ - G"/>
  <evo-eek
    max="A+"
    min="G"
    rating="C"
    a11yText="Energy Rating: C. Range A+ - G"/>
  <evo-eek
    max="A+"
    min="G"
    rating="D"
    a11yText="Energy Rating: D. Range A+ - G"/>
  <evo-eek
    max="A+"
    min="G"
    rating="E"
    a11yText="Energy Rating: E. Range A+ - G"/>
  <evo-eek
    max="A+"
    min="G"
    rating="F"
    a11yText="Energy Rating: F. Range A+ - G"/>
  <evo-eek
    max="A+"
    min="G"
    rating="G"
    a11yText="Energy Rating: G. Range A+ - G"/>
</div>
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`<div>
  <evo-eek max="A" min="G" rating="A" a11yText="Energy Rating: A. Range A - G"/>
  <evo-eek max="A" min="G" rating="B" a11yText="Energy Rating: B. Range A - G"/>
  <evo-eek max="A" min="G" rating="C" a11yText="Energy Rating: C. Range A - G"/>
  <evo-eek max="A" min="G" rating="D" a11yText="Energy Rating: D. Range A - G"/>
  <evo-eek max="A" min="G" rating="E" a11yText="Energy Rating: E. Range A - G"/>
  <evo-eek max="A" min="G" rating="F" a11yText="Energy Rating: F. Range A - G"/>
  <evo-eek max="A" min="G" rating="G" a11yText="Energy Rating: G. Range A - G"/>
</div>
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`<div>
  <evo-eek max="B" min="G" rating="D" a11yText="Energy Rating: D. Range B - G"/>
  <evo-eek
    max="A"
    min="G"
    rating="A+++"
    a11yText="Energy Rating: A+++. Range A - G"/>
  <evo-eek
    max="A++"
    min="B"
    rating="A++"
    a11yText="Energy Rating: A++. Range A++ - B"/>
  <evo-eek
    max="A+"
    min="B"
    rating="A++"
    a11yText="Energy Rating: A++. Range A+ - B"/>
</div>
`})))()}var Re,J,Y,X,Z,Q,$,ze;function Be(){return(Be=e((()=>{y(),H(),K(),pe(),ve(),Ce(),Oe(),Ae(),Me(),q(),Fe(),Le(),Re={title:`graphics & icons/evo-eek`,component:V,parameters:{docs:{description:{component:v}}},argTypes:{a11yText:{type:{name:`string`,required:!0},control:`text`,description:"Localized, the aria-label accessibility label for the eek component. This is for internationalization. It should use min, max, and rating in the label in order to demonstrate to screen readers the content on the component. Expected value `Energy efficiency class ${rating}. ${min} - ${max}`. May be set to `null` only if accessibility is provided through other means."},rating:{type:{name:`string`,required:!0},control:`text`,description:`The energy rating`},max:{type:{name:`string`,required:!0},control:`text`,description:`The maximum range`},min:{type:{name:`string`,required:!0},control:`text`,description:`The minimum range`},size:{type:`string`,options:[`regular (default)`,`large`],control:`inline-radio`,description:`The size of the EEK.`},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},J=e=>({input:e}),J.args={max:`A+++`,min:`E`,rating:`C`},J.parameters={docs:{source:{code:g(`evo-eek`,J.args)}}},Y=()=>({component:G,name:`A+++`}),Y.storyName=`A+++`,Y.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:ke}}},X=()=>({component:fe}),X.storyName=`A++`,X.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:je}}},Z=()=>({component:_e,name:`A+`}),Z.storyName=`A++`,Z.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Ne}}},Q=()=>({component:Se,name:`A`}),Q.storyName=`A`,Q.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Pe}}},$=()=>({component:De}),$.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Ie}}},ze=[`Default`,`exampleOne`,`exampleTwo`,`exampleThree`,`exampleFour`,`invalidCombinations`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => ({
  input: args
})`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => ({
  component: example1,
  name: "A+++"
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => ({
  component: example2
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => ({
  component: example3,
  name: "A+"
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => ({
  component: example4,
  name: "A"
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => ({
  component: example5
})`,...$.parameters?.docs?.source}}}})))()}Be();export{J as Default,ze as __namedExportsOrder,Re as default,Q as exampleFour,Y as exampleOne,Z as exampleThree,X as exampleTwo,$ as invalidCombinations};