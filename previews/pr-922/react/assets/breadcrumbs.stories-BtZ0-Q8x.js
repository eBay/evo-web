import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./chevron-right-12-BJyEUBcw.js";import{t as s}from"./utility-q4jtXzPL.js";function c(){return(c=t((()=>{})))()}function l({item:e,isLast:t}){let{content:n,as:r=`a`,href:i,...a}=e;return(0,m.jsx)(r,{...a,href:i,"aria-current":t?`location`:void 0,children:n})}function u({item:e,isLast:t}){let{content:n,...r}=e;return(0,m.jsx)(`button`,{...r,"aria-current":t?`location`:void 0,children:n})}function d({a11yHeadingText:e=`Page navigation`,a11yHeadingTag:t=`h2`,items:n,className:r,...i}){let a=(0,f.useId)();if(!n)return null;let s=n.length-1;return(0,m.jsxs)(`nav`,{...i,role:`navigation`,"aria-labelledby":a,className:(0,p.default)(`breadcrumbs`,`breadcrumb--overflow`,r),children:[(0,m.jsx)(t,{id:a,className:`clipped`,children:e}),(0,m.jsx)(`ul`,{children:n.map((e,t)=>{let n=t===s,r=`href`in e&&e.href!==void 0;return(0,m.jsxs)(`li`,{children:[r?(0,m.jsx)(l,{item:e,isLast:n}):(0,m.jsx)(u,{item:e,isLast:n}),!n&&(0,m.jsx)(o,{})]},t)})})]})}var f,p,m;function h(){return(h=t((()=>{f=n(),p=e(i(),1),a(),c(),s(),m=r();try{d.displayName=`EvoBreadcrumbs`,d.__docgenInfo={description:``,displayName:`EvoBreadcrumbs`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/breadcrumbs/breadcrumbs.tsx`,methods:[],props:{a11yHeadingText:{defaultValue:{value:`Page navigation`},declarations:[{fileName:`evo-react/src/breadcrumbs/types.ts`,name:`TypeLiteral`}],description:'Clipped heading text that labels the breadcrumb navigation region. English default to be overridden is `"Page navigation"`.',name:`a11yHeadingText`,required:!1,tags:{},type:{name:`string | undefined`}},a11yHeadingTag:{defaultValue:{value:`h2`},declarations:[{fileName:`evo-react/src/breadcrumbs/types.ts`,name:`TypeLiteral`}],description:"HTML heading tag used for the clipped heading. Defaults to `h2`.",name:`a11yHeadingTag`,required:!1,tags:{},type:{name:`keyof HTMLElementTagNameMap | undefined`}},items:{defaultValue:null,declarations:[{fileName:`evo-react/src/breadcrumbs/types.ts`,name:`TypeLiteral`}],description:"List of items rendered as anchors when `href` is present or buttons otherwise.",name:`items`,required:!0,tags:{},type:{name:`BreadcrumbItem[] | undefined`}},a11yMenuButtonText:{defaultValue:null,declarations:[{fileName:`evo-react/src/breadcrumbs/types.ts`,name:`TypeLiteral`}],description:``,name:`a11yMenuButtonText`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var g,_,v,y,b,x;function S(){return(S=t((()=>{h(),g={title:`navigation & disclosure/evo-breadcrumbs`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`
A breadcrumb navigation component that renders a list of hierarchical links or buttons, displaying the path of the current resource.

## Usage

\`\`\`tsx
import { EvoBreadcrumbs } from "@evo-web/react/breadcrumbs";
\`\`\`
        `}}},argTypes:{a11yHeadingText:{control:`text`},a11yHeadingTag:{control:`text`},items:{control:`object`}},args:{a11yHeadingText:`Page navigation`,items:[{href:`https://www.ebay.com/`,content:`eBay`},{href:`https://www.ebay.com/rpp/cell-phone-pda`,content:`Cell Phones, Smart Watches & Accessories`},{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,content:`Smart Watch Accessories`},{content:`Smart Watch Bands`}]}},_={},v={args:{a11yHeadingText:`Custom page navigation`,a11yHeadingTag:`h3`,items:[{href:`https://www.ebay.com/`,content:`eBay`},{href:`https://www.ebay.com/rpp/cell-phone-pda`,content:`Cell Phones, Smart Watches & Accessories`},{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,content:`Smart Watch Accessories`},{href:`https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906`,content:`Smart Watch Bands`}]}},y={args:{a11yHeadingText:`Custom page navigation`,a11yHeadingTag:`h3`,items:[{content:`eBay`},{content:`Cell Phones, Smart Watches & Accessories`},{content:`Smart Watch Accessories`},{content:`Smart Watch Bands`}]}},b={args:{items:[{content:`Smart Watch Bands`}]}},x=[`Default`,`AllLinks`,`AllButtons`,`SingleItem`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      content: "Smart Watch Bands"
    }]
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as AllButtons,v as AllLinks,_ as Default,b as SingleItem,x as __namedExportsOrder,g as default};