import{t as f}from"./storybook-code-source-CCz6reEH.js";import{a as h}from"./utils-DWCsNc5l.js";import{v as k,b as _,_ as x,d as v,p as S,e as w,c as C}from"./defineComponent-B-Bg3Ud2.js";import{_ as B}from"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A button with a label which toggles between unselected and selected when clicked (similarly to a checkbox).

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-filter)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-filter)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-filter/examples)
`;class T extends Marko.Component{handleButtonClick(e){if(!this.input.disabled){const s=!this.state.selected;this.state.selected=s,this.emit("click",{selected:s,originalEvent:e})}}onInput(e){this.state={selected:e.selected||!1}}}const c="JPW2_zn",l=k.t(c);_.r(c,()=>l);const d=T;l._=x(function(o,e,s,a,r,I){const{a11ySelectedText:p,class:b,href:n,renderBody:m,selected:P,useAriaPressed:u,...y}=o;var i=n?"filter-link":"filter-button";const g=n?"a":"button";e.be(g,v(S(y),{class:w([i,`${i}--${r.selected?"selected":"unselected"}`,b]),type:!n&&"button",href:n,"aria-pressed":u!==!1&&!n&&r.selected&&"true"}),"0",a,null,4,{onclick:s.d("click","handleButtonClick",!1)}),e.be("span",{class:`${i}__cell`},"1",a,null,1),e.be("span",null,"2",a,null,0),B(e,m,null,null,null,null,s,"3"),e.ee(),n&&r.selected&&(e.be("span",{class:"clipped",id:s.elId("active-text")},"@active-text",a,null,1),e.t("- ",a),e.t(p||"Selected",a),e.ee()),e.ee(),e.ee()},{t:c},d);l.Component=C(d,l._);const A=o=>({input:h(o)}),j={title:"building blocks/ebay-filter",component:l,parameters:{docs:{description:{component:E}}},argTypes:{href:{control:{type:"text"},description:"for link that looks like a button"},disabled:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},useAriaPressed:{control:{type:"boolean"},description:"defaults to `true`"},a11ySelectedText:{control:{type:"text"},description:'Localized, defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:"when using fake filters"}},onClick:{action:"on-click",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, checked, originalEvent }"}}}}},t=A.bind({});t.args={renderBody:"text",useAriaPressed:!0};t.parameters={docs:{source:{code:f("ebay-filter",t.args)}}};const D=["Standard"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...t.parameters?.docs?.source}}};export{t as Standard,D as __namedExportsOrder,j as default};
