var z=Object.defineProperty;var r=(e,n)=>z(e,"name",{value:n,configurable:!0});import{r as k,R as a,c as J}from"./iframe-DXKVC7Wu.js";import{E as X}from"./ebay-icon-chevron-down-12-Bx23oBI8.js";import{E as K}from"./ebay-icon-sneaker-16-DeRG-wVc.js";import"./preload-helper-Cc2_yIPf.js";const t=r(({children:e,selected:n,defaultSelected:N=!1,expanded:L,defaultExpanded:T=!1,variant:l="default",icon:V,image:I,a11ySelectedText:w="Filter Applied",href:_,className:A,onClick:D,disabled:v,...q})=>{const[R,W]=k.useState(N),[H,P]=k.useState(T),M=a.useRef(null),c=n!==void 0?n:R,C=L!==void 0?L:H,i=l==="menu",s=!!_&&!i;k.useLayoutEffect(()=>{M.current?.classList?.add("filter-chip--animated")},[]);const U=r(O=>{if(!v){let F=C,S=c;i?(F=!C,P(F)):(S=!c,W(S)),D?.(O,{expanded:F,selected:S})}},"handleClick"),j=J("filter-chip",{"filter-chip--expressive":l==="expressive","filter-chip--selected":(s||i)&&c},A),B=s?"a":"button";return a.createElement(B,{...q,ref:M,className:j,onClick:U,href:v?void 0:_,type:s?void 0:"button","aria-pressed":!s&&!i?c?"true":"false":void 0,"aria-expanded":i?C?"true":"false":void 0,disabled:s?void 0:v},l==="expressive"?a.createElement("span",{className:"filter-chip__media"},I):null,l==="default"?V:null,a.createElement("span",{className:"filter-chip__text"},e,c&&(s||i)?a.createElement("span",{className:"clipped"},"- ",w):null),l==="menu"?a.createElement(X,{className:"filter-chip__trailing"}):null)},"EbayFilterChip");try{t.displayName="filterchip",t.__docgenInfo={description:"",displayName:"filterchip",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"selected",required:!1,tags:{},type:{name:"boolean"}},defaultSelected:{defaultValue:{value:"false"},declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"defaultSelected",required:!1,tags:{},type:{name:"boolean"}},expanded:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"expanded",required:!1,tags:{},type:{name:"boolean"}},defaultExpanded:{defaultValue:{value:"false"},declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"defaultExpanded",required:!1,tags:{},type:{name:"boolean"}},variant:{defaultValue:{value:"default"},declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"variant",required:!1,tags:{},type:{name:'"menu" | "default" | "expressive"'}},icon:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"icon",required:!1,tags:{},type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},image:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"image",required:!1,tags:{},type:{name:"ReactElement<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, string | JSXElementConstructor<any>>"}},a11ySelectedText:{defaultValue:{value:"Filter Applied"},declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"a11ySelectedText",required:!1,tags:{},type:{name:"string"}},onClick:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx",name:"TypeLiteral"}],description:"",name:"onClick",required:!1,tags:{},type:{name:"EbayMouseEventHandler<Element, FilterChipEvent>"}}},tags:{}}}catch{}const ee={component:t,title:"form input/ebay-filter-chip",argTypes:{variant:{description:"Filter chip variant",table:{defaultValue:{summary:"default"}},options:["default","expressive","menu"],control:{type:"select"}},defaultSelected:{type:"boolean",description:"Whether the chip is selected initially (uncontrolled)",table:{defaultValue:{summary:"false"}}},selected:{type:"boolean",description:"Whether the chip is selected (controlled)",table:{defaultValue:{summary:"false"}}},defaultExpanded:{type:"boolean",description:"Whether the menu chip is expanded initially (uncontrolled)",table:{defaultValue:{summary:"false"}}},expanded:{type:"boolean",description:"Whether the menu chip is expanded (controlled)",table:{defaultValue:{summary:"false"}}},disabled:{type:"boolean",description:"Whether the chip is disabled",table:{defaultValue:{summary:"false"}}},href:{type:"string",description:"URL for anchor variant"},a11ySelectedText:{type:"string",description:"Accessibility text for selected state",table:{defaultValue:{summary:"Filter Applied"}}},onClick:{action:"onClick",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"event, { selected, expanded, originalEvent }"}}},icon:{description:"Icon props for default variant",control:"text"},image:{description:"Image props for expressive variant",control:"text"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx
import { EbayFilterChip } from "@ebay/ui-core-react/ebay-filter-chip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/filter-chip";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/filter-chip.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayFilterChip>Filter Chip</EbayFilterChip>
\`\`\``}}}},o=r(e=>a.createElement(t,{...e},"Default Filter"),"Default"),p=r(e=>a.createElement(t,{...e,selected:!0},"Selected Filter"),"Selected"),d=r(e=>a.createElement(t,{...e,icon:a.createElement(K,null)},"Filter with Icon"),"WithIcon"),m=r(e=>a.createElement(t,{...e,variant:"expressive",image:a.createElement("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png",alt:"Category"})},"Expressive Filter"),"Expressive"),u=r(e=>a.createElement(t,{...e,variant:"expressive",selected:!0,image:a.createElement("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png",alt:"Category"})},"Expressive Selected"),"ExpressiveSelected"),y=r(e=>a.createElement(t,{...e,variant:"menu"},"Menu Filter"),"Menu"),f=r(e=>a.createElement(t,{...e,variant:"menu",selected:!0},"Menu Selected"),"MenuSelected"),h=r(e=>a.createElement(t,{...e,variant:"menu",expanded:!0},"Menu Expanded"),"MenuExpanded"),b=r(e=>a.createElement(t,{...e,href:"https://ebay.com"},"Link Filter"),"Anchor"),E=r(e=>a.createElement(t,{...e,href:"https://ebay.com",selected:!0},"Selected Link"),"AnchorSelected"),g=r(e=>a.createElement(t,{...e,disabled:!0},"Disabled Filter"),"Disabled"),x=r(e=>a.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},a.createElement(t,{...e},"Brand"),a.createElement(t,{...e,selected:!0},"Color"),a.createElement(t,{...e},"Size"),a.createElement(t,{...e,variant:"menu"},"Price Range"),a.createElement(t,{...e,disabled:!0},"Out of Stock")),"Collection"),ae=["Default","Selected","WithIcon","Expressive","ExpressiveSelected","Menu","MenuSelected","MenuExpanded","Anchor","AnchorSelected","Disabled","Collection"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <EbayFilterChip {...args}>Default Filter</EbayFilterChip>",...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} selected>
        Selected Filter
    </EbayFilterChip>`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} icon={<EbayIconSneaker16 />}>
        Filter with Icon
    </EbayFilterChip>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="expressive" image={<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" alt="Category" />}>
        Expressive Filter
    </EbayFilterChip>`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="expressive" selected image={<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" alt="Category" />}>
        Expressive Selected
    </EbayFilterChip>`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="menu">
        Menu Filter
    </EbayFilterChip>`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="menu" selected>
        Menu Selected
    </EbayFilterChip>`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="menu" expanded>
        Menu Expanded
    </EbayFilterChip>`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} href="https://ebay.com">
        Link Filter
    </EbayFilterChip>`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} href="https://ebay.com" selected>
        Selected Link
    </EbayFilterChip>`,...E.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} disabled>
        Disabled Filter
    </EbayFilterChip>`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  gap: "8px",
  flexWrap: "wrap"
}}>
        <EbayFilterChip {...args}>Brand</EbayFilterChip>
        <EbayFilterChip {...args} selected>
            Color
        </EbayFilterChip>
        <EbayFilterChip {...args}>Size</EbayFilterChip>
        <EbayFilterChip {...args} variant="menu">
            Price Range
        </EbayFilterChip>
        <EbayFilterChip {...args} disabled>
            Out of Stock
        </EbayFilterChip>
    </div>`,...x.parameters?.docs?.source}}};export{b as Anchor,E as AnchorSelected,x as Collection,o as Default,g as Disabled,m as Expressive,u as ExpressiveSelected,y as Menu,h as MenuExpanded,f as MenuSelected,p as Selected,d as WithIcon,ae as __namedExportsOrder,ee as default};
