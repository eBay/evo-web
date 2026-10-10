import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,H as r,Q as ee,W as te,at as i,i as a,nt as ne,ot as re,s as ie,t as o,tt as ae,ut as s}from"./dom-BJr4MHiD.js";import{a as c,i as l,n as u,o as oe,r as d,s as f,t as p}from"./evo-checkbox-DatyDa6h.js";var se;function ce(){return(ce=e((()=>{se=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function le(e){E(e,[!1,!1,!1])}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{a(),f(),m=`<div> </div><fieldset><legend>Choose an Option</legend><!></fieldset>`,h=`D lDb%l`,g=i(11,e=>{let t={...e._.d,checked:e.i,checkedChange:O(e),id:e.k,value:e.M,name:`checkbox-group`};d(e.a,t.size),p(e.a,(({class:e,size:t,...n})=>n)(t))},2),_=r(1,g),v=n(10,e=>{ie(e.b,`for`,e.k),g(e)}),y=e=>{_._(e),S._(e),u(e.a,`field__control`),s(e.c,e.M+1),v(e,ee(e))},b=ne(8,g),x=i(5,e=>b(e,e.e,k(e))),S=r(1,x),C=n(4,x),w=(e,t)=>C(e,t[0]),T=te(1,(e=>`<span class=field>${e}<label class="field__label field__label--end">Option <!></label></span>`)(l),(e=>`D/${e}& Db%m`)(c),y,w),E=ae(4,e=>{s(e.a,e.e.toString()),T(e,[e.e]),S(e)}),D=n(3,_),O=e=>t=>{b(e,t)},k=e=>function(t){let n=[...e._.e];n[e.M]=t,E(e._,n)},re.W7nAwnJ=O,re.A7LVsqO=k,A=o(`Eb36A1l`,m,h,le,D)})))()}var M,N,P,F;function I(){return(I=e((()=>{f(),a(),M=l,N=(e=>`/${e}&`)(c),P=n(2,e=>{u(e.a,e.c.class),d(e.a,e.c.size),p(e.a,(({class:e,size:t,...n})=>n)(e.c))}),F=o(`ZPWzKjx`,M,N,0,P)})))()}function ue(e){u(e.a,`field__control`)}var de,L,R,z;function B(){return(B=e((()=>{f(),a(),de=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(l),L=(e=>`D/${e}&l`)(c),R=n(2,e=>{let t={...e.c,id:`checkbox`};d(e.a,t.size),p(e.a,(({class:e,size:t,...n})=>n)(t))}),z=o(`cMJsALK`,de,L,ue,R)})))()}function fe(e){u(e.a,`field__control`)}var V,H,U,W;function G(){return(G=e((()=>{f(),a(),V=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(l),H=(e=>`D/${e}&l`)(c),U=n(2,e=>{let t={...e.c,disabled:!0,id:`checkbox`};d(e.a,t.size),p(e.a,(({class:e,size:t,...n})=>n)(t))}),W=o(`Xq1FgSd`,V,H,fe,U)})))()}var K;function q(){return(q=e((()=>{K=`<let/checkedItems=[false, false, false]>

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
`})))()}var J;function pe(){return(pe=e((()=>{J=`<span class="field">
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
`})))()}var Y,X,Z,Q,$,ve;function ye(){return(ye=e((()=>{ce(),f(),j(),I(),B(),G(),q(),pe(),he(),_e(),Y={title:`form input/evo-checkbox`,component:oe,parameters:{docs:{description:{component:se}}},argTypes:{size:{type:`string`,options:[`small (default)`,`large`],control:`inline-radio`,description:`Sets the checkbox icon. Default is small. (Note: The dimensions of the checkbox will not change, but only the icon)`},checked:{type:`boolean`,controllable:!0,control:`boolean`,description:"The native `checked=` value of the `<input>`"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},X=t(z,J,{checked:!1}),Z=t(W,me,{checked:!1}),Q=t(A,K),$=t(F,ge),ve=[`WithLabel`,`Disabled`,`Group`,`Isolated`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode, {
  checked: false
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode, {
  checked: false
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(GroupTemplate, GroupCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedTemplateCode)`,...$.parameters?.docs?.source}}}})))()}ye();export{Z as Disabled,Q as Group,$ as Isolated,X as WithLabel,ve as __namedExportsOrder,Y as default};