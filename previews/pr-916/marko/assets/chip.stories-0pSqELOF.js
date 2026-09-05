import{b as f}from"./utils-DyU2_5R1.js";import{_ as r,K as S,f as a,g as y,h as $,w as p,i as g,l as x,p as C,k as E,v as i,Y as A,Q as v,S as j}from"./dom-BJw3UtKR.js";import{c as z,b as I,$ as L,a as Q}from"./evo-icon-close-12-9qCkRhac.js";import"./iframe-Bp9ocpcF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1rJHl-z.js";const U=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A discrete highlighted value.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-chip/examples)
`,d="<span><span class=chip__text><!></span><!></span>",_=" D D%l%l",D=A(2),q=i(3,0,t=>p(t.a,"aria-describedby",t._.k)),G=t=>{q._(t),T._(t),k._(t),w._(t),L(t.b),Q(t.b,{})},T=i(3,0,t=>$(t.a,["chip__button",t._.l])),H=(t,e)=>p(t.a,"aria-label",e),k=i(3,0,t=>H(t,t._.m!==void 0?t._.m:"delete")),K=g("qSpPejh",t=>x(t,"a")),w=i(3,0,t=>{y(t,"a",t._.n,{type:1,class:1,"aria-label":1,"aria-describedby":1}),K(t)}),M=a(10,t=>p(t.b,"id",t.k));function m(t){M(t,S(t))}const u=(t,e)=>$(t.a,["chip",e]),O=g("LQAW5Gj",t=>x(t,"a")),h=a(9,t=>{y(t,"a",t.j,{class:1}),O(t)}),P=C(2),R=P,V=E(3,(t=>`<button type=button>${t}</button>`)(z),(t=>` D/${t}&l`)(I),G),b=(t,e)=>{(({a11yText:l,class:c,...n})=>Y(t,n))(e||{}),F(t,e?.class),J(t,e?.a11yText),V(t,e?0:1)},X=(t,e)=>{(({class:l,content:c,delete:n,...W})=>h(t,W))(e),u(t,e.class),R(t,e.content),b(t,e.delete)},Y=a(13,w),F=a(11,T),J=a(12,k),N=r("y$sV6b4",d,_,m,X),Z=d,B=(t=>`/${t}&`)(_),tt=v("iU9ba9$","chip text");function et(t){m(t.a),D(t.a,tt(t))}const at=a(2,t=>{u(t.a,t.c.class),b(t.a,t.c.delete),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),nt=r("PkoKn$z",Z,B,et,at),st=`<evo-chip ...input>
  chip text
</evo-chip>
`,ot=d,it=(t=>`/${t}&`)(_),lt=v("tbVQm0G","chip text");function ct(t){m(t.a),b(t.a,j({a11yText:"Delete"})),D(t.a,lt(t))}const rt=a(2,t=>{u(t.a,t.c.class),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),pt=r("yOSXwUz",ot,it,ct,rt),dt=`<evo-chip ...input>
  <@delete a11yText="Delete"/>
  chip text
</evo-chip>
`,yt={title:"building blocks/evo-chip",component:N,parameters:{docs:{description:{component:U}}},argTypes:{delete:{description:"Attribute tag for the delete button. When present, a delete button with a close icon is rendered.","@":{a11yText:{type:{name:"string",required:!0},control:"text",description:"A descriptive label for the delete button"},disabled:{type:"boolean",description:"Whether the delete button is disabled"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},s=f(nt,st),o=f(pt,dt);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDeleteTemplate, WithDeleteCode)",...o.parameters?.docs?.source}}};const $t=["Default","WithDelete"];export{s as Default,o as WithDelete,$t as __namedExportsOrder,yt as default};
