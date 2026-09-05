import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{i,t as a}from"./ebay-field-BAldZaAE.js";import{n as o,t as s}from"./ebay-checkbox-CrS3fqEa.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{c=e(n()),a(),s(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={component:o,title:`form input/ebay-checkbox`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayCheckbox } from "@ebay/ui-core-react/ebay-checkbox";
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
<EbayCheckbox id="checkbox-1">
    <EbayLabel>Remember me!</EbayLabel>
</EbayCheckbox>
\`\`\``}}},argTypes:{size:{description:"Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon)",options:[`regular`,`large`],control:{type:`select`}},disabled:{control:`boolean`},checked:{description:`indicates the checked value of the input element, required for a controlled component.`,control:`boolean`},defaultChecked:{description:`indicates the default checked input element value. Use when the component is not controlled.`,control:`boolean`},onChange:{description:`Callback fired on change`,action:`onChange`,table:{category:`Events`,defaultValue:{summary:"`(event: ChangeEvent, { value: string, checked: Boolean })`"}}},onFocus:{description:`Callback fired when button is focused`,action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(event: FocusEvent, { value: string, checked: Boolean })`"}}},onKeyDown:{description:`Callback fired when key is pressed`,action:`onKeyDown`,table:{category:`Events`,defaultValue:{summary:"`(event: KeyboardEvent, { value: string, checked: Boolean })`"}}}}},f=e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`p`,{children:(0,l.jsx)(o,{...e,value:`123`,id:`checkbox-11`,onChange:(e,t)=>u(`onChange`)(e,t),onFocus:(e,t)=>u(`onFocus`)(e,t),onKeyDown:(e,t)=>u(`onKeyDown`)(e,t),children:(0,l.jsx)(i,{children:`Default`})})}),(0,l.jsx)(`p`,{children:(0,l.jsx)(o,{...e,value:`123`,id:`checkbox-12`,size:`large`,children:(0,l.jsx)(i,{children:`Large`})})})]}),p=e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`p`,{children:(0,l.jsx)(o,{...e,checked:!0,value:`123`,id:`checkbox-21`,children:(0,l.jsx)(i,{children:`Default`})})}),(0,l.jsx)(`p`,{children:(0,l.jsx)(o,{...e,checked:!0,value:`123`,id:`checkbox-22`,size:`large`,children:(0,l.jsx)(i,{children:`Large`})})})]}),m=e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`p`,{children:(0,l.jsx)(o,{...e,disabled:!0,value:`123`,id:`checkbox-31`,children:(0,l.jsx)(i,{children:`Default disabled`})})}),(0,l.jsx)(`p`,{children:(0,l.jsx)(o,{...e,disabled:!0,value:`123`,id:`checkbox-32`,size:`large`,children:(0,l.jsx)(i,{children:`Large disabled`})})})]}),h=e=>(0,l.jsxs)(`fieldset`,{children:[(0,l.jsx)(`legend`,{children:`Choose an Option`}),(0,l.jsx)(`span`,{className:`field`,children:(0,l.jsx)(o,{...e,id:`group-checkbox-1`,value:`1`,onChange:u(`checkbox-change`),name:`checkbox-group`,children:(0,l.jsx)(i,{children:`Option 1`})})}),(0,l.jsx)(`span`,{className:`field`,children:(0,l.jsx)(o,{...e,id:`group-checkbox-2`,value:`2`,onChange:u(`checkbox-change`),name:`checkbox-group`,children:(0,l.jsx)(i,{children:`Option 2`})})}),(0,l.jsx)(`span`,{className:`field`,children:(0,l.jsx)(o,{...e,id:`group-checkbox-3`,value:`3`,onChange:u(`checkbox-change`),name:`checkbox-group`,children:(0,l.jsx)(i,{children:`Option 3`})})})]}),g=e=>(0,l.jsxs)(`span`,{className:`checkbox`,children:[(0,l.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            `}}),(0,l.jsx)(o,{...e,className:`custom`,"aria-label":`custom color checkbox example`,id:`checkbox-30`,children:(0,l.jsx)(i,{children:`Custom style`})})]}),_=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(()=>{let[t,n]=(0,c.useState)(!0),[r,a]=(0,c.useState)(!1),s=(0,c.useRef)(0),u=(e,{checked:t})=>{s.current<4?n(t):a(!0),s.current++};return(0,l.jsx)(o,{...e,className:`custom`,onChange:u,checked:t,"aria-label":`custom color checkbox example`,id:`checkbox-30`,disabled:r,children:r?(0,l.jsx)(i,{children:`Disabled`}):(0,l.jsxs)(i,{children:[`Gets disabled after `,5-s.current,` clicks`]})})},{})}),v=[`DefaultCheckboxButton`,`SelectedCheckboxButton`,`DisabledCheckboxButton`,`GroupedCheckboxButtons`,`StyledCheckboxButton`,`ControlValueFromOutside`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCheckbox {...args} value="123" id="checkbox-11" onChange={(e, props) => action("onChange")(e, props)} onFocus={(e, props) => action("onFocus")(e, props)} onKeyDown={(e, props) => action("onKeyDown")(e, props)}>
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox {...args} value="123" id="checkbox-12" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCheckbox {...args} checked value="123" id="checkbox-21">
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox {...args} checked value="123" id="checkbox-22" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCheckbox {...args} disabled value="123" id="checkbox-31">
                <EbayLabel>Default disabled</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox {...args} disabled value="123" id="checkbox-32" size="large">
                <EbayLabel>Large disabled</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <fieldset>
        <legend>Choose an Option</legend>
        <span className="field">
            <EbayCheckbox {...args} id="group-checkbox-1" value="1" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 1</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox {...args} id="group-checkbox-2" value="2" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 2</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox {...args} id="group-checkbox-3" value="3" onChange={action("checkbox-change")} name="checkbox-group">
                <EbayLabel>Option 3</EbayLabel>
            </EbayCheckbox>
        </span>
    </fieldset>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <span className="checkbox">
        <style dangerouslySetInnerHTML={{
    __html: \`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            \`
  }} />
        <EbayCheckbox {...args} className="custom" aria-label="custom color checkbox example" id="checkbox-30">
            <EbayLabel>Custom style</EbayLabel>
        </EbayCheckbox>
    </span>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const Controller = () => {
    const [isChecked, setChecked] = useState(true);
    const [isDisabled, setDisabled] = useState(false);
    const counter = useRef(0);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>, {
      checked
    }: {
      value: string | number;
      checked: boolean;
    }) => {
      if (counter.current < 4) {
        setChecked(checked);
      } else {
        setDisabled(true);
      }
      counter.current++;
    };
    return <EbayCheckbox {...args} className="custom" onChange={handleOnChange} checked={isChecked} aria-label="custom color checkbox example" id="checkbox-30" disabled={isDisabled}>
                {isDisabled ? <EbayLabel>Disabled</EbayLabel> : <EbayLabel>Gets disabled after {5 - counter.current} clicks</EbayLabel>}
            </EbayCheckbox>;
  };
  return <>
            <Controller />
        </>;
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as ControlValueFromOutside,f as DefaultCheckboxButton,m as DisabledCheckboxButton,h as GroupedCheckboxButtons,p as SelectedCheckboxButton,g as StyledCheckboxButton,v as __namedExportsOrder,d as default};