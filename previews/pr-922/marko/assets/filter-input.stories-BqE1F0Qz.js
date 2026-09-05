import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{D as n,J as ee,M as r,O as i,X as a,at as te,c as ne,et as o,i as s,k as c,n as l,t as u,tt as d}from"./dom-CrmgVQ1h.js";import{s as re}from"./evo-icon-CFoPYBpm.js";import{i as ie,n as ae,t as oe}from"./evo-icon-button-CFYZQjNt.js";import{a as se,c as ce,i as le,l as ue,n as de,o as fe,r as pe,s as me,t as he,u as ge}from"./evo-icon-clear-16-BvUfrKpG.js";import{t as _e}from"./textbox-BOurqKEF.js";import{i as ve,n as ye,o as be,r as xe,t as Se}from"./evo-input-CDVrixiw.js";var f;function p(){return(p=e((()=>{f=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function m(){return(m=e((()=>{})))()}function h(){return(h=e((()=>{re(),_e(),m()})))()}function g(e){ye(e.b)}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,Ce,I,L,R,z,B,V;function H(){return(H=e((()=>{s(),ge(),se(),ie(),be(),h(),_=(e=>`<span>${e}</span>`)(xe),v=(e=>` D/${e}&l`)(ve),y=e=>{de(e.a),he(e.a,{})},b=r(`A1`,pe,(e=>`/${e}&`)(le),y),x=e=>{me(e.a),fe(e.a,{})},S=r(`A2`,ce,(e=>`/${e}&`)(ue),x),C=o(1,e=>oe(e.a,{a11yText:e._._.h,class:`filter-input__clear-btn`,size:`small`,transparent:!0,onClick:B(e),content:b(e)})),w=i(14,C,e=>e._._),T=e=>{w(e),E(e)},E=i(15,C,e=>e._._),D=ee(0,(e=>`<!>${e}<!>`)(ae),(e=>`b/${e}&b`)(`b%c`),T),O=i(15,e=>D(e,+!e._.h)),k=r(`A3`,`<!><!><!>`,`b%`,O),A=o(13,e=>Se(e.b,{...e.l,fluid:!0,type:`search`,"aria-controls":e.i,placeholder:e.m,prefixIcon:l({content:S(e)}),postfixIcon:l({content:k(e)})}),2),j=c(12,A),M=(e,t)=>j(e,t===void 0?`Filter`:t),N=o(10,e=>ne(e.a,[`filter-input`,e.j&&`filter-input--${e.j}`,e.f])),P=c(5,N),F=c(9,N),Ce=c(8,A),I=c(11,A),L=(e,t)=>{(({a11yClearButtonText:t,a11yControlsId:n,class:ee,placeholder:r,size:i,...a})=>I(e,a))(t),R(e,t.valueChange),P(e,t.class),M(e,t.placeholder),z(e,t.a11yClearButtonText),Ce(e,t.a11yControlsId),F(e,t.size)},R=c(4,n(w)),z=c(7,n(O,E)),B=e=>function(){(e._._.e||null)?.(``)},d(`A0`,B),V=u(`A`,_,v,g,L)})))()}function we(e){g(e.a)}var U,W,G,K;function Te(){return(Te=e((()=>{H(),s(),U=_,W=(e=>`/${e}&`)(v),G=(e,t)=>L(e.a,{...t,"aria-label":`Filter input`,placeholder:`Filter`,a11yControlsId:`filter-input-default`,a11yClearButtonText:`Clear filter input`}),K=u(`rtEOYbl`,U,W,we,G)})))()}var Ee;function De(){return(De=e((()=>{Ee=`<evo-filter-input
  ...input
  aria-label="Filter input"
  placeholder="Filter"
  a11yControlsId="filter-input-default"
  a11yClearButtonText="Clear filter input"/>
`})))()}function Oe(e){g(e.a)}var ke,Ae,q,J,je,Y,X,Me;function Ne(){return(Ne=e((()=>{H(),s(),ke=(e=>`<div>${e}<div id=filter-input-controls>Current value: "<!>"</div></div>`)(_),Ae=(e=>`D/${e}&Db%m`)(v),q=o(6,e=>L(e.a,{...e.d,value:e.f,valueChange:X(e),placeholder:`Filter`,a11yControlsId:`filter-input-controls`,"aria-label":`Filter input`,a11yClearButtonText:`Clear filter input`})),J=a(5,e=>{te(e.b,e.f),q(e)}),je=J,Y=c(3,e=>{je(e,e.d.value),q(e)}),X=e=>t=>{J(e,t)},d(`tx3mR7d`,X),Me=u(`ZOzx3D4`,ke,Ae,Oe,Y)})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`export interface Input {
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
    a11yClearButtonText="Clear filter input"/>
  <div id="filter-input-controls">
    Current value: "\${value}"
  </div>
</div>
`})))()}var Ie,Z,Q,Le;function $(){return($=e((()=>{p(),H(),Te(),De(),Ne(),Fe(),Ie={title:`form input/evo-filter-input`,component:V,parameters:{docs:{description:{component:f}}},argTypes:{size:{type:`string`,options:[`regular (default)`,`small`,`large`],control:`inline-radio`,description:`Size variants. Controls the height of the component.`},a11yClearButtonText:{type:`string`,control:`text`,description:`Localized, text for the clear button. If not provided, then no clear button is rendered`},a11yControlsId:{type:{name:`string`,required:!0},control:`text`,description:`Required. This is the id of the element that this input controls, such as the list of filtered items.`},placeholder:{type:{name:`string`,required:!0},control:`text`,table:{defaultValue:{summary:`Filter`}},description:`Required. Text to show when input is empty. This is not a label`},"<evo-input> attributes":{description:"All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through"}}},Z=t(K,Ee,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`}),Q=t(Me,Pe,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`,a11yControlsId:`filter-input-controls`}),Le=[`Default`,`Controls`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Controls,Z as Default,Le as __namedExportsOrder,Ie as default};