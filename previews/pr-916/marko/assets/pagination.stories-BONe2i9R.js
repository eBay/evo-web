import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as r,H as i,M as a,N as o,O as s,Q as c,R as ee,U as te,V as ne,X as l,Y as re,Z as ie,a as ae,c as u,ct as d,ht as oe,i as f,it as se,k as p,n as m,nt as h,o as ce,ot as le,r as g,rt as _,s as v,t as y,w as ue}from"./dom-DAi6NM7T.js";import{t as de}from"./controllable.feat--isLa5cW.js";import{s as fe}from"./evo-icon-BcUhk3ax.js";import{t as pe}from"./icon-button-BNGaPj6P.js";import{i as me,n as he,t as ge}from"./evo-icon-button-PqXv2_d4.js";import{t as _e}from"./utility-BKdLH2Kl.js";import{a as ve,c as ye,d as be,f as xe,h as Se,i as Ce,l as we,m as Te,n as Ee,o as De,p as Oe,r as ke,s as Ae,t as je,u as Me}from"./evo-icon-overflow-horizontal-24-DjMTEbUg.js";var Ne;function Pe(){return(Pe=e((()=>{Ne=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function Fe(e){let t=e.style.width;e.style.width=`100vw`;let n=e.offsetWidth;return e.style.width=t,n}function Ie(){return(Ie=e((()=>{typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches})))()}function Le(){return(Le=e((()=>{})))()}function Re(){return(Re=e((()=>{Le(),_e(),fe(),pe()})))()}function b(e){P(e,0),I(e,C)}var x,S,ze,C,Be,Ve,w,He,T,Ue,We,Ge,Ke,E,qe,D,O,k,Je,A,j,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,M,dt,N,ft,pt,P,mt,F,I,ht,gt,L,_t,R,vt,yt,bt,z,xt,St,Ct,wt,Tt,B,Et,Dt,Ot,kt,V,H,At,U,jt,W,Mt,G,Nt,K,Pt,Ft;function q(){return(q=e((()=>{Ie(),me(),f(),Se(),ve(),de(),Me(),Re(),x=`<nav role=navigation><span aria-live=polite role=status><!></span><!><ol class=pagination__items></ol><!></nav>`,S=` E%l%b b%l`,ze=9,C=5,se(),Be=e=>{Ae(e.a),De(e.a,{})},Ve=o(`N2`,ye,(e=>`/${e}&`)(we),Be),w=p(10,e=>u(e.a,[`pagination__item`,e._._.g]),e=>e._._),He=e=>{w(e),Ee(e.b),je(e.b,{})},T=p(10,e=>u(e.a,[`pagination__item`,e._._.g]),e=>e._._),Ue=T,We=e=>{xe(e.a),be(e.a,{})},Ge=o(`N3`,Oe,(e=>`/${e}&`)(Te),We),Ke=l(0,`<span role=separator></span>`,` `,Ue,(e=>`<span role=separator>${e}</span>`)(ke),(e=>` D/${e}&l`)(Ce),He),E=p(41,e=>Ke(e,+!e._._.y),e=>e._._),qe=e=>{E(e),O(e),k(e)},D=h(1,e=>v(e.a,`hidden`,e._._.a8||e._._.a3===e._.M)),O=p(43,e=>{e._._.a3,e._.M,D(e)},e=>e._._),k=p(44,D,e=>e._._),Je=l(0,`<li></li>`,` `,qe),A=h(3,e=>Je(e,e._.a2===e.M||e._.a3===e.M?0:1)),j=te(3,28,`M`,A),Ye=e=>{j._(e),Xe._(e),Ze._(e)},Xe=te(3,29,`M`,A),Ze=ne(3,e=>v(e.b,`hidden`,e._.a9(e.M))),Qe=ee(2),$e=(e,t)=>{tt(e,t?.class),Qe(e,t?.href?`a`:`button`,()=>({...t,class:[`pagination__item`,t?.class],"aria-current":t?.current&&`page`}))},et=(e,t)=>$e(e,t[0]),tt=n(6,s(T,w)),nt=p(40,e=>d(e.a,e._.r)),rt=o(`N4`,` `,` `,nt),it=ie(4,0,e=>ge(e.a,{...e._.n,class:[`pagination__next`,e._.n?.href?`icon-link`:`icon-btn`,e._.n?.class],a11yText:e._.n?.a11yText||`Next Page`,style:[e._.n?.style,{"min-width":`40`}],content:Ve(e)})),at=it,ot=ie(2,0,e=>ge(e.a,{...e._.m,class:[`pagination__previous`,e._.m?.href?`icon-link`:`icon-btn`,e._.m?.class],a11yText:e._.m?.a11yText||`Previous Page`,style:[e._.m?.style,{"min-width":`40`}],content:Ge(e)})),st=ot,ct=ee(1,rt),lt=h(37,e=>ct(e,e.q,()=>({id:e.aa,class:`clipped`}))),ut=n(16,lt),M=(e,t)=>ut(e,t===void 0?`h2`:t),dt=n(17,s(nt)),N=(e,t)=>dt(e,t===void 0?`Results Pagination - Page 1`:t),ft=le(`N5`,e=>{e.w(),window.addEventListener(`resize`,e.w,{signal:ae(e,0)})}),pt=n(22,e=>{ce(e,0),ft(e)}),P=c(18,e=>pt(e,K(e))),mt=(e,t)=>{Et(e,t.start),Dt(e,t.end),Ot(e,t.hideDots)},F=h(27,e=>mt(e,(()=>{let t=!1,n=!1,r=e.u.findIndex(e=>e.current),i=Math.floor(e.t/2),a=r-i,o=r+i;return a<=0?(o=e.t-1,a=0):o>=e.z?(o=e.z,a=e.z-(e.t-1)):e.t%2==0&&a++,e.x&&(r+i>=e.z||o>=e.z?t=!0:r<=o-2?o-=2:(a+=1,--o)),e.y&&(r-i<=0?n=!0:r>=a-1?a+=2:(--o,--a)),{start:a,end:o,hideDots:t,hideLeadingDots:n}})()),4),I=c(19,F),ht=n(20,e=>{yt(e,e.u.length),F(e)}),gt=n(35,Ze),L=h(33,e=>gt(e,Pt(e)),3),_t=n(28,e=>{L(e),j(e)}),R=h(26,e=>_t(e,e.x?e.z:-1)),vt=n(25,e=>{R(e),F(e)}),yt=(e,t)=>vt(e,t-1),bt=i(3,`<!><!><li><!></li>`,`b%b D%`,Ye,et),z=(e,t)=>{ht(e,[...t||[]]),bt(e,[t])},xt=n(23,e=>{R(e),F(e)}),St=s(O),Ct=n(29,e=>{L(e),Xe(e),St(e)}),wt=s(E),Tt=n(24,e=>{Ct(e,e.y?1:-1),F(e),wt(e)}),B=(e,t)=>{xt(e,t===`show-last`||t===`overflow`),Tt(e,t===`overflow`)},Et=n(31,L),Dt=n(32,L),Ot=n(34,s(k)),kt=n(36,e=>{v(e.a,`aria-labelledby`,e.aa),lt(e)}),V=(e,t)=>kt(e,t||re(e,`Jaa`)),H=(e,t)=>u(e.a,[`pagination`,t]),At=le(`N6`,e=>r(e,`a`)),U=n(15,e=>{ue(e,`a`,e.p,{role:1,class:1,"aria-labelledby":1}),At(e)}),jt=l(2,(e=>`<!>${e}<!>`)(he),(e=>`b/${e}&b`)(`b%c`),st),W=n(12,e=>{jt(e,+!e.m),ot(e)}),Mt=l(4,(e=>`<!>${e}<!>`)(he),(e=>`b/${e}&b`)(`b%c`),at),G=n(13,e=>{Mt(e,+!e.n),it(e)}),Nt=(e,t)=>{(({a11yCurrentText:t,a11yHeadingTag:n,class:r,id:i,item:a,next:o,prev:s,variant:c,...ee})=>U(e,ee))(t),H(e,t.class),V(e,t.id),M(e,t.a11yHeadingTag),B(e,t.variant),z(e,t.item),W(e,t.prev),G(e,t.next),N(e,t.a11yCurrentText)},K=e=>function(){if(!e.s){let t=e.d.querySelectorAll(`li`);for(let n=0;n<t.length;n++){let r=t[n];if(r.offsetWidth){P(e,r.offsetWidth);break}}}I(e,Math.max(C,Math.min(ze,Math.floor(Fe(e.a)/e.s)-2)))},Pt=e=>function(t){return(t<e.a5||t>e.a6)&&e.a2!==t&&e.a3-1!==t},_(`N0`,K),_(`N1`,Pt),Ft=y(`N`,x,S,b,Nt)})))()}function It(e){b(e.a),W(e.a,m({a11yText:`Previous`,href:`#`,disabled:!0})),z(e.a,g(g(g(g(g(g(g(g(m({href:`#`,current:!0,content:qt(e)}),{href:`#`,content:Kt(e)}),{href:`#`,content:Gt(e)}),{href:`#`,content:Wt(e)}),{href:`#`,content:Ut(e)}),{href:`#`,content:Ht(e)}),{href:`#`,content:Vt(e)}),{href:`#`,content:Bt(e)}),{href:`#`,content:zt(e)})),G(e.a,m({a11yText:`Next`,href:`#`})),N(e.a,`Results — Page 1`),M(e.a),H(e.a),V(e.a),B(e.a),U(e.a,{})}var Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt;function Yt(){return(Yt=e((()=>{q(),f(),Lt=x,Rt=(e=>`/${e}&`)(S),zt=o(`eJNHDhv`,`9`),Bt=o(`m7DpF8F`,`8`),Vt=o(`kiJt1kP`,`7`),Ht=o(`sFUOBj6`,`6`),Ut=o(`U5nOh0s`,`5`),Wt=o(`tUU$Eaq`,`4`),Gt=o(`khbqx8p`,`3`),Kt=o(`HzW8L_w`,`2`),qt=o(`to0KR5z`,`1`),Jt=y(`bLUGQRp`,Lt,Rt,It)})))()}var Xt;function Zt(){return(Zt=e((()=>{Xt=`<evo-pagination a11yCurrentText="Results — Page 1">
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
`})))()}function Qt(e){b(e.a),W(e.a,m({a11yText:`Previous`,disabled:!0})),z(e.a,g(g(g(g(g(g(g(g(m({current:!0,onClick:ln,content:bn(e)}),{onClick:cn,content:yn(e)}),{onClick:sn,content:vn(e)}),{onClick:on,content:_n(e)}),{onClick:an,content:gn(e)}),{onClick:rn,content:hn(e)}),{onClick:nn,content:mn(e)}),{onClick:tn,content:pn(e)}),{onClick:en,content:fn(e)})),G(e.a,m({a11yText:`Next`,onClick:$t})),H(e.a,`example-05`)}function $t(){console.log(`next`)}function en(){console.log(9)}function tn(){console.log(8)}function nn(){console.log(7)}function rn(){console.log(6)}function an(){console.log(5)}function on(){console.log(4)}function sn(){console.log(3)}function cn(){console.log(2)}function ln(){console.log(1)}var un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn;function Cn(){return(Cn=e((()=>{q(),f(),un=x,dn=(e=>`/${e}&`)(S),fn=o(`h0cRKid`,`9`),pn=o(`Q6ZX4Dj`,`8`),mn=o(`B$SuJ1c`,`7`),hn=o(`wDsGpaz`,`6`),gn=o(`VfK9wsH`,`5`),_n=o(`FI0j_d6`,`4`),vn=o(`D7RFMZL`,`3`),yn=o(`JYVgjDD`,`2`),bn=o(`j9xrrd9`,`1`),xn=n(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};N(e.a,t.a11yCurrentText),M(e.a,t.a11yHeadingTag),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:s,...c})=>c)(t))}),_(`Qzgp3N7`,$t),_(`kq3dbVT`,en),_(`HIHKM0R`,tn),_(`h9AYi$h`,nn),_(`AWcCSVZ`,rn),_(`CyKnsVW`,an),_(`zW64MeS`,on),_(`dtxLvPt`,sn),_(`qib7Y$n`,cn),_(`rukvYge`,ln),Sn=y(`KpXQncR`,un,dn,Qt,xn)})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input class="example-05">
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
`})))()}function En(e){b(e.a),Y(e,0)}var Dn,On,J,kn,An,Y,jn,Mn,Nn,Pn,Fn;function In(){return(In=e((()=>{f(),q(),Dn=x,On=(e=>`/${e}&`)(S),J=15,kn=a(o(`DbQaymw`,` `,` `),{6(e){d(e.a,e.g)}}),An=h(4,e=>{let t={a11yCurrentText:`Results Pagination - Page ${e.d}`,...e.c};N(e.a,t.a11yCurrentText),M(e.a,t.a11yHeadingTag),H(e.a,t.class),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:s,...c})=>c)(t))}),Y=c(3,e=>{W(e.a,m({a11yText:`previous`,disabled:e.d===0,onClick:Pn(e)})),G(e.a,m({a11yText:`next`,disabled:e.d===J,onClick:Nn(e)}));let t;oe(J,1,1,n=>{t=g(t,{current:n===e.d,onClick:Mn({_:e,g:n}),content:kn(e,{6:n})})}),z(e.a,t),An(e)}),jn=n(2,An),Mn=e=>function(){let t=e._;Y(t,e.g)},Nn=e=>function(){Y(e,Math.min(e.d+1,J))},Pn=e=>function(){Y(e,Math.max(e.d-1,0))},_(`mEwCyut`,Mn),_(`wtw6WHe`,Nn),_(`WxnP2vT`,Pn),Fn=y(`I3LKEnr`,Dn,On,En,jn)})))()}var Ln;function Rn(){return(Rn=e((()=>{Ln=`static const SIZE = 15;

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
`})))()}function zn(e){b(e.a),W(e.a,m({a11yText:`Previous`,disabled:!0})),G(e.a,m({a11yText:`Next`}));let t;t=g(t,{current:!0,content:Un(e)}),oe(50,2,1,n=>{t=g(t,{content:Hn(e,{4:n})})}),z(e.a,t)}var Bn,Vn,Hn,Un,Wn,Gn;function Kn(){return(Kn=e((()=>{f(),q(),Bn=x,Vn=(e=>`/${e}&`)(S),Hn=a(o(`mc0cwei`,` `,` `),{4(e){d(e.a,e.e)}}),Un=o(`fp4dHXd`,`1`),Wn=n(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};N(e.a,t.a11yCurrentText),M(e.a,t.a11yHeadingTag),H(e.a,t.class),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:s,...c})=>c)(t))}),Gn=y(`vzlDAxw`,Bn,Vn,zn,Wn)})))()}var qn;function Jn(){return(Jn=e((()=>{qn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input>
  <@prev a11yText="Previous" disabled/>
  <@item current>1</@item>
  <for|i| from=2 to=50>
    <@item>\${i}</@item>
  </for>
  <@next a11yText="Next"/>
</evo-pagination>
`})))()}var Yn,X,Z,Q,$,Xn;function Zn(){return(Zn=e((()=>{Pe(),q(),Yt(),Zt(),Cn(),Tn(),In(),Rn(),Kn(),Jn(),Yn={title:`navigation & disclosure/evo-pagination`,component:Ft,parameters:{docs:{description:{component:Ne}}},argTypes:{a11yCurrentText:{type:{name:`string`,required:!0},control:`text`,description:`Localized description for the current page (e.g. Results of Page 1)`},a11yHeadingTag:{type:`string`,control:`text`,description:`HTML tag to use for the a11y heading`,table:{defaultValue:{summary:`h2`}}},item:{description:`Attribute tag representing a pagination item`,"@":{current:{type:`boolean`,control:`boolean`,description:`Indicates that this item is the current page`},href:{type:`string`,control:`string`,description:"When present, switch to `<a>` instead of `<button>`"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)"}}},prev:{description:`Attribute tag for the previous button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`"}}},next:{description:`Attribute tag for the next button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`"}}},variant:{type:`string`,options:[`show-last`,`show-range`,`overflow`],control:`inline-radio`,description:"If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",table:{defaultValue:{summary:`show-range`}}},"<nav> attributes":{description:"All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through"}}},X=t(Jt,Xt),Z=t(Sn,wn),Q=t(Fn,Ln),$=t(Gn,qn),Xn=[`Links`,`Buttons`,`Interactive`,`ManyItems`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ButtonsTemplate, ButtonsCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InteractiveTemplate, InteractiveCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ManyItemsTemplate, ManyItemsCode)`,...$.parameters?.docs?.source}}}})))()}Zn();export{Z as Buttons,Q as Interactive,X as Links,$ as ManyItems,Xn as __namedExportsOrder,Yn as default};