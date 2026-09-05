import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{M as n,i as r,k as i,n as a,t as o}from"./dom-CrmgVQ1h.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./evo-details-DEGFH3hX.js";import{a as y,i as b,n as x,r as S,t as C}from"./evo-icon-lightbulb-16-BedfBewO.js";var w;function T(){return(T=e((()=>{w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function E(e){c(e.a,a({content:k(e)})),p(e.a,A(e))}var D,O,k,A,j,M;function N(){return(N=e((()=>{u(),r(),D=f,O=(e=>`/${e}&`)(v),k=n(`LpSFTip`,`Details`),A=n(`f6Prp6j`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),j=i(2,e=>{_(e.a,e.c.alignment),s(e.a,e.c.class),h(e.a,e.c.contentAs),m(e.a,e.c.leading),g(e.a,e.c.size),d(e.a,(({alignment:e,class:t,content:n,contentAs:r,leading:i,size:a,summary:o,...s})=>s)(e.c))}),M=o(`sGQDSnF`,D,O,E,j)})))()}var P;function F(){return(F=e((()=>{P=`<evo-details ...input>
  <@summary>Details</@summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</evo-details>
`})))()}function I(e){c(e.a,a({content:V(e)})),m(e.a,a({content:B(e)})),p(e.a,H(e))}var L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{y(),u(),r(),L=f,R=(e=>`/${e}&`)(v),z=e=>{x(e.a),C(e.a,{})},B=n(`swVi_81`,S,(e=>`/${e}&`)(b),z),V=n(`B4keZ4k`,`Details`),H=n(`V2nph5Q`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),U=i(2,e=>{_(e.a,e.c.alignment),s(e.a,e.c.class),h(e.a,e.c.contentAs),g(e.a,e.c.size),d(e.a,(({alignment:e,class:t,content:n,contentAs:r,leading:i,size:a,summary:o,...s})=>s)(e.c))}),W=o(`e7BuaFJ`,L,R,I,U)})))()}var K;function q(){return(q=e((()=>{K=`<evo-details ...input>
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
`})))()}var J,Y,X,Z;function Q(){return(Q=e((()=>{T(),u(),N(),F(),G(),q(),J={title:`navigation & disclosure/evo-details`,component:l,parameters:{docs:{description:{component:w}}},argTypes:{content:{},leading:{description:`Optional leading element (e.g. an icon) rendered before the summary label`,"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},summary:{description:`The body which will be wrapped as the details summary`,"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},alignment:{type:`string`,options:[`regular (default)`,`center`],control:`inline-radio`,description:`The position of the details`},size:{type:`string`,options:[`regular (default)`,`small`],control:`inline-radio`,description:`Size of the details`},open:{type:`boolean`,controllable:!0,description:`Whether details is open`,table:{defaultValue:{summary:`false`}}},contentAs:{type:`string`,control:`text`,description:"The root element inside the `<details>` that wraps content. Defaults to `<div>`",table:{defaultValue:{summary:`div`}}},"<details> attributes":{description:"All attributes and event handlers from [the native HTML `<details>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) will be passed through"}}},Y=t(M,P),X=t(W,K),Z=[`Default`,`WithLeading`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLeadingTemplate, WithLeadingTemplateCode)`,...X.parameters?.docs?.source}}}})))()}Q();export{Y as Default,X as WithLeading,Z as __namedExportsOrder,J as default};