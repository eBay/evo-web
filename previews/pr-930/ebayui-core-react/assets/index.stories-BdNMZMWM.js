var I=Object.defineProperty;var i=(t,a)=>I(t,"name",{value:a,configurable:!0});import{R as e,c}from"./iframe-DXKVC7Wu.js";import{E as v,c as N,b as W}from"./ebay-infotip-content-DSk-LFFi.js";import{f as p}from"./utils-4VXCHhuo.js";import{E as P}from"./ebay-icon-information-16-mizS4od7.js";import"./preload-helper-Cc2_yIPf.js";import"./use-tooltip-QRjquAyh.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./dialog-previous-button-CGrVTs3d.js";import"./index-CSGTE6jH.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./ebay-icon-chevron-left-16-D70GS6Gt.js";import"./lightbox-dialog-C1EaB5Lb.js";import"./floating-ui-Dh-39v5u.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-BiwhiUzw.js";import"./index-JeB-DIMX.js";const f=i(({ctaText:t,href:a,className:o,...l})=>t?e.createElement("a",{...l,className:c("section-title__cta",o),href:a},t):null,"Cta");try{f.displayName="cta",f.__docgenInfo={description:"",displayName:"cta",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/cta.tsx",methods:[],props:{ctaText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-title/cta.tsx",name:"TypeLiteral"}],description:"",name:"ctaText",required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const r=i(({href:t,ctaText:a,className:o,children:l,...T})=>{const E=c(o,"section-title"),S=p(l,n),_=p(l,s),w=p(l,g),x=p(l,h);return e.createElement("div",{...T,className:E},e.createElement("div",{className:"section-title__title-container"},S||e.createElement(n,null,l),_),t&&e.createElement(f,{href:t,ctaText:a})||w||x)},"EbaySectionTitle");try{r.displayName="sectiontitle",r.__docgenInfo={description:"",displayName:"sectiontitle",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/section-title.tsx",methods:[],props:{ctaText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-title/section-title.tsx",name:"TypeLiteral"}],description:"",name:"ctaText",required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const n=i(({children:t,className:a,...o})=>e.createElement("h2",{...o,className:c(a,"section-title__title")},t),"EbaySectionTitleTitle");try{n.displayName="title",n.__docgenInfo={description:"",displayName:"title",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/title.tsx",methods:[],props:{},tags:{}}}catch{}const s=i(({children:t,className:a,...o})=>e.createElement("span",{...o,className:c(a,"section-title__subtitle")},t),"EbaySectionTitleSubtitle");try{s.displayName="subtitle",s.__docgenInfo={description:"",displayName:"subtitle",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/subtitle.tsx",methods:[],props:{},tags:{}}}catch{}const g=i(({className:t,children:a,...o})=>e.createElement("div",{...o,className:c(t,"section-title__info")},a),"EbaySectionTitleInfo");try{g.displayName="info",g.__docgenInfo={description:"",displayName:"info",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/info.tsx",methods:[],props:{},tags:{}}}catch{}const h=i(({children:t,className:a,...o})=>e.createElement("div",{...o,className:c(a,"section-title__overflow")},t),"EbaySectionTitleOverflow");try{h.displayName="overflow",h.__docgenInfo={description:"",displayName:"overflow",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/overflow.tsx",methods:[],props:{},tags:{}}}catch{}const J={title:"navigation & disclosure/ebay-section-title",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import {
    EbaySectionTitle,
    EbaySectionTitleTitle as Title,
    EbaySectionTitleSubtitle as Subtitle
} from "@ebay/ui-core-react/ebay-section-title";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/section-title";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/section-title.css";
\`\`\`

### Basic

\`\`\`jsx
<EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
    <Title>Today's Deals</Title>
    <Subtitle>Plus, guaranteed best prices.</Subtitle>
</EbaySectionTitle>
\`\`\``}}},argTypes:{ctaText:{description:"URL text. Optional content to be displayed next to title. `href` is required when using this attribute.",control:"text"},href:{description:"URL. Title content and optional CTA content will link to this. Populating `cta-text` is optional.",control:"text"},title:{description:"The main title content to be displayed. Title tag is required when using other sub-tags.",control:"text"},subtitle:{description:"The subtitle content to be displayed",control:"text"},info:{description:"Placeholder for `<EbayInfotip>` component",control:"text"},overflow:{description:"Placeholder for `<EbayMenuButton>` component",control:"text"}}},m=i(t=>e.createElement(e.Fragment,null,e.createElement(r,{...t},"Default Section Title")),"Default"),u=i(t=>e.createElement(e.Fragment,null,e.createElement(r,{...t},e.createElement(n,null,"Today’s Deals – All With Free Shipping"),e.createElement(s,null,"Plus, guaranteed best prices."))),"WithSubtitle"),d={render:i(t=>e.createElement(e.Fragment,null,e.createElement(r,{...t},e.createElement(n,null,"Missing subtitle shouldn't throw"))),"render"),name:"With Title But W/O Subtitle"},b={render:i(t=>e.createElement(e.Fragment,null,e.createElement(r,{...t,href:"https://www.ebay.com"},e.createElement(n,null,"Today’s Deals – All With Free Shipping"),e.createElement(s,null,"Plus, guaranteed best prices.")),e.createElement(r,{...t,href:"https://www.ebay.com",ctaText:"See All"},e.createElement(n,null,"Today’s Deals – All With Free Shipping"),e.createElement(s,null,"Plus, guaranteed best prices."))),"render"),name:"With CTA"},y=i(t=>e.createElement(e.Fragment,null,e.createElement(r,{...t},e.createElement(n,null,"Today’s Deals – All With Free Shipping"),e.createElement(s,null,"Plus, guaranteed best prices."),e.createElement(g,null,e.createElement(v,{a11yCloseText:"Dismiss infotip","aria-label":"Important information",pointer:"top-left",icon:e.createElement(P,null)},e.createElement(N,null,"Important"),e.createElement(W,null,e.createElement("p",null,"This is some important info")))))),"WithInfo"),Q=["Default","WithSubtitle","WithTitleButWOSubtitle","WithCta","WithInfo"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionTitle {...args}>Default Section Title</EbaySectionTitle>
    </>`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionTitle {...args}>
            <Title>Today’s Deals – All With Free Shipping</Title>
            <Subtitle>Plus, guaranteed best prices.</Subtitle>
        </EbaySectionTitle>
    </>`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionTitle {...args}>
                <Title>Missing subtitle shouldn&apos;t throw</Title>
            </EbaySectionTitle>
        </>,
  name: "With Title But W/O Subtitle"
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionTitle {...args} href="https://www.ebay.com">
                <Title>Today’s Deals – All With Free Shipping</Title>
                <Subtitle>Plus, guaranteed best prices.</Subtitle>
            </EbaySectionTitle>

            <EbaySectionTitle {...args} href="https://www.ebay.com" ctaText="See All">
                <Title>Today’s Deals – All With Free Shipping</Title>
                <Subtitle>Plus, guaranteed best prices.</Subtitle>
            </EbaySectionTitle>
        </>,
  name: "With CTA"
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionTitle {...args}>
            <Title>Today’s Deals – All With Free Shipping</Title>
            <Subtitle>Plus, guaranteed best prices.</Subtitle>
            <Info>
                <EbayInfotip a11yCloseText="Dismiss infotip" aria-label="Important information" pointer="top-left" icon={<EbayIconInformation16 />}>
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <p>This is some important info</p>
                    </EbayInfotipContent>
                </EbayInfotip>
            </Info>
        </EbaySectionTitle>
    </>`,...y.parameters?.docs?.source}}};export{m as Default,b as WithCta,y as WithInfo,u as WithSubtitle,d as WithTitleButWOSubtitle,Q as __namedExportsOrder,J as default};
