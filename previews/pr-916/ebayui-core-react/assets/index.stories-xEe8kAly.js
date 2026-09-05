var g=Object.defineProperty;var a=(e,y)=>g(e,"name",{value:y,configurable:!0});import{R as t}from"./iframe-BDDq1BM_.js";import{E as r,a as b}from"./file-preview-card-CPZNM5HO.js";import{E as f}from"./ebay-icon-heart-16-CBNnQjrh.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-DeH99ZLa.js";import"./icon-button-DirQgwoe.js";import"./badge-Bu3TbvDp.js";import"./menu-button-BFxflXmj.js";import"./menu-item-separator-CizW2sAE.js";import"./index-DhKlWmW_.js";import"./ebay-icon-tick-16-DjGoc2dK.js";import"./button-DDNVLtEp.js";import"./progress-spinner-BhKf5agR.js";import"./ebay-icon-spinner-30-DI0__E8t.js";import"./ebay-icon-chevron-down-12-BoZLj0OE.js";import"./index-BzamGs-v.js";import"./floating-ui-DVemyMPQ.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-C-3pjZXT.js";import"./index-BGxjZ8Gz.js";import"./ebay-icon-overflow-vertical-16-Do-gU6Bl.js";import"./ebay-icon-close-16-B-Wb-TiH.js";import"./ebay-icon-delete-16-sf7MF7Lj.js";import"./ebay-icon-play-16-ColMlWak.js";const G={title:"media/ebay-file-preview-card",component:r,argTypes:{a11yCancelUploadText:{type:"string",control:{type:"text"},description:"a11y text for cancel upload button"},file:{description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{category:"File"}},status:{type:"string",control:{type:"text"},description:'Status of the file, can be `"uploading"` or `undefined`'},infoText:{type:"string",control:{type:"text"},description:"Text to display info in file if not image"},a11yMenuButtonText:{table:{category:"Menu Actions"},description:"Accessibility text for menu button. This is required when menuActions is set"},menuActions:{description:"Array of menu actions, containing `event` and `label`",table:{category:"Menu Actions"}},href:{type:"string",control:{type:"text"},description:"href that will wrap the preview card image"},seeMore:{type:"number",control:{type:"number"},description:'Passing a number here will convert the card to a "see more" card'},footerTitle:{type:"string",control:{type:"text"},description:"Title to display beneath the file, usually the filename"},footerSubtitle:{type:"string",control:{type:"text"},description:"Subtitle to display beneath the file title"},onMenuAction:{action:"onMenuAction",description:"Triggered when an action is selected from the menu. ",table:{category:"Events",defaultValue:{summary:"name, event /* from ebay-menu-button */"}}},onSeeMore:{action:"onSeeMore",description:"Triggered when the see more button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onDelete:{action:"onDelete",description:"Triggered when the delete button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onCancel:{action:"onCancel",description:"Triggered when the cancel button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"onAction",description:"Triggered when the action button is clicked",table:{category:"Events",defaultValue:{summary:""}}},a11yExternalLinkText:{type:"string",control:{type:"text"},description:'When provided, the preview link opens in a new tab (`target="_blank"`) and this text is rendered in a visually-hidden `<span class="clipped">` inside the anchor for screen readers with a ` - ` prefix automatically added (e.g. `"opens in new window or tab"`).'},as:{description:"Element type for the preview card, default is `div`",control:"text"},deleteText:{description:"Text for delete button.",control:"text"},labelText:{description:"Text to display in the label.",control:"text"},a11ySeeMoreText:{description:"a11y text for see more button.",control:"text"},EbayFilePreviewCardAction:{description:"Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render.",options:["icon","aria-label"],control:{type:"select"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFilePreviewCard } from "@ebay/ui-core-react/ebay-file-preview-card";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/file-preview-card";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/menu-button";
import "@ebay/skin/progress-spinner";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/file-preview-card.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/progress-spinner.css";
\`\`\``}}}},o=a(e=>t.createElement(r,{status:"uploading",a11yCancelUploadText:"cancel upload",...e}),"Default"),i=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e}),"Image"),n=a(e=>t.createElement(r,{...e,a11yCancelUploadText:"Cancel upload",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}},t.createElement(b,{icon:t.createElement(f,null),"aria-label":"like picture"})),"WithAction"),s=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e}),"NoAction"),c=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},footerTitle:"Here a footer title",footerSubtitle:"Now a footer subtitle",menuActions:[{event:"edit",label:"Edit"},{event:"download",label:"Download"}],...e}),"ImageFooter"),l=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.mov",type:"video/quicktime",src:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},...e}),"Video"),p=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.csv",type:"text/csv"},footerTitle:"file-name.csv",footerSubtitle:"English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",menuActions:[{event:"edit",label:"Edit"}],...e}),"Document"),d=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},menuActions:[{event:"edit",label:"Edit"},{event:"download",label:"Download"}],...e}),"MultipleActions"),m=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",a11ySeeMoreText:"See more",seeMore:15,file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e}),"SeeMore"),u=a(e=>t.createElement(r,{a11yCancelUploadText:"Cancel upload",href:"https://ebay.com",a11yExternalLinkText:"opens in new window or tab",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},footerTitle:"file-name.jpg",...e}),"ExternalLink");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'args => <EbayFilePreviewCard status="uploading" a11yCancelUploadText="cancel upload" {...args} />',...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard {...args} a11yCancelUploadText="Cancel upload" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}}>
        <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="like picture" />
    </EbayFilePreviewCard>`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} footerTitle="Here a footer title" footerSubtitle="Now a footer subtitle" menuActions={[{
  event: "edit",
  label: "Edit"
}, {
  event: "download",
  label: "Download"
}]} {...args} />`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.mov",
  type: "video/quicktime",
  src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
}} {...args} />`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.csv",
  type: "text/csv"
}} footerTitle="file-name.csv" footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic" menuActions={[{
  event: "edit",
  label: "Edit"
}]} {...args} />`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} menuActions={[{
  event: "edit",
  label: "Edit"
}, {
  event: "download",
  label: "Download"
}]} {...args} />`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" a11ySeeMoreText="See more" seeMore={15} file={{
  name: "file-name.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" href="https://ebay.com" a11yExternalLinkText="opens in new window or tab" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} footerTitle="file-name.jpg" {...args} />`,...u.parameters?.docs?.source}}};const J=["Default","Image","WithAction","NoAction","ImageFooter","Video","Document","MultipleActions","SeeMore","ExternalLink"];export{o as Default,p as Document,u as ExternalLink,i as Image,c as ImageFooter,d as MultipleActions,s as NoAction,m as SeeMore,l as Video,n as WithAction,J as __namedExportsOrder,G as default};
