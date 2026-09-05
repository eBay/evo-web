import{a as i}from"./utils-DWCsNc5l.js";import{_ as n}from"./index-CF2C1NxI.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-eQxkiXaC.js";import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./render-tag-B9T2mz-j.js";import"./index-BXTIgzdK.js";import"./index-D7kkco59.js";import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-B3Rndxlm.js";import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";import"./attr-tag-Dvq4QMvY.js";import"./of-fallback-DrWEmKV1.js";import"./index-BJNRXyLi.js";/* empty css                    */import"./index-BeNpkb6R.js";import"./index-CZw0tK3j.js";import"./index-Cw3bSwrm.js";import"./index-D4_UUNUd.js";import"./index-n7KuEsog.js";import"./index-VMpyC0fQ.js";/* empty css             */import"./index-Bue5N1gN.js";import"./index-BSoKmMuk.js";import"./index-CiJctCOb.js";import"./style-value-D9hyxyYb.js";import"./index-DptDIuuf.js";import"./index-Dx__hCxl.js";import"./index-VUB2KSuG.js";import"./index-BO82MG2q.js";import"./index-By62WOW2.js";import"./index-DvCAfrCY.js";import"./dynamic-import-rn7iEbEb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cab9KH13.js";const p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-file-preview-card
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Group of file preview cards, primarily used alongside \`ebay-file-input\`.

## Compatibility

This component only works on Marko 5 and later.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-ebay-file-preview-card-group)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-ebay-file-preview-card-group)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-file-preview-card-group/examples)
`,r=a=>({input:i(a)}),Y={title:"media/ebay-file-preview-card-group",component:n,parameters:{docs:{description:{component:p}}},argTypes:{card:{name:"@card",table:{category:"@attribute tags"},description:"A repeatable attribute tag for each file preview card"},a11yCancelUploadText:{type:"string",control:{type:"text"},description:"Localized, a11y text for cancel upload button, applied to all cards"},deleteText:{type:"string",control:{type:"text"},description:"Text for delete button, applied to all cards"},menuActions:{type:"array",description:"List of menu actions, applied to all cards",control:{type:"object"}},a11ySeeMoreText:{type:"string",control:{type:"text"},description:"Localized, a11y text for see more button, applied to all cards"},"onMenu-action":{action:"on-menu-action",description:"Triggered when an action is selected from the menu on a card",table:{category:"Events",defaultValue:{summary:"index, eventName, event /* from ebay-menu-button */"}}},onDelete:{action:"on-delete",description:"Triggered when the delete button is clicked on a card",table:{category:"Events",defaultValue:{summary:"index"}}},onCancel:{action:"on-cancel",description:"Triggered when the cancel button is clicked on a card",table:{category:"Events",defaultValue:{summary:"index"}}}}},o={name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},e=r.bind({});e.args={a11yCancelUploadText:"Cancel upload",deleteText:"Delete",card:[{file:{...o}},{file:{...o}},{file:{...o}}]};const t=r.bind({});t.args={a11yCancelUploadText:"Cancel upload",deleteText:"Delete",card:[...Array(35)].map(()=>({file:{...o}}))};const Z=["Default","ManyCards"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...t.parameters?.docs?.source}}};export{e as Default,t as ManyCards,Z as __namedExportsOrder,Y as default};
