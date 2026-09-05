var x=Object.defineProperty;var s=(a,r)=>x(a,"name",{value:r,configurable:!0});import{r as b,R as e,c as k}from"./iframe-DXKVC7Wu.js";import{E as T}from"./ebay-icon-chevron-right-12-_PZaeWHG.js";import"./preload-helper-Cc2_yIPf.js";const n=s(({a11yHeadingText:a="Page navigation",a11yHeadingTag:r="h2",id:c="ebay-breadcrumb",children:m=[],className:h,onSelect:g=s(()=>{},"onSelect"),...o})=>{const i=`${c}-breadcrumbs-heading`,f=b.Children.count(m)-1,E=r,S=b.Children.toArray(m).some(l=>l.props.href)?"a":"button";return e.createElement("nav",{...o,"aria-labelledby":i,className:k("breadcrumbs",h),role:"navigation"},e.createElement(E,{id:i,className:"clipped"},a),e.createElement("ul",null,b.Children.map(m,(l,I)=>{const B=I===f,{href:_,children:v}=l.props,W={tag:S,isLastItem:B,href:_,children:v,onClick:s(A=>g(A),"onClick")};return b.cloneElement(l,W)})))},"EbayBreadcrumbs");try{n.displayName="breadcrumbs",n.__docgenInfo={description:"",displayName:"breadcrumbs",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx",methods:[],props:{a11yHeadingTag:{defaultValue:{value:"h2"},declarations:[{fileName:"ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx",name:"TypeLiteral"}],description:"",name:"a11yHeadingTag",required:!1,tags:{},type:{name:"keyof IntrinsicElements"}},a11yHeadingText:{defaultValue:{value:"Page navigation"},declarations:[{fileName:"ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx",name:"TypeLiteral"}],description:"",name:"a11yHeadingText",required:!1,tags:{},type:{name:"string"}},onSelect:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx",name:"TypeLiteral"}],description:"",name:"onSelect",required:!1,tags:{},type:{name:"EbayEventHandler<HTMLElement>"}}},tags:{}}}catch{}const t=s(({tag:a="button",isLastItem:r=!1,href:c,children:m,onClick:h,...g})=>{const o=a==="a",i={...g,...r?{"aria-current":"location"}:{},href:o?c:void 0,onClick:o?void 0:h};return e.createElement("li",null,e.createElement(a,{...i},m),!r&&e.createElement(T,null))},"EbayBreadcrumbItem");try{t.displayName="breadcrumbitem",t.__docgenInfo={description:"",displayName:"breadcrumbitem",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx",methods:[],props:{tag:{defaultValue:{value:"button"},declarations:[{fileName:"ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx",name:"TypeLiteral"}],description:"",name:"tag",required:!1,tags:{},type:{name:'"a" | "button"'}},isLastItem:{defaultValue:{value:"false"},declarations:[{fileName:"ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx",name:"TypeLiteral"}],description:"",name:"isLastItem",required:!1,tags:{},type:{name:"boolean"}},_sp:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx",name:"TypeLiteral"}],description:"",name:"_sp",required:!1,tags:{},type:{name:"string"}},navsrc:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx",name:"TypeLiteral"}],description:"",name:"navsrc",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const{action:w}=__STORYBOOK_MODULE_ACTIONS__,V={component:n,title:"navigation & disclosure/ebay-breadcrumbs",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayBreadcrumbs, EbayBreadcrumbItem } from "@ebay/ui-core-react/ebay-breadcrumbs";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/breadcrumbs";
import "@ebay/skin/icon";
import "@ebay/skin/utility";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/breadcrumbs.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/utility.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayBreadcrumbs a11yHeadingText="Page navigation">
    <EbayBreadcrumbItem href="https://ebay.com">eBay</EbayBreadcrumbItem>
    <EbayBreadcrumbItem href="https://ebay.com/cars">Auto Parts</EbayBreadcrumbItem>
    <EbayBreadcrumbItem>Motors Parts</EbayBreadcrumbItem>
</EbayBreadcrumbs>
\`\`\``}}},argTypes:{a11yHeadingText:{description:"heading for breadcrumb which will be clipped (default: 'Page navigation')",control:"text"},a11yHeadingTag:{description:"heading tag for breadcrumb (default: `h2`)",control:"text"},onSelect:{description:"click breadcrumb items",action:"onSelect",table:{category:"Events",defaultValue:{summary:"`(event: MouseEvent"}}},href:{description:"anchor href; omitting the href will switch to a button",control:"text"}}},d=s(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,onSelect:s((r,{el:c})=>w("select")(r,{el:c}),"onSelect")},e.createElement(t,{href:"https://www.ebay.com/"},"eBay"),e.createElement(t,{href:"https://www.ebay.com/rpp/cell-phone-pda"},"Cell Phones, Smart Watches & Accessories"),e.createElement(t,{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905"},"Smart Watch Accessories"),e.createElement(t,null,"Smart Watch Bands"))),"Default"),p={render:s(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,a11yHeadingText:"Custom page navigation",a11yHeadingTag:"h3"},e.createElement(t,{href:"https://www.ebay.com/"},"eBay"),e.createElement(t,{href:"https://www.ebay.com/rpp/cell-phone-pda"},"Cell Phones, Smart Watches & Accessories"),e.createElement(t,{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905"},"Smart Watch Accessories"),e.createElement(t,{href:"https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906"},"Smart Watch Bands"))),"render"),name:"all links"},u=s(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,className:"custom-breadcrumbs","custom-attr":"value"},e.createElement(t,{href:"http://www.ebay.com/",navsrc:"{}",_sp:"p2345.m909.l34","data-track":"123"},"eBay"),e.createElement(t,{href:"https://www.ebay.com/rpp/cell-phone-pda",navsrc:"{}",_sp:"p2345.m909.l34","data-track":"456"},"Cell Phones, Smart Watches & Accessories"),e.createElement(t,{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",navsrc:"{}",_sp:"p2345.m909.l34","data-track":"789"},"Smart Watch Accessories"),e.createElement(t,null,"Smart Watch Bands"))),"CustomProps"),y=s(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,a11yHeadingText:"Custom page navigation",a11yHeadingTag:"h3",onSelect:w("select")},["eBay","Cell Phones, Smart Watches & Accessories","Smart Watch Accessories","Smart Watch Bands"].map((r,c)=>e.createElement(t,{key:c},r)))),"AllButtons"),q=["Default","AllLinks","CustomProps","AllButtons"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
        <EbayBreadcrumbs {...args} onSelect={(e, {
    el
  }) => action("select")(e, {
    el
  })}>
            <Item href="https://www.ebay.com/">eBay</Item>
            <Item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</Item>
            <Item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
                Smart Watch Accessories
            </Item>
            <Item>Smart Watch Bands</Item>
        </EbayBreadcrumbs>
    </>`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayBreadcrumbs {...args} a11yHeadingText="Custom page navigation" a11yHeadingTag="h3">
                <Item href="https://www.ebay.com/">eBay</Item>
                <Item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</Item>
                <Item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
                    Smart Watch Accessories
                </Item>
                <Item href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</Item>
            </EbayBreadcrumbs>
        </>,
  name: "all links"
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
        <EbayBreadcrumbs {...args} className="custom-breadcrumbs" custom-attr="value">
            <Item href="http://www.ebay.com/" navsrc="{}" _sp="p2345.m909.l34" data-track="123">
                eBay
            </Item>
            <Item href="https://www.ebay.com/rpp/cell-phone-pda" navsrc="{}" _sp="p2345.m909.l34" data-track="456">
                Cell Phones, Smart Watches & Accessories
            </Item>
            <Item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905" navsrc="{}" _sp="p2345.m909.l34" data-track="789">
                Smart Watch Accessories
            </Item>
            <Item>Smart Watch Bands</Item>
        </EbayBreadcrumbs>
    </>`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayBreadcrumbs {...args} a11yHeadingText="Custom page navigation" a11yHeadingTag="h3" onSelect={action("select")}>
            {["eBay", "Cell Phones, Smart Watches & Accessories", "Smart Watch Accessories", "Smart Watch Bands"].map((item, index) => <Item key={index}>{item}</Item>)}
        </EbayBreadcrumbs>
    </>`,...y.parameters?.docs?.source}}};export{y as AllButtons,p as AllLinks,u as CustomProps,d as Default,q as __namedExportsOrder,V as default};
