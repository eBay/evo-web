import{b as c}from"./utils-DyU2_5R1.js";import{_ as e,a as p,k as i,l as o,b as a,e as d,A as y,u as C,B as f,d as T,C as O,x as k,D as w}from"./dom-BQBHkMGv.js";import{a as u,c as m,b as _,$ as b,L as D}from"./index-D7raDxmz.js";import"./iframe-rbTg3zTU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1ED4TJWi.js";import"./index-CslxnSAF.js";import"./evo-icon-tick-16-C9qCoFGV.js";import"./index-Corjdykz.js";const L=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,S=u,A=(t=>`/${t}&`)(b),E=e("UEP8zE0","Option 3"),V=e("rk9D2hO","Option 2"),W=e("gXb2MmO","Option 1");function M(t){_(t.a)}const R=(t,n)=>m(t.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",content:W(t)}),{value:"2",content:V(t)}),{value:"3",content:E(t)})}),z=p("as7oe7m",S,A,M,R),B=`<evo-listbox a11ySelectedText="selected" ...input>
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
`,H=(t=>`${t}<!><!>`)(u),U=(t=>`/${t}&%c`)(b),I=e("HvpuCL3","Option C"),j=e("ZFWaW7e","Option B"),q=e("GeovLCi","Option A"),h=d(4,t=>w(t,"a",t._.h,t._.j,t.d),2),g=f(1,h),F=T("js2qByz",t=>O(t,"a")),P=t=>{g._(t),G._(t),F(t)},G=f(1,h),Q=a(3,t=>{k(t.b,t.d),h(t)}),X=(t,n)=>Q(t,n[0]),v=d(10,t=>m(t.a,{...t.d,selected:t.h,selectedChange:t.j,option:i(i(o({value:"A",content:q(t)}),{value:"B",content:j(t)}),{value:"C",content:I(t)})}),2),x=C(7,t=>{v(t),g(t)}),$=d(6,t=>x(t,t.e??"A",t.f)),Y=a(4,$),Z=a(5,$),J=a(9,v),K=y(1,"<label><input type=radio> </label>","D b ",P,X);function N(t){_(t.a),J(t,et(t)),K(t,[["A","B","C"]])}const tt=a(3,t=>{Y(t,t.d.selected),Z(t,t.d.selectedChange),v(t)}),et=t=>n=>{x(t,n)},nt=p("kWMyzGL",H,U,N,tt),ot=`import { type Input as ListboxInput } from "<evo-listbox>";
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
`,it=u,at=(t=>`/${t}&`)(b),st=e("YY5XTI4","Option 3 extra info"),lt=e("toT3reT","Option 3"),rt=e("Vt9Kk7e","Option 2 extra info"),ct=e("gn41rJp","Option 2"),pt=e("$vC5lhs","Option 1 extra info"),dt=e("C3Z4QFo","Option 1");function ut(t){_(t.a)}const mt=(t,n)=>m(t.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",description:o({content:pt(t)}),content:dt(t)}),{value:"2",description:o({content:rt(t)}),content:ct(t)}),{value:"3",description:o({content:st(t)}),content:lt(t)})}),_t=p("DV9QPto",it,at,ut,mt),bt=`<evo-listbox a11ySelectedText="selected" ...input>
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
`,Ot={title:"building blocks/evo-listbox",component:D,parameters:{docs:{description:{component:L}}},argTypes:{selected:{controllable:!0,type:"string",control:"text",description:"The selected item in the list. Checks for equality with `value` in each `@option`"},listSelection:{type:"string",options:["manual (default)","auto"],control:"inline-radio",description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down"},name:{type:"string",control:"text",description:"Used for the `name` attribute of the native `<select>`"},a11ySelectedText:{type:{name:"string",required:!0},control:"text",description:"Localized text to be read by screen readers when an option is selected",table:{defaultValue:{summary:"selected"}}},option:{description:"Attribute tag representing a list option","@":{value:{type:{name:"string",required:!0},control:"text",description:"Passed through to `value` of the underlying [HTML `<option>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option)"},disabled:{type:"boolean",control:"boolean",description:"Option will not be clickable, and keyboard navigation will skip over it"},description:{description:"An optional description, rendered beneath the tag content as a `<span>`","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`"}}},icon:{description:"An optional icon rendered at the start of the item","@":{}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},s=c(z,B),l=c(nt,ot),r=c(_t,bt);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...r.parameters?.docs?.source}}};const kt=["Default","Controlled","withDescription"];export{l as Controlled,s as Default,kt as __namedExportsOrder,Ot as default,r as withDescription};
