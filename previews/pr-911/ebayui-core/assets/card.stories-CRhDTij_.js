import{b as E}from"./utils-DWCsNc5l.js";import{v as h,b,_ as g,d as w,e as Q,p as c,c as y}from"./defineComponent-B-Bg3Ud2.js";import{_ as V}from"./attrs-DH_qbVAN.js";import{_ as l}from"./dynamic-tag-B3Rndxlm.js";import{a as r}from"./attr-tag-Dvq4QMvY.js";import{_ as P}from"./index-CYIdplY6.js";import{_ as s}from"./render-tag-B9T2mz-j.js";import{_ as X}from"./index-Cw3bSwrm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             *//* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";import"./index-eAGEw84U.js";const S="nJPt$zn",n=h.t(S);b.r(S,()=>n);const H={};n._=g(function(o,t,i,a,k,f){const{class:e,layout:j,href:M,aspectRatio:D,image:W,overline:N,title:_,disabled:v,description:R,action:T,...I}=o,C=T?"span":M?"a":"button";t.be(C,w({class:Q(["card",D==="5:4"&&"card--aspect-5-4",D==="16:9"&&"card--aspect-16-9",j==="horizontal"&&"card--horizontal",e]),disabled:C==="button"&&v,type:C==="button"&&"button",href:C==="a"&&(v?"":M),tabindex:v&&-1},c(I)),"0",a,null,4,{onclick:i.d("click",!v&&"emit",!1,["click"])}),t.be("div",{class:"card__media"},"1",a,null,1),t.e("img",V(c(W)),"2",a,0,4),t.ee(),t.be("div",{class:"card__main"},"3",a,null,1),N&&(t.be("div",w({class:"card__overline"},c(N)),"4",a,null,4),l(t,N,null,null,null,null,i,"5"),t.ee()),_&&l(t,_.as||"h3",()=>({class:"card__title",...c(_,["as"])}),L=>{l(L,_,null,null,null,null,i,"7")},null,null,i,"6"),R&&(t.be("div",w({class:"card__description"},c(R)),"8",a,null,4),l(t,R,null,null,null,null,i,"9"),t.ee()),T&&(t.be("div",w({class:"card__action"},c(T)),"10",a,null,4),l(t,T,null,null,null,null,i,"11"),t.ee()),t.ee(),t.ee()},{t:S},H);n.Component=y(H,n._);const F=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-card
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

## Compatibility

This component only works on Marko 5 and later.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/structure-ebay-card)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/structure-ebay-card)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-card/examples)
`,Y="UKhnWuK",d=h.t(Y);b.r(Y,()=>d);const J={};d._=g(function(o,t,i,a,k,f){s(n,r.i(()=>{r.a("image",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",alt:"Card"}),r.a("overline",{renderBody:e=>{s(P,{},e,i,"1"),e.t(" Authenticity Guaranteed",a)}}),r.a("title",{renderBody:e=>{e.t("Authentic Rookie Cards",a)}}),r.a("description",{renderBody:e=>{e.t("Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.",a)}}),r.a("action",{renderBody:e=>{s(X,{priority:"tertiary",fluid:!0,renderBody:j=>{j.t("See Details",a)}},e,i,"2")}})},{...o,image:void 0,overline:void 0,title:void 0,description:void 0,action:void 0}),t,i,"0",[["click","emit",!1,["click"]]])},{t:Y},J);d.Component=y(J,d._);const Z=`class {}
<ebay-card
    on-click("emit", "click")
    ...input
>
    <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Card"/>
    <@overline>
        <ebay-authenticity-guarantee-16-icon/>
        Authenticity Guaranteed
    </@overline>
    <@title>Authentic Rookie Cards</@title>
    <@description>
        Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.
    </@description>
    <@action>
        <ebay-button priority="tertiary" fluid>See Details</ebay-button>
    </@action>
</ebay-card>
`,q="Y0X1Npr",p=h.t(q);b.r(q,()=>p);const K={};p._=g(function(o,t,i,a,k,f){s(n,r.i(()=>{r.a("image",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",alt:"Card"}),r.a("overline",{renderBody:e=>{s(P,{},e,i,"1"),e.t(" Authenticity Guaranteed",a)}}),r.a("title",{renderBody:e=>{e.t("Authentic Rookie Cards",a)}}),r.a("description",{renderBody:e=>{e.t("Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.",a)}})},{href:"https://www.ebay.com",...o,image:void 0,overline:void 0,title:void 0,description:void 0}),t,i,"0",[["click","emit",!1,["click"]]])},{t:q},K);p.Component=y(K,p._);const ee=`class {}
<ebay-card
    on-click("emit", "click")
    href="https://www.ebay.com"
    ...input
>
    <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Card"/>
    <@overline>
        <ebay-authenticity-guarantee-16-icon/>
        Authenticity Guaranteed
    </@overline>
    <@title>Authentic Rookie Cards</@title>
    <@description>
        Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.
    </@description>
</ebay-card>
`,z="QeOJjHr",m=h.t(z);b.r(z,()=>m);const O={};m._=g(function(o,t,i,a,k,f){s(n,r.i(()=>{r.a("image",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",alt:"Card"}),r.a("overline",{renderBody:e=>{s(P,{},e,i,"1"),e.t(" Authenticity Guaranteed",a)}}),r.a("title",{renderBody:e=>{e.t("Authentic Rookie Cards",a)}}),r.a("description",{renderBody:e=>{e.t("Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.",a)}})},{...o,image:void 0,overline:void 0,title:void 0,description:void 0}),t,i,"0",[["click","emit",!1,["click"]]])},{t:z},O);m.Component=y(O,m._);const te=`class {}
<ebay-card
    on-click("emit", "click")
    ...input
>
    <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Card"/>
    <@overline>
        <ebay-authenticity-guarantee-16-icon/>
        Authenticity Guaranteed
    </@overline>
    <@title>Authentic Rookie Cards</@title>
    <@description>
        Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.
    </@description>
</ebay-card>
`,G="ENrc4f3",u=h.t(G);b.r(G,()=>u);const U={};u._=g(function(o,t,i,a,k,f){s(n,r.i(()=>{r.a("image",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",alt:"Card"}),r.a("description",{renderBody:e=>{e.t("Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.",a)}})},{...o,image:void 0,description:void 0}),t,i,"0",[["click","emit",!1,["click"]]])},{t:G},U);u.Component=y(U,u._);const ae=`class {}
<ebay-card
    on-click("emit", "click")
    ...input
>
    <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Card"/>
    <@description>
        Professional-grade rookie cards that appreciate faster than most people's cooking skills and last longer than New Year's resolutions.
    </@description>
</ebay-card>
`,fe={title:"layout/ebay-card",component:n,parameters:{docs:{description:{component:F}}},argTypes:{renderBody:{control:{type:"text"}},layout:{control:{type:"select"},options:["horizontal","vertical"],description:"The layout of the card. The default is vertical. The horizontal option takes up more horizontal space and is better for displaying more information."},href:{control:{type:"text"},description:"The URL to navigate to when the card is clicked. This can only be used in conjunction without a action element"},aspectRatio:{control:{type:"select"},options:["16:9","5:4","default"],description:"The aspect ratio applied to the image."},disabled:{control:{type:"boolean"},description:"True if the card is not clickable"},image:{name:"@image",table:{category:"@attribute tags"},description:"The top image tag. Will be passed as attributes to the <img> tag."},title:{name:"@title",description:"The title element of the card",table:{category:"@attribute tags"}},action:{name:"@action",description:"The action element of the card",table:{category:"@attribute tags"}},overline:{name:"@overline",description:"The overline element of the card. This is generally used for signals rendered above the title.",table:{category:"@attribute tags"}},description:{name:"@description",description:'The description element of the card. This is to render a description below the title in tertiary element. Defaults to <p> tag (use "as" attribute to change).',table:{category:"@attribute tags"}},onClick:{action:"on-click",description:"Triggered when card is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},$=E(d,Z),B=E(p,ee),x=E(m,te),A=E(u,ae);$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"buildExtensionTemplate(AnchorTemplate, AnchorTemplateCode)",...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ButtonTemplate, ButtonTemplateCode)",...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MinimumTemplate, MinimumTemplateCode)",...A.parameters?.docs?.source}}};const _e=["Default","Anchor","Button","Minimum"];export{B as Anchor,x as Button,$ as Default,A as Minimum,_e as __namedExportsOrder,fe as default};
