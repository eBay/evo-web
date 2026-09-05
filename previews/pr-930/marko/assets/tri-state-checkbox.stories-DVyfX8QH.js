import{b as T}from"./utils-DyU2_5R1.js";import{_ as c,f as t,g as ie,h as de,X as oe,I as U,i as q,C as he,l as re,v as B,m as l,a8 as _e,k as W,o as G,w as j,K as N,N as J,u as ue,L as X}from"./dom-DzaaZrG-.js";import"./controllable-input.feat-D1awevao.js";import{$ as ke,a as be,b as fe,c as me,d as ge,e as xe,f as Ce,g as pe}from"./evo-icon-checkbox-mixed-18-BIb0Bau7.js";import{$ as ve,b as Ve,a as $e,c as ye,f as we,g as Oe,d as De,e as Te}from"./evo-icon-checkbox-checked-24-B3W_kOdw.js";import{$ as ze,b as Re,a as Se,c as Me,f as Le,g as Ie,d as Ee,e as We}from"./evo-icon-checkbox-checked-18-C2rK3yNH.js";import{b as je,c as Ae,d as He,$ as Ue,a as qe}from"./index-CYV4-sKn.js";/* empty css              */import"./iframe-W1YmnRsb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSnbFevZ.js";const Be=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-tri-state-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

A checkbox that toggles from unchecked, to partially checked, to fully checked states. Uses \`<input/>\` under the hood with custom icons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/form-input-evo-tri-state-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/form-input-evo-tri-state-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-tri-state-checkbox/examples)
`,i="<span><input class=checkbox__control type=checkbox><span class=checkbox__icon hidden></span></span>",d=" D b l",Ne=e=>{Ee(e.a),We(e.a,{class:"checkbox__unchecked"})},Ze=e=>{De(e.a),Te(e.a,{class:"checkbox__unchecked"})},Fe=e=>{Le(e.a),Ie(e.a,{class:"checkbox__checked"})},Ge=e=>{we(e.a),Oe(e.a,{class:"checkbox__checked"})},Je=e=>{Ce(e.a),pe(e.a,{class:"checkbox__checked"})},Xe=e=>{ge(e.a),xe(e.a,{class:"checkbox__checked"})},Ye=W(0,$e,(e=>`/${e}&`)(ye),Ze,Se,(e=>`/${e}&`)(Me),Ne),Y=B(2,2,e=>Ye(e,e._.h==="large"?0:1)),Ke=Y,Qe=W(0,ve,(e=>`/${e}&`)(Ve),Ge,ze,(e=>`/${e}&`)(Re),Fe),K=B(2,1,e=>Qe(e,e._.h==="large"?0:1)),Pe=K,ea=W(0,ke,(e=>`/${e}&`)(be),Xe,fe,(e=>`/${e}&`)(me),Je),Q=B(2,0,e=>ea(e,e._.h==="large"?0:1)),aa=Q,ta=W(2,"<!><!><!>","b%",aa,"<!><!><!>","b%",Pe,"<!><!><!>","b%",Ke),o=l(27,e=>_e(e,"b",e.a0!=="false",ra(e)),5),na=q("v$OiHZf",e=>e.b.indeterminate=e.a0==="mixed"),la=t(26,e=>{j(e.b,"aria-checked",e.a0),ta(e,e.a0==="mixed"?0:e.a0==="true"?1:2),o(e),na(e)}),A=l(24,e=>la(e,e.x?e.w>=e.m?"true":e.w===0?"false":"mixed":e.r||"false"),3),I=G(17,e=>{A(e),o(e)}),P=l(10,e=>I(e,e.i||"false",e.j)),h=t(8,P),r=t(9,P),sa=t(23,e=>{A(e),o(e)}),Z=l(21,e=>sa(e,!!(e.t&&e.o&&e.l)),2),E=G(19,e=>{ca(e,e.t?.length),Z(e),o(e)}),ca=t(22,A),ee=l(15,e=>E(e,e.n,e.o)),_=t(13,ee),u=t(14,e=>{ee(e),Z(e)}),k=t(11,e=>{da(e,e.l?.length),Z(e),o(e)}),ae=U(25,o),ia=q("omJqJd9",e=>he(e,"b"));function b(e){ae(e,null),ia(e)}const da=t(12,A),f=(e,a)=>oe(e.a,a),m=(e,a)=>de(e.a,["checkbox",a]),oa=q("N5m0rxM",e=>re(e,"b")),g=t(16,e=>{ie(e,"b",e.q,{checked:1,checkedChange:1,class:1,"aria-checked":1,type:1}),oa(e)}),ha=(e,a)=>{(({checked:C,checkedChange:p,checkedValues:v,checkedValuesChange:V,class:$,onChange:y,size:w,skipMixed:O,style:D,values:s,...n})=>g(e,n))(a),m(e,a.class),f(e,a.style),x(e,a.size),h(e,a.checked),r(e,a.checkedChange),k(e,a.values),_(e,a.checkedValues),u(e,a.checkedValuesChange)},x=t(7,e=>{Q(e),K(e),Y(e)}),ra=e=>function(a){e.x?e.a0==="true"?E(e,[]):e.a0==="mixed"?(ae(e,e.t),E(e,e.l)):E(e,e.z||e.l):e.r==="true"?I(e,"false"):e.r==="false"?I(e,"mixed"):I(e,"true")},_a=c("FVDL7AZ",i,d,b,ha),ua=i,ka=(e=>`/${e}&`)(d);function ba(e){b(e.a)}const fa=t(2,e=>{h(e.a,e.c.checked),r(e.a,e.c.checkedChange),_(e.a,e.c.checkedValues),u(e.a,e.c.checkedValuesChange),m(e.a,e.c.class),x(e.a,e.c.size),f(e.a,e.c.style),k(e.a,e.c.values),g(e.a,(({checked:a,checkedChange:C,checkedValues:p,checkedValuesChange:v,class:V,onChange:$,size:y,skipMixed:w,style:O,values:D,...s})=>s)(e.c))}),ma=c("Y$45QSH",ua,ka,ba,fa),ga=`<evo-tri-state-checkbox ...input/>
`,xa=(e=>`${e}<label> "<!>"</label>`)(i),Ca=(e=>`/${e}& Db%l`)(d),te=U(6,e=>{h(e.a,e.g),J(e.c,e.g)}),pa=(e,a)=>te(e,a||"false"),ne=l(8,e=>{const a={...e.e,id:e.h};_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),m(e.a,a.class),x(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:C,checkedChange:p,checkedValues:v,checkedValuesChange:V,class:$,onChange:y,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),va=t(7,e=>{j(e.b,"for",e.h),ne(e)});function Va(e){b(e.a),r(e.a,ya(e)),va(e,N(e))}const $a=t(4,e=>{pa(e,e.e.checked),ne(e)}),ya=e=>a=>{te(e,a)},wa=c("aRlvI8G",xa,Ca,Va,$a),Oa=`import { type Input as TriStateCheckboxInput } from "<evo-tri-state-checkbox>";
export interface Input extends TriStateCheckboxInput {}

<let/checked=input.checked || ("false" as const)>

<id/id>
<evo-tri-state-checkbox ...input id=id checked:=checked/>
<label for=id>\${" "}"\${checked}"</label>
`,Da=(e=>`<div class=field>${e}<label class="field__label field__label--end">Select all</label></div><div class=container style="margin-left: 10px;"></div>`)(i),Ta=(e=>`D/${e}& l b`)(d),F=["A","B","C","D"],H=l(6,e=>qe(e.a,{checkedValueChange:e._.g,checkedValue:e._.f,value:e.e,id:e.f}),3),le=X(2,H),za=t(5,e=>{j(e.b,"for",e.f),H(e)}),Ra=e=>{le._(e),Sa._(e),He(e.a),Ue(e.a),za(e,N(e))},Sa=X(2,H),Ma=t(4,e=>{J(e.c,e.e),H(e)}),La=(e,a)=>Ma(e,a[0]),se=U(5,e=>{_(e.a,e.f),le(e)}),Ia=t(6,e=>u(e.a,e.g)),ce=l(8,e=>{const a={...e.e,id:e.h};h(e.a,a.checked),r(e.a,a.checkedChange),m(e.a,a.class),x(e.a,a.size),f(e.a,a.style),g(e.a,(({checked:C,checkedChange:p,checkedValues:v,checkedValuesChange:V,class:$,onChange:y,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),Ea=t(7,e=>{j(e.b,"for",e.h),ce(e)}),Wa=ue(2,(e=>`<div class=field>${e}<label class="field__label field__label--end">Option <!></label></div>`)(je),(e=>`D/${e}& Db%m`)(Ae),Ra,La);function ja(e){b(e.a),k(e.a,F),se(e,[]),Ia(e,Ha(e)),Ea(e,N(e)),Wa(e,[F])}const Aa=t(4,ce),Ha=e=>a=>{se(e,a)},Ua=c("i4qL3_R",Da,Ta,ja,Aa),qa=`static const boxes = ["A", "B", "C", "D"];

<let/checkedValue=[] as string[]>

<div class="field">
  <id/id>
  <evo-tri-state-checkbox
    ...input
    id=id
    checkedValues:=checkedValue
    values=boxes
  />
  <label class="field__label field__label--end" for=id>Select all</label>
</div>
<div class="container" style="margin-left: 10px;">
  <for|value| of=boxes>
    <id/id>
    <div class="field">
      <evo-checkbox id=id value=value checkedValue:=checkedValue/>
      <label class="field__label field__label--end" for=id>
        Option \${value}
      </label>
    </div>
  </for>
</div>
`,Ba=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(i),Na=(e=>`D/${e}&l`)(d);function Za(e){b(e.a),m(e.a,"field__control")}const Fa=t(2,e=>{const a={...e.c,id:"checkbox"};h(e.a,a.checked),r(e.a,a.checkedChange),_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),x(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:C,checkedChange:p,checkedValues:v,checkedValuesChange:V,class:$,onChange:y,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),Ga=c("cG5YVe$",Ba,Na,Za,Fa),Ja=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(i),Xa=(e=>`D/${e}&l`)(d);function Ya(e){b(e.a),m(e.a,"field__control")}const Ka=t(2,e=>{const a={...e.c,disabled:!0,id:"checkbox"};h(e.a,a.checked),r(e.a,a.checkedChange),_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),x(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:C,checkedChange:p,checkedValues:v,checkedValuesChange:V,class:$,onChange:y,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),Qa=c("WXsuZbF",Ja,Xa,Ya,Ka),Pa=`<span class="field">
  <evo-tri-state-checkbox ...input class="field__control" id="checkbox"/>
  <label class="field__label field__label--end" for="checkbox">Option</label>
</span>
`,et=`<span class="field">
  <evo-tri-state-checkbox
    ...input
    disabled
    class="field__control"
    id="checkbox"
  />
  <label
    class="field__label field__label--end field__label--disabled"
    for="checkbox"
  >
    Option
  </label>
</span>
`,_t={title:"form input/evo-tri-state-checkbox",component:_a,parameters:{docs:{description:{component:Be}}},argTypes:{checked:{controllable:!0,type:"string",options:["false","mixed","true"],control:"inline-radio",description:"String enumeration of checkbox state.",table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:"boolean",description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{type:"string",options:["regular (default)","large"],control:"inline-radio",description:"Sets the checkbox icon. Default is regular. (Note: The dimensions of the checkbox will not change, but only the icon)"},values:{description:'Used alongside `checkedValues` for a [controllable](https://markojs.com/docs/explanation/controllable-components) pattern that aligns with [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox). List of _all_ "child" checkbox values',table:{type:{summary:"string[]"}}},checkedValues:{controllable:!0,description:'**Must** be accompanied by `values` and `checkedValuesChange` (usually via [the `:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding)). Leverages [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox) for "select/deselect all" behavior',table:{type:{summary:"string[]"}}},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},z=T(Ga,Pa),R=T(Qa,et),S=T(Ua,qa),M=T(wa,Oa),L=T(ma,ga),ut=["WithLabel","Disabled","ControlledCheckedValues","Controlled","Isolated"];z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledCheckedValuesTemplate, ControlledCheckedValuesCode)",...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...L.parameters?.docs?.source}}};export{M as Controlled,S as ControlledCheckedValues,R as Disabled,L as Isolated,z as WithLabel,ut as __namedExportsOrder,_t as default};
