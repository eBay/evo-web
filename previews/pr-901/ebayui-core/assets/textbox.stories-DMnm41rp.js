import{t as X}from"./storybook-code-source-CCz6reEH.js";import{_ as s}from"./index-B0g55DpA.js";import{v as c,b as m,_ as p,c as u}from"./defineComponent-B-Bg3Ud2.js";import{_ as K}from"./const-element-Ea3wmYuQ.js";import{_ as a}from"./render-tag-B9T2mz-j.js";import{_ as q,a as D,b as O}from"./index-GeHZQUwQ.js";import{a as l}from"./attr-tag-Dvq4QMvY.js";/* empty css             */import"./index-Qtpjd4O_.js";/* empty css                    */import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-value-D9hyxyYb.js";import"./index-CL8ZzwFK.js";const Y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-textbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A textbox which can be either a simple input or a multiline textarea.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-textbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-textbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-textbox/examples)
`,F="nNgBG46",w=c.t(F),Z=K("label",{class:"field__label field__label--start",for:"textbox"},1).t("Email address");m.r(F,()=>w);const H={};w._=p(function(e,n,t,i,r,b){n.be("span",{class:"field"},"0",i,null,1),n.n(Z,i),a(s,{...e,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:F},H);w.Component=u(H,w._);const S="lrd4LQ3",I=c.t(S),ee=K("label",{class:"field__label field__label--start field__label--disabled",for:"textbox"},1).t("Email address");m.r(S,()=>I);const R={};I._=p(function(e,n,t,i,r,b){n.be("span",{class:"field"},"0",i,null,1),n.n(ee,i),a(s,{...e,disabled:!0,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:S},R);I.Component=u(R,I._);const V="Hhdoygu",C=c.t(V);m.r(V,()=>C);const M={};C._=p(function(e,n,t,i,r,b){a(s,{floatingLabel:"Email address",value:"test",...e},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:V},M);C.Component=u(M,C._);const A="gnMcsS3",T=c.t(A);m.r(A,()=>T);const U={};T._=p(function(e,n,t,i,r,b){a(s,{floatingLabel:"First Name",autocomplete:"given-name"},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),a(s,{floatingLabel:"Last Name",autocomplete:"family-name"},n,t,"1",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),a(s,{floatingLabel:"Email address",autocomplete:"email",placeholder:"valid email address"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:A,s:!0},U);T.Component=u(U,T._);const W="AdxEAsH",E=c.t(W);m.r(W,()=>E);const j={onCreate(){this.state={value:""}},change({value:e,originalEvent:n}){this.state.value=e,this.emit("change",n)},clear(e){this.state.value="",this.emit("button-click",e)}};E._=p(function(e,n,t,i,r,b){a(s,l.i(()=>{l.a("postfixIcon",{renderBody:o=>{a(q,{},o,t,"0")}}),l.a("prefixIcon",{renderBody:o=>{a(D,{},o,t,"1")}})},{value:r.value,buttonAriaLabel:"Clear",placeholder:"name",...e,postfixIcon:void 0,prefixIcon:void 0}),n,t,"@textbox",[["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["change","change",!1],["button-click","clear",!1]])},{t:W},j);E.Component=u(j,E._);const P="ebqmFSy",$=c.t(P);m.r(P,()=>$);const G={};$._=p(function(e,n,t,i,r,b){a(s,l.i(()=>{l.a("postfixIcon",{renderBody:o=>{a(D,{},o,t,"1")}})},{placeholder:"name",...e,postfixIcon:void 0}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:P,s:!0},G);$.Component=u(G,$._);const N="gKzTHfi",L=c.t(N);m.r(N,()=>L);const J={};L._=p(function(e,n,t,i,r,b){a(s,l.i(()=>{l.a("prefixIcon",{renderBody:o=>{a(O,{},o,t,"1")}})},{placeholder:"email",...e,prefixIcon:void 0}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:N,s:!0},J);L.Component=u(J,L._);const z="$KUBtNX",B=c.t(z);m.r(z,()=>B);const Q={};B._=p(function(e,n,t,i,r,b){a(s,l.i(()=>{l.a("prefixIcon",{renderBody:o=>{a(O,{},o,t,"1")}}),l.a("prefixText",{renderBody:o=>{o.t("$",i)}}),l.a("postfixText",{renderBody:o=>{o.t("/mo",i)}}),l.a("postfixIcon",{renderBody:o=>{a(q,{},o,t,"2")}})},{placeholder:"0.00",...e,prefixIcon:void 0,prefixText:void 0,postfixText:void 0,postfixIcon:void 0}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:z,s:!0},Q);B.Component=u(Q,B._);const ne=`import type { Input as TextboxInput } from "<ebay-textbox>";
export type Input = TextboxInput;
class {}

<span class="field">
    <label class="field__label field__label--start" for="textbox">
        Email address
    </label>
    <ebay-textbox
        ...input
        id="textbox"
        value="test"
        on-change("emit", "change")
        on-input-change("emit", "inputChange")
        on-focus("emit", "focus")
        on-blur("emit", "blur")
        on-keypress("emit", "keypress")
        on-keyup("emit", "keyup")
        on-keydown("emit", "keydown")
        on-invalid("emit", "invalid")
        on-floating-label-init("emit", "floating-label-init")
        on-button-click("emit", "button-click")
    />
</span>
`,te=`import type { Input as TextboxInput } from "<ebay-textbox>";
export type Input = TextboxInput;
class {}

<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="textbox"
    >
        Email address
    </label>
    <ebay-textbox
        ...input
        disabled
        id="textbox"
        value="test"
        on-change("emit", "change")
        on-input-change("emit", "inputChange")
        on-focus("emit", "focus")
        on-blur("emit", "blur")
        on-keypress("emit", "keypress")
        on-keyup("emit", "keyup")
        on-keydown("emit", "keydown")
        on-invalid("emit", "invalid")
        on-floating-label-init("emit", "floating-label-init")
        on-button-click("emit", "button-click")
    />
</span>
`,ae=`class {}

<ebay-textbox
    floatingLabel="Email address"
    value="test"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
    ...input
/>
`,oe=`<ebay-textbox
    floating-label="First Name"
    autocomplete="given-name"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
/>

<ebay-textbox
    floating-label="Last Name"
    autocomplete="family-name"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
/>

<ebay-textbox
    floating-label="Email address"
    autocomplete="email"
    placeholder="valid email address"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
/>
`,ie=`import type { TextboxEvent } from "../component-browser";
class {
    declare state: {
        value: string;
    };
    onCreate() {
        this.state = {
            value: "",
        };
    }
    change({ value, originalEvent }: { value: string; originalEvent: Event }) {
        this.state.value = value;
        this.emit("change", originalEvent);
    }
    clear(e: TextboxEvent) {
        this.state.value = "";
        this.emit("button-click", e);
    }
}

<ebay-textbox
    key="textbox"
    value=state.value
    buttonAriaLabel="Clear"
    placeholder="name"
    ...input
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-change("change")
    on-button-click("clear")
>
    <@postfix-icon>
        <ebay-clear-24-icon/>
    </@postfix-icon>
    <@prefix-icon>
        <ebay-profile-24-icon/>
    </@prefix-icon>
</ebay-textbox>
`,le=`<ebay-textbox
    placeholder="name"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
    ...input
>
    <@postfix-icon>
        <ebay-profile-24-icon/>
    </@postfix-icon>
</ebay-textbox>
`,se=`<ebay-textbox
    placeholder="email"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
    ...input
>
    <@prefix-icon>
        <ebay-mail-24-icon/>
    </@prefix-icon>
</ebay-textbox>
`,re=`<ebay-textbox
    placeholder="0.00"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
    ...input
>
    <@prefix-icon>
        <ebay-mail-24-icon/>
    </@prefix-icon>
    <@prefix-text>$</@prefix-text>
    <@postfix-text>/mo</@postfix-text>
    <@postfix-icon>
        <ebay-clear-24-icon/>
    </@postfix-icon>
</ebay-textbox>
`,ce=e=>({input:{...e,renderBody:e.renderBody?n=>{n.html(e.renderBody)}:null}}),Ie={title:"form input/ebay-textbox",component:s,parameters:{docs:{description:{component:Y}}},argTypes:{fluid:{type:"boolean",control:{type:"boolean"}},inputSize:{options:["regular","large"],type:{category:"Options"},description:'either "regular" or "large". If large, then renders larger sized textbox',table:{defaultValue:{summary:"regular"}}},multiline:{type:"boolean",control:{type:"boolean"},description:"renders a multi-line texbox if true"},invalid:{type:"boolean",control:{type:"boolean"},description:"indicates a field-level error with red border if true"},floatingLabel:{description:"If set then shows this text as the floating label.",control:{type:"text"},table:{category:"floating-label",defaultValue:{summary:""}}},opaqueLabel:{description:"Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap",control:{type:"boolean"},table:{category:"floating-label",defaultValue:{summary:"false"}}},floatingLabelStatic:{description:"Only works with floating label. Disables label animation (MakeupJS FloatingLabel not initialized) and enables prefix icon/text rendering. No visible effect unless prefix content is also configured.",control:{type:"boolean"},table:{category:"floating-label",defaultValue:{summary:"false"}}},buttonAriaLabel:{control:{type:"text"},description:"aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`"},prefixIcon:{name:"@prefix-icon",description:"An `<ebay-{name}-icon>` to show as the prefix icon. Cannot be used with floating-label.",table:{category:"@attribute tags"}},postfixIcon:{name:"@postfix-icon",description:"An `<ebay-{name}-icon>` to show as the postfix icon. Cannot be used with floating-label.",table:{category:"@attribute tags"}},prefixText:{name:"@prefix-text",description:"Text to show before the input. Can be used alongside prefix-icon.",table:{category:"@attribute tags"}},postfixText:{name:"@postfix-text",description:"Text to show after the input. Can be used alongside postfix-icon.",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when focus leaves and value is changedf",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onInput-change":{action:"on-input-change",description:"Triggered when the value of the input is changed",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeypress:{action:"on-keypress",description:"Triggered on keypress",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeyup:{action:"on-keyup",description:"Triggered on keup",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onInvalid:{action:"on-invalid",description:"Triggered when value is invalid",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onFloating-label-init":{action:"on-floating-label-init",description:"Triggered when floating label is initialized",table:{category:"Events",defaultValue:{summary:""}}},"onButton-click":{action:"on-button-click",description:"Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},f=e=>({input:e,component:w});f.args={};f.parameters={docs:{source:{code:ne}}};const g=e=>({input:e,component:I});g.args={};g.parameters={docs:{source:{code:te}}};const y=e=>({input:e,component:C});y.args={};y.parameters={docs:{source:{code:ae}}};const k=e=>({input:e,component:T});k.args={};k.parameters={docs:{source:{code:oe}}};const d=ce.bind({});d.args={};d.parameters={docs:{source:{code:X("ebay-textbox",d.args)}}};const x=e=>({input:e,component:L});x.args={};x.parameters={docs:{source:{code:se}}};const h=e=>({input:e,component:$});h.args={};h.parameters={docs:{source:{code:le}}};const v=e=>({input:e,component:E});v.args={};v.parameters={docs:{source:{code:ie}}};const _=e=>({input:e,component:B});_.args={};_.parameters={docs:{source:{code:re}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: FloatingLabelTemplate
})`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: FloatingLabelAutocompleteTemplate
})`,...k.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithPrefixIcon
})`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithPostfixIcon
})`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithBothIcons
})`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: FullyDecoratedTemplate
})`,..._.parameters?.docs?.source}}};const Ce=["WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","Isolated","PrefixIcon","PostfixIcon","BothIcons","FullyDecorated"];export{v as BothIcons,g as Disabled,y as FloatingLabel,k as FloatingLabelAutocomplete,_ as FullyDecorated,d as Isolated,h as PostfixIcon,x as PrefixIcon,f as WithLabel,Ce as __namedExportsOrder,Ie as default};
