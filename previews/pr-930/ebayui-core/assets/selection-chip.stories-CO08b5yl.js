import{t as d}from"./storybook-code-source-CCz6reEH.js";import{a as m}from"./utils-DWCsNc5l.js";import{v as u,b as h,_ as b,d as _,e as y,p as g,c as f}from"./defineComponent-B-Bg3Ud2.js";import{_ as k}from"./dynamic-tag-B3Rndxlm.js";import{_ as x}from"./index-CZk20XcS.js";import{_ as v}from"./render-tag-B9T2mz-j.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             */const C=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class B extends Marko.Component{onCreate(e){this.state={mounted:!1,selected:e.selected||!1}}onMount(){this.state.mounted=!0}handleButtonClick(e){if(!this.input.disabled){const s=!this.state.selected;this.state.selected=s,this.emit("click",{selected:s,originalEvent:e})}}onInput(e){e.selected!==void 0&&(this.state.selected=e.selected)}}const a="lfuY$sb",o=u.t(a);h.r(a,()=>o);const r=B;o._=b(function(n,e,s,i,c,E){const{renderBody:l,selected:S,...p}=n;e.be("button",_({class:y(["selection-chip",c.mounted&&"selection-chip--animated"]),"aria-pressed":c.selected?"true":"false",type:"button"},g(p)),"0",i,null,4,{onclick:s.d("click","handleButtonClick",!1)}),e.be("span",{class:"selection-chip__text"},"1",i,null,1),k(e,l,null,null,null,null,s,"2"),e.ee(),v(x,{class:"selection-chip__trailing"},e,s,"3"),e.ee()},{t:a},r);o.Component=f(r,o._);const w=n=>({input:m(n)}),H={title:"form input/ebay-selection-chip",component:o,parameters:{docs:{description:{component:C}}},argTypes:{renderBody:{control:{type:"text"},description:"Text to be displayed in the chip"},selected:{control:{type:"boolean"},description:"True/false if the chip is selected or not"},onClick:{action:"on-click",description:"Triggered when selection chip is clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, selected }"}}}}},t=w.bind({});t.args={renderBody:"Selection Chip"};t.parameters={docs:{source:{code:d("ebay-selection-chip",t.args)}}};const O=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...t.parameters?.docs?.source}}};export{t as Default,O as __namedExportsOrder,H as default};
