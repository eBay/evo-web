import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,i as r,j as i,n as a,r as o,t as s}from"./dom-BJr4MHiD.js";import{a as c,c as l,d as ee,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./evo-fake-menu-Dkg431v2.js";var y;function b(){return(b=e((()=>{y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function te(e){l(e.a),m(e.a,o(o(a({href:`#`,content:T(e)}),{href:`#`,content:w(e)}),{href:`#`,content:C(e)}))}var x,S,C,w,T,E,D;function O(){return(O=e((()=>{u(),r(),x=f,S=(e=>`/${e}&`)(v),C=i(`tjEywg6`,`item 3`),w=i(`zsP3Eag`,`item 2`),T=i(`NW$okPi`,`item 1 that has very long text`),E=n(2,e=>{c(e.a,e.c.class),_(e.a,e.c.classPrefix),p(e.a,e.c.fixWidth),h(e.a,e.c.fixed),g(e.a,e.c.reverse),d(e.a,(({class:e,classPrefix:t,fixWidth:n,fixed:r,item:i,reverse:a,...o})=>o)(e.c))}),D=s(`rivr96v`,x,S,te,E)})))()}var k;function A(){return(A=e((()=>{k=`<evo-fake-menu ...input>
  <@item href="#">item 1 that has very long text</@item>
  <@item href="#">item 2</@item>
  <@item href="#">item 3</@item>
</evo-fake-menu>
`})))()}function ne(e){l(e.a),m(e.a,o(o(o(o(a({href:`#`,content:F(e)}),{href:`#`,content:re(e)}),{separator:!0}),{href:`#`,content:P(e)}),{href:`#`,content:N(e)}))}var j,M,N,P,re,F,I,L;function R(){return(R=e((()=>{u(),r(),j=f,M=(e=>`/${e}&`)(v),N=i(`WORybYL`,`item 4`),P=i(`QSg2l52`,`item 3`),re=i(`DNiqpHZ`,`item 2`),F=i(`KBN0TK$`,`item 1 that has very long text`),I=n(2,e=>{c(e.a,e.c.class),_(e.a,e.c.classPrefix),p(e.a,e.c.fixWidth),h(e.a,e.c.fixed),g(e.a,e.c.reverse),d(e.a,(({class:e,classPrefix:t,fixWidth:n,fixed:r,item:i,reverse:a,...o})=>o)(e.c))}),L=s(`hcbmGqC`,j,M,ne,I)})))()}var z;function B(){return(B=e((()=>{z=`<evo-fake-menu ...input>
  <@item href="#">item 1 that has very long text</@item>
  <@item href="#">item 2</@item>
  <@item separator/>
  <@item href="#">item 3</@item>
  <@item href="#">item 4</@item>
</evo-fake-menu>
`})))()}function ie(e){l(e.a),m(e.a,a({href:`/messages`,badgeNumber:3,a11yText:`3 unread items`,content:U(e)})),c(e.a),_(e.a),p(e.a),h(e.a),g(e.a),d(e.a,{})}var V,H,U,W;function G(){return(G=e((()=>{u(),r(),V=f,H=(e=>`/${e}&`)(v),U=i(`bIRm5tb`,`Messages`),W=s(`EYRoB$Z`,V,H,ie)})))()}var K;function q(){return(q=e((()=>{K=`<evo-fake-menu>
  <@item href="/messages" badgeNumber=3 a11yText="3 unread items">
    Messages
  </@item>
</evo-fake-menu>
`})))()}var J,Y,X,Z,Q;function $(){return($=e((()=>{b(),u(),O(),A(),R(),B(),G(),q(),J={title:`building blocks/evo-fake-menu`,component:ee,parameters:{docs:{description:{component:y}}},argTypes:{classPrefix:{type:`string`,control:`text`,description:`A prefix to be added to all classes (used by parent components like menu-button)`},reverse:{type:`boolean`,control:`boolean`,description:`Whether menu displays in reverse order`},fixed:{type:`boolean`,control:`boolean`,description:`Whether the menu uses fixed positioning`},fixWidth:{type:`boolean`,control:`boolean`,description:`Constrain items to the width of the button`},item:{description:'A menu item. Can be a link (`href`) or a button (`type="button"`).',"@":{href:{type:`string`,control:`text`,description:`URL for the link item. Omit for button items.`},type:{type:`string`,control:{type:`select`},options:[`button`,`submit`],description:'Set to `"button"` or `"submit"` to render a `<button>` instead of an `<a>`'},current:{type:`boolean`,control:`boolean`,description:"Whether the item represents the current page (sets `aria-current`)"},itemMatchesUrl:{type:`boolean`,control:`boolean`,description:'Used with `current`. When `false`, `aria-current` is set to `"true"` instead of `"page"`.'},badgeNumber:{type:`number`,control:`number`,description:`Number to display in a badge`},a11yText:{type:`string`,control:`text`,description:`Accessible label for the badge count.`},disabled:{type:`boolean`,control:`boolean`,description:`Whether the item is disabled`},separator:{type:`boolean`,control:`boolean`,description:"When `true`, renders a visual separator instead of a menu item"},"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through to `<@item>`"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},Y=t(D,k),X=t(L,z),Z=t(W,K),Q=[`Default`,`Separator`,`Badged`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(SeparatorTemplate, SeparatorCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BadgedTemplate, BadgedCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Badged,Y as Default,X as Separator,Q as __namedExportsOrder,J as default};