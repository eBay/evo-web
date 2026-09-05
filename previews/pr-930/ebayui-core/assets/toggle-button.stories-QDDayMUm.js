import{t as W}from"./storybook-code-source-CCz6reEH.js";import{a as M}from"./utils-DWCsNc5l.js";import{_ as b}from"./index-DUNAbEK8.js";import{v as y,b as h,_ as f,c as _}from"./defineComponent-B-Bg3Ud2.js";import{a as n}from"./attr-tag-Dvq4QMvY.js";import{_ as R}from"./index-x5ly9Bx9.js";import{_ as m}from"./render-tag-B9T2mz-j.js";import{_ as I}from"./const-element-Ea3wmYuQ.js";import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-value-D9hyxyYb.js";import"./index-CL8ZzwFK.js";/* empty css             */const D=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-toggle-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-toggle-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-toggle-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-toggle-button/examples)
`,T="n$h60gp",p=y.t(T);h.r(T,()=>p);const w={};p._=f(function(t,c,r,o,x,v){m(b,n.i(()=>(n.a("subtitle",{renderBody:e=>{e.t("Subtitle",o)}}),n.a("icon",{renderBody:e=>{m(R,{},e,r,"1")}}),e=>{e.t("Title",o)}),{layoutType:"list",...t,subtitle:void 0,icon:void 0}),c,r,"0",[["toggle","emit",!1,["toggle"]]])},{t:T,s:!0},w);p.Component=_(w,p._);const L=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    <@subtitle>Subtitle</@subtitle>
    <@icon>
        <ebay-archive-24-icon/>
    </@icon>
    Title
</ebay-toggle-button>
`,S="R2LjdMv",u=y.t(S);h.r(S,()=>u);const $={};u._=f(function(t,c,r,o,x,v){const{src:e,alt:P,fillPlacement:C,...E}=t;m(b,n.i(()=>(n.a("subtitle",{renderBody:d=>{d.t("Subtitle",o)}}),n.a("img",{src:e,alt:P,fillPlacement:C}),d=>{d.t("Title",o)}),{layoutType:"list",...E,subtitle:void 0,img:void 0}),c,r,"0",[["toggle","emit",!1,["toggle"]]])},{t:S,s:!0},$);u.Component=_($,u._);const j=`export interface Input {
    src: string;
    alt: string;
    fillPlacement: string;
}
$ const { src, alt, fillPlacement, ...buttonInput } = input;
<ebay-toggle-button layoutType="list" ...buttonInput onToggle("emit", "toggle")>
    <@subtitle>Subtitle</@subtitle>
    <@img src=src alt=alt fillPlacement=fillPlacement/>
    Title
</ebay-toggle-button>
`,k="oPJGB7K",g=y.t(k),A=I("p",null,1).t("Subtitle 1"),G=I("p",null,1).t("Subtitle 2");h.r(k,()=>g);const B={};g._=f(function(t,c,r,o,x,v){m(b,n.i(()=>(n.a("subtitle",{renderBody:e=>{e.n(A,o),e.n(G,o)}}),e=>{e.t("Title",o)}),{layoutType:"list",...t,subtitle:void 0}),c,r,"0",[["toggle","emit",!1,["toggle"]]])},{t:k,s:!0},B);g.Component=_(B,g._);const z=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    <@subtitle>
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subtitle>
    Title
</ebay-toggle-button>
`,O=t=>({input:M(t)}),et={title:"buttons/ebay-toggle-button",component:b,parameters:{docs:{description:{component:D}}},argTypes:{renderBody:{control:{type:"text"}},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of the button. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image.'},pressed:{type:"boolean",control:{type:"boolean"},description:"Pressed state of the button"},title:{type:"string",control:{type:"text"},description:"Title attribute for the button"},subtitle:{type:"string|@subtitle",control:{type:"text"},description:"Subtitle attribute for the button"},icon:{name:"@icon",description:"An `<ebay-[name]-icon>` to show as the button's icon",table:{category:"@attribute tags"}},img:{name:"@img",description:"An `<img>` to show as the button's image",table:{category:"@attribute tags"}},subtitleTag:{name:"@subtitle",description:"May be used instead of the `subtitle` attribute for more control. Should contain no more than two brief lines of text",table:{category:"@attribute tags"}},src:{table:{category:"@img attributes"},control:{type:"text"},description:"Link to the image source"},alt:{table:{category:"@img attributes"},control:{type:"text"},description:"Alt text for the image"},fillPlacement:{table:{category:"@img attributes"},control:{type:"text"},description:"Placement of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Using this property will switch the image fit from `contain` to `cover`"},onToggle:{action:"on-toggle",description:"Triggered when the button is toggled",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},a=O.bind({});a.args={renderBody:"Title"};a.parameters={docs:{source:{code:W("ebay-toggle-button",a.args)}}};const i=t=>({input:t,component:p});i.args={};i.parameters={docs:{source:{code:L}}};const s=t=>({input:t,component:u});s.args={layoutType:"gallery",src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",fillPlacement:"top"};s.parameters={docs:{source:{code:j}}};const l=t=>({input:t,component:g});l.args={};l.parameters={docs:{source:{code:z}}};const ot=["Default","WithIcon","WithImage","MultilineSubtitle"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithIconTemplate
})`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithImageTemplate
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: MultilineSubtitleTemplate
})`,...l.parameters?.docs?.source}}};export{a as Default,l as MultilineSubtitle,i as WithIcon,s as WithImage,ot as __namedExportsOrder,et as default};
