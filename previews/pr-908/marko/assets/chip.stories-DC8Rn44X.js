import{b as y}from"./utils-DyU2_5R1.js";import{a as r,p as S,b as a,c as f,f as $,r as d,d as g,i as x,g as C,w as E,y as i,h as j,j as D,l as A}from"./dom-DF5f8Ddd.js";import{a as z,$ as I,b as L,c as U}from"./evo-icon-close-12-BJpjRQ-T.js";import"./iframe-CuDE3HaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGOhNcPA.js";const q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="<span><span class=chip__text><!></span><!></span>",_=" D D%l%l",v=j(2),G=i(3,0,t=>d(t.a,"aria-describedby",t._.k)),H=t=>{G._(t),T._(t),k._(t),w._(t),L(t.b),U(t.b,{})},T=i(3,0,t=>$(t.a,["chip__button",t._.l])),M=(t,e)=>d(t.a,"aria-label",e),k=i(3,0,t=>M(t,t._.m!==void 0?t._.m:"delete")),O=g("qSpPejh",t=>x(t,"a")),w=i(3,0,t=>{f(t,"a",t._.n,{type:1,class:1,"aria-label":1,"aria-describedby":1}),O(t)}),P=a(10,t=>d(t.b,"id",t.k));function m(t){P(t,S(t))}const u=(t,e)=>$(t.a,["chip",e]),Q=g("LQAW5Gj",t=>x(t,"a")),h=a(9,t=>{f(t,"a",t.j,{class:1}),Q(t)}),R=C(2),V=R,K=E(3,(t=>`<button type=button>${t}</button>`)(z),(t=>` D/${t}&l`)(I),H),b=(t,e)=>{(({a11yText:l,class:c,...n})=>F(t,n))(e||{}),J(t,e?.class),N(t,e?.a11yText),K(t,e?0:1)},X=(t,e)=>{(({class:l,content:c,delete:n,...W})=>h(t,W))(e),u(t,e.class),V(t,e.content),b(t,e.delete)},F=a(13,w),J=a(11,T),N=a(12,k),Y=r("y$sV6b4",p,_,m,X),Z=p,B=(t=>`/${t}&`)(_),tt=D("iU9ba9$","chip text");function et(t){m(t.a),v(t.a,tt(t))}const at=a(2,t=>{u(t.a,t.c.class),b(t.a,t.c.delete),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),nt=r("PkoKn$z",Z,B,et,at),st=`<evo-chip ...input>chip text</evo-chip>
`,ot=p,it=(t=>`/${t}&`)(_),lt=D("tbVQm0G","chip text");function ct(t){m(t.a),b(t.a,A({a11yText:"Delete"})),v(t.a,lt(t))}const rt=a(2,t=>{u(t.a,t.c.class),h(t.a,(({class:e,content:l,delete:c,...n})=>n)(t.c))}),dt=r("yOSXwUz",ot,it,ct,rt),pt=`<evo-chip ...input>
    chip text
    <@delete a11yText="Delete"/>
</evo-chip>
`,ft={title:"building blocks/evo-chip",component:Y,parameters:{docs:{description:{component:q}}},argTypes:{delete:{description:"Attribute tag for the delete button. When present, a delete button with a close icon is rendered.","@":{a11yText:{type:{name:"string",required:!0},control:"text",description:"A descriptive label for the delete button"},disabled:{type:"boolean",description:"Whether the delete button is disabled"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},s=y(nt,st),o=y(dt,pt);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDeleteTemplate, WithDeleteCode)",...o.parameters?.docs?.source}}};const $t=["Default","WithDelete"];export{s as Default,o as WithDelete,$t as __namedExportsOrder,ft as default};
