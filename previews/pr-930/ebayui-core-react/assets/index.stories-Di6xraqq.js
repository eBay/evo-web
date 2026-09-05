var R=Object.defineProperty;var n=(t,o)=>R(t,"name",{value:o,configurable:!0});import{r as _,h as $,R as e,c as G,E as K}from"./iframe-DXKVC7Wu.js";import{E as i,N as Y}from"./notice-content-ePyAzdUM.js";import{N as j,a as H}from"./notice-footer-DbbRSRYl.js";import{N as J}from"./notice-cta-DlwB3aWC.js";import{f as U}from"./utils-4VXCHhuo.js";import{E as X}from"./ebay-icon-lightbulb-24-BPUj-dhI.js";import{E as z}from"./ebay-icon-attention-filled-16-DG5ApFTP.js";import{E as Q,a as Z}from"./ebay-icon-information-filled-16-Dec4gWXl.js";import{E as ee}from"./ebay-icon-close-16-CPcoIDU4.js";import{E as te}from"./ebay-icon-lightning-bolt-24-uRe_dwUa.js";import"./preload-helper-Cc2_yIPf.js";const ne={attention:z,confirmation:Z,information:Q},a=n(({status:t="general",children:o,className:S,"aria-label":l,"aria-roledescription":A="Notice",a11yDismissText:T,educationIcon:v,iconClass:L,prominent:M,onDismiss:B=n(()=>{},"onDismiss"),...P})=>{const[V,q]=_.useState(!1),[x,O]=_.useState("");_.useEffect(()=>{O($())},[]);const F=U(o,i),m=t!=="general"&&t!=="none",C=t==="education";let s=null;const k={className:L,a11yText:l,a11yVariant:"label"};if(m)if(C)s=v||e.createElement(X,{...k});else{const I=ne[t];s=e.createElement(I,{...k})}if(!F)throw new Error("EbaySectionNotice: Please use a EbayNoticeContent that defines the content of the notice");const W=n(I=>{q(!0),B(I)},"handleDismissed");return V?null:e.createElement("section",{...P,className:G(S,"section-notice",{[`section-notice--${t}`]:m,"section-notice--education":C&&M,"section-notice--large-icon":C}),"aria-label":m?null:l,"aria-labelledby":m?`section-notice-${t}-${x}`:null,"aria-roledescription":A},s&&e.createElement("div",{className:"section-notice__header",id:`section-notice-${t}-${x}`},typeof s=="string"?e.createElement(K,{name:s,...k}):s),e.createElement(Y,{...F.props,type:"section"}),o,T&&e.createElement(c,null,e.createElement("button",{"aria-label":T,className:"fake-link page-notice__dismiss",onClick:W},e.createElement(ee,null))))},"EbaySectionNotice");try{a.displayName="sectionnotice",a.__docgenInfo={description:"",displayName:"sectionnotice",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice.tsx",methods:[],props:{status:{defaultValue:{value:"general"},declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice.tsx",name:"TypeLiteral"}],description:"",name:"status",required:!1,tags:{},type:{name:"SectionNoticeStatus"}},a11yDismissText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice.tsx",name:"TypeLiteral"}],description:"",name:"a11yDismissText",required:!1,tags:{},type:{name:"string"}},onDismiss:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice.tsx",name:"TypeLiteral"}],description:"",name:"onDismiss",required:!1,tags:{},type:{name:"MouseEventHandler & KeyboardEventHandler"}},educationIcon:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice.tsx",name:"TypeLiteral"}],description:"",name:"educationIcon",required:!1,tags:{},type:{name:"Icon | ReactElement<unknown, string | JSXElementConstructor<any>>"}},iconClass:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice.tsx",name:"TypeLiteral"}],description:"",name:"iconClass",required:!1,tags:{},type:{name:"string"}},prominent:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice.tsx",name:"TypeLiteral"}],description:"",name:"prominent",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const r=n(({className:t,as:o,children:S,...l})=>e.createElement(j,{...l,className:t,as:o,type:"section"},S),"EbaySectionNoticeTitle");try{r.displayName="sectionnoticetitle",r.__docgenInfo={description:"",displayName:"sectionnoticetitle",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-title.tsx",methods:[],props:{},tags:{}}}catch{}const c=n(({className:t,children:o})=>e.createElement(H,{className:t,type:"section"},o),"EbaySectionNoticeFooter");try{c.displayName="sectionnoticefooter",c.__docgenInfo={description:"",displayName:"sectionnoticefooter",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-footer.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice-footer.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const D=n(({className:t,children:o})=>e.createElement(J,{className:t,type:"section"},o),"EbaySectionNoticeCTA");try{D.displayName="sectionnoticecta",D.__docgenInfo={description:"",displayName:"sectionnoticecta",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-section-notice/section-notice-cta.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-section-notice/section-notice-cta.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const{action:N}=__STORYBOOK_MODULE_ACTIONS__,we={title:"notices & tips/ebay-section-notice",tags:["autodocs"],parameters:{docs:{description:{component:`## Import

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
\`\`\``}}},argTypes:{status:{description:"Determines the style and type of notice to be displayed",control:"text"},"aria-label":{description:"The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context.",control:"text"},"aria-roledescription":{description:"Adds role description attribute to the section notice",control:"text"},children:{description:"The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**",control:"text"},educationIcon:{description:"Icon of the educational banner",control:"text"},iconClass:{description:"Class that will be added to the icon svg",control:"text"},prominent:{description:"Sets the educational banner with a more prominent background",control:"boolean"},a11yDismissText:{description:"Accessible label for the dismiss button",control:"text"},onDismiss:{description:"Triggered on notice dismiss",action:"onDismiss",table:{category:"Events",defaultValue:{summary:"(Event)"}}}}},p={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t},e.createElement(i,null,e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")))),"render"),name:"Default message (with no action)"},d={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t},e.createElement(i,null,e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")),e.createElement(c,null,e.createElement("button",{onClick:N("Action Button Clicked"),className:"fake-link"},"Do something")))),"render"),name:"Default message (with action)"},u={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"confirmation"},e.createElement(i,null,e.createElement(r,null,"This successfully finished! ",e.createElement("a",{href:"http://www.ebay.com"},"next page"))),e.createElement(c,null,e.createElement("button",{onClick:N("Action Button Clicked"),className:"fake-link"},"Take a look")))),"render"),name:"Confirmation message"},y={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"information",a11yDismissText:"Dismiss",onDismiss:n(o=>N("onDismiss")(o),"onDismiss")},e.createElement(i,null,e.createElement(r,null,e.createElement("strong",null,"Good news!")," You get free shipping on your next pair of shoes! ",e.createElement("a",{href:"http://www.ebay.com"},"Learn more"),".")),e.createElement(D,null,e.createElement("a",{href:"https://www.ebay.com"},"Opt in")))),"render"),name:"Information message (dismissable)"},w={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"attention"},e.createElement(i,null,e.createElement("p",null,e.createElement("strong",null,"Error.")," Please take another look at the following:",e.createElement("br",null),e.createElement("a",{href:"http://www.ebay.com"},"Card number"),",",e.createElement("a",{href:"http://www.ebay.com"},"Expiration date")," ","&",e.createElement("a",{href:"http://www.ebay.com"},"Security code"),".")),e.createElement(c,null,e.createElement("button",{onClick:N("Action Button Clicked"),className:"fake-link"},"Show more")))),"render"),name:"Attention message"},b={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t},e.createElement(i,null,e.createElement(r,null,"Title"),e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")))),"render"),name:"Section with title"},E={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t},e.createElement(i,null,e.createElement(r,null,"Title"),e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")),e.createElement(c,null,e.createElement("a",{href:"https://www.ebay.com"},"Go see details")))),"render"),name:"Section with link"},h=n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"education"},e.createElement(i,null,e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")))),"EducationalSectionNotice"),f=n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"education",prominent:!0},e.createElement(i,null,e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")))),"EducationalSectionNoticeProminent"),g=n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,status:"education",prominent:!0,educationIcon:e.createElement(te,null)},e.createElement(i,null,e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")))),"EducationalSectionNoticeCustomIcon"),be=["DefaultMessageWithNoAction","DefaultMessageWithAction","ConfirmationMessage","InformationMessageDismissable","AttentionMessage","SectionWithTitle","SectionWithLink","EducationalSectionNotice","EducationalSectionNoticeProminent","EducationalSectionNoticeCustomIcon"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionNotice {...args} status="education">
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionNotice {...args} status="education" prominent>
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbaySectionNotice {...args} status="education" prominent educationIcon={<EbayIconLightningBolt24 />}>
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                    section of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>`,...g.parameters?.docs?.source}}};export{w as AttentionMessage,u as ConfirmationMessage,d as DefaultMessageWithAction,p as DefaultMessageWithNoAction,h as EducationalSectionNotice,g as EducationalSectionNoticeCustomIcon,f as EducationalSectionNoticeProminent,y as InformationMessageDismissable,E as SectionWithLink,b as SectionWithTitle,be as __namedExportsOrder,we as default};
