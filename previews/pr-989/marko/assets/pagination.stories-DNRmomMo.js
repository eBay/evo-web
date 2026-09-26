import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,C as r,D as i,H as a,J as o,L as ee,M as s,O as c,T as te,V as ne,X as re,Y as l,Z as u,a as ie,at as ae,c as d,i as f,j as oe,k as p,n as m,nt as h,o as se,ot as g,pt as ce,r as _,rt as le,s as v,t as y,tt as b}from"./dom-CNWckxLY.js";import{t as ue}from"./controllable.feat-BOmJcZCb.js";import{s as de}from"./evo-icon-COXCIbT1.js";import{t as fe}from"./icon-button-BNGaPj6P.js";import{i as pe,n as me,t as he}from"./evo-icon-button-Cv3N38Ss.js";import{t as ge}from"./utility-D9TBjvgq.js";import{a as _e,c as ve,d as ye,f as be,h as xe,i as Se,l as Ce,m as we,n as Te,o as Ee,p as De,r as Oe,s as ke,t as Ae,u as je}from"./evo-icon-overflow-horizontal-24-DhNqtlah.js";var Me;function Ne(){return(Ne=e((()=>{Me=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function Pe(e){let t=e.style.width;e.style.width=`100vw`;let n=e.offsetWidth;return e.style.width=t,n}function Fe(){return(Fe=e((()=>{typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches})))()}function Ie(){return(Ie=e((()=>{})))()}function Le(){return(Le=e((()=>{Ie(),ge(),de(),fe()})))()}function x(e){F(e,0),L(e,w)}var S,C,Re,w,ze,Be,T,Ve,E,He,Ue,We,Ge,D,Ke,O,k,A,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,j,st,ct,M,lt,N,ut,P,dt,ft,F,pt,I,L,mt,ht,R,gt,z,_t,vt,yt,B,bt,xt,St,Ct,wt,V,Tt,Et,Dt,Ot,H,U,kt,W,At,G,jt,K,Mt,Nt,Pt,Ft;function q(){return(q=e((()=>{Fe(),pe(),f(),xe(),_e(),ue(),je(),Le(),S=`<nav role=navigation><span aria-live=polite role=status><!></span><!><ol class=pagination__items></ol><!></nav>`,C=` E%l%b b%l`,Re=9,w=5,le(),ze=e=>{ke(e.a),Ee(e.a,{})},Be=s(`O2`,ve,(e=>`/${e}&`)(Ce),ze),T=c(10,e=>d(e.a,[`pagination__item`,e._._.g]),e=>e._._),Ve=e=>{T(e),Te(e.b),Ae(e.b,{})},E=c(10,e=>d(e.a,[`pagination__item`,e._._.g]),e=>e._._),He=E,Ue=e=>{be(e.a),ye(e.a,{})},We=s(`O3`,De,(e=>`/${e}&`)(we),Ue),Ge=l(0,`<span role=separator></span>`,` `,He,(e=>`<span role=separator>${e}</span>`)(Oe),(e=>` D/${e}&l`)(Se),Ve),D=c(41,e=>Ge(e,+!e._._.y),e=>e._._),Ke=e=>{D(e),k(e),A(e)},O=b(1,e=>v(e.a,`hidden`,e._._.a8||e._._.a3===e._.M)),k=c(43,e=>{e._._.a3,e._.M,O(e)},e=>e._._),A=c(44,O,e=>e._._),qe=l(0,`<li></li>`,` `,Ke),Je=b(3,e=>qe(e,e._.a2===e.M||e._.a3===e.M?0:1)),Ye=a(3,28,`M`,Je),Xe=e=>{Ye._(e),Ze._(e),Qe._(e)},Ze=a(3,29,`M`,Je),Qe=n(3,e=>v(e.b,`hidden`,e._.a9(e.M))),$e=ee(2),et=(e,t)=>{nt(e,t?.class),$e(e,t?.href?`a`:`button`,()=>({...t,class:[`pagination__item`,t?.class],"aria-current":t?.current&&`page`}))},tt=(e,t)=>et(e,t[0]),nt=p(6,i(E,T)),rt=c(40,e=>g(e.a,e._.r)),it=s(`O4`,` `,` `,rt),at=re(4,0,e=>he(e.a,{...e._.n,class:[`pagination__next`,e._.n?.href?`icon-link`:`icon-btn`,e._.n?.class],a11yText:e._.n?.a11yText||`Next Page`,style:[e._.n?.style,{"min-width":`40`}],content:Be(e)})),ot=at,j=re(2,0,e=>he(e.a,{...e._.m,class:[`pagination__previous`,e._.m?.href?`icon-link`:`icon-btn`,e._.m?.class],a11yText:e._.m?.a11yText||`Previous Page`,style:[e._.m?.style,{"min-width":`40`}],content:We(e)})),st=j,ct=ee(1,it),M=b(37,e=>ct(e,e.q,()=>({id:e.aa,class:`clipped`}))),lt=p(16,M),N=(e,t)=>lt(e,t===void 0?`h2`:t),ut=p(17,i(rt)),P=(e,t)=>ut(e,t===void 0?`Results Pagination - Page 1`:t),dt=ae(`O5`,e=>{e.w(),window.addEventListener(`resize`,e.w,{signal:ie(e,0)})}),ft=p(22,e=>{se(e,0),dt(e)}),F=u(18,e=>ft(e,Nt(e))),pt=(e,t)=>{Tt(e,t.start),Et(e,t.end),Dt(e,t.hideDots)},I=b(27,e=>pt(e,(()=>{let t=!1,n=!1,r=e.u.findIndex(e=>e.current),i=Math.floor(e.t/2),a=r-i,o=r+i;return a<=0?(o=e.t-1,a=0):o>=e.z?(o=e.z,a=e.z-(e.t-1)):e.t%2==0&&a++,e.x&&(r+i>=e.z||o>=e.z?t=!0:r<=o-2?o-=2:(a+=1,--o)),e.y&&(r-i<=0?n=!0:r>=a-1?a+=2:(--o,--a)),{start:a,end:o,hideDots:t,hideLeadingDots:n}})()),4),L=u(19,I),mt=p(20,e=>{vt(e,e.u.length),I(e)}),ht=p(35,Qe),R=b(33,e=>ht(e,Pt(e)),3),gt=p(28,e=>{R(e),Ye(e)}),z=b(26,e=>gt(e,e.x?e.z:-1)),_t=p(25,e=>{z(e),I(e)}),vt=(e,t)=>_t(e,t-1),yt=ne(3,`<!><!><li><!></li>`,`b%b D%`,Xe,tt),B=(e,t)=>{mt(e,[...t||[]]),yt(e,[t])},bt=p(23,e=>{z(e),I(e)}),xt=i(k),St=p(29,e=>{R(e),Ze(e),xt(e)}),Ct=i(D),wt=p(24,e=>{St(e,e.y?1:-1),I(e),Ct(e)}),V=(e,t)=>{bt(e,t===`show-last`||t===`overflow`),wt(e,t===`overflow`)},Tt=p(31,R),Et=p(32,R),Dt=p(34,i(A)),Ot=p(36,e=>{v(e.a,`aria-labelledby`,e.aa),M(e)}),H=(e,t)=>Ot(e,t||o(e,`Jaa`)),U=(e,t)=>d(e.a,[`pagination`,t]),kt=ae(`O6`,e=>te(e,`a`)),W=p(15,e=>{r(e,`a`,e.p,{role:1,class:1,"aria-labelledby":1}),kt(e)}),At=l(2,(e=>`<!>${e}<!>`)(me),(e=>`b/${e}&b`)(`b%c`),st),G=p(12,e=>{At(e,+!e.m),j(e)}),jt=l(4,(e=>`<!>${e}<!>`)(me),(e=>`b/${e}&b`)(`b%c`),ot),K=p(13,e=>{jt(e,+!e.n),at(e)}),Mt=(e,t)=>{(({a11yCurrentText:t,a11yHeadingTag:n,class:r,id:i,item:a,next:o,prev:ee,variant:s,...c})=>W(e,c))(t),U(e,t.class),H(e,t.id),N(e,t.a11yHeadingTag),V(e,t.variant),B(e,t.item),G(e,t.prev),K(e,t.next),P(e,t.a11yCurrentText)},Nt=e=>function(){if(!e.s){let t=e.d.querySelectorAll(`li`);for(let n=0;n<t.length;n++){let r=t[n];if(r.offsetWidth){F(e,r.offsetWidth);break}}}L(e,Math.max(w,Math.min(Re,Math.floor(Pe(e.a)/e.s)-2)))},Pt=e=>function(t){return(t<e.a5||t>e.a6)&&e.a2!==t&&e.a3-1!==t},h(`O0`,Nt),h(`O1`,Pt),Ft=y(`O`,S,C,x,Mt)})))()}function It(e){x(e.a),G(e.a,m({a11yText:`Previous`,href:`#`,disabled:!0})),B(e.a,_(_(_(_(_(_(_(_(m({href:`#`,current:!0,content:qt(e)}),{href:`#`,content:Kt(e)}),{href:`#`,content:Gt(e)}),{href:`#`,content:Wt(e)}),{href:`#`,content:Ut(e)}),{href:`#`,content:Ht(e)}),{href:`#`,content:Vt(e)}),{href:`#`,content:Bt(e)}),{href:`#`,content:zt(e)})),K(e.a,m({a11yText:`Next`,href:`#`})),P(e.a,`Results — Page 1`),N(e.a),U(e.a),H(e.a),V(e.a),W(e.a,{})}var Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt;function Yt(){return(Yt=e((()=>{q(),f(),Lt=S,Rt=(e=>`/${e}&`)(C),zt=s(`eJNHDhv`,`9`),Bt=s(`m7DpF8F`,`8`),Vt=s(`kiJt1kP`,`7`),Ht=s(`sFUOBj6`,`6`),Ut=s(`U5nOh0s`,`5`),Wt=s(`tUU$Eaq`,`4`),Gt=s(`khbqx8p`,`3`),Kt=s(`HzW8L_w`,`2`),qt=s(`to0KR5z`,`1`),Jt=y(`bLUGQRp`,Lt,Rt,It)})))()}var Xt;function Zt(){return(Zt=e((()=>{Xt=`<evo-pagination a11yCurrentText="Results — Page 1">
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
`})))()}function Qt(e){x(e.a),G(e.a,m({a11yText:`Previous`,disabled:!0})),B(e.a,_(_(_(_(_(_(_(_(m({current:!0,onClick:ln,content:bn(e)}),{onClick:cn,content:yn(e)}),{onClick:sn,content:vn(e)}),{onClick:on,content:_n(e)}),{onClick:an,content:gn(e)}),{onClick:rn,content:hn(e)}),{onClick:nn,content:mn(e)}),{onClick:tn,content:pn(e)}),{onClick:en,content:fn(e)})),K(e.a,m({a11yText:`Next`,onClick:$t})),U(e.a,`example-05`)}function $t(){console.log(`next`)}function en(){console.log(9)}function tn(){console.log(8)}function nn(){console.log(7)}function rn(){console.log(6)}function an(){console.log(5)}function on(){console.log(4)}function sn(){console.log(3)}function cn(){console.log(2)}function ln(){console.log(1)}var un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn;function Cn(){return(Cn=e((()=>{q(),f(),un=S,dn=(e=>`/${e}&`)(C),fn=s(`h0cRKid`,`9`),pn=s(`Q6ZX4Dj`,`8`),mn=s(`B$SuJ1c`,`7`),hn=s(`wDsGpaz`,`6`),gn=s(`VfK9wsH`,`5`),_n=s(`FI0j_d6`,`4`),vn=s(`D7RFMZL`,`3`),yn=s(`JYVgjDD`,`2`),bn=s(`j9xrrd9`,`1`),xn=p(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};P(e.a,t.a11yCurrentText),N(e.a,t.a11yHeadingTag),H(e.a,t.id),V(e.a,t.variant),W(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),h(`Qzgp3N7`,$t),h(`kq3dbVT`,en),h(`HIHKM0R`,tn),h(`h9AYi$h`,nn),h(`AWcCSVZ`,rn),h(`CyKnsVW`,an),h(`zW64MeS`,on),h(`dtxLvPt`,sn),h(`qib7Y$n`,cn),h(`rukvYge`,ln),Sn=y(`KpXQncR`,un,dn,Qt,xn)})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input class="example-05">
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
`})))()}function En(e){x(e.a),Y(e,0)}var Dn,On,J,kn,An,Y,jn,Mn,Nn,Pn,Fn;function In(){return(In=e((()=>{f(),q(),Dn=S,On=(e=>`/${e}&`)(C),J=15,kn=oe(s(`DbQaymw`,` `,` `),{6(e){g(e.a,e.g)}}),An=b(4,e=>{let t={a11yCurrentText:`Results Pagination - Page ${e.d}`,...e.c};P(e.a,t.a11yCurrentText),N(e.a,t.a11yHeadingTag),U(e.a,t.class),H(e.a,t.id),V(e.a,t.variant),W(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),Y=u(3,e=>{G(e.a,m({a11yText:`previous`,disabled:e.d===0,onClick:Pn(e)})),K(e.a,m({a11yText:`next`,disabled:e.d===J,onClick:Nn(e)}));let t;ce(J,1,1,n=>{t=_(t,{current:n===e.d,onClick:Mn({_:e,g:n}),content:kn(e,{6:n})})}),B(e.a,t),An(e)}),jn=p(2,An),Mn=e=>function(){let t=e._;Y(t,e.g)},Nn=e=>function(){Y(e,Math.min(e.d+1,J))},Pn=e=>function(){Y(e,Math.max(e.d-1,0))},h(`mEwCyut`,Mn),h(`wtw6WHe`,Nn),h(`WxnP2vT`,Pn),Fn=y(`I3LKEnr`,Dn,On,En,jn)})))()}var Ln;function Rn(){return(Rn=e((()=>{Ln=`static const SIZE = 15;

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
`})))()}function zn(e){x(e.a),G(e.a,m({a11yText:`Previous`,disabled:!0})),K(e.a,m({a11yText:`Next`}));let t;t=_(t,{current:!0,content:Un(e)}),ce(50,2,1,n=>{t=_(t,{content:Hn(e,{4:n})})}),B(e.a,t)}var Bn,Vn,Hn,Un,Wn,Gn;function Kn(){return(Kn=e((()=>{f(),q(),Bn=S,Vn=(e=>`/${e}&`)(C),Hn=oe(s(`mc0cwei`,` `,` `),{4(e){g(e.a,e.e)}}),Un=s(`fp4dHXd`,`1`),Wn=p(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};P(e.a,t.a11yCurrentText),N(e.a,t.a11yHeadingTag),U(e.a,t.class),H(e.a,t.id),V(e.a,t.variant),W(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),Gn=y(`vzlDAxw`,Bn,Vn,zn,Wn)})))()}var qn;function Jn(){return(Jn=e((()=>{qn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input>
  <@prev a11yText="Previous" disabled/>
  <@item current>1</@item>
  <for|i| from=2 to=50>
    <@item>\${i}</@item>
  </for>
  <@next a11yText="Next"/>
</evo-pagination>
`})))()}var Yn,X,Z,Q,$,Xn;function Zn(){return(Zn=e((()=>{Ne(),q(),Yt(),Zt(),Cn(),Tn(),In(),Rn(),Kn(),Jn(),Yn={title:`navigation & disclosure/evo-pagination`,component:Ft,parameters:{docs:{description:{component:Me}}},argTypes:{a11yCurrentText:{type:{name:`string`,required:!0},control:`text`,description:`Localized description for the current page (e.g. Results of Page 1)`},a11yHeadingTag:{type:`string`,control:`text`,description:`HTML tag to use for the a11y heading`,table:{defaultValue:{summary:`h2`}}},item:{description:`Attribute tag representing a pagination item`,"@":{current:{type:`boolean`,control:`boolean`,description:`Indicates that this item is the current page`},href:{type:`string`,control:`string`,description:"When present, switch to `<a>` instead of `<button>`"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)"}}},prev:{description:`Attribute tag for the previous button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`"}}},next:{description:`Attribute tag for the next button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`"}}},variant:{type:`string`,options:[`show-last`,`show-range`,`overflow`],control:`inline-radio`,description:"If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",table:{defaultValue:{summary:`show-range`}}},"<nav> attributes":{description:"All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through"}}},X=t(Jt,Xt),Z=t(Sn,wn),Q=t(Fn,Ln),$=t(Gn,qn),Xn=[`Links`,`Buttons`,`Interactive`,`ManyItems`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ButtonsTemplate, ButtonsCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InteractiveTemplate, InteractiveCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ManyItemsTemplate, ManyItemsCode)`,...$.parameters?.docs?.source}}}})))()}Zn();export{Z as Buttons,Q as Interactive,X as Links,$ as ManyItems,Xn as __namedExportsOrder,Yn as default};