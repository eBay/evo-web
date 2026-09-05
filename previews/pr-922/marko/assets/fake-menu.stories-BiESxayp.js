import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{M as n,i as r,k as i,n as a,r as o,t as s}from"./dom-CrmgVQ1h.js";import{a as c,c as l,d as u,f as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./evo-fake-menu-DHXyL3lj.js";var b;function x(){return(x=e((()=>{b=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function S(e){l(e.a),h(e.a,o(o(a({href:`#`,content:D(e)}),{href:`#`,content:E(e)}),{href:`#`,content:T(e)}))}var C,w,T,E,D,O,k;function A(){return(A=e((()=>{d(),r(),C=p,w=(e=>`/${e}&`)(y),T=n(`tjEywg6`,`item 3`),E=n(`zsP3Eag`,`item 2`),D=n(`NW$okPi`,`item 1 that has very long text`),O=i(2,e=>{c(e.a,e.c.class),v(e.a,e.c.classPrefix),m(e.a,e.c.fixWidth),g(e.a,e.c.fixed),_(e.a,e.c.reverse),f(e.a,(({class:e,classPrefix:t,fixWidth:n,fixed:r,item:i,reverse:a,...o})=>o)(e.c))}),k=s(`rivr96v`,C,w,S,O)})))()}var j;function M(){return(M=e((()=>{j=`<evo-fake-menu ...input>
  <@item href="#">
    item 1 that has very long text
  </@item>
  <@item href="#">
    item 2
  </@item>
  <@item href="#">
    item 3
  </@item>
</evo-fake-menu>
`})))()}function N(e){l(e.a),h(e.a,o(o(o(o(a({href:`#`,content:z(e)}),{href:`#`,content:R(e)}),{separator:!0}),{href:`#`,content:L(e)}),{href:`#`,content:I(e)}))}var P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{d(),r(),P=p,F=(e=>`/${e}&`)(y),I=n(`WORybYL`,`item 4`),L=n(`QSg2l52`,`item 3`),R=n(`DNiqpHZ`,`item 2`),z=n(`KBN0TK$`,`item 1 that has very long text`),B=i(2,e=>{c(e.a,e.c.class),v(e.a,e.c.classPrefix),m(e.a,e.c.fixWidth),g(e.a,e.c.fixed),_(e.a,e.c.reverse),f(e.a,(({class:e,classPrefix:t,fixWidth:n,fixed:r,item:i,reverse:a,...o})=>o)(e.c))}),V=s(`hcbmGqC`,P,F,N,B)})))()}var U;function W(){return(W=e((()=>{U=`<evo-fake-menu ...input>
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
</evo-fake-menu>
`})))()}var G,K,q,J;function Y(){return(Y=e((()=>{x(),d(),A(),M(),H(),W(),G={title:`building blocks/evo-fake-menu`,component:u,parameters:{docs:{description:{component:b}}},argTypes:{classPrefix:{type:`string`,control:`text`,description:`A prefix to be added to all classes (used by parent components like menu-button)`},reverse:{type:`boolean`,control:`boolean`,description:`Whether menu displays in reverse order`},fixed:{type:`boolean`,control:`boolean`,description:`Whether the menu uses fixed positioning`},fixWidth:{type:`boolean`,control:`boolean`,description:`Constrain items to the width of the button`},item:{description:'A menu item. Can be a link (`href`) or a button (`type="button"`).',"@":{href:{type:`string`,control:`text`,description:`URL for the link item. Omit for button items.`},type:{type:`string`,control:{type:`select`},options:[`button`,`submit`],description:'Set to `"button"` or `"submit"` to render a `<button>` instead of an `<a>`'},current:{type:`boolean`,control:`boolean`,description:"Whether the item represents the current page (sets `aria-current`)"},itemMatchesUrl:{type:`boolean`,control:`boolean`,description:'Used with `current`. When `false`, `aria-current` is set to `"true"` instead of `"page"`.'},badgeNumber:{type:`number`,control:`number`,description:`Number to display in a badge`},disabled:{type:`boolean`,control:`boolean`,description:`Whether the item is disabled`},separator:{type:`boolean`,control:`boolean`,description:"When `true`, renders a visual separator instead of a menu item"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},K=t(k,j),q=t(V,U),J=[`Default`,`Separator`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(SeparatorTemplate, SeparatorCode)`,...q.parameters?.docs?.source}}}})))()}Y();export{K as Default,q as Separator,J as __namedExportsOrder,G as default};