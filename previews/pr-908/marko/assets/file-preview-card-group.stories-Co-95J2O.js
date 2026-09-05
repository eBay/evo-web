import{a as l,b as a,e as r,k as s,l as o,H as y}from"./dom-DF5f8Ddd.js";import{b as p,$ as d,a as m,c as u,F as k}from"./index-DGuKNz57.js";import{b as f}from"./utils-DyU2_5R1.js";import"./iframe-CuDE3HaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CU3E_XKU.js";import"./index-CHbUli3x.js";import"./index-Cmuu5986.js";import"./index-CZL3RyJx.js";import"./evo-icon-spinner-24-BUvHmwCj.js";import"./index-CGOhNcPA.js";import"./evo-icon-chevron-down-16-COGQacX7.js";import"./index-CaalJeE7.js";import"./controllable.feat-BV55RnKX.js";import"./controllable-input.feat-DzuXJTgt.js";import"./controllable-open.feat-DWEv_6C-.js";import"./controllable-select.feat-odpF1_g6.js";/* empty css                    */import"./evo-icon-play-16-Bo5ptwc7.js";import"./evo-icon-close-16-DN6njHq3.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
            <@deleteAction a11yText="Delete" onClick() {  console.log("delete clicked"); }/>
            <@cancelAction a11yText="Cancel upload" onClick() {  console.log("cancel upload clicked"); }/>
        </@card>
        <@card file=file>
            <@deleteAction a11yText="Delete" onClick() {  console.log("delete clicked"); }/>
            <@cancelAction a11yText="Cancel upload" onClick() {  console.log("cancel upload clicked"); }/>
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
            <@deleteAction a11yText="Delete" onClick() { console.log("delete clicked", index); }/>
            <@cancelAction a11yText="Cancel upload" onClick() { console.log("cancel upload clicked", index); }/>
        </@card>
    </for>
    <@seeMoreAction a11yText="See More" onClick() { console.log("see more clicked") }/>
</evo-file-preview-card-group>
`,le={title:"media/evo-file-preview-card-group",component:k,parameters:{docs:{description:{component:v}}},argTypes:{card:{description:"A repeatable attribute tag for each file preview card. Takes the same attributes as file-preview-card","@":{"<evo-file-preview-card> attributes":{description:"All attributes and event handlers from [the `<evo-file-preview-card>` tag](?path=/docs/media-evo-file-preview-card--docs) will be passed through to `<@card>`"}}},seeMoreAction:{description:'An additional "See More" tag will be rendered if there are too many cards shown at once',"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},visibleCardCount:{controllable:!0,type:"number",control:"number",description:'The number of cards visible before a "see more" card is shown as the last one',table:{defaultValue:{summary:"15"}}}}},t=f(_,j),n=f(P,V);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ManyCardsTemplate, ManyCardsTemplateCode)",...n.parameters?.docs?.source}}};const re=["Default","ManyCards"];export{t as Default,n as ManyCards,re as __namedExportsOrder,le as default};
