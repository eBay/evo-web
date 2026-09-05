import{b as f}from"./utils-DyU2_5R1.js";import{_ as c,f as n,g as S,h as D,i as v,j as E,l as R,m as O,p as z,o as A,w as I,Y as L,Q as y,I as M,N as Q}from"./dom-BCmBFxnG.js";import{$ as j,a as H,b as J,c as W}from"./evo-icon-close-12-BWzodjKP.js";import"./iframe-neL4uaf-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DV0LQG27.js";const i=(e=>`<button type=button><span class=selection-chip__text><!></span>${e}</button>`)(W),r=(e=>` E%l/${e}&l`)(J),k=L(1),$=A(12,e=>I(e.a,"aria-pressed",e.m?"true":"false")),T=O(7,e=>$(e,e.f,e.g)),d=n(5,T),p=n(6,T),m=(e,t)=>D(e.a,["selection-chip","selection-chip--animated",t]),X=v("hRmF_ee",e=>E(e.a,"click",function(t,s){$(e,!e.m),e.i&&e.i(t,s)}));function u(e){j(e.c),H(e.c,{class:"selection-chip__trailing"}),X(e)}const q=v("b5AQ403",e=>R(e,"a")),h=n(11,e=>{S(e,"a",e.l,{class:1,"aria-pressed":1,type:1,"on-click":1}),q(e)}),B=z(1),F=B,K=(e,t)=>{(({class:s,content:b,onClick:g,selected:C,selectedChange:a,...x})=>h(e,x))(t),d(e,t.selected),p(e,t.selectedChange),_(e,t.onClick),F(e,t.content),m(e,t.class)},_=n(8),N=c("M5PKZXh",i,r,u,K),P=i,U=(e=>`/${e}&`)(r),Y=y("rW0QfzJ","Select");function Z(e){u(e.a),k(e.a,Y(e))}const G=n(2,e=>{m(e.a,e.c.class),_(e.a,e.c.onClick),d(e.a,e.c.selected),p(e.a,e.c.selectedChange),h(e.a,(({class:t,content:s,onClick:b,selected:g,selectedChange:C,...a})=>a)(e.c))}),V=c("XJmeOnf",P,U,Z,G),ee=`<evo-selection-chip ...input>
  Select
</evo-selection-chip>
`,te=(e=>`${e}<p>Chip is <!></p>`)(i),ne=(e=>`/${e}&Db%l`)(r),se=y("qECOb3d","Select"),w=M(4,e=>{d(e.a,e.e),Q(e.b,e.e?"selected":"deselected")});function ae(e){u(e.a),k(e.a,se(e)),p(e.a,oe(e)),w(e,!1)}const le=n(3,e=>{m(e.a,e.d.class),_(e.a,e.d.onClick),h(e.a,(({class:t,content:s,onClick:b,selected:g,selectedChange:C,...a})=>a)(e.d))}),oe=e=>t=>{w(e,t)},ce=c("n9RehLo",te,ne,ae,le),ie=`<let/selected=false>
<evo-selection-chip ...input selected:=selected>
  Select
</evo-selection-chip>

<p>Chip is \${selected ? "selected" : "deselected"}</p>
`,re=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-selection-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A chip used to toggle between active and inactive states.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-selection-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-selection-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-selection-chip/examples)
`,be={title:"form input/evo-selection-chip",component:N,parameters:{docs:{description:{component:re}}},argTypes:{selected:{controllable:!0,type:"boolean",control:"boolean",description:"Selected state of the chip"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},l=f(V,ee),o=f(ce,ie);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...o.parameters?.docs?.source}}};const ge=["Default","Controlled"];export{o as Controlled,l as Default,ge as __namedExportsOrder,be as default};
