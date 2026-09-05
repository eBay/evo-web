import{b as c}from"./utils-DyU2_5R1.js";import{_ as t,a as p,k as i,l as o,b as a,e as d,A as y,u as C,B as f,d as T,C as O,x as k,D as w}from"./dom-BwDV3QmC.js";import{a as u,c as m,b as _,$ as b,L as D}from"./index-BM6Cl6XX.js";import"./iframe-Ca_lldlR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ca3eTHuF.js";import"./index-CyTMo2db.js";import"./evo-icon-tick-16-KcuX1YpZ.js";import"./index-OPUfY1qY.js";const L=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,S=u,A=(e=>`/${e}&`)(b),E=t("UEP8zE0","Option 3"),V=t("rk9D2hO","Option 2"),W=t("gXb2MmO","Option 1");function M(e){_(e.a)}const R=(e,n)=>m(e.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",content:W(e)}),{value:"2",content:V(e)}),{value:"3",content:E(e)})}),z=p("as7oe7m",S,A,M,R),B=`<evo-listbox a11ySelectedText="selected" ...input>
    <@option value="1">Option 1</>
    <@option value="2">Option 2</>
    <@option value="3">Option 3</>
</evo-listbox>
`,H=(e=>`${e}<!><!>`)(u),U=(e=>`/${e}&%c`)(b),I=t("HvpuCL3","Option C"),j=t("ZFWaW7e","Option B"),q=t("GeovLCi","Option A"),h=d(4,e=>w(e,"a",e._.h,e._.j,e.d),2),g=f(1,h),F=T("js2qByz",e=>O(e,"a")),P=e=>{g._(e),G._(e),F(e)},G=f(1,h),Q=a(3,e=>{k(e.b,e.d),h(e)}),X=(e,n)=>Q(e,n[0]),v=d(10,e=>m(e.a,{...e.d,selected:e.h,selectedChange:e.j,option:i(i(o({value:"A",content:q(e)}),{value:"B",content:j(e)}),{value:"C",content:I(e)})}),2),x=C(7,e=>{v(e),g(e)}),$=d(6,e=>x(e,e.e??"A",e.f)),Y=a(4,$),Z=a(5,$),J=a(9,v),K=y(1,"<label><input type=radio> </label>","D b ",P,X);function N(e){_(e.a),J(e,te(e)),K(e,[["A","B","C"]])}const ee=a(3,e=>{Y(e,e.d.selected),Z(e,e.d.selectedChange),v(e)}),te=e=>n=>{x(e,n)},ne=p("kWMyzGL",H,U,N,ee),oe=`import { type Input as ListboxInput } from "<evo-listbox>";

export interface Input extends ListboxInput<string> {}

<let/selected=input.selected ?? "A" valueChange=input.selectedChange>

<evo-listbox ...input selected:=selected>
    <@option value="A">Option A</>
    <@option value="B">Option B</>
    <@option value="C">Option C</>
</evo-listbox>

<for|value| of=["A", "B", "C"]>
  <label>
    <input type="radio" value=value checkedValue:=selected>
    \${value}
  </label>
</for>
`,ie=u,ae=(e=>`/${e}&`)(b),se=t("YY5XTI4","Option 3 extra info"),le=t("toT3reT","Option 3"),re=t("Vt9Kk7e","Option 2 extra info"),ce=t("gn41rJp","Option 2"),pe=t("$vC5lhs","Option 1 extra info"),de=t("C3Z4QFo","Option 1");function ue(e){_(e.a)}const me=(e,n)=>m(e.a,{a11ySelectedText:"selected",...n,option:i(i(o({value:"1",description:o({content:pe(e)}),content:de(e)}),{value:"2",description:o({content:re(e)}),content:ce(e)}),{value:"3",description:o({content:se(e)}),content:le(e)})}),_e=p("DV9QPto",ie,ae,ue,me),be=`<evo-listbox a11ySelectedText="selected" ...input>
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
`,Oe={title:"building blocks/evo-listbox",component:D,parameters:{docs:{description:{component:L}}},argTypes:{selected:{controllable:!0,type:"string",control:"text",description:"The selected item in the list. Checks for equality with `value` in each `@option`"},listSelection:{type:"string",options:["manual (default)","auto"],control:"inline-radio",description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down"},name:{type:"string",control:"text",description:"Used for the `name` attribute of the native `<select>`"},a11ySelectedText:{type:{name:"string",required:!0},control:"text",description:"Localized text to be read by screen readers when an option is selected",table:{defaultValue:{summary:"selected"}}},option:{description:"Attribute tag representing a list option","@":{value:{type:{name:"string",required:!0},control:"text",description:"Passed through to `value` of the underlying [HTML `<option>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option)"},disabled:{type:"boolean",control:"boolean",description:"Option will not be clickable, and keyboard navigation will skip over it"},description:{description:"An optional description, rendered beneath the tag content as a `<span>`","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@description>`"}}},icon:{description:"An optional icon rendered at the start of the item","@":{}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@option>`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},s=c(z,B),l=c(ne,oe),r=c(_e,be);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...r.parameters?.docs?.source}}};const ke=["Default","Controlled","withDescription"];export{l as Controlled,s as Default,ke as __namedExportsOrder,Oe as default,r as withDescription};
