import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,E as ee,H as i,P as te,W as a,at as o,c as ne,ct as re,i as s,ot as ie,s as ae,t as c,tt as oe,ut as l,w as se}from"./dom-BJr4MHiD.js";import{t as ce}from"./controllable-input.feat-D_xtTe82.js";import{t as le}from"./field-CbbNu1w4.js";import{a as ue,c as de,i as fe,l as pe,n as me,o as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-radio-unchecked-18-BYk8VT0o.js";import{a as be,c as xe,i as Se,l as Ce,n as we,o as Te,r as Ee,s as De,t as Oe,u as ke}from"./evo-icon-radio-unchecked-24-DsGQPb0l.js";var u;function d(){return(d=e((()=>{u=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function f(){return(f=e((()=>{})))()}function p(){return(p=e((()=>{f(),le()})))()}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s(),ce(),be(),ke(),ue(),ye(),p(),m=`<span><input type=radio class=radio__control><span class=radio__icon hidden></span></span>`,h=` D b l`,g=e=>{me(e.a),ve(e.a,{class:`radio__unchecked`}),_e(e.b),he(e.b,{class:`radio__checked`})},_=e=>{we(e.a),Oe(e.a,{class:`radio__unchecked`}),De(e.b),Te(e.b,{class:`radio__checked`})},v=(e,t)=>ne(e.a,[`radio`,t]),y=re(`V0`,e=>ee(e,`b`)),b=r(7,e=>{se(e,`b`,e.h,{type:1,class:1},te),y(e)}),x=n(2,((e,t)=>`${e}${t}`)(Ee,xe),((e,t)=>`/${e}&/${t}&`)(Se,Ce),_,((e,t)=>`${e}${t}`)(ge,de),((e,t)=>`/${e}&/${t}&`)(fe,pe),g),S=(e,t)=>x(e,t===`large`?0:1),C=(e,t)=>{(({class:t,size:n,...r})=>b(e,r))(t),v(e,t.class),S(e,t.size)},w=c(`V`,m,h,0,C)})))()}function Ae(e){N(e,[[1,2,3]])}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{T(),s(),E=`<fieldset><legend>Choose an Option</legend><!></fieldset>`,D=`Db%l`,O=o(5,e=>{let t={...e._.c,id:`group-radio-${e.e}`,value:e.e,name:`radio-group`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),k=i(0,O),A=e=>{k._(e),v(e.a,`field__control`)},j=r(4,e=>{ae(e.b,`for`,`group-radio-${e.e}`),l(e.c,e.e),O(e)}),M=(e,t)=>j(e,t[0]),N=a(0,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(m),(e=>`D/${e}& Db%m`)(h),A,M),P=r(2,k),F=c(`a08wJzK`,E,D,Ae,P)})))()}var L;function R(){return(R=e((()=>{L=`<fieldset>
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
`})))()}function je(e){v(e.a,`field__control`)}var z,B,Me,Ne;function Pe(){return(Pe=e((()=>{T(),s(),z=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end">Option</label></span>`)(m),B=(e=>`D/${e}&l`)(h),Me=r(2,e=>{let t={...e.c,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),Ne=c(`mFuylNU`,z,B,je,Me)})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`<span class="field">
  <evo-radio ...input value="1" class="field__control" id="radio"/>
  <label for="radio" class="field__label field__label--end">Option</label>
</span>
`})))()}function Le(e){v(e.a,`field__control`)}var Re,ze,Be,Ve;function He(){return(He=e((()=>{T(),s(),Re=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end field__label--disabled">Option</label></span>`)(m),ze=(e=>`D/${e}&l`)(h),Be=r(2,e=>{let t={...e.c,disabled:!0,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),Ve=c(`YmVsMxX`,Re,ze,Le,Be)})))()}var Ue;function We(){return(We=e((()=>{Ue=`<span class="field">
  <evo-radio ...input disabled value="1" class="field__control" id="radio"/>
  <label
    for="radio"
    class="field__label field__label--end field__label--disabled"
  >
    Option
  </label>
</span>
`})))()}function Ge(e){K(e,`A`),nt(e,J(e)),rt(e,[V]),q(e,[V])}var Ke,qe,V,H,U,Je,Ye,Xe,Ze,W,G,Qe,$e,et,tt,K,nt,rt,q,J,it;function at(){return(at=e((()=>{T(),s(),Ke=`<!><!><p>Selected item is <!></p><!><!>`,qe=`b%bDb%l%c`,V=[`A`,`B`,`C`,`D`],H=o(4,e=>b(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:`radio-group-2`}),2),U=i(2,H),Je=e=>{U._(e),Ye._(e),v(e.a),S(e.a)},Ye=i(2,H),Xe=r(3,e=>{l(e.b,e.d),H(e)}),Ze=(e,t)=>Xe(e,t[0]),W=o(4,e=>b(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:`radio-group-1`}),2),G=i(0,W),Qe=e=>{G._(e),$e._(e),v(e.a),S(e.a)},$e=i(0,W),et=r(3,e=>{l(e.b,e.d),W(e)}),tt=(e,t)=>et(e,t[0]),K=oe(3,e=>{l(e.b,e.d),G(e),U(e)}),nt=r(4),rt=a(0,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Qe,tt),q=a(2,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Je,Ze),J=e=>t=>{K(e,t)},ie.BWlRxnP=J,it=c(`geVG7xL`,Ke,qe,Ge)})))()}var ot;function st(){return(st=e((()=>{ot=`static const items = ["A", "B", "C", "D"];

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
`})))()}var ct,Y,X,Z,Q,$,lt;function ut(){return(ut=e((()=>{d(),T(),I(),R(),Pe(),Ie(),He(),We(),at(),st(),ct={title:`form input/evo-radio`,component:w,parameters:{docs:{description:{component:u}}},argTypes:{size:{options:[`regular (default)`,`large`],description:`Icon size. (Note: The dimensions of the radio will not change, but only the icon)`},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},Y=t(Ne,Fe),X=t(Ve,Ue),Z=t(F,L),Q=t(it,ot),$={},lt=[`WithLabel`,`Disabled`,`Group`,`Controlled`,`Isolated`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{}`,...$.parameters?.docs?.source}}}})))()}ut();export{Q as Controlled,X as Disabled,Z as Group,$ as Isolated,Y as WithLabel,lt as __namedExportsOrder,ct as default};