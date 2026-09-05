import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{t as r}from"./utils-C7m-hPxw.js";import{c as i,h as a,l as o,n as s,r as c,s as l,t as u,u as d}from"./registry-95LfxIAE.js";import{t as f}from"./render-tag-hXgrwudm.js";import{t as p}from"./dynamic-tag-CCbAf3a9.js";import{n as m,t as h}from"./ebay-close-12-icon-PwO1-QQp.js";var g;function _(){return(_=t((()=>{g=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-selection-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A chip used to toggle between active and inactive states.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-selection-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-selection-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-selection-chip/examples)
`})))()}function v(){return(v=t((()=>{})))()}function y(){return(y=t((()=>{v()})))()}var b;function x(){return(x=t((()=>{b=class extends Marko.Component{onCreate(e){this.state={mounted:!1,selected:e.selected||!1}}onMount(){this.state.mounted=!0}handleButtonClick(e){if(!this.input.disabled){let t=!this.state.selected;this.state.selected=t,this.emit(`click`,{selected:t,originalEvent:e})}}onInput(e){e.selected!==void 0&&(this.state.selected=e.selected)}}})))()}var S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{S=d(),y(),i(),C=e(p()),m(),w=e(f()),T=e(a()),E=e(l()),x(),D=e(s()),O=u(),k=e(c()),A=`Ab`,j=(0,S.t)(A),(0,O.r)(A,()=>j),M=b,j._=(0,D.default)(function(e,t,n,r,i,a){let{renderBody:s,selected:c,...l}=e;t.be(`button`,(0,E.default)({class:(0,T.default)([`selection-chip`,i.mounted&&`selection-chip--animated`]),"aria-pressed":i.selected?`true`:`false`,type:`button`},o(l)),`0`,r,null,4,{onclick:n.d(`click`,`handleButtonClick`,!1)}),t.be(`span`,{class:`selection-chip__text`},`1`,r,null,1),(0,C.default)(t,s,null,null,null,null,n,`2`),t.ee(),(0,w.default)(h,{class:`selection-chip__trailing`},t,n,`3`),t.ee()},{t:A},M),j.Component=(0,k.default)(M,j._)})))()}var P,F,I,L;function R(){return(R=t((()=>{_(),N(),P=e=>({input:r(e)}),F={title:`form input/ebay-selection-chip`,component:j,parameters:{docs:{description:{component:g}}},argTypes:{renderBody:{control:{type:`text`},description:`Text to be displayed in the chip`},selected:{control:{type:`boolean`},description:`True/false if the chip is selected or not`},onClick:{action:`on-click`,description:`Triggered when selection chip is clicked`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, selected }`}}}}},I=P.bind({}),I.args={renderBody:`Selection Chip`},I.parameters={docs:{source:{code:n(`ebay-selection-chip`,I.args)}}},L=[`Default`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...I.parameters?.docs?.source}}}})))()}R();export{I as Default,L as __namedExportsOrder,F as default};