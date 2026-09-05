import{b as F,a as N}from"./utils-DWCsNc5l.js";import{t as P}from"./storybook-code-source-CCz6reEH.js";import{v as _,b as k,_ as w,d as f,p as h,e as y,c as T}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as g}from"./dynamic-tag-B3Rndxlm.js";import{_ as U}from"./of-fallback-DrWEmKV1.js";import{a as l}from"./attr-tag-Dvq4QMvY.js";import{_ as V}from"./const-element-Ea3wmYuQ.js";import{_ as j}from"./render-tag-B9T2mz-j.js";import"./_commonjsHelpers-Cpj98o6Y.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Tabs which link to other pages. This can be used to deep link to other pages which switch the current tab.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-fake-tabs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-fake-tabs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-video/examples)
`,d="KlMIag7",r=_.t(d);k.r(d,()=>r);const v={};r._=w(function(o,e,i,a,B,C){const{selectedIndex:t=0,class:E,size:S,tab:q=[],tabMatchesCurrentUrl:D,renderBody:$,...A}=o;var I=D===!1?"true":"page";e.be("div",f(h(A),{class:y(["fake-tabs",S==="large"&&"fake-tabs--large",E])}),"0",a,null,4),e.be("ul",{class:"fake-tabs__items"},"1",a,null,1);{let z=0;for(const b of U(q||[])){let p=z++;const u=`[${p}]`,{href:L,...R}=b;var M=t===p;e.be("li",f(h(R),{class:y([b.class,"fake-tabs__item"])}),"2"+u,a,null,4),e.be("a",{"aria-current":M&&I,href:L},"3"+u,a,null,0),g(e,b.renderBody,null,null,null,null,i,"4"+u),e.ee(),e.ee()}}e.ee(),e.be("div",{class:"fake-tabs__content"},"5",a,null,1),e.be("div",{class:"fake-tabs__panel"},"6",a,null,1),e.be("div",{class:"fake-tabs__cell"},"7",a,null,1),e.be("div",null,"8",a,null,0),g(e,$,null,null,null,null,i,"9"),e.ee(),e.ee(),e.ee(),e.ee(),e.ee()},{t:d,i:!0},v);r.Component=T(v,r._);const m="EsYCA58",n=_.t(m),K=V("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.");k.r(m,()=>n);const x={};n._=w(function(o,e,i,a,B,C){j(r,l.i(()=>(l.r("tab",{href:"https://www.ebay.com/",renderBody:t=>{t.t("Tab 1",a)}}),l.r("tab",{renderBody:t=>{t.t("Tab 2",a)}}),l.r("tab",{href:"https://www.ebay.com/",renderBody:t=>{t.t("Tab 3",a)}}),t=>{t.n(K,a)})),e,i,"0")},{t:m,i:!0},x);n.Component=T(x,n._);const O=`<ebay-fake-tabs>
    <@tab href="https://www.ebay.com/">
        Tab 1
    </@tab>
    <@tab>
        Tab 2
    </@tab>
    <@tab href="https://www.ebay.com/">
        Tab 3
    </@tab>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.
    </p>
</ebay-fake-tabs>
`,Y=o=>({input:N(o)}),re={title:"navigation & disclosure/ebay-fake-tabs",component:r,parameters:{docs:{description:{component:H}}},argTypes:{selectedIndex:{control:{type:"number"},description:"0-based index of selected tab tab and panel"},tabMatchesCurrentUrl:{control:{type:"boolean"},description:'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").'},tab:{name:"@tab",table:{category:"@attribute tags"}},size:{type:"select",options:["regular","large"],description:"The size of the tabs"},href:{control:{type:"text"},description:"The link to take the user to for each tab",table:{category:"@tag attributes"}}}},s=Y.bind({});s.args={tab:[{renderBody:"Tab 1",href:"https://www.ebay.com"},{renderBody:"Tab 2",href:"https://www.ebay.com"},{renderBody:"Tab 3",href:"https://www.ebay.com"}],renderBody:"Lorum ipsom dolor"};s.parameters={docs:{source:{code:P("ebay-fake-tabs",s.args,{tabs:"tab"})}}};const c=F(n,O);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTabsTemplate, DisabledTabsCode)",...c.parameters?.docs?.source}}};const ne=["Standard","Disabled"];export{c as Disabled,s as Standard,ne as __namedExportsOrder,re as default};
