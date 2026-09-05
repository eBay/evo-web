import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,C as r,J as ee,N as te,T as ne,V as i,X as re,at as a,c as ie,et as o,i as s,it as ae,k as c,s as oe,t as l,tt as se}from"./dom-CrmgVQ1h.js";import{t as ce}from"./controllable-input.feat-IcO0FdvC.js";import{t as le}from"./field-CbbNu1w4.js";import{a as ue,c as de,i as fe,l as pe,n as me,o as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-radio-unchecked-18-DY1jirjj.js";import{a as be,c as xe,i as Se,l as Ce,n as we,o as Te,r as Ee,s as De,t as Oe,u as ke}from"./evo-icon-radio-unchecked-24-LPCxFcp_.js";var u;function d(){return(d=e((()=>{u=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function f(){return(f=e((()=>{})))()}function p(){return(p=e((()=>{f(),le()})))()}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s(),ce(),be(),ke(),ue(),ye(),p(),m=`<span><input type=radio class=radio__control><span class=radio__icon hidden></span></span>`,h=` D b l`,g=e=>{me(e.a),ve(e.a,{class:`radio__unchecked`}),_e(e.b),he(e.b,{class:`radio__checked`})},_=e=>{we(e.a),Oe(e.a,{class:`radio__unchecked`}),De(e.b),Te(e.b,{class:`radio__checked`})},v=(e,t)=>ie(e.a,[`radio`,t]),y=ae(`Q0`,e=>ne(e,`b`)),b=c(7,e=>{r(e,`b`,e.h,{type:1,class:1},te),y(e)}),x=ee(2,((e,t)=>`${e}${t}`)(Ee,xe),((e,t)=>`/${e}&/${t}&`)(Se,Ce),_,((e,t)=>`${e}${t}`)(ge,de),((e,t)=>`/${e}&/${t}&`)(fe,pe),g),S=(e,t)=>x(e,t===`large`?0:1),C=(e,t)=>{(({class:t,size:n,...r})=>b(e,r))(t),v(e,t.class),S(e,t.size)},w=l(`Q`,m,h,0,C)})))()}function Ae(e){N(e,[[1,2,3]])}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{T(),s(),E=`<fieldset><legend>Choose an Option</legend><!></fieldset>`,D=`Db%l`,O=o(5,e=>{let t={...e._.c,id:`group-radio-${e.e}`,value:e.e,name:`radio-group`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),k=n(0,O),A=e=>{k._(e),v(e.a,`field__control`)},j=c(4,e=>{oe(e.b,`for`,`group-radio-${e.e}`),a(e.c,e.e),O(e)}),M=(e,t)=>j(e,t[0]),N=i(0,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(m),(e=>`D/${e}& Db%m`)(h),A,M),P=c(2,k),F=l(`a08wJzK`,E,D,Ae,P)})))()}var L;function R(){return(R=e((()=>{L=`<fieldset>
  <legend>Choose an Option</legend>
  <for|label_num| of=[1, 2, 3]>
    <span class="field">
      <evo-radio
        ...input
        class="field__control"
        id=\`group-radio-\${label_num}\`
        value=label_num
        name="radio-group"/>
      <label
        class="field__label field__label--end"
        for=\`group-radio-\${label_num}\`>
        Option \${label_num}
      </label>
    </span>
  </for>
</fieldset>
`})))()}function je(e){v(e.a,`field__control`)}var z,Me,Ne,Pe;function Fe(){return(Fe=e((()=>{T(),s(),z=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end">Option</label></span>`)(m),Me=(e=>`D/${e}&l`)(h),Ne=c(2,e=>{let t={...e.c,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),Pe=l(`mFuylNU`,z,Me,je,Ne)})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`<span class="field">
  <evo-radio ...input value="1" class="field__control" id="radio"/>
  <label for="radio" class="field__label field__label--end">
    Option
  </label>
</span>
`})))()}function Re(e){v(e.a,`field__control`)}var ze,Be,Ve,He;function Ue(){return(Ue=e((()=>{T(),s(),ze=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end field__label--disabled">Option</label></span>`)(m),Be=(e=>`D/${e}&l`)(h),Ve=c(2,e=>{let t={...e.c,disabled:!0,value:`1`,id:`radio`};S(e.a,t.size),b(e.a,(({class:e,size:t,...n})=>n)(t))}),He=l(`YmVsMxX`,ze,Be,Re,Ve)})))()}var We;function Ge(){return(Ge=e((()=>{We=`<span class="field">
  <evo-radio ...input disabled value="1" class="field__control" id="radio"/>
  <label
    for="radio"
    class="field__label field__label--end field__label--disabled">
    Option
  </label>
</span>
`})))()}function Ke(e){G(e,`A`),rt(e,q(e)),it(e,[B]),K(e,[B])}var qe,Je,B,V,H,Ye,Xe,Ze,Qe,U,W,$e,et,tt,nt,G,rt,it,K,q,at;function ot(){return(ot=e((()=>{T(),s(),qe=`<!><!><p>Selected item is <!></p><!><!>`,Je=`b%bDb%l%c`,B=[`A`,`B`,`C`,`D`],V=o(4,e=>b(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:`radio-group-2`}),2),H=n(2,V),Ye=e=>{H._(e),Xe._(e),v(e.a),S(e.a)},Xe=n(2,V),Ze=c(3,e=>{a(e.b,e.d),V(e)}),Qe=(e,t)=>Ze(e,t[0]),U=o(4,e=>b(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:`radio-group-1`}),2),W=n(0,U),$e=e=>{W._(e),et._(e),v(e.a),S(e.a)},et=n(0,U),tt=c(3,e=>{a(e.b,e.d),U(e)}),nt=(e,t)=>tt(e,t[0]),G=re(3,e=>{a(e.b,e.d),W(e),H(e)}),rt=c(4),it=i(0,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),$e,nt),K=i(2,(e=>`<label>${e}<!> </label>`)(m),(e=>`D/${e}&%l`)(h),Ye,Qe),q=e=>t=>{G(e,t)},se(`BWlRxnP`,q),at=l(`geVG7xL`,qe,Je,Ke)})))()}var st;function ct(){return(ct=e((()=>{st=`static const items = ["A", "B", "C", "D"];

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
`})))()}var lt,J,Y,X,Z,Q,ut;function $(){return($=e((()=>{d(),T(),I(),R(),Fe(),Le(),Ue(),Ge(),ot(),ct(),lt={title:`form input/evo-radio`,component:w,parameters:{docs:{description:{component:u}}},argTypes:{size:{options:[`regular (default)`,`large`],description:`Icon size. (Note: The dimensions of the radio will not change, but only the icon)`},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},J=t(Pe,Ie),Y=t(He,We),X=t(F,L),Z=t(at,st),Q={},ut=[`WithLabel`,`Disabled`,`Group`,`Controlled`,`Isolated`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{}`,...Q.parameters?.docs?.source}}}})))()}$();export{Z as Controlled,Y as Disabled,X as Group,Q as Isolated,J as WithLabel,ut as __namedExportsOrder,lt as default};