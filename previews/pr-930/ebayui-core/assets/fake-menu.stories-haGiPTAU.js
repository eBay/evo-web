import{b,a as $}from"./utils-DWCsNc5l.js";import{t as M}from"./storybook-code-source-CCz6reEH.js";import{_ as h}from"./index-DtSBqbft.js";import{v as y,b as g,_ as f,c as k}from"./defineComponent-B-Bg3Ud2.js";import{a as r}from"./attr-tag-Dvq4QMvY.js";import{_}from"./render-tag-B9T2mz-j.js";import{_ as a}from"./const-element-Ea3wmYuQ.js";/* empty css             */import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BmRbtDLs.js";import"./index-CiJctCOb.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./style-value-D9hyxyYb.js";import"./of-fallback-DrWEmKV1.js";import"./index-eAGEw84U.js";import"./index-DvCAfrCY.js";const I=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The dropdown portion of the menu-button. Used to build a list of links which link out to other pages. This can be used to create custom dropdowns.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-fake-menu)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-fake-menu)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-fake-menu/examples)
`,x="WK0K86F",s=y.t(x);g.r(x,()=>s);const B={};s._=f(function(c,o,i,t,S,v){_(h,r.i(()=>{r.r("item",{href:"#",current:!0,itemMatchesUrl:!1,renderBody:e=>{e.t("item 1",t)}}),r.r("item",{type:"button",renderBody:e=>{e.t("item 2",t)}}),r.r("item",{href:"#",renderBody:e=>{e.t("item 3",t)}})}),o,i,"0")},{t:x,i:!0},B);s.Component=k(B,s._);const W=`<ebay-fake-menu>
    <@item href="#" current itemMatchesUrl=false>
        item 1
    </@item>
    <@item type="button">
        item 2
    </@item>
    <@item href="#">
        item 3
    </@item>
</ebay-fake-menu>
`,w="UqlYcss",m=y.t(w),D=a("style",null,1).t(`
    span.sprite-flag {
        background-image: url("https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png");
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),U=a("span",{class:"sprite-flag",style:"background-position: 0 -25px"},0),N=a("span",null,1).t("Austria"),R=a("span",{class:"sprite-flag",style:"background-position: 0 -100px"},0),A=a("span",null,1).t("Denmark"),K=a("span",{class:"sprite-flag",style:"background-position: 0 -275px"},0),j=a("span",null,1).t("Norway");g.r(w,()=>m);const C={};m._=f(function(c,o,i,t,S,v){o.n(D,t),_(h,r.i(()=>{r.r("item",{href:"#",renderBody:e=>{e.n(U,t),e.n(N,t)}}),r.r("item",{href:"#",renderBody:e=>{e.n(R,t),e.n(A,t)}}),r.r("item",{href:"#",renderBody:e=>{e.n(K,t),e.n(j,t)}})}),o,i,"1")},{t:w,i:!0},C);m.Component=k(C,m._);const q=`<style>
    span.sprite-flag {
        background-image: url("https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png");
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
</style>

<ebay-fake-menu>
    <@item href="#">
        <span class="sprite-flag" style="background-position: 0 -25px"/>
        <span>Austria</span>
    </@item>
    <@item href="#">
        <span class="sprite-flag" style="background-position: 0 -100px"/>
        <span>Denmark</span>
    </@item>
    <@item href="#">
        <span class="sprite-flag" style="background-position: 0 -275px"/>
        <span>Norway</span>
    </@item>
</ebay-fake-menu>
`,T="fdQWxze",p=y.t(T);g.r(T,()=>p);const E={};p._=f(function(c,o,i,t,S,v){_(h,r.i(()=>{r.r("item",{href:"#",renderBody:e=>{e.t("item 1 that has very long text",t)}}),r.r("item",{href:"#",renderBody:e=>{e.t("item 2",t)}}),r.r("item",{separator:!0}),r.r("item",{href:"#",renderBody:e=>{e.t("item 3",t)}}),r.r("item",{href:"#",renderBody:e=>{e.t("item 4",t)}}),r.r("item",{href:"#",renderBody:e=>{e.t("item 5",t)}})}),o,i,"0")},{t:T,i:!0},E);p.Component=k(E,p._);const z=`<ebay-fake-menu>
    <@item href="#">
        item 1 that has very long text
    </@item>
    <@item href="#">
        item 2
    </@item>
    <@item separator/>
    <@item href="#">
        item 3
    </@item>
    <@item href="#">
        item 4
    </@item>
    <@item href="#">
        item 5
    </@item>
</ebay-fake-menu>
`,P=c=>({input:$(c)}),se={title:"building blocks/ebay-fake-menu",component:h,parameters:{docs:{description:{component:I}}},argTypes:{type:{control:{type:"select"},options:["fake","radio","checkbox"],description:'Can be "fake"/ "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},reverse:{control:{type:"boolean"},description:"Whether menu displays in reverse order"},fixWidth:{control:{type:"boolean"},description:"Constrain items to the width of the button"},fixed:{control:{type:"boolean"},description:"Whether the menu is fixed positioning"},classPrefix:{control:{type:"text"},description:"A prefix to be added to all classes"},item:{name:"@item",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If set to null then will disable item"},itemType:{name:"type",control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},itemMatchesUrl:{type:"boolean",control:{type:"boolean"},description:"used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives aria-current a value of `page`"},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},"badge-number":{controls:{hideNoControlsWarning:!0},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},"aria-label":{controls:{hideNoControlsWarning:!0},description:"Passed as the `aria-label` directly to the badge. Required only if badge number is provided",table:{category:"@item attribute tags"}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},n=P.bind({});n.args={item:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}]};n.parameters={docs:{source:{code:M("ebay-fake-menu",n.args,{item:"item"})}}};const d=b(s,W),l=b(m,q),u=b(p,z),me=["Standard","ItemMatches","Sprites","Separator"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ItemMatchesTemplate, ItemMatchesTemplateCode)",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...u.parameters?.docs?.source}}};export{d as ItemMatches,u as Separator,l as Sprites,n as Standard,me as __namedExportsOrder,se as default};
