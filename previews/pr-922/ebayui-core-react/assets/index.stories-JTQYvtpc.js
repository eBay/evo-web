import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i}from"./utils-i55QFFMK.js";import{n as a}from"./iframe-RezWaW69.js";import{t as o}from"./utils-BI15M-bA.js";import{n as s,t as c}from"./ebay-icon-close-16-B2UHelCO.js";import{i as l,n as u,r as d,t as f}from"./notice-content-J_JoAqZc.js";import{i as p,n as m,r as h,t as g}from"./notice-footer-CS_GMqge.js";import{n as _,t as v}from"./ebay-icon-attention-filled-16-BrOi0bC1.js";import{i as y,n as b,r as x,t as S}from"./ebay-icon-information-filled-16-izM1NGTm.js";import{n as C,t as w}from"./notice-cta-BfoOyizW.js";var T,E,D,O;function k(){return(k=t((()=>{T=e(n()),E=e(r()),u(),d(),z(),o(),s(),_(),y(),b(),D={attention:v,confirmation:x,information:S},O=({id:e,status:t=`general`,children:n,a11yDismissText:r,"aria-label":a,onDismiss:o=()=>{},className:s,...u})=>{let[d,p]=(0,T.useState)(!1),m=i(n,l);if(!m)throw Error(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`);let h=e=>{p(!0),o(e)},g=t===`general`?null:D[t];return d?null:T.createElement(`section`,{...u,"aria-label":t===`general`?a:void 0,"aria-labelledby":t===`general`?void 0:e||`${t}-status`,className:(0,E.default)(`page-notice`,s,{[`page-notice--${t}`]:t!==`general`})},t===`general`?null:T.createElement(`div`,{className:`page-notice__header`,id:e||`${t}-status`},T.createElement(g,{a11yText:a,a11yVariant:`label`})),T.createElement(f,{...m.props,type:`page`}),n,r&&T.createElement(P,null,T.createElement(`button`,{"aria-label":r,className:`fake-link page-notice__dismiss`,onClick:h},T.createElement(c,null))))};try{O.displayName=`pagenotice`,O.__docgenInfo={description:``,displayName:`pagenotice`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice.tsx`,methods:[],props:{status:{defaultValue:{value:`general`},declarations:[{fileName:`ebayui-core-react/src/ebay-page-notice/page-notice.tsx`,name:`TypeLiteral`}],description:``,name:`status`,required:!1,tags:{},type:{name:`PageNoticeStatus | undefined`}},a11yDismissText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-page-notice/page-notice.tsx`,name:`TypeLiteral`}],description:``,name:`a11yDismissText`,required:!1,tags:{},type:{name:`string | undefined`}},onDismiss:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-page-notice/page-notice.tsx`,name:`TypeLiteral`}],description:``,name:`onDismiss`,required:!1,tags:{},type:{name:`(MouseEventHandler & KeyboardEventHandler) | undefined`}}},tags:{}}}catch{}})))()}var A,j;function M(){return(M=t((()=>{A=e(n()),p(),j=({className:e,as:t,children:n,...r})=>A.createElement(h,{...r,className:e,as:t,type:`page`},n);try{j.displayName=`pagenoticetitle`,j.__docgenInfo={description:``,displayName:`pagenoticetitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice-title.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P;function F(){return(F=t((()=>{N=e(n()),m(),P=({className:e,children:t})=>N.createElement(g,{className:e,type:`page`},t);try{P.displayName=`pagenoticefooter`,P.__docgenInfo={description:``,displayName:`pagenoticefooter`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice-footer.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-page-notice/page-notice-footer.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var I,L;function R(){return(R=t((()=>{I=e(n()),C(),L=({className:e,children:t})=>I.createElement(w,{className:e,type:`page`},t);try{L.displayName=`pagenoticecta`,L.__docgenInfo={description:``,displayName:`pagenoticecta`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice-cta.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-page-notice/page-notice-cta.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function z(){return(z=t((()=>{k(),M(),F(),R(),d()})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=t((()=>{n(),z(),B=a(),{action:V}=__STORYBOOK_MODULE_ACTIONS__,H={title:`notices & tips/ebay-page-notice`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Import

\`\`\`jsx harmony
import {
    EbayPageNotice,
    EbayNoticeContent,
    EbayPageNoticeTitle,
    EbayPageNoticeFooter,
    EbayPageNoticeCTA,
} from "@ebay/ui-core-react/ebay-page-notice";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/page-notice";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/page-notice.css";
@import "@ebay/skin/icon.css";
\`\`\``}}},argTypes:{status:{description:`Determines the style and type of notice to be displayed`,control:`text`},"aria-label":{description:`The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.`,control:`text`},children:{description:`The content to be displayed within the notice`,control:`text`},a11yDismissText:{description:`Determines if the notice will have a dismiss button. Acts as the aria-label for the dismiss button. Should not be used with a footer.`,control:`text`},onDismiss:{description:`Triggered on notice dismiss`,action:`onDismiss`,table:{category:`Events`,defaultValue:{summary:`(Event)`}}}}},U=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(O,{...e,"aria-label":`Default`,children:(0,B.jsx)(l,{children:`text message`})})}),W=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(O,{...e,status:`confirmation`,"aria-label":`Success`,id:`main-page-notice`,children:(0,B.jsx)(l,{children:`text message`})})}),G=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(O,{...e,status:`confirmation`,"aria-label":`Success`,children:(0,B.jsxs)(l,{children:[(0,B.jsx)(j,{children:`Congrats!`}),(0,B.jsxs)(`p`,{children:[`You just listed `,(0,B.jsx)(`a`,{href:`#link`,children:`Spam and Eggs From the Cows Perspective`}),` (paperback).`]})]})})}),K=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(O,{...e,status:`information`,"aria-label":`Information`,children:(0,B.jsxs)(l,{children:[(0,B.jsx)(j,{children:`Good news!`}),(0,B.jsxs)(`p`,{children:[`You get free shipping on your next pair of shoes! `,(0,B.jsx)(`a`,{href:`#link`,children:`Learn more`}),`.`]})]})})}),q=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(O,{...e,status:`attention`,"aria-label":`Attention`,children:(0,B.jsxs)(l,{children:[(0,B.jsx)(j,{children:`Error.`}),(0,B.jsxs)(`p`,{children:[`Please take another look at the following:`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`a`,{href:`#link`,children:`Card number`}),`, `,(0,B.jsx)(`a`,{href:`#link`,children:`Expiration date`}),` &`,` `,(0,B.jsx)(`a`,{href:`#link`,children:`Security code`}),`.`]})]})})}),J=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(O,{...e,status:`confirmation`,"aria-label":`Congratulations`,children:[(0,B.jsxs)(l,{children:[(0,B.jsx)(j,{children:`Your order's in!`}),(0,B.jsx)(`p`,{children:`We'll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.`})]}),(0,B.jsx)(P,{children:(0,B.jsx)(`a`,{href:`https://ebay.com`,children:`Action`})})]})}),Y=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(O,{...e,status:`information`,"aria-label":`Information`,a11yDismissText:`Close`,onDismiss:e=>V(`onDismiss`)(e),children:(0,B.jsxs)(l,{children:[(0,B.jsx)(j,{children:`Good news!`}),(0,B.jsxs)(`p`,{children:[`You get free shipping on your next pair of shoes! `,(0,B.jsx)(`a`,{href:`#link`,children:`Learn more`}),`.`]})]})})}),X=e=>(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(O,{...e,status:`information`,"aria-label":`Congratulations`,a11yDismissText:`Close`,children:[(0,B.jsxs)(l,{children:[(0,B.jsx)(j,{children:`Your order's in!`}),(0,B.jsx)(`p`,{children:`We'll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.`})]}),(0,B.jsx)(L,{children:(0,B.jsx)(`a`,{href:`https://ebay.com`,children:`Action`})})]})}),Z=[`SimpleUsage`,`SimpleUsageWithId`,`ConfirmationMessage`,`InformationMessage`,`AttentionMessage`,`MessageWithFooter`,`DismissibleNotice`,`DismissibleMessageWithCta`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} aria-label="Default">
            <EbayNoticeContent>text message</EbayNoticeContent>
        </EbayPageNotice>
    </>`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="confirmation" aria-label="Success" id="main-page-notice">
            <EbayNoticeContent>text message</EbayNoticeContent>
        </EbayPageNotice>
    </>`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="confirmation" aria-label="Success">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Congrats!</EbayPageNoticeTitle>
                <p>
                    You just listed <a href="#link">Spam and Eggs From the Cows Perspective</a> (paperback).
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="information" aria-label="Information">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Good news!</EbayPageNoticeTitle>
                <p>
                    You get free shipping on your next pair of shoes! <a href="#link">Learn more</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="attention" aria-label="Attention">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Error.</EbayPageNoticeTitle>
                <p>
                    Please take another look at the following:
                    <br />
                    <a href="#link">Card number</a>, <a href="#link">Expiration date</a> &amp;{" "}
                    <a href="#link">Security code</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="confirmation" aria-label="Congratulations">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
                <p>We&apos;ll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
            </EbayNoticeContent>
            <EbayPageNoticeFooter>
                <a href="https://ebay.com">Action</a>
            </EbayPageNoticeFooter>
        </EbayPageNotice>
    </>`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="information" aria-label="Information" a11yDismissText="Close" onDismiss={e => action("onDismiss")(e)}>
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Good news!</EbayPageNoticeTitle>
                <p>
                    You get free shipping on your next pair of shoes! <a href="#link">Learn more</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="information" aria-label="Congratulations" a11yDismissText="Close">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
                <p>We&apos;ll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
            </EbayNoticeContent>
            <EbayPageNoticeCTA>
                <a href="https://ebay.com">Action</a>
            </EbayPageNoticeCTA>
        </EbayPageNotice>
    </>`,...X.parameters?.docs?.source}}}})))()}Q();export{q as AttentionMessage,G as ConfirmationMessage,X as DismissibleMessageWithCta,Y as DismissibleNotice,K as InformationMessage,J as MessageWithFooter,U as SimpleUsage,W as SimpleUsageWithId,Z as __namedExportsOrder,H as default};