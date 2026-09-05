import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,C as r,D as i,H as a,J as o,L as ee,M as s,O as c,T as te,V as ne,X as l,Y as re,a as ie,at as ae,c as oe,et as u,ft as se,i as d,it as ce,j as le,k as f,n as p,nt as ue,o as de,q as fe,r as m,s as pe,t as h,tt as g}from"./dom-CrmgVQ1h.js";import{t as me}from"./controllable.feat-Zzhbi3Cf.js";import{s as he}from"./evo-icon-CFoPYBpm.js";import{t as ge}from"./icon-button-BNGaPj6P.js";import{i as _e,n as ve,t as ye}from"./evo-icon-button-CFYZQjNt.js";import{t as be}from"./utility-DmR8Y_-e.js";import{a as xe,c as Se,d as Ce,f as we,h as Te,i as Ee,l as De,m as Oe,n as ke,o as Ae,p as je,r as Me,s as Ne,t as Pe,u as Fe}from"./evo-icon-overflow-horizontal-24-Da8HjxyP.js";var Ie;function Le(){return(Le=e((()=>{Ie=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function Re(e){let t=e.style.width;e.style.width=`100vw`;let n=e.offsetWidth;return e.style.width=t,n}function ze(){return(ze=e((()=>{typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches})))()}function Be(){return(Be=e((()=>{})))()}function Ve(){return(Ve=e((()=>{Be(),be(),he(),ge()})))()}function _(e){dt(e,0),pt(e,b)}var v,y,He,b,Ue,We,x,Ge,S,Ke,qe,Je,Ye,C,Xe,w,T,E,Ze,D,O,Qe,k,A,$e,et,tt,nt,j,rt,M,it,N,at,ot,P,st,F,ct,I,lt,ut,dt,ft,L,pt,mt,ht,R,gt,_t,vt,yt,bt,z,xt,St,Ct,wt,Tt,B,Et,Dt,Ot,kt,V,H,At,U,jt,W,Mt,G,Nt,Pt,Ft,It;function K(){return(K=e((()=>{ze(),_e(),d(),Te(),xe(),me(),Fe(),Ve(),v=`<nav role=navigation><span aria-live=polite role=status><!></span><!><ol class=pagination__items></ol><!></nav>`,y=` E%l%b b%l`,He=9,b=5,ue(),Ue=e=>{Ne(e.a),Ae(e.a,{})},We=s(`N2`,Se,(e=>`/${e}&`)(De),Ue),x=c(10,e=>oe(e.a,[`pagination__item`,e._._.g]),e=>e._._),Ge=e=>{x(e),ke(e.b),Pe(e.b,{})},S=c(10,e=>oe(e.a,[`pagination__item`,e._._.g]),e=>e._._),Ke=S,qe=e=>{we(e.a),Ce(e.a,{})},Je=s(`N3`,je,(e=>`/${e}&`)(Oe),qe),Ye=o(0,`<span role=separator></span>`,` `,Ke,(e=>`<span role=separator>${e}</span>`)(Me),(e=>` D/${e}&l`)(Ee),Ge),C=c(41,e=>Ye(e,+!e._._.y),e=>e._._),Xe=e=>{C(e),T(e),E(e)},w=u(1,e=>pe(e.a,`hidden`,e._._.a8||e._._.a3===e._.M)),T=c(43,e=>{e._._.a3,e._.M,w(e)},e=>e._._),E=c(44,w,e=>e._._),Ze=o(0,`<li></li>`,` `,Xe),D=u(3,e=>Ze(e,e._.a2===e.M||e._.a3===e.M?0:1)),O=a(3,28,`M`,D),Qe=e=>{O._(e),k._(e),A._(e)},k=a(3,29,`M`,D),A=n(3,e=>pe(e.b,`hidden`,e._.a9(e.M))),$e=ee(2),et=(e,t)=>{nt(e,t?.class),$e(e,t?.href?`a`:`button`,()=>({...t,class:[`pagination__item`,t?.class],"aria-current":t?.current&&`page`}))},tt=(e,t)=>et(e,t[0]),nt=f(6,i(S,x)),j=c(40,e=>ae(e.a,e._.r)),rt=s(`N4`,` `,` `,j),M=re(4,0,e=>ye(e.a,{...e._.n,class:[`pagination__next`,e._.n?.href?`icon-link`:`icon-btn`,e._.n?.class],a11yText:e._.n?.a11yText||`Next Page`,style:[e._.n?.style,{"min-width":`40`}],content:We(e)})),it=M,N=re(2,0,e=>ye(e.a,{...e._.m,class:[`pagination__previous`,e._.m?.href?`icon-link`:`icon-btn`,e._.m?.class],a11yText:e._.m?.a11yText||`Previous Page`,style:[e._.m?.style,{"min-width":`40`}],content:Je(e)})),at=N,ot=ee(1,rt),P=u(37,e=>ot(e,e.q,()=>({id:e.aa,class:`clipped`}))),st=f(16,P),F=(e,t)=>st(e,t===void 0?`h2`:t),ct=f(17,i(j)),I=(e,t)=>ct(e,t===void 0?`Results Pagination - Page 1`:t),lt=ce(`N5`,e=>{e.w(),window.addEventListener(`resize`,e.w,{signal:ie(e,0)})}),ut=f(22,e=>{de(e,0),lt(e)}),dt=l(18,e=>ut(e,Pt(e))),ft=(e,t)=>{Et(e,t.start),Dt(e,t.end),Ot(e,t.hideDots)},L=u(27,e=>ft(e,(()=>{let t=!1,n=!1,r=e.u.findIndex(e=>e.current),i=Math.floor(e.t/2),a=r-i,o=r+i;return a<=0?(o=e.t-1,a=0):o>=e.z?(o=e.z,a=e.z-(e.t-1)):e.t%2==0&&a++,e.x&&(r+i>=e.z||o>=e.z?t=!0:r<=o-2?o-=2:(a+=1,--o)),e.y&&(r-i<=0?n=!0:r>=a-1?a+=2:(--o,--a)),{start:a,end:o,hideDots:t,hideLeadingDots:n}})()),4),pt=l(19,L),mt=f(20,e=>{yt(e,e.u.length),L(e)}),ht=f(35,A),R=u(33,e=>ht(e,Ft(e)),3),gt=f(28,e=>{R(e),O(e)}),_t=u(26,e=>gt(e,e.x?e.z:-1)),vt=f(25,e=>{_t(e),L(e)}),yt=(e,t)=>vt(e,t-1),bt=ne(3,`<!><!><li><!></li>`,`b%b D%`,Qe,tt),z=(e,t)=>{mt(e,[...t||[]]),bt(e,[t])},xt=f(23,e=>{_t(e),L(e)}),St=i(T),Ct=f(29,e=>{R(e),k(e),St(e)}),wt=i(C),Tt=f(24,e=>{Ct(e,e.y?1:-1),L(e),wt(e)}),B=(e,t)=>{xt(e,t===`show-last`||t===`overflow`),Tt(e,t===`overflow`)},Et=f(31,R),Dt=f(32,R),Ot=f(34,i(E)),kt=f(36,e=>{pe(e.a,`aria-labelledby`,e.aa),P(e)}),V=(e,t)=>kt(e,t||fe(e,`Jaa`)),H=(e,t)=>oe(e.a,[`pagination`,t]),At=ce(`N6`,e=>te(e,`a`)),U=f(15,e=>{r(e,`a`,e.p,{role:1,class:1,"aria-labelledby":1}),At(e)}),jt=o(2,(e=>`<!>${e}<!>`)(ve),(e=>`b/${e}&b`)(`b%c`),at),W=f(12,e=>{jt(e,+!e.m),N(e)}),Mt=o(4,(e=>`<!>${e}<!>`)(ve),(e=>`b/${e}&b`)(`b%c`),it),G=f(13,e=>{Mt(e,+!e.n),M(e)}),Nt=(e,t)=>{(({a11yCurrentText:t,a11yHeadingTag:n,class:r,id:i,item:a,next:o,prev:ee,variant:s,...c})=>U(e,c))(t),H(e,t.class),V(e,t.id),F(e,t.a11yHeadingTag),B(e,t.variant),z(e,t.item),W(e,t.prev),G(e,t.next),I(e,t.a11yCurrentText)},Pt=e=>function(){if(!e.s){let t=e.d.querySelectorAll(`li`);for(let n=0;n<t.length;n++){let r=t[n];if(r.offsetWidth){dt(e,r.offsetWidth);break}}}pt(e,Math.max(b,Math.min(He,Math.floor(Re(e.a)/e.s)-2)))},Ft=e=>function(t){return(t<e.a5||t>e.a6)&&e.a2!==t&&e.a3-1!==t},g(`N0`,Pt),g(`N1`,Ft),It=h(`N`,v,y,_,Nt)})))()}function Lt(e){_(e.a),W(e.a,p({a11yText:`Previous`,href:`#`,disabled:!0})),z(e.a,m(m(m(m(m(m(m(m(p({href:`#`,current:!0,content:Jt(e)}),{href:`#`,content:qt(e)}),{href:`#`,content:Kt(e)}),{href:`#`,content:Gt(e)}),{href:`#`,content:Wt(e)}),{href:`#`,content:Ut(e)}),{href:`#`,content:Ht(e)}),{href:`#`,content:Vt(e)}),{href:`#`,content:Bt(e)})),G(e.a,p({a11yText:`Next`,href:`#`})),I(e.a,`Results — Page 1`),F(e.a),H(e.a),V(e.a),B(e.a),U(e.a,{})}var Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{K(),d(),Rt=v,zt=(e=>`/${e}&`)(y),Bt=s(`eJNHDhv`,`9`),Vt=s(`m7DpF8F`,`8`),Ht=s(`kiJt1kP`,`7`),Ut=s(`sFUOBj6`,`6`),Wt=s(`U5nOh0s`,`5`),Gt=s(`tUU$Eaq`,`4`),Kt=s(`khbqx8p`,`3`),qt=s(`HzW8L_w`,`2`),Jt=s(`to0KR5z`,`1`),Yt=h(`bLUGQRp`,Rt,zt,Lt)})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`<evo-pagination a11yCurrentText="Results — Page 1">
  <@prev a11yText="Previous" href="#" disabled/>
  <@item href="#" current>
    1
  </@item>
  <@item href="#">
    2
  </@item>
  <@item href="#">
    3
  </@item>
  <@item href="#">
    4
  </@item>
  <@item href="#">
    5
  </@item>
  <@item href="#">
    6
  </@item>
  <@item href="#">
    7
  </@item>
  <@item href="#">
    8
  </@item>
  <@item href="#">
    9
  </@item>
  <@next a11yText="Next" href="#"/>
</evo-pagination>
`})))()}function $t(e){_(e.a),W(e.a,p({a11yText:`Previous`,disabled:!0})),z(e.a,m(m(m(m(m(m(m(m(p({current:!0,onClick:un,content:xn(e)}),{onClick:ln,content:bn(e)}),{onClick:cn,content:yn(e)}),{onClick:sn,content:vn(e)}),{onClick:on,content:_n(e)}),{onClick:an,content:gn(e)}),{onClick:rn,content:hn(e)}),{onClick:nn,content:mn(e)}),{onClick:tn,content:pn(e)})),G(e.a,p({a11yText:`Next`,onClick:en})),H(e.a,`example-05`)}function en(){console.log(`next`)}function tn(){console.log(9)}function nn(){console.log(8)}function rn(){console.log(7)}function an(){console.log(6)}function on(){console.log(5)}function sn(){console.log(4)}function cn(){console.log(3)}function ln(){console.log(2)}function un(){console.log(1)}var dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn;function wn(){return(wn=e((()=>{K(),d(),dn=v,fn=(e=>`/${e}&`)(y),pn=s(`h0cRKid`,`9`),mn=s(`Q6ZX4Dj`,`8`),hn=s(`B$SuJ1c`,`7`),gn=s(`wDsGpaz`,`6`),_n=s(`VfK9wsH`,`5`),vn=s(`FI0j_d6`,`4`),yn=s(`D7RFMZL`,`3`),bn=s(`JYVgjDD`,`2`),xn=s(`j9xrrd9`,`1`),Sn=f(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};I(e.a,t.a11yCurrentText),F(e.a,t.a11yHeadingTag),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),g(`Qzgp3N7`,en),g(`kq3dbVT`,tn),g(`HIHKM0R`,nn),g(`h9AYi$h`,rn),g(`AWcCSVZ`,an),g(`CyKnsVW`,on),g(`zW64MeS`,sn),g(`dtxLvPt`,cn),g(`qib7Y$n`,ln),g(`rukvYge`,un),Cn=h(`KpXQncR`,dn,fn,$t,Sn)})))()}var Tn;function En(){return(En=e((()=>{Tn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input class="example-05">
  <@prev a11yText="Previous" disabled/>
  <@item
    current
    onClick() {
      console.log(1);
    }>
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
    }/>
</evo-pagination>
`})))()}function Dn(e){_(e.a),J(e,0)}var On,kn,q,An,jn,J,Mn,Nn,Pn,Y,Fn;function In(){return(In=e((()=>{d(),K(),On=v,kn=(e=>`/${e}&`)(y),q=15,An=le(s(`DbQaymw`,` `,` `),{6(e){ae(e.a,e.g)}}),jn=u(4,e=>{let t={a11yCurrentText:`Results Pagination - Page ${e.d}`,...e.c};I(e.a,t.a11yCurrentText),F(e.a,t.a11yHeadingTag),H(e.a,t.class),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),J=l(3,e=>{W(e.a,p({a11yText:`previous`,disabled:e.d===0,onClick:Y(e)})),G(e.a,p({a11yText:`next`,disabled:e.d===q,onClick:Pn(e)}));let t;se(q,1,1,n=>{t=m(t,{current:n===e.d,onClick:Nn({_:e,g:n}),content:An(e,{6:n})})}),z(e.a,t),jn(e)}),Mn=f(2,jn),Nn=e=>function(){let t=e._;J(t,e.g)},Pn=e=>function(){J(e,Math.min(e.d+1,q))},Y=e=>function(){J(e,Math.max(e.d-1,0))},g(`mEwCyut`,Nn),g(`wtw6WHe`,Pn),g(`WxnP2vT`,Y),Fn=h(`I3LKEnr`,On,kn,Dn,Mn)})))()}var Ln;function Rn(){return(Rn=e((()=>{Ln=`static const SIZE = 15;

<let/current=0>

<evo-pagination a11yCurrentText=\`Results Pagination - Page \${current}\` ...input>
  <@prev
    a11yText="previous"
    disabled=current === 0
    onClick() {
      current = Math.max(current - 1, 0);
    }/>
  <for|i| from=1 to=SIZE>
    <@item
      current=i === current
      onClick() {
        current = i;
      }>
      \${i}
    </@item>
  </for>
  <@next
    a11yText="next"
    disabled=current === SIZE
    onClick() {
      current = Math.min(current + 1, SIZE);
    }/>
</evo-pagination>
`})))()}function zn(e){_(e.a),W(e.a,p({a11yText:`Previous`,disabled:!0})),G(e.a,p({a11yText:`Next`}));let t;t=m(t,{current:!0,content:Un(e)}),se(50,2,1,n=>{t=m(t,{content:Hn(e,{4:n})})}),z(e.a,t)}var Bn,Vn,Hn,Un,Wn,Gn;function Kn(){return(Kn=e((()=>{d(),K(),Bn=v,Vn=(e=>`/${e}&`)(y),Hn=le(s(`mc0cwei`,` `,` `),{4(e){ae(e.a,e.e)}}),Un=s(`fp4dHXd`,`1`),Wn=f(2,e=>{let t={a11yCurrentText:`Results — Page 1`,...e.c};I(e.a,t.a11yCurrentText),F(e.a,t.a11yHeadingTag),H(e.a,t.class),V(e.a,t.id),B(e.a,t.variant),U(e.a,(({a11yCurrentText:e,a11yHeadingTag:t,class:n,id:r,item:i,next:a,prev:o,variant:ee,...s})=>s)(t))}),Gn=h(`vzlDAxw`,Bn,Vn,zn,Wn)})))()}var qn;function Jn(){return(Jn=e((()=>{qn=`<evo-pagination a11yCurrentText="Results — Page 1" ...input>
  <@prev a11yText="Previous" disabled/>
  <@item current>
    1
  </@item>
  <for|i| from=2 to=50>
    <@item>\${i}</@item>
  </for>
  <@next a11yText="Next"/>
</evo-pagination>
`})))()}var Yn,X,Z,Q,$,Xn;function Zn(){return(Zn=e((()=>{Le(),K(),Xt(),Qt(),wn(),En(),In(),Rn(),Kn(),Jn(),Yn={title:`navigation & disclosure/evo-pagination`,component:It,parameters:{docs:{description:{component:Ie}}},argTypes:{a11yCurrentText:{type:{name:`string`,required:!0},control:`text`,description:`Localized description for the current page (e.g. Results of Page 1)`},a11yHeadingTag:{type:`string`,control:`text`,description:`HTML tag to use for the a11y heading`,table:{defaultValue:{summary:`h2`}}},item:{description:`Attribute tag representing a pagination item`,"@":{current:{type:`boolean`,control:`boolean`,description:`Indicates that this item is the current page`},href:{type:`string`,control:`string`,description:"When present, switch to `<a>` instead of `<button>`"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)"}}},prev:{description:`Attribute tag for the previous button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`"}}},next:{description:`Attribute tag for the next button`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`"}}},variant:{type:`string`,options:[`show-last`,`show-range`,`overflow`],control:`inline-radio`,description:"If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",table:{defaultValue:{summary:`show-range`}}},"<nav> attributes":{description:"All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through"}}},X=t(Yt,Zt),Z=t(Cn,Tn),Q=t(Fn,Ln),$=t(Gn,qn),Xn=[`Links`,`Buttons`,`Interactive`,`ManyItems`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ButtonsTemplate, ButtonsCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InteractiveTemplate, InteractiveCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ManyItemsTemplate, ManyItemsCode)`,...$.parameters?.docs?.source}}}})))()}Zn();export{Z as Buttons,Q as Interactive,X as Links,$ as ManyItems,Xn as __namedExportsOrder,Yn as default};