import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{U as n,V as r,Z as ee,at as i,et as te,i as a,it as o,k as s,lt as c,s as ne,t as l,tt as re}from"./dom-BzvT7IaP.js";import{a as u,i as d,n as f,o as ie,r as p,s as m,t as h}from"./evo-checkbox-BSDuc9sh.js";var ae;function oe(){return(oe=e((()=>{ae=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function se(e){w(e,[!1,!1,!1])}var ce,le,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{a(),m(),ce=`<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>`,le=`D lDb%l`,g=o(11,e=>{let t={...e._.d,checked:e.i,checkedChange:E(e),id:e.k,value:e.M,name:`checkbox-group`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))},2),_=r(1,g,5),v=s(10,e=>{ne(e.b,`for`,e.k),g(e)}),y=e=>{_._(e),S._(e),f(e.a,`field__control`),c(e.c,e.M+1),v(e,ee(e))},b=re(8,g),x=o(5,e=>b(e,e.e,D(e))),S=r(1,x,6),C=n(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(d),(e=>`D/${e}& Db%m`)(u),y,s(4,x)),w=te(4,e=>{c(e.a,e.e.toString()),C(e,[e.e]),S(e)}),T=s(3,_),E=e=>t=>b(e,t),D=e=>function(t){let n=[...e._.e];n[e.M]=t,w(e._,n)},i.L6QIlsJ=E,i.A7LVsqO=D,O=l(`Eb36A1l`,ce,le,se,T)})))()}var A,j,M,N;function P(){return(P=e((()=>{m(),a(),A=d,j=(e=>`/${e}&`)(u),M=s(2,e=>{f(e.a,e.c.class),p(e.a,e.c.size),h(e.a,(({class:e,size:t,...n})=>n)(e.c))}),N=l(`OOnIzox`,A,j,0,M)})))()}function ue(e){f(e.a,`field__control`)}var F,I,L,R;function z(){return(z=e((()=>{m(),a(),F=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(d),I=(e=>`D/${e}&l`)(u),L=s(2,e=>{let t={...e.c,id:`checkbox`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))}),R=l(`SKaBpQK`,F,I,ue,L)})))()}function de(e){f(e.a,`field__control`)}var B,V,H,U;function W(){return(W=e((()=>{m(),a(),B=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(d),V=(e=>`D/${e}&l`)(u),H=s(2,e=>{let t={...e.c,disabled:!0,id:`checkbox`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))}),U=l(`MpuO5Wd`,B,V,de,H)})))()}var G;function K(){return(K=e((()=>{G=`<let/checkedItems=[false, false, false]>

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
`})))()}var q;function J(){return(J=e((()=>{q=`<span class="field">
  <evo-checkbox ...input class="field__control" id="checkbox"/>
  <label class="field__label field__label--end" for="checkbox">Option</label>
</span>
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`<span class="field">
  <evo-checkbox ...input disabled class="field__control" id="checkbox"/>
  <label
    class="field__label field__label--end field__label--disabled"
    for="checkbox"
  >
    Option
  </label>
</span>
`})))()}var me;function he(){return(he=e((()=>{me=`<evo-checkbox ...input/>
`})))()}var ge,Y,X,Z,Q,$;function _e(){return(_e=e((()=>{oe(),m(),k(),P(),z(),W(),K(),J(),pe(),he(),ge={title:`form input/evo-checkbox`,component:ie,parameters:{docs:{description:{component:ae}}},argTypes:{size:{type:`string`,options:[`small (default)`,`large`],control:`inline-radio`,description:`Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)`},checked:{type:`boolean`,controllable:!0,control:`boolean`,description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},Y=t(R,q,{checked:!1}),X=t(U,fe,{checked:!1}),Z=t(O,G),Q=t(N,me),$=[`WithLabel`,`Disabled`,`Group`,`Isolated`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}_e();export{X as Disabled,Z as Group,Q as Isolated,Y as WithLabel,$ as __namedExportsOrder,ge as default};