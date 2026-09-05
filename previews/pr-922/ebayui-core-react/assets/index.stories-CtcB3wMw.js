import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{n as a,t as o}from"./ebay-icon-chevron-right-12-DBiVJlGb.js";var s,c,l;function u(){return(u=t((()=>{s=e(n()),c=e(r()),l=({a11yHeadingText:e=`Page navigation`,a11yHeadingTag:t=`h2`,id:n=`ebay-breadcrumb`,children:r=[],className:i,onSelect:a=()=>{},...o})=>{let l=`${n}-breadcrumbs-heading`,u=s.Children.count(r)-1,d=t,f=s.Children.toArray(r).some(e=>e.props.href)?`a`:`button`;return s.createElement(`nav`,{...o,"aria-labelledby":l,className:(0,c.default)(`breadcrumbs`,i),role:`navigation`},s.createElement(d,{id:l,className:`clipped`},e),s.createElement(`ul`,null,s.Children.map(r,(e,t)=>{let n=t===u,{href:r,children:i}=e.props;return(0,s.cloneElement)(e,{tag:f,isLastItem:n,href:r,children:i,onClick:e=>a(e)})})))};try{l.displayName=`breadcrumbs`,l.__docgenInfo={description:``,displayName:`breadcrumbs`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx`,methods:[],props:{a11yHeadingTag:{defaultValue:{value:`h2`},declarations:[{fileName:`ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx`,name:`TypeLiteral`}],description:``,name:`a11yHeadingTag`,required:!1,tags:{},type:{name:`keyof IntrinsicElements | undefined`}},a11yHeadingText:{defaultValue:{value:`Page navigation`},declarations:[{fileName:`ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx`,name:`TypeLiteral`}],description:``,name:`a11yHeadingText`,required:!1,tags:{},type:{name:`string | undefined`}},onSelect:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-breadcrumbs/breadcrumbs.tsx`,name:`TypeLiteral`}],description:``,name:`onSelect`,required:!1,tags:{},type:{name:`EbayEventHandler<HTMLElement> | undefined`}}},tags:{}}}catch{}})))()}var d,f;function p(){return(p=t((()=>{d=e(n()),a(),f=({tag:e=`button`,isLastItem:t=!1,href:n,children:r,onClick:i,...a})=>{let s=e===`a`,c={...a,...t?{"aria-current":`location`}:{},href:s?n:void 0,onClick:s?void 0:i};return d.createElement(`li`,null,d.createElement(e,c,r),!t&&d.createElement(o,null))};try{f.displayName=`breadcrumbitem`,f.__docgenInfo={description:``,displayName:`breadcrumbitem`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx`,methods:[],props:{tag:{defaultValue:{value:`button`},declarations:[{fileName:`ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx`,name:`TypeLiteral`}],description:``,name:`tag`,required:!1,tags:{},type:{name:`"a" | "button" | undefined`}},isLastItem:{defaultValue:{value:`false`},declarations:[{fileName:`ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx`,name:`TypeLiteral`}],description:``,name:`isLastItem`,required:!1,tags:{},type:{name:`boolean | undefined`}},_sp:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx`,name:`TypeLiteral`}],description:``,name:`_sp`,required:!1,tags:{},type:{name:`string | undefined`}},navsrc:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-breadcrumbs/breadcrumb-item.tsx`,name:`TypeLiteral`}],description:``,name:`navsrc`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function m(){return(m=t((()=>{u(),p()})))()}var h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{n(),m(),h=i(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={component:l,title:`navigation & disclosure/ebay-breadcrumbs`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{a11yHeadingText:{description:`heading for breadcrumb which will be clipped (default: 'Page navigation')`,control:`text`},a11yHeadingTag:{description:"heading tag for breadcrumb (default: `h2`)",control:`text`},onSelect:{description:`click breadcrumb items`,action:`onSelect`,table:{category:`Events`,defaultValue:{summary:"`(event: MouseEvent"}}},href:{description:`anchor href; omitting the href will switch to a button`,control:`text`}}},v=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l,{...e,onSelect:(e,{el:t})=>g(`select`)(e,{el:t}),children:[(0,h.jsx)(f,{href:`https://www.ebay.com/`,children:`eBay`}),(0,h.jsx)(f,{href:`https://www.ebay.com/rpp/cell-phone-pda`,children:`Cell Phones, Smart Watches & Accessories`}),(0,h.jsx)(f,{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,children:`Smart Watch Accessories`}),(0,h.jsx)(f,{children:`Smart Watch Bands`})]})}),y={render:e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l,{...e,a11yHeadingText:`Custom page navigation`,a11yHeadingTag:`h3`,children:[(0,h.jsx)(f,{href:`https://www.ebay.com/`,children:`eBay`}),(0,h.jsx)(f,{href:`https://www.ebay.com/rpp/cell-phone-pda`,children:`Cell Phones, Smart Watches & Accessories`}),(0,h.jsx)(f,{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,children:`Smart Watch Accessories`}),(0,h.jsx)(f,{href:`https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906`,children:`Smart Watch Bands`})]})}),name:`all links`},b=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l,{...e,className:`custom-breadcrumbs`,"custom-attr":`value`,children:[(0,h.jsx)(f,{href:`http://www.ebay.com/`,navsrc:`{}`,_sp:`p2345.m909.l34`,"data-track":`123`,children:`eBay`}),(0,h.jsx)(f,{href:`https://www.ebay.com/rpp/cell-phone-pda`,navsrc:`{}`,_sp:`p2345.m909.l34`,"data-track":`456`,children:`Cell Phones, Smart Watches & Accessories`}),(0,h.jsx)(f,{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,navsrc:`{}`,_sp:`p2345.m909.l34`,"data-track":`789`,children:`Smart Watch Accessories`}),(0,h.jsx)(f,{children:`Smart Watch Bands`})]})}),x=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l,{...e,a11yHeadingText:`Custom page navigation`,a11yHeadingTag:`h3`,onSelect:g(`select`),children:[`eBay`,`Cell Phones, Smart Watches & Accessories`,`Smart Watch Accessories`,`Smart Watch Bands`].map((e,t)=>(0,h.jsx)(f,{children:e},t))})}),S=[`Default`,`AllLinks`,`CustomProps`,`AllButtons`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
        <EbayBreadcrumbs {...args} a11yHeadingText="Custom page navigation" a11yHeadingTag="h3" onSelect={action("select")}>
            {["eBay", "Cell Phones, Smart Watches & Accessories", "Smart Watch Accessories", "Smart Watch Bands"].map((item, index) => <Item key={index}>{item}</Item>)}
        </EbayBreadcrumbs>
    </>`,...x.parameters?.docs?.source}}}})))()}C();export{x as AllButtons,y as AllLinks,b as CustomProps,v as Default,S as __namedExportsOrder,_ as default};