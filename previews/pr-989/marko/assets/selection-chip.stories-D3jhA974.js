import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,C as ee,L as te,Q as r,R as i,T as ne,Z as re,at as a,c as ie,et as ae,i as o,k as s,nt as oe,ot as se,s as ce,t as c,tt as le}from"./dom-CNWckxLY.js";import{a as ue,i as de,n as fe,r as pe,t as me}from"./evo-icon-close-12-Cu_fVWW2.js";function l(){return(l=e((()=>{})))()}function u(){return(u=e((()=>{l()})))()}function d(e){fe(e.c),me(e.c,{class:`selection-chip__trailing`}),b(e)}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{o(),ue(),u(),f=(e=>`<button type=button><span class=selection-chip__text><!></span>${e}</button>`)(pe),p=(e=>` E%l/${e}&l`)(de),m=i(1),h=r(12,e=>ce(e.a,`aria-pressed`,e.m?`true`:`false`)),g=le(7,e=>h(e,e.f,e.g)),_=s(5,g),v=s(6,g),y=(e,t)=>ie(e.a,[`selection-chip`,`selection-chip--animated`,t]),b=a(`U0`,e=>ae(e.a,`click`,function(t,n){h(e,!e.m),e.i&&e.i(t,n)})),x=a(`U1`,e=>ne(e,`a`)),S=s(11,e=>{ee(e,`a`,e.l,{class:1,"aria-pressed":1,type:1,"on-click":1}),x(e)}),C=te(1),w=C,T=(e,t)=>{(({class:t,content:n,onClick:ee,selected:te,selectedChange:r,...i})=>S(e,i))(t),_(e,t.selected),v(e,t.selectedChange),E(e,t.onClick),w(e,t.content),y(e,t.class)},E=s(8),D=c(`U`,f,p,d,T)})))()}function he(e){d(e.a),m(e.a,j(e))}var k,A,j,M,N;function P(){return(P=e((()=>{O(),o(),k=f,A=(e=>`/${e}&`)(p),j=n(`rW0QfzJ`,`Select`),M=s(2,e=>{y(e.a,e.c.class),E(e.a,e.c.onClick),_(e.a,e.c.selected),v(e.a,e.c.selectedChange),S(e.a,(({class:e,content:t,onClick:n,selected:ee,selectedChange:te,...r})=>r)(e.c))}),N=c(`XJmeOnf`,k,A,he,M)})))()}var F;function I(){return(I=e((()=>{F=`<evo-selection-chip ...input>Select</evo-selection-chip>
`})))()}function ge(e){d(e.a),m(e.a,z(e)),v(e.a,H(e)),B(e,!1)}var L,R,z,B,V,H,U;function W(){return(W=e((()=>{O(),o(),L=(e=>`${e}<p>Chip is <!></p>`)(f),R=(e=>`/${e}&Db%l`)(p),z=n(`qECOb3d`,`Select`),B=re(4,e=>{_(e.a,e.e),se(e.b,e.e?`selected`:`deselected`)}),V=s(3,e=>{y(e.a,e.d.class),E(e.a,e.d.onClick),S(e.a,(({class:e,content:t,onClick:n,selected:ee,selectedChange:te,...r})=>r)(e.d))}),H=e=>t=>{B(e,t)},oe(`FDm8cxR`,H),U=c(`n9RehLo`,L,R,ge,V)})))()}var G;function K(){return(K=e((()=>{G=`<let/selected=false>
<evo-selection-chip ...input selected:=selected>Select</evo-selection-chip>

<p>Chip is \${selected ? "selected" : "deselected"}</p>
`})))()}var q;function J(){return(J=e((()=>{q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{O(),P(),I(),W(),K(),J(),Y={title:`form input/evo-selection-chip`,component:D,parameters:{docs:{description:{component:q}}},argTypes:{selected:{controllable:!0,type:`boolean`,control:`boolean`,description:`Selected state of the chip`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},X=t(N,F),Z=t(U,G),Q=[`Default`,`Controlled`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Controlled,X as Default,Q as __namedExportsOrder,Y as default};