import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,C as ee,H as te,J as r,K as i,L as a,M as o,Q as ne,T as s,V as re,Z as ie,at as c,c as ae,ct as oe,et as l,i as u,k as d,lt as se,n as f,nt as p,r as m,s as h,t as g,tt as ce,x as le}from"./dom-CNWckxLY.js";import{i as ue,n as de,o as fe,r as pe,t as me}from"./evo-button-DCHqE7Ja.js";import{t as he}from"./tabs-DqM1PmOr.js";import{i as ge,n as _e,o as ve,r as ye,t as be}from"./evo-roving-tabindex-ClFwDVZ8.js";var xe;function Se(){return(Se=e((()=>{xe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-tabs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-tabs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-tabs/examples)
`})))()}function Ce(){return(Ce=e((()=>{he()})))()}function _(e){oe(e,0,Ue),e.a,_e(e.a,j(e)),ge(e.a,K(e)),Ve(e,r(e)),He(e,r(e))}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,we,M,Te,Ee,De,N,Oe,P,ke,F,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,I,ze,L,Be,R,z,B,V,H,Ve,He,Ue,We,Ge,U,W,Ke,qe,G,Je,K,Ye;function q(){return(q=e((()=>{u(),ve(),Ce(),v=(e=>`${e}<div><div role=tablist class=tabs__items></div><div class=tabs__content></div></div>`)(``),y=(e=>`0${e}& D b l`)(``),b=(e,t)=>h(e.a,`hidden`,!t),x=te(4,18,`M`,e=>b(e,e._.s===e.M)),S=e=>{x._(e),C._(e),w._(e)},C=n(4,e=>h(e.a,`aria-labelledby`,`${e._.u}-${e.M}`)),w=n(4,e=>h(e.a,`id`,`${e._.v}-${e.M}`)),T=c(`Z1`,e=>s(e,`a`)),E=d(10,e=>{ee(e,`a`,e.k,{id:1,"aria-labelledby":1,role:1,class:1,hidden:1}),D(e,e.k?.class),O(e,e.k?.content),T(e)}),D=(e,t)=>ae(e.a,[t,`tabs__panel`]),O=a(1),k=E,A=(e,t)=>k(e,t[0]?.panel),j=i(`Z2`,0,`Ad`),we=(e,t)=>h(e.a,`aria-selected`,t&&`true`),M=te(3,18,`M`,e=>we(e,e._.s===e.M)),Te=e=>{M._(e),Ee._(e),De._(e),N._(e),P._(e),F._(e)},Ee=n(3,e=>h(e.a,`id`,`${e._.u}-${e.M}`)),De=n(3,e=>h(e.a,`aria-controls`,`${e._.v}-${e.M}`)),N=n(3,e=>h(e.a,`tabindex`,e._.w.isFocused(e.M)?0:-1)),Oe=c(`Z3`,e=>l(e.a,`click`,function(t,n){(e._.x||null)?.(e.M),(e.e||null)?.(t,n)})),P=n(3,Oe),ke=c(`Z4`,e=>l(e.a,`keydown`,function(t,n){(e._.y||null)?.(t),(e.f||null)?.(t,n)})),F=n(3,ke),Ae=(e,t)=>ae(e.a,[t,`tabs__item`]),je=c(`Z5`,e=>s(e,`a`)),Me=d(15,e=>{ee(e,`a`,e.p,{"on-click":1,"on-keydown":1,tabindex:1,id:1,"aria-controls":1,role:1,"aria-selected":1,class:1}),je(e)}),Ne=a(1),Pe=(e,t)=>Fe(e,t[0]),Fe=(e,t)=>{(({panel:t,...n})=>Me(e,n))(t),Ie(e,t.onClick),Le(e,t.onKeyDown),Ae(e,t.class),Ne(e,t.content)},Ie=d(4),Le=d(5),Re=(e,t)=>be(e.a,t===`auto`),I=(e,t)=>Re(e,t===void 0?`auto`:t),ze=c(`Z6`,e=>s(e,`c`)),L=ce(17,e=>{le(e,`c`,{class:[`tabs`,e.q===`large`&&`tabs--large`,e.k],...e.o}),ze(e)},2),Be=d(16,L),R=(e,t)=>Be(e,t===void 0?`medium`:t),z=ne(18,e=>{ye(e.a,e.s),M(e),x(e)}),B=ce(9,e=>z(e,e.h,e.i)),V=d(7,B),H=d(8,B),Ve=d(20),He=d(21),Ue=se(`Z7`,d(22,e=>{We(e,e.w?.onClick),Ge(e,e.w?.onKeyDown),N(e)})),We=d(23,P),Ge=d(24,F),U=d(10,L),W=d(14,L),Ke=re(3,`<div role=tab><span><!></span></div>`,` E%`,Te,Pe),qe=re(4,`<div role=tabpanel><div class=tabs__cell><div><!></div></div></div>`,` F%`,S,A),G=(e,t)=>{Ke(e,[t]),qe(e,[t])},Je=(e,t)=>{(({activation:t,class:n,index:ee,indexChange:te,size:r,tab:i,...a})=>W(e,a))(t),V(e,t.index),H(e,t.indexChange),U(e,t.class),I(e,t.activation),R(e,t.size),G(e,t.tab)},K=e=>t=>{z(e,t)},p(`Z0`,K),Ye=g(`Z`,v,y,_,Je)})))()}function Xe(e){_(e.a),G(e.a,m(m(f({panel:f({content:rt(e)}),content:it(e)}),{panel:f({content:tt(e)}),content:nt(e)}),{panel:f({content:$e(e)}),content:et(e)}))}var Ze,Qe,$e,et,tt,nt,rt,it,at,ot;function st(){return(st=e((()=>{q(),u(),Ze=v,Qe=(e=>`/${e}&`)(y),$e=o(`a3qoqhS`,`<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>`),et=o(`MHgpwoj`,`Tab 3`),tt=o(`Hqymxtg`,`<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>`),nt=o(`uPegisU`,`Tab 2`),rt=o(`$v8pbPX`,`<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>`),it=o(`N2l2XQK`,`Tab 1`),at=d(2,e=>{I(e.a,e.c.activation),U(e.a,e.c.class),V(e.a,e.c.index),H(e.a,e.c.indexChange),R(e.a,e.c.size),W(e.a,(({activation:e,class:t,index:n,indexChange:ee,size:te,tab:r,...i})=>i)(e.c))}),ot=g(`z$1hLJk`,Ze,Qe,Xe,at)})))()}var ct;function lt(){return(lt=e((()=>{ct=`<evo-tabs ...input>
  <@tab>
    <@panel>
      <h3>Panel 1</h3>
      <p>1. Lorem ipsum dolor sit amet</p>
    </@panel>
    Tab 1
  </@tab>
  <@tab>
    <@panel>
      <h3>Panel 2</h3>
      <p>2. Lorem ipsum dolor sit amet</p>
    </@panel>
    Tab 2
  </@tab>
  <@tab>
    <@panel>
      <h3>Panel 3</h3>
      <p>3. Lorem ipsum dolor sit amet</p>
    </@panel>
    Tab 3
  </@tab>
</evo-tabs>
`})))()}function ut(e){de(e.a),_(e.b),G(e.b,m(m(f({panel:f({content:_t(e)}),content:J(e)}),{panel:f({content:ht(e)}),content:gt(e)}),{panel:f({content:pt(e)}),content:mt(e)})),H(e.b,Z(e)),Y(e,0)}var dt,ft,pt,mt,ht,gt,_t,J,vt,Y,yt,X,Z,bt;function xt(){return(xt=e((()=>{fe(),q(),u(),dt=((e,t)=>`<!>${e}${t}`)(pe,v),ft=((e,t)=>`b/${e}&/${t}&`)(ue,y),pt=o(`XDiM4Rz`,`<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>`),mt=o(`KJC1m1b`,`Tab 3`),ht=o(`$MLvEgU`,`<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>`),gt=o(`Lpnt0iU`,`Tab 2`),_t=o(`XfUdDzv`,`<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>`),J=o(`ml8dxcp`,`Tab 1`),vt=o(`TyTUq8b`,`Select the first tab`),Y=ie(4,e=>{me(e.a,{onClick:X(e),priority:e.e===0?`tertiary`:`secondary`,content:vt(e)}),V(e.b,e.e)}),yt=d(3,e=>{I(e.b,e.d.activation),U(e.b,e.d.class),R(e.b,e.d.size),W(e.b,(({activation:e,class:t,index:n,indexChange:ee,size:te,tab:r,...i})=>i)(e.d))}),X=e=>function(){Y(e,0)},Z=e=>t=>{Y(e,t)},p(`WkgxEGA`,X),p(`Bhoa87A`,Z),bt=g(`UGaOqbp`,dt,ft,ut,yt)})))()}var St;function Ct(){return(Ct=e((()=>{St=`<let/curr=0>

<evo-button
  onClick() {
    curr = 0;
  }
  priority=curr === 0 ? "tertiary" : "secondary"
>
  Select the first tab
</evo-button>

<evo-tabs ...input index:=curr>
  <@tab>
    <@panel>
      <h3>Panel 1</h3>
      <p>1. Lorem ipsum dolor sit amet</p>
    </@panel>
    Tab 1
  </@tab>
  <@tab>
    <@panel>
      <h3>Panel 2</h3>
      <p>2. Lorem ipsum dolor sit amet</p>
    </@panel>
    Tab 2
  </@tab>
  <@tab>
    <@panel>
      <h3>Panel 3</h3>
      <p>3. Lorem ipsum dolor sit amet</p>
    </@panel>
    Tab 3
  </@tab>
</evo-tabs>
`})))()}var wt,Q,$,Tt;function Et(){return(Et=e((()=>{Se(),q(),st(),lt(),xt(),Ct(),wt={title:`navigation & disclosure/evo-tabs`,component:Ye,parameters:{docs:{description:{component:xe}}},argTypes:{index:{controllable:!0,type:`number`,control:`number`,description:`Zero-based index of the selected tab/panel`},activation:{type:`string`,options:[`manual`,`auto`],control:`inline-radio`,description:`whether to use automatic or manual activation when navigating by keyboard`,table:{defaultValue:{summary:`auto`}}},size:{type:`string`,options:[`medium`,`large`],control:`inline-radio`,description:`The size of the tab headings`,table:{defaultValue:{summary:`medium`}}},tab:{description:`A tab in the tab bar.`,"@":{panel:{description:`The contents of the tab.`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@panel>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@tab>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},Q=t(ot,ct),$=t(bt,St),Tt=[`Default`,`Controlled`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...$.parameters?.docs?.source}}}})))()}Et();export{$ as Controlled,Q as Default,Tt as __namedExportsOrder,wt as default};