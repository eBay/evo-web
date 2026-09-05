import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{r as i}from"./utils-i55QFFMK.js";import{t as a}from"./component-utils-CjDOSXvC.js";import{n as o}from"./iframe-RezWaW69.js";import{n as s,t as c}from"./ebay-icon-heart-16-JGVSY03H.js";import{n as l,t as u}from"./ebay-signal-DMV65Eu7.js";import{c as d,f,i as p,n as m,o as h,t as g,u as _}from"./ebay-item-tile-Dm2wU0sM.js";var v,y,b;function x(){return(x=t((()=>{v=e(n()),y=e(r()),a(),g(),b=({layout:e,className:t,onAction:n,children:r,...a})=>{let o=i(r,m);return v.createElement(`div`,{className:(0,y.default)(`layout-grid item-tile-group`,t,{"item-tile-group--list-view":e===`list`}),...a},v.createElement(`ul`,null,o.map((t,r)=>v.createElement(`li`,{key:r},(0,v.cloneElement)(t,{layout:e,onAction:e=>n&&n(e,{index:r})})))))};try{b.displayName=`itemtilegroup`,b.__docgenInfo={description:``,displayName:`itemtilegroup`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-item-tile-group/item-tile-group.tsx`,methods:[],props:{layout:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-item-tile-group/item-tile-group.tsx`,name:`TypeLiteral`}],description:``,name:`layout`,required:!1,tags:{},type:{name:`ItemTileLayout | undefined`}},onAction:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-item-tile-group/item-tile-group.tsx`,name:`TypeLiteral`}],description:``,name:`onAction`,required:!1,tags:{},type:{name:`FilePreviewCardActionHandler | undefined`}}},tags:{}}}catch{}})))()}function S(){return(S=t((()=>{x()})))()}var C,w,T,E;function D(){return(D=t((()=>{n(),u(),g(),S(),s(),C=o(),w={title:`layout/ebay-item-tile-group`,component:b,argTypes:{layout:{control:{type:`select`},options:[`gallery`,`list`],defaultValue:{summary:`gallery`},description:`The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information.`},onAction:{action:`onAction`,description:`Triggered when the action button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},EbayItemTile:{description:`Tile component that will be rendered in the group`,control:`text`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayItemTileGroup } from "@ebay/ui-core-react/ebay-item-tile-group";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/button";
import "@ebay/skin/file-preview-card";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/item-tile";
import "@ebay/skin/item-tile-group";
import "@ebay/skin/layout-grid";
import "@ebay/skin/menu";
import "@ebay/skin/menu-button";
import "@ebay/skin/progress-spinner";
import "@ebay/skin/signal";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/button.css";
@import "@ebay/skin/file-preview-card.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/item-tile.css";
@import "@ebay/skin/item-tile-group.css";
@import "@ebay/skin/layout-grid.css";
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/progress-spinner.css";
@import "@ebay/skin/signal.css";
\`\`\``}}}},T=e=>{let t=Array.from({length:5});return(0,C.jsx)(b,{...e,children:t.map((e,t)=>(0,C.jsxs)(m,{file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},children:[(0,C.jsx)(f,{"aria-label":`action label`,icon:(0,C.jsx)(c,{})}),(0,C.jsx)(_,{children:(0,C.jsx)(l,{status:`time-sensitive`,children:`Time Sensitive`})}),(0,C.jsx)(d,{href:`/collection`,children:`Apple iPhone 11 Pro Max `}),(0,C.jsx)(h,{children:`256GB Space Gray`}),(0,C.jsx)(p,{className:`price`,children:`$29.99`}),(0,C.jsx)(p,{as:`div`,children:(0,C.jsx)(`a`,{href:`https://ebay.com`,children:`Buy it now`})}),(0,C.jsx)(p,{children:`Free shipping`})]},t))})},E=[`Default`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const tiles = Array.from({
    length: 5
  });
  return <EbayItemTileGroup {...args}>
            {tiles.map((_, idx) => <EbayItemTile key={idx} file={{
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    }}>
                    <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
                    <EbayItemTileSupertitle>
                        <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
                    </EbayItemTileSupertitle>
                    <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                    <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
                    <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
                    <EbayItemTileDescription as="div">
                        <a href="https://ebay.com">Buy it now</a>
                    </EbayItemTileDescription>
                    <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
                </EbayItemTile>)}
        </EbayItemTileGroup>;
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as Default,E as __namedExportsOrder,w as default};