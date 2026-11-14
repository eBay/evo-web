import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{U as n,V as r,Z as ee,at as i,et as te,i as a,it as o,k as s,lt as c,s as ne,t as l,tt as re}from"./dom-CUxLGBQ2.js";import{a as u,i as d,n as f,o as ie,r as p,s as m,t as h}from"./evo-checkbox-9HcleI8g.js";var ae;function oe(){return(oe=e((()=>{ae=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function se(e){E(e,[!1,!1,!1])}var ce,le,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{a(),m(),ce=`<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>`,le=`D lDb%l`,g=o(11,e=>{let t={...e._.d,checked:e.i,checkedChange:O(e),id:e.k,value:e.M,name:`checkbox-group`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))},2),_=r(1,g,5),v=s(10,e=>{ne(e.b,`for`,e.k),g(e)}),y=e=>{_._(e),S._(e),f(e.a,`field__control`),c(e.c,e.M+1),v(e,ee(e))},b=re(8,g),x=o(5,e=>b(e,e.e,k(e))),S=r(1,x,6),C=s(4,x),w=(e,t)=>C(e,t[0]),T=n(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(d),(e=>`D/${e}& Db%m`)(u),y,w),E=te(4,e=>{c(e.a,e.e.toString()),T(e,[e.e]),S(e)}),D=s(3,_),O=e=>t=>b(e,t),k=e=>function(t){let n=[...e._.e];n[e.M]=t,E(e._,n)},i.L6QIlsJ=O,i.A7LVsqO=k,A=l(`Eb36A1l`,ce,le,se,D)})))()}var M,N,P,F;function I(){return(I=e((()=>{m(),a(),M=d,N=(e=>`/${e}&`)(u),P=s(2,e=>{f(e.a,e.c.class),p(e.a,e.c.size),h(e.a,(({class:e,size:t,...n})=>n)(e.c))}),F=l(`OOnIzox`,M,N,0,P)})))()}function ue(e){f(e.a,`field__control`)}var L,R,z,B;function V(){return(V=e((()=>{m(),a(),L=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(d),R=(e=>`D/${e}&l`)(u),z=s(2,e=>{let t={...e.c,id:`checkbox`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))}),B=l(`SKaBpQK`,L,R,ue,z)})))()}function de(e){f(e.a,`field__control`)}var H,U,W,G;function K(){return(K=e((()=>{m(),a(),H=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(d),U=(e=>`D/${e}&l`)(u),W=s(2,e=>{let t={...e.c,disabled:!0,id:`checkbox`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))}),G=l(`MpuO5Wd`,H,U,de,W)})))()}var q;function J(){return(J=e((()=>{q=`<let/checkedItems=[false, false, false]>

<div>\${checkedItems.toString()}</div>
<fieldset>
  <legend>Choose an Option</legend>
  <for|_checked, i| of=checkedItems>
    <let/checked=_checked
      valueChange(v) {
        const newItems = [...checkedItems];
        newItems[i] = v;
        checkedItems = newItems;
      }
    >
    <span class="field">
      <id/checkboxId>
      <evo-checkbox
        ...input
        checked:=checked
        class="field__control"
        id=checkboxId
        value=i
        name="checkbox-group"
      />
      <label class="field__label field__label--end" for=checkboxId>
        Option \${i + 1}
      </label>
    </span>
  </for>
</fieldset>
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`<span class="field">
  <evo-checkbox ...input class="field__control" id="checkbox"/>
  <label class="field__label field__label--end" for="checkbox">Option</label>
</span>
`})))()}var me;function he(){return(he=e((()=>{me=`<span class="field">
  <evo-checkbox ...input disabled class="field__control" id="checkbox"/>
  <label
    class="field__label field__label--end field__label--disabled"
    for="checkbox"
  >
    Option
  </label>
</span>
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`<evo-checkbox ...input/>
`})))()}var Y,X,Z,Q,$,ve;function ye(){return(ye=e((()=>{oe(),m(),j(),I(),V(),K(),J(),pe(),he(),_e(),Y={title:`form input/evo-checkbox`,component:ie,parameters:{docs:{description:{component:ae}}},argTypes:{size:{type:`string`,options:[`small (default)`,`large`],control:`inline-radio`,description:`Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)`},checked:{type:`boolean`,controllable:!0,control:`boolean`,description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},X=t(B,fe,{checked:!1}),Z=t(G,me,{checked:!1}),Q=t(A,q),$=t(F,ge),ve=[`WithLabel`,`Disabled`,`Group`,`Isolated`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)`,...$.parameters?.docs?.source}}}})))()}ye();export{Z as Disabled,Q as Group,$ as Isolated,X as WithLabel,ve as __namedExportsOrder,Y as default};