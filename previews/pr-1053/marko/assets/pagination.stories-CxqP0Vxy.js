import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,E as i,G as a,H as o,M as ee,N as s,O as c,Q as te,R as ne,W as re,a as ie,at as l,c as u,ct as ae,et as oe,i as d,j as f,k as p,n as m,o as se,ot as h,r as g,s as _,t as v,tt as y,ut as b,vt as ce,w as le}from"./dom-BJr4MHiD.js";import{t as ue}from"./controllable.feat-Cluo05Rw.js";import{s as de}from"./evo-icon-DLs-Huf2.js";import{t as fe}from"./dynamic-tag-script.feat-HXJ_YFdo.js";import{t as pe}from"./icon-button-B3iEEMem.js";import{i as me,n as he,t as ge}from"./evo-icon-button-Cm1I-zho.js";import{t as _e}from"./utility-BgeYVZyB.js";import{a as ve,c as ye,d as be,f as xe,h as Se,i as Ce,l as we,m as Te,n as Ee,o as De,p as Oe,r as ke,s as Ae,t as je,u as Me}from"./evo-icon-overflow-horizontal-24-CBwp7qtI.js";var Ne;function Pe(){return(Pe=e((()=>{Ne=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-pagination
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<evo-pagination>\` is a tag used to create a pagination navigation. It will display up to 9 page links.

**Note:** If you want to have client side or ajax based navigation then you should omit the \`href\` attribute on each item. This will cause each item to be \`<button>\` instead of an \`<a>\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-pagination)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-pagination)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-pagination/examples)
`})))()}function Fe(e){let t=e.style.width;e.style.width=`100vw`;let n=e.offsetWidth;return e.style.width=t,n}function Ie(){return(Ie=e((()=>{typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches})))()}function Le(){return(Le=e((()=>{})))()}function Re(){return(Re=e((()=>{Le(),_e(),de(),pe()})))()}function x(e){P(e,0),I(e,w)}var S,C,ze,w,Be,Ve,T,He,E,Ue,We,Ge,Ke,D,qe,O,k,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,A,lt,ut,j,dt,M,ft,N,pt,mt,P,ht,F,I,gt,_t,L,vt,R,yt,bt,xt,z,St,Ct,wt,Tt,Et,B,Dt,Ot,kt,At,V,H,jt,U,Mt,W,Nt,G,Pt,K,Ft,It;function q(){return(q=e((()=>{Ie(),me(),d(),Se(),ve(),fe(),ue(),Me(),Re(),S=`<nav role=navigation><span aria-live=polite role=status><!></span><!><ol class=pagination__items></ol><!></nav>`,C=` E%l%b b%l`,ze=9,w=5,Be=e=>{Ae(e.a),De(e.a,{})},Ve=f(`Q2`,ye,(e=>`/${e}&`)(we),Be),T=p(10,e=>u(e.a,[`pagination__item`,e._._.g]),e=>e._._,`Q3`),He=e=>{T(e),Ee(e.b),je(e.b,{})},E=p(10,e=>u(e.a,[`pagination__item`,e._._.g]),e=>e._._,`Q4`),Ue=E,We=e=>{xe(e.a),be(e.a,{})},Ge=f(`Q5`,Oe,(e=>`/${e}&`)(Te),We),Ke=n(0,`<span role=separator></span>`,` `,Ue,(e=>`<span role=separator>${e}</span>`)(ke),(e=>` D/${e}&l`)(Ce),He),D=p(41,e=>Ke(e,+!e._._.y),e=>e._._,`Q6`),qe=e=>{D(e),k(e),Je(e)},O=l(1,e=>_(e.a,`hidden`,e._._.a8||e._._.a3===e._.M)),k=p(43,O,e=>e._._,`Q7`),Je=p(44,O,e=>e._._,`Q8`),Ye=n(0,`<li></li>`,` `,qe),Xe=l(3,e=>Ye(e,e._.a2===e.M||e._.a3===e.M?0:1)),Ze=a(3,28,`M`,Xe),Qe=e=>{Ze._(e),$e._(e),et._(e)},$e=a(3,29,`M`,Xe),et=o(3,e=>_(e.b,`hidden`,e._.a9(e.M))),tt=ne(2),nt=(e,t)=>{it(e,t?.class),tt(e,t?.href?`a`:`button`,()=>({...t,class:[`pagination__item`,t?.class],"aria-current":t?.current&&`page`}))},rt=(e,t)=>nt(e,t[0]),it=r(6,c(E,T)),at=p(40,e=>b(e.a,e._.r),0,`Q9`),ot=f(`Q10`,` `,` `,at),s(ot),st=oe(4,0,e=>ge(e.a,{...e._.n,class:[`pagination__next`,e._.n?.href?`icon-link`:`icon-btn`,e._.n?.class],a11yText:e._.n?.a11yText||`Next Page`,style:[e._.n?.style,{"min-width":`40`}],content:Ve(e)})),ct=st,A=oe(2,0,e=>ge(e.a,{...e._.m,class:[`pagination__previous`,e._.m?.href?`icon-link`:`icon-btn`,e._.m?.class],a11yText:e._.m?.a11yText||`Previous Page`,style:[e._.m?.style,{"min-width":`40`}],content:Ge(e)})),lt=A,ut=ne(1,ot),j=l(37,e=>ut(e,e.q,()=>({id:e.aa,class:`clipped`}))),dt=r(16,j),M=(e,t)=>dt(e,t===void 0?`h2`:t),ft=r(17,c(at)),N=(e,t)=>ft(e,t===void 0?`Results Pagination - Page 1`:t),pt=ae(`Q11`,e=>{e.w(),window.addEventListener(`resize`,e.w,{signal:ie(e,0)})}),mt=r(22,e=>{se(e,0),pt(e)}),P=y(18,e=>mt(e,K(e))),ht=(e,t)=>{Dt(e,t.start),Ot(e,t.end),kt(e,t.hideDots)},F=l(27,e=>ht(e,(()=>{let t=!1,n=!1,r=e.u.findIndex(e=>e.current),i=Math.floor(e.t/2),a=r-i,o=r+i;return a<=0?(o=e.t-1,a=0):o>=e.z?(o=e.z,a=e.z-(e.t-1)):e.t%2==0&&a++,e.x&&(r+i>=e.z||o>=e.z?t=!0:r<=o-2?o-=2:(a+=1,--o)),e.y&&(r-i<=0?n=!0:r>=a-1?a+=2:(--o,--a)),{start:a,end:o,hideDots:t,hideLeadingDots:n}})()),4),I=y(19,F),gt=r(20,e=>{bt(e,e.u.length),F(e)}),_t=r(35,et),L=l(33,e=>_t(e,Ft(e)),3),vt=r(28,e=>{L(e),Ze(e)}),R=l(26,e=>vt(e,e.x?e.z:-1)),yt=r(25,e=>{R(e),F(e)}),bt=(e,t)=>yt(e,t-1),xt=re(3,`<!><!><li><!></li>`,`b%b D%`,Qe,rt),z=(e,t)=>{gt(e,[...t||[]]),xt(e,[t])},St=r(23,e=>{R(e),F(e)}),Ct=c(k),wt=r(29,e=>{L(e),$e(e),Ct(e)}),Tt=c(D),Et=r(24,e=>{wt(e,e.y?1:-1),F(e),Tt(e)}),B=(e,t)=>{St(e,t===`show-last`||t===`overflow`),Et(e,t===`overflow`)},Dt=r(31,L),Ot=r(32,L),kt=r(34,c(Je)),At=r(36,e=>{_(e.a,`aria-labelledby`,e.aa),j(e)}),V=(e,t)=>At(e,t||te(e,`Jaa`)),H=(e,t)=>u(e.a,[`pagination`,t]),jt=ae(`Q12`,e=>i(e,`a`)),U=r(15,e=>{le(e,`a`,e.p,{role:1,class:1,"aria-labelledby":1}),jt(e)}),Mt=n(2,(e=>`<!>${e}<!>`)(he),(e=>`b/${e}&b`)(`b%c`),lt),W=r(12,e=>{Mt(e,+!e.m),A(e)}),Nt=n(4,(e=>`<!>${e}<!>`)(he),(e=>`b/${e}&b`)(`b%c`),ct),G=r(13,e=>{Nt(e,+!e.n),st(e)}),Pt=(e,t)=>{(({a11yCurrentText:t,a11yHeadingTag:n,class:r,id:i,item:a,next:o,prev:ee,variant:s,...c})=>U(e,c))(t),H(e,t.class),V(e,t.id),M(e,t.a11yHeadingTag),B(e,t.variant),z(e,t.item),W(e,t.prev),G(e,t.next),N(e,t.a11yCurrentText)},K=e=>function(){if(!e.s){let t=e.d.querySelectorAll(`li`);for(let n=0;n<t.length;n++){let r=t[n];if(r.offsetWidth){P(e,r.offsetWidth);break}}}I(e,Math.max(w,Math.min(ze,Math.floor(Fe(e.a)/e.s)-2)))},Ft=e=>function(t){return(t<e.a5||t>e.a6)&&e.a2!==t&&e.a3-1!==t},h.Q0=K,h.Q1=Ft,It=v(`Q`,S,C,x,Pt)})))()}function Lt(e){x(e.a),W(e.a,m({a11yText:`Previous`,href:`#`,disabled:!0})),z(e.a,g(g(g(g(g(g(g(g(m({href:`#`,current:!0,content:Jt(e)}),{href:`#`,content:qt(e)}),{href:`#`,content:Kt(e)}),{href:`#`,content:Gt(e)}),{href:`#`,content:Wt(e)}),{href:`#`,content:Ut(e)}),{href:`#`,content:Ht(e)}),{href:`#`,content:Vt(e)}),{href:`#`,content:Bt(e)})),G(e.a,m({a11yText:`Next`,href:`#`})),N(e.a,`Results — Page 1`),M(e.a),H(e.a),V(e.a),B(e.a),U(e.a,{})}var Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{q(),d(),Rt=S,zt=(e=>`/${e}&`)(C),Bt=f(`eJNHDhv`,`9`),Vt=f(`m7DpF8F`,`8`),Ht=f(`kiJt1kP`,`7`),Ut=f(`sFUOBj6`,`6`),Wt=f(`U5nOh0s`,`5`),Gt=f(`tUU$Eaq`,`4`),Kt=f(`khbqx8p`,`3`),qt=f(`HzW8L_w`,`2`),Jt=f(`to0KR5z`,`1`),Yt=v(`bLUGQRp`,Rt,zt,Lt)})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`<evo-pagination a11yCurrentText="Results — Page 1">
  <@prev a11yText="Previous" href="#" disabled/>
  <@item href="#" current>1</@item>
  <@item href="#">2</@item>
  <@item href="#">3</@item>
  <@item href="#">4</@item>
  <@item href="#">5</@item>
  <@item href="#">6</@item>
  <@item href="#">7</@item>
  <@item href="#">8</@item>
  <@item href="#">9</@item>
  <@next a11yText="Next" href="#"/>
</evo-pagination>
`})))()}function $t(e){x(e.a),W(e.a,m({a11yText:`Previous`,disabled:!0})),z(e.a,g(g(g(g(g(g(g(g(m({current:!0,onClick:un,content:xn(e)}),{onClick:ln,content:bn(e)}),{onClick:cn,content:yn(e)}),{onClick:sn,content:vn(e)}),{onClick:on,content:_n(e)}),{onClick:an,content:gn(e)}),{onClick:rn,content:hn(e)}),{onClick:nn,content:mn(e)}),{onClick:tn,content:pn(e)})),G(e.a,m({a11yText:`Next`,onClick:en})),H(e.a,`example-05`)}function en(){console.log(`next`)}function tn(){console.log(9)}function nn(){console.log(8)}function rn(){console.log(7)}function an(){console.log(6)}function on(){console.log(5)}function sn(){console.log(4)}function cn(){console.log(3)}function ln(){console.log(2)}function un(){console.log(1)}var dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn;function wn(){return(wn=e((()=>{q(),d(),dn=S,fn=(e=>`/${e}&`)(C),pn=f(`h0cRKid`,`9`),mn=f(`Q6ZX4Dj`,`8`),hn=f(`B$SuJ1c`,`7`),gn=f(`wDsGpaz`,`6`),_n=f(`VfK9wsH`,`5`),vn=f(`FI0j_d6`,`4`),yn=f(`D7RFMZL`,`3`),bn=f(`JYVgjDD`,`2`),xn=f(`j9xrrd9`,`1`),Sn=r(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};N(e.a,t.a11yCurrentText),M(e.a,t.a11yHeadingTag),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),h.Qzgp3N7=en,h.kq3dbVT=tn,h.HIHKM0R=nn,h.h9AYi$h=rn,h.AWcCSVZ=an,h.CyKnsVW=on,h.zW64MeS=sn,h.dtxLvPt=cn,h.qib7Y$n=ln,h.rukvYge=un,Cn=v(`KpXQncR`,dn,fn,$t,Sn)})))()}var Tn;function En(){return(En=e((()=>{Tn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input class="example-05">
  <@prev a11yText="Previous" disabled/>
  <@item
    current
    onClick() {
      console.log(1);
    }
  >
    1
  </@item>
  <@item onClick() {
    console.log(2);
  }>
    2
  </@item>
  <@item onClick() {
    console.log(3);
  }>
    3
  </@item>
  <@item onClick() {
    console.log(4);
  }>
    4
  </@item>
  <@item onClick() {
    console.log(5);
  }>
    5
  </@item>
  <@item onClick() {
    console.log(6);
  }>
    6
  </@item>
  <@item onClick() {
    console.log(7);
  }>
    7
  </@item>
  <@item onClick() {
    console.log(8);
  }>
    8
  </@item>
  <@item onClick() {
    console.log(9);
  }>
    9
  </@item>
  <@next
    a11yText="Next"
    onClick() {
      console.log("next");
    }
  />
</evo-pagination>
`})))()}function Dn(e){x(e.a),Y(e,0)}var On,kn,J,An,jn,Y,Mn,Nn,Pn,Fn,In;function Ln(){return(Ln=e((()=>{d(),q(),On=S,kn=(e=>`/${e}&`)(C),J=15,An=ee(f(`DbQaymw`,` `,` `),{1(e){b(e.a,e.b)}}),h.DbQaymw=An,jn=l(4,e=>{let t={a11yCurrentText:`Results Pagination - Page ${e.d}`,...e.c};N(e.a,t.a11yCurrentText),M(e.a,t.a11yHeadingTag),H(e.a,t.class),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),Y=y(3,e=>{W(e.a,m({a11yText:`previous`,disabled:e.d===0,onClick:Fn(e)})),G(e.a,m({a11yText:`next`,disabled:e.d===J,onClick:Pn(e)}));let t;ce(J,1,1,n=>{t=g(t,{current:n===e.d,onClick:Nn({_:e,f:n}),content:An(e,{1:n})})}),z(e.a,t),jn(e)}),Mn=r(2,jn),Nn=e=>function(){let t=e._;Y(t,e.f)},Pn=e=>function(){Y(e,Math.min(e.d+1,J))},Fn=e=>function(){Y(e,Math.max(e.d-1,0))},h.mEwCyut=Nn,h.wtw6WHe=Pn,h.WxnP2vT=Fn,In=v(`I3LKEnr`,On,kn,Dn,Mn)})))()}var Rn;function zn(){return(zn=e((()=>{Rn=`static const SIZE = 15;

<let/current=0>

<evo-pagination a11yCurrentText=\`Results Pagination - Page \${current}\` ...input>
  <@prev
    a11yText="previous"
    disabled=current === 0
    onClick() {
      current = Math.max(current - 1, 0);
    }
  />
  <for|i| from=1 to=SIZE>
    <@item
      current=i === current
      onClick() {
        current = i;
      }
    >
      \${i}
    </@item>
  </for>
  <@next
    a11yText="next"
    disabled=current === SIZE
    onClick() {
      current = Math.min(current + 1, SIZE);
    }
  />
</evo-pagination>
`})))()}function Bn(e){x(e.a),W(e.a,m({a11yText:`Previous`,disabled:!0})),G(e.a,m({a11yText:`Next`}));let t;t=g(t,{current:!0,content:Wn(e)}),ce(50,2,1,n=>{t=g(t,{content:Un(e,{1:n})})}),z(e.a,t)}var Vn,Hn,Un,Wn,Gn,Kn;function qn(){return(qn=e((()=>{d(),q(),Vn=S,Hn=(e=>`/${e}&`)(C),Un=ee(f(`mc0cwei`,` `,` `),{1(e){b(e.a,e.b)}}),h.mc0cwei=Un,Wn=f(`fp4dHXd`,`1`),Gn=r(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};N(e.a,t.a11yCurrentText),M(e.a,t.a11yHeadingTag),H(e.a,t.class),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),Kn=v(`vzlDAxw`,Vn,Hn,Bn,Gn)})))()}var Jn;function Yn(){return(Yn=e((()=>{Jn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input>
  <@prev a11yText="Previous" disabled/>
  <@item current>1</@item>
  <for|i| from=2 to=50>
    <@item>\${i}</@item>
  </for>
  <@next a11yText="Next"/>
</evo-pagination>
`})))()}var Xn,X,Z,Q,$,Zn;function Qn(){return(Qn=e((()=>{Pe(),q(),Xt(),Qt(),wn(),En(),Ln(),zn(),qn(),Yn(),Xn={title:`navigation & disclosure/evo-pagination`,component:It,parameters:{docs:{description:{component:Ne}}},argTypes:{a11yCurrentText:{type:{name:`string`,required:!0},control:`text`,description:`Localized description for the current page (e.g. Results of Page 1)`},a11yHeadingTag:{type:`string`,control:`text`,description:`HTML tag to use for the a11y heading`,table:{defaultValue:{summary:`h2`}}},item:{description:`Attribute tag representing a pagination item`,"@":{current:{type:`boolean`,control:`boolean`,description:`Indicates that this item is the current page`},href:{type:`string`,control:`string`,description:"When present, switch to `<a>` instead of `<button>`"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)"}}},prev:{description:`Attribute tag for the previous button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`"}}},next:{description:`Attribute tag for the next button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`"}}},variant:{type:`string`,options:[`show-last`,`show-range`,`overflow`],control:`inline-radio`,description:"If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",table:{defaultValue:{summary:`show-range`}}},"<nav> attributes":{description:"All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through"}}},X=t(Yt,Zt),Z=t(Cn,Tn),Q=t(In,Rn),$=t(Kn,Jn),Zn=[`Links`,`Buttons`,`Interactive`,`ManyItems`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ButtonsTemplate, ButtonsCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InteractiveTemplate, InteractiveCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ManyItemsTemplate, ManyItemsCode)`,...$.parameters?.docs?.source}}}})))()}Qn();export{Z as Buttons,Q as Interactive,X as Links,$ as ManyItems,Zn as __namedExportsOrder,Xn as default};