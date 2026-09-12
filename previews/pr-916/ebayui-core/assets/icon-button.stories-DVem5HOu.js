import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./utils-C7m-hPxw.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{n as c,t as l}from"./ebay-icon-button-CHXMQb7X.js";import{n as u,t as d}from"./ebay-menu-24-icon-DZF1BWPc.js";var f,p,m,h,g,_,v,y;function b(){return(b=t((()=>{f=o(),u(),p=e(s()),c(),m=e(r()),h=a(),g=e(i()),_=`dUkH1an`,v=(0,f.t)(_),(0,h.r)(_,()=>v),y={},v._=(0,m.default)(function(e,t,n,r,i,a){(0,p.default)(l,{...e,renderBody:e=>{(0,p.default)(d,{},e,n,`1`)}},t,n,`0`,[[`click`,`emit`,!1,[`click`]],[`escape`,`emit`,!1,[`escape`]],[`focus`,`emit`,!1,[`focus`]],[`blur`,`emit`,!1,[`blur`]]])},{t:_},y),v.Component=(0,g.default)(y,v._)})))()}var x;function S(){return(S=t((()=>{x=`class {}

<ebay-icon-button
    on-click("emit", "click")
    on-escape("emit", "escape")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    ...input
>
    <ebay-menu-24-icon/>
</ebay-icon-button>
`})))()}var C;function w(){return(w=t((()=>{C=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}var T,E,D,O;function k(){return(k=t((()=>{b(),S(),w(),T=e=>({input:n(e)}),E={title:`buttons/ebay-icon-button`,component:v,parameters:{docs:{description:{component:C}}},argTypes:{href:{description:`url for link behaviour (switches to anchor tag)`},disabled:{description:``,table:{category:`Toggles`,defaultValue:{summary:`false`}},control:{type:`boolean`}},size:{description:`alternative size for the icon button`,options:[`small`,`regular`,`large`],control:{type:`select`},table:{defaultValue:{summary:`regular`}}},priority:{options:[`primary`,`secondary`,`tertiary`,`none`],description:`Priority of the button. Toggle the color and border of the button`,table:{defaultValue:{summary:`none`}},type:{category:`Options`}},ariaLabel:{control:{type:`text`},name:`aria-label`,description:`A descriptive label of what the icon button represents`},partiallyDisabled:{name:`partially-disabled`,description:`programmatically disabled, but remains keyboard focusable`,table:{defaultValue:{summary:`false`},category:`Toggles`},control:{type:`boolean`}},badgeNumber:{name:`badge-number`,description:`number to show in badge`,table:{category:`Badge (only with variant=icon)`},type:`number`},badgeAriaLabel:{name:`badge-aria-label`,description:"`aria-label` for badge",table:{category:`Badge`}},transparent:{description:`is icon button is transparent or not`,table:{defaultValue:{summary:`false`},category:`Toggles`},control:{type:`boolean`}},onClick:{action:`on-click`,description:`Triggered on click`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}},onEscape:{action:`on-escape`,description:`Triggered on escape key`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}},onFocus:{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}},onBlur:{action:`on-blur`,description:`Triggered on blur`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }`}}},spread:{control:{type:`object`},description:`Additional attributes being passed to component`,table:{category:`Other`}}}},D=T.bind({}),D.args={href:``,disabled:!1,partiallyDisabled:!1,badgeNumber:0,ariaLabel:`menu`},D.parameters={docs:{source:{code:x}}},O=[`Default`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...D.parameters?.docs?.source}}}})))()}k();export{D as Default,O as __namedExportsOrder,E as default};