import{b as _,a as V}from"./utils-DWCsNc5l.js";import{t as z}from"./storybook-code-source-CCz6reEH.js";import{_ as i,m as j,a as X}from"./index-BDrSA20w.js";import{v as T,b as f,_ as h,c as v}from"./defineComponent-B-Bg3Ud2.js";import{a as r}from"./attr-tag-Dvq4QMvY.js";import{_ as B}from"./render-tag-B9T2mz-j.js";import"./index-Dc9wtS83.js";import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./preserve-tag-DAN9egP4.js";const F=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-bar-expressive
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v3.1.1
    </span>
</h1>

\`\`\`marko
<ebay-progress-bar-expressive ...input>
    <@message>Hang tight</@message>
    <@message duration=2000>
        We're processing your order
    </@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
\`\`\`

The expressive progress bar can replace our traditional spinner to feel faster during periods of longer loading.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/progress-ebay-progress-bar-expressive)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/progress-ebay-progress-bar-expressive)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-progress-bar-expressive/examples)
`,M="egvXUb2",u=T.t(M);f.r(M,()=>u);const L={};u._=h(function(a,o,t,s,C,k){B(i,r.i(()=>{r.r("message",{duration:2e3,renderBody:e=>{e.t("Display for 2 seconds",s)}}),r.r("message",{duration:3e3,renderBody:e=>{e.t("Display for 3 seconds",s)}}),r.r("message",{duration:4e3,renderBody:e=>{e.t("Display for 4 seconds",s)}})},{...a,message:void 0}),o,t,"0")},{t:M,i:!0},L);u.Component=v(L,u._);const N=`<ebay-progress-bar-expressive ...input>
    <@message duration=2000>
        Display for 2 seconds
    </@message>
    <@message duration=3000>
        Display for 3 seconds
    </@message>
    <@message duration=4000>
        Display for 4 seconds
    </@message>
</ebay-progress-bar-expressive>
`,D="Ohx8XO_",l=T.t(D);f.r(D,()=>l);const H={};l._=h(function(a,o,t,s,C,k){B(i,a,o,t,"0")},{t:D,i:!0},H);l.Component=v(H,l._);const Q=`<ebay-progress-bar-expressive ...input/>
`,E="MMN3DHQ",y=T.t(E);f.r(E,()=>y);const J={};y._=h(function(a,o,t,s,C,k){B(i,r.i(()=>{r.r("message",{renderBody:e=>{e.t("Espera...",s)}}),r.r("message",{duration:2e3,renderBody:e=>{e.t("Estamos procesando tu pedido",s)}}),r.r("message",{renderBody:e=>{e.t("Sólo un momento más",s)}})},{a11yText:"Cargando...",...a,message:void 0}),o,t,"0")},{t:E,i:!0},J);y.Component=v(J,y._);const U=`<ebay-progress-bar-expressive a11yText="Cargando..." ...input>
    <@message>Espera...</@message>
    <@message duration=2000>
        Estamos procesando tu pedido
    </@message>
    <@message>Sólo un momento más</@message>
</ebay-progress-bar-expressive>
`,$="L_TtiJI",b=T.t($);f.r($,()=>b);const w={};b._=h(function(a,o,t,s,C,k){B(i,r.i(()=>{r.r("message",{renderBody:e=>{e.t("Hang tight",s)}}),r.r("message",{renderBody:e=>{e.t("We're processing your order",s)}}),r.r("message",{renderBody:e=>{e.t("Just a moment longer",s)}})},{size:"medium",...a,message:void 0}),o,t,"0")},{t:$,i:!0},w);b.Component=v(w,b._);const Z=`<ebay-progress-bar-expressive size="medium" ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,W="j19SzZL",x=T.t(W);f.r(W,()=>x);const R={};x._=h(function(a,o,t,s,C,k){B(i,r.i(()=>{r.r("message",{renderBody:e=>{e.t("Hang tight",s)}}),r.r("message",{renderBody:e=>{e.t("We're processing your order",s)}}),r.r("message",{renderBody:e=>{e.t("Just a moment longer",s)}})},{...a,message:void 0}),o,t,"0")},{t:W,i:!0},R);x.Component=v(R,x._);const q=`<ebay-progress-bar-expressive ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,I=a=>({input:V(a)}),O=[{renderBody:"Hang tight"},{renderBody:"We're processing your order"},{renderBody:"Just a moment longer"}],te={title:"progress/ebay-progress-bar-expressive",component:i,parameters:{docs:{description:{component:F}},layout:"fullscreen"},argTypes:{a11yText:{control:{type:"text"},description:"Localized, accessible label for the progress bar",table:{defaultValue:{summary:"Loading..."}}},message:{control:{type:"array"},description:`Short messages to display above the progress bar. Specify the renderBody and, optionally, a custom duration. By default, messages display for ${j}ms. When the user prefers reduced motion, each message will display for ${X} times its duration.`,table:{defaultValue:{summary:"[]"}}},size:{type:"enum",control:{type:"select"},options:["large","medium"],description:"Message text size",table:{defaultValue:{summary:"large"}}}}},S=_(l,Q),n=I.bind({});n.args={message:[{renderBody:"We're processing your order"}]};n.parameters={docs:{source:{code:z("ebay-progress-bar-expressive",n.args)}}};const p=_(x,q);p.args={message:O};const m=I.bind({});m.args={message:[{renderBody:"Messages should be one line..."},{renderBody:"Sometimes that's hard to guarantee, though.",duration:2500},{renderBody:"That's okay!"}]};m.parameters={docs:{source:{code:z("ebay-progress-bar-expressive",m.args)}}};const d=_(u,N);d.args={message:[{renderBody:"Display for 2 seconds",duration:2e3},{renderBody:"Display for 3 seconds",duration:3e3},{renderBody:"Display for 4 seconds",duration:4e3}]};const g=_(y,U);g.args={a11yText:"Cargando...",message:[{renderBody:"Espera..."},{renderBody:"Estamos procesando tu pedido",duration:2e3},{renderBody:"Sólo un momento más"}]};const c=_(b,Z);c.args={size:"medium",message:O};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...S.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MessagesTemplate, MessagesTemplateCode)",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomTimingTemplate, CustomTimingTemplateCode)",...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MediumTextTemplate, MediumTextTemplateCode)",...c.parameters?.docs?.source}}};const ne=["Default","WithSingleMessage","WithMessages","WithLongMessage","WithCustomTiming","Localized","MediumSize"];export{S as Default,g as Localized,c as MediumSize,d as WithCustomTiming,m as WithLongMessage,p as WithMessages,n as WithSingleMessage,ne as __namedExportsOrder,te as default};
