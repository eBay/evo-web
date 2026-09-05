var b=Object.defineProperty;var t=(a,n)=>b(a,"name",{value:n,configurable:!0});import{r as p,R as e}from"./iframe-Cdnvy4Ve.js";import{E as o}from"./ebay-switch-CK8Dy1IY.js";import"./preload-helper-Cc2_yIPf.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:"form input/ebay-switch",tags:["autodocs"],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbaySwitch } from "@ebay/ui-core-react/ebay-switch";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/switch";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/switch.css";\n```'}}},argTypes:{checked:{description:"Whether the switch is checked (controlled)",control:"boolean"},defaultChecked:{description:"Whether the switch is initially checked (uncontrolled)",control:"boolean"},disabled:{control:"boolean"},value:{description:"Value of the switch input",control:"text"},onChange:{description:"Triggered on change",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string, checked: boolean }`"}}}}},s={render:t(a=>e.createElement("span",{className:"field"},e.createElement(o,{...a,value:"123",id:"switch-1",onChange:t((n,i)=>h("onChange")(n,i),"onChange")}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-1"},"Default")),"render"),name:"Default switch-button"},l={render:t(a=>e.createElement("span",{className:"field"},e.createElement(o,{...a,checked:!0,value:"123",id:"switch-2",onChange:h("switch-change")}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-2"},"Checked")),"render"),name:"Selected switch-button"},c={render:t(a=>e.createElement("span",{className:"field"},e.createElement(o,{...a,disabled:!0,id:"switch-20"}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-20"},"Disabled")),"render"),name:"Disabled switch-button"},r={render:t(a=>{const[n,i]=p.useState(!1);return e.createElement("span",{className:"field"},e.createElement(o,{...a,checked:n,id:"switch-30",onChange:t((m,d)=>{h("onChange")(m,d),d&&i(d.checked)},"onChange")}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"switch-30"},n?"Checked":"Unchecked"))},"render"),name:"Controlled switch-button"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} value="123" id="switch-1" onChange={(e, props) => action("onChange")(e, props)} />
            <label className="field__label field__label--end" htmlFor="switch-1">
                Default
            </label>
        </span>,
  name: "Default switch-button"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} checked value="123" id="switch-2" onChange={action("switch-change")} />
            <label className="field__label field__label--end" htmlFor="switch-2">
                Checked
            </label>
        </span>,
  name: "Selected switch-button"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
            <EbaySwitch {...args} disabled id="switch-20" />
            <label className="field__label field__label--end" htmlFor="switch-20">
                Disabled
            </label>
        </span>,
  name: "Disabled switch-button"
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const S=["DefaultSwitchButton","SelectedSwitchButton","DisabledSwitchButton","ControlledSwitchButton"];export{r as ControlledSwitchButton,s as DefaultSwitchButton,c as DisabledSwitchButton,l as SelectedSwitchButton,S as __namedExportsOrder,g as default};
