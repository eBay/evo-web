var T=Object.defineProperty;var a=(i,u)=>T(i,"name",{value:u,configurable:!0});import{R as e}from"./iframe-_qbICbPR.js";import{E as n,a as c,b as m,c as p,d as b,e as t}from"./item-tile-Bz9RRqv4.js";import{E as y}from"./signal-DRZz0BLQ.js";import{E}from"./ebay-icon-heart-16-jgPZpu21.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-CtrxG01O.js";import"./file-preview-card-Dabb36i5.js";import"./icon-button-Dh8znZRM.js";import"./badge-DmawtjXq.js";import"./menu-button-DN-qCevy.js";import"./menu-item-separator-DeCGIr72.js";import"./index-DhKlWmW_.js";import"./ebay-icon-tick-16-FwdhvE_0.js";import"./button-BM2XwxRU.js";import"./progress-spinner-BAqoblhn.js";import"./ebay-icon-spinner-30--C34CSLs.js";import"./ebay-icon-chevron-down-12-DeQhXL1B.js";import"./index-BzamGs-v.js";import"./floating-ui-BohOzBHf.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-B4M_JL7Y.js";import"./index-D6ZmcIDG.js";import"./ebay-icon-overflow-vertical-16-Bofgp5HA.js";import"./ebay-icon-close-16-6UHpWK9l.js";import"./ebay-icon-delete-16-BgFF2bww.js";import"./ebay-icon-play-16-AOScoP5V.js";const U={title:"layout/ebay-item-tile",component:n,argTypes:{file:{description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{category:"File"}},layout:{control:{type:"select"},options:["gallery","list"],defaultValue:{summary:"gallery"},description:"The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information."},href:{control:{type:"text"},description:"The URL to navigate to when the item-tile is clicked. If not provided, the item will not be clickable."},a11yExternalLinkText:{type:"string",control:{type:"text"},description:'When provided, the preview link opens in a new tab (`target="_blank"`) and this text is rendered in a visually-hidden `<span class="clipped">` inside the anchor for screen readers with a ` - ` prefix automatically added (e.g. `"opens in new window or tab"`).'},onAction:{action:"onAction",description:"Triggered when the action button is clicked",table:{category:"Events",defaultValue:{summary:""}}},EbayItemTileAction:{description:"Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render.",options:["icon","aria-label"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayItemTile } from "@ebay/ui-core-react/ebay-item-tile";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/button";
import "@ebay/skin/file-preview-card";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/item-tile";
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
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/progress-spinner.css";
@import "@ebay/skin/signal.css";
\`\`\``}}}},r=a(i=>e.createElement(n,{file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(c,{"aria-label":"action label",icon:e.createElement(E,null)}),e.createElement(m,null,e.createElement(y,{status:"time-sensitive"},"Time Sensitive")),e.createElement(p,{href:"/collection"},"Apple iPhone 11 Pro Max "),e.createElement(b,null,"256GB Space Gray"),e.createElement(t,{className:"price"},"$29.99"),e.createElement(t,{as:"div"},e.createElement("a",{href:"https://ebay.com"},"Buy it now")),e.createElement(t,null,"Free shipping")),"Default"),s=a(i=>e.createElement(n,{file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(m,null,e.createElement(y,{status:"time-sensitive"},"Time Sensitive")),e.createElement(p,{href:"/collection"},"Apple iPhone 11 Pro Max "),e.createElement(b,null,"256GB Space Gray"),e.createElement(t,{className:"price"},"$29.99"),e.createElement(t,{as:"div"},e.createElement("a",{href:"https://ebay.com"},"Buy it now")),e.createElement(t,null,"Free shipping")),"NoAction"),o=a(i=>e.createElement(n,{file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(c,{"aria-label":"action label",icon:e.createElement(E,null)}),e.createElement(m,null,e.createElement(y,{status:"time-sensitive"},"Time Sensitive")),e.createElement(t,{className:"price"},"$29.99"),e.createElement(t,{as:"div"},e.createElement("a",{href:"https://ebay.com"},"Buy it now")),e.createElement(t,null,"Free shipping")),"WithoutSecondarySection"),l=a(i=>e.createElement(n,{href:"https://ebay.com",a11yExternalLinkText:"opens in new window or tab",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...i},e.createElement(c,{"aria-label":"action label",icon:e.createElement(E,null)}),e.createElement(p,{href:"https://ebay.com"},"Apple iPhone 11 Pro Max"),e.createElement(b,null,"256GB Space Gray"),e.createElement(t,{className:"price"},"$29.99")),"ExternalLink");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
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
    </EbayItemTile>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
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
    </EbayItemTile>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileSupertitle>
            <EbaySignal status="time-sensitive">Time Sensitive</EbaySignal>
        </EbayItemTileSupertitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
        <EbayItemTileDescription as="div">
            <a href="https://ebay.com">Buy it now</a>
        </EbayItemTileDescription>
        <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
    </EbayItemTile>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <EbayItemTile href="https://ebay.com" a11yExternalLinkText="opens in new window or tab" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileTitle href="https://ebay.com">Apple iPhone 11 Pro Max</EbayItemTileTitle>
        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
    </EbayItemTile>`,...l.parameters?.docs?.source}}};const V=["Default","NoAction","WithoutSecondarySection","ExternalLink"];export{r as Default,l as ExternalLink,s as NoAction,o as WithoutSecondarySection,V as __namedExportsOrder,U as default};
