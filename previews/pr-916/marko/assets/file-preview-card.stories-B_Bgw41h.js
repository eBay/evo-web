import{_ as m,f,S as o,b as O}from"./dom-BCmBFxnG.js";import{b,c as g,e as h,a as v,g as y,h as T,i as w,j as A,k as x,$ as k,l as C,m as S,p as j,f as D,d as M,o as E,n as q,F as V}from"./index-BHnSX0_U.js";import{b as n}from"./utils-DyU2_5R1.js";import"./iframe-neL4uaf-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5i4FlRB.js";import"./index-p2AooE6j.js";import"./index-CyuLV89p.js";import"./index-DV0LQG27.js";import"./evo-icon-chevron-down-16-DJqkLgc1.js";import"./index-DrLwciA-.js";import"./controllable.feat-HsyvwF1o.js";import"./controllable-input.feat-_IrcFlQw.js";import"./controllable-open.feat-rRFqX3BQ.js";import"./controllable-select.feat-H3sDHw1U.js";/* empty css                    */import"./evo-icon-play-16-hxextFba.js";import"./evo-icon-close-16-DwfxRpFt.js";const Z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-file-preview-card
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Preview card for files, primarily used alongside \`evo-file-preview-card-group\` and \`evo-file-input\`.

## Compatibility

This component only works on Marko 5 and later.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-evo-file-preview-card)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-evo-file-preview-card)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-file-preview-card/examples)
`,K=(e=>`<!>${e}<!>`)(q),W=(e=>`b/${e}&b`)(E);function N(e){j(e.a),D(e.a,o({a11yText:"Delete",onClick:Y})),M(e.a,o({a11yText:"Cancel upload",onClick:X}))}const Q=f(2,e=>{b(e.a,e.c.action),g(e.a,e.c.as),h(e.a,e.c.class),v(e.a,e.c.file),y(e.a,e.c.footerSubtitle),T(e.a,e.c.footerTitle),w(e.a,e.c.href),A(e.a,e.c.infoText),x(e.a,e.c.menuActions),k(e.a,e.c.seeMoreAction),C(e.a,e.c.status),S(e.a,(({action:t,as:_,cancelAction:F,class:P,deleteAction:$,file:I,footerSubtitle:R,footerTitle:B,href:J,infoText:U,menuActions:z,seeMoreAction:G,status:H,...u})=>u)(e.c))});function X(){console.log("cancel upload clicked")}function Y(){console.log("delete clicked")}const a=m("c1ZJph5",K,W,N,Q),i=`<evo-file-preview-card ...input>
  <@deleteAction
    a11yText="Delete"
    onClick() {
      console.log("delete clicked");
    }/>
  <@cancelAction
    a11yText="Cancel upload"
    onClick() {
      console.log("cancel upload clicked");
    }/>
</evo-file-preview-card>
`,ee=(e=>`<!>${e}<!>`)(q),te=(e=>`b/${e}&b`)(E),ne=O("Pd2nZc7","+15");function oe(e){j(e.a),M(e.a,o({a11yText:"Cancel upload",onClick:le})),D(e.a,o({a11yText:"Delete",onClick:ie})),k(e.a,o({a11yText:null,content:ne(e)}))}const ae=f(2,e=>{const t={file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},...e.c};b(e.a,t.action),g(e.a,t.as),h(e.a,t.class),v(e.a,t.file),y(e.a,t.footerSubtitle),T(e.a,t.footerTitle),w(e.a,t.href),A(e.a,t.infoText),x(e.a,t.menuActions),C(e.a,t.status),S(e.a,(({action:_,as:F,cancelAction:P,class:$,deleteAction:I,file:R,footerSubtitle:B,footerTitle:J,href:U,infoText:z,menuActions:G,seeMoreAction:H,status:u,...L})=>L)(t))});function ie(){console.log("delete clicked")}function le(){console.log("cancel upload clicked")}const se=m("KC$p4sl",ee,te,oe,ae),re=`<evo-file-preview-card
  file={
    name: "file-name.jpg",
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
  }
  ...input>
  <@cancelAction
    a11yText="Cancel upload"
    onClick() {
      console.log("cancel upload clicked");
    }/>
  <@deleteAction
    a11yText="Delete"
    onClick() {
      console.log("delete clicked");
    }/>
  <@seeMoreAction a11yText=null>
    +15
  </@seeMoreAction>
</evo-file-preview-card>
`,je={title:"media/evo-file-preview-card",component:V,parameters:{docs:{description:{component:Z}}},argTypes:{as:{type:"string",control:"text",description:"Override the tag used to wrap this component"},file:{type:{name:"object",value:{}},control:{type:"file"},description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{type:{summary:"file"}}},status:{type:"string",options:["undefined (default)","uploading"],control:"inline-radio",description:'Status of the file, can be `"uploading"` or `undefined`'},href:{type:"string",control:"text",description:"If present, wrap the card in an `<a>` tag"},infoText:{type:"string",control:"text",description:"File information. If not present, this will default to the file extension"},deleteAction:{description:"The delete button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@deleteAction>`"}}},menuActions:{control:"object",description:"Array of menu actions, containing `event` and `label`",table:{type:{summary:"{ event: string, label: string }[]"}}},action:{description:"Additional action. Requires `a11yText` and `onClick` attributes, and an icon in `content`","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@action>`"}}},seeMoreAction:{description:'The "see more" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},cancelAction:{description:'The "cancel upload" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@cancelAction>`"}}},footerTitle:{type:"string",control:"text",description:"Title to display beneath the file, usually the filename"},footerSubtitle:{type:"string",control:"text",description:"Subtitle to display beneath the file title"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},l=n(a,i,{file:{name:"file-name.jpg",type:"image/jpeg"},status:"uploading"}),s=n(a,i,{file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"}}),r=n(a,i,{file:{name:"file-name.mov",type:"video/quicktime",src:"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"},labelText:"10:30:21"}),c=n(a,i,{file:{name:"file-name.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},menuActions:[{event:"edit",label:"Edit"},{event:"download",label:"Download"}]}),p=n(a,i,{file:{name:"file-name.csv",type:"text/csv"},footerTitle:"file-name.csv",footerSubtitle:"English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",menuActions:[{event:"edit",label:"Edit"}]}),d=n(se,re);l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg"
  },
  status: "uploading"
})`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
  }
})`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.mov",
    type: "video/quicktime",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  labelText: "10:30:21"
})`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
  },
  menuActions: [{
    event: "edit",
    label: "Edit"
  }, {
    event: "download",
    label: "Download"
  }]
})`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.csv",
    type: "text/csv"
  },
  footerTitle: "file-name.csv",
  footerSubtitle: "English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic",
  menuActions: [{
    event: "edit",
    label: "Edit"
  }]
})`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(SeeMoreTemplate, SeeMoreTemplateCode)",...d.parameters?.docs?.source}}};const De=["Uploading","Image","Video","MultipleMenuActions","Document","SeeMore"];export{p as Document,s as Image,c as MultipleMenuActions,d as SeeMore,l as Uploading,r as Video,De as __namedExportsOrder,je as default};
