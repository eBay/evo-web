import{r as y,j as e}from"./iframe-DjAcWYNC.js";import{c as f}from"./index-C04a5A_d.js";import{E as w}from"./chevron-right-12-x4lYoAfk.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-OW-XSJJv.js";function v({item:t,isLast:n}){const{content:a,as:r="a",href:l,...s}=t;return e.jsx(r,{...s,href:l,"aria-current":n?"location":void 0,children:a})}function x({item:t,isLast:n}){const{content:a,...r}=t;return e.jsx("button",{...r,"aria-current":n?"location":void 0,children:a})}function h({a11yHeadingText:t="Page navigation",a11yHeadingTag:n="h2",items:a,className:r,...l}){const s=y.useId();if(!a)return null;const g=a.length-1;return e.jsxs("nav",{...l,role:"navigation","aria-labelledby":s,className:f("breadcrumbs","breadcrumb--overflow",r),children:[e.jsx(n,{id:s,className:"clipped",children:t}),e.jsx("ul",{children:a.map((o,u)=>{const p=u===g,b="href"in o&&o.href!==void 0;return e.jsxs("li",{children:[b?e.jsx(v,{item:o,isLast:p}):e.jsx(x,{item:o,isLast:p}),!p&&e.jsx(w,{})]},u)})})]})}try{h.displayName="EvoBreadcrumbs",h.__docgenInfo={description:"",displayName:"EvoBreadcrumbs",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/breadcrumbs/breadcrumbs.tsx",methods:[],props:{a11yHeadingText:{defaultValue:{value:"Page navigation"},declarations:[{fileName:"evo-react/src/breadcrumbs/types.ts",name:"TypeLiteral"}],description:'Clipped heading text that labels the breadcrumb navigation region. English default to be overridden is `"Page navigation"`.',name:"a11yHeadingText",required:!1,tags:{},type:{name:"string"}},a11yHeadingTag:{defaultValue:{value:"h2"},declarations:[{fileName:"evo-react/src/breadcrumbs/types.ts",name:"TypeLiteral"}],description:"HTML heading tag used for the clipped heading. Defaults to `h2`.",name:"a11yHeadingTag",required:!1,tags:{},type:{name:"keyof HTMLElementTagNameMap"}},items:{defaultValue:null,declarations:[{fileName:"evo-react/src/breadcrumbs/types.ts",name:"TypeLiteral"}],description:"List of items rendered as anchors when `href` is present or buttons otherwise.",name:"items",required:!0,tags:{},type:{name:"BreadcrumbItem[]"}},a11yMenuButtonText:{defaultValue:null,declarations:[{fileName:"evo-react/src/breadcrumbs/types.ts",name:"TypeLiteral"}],description:"",name:"a11yMenuButtonText",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const H={title:"navigation & disclosure/evo-breadcrumbs",component:h,tags:["autodocs"],parameters:{docs:{description:{component:`
A breadcrumb navigation component that renders a list of hierarchical links or buttons, displaying the path of the current resource.

## Usage

\`\`\`tsx
import { EvoBreadcrumbs } from "@evo-web/react/breadcrumbs";
\`\`\`
        `}}},argTypes:{a11yHeadingText:{control:"text"},a11yHeadingTag:{control:"text"},items:{control:"object"}},args:{a11yHeadingText:"Page navigation",items:[{href:"https://www.ebay.com/",content:"eBay"},{href:"https://www.ebay.com/rpp/cell-phone-pda",content:"Cell Phones, Smart Watches & Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",content:"Smart Watch Accessories"},{content:"Smart Watch Bands"}]}},c={},i={args:{a11yHeadingText:"Custom page navigation",a11yHeadingTag:"h3",items:[{href:"https://www.ebay.com/",content:"eBay"},{href:"https://www.ebay.com/rpp/cell-phone-pda",content:"Cell Phones, Smart Watches & Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",content:"Smart Watch Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",content:"Smart Watch Bands"}]}},m={args:{a11yHeadingText:"Custom page navigation",a11yHeadingTag:"h3",items:[{content:"eBay"},{content:"Cell Phones, Smart Watches & Accessories"},{content:"Smart Watch Accessories"},{content:"Smart Watch Bands"}]}},d={args:{items:[{content:"Smart Watch Bands"}]}},_=["Default","AllLinks","AllButtons","SingleItem"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    a11yHeadingText: "Custom page navigation",
    a11yHeadingTag: "h3",
    items: [{
      href: "https://www.ebay.com/",
      content: "eBay"
    }, {
      href: "https://www.ebay.com/rpp/cell-phone-pda",
      content: "Cell Phones, Smart Watches & Accessories"
    }, {
      href: "https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",
      content: "Smart Watch Accessories"
    }, {
      href: "https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",
      content: "Smart Watch Bands"
    }]
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    a11yHeadingText: "Custom page navigation",
    a11yHeadingTag: "h3",
    items: [{
      content: "eBay"
    }, {
      content: "Cell Phones, Smart Watches & Accessories"
    }, {
      content: "Smart Watch Accessories"
    }, {
      content: "Smart Watch Bands"
    }]
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      content: "Smart Watch Bands"
    }]
  }
}`,...d.parameters?.docs?.source}}};export{m as AllButtons,i as AllLinks,c as Default,d as SingleItem,_ as __namedExportsOrder,H as default};
