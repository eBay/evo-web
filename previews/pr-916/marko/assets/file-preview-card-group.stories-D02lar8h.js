import{_ as l,f as a,m as r,Z as s,S as o,a0 as y}from"./dom-BJw3UtKR.js";import{$ as p,a as d,b as m,c as u,F as k}from"./index-BABSSM59.js";import{b as f}from"./utils-DyU2_5R1.js";import"./iframe-Bp9ocpcF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DeaYI3qR.js";import"./index-3-7Z7Gk3.js";import"./index-B4fTM6wx.js";import"./index-BFEYMJy3.js";import"./index-B1rJHl-z.js";import"./evo-icon-chevron-down-16-qyZkXZmw.js";import"./index-55fXEZ5_.js";import"./controllable.feat-BvqRIaJO.js";import"./controllable-input.feat-BEVPN-fI.js";import"./controllable-open.feat-B0nYr73m.js";import"./controllable-select.feat-Bl2xwPQV.js";/* empty css                    */import"./evo-icon-play-16-ByoUiI65.js";import"./evo-icon-close-16-CoN8QOLS.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-file-preview-card-group
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Group of file preview cards, primarily used alongside \`evo-file-input\`.

## Compatibility

This component only works on Marko 5 and later.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-evo-file-preview-card-group)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-evo-file-preview-card-group)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-file-preview-card-group/examples)
`,C=p,$=(e=>`/${e}&`)(m),g=r(4,e=>u(e.a,{...e.c,card:s(o({file:e.d,deleteAction:o({a11yText:"Delete",onClick:M}),cancelAction:o({a11yText:"Cancel upload",onClick:D})}),{file:e.d,deleteAction:o({a11yText:"Delete",onClick:A}),cancelAction:o({a11yText:"Cancel upload",onClick:x})})})),h=a(3,g);function w(e){d(e.a),h(e,{name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"})}const T=a(2,g);function x(){console.log("cancel upload clicked")}function A(){console.log("delete clicked")}function D(){console.log("cancel upload clicked")}function M(){console.log("delete clicked")}const _=l("yCGZMRW",C,$,w,T),j=`<const/file={
  name: "frog.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
}>

<evo-file-preview-card-group ...input>
  <@card file=file>
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
  </@card>
  <@card file=file>
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
  </@card>
</evo-file-preview-card-group>
`,S=p,E=(e=>`/${e}&`)(m),b=r(4,e=>{let c;y([...Array(35)],i=>{c=s(c,{file:e.d,deleteAction:o({a11yText:"Delete",onClick:F({f:i})}),cancelAction:o({a11yText:"Cancel upload",onClick:z({f:i})})})}),u(e.a,{...e.c,card:c,seeMoreAction:o({a11yText:"See More",onClick:R})})}),q=a(3,b);function G(e){d(e.a),q(e,{name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"})}const O=a(2,b);function R(){console.log("see more clicked")}const z=e=>function(){console.log("cancel upload clicked",e.f)},F=e=>function(){console.log("delete clicked",e.f)},P=l("V$3rKzd",S,E,G,O),V=`<const/file={
  name: "frog.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
}>

<evo-file-preview-card-group ...input>
  <for|index| of=[...Array(35)]>
    <@card file=file>
      <@deleteAction
        a11yText="Delete"
        onClick() {
          console.log("delete clicked", index);
        }/>
      <@cancelAction
        a11yText="Cancel upload"
        onClick() {
          console.log("cancel upload clicked", index);
        }/>
    </@card>
  </for>
  <@seeMoreAction
    a11yText="See More"
    onClick() {
      console.log("see more clicked");
    }/>
</evo-file-preview-card-group>
`,ie={title:"media/evo-file-preview-card-group",component:k,parameters:{docs:{description:{component:v}}},argTypes:{card:{description:"A repeatable attribute tag for each file preview card. Takes the same attributes as file-preview-card","@":{"<evo-file-preview-card> attributes":{description:"All attributes and event handlers from [the `<evo-file-preview-card>` tag](?path=/docs/media-evo-file-preview-card--docs) will be passed through to `<@card>`"}}},seeMoreAction:{description:'An additional "See More" tag will be rendered if there are too many cards shown at once',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},visibleCardCount:{controllable:!0,type:"number",control:"number",description:'The number of cards visible before a "see more" card is shown as the last one',table:{defaultValue:{summary:"15"}}}}},n=f(_,j),t=f(P,V);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ManyCardsTemplate, ManyCardsTemplateCode)",...t.parameters?.docs?.source}}};const le=["Default","ManyCards"];export{n as Default,t as ManyCards,le as __namedExportsOrder,ie as default};
