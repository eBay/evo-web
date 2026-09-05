import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,V as ee,X as te,Z as ne,at as r,et as i,i as a,k as o,q as re,s as ie,t as s,tt as c}from"./dom-CrmgVQ1h.js";import{a as l,i as u,n as d,o as ae,r as f,s as p,t as m}from"./evo-checkbox-DgzY_CYt.js";var oe;function se(){return(se=e((()=>{oe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function ce(e){E(e,[!1,!1,!1])}var le,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{a(),p(),le=`<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>`,h=`D lDb%l`,g=i(11,e=>{let t={...e._.d,checked:e.i,checkedChange:O(e),id:e.k,value:e.M,name:`checkbox-group`};f(e.a,t.size),m(e.a,(({class:e,size:t,...n})=>n)(t))},2),_=n(1,g),v=o(10,e=>{ie(e.b,`for`,e.k),g(e)}),y=e=>{_._(e),S._(e),d(e.a,`field__control`),r(e.c,e.M+1),v(e,re(e))},b=ne(8,g),x=i(5,e=>b(e,e.e,k(e))),S=n(1,x),C=o(4,x),w=(e,t)=>C(e,t[0]),T=ee(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(u),(e=>`D/${e}& Db%m`)(l),y,w),E=te(4,e=>{r(e.a,e.e.toString()),T(e,[e.e]),S(e)}),D=o(3,_),O=e=>t=>{b(e,t)},k=e=>function(t){let n=[...e._.e];n[e.M]=t,E(e._,n)},c(`W7nAwnJ`,O),c(`A7LVsqO`,k),A=s(`Eb36A1l`,le,h,ce,D)})))()}var M,N,P,F;function I(){return(I=e((()=>{p(),a(),M=u,N=(e=>`/${e}&`)(l),P=o(2,e=>{d(e.a,e.c.class),f(e.a,e.c.size),m(e.a,(({class:e,size:t,...n})=>n)(e.c))}),F=s(`ZPWzKjx`,M,N,0,P)})))()}function ue(e){d(e.a,`field__control`)}var L,de,R,z;function B(){return(B=e((()=>{p(),a(),L=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(u),de=(e=>`D/${e}&l`)(l),R=o(2,e=>{let t={...e.c,id:`checkbox`};f(e.a,t.size),m(e.a,(({class:e,size:t,...n})=>n)(t))}),z=s(`cMJsALK`,L,de,ue,R)})))()}function fe(e){d(e.a,`field__control`)}var V,H,U,W;function G(){return(G=e((()=>{p(),a(),V=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(u),H=(e=>`D/${e}&l`)(l),U=o(2,e=>{let t={...e.c,disabled:!0,id:`checkbox`};f(e.a,t.size),m(e.a,(({class:e,size:t,...n})=>n)(t))}),W=s(`Xq1FgSd`,V,H,fe,U)})))()}var K;function q(){return(q=e((()=>{K=`<let/checkedItems=[false, false, false]>

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
`})))()}var J;function pe(){return(pe=e((()=>{J=`<span class="field">
  <evo-checkbox ...input class="field__control" id="checkbox"/>
  <label class="field__label field__label--end" for="checkbox">
    Option
  </label>
</span>
`})))()}var me;function he(){return(he=e((()=>{me=`<span class="field">
  <evo-checkbox ...input disabled class="field__control" id="checkbox"/>
  <label
    class="field__label field__label--end field__label--disabled"
    for="checkbox">
    Option
  </label>
</span>
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`<evo-checkbox ...input/>
`})))()}var ve,Y,X,Z,Q,ye;function $(){return($=e((()=>{se(),p(),j(),I(),B(),G(),q(),pe(),he(),_e(),ve={title:`form input/evo-checkbox`,component:ae,parameters:{docs:{description:{component:oe}}},argTypes:{size:{type:`string`,options:[`small (default)`,`large`],control:`inline-radio`,description:`Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)`},checked:{type:`boolean`,controllable:!0,control:`boolean`,description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},Y=t(z,J,{checked:!1}),X=t(W,me,{checked:!1}),Z=t(A,K),Q=t(F,ge),ye=[`WithLabel`,`Disabled`,`Group`,`Isolated`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{X as Disabled,Z as Group,Q as Isolated,Y as WithLabel,ye as __namedExportsOrder,ve as default};