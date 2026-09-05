import{b as f}from"./utils-DyU2_5R1.js";import{a as c,b as n,c as w,f as D,d as v,t as E,i as R,e as O,g as z,u as A,r as L,h as M,j as y,E as j,x as H}from"./dom-TuxgW4Cw.js";import{b as I,c as J,$ as Q,a as W}from"./evo-icon-close-12-AteahUv1.js";import"./iframe-CqOKIB7R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DV25PJpD.js";const i=(e=>`<button type=button><span class=selection-chip__text><!></span>${e}</button>`)(W),r=(e=>` E%l/${e}&l`)(Q),k=M(1),$=A(12,e=>L(e.a,"aria-pressed",e.m?"true":"false")),T=O(7,e=>$(e,e.f,e.g)),d=n(5,T),p=n(6,T),m=(e,t)=>D(e.a,["selection-chip","selection-chip--animated",t]),X=v("hRmF_ee",e=>E(e.a,"click",function(t,a){$(e,!e.m),e.i&&e.i(t,a)}));function u(e){I(e.c),J(e.c,{class:"selection-chip__trailing"}),X(e)}const q=v("b5AQ403",e=>R(e,"a")),h=n(11,e=>{w(e,"a",e.l,{class:1,"aria-pressed":1,type:1,"on-click":1}),q(e)}),B=z(1),F=B,K=(e,t)=>{(({class:a,content:b,onClick:g,selected:C,selectedChange:s,...S})=>h(e,S))(t),d(e,t.selected),p(e,t.selectedChange),_(e,t.onClick),F(e,t.content),m(e,t.class)},_=n(8),P=c("M5PKZXh",i,r,u,K),U=i,Z=(e=>`/${e}&`)(r),G=y("rW0QfzJ","Select");function N(e){u(e.a),k(e.a,G(e))}const V=n(2,e=>{m(e.a,e.c.class),_(e.a,e.c.onClick),d(e.a,e.c.selected),p(e.a,e.c.selectedChange),h(e.a,(({class:t,content:a,onClick:b,selected:g,selectedChange:C,...s})=>s)(e.c))}),Y=c("XJmeOnf",U,Z,N,V),ee="<evo-selection-chip ...input>Select</evo-selection-chip>",te=(e=>`${e}<p>Chip is <!></p>`)(i),ne=(e=>`/${e}&Db%l`)(r),ae=y("qECOb3d","Select"),x=j(4,e=>{d(e.a,e.e),H(e.b,e.e?"selected":"deselected")});function se(e){u(e.a),k(e.a,ae(e)),p(e.a,oe(e)),x(e,!1)}const le=n(3,e=>{m(e.a,e.d.class),_(e.a,e.d.onClick),h(e.a,(({class:t,content:a,onClick:b,selected:g,selectedChange:C,...s})=>s)(e.d))}),oe=e=>t=>{x(e,t)},ce=c("n9RehLo",te,ne,se,le),ie=`<let/selected=false>
<evo-selection-chip ...input selected:=selected>Select</evo-selection-chip>

<p>
  Chip is \${selected ? "selected" : "deselected"}
</p>`,re=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,be={title:"form input/evo-selection-chip",component:P,parameters:{docs:{description:{component:re}}},argTypes:{selected:{controllable:!0,type:"boolean",control:"boolean",description:"Selected state of the chip"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},l=f(Y,ee),o=f(ce,ie);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...o.parameters?.docs?.source}}};const ge=["Default","Controlled"];export{o as Controlled,l as Default,ge as __namedExportsOrder,be as default};
