import{_ as N,f as B,g as $,w as p,N as Z,i as nn,l as an,m as Q,h as tn}from"./dom-5LJ4Il7H.js";import{$ as Y,a as o,b as s,c}from"./index-CotKNGF1.js";import"./iframe-DKc3M6i3.js";import"./preload-helper-PPVm8Dsz.js";function V(n,E,G={},x="",l=!1){const d=x+"	",{body:v,attrs:u}=gn(E,G,d);let k=n;return l&&(k=`@${G[k]||k}`),`<${k+u+(v?`>
${v.replace(/^|\n/gm,`$&${d}`)}
</${k}>`:"/>")}`}function gn(n,E,G){let x="",l="";for(const d in n)if(Object.prototype.hasOwnProperty.call(n,d)&&d!=="renderBody"){const v=n[d],u=d.replace(/([a-z])([A-Z])/g,(k,b,f)=>`${b}-${f.toLowerCase()}`);if(Array.isArray(v))for(const k of v)l+=V(u,k,E,G,!0);else v&&typeof v=="object"?d==="spread"?Object.keys(v).forEach(k=>{x+=` ${k}=${JSON.stringify(v[k])}`}):l+=V(u,v,E,G,!0):x+=` ${u}=${JSON.stringify(v)}`}return n.renderBody&&(l+=n.renderBody),{attrs:x,body:l}}const en=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,rn=Y,An=(n=>`/${n}&`)(c);function mn(n){o(n.a)}const Rn=(n,E)=>s(n.a,{...E,_name:"eek-range-arrow",_type:"icon",_symbol:'<symbol viewbox="0 0 5 6" id=icon-eek-range-arrow><path fill-rule=evenodd clip-rule=evenodd d="M2.32203 0.108736L1.0202 2.6473C0.951945 2.78038 1.04859 2.93856 1.19816 2.93856H1.95692V5.99786H3.04303V2.93856H3.80182C3.95139 2.93856 4.04804 2.78038 3.97979 2.6473L2.67796 0.108736C2.60361 -0.0362453 2.39638 -0.0362455 2.32203 0.108736Z" fill=black></path></symbol>'}),yn=Y,En=(n=>`/${n}&`)(c);function ln(n){o(n.a)}const xn=(n,E)=>s(n.a,{...E,_name:"eek-arrow",_type:"icon",_symbol:'<symbol viewbox="0 0 11 28" id=icon-eek-arrow><path d="M0 27.75H1.13239C1.76009 27.75 2.35161 27.4145 2.73099 26.8434L10.342 15.3851C10.886 14.5662 10.886 13.4338 10.342 12.6149L2.73099 1.15661C2.35161 0.585476 1.76009 0.25 1.13239 0.25H3.09944e-06" stroke=black stroke-width=1></path></symbol>'}),a=((n,E)=>`<div role=img><div class=eek__container aria-hidden=true><span class=eek__rating-range><span> </span>${n}<span> </span></span><span class=eek__rating> </span></div>${E}</div>`)(rn,yn),t=((n,E)=>` G l/${n}&D mD m/${E}&l`)(An,En),dn={"A+++":["D","E","G"],"A++":["E","G"],"A+":["F","G"],A:["G"]};function Gn(n,E,G){const x=dn[n];if(!(x&&x.indexOf(E)>-1))return null;let l=n,d=1;for(;l!==G;){if(d++,E===l)return null;l.length>1?l=l.slice(0,l.length-1):l=String.fromCharCode(l.charCodeAt(0)+1)}return d>7?7:d}const K=Q(17,n=>tn(n.a,["eek",n.q?`eek--rating-${n.q}`:null,n.k==="large"&&"eek--large",n.i]),2),vn=B(16,K),X=Q(14,n=>vn(n,Gn(n.l,n.m,n.n)),2),g=B(11,n=>{Z(n.b,n.l),X(n)}),i=B(12,n=>{Z(n.d,n.m),X(n)}),e=B(13,n=>{Z(n.e,n.n),X(n)}),r=(n,E)=>p(n.a,"aria-label",E),A=B(8,K),m=B(10,K),kn=nn("V5P7X1$",n=>an(n,"a")),R=B(15,n=>{$(n,"a",n.p,{"aria-label":1,role:1,class:1}),kn(n)});function y(n){mn(n.c),Rn(n.c,{}),ln(n.f),xn(n.f,{})}const un=(n,E)=>{(({a11yText:G,class:x,max:l,min:d,rating:v,size:u,...k})=>R(n,k))(E),A(n,E.class),r(n,E.a11yText),m(n,E.size),g(n,E.max),i(n,E.min),e(n,E.rating)},bn=N("ZMyn0uA",a,t,y,un),fn=((n,E,G,x,l,d,v,u,k,b,f,T,h,D,C,F,z,L,H,M,W,I,U,J,P)=>`<div>${n}${E}${G}${x}${l}${d}${v}</div><div>${u}${k}${b}${f}${T}${h}${D}${C}</div><div>${F}${z}${L}${H}${M}${W}${I}${U}${J}${P}</div>`)(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),Tn=((n,E,G,x,l,d,v,u,k,b,f,T,h,D,C,F,z,L,H,M,W,I,U,J,P)=>`D/${n}&/${E}&/${G}&/${x}&/${l}&/${d}&/${v}&lD/${u}&/${k}&/${b}&/${f}&/${T}&/${h}&/${D}&/${C}&lD/${F}&/${z}&/${L}&/${H}&/${M}&/${W}&/${I}&/${U}&/${J}&/${P}&l`)(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t);function hn(n){y(n.a),g(n.a,"A+++"),i(n.a,"D"),e(n.a,"A+++"),r(n.a,"Energy Rating: A+++. Range A+++ - D"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A+++"),i(n.b,"D"),e(n.b,"A++"),r(n.b,"Energy Rating: A++. Range A+++ - D"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A+++"),i(n.c,"D"),e(n.c,"A+"),r(n.c,"Energy Rating: A+. Range A+++ - D"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A+++"),i(n.d,"D"),e(n.d,"A"),r(n.d,"Energy Rating: A. Range A+++ - D"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A+++"),i(n.e,"D"),e(n.e,"B"),r(n.e,"Energy Rating: B. Range A+++ - D"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A+++"),i(n.f,"D"),e(n.f,"C"),r(n.f,"Energy Rating: C. Range A+++ - D"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A+++"),i(n.g,"D"),e(n.g,"D"),r(n.g,"Energy Rating: D. Range A+++ - D"),A(n.g),m(n.g),R(n.g,{}),y(n.h),g(n.h,"A+++"),i(n.h,"E"),e(n.h,"A+++"),r(n.h,"Energy Rating: A+++. Range A+++ - E"),A(n.h),m(n.h),R(n.h,{}),y(n.i),g(n.i,"A+++"),i(n.i,"E"),e(n.i,"A++"),r(n.i,"Energy Rating: A++. Range A+++ - E"),A(n.i),m(n.i),R(n.i,{}),y(n.j),g(n.j,"A+++"),i(n.j,"E"),e(n.j,"A+"),r(n.j,"Energy Rating: A+. Range A+++ - E"),A(n.j),m(n.j),R(n.j,{}),y(n.k),g(n.k,"A+++"),i(n.k,"E"),e(n.k,"A"),r(n.k,"Energy Rating: A. Range A+++ - E"),A(n.k),m(n.k),R(n.k,{}),y(n.l),g(n.l,"A+++"),i(n.l,"E"),e(n.l,"B"),r(n.l,"Energy Rating: B. Range A+++ - E"),A(n.l),m(n.l),R(n.l,{}),y(n.m),g(n.m,"A+++"),i(n.m,"E"),e(n.m,"C"),r(n.m,"Energy Rating: C. Range A+++ - E"),A(n.m),m(n.m),R(n.m,{}),y(n.n),g(n.n,"A+++"),i(n.n,"E"),e(n.n,"D"),r(n.n,"Energy Rating: D. Range A+++ - E"),A(n.n),m(n.n),R(n.n,{}),y(n.o),g(n.o,"A+++"),i(n.o,"E"),e(n.o,"E"),r(n.o,"Energy Rating: E. Range A+++ - E"),A(n.o),m(n.o),R(n.o,{}),y(n.p),g(n.p,"A+++"),i(n.p,"G"),e(n.p,"A+++"),r(n.p,"Energy Rating: A+++. Range A+++ - G"),A(n.p),m(n.p),R(n.p,{}),y(n.q),g(n.q,"A+++"),i(n.q,"G"),e(n.q,"A++"),r(n.q,"Energy Rating: A++. Range A+++ - G"),A(n.q),m(n.q),R(n.q,{}),y(n.r),g(n.r,"A+++"),i(n.r,"G"),e(n.r,"A+"),r(n.r,"Energy Rating: A+. Range A+++ - G"),A(n.r),m(n.r),R(n.r,{}),y(n.s),g(n.s,"A+++"),i(n.s,"G"),e(n.s,"A"),r(n.s,"Energy Rating: A. Range A+++ - G"),A(n.s),m(n.s),R(n.s,{}),y(n.t),g(n.t,"A+++"),i(n.t,"G"),e(n.t,"B"),r(n.t,"Energy Rating: B. Range A+++ - G"),A(n.t),m(n.t),R(n.t,{}),y(n.u),g(n.u,"A+++"),i(n.u,"G"),e(n.u,"C"),r(n.u,"Energy Rating: C. Range A+++ - G"),A(n.u),m(n.u),R(n.u,{}),y(n.v),g(n.v,"A+++"),i(n.v,"G"),e(n.v,"D"),r(n.v,"Energy Rating: D. Range A+++ - G"),A(n.v),m(n.v),R(n.v,{}),y(n.w),g(n.w,"A+++"),i(n.w,"G"),e(n.w,"E"),r(n.w,"Energy Rating: E. Range A+++ - G"),A(n.w),m(n.w),R(n.w,{}),y(n.x),g(n.x,"A+++"),i(n.x,"G"),e(n.x,"F"),r(n.x,"Energy Rating: F. Range A+++ - G"),A(n.x),m(n.x),R(n.x,{}),y(n.y),g(n.y,"A+++"),i(n.y,"G"),e(n.y,"G"),r(n.y,"Energy Rating: G. Range A+++ - G"),A(n.y),m(n.y),R(n.y,{})}const Dn=N("Jaa0oIa",fn,Tn,hn),Cn=((n,E,G,x,l,d,v,u,k,b,f,T,h,D,C,F)=>`<div>${n}${E}${G}${x}${l}${d}${v}</div><div>${u}${k}${b}${f}${T}${h}${D}${C}${F}</div>`)(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),Fn=((n,E,G,x,l,d,v,u,k,b,f,T,h,D,C,F)=>`D/${n}&/${E}&/${G}&/${x}&/${l}&/${d}&/${v}&lD/${u}&/${k}&/${b}&/${f}&/${T}&/${h}&/${D}&/${C}&/${F}&l`)(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t);function _n(n){y(n.a),g(n.a,"A++"),i(n.a,"E"),e(n.a,"A++"),r(n.a,"Energy Rating: A++. Range A++ - E"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A++"),i(n.b,"E"),e(n.b,"A+"),r(n.b,"Energy Rating: A+. Range A++ - E"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A++"),i(n.c,"E"),e(n.c,"A"),r(n.c,"Energy Rating: A. Range A++ - E"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A++"),i(n.d,"E"),e(n.d,"B"),r(n.d,"Energy Rating: B. Range A++ - E"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A++"),i(n.e,"E"),e(n.e,"C"),r(n.e,"Energy Rating: C. Range A++ - E"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A++"),i(n.f,"E"),e(n.f,"D"),r(n.f,"Energy Rating: D. Range A++ - E"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A++"),i(n.g,"E"),e(n.g,"E"),r(n.g,"Energy Rating: E. Range A++ - E"),A(n.g),m(n.g),R(n.g,{}),y(n.h),g(n.h,"A++"),i(n.h,"G"),e(n.h,"A++"),r(n.h,"Energy Rating: A++. Range A++ - G"),A(n.h),m(n.h),R(n.h,{}),y(n.i),g(n.i,"A++"),i(n.i,"G"),e(n.i,"A+"),r(n.i,"Energy Rating: A+. Range A++ - G"),A(n.i),m(n.i),R(n.i,{}),y(n.j),g(n.j,"A++"),i(n.j,"G"),e(n.j,"A"),r(n.j,"Energy Rating: A. Range A++ - G"),A(n.j),m(n.j),R(n.j,{}),y(n.k),g(n.k,"A++"),i(n.k,"G"),e(n.k,"B"),r(n.k,"Energy Rating: B. Range A++ - G"),A(n.k),m(n.k),R(n.k,{}),y(n.l),g(n.l,"A++"),i(n.l,"G"),e(n.l,"C"),r(n.l,"Energy Rating: C. Range A++ - G"),A(n.l),m(n.l),R(n.l,{}),y(n.m),g(n.m,"A++"),i(n.m,"G"),e(n.m,"D"),r(n.m,"Energy Rating: D. Range A++ - G"),A(n.m),m(n.m),R(n.m,{}),y(n.n),g(n.n,"A++"),i(n.n,"G"),e(n.n,"E"),r(n.n,"Energy Rating: E. Range A++ - G"),A(n.n),m(n.n),R(n.n,{}),y(n.o),g(n.o,"A++"),i(n.o,"G"),e(n.o,"F"),r(n.o,"Energy Rating: F. Range A++ - G"),A(n.o),m(n.o),R(n.o,{}),y(n.p),g(n.p,"A++"),i(n.p,"G"),e(n.p,"G"),r(n.p,"Energy Rating: G. Range A++ - G"),A(n.p),m(n.p),R(n.p,{})}const Bn=N("CTf6SyC",Cn,Fn,_n),wn=((n,E,G,x,l,d,v,u,k,b,f,T,h,D,C)=>`<div>${n}${E}${G}${x}${l}${d}${v}</div><div>${u}${k}${b}${f}${T}${h}${D}${C}</div>`)(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),jn=((n,E,G,x,l,d,v,u,k,b,f,T,h,D,C)=>`D/${n}&/${E}&/${G}&/${x}&/${l}&/${d}&/${v}&lD/${u}&/${k}&/${b}&/${f}&/${T}&/${h}&/${D}&/${C}&l`)(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t);function Sn(n){y(n.a),g(n.a,"A+"),i(n.a,"F"),e(n.a,"A+"),r(n.a,"Energy Rating: A+. Range A+ - F"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A+"),i(n.b,"F"),e(n.b,"A"),r(n.b,"Energy Rating: A. Range A+ - F"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A+"),i(n.c,"F"),e(n.c,"B"),r(n.c,"Energy Rating: B. Range A+ - F"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A+"),i(n.d,"F"),e(n.d,"C"),r(n.d,"Energy Rating: C. Range A+ - F"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A+"),i(n.e,"F"),e(n.e,"D"),r(n.e,"Energy Rating: D. Range A+ - F"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A+"),i(n.f,"F"),e(n.f,"E"),r(n.f,"Energy Rating: E. Range A+ - F"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A+"),i(n.g,"F"),e(n.g,"F"),r(n.g,"Energy Rating: F. Range A+ - F"),A(n.g),m(n.g),R(n.g,{}),y(n.h),g(n.h,"A+"),i(n.h,"G"),e(n.h,"A+"),r(n.h,"Energy Rating: A+. Range A+ - G"),A(n.h),m(n.h),R(n.h,{}),y(n.i),g(n.i,"A+"),i(n.i,"G"),e(n.i,"A"),r(n.i,"Energy Rating: A. Range A+ - G"),A(n.i),m(n.i),R(n.i,{}),y(n.j),g(n.j,"A+"),i(n.j,"G"),e(n.j,"B"),r(n.j,"Energy Rating: B. Range A+ - G"),A(n.j),m(n.j),R(n.j,{}),y(n.k),g(n.k,"A+"),i(n.k,"G"),e(n.k,"C"),r(n.k,"Energy Rating: C. Range A+ - G"),A(n.k),m(n.k),R(n.k,{}),y(n.l),g(n.l,"A+"),i(n.l,"G"),e(n.l,"D"),r(n.l,"Energy Rating: D. Range A+ - G"),A(n.l),m(n.l),R(n.l,{}),y(n.m),g(n.m,"A+"),i(n.m,"G"),e(n.m,"E"),r(n.m,"Energy Rating: E. Range A+ - G"),A(n.m),m(n.m),R(n.m,{}),y(n.n),g(n.n,"A+"),i(n.n,"G"),e(n.n,"F"),r(n.n,"Energy Rating: F. Range A+ - G"),A(n.n),m(n.n),R(n.n,{}),y(n.o),g(n.o,"A+"),i(n.o,"G"),e(n.o,"G"),r(n.o,"Energy Rating: G. Range A+ - G"),A(n.o),m(n.o),R(n.o,{})}const qn=N("G$R4G9u",wn,jn,Sn),Nn=((n,E,G,x,l,d,v)=>`<div>${n}${E}${G}${x}${l}${d}${v}</div>`)(a,a,a,a,a,a,a),On=((n,E,G,x,l,d,v)=>`D/${n}&/${E}&/${G}&/${x}&/${l}&/${d}&/${v}&l`)(t,t,t,t,t,t,t);function zn(n){y(n.a),g(n.a,"A"),i(n.a,"G"),e(n.a,"A"),r(n.a,"Energy Rating: A. Range A - G"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A"),i(n.b,"G"),e(n.b,"B"),r(n.b,"Energy Rating: B. Range A - G"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A"),i(n.c,"G"),e(n.c,"C"),r(n.c,"Energy Rating: C. Range A - G"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A"),i(n.d,"G"),e(n.d,"D"),r(n.d,"Energy Rating: D. Range A - G"),A(n.d),m(n.d),R(n.d,{}),y(n.e),g(n.e,"A"),i(n.e,"G"),e(n.e,"E"),r(n.e,"Energy Rating: E. Range A - G"),A(n.e),m(n.e),R(n.e,{}),y(n.f),g(n.f,"A"),i(n.f,"G"),e(n.f,"F"),r(n.f,"Energy Rating: F. Range A - G"),A(n.f),m(n.f),R(n.f,{}),y(n.g),g(n.g,"A"),i(n.g,"G"),e(n.g,"G"),r(n.g,"Energy Rating: G. Range A - G"),A(n.g),m(n.g),R(n.g,{})}const Ln=N("a2yCjv9",Nn,On,zn),Hn=((n,E,G,x)=>`<div>${n}${E}${G}${x}</div>`)(a,a,a,a),Mn=((n,E,G,x)=>`D/${n}&/${E}&/${G}&/${x}&l`)(t,t,t,t);function Wn(n){y(n.a),g(n.a,"B"),i(n.a,"G"),e(n.a,"D"),r(n.a,"Energy Rating: D. Range B - G"),A(n.a),m(n.a),R(n.a,{}),y(n.b),g(n.b,"A"),i(n.b,"G"),e(n.b,"A+++"),r(n.b,"Energy Rating: A+++. Range A - G"),A(n.b),m(n.b),R(n.b,{}),y(n.c),g(n.c,"A++"),i(n.c,"B"),e(n.c,"A++"),r(n.c,"Energy Rating: A++. Range A++ - B"),A(n.c),m(n.c),R(n.c,{}),y(n.d),g(n.d,"A+"),i(n.d,"B"),e(n.d,"A++"),r(n.d,"Energy Rating: A++. Range A+ - B"),A(n.d),m(n.d),R(n.d,{})}const In=N("PFAU8N5",Hn,Mn,Wn),Un=`<div>
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
`,Jn=`<div>
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
`,Pn=`<div>
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
`,Vn=`<div>
  <evo-eek max="A" min="G" rating="A" a11yText="Energy Rating: A. Range A - G"/>
  <evo-eek max="A" min="G" rating="B" a11yText="Energy Rating: B. Range A - G"/>
  <evo-eek max="A" min="G" rating="C" a11yText="Energy Rating: C. Range A - G"/>
  <evo-eek max="A" min="G" rating="D" a11yText="Energy Rating: D. Range A - G"/>
  <evo-eek max="A" min="G" rating="E" a11yText="Energy Rating: E. Range A - G"/>
  <evo-eek max="A" min="G" rating="F" a11yText="Energy Rating: F. Range A - G"/>
  <evo-eek max="A" min="G" rating="G" a11yText="Energy Rating: G. Range A - G"/>
</div>
`,Zn=`<div>
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
`,on={title:"graphics & icons/evo-eek",component:bn,parameters:{docs:{description:{component:en}}},argTypes:{a11yText:{type:{name:"string",required:!0},control:"text",description:"Localized, the aria-label accessibility label for the eek component. This is for internationalization. It should use min, max, and rating in the label in order to demonstrate to screen readers the content on the component. Expected value `Energy efficiency class ${rating}. ${min} - ${max}`. May be set to `null` only if accessibility is provided through other means."},rating:{type:{name:"string",required:!0},control:"text",description:"The energy rating"},max:{type:{name:"string",required:!0},control:"text",description:"The maximum range"},min:{type:{name:"string",required:!0},control:"text",description:"The minimum range"},size:{type:"string",options:["regular (default)","large"],control:"inline-radio",description:"The size of the EEK."},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},_=n=>({input:n});_.args={max:"A+++",min:"E",rating:"C"};_.parameters={docs:{source:{code:V("evo-eek",_.args)}}};const w=()=>({component:Dn,name:"A+++"});w.storyName="A+++";w.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Un}}};const j=()=>({component:Bn});j.storyName="A++";j.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Jn}}};const S=()=>({component:qn,name:"A+"});S.storyName="A++";S.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Pn}}};const q=()=>({component:Ln,name:"A"});q.storyName="A";q.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Vn}}};const O=()=>({component:In});O.parameters={controls:{hideNoControlsWarning:!0},docs:{source:{code:Zn}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => ({
  input: args
})`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => ({
  component: example1,
  name: "A+++"
})`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => ({
  component: example2
})`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => ({
  component: example3,
  name: "A+"
})`,...S.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => ({
  component: example4,
  name: "A"
})`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => ({
  component: example5
})`,...O.parameters?.docs?.source}}};const sn=["Default","exampleOne","exampleTwo","exampleThree","exampleFour","invalidCombinations"];export{_ as Default,sn as __namedExportsOrder,on as default,q as exampleFour,w as exampleOne,S as exampleThree,j as exampleTwo,O as invalidCombinations};
