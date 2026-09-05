import{b as T}from"./utils-DWCsNc5l.js";import{v as c,b as l,_ as d,c as u}from"./defineComponent-B-Bg3Ud2.js";import{_ as E}from"./index-BDnhrurt.js";import{_ as b}from"./render-tag-B9T2mz-j.js";import{_ as f}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-H8W7sR8R.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-BIJMKU4H.js";import"./index-CFEW7sTq.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-D7kkco59.js";import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";const C=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="QuR8gMc",e=c.t(p);l.r(p,()=>e);const h={};e._=d(function(a,i,r,s,y,g){const{status:t="attention",class:k,...x}=a;b(E,{...x,class:[`inline-notice--${t}`,k],status:t,prefixClass:"inline-notice",root:"div",headerRoot:"span",mainRoot:"span",noA11yLabel:!0},i,r,"0")},{t:p,i:!0},h);e.Component=u(h,e._);const m="ApFtzf4",n=c.t(m),w=f("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),v=f("p",null,5).e("a",{href:"#"},1).t("Card number").t(" , ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");l.r(m,()=>n);const _={};n._=d(function(a,i,r,s,y,g){b(e,{...a,renderBody:t=>{t.n(w,s),t.n(v,s)}},i,r,"0")},{t:m,i:!0},_);n.Component=u(_,n._);const D=`<ebay-inline-notice ...input>
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
`,J={title:"notices & tips/ebay-inline-notice",component:e,parameters:{docs:{description:{component:C}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the noptice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"Localized, adding description for the notice for a11y users"}}},o=T(n,D),K=["Default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};export{o as Default,K as __namedExportsOrder,J as default};
