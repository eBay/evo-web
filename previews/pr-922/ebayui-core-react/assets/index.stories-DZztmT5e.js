import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i}from"./utils-i55QFFMK.js";import{t as a}from"./component-utils-CjDOSXvC.js";import{n as o}from"./iframe-RezWaW69.js";import{n as s,t as c}from"./ebay-icon-information-16-Cdfx0J24.js";import{i as l,n as u,o as d,t as f}from"./ebay-infotip-wAncS0JK.js";var p,m,h;function g(){return(g=t((()=>{p=e(n()),m=e(r()),h=({ctaText:e,href:t,className:n,...r})=>e?p.createElement(`a`,{...r,className:(0,m.default)(`section-title__cta`,n),href:t},e):null;try{h.displayName=`cta`,h.__docgenInfo={description:``,displayName:`cta`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/cta.tsx`,methods:[],props:{ctaText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-title/cta.tsx`,name:`TypeLiteral`}],description:``,name:`ctaText`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var _,v,y;function b(){return(b=t((()=>{_=e(n()),v=e(r()),a(),L(),g(),y=({href:e,ctaText:t,className:n,children:r,...a})=>{let o=(0,v.default)(n,`section-title`),s=i(r,C),c=i(r,D),l=i(r,j),u=i(r,F);return _.createElement(`div`,{...a,className:o},_.createElement(`div`,{className:`section-title__title-container`},s||_.createElement(C,null,r),c),e&&_.createElement(h,{href:e,ctaText:t})||l||u)};try{y.displayName=`sectiontitle`,y.__docgenInfo={description:``,displayName:`sectiontitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/section-title.tsx`,methods:[],props:{ctaText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-title/section-title.tsx`,name:`TypeLiteral`}],description:``,name:`ctaText`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var x,S,C;function w(){return(w=t((()=>{x=e(n()),S=e(r()),C=({children:e,className:t,...n})=>x.createElement(`h2`,{...n,className:(0,S.default)(t,`section-title__title`)},e);try{C.displayName=`title`,C.__docgenInfo={description:``,displayName:`title`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/title.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D;function O(){return(O=t((()=>{T=e(n()),E=e(r()),D=({children:e,className:t,...n})=>T.createElement(`span`,{...n,className:(0,E.default)(t,`section-title__subtitle`)},e);try{D.displayName=`subtitle`,D.__docgenInfo={description:``,displayName:`subtitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/subtitle.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var k,A,j;function M(){return(M=t((()=>{k=e(n()),A=e(r()),j=({className:e,children:t,...n})=>k.createElement(`div`,{...n,className:(0,A.default)(e,`section-title__info`)},t);try{j.displayName=`info`,j.__docgenInfo={description:``,displayName:`info`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/info.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P,F;function I(){return(I=t((()=>{N=e(n()),P=e(r()),F=({children:e,className:t,...n})=>N.createElement(`div`,{...n,className:(0,P.default)(t,`section-title__overflow`)},e);try{F.displayName=`overflow`,F.__docgenInfo={description:``,displayName:`overflow`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-title/overflow.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function L(){return(L=t((()=>{b(),w(),O(),M(),I()})))()}var R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{n(),f(),L(),s(),R=o(),z={title:`navigation & disclosure/ebay-section-title`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{ctaText:{description:"URL text. Optional content to be displayed next to title. `href` is required when using this attribute.",control:`text`},href:{description:"URL. Title content and optional CTA content will link to this. Populating `cta-text` is optional.",control:`text`},title:{description:`The main title content to be displayed. Title tag is required when using other sub-tags.`,control:`text`},subtitle:{description:`The subtitle content to be displayed`,control:`text`},info:{description:"Placeholder for `<EbayInfotip>` component",control:`text`},overflow:{description:"Placeholder for `<EbayMenuButton>` component",control:`text`}}},B=e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(y,{...e,children:`Default Section Title`})}),V=e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(y,{...e,children:[(0,R.jsx)(C,{children:`Today’s Deals – All With Free Shipping`}),(0,R.jsx)(D,{children:`Plus, guaranteed best prices.`})]})}),H={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(y,{...e,children:(0,R.jsx)(C,{children:`Missing subtitle shouldn't throw`})})}),name:`With Title But W/O Subtitle`},U={render:e=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(y,{...e,href:`https://www.ebay.com`,children:[(0,R.jsx)(C,{children:`Today’s Deals – All With Free Shipping`}),(0,R.jsx)(D,{children:`Plus, guaranteed best prices.`})]}),(0,R.jsxs)(y,{...e,href:`https://www.ebay.com`,ctaText:`See All`,children:[(0,R.jsx)(C,{children:`Today’s Deals – All With Free Shipping`}),(0,R.jsx)(D,{children:`Plus, guaranteed best prices.`})]})]}),name:`With CTA`},W=e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(y,{...e,children:[(0,R.jsx)(C,{children:`Today’s Deals – All With Free Shipping`}),(0,R.jsx)(D,{children:`Plus, guaranteed best prices.`}),(0,R.jsx)(j,{children:(0,R.jsxs)(d,{a11yCloseText:`Dismiss infotip`,"aria-label":`Important information`,pointer:`top-left`,icon:(0,R.jsx)(c,{}),children:[(0,R.jsx)(l,{children:`Important`}),(0,R.jsx)(u,{children:(0,R.jsx)(`p`,{children:`This is some important info`})})]})})]})}),G=[`Default`,`WithSubtitle`,`WithTitleButWOSubtitle`,`WithCta`,`WithInfo`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionTitle {...args}>Default Section Title</EbaySectionTitle>
    </>`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionTitle {...args}>
            <Title>Today’s Deals – All With Free Shipping</Title>
            <Subtitle>Plus, guaranteed best prices.</Subtitle>
        </EbaySectionTitle>
    </>`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionTitle {...args}>
                <Title>Missing subtitle shouldn&apos;t throw</Title>
            </EbaySectionTitle>
        </>,
  name: "With Title But W/O Subtitle"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...W.parameters?.docs?.source}}}})))()}K();export{B as Default,U as WithCta,W as WithInfo,V as WithSubtitle,H as WithTitleButWOSubtitle,G as __namedExportsOrder,z as default};