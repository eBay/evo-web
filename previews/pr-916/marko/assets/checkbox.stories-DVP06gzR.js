import{b as r}from"./utils-DyU2_5R1.js";import{_ as p,f as a,L as k,I as C,N as x,m as g,u as w,K as D,o as z,w as S}from"./dom-BJw3UtKR.js";import{$ as _,a as b,b as h,c as m,d as u,C as O}from"./index-Duh99Wd9.js";import"./iframe-Bp9ocpcF.js";import"./preload-helper-PPVm8Dsz.js";import"./controllable-input.feat-BEVPN-fI.js";import"./evo-icon-checkbox-checked-24-Brj5kc52.js";import"./index-B1rJHl-z.js";import"./evo-icon-checkbox-checked-18-BQDjky47.js";/* empty css              */const E=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Displays an accessible checkbox component. Uses \`<input/>\` under the hood but displays a custom SVG icon.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-checkbox/examples)
`,L="<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>",W="D lDb%l",f=g(11,e=>{const t={...e._.d,checked:e.i,checkedChange:N(e),id:e.k,value:e.M,name:"checkbox-group"};_(e.a,t.size),b(e.a,(({class:n,size:s,...o})=>o)(t))},2),$=k(1,f),G=a(10,e=>{S(e.b,"for",e.k),f(e)}),M=e=>{$._(e),T._(e),u(e.a,"field__control"),x(e.c,e.M+1),G(e,D(e))},v=z(8,f),I=g(5,e=>v(e,e.e,U(e))),T=k(1,I),R=a(4,I),j=(e,t)=>R(e,t[0]),A=w(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(h),(e=>`D/${e}& Db%m`)(m),M,j),y=C(4,e=>{x(e.a,e.e.toString()),A(e,[e.e]),T(e)});function K(e){y(e,[!1,!1,!1])}const H=a(3,$),N=e=>t=>{v(e,t)},U=e=>function(t){const n=[...e._.e];n[e.M]=t,y(e._,n)},q=p("Eb36A1l",L,W,K,H),B=h,F=(e=>`/${e}&`)(m),J=()=>{},P=a(2,e=>{u(e.a,e.c.class),_(e.a,e.c.size),b(e.a,(({class:t,size:n,...s})=>s)(e.c))}),V=p("ZPWzKjx",B,F,J,P),X=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(h),Z=(e=>`D/${e}&l`)(m);function Q(e){u(e.a,"field__control")}const Y=a(2,e=>{const t={...e.c,id:"checkbox"};_(e.a,t.size),b(e.a,(({class:n,size:s,...o})=>o)(t))}),ee=p("cMJsALK",X,Z,Q,Y),te=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(h),ne=(e=>`D/${e}&l`)(m);function ae(e){u(e.a,"field__control")}const oe=a(2,e=>{const t={...e.c,disabled:!0,id:"checkbox"};_(e.a,t.size),b(e.a,(({class:n,size:s,...o})=>o)(t))}),se=p("Xq1FgSd",te,ne,ae,oe),ce=`<let/checkedItems=[false, false, false]>

<div>\${checkedItems.toString()}</div>
<fieldset>
  <legend>Choose an Option</legend>
  <for|_checked, i| of=checkedItems>
    <let/checked=_checked valueChange(v) {
      const newItems = [...checkedItems];
      newItems[i] = v;
      checkedItems = newItems;
    }>
    <span class="field">
      <id/checkboxId>
      <evo-checkbox
        ...input
        checked:=checked
        class="field__control"
        id=checkboxId
        value=i
        name="checkbox-group"/>
      <label class="field__label field__label--end" for=checkboxId>
        Option \${i + 1}
      </label>
    </span>
  </for>
</fieldset>
`,le=`<span class="field">
  <evo-checkbox ...input class="field__control" id="checkbox"/>
  <label class="field__label field__label--end" for="checkbox">
    Option
  </label>
</span>
`,ie=`<span class="field">
  <evo-checkbox ...input disabled class="field__control" id="checkbox"/>
  <label
    class="field__label field__label--end field__label--disabled"
    for="checkbox">
    Option
  </label>
</span>
`,de=`<evo-checkbox ...input/>
`,ge={title:"form input/evo-checkbox",component:O,parameters:{docs:{description:{component:E}}},argTypes:{size:{type:"string",options:["small (default)","large"],control:"inline-radio",description:"Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)"},checked:{type:"boolean",controllable:!0,control:"boolean",description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},c=r(ee,le,{checked:!1}),l=r(se,ie,{checked:!1}),i=r(q,ce),d=r(V,de);c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"buildExtensionTemplate(GroupTemplate, GroupCode)",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)",...d.parameters?.docs?.source}}};const $e=["WithLabel","Disabled","Group","Isolated"];export{l as Disabled,i as Group,d as Isolated,c as WithLabel,$e as __namedExportsOrder,ge as default};
