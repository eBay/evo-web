import{b as i}from"./utils-DyU2_5R1.js";import{b as t,_ as s,f as m,Z as n,S as l}from"./dom-DzaaZrG-.js";import{d as c,b as d,a as p,g as u,f as h,e as f,i as b,$ as g,h as x,c as y,C as _}from"./index-C4sOkACM.js";import"./iframe-W1YmnRsb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0Z7pD5F.js";import"./evo-icon-tick-16-ZQ0iy4Zf.js";import"./index-CSnbFevZ.js";/* empty css             */const C=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-fake-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The dropdown portion of the menu-button. Used to build a list of links which link out to other pages. This can be used to create custom dropdowns.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-evo-fake-menu)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-evo-fake-menu)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-fake-menu/examples)
`,$=c,D=(e=>`/${e}&`)(y),E=t("tjEywg6","item 3"),P=t("zsP3Eag","item 2"),L=t("NW$okPi","item 1 that has very long text");function M(e){g(e.a),x(e.a,n(n(l({href:"#",content:L(e)}),{href:"#",content:P(e)}),{href:"#",content:E(e)}))}const U=m(2,e=>{d(e.a,e.c.class),p(e.a,e.c.classPrefix),u(e.a,e.c.fixWidth),h(e.a,e.c.fixed),f(e.a,e.c.reverse),b(e.a,(({class:v,classPrefix:k,fixWidth:T,fixed:w,item:S,reverse:W,...r})=>r)(e.c))}),H=s("rivr96v",$,D,M,U),N=`<evo-fake-menu ...input>
  <@item href="#">item 1 that has very long text</@item>
  <@item href="#">item 2</@item>
  <@item href="#">item 3</@item>
</evo-fake-menu>
`,R=c,z=(e=>`/${e}&`)(y),A=t("WORybYL","item 4"),O=t("QSg2l52","item 3"),j=t("DNiqpHZ","item 2"),q=t("KBN0TK$","item 1 that has very long text");function B(e){g(e.a),x(e.a,n(n(n(n(l({href:"#",content:q(e)}),{href:"#",content:j(e)}),{separator:!0}),{href:"#",content:O(e)}),{href:"#",content:A(e)}))}const K=m(2,e=>{d(e.a,e.c.class),p(e.a,e.c.classPrefix),u(e.a,e.c.fixWidth),h(e.a,e.c.fixed),f(e.a,e.c.reverse),b(e.a,(({class:v,classPrefix:k,fixWidth:T,fixed:w,item:S,reverse:W,...r})=>r)(e.c))}),Z=s("hcbmGqC",R,z,B,K),G=`<evo-fake-menu ...input>
  <@item href="#">item 1 that has very long text</@item>
  <@item href="#">item 2</@item>
  <@item separator/>
  <@item href="#">item 3</@item>
  <@item href="#">item 4</@item>
</evo-fake-menu>
`,ne={title:"building blocks/evo-fake-menu",component:_,parameters:{docs:{description:{component:C}}},argTypes:{classPrefix:{type:"string",control:"text",description:"A prefix to be added to all classes (used by parent components like menu-button)"},reverse:{type:"boolean",control:"boolean",description:"Whether menu displays in reverse order"},fixed:{type:"boolean",control:"boolean",description:"Whether the menu uses fixed positioning"},fixWidth:{type:"boolean",control:"boolean",description:"Constrain items to the width of the button"},item:{description:'A menu item. Can be a link (`href`) or a button (`type="button"`).',"@":{href:{type:"string",control:"text",description:"URL for the link item. Omit for button items."},type:{type:"string",control:{type:"select"},options:["button","submit"],description:'Set to `"button"` or `"submit"` to render a `<button>` instead of an `<a>`'},current:{type:"boolean",control:"boolean",description:"Whether the item represents the current page (sets `aria-current`)"},itemMatchesUrl:{type:"boolean",control:"boolean",description:'Used with `current`. When `false`, `aria-current` is set to `"true"` instead of `"page"`.'},badgeNumber:{type:"number",control:"number",description:"Number to display in a badge"},disabled:{type:"boolean",control:"boolean",description:"Whether the item is disabled"},separator:{type:"boolean",control:"boolean",description:"When `true`, renders a visual separator instead of a menu item"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},a=i(H,N),o=i(Z,G),ae=["Default","Separator"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorCode)",...o.parameters?.docs?.source}}};export{a as Default,o as Separator,ae as __namedExportsOrder,ne as default};
