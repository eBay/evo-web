import{a as c}from"./utils-DWCsNc5l.js";import{v as p,b as m,_ as b,c as u}from"./defineComponent-B-Bg3Ud2.js";import{_ as d}from"./index-H3RQ0YpI.js";import{_ as r}from"./render-tag-B9T2mz-j.js";import{_ as y}from"./index-o98Za02-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             *//* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-B3Rndxlm.js";import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";const a="dUkH1an",t=p.t(a);m.r(a,()=>t);const i={};t._=b(function(o,s,n,_,k,v){r(y,{...o,renderBody:l=>{r(d,{},l,n,"1")}},s,n,"0",[["click","emit",!1,["click"]],["escape","emit",!1,["escape"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]])},{t:a},i);t.Component=u(i,t._);const g=`class {}

<ebay-icon-button
    on-click("emit", "click")
    on-escape("emit", "escape")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    ...input
>
    <ebay-menu-24-icon/>
</ebay-icon-button>
`,f=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-icon
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

This is a circular button with an icon only.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-icon-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-icon-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-icon-button/examples)
`,h=o=>({input:c(o)}),$={title:"buttons/ebay-icon-button",component:t,parameters:{docs:{description:{component:f}}},argTypes:{href:{description:"url for link behaviour (switches to anchor tag)"},disabled:{description:"",table:{category:"Toggles",defaultValue:{summary:"false"}},control:{type:"boolean"}},size:{description:"alternative size for the icon button",options:["small","regular","large"],control:{type:"select"},table:{defaultValue:{summary:"regular"}}},priority:{options:["primary","secondary","tertiary","none"],description:"Priority of the button. Toggle the color and border of the button",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},ariaLabel:{control:{type:"text"},name:"aria-label",description:"A descriptive label of what the icon button represents"},partiallyDisabled:{name:"partially-disabled",description:"programmatically disabled, but remains keyboard focusable",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},badgeNumber:{name:"badge-number",description:"number to show in badge",table:{category:"Badge (only with variant=icon)"},type:"number"},badgeAriaLabel:{name:"badge-aria-label",description:"`aria-label` for badge",table:{category:"Badge"}},transparent:{description:"is icon button is transparent or not",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},e=h.bind({});e.args={href:"",disabled:!1,partiallyDisabled:!1,badgeNumber:0,ariaLabel:"menu"};e.parameters={docs:{source:{code:g}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...e.parameters?.docs?.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,$ as default};
