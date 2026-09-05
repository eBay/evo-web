import{b as f}from"./utils-DyU2_5R1.js";import{_ as l,b as r,e as s,k as I,f as n,m as i,S as d,n as $,h as B,I as w,N as F}from"./dom-Dsj3KrDg.js";import{$ as k,a as D,b as z,c as O,d as R,e as S,f as E,g as q}from"./evo-icon-clear-16-C3VG04fd.js";import{a as j,b as K,c as A,$ as L}from"./index-DeonbgBR.js";import{$ as Z,a as G,b as H,c as N}from"./index-BV7fDe28.js";import"./index-DjsMDvy3.js";/* empty css                */import"./iframe-IzysnPYE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-moawUCa1.js";import"./index-Cq5soyM7.js";import"./evo-icon-chevron-down-16-Sm-HSvqV.js";import"./index-fmJzfPD_.js";import"./controllable.feat-CpxAsaRc.js";import"./controllable-input.feat-Bv_Jvj_l.js";import"./controllable-open.feat-CwyPfH6x.js";import"./controllable-select.feat-OswKrJJ5.js";/* empty css                    */import"./index-6CM74AB1.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,u=(t=>`<span>${t}</span>`)(H),p=(t=>` D/${t}&l`)(G),V=t=>{R(t.a),S(t.a,{})},X=r("XGsaaPu",D,(t=>`/${t}&`)(k),V),Y=t=>{E(t.a),q(t.a,{})},J=r("SfB7KZm",O,(t=>`/${t}&`)(z),Y),C=i(1,t=>L(t.a,{a11yText:t._._.h,class:"filter-input__clear-btn",size:"small",transparent:!0,onClick:pt(t),content:X(t)})),h=s(14,C,t=>t._._),M=t=>{h(t),b(t),A(t.a)},b=s(15,C,t=>t._._),Q=I(0,(t=>`<!>${t}<!>`)(j),(t=>`b/${t}&b`)(K),M),v=s(15,t=>Q(t,t._.h?0:1)),U=v,W=r("Lcprdez","<!><!><!>","b%",U),c=i(13,t=>N(t.b,{...t.l,fluid:!0,type:"search","aria-controls":t.i,placeholder:t.m,prefixIcon:d({content:J(t)}),postfixIcon:d({content:W(t)})}),2),tt=n(12,c),et=(t,e)=>tt(t,e!==void 0?e:"Filter"),y=i(10,t=>B(t.a,["filter-input",t.j&&`filter-input--${t.j}`,t.f])),nt=n(5,y),at=n(9,y);function _(t){Z(t.b)}const ot=n(8,c),it=n(11,c),m=(t,e)=>{(({a11yClearButtonText:Bt,a11yControlsId:wt,class:Ft,placeholder:kt,size:Dt,...T})=>it(t,T))(e),rt(t,e.valueChange),nt(t,e.class),et(t,e.placeholder),ut(t,e.a11yClearButtonText),ot(t,e.a11yControlsId),at(t,e.size)},lt=$(h),rt=n(4,lt),st=$(v,b),ut=n(7,st),pt=t=>function(){(t._._.e||null)?.("")},ct=l("KTOKiHF",u,p,_,m),_t=u,mt=(t=>`/${t}&`)(p);function dt(t){_(t.a)}const ft=(t,e)=>m(t.a,{...e,"aria-label":"Filter input",placeholder:"Filter",a11yControlsId:"filter-input-default",a11yClearButtonText:"Clear filter input"}),$t=l("rtEOYbl",_t,mt,dt,ft),Ct=`<evo-filter-input
  ...input
  aria-label="Filter input"
  placeholder="Filter"
  a11yControlsId="filter-input-default"
  a11yClearButtonText="Clear filter input"/>
`,ht=(t=>`<div>${t}<div id=filter-input-controls>Current value: "<!>"</div></div>`)(u),bt=(t=>`D/${t}&Db%m`)(p),x=i(6,t=>m(t.a,{...t.d,value:t.f,valueChange:gt(t),placeholder:"Filter",a11yControlsId:"filter-input-controls","aria-label":"Filter input",a11yClearButtonText:"Clear filter input"})),g=w(5,t=>{F(t.b,t.f),x(t)}),vt=g;function yt(t){_(t.a)}const xt=n(3,t=>{vt(t,t.d.value),x(t)}),gt=t=>e=>{g(t,e)},Tt=l("ZOzx3D4",ht,bt,yt,xt),It=`export interface Input {
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
`,Mt={title:"form input/evo-filter-input",component:ct,parameters:{docs:{description:{component:P}}},argTypes:{size:{type:"string",options:["regular (default)","small","large"],control:"inline-radio",description:"Size variants. Controls the height of the component."},a11yClearButtonText:{type:"string",control:"text",description:"Localized, text for the clear button. If not provided, then no clear button is rendered"},a11yControlsId:{type:{name:"string",required:!0},control:"text",description:"Required. This is the id of the element that this input controls, such as the list of filtered items."},placeholder:{type:{name:"string",required:!0},control:"text",table:{defaultValue:{summary:"Filter"}},description:"Required. Text to show when input is empty. This is not a label"},"<evo-input> attributes":{description:"All attributes and event handlers from [the `<evo-input>` tag](?path=/docs/form-input-evo-input--docs) will be passed through"}}},a=f($t,Ct,{a11yClearButton:"Clear filter input","aria-label":"Filter input"}),o=f(Tt,It,{a11yClearButton:"Clear filter input","aria-label":"Filter input",a11yControlsId:"filter-input-controls"});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...o.parameters?.docs?.source}}};const Qt=["Default","Controls"];export{o as Controls,a as Default,Qt as __namedExportsOrder,Mt as default};
