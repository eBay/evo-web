var N=Object.defineProperty;var n=(t,a)=>N(t,"name",{value:a,configurable:!0});import{r as u,R as e,c as C}from"./iframe-DXKVC7Wu.js";import{E as I}from"./button-BAvxCJp2.js";import{E as r,N as w}from"./notice-content-ePyAzdUM.js";import{f as S}from"./utils-4VXCHhuo.js";import{E as _}from"./ebay-icon-attention-filled-16-DG5ApFTP.js";import{E as x,a as T}from"./ebay-icon-information-filled-16-Dec4gWXl.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";const k={attention:_,confirmation:T,information:x},o=n(({className:t,status:a="general",children:p,hidden:d=!1,"aria-label":y,onNoticeShow:b=n(()=>{},"onNoticeShow"),...f})=>{if(u.useEffect(()=>{d||b()},[d]),d)return null;const g=S(p,r);if(!g)throw new Error("EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice");const E=a==="general",h=E?null:k[a];return e.createElement("div",{...f,className:C(t,"inline-notice",{[`inline-notice--${a}`]:!E})},E?null:e.createElement("span",{className:"inline-notice__header"},e.createElement(h,{a11yText:y,a11yVariant:"label"})),e.createElement(w,{...g.props,type:"inline"}))},"EbayInlineNotice");try{o.displayName="inlinenotice",o.__docgenInfo={description:"",displayName:"inlinenotice",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-inline-notice/inline-notice.tsx",methods:[],props:{},tags:{}}}catch{}const{action:M}=__STORYBOOK_MODULE_ACTIONS__,K={title:"notices & tips/ebay-inline-notice",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{status:{description:"Determines the style and type of notice to be displayed",control:"text"},"aria-label":{description:"The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.",control:"text"},hidden:{description:"Determines whether the notice is hidden or not.",control:"boolean"},onNoticeShow:{description:"A function that is called when the notice is displayed",action:"onNoticeShow",table:{category:"Events"}},children:{description:"The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**",control:"text"}}},i=n(t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,"aria-label":"General"},e.createElement(r,null,e.createElement("p",null,"text message")))),"Default"),c={render:n(t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,status:"confirmation","aria-label":"Confirmation"},e.createElement(r,null,e.createElement("p",null,"Delivered on May 1, 2017"),e.createElement("p",null,"Tracking number: ",e.createElement("a",{href:"http://www.ebay.com"},"93878473859376898908657567"))))),"render"),name:"Confirmation message"},s={render:n(t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,status:"information","aria-label":"Information"},e.createElement(r,null,e.createElement("p",null,"Global Shipping Program transaction.")))),"render"),name:"Information message"},l={render:n(t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,status:"attention","aria-label":"Attention"},e.createElement(r,null,e.createElement("p",null,"Update your credit card.")))),"render"),name:"Attention message"},m={render:n(t=>e.createElement(e.Fragment,null,e.createElement(v,{...t})),"render"),name:"Notice toggle"};function v(t){const[a,p]=u.useState(!1);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n(()=>p(!a),"onClick")},a?"Show":"Hide"," Notice"),e.createElement(o,{...t,status:"confirmation",hidden:a,onNoticeShow:M("Showing"),"aria-label":"Toggle notice"},e.createElement(r,null,e.createElement("p",null,"Delivered on May 1, 2017"),e.createElement("p",null,"Tracking number: ",e.createElement("a",{href:"http://www.ebay.com"},"93878473859376898908657567")))))}n(v,"NoticeToggleStory");const L=["Default","ConfirmationMessage","InformationMessage","AttentionMessage","NoticeToggle"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
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
}`,...m.parameters?.docs?.source}}};export{l as AttentionMessage,c as ConfirmationMessage,i as Default,s as InformationMessage,m as NoticeToggle,L as __namedExportsOrder,K as default};
