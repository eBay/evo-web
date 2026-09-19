import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,N as r,O as i,Q as ee,X as a,c as te,ct as ne,i as o,k as s,n as c,nt as l,rt as u,t as d}from"./dom-DAi6NM7T.js";import{s as re}from"./evo-icon-BcUhk3ax.js";import{i as ie,n as ae,t as oe}from"./evo-icon-button-PqXv2_d4.js";import{a as se,c as ce,i as le,l as ue,n as de,o as fe,r as pe,s as me,t as he,u as ge}from"./evo-icon-clear-16-kJAnfhSt.js";import{t as _e}from"./textbox-BOurqKEF.js";import{i as ve,n as ye,o as be,r as xe,t as Se}from"./evo-input-D2c6KlT7.js";var f;function p(){return(p=e((()=>{f=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function m(){return(m=e((()=>{})))()}function h(){return(h=e((()=>{re(),_e(),m()})))()}function g(e){ye(e.b)}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,Ce,L,R,z,B,V;function H(){return(H=e((()=>{o(),ge(),se(),ie(),be(),h(),_=(e=>`<span>${e}</span>`)(xe),v=(e=>` D/${e}&l`)(ve),y=e=>{de(e.a),he(e.a,{})},b=r(`A1`,pe,(e=>`/${e}&`)(le),y),x=e=>{me(e.a),fe(e.a,{})},S=r(`A2`,ce,(e=>`/${e}&`)(ue),x),C=l(1,e=>oe(e.a,{a11yText:e._._.h,class:`filter-input__clear-btn`,size:`small`,transparent:!0,onClick:B(e),content:b(e)})),w=s(14,C,e=>e._._),T=e=>{w(e),E(e)},E=s(15,C,e=>e._._),D=a(0,(e=>`<!>${e}<!>`)(ae),(e=>`b/${e}&b`)(`b%c`),T),O=s(15,e=>D(e,+!e._.h)),k=r(`A3`,`<!><!><!>`,`b%`,O),A=l(13,e=>Se(e.b,{...e.l,fluid:!0,type:`search`,"aria-controls":e.i,placeholder:e.m,prefixIcon:c({content:S(e)}),postfixIcon:c({content:k(e)})}),2),j=n(12,A),M=(e,t)=>j(e,t===void 0?`Filter`:t),N=l(10,e=>te(e.a,[`filter-input`,e.j&&`filter-input--${e.j}`,e.f])),P=n(5,N),F=n(9,N),I=n(8,A),Ce=n(11,A),L=(e,t)=>{(({a11yClearButtonText:t,a11yControlsId:n,class:r,placeholder:i,size:ee,...a})=>Ce(e,a))(t),R(e,t.valueChange),P(e,t.class),M(e,t.placeholder),z(e,t.a11yClearButtonText),I(e,t.a11yControlsId),F(e,t.size)},R=n(4,i(w)),z=n(7,i(O,E)),B=e=>function(){(e._._.e||null)?.(``)},u(`A0`,B),V=d(`A`,_,v,g,L)})))()}function we(e){g(e.a)}var U,W,G,K;function q(){return(q=e((()=>{H(),o(),U=_,W=(e=>`/${e}&`)(v),G=(e,t)=>L(e.a,{...t,"aria-label":`Filter input`,placeholder:`Filter`,a11yControlsId:`filter-input-default`,a11yClearButtonText:`Clear filter input`}),K=d(`rtEOYbl`,U,W,we,G)})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`<evo-filter-input
  ...input
  aria-label="Filter input"
  placeholder="Filter"
  a11yControlsId="filter-input-default"
  a11yClearButtonText="Clear filter input"
/>
`})))()}function De(e){g(e.a)}var Oe,ke,J,Y,Ae,je,X,Me;function Ne(){return(Ne=e((()=>{H(),o(),Oe=(e=>`<div>${e}<div id=filter-input-controls>Current value: "<!>"</div></div>`)(_),ke=(e=>`D/${e}&Db%m`)(v),J=l(6,e=>L(e.a,{...e.d,value:e.f,valueChange:X(e),placeholder:`Filter`,a11yControlsId:`filter-input-controls`,"aria-label":`Filter input`,a11yClearButtonText:`Clear filter input`})),Y=ee(5,e=>{ne(e.b,e.f),J(e)}),Ae=Y,je=n(3,e=>{Ae(e,e.d.value),J(e)}),X=e=>t=>{Y(e,t)},u(`tx3mR7d`,X),Me=d(`ZOzx3D4`,Oe,ke,De,je)})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`export interface Input {
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
`})))()}var Ie,Z,Q,Le;function $(){return($=e((()=>{p(),H(),q(),Ee(),Ne(),Fe(),Ie={title:`form input/evo-filter-input`,component:V,parameters:{docs:{description:{component:f}}},argTypes:{size:{type:`string`,options:[`regular (default)`,`small`,`large`],control:`inline-radio`,description:`Size variants. Controls the height of the component.`},a11yClearButtonText:{type:`string`,control:`text`,description:`Localized, text for the clear button. If not provided, then no clear button is rendered`},a11yControlsId:{type:{name:`string`,required:!0},control:`text`,description:`Required. This is the id of the element that this input controls, such as the list of filtered items.`},placeholder:{type:{name:`string`,required:!0},control:`text`,table:{defaultValue:{summary:`Filter`}},description:`Required. Text to show when input is empty. This is not a label`},"<evo-input> attributes":{description:"All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through"}}},Z=t(K,Te,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`}),Q=t(Me,Pe,{a11yClearButton:`Clear filter input`,"aria-label":`Filter input`,a11yControlsId:`filter-input-controls`}),Le=[`Default`,`Controls`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Controls,Z as Default,Le as __namedExportsOrder,Ie as default};