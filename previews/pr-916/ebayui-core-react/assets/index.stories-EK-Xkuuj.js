var h=Object.defineProperty;var r=(a,y)=>h(a,"name",{value:y,configurable:!0});import{R as e}from"./iframe-BndibQPF.js";import{E as n}from"./textbox-WtiscvLM.js";import{E as s}from"./ebay-switch-BgiSFsYN.js";import{E as m}from"./checkbox-C-expLy3.js";import{a as l,E as t,b as o}from"./description-Bx7bsrMX.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-GuDFCsPF.js";import"./icon-button-BF6ZnwZh.js";import"./badge-VUyM8HZM.js";import"./hooks-LjTRtDQV.js";import"./ebay-icon-checkbox-unchecked-18-CM_Tsqb8.js";const C={title:"form input/ebay-field",tags:["autodocs"],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbayField, EbayLabel, EbayFieldDescription } from "@ebay/ui-core-react/ebay-field";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/field";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/field.css";\n```'}}},argTypes:{layout:{description:"`block`, `inline` (default)",options:["block","inline"],control:{type:"select"}},stacked:{description:"display label above the field if true",control:"boolean"},required:{description:"indicates the field is required if true",control:"boolean"},position:{description:"`start` (default) or `end` position towards the input",options:["start","end"],control:{type:"select"}},type:{description:"`confirmation`, `default`(Default), `attention`, `information`, `group`",options:["confirmation","default","attention","information","group"],control:{type:"select"}}}},c={render:r(a=>e.createElement("div",null,e.createElement(l,{...a},e.createElement(t,null,"Label for textbox"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label for switch"),e.createElement(s,{value:"123",id:"switch-1"})),e.createElement(l,{...a},e.createElement(t,null,"Label for checkbox"),e.createElement(m,{defaultChecked:!0,id:"checkbox-2"}))),"render"),name:"Default - inline"},i=r(a=>e.createElement("div",null,e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"}))),"Block"),b={render:r(a=>e.createElement("div",null,e.createElement(l,{...a},e.createElement(t,null,"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 2"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a,layout:"block"},e.createElement(t,null,"Label 3"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 4"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 5"),e.createElement(n,{placeholder:"placeholder text"}))),"render"),name:"Block and inline combination"},d={render:r(a=>e.createElement("div",null,e.createElement(l,{...a},e.createElement(t,{required:!0},"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 1"),e.createElement(n,{placeholder:"placeholder text"})),e.createElement(l,{...a},e.createElement(t,null,"Label 1"),e.createElement(n,{placeholder:"placeholder text"}))),"render"),name:"required"},E={render:r(a=>e.createElement("div",null,e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0,htmlFor:"field1"},"Label 1"),e.createElement(n,{placeholder:"placeholder text",id:"field1"}),e.createElement(o,null,"Some description Text")),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 2"),e.createElement(n,{placeholder:"placeholder text"}),e.createElement(o,{type:"confirmation"},"Some description Text")),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0},"Label 3"),e.createElement(n,{placeholder:"placeholder text",invalid:!0}),e.createElement(o,{type:"attention"},"Some description Text")),e.createElement(l,{...a,layout:"block"},e.createElement(t,{stacked:!0,htmlFor:"field4"},"Label 4"),e.createElement(n,{placeholder:"placeholder text",id:"field4"}),e.createElement(o,{type:"confirmation",position:"below"},"Some description Text"))),"render"),name:"with description"},p={render:r(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(l,{...a},e.createElement(n,{placeholder:"placeholder text"}),e.createElement(t,{position:"end"},"Label 1"))),e.createElement("p",null,e.createElement(l,{...a},e.createElement(s,{value:"123",id:"switch-1"}),e.createElement(t,{position:"end"},"Label 1"))),e.createElement("p",null,e.createElement(l,{...a},e.createElement(m,{defaultChecked:!0,id:"checkbox-2"}),e.createElement(t,{position:"end"},"Label 1")))),"render"),name:"Labels on the right"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div>
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
    </div>`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const q=["DefaultInline","Block","BlockAndInlineCombination","Required","WithDescription","LabelsOnTheRight"];export{i as Block,b as BlockAndInlineCombination,c as DefaultInline,p as LabelsOnTheRight,d as Required,E as WithDescription,q as __namedExportsOrder,C as default};
