import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{i as r,n as i,t as a}from"./ebay-file-preview-card-CJLPsubx.js";import{n as o,t as s}from"./ebay-icon-heart-16-JGVSY03H.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),a(),o(),c=n(),l={title:`media/ebay-file-preview-card`,component:i,argTypes:{a11yCancelUploadText:{type:`string`,control:{type:`text`},description:`a11y text for cancel upload button`},file:{description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{category:`File`}},status:{type:`string`,control:{type:`text`},description:'Status of the file, can be `"uploading"` or `undefined`'},infoText:{type:`string`,control:{type:`text`},description:`Text to display info in file if not image`},a11yMenuButtonText:{table:{category:`Menu Actions`},description:`Accessibility text for menu button. This is required when menuActions is set`},menuActions:{description:"Array of menu actions, containing `event` and `label`",table:{category:`Menu Actions`}},href:{type:`string`,control:{type:`text`},description:`href that will wrap the preview card image`},seeMore:{type:`number`,control:{type:`number`},description:`Passing a number here will convert the card to a "see more" card`},footerTitle:{type:`string`,control:{type:`text`},description:`Title to display beneath the file, usually the filename`},footerSubtitle:{type:`string`,control:{type:`text`},description:`Subtitle to display beneath the file title`},onMenuAction:{action:`onMenuAction`,description:`Triggered when an action is selected from the menu. `,table:{category:`Events`,defaultValue:{summary:`name, event /* from ebay-menu-button */`}}},onSeeMore:{action:`onSeeMore`,description:`Triggered when the see more button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onDelete:{action:`onDelete`,description:`Triggered when the delete button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onCancel:{action:`onCancel`,description:`Triggered when the cancel button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onAction:{action:`onAction`,description:`Triggered when the action button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},a11yExternalLinkText:{type:`string`,control:{type:`text`},description:'When provided, the preview link opens in a new tab (`target="_blank"`) and this text is rendered in a visually-hidden `<span class="clipped">` inside the anchor for screen readers with a ` - ` prefix automatically added (e.g. `"opens in new window or tab"`).'},as:{description:"Element type for the preview card, default is `div`",control:`text`},deleteText:{description:`Text for delete button.`,control:`text`},labelText:{description:`Text to display in the label.`,control:`text`},a11ySeeMoreText:{description:`a11y text for see more button.`,control:`text`},EbayFilePreviewCardAction:{description:"Action component that will be used to render EbayIconButton and needs to have an `icon` and `aria-label` to be render.",options:[`icon`,`aria-label`],control:{type:`select`}}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},u=e=>(0,c.jsx)(i,{status:`uploading`,a11yCancelUploadText:`cancel upload`,...e}),d=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e}),f=e=>(0,c.jsx)(i,{...e,a11yCancelUploadText:`Cancel upload`,file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},children:(0,c.jsx)(r,{icon:(0,c.jsx)(s,{}),"aria-label":`like picture`})}),p=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e}),m=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},footerTitle:`Here a footer title`,footerSubtitle:`Now a footer subtitle`,menuActions:[{event:`edit`,label:`Edit`},{event:`download`,label:`Download`}],...e}),h=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,file:{name:`file-name.mov`,type:`video/quicktime`,src:`https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4`},...e}),g=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,file:{name:`file-name.csv`,type:`text/csv`},footerTitle:`file-name.csv`,footerSubtitle:`English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic`,menuActions:[{event:`edit`,label:`Edit`}],...e}),_=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,file:{name:`file-name.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},menuActions:[{event:`edit`,label:`Edit`},{event:`download`,label:`Download`}],...e}),v=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,deleteText:`Delete`,a11ySeeMoreText:`See more`,seeMore:15,file:{name:`file-name.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e}),y=e=>(0,c.jsx)(i,{a11yCancelUploadText:`Cancel upload`,href:`https://ebay.com`,a11yExternalLinkText:`opens in new window or tab`,file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},footerTitle:`file-name.jpg`,...e}),b=[`Default`,`Image`,`WithAction`,`NoAction`,`ImageFooter`,`Video`,`Document`,`MultipleActions`,`SeeMore`,`ExternalLink`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard status="uploading" a11yCancelUploadText="cancel upload" {...args} />`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard {...args} a11yCancelUploadText="Cancel upload" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}}>
        <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="like picture" />
    </EbayFilePreviewCard>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} footerTitle="Here a footer title" footerSubtitle="Now a footer subtitle" menuActions={[{
  event: "edit",
  label: "Edit"
}, {
  event: "download",
  label: "Download"
}]} {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.mov",
  type: "video/quicktime",
  src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
}} {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.csv",
  type: "text/csv"
}} footerTitle="file-name.csv" footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic" menuActions={[{
  event: "edit",
  label: "Edit"
}]} {...args} />`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" file={{
  name: "file-name.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} menuActions={[{
  event: "edit",
  label: "Edit"
}, {
  event: "download",
  label: "Download"
}]} {...args} />`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" deleteText="Delete" a11ySeeMoreText="See more" seeMore={15} file={{
  name: "file-name.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <EbayFilePreviewCard a11yCancelUploadText="Cancel upload" href="https://ebay.com" a11yExternalLinkText="opens in new window or tab" file={{
  name: "file-name.jpg",
  type: "image",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
}} footerTitle="file-name.jpg" {...args} />`,...y.parameters?.docs?.source}}}})))()}x();export{u as Default,g as Document,y as ExternalLink,d as Image,m as ImageFooter,_ as MultipleActions,p as NoAction,v as SeeMore,h as Video,f as WithAction,b as __namedExportsOrder,l as default};