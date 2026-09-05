var y=Object.defineProperty;var i=(r,a)=>y(r,"name",{value:a,configurable:!0});import{R as e}from"./iframe-D9pGa9EI.js";import{E as o}from"./file-preview-card-group-CH2Fje_6.js";import{E as m,a as u}from"./file-preview-card-7-yG_dKC.js";import{E as g}from"./ebay-icon-heart-16-BH2WhOET.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-DjpMuqj5.js";import"./icon-button-Dh1LWJlk.js";import"./badge-pPy_TpJ8.js";import"./menu-button-Dya6hnPB.js";import"./menu-item-separator-AjRdYm8v.js";import"./index-DhKlWmW_.js";import"./ebay-icon-tick-16-DD-cizgj.js";import"./button-Ca-c_gTq.js";import"./progress-spinner-DEX2BECH.js";import"./ebay-icon-spinner-30-C0LAXJH5.js";import"./ebay-icon-chevron-down-12-B8OHZlA4.js";import"./index-BzamGs-v.js";import"./floating-ui-BymNS_4m.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-CT1dK8KO.js";import"./index-CCfbgz4b.js";import"./ebay-icon-overflow-vertical-16-CuoOrlM4.js";import"./ebay-icon-close-16-DNLcBrK2.js";import"./ebay-icon-delete-16-BESSti3B.js";import"./ebay-icon-play-16-BoB6ej7F.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,K={title:"media/ebay-file-preview-card-group",component:o,argTypes:{a11ySeeMoreText:{type:"string",control:{type:"text"},description:"a11y text for see more button, applied to all cards"},onDelete:{action:"onDelete",description:"Triggered when the delete button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onCancel:{action:"onCancel",description:"Triggered when the cancel button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"onAction",description:"Triggered when the actiion button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onMenuAction:{action:"onMenuAction",description:"Triggered when an action is selected from the menu. ",table:{category:"Events",defaultValue:{summary:"name, event /* from ebay-menu-button */"}}}},tags:["autodocs"],parameters:{docs:{description:{component:'## Usage\n\n### Import\n\n```jsx harmony\nimport { EbayFilePreviewCardGroup } from "@ebay/ui-core-react/ebay-file-preview-card-group";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/file-preview-card-group";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/file-preview-card-group.css";\n```'}}}},c=i(r=>{const a=Array.from({length:3},()=>({file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},deleteText:"Delete text"}));return e.createElement(o,{...r},a.map((t,n)=>e.createElement(m,{key:n,...t})))},"Default"),s=i(r=>{const a=Array.from({length:3},()=>({file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}}));return e.createElement(o,{...r},a.map((t,n)=>e.createElement(m,{key:n,...t},e.createElement(u,{icon:e.createElement(g,null),"aria-label":"icon label"}))))},"WithCustomAction"),l=i(r=>{const a=Array.from({length:50},()=>({menuActions:[{event:"action1",label:"Action 1"},{event:"action2",label:"Action 2"}],file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},deleteText:"Delete",onMenuAction:d("onMenuAction"),onDelete:d("onDelete"),as:"div"}));return e.createElement(o,{a11ySeeMoreText:"see more text",...r},a.map((t,n)=>e.createElement(m,{key:n,...t})))},"ManyCards"),p=i(r=>{const a=Array.from({length:5},()=>({status:"uploading",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},a11yCancelUploadText:"cancel upload text",onCancel:d("onCancel")}));return e.createElement(o,{...r},a.map((t,n)=>e.createElement(m,{key:n,...t})))},"CardsUploading");c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}};const N=["Default","WithCustomAction","ManyCards","CardsUploading"];export{p as CardsUploading,c as Default,l as ManyCards,s as WithCustomAction,N as __namedExportsOrder,K as default};
