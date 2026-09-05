import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{i as r,n as i,t as a}from"./ebay-file-preview-card-CJLPsubx.js";import{n as o,t as s}from"./ebay-file-preview-card-group-D44UuZEl.js";import{n as c,t as l}from"./ebay-icon-heart-16-JGVSY03H.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),s(),a(),c(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`media/ebay-file-preview-card-group`,component:o,argTypes:{a11ySeeMoreText:{type:`string`,control:{type:`text`},description:`a11y text for see more button, applied to all cards`},onDelete:{action:`onDelete`,description:`Triggered when the delete button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onCancel:{action:`onCancel`,description:`Triggered when the cancel button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onAction:{action:`onAction`,description:`Triggered when the actiion button is clicked`,table:{category:`Events`,defaultValue:{summary:``}}},onMenuAction:{action:`onMenuAction`,description:`Triggered when an action is selected from the menu. `,table:{category:`Events`,defaultValue:{summary:`name, event /* from ebay-menu-button */`}}}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFilePreviewCardGroup } from "@ebay/ui-core-react/ebay-file-preview-card-group";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/file-preview-card-group";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/file-preview-card-group.css";
\`\`\``}}}},p=e=>{let t=Array.from({length:3},()=>({file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},deleteText:`Delete text`}));return(0,u.jsx)(o,{...e,children:t.map((e,t)=>(0,u.jsx)(i,{...e},t))})},m=e=>{let t=Array.from({length:3},()=>({file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`}}));return(0,u.jsx)(o,{...e,children:t.map((e,t)=>(0,u.jsx)(i,{...e,children:(0,u.jsx)(r,{icon:(0,u.jsx)(l,{}),"aria-label":`icon label`})},t))})},h=e=>{let t=Array.from({length:50},()=>({menuActions:[{event:`action1`,label:`Action 1`},{event:`action2`,label:`Action 2`}],file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},deleteText:`Delete`,onMenuAction:d(`onMenuAction`),onDelete:d(`onDelete`),as:`div`}));return(0,u.jsx)(o,{a11ySeeMoreText:`see more text`,...e,children:t.map((e,t)=>(0,u.jsx)(i,{...e},t))})},g=e=>{let t=Array.from({length:5},()=>({status:`uploading`,file:{name:`file-name.jpg`,type:`image`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},a11yCancelUploadText:`cancel upload text`,onCancel:d(`onCancel`)}));return(0,u.jsx)(o,{...e,children:t.map((e,t)=>(0,u.jsx)(i,{...e},t))})},_=[`Default`,`WithCustomAction`,`ManyCards`,`CardsUploading`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 3
  }, () => ({
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    },
    deleteText: "Delete text"
  }));
  return <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile} />)}
        </EbayFilePreviewCardGroup>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 3
  }, () => ({
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    }
  }));
  return <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile}>
                    <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="icon label" />
                </EbayFilePreviewCard>)}
        </EbayFilePreviewCardGroup>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 50
  }, () => ({
    menuActions: [{
      event: "action1",
      label: "Action 1"
    }, {
      event: "action2",
      label: "Action 2"
    }],
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    },
    deleteText: "Delete",
    onMenuAction: action("onMenuAction"),
    onDelete: action("onDelete"),
    as: "div"
  }));
  return <EbayFilePreviewCardGroup a11ySeeMoreText="see more text" {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile} />)}
        </EbayFilePreviewCardGroup>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const cards: EbayFilePreviewCardProps[] = Array.from({
    length: 5
  }, () => ({
    status: "uploading",
    file: {
      name: "file-name.jpg",
      type: "image",
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
    },
    a11yCancelUploadText: "cancel upload text",
    onCancel: action("onCancel")
  }));
  return <EbayFilePreviewCardGroup {...args}>
            {cards.map((cardFile, index) => <EbayFilePreviewCard key={index} {...cardFile} />)}
        </EbayFilePreviewCardGroup>;
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as CardsUploading,p as Default,h as ManyCards,m as WithCustomAction,_ as __namedExportsOrder,f as default};