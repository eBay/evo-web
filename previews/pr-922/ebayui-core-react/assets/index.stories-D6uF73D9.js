import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i}from"./utils-i55QFFMK.js";import{t as a}from"./component-utils-CjDOSXvC.js";import{n as o}from"./iframe-RezWaW69.js";import{n as s,t as c}from"./ebay-button-B_FEPJ7h.js";import{i as l,n as u,r as d,t as f}from"./notice-content-J_JoAqZc.js";import{n as p,t as m}from"./ebay-icon-attention-filled-16-BrOi0bC1.js";import{i as h,n as g,r as _,t as v}from"./ebay-icon-information-filled-16-izM1NGTm.js";var y,b,x,S;function C(){return(C=t((()=>{y=e(n()),b=e(r()),d(),u(),a(),p(),h(),g(),x={attention:m,confirmation:_,information:v},S=({className:e,status:t=`general`,children:n,hidden:r=!1,"aria-label":a,onNoticeShow:o=()=>{},...s})=>{if((0,y.useEffect)(()=>{r||o()},[r]),r)return null;let c=i(n,l);if(!c)throw Error(`EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice`);let u=t===`general`,d=u?null:x[t];return y.createElement(`div`,{...s,className:(0,b.default)(e,`inline-notice`,{[`inline-notice--${t}`]:!u})},u?null:y.createElement(`span`,{className:`inline-notice__header`},y.createElement(d,{a11yText:a,a11yVariant:`label`})),y.createElement(f,{...c.props,type:`inline`}))};try{S.displayName=`inlinenotice`,S.__docgenInfo={description:``,displayName:`inlinenotice`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-inline-notice/inline-notice.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function w(){return(w=t((()=>{C(),d()})))()}function T(e){let[t,n]=(0,E.useState)(!1);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(s,{onClick:()=>n(!t),children:[t?`Show`:`Hide`,` Notice`]}),(0,D.jsx)(S,{...e,status:`confirmation`,hidden:t,onNoticeShow:O(`Showing`),"aria-label":`Toggle notice`,children:(0,D.jsxs)(l,{children:[(0,D.jsx)(`p`,{children:`Delivered on May 1, 2017`}),(0,D.jsxs)(`p`,{children:[`Tracking number: `,(0,D.jsx)(`a`,{href:`http://www.ebay.com`,children:`93878473859376898908657567`})]})]})})]})}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{E=e(n()),c(),w(),D=o(),{action:O}=__STORYBOOK_MODULE_ACTIONS__,k={title:`notices & tips/ebay-inline-notice`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayInlineNotice, EbayNoticeContent } from "@ebay/ui-core-react/ebay-inline-notice";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/inline-notice";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/inline-notice.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayInlineNotice status="confirmation" aria-label="Confirmation">
    <EbayNoticeContent>
        <p>Delivered on May 1, 2017</p>
    </EbayNoticeContent>
</EbayInlineNotice>
\`\`\``}}},argTypes:{status:{description:`Determines the style and type of notice to be displayed`,control:`text`},"aria-label":{description:`The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.`,control:`text`},hidden:{description:`Determines whether the notice is hidden or not.`,control:`boolean`},onNoticeShow:{description:`A function that is called when the notice is displayed`,action:`onNoticeShow`,table:{category:`Events`}},children:{description:`The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**`,control:`text`}}},A=e=>(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(S,{...e,"aria-label":`General`,children:(0,D.jsx)(l,{children:(0,D.jsx)(`p`,{children:`text message`})})})}),j={render:e=>(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(S,{...e,status:`confirmation`,"aria-label":`Confirmation`,children:(0,D.jsxs)(l,{children:[(0,D.jsx)(`p`,{children:`Delivered on May 1, 2017`}),(0,D.jsxs)(`p`,{children:[`Tracking number: `,(0,D.jsx)(`a`,{href:`http://www.ebay.com`,children:`93878473859376898908657567`})]})]})})}),name:`Confirmation message`},M={render:e=>(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(S,{...e,status:`information`,"aria-label":`Information`,children:(0,D.jsx)(l,{children:(0,D.jsx)(`p`,{children:`Global Shipping Program transaction.`})})})}),name:`Information message`},N={render:e=>(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(S,{...e,status:`attention`,"aria-label":`Attention`,children:(0,D.jsx)(l,{children:(0,D.jsx)(`p`,{children:`Update your credit card.`})})})}),name:`Attention message`},P={render:e=>(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(T,{...e})}),name:`Notice toggle`},F=[`Default`,`ConfirmationMessage`,`InformationMessage`,`AttentionMessage`,`NoticeToggle`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <>
        <EbayInlineNotice {...args} aria-label="General">
            <EbayNoticeContent>
                <p>text message</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="confirmation" aria-label="Confirmation">
                <EbayNoticeContent>
                    <p>Delivered on May 1, 2017</p>
                    <p>
                        Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
                    </p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Confirmation message"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="information" aria-label="Information">
                <EbayNoticeContent>
                    <p>Global Shipping Program transaction.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Information message"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="attention" aria-label="Attention">
                <EbayNoticeContent>
                    <p>Update your credit card.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Attention message"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <NoticeToggleStory {...args} />
        </>,
  name: "Notice toggle"
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as AttentionMessage,j as ConfirmationMessage,A as Default,M as InformationMessage,P as NoticeToggle,F as __namedExportsOrder,k as default};