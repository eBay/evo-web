import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{i as r,t as i}from"./ebay-textbox-BpT_GSbE.js";import{i as a,n as o,o as s,t as c}from"./ebay-field-BAldZaAE.js";import{n as l,t as u}from"./ebay-checkbox-CrS3fqEa.js";import{n as d,t as f}from"./ebay-switch-zbUyAL9s.js";var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),i(),f(),u(),c(),p=n(),m={title:`form input/ebay-field`,tags:[`autodocs`],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbayField, EbayLabel, EbayFieldDescription } from "@ebay/ui-core-react/ebay-field";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/field";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/field.css";\n```'}}},argTypes:{layout:{description:"`block`, `inline` (default)",options:[`block`,`inline`],control:{type:`select`}},stacked:{description:`display label above the field if true`,control:`boolean`},required:{description:`indicates the field is required if true`,control:`boolean`},position:{description:"`start` (default) or `end` position towards the input",options:[`start`,`end`],control:{type:`select`}},type:{description:"`confirmation`, `default`(Default), `attention`, `information`, `group`",options:[`confirmation`,`default`,`attention`,`information`,`group`],control:{type:`select`}}}},h={render:e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label for textbox`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label for switch`}),(0,p.jsx)(d,{value:`123`,id:`switch-1`})]}),(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label for checkbox`}),(0,p.jsx)(l,{defaultChecked:!0,id:`checkbox-2`})]})]}),name:`Default - inline`},g=e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{stacked:!0,children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{stacked:!0,children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{stacked:!0,children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]})]}),_={render:e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label 2`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{children:`Label 3`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label 4`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label 5`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]})]}),name:`Block and inline combination`},v={render:e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{required:!0,children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]}),(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(a,{children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`})]})]}),name:`required`},y={render:e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{stacked:!0,htmlFor:`field1`,children:`Label 1`}),(0,p.jsx)(r,{placeholder:`placeholder text`,id:`field1`}),(0,p.jsx)(o,{children:`Some description Text`})]}),(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{stacked:!0,children:`Label 2`}),(0,p.jsx)(r,{placeholder:`placeholder text`}),(0,p.jsx)(o,{type:`confirmation`,children:`Some description Text`})]}),(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{stacked:!0,children:`Label 3`}),(0,p.jsx)(r,{placeholder:`placeholder text`,invalid:!0}),(0,p.jsx)(o,{type:`attention`,children:`Some description Text`})]}),(0,p.jsxs)(s,{...e,layout:`block`,children:[(0,p.jsx)(a,{stacked:!0,htmlFor:`field4`,children:`Label 4`}),(0,p.jsx)(r,{placeholder:`placeholder text`,id:`field4`}),(0,p.jsx)(o,{type:`confirmation`,position:`below`,children:`Some description Text`})]})]}),name:`with description`},b={render:e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`p`,{children:(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(r,{placeholder:`placeholder text`}),(0,p.jsx)(a,{position:`end`,children:`Label 1`})]})}),(0,p.jsx)(`p`,{children:(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(d,{value:`123`,id:`switch-1`}),(0,p.jsx)(a,{position:`end`,children:`Label 1`})]})}),(0,p.jsx)(`p`,{children:(0,p.jsxs)(s,{...e,children:[(0,p.jsx)(l,{defaultChecked:!0,id:`checkbox-2`}),(0,p.jsx)(a,{position:`end`,children:`Label 1`})]})})]}),name:`Labels on the right`},x=[`DefaultInline`,`Block`,`BlockAndInlineCombination`,`Required`,`WithDescription`,`LabelsOnTheRight`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args}>
                <EbayLabel>Label for textbox</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label for switch</EbayLabel>
                <EbaySwitch value="123" id="switch-1" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label for checkbox</EbayLabel>
                <EbayCheckbox defaultChecked id="checkbox-2" />
            </EbayField>
        </div>,
  name: "Default - inline"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div>
        <EbayField {...args} layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField {...args} layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField {...args} layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
    </div>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args}>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 4</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 5</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>,
  name: "Block and inline combination"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args}>
                <EbayLabel required>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField {...args}>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>,
  name: "required"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <EbayField {...args} layout="block">
                <EbayLabel stacked htmlFor="field1">
                    Label 1
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field1" />
                <EbayFieldDescription>Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel stacked>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
                <EbayFieldDescription type="confirmation">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel stacked>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" invalid />
                <EbayFieldDescription type="attention">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField {...args} layout="block">
                <EbayLabel stacked htmlFor="field4">
                    Label 4
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field4" />
                <EbayFieldDescription type="confirmation" position="below">
                    Some description Text
                </EbayFieldDescription>
            </EbayField>
        </div>,
  name: "with description"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayField {...args}>
                    <EbayTextbox placeholder="placeholder text" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField {...args}>
                    <EbaySwitch value="123" id="switch-1" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField {...args}>
                    <EbayCheckbox defaultChecked id="checkbox-2" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
        </>,
  name: "Labels on the right"
}`,...b.parameters?.docs?.source}}}})))()}S();export{g as Block,_ as BlockAndInlineCombination,h as DefaultInline,b as LabelsOnTheRight,v as Required,y as WithDescription,x as __namedExportsOrder,m as default};