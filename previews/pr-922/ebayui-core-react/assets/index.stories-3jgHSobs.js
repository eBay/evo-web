import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i as ee}from"./utils-i55QFFMK.js";import{n as i,t as a}from"./random-id-C4JIZuFN.js";import{t as te}from"./icon-iuFjYIn4.js";import{n as o,r as s}from"./iframe-RezWaW69.js";import{t as c}from"./utils-BI15M-bA.js";import{n as l,t as ne}from"./ebay-icon-close-16-B2UHelCO.js";import{i as u,n as d,r as f,t as re}from"./notice-content-J_JoAqZc.js";import{n as p,t as ie}from"./ebay-icon-lightbulb-24-DtOcKB7k.js";import{i as m,n as h,r as g,t as _}from"./notice-footer-CS_GMqge.js";import{n as v,t as y}from"./ebay-icon-attention-filled-16-BrOi0bC1.js";import{i as b,n as x,r as S,t as ae}from"./ebay-icon-information-filled-16-izM1NGTm.js";import{n as oe,t as se}from"./ebay-icon-lightning-bolt-24-CdAaeacG.js";import{n as ce,t as C}from"./notice-cta-BfoOyizW.js";var w,T,E,D;function O(){return(O=t((()=>{w=e(n()),T=e(r()),f(),d(),s(),R(),a(),c(),p(),v(),b(),x(),l(),E={attention:y,confirmation:S,information:ae},D=({status:e=`general`,children:t,className:n,"aria-label":r,"aria-roledescription":a=`Notice`,a11yDismissText:o,educationIcon:s,iconClass:c,prominent:l,onDismiss:d=()=>{},...f})=>{let[p,m]=(0,w.useState)(!1),[h,g]=(0,w.useState)(``);(0,w.useEffect)(()=>{g(i())},[]);let _=ee(t,u),v=e!==`general`&&e!==`none`,y=e===`education`,b=null,x={className:c,a11yText:r,a11yVariant:`label`};if(v){if(y)b=s||w.createElement(ie,x);else{let t=E[e];b=w.createElement(t,x)}}if(!_)throw Error(`EbaySectionNotice: Please use a EbayNoticeContent that defines the content of the notice`);let S=e=>{m(!0),d(e)};return p?null:w.createElement(`section`,{...f,className:(0,T.default)(n,`section-notice`,{[`section-notice--${e}`]:v,"section-notice--education":y&&l,"section-notice--large-icon":y}),"aria-label":v?null:r,"aria-labelledby":v?`section-notice-${e}-${h}`:null,"aria-roledescription":a},b&&w.createElement(`div`,{className:`section-notice__header`,id:`section-notice-${e}-${h}`},typeof b==`string`?w.createElement(te,{name:b,...x}):b),w.createElement(re,{..._.props,type:`section`}),t,o&&w.createElement(N,null,w.createElement(`button`,{"aria-label":o,className:`fake-link page-notice__dismiss`,onClick:S},w.createElement(ne,null))))};try{D.displayName=`sectionnotice`,D.__docgenInfo={description:``,displayName:`sectionnotice`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,methods:[],props:{status:{defaultValue:{value:`general`},declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`status`,required:!1,tags:{},type:{name:`SectionNoticeStatus | undefined`}},a11yDismissText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`a11yDismissText`,required:!1,tags:{},type:{name:`string | undefined`}},onDismiss:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`onDismiss`,required:!1,tags:{},type:{name:`(MouseEventHandler & KeyboardEventHandler) | undefined`}},educationIcon:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`educationIcon`,required:!1,tags:{},type:{name:`Icon | ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},iconClass:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`iconClass`,required:!1,tags:{},type:{name:`string | undefined`}},prominent:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`prominent`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var k,A;function j(){return(j=t((()=>{k=e(n()),m(),A=({className:e,as:t,children:n,...r})=>k.createElement(g,{...r,className:e,as:t,type:`section`},n);try{A.displayName=`sectionnoticetitle`,A.__docgenInfo={description:``,displayName:`sectionnoticetitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-title.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var M,N;function P(){return(P=t((()=>{M=e(n()),h(),N=({className:e,children:t})=>M.createElement(_,{className:e,type:`section`},t);try{N.displayName=`sectionnoticefooter`,N.__docgenInfo={description:``,displayName:`sectionnoticefooter`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-footer.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice-footer.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var F,I;function L(){return(L=t((()=>{F=e(n()),ce(),I=({className:e,children:t})=>F.createElement(C,{className:e,type:`section`},t);try{I.displayName=`sectionnoticecta`,I.__docgenInfo={description:``,displayName:`sectionnoticecta`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-cta.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice-cta.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function R(){return(R=t((()=>{O(),j(),P(),L(),f()})))()}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{n(),R(),oe(),z=o(),{action:B}=__STORYBOOK_MODULE_ACTIONS__,V={title:`notices & tips/ebay-section-notice`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Import

\`\`\`jsx harmony
import {
    EbaySectionNotice,
    EbayNoticeContent,
    EbaySectionNoticeTitle,
    EbaySectionNoticeFooter,
} from "@ebay/ui-core-react/ebay-section-notice";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/section-notice";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/section-notice.css";
@import "@ebay/skin/icon.css";
\`\`\``}}},argTypes:{status:{description:`Determines the style and type of notice to be displayed`,control:`text`},"aria-label":{description:`The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.`,control:`text`},"aria-roledescription":{description:`Adds role description attribute to the section notice`,control:`text`},children:{description:`The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**`,control:`text`},educationIcon:{description:`Icon of the educational banner`,control:`text`},iconClass:{description:`Class that will be added to the icon svg`,control:`text`},prominent:{description:`Sets the educational banner with a more prominent background`,control:`boolean`},a11yDismissText:{description:`Accessible label for the dismiss button`,control:`text`},onDismiss:{description:`Triggered on notice dismiss`,action:`onDismiss`,table:{category:`Events`,defaultValue:{summary:`(Event)`}}}}},H={render:e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(D,{...e,children:(0,z.jsx)(u,{children:(0,z.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),name:`Default message (with no action)`},U={render:e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(D,{...e,children:[(0,z.jsx)(u,{children:(0,z.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})}),(0,z.jsx)(N,{children:(0,z.jsx)(`button`,{onClick:B(`Action Button Clicked`),className:`fake-link`,children:`Do something`})})]})}),name:`Default message (with action)`},W={render:e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(D,{...e,status:`confirmation`,children:[(0,z.jsx)(u,{children:(0,z.jsxs)(A,{children:[`This successfully finished! `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`next page`})]})}),(0,z.jsx)(N,{children:(0,z.jsx)(`button`,{onClick:B(`Action Button Clicked`),className:`fake-link`,children:`Take a look`})})]})}),name:`Confirmation message`},G={render:e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(D,{...e,status:`information`,a11yDismissText:`Dismiss`,onDismiss:e=>B(`onDismiss`)(e),children:[(0,z.jsx)(u,{children:(0,z.jsxs)(A,{children:[(0,z.jsx)(`strong`,{children:`Good news!`}),` You get free shipping on your next pair of shoes!\xA0`,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Learn more`}),`.`]})}),(0,z.jsx)(I,{children:(0,z.jsx)(`a`,{href:`https://www.ebay.com`,children:`Opt in`})})]})}),name:`Information message (dismissable)`},K={render:e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(D,{...e,status:`attention`,children:[(0,z.jsx)(u,{children:(0,z.jsxs)(`p`,{children:[(0,z.jsx)(`strong`,{children:`Error.`}),` Please take another look at the following:`,(0,z.jsx)(`br`,{}),(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Card number`}),`,`,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Expiration date`}),` `,`&`,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Security code`}),`.`]})}),(0,z.jsx)(N,{children:(0,z.jsx)(`button`,{onClick:B(`Action Button Clicked`),className:`fake-link`,children:`Show more`})})]})}),name:`Attention message`},q={render:e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(D,{...e,children:(0,z.jsxs)(u,{children:[(0,z.jsx)(A,{children:`Title`}),(0,z.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})]})})}),name:`Section with title`},J={render:e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(D,{...e,children:[(0,z.jsxs)(u,{children:[(0,z.jsx)(A,{children:`Title`}),(0,z.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})]}),(0,z.jsx)(N,{children:(0,z.jsx)(`a`,{href:`https://www.ebay.com`,children:`Go see details`})})]})}),name:`Section with link`},Y=e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(D,{...e,status:`education`,children:(0,z.jsx)(u,{children:(0,z.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),X=e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(D,{...e,status:`education`,prominent:!0,children:(0,z.jsx)(u,{children:(0,z.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),Z=e=>(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(D,{...e,status:`education`,prominent:!0,educationIcon:(0,z.jsx)(se,{}),children:(0,z.jsx)(u,{children:(0,z.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,z.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),Q=[`DefaultMessageWithNoAction`,`DefaultMessageWithAction`,`ConfirmationMessage`,`InformationMessageDismissable`,`AttentionMessage`,`SectionWithTitle`,`SectionWithLink`,`EducationalSectionNotice`,`EducationalSectionNoticeProminent`,`EducationalSectionNoticeCustomIcon`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args}>
                <EbayNoticeContent>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
            </EbaySectionNotice>
        </>,
  name: "Default message (with no action)"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args}>
                <EbayNoticeContent>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <button onClick={action("Action Button Clicked")} className="fake-link">
                        Do something
                    </button>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>,
  name: "Default message (with action)"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args} status="confirmation">
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>
                        This successfully finished! <a href="http://www.ebay.com">next page</a>
                    </EbaySectionNoticeTitle>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <button onClick={action("Action Button Clicked")} className="fake-link">
                        Take a look
                    </button>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>,
  name: "Confirmation message"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args} status="information" a11yDismissText="Dismiss" onDismiss={e => action("onDismiss")(e)}>
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>
                        <strong>Good news!</strong> You get free shipping on your next pair of shoes!&nbsp;
                        <a href="http://www.ebay.com">Learn more</a>.
                    </EbaySectionNoticeTitle>
                </EbayNoticeContent>
                <EbaySectionNoticeCTA>
                    <a href="https://www.ebay.com">Opt in</a>
                </EbaySectionNoticeCTA>
            </EbaySectionNotice>
        </>,
  name: "Information message (dismissable)"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args} status="attention">
                <EbayNoticeContent>
                    <p>
                        <strong>Error.</strong> Please take another look at the following:
                        <br />
                        <a href="http://www.ebay.com">Card number</a>,<a href="http://www.ebay.com">Expiration date</a>{" "}
                        &amp;
                        <a href="http://www.ebay.com">Security code</a>.
                    </p>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <button onClick={action("Action Button Clicked")} className="fake-link">
                        Show more
                    </button>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>,
  name: "Attention message"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args}>
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>Title</EbaySectionNoticeTitle>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
            </EbaySectionNotice>
        </>,
  name: "Section with title"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args}>
                <EbayNoticeContent>
                    <EbaySectionNoticeTitle>Title</EbaySectionNoticeTitle>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
                <EbaySectionNoticeFooter>
                    <a href="https://www.ebay.com">Go see details</a>
                </EbaySectionNoticeFooter>
            </EbaySectionNotice>
        </>,
  name: "Section with link"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionNotice {...args} status="education">
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionNotice {...args} status="education" prominent>
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionNotice {...args} status="education" prominent educationIcon={<EbayIconLightningBolt24 />}>
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>`,...Z.parameters?.docs?.source}}}})))()}$();export{K as AttentionMessage,W as ConfirmationMessage,U as DefaultMessageWithAction,H as DefaultMessageWithNoAction,Y as EducationalSectionNotice,Z as EducationalSectionNoticeCustomIcon,X as EducationalSectionNoticeProminent,G as InformationMessageDismissable,J as SectionWithLink,q as SectionWithTitle,Q as __namedExportsOrder,V as default};