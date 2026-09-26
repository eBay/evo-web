import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,C as r,N as ee,T as te,V as i,Y as ne,Z as re,at as ie,c as ae,i as a,k as o,nt as oe,ot as s,s as se,t as c,tt as l}from"./dom-CNWckxLY.js";import{t as ce}from"./controllable-input.feat-QXQeGHpK.js";import{t as le}from"./field-CbbNu1w4.js";import{a as ue,c as de,i as fe,l as pe,n as me,o as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-radio-unchecked-18-CysHI3vD.js";import{a as be,c as xe,i as Se,l as Ce,n as we,o as Te,r as Ee,s as De,t as Oe,u as ke}from"./evo-icon-radio-unchecked-24-nNSUyxIs.js";var u;function d(){return(d=e((()=>{u=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-radio
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-radio)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-radio)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-radio/examples)
`})))()}function f(){return(f=e((()=>{})))()}function p(){return(p=e((()=>{f(),le()})))()}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),ce(),be(),ke(),ue(),ye(),p(),m=`<span><input type=radio class=radio__control><span class=radio__icon hidden></span></span>`,h=` D b l`,g=e=>{me(e.a),ve(e.a,{class:`radio__unchecked`}),_e(e.b),he(e.b,{class:`radio__checked`})},_=e=>{we(e.a),Oe(e.a,{class:`radio__unchecked`}),De(e.b),Te(e.b,{class:`radio__checked`})},v=(e,t)=>ae(e.a,[`radio`,t]),y=ie(`R0`,e=>te(e,`b`)),b=o(7,e=>{r(e,`b`,e.h,{type:1,class:1},ee),y(e)}),x=ne(2,((e,t)=>`${e}${t}`)(Ee,xe),((e,t)=>`/${e}&/${t}&`)(Se,Ce),_,((e,t)=>`${e}${t}`)(ge,de),((e,t)=>`/${e}&/${t}&`)(fe,pe),g),S=(e,t)=>x(e,t===`large`?0:1),C=(e,t)=>{(({class:t,size:n,...r})=>b(e,r))(t),v(e,t.class),S(e,t.size)},w=c(`R`,m,h,0,C)})))()}function Ae(e){N(e,[[1,2,3]])}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{T(),a(),E=`<fieldset><legend>Choose an Option</legend><!></fieldset>`,D=`Db%l`,O=l(5,e=>{let t={...e._.c,id:`group-radio-${e.e}`,value:e.e,name:`radio-group`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),k=n(0,O),A=e=>{k._(e),v(e.a,`field__control`)},j=o(4,e=>{se(e.b,`for`,`group-radio-${e.e}`),s(e.c,e.e),O(e)}),M=(e,t)=>j(e,t[0]),N=i(0,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(m),(e=>`D/${e}& Db%m`)(h),A,M),P=o(2,k),F=c(`a08wJzK`,E,D,Ae,P)})))()}var L;function R(){return(R=e((()=>{L=`<fieldset>
  <legend>Choose an Option</legend>
  <for|label_num| of=[1, 2, 3]>
    <span class="field">
      <evo-radio
        ...input
        class="field__control"
        id=\`group-radio-\${label_num}\`
        value=label_num
        name="radio-group"
      />
      <label
        class="field__label field__label--end"
        for=\`group-radio-\${label_num}\`
      >
        Option \${label_num}
      </label>
    </span>
  </for>
</fieldset>
`})))()}function je(e){v(e.a,`field__control`)}var z,B,Me,Ne;function Pe(){return(Pe=e((()=>{T(),a(),z=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end">Option</label></span>`)(m),B=(e=>`D/${e}&l`)(h),Me=o(2,e=>{let t={...e.c,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),Ne=c(`mFuylNU`,z,B,je,Me)})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`<span class="field">
  <evo-radio ...input value="1" class="field__control" id="radio"/>
  <label for="radio" class="field__label field__label--end">Option</label>
</span>
`})))()}function Le(e){v(e.a,`field__control`)}var Re,ze,Be,Ve;function He(){return(He=e((()=>{T(),a(),Re=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end field__label--disabled">Option</label></span>`)(m),ze=(e=>`D/${e}&l`)(h),Be=o(2,e=>{let t={...e.c,disabled:!0,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),Ve=c(`YmVsMxX`,Re,ze,Le,Be)})))()}var Ue;function We(){return(We=e((()=>{Ue=`<span class="field">
  <evo-radio ...input disabled value="1" class="field__control" id="radio"/>
  <label
    for="radio"
    class="field__label field__label--end field__label--disabled"
  >
    Option
  </label>
</span>
`})))()}function Ge(e){K(e,`A`),nt(e,q(e)),rt(e,[V]),it(e,[V])}var Ke,qe,V,H,U,Je,Ye,Xe,Ze,W,G,Qe,$e,et,tt,K,nt,rt,it,q,at;function ot(){return(ot=e((()=>{T(),a(),Ke=`<!><!><p>Selected item is <!></p><!><!>`,qe=`b%bDb%l%c`,V=[`A`,`B`,`C`,`D`],H=l(4,e=>b(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:`radio-group-2`}),2),U=n(2,H),Je=e=>{U._(e),Ye._(e),v(e.a),S(e.a)},Ye=n(2,H),Xe=o(3,e=>{s(e.b,e.d),H(e)}),Ze=(e,t)=>Xe(e,t[0]),W=l(4,e=>b(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:`radio-group-1`}),2),G=n(0,W),Qe=e=>{G._(e),$e._(e),v(e.a),S(e.a)},$e=n(0,W),et=o(3,e=>{s(e.b,e.d),W(e)}),tt=(e,t)=>et(e,t[0]),K=re(3,e=>{s(e.b,e.d),G(e),U(e)}),nt=o(4),rt=i(0,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Qe,tt),it=i(2,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Je,Ze),q=e=>t=>{K(e,t)},oe(`BWlRxnP`,q),at=c(`geVG7xL`,Ke,qe,Ge)})))()}var st;function ct(){return(ct=e((()=>{st=`static const items = ["A", "B", "C", "D"];

<let/checked="A">

<for|item| of=items>
  <label>
    <evo-radio name="radio-group-1" value=item checkedValue:=checked/>
    \${item}\${" "}
  </label>
</for>

<p>Selected item is \${checked}</p>

<for|item| of=items>
  <label>
    <evo-radio name="radio-group-2" value=item checkedValue:=checked/>
    \${item}\${" "}
  </label>
</for>
`})))()}var lt,J,Y,X,Z,Q,ut;function $(){return($=e((()=>{d(),T(),I(),R(),Pe(),Ie(),He(),We(),ot(),ct(),lt={title:`form input/evo-radio`,component:w,parameters:{docs:{description:{component:u}}},argTypes:{size:{options:[`regular (default)`,`large`],description:`Icon size. (Note: The dimensions of the radio will not change, but only the icon)`},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},J=t(Ne,Fe),Y=t(Ve,Ue),X=t(F,L),Z=t(at,st),Q={},ut=[`WithLabel`,`Disabled`,`Group`,`Controlled`,`Isolated`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{}`,...Q.parameters?.docs?.source}}}})))()}$();export{Z as Controlled,Y as Disabled,X as Group,Q as Isolated,J as WithLabel,ut as __namedExportsOrder,lt as default};