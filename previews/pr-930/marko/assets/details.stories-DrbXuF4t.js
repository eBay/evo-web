import{b as s}from"./utils-DyU2_5R1.js";import{b as t,_ as l,f as r,S as o}from"./dom-DzaaZrG-.js";import{$ as u,a as d,b as m,c,d as p,e as g,f as b,g as h,h as f,i as v,j as y,D as _}from"./index-D7eCJID5.js";import{$ as E,a as S,b as z,c as k}from"./evo-icon-lightbulb-16-D41H2dES.js";import"./iframe-W1YmnRsb.js";import"./preload-helper-PPVm8Dsz.js";import"./controllable-open.feat-DMAF1Hoc.js";import"./evo-icon-chevron-down-16-CYThcKDz.js";import"./index-CSnbFevZ.js";const W=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-details
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Details component which expands and collapses extra text on click

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-details)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-details)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-details/examples)
`,A=u,U=(e=>`/${e}&`)(y),C=t("LpSFTip","Details"),H=t("f6Prp6j","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");function M(e){h(e.a),f(e.a,o({content:C(e)})),v(e.a,H(e))}const R=r(2,e=>{d(e.a,e.c.alignment),m(e.a,e.c.class),c(e.a,e.c.contentAs),p(e.a,e.c.leading),g(e.a,e.c.size),b(e.a,(({alignment:x,class:T,content:D,contentAs:q,leading:w,size:$,summary:L,...n})=>n)(e.c))}),V=l("sGQDSnF",A,U,M,R),j=`<evo-details ...input>
  <@summary>Details</@summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</evo-details>
`,B=u,F=(e=>`/${e}&`)(y),O=e=>{z(e.a),k(e.a,{})},Q=t("swVi_81",S,(e=>`/${e}&`)(E),O),G=t("B4keZ4k","Details"),I=t("V2nph5Q","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");function J(e){h(e.a),f(e.a,o({content:G(e)})),p(e.a,o({content:Q(e)})),v(e.a,I(e))}const P=r(2,e=>{d(e.a,e.c.alignment),m(e.a,e.c.class),c(e.a,e.c.contentAs),g(e.a,e.c.size),b(e.a,(({alignment:x,class:T,content:D,contentAs:q,leading:w,size:$,summary:L,...n})=>n)(e.c))}),Z=l("e7BuaFJ",B,F,J,P),K=`<evo-details ...input>
  <@summary>Details</@summary>
  <@leading>
    <evo-icon-lightbulb-16/>
  </@leading>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</evo-details>
`,se={title:"navigation & disclosure/evo-details",component:_,parameters:{docs:{description:{component:W}}},argTypes:{content:{},leading:{description:"Optional leading element (e.g. an icon) rendered before the summary label","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},summary:{description:"The body which will be wrapped as the details summary","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},alignment:{type:"string",options:["regular (default)","center"],control:"inline-radio",description:"The position of the details"},size:{type:"string",options:["regular (default)","small"],control:"inline-radio",description:"Size of the details"},open:{type:"boolean",controllable:!0,description:"Whether details is open",table:{defaultValue:{summary:"false"}}},contentAs:{type:"string",control:"text",description:"The root element inside the `<details>` that wraps content. Defaults to `<div>`",table:{defaultValue:{summary:"div"}}},"<details> attributes":{description:"All attributes and event handlers from [the native HTML `<details>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) will be passed through"}}},a=s(V,j),i=s(Z,K),le=["Default","WithLeading"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLeadingTemplate, WithLeadingTemplateCode)",...i.parameters?.docs?.source}}};export{a as Default,i as WithLeading,le as __namedExportsOrder,se as default};
