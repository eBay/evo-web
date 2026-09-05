import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{n as i,t as a}from"./ebay-switch-zbUyAL9s.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=t((()=>{o=e(n()),a(),s=r(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`form input/ebay-switch`,tags:[`autodocs`],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbaySwitch } from "@ebay/ui-core-react/ebay-switch";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/switch";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/switch.css";\n```'}}},argTypes:{checked:{description:`Whether the switch is checked (controlled)`,control:`boolean`},defaultChecked:{description:`Whether the switch is initially checked (uncontrolled)`,control:`boolean`},disabled:{control:`boolean`},value:{description:`Value of the switch input`,control:`text`},onChange:{description:`Triggered on change`,action:`onChange`,table:{category:`Events`,defaultValue:{summary:"`(ChangeEvent, { value: string, checked: boolean }`"}}}}},u={render:e=>(0,s.jsxs)(`span`,{className:`field`,children:[(0,s.jsx)(i,{...e,value:`123`,id:`switch-1`,onChange:(e,t)=>c(`onChange`)(e,t)}),(0,s.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`switch-1`,children:`Default`})]}),name:`Default switch-button`},d={render:e=>(0,s.jsxs)(`span`,{className:`field`,children:[(0,s.jsx)(i,{...e,checked:!0,value:`123`,id:`switch-2`,onChange:c(`switch-change`)}),(0,s.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`switch-2`,children:`Checked`})]}),name:`Selected switch-button`},f={render:e=>(0,s.jsxs)(`span`,{className:`field`,children:[(0,s.jsx)(i,{...e,disabled:!0,id:`switch-20`}),(0,s.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`switch-20`,children:`Disabled`})]}),name:`Disabled switch-button`},p={render:e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsxs)(`span`,{className:`field`,children:[(0,s.jsx)(i,{...e,checked:t,id:`switch-30`,onChange:(e,t)=>{c(`onChange`)(e,t),t&&n(t.checked)}}),(0,s.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`switch-30`,children:t?`Checked`:`Unchecked`})]})},name:`Controlled switch-button`},m=[`DefaultSwitchButton`,`SelectedSwitchButton`,`DisabledSwitchButton`,`ControlledSwitchButton`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} value="123" id="switch-1" onChange={(e, props) => action("onChange")(e, props)} />
            <label className="field__label field__label--end" htmlFor="switch-1">
                Default
            </label>
        </span>,
  name: "Default switch-button"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} checked value="123" id="switch-2" onChange={action("switch-change")} />
            <label className="field__label field__label--end" htmlFor="switch-2">
                Checked
            </label>
        </span>,
  name: "Selected switch-button"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} disabled id="switch-20" />
            <label className="field__label field__label--end" htmlFor="switch-20">
                Disabled
            </label>
        </span>,
  name: "Disabled switch-button"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <span className="field">
                <EbaySwitch {...args} checked={checked} id="switch-30" onChange={(e, props) => {
        action("onChange")(e, props);
        if (props) {
          setChecked(props.checked);
        }
      }} />
                <label className="field__label field__label--end" htmlFor="switch-30">
                    {checked ? "Checked" : "Unchecked"}
                </label>
            </span>;
  },
  name: "Controlled switch-button"
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as ControlledSwitchButton,u as DefaultSwitchButton,f as DisabledSwitchButton,d as SelectedSwitchButton,m as __namedExportsOrder,l as default};