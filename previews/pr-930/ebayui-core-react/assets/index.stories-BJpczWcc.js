var D=Object.defineProperty;var o=(a,t)=>D(a,"name",{value:t,configurable:!0});import{r as I,R as e,c as v}from"./iframe-DXKVC7Wu.js";import{E as r,N as F}from"./notice-content-ePyAzdUM.js";import{N as A,a as Y}from"./notice-footer-DbbRSRYl.js";import{N as M}from"./notice-cta-DlwB3aWC.js";import{f as W}from"./utils-4VXCHhuo.js";import{E as L}from"./ebay-icon-close-16-CPcoIDU4.js";import{E as j}from"./ebay-icon-attention-filled-16-DG5ApFTP.js";import{E as V,a as O}from"./ebay-icon-information-filled-16-Dec4gWXl.js";import"./preload-helper-Cc2_yIPf.js";const q={attention:j,confirmation:O,information:V},n=o(({id:a,status:t="general",children:s,a11yDismissText:c,"aria-label":N,onDismiss:C=o(()=>{},"onDismiss"),className:P,..._})=>{const[T,x]=I.useState(!1),h=W(s,r);if(!h)throw new Error("EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice");const k=o(w=>{x(!0),C(w)},"handleDismissed"),S=t!=="general"?q[t]:null;return T?null:e.createElement("section",{..._,"aria-label":t==="general"?N:void 0,"aria-labelledby":t!=="general"?a||`${t}-status`:void 0,className:v("page-notice",P,{[`page-notice--${t}`]:t!=="general"})},t!=="general"?e.createElement("div",{className:"page-notice__header",id:a||`${t}-status`},e.createElement(S,{a11yText:N,a11yVariant:"label"})):null,e.createElement(F,{...h.props,type:"page"}),s,c&&e.createElement(E,null,e.createElement("button",{"aria-label":c,className:"fake-link page-notice__dismiss",onClick:k},e.createElement(L,null))))},"EbayPageNotice");try{n.displayName="pagenotice",n.__docgenInfo={description:"",displayName:"pagenotice",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice.tsx",methods:[],props:{status:{defaultValue:{value:"general"},declarations:[{fileName:"ebayui-core-react/src/ebay-page-notice/page-notice.tsx",name:"TypeLiteral"}],description:"",name:"status",required:!1,tags:{},type:{name:"PageNoticeStatus"}},a11yDismissText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-page-notice/page-notice.tsx",name:"TypeLiteral"}],description:"",name:"a11yDismissText",required:!1,tags:{},type:{name:"string"}},onDismiss:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-page-notice/page-notice.tsx",name:"TypeLiteral"}],description:"",name:"onDismiss",required:!1,tags:{},type:{name:"MouseEventHandler & KeyboardEventHandler"}}},tags:{}}}catch{}const i=o(({className:a,as:t,children:s,...c})=>e.createElement(A,{...c,className:a,as:t,type:"page"},s),"EbayPageNoticeTitle");try{i.displayName="pagenoticetitle",i.__docgenInfo={description:"",displayName:"pagenoticetitle",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice-title.tsx",methods:[],props:{},tags:{}}}catch{}const E=o(({className:a,children:t})=>e.createElement(Y,{className:a,type:"page"},t),"EbayPageNoticeFooter");try{E.displayName="pagenoticefooter",E.__docgenInfo={description:"",displayName:"pagenoticefooter",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice-footer.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-page-notice/page-notice-footer.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const f=o(({className:a,children:t})=>e.createElement(M,{className:a,type:"page"},t),"EbayPageNoticeCTA");try{f.displayName="pagenoticecta",f.__docgenInfo={description:"",displayName:"pagenoticecta",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-page-notice/page-notice-cta.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-page-notice/page-notice-cta.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const{action:U}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"notices & tips/ebay-page-notice",tags:["autodocs"],parameters:{docs:{description:{component:`## Import

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
\`\`\``}}},argTypes:{status:{description:"Determines the style and type of notice to be displayed",control:"text"},"aria-label":{description:"The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.",control:"text"},children:{description:"The content to be displayed within the notice",control:"text"},a11yDismissText:{description:"Determines if the notice will have a dismiss button. Acts as the aria-label for the dismiss button. Should not be used with a footer.",control:"text"},onDismiss:{description:"Triggered on notice dismiss",action:"onDismiss",table:{category:"Events",defaultValue:{summary:"(Event)"}}}}},l=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,"aria-label":"Default"},e.createElement(r,null,"text message"))),"SimpleUsage"),m=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,status:"confirmation","aria-label":"Success",id:"main-page-notice"},e.createElement(r,null,"text message"))),"SimpleUsageWithId"),p=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,status:"confirmation","aria-label":"Success"},e.createElement(r,null,e.createElement(i,null,"Congrats!"),e.createElement("p",null,"You just listed ",e.createElement("a",{href:"#link"},"Spam and Eggs From the Cows Perspective")," (paperback).")))),"ConfirmationMessage"),g=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,status:"information","aria-label":"Information"},e.createElement(r,null,e.createElement(i,null,"Good news!"),e.createElement("p",null,"You get free shipping on your next pair of shoes! ",e.createElement("a",{href:"#link"},"Learn more"),".")))),"InformationMessage"),u=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,status:"attention","aria-label":"Attention"},e.createElement(r,null,e.createElement(i,null,"Error."),e.createElement("p",null,"Please take another look at the following:",e.createElement("br",null),e.createElement("a",{href:"#link"},"Card number"),", ",e.createElement("a",{href:"#link"},"Expiration date")," &"," ",e.createElement("a",{href:"#link"},"Security code"),".")))),"AttentionMessage"),y=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,status:"confirmation","aria-label":"Congratulations"},e.createElement(r,null,e.createElement(i,null,"Your order's in!"),e.createElement("p",null,"We'll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.")),e.createElement(E,null,e.createElement("a",{href:"https://ebay.com"},"Action")))),"MessageWithFooter"),b=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,status:"information","aria-label":"Information",a11yDismissText:"Close",onDismiss:o(t=>U("onDismiss")(t),"onDismiss")},e.createElement(r,null,e.createElement(i,null,"Good news!"),e.createElement("p",null,"You get free shipping on your next pair of shoes! ",e.createElement("a",{href:"#link"},"Learn more"),".")))),"DismissibleNotice"),d=o(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,status:"information","aria-label":"Congratulations",a11yDismissText:"Close"},e.createElement(r,null,e.createElement(i,null,"Your order's in!"),e.createElement("p",null,"We'll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.")),e.createElement(f,null,e.createElement("a",{href:"https://ebay.com"},"Action")))),"DismissibleMessageWithCta"),ee=["SimpleUsage","SimpleUsageWithId","ConfirmationMessage","InformationMessage","AttentionMessage","MessageWithFooter","DismissibleNotice","DismissibleMessageWithCta"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} aria-label="Default">
            <EbayNoticeContent>text message</EbayNoticeContent>
        </EbayPageNotice>
    </>`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="confirmation" aria-label="Success" id="main-page-notice">
            <EbayNoticeContent>text message</EbayNoticeContent>
        </EbayPageNotice>
    </>`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="confirmation" aria-label="Success">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Congrats!</EbayPageNoticeTitle>
                <p>
                    You just listed <a href="#link">Spam and Eggs From the Cows Perspective</a> (paperback).
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="information" aria-label="Information">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Good news!</EbayPageNoticeTitle>
                <p>
                    You get free shipping on your next pair of shoes! <a href="#link">Learn more</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="confirmation" aria-label="Congratulations">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
                <p>We&apos;ll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
            </EbayNoticeContent>
            <EbayPageNoticeFooter>
                <a href="https://ebay.com">Action</a>
            </EbayPageNoticeFooter>
        </EbayPageNotice>
    </>`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="information" aria-label="Information" a11yDismissText="Close" onDismiss={e => action("onDismiss")(e)}>
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Good news!</EbayPageNoticeTitle>
                <p>
                    You get free shipping on your next pair of shoes! <a href="#link">Learn more</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
        <EbayPageNotice {...args} status="information" aria-label="Congratulations" a11yDismissText="Close">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
                <p>We&apos;ll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
            </EbayNoticeContent>
            <EbayPageNoticeCTA>
                <a href="https://ebay.com">Action</a>
            </EbayPageNoticeCTA>
        </EbayPageNotice>
    </>`,...d.parameters?.docs?.source}}};export{u as AttentionMessage,p as ConfirmationMessage,d as DismissibleMessageWithCta,b as DismissibleNotice,g as InformationMessage,y as MessageWithFooter,l as SimpleUsage,m as SimpleUsageWithId,ee as __namedExportsOrder,Z as default};
