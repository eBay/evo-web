import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,D as r,O as i,Q as a,at as o,c as ee,et as te,i as s,it as c,k as l,lt as ne,n as u,t as d}from"./dom-CUxLGBQ2.js";import{s as re}from"./evo-icon-Bkms0d_7.js";import{i as ie,n as ae,t as oe}from"./evo-icon-button-Bn_DkC2Y.js";import{i as se,n as ce,o as le,r as ue,t as de}from"./evo-input-B000K5dn.js";import{t as fe}from"./textbox-CCE6a_em.js";import{a as pe,c as me,i as he,l as ge,n as _e,o as ve,r as ye,s as be,t as xe,u as Se}from"./evo-icon-clear-16-BTQ-VMIq.js";var f;function p(){return(p=e((()=>{f=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-filter-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A filter-input is a textbox which is used specifically to filter out content.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-evo-filter-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-evo-filter-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/ebayui-core/src/components/evo-filter-input/examples)
`})))()}function m(){return(m=e((()=>{})))()}function h(){return(h=e((()=>{re(),fe(),m()})))()}function g(e){ce(e.b)}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,Ce,z,B,V;function H(){return(H=e((()=>{s(),Se(),pe(),ie(),le(),h(),_=(e=>`<span>${e}</span>`)(ue),v=(e=>` D/${e}&l`)(se),y=e=>{_e(e.a),xe(e.a,{})},b=n(`D1`,ye,(e=>`/${e}&`)(he),y),x=e=>{be(e.a),ve(e.a,{})},S=n(`D2`,me,(e=>`/${e}&`)(ge),x),C=c(1,e=>oe(e.a,{a11yText:e._._.h,class:`filter-input__clear-btn`,size:`small`,transparent:!0,onClick:B(e),content:b(e)})),w=i(14,C,e=>e._._,`D3`),T=e=>{w(e),E(e)},E=i(15,C,e=>e._._,`D4`),D=a(0,(e=>`<!>${e}<!>`)(ae),(e=>`b/${e}&b`)(`b%c`),T),O=i(15,e=>D(e,+!e._.h),0,`D5`),k=n(`D6`,`<!><!><!>`,`b%`,O),A=c(13,e=>de(e.b,{...e.l,fluid:!0,type:`search`,"aria-controls":e.i,placeholder:e.m,prefixIcon:u({content:S(e)}),postfixIcon:u({content:k(e)})}),2),j=l(12,A),M=(e,t)=>j(e,t===void 0?`Filter`:t),N=c(10,e=>ee(e.a,[`filter-input`,e.j&&`filter-input--${e.j}`,e.f])),P=l(5,N),F=l(9,N),I=l(8,A),L=l(11,A),R=(e,t)=>{L(e,(({a11yClearButtonText:e,a11yControlsId:t,class:n,placeholder:r,size:i,...a})=>a)(t)),Ce(e,t.valueChange),P(e,t.class),M(e,t.placeholder),z(e,t.a11yClearButtonText),I(e,t.a11yControlsId),F(e,t.size)},Ce=l(4,r(w)),z=l(7,r(O,E)),B=e=>function(){(e._._.e||null)?.(``)},o.D0=B,V=d(`D`,_,v,g,R)})))()}function we(e){g(e.a)}var U,W,G,K;function Te(){return(Te=e((()=>{H(),s(),U=_,W=(e=>`/${e}&`)(v),G=(e,t)=>R(e.a,{...t,"aria-label":`Filter input`,placeholder:`Filter`,a11yControlsId:`filter-input-default`,a11yClearButtonText:`Clear filter input`}),K=d(`rtEOYbl`,U,W,we,G)})))()}var Ee;function De(){return(De=e((()=>{Ee=`<evo-filter-input
  ...input
  aria-label="Filter input"
  placeholder="Filter"
  a11yControlsId="filter-input-default"
  a11yClearButtonText="Clear filter input"
/>
`})))()}function Oe(e){g(e.a)}var ke,Ae,q,J,je,Y,Me;function Ne(){return(Ne=e((()=>{H(),s(),ke=(e=>`<div>${e}<div id=filter-input-controls>Current value: "<!>"</div></div>`)(_),Ae=(e=>`D/${e}&Db%m`)(v),q=c(6,e=>R(e.a,{...e.d,value:e.f,valueChange:Y(e),placeholder:`Filter`,a11yControlsId:`filter-input-controls`,"aria-label":`Filter input`,a11yClearButtonText:`Clear filter input`})),J=te(5,e=>{ne(e.b,e.f),q(e)}),je=l(3,e=>{J(e,e.d.value),q(e)}),Y=e=>t=>J(e,t),o.iwwvGce=Y,Me=d(`ON0FUI4`,ke,Ae,Oe,je)})))()}var X;function Pe(){return(Pe=e((()=>{X=`export interface Input {
  value: string;
}

<let/value=input.value>
<div>
  <evo-filter-input
    ...input
    value:=value
    placeholder="Filter"
    a11yControlsId="filter-input-controls"
    aria-label="Filter input"
    a11yClearButtonText="Clear filter input"
  />
  <div id="filter-input-controls">Current value: "\${value}"</div>
</div>
`})))()}var Fe,Z,Q,Ie;function $(){return($=e((()=>{p(),H(),Te(),De(),Ne(),Pe(),Fe={title:`form input/evo-filter-input`,component:V,parameters:{docs:{description:{component:f}}},argTypes:{size:{type:`string`,options:[`regular (default)`,`small`,`large`],control:`inline-radio`,description:`Size variants. Controls the height of the component.`},a11yClearButtonText:{type:`string`,control:`text`,description:`Localized, text for the clear button. If not provided, then no clear button is rendered`},a11yControlsId:{type:{name:`string`,required:!0},control:`text`,description:`Required. This is the id of the element that this input controls, such as the list of filtered items.`},placeholder:{type:{name:`string`,required:!0},control:`text`,table:{defaultValue:{summary:`Filter`}},description:`Required. Text to show when input is empty. This is not a label`},"<evo-input> attributes":{description:"All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through"}}},Z=t(K,Ee,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`}),Q=t(Me,X,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`,a11yControlsId:`filter-input-controls`}),Ie=[`Default`,`Controls`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Controls,Z as Default,Ie as __namedExportsOrder,Fe as default};