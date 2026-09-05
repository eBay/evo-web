import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as n,M as r,V as ee,Z as te,at as ne,et as i,i as a,it as re,k as o,m as ie,n as s,p as ae,r as c,t as l,tt as oe}from"./dom-CrmgVQ1h.js";import{a as se,i as u,n as d,o as f,r as p,t as m}from"./evo-listbox-B9MfnITE.js";var ce;function h(){return(h=e((()=>{ce=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-listbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

Used to generate a menu portion of listbox. For use with a button which hides and shows the menu use \`evo-listbox-button\` instead.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-listbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-listbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-listbox/examples)
`})))()}function le(e){d(e.a)}var g,_,v,y,b,x,S;function C(){return(C=e((()=>{f(),a(),g=p,_=(e=>`/${e}&`)(u),v=r(`UEP8zE0`,`Option 3`),y=r(`rk9D2hO`,`Option 2`),b=r(`gXb2MmO`,`Option 1`),x=(e,t)=>m(e.a,{a11ySelectedText:`selected`,...t,option:c(c(s({value:`1`,content:b(e)}),{value:`2`,content:y(e)}),{value:`3`,content:v(e)})}),S=l(`as7oe7m`,g,_,le,x)})))()}var w;function T(){return(T=e((()=>{w=`<evo-listbox a11ySelectedText="selected" ...input>
  <@option value="1">
    Option 1
  </@option>
  <@option value="2">
    Option 2
  </@option>
  <@option value="3">
    Option 3
  </@option>
</evo-listbox>
`})))()}function ue(e){d(e.a),H(e,G(e)),U(e,[[`A`,`B`,`C`]])}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,de,V,H,U,W,G,K;function q(){return(q=e((()=>{f(),a(),E=(e=>`${e}<!><!>`)(p),D=(e=>`/${e}&%c`)(u),O=r(`HvpuCL3`,`Option C`),k=r(`ZFWaW7e`,`Option B`),A=r(`GeovLCi`,`Option A`),j=i(4,e=>ae(e,`a`,e._.h,e._.j,e.d),2),M=n(1,j),N=re(`js2qByz`,e=>ie(e,`a`)),P=e=>{M._(e),F._(e),N(e)},F=n(1,j),I=o(3,e=>{ne(e.b,e.d),j(e)}),L=(e,t)=>I(e,t[0]),R=i(10,e=>m(e.a,{...e.d,selected:e.h,selectedChange:e.j,option:c(c(s({value:`A`,content:A(e)}),{value:`B`,content:k(e)}),{value:`C`,content:O(e)})}),2),z=te(7,e=>{R(e),M(e)}),B=i(6,e=>z(e,e.e??`A`,e.f)),de=o(4,B),V=o(5,B),H=o(9,R),U=ee(1,`<label><input type=radio> </label>`,`D b `,P,L),W=o(3,e=>{de(e,e.d.selected),V(e,e.d.selectedChange),R(e)}),G=e=>t=>{z(e,t)},oe(`Ti2GX6H`,G),K=l(`kWMyzGL`,E,D,ue,W)})))()}var J;function fe(){return(fe=e((()=>{J=`import { type Input as ListboxInput } from "<evo-listbox>";
export interface Input extends ListboxInput<string> {}

<let/selected=(input.selected ?? "A") valueChange=input.selectedChange>

<evo-listbox ...input selected:=selected>
  <@option value="A">
    Option A
  </@option>
  <@option value="B">
    Option B
  </@option>
  <@option value="C">
    Option C
  </@option>
</evo-listbox>

<for|value| of=["A", "B", "C"]>
  <label>
    <input type="radio" value=value checkedValue:=selected>
    \${value}
  </label>
</for>
`})))()}function pe(e){d(e.a)}var me,he,ge,_e,ve,ye,be,xe,Se,Ce;function we(){return(we=e((()=>{f(),a(),me=p,he=(e=>`/${e}&`)(u),ge=r(`YY5XTI4`,`Option 3 extra info`),_e=r(`toT3reT`,`Option 3`),ve=r(`Vt9Kk7e`,`Option 2 extra info`),ye=r(`gn41rJp`,`Option 2`),be=r(`$vC5lhs`,`Option 1 extra info`),xe=r(`C3Z4QFo`,`Option 1`),Se=(e,t)=>m(e.a,{a11ySelectedText:`selected`,...t,option:c(c(s({value:`1`,description:s({content:be(e)}),content:xe(e)}),{value:`2`,description:s({content:ve(e)}),content:ye(e)}),{value:`3`,description:s({content:ge(e)}),content:_e(e)})}),Ce=l(`DV9QPto`,me,he,pe,Se)})))()}var Y;function Te(){return(Te=e((()=>{Y=`<evo-listbox a11ySelectedText="selected" ...input>
  <@option value="1">
    <@description>Option 1 extra info</@description>
    Option 1
  </@option>
  <@option value="2">
    <@description>Option 2 extra info</@description>
    Option 2
  </@option>
  <@option value="3">
    <@description>Option 3 extra info</@description>
    Option 3
  </@option>
</evo-listbox>
`})))()}var Ee,X,Z,Q,De;function $(){return($=e((()=>{h(),f(),C(),T(),q(),fe(),we(),Te(),Ee={title:`building blocks/evo-listbox`,component:se,parameters:{docs:{description:{component:ce}}},argTypes:{selected:{controllable:!0,type:`string`,control:`text`,description:"The selected item in the list. Checks for equality with `value` in each `@option`"},listSelection:{type:`string`,options:[`manual (default)`,`auto`],control:`inline-radio`,description:`If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down`},name:{type:`string`,control:`text`,description:"Used for the `name` attribute of the native `<select>`"},a11ySelectedText:{type:{name:`string`,required:!0},control:`text`,description:`Localized text to be read by screen readers when an option is selected`,table:{defaultValue:{summary:`selected`}}},option:{description:`Attribute tag representing a list option`,"@":{value:{type:{name:`string`,required:!0},control:`text`,description:"Passed through to `value` of the underlying [HTML `<option>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option)"},disabled:{type:`boolean`,control:`boolean`,description:`Option will not be clickable, and keyboard navigation will skip over it`},description:{description:"An optional description, rendered beneath the tag content as a `<span>`","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`"}}},icon:{description:`An optional icon rendered at the start of the item`,"@":{}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},X=t(S,w),Z=t(K,J),Q=t(Ce,Y),De=[`Default`,`Controlled`,`withDescription`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Z as Controlled,X as Default,De as __namedExportsOrder,Ee as default,Q as withDescription};