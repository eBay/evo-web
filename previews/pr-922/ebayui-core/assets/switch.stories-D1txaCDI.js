import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as c}from"./const-element-BfQ4jh6r.js";import{n as l,t as u}from"./ebay-switch-D-Igpo11.js";var d;function f(){return(f=t((()=>{d=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-switch
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-switch)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-switch)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-switch/examples)
`})))()}var p,m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{p=o(),m=e(c()),l(),h=e(s()),g=e(r()),_=a(),v=e(i()),y=`CPah$TH`,b=(0,p.t)(y),x=(0,m.default)(`label`,{class:`field__label field__label--start`,for:`switch`},1).t(`Option`),(0,_.r)(y,()=>b),S={},b._=(0,g.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),t.n(x,r),(0,h.default)(u,{...e,id:`switch`},t,n,`2`,[[`change`,`emit`,!1,[`change`]]]),t.ee()},{t:y},S),b.Component=(0,v.default)(S,b._)})))()}var w,T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{w=o(),T=e(c()),l(),E=e(s()),D=e(r()),O=a(),k=e(i()),A=`sCZCvPz`,j=(0,w.t)(A),M=(0,T.default)(`label`,{class:`field__label field__label--start field__label--disabled`,for:`switch`},1).t(`Option`),(0,O.r)(A,()=>j),N={},j._=(0,D.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),t.n(M,r),(0,E.default)(u,{...e,disabled:!0,id:`switch`},t,n,`2`,[[`change`,`emit`,!1,[`change`]]]),t.ee()},{t:A},N),j.Component=(0,k.default)(N,j._)})))()}var F;function I(){return(I=t((()=>{F=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;
class {}

<span class="field">
    <label class="field__label field__label--start" for="switch">
        Option
    </label>
    <ebay-switch ...input id="switch" on-change("emit", "change")/>
</span>
`})))()}var L;function R(){return(R=t((()=>{L=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;
class {}

<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="switch"
    >
        Option
    </label>
    <ebay-switch ...input disabled id="switch" on-change("emit", "change")/>
</span>
`})))()}var z,B,V,H,U,W;function G(){return(G=t((()=>{f(),l(),C(),P(),I(),R(),z=e=>({input:e}),B={title:`form input/ebay-switch`,component:u,parameters:{docs:{description:{component:d}}},argTypes:{onChange:{action:`on-change`,description:`Triggered on change`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value, checked }`}}}}},V=e=>({input:e,component:b}),V.args={},V.parameters={docs:{source:{code:F}}},H=e=>({input:e,component:j}),H.args={},H.parameters={docs:{source:{code:L}}},U=z.bind({}),U.args={},U.parameters={docs:{source:{code:n(`ebay-switch`,U.args)}}},W=[`WithLabel`,`Disabled`,`Isolated`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args
})`,...U.parameters?.docs?.source}}}})))()}G();export{H as Disabled,U as Isolated,V as WithLabel,W as __namedExportsOrder,B as default};