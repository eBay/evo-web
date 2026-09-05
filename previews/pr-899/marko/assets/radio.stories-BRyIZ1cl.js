import{b as f}from"./utils-DyU2_5R1.js";import{a as c,b as n,c as V,f as S,d as E,i as L,w as R,M as G,B as d,A as k,e as v,r as W,x as $,E as A}from"./dom-BBo1hePz.js";import"./controllable-input.feat-B0hxE-Qr.js";import{$ as I,a as M,b as B,c as j,d as N,e as H,f as J,g as K}from"./evo-icon-radio-checked-24-cs3Fc5TN.js";import{$ as U,a as Y,b as F,c as P,d as X,e as q,f as Q,g as Z}from"./evo-icon-radio-checked-18-DORb8wMO.js";/* empty css              */import"./iframe-DGm0Ux3b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qYrWtsuo.js";const ee=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,o="<span><input type=radio class=radio__control><span class=radio__icon hidden></span></span>",s=" D b l",ae=()=>{},ne=e=>{X(e.a),q(e.a,{class:"radio__unchecked"}),Q(e.b),Z(e.b,{class:"radio__checked"})},te=e=>{N(e.a),H(e.a,{class:"radio__unchecked"}),J(e.b),K(e.b,{class:"radio__checked"})},l=(e,a)=>S(e.a,["radio",a]),oe=E("CfN38aj",e=>L(e,"b")),r=n(7,e=>{V(e,"b",e.h,{type:1,class:1},G),oe(e)}),se=R(2,((e,a)=>`${e}${a}`)(M,I),((e,a)=>`/${e}&/${a}&`)(j,B),te,((e,a)=>`${e}${a}`)(Y,U),((e,a)=>`/${e}&/${a}&`)(P,F),ne),i=(e,a)=>se(e,a==="large"?0:1),le=(e,a)=>{(({class:h,size:g,...t})=>r(e,t))(a),l(e,a.class),i(e,a.size)},re=c("zJLKPrY",o,s,ae,le),ie="<fieldset><legend>Choose an Option</legend><!></fieldset>",ce="Db%l",y=v(5,e=>{const a={...e._.c,id:`group-radio-${e.e}`,value:e.e,name:"radio-group"};i(e.a,a.size),r(e.a,(({class:h,size:g,...t})=>t)(a))}),T=d(0,y),de=e=>{T._(e),l(e.a,"field__control")},_e=n(4,e=>{W(e.b,"for",`group-radio-${e.e}`),$(e.c,e.e),y(e)}),pe=(e,a)=>_e(e,a[0]),ue=k(0,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(o),(e=>`D/${e}& Db%m`)(s),de,pe);function me(e){ue(e,[[1,2,3]])}const be=n(2,T),fe=c("a08wJzK",ie,ce,me,be),$e=`<fieldset>
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
`,he=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end">Option</label></span>`)(o),ge=(e=>`D/${e}&l`)(s);function ke(e){l(e.a,"field__control")}const ve=n(2,e=>{const a={...e.c,value:"1",id:"radio"};i(e.a,a.size),r(e.a,(({class:h,size:g,...t})=>t)(a))}),Ce=c("mFuylNU",he,ge,ke,ve),De=`<span class="field">
    <evo-radio
        ...input
        value="1"
        class="field__control"
        id="radio"
    />
    <label for="radio" class="field__label field__label--end">
        Option
    </label>
</span>
`,we=(e=>`<span class=field>${e}<label for=radio class="field__label field__label--end field__label--disabled">Option</label></span>`)(o),ye=(e=>`D/${e}&l`)(s);function Te(e){l(e.a,"field__control")}const xe=n(2,e=>{const a={...e.c,disabled:!0,value:"1",id:"radio"};i(e.a,a.size),r(e.a,(({class:h,size:g,...t})=>t)(a))}),ze=c("YmVsMxX",we,ye,Te,xe),Oe=`<span class="field">
    <evo-radio
        ...input
        disabled
        value="1"
        class="field__control"
        id="radio"
    />
    <label
        for="radio"
        class="field__label field__label--end field__label--disabled"
    >
        Option
    </label>
</span>
`,Ve="<!><!><p>Selected item is <!></p><!><!>",Se="b%bDb%l%c",w=["A","B","C","D"],C=v(4,e=>r(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:"radio-group-2"}),2),x=d(2,C),Ee=e=>{x._(e),Le._(e),l(e.a),i(e.a)},Le=d(2,C),Re=n(3,e=>{$(e.b,e.d),C(e)}),Ge=(e,a)=>Re(e,a[0]),D=v(4,e=>r(e.a,{checkedValueChange:e._.e,checkedValue:e._.d,value:e.d,name:"radio-group-1"}),2),z=d(0,D),We=e=>{z._(e),Ae._(e),l(e.a),i(e.a)},Ae=d(0,D),Ie=n(3,e=>{$(e.b,e.d),D(e)}),Me=(e,a)=>Ie(e,a[0]),O=A(3,e=>{$(e.b,e.d),z(e),x(e)}),Be=n(4),je=k(0,(e=>`<label>${e}<!> </label>`)(o),(e=>`D/${e}&%l`)(s),We,Me),Ne=k(2,(e=>`<label>${e}<!> </label>`)(o),(e=>`D/${e}&%l`)(s),Ee,Ge);function He(e){O(e,"A"),Be(e,Je(e)),je(e,[w]),Ne(e,[w])}const Je=e=>a=>{O(e,a)},Ke=c("geVG7xL",Ve,Se,He),Ue=`static const items = ["A", "B", "C", "D"];

<let/checked="A">

<for|item| of=items>
    <label>
        <evo-radio name="radio-group-1" value=item checkedValue:=checked/>
        \${item} 
    </label>
</for>


<p>
    Selected item is \${checked}
</p>

<for|item| of=items>
    <label>
        <evo-radio name="radio-group-2" value=item checkedValue:=checked/>
        \${item} 
    </label>
</for>
`,na={title:"form input/evo-radio",component:re,parameters:{docs:{description:{component:ee}}},argTypes:{size:{options:["regular (default)","large"],description:"Icon size. (Note: The dimensions of the radio will not change, but only the icon)"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},_=f(Ce,De),p=f(ze,Oe),u=f(fe,$e),m=f(Ke,Ue),b={};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(GroupTemplate, GroupCode)",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};const ta=["WithLabel","Disabled","Group","Controlled","Isolated"];export{m as Controlled,p as Disabled,u as Group,b as Isolated,_ as WithLabel,ta as __namedExportsOrder,na as default};
