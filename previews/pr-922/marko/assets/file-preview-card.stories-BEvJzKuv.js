import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{M as ee,i as n,k as r,n as i,t as a,tt as o}from"./dom-CrmgVQ1h.js";import{_ as s,a as c,c as l,d as u,f as d,g as f,h as p,i as m,l as h,m as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C}from"./evo-file-preview-card-B6mowOmU.js";var w;function T(){return(T=e((()=>{w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function te(e){b(e.a,i({a11yText:`Delete`,onClick:D})),_(e.a,i({a11yText:`Cancel upload`,onClick:E}))}function E(){console.log(`cancel upload clicked`)}function D(){console.log(`delete clicked`)}var O,k,A,j;function M(){return(M=e((()=>{s(),n(),O=(e=>`<!>${e}<!>`)(p),k=(e=>`b/${e}&b`)(`b%c`),A=r(2,e=>{S(e.a,e.c.action),h(e.a,e.c.as),C(e.a,e.c.class),d(e.a,e.c.file),m(e.a,e.c.footerSubtitle),c(e.a,e.c.footerTitle),v(e.a,e.c.href),l(e.a,e.c.infoText),u(e.a,e.c.menuActions),y(e.a,e.c.seeMoreAction),g(e.a,e.c.status),x(e.a,(({action:e,as:t,cancelAction:ee,class:n,deleteAction:r,file:i,footerSubtitle:a,footerTitle:o,href:s,infoText:c,menuActions:l,seeMoreAction:u,status:d,...f})=>f)(e.c))}),o(`x5Ps2Yq`,E),o(`YNzoXg5`,D),j=a(`c1ZJph5`,O,k,te,A)})))()}var N;function P(){return(P=e((()=>{N=`<evo-file-preview-card ...input>
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
`})))()}function ne(e){_(e.a,i({a11yText:`Cancel upload`,onClick:I})),b(e.a,i({a11yText:`Delete`,onClick:F})),y(e.a,i({a11yText:null,content:z(e)}))}function F(){console.log(`delete clicked`)}function I(){console.log(`cancel upload clicked`)}var L,R,z,B,V;function H(){return(H=e((()=>{s(),n(),L=(e=>`<!>${e}<!>`)(p),R=(e=>`b/${e}&b`)(`b%c`),z=ee(`Pd2nZc7`,`+15`),B=r(2,e=>{let t={file:{name:`file-name.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},...e.c};S(e.a,t.action),h(e.a,t.as),C(e.a,t.class),d(e.a,t.file),m(e.a,t.footerSubtitle),c(e.a,t.footerTitle),v(e.a,t.href),l(e.a,t.infoText),u(e.a,t.menuActions),g(e.a,t.status),x(e.a,(({action:e,as:t,cancelAction:ee,class:n,deleteAction:r,file:i,footerSubtitle:a,footerTitle:o,href:s,infoText:c,menuActions:l,seeMoreAction:u,status:d,...f})=>f)(t))}),o(`vykV1oW`,F),o(`pnk2IpE`,I),V=a(`KC$p4sl`,L,R,ne,B)})))()}var U;function W(){return(W=e((()=>{U=`<evo-file-preview-card
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
`})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{T(),s(),M(),P(),H(),W(),G={title:`media/evo-file-preview-card`,component:f,parameters:{docs:{description:{component:w}}},argTypes:{as:{type:`string`,control:`text`,description:`Override the tag used to wrap this component`},file:{type:{name:`object`,value:{}},control:{type:`file`},description:"File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",table:{type:{summary:`file`}}},status:{type:`string`,options:[`undefined (default)`,`uploading`],control:`inline-radio`,description:'Status of the file, can be `"uploading"` or `undefined`'},href:{type:`string`,control:`text`,description:"If present, wrap the card in an `<a>` tag"},infoText:{type:`string`,control:`text`,description:`File information. If not present, this will default to the file extension`},deleteAction:{description:"The delete button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@deleteAction>`"}}},menuActions:{control:`object`,description:"Array of menu actions, containing `event` and `label`",table:{type:{summary:`{ event: string, label: string }[]`}}},action:{description:"Additional action. Requires `a11yText` and `onClick` attributes, and an icon in `content`","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@action>`"}}},seeMoreAction:{description:'The "see more" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},cancelAction:{description:'The "cancel upload" button. Requires `a11yText` and `onClick` attributes which will attach to the icon-button.',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@cancelAction>`"}}},footerTitle:{type:`string`,control:`text`,description:`Title to display beneath the file, usually the filename`},footerSubtitle:{type:`string`,control:`text`,description:`Subtitle to display beneath the file title`},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},K=t(j,N,{file:{name:`file-name.jpg`,type:`image/jpeg`},status:`uploading`}),q=t(j,N,{file:{name:`file-name.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`}}),J=t(j,N,{file:{name:`file-name.mov`,type:`video/quicktime`,src:`https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4`},labelText:`10:30:21`}),Y=t(j,N,{file:{name:`file-name.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},menuActions:[{event:`edit`,label:`Edit`},{event:`download`,label:`Download`}]}),X=t(j,N,{file:{name:`file-name.csv`,type:`text/csv`},footerTitle:`file-name.csv`,footerSubtitle:`English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic`,menuActions:[{event:`edit`,label:`Edit`}]}),Z=t(V,U),Q=[`Uploading`,`Image`,`Video`,`MultipleMenuActions`,`Document`,`SeeMore`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg"
  },
  status: "uploading"
})`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.jpg",
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
  }
})`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  file: {
    name: "file-name.mov",
    type: "video/quicktime",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  labelText: "10:30:21"
})`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
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
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
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
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(SeeMoreTemplate, SeeMoreTemplateCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{X as Document,q as Image,Y as MultipleMenuActions,Z as SeeMore,K as Uploading,J as Video,Q as __namedExportsOrder,G as default};