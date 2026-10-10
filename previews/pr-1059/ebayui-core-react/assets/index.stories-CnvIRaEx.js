import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i}from"./utils-i55QFFMK.js";import{t as a}from"./component-utils-CjDOSXvC.js";import{n as o}from"./iframe-BZTwBbaq.js";import{n as s,t as c}from"./ebay-button-oaYeI4Pq.js";import{i as l,n as u,r as d,t as f}from"./notice-content-J_JoAqZc.js";import{n as p,t as m}from"./ebay-icon-attention-filled-16-v62YCZX7.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./ebay-icon-information-filled-16-BRwekzbj.js";var x,S,C,w;function T(){return(T=t((()=>{x=e(n()),S=e(r()),d(),u(),a(),p(),g(),_(),v(),C={attention:m,confirmation:y,information:b,warning:h},w=({className:e,status:t=`general`,children:n,hidden:r=!1,"aria-label":a,onNoticeShow:o=()=>{},...s})=>{if((0,x.useEffect)(()=>{r||o()},[r]),r)return null;let c=i(n,l);if(!c)throw Error(`EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice`);let u=t===`general`,d=u?null:C[t];return x.createElement(`div`,{...s,className:(0,S.default)(e,`inline-notice`,{[`inline-notice--${t}`]:!u})},u?null:x.createElement(`span`,{className:`inline-notice__header`},x.createElement(d,{a11yText:a,a11yVariant:`label`})),x.createElement(f,{...c.props,type:`inline`}))};try{w.displayName=`inlinenotice`,w.__docgenInfo={description:``,displayName:`inlinenotice`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-inline-notice/inline-notice.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function E(){return(E=t((()=>{T(),d()})))()}function D(e){let[t,n]=(0,O.useState)(!1);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(s,{onClick:()=>n(!t),children:[t?`Show`:`Hide`,` Notice`]}),(0,k.jsx)(w,{...e,status:`confirmation`,hidden:t,onNoticeShow:A(`Showing`),"aria-label":`Toggle notice`,children:(0,k.jsxs)(l,{children:[(0,k.jsx)(`p`,{children:`Delivered on May 1, 2017`}),(0,k.jsxs)(`p`,{children:[`Tracking number: `,(0,k.jsx)(`a`,{href:`http://www.ebay.com`,children:`93878473859376898908657567`})]})]})})]})}var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{O=e(n()),c(),E(),k=o(),{action:A}=__STORYBOOK_MODULE_ACTIONS__,j={title:`notices & tips/ebay-inline-notice`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{status:{description:`Determines the style and type of notice to be displayed`,control:`text`},"aria-label":{description:`The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.`,control:`text`},hidden:{description:`Determines whether the notice is hidden or not.`,control:`boolean`},onNoticeShow:{description:`A function that is called when the notice is displayed`,action:`onNoticeShow`,table:{category:`Events`}},children:{description:`The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**`,control:`text`}}},M=e=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(w,{...e,"aria-label":`General`,children:(0,k.jsx)(l,{children:(0,k.jsx)(`p`,{children:`text message`})})})}),N={render:e=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(w,{...e,status:`confirmation`,"aria-label":`Confirmation`,children:(0,k.jsxs)(l,{children:[(0,k.jsx)(`p`,{children:`Delivered on May 1, 2017`}),(0,k.jsxs)(`p`,{children:[`Tracking number: `,(0,k.jsx)(`a`,{href:`http://www.ebay.com`,children:`93878473859376898908657567`})]})]})})}),name:`Confirmation message`},P={render:e=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(w,{...e,status:`information`,"aria-label":`Information`,children:(0,k.jsx)(l,{children:(0,k.jsx)(`p`,{children:`Global Shipping Program transaction.`})})})}),name:`Information message`},F={render:e=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(w,{...e,status:`attention`,"aria-label":`Attention`,children:(0,k.jsx)(l,{children:(0,k.jsx)(`p`,{children:`Update your credit card.`})})})}),name:`Attention message`},I={render:e=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(w,{...e,status:`warning`,"aria-label":`Warning`,children:(0,k.jsx)(l,{children:(0,k.jsx)(`p`,{children:`Your draft will expire soon.`})})})}),name:`Warning message`},L={render:e=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(D,{...e})}),name:`Notice toggle`},R=[`Default`,`ConfirmationMessage`,`InformationMessage`,`AttentionMessage`,`WarningMessage`,`NoticeToggle`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <>
        <EbayInlineNotice {...args} aria-label="General">
            <EbayNoticeContent>
                <p>text message</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="information" aria-label="Information">
                <EbayNoticeContent>
                    <p>Global Shipping Program transaction.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Information message"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="attention" aria-label="Attention">
                <EbayNoticeContent>
                    <p>Update your credit card.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Attention message"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="warning" aria-label="Warning">
                <EbayNoticeContent>
                    <p>Your draft will expire soon.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Warning message"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <NoticeToggleStory {...args} />
        </>,
  name: "Notice toggle"
}`,...L.parameters?.docs?.source}}}})))()}z();export{F as AttentionMessage,N as ConfirmationMessage,M as Default,P as InformationMessage,L as NoticeToggle,I as WarningMessage,R as __namedExportsOrder,j as default};