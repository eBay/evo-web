var d=Object.defineProperty;var t=(e,b)=>d(e,"name",{value:b,configurable:!0});import{R as a}from"./iframe-CCU1rlUb.js";import{a as i,E as n}from"./description-DHEqnobU.js";import{E as r}from"./tri-state-checkbox-BT_QsuSy.js";import"./preload-helper-Cc2_yIPf.js";import"./ebay-icon-checkbox-unchecked-18-9NTMsQrW.js";import"./ebay-icon-checkbox-mixed-24-B3Rs14B3.js";const x={component:r,title:"form input/ebay-tri-state-checkbox",argTypes:{checked:{options:["false","mixed","true"],control:{type:"select"},description:'Either "true", "false" or "mixed". Changes the checkbox state to the given one depdending on the checked state.'},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["default","large"],control:{type:"select"},description:'Either "large" or "default". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"default"}}},onChange:{action:"onChange",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},onFocus:{action:"onFocus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},onKeyDown:{action:"onKeydown",description:"Triggered on key down",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},disabled:{control:"boolean"},defaultChecked:{options:["true","false","mixed"],control:{type:"select"},description:"Initial uncontrolled checked state"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayTriStateCheckbox } from "@ebay/ui-core-react/ebay-tri-state-checkbox";
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/checkbox";
import "@ebay/skin/field";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/checkbox.css";
@import "@ebay/skin/field.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayTriStateCheckbox id="tri-checkbox-1">
    <EbayLabel>Select all</EbayLabel>
</EbayTriStateCheckbox>
\`\`\``}}}},c=t(e=>a.createElement(r,{...e,value:"123",id:"checkbox-11"}),"Default"),o=t(e=>a.createElement(r,{...e,checked:"mixed",value:"123",id:"checkbox-11"}),"MixedCheckbox");o.argTypes={checked:{table:{disable:!0}}};const s=t(e=>a.createElement(i,null,a.createElement(r,{...e,value:"123",id:"checkbox-11"}),a.createElement(n,{className:"field__label field__label--end",htmlFor:"checkbox-11"},"Label")),"WithLabel"),l=t(e=>a.createElement(i,null,a.createElement(r,{...e,value:"123",disabled:!0,id:"checkbox-11"}),a.createElement(n,{className:"field__label--disabled",style:{marginLeft:"8px"},htmlFor:"checkbox-11"},"Label")),"Disabled");c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'args => <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />',...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'args => <EbayTriStateCheckbox {...args} checked="mixed" value="123" id="checkbox-11" />',...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />
        <EbayLabel className="field__label field__label--end" htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" disabled id="checkbox-11" />
        <EbayLabel className="field__label--disabled" style={{
    marginLeft: "8px"
  }} htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>`,...l.parameters?.docs?.source}}};const E=["Default","MixedCheckbox","WithLabel","Disabled"];export{c as Default,l as Disabled,o as MixedCheckbox,s as WithLabel,E as __namedExportsOrder,x as default};
