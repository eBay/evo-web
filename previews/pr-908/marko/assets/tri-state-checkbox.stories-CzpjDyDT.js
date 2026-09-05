import{b as T}from"./utils-DyU2_5R1.js";import{a as c,b as t,c as ie,f as de,O as oe,E as H,d as U,S as he,i as re,y as q,e as l,T as _e,w as W,u as J,r as j,p as Z,x as N,A as ue,B as Y}from"./dom-DF5f8Ddd.js";import"./controllable-input.feat-DzuXJTgt.js";import{$ as ke,a as be,b as fe,c as me,d as ge,e as xe,f as pe,g as Ce}from"./evo-icon-checkbox-mixed-18-DkLBahdP.js";import{$ as ve,a as Ve,b as ye,c as $e,d as we,e as Oe,f as De,g as Te}from"./evo-icon-checkbox-checked-24-BbopTHZA.js";import{$ as ze,a as Re,b as Se,c as Me,d as Le,e as Ee,f as Ie,g as We}from"./evo-icon-checkbox-checked-18-BDEp1JTT.js";import{b as je,c as Ae,d as Be,$ as He,a as Ue}from"./index-DOQu--Ar.js";/* empty css              */import"./iframe-CuDE3HaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGOhNcPA.js";const qe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,i="<span><input class=checkbox__control type=checkbox><span class=checkbox__icon hidden></span></span>",d=" D b l",Ze=e=>{Ie(e.a),We(e.a,{class:"checkbox__unchecked"})},Fe=e=>{De(e.a),Te(e.a,{class:"checkbox__unchecked"})},Ge=e=>{Le(e.a),Ee(e.a,{class:"checkbox__checked"})},Je=e=>{we(e.a),Oe(e.a,{class:"checkbox__checked"})},Ne=e=>{pe(e.a),Ce(e.a,{class:"checkbox__checked"})},Ye=e=>{ge(e.a),xe(e.a,{class:"checkbox__checked"})},Qe=W(0,ye,(e=>`/${e}&`)($e),Fe,Se,(e=>`/${e}&`)(Me),Ze),Q=q(2,2,e=>Qe(e,e._.h==="large"?0:1)),Xe=Q,Ke=W(0,ve,(e=>`/${e}&`)(Ve),Je,ze,(e=>`/${e}&`)(Re),Ge),X=q(2,1,e=>Ke(e,e._.h==="large"?0:1)),Pe=X,ea=W(0,ke,(e=>`/${e}&`)(be),Ye,fe,(e=>`/${e}&`)(me),Ne),K=q(2,0,e=>ea(e,e._.h==="large"?0:1)),aa=K,ta=W(2,"<!><!><!>","b%",aa,"<!><!><!>","b%",Pe,"<!><!><!>","b%",Xe),o=l(27,e=>_e(e,"b",e.a0!=="false",ra(e)),5),na=U("v$OiHZf",e=>e.b.indeterminate=e.a0==="mixed"),la=t(26,e=>{j(e.b,"aria-checked",e.a0),ta(e,e.a0==="mixed"?0:e.a0==="true"?1:2),o(e),na(e)}),A=l(24,e=>la(e,e.x?e.w>=e.m?"true":e.w===0?"false":"mixed":e.r||"false"),3),E=J(17,e=>{A(e),o(e)}),P=l(10,e=>E(e,e.i||"false",e.j)),h=t(8,P),r=t(9,P),sa=t(23,e=>{A(e),o(e)}),F=l(21,e=>sa(e,!!(e.t&&e.o&&e.l)),2),I=J(19,e=>{ca(e,e.t?.length),F(e),o(e)}),ca=t(22,A),ee=l(15,e=>I(e,e.n,e.o)),_=t(13,ee),u=t(14,e=>{ee(e),F(e)}),k=t(11,e=>{da(e,e.l?.length),F(e),o(e)}),ae=H(25,o),ia=U("omJqJd9",e=>he(e,"b"));function b(e){ae(e,null),ia(e)}const da=t(12,A),f=(e,a)=>oe(e.a,a),m=(e,a)=>de(e.a,["checkbox",a]),oa=U("N5m0rxM",e=>re(e,"b")),g=t(16,e=>{ie(e,"b",e.q,{checked:1,checkedChange:1,class:1,"aria-checked":1,type:1}),oa(e)}),ha=(e,a)=>{(({checked:p,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:O,style:D,values:s,...n})=>g(e,n))(a),m(e,a.class),f(e,a.style),x(e,a.size),h(e,a.checked),r(e,a.checkedChange),k(e,a.values),_(e,a.checkedValues),u(e,a.checkedValuesChange)},x=t(7,e=>{K(e),X(e),Q(e)}),ra=e=>function(a){e.x?e.a0==="true"?I(e,[]):e.a0==="mixed"?(ae(e,e.t),I(e,e.l)):I(e,e.z||e.l):e.r==="true"?E(e,"false"):e.r==="false"?E(e,"mixed"):E(e,"true")},_a=c("FVDL7AZ",i,d,b,ha),ua=i,ka=(e=>`/${e}&`)(d);function ba(e){b(e.a)}const fa=t(2,e=>{h(e.a,e.c.checked),r(e.a,e.c.checkedChange),_(e.a,e.c.checkedValues),u(e.a,e.c.checkedValuesChange),m(e.a,e.c.class),x(e.a,e.c.size),f(e.a,e.c.style),k(e.a,e.c.values),g(e.a,(({checked:a,checkedChange:p,checkedValues:C,checkedValuesChange:v,class:V,onChange:y,size:$,skipMixed:w,style:O,values:D,...s})=>s)(e.c))}),ma=c("Y$45QSH",ua,ka,ba,fa),ga=`<evo-tri-state-checkbox ...input/>
`,xa=(e=>`${e}<label> "<!>"</label>`)(i),pa=(e=>`/${e}& Db%l`)(d),te=H(6,e=>{h(e.a,e.g),N(e.c,e.g)}),Ca=(e,a)=>te(e,a||"false"),ne=l(8,e=>{const a={...e.e,id:e.h};_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),m(e.a,a.class),x(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:p,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),va=t(7,e=>{j(e.b,"for",e.h),ne(e)});function Va(e){b(e.a),r(e.a,$a(e)),va(e,Z(e))}const ya=t(4,e=>{Ca(e,e.e.checked),ne(e)}),$a=e=>a=>{te(e,a)},wa=c("aRlvI8G",xa,pa,Va,ya),Oa=`import { type Input as TriStateCheckboxInput } from "<evo-tri-state-checkbox>";

export interface Input extends TriStateCheckboxInput {}

<let/checked=input.checked || "false" as const>

<id/id>
<evo-tri-state-checkbox ...input id=id checked:=checked/>
<label for=id> "\${checked}"</label>`,Da=(e=>`<div class=field>${e}<label class="field__label field__label--end">Select all</label></div><div class=container style="margin-left: 10px;"></div>`)(i),Ta=(e=>`D/${e}& l b`)(d),G=["A","B","C","D"],B=l(6,e=>Ue(e.a,{checkedValueChange:e._.g,checkedValue:e._.f,value:e.e,id:e.f}),3),le=Y(2,B),za=t(5,e=>{j(e.b,"for",e.f),B(e)}),Ra=e=>{le._(e),Sa._(e),Be(e.a),He(e.a),za(e,Z(e))},Sa=Y(2,B),Ma=t(4,e=>{N(e.c,e.e),B(e)}),La=(e,a)=>Ma(e,a[0]),se=H(5,e=>{_(e.a,e.f),le(e)}),Ea=t(6,e=>u(e.a,e.g)),ce=l(8,e=>{const a={...e.e,id:e.h};h(e.a,a.checked),r(e.a,a.checkedChange),m(e.a,a.class),x(e.a,a.size),f(e.a,a.style),g(e.a,(({checked:p,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),Ia=t(7,e=>{j(e.b,"for",e.h),ce(e)}),Wa=ue(2,(e=>`<div class=field>${e}<label class="field__label field__label--end">Option <!></label></div>`)(je),(e=>`D/${e}& Db%m`)(Ae),Ra,La);function ja(e){b(e.a),k(e.a,G),se(e,[]),Ea(e,Ba(e)),Ia(e,Z(e)),Wa(e,[G])}const Aa=t(4,ce),Ba=e=>a=>{se(e,a)},Ha=c("i4qL3_R",Da,Ta,ja,Aa),Ua=`static const boxes = ["A", "B", "C", "D"];

<let/checkedValue=[] as string[]>

<div class="field">
    <id/id>
    <evo-tri-state-checkbox ...input id=id checkedValues:=checkedValue values=boxes/>
    <label class="field__label field__label--end" for=id>
        Select all
    </label>
</div>
<div class="container" style="margin-left: 10px;">
    <for|value| of=boxes>
        <id/id>
        <div class="field">
            <evo-checkbox
                id=id
                value=value
                checkedValue:=checkedValue/>
            <label class="field__label field__label--end" for=id>
                Option \${value}
            </label>
        </div>
    </for>
</div>
`,qa=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(i),Za=(e=>`D/${e}&l`)(d);function Fa(e){b(e.a),m(e.a,"field__control")}const Ga=t(2,e=>{const a={...e.c,id:"checkbox"};h(e.a,a.checked),r(e.a,a.checkedChange),_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),x(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:p,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),Ja=c("cG5YVe$",qa,Za,Fa,Ga),Na=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(i),Ya=(e=>`D/${e}&l`)(d);function Qa(e){b(e.a),m(e.a,"field__control")}const Xa=t(2,e=>{const a={...e.c,disabled:!0,id:"checkbox"};h(e.a,a.checked),r(e.a,a.checkedChange),_(e.a,a.checkedValues),u(e.a,a.checkedValuesChange),x(e.a,a.size),f(e.a,a.style),k(e.a,a.values),g(e.a,(({checked:p,checkedChange:C,checkedValues:v,checkedValuesChange:V,class:y,onChange:$,size:w,skipMixed:O,style:D,values:s,...n})=>n)(a))}),Ka=c("WXsuZbF",Na,Ya,Qa,Xa),Pa=`<span class="field">
    <evo-tri-state-checkbox
        ...input
        class="field__control"
        id="checkbox"
    />
    <label class="field__label field__label--end" for="checkbox">
        Option
    </label>
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
`,_t={title:"form input/evo-tri-state-checkbox",component:_a,parameters:{docs:{description:{component:qe}}},argTypes:{checked:{controllable:!0,type:"string",options:["false","mixed","true"],control:"inline-radio",description:"String enumeration of checkbox state.",table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:"boolean",description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{type:"string",options:["regular (default)","large"],control:"inline-radio",description:"Sets the checkbox icon. Default is regular. (Note: The dimensions of the checkbox will not change, but only the icon)"},values:{description:'Used alongside `checkedValues` for a [controllable](https://markojs.com/docs/explanation/controllable-components) pattern that aligns with [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox). List of _all_ "child" checkbox values',table:{type:{summary:"string[]"}}},checkedValues:{controllable:!0,description:'**Must** be accompanied by `values` and `checkedValuesChange` (usually via [the `:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding)). Leverages [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox) for "select/deselect all" behavior',table:{type:{summary:"string[]"}}},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},z=T(Ja,Pa),R=T(Ka,et),S=T(Ha,Ua),M=T(wa,Oa),L=T(ma,ga);z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledCheckedValuesTemplate, ControlledCheckedValuesCode)",...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...L.parameters?.docs?.source}}};const ut=["WithLabel","Disabled","ControlledCheckedValues","Controlled","Isolated"];export{M as Controlled,S as ControlledCheckedValues,R as Disabled,L as Isolated,z as WithLabel,ut as __namedExportsOrder,_t as default};
