import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,E as ee,Q as i,R as a,c as te,ct as ne,i as o,j as s,nt as re,ot as c,rt as ie,s as ae,t as l,tt as oe,w as se,z as ce}from"./dom-DAi6NM7T.js";import{a as le,i as ue,n as de,r as fe,t as pe}from"./evo-icon-close-12-QrsD97gh.js";function u(){return(u=e((()=>{})))()}function d(){return(d=e((()=>{u()})))()}function f(e){de(e.c),pe(e.c,{class:`selection-chip__trailing`}),x(e)}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{o(),le(),d(),p=(e=>`<button type=button><span class=selection-chip__text><!></span>${e}</button>`)(fe),m=(e=>` E%l/${e}&l`)(ue),h=ce(1),g=n(12,e=>ae(e.a,`aria-pressed`,e.m?`true`:`false`)),_=re(7,e=>g(e,e.f,e.g)),v=r(5,_),y=r(6,_),b=(e,t)=>te(e.a,[`selection-chip`,`selection-chip--animated`,t]),x=c(`T0`,e=>oe(e.a,`click`,function(t,n){g(e,!e.m),e.i&&e.i(t,n)})),S=c(`T1`,e=>ee(e,`a`)),C=r(11,e=>{se(e,`a`,e.l,{class:1,"aria-pressed":1,type:1,"on-click":1}),S(e)}),w=a(1),T=w,E=(e,t)=>{(({class:t,content:n,onClick:r,selected:ee,selectedChange:i,...a})=>C(e,a))(t),v(e,t.selected),y(e,t.selectedChange),D(e,t.onClick),T(e,t.content),b(e,t.class)},D=r(8),O=l(`T`,p,m,f,E)})))()}function me(e){f(e.a),h(e.a,he(e))}var A,j,he,M,N;function P(){return(P=e((()=>{k(),o(),A=p,j=(e=>`/${e}&`)(m),he=s(`rW0QfzJ`,`Select`),M=r(2,e=>{b(e.a,e.c.class),D(e.a,e.c.onClick),v(e.a,e.c.selected),y(e.a,e.c.selectedChange),C(e.a,(({class:e,content:t,onClick:n,selected:r,selectedChange:ee,...i})=>i)(e.c))}),N=l(`XJmeOnf`,A,j,me,M)})))()}var F;function I(){return(I=e((()=>{F=`<evo-selection-chip ...input>Select</evo-selection-chip>
`})))()}function ge(e){f(e.a),h(e.a,z(e)),y(e.a,H(e)),B(e,!1)}var L,R,z,B,V,H,U;function W(){return(W=e((()=>{k(),o(),L=(e=>`${e}<p>Chip is <!></p>`)(p),R=(e=>`/${e}&Db%l`)(m),z=s(`qECOb3d`,`Select`),B=i(4,e=>{v(e.a,e.e),ne(e.b,e.e?`selected`:`deselected`)}),V=r(3,e=>{b(e.a,e.d.class),D(e.a,e.d.onClick),C(e.a,(({class:e,content:t,onClick:n,selected:r,selectedChange:ee,...i})=>i)(e.d))}),H=e=>t=>{B(e,t)},ie(`FDm8cxR`,H),U=l(`n9RehLo`,L,R,ge,V)})))()}var G;function K(){return(K=e((()=>{G=`<let/selected=false>
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
`})))()}var Y,X,Z,Q;function $(){return($=e((()=>{k(),P(),I(),W(),K(),J(),Y={title:`form input/evo-selection-chip`,component:O,parameters:{docs:{description:{component:q}}},argTypes:{selected:{controllable:!0,type:`boolean`,control:`boolean`,description:`Selected state of the chip`},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},X=t(N,F),Z=t(U,G),Q=[`Default`,`Controlled`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Controlled,X as Default,Q as __namedExportsOrder,Y as default};