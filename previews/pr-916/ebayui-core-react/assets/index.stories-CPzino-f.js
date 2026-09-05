var y=Object.defineProperty;var i=(r,a)=>y(r,"name",{value:a,configurable:!0});import{R as e}from"./iframe-NTyj5800.js";import{E as o}from"./file-preview-card-group-jv-TiWWs.js";import{E as m,a as u}from"./file-preview-card-mAsanB1k.js";import{E as g}from"./ebay-icon-heart-16-CnEYaUSo.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-B124LMPt.js";import"./icon-button-DKVoyWyS.js";import"./badge-DyDpDLB9.js";import"./menu-button-BdQqao9N.js";import"./menu-item-separator-tUy4NiYz.js";import"./index-DhKlWmW_.js";import"./ebay-icon-tick-16-DkwqXUOk.js";import"./button-BhiiAwpg.js";import"./progress-spinner-v0Zo4x_d.js";import"./ebay-icon-spinner-30-DBFceYR6.js";import"./ebay-icon-chevron-down-12-C8Kkq1tf.js";import"./index-BzamGs-v.js";import"./floating-ui-BbNGWshD.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-D4NZX2kC.js";import"./index-9qQXCGP7.js";import"./ebay-icon-overflow-vertical-16-B8Q7WfQL.js";import"./ebay-icon-close-16-Co310Qmp.js";import"./ebay-icon-delete-16-DmIESM15.js";import"./ebay-icon-play-16-C3EMfa51.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,K={title:"media/ebay-file-preview-card-group",component:o,argTypes:{a11ySeeMoreText:{type:"string",control:{type:"text"},description:"a11y text for see more button, applied to all cards"},onDelete:{action:"onDelete",description:"Triggered when the delete button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onCancel:{action:"onCancel",description:"Triggered when the cancel button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"onAction",description:"Triggered when the actiion button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onMenuAction:{action:"onMenuAction",description:"Triggered when an action is selected from the menu. ",table:{category:"Events",defaultValue:{summary:"name, event /* from ebay-menu-button */"}}}},tags:["autodocs"],parameters:{docs:{description:{component:'## Usage\n\n### Import\n\n```jsx harmony\nimport { EbayFilePreviewCardGroup } from "@ebay/ui-core-react/ebay-file-preview-card-group";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/file-preview-card-group";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/file-preview-card-group.css";\n```'}}}},c=i(r=>{const a=Array.from({length:3},()=>({file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},deleteText:"Delete text"}));return e.createElement(o,{...r},a.map((t,n)=>e.createElement(m,{key:n,...t})))},"Default"),s=i(r=>{const a=Array.from({length:3},()=>({file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}}));return e.createElement(o,{...r},a.map((t,n)=>e.createElement(m,{key:n,...t},e.createElement(u,{icon:e.createElement(g,null),"aria-label":"icon label"}))))},"WithCustomAction"),l=i(r=>{const a=Array.from({length:50},()=>({menuActions:[{event:"action1",label:"Action 1"},{event:"action2",label:"Action 2"}],file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},deleteText:"Delete",onMenuAction:d("onMenuAction"),onDelete:d("onDelete"),as:"div"}));return e.createElement(o,{a11ySeeMoreText:"see more text",...r},a.map((t,n)=>e.createElement(m,{key:n,...t})))},"ManyCards"),p=i(r=>{const a=Array.from({length:5},()=>({status:"uploading",file:{name:"file-name.jpg",type:"image",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},a11yCancelUploadText:"cancel upload text",onCancel:d("onCancel")}));return e.createElement(o,{...r},a.map((t,n)=>e.createElement(m,{key:n,...t})))},"CardsUploading");c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
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
