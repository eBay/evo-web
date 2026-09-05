import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{dt as n,et as r,i,k as a,n as o,r as s,t as c,tt as l}from"./dom-CrmgVQ1h.js";import{a as u,i as d,o as f,r as p,t as m}from"./evo-file-preview-card-group-Bp4GNtJb.js";var h;function g(){return(g=e((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function _(e){e.a,T(e,{name:`frog.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`})}function v(){console.log(`cancel upload clicked`)}function y(){console.log(`delete clicked`)}function b(){console.log(`cancel upload clicked`)}function x(){console.log(`delete clicked`)}var S,C,w,T,E,D;function O(){return(O=e((()=>{f(),i(),S=p,C=(e=>`/${e}&`)(d),w=r(4,e=>m(e.a,{...e.c,card:s(o({file:e.d,deleteAction:o({a11yText:`Delete`,onClick:x}),cancelAction:o({a11yText:`Cancel upload`,onClick:b})}),{file:e.d,deleteAction:o({a11yText:`Delete`,onClick:y}),cancelAction:o({a11yText:`Cancel upload`,onClick:v})})})),T=a(3,w),E=a(2,w),l(`yUhAeGv`,v),l(`s3Y_GJ0`,y),l(`$NMS5wO`,b),l(`Ki3B8m4`,x),D=c(`yCGZMRW`,S,C,_,E)})))()}var k;function A(){return(A=e((()=>{k=`<const/file={
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
`})))()}function j(e){e.a,I(e,{name:`frog.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`})}function M(){console.log(`see more clicked`)}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{f(),i(),N=p,P=(e=>`/${e}&`)(d),F=r(4,e=>{let t;n([...Array(35)],n=>{t=s(t,{file:e.d,deleteAction:o({a11yText:`Delete`,onClick:z({f:n})}),cancelAction:o({a11yText:`Cancel upload`,onClick:R({f:n})})})}),m(e.a,{...e.c,card:t,seeMoreAction:o({a11yText:`See More`,onClick:M})})}),I=a(3,F),L=a(2,F),R=e=>function(){console.log(`cancel upload clicked`,e.f)},z=e=>function(){console.log(`delete clicked`,e.f)},l(`cL997Mc`,M),l(`vHlaBBJ`,R),l(`ngm8dsO`,z),B=c(`V$3rKzd`,N,P,j,L)})))()}var H;function U(){return(U=e((()=>{H=`<const/file={
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
`})))()}var W,G,K,q;function J(){return(J=e((()=>{g(),f(),O(),A(),V(),U(),W={title:`media/evo-file-preview-card-group`,component:u,parameters:{docs:{description:{component:h}}},argTypes:{card:{description:`A repeatable attribute tag for each file preview card. Takes the same attributes as file-preview-card`,"@":{"<evo-file-preview-card> attributes":{description:"All attributes and event handlers from [the `<evo-file-preview-card>` tag](?path=/docs/media-evo-file-preview-card--docs) will be passed through to `<@card>`"}}},seeMoreAction:{description:`An additional "See More" tag will be rendered if there are too many cards shown at once`,"@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`"}}},visibleCardCount:{controllable:!0,type:`number`,control:`number`,description:`The number of cards visible before a "see more" card is shown as the last one`,table:{defaultValue:{summary:`15`}}}}},G=t(D,k),K=t(B,H),q=[`Default`,`ManyCards`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ManyCardsTemplate, ManyCardsTemplateCode)`,...K.parameters?.docs?.source}}}})))()}J();export{G as Default,K as ManyCards,q as __namedExportsOrder,W as default};