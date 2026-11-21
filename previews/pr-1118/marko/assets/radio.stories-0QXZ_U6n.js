import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{E as n,N as ee,Q as te,U as r,V as i,at as ne,c as re,et as ie,i as a,it as o,k as s,lt as c,s as ae,st as oe,t as l,w as se}from"./dom-BzvT7IaP.js";import{t as ce}from"./controllable-input.feat-Dad-9gvl.js";import{t as le}from"./field-CbbNu1w4.js";import{a as ue,c as de,i as fe,l as pe,n as me,o as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-radio-unchecked-18-EcTC46Ox.js";import{a as be,c as xe,i as Se,l as Ce,n as we,o as Te,r as Ee,s as De,t as Oe,u as ke}from"./evo-icon-radio-unchecked-24-GGW_DYrL.js";var u;function d(){return(d=e((()=>{u=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function f(){return(f=e((()=>{})))()}function p(){return(p=e((()=>{f(),le()})))()}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),ce(),be(),ke(),ue(),ye(),p(),m=`<span><input type=radio class=radio__control><span class=radio__icon hidden></span></span>`,h=` D b l`,g=e=>{me(e.a),ve(e.a,{class:`radio__unchecked`}),_e(e.b),he(e.b,{class:`radio__checked`})},_=e=>{we(e.a),Oe(e.a,{class:`radio__unchecked`}),De(e.b),Te(e.b,{class:`radio__checked`})},v=(e,t)=>re(e.a,[`radio`,t]),y=oe(`W0`,e=>n(e,`b`)),b=s(7,e=>{se(e,`b`,e.h,{type:1,class:1},ee),y(e)}),x=te(2,((e,t)=>`${e}${t}`)(Ee,xe),((e,t)=>`/${e}&/${t}&`)(Se,Ce),_,((e,t)=>`${e}${t}`)(ge,de),((e,t)=>`/${e}&/${t}&`)(fe,pe),g),S=(e,t)=>x(e,t===`large`?0:1),C=(e,t)=>{b(e,(({class:e,size:t,...n})=>n)(t)),v(e,t.class),S(e,t.size)},w=l(`W`,m,h,0,C)})))()}function Ae(e){j(e,[[1,2,3]])}var E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{T(),a(),E=`<fieldset><legend>Choose an Option</legend><!></fieldset>`,D=`Db%l`,O=o(5,e=>{let t={...e._.c,id:`group-radio-${e.e}`,value:e.e,name:`radio-group`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),k=i(0,O,3),A=e=>{k._(e),v(e.a,`field__control`)},j=r(0,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(m),(e=>`D/${e}& Db%m`)(h),A,s(4,e=>{ae(e.b,`for`,`group-radio-${e.e}`),c(e.c,e.e),O(e)})),M=s(2,k),N=l(`a08wJzK`,E,D,Ae,M)})))()}var F;function I(){return(I=e((()=>{F=`<fieldset>
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
`})))()}function je(e){v(e.a,`field__control`)}var L,R,z,B;function Me(){return(Me=e((()=>{T(),a(),L=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end">Option</label></span>`)(m),R=(e=>`D/${e}&l`)(h),z=s(2,e=>{let t={...e.c,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),B=l(`bEXGaSU`,L,R,je,z)})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`<span class="field">
  <evo-radio ...input value="1" class="field__control" id="radio"/>
  <label for="radio" class="field__label field__label--end">Option</label>
</span>
`})))()}function Fe(e){v(e.a,`field__control`)}var Ie,Le,Re,ze;function Be(){return(Be=e((()=>{T(),a(),Ie=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end field__label--disabled">Option</label></span>`)(m),Le=(e=>`D/${e}&l`)(h),Re=s(2,e=>{let t={...e.c,disabled:!0,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),ze=l(`YmVsMxX`,Ie,Le,Fe,Re)})))()}var Ve;function He(){return(He=e((()=>{Ve=`<span class="field">
  <evo-radio ...input disabled value="1" class="field__control" id="radio"/>
  <label
    for="radio"
    class="field__label field__label--end field__label--disabled"
  >
    Option
  </label>
</span>
`})))()}function Ue(e){K(e,`A`),Qe(e,q(e)),$e(e,[V]),et(e,[V])}var We,Ge,V,H,U,Ke,qe,Je,W,G,Ye,Xe,Ze,K,Qe,$e,et,q,tt;function nt(){return(nt=e((()=>{T(),a(),We=`<!><!><p>Selected item is <!></p><!><!>`,Ge=`b%bDb%l%c`,V=[`A`,`B`,`C`,`D`],H=o(4,e=>b(e.a,{name:`radio-group-2`,value:e.d,checkedValue:e._.d,checkedValueChange:e._.e}),2),U=i(2,H,6),Ke=e=>{U._(e),qe._(e),v(e.a),S(e.a)},qe=i(2,H,8),Je=s(3,e=>{c(e.b,e.d),H(e)}),W=o(4,e=>b(e.a,{name:`radio-group-1`,value:e.d,checkedValue:e._.d,checkedValueChange:e._.e}),2),G=i(0,W,5),Ye=e=>{G._(e),Xe._(e),v(e.a),S(e.a)},Xe=i(0,W,7),Ze=s(3,e=>{c(e.b,e.d),W(e)}),K=ie(3,e=>{c(e.b,e.d),G(e),U(e)}),Qe=s(4),$e=r(0,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Ye,Ze),et=r(2,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Ke,Je),q=e=>t=>K(e,t),ne.BWlRxnP=q,tt=l(`geVG7xL`,We,Ge,Ue)})))()}var rt;function it(){return(it=e((()=>{rt=`static const items = ["A", "B", "C", "D"];

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
`})))()}var at,J,Y,X,Z,Q,ot;function $(){return($=e((()=>{d(),T(),P(),I(),Me(),Pe(),Be(),He(),nt(),it(),at={title:`form input/evo-radio`,component:w,parameters:{docs:{description:{component:u}}},argTypes:{size:{options:[`regular (default)`,`large`],description:`Icon size. (Note: The dimensions of the radio will not change, but only the icon)`},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},J=t(B,Ne),Y=t(ze,Ve),X=t(N,F),Z=t(tt,rt),Q={},ot=[`WithLabel`,`Disabled`,`Group`,`Controlled`,`Isolated`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{}`,...Q.parameters?.docs?.source}}}})))()}$();export{Z as Controlled,Y as Disabled,X as Group,Q as Isolated,J as WithLabel,ot as __namedExportsOrder,at as default};