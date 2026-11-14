import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{E as n,N as ee,Q as te,U as r,V as i,at as ne,c as re,et as ie,i as a,it as o,k as s,lt as c,s as ae,st as oe,t as l,w as se}from"./dom-CUxLGBQ2.js";import{t as ce}from"./controllable-input.feat-BuLtlI89.js";import{t as le}from"./field-CbbNu1w4.js";import{a as ue,c as de,i as fe,l as pe,n as me,o as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-radio-unchecked-18-CtbA2NMM.js";import{a as be,c as xe,i as Se,l as Ce,n as we,o as Te,r as Ee,s as De,t as Oe,u as ke}from"./evo-icon-radio-unchecked-24-BRUc9nut.js";var u;function d(){return(d=e((()=>{u=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function f(){return(f=e((()=>{})))()}function p(){return(p=e((()=>{f(),le()})))()}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),ce(),be(),ke(),ue(),ye(),p(),m=`<span><input type=radio class=radio__control><span class=radio__icon hidden></span></span>`,h=` D b l`,g=e=>{me(e.a),ve(e.a,{class:`radio__unchecked`}),_e(e.b),he(e.b,{class:`radio__checked`})},_=e=>{we(e.a),Oe(e.a,{class:`radio__unchecked`}),De(e.b),Te(e.b,{class:`radio__checked`})},v=(e,t)=>re(e.a,[`radio`,t]),y=oe(`W0`,e=>n(e,`b`)),b=s(7,e=>{se(e,`b`,e.h,{type:1,class:1},ee),y(e)}),x=te(2,((e,t)=>`${e}${t}`)(Ee,xe),((e,t)=>`/${e}&/${t}&`)(Se,Ce),_,((e,t)=>`${e}${t}`)(ge,de),((e,t)=>`/${e}&/${t}&`)(fe,pe),g),S=(e,t)=>x(e,t===`large`?0:1),C=(e,t)=>{b(e,(({class:e,size:t,...n})=>n)(t)),v(e,t.class),S(e,t.size)},w=l(`W`,m,h,0,C)})))()}function Ae(e){N(e,[[1,2,3]])}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{T(),a(),E=`<fieldset><legend>Choose an Option</legend><!></fieldset>`,D=`Db%l`,O=o(5,e=>{let t={...e._.c,id:`group-radio-${e.e}`,value:e.e,name:`radio-group`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),k=i(0,O,3),A=e=>{k._(e),v(e.a,`field__control`)},j=s(4,e=>{ae(e.b,`for`,`group-radio-${e.e}`),c(e.c,e.e),O(e)}),M=(e,t)=>j(e,t[0]),N=r(0,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(m),(e=>`D/${e}& Db%m`)(h),A,M),P=s(2,k),F=l(`a08wJzK`,E,D,Ae,P)})))()}var L;function R(){return(R=e((()=>{L=`<fieldset>
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
`})))()}function je(e){v(e.a,`field__control`)}var z,B,V,Me;function Ne(){return(Ne=e((()=>{T(),a(),z=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end">Option</label></span>`)(m),B=(e=>`D/${e}&l`)(h),V=s(2,e=>{let t={...e.c,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),Me=l(`bEXGaSU`,z,B,je,V)})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`<span class="field">
  <evo-radio ...input value="1" class="field__control" id="radio"/>
  <label for="radio" class="field__label field__label--end">Option</label>
</span>
`})))()}function Ie(e){v(e.a,`field__control`)}var Le,Re,ze,Be;function Ve(){return(Ve=e((()=>{T(),a(),Le=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end field__label--disabled">Option</label></span>`)(m),Re=(e=>`D/${e}&l`)(h),ze=s(2,e=>{let t={...e.c,disabled:!0,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),Be=l(`YmVsMxX`,Le,Re,Ie,ze)})))()}var He;function Ue(){return(Ue=e((()=>{He=`<span class="field">
  <evo-radio ...input disabled value="1" class="field__control" id="radio"/>
  <label
    for="radio"
    class="field__label field__label--end field__label--disabled"
  >
    Option
  </label>
</span>
`})))()}function We(e){q(e,`A`),tt(e,J(e)),nt(e,[H]),rt(e,[H])}var Ge,Ke,H,U,W,qe,Je,Ye,Xe,G,K,Ze,Qe,$e,et,q,tt,nt,rt,J,it;function at(){return(at=e((()=>{T(),a(),Ge=`<!><!><p>Selected item is <!></p><!><!>`,Ke=`b%bDb%l%c`,H=[`A`,`B`,`C`,`D`],U=o(4,e=>b(e.a,{name:`radio-group-2`,value:e.d,checkedValue:e._.d,checkedValueChange:e._.e}),2),W=i(2,U,6),qe=e=>{W._(e),Je._(e),v(e.a),S(e.a)},Je=i(2,U,8),Ye=s(3,e=>{c(e.b,e.d),U(e)}),Xe=(e,t)=>Ye(e,t[0]),G=o(4,e=>b(e.a,{name:`radio-group-1`,value:e.d,checkedValue:e._.d,checkedValueChange:e._.e}),2),K=i(0,G,5),Ze=e=>{K._(e),Qe._(e),v(e.a),S(e.a)},Qe=i(0,G,7),$e=s(3,e=>{c(e.b,e.d),G(e)}),et=(e,t)=>$e(e,t[0]),q=ie(3,e=>{c(e.b,e.d),K(e),W(e)}),tt=s(4),nt=r(0,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Ze,et),rt=r(2,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),qe,Xe),J=e=>t=>q(e,t),ne.BWlRxnP=J,it=l(`geVG7xL`,Ge,Ke,We)})))()}var ot;function st(){return(st=e((()=>{ot=`static const items = ["A", "B", "C", "D"];

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
`})))()}var ct,Y,X,Z,Q,$,lt;function ut(){return(ut=e((()=>{d(),T(),I(),R(),Ne(),Fe(),Ve(),Ue(),at(),st(),ct={title:`form input/evo-radio`,component:w,parameters:{docs:{description:{component:u}}},argTypes:{size:{options:[`regular (default)`,`large`],description:`Icon size. (Note: The dimensions of the radio will not change, but only the icon)`},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},Y=t(Me,Pe),X=t(Be,He),Z=t(F,L),Q=t(it,ot),$={},lt=[`WithLabel`,`Disabled`,`Group`,`Controlled`,`Isolated`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{}`,...$.parameters?.docs?.source}}}})))()}ut();export{Q as Controlled,X as Disabled,Z as Group,$ as Isolated,Y as WithLabel,lt as __namedExportsOrder,ct as default};