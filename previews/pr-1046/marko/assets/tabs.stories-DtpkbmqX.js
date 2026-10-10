import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as r,G as ee,H as i,Q as a,R as o,S as te,W as s,X as ne,at as re,c as ie,ct as c,ft as ae,i as l,it as u,j as d,n as f,nt as oe,ot as p,pt as se,r as m,s as h,t as g,tt as ce,w as le}from"./dom-BJr4MHiD.js";import{i as ue,n as de,o as fe,r as pe,t as me}from"./evo-button-Cd-0xA0u.js";import{t as he}from"./tabs-DqM1PmOr.js";import{i as ge,n as _e,o as ve,r as ye,t as be}from"./evo-roving-tabindex-DGdgfVPS.js";var xe;function Se(){return(Se=e((()=>{xe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function Ce(){return(Ce=e((()=>{he()})))()}function _(e){ae(e,0,He),e.a,_e(e.a,j(e)),ge(e.a,q(e)),Be(e,a(e)),Ve(e,a(e))}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,we,M,Te,Ee,De,N,Oe,P,ke,F,Ae,je,Me,Ne,Pe,Fe,I,Ie,Le,L,Re,R,ze,z,B,V,H,U,Be,Ve,He,Ue,We,W,G,Ge,Ke,K,qe,q,Je;function J(){return(J=e((()=>{l(),ve(),Ce(),v=(e=>`${e}<div><div role=tablist class=tabs__items></div><div class=tabs__content></div></div>`)(``),y=(e=>`0${e}& D b l`)(``),b=(e,t)=>h(e.a,`hidden`,!t),x=ee(4,18,`M`,e=>b(e,e._.s===e.M)),S=e=>{x._(e),C._(e),w._(e)},C=i(4,e=>h(e.a,`aria-labelledby`,`${e._.u}-${e.M}`)),w=i(4,e=>h(e.a,`id`,`${e._.v}-${e.M}`)),T=c(`db1`,e=>r(e,`a`)),E=n(10,e=>{le(e,`a`,e.k,{id:1,"aria-labelledby":1,role:1,class:1,hidden:1}),D(e,e.k?.class),O(e,e.k?.content),T(e)}),D=(e,t)=>ie(e.a,[t,`tabs__panel`]),O=o(1),k=E,A=(e,t)=>k(e,t[0]?.panel),j=ne(`db2`,0,`Ad`),we=(e,t)=>h(e.a,`aria-selected`,t&&`true`),M=ee(3,18,`M`,e=>we(e,e._.s===e.M)),Te=e=>{M._(e),Ee._(e),De._(e),N._(e),P._(e),F._(e)},Ee=i(3,e=>h(e.a,`id`,`${e._.u}-${e.M}`)),De=i(3,e=>h(e.a,`aria-controls`,`${e._.v}-${e.M}`)),N=i(3,e=>h(e.a,`tabindex`,e._.w.isFocused(e.M)?0:-1)),Oe=c(`db3`,e=>u(e.a,`click`,function(t,n){(e._.x||null)?.(e.M),(e.e||null)?.(t,n)})),P=i(3,Oe),ke=c(`db4`,e=>u(e.a,`keydown`,function(t,n){(e._.y||null)?.(t),(e.f||null)?.(t,n)})),F=i(3,ke),Ae=(e,t)=>ie(e.a,[t,`tabs__item`]),je=c(`db5`,e=>r(e,`a`)),Me=n(15,e=>{le(e,`a`,e.p,{"on-click":1,"on-keydown":1,tabindex:1,id:1,"aria-controls":1,role:1,"aria-selected":1,class:1}),je(e)}),Ne=o(1),Pe=(e,t)=>Fe(e,t[0]),Fe=(e,t)=>{(({panel:t,...n})=>Me(e,n))(t),I(e,t.onClick),Ie(e,t.onKeyDown),Ae(e,t.class),Ne(e,t.content)},I=n(4),Ie=n(5),Le=(e,t)=>be(e.a,t===`auto`),L=(e,t)=>Le(e,t===void 0?`auto`:t),Re=c(`db6`,e=>r(e,`c`)),R=re(17,e=>{te(e,`c`,{class:[`tabs`,e.q===`large`&&`tabs--large`,e.k],...e.o}),Re(e)},2),ze=n(16,R),z=(e,t)=>ze(e,t===void 0?`medium`:t),B=oe(18,e=>{ye(e.a,e.s),M(e),x(e)}),V=re(9,e=>B(e,e.h,e.i)),H=n(7,V),U=n(8,V),Be=n(20),Ve=n(21),He=se(`db7`,n(22,e=>{Ue(e,e.w?.onClick),We(e,e.w?.onKeyDown),N(e)})),Ue=n(23,P),We=n(24,F),W=n(10,R),G=n(14,R),Ge=s(3,`<div role=tab><span><!></span></div>`,` E%`,Te,Pe),Ke=s(4,`<div role=tabpanel><div class=tabs__cell><div><!></div></div></div>`,` F%`,S,A),K=(e,t)=>{Ge(e,[t]),Ke(e,[t])},qe=(e,t)=>{(({activation:t,class:n,index:r,indexChange:ee,size:i,tab:a,...o})=>G(e,o))(t),H(e,t.index),U(e,t.indexChange),W(e,t.class),L(e,t.activation),z(e,t.size),K(e,t.tab)},q=e=>t=>{B(e,t)},p.db0=q,Je=g(`db`,v,y,_,qe)})))()}function Ye(e){_(e.a),K(e.a,m(m(f({panel:f({content:nt(e)}),content:rt(e)}),{panel:f({content:et(e)}),content:tt(e)}),{panel:f({content:Qe(e)}),content:$e(e)}))}var Xe,Ze,Qe,$e,et,tt,nt,rt,it,at;function ot(){return(ot=e((()=>{J(),l(),Xe=v,Ze=(e=>`/${e}&`)(y),Qe=d(`a3qoqhS`,`<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>`),$e=d(`MHgpwoj`,`Tab 3`),et=d(`Hqymxtg`,`<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>`),tt=d(`uPegisU`,`Tab 2`),nt=d(`$v8pbPX`,`<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>`),rt=d(`N2l2XQK`,`Tab 1`),it=n(2,e=>{L(e.a,e.c.activation),W(e.a,e.c.class),H(e.a,e.c.index),U(e.a,e.c.indexChange),z(e.a,e.c.size),G(e.a,(({activation:e,class:t,index:n,indexChange:r,size:ee,tab:i,...a})=>a)(e.c))}),at=g(`z$1hLJk`,Xe,Ze,Ye,it)})))()}var st;function ct(){return(ct=e((()=>{st=`<evo-tabs ...input>
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
`})))()}function lt(e){de(e.a),_(e.b),K(e.b,m(m(f({panel:f({content:gt(e)}),content:_t(e)}),{panel:f({content:mt(e)}),content:ht(e)}),{panel:f({content:ft(e)}),content:pt(e)})),U(e.b,Z(e)),Y(e,0)}var ut,dt,ft,pt,mt,ht,gt,_t,vt,Y,yt,X,Z,bt;function xt(){return(xt=e((()=>{fe(),J(),l(),ut=((e,t)=>`<!>${e}${t}`)(pe,v),dt=((e,t)=>`b/${e}&/${t}&`)(ue,y),ft=d(`XDiM4Rz`,`<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>`),pt=d(`KJC1m1b`,`Tab 3`),mt=d(`$MLvEgU`,`<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>`),ht=d(`Lpnt0iU`,`Tab 2`),gt=d(`XfUdDzv`,`<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>`),_t=d(`ml8dxcp`,`Tab 1`),vt=d(`TyTUq8b`,`Select the first tab`),Y=ce(4,e=>{me(e.a,{onClick:X(e),priority:e.e===0?`tertiary`:`secondary`,content:vt(e)}),H(e.b,e.e)}),yt=n(3,e=>{L(e.b,e.d.activation),W(e.b,e.d.class),z(e.b,e.d.size),G(e.b,(({activation:e,class:t,index:n,indexChange:r,size:ee,tab:i,...a})=>a)(e.d))}),X=e=>function(){Y(e,0)},Z=e=>t=>{Y(e,t)},p.WkgxEGA=X,p.Bhoa87A=Z,bt=g(`UGaOqbp`,ut,dt,lt,yt)})))()}var St;function Ct(){return(Ct=e((()=>{St=`<let/curr=0>

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
`})))()}var wt,Q,$,Tt;function Et(){return(Et=e((()=>{Se(),J(),ot(),ct(),xt(),Ct(),wt={title:`navigation & disclosure/evo-tabs`,component:Je,parameters:{docs:{description:{component:xe}}},argTypes:{index:{controllable:!0,type:`number`,control:`number`,description:`Zero-based index of the selected tab/panel`},activation:{type:`string`,options:[`manual`,`auto`],control:`inline-radio`,description:`whether to use automatic or manual activation when navigating by keyboard`,table:{defaultValue:{summary:`auto`}}},size:{type:`string`,options:[`medium`,`large`],control:`inline-radio`,description:`The size of the tab headings`,table:{defaultValue:{summary:`medium`}}},tab:{description:`A tab in the tab bar.`,"@":{panel:{description:`The contents of the tab.`,"@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@panel>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@tab>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},Q=t(at,st),$=t(bt,St),Tt=[`Default`,`Controlled`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...$.parameters?.docs?.source}}}})))()}Et();export{$ as Controlled,Q as Default,Tt as __namedExportsOrder,wt as default};