import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{i as n,j as r,n as i,t as a}from"./dom-BJr4MHiD.js";import{i as o,n as s,r as c,t as l}from"./evo-icon-button-BtjvbuuI.js";import{a as u,i as d,n as f,r as p,t as m}from"./evo-icon-menu-24-BNTclbpl.js";function h(e){l(e.a,{a11yText:`Menu, 3 unread items`,badge:i({number:3}),content:y(e)})}var g,_,v,y,b;function x(){return(x=e((()=>{u(),o(),n(),g=(e=>`<!>${e}<!>`)(s),_=(e=>`b/${e}&b`)(`b%c`),v=e=>{f(e.a),m(e.a,{})},y=r(`BiZIHqu`,p,(e=>`/${e}&`)(d),v),b=a(`y8QO$eK`,g,_,h)})))()}var S;function C(){return(C=e((()=>{S=`<evo-icon-button a11yText="Menu, 3 unread items">
  <@badge number=3/>
  <evo-icon-menu-24/>
</evo-icon-button>
`})))()}var w,T,E,D,O,k;function A(){return(A=e((()=>{u(),o(),n(),w=(e=>`<!>${e}<!>`)(s),T=(e=>`b/${e}&b`)(`b%c`),E=e=>{f(e.a),m(e.a,{})},D=r(`rVusg23`,p,(e=>`/${e}&`)(d),E),O=(e,t)=>l(e.a,{a11yText:`Menu`,...t,content:D(e)}),k=a(`E86Pxgv`,w,T,0,O)})))()}var j;function M(){return(M=e((()=>{j=`<evo-icon-button a11yText="Menu" ...input>
  <evo-icon-menu-24/>
</evo-icon-button>
`})))()}var N;function P(){return(P=e((()=>{N=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-icon-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

This is a circular button with an icon only.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-icon-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-icon-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-icon-button/examples)
`})))()}var F,I,L,R;function z(){return(z=e((()=>{x(),C(),A(),M(),o(),P(),F={title:`buttons/evo-icon-button`,component:c,parameters:{docs:{description:{component:N}}},argTypes:{badge:{description:`An optional badge attached to the button`,"@":{"<evo-badge> attributes":{description:"All attributes and event handlers from [the `<evo-badge>` tag](?path=/docs/graphics-icons-evo-badge--docs) will be passed through to `<@badge>`, _except_ `a11yText`. The a11y label for the badge should be included in `a11yText` for the button."}}},href:{type:`string`,control:`text`,description:"URL for link behavior (switches to `<a>` tag)"},transparent:{type:`boolean`,control:`boolean`,description:`Uses transparent styles for the button.`},size:{options:[`regular (default)`,`small`,`large`],control:`inline-radio`,description:`Alternative size for the icon button`},priority:{options:[`none (default)`,`primary`,`secondary`,`tertiary`],control:`inline-radio`,description:`Priority of the button. Changes color and border.`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:"A descriptive label of what the icon button represents. May be set to `null` only if accessibility is provided through other means."},partiallyDisabled:{type:`boolean`,control:`boolean`,description:`programmatically disabled, but remains keyboard focusable`},onEscape:{action:`onEscape`,description:`Triggered on escape key`,table:{category:`Events`}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for anchor variants)"}}},I=t(k,j),L=t(b,S),R=[`Default`,`WithBadge`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`buildExtensionTemplate(BadgedTemplate, BadgedTemplateCode)`,...L.parameters?.docs?.source}}}})))()}z();export{I as Default,L as WithBadge,R as __namedExportsOrder,F as default};