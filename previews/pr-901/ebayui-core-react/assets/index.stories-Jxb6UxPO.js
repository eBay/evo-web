var C=Object.defineProperty;var n=(a,o)=>C(a,"name",{value:o,configurable:!0});import{R as e,r as R}from"./iframe-DGu6SM1O.js";import{E as r,a as E}from"./description-PhxuFOPz.js";import{E as k}from"./button-B_INoLE2.js";import{E as t}from"./radio-DTImZc49.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-BKWNfWIO.js";import"./ebay-icon-spinner-30-Psu_Hdgb.js";import"./ebay-icon-chevron-down-12-DUM7ViTU.js";import"./ebay-icon-radio-unchecked-18-DbuIGOjL.js";import"./utils-CRLARqUd.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,K={title:"form input/ebay-radio",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayRadio } from "@ebay/ui-core-react/ebay-radio";
import { EbayLabel } from "@ebay/ui-core-react/ebay-field";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/field";
import "@ebay/skin/icon";
import "@ebay/skin/radio";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/field.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/radio.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayRadio value="1" id="radio-1">
    <EbayLabel>Choice 1</EbayLabel>
</EbayRadio>
\`\`\``}}},argTypes:{disabled:{description:"Disabled when true",control:"boolean"},value:{description:"The value of radio button component. For the radio checked/unchecked state, please use `checked` props.",control:"text"},checked:{description:"Set the radio button state to checked/unchecked. Use this for **controlled component**.",control:"boolean"},defaultChecked:{description:"Set the radio button initial state to checked/unchecked. Use this for **uncontrolled component**.",control:"boolean"},size:{description:"No",control:"text"},onChange:{description:"Callback fired when selected radio button is changed",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value })`"}}},onFocus:{description:"Callback fired when radio button is focused",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(FocusEvent, { value })`"}}},onKeyDown:{description:"Callback fired when key is down",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value })`"}}}}},i=n(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(t,{...a,value:"123",id:"radio-1"},e.createElement(r,null,"Default"))),e.createElement("p",null,e.createElement(t,{...a,value:"123",id:"radio-11",size:"large"},e.createElement(r,null,"Large")))),"Default"),c={render:n(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(t,{...a,value:"123",id:"radio-1"}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"radio-1"},"Default")),e.createElement("p",null,e.createElement(t,{...a,value:"123",id:"radio-11",size:"large"}),e.createElement("label",{className:"field__label field__label--end",htmlFor:"radio-11"},"Large"))),"render"),name:"Using custom label html"},u={render:n(a=>e.createElement(e.Fragment,null,e.createElement(t,{...a,checked:!0,id:"radio-2"},e.createElement(r,null,"Selected"))),"render"),name:"Selected radio-button"},m={render:n(a=>e.createElement(e.Fragment,null,e.createElement(t,{...a,disabled:!0,id:"radio-20"},e.createElement(r,null,"Disabled"))),"render"),name:"Disabled radio-button"},p={render:n(a=>{const o={onChange:n((d,l)=>g("onChange")(d,l),"onChange"),onFocus:n((d,l)=>g("onFocus")(d,l),"onFocus"),onKeyDown:n((d,l)=>g("onKeyDown")(d,l),"onKeyDown")};return e.createElement("fieldset",null,e.createElement("legend",null,"Choose an Option"),e.createElement(E,null,e.createElement(t,{...a,id:"group-radio-1",value:"1",defaultChecked:!0,name:"radio-group",...o},e.createElement(r,null,"Option 1"))),e.createElement(E,null,e.createElement(t,{...a,id:"group-radio-2",value:"2",defaultChecked:!1,name:"radio-group",...o},e.createElement(r,null,"Option 2"))),e.createElement(E,null,e.createElement(t,{...a,id:"group-radio-3",value:"3",defaultChecked:!1,name:"radio-group",...o},e.createElement(r,null,"Option 3"))))},"render"),name:"Grouped radio-buttons"},b={render:n(a=>e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:`
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                `}}),e.createElement(t,{...a,className:"custom","aria-label":"custom color radio example",id:"radio-30"},e.createElement(r,null,"Custom style"))),"render"),name:"Styled radio-button"},y={render:n(a=>{const o=["Regular","Express","Local Pickup"],d=n(()=>{const[l,f]=R.useState(o[0]),v=n((s,...h)=>{g("radio-change")(s,...h),f(s.target.value)},"handleChange");return e.createElement("div",null,e.createElement("fieldset",null,e.createElement("legend",null,"Choose your delivery"),o.map((s,h)=>e.createElement(E,{key:`delivery-${s}`},e.createElement(t,{...a,id:`delivery-${h}`,checked:l===s,value:s,name:"delivery-method",onChange:v},e.createElement(r,null,s))))),e.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"2rem"}},e.createElement("div",{style:{marginRight:"1rem"}},"Current selected: ",e.createElement("strong",null,l)),e.createElement(k,{onClick:n(()=>f(o[1]),"onClick")},"Reset to default (Express)")))},"TestControlledComponent");return e.createElement(e.Fragment,null,e.createElement(d,null))},"render"),name:"Controlled component"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayRadio {...args} value="123" id="radio-1">
                <EbayLabel>Default</EbayLabel>
            </EbayRadio>
        </p>
        <p>
            <EbayRadio {...args} value="123" id="radio-11" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayRadio>
        </p>
    </>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayRadio {...args} value="123" id="radio-1" />
                <label className="field__label field__label--end" htmlFor="radio-1">
                    Default
                </label>
            </p>
            <p>
                <EbayRadio {...args} value="123" id="radio-11" size="large" />
                <label className="field__label field__label--end" htmlFor="radio-11">
                    Large
                </label>
            </p>
        </>,
  name: "Using custom label html"
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayRadio {...args} checked id="radio-2">
                <EbayLabel>Selected</EbayLabel>
            </EbayRadio>
        </>,
  name: "Selected radio-button"
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayRadio {...args} disabled id="radio-20">
                <EbayLabel>Disabled</EbayLabel>
            </EbayRadio>
        </>,
  name: "Disabled radio-button"
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const defaultProps = {
      onChange: (e, props) => action("onChange")(e, props),
      onFocus: (e, props) => action("onFocus")(e, props),
      onKeyDown: (e, props) => action("onKeyDown")(e, props)
    };
    return <fieldset>
                <legend>Choose an Option</legend>
                <EbayField>
                    <EbayRadio {...args} id="group-radio-1" value="1" defaultChecked name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 1</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio {...args} id="group-radio-2" value="2" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 2</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio {...args} id="group-radio-3" value="3" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 3</EbayLabel>
                    </EbayRadio>
                </EbayField>
            </fieldset>;
  },
  name: "Grouped radio-buttons"
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <style dangerouslySetInnerHTML={{
      __html: \`
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                \`
    }} />
            <EbayRadio {...args} className="custom" aria-label="custom color radio example" id="radio-30">
                <EbayLabel>Custom style</EbayLabel>
            </EbayRadio>
        </>,
  name: "Styled radio-button"
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const deliveryMethods = ["Regular", "Express", "Local Pickup"];
    const TestControlledComponent = () => {
      const [selectedValue, setSelectedValue] = useState(deliveryMethods[0]);
      const handleChange = (e, ...rest) => {
        action("radio-change")(e, ...rest);
        setSelectedValue(e.target.value);
      };
      return <div>
                    <fieldset>
                        <legend>Choose your delivery</legend>
                        {deliveryMethods.map((item, index) => <EbayField key={\`delivery-\${item}\`}>
                                <EbayRadio {...args} id={\`delivery-\${index}\`} checked={selectedValue === item} value={item} name="delivery-method" onChange={handleChange}>
                                    <EbayLabel>{item}</EbayLabel>
                                </EbayRadio>
                            </EbayField>)}
                    </fieldset>

                    <div style={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem"
        }}>
                        <div style={{
            marginRight: "1rem"
          }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>

                        <EbayButton onClick={() => setSelectedValue(deliveryMethods[1])}>
                            Reset to default (Express)
                        </EbayButton>
                    </div>
                </div>;
    };
    return <>
                <TestControlledComponent />
            </>;
  },
  name: "Controlled component"
}`,...y.parameters?.docs?.source}}};const N=["Default","UsingCustomLabelHtml","SelectedRadioButton","DisabledRadioButton","GroupedRadioButtons","StyledRadioButton","ControlledComponent"];export{y as ControlledComponent,i as Default,m as DisabledRadioButton,p as GroupedRadioButtons,u as SelectedRadioButton,b as StyledRadioButton,c as UsingCustomLabelHtml,N as __namedExportsOrder,K as default};
