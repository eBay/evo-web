var S=Object.defineProperty;var n=(t,o)=>S(t,"name",{value:o,configurable:!0});import{r as F,R as e,c as L,E as q}from"./iframe-DXKVC7Wu.js";import{N as P,E as u}from"./notice-content-ePyAzdUM.js";import{f as b}from"./utils-4VXCHhuo.js";import{E as O}from"./icon-button-eFlBz-0H.js";import{N as G,a as R}from"./notice-footer-DbbRSRYl.js";import{E as W}from"./ebay-icon-close-16-CPcoIDU4.js";import{E as z}from"./ebay-icon-lightbulb-24-BPUj-dhI.js";import{E as M}from"./ebay-icon-credit-card-24-DXH7Z7Pn.js";import"./preload-helper-Cc2_yIPf.js";import"./badge-KBGKARd0.js";const a=n(({children:t,className:o,a11yIconText:r,variant:y="none",iconVariant:E="none",a11yDismissText:f,educationIcon:p=e.createElement(z,{prominent:E==="prominent",a11yText:r,a11yVariant:"label"}),iconClass:g,dismissed:h=!1,onDismiss:w=n(()=>{},"onDismiss"),...T})=>{const[x,I]=F.useState(h),_=b(t,u),N=b(t,i),C=b(t,m),V=y==="prominent",D=E==="prominent",v=n(k=>{I(!0),w(k)},"handleDismissed");if(!N)throw new Error("<EbayEducationNoticeTitle>: Please use a <EbayEducationNoticeTitle> that defines the content of the notice");return x||h?null:e.createElement("section",{"aria-roledescription":"Notice",...T,className:L(o,"education-notice",{"education-notice--prominent":V})},e.createElement("div",{className:"education-notice__header"},typeof p=="string"?e.createElement(q,{name:p,className:g,prominent:D,a11yText:r,a11yVariant:"label"}):p,N,f&&e.createElement(O,{"aria-label":f,size:"small",className:"education-notice__dismiss",onClick:v,icon:e.createElement(W,null)})),e.createElement(P,{..._?.props,type:"education"}),C)},"EbayEducationNotice");try{a.displayName="educationnotice",a.__docgenInfo={description:"",displayName:"educationnotice",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-education-notice/education-notice.tsx",methods:[],props:{a11yIconText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"a11yIconText",required:!1,tags:{},type:{name:"string"}},a11yDismissText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"a11yDismissText",required:!1,tags:{},type:{name:"string"}},onDismiss:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"onDismiss",required:!1,tags:{},type:{name:"EducationDismissHandler"}},dismissed:{defaultValue:{value:"false"},declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"dismissed",required:!1,tags:{},type:{name:"boolean"}},educationIcon:{defaultValue:{value:`(
        <EbayIconLightbulb24 prominent={iconVariant === "prominent"} a11yText={a11yIconText} a11yVariant="label" />
    )`},declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"educationIcon",required:!1,tags:{},type:{name:"Icon | ReactElement<unknown, string | JSXElementConstructor<any>>"}},iconClass:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"iconClass",required:!1,tags:{},type:{name:"string"}},variant:{defaultValue:{value:"none"},declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"variant",required:!1,tags:{},type:{name:'"prominent" | "none"'}},iconVariant:{defaultValue:{value:"none"},declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice.tsx",name:"TypeLiteral"}],description:"",name:"iconVariant",required:!1,tags:{},type:{name:'"prominent" | "none"'}}},tags:{}}}catch{}const i=n(({className:t,as:o,children:r,...y})=>e.createElement(G,{...y,className:t,as:o,type:"education"},r),"EbaySectionNoticeTitle");try{i.displayName="educationnoticetitle",i.__docgenInfo={description:"",displayName:"educationnoticetitle",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-education-notice/education-notice-title.tsx",methods:[],props:{},tags:{}}}catch{}const m=n(({className:t,children:o})=>e.createElement(R,{className:t,type:"education"},o),"EbayEducationNoticeFooter");try{m.displayName="educationnoticefooter",m.__docgenInfo={description:"",displayName:"educationnoticefooter",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-education-notice/education-notice-footer.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-education-notice/education-notice-footer.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const $={title:"notices & tips/ebay-education-notice",component:a,argTypes:{educationIcon:{control:{type:"text"},table:{defaultValue:{summary:"lightbulb24"},type:{summary:"Icon"}},description:"EbayIcon that will show in the notice"},iconClass:{control:{type:"text"},table:{type:{summary:"string"}},description:"Add class name to icon"},a11yIconText:{control:{type:"text"},table:{type:{summary:"string"}},description:"Add description the notice icon for a11y users"},variant:{options:["none","prominent"],control:{type:"select"},table:{defaultValue:{summary:"none"},type:{summary:"string"}},description:"Either none or prominent. If prominent, the notice will be more prominent"},iconVariant:{options:["none","prominent"],control:{type:"select"},table:{defaultValue:{summary:"none"},type:{summary:"string"}},description:"Either none or prominent. If prominent, the notice will be more prominent"},"aria-roledescription":{control:{type:"text"},table:{defaultValue:{summary:"Notice"},type:{summary:"string"}},description:"The roledescription to announce the component type for a11y users."},"aria-label":{control:{type:"text"},table:{type:{summary:"string"}},description:"The description of the notice itself for screen readers."},a11yDismissText:{control:{type:"text"},table:{type:{summary:"string"}},description:"The a11y description for the dismiss button. It will also allow the notice to be dismissed."},dismissed:{control:{type:"boolean"},type:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Whether or not the notice is dismissed"},icon:{name:"EbayIcon",description:"The title content to be displayed.",table:{required:!0,category:"EbayIconComponent",type:{summary:"EbayIcon"},defaultValue:{summary:"<EbayIconLightbulb24 />"}}},title:{name:"EbayEducationNoticeTitle",description:"The title content to be displayed.",table:{required:!0,category:"@attribute tags",type:{summary:"EbayEducationNoticeTitle"}}},footer:{name:"EbayEducationNoticeFooter",description:"The footer content to be displayed. Contains a button or link.",table:{category:"@attribute tags",type:{summary:"EbayEducationNoticeFooter"}}},children:{description:"The content to be displayed within the notice. **Must have the EbayEducationNoticeTitle within the children!**",control:"text"},onDismiss:{description:"Triggered on notice dismiss",action:"onDismiss",table:{category:"Events",defaultValue:{summary:"(Event)"}}}},decorators:[t=>e.createElement("div",{style:{padding:"3rem"}},e.createElement(t,null))],tags:["autodocs"],parameters:{docs:{description:{component:`## Import

\`\`\`jsx harmony
import {
    EbayEducationNotice,
    EbayNoticeContent,
    EbayEducationNoticeTitle,
    EbayEducationNoticeFooter,
} from "@ebay/ui-core-react/ebay-education-notice";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/education-notice";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/education-notice.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
\`\`\``}}}},c={render:n(t=>e.createElement(a,{...t},e.createElement(i,null,"Recommended title format"),e.createElement(u,null,e.createElement("p",null,"Follow the order below to optimize market valuation from Price Guide. Player + Set or Season + Manufacturer + Card number + Variant + Grader + Grade")),e.createElement(m,null,"Education footer")),"render")},s={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,educationIcon:"car24"},e.createElement(i,null,"Only With Title"))),"render"),name:"Only Title"},l={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,iconVariant:"prominent"},e.createElement(i,null,"Education notice title"),e.createElement(u,null,e.createElement("p",null,"Items you didn't win will now show in the ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," ","section of this page.")))),"render"),name:"No Footer"},d={render:n(t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,educationIcon:e.createElement(M,null),a11yDismissText:"dismiss text"},e.createElement(i,null,"Education notice title"),e.createElement(u,null,e.createElement("p",null,"Items you didn't win will now show in the"," ",e.createElement("a",{href:"http://www.ebay.com"},"Didn't win")," section of this page.")))),"render"),name:"With dismiss button"},ee=["Default","EducationNoticeOnlyTitle","DefaultEducationNotice","DefaultEducationNoticeFooter"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <EbayEducationNotice {...args}>
                <EbayEducationNoticeTitle>Recommended title format</EbayEducationNoticeTitle>
                <EbayNoticeContent>
                    <p>
                        Follow the order below to optimize market valuation from Price Guide. Player + Set or Season +
                        Manufacturer + Card number + Variant + Grader + Grade
                    </p>
                </EbayNoticeContent>
                <EbayEducationNoticeFooter>Education footer</EbayEducationNoticeFooter>
            </EbayEducationNotice>;
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayEducationNotice {...args} educationIcon="car24">
                <EbayEducationNoticeTitle>Only With Title</EbayEducationNoticeTitle>
            </EbayEducationNotice>
        </>,
  name: "Only Title"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayEducationNotice {...args} iconVariant="prominent">
                <EbayEducationNoticeTitle>Education notice title</EbayEducationNoticeTitle>
                <EbayNoticeContent>
                    <p>
                        Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a>{" "}
                        section of this page.
                    </p>
                </EbayNoticeContent>
            </EbayEducationNotice>
        </>,
  name: "No Footer"
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <>
                <EbayEducationNotice {...args} educationIcon={<EbayIconCreditCard24 />} a11yDismissText="dismiss text">
                    <EbayEducationNoticeTitle>Education notice title</EbayEducationNoticeTitle>
                    <EbayNoticeContent>
                        <p>
                            Items you didn&apos;t win will now show in the{" "}
                            <a href="http://www.ebay.com">Didn&apos;t win</a> section of this page.
                        </p>
                    </EbayNoticeContent>
                </EbayEducationNotice>
            </>;
  },
  name: "With dismiss button"
}`,...d.parameters?.docs?.source}}};export{c as Default,l as DefaultEducationNotice,d as DefaultEducationNoticeFooter,s as EducationNoticeOnlyTitle,ee as __namedExportsOrder,$ as default};
