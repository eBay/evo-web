import{b as f}from"./utils-DWCsNc5l.js";import{_ as u}from"./index-BeNpkb6R.js";import{v as b,b as y,_ as g,c as h}from"./defineComponent-B-Bg3Ud2.js";import{_ as $}from"./index-BHIM1ffD.js";import{_ as m}from"./render-tag-B9T2mz-j.js";import{a as d}from"./attr-tag-Dvq4QMvY.js";import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CZw0tK3j.js";import"./index-CL8ZzwFK.js";/* empty css             */const D=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A chip used to toggle between active and inactive states.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-filter-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-filter-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-filter-chip/examples)
`,_="sV9UmaW",i=b.t(_);y.r(_,()=>i);const E={};i._=g(function(o,n,t,a,x,T){m(u,d.i(()=>(d.a("icon",{renderBody:e=>{m($,{},e,t,"1")}}),e=>{e.t("Filter",a)}),{...o,icon:void 0}),n,t,"0",[["click","emit",!1,["click"]]])},{t:_},E);i.Component=h(E,i._);const B=`class {}

<ebay-filter-chip on-click("emit", "click") ...input>
    <@icon>
        <ebay-sneaker-16-icon/>
    </@icon>
    Filter
</ebay-filter-chip>
`,k="HC5_ow2",r=b.t(k);y.r(k,()=>r);const C={};r._=g(function(o,n,t,a,x,T){m(u,d.i(()=>(d.a("image",{alt:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"}),e=>{e.t("Filter",a)}),{variant:"expressive",...o,image:void 0}),n,t,"0",[["click","emit",!1,["click"]]])},{t:k},C);r.Component=h(C,r._);const F=`class {}
<ebay-filter-chip on-click("emit", "click") variant="expressive" ...input>
    <@image
        alt="image"
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"
    />
    Filter
</ebay-filter-chip>
`,v="mDajVHm",s=b.t(v);y.r(v,()=>s);const w={};s._=g(function(o,n,t,a,x,T){m(u,{variant:"menu",...o,renderBody:e=>{e.t("Filter",a)}},n,t,"0",[["click","emit",!1,["click"]]])},{t:v},w);s.Component=h(w,s._);const S=`class {}
<ebay-filter-chip on-click("emit", "click") variant="menu" ...input>
    Filter
</ebay-filter-chip>
`,q={title:"form input/ebay-filter-chip",component:u,parameters:{docs:{description:{component:D}}},argTypes:{renderBody:{control:{type:"text"},description:"Text to be displayed in the chip"},selected:{control:{type:"boolean"},description:"True/false if the chip is selected or not"},variant:{options:["default","expressive","menu"],description:"The variant of the filter. Default and expressive are toggle buttons, while menu turns it into a dropdown.",control:{type:"select"}},icon:{name:"@icon",description:"The leading icon. Only used for default variant",table:{category:"@attribute tags"}},image:{name:"@image",description:"The leading image. Only used for expressive variant",table:{category:"@attribute tags"}},expanded:{control:{type:"boolean"},description:"Only used for menu variant. True/false if the menu is in expanded state or not"},a11ySelectedText:{control:{type:"string"},description:'Localized, for anchor variant: the clipped text to show when the filter is set. Defaults to "- Filter Applied"'},onClick:{action:"on-click",description:"Triggered when selection chip is clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, selected, expanded }"}}}}},c=f(i,B),p=f(s,S),l=f(r,F);c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MenuButtonTemplate, MenuButtonTemplateCode)",...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ExpressiveTemplate, ExpressiveTemplateCode)",...l.parameters?.docs?.source}}};const G=["Default","MenuButton","Expressive"];export{c as Default,l as Expressive,p as MenuButton,G as __namedExportsOrder,q as default};
