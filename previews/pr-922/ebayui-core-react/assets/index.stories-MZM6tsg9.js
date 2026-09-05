import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{n as i,t as a}from"./ebay-button-B_FEPJ7h.js";import{i as o,o as s,t as c}from"./ebay-field-BAldZaAE.js";import{n as l,t as u}from"./ebay-radio-G_mj3G72.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{d=e(n()),c(),a(),u(),f=r(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`form input/ebay-radio`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{disabled:{description:`Disabled when true`,control:`boolean`},value:{description:"The value of radio button component. For the radio checked/unchecked state, please use `checked` props.",control:`text`},checked:{description:`Set the radio button state to checked/unchecked. Use this for **controlled component**.`,control:`boolean`},defaultChecked:{description:`Set the radio button initial state to checked/unchecked. Use this for **uncontrolled component**.`,control:`boolean`},size:{description:`No`,control:`text`},onChange:{description:`Callback fired when selected radio button is changed`,action:`onChange`,table:{category:`Events`,defaultValue:{summary:"`(ChangeEvent, { value })`"}}},onFocus:{description:`Callback fired when radio button is focused`,action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent, { value })`"}}},onKeyDown:{description:`Callback fired when key is down`,action:`onKeyDown`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent, { value })`"}}}}},h=e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`p`,{children:(0,f.jsx)(l,{...e,value:`123`,id:`radio-1`,children:(0,f.jsx)(o,{children:`Default`})})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(l,{...e,value:`123`,id:`radio-11`,size:`large`,children:(0,f.jsx)(o,{children:`Large`})})})]}),g={render:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`p`,{children:[(0,f.jsx)(l,{...e,value:`123`,id:`radio-1`}),(0,f.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`radio-1`,children:`Default`})]}),(0,f.jsxs)(`p`,{children:[(0,f.jsx)(l,{...e,value:`123`,id:`radio-11`,size:`large`}),(0,f.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`radio-11`,children:`Large`})]})]}),name:`Using custom label html`},_={render:e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(l,{...e,checked:!0,id:`radio-2`,children:(0,f.jsx)(o,{children:`Selected`})})}),name:`Selected radio-button`},v={render:e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(l,{...e,disabled:!0,id:`radio-20`,children:(0,f.jsx)(o,{children:`Disabled`})})}),name:`Disabled radio-button`},y={render:e=>{let t={onChange:(e,t)=>p(`onChange`)(e,t),onFocus:(e,t)=>p(`onFocus`)(e,t),onKeyDown:(e,t)=>p(`onKeyDown`)(e,t)};return(0,f.jsxs)(`fieldset`,{children:[(0,f.jsx)(`legend`,{children:`Choose an Option`}),(0,f.jsx)(s,{children:(0,f.jsx)(l,{...e,id:`group-radio-1`,value:`1`,defaultChecked:!0,name:`radio-group`,...t,children:(0,f.jsx)(o,{children:`Option 1`})})}),(0,f.jsx)(s,{children:(0,f.jsx)(l,{...e,id:`group-radio-2`,value:`2`,defaultChecked:!1,name:`radio-group`,...t,children:(0,f.jsx)(o,{children:`Option 2`})})}),(0,f.jsx)(s,{children:(0,f.jsx)(l,{...e,id:`group-radio-3`,value:`3`,defaultChecked:!1,name:`radio-group`,...t,children:(0,f.jsx)(o,{children:`Option 3`})})})]})},name:`Grouped radio-buttons`},b={render:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                `}}),(0,f.jsx)(l,{...e,className:`custom`,"aria-label":`custom color radio example`,id:`radio-30`,children:(0,f.jsx)(o,{children:`Custom style`})})]}),name:`Styled radio-button`},x={render:e=>{let t=[`Regular`,`Express`,`Local Pickup`];return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(()=>{let[n,r]=(0,d.useState)(t[0]),a=(e,...t)=>{p(`radio-change`)(e,...t),r(e.target.value)};return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`fieldset`,{children:[(0,f.jsx)(`legend`,{children:`Choose your delivery`}),t.map((t,r)=>(0,f.jsx)(s,{children:(0,f.jsx)(l,{...e,id:`delivery-${r}`,checked:n===t,value:t,name:`delivery-method`,onChange:a,children:(0,f.jsx)(o,{children:t})})},`delivery-${t}`))]}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,marginTop:`2rem`},children:[(0,f.jsxs)(`div`,{style:{marginRight:`1rem`},children:[`Current selected: `,(0,f.jsx)(`strong`,{children:n})]}),(0,f.jsx)(i,{onClick:()=>r(t[1]),children:`Reset to default (Express)`})]})]})},{})})},name:`Controlled component`},S=[`Default`,`UsingCustomLabelHtml`,`SelectedRadioButton`,`DisabledRadioButton`,`GroupedRadioButtons`,`StyledRadioButton`,`ControlledComponent`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayRadio {...args} checked id="radio-2">
                <EbayLabel>Selected</EbayLabel>
            </EbayRadio>
        </>,
  name: "Selected radio-button"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayRadio {...args} disabled id="radio-20">
                <EbayLabel>Disabled</EbayLabel>
            </EbayRadio>
        </>,
  name: "Disabled radio-button"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as ControlledComponent,h as Default,v as DisabledRadioButton,y as GroupedRadioButtons,_ as SelectedRadioButton,b as StyledRadioButton,g as UsingCustomLabelHtml,S as __namedExportsOrder,m as default};