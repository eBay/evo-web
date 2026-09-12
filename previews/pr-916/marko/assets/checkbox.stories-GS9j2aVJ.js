import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as r,H as ee,Q as te,V as i,Y as ne,ct as a,i as o,nt as s,rt as c,s as re,t as l}from"./dom-DAi6NM7T.js";import{a as u,i as d,n as f,o as ie,r as p,s as m,t as h}from"./evo-checkbox-C6E4Qrn0.js";var ae;function oe(){return(oe=e((()=>{ae=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function se(e){D(e,[!1,!1,!1])}var ce,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{o(),m(),ce=`<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>`,g=`D lDb%l`,_=s(11,e=>{let t={...e._.d,checked:e.i,checkedChange:k(e),id:e.k,value:e.M,name:`checkbox-group`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))},2),v=i(1,_),y=r(10,e=>{re(e.b,`for`,e.k),_(e)}),b=e=>{v._(e),C._(e),f(e.a,`field__control`),a(e.c,e.M+1),y(e,ne(e))},x=n(8,_),S=s(5,e=>x(e,e.e,A(e))),C=i(1,S),w=r(4,S),T=(e,t)=>w(e,t[0]),E=ee(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(d),(e=>`D/${e}& Db%m`)(u),b,T),D=te(4,e=>{a(e.a,e.e.toString()),E(e,[e.e]),C(e)}),O=r(3,v),k=e=>t=>{x(e,t)},A=e=>function(t){let n=[...e._.e];n[e.M]=t,D(e._,n)},c(`W7nAwnJ`,k),c(`A7LVsqO`,A),j=l(`Eb36A1l`,ce,g,se,O)})))()}var N,P,F,I;function L(){return(L=e((()=>{m(),o(),N=d,P=(e=>`/${e}&`)(u),F=r(2,e=>{f(e.a,e.c.class),p(e.a,e.c.size),h(e.a,(({class:e,size:t,...n})=>n)(e.c))}),I=l(`ZPWzKjx`,N,P,0,F)})))()}function le(e){f(e.a,`field__control`)}var R,ue,z,B;function V(){return(V=e((()=>{m(),o(),R=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(d),ue=(e=>`D/${e}&l`)(u),z=r(2,e=>{let t={...e.c,id:`checkbox`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))}),B=l(`cMJsALK`,R,ue,le,z)})))()}function de(e){f(e.a,`field__control`)}var H,U,W,G;function K(){return(K=e((()=>{m(),o(),H=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(d),U=(e=>`D/${e}&l`)(u),W=r(2,e=>{let t={...e.c,disabled:!0,id:`checkbox`};p(e.a,t.size),h(e.a,(({class:e,size:t,...n})=>n)(t))}),G=l(`Xq1FgSd`,H,U,de,W)})))()}var q;function J(){return(J=e((()=>{q=`<let/checkedItems=[false, false, false]>

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
`})))()}var ve,Y,X,Z,Q,ye;function $(){return($=e((()=>{oe(),m(),M(),L(),V(),K(),J(),pe(),he(),_e(),ve={title:`form input/evo-checkbox`,component:ie,parameters:{docs:{description:{component:ae}}},argTypes:{size:{type:`string`,options:[`small (default)`,`large`],control:`inline-radio`,description:`Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)`},checked:{type:`boolean`,controllable:!0,control:`boolean`,description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},Y=t(B,fe,{checked:!1}),X=t(G,me,{checked:!1}),Z=t(j,q),Q=t(I,ge),ye=[`WithLabel`,`Disabled`,`Group`,`Isolated`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{X as Disabled,Z as Group,Q as Isolated,Y as WithLabel,ye as __namedExportsOrder,ve as default};