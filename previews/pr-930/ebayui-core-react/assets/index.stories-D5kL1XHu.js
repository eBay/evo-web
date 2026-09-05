var g=Object.defineProperty;var a=(t,i)=>g(t,"name",{value:i,configurable:!0});import{R as e,c as d,r as E}from"./iframe-DXKVC7Wu.js";import{E as T}from"./signal-C2KqZogX.js";import{E as p,a as f,b as k,c as I,d as h,e as l}from"./item-tile-DpaHfkEi.js";import{a as S}from"./utils-4VXCHhuo.js";import{E as v}from"./ebay-icon-heart-16-DhZp9Czf.js";import"./preload-helper-Cc2_yIPf.js";import"./file-preview-card-DAaQ17q2.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./menu-button-CGALqQxv.js";import"./menu-item-separator-qLY6E2OH.js";import"./index-ChCx--2D.js";import"./ebay-icon-tick-16-BRYYV87n.js";import"./button-BAvxCJp2.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./index-BzamGs-v.js";import"./floating-ui-Dh-39v5u.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-BiwhiUzw.js";import"./index-JeB-DIMX.js";import"./ebay-icon-overflow-vertical-16-VPm-z0Xi.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./ebay-icon-delete-16-K6EaJ9I9.js";import"./ebay-icon-play-16-BvSSooW5.js";const o=a(({layout:t,className:i,onAction:n,children:s,...c})=>{const y=S(s,p);return e.createElement("div",{className:d("layout-grid item-tile-group",i,{"item-tile-group--list-view":t==="list"}),...c},e.createElement("ul",null,y.map((b,m)=>e.createElement("li",{key:m},E.cloneElement(b,{layout:t,onAction:a(u=>n&&n(u,{index:m}),"onAction")})))))},"EbayItemTileGroup");try{o.displayName="itemtilegroup",o.__docgenInfo={description:"",displayName:"itemtilegroup",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-item-tile-group/item-tile-group.tsx",methods:[],props:{layout:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-item-tile-group/item-tile-group.tsx",name:"TypeLiteral"}],description:"",name:"layout",required:!1,tags:{},type:{name:"ItemTileLayout"}},onAction:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-item-tile-group/item-tile-group.tsx",name:"TypeLiteral"}],description:"",name:"onAction",required:!1,tags:{},type:{name:"FilePreviewCardActionHandler"}}},tags:{}}}catch{}const Y={title:"layout/ebay-item-tile-group",component:o,argTypes:{layout:{control:{type:"select"},options:["gallery","list"],defaultValue:{summary:"gallery"},description:"The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information."},onAction:{action:"onAction",description:"Triggered when the action button is clicked",table:{category:"Events",defaultValue:{summary:""}}},EbayItemTile:{description:"Tile component that will be rendered in the group",control:"text"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},r=a(t=>{const i=Array.from({length:5});return e.createElement(o,{...t},i.map((n,s)=>e.createElement(p,{key:s,file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}},e.createElement(f,{"aria-label":"action label",icon:e.createElement(v,null)}),e.createElement(k,null,e.createElement(T,{status:"time-sensitive"},"Time Sensitive")),e.createElement(I,{href:"/collection"},"Apple iPhone 11 Pro Max "),e.createElement(h,null,"256GB Space Gray"),e.createElement(l,{className:"price"},"$29.99"),e.createElement(l,{as:"div"},e.createElement("a",{href:"https://ebay.com"},"Buy it now")),e.createElement(l,null,"Free shipping"))))},"Default"),Z=["Default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};export{r as Default,Z as __namedExportsOrder,Y as default};
