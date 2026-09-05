import{b as P}from"./utils-DyU2_5R1.js";import{a as u,n as j,o as G,p as D,b as a,s as N,e as S,F as Q,A as E,B as s,r,u as V,d as l,i as p,a7 as R,t as H,c as U,f as K,g as O,_ as e,k as m,l as o,E as Z}from"./dom-BHuf_wjI.js";import{$ as tt,a as nt,b as at,c as et,d as ot,e as it,f as st}from"./index-C2m3jmYI.js";/* empty css             */import{a as rt,b as lt,c as _t,$ as ct}from"./index-Ctnw2zLv.js";import"./iframe-D1vEsa04.js";import"./preload-helper-PPVm8Dsz.js";import"./index-edzibN_L.js";import"./index-3OPMgxGk.js";import"./evo-icon-chevron-down-16-Zh7qSkbb.js";const dt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,h=(t=>`${t}<div><div role=tablist class=tabs__items></div><div class=tabs__content></div></div>`)(ot),v=(t=>`0${t}& D b l`)(et),bt=(t,n)=>r(t.a,"hidden",!n),q=R(4,18,"M",t=>bt(t,t._.s===t.M)),mt=t=>{q._(t),ut._(t),pt._(t)},ut=s(4,t=>r(t.a,"aria-labelledby",`${t._.u}-${t.M}`)),pt=s(4,t=>r(t.a,"id",`${t._.v}-${t.M}`)),ht=l("C7xYoZW",t=>p(t,"a")),vt=a(10,t=>{U(t,"a",t.k,{id:1,"aria-labelledby":1,role:1,class:1,hidden:1}),ft(t,t.k?.class),Tt(t,t.k?.content),ht(t)}),ft=(t,n)=>K(t.a,[n,"tabs__panel"]),gt=O(1),Tt=gt,xt=vt,yt=(t,n)=>xt(t,n[0]?.panel),Ct=j("hrG5F7E",0,"Ad"),$t=(t,n)=>r(t.a,"aria-selected",n&&"true"),A=R(3,18,"M",t=>$t(t,t._.s===t.M)),kt=t=>{A._(t),wt._(t),Lt._(t),F._(t),J._(t),W._(t)},wt=s(3,t=>r(t.a,"id",`${t._.u}-${t.M}`)),Lt=s(3,t=>r(t.a,"aria-controls",`${t._.v}-${t.M}`)),F=s(3,t=>r(t.a,"tabindex",t._.w.isFocused(t.M)?0:-1)),Mt=l("TF3qL3$",t=>H(t.a,"click",function(n,i){(t._.x||null)?.(t.M),(t.e||null)?.(n,i)})),J=s(3,Mt),It=l("LRH8OFU",t=>H(t.a,"keydown",function(n,i){(t._.y||null)?.(n),(t.f||null)?.(n,i)})),W=s(3,It),zt=(t,n)=>K(t.a,[n,"tabs__item"]),Dt=l("A4YYb2R",t=>p(t,"a")),Pt=a(15,t=>{U(t,"a",t.p,{"on-click":1,"on-keydown":1,tabindex:1,id:1,"aria-controls":1,role:1,"aria-selected":1,class:1}),Dt(t)}),St=O(1),Et=St,Rt=(t,n)=>Ht(t,n[0]),Ht=(t,n)=>{(({panel:i,..._})=>Pt(t,_))(n),Ut(t,n.onClick),Kt(t,n.onKeyDown),zt(t,n.class),Et(t,n.content)},Ut=a(4),Kt=a(5),Ot=(t,n)=>it(t.a,n==="auto"),f=(t,n)=>Ot(t,n!==void 0?n:"auto"),qt=l("BHvsg9P",t=>p(t,"c")),g=S(17,t=>{Q(t,"c",{class:["tabs",t.q==="large"&&"tabs--large",t.k],...t.o}),qt(t)},2),At=a(16,g),T=(t,n)=>At(t,n!==void 0?n:"medium"),X=V(18,t=>{st(t.a,t.s),A(t),q(t)}),Y=S(9,t=>X(t,t.h,t.i)),x=a(7,Y),y=a(8,Y),Ft=a(20),Jt=a(21);function C(t){G(t,0,Wt),tt(t.a),nt(t.a,Ct(t)),at(t.a,Nt(t)),Ft(t,D(t)),Jt(t,D(t))}const Wt=N("lQp94oM",a(22,t=>{Xt(t,t.w?.onClick),Yt(t,t.w?.onKeyDown),F(t)})),Xt=a(23,J),Yt=a(24,W),$=a(10,g),k=a(14,g),Bt=E(3,"<div role=tab><span><!></span></div>"," E%",kt,Rt),jt=E(4,"<div role=tabpanel><div class=tabs__cell><div><!></div></div></div>"," F%",mt,yt),w=(t,n)=>{Bt(t,[n]),jt(t,[n])},Gt=(t,n)=>{(({activation:i,class:_,index:M,indexChange:I,size:z,tab:c,...B})=>k(t,B))(n),x(t,n.index),y(t,n.indexChange),$(t,n.class),f(t,n.activation),T(t,n.size),w(t,n.tab)},Nt=t=>n=>{X(t,n)},Qt=u("JFRYPNJ",h,v,C,Gt),Vt=h,Zt=(t=>`/${t}&`)(v),tn=e("a3qoqhS","<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>"),nn=e("MHgpwoj","Tab 3"),an=e("Hqymxtg","<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>"),en=e("uPegisU","Tab 2"),on=e("$v8pbPX","<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>"),sn=e("N2l2XQK","Tab 1");function rn(t){C(t.a),w(t.a,m(m(o({panel:o({content:on(t)}),content:sn(t)}),{panel:o({content:an(t)}),content:en(t)}),{panel:o({content:tn(t)}),content:nn(t)}))}const ln=a(2,t=>{f(t.a,t.c.activation),$(t.a,t.c.class),x(t.a,t.c.index),y(t.a,t.c.indexChange),T(t.a,t.c.size),k(t.a,(({activation:n,class:i,index:_,indexChange:M,size:I,tab:z,...c})=>c)(t.c))}),_n=u("z$1hLJk",Vt,Zt,rn,ln),cn=`<evo-tabs ...input>
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
`,dn=((t,n)=>`<!>${t}${n}`)(_t,h),bn=((t,n)=>`b/${t}&/${n}&`)(lt,v),mn=e("XDiM4Rz","<h3>Panel 3</h3><p>3. Lorem ipsum dolor sit amet</p>"),un=e("KJC1m1b","Tab 3"),pn=e("$MLvEgU","<h3>Panel 2</h3><p>2. Lorem ipsum dolor sit amet</p>"),hn=e("Lpnt0iU","Tab 2"),vn=e("XfUdDzv","<h3>Panel 1</h3><p>1. Lorem ipsum dolor sit amet</p>"),fn=e("ml8dxcp","Tab 1"),gn=e("TyTUq8b","Select the first tab"),L=Z(4,t=>{ct(t.a,{onClick:yn(t),priority:t.e===0?"tertiary":"secondary",content:gn(t)}),x(t.b,t.e)});function Tn(t){rt(t.a),C(t.b),w(t.b,m(m(o({panel:o({content:vn(t)}),content:fn(t)}),{panel:o({content:pn(t)}),content:hn(t)}),{panel:o({content:mn(t)}),content:un(t)})),y(t.b,Cn(t)),L(t,0)}const xn=a(3,t=>{f(t.b,t.d.activation),$(t.b,t.d.class),T(t.b,t.d.size),k(t.b,(({activation:n,class:i,index:_,indexChange:M,size:I,tab:z,...c})=>c)(t.d))}),yn=t=>function(){L(t,0)},Cn=t=>n=>{L(t,n)},$n=u("UGaOqbp",dn,bn,Tn,xn),kn=`<let/curr=0>

<evo-button
  onClick() {
    curr = 0;
  }
  priority=(curr === 0 ? "tertiary" : "secondary")>
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
`,Hn={title:"navigation & disclosure/evo-tabs",component:Qt,parameters:{docs:{description:{component:dt}}},argTypes:{index:{controllable:!0,type:"number",control:"number",description:"Zero-based index of the selected tab/panel"},activation:{type:"string",options:["manual","auto"],control:"inline-radio",description:"whether to use automatic or manual activation when navigating by keyboard",table:{defaultValue:{summary:"auto"}}},size:{type:"string",options:["medium","large"],control:"inline-radio",description:"The size of the tab headings",table:{defaultValue:{summary:"medium"}}},tab:{description:"A tab in the tab bar.","@":{panel:{description:"The contents of the tab.","@":{"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@panel>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@tab>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},d=P(_n,cn),b=P($n,kn);d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...b.parameters?.docs?.source}}};const Un=["Default","Controlled"];export{b as Controlled,d as Default,Un as __namedExportsOrder,Hn as default};
