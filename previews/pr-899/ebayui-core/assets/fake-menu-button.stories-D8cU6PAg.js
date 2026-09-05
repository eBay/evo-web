import{t as $}from"./storybook-code-source-CCz6reEH.js";import{b as y,a as I}from"./utils-DWCsNc5l.js";import{v as h,b as f,_ as g,c as x}from"./defineComponent-B-Bg3Ud2.js";import{_ as V}from"./index-Dox9xJtl.js";import{_ as u}from"./render-tag-B9T2mz-j.js";import{a as t}from"./attr-tag-Dvq4QMvY.js";import{_ as b}from"./index-C4AmBNSj.js";import{_ as B}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             *//* empty css                    */import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-B3Rndxlm.js";import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";import"./index-Cw3bSwrm.js";import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";import"./index-n7KuEsog.js";import"./index-CZw0tK3j.js";import"./of-fallback-DrWEmKV1.js";import"./index-DtSBqbft.js";/* empty css             */import"./index-CiJctCOb.js";import"./style-value-D9hyxyYb.js";import"./index-DvCAfrCY.js";import"./dynamic-import-DdmK3sM_.js";import"./index-CNiudnPv.js";import"./index-CJDBRdqY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVXY2btv.js";const L=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A button which shows a menu of links when clicked.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-fake-menu-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-fake-menu-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-fake-menu-button/examples)
`,w="wQwEPBf",s=h.t(w);f.r(w,()=>s);const C={};s._=g(function(a,r,i,o,_,v){u(b,t.i(()=>{t.a("icon",{renderBody:e=>{u(V,{},e,i,"1")}}),t.r("item",{type:"button",renderBody:e=>{e.t("item 1",o)}}),t.r("item",{type:"button",renderBody:e=>{e.t("item 2",o)}}),t.r("item",{type:"button",renderBody:e=>{e.t("item 3",o)}})},{text:"Settings",...a,icon:void 0,item:void 0}),r,i,"0",[["mousedown","emit",!1,["mosuon-mousedown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:w},C);s.Component=x(C,s._);const M=`<!--
*
* Note: Due to limitations in Marko v4, this tag must be within a parent component.
* Below we have added an empty class to force this to be the case.
-->
class {}

<ebay-fake-menu-button
    text="Settings"
    on-mousedown("emit", "mosuon-mousedown")
    on-select("emit", "select")
    on-collapse("emit", "collapse")
    on-expand("emit", "expand")
    ...input
>
    <@icon>
        <ebay-settings-24-icon/>
    </@icon>
    <@item type="button">
        item 1
    </@item>
    <@item type="button">
        item 2
    </@item>
    <@item type="button">
        item 3
    </@item>
</ebay-fake-menu-button>
`,k="r3sxhaI",m=h.t(k),N=B("style",null,1).t(`
    span.custom-label-flag {
        background-image: url("https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png");
        background-position: 0 -25px;
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),z=B("span",{class:"custom-label-flag"},0);f.r(k,()=>m);const S={};m._=g(function(a,r,i,o,_,v){r.n(N,o),u(b,t.i(()=>{t.a("label",{renderBody:e=>{e.n(z,o),e.t(" This is the label you first see",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 1 that has very long text",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 2",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 3",o)}})},{...a,label:void 0,item:void 0}),r,i,"1",[["mousedown","emit",!1,["mousedown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:k,s:!0},S);m.Component=x(S,m._);const D=`<style>
    span.custom-label-flag {
        background-image: url("https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png");
        background-position: 0 -25px;
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
</style>

<ebay-fake-menu-button
    on-mousedown("emit", "mousedown")
    on-select("emit", "select")
    on-collapse("emit", "collapse")
    on-expand("emit", "expand")
    ...input
>
    <@label>
        <span class="custom-label-flag"/>
         This is the label you first see
    </@label>
    <@item href="#">
        item 1 that has very long text
    </@item>
    <@item href="#">
        item 2
    </@item>
    <@item href="#">
        item 3
    </@item>
</ebay-fake-menu-button>
`,T="Koi5pu9",l=h.t(T);f.r(T,()=>l);const E={};l._=g(function(a,r,i,o,_,v){u(b,t.i(()=>{t.r("item",{href:"#",renderBody:e=>{e.t("item 1",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 2",o)}}),t.r("item",{separator:!0}),t.r("item",{href:"#",renderBody:e=>{e.t("item 3",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 4",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 5",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 6",o)}}),t.r("item",{href:"#",renderBody:e=>{e.t("item 7",o)}})},{text:"eBay Menu separator"}),r,i,"0")},{t:T,i:!0},E);l.Component=x(E,l._);const R=`<ebay-fake-menu-button text="eBay Menu separator">
    <@item href="#">
        item 1
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
    <@item href="#">
        item 6
    </@item>
    <@item href="#">
        item 7
    </@item>
</ebay-fake-menu-button>
`,W=a=>({input:I(a)}),ke={title:"buttons/ebay-fake-menu-button",component:b,parameters:{docs:{description:{component:L}}},argTypes:{text:{control:{type:"text"},description:"button text"},transparent:{type:"boolean",control:{type:"boolean"},description:"Transparent button background"},label:{name:"@label",table:{category:"@attribute tags"},description:"Custom label content"},textAlign:{control:{type:"select"},options:["center"],description:"Text alignment within button"},a11yText:{description:"Localized, a11y text for the button, especially for cases without text",control:{type:"text"}},noToggleIcon:{type:"boolean",description:"whether to hide the chevron toggle icon",control:{type:"boolean"}},expanded:{type:"boolean",control:{type:"boolean"},description:"whether content is expanded (Note: not supported as initial attribute)"},reverse:{type:"boolean",control:{type:"boolean"},description:"expand menu flyout to the left"},fixWidth:{type:"boolean",control:{type:"boolean"},description:"constrain items container width to button width"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},size:{control:{type:"select"},options:["large","small","none"],description:'button size, "large", "small" (default: "none")'},priority:{control:{type:"select"},options:["primary","secondary","delete","tertiary","none"],description:'button priority, only used when variant="button"'},disabled:{type:"boolean",control:{type:"boolean"},description:"Will disable the entire dropdown (disables the ebay-button label) if set to true"},variant:{control:{type:"select"},options:["overflow","form","button","icon"],description:'will change the button style, "overflow", "form" or "button. Default is form"'},item:{name:"@item",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If not set for fake type, will also disable the item"},flip:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}},description:"Adds flip to dropdown middleware. This allows the dropdown to flip automatically if it overflows"},strategy:{control:{type:"select"},options:["absolute","fixed"],table:{defaultValue:{summary:"absolute"}},description:"Swap between fixed and absolute positioning strategy. Use fixed when dropdown is in contained in an overflow and needs to be visible as you scroll the screen."},type:{control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},badgeNumber:{description:"used as the number to be placed in the badge",controls:{hideNoControlsWarning:!0},table:{category:"@item attribute tags"}},"aria-label":{controls:{hideNoControlsWarning:!0},description:"Passed as the `aria-label` directly to the badge. Required only if badge number is provided",table:{category:"@item attribute tags"}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onMousedown:{action:"on-mousedown",description:"Triggered on mouse down on menu item",table:{category:"Events",defaultValue:{summary:""}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},n=W.bind({});n.args={item:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}],text:"eBay Menu"};n.parameters={docs:{source:{code:$("ebay-fake-menu-button",n.args)}}};const p=y(s,M),d=y(m,D),c=y(l,R);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(IconTemplate, IconTemplateCode)",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomLabelTemplate, CustomLabelTemplateCode)",...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...c.parameters?.docs?.source}}};const Te=["Standard","IconText","CustomLabelText","Separator"];export{d as CustomLabelText,p as IconText,c as Separator,n as Standard,Te as __namedExportsOrder,ke as default};
