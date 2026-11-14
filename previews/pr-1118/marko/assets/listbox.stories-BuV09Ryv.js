import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,U as ee,V as te,at as ne,i as r,it as i,k as a,lt as re,m as ie,n as o,p as ae,r as s,st as oe,t as c,tt as se}from"./dom-CUxLGBQ2.js";import{a as ce,i as l,n as u,o as d,r as f,t as p}from"./evo-listbox-CyFQKOvl.js";var le;function m(){return(m=e((()=>{le=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function ue(e){u(e.a)}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{d(),r(),h=f,g=(e=>`/${e}&`)(l),_=n(`JDghpJ0`,`Option 3`),v=n(`gjCMTmO`,`Option 2`),y=n(`WVEaCrO`,`Option 1`),b=(e,t)=>p(e.a,{a11ySelectedText:`selected`,...t,option:s(s(o({value:`1`,content:y(e)}),{value:`2`,content:v(e)}),{value:`3`,content:_(e)})}),x=c(`QqAx3bn`,h,g,ue,b)})))()}var C;function w(){return(w=e((()=>{C=`<evo-listbox a11ySelectedText="selected" ...input>
  <@option value="1">Option 1</@option>
  <@option value="2">Option 2</@option>
  <@option value="3">Option 3</@option>
</evo-listbox>
`})))()}function de(e){u(e.a),V(e,W(e)),H(e,[[`A`,`B`,`C`]])}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,fe,B,V,H,U,W,G;function K(){return(K=e((()=>{d(),r(),T=(e=>`${e}<!><!>`)(f),E=(e=>`/${e}&%c`)(l),D=n(`HvpuCL3`,`Option C`),O=n(`OEnjLcf`,`Option B`),k=n(`vdRDAHi`,`Option A`),A=i(4,e=>ae(e,`a`,e._.h,e._.j,e.d),2),j=te(1,A,11),M=oe(`js2qByz`,e=>ie(e,`a`)),N=e=>{j._(e),P._(e),M(e)},P=te(1,A,12),F=a(3,e=>{re(e.b,e.d),A(e)}),I=(e,t)=>F(e,t[0]),L=i(10,e=>p(e.a,{...e.d,selected:e.h,selectedChange:e.j,option:s(s(o({value:`A`,content:k(e)}),{value:`B`,content:O(e)}),{value:`C`,content:D(e)})}),2),R=se(7,e=>{L(e),j(e)}),z=i(6,e=>R(e,e.e??`A`,e.f)),fe=a(4,z),B=a(5,z),V=a(9,L),H=ee(1,`<label><input type=radio> </label>`,`D b `,N,I),U=a(3,e=>{fe(e,e.d.selected),B(e,e.d.selectedChange),L(e)}),W=e=>t=>R(e,t),ne.IhvPMbI=W,G=c(`$UdHoLL`,T,E,de,U)})))()}var q;function J(){return(J=e((()=>{q=`import { type Input as ListboxInput } from "<evo-listbox>";
export interface Input extends ListboxInput<string> {}

<let/selected=input.selected ?? "A" valueChange=input.selectedChange>

<evo-listbox ...input selected:=selected>
  <@option value="A">Option A</@option>
  <@option value="B">Option B</@option>
  <@option value="C">Option C</@option>
</evo-listbox>

<for|value| of=["A", "B", "C"]>
  <label>
    <input type="radio" value=value checkedValue:=selected>
    \${value}
  </label>
</for>
`})))()}function pe(e){u(e.a)}var me,he,ge,_e,ve,ye,be,xe,Se,Ce;function we(){return(we=e((()=>{d(),r(),me=f,he=(e=>`/${e}&`)(l),ge=n(`NXy4IN4`,`Option 3 extra info`),_e=n(`toT3reT`,`Option 3`),ve=n(`KsCT9bf`,`Option 2 extra info`),ye=n(`gn41rJp`,`Option 2`),be=n(`Pu3dbms`,`Option 1 extra info`),xe=n(`C3Z4QFo`,`Option 1`),Se=(e,t)=>p(e.a,{a11ySelectedText:`selected`,...t,option:s(s(o({value:`1`,description:o({content:be(e)}),content:xe(e)}),{value:`2`,description:o({content:ve(e)}),content:ye(e)}),{value:`3`,description:o({content:ge(e)}),content:_e(e)})}),Ce=c(`sUCZEyo`,me,he,pe,Se)})))()}var Y;function Te(){return(Te=e((()=>{Y=`<evo-listbox a11ySelectedText="selected" ...input>
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
`})))()}var Ee,X,Z,Q,De;function $(){return($=e((()=>{m(),d(),S(),w(),K(),J(),we(),Te(),Ee={title:`building blocks/evo-listbox`,component:ce,parameters:{docs:{description:{component:le}}},argTypes:{selected:{controllable:!0,type:`string`,control:`text`,description:"The selected item in the list. Checks for equality with `value` in each `@option`"},listSelection:{type:`string`,options:[`manual (default)`,`auto`],control:`inline-radio`,description:`If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down`},name:{type:`string`,control:`text`,description:"Used for the `name` attribute of the native `<select>`"},a11ySelectedText:{type:{name:`string`,required:!0},control:`text`,description:`Localized text to be read by screen readers when an option is selected`,table:{defaultValue:{summary:`selected`}}},option:{description:`Attribute tag representing a list option`,"@":{value:{type:{name:`string`,required:!0},control:`text`,description:"Passed through to `value` of the underlying [HTML `<option>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option)"},disabled:{type:`boolean`,control:`boolean`,description:`Option will not be clickable, and keyboard navigation will skip over it`},description:{description:"An optional description, rendered beneath the tag content as a `<span>`","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`"}}},icon:{description:`An optional icon rendered at the start of the item`,"@":{}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},X=t(x,C),Z=t(G,q),Q=t(Ce,Y),De=[`Default`,`Controlled`,`withDescription`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Z as Controlled,X as Default,De as __namedExportsOrder,Ee as default,Q as withDescription};