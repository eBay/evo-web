import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i as ee}from"./utils-i55QFFMK.js";import{n as te,t as i}from"./random-id-C4JIZuFN.js";import{t as ne}from"./icon-CKiT-kEX.js";import{n as a,r as o}from"./iframe-p0USjOsN.js";import{t as s}from"./utils-BI15M-bA.js";import{n as c,t as re}from"./ebay-icon-close-16-DWW8i22Y.js";import{i as l,n as u,r as d,t as ie}from"./notice-content-J_JoAqZc.js";import{n as f,t as ae}from"./ebay-icon-lightbulb-24-DMCSBS7F.js";import{i as p,n as m,r as h,t as g}from"./notice-footer-CS_GMqge.js";import{n as _,t as v}from"./ebay-icon-attention-filled-16-v62YCZX7.js";import{a as y,i as b,n as x,o as oe,r as se,t as S}from"./ebay-icon-information-filled-16-BRwekzbj.js";import{n as ce,t as le}from"./ebay-icon-lightning-bolt-24-QHdRWFIi.js";import{n as ue,t as de}from"./notice-cta-BfoOyizW.js";var C,w,T,E;function D(){return(D=t((()=>{C=e(n()),w=e(r()),d(),u(),o(),L(),i(),s(),f(),_(),b(),x(),oe(),c(),T={attention:v,confirmation:se,information:S,warning:y},E=({status:e=`general`,children:t,className:n,"aria-label":r,"aria-roledescription":i=`Notice`,a11yDismissText:a,educationIcon:o,iconClass:s,prominent:c,onDismiss:u=()=>{},...d})=>{let[f,p]=(0,C.useState)(!1),[m,h]=(0,C.useState)(``);(0,C.useEffect)(()=>{h(te())},[]);let g=ee(t,l),_=e!==`general`&&e!==`none`,v=e===`education`,y=null,b={className:s,a11yText:r,a11yVariant:`label`};if(_){if(v)y=o||C.createElement(ae,b);else{let t=T[e];y=C.createElement(t,b)}}if(!g)throw Error(`EbaySectionNotice: Please use a EbayNoticeContent that defines the content of the notice`);let x=e=>{p(!0),u(e)};return f?null:C.createElement(`section`,{...d,className:(0,w.default)(n,`section-notice`,{[`section-notice--${e}`]:_,"section-notice--education":v&&c,"section-notice--large-icon":v}),"aria-label":_?null:r,"aria-labelledby":_?`section-notice-${e}-${m}`:null,"aria-roledescription":i},y&&C.createElement(`div`,{className:`section-notice__header`,id:`section-notice-${e}-${m}`},typeof y==`string`?C.createElement(ne,{name:y,...b}):y),C.createElement(ie,{...g.props,type:`section`}),t,a&&C.createElement(M,null,C.createElement(`button`,{"aria-label":a,className:`fake-link page-notice__dismiss`,onClick:x},C.createElement(re,null))))};try{E.displayName=`sectionnotice`,E.__docgenInfo={description:``,displayName:`sectionnotice`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,methods:[],props:{status:{defaultValue:{value:`general`},declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`status`,required:!1,tags:{},type:{name:`SectionNoticeStatus | undefined`}},a11yDismissText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`a11yDismissText`,required:!1,tags:{},type:{name:`string | undefined`}},onDismiss:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`onDismiss`,required:!1,tags:{},type:{name:`(MouseEventHandler & KeyboardEventHandler) | undefined`}},educationIcon:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`educationIcon`,required:!1,tags:{},type:{name:`Icon | ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},iconClass:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`iconClass`,required:!1,tags:{},type:{name:`string | undefined`}},prominent:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice.tsx`,name:`TypeLiteral`}],description:``,name:`prominent`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var O,k;function A(){return(A=t((()=>{O=e(n()),p(),k=({className:e,as:t,children:n,...r})=>O.createElement(h,{...r,className:e,as:t,type:`section`},n);try{k.displayName=`sectionnoticetitle`,k.__docgenInfo={description:``,displayName:`sectionnoticetitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-title.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M;function N(){return(N=t((()=>{j=e(n()),m(),M=({className:e,children:t})=>j.createElement(g,{className:e,type:`section`},t);try{M.displayName=`sectionnoticefooter`,M.__docgenInfo={description:``,displayName:`sectionnoticefooter`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-footer.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice-footer.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var P,F;function I(){return(I=t((()=>{P=e(n()),ue(),F=({className:e,children:t})=>P.createElement(de,{className:e,type:`section`},t);try{F.displayName=`sectionnoticecta`,F.__docgenInfo={description:``,displayName:`sectionnoticecta`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-cta.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-section-notice/section-notice-cta.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function L(){return(L=t((()=>{D(),A(),N(),I(),d()})))()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{n(),L(),ce(),R=a(),{action:z}=__STORYBOOK_MODULE_ACTIONS__,B={title:`notices & tips/ebay-section-notice`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Import

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
\`\`\``}}},argTypes:{status:{description:`Determines the style and type of notice to be displayed`,control:`text`},"aria-label":{description:`The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.`,control:`text`},"aria-roledescription":{description:`Adds role description attribute to the section notice`,control:`text`},children:{description:`The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**`,control:`text`},educationIcon:{description:`Icon of the educational banner`,control:`text`},iconClass:{description:`Class that will be added to the icon svg`,control:`text`},prominent:{description:`Sets the educational banner with a more prominent background`,control:`boolean`},a11yDismissText:{description:`Accessible label for the dismiss button`,control:`text`},onDismiss:{description:`Triggered on notice dismiss`,action:`onDismiss`,table:{category:`Events`,defaultValue:{summary:`(Event)`}}}}},V={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(E,{...e,children:(0,R.jsx)(l,{children:(0,R.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),name:`Default message (with no action)`},H={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(E,{...e,children:[(0,R.jsx)(l,{children:(0,R.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})}),(0,R.jsx)(M,{children:(0,R.jsx)(`button`,{onClick:z(`Action Button Clicked`),className:`fake-link`,children:`Do something`})})]})}),name:`Default message (with action)`},U={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(E,{...e,status:`confirmation`,children:[(0,R.jsx)(l,{children:(0,R.jsxs)(k,{children:[`This successfully finished! `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`next page`})]})}),(0,R.jsx)(M,{children:(0,R.jsx)(`button`,{onClick:z(`Action Button Clicked`),className:`fake-link`,children:`Take a look`})})]})}),name:`Confirmation message`},W={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(E,{...e,status:`information`,a11yDismissText:`Dismiss`,onDismiss:e=>z(`onDismiss`)(e),children:[(0,R.jsx)(l,{children:(0,R.jsxs)(k,{children:[(0,R.jsx)(`strong`,{children:`Good news!`}),` You get free shipping on your next pair of shoes!\xA0`,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Learn more`}),`.`]})}),(0,R.jsx)(F,{children:(0,R.jsx)(`a`,{href:`https://www.ebay.com`,children:`Opt in`})})]})}),name:`Information message (dismissable)`},G={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(E,{...e,status:`attention`,children:[(0,R.jsx)(l,{children:(0,R.jsxs)(`p`,{children:[(0,R.jsx)(`strong`,{children:`Error.`}),` Please take another look at the following:`,(0,R.jsx)(`br`,{}),(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Card number`}),`,`,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Expiration date`}),` `,`&`,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Security code`}),`.`]})}),(0,R.jsx)(M,{children:(0,R.jsx)(`button`,{onClick:z(`Action Button Clicked`),className:`fake-link`,children:`Show more`})})]})}),name:`Attention message`},K={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(E,{...e,status:`warning`,children:(0,R.jsx)(l,{children:(0,R.jsx)(`p`,{children:`This setting may impact visibility of your listing.`})})})}),name:`Warning message`},q={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(E,{...e,children:(0,R.jsxs)(l,{children:[(0,R.jsx)(k,{children:`Title`}),(0,R.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})]})})}),name:`Section with title`},J={render:e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(E,{...e,children:[(0,R.jsxs)(l,{children:[(0,R.jsx)(k,{children:`Title`}),(0,R.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})]}),(0,R.jsx)(M,{children:(0,R.jsx)(`a`,{href:`https://www.ebay.com`,children:`Go see details`})})]})}),name:`Section with link`},Y=e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(E,{...e,status:`education`,children:(0,R.jsx)(l,{children:(0,R.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),X=e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(E,{...e,status:`education`,prominent:!0,children:(0,R.jsx)(l,{children:(0,R.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),Z=e=>(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(E,{...e,status:`education`,prominent:!0,educationIcon:(0,R.jsx)(le,{}),children:(0,R.jsx)(l,{children:(0,R.jsxs)(`p`,{children:[`Items you didn't win will now show in the `,(0,R.jsx)(`a`,{href:`http://www.ebay.com`,children:`Didn't win`}),` `,`section of this page.`]})})})}),Q=[`DefaultMessageWithNoAction`,`DefaultMessageWithAction`,`ConfirmationMessage`,`InformationMessageDismissable`,`AttentionMessage`,`WarningMessage`,`SectionWithTitle`,`SectionWithLink`,`EducationalSectionNotice`,`EducationalSectionNoticeProminent`,`EducationalSectionNoticeCustomIcon`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySectionNotice {...args} status="warning">
                <EbayNoticeContent>
                    <p>This setting may impact visibility of your listing.</p>
                </EbayNoticeContent>
            </EbaySectionNotice>
        </>,
  name: "Warning message"
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
    </>`,...Z.parameters?.docs?.source}}}})))()}$();export{G as AttentionMessage,U as ConfirmationMessage,H as DefaultMessageWithAction,V as DefaultMessageWithNoAction,Y as EducationalSectionNotice,Z as EducationalSectionNoticeCustomIcon,X as EducationalSectionNoticeProminent,W as InformationMessageDismissable,J as SectionWithLink,q as SectionWithTitle,K as WarningMessage,Q as __namedExportsOrder,B as default};