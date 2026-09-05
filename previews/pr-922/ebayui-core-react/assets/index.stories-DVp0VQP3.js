import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{i as r,o as i,t as a}from"./ebay-field-BAldZaAE.js";import{n as o,t as s}from"./ebay-tri-state-checkbox-Bj69nfkI.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),a(),s(),c=n(),l={component:o,title:`form input/ebay-tri-state-checkbox`,argTypes:{checked:{options:[`false`,`mixed`,`true`],control:{type:`select`},description:`Either "true", "false" or "mixed". Changes the checkbox state to the given one depdending on the checked state.`},skipMixed:{type:`boolean`,control:{type:`boolean`},description:`If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.`},size:{options:[`default`,`large`],control:{type:`select`},description:`Either "large" or "default". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)`,table:{defaultValue:{summary:`default`}}},onChange:{action:`onChange`,description:`Triggered on change`,table:{category:`Events`,defaultValue:{summary:`originalEvent, { value, checked }`}}},onFocus:{action:`onFocus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`originalEvent, { value, checked }`}}},onKeyDown:{action:`onKeydown`,description:`Triggered on key down`,table:{category:`Events`,defaultValue:{summary:`originalEvent, { value, checked }`}}},disabled:{control:`boolean`},defaultChecked:{options:[`true`,`false`,`mixed`],control:{type:`select`},description:`Initial uncontrolled checked state`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},u=e=>(0,c.jsx)(o,{...e,value:`123`,id:`checkbox-11`}),d=e=>(0,c.jsx)(o,{...e,checked:`mixed`,value:`123`,id:`checkbox-11`}),d.argTypes={checked:{table:{disable:!0}}},f=e=>(0,c.jsxs)(i,{children:[(0,c.jsx)(o,{...e,value:`123`,id:`checkbox-11`}),(0,c.jsx)(r,{className:`field__label field__label--end`,htmlFor:`checkbox-11`,children:`Label`})]}),p=e=>(0,c.jsxs)(i,{children:[(0,c.jsx)(o,{...e,value:`123`,disabled:!0,id:`checkbox-11`}),(0,c.jsx)(r,{className:`field__label--disabled`,style:{marginLeft:`8px`},htmlFor:`checkbox-11`,children:`Label`})]}),m=[`Default`,`MixedCheckbox`,`WithLabel`,`Disabled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayTriStateCheckbox {...args} checked="mixed" value="123" id="checkbox-11" />`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />
        <EbayLabel className="field__label field__label--end" htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" disabled id="checkbox-11" />
        <EbayLabel className="field__label--disabled" style={{
    marginLeft: "8px"
  }} htmlFor="checkbox-11">
            Label
        </EbayLabel>
    </EbayField>`,...p.parameters?.docs?.source}}}})))()}h();export{u as Default,p as Disabled,d as MixedCheckbox,f as WithLabel,m as __namedExportsOrder,l as default};