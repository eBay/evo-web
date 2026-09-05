import{b as l}from"./utils-DyU2_5R1.js";import{b as o,_ as c,f as d,S as W}from"./dom-BCmBFxnG.js";import{$ as p,a as m,b as u,c as h,d as f,e as g,f as b,g as v,h as T,i as x,j as y,k as C,l as _,m as k,n as w,o as S,p as E,F as j}from"./index-Dii0r4cj.js";import{$ as U,a as q,b as I,c as J}from"./evo-icon-sneaker-16-CUDqJskn.js";import"./iframe-neL4uaf-.js";import"./preload-helper-PPVm8Dsz.js";import"./evo-icon-chevron-down-12-BAP3SM15.js";import"./index-DV0LQG27.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-filter-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A chip used to toggle between active and inactive states.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-filter-chip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-filter-chip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-filter-chip/examples)
`,P=(e=>`<!>${e}<!>`)(E),V=(e=>`b/${e}&b`)(S),X=e=>{I(e.a),J(e.a,{})},G=o("MF6WflJ",q,(e=>`/${e}&`)(U),X),N=o("osQFedD","Filter");function Y(e){_(e.a),k(e.a,W({content:G(e)})),w(e.a,N(e))}const Z=d(2,e=>{p(e.a,e.c.a11ySelectedText),m(e.a,e.c.class),u(e.a,e.c.disabled),h(e.a,e.c.href),f(e.a,e.c.image),g(e.a,e.c.onClick),b(e.a,e.c.open),v(e.a,e.c.openChange),T(e.a,e.c.selected),x(e.a,e.c.selectedChange),y(e.a,e.c.variant),C(e.a,(({a11ySelectedText:t,class:F,content:M,disabled:D,href:$,icon:L,image:B,onClick:z,open:H,openChange:A,selected:O,selectedChange:Q,variant:R,...s})=>s)(e.c))}),ee=c("uLbFHQj",P,V,Y,Z),te=`<evo-filter-chip ...input>
  <@icon>
    <evo-icon-sneaker-16/>
  </@icon>
  Filter
</evo-filter-chip>
`,ae=(e=>`<!>${e}<!>`)(E),ne=(e=>`b/${e}&b`)(S),ie=o("zQ35LP3","Filter");function oe(e){_(e.a),f(e.a,W({alt:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})),w(e.a,ie(e))}const se=d(2,e=>{const t={variant:"expressive",...e.c};p(e.a,t.a11ySelectedText),m(e.a,t.class),u(e.a,t.disabled),h(e.a,t.href),k(e.a,t.icon),g(e.a,t.onClick),b(e.a,t.open),v(e.a,t.openChange),T(e.a,t.selected),x(e.a,t.selectedChange),y(e.a,t.variant),C(e.a,(({a11ySelectedText:F,class:M,content:D,disabled:$,href:L,icon:B,image:z,onClick:H,open:A,openChange:O,selected:Q,selectedChange:R,variant:s,...r})=>r)(t))}),re=c("XACfFsp",ae,ne,oe,se),le=`<evo-filter-chip variant="expressive" ...input>
  <@image
    alt="image"
    src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"/>
  Filter
</evo-filter-chip>
`,ce=(e=>`<!>${e}<!>`)(E),de=(e=>`b/${e}&b`)(S),pe=o("TmiuAK5","Filter");function me(e){_(e.a),w(e.a,pe(e))}const ue=d(2,e=>{const t={variant:"menu",...e.c};p(e.a,t.a11ySelectedText),m(e.a,t.class),u(e.a,t.disabled),h(e.a,t.href),k(e.a,t.icon),f(e.a,t.image),g(e.a,t.onClick),b(e.a,t.open),v(e.a,t.openChange),T(e.a,t.selected),x(e.a,t.selectedChange),y(e.a,t.variant),C(e.a,(({a11ySelectedText:F,class:M,content:D,disabled:$,href:L,icon:B,image:z,onClick:H,open:A,openChange:O,selected:Q,selectedChange:R,variant:s,...r})=>r)(t))}),he=c("vVh42kQ",ce,de,me,ue),fe=`<evo-filter-chip variant="menu" ...input>
  Filter
</evo-filter-chip>
`,ke={title:"form input/evo-filter-chip",component:j,parameters:{docs:{description:{component:K}}},argTypes:{selected:{controllable:!0,type:"boolean",control:"boolean",description:"Selected state of the chip"},variant:{type:"string",options:["default","expressive","menu"],control:"inline-radio",description:"The variant of the filter. Default and expressive are toggle buttons, while menu turns it into a dropdown."},icon:{description:"The leading icon. Only used for default variant","@":{}},image:{description:"The leading image. Only used for expressive variant","@":{"<img> attributes":{description:"All attributes and event handlers from [the native HTML `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`"}}},open:{controllable:!0,type:"boolean",control:"boolean",description:"Only used for menu variant. True/false if the menu is open or not"},a11ySelectedText:{type:"string",control:"text",description:"Localized, for anchor variant: the clipped text to show when the filter is set. This is required to switch to anchor type along with href"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)"}}},a=l(ee,te),n=l(he,fe),i=l(re,le);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MenuButtonTemplate, MenuButtonTemplateCode)",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ExpressiveTemplate, ExpressiveTemplateCode)",...i.parameters?.docs?.source}}};const we=["Default","MenuButton","Expressive"];export{a as Default,i as Expressive,n as MenuButton,we as __namedExportsOrder,ke as default};
