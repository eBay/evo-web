import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{n as r,t as i}from"./ebay-icon-heart-16-JGVSY03H.js";import{n as a,t as o}from"./ebay-signal-DMV65Eu7.js";import{c as s,f as c,i as l,n as u,o as d,t as f,u as p}from"./ebay-item-tile-Dm2wU0sM.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),f(),o(),r(),m=n(),h={title:`layout/ebay-item-tile`,component:u,argTypes:{file:{description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{category:`File`}},layout:{control:{type:`select`},options:[`gallery`,`list`],defaultValue:{summary:`gallery`},description:`The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information.`},href:{control:{type:`text`},description:`The URL to navigate to when the item-tile is clicked. If not provided, the item will not be clickable.`},a11yExternalLinkText:{type:`string`,control:{type:`text`},description:'When provided, the preview link opens in a new tab (`target="_blank"`) and this text is rendered in a visually-hidden `<span class="clipped">` inside the anchor for screen readers with a ` - ` prefix automatically added (e.g. `"opens in new window or tab"`).'},onAction:{action:`onAction`,description:`Triggered when the action button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},EbayItemTileAction:{description:"Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render.",options:[`icon`,`aria-label`],control:{type:`select`}}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},g=e=>(0,m.jsxs)(u,{file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e,children:[(0,m.jsx)(c,{"aria-label":`action label`,icon:(0,m.jsx)(i,{})}),(0,m.jsx)(p,{children:(0,m.jsx)(a,{status:`time-sensitive`,children:`Time Sensitive`})}),(0,m.jsx)(s,{href:`/collection`,children:`Apple iPhone 11 Pro Max `}),(0,m.jsx)(d,{children:`256GB Space Gray`}),(0,m.jsx)(l,{className:`price`,children:`$29.99`}),(0,m.jsx)(l,{as:`div`,children:(0,m.jsx)(`a`,{href:`https://ebay.com`,children:`Buy it now`})}),(0,m.jsx)(l,{children:`Free shipping`})]}),_=e=>(0,m.jsxs)(u,{file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e,children:[(0,m.jsx)(p,{children:(0,m.jsx)(a,{status:`time-sensitive`,children:`Time Sensitive`})}),(0,m.jsx)(s,{href:`/collection`,children:`Apple iPhone 11 Pro Max `}),(0,m.jsx)(d,{children:`256GB Space Gray`}),(0,m.jsx)(l,{className:`price`,children:`$29.99`}),(0,m.jsx)(l,{as:`div`,children:(0,m.jsx)(`a`,{href:`https://ebay.com`,children:`Buy it now`})}),(0,m.jsx)(l,{children:`Free shipping`})]}),v=e=>(0,m.jsxs)(u,{file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e,children:[(0,m.jsx)(c,{"aria-label":`action label`,icon:(0,m.jsx)(i,{})}),(0,m.jsx)(p,{children:(0,m.jsx)(a,{status:`time-sensitive`,children:`Time Sensitive`})}),(0,m.jsx)(l,{className:`price`,children:`$29.99`}),(0,m.jsx)(l,{as:`div`,children:(0,m.jsx)(`a`,{href:`https://ebay.com`,children:`Buy it now`})}),(0,m.jsx)(l,{children:`Free shipping`})]}),y=e=>(0,m.jsxs)(u,{href:`https://ebay.com`,a11yExternalLinkText:`opens in new window or tab`,file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e,children:[(0,m.jsx)(c,{"aria-label":`action label`,icon:(0,m.jsx)(i,{})}),(0,m.jsx)(s,{href:`https://ebay.com`,children:`Apple iPhone 11 Pro Max`}),(0,m.jsx)(d,{children:`256GB Space Gray`}),(0,m.jsx)(l,{className:`price`,children:`$29.99`})]}),b=[`Default`,`NoAction`,`WithoutSecondarySection`,`ExternalLink`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
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
    </EbayItemTile>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
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
    </EbayItemTile>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <EbayItemTile file={{
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
    </EbayItemTile>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <EbayItemTile href="https://ebay.com" a11yExternalLinkText="opens in new window or tab" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args}>
        <EbayItemTileAction aria-label="action label" icon={<EbayIconHeart16 />} />
        <EbayItemTileTitle href="https://ebay.com">Apple iPhone 11 Pro Max</EbayItemTileTitle>
        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
    </EbayItemTile>`,...y.parameters?.docs?.source}}}})))()}x();export{g as Default,y as ExternalLink,_ as NoAction,v as WithoutSecondarySection,b as __namedExportsOrder,h as default};