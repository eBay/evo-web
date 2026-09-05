import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as c}from"./const-element-BfQ4jh6r.js";import{n as l,t as u}from"./ebay-notice-base-DGm8iM5D.js";var d;function f(){return(f=t((()=>{d=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-inline-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-inline-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

This notice should be rendered inline in the page and should not be used at the top of the page.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-inline-notice)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-inline-notice)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-inline-notice/examples)
`})))()}function p(){return(p=t((()=>{})))()}function m(){return(m=t((()=>{p()})))()}var h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{h=o(),m(),l(),g=e(s()),_=e(r()),v=a(),y=e(i()),b=`ab`,x=(0,h.t)(b),(0,v.r)(b,()=>x),S={},x._=(0,_.default)(function(e,t,n,r,i,a){let{status:o=`attention`,class:s,...c}=e;(0,g.default)(u,{...c,class:[`inline-notice--${o}`,s],status:o,prefixClass:`inline-notice`,root:`div`,headerRoot:`span`,mainRoot:`span`,noA11yLabel:!0},t,n,`0`)},{t:b,i:!0},S),x.Component=(0,y.default)(S,x._)})))()}var w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{w=o(),T=e(c()),C(),E=e(s()),D=e(r()),O=a(),k=e(i()),A=`ApFtzf4`,j=(0,w.t)(A),M=(0,T.default)(`p`,null,2).e(`strong`,null,1).t(`Error:`).t(` Please take another look at the following:`),N=(0,T.default)(`p`,null,5).e(`a`,{href:`#`},1).t(`Card number`).t(` , `).e(`a`,{href:`#`},1).t(`Expiration date`).t(` & `).e(`a`,{href:`#`},1).t(`Security code`),(0,O.r)(A,()=>j),P={},j._=(0,D.default)(function(e,t,n,r,i,a){(0,E.default)(x,{...e,renderBody:e=>{e.n(M,r),e.n(N,r)}},t,n,`0`)},{t:A,i:!0},P),j.Component=(0,k.default)(P,j._)})))()}var I;function L(){return(L=t((()=>{I=`<ebay-inline-notice ...input>
    <p>
        <strong>Error:</strong>
         Please take another look at the following:
    </p>
    <p>
        <a href="#">
            Card number
        </a>
        ,
        <a href="#">
            Expiration date
        </a>
         &amp;
        <a href="#">
            Security code
        </a>
    </p>
</ebay-inline-notice>
`})))()}var R,z,B;function V(){return(V=t((()=>{f(),C(),F(),L(),R={title:`notices & tips/ebay-inline-notice`,component:x,parameters:{docs:{description:{component:d}}},argTypes:{status:{table:{defaultValue:{summary:`attention`}},description:`The icon used and status of the noptice`,options:[`attention`,`confirmation`,`information`],type:`select`},icon:{table:{defaultValue:{summary:`default`}},options:[`default`,`none`],type:`select`,description:`matches whatever is specified by the "status", or if none hides icon`},a11yText:{description:`Localized, adding description for the notice for a11y users`}}},z=n(j,I),B=[`Default`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...z.parameters?.docs?.source}}}})))()}V();export{z as Default,B as __namedExportsOrder,R as default};