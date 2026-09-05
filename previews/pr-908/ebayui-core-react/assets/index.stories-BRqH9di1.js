var h=Object.defineProperty;var t=(n,a)=>h(n,"name",{value:a,configurable:!0});import{r as u,R as e,c as C}from"./iframe-DEK81gme.js";import{E as I}from"./button-b9GpvPi6.js";import{E as o,N as S}from"./notice-content-DwbZX0tb.js";import{b as w}from"./utils-_oSgwHXy.js";import{E as _}from"./ebay-icon-attention-filled-16-CgAdOpMI.js";import{a as x,E as T}from"./ebay-icon-information-filled-16-DZl-UDUy.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-ORK8K31X.js";import"./ebay-icon-spinner-30-Cox1pv5J.js";import"./ebay-icon-chevron-down-12-DBS9dix-.js";const M={attention:_,confirmation:T,information:x},r=t(({className:n,status:a="general",children:p,hidden:d=!1,"aria-label":y,onNoticeShow:b=t(()=>{},"onNoticeShow"),...f})=>{if(u.useEffect(()=>{d||b()},[d]),d)return null;const g=w(p,o);if(!g)throw new Error("EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice");const E=a==="general",N=E?null:M[a];return e.createElement("div",{...f,className:C(n,"inline-notice",{[`inline-notice--${a}`]:!E})},E?null:e.createElement("span",{className:"inline-notice__header"},e.createElement(N,{a11yText:y,a11yVariant:"label"})),e.createElement(S,{...g.props,type:"inline"}))},"EbayInlineNotice");try{inlinenotice.displayName="inlinenotice",inlinenotice.__docgenInfo={description:"",displayName:"inlinenotice",props:{}}}catch{}const{action:k}=__STORYBOOK_MODULE_ACTIONS__,K={title:"notices & tips/ebay-inline-notice",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{status:{description:"Determines the style and type of notice to be displayed",control:"text"},"aria-label":{description:"The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.",control:"text"},hidden:{description:"Determines whether the notice is hidden or not.",control:"boolean"},onNoticeShow:{description:"A function that is called when the notice is displayed",action:"onNoticeShow",table:{category:"Events"}},children:{description:"The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**",control:"text"}}},i=t(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,"aria-label":"General"},e.createElement(o,null,e.createElement("p",null,"text message")))),"Default"),c={render:t(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,status:"confirmation","aria-label":"Confirmation"},e.createElement(o,null,e.createElement("p",null,"Delivered on May 1, 2017"),e.createElement("p",null,"Tracking number: ",e.createElement("a",{href:"http://www.ebay.com"},"93878473859376898908657567"))))),"render"),name:"Confirmation message"},s={render:t(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,status:"information","aria-label":"Information"},e.createElement(o,null,e.createElement("p",null,"Global Shipping Program transaction.")))),"render"),name:"Information message"},l={render:t(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,status:"attention","aria-label":"Attention"},e.createElement(o,null,e.createElement("p",null,"Update your credit card.")))),"render"),name:"Attention message"},m={render:t(n=>e.createElement(e.Fragment,null,e.createElement(A,{...n})),"render"),name:"Notice toggle"};function A(n){const[a,p]=u.useState(!1);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:t(()=>p(!a),"onClick")},a?"Show":"Hide"," Notice"),e.createElement(r,{...n,status:"confirmation",hidden:a,onNoticeShow:k("Showing"),"aria-label":"Toggle notice"},e.createElement(o,null,e.createElement("p",null,"Delivered on May 1, 2017"),e.createElement("p",null,"Tracking number: ",e.createElement("a",{href:"http://www.ebay.com"},"93878473859376898908657567")))))}t(A,"NoticeToggleStory");i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <EbayInlineNotice {...args} aria-label="General">
            <EbayNoticeContent>
                <p>text message</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="information" aria-label="Information">
                <EbayNoticeContent>
                    <p>Global Shipping Program transaction.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Information message"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayInlineNotice {...args} status="attention" aria-label="Attention">
                <EbayNoticeContent>
                    <p>Update your credit card.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: "Attention message"
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <NoticeToggleStory {...args} />
        </>,
  name: "Notice toggle"
}`,...m.parameters?.docs?.source}}};const L=["Default","ConfirmationMessage","InformationMessage","AttentionMessage","NoticeToggle"];export{l as AttentionMessage,c as ConfirmationMessage,i as Default,s as InformationMessage,m as NoticeToggle,L as __namedExportsOrder,K as default};
