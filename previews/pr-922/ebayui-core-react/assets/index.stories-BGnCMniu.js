import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{n as a,t as o}from"./ebay-icon-chevron-down-12-oXJrdfNI.js";import{n as s,t as c}from"./ebay-icon-sneaker-16-D0Ae0qxv.js";var l,u,d;function f(){return(f=t((()=>{l=e(r()),u=e(n()),a(),d=({children:e,selected:t,defaultSelected:n=!1,expanded:r,defaultExpanded:i=!1,variant:a=`default`,icon:s,image:c,a11ySelectedText:d=`Filter Applied`,href:f,className:p,onClick:m,disabled:h,...g})=>{let[_,v]=(0,u.useState)(n),[y,b]=(0,u.useState)(i),x=u.useRef(null),S=t===void 0?_:t,C=r===void 0?y:r,w=a===`menu`,T=!!f&&!w;(0,u.useLayoutEffect)(()=>{x.current?.classList?.add(`filter-chip--animated`)},[]);let E=e=>{if(!h){let t=C,n=S;w?(t=!C,b(t)):(n=!S,v(n)),m?.(e,{expanded:t,selected:n})}},D=(0,l.default)(`filter-chip`,{"filter-chip--expressive":a===`expressive`,"filter-chip--selected":(T||w)&&S},p),O=T?`a`:`button`;return u.createElement(O,{...g,ref:x,className:D,onClick:E,href:h?void 0:f,type:T?void 0:`button`,"aria-pressed":!T&&!w?S?`true`:`false`:void 0,"aria-expanded":w?C?`true`:`false`:void 0,disabled:T?void 0:h},a===`expressive`?u.createElement(`span`,{className:`filter-chip__media`},c):null,a==="default"?s:null,u.createElement(`span`,{className:`filter-chip__text`},e,S&&(T||w)?u.createElement(`span`,{className:`clipped`},`- `,d):null),a===`menu`?u.createElement(o,{className:`filter-chip__trailing`}):null)};try{d.displayName=`filterchip`,d.__docgenInfo={description:``,displayName:`filterchip`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}},defaultSelected:{defaultValue:{value:`false`},declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`defaultSelected`,required:!1,tags:{},type:{name:`boolean | undefined`}},expanded:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`expanded`,required:!1,tags:{},type:{name:`boolean | undefined`}},defaultExpanded:{defaultValue:{value:`false`},declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`defaultExpanded`,required:!1,tags:{},type:{name:`boolean | undefined`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"menu" | "default" | "expressive" | undefined`}},icon:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`icon`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},image:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`image`,required:!1,tags:{},type:{name:`ReactElement<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, string | JSXElementConstructor<...>> | undefined`}},a11ySelectedText:{defaultValue:{value:`Filter Applied`},declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`a11ySelectedText`,required:!1,tags:{},type:{name:`string | undefined`}},onClick:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter-chip/filter-chip.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`EbayMouseEventHandler<Element, FilterChipEvent> | undefined`}}},tags:{}}}catch{}})))()}function p(){return(p=t((()=>{f()})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{n(),p(),s(),m=i(),h={component:d,title:`form input/ebay-filter-chip`,argTypes:{variant:{description:`Filter chip variant`,table:{defaultValue:{summary:`default`}},options:[`default`,`expressive`,`menu`],control:{type:`select`}},defaultSelected:{type:`boolean`,description:`Whether the chip is selected initially (uncontrolled)`,table:{defaultValue:{summary:`false`}}},selected:{type:`boolean`,description:`Whether the chip is selected (controlled)`,table:{defaultValue:{summary:`false`}}},defaultExpanded:{type:`boolean`,description:`Whether the menu chip is expanded initially (uncontrolled)`,table:{defaultValue:{summary:`false`}}},expanded:{type:`boolean`,description:`Whether the menu chip is expanded (controlled)`,table:{defaultValue:{summary:`false`}}},disabled:{type:`boolean`,description:`Whether the chip is disabled`,table:{defaultValue:{summary:`false`}}},href:{type:`string`,description:`URL for anchor variant`},a11ySelectedText:{type:`string`,description:`Accessibility text for selected state`,table:{defaultValue:{summary:`Filter Applied`}}},onClick:{action:`onClick`,description:`Triggered on click`,table:{category:`Events`,defaultValue:{summary:`event, { selected, expanded, originalEvent }`}}},icon:{description:`Icon props for default variant`,control:`text`},image:{description:`Image props for expressive variant`,control:`text`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},g=e=>(0,m.jsx)(d,{...e,children:`Default Filter`}),_=e=>(0,m.jsx)(d,{...e,selected:!0,children:`Selected Filter`}),v=e=>(0,m.jsx)(d,{...e,icon:(0,m.jsx)(c,{}),children:`Filter with Icon`}),y=e=>(0,m.jsx)(d,{...e,variant:`expressive`,image:(0,m.jsx)(`img`,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png`,alt:`Category`}),children:`Expressive Filter`}),b=e=>(0,m.jsx)(d,{...e,variant:`expressive`,selected:!0,image:(0,m.jsx)(`img`,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png`,alt:`Category`}),children:`Expressive Selected`}),x=e=>(0,m.jsx)(d,{...e,variant:`menu`,children:`Menu Filter`}),S=e=>(0,m.jsx)(d,{...e,variant:`menu`,selected:!0,children:`Menu Selected`}),C=e=>(0,m.jsx)(d,{...e,variant:`menu`,expanded:!0,children:`Menu Expanded`}),w=e=>(0,m.jsx)(d,{...e,href:`https://ebay.com`,children:`Link Filter`}),T=e=>(0,m.jsx)(d,{...e,href:`https://ebay.com`,selected:!0,children:`Selected Link`}),E=e=>(0,m.jsx)(d,{...e,disabled:!0,children:`Disabled Filter`}),D=e=>(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,m.jsx)(d,{...e,children:`Brand`}),(0,m.jsx)(d,{...e,selected:!0,children:`Color`}),(0,m.jsx)(d,{...e,children:`Size`}),(0,m.jsx)(d,{...e,variant:`menu`,children:`Price Range`}),(0,m.jsx)(d,{...e,disabled:!0,children:`Out of Stock`})]}),O=[`Default`,`Selected`,`WithIcon`,`Expressive`,`ExpressiveSelected`,`Menu`,`MenuSelected`,`MenuExpanded`,`Anchor`,`AnchorSelected`,`Disabled`,`Collection`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args}>Default Filter</EbayFilterChip>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} selected>
        Selected Filter
    </EbayFilterChip>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} icon={<EbayIconSneaker16 />}>
        Filter with Icon
    </EbayFilterChip>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="expressive" image={<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" alt="Category" />}>
        Expressive Filter
    </EbayFilterChip>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="expressive" selected image={<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" alt="Category" />}>
        Expressive Selected
    </EbayFilterChip>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="menu">
        Menu Filter
    </EbayFilterChip>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="menu" selected>
        Menu Selected
    </EbayFilterChip>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} variant="menu" expanded>
        Menu Expanded
    </EbayFilterChip>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} href="https://ebay.com">
        Link Filter
    </EbayFilterChip>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} href="https://ebay.com" selected>
        Selected Link
    </EbayFilterChip>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayFilterChip {...args} disabled>
        Disabled Filter
    </EbayFilterChip>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...D.parameters?.docs?.source}}}})))()}k();export{w as Anchor,T as AnchorSelected,D as Collection,g as Default,E as Disabled,y as Expressive,b as ExpressiveSelected,x as Menu,C as MenuExpanded,S as MenuSelected,_ as Selected,v as WithIcon,O as __namedExportsOrder,h as default};