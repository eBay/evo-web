import{b as w}from"./utils-DyU2_5R1.js";import{_ as l,f as e,m as _,R as L,u as j,i as r,l as x,o as N,L as q,j as F,g as P,h as U,v as u,w as V,k as G,p as d,a2 as J,b as s,a0 as K,Z as D,I,N as Y,S as i}from"./dom-CK48op32.js";import{$ as Z,a as X,b as tt,c as nt,d as et,e as ot,f as st,g as at}from"./evo-icon-mobile-24-DXGrChl2.js";import"./iframe-BNpSE5cT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-IFKzbDrV.js";const m="<div><ul></ul></div>",b=" D l",f=()=>{},ct=["large"],it=d(0),S=u(0,1,t=>it(t,t._.c)),lt=S,_t=d(1),z=u(0,0,t=>_t(t,t._.c)),rt=t=>{z._(t),R._(t)},ut=d(0),R=u(0,0,t=>ut(t,t._.h)),dt=(t,n)=>V(t.a,"aria-current",n&&"true"),Q=_(11,t=>dt(t,t._.n===t.k)),W=q(1,Q),mt=r("TuabTCh",t=>F(t.a,"click",function(n,o){E(t._,t.k),(t.i||null)?.(n,o)})),bt=t=>{W._(t),mt(t)},ft=e(10,Q),gt=(t,n)=>ft(t,n!==void 0?n:t.M),ht=(t,n)=>U(t.a,["segmented-buttons__button",n]),pt=r("tt0IHvN",t=>x(t,"a")),vt=e(9,t=>{P(t,"a",t.j,{class:1,"on-click":1,"aria-current":1}),pt(t)}),$t=G(0,"<span class=segmented-buttons__button-cell><!><span><!></span></span>","D%bD%",rt,"<!><!><!>","b%",lt),kt=e(7,t=>{$t(t,t.h?0:1),R(t)}),Ct=(t,n)=>Tt(t,n[0]),Tt=e(2,t=>{(({class:n,icon:o,name:T,onClick:B,...y})=>vt(t,y))(t.c),ht(t,t.c.class),gt(t,t.c.name),kt(t,t.c.icon),yt(t,t.c.onClick),z(t),S(t)}),yt=e(8),wt=r("dgn_J8p",t=>x(t,"a")),g=_(12,t=>{L(t,"a",{class:["segmented-buttons",t.l&&`segmented-buttons--${t.l}`,t.i],...t.k}),wt(t)},2),xt=e(11,g),h=(t,n)=>xt(t,n&&ct.includes(n)?n:null),E=N(13,W),M=_(6,t=>E(t,t.e,t.f)),p=e(4,M),v=e(5,M),$=e(8,g),k=e(10,g),Dt=j(1,"<li><button></button></li>","D ",bt,Ct),C=(t,n)=>Dt(t,[n]),It=(t,n)=>{(({button:o,class:T,selected:B,selectedChange:y,size:Xt,...H})=>k(t,H))(n),p(t,n.selected),v(t,n.selectedChange),h(t,n.size),$(t,n.class),C(t,n.button)},St=l("iAWqAHV",m,b,f,It),zt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-segmented-buttons
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-segmented-buttons)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-segmented-buttons)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-segmented-buttons/examples)
`,Rt=m,Qt=(t=>`/${t}&`)(b),Wt=J(s("Iogyfye"," "," "),{4(t){Y(t.a,t.e)}}),Et=e(1,t=>{let n;K(t.b,(o,T)=>{n=D(n,{name:o,content:Wt(t,{4:o})})}),C(t.a,n)}),O=I(2,t=>p(t.a,t.c));function Mt(t){f(t.a),v(t.a,Ot(t)),$(t.a),h(t.a),k(t.a,{}),Et(t,["Q1","Q2","Q3","Q4"]),O(t,"Q1")}const Ot=t=>n=>{O(t,n)},At=l("xxkdBn1",Rt,Qt,Mt),Bt=`<const/items=["Q1", "Q2", "Q3", "Q4"]>
<let/selected="Q1">

<evo-segmented-buttons selected:=selected>
  <for|item, i| of=items>
    <@button name=item>
      \${item}
    </@button>
  </for>
</evo-segmented-buttons>
`,Ht=m,Lt=(t=>`/${t}&`)(b),jt=t=>{et(t.a),ot(t.a,{})},Nt=s("YFqM63a",X,(t=>`/${t}&`)(Z),jt),qt=s("oiVz3K9","Mobile"),Ft=t=>{st(t.a),at(t.a,{})},Pt=s("FPinDRP",nt,(t=>`/${t}&`)(tt),Ft),Ut=s("iThSlGA","Desktop"),A=I(1,t=>p(t.a,t.b));function Vt(t){f(t.a),C(t.a,D(i({onClick:Kt,icon:i({content:Pt(t)}),content:Ut(t)}),{onClick:Jt,icon:i({content:Nt(t)}),content:qt(t)})),v(t.a,Gt(t)),$(t.a),h(t.a),k(t.a,{}),A(t,0)}const Gt=t=>n=>{A(t,n)};function Jt(){console.log("Clicked mobile")}function Kt(){console.log("Clicked full view")}const Yt=l("v2Aj0T6",Ht,Lt,Vt),Zt=`<let/selected=0>
<evo-segmented-buttons selected:=selected>
  <@button onClick() {
    console.log("Clicked full view");
  }>
    <@icon>
      <evo-icon-full-view-24/>
    </@icon>
    Desktop
  </@button>
  <@button onClick() {
    console.log("Clicked mobile");
  }>
    <@icon>
      <evo-icon-mobile-24/>
    </@icon>
    Mobile
  </@button>
</evo-segmented-buttons>
`,cn={title:"buttons/evo-segmented-buttons",component:St,parameters:{docs:{description:{component:zt}}},argTypes:{selected:{controllable:!0,control:"text",description:"Index of the selected button, or name if present",table:{type:{summary:"string | number"}}},button:{description:"A button in the segmented button","@":{name:{type:"string",control:"string",description:"Name used to keep track of the `selected` button, use instead of index for more stability"},icon:{description:"Leading icon for this segment","@":{}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},size:{options:["regular (default)","large"],description:"Size override for the buttons."},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},a=w(At,Bt),c=w(Yt,Zt);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...c.parameters?.docs?.source}}};const ln=["Default","WithIcons"];export{a as Default,c as WithIcons,ln as __namedExportsOrder,cn as default};
