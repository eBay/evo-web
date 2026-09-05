import{b as i}from"./utils-DyU2_5R1.js";import{a as l,_ as c,l as r}from"./dom-C2BPWR5j.js";import{c as o,$ as n,a,b as s,I as C}from"./index-B6LW8MoI.js";import{$ as v,a as I,b as T,c as _,d as L,e as w,f as y,g as W,h as E,i as k,j as D,k as F}from"./evo-icon-mail-24-CwW7xTvS.js";import"./iframe-CZDi-Cmw.js";import"./preload-helper-PPVm8Dsz.js";import"./controllable-input.feat-CMyX0lqy.js";import"./controllable.feat-CJW7iVSc.js";import"./controllable-open.feat-OKonD60F.js";import"./controllable-select.feat-C1XBn6D9.js";import"./index-kuI6u_ft.js";import"./index-CUWbjRdR.js";/* empty css                *//* empty css                    */const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A single-line text input field. For multiline text input, use \`evo-textarea\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-evo-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-evo-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/evo-marko/src/tags/evo-input/examples)
`,A=(e=>`<!>${e}<!>`)(s),M=(e=>`b/${e}&b`)(a);function P(e){n(e.a)}const z=(e,t)=>o(e.a,t),H=l("eFVK$Lk",A,M,P,z),B=`<evo-input ...input/>
`,R=(e=>`<span class=field><label class="field__label field__label--start" for=textbox>Email address</label>${e}</span>`)(s),j=(e=>`Db/${e}&l`)(a);function N(e){n(e.a)}const V=(e,t)=>o(e.a,{...t,id:"textbox",value:"test"}),U=l("cd5vAMj",R,j,N,V),q=`<span class="field">
  <label class="field__label field__label--start" for="textbox">
    Email address
  </label>
  <evo-input ...input id="textbox" value="test"/>
</span>
`,O=(e=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=textbox>Email address</label>${e}</span>`)(s),Q=(e=>`Db/${e}&l`)(a);function X(e){n(e.a)}const Z=(e,t)=>o(e.a,{...t,disabled:!0,id:"textbox",value:"test"}),G=l("VfHH5y3",O,Q,X,Z),J=`<span class="field">
  <label
    class="field__label field__label--start field__label--disabled"
    for="textbox">
    Email address
  </label>
  <evo-input ...input disabled id="textbox" value="test"/>
</span>
`,K=(e=>`<!>${e}<!>`)(s),Y=(e=>`b/${e}&b`)(a);function ee(e){n(e.a)}const te=(e,t)=>o(e.a,{floatingLabel:"Email address",...t}),oe=l("rTQz2lI",K,Y,ee,te),ne=`<evo-input floatingLabel="Email address" ...input/>
`,ae=((e,t,g)=>`<!>${e}${t}${g}<!>`)(s,s,s),se=((e,t,g)=>`b/${e}&/${t}&/${g}&b`)(a,a,a);function ie(e){n(e.a),n(e.b),n(e.c)}const le=(e,t)=>{o(e.a,{...t,floatingLabel:"First Name",autocomplete:"given-name"}),o(e.b,{...t,floatingLabel:"Last Name",autocomplete:"family-name"}),o(e.c,{...t,floatingLabel:"Email address",autocomplete:"email",placeholder:"valid email address"})},re=l("Xqb5RId",ae,se,ie,le),ce=`<evo-input ...input floatingLabel="First Name" autocomplete="given-name"/>

<evo-input ...input floatingLabel="Last Name" autocomplete="family-name"/>

<evo-input
  ...input
  floatingLabel="Email address"
  autocomplete="email"
  placeholder="valid email address"/>
`,pe=(e=>`<!>${e}<!>`)(s),de=(e=>`b/${e}&b`)(a),ue=e=>{L(e.a),w(e.a,{})},me=c("z3d550V",I,(e=>`/${e}&`)(v),ue),be=e=>{y(e.a),W(e.a,{})},fe=c("Q4F02No",_,(e=>`/${e}&`)(T),be);function $e(e){n(e.a)}const xe=(e,t)=>o(e.a,{placeholder:"name",...t,postfixIcon:r({"aria-label":"Clear",content:fe(e)}),prefixIcon:r({content:me(e)})}),he=l("Ohq019T",pe,de,$e,xe),ge=`<evo-input placeholder="name" ...input>
  <@postfixIcon aria-label="Clear">
    <evo-icon-clear-24/>
  </@postfixIcon>
  <@prefixIcon>
    <evo-icon-profile-24/>
  </@prefixIcon>
</evo-input>
`,ve=(e=>`<!>${e}<!>`)(s),Ie=(e=>`b/${e}&b`)(a),Te=e=>{L(e.a),w(e.a,{})},_e=c("iD0MT7Z",I,(e=>`/${e}&`)(v),Te);function Le(e){n(e.a)}const we=(e,t)=>o(e.a,{placeholder:"name",...t,postfixIcon:r({content:_e(e)})}),ye=l("FBaIAuy",ve,Ie,Le,we),We=`<evo-input placeholder="name" ...input>
  <@postfixIcon>
    <evo-icon-profile-24/>
  </@postfixIcon>
</evo-input>
`,Ee=(e=>`<!>${e}<!>`)(s),ke=(e=>`b/${e}&b`)(a),De=e=>{D(e.a),F(e.a,{})},Fe=c("zzyTlgV",k,(e=>`/${e}&`)(E),De);function Ce(e){n(e.a)}const Se=(e,t)=>o(e.a,{placeholder:"email",...t,prefixIcon:r({content:Fe(e)})}),Ae=l("pMj4WtB",Ee,ke,Ce,Se),Me=`<evo-input placeholder="email" ...input>
  <@prefixIcon>
    <evo-icon-mail-24/>
  </@prefixIcon>
</evo-input>
`,Pe=(e=>`<!>${e}<!>`)(s),ze=(e=>`b/${e}&b`)(a),He=e=>{y(e.a),W(e.a,{})},Be=c("LdzfSD5",_,(e=>`/${e}&`)(T),He),Re=c("Rv2EXZo","/mo"),je=c("BGe6WjN","$"),Ne=e=>{D(e.a),F(e.a,{})},Ve=c("occmVsw",k,(e=>`/${e}&`)(E),Ne);function Ue(e){n(e.a)}const qe=(e,t)=>o(e.a,{placeholder:"0.00",...t,prefixIcon:r({content:Ve(e)}),prefixText:r({content:je(e)}),postfixText:r({content:Re(e)}),postfixIcon:r({content:Be(e)})}),Oe=l("JRPHMmn",Pe,ze,Ue,qe),Qe=`<evo-input placeholder="0.00" ...input>
  <@prefixIcon>
    <evo-icon-mail-24/>
  </@prefixIcon>
  <@prefixText>$</@prefixText>
  <@postfixText>/mo</@postfixText>
  <@postfixIcon>
    <evo-icon-clear-24/>
  </@postfixIcon>
</evo-input>
`,rt={title:"form input/evo-input",component:C,parameters:{docs:{description:{component:S}}},argTypes:{value:{controllable:!0,type:"string",control:"text",description:"The value of the input"},inputSize:{type:"string",options:["regular (default)","large"],control:"inline-radio",description:"If large, renders larger sized input."},fluid:{type:"boolean",control:"boolean",description:"Input fills 100% of its container width."},floatingLabel:{type:"string",control:"text",description:"If set then shows this text as the floating label."},floatingLabelStatic:{type:"boolean",control:"boolean",description:'Floating label will _always_ stay in the "up" position'},prefixIcon:{description:"An `<evo-icon-*>` to show before the input. Cannot be used with floatingLabel.","@":{}},prefixText:{description:"Text to show before the input.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},postfixText:{description:"Text to show after the input.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},postfixIcon:{description:"An `<evo-icon-*>` to show after the input. Cannot be used with floatingLabel.","@":{a11yText:{type:"string",control:"text",description:"A descriptive label for the postfix icon button. If set, the icon becomes clickable and wrapped with a `<button>` tag."},"aria-label":{type:"string",control:"text",description:"If present, the icon will be clickable and wrapped with a `<button>` tag"},"<button> attributes":{description:"If `aria-label` is present, all attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},invalid:{type:"boolean",control:"boolean",description:"Indicates a field-level error with red border"},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},p=i(H,B),d=i(U,q),u=i(G,J),m=i(oe,ne),b=i(re,ce),f=i(Ae,Me),$=i(ye,We),x=i(he,ge),h=i(Oe,Qe);p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FloatingLabelTemplate, FloatingLabelCode)",...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FloatingLabelAutocompleteTemplate, FloatingLabelAutocompleteCode)",...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPrefixIconTemplate, WithPrefixIconCode)",...f.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithPostfixIconTemplate, WithPostfixIconCode)",...$.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithBothIconsTemplate, WithBothIconsCode)",...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"buildExtensionTemplate(FullyDecoratedTemplate, FullyDecoratedCode)",...h.parameters?.docs?.source}}};const ct=["Default","WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","WithPrefixIcon","WithPostfixIcon","WithBothIcons","FullyDecorated"];export{p as Default,u as Disabled,m as FloatingLabel,b as FloatingLabelAutocomplete,h as FullyDecorated,x as WithBothIcons,d as WithLabel,$ as WithPostfixIcon,f as WithPrefixIcon,ct as __namedExportsOrder,rt as default};
