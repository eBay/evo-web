import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,J as ee,Q as te,V as ne,Z as re,i as r,k as i,nt as a,ot as o,s as ie,t as s,tt as c}from"./dom-CNWckxLY.js";import{a as l,i as u,n as d,o as ae,r as f,s as p,t as m}from"./evo-checkbox-B8PBKxnd.js";var oe;function se(){return(se=e((()=>{oe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function ce(e){T(e,[!1,!1,!1])}var le,ue,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),p(),le=`<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>`,ue=`D lDb%l`,h=c(11,e=>{let t={...e._.d,checked:e.i,checkedChange:D(e),id:e.k,value:e.M,name:`checkbox-group`};f(e.a,t.size),m(e.a,(({class:e,size:t,...n})=>n)(t))},2),g=n(1,h),_=i(10,e=>{ie(e.b,`for`,e.k),h(e)}),v=e=>{g._(e),x._(e),d(e.a,`field__control`),o(e.c,e.M+1),_(e,ee(e))},y=te(8,h),b=c(5,e=>y(e,e.e,O(e))),x=n(1,b),S=i(4,b),C=(e,t)=>S(e,t[0]),w=ne(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(u),(e=>`D/${e}& Db%m`)(l),v,C),T=re(4,e=>{o(e.a,e.e.toString()),w(e,[e.e]),x(e)}),E=i(3,g),D=e=>t=>{y(e,t)},O=e=>function(t){let n=[...e._.e];n[e.M]=t,T(e._,n)},a(`W7nAwnJ`,D),a(`A7LVsqO`,O),k=s(`Eb36A1l`,le,ue,ce,E)})))()}var j,M,N,P;function F(){return(F=e((()=>{p(),r(),j=u,M=(e=>`/${e}&`)(l),N=i(2,e=>{d(e.a,e.c.class),f(e.a,e.c.size),m(e.a,(({class:e,size:t,...n})=>n)(e.c))}),P=s(`ZPWzKjx`,j,M,0,N)})))()}function de(e){d(e.a,`field__control`)}var I,L,R,z;function B(){return(B=e((()=>{p(),r(),I=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(u),L=(e=>`D/${e}&l`)(l),R=i(2,e=>{let t={...e.c,id:`checkbox`};f(e.a,t.size),m(e.a,(({class:e,size:t,...n})=>n)(t))}),z=s(`cMJsALK`,I,L,de,R)})))()}function fe(e){d(e.a,`field__control`)}var V,H,U,W;function G(){return(G=e((()=>{p(),r(),V=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(u),H=(e=>`D/${e}&l`)(l),U=i(2,e=>{let t={...e.c,disabled:!0,id:`checkbox`};f(e.a,t.size),m(e.a,(({class:e,size:t,...n})=>n)(t))}),W=s(`Xq1FgSd`,V,H,fe,U)})))()}var K;function q(){return(q=e((()=>{K=`<let/checkedItems=[false, false, false]>

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
`})))()}var pe;function me(){return(me=e((()=>{pe=`<span class="field">
  <evo-checkbox ...input class="field__control" id="checkbox"/>
  <label class="field__label field__label--end" for="checkbox">Option</label>
</span>
`})))()}var he;function ge(){return(ge=e((()=>{he=`<span class="field">
  <evo-checkbox ...input disabled class="field__control" id="checkbox"/>
  <label
    class="field__label field__label--end field__label--disabled"
    for="checkbox"
  >
    Option
  </label>
</span>
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`<evo-checkbox ...input/>
`})))()}var J,Y,X,Z,Q,ye;function $(){return($=e((()=>{se(),p(),A(),F(),B(),G(),q(),me(),ge(),ve(),J={title:`form input/evo-checkbox`,component:ae,parameters:{docs:{description:{component:oe}}},argTypes:{size:{type:`string`,options:[`small (default)`,`large`],control:`inline-radio`,description:`Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)`},checked:{type:`boolean`,controllable:!0,control:`boolean`,description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},Y=t(z,pe,{checked:!1}),X=t(W,he,{checked:!1}),Z=t(k,K),Q=t(P,_e),ye=[`WithLabel`,`Disabled`,`Group`,`Isolated`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{X as Disabled,Z as Group,Q as Isolated,Y as WithLabel,ye as __namedExportsOrder,J as default};