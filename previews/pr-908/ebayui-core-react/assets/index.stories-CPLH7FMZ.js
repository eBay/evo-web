var C=Object.defineProperty;var n=(a,t)=>C(a,"name",{value:t,configurable:!0});import{R as e,r as p}from"./iframe-CVwxB9bq.js";import{E as o}from"./description-cHYKa6Cs.js";import{E as c}from"./checkbox-BaHfDo-u.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-HTvyuM3F.js";import"./ebay-icon-checkbox-unchecked-18-C3CGYVIs.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,N={component:c,title:"form input/ebay-checkbox",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{size:{description:"Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon)",options:["regular","large"],control:{type:"select"}},disabled:{control:"boolean"},checked:{description:"indicates the checked value of the input element, required for a controlled component.",control:"boolean"},defaultChecked:{description:"indicates the default checked input element value. Use when the component is not controlled.",control:"boolean"},onChange:{description:"Callback fired on change",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(event: ChangeEvent, { value: string, checked: Boolean })`"}}},onFocus:{description:"Callback fired when button is focused",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(event: FocusEvent, { value: string, checked: Boolean })`"}}},onKeyDown:{description:"Callback fired when key is pressed",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(event: KeyboardEvent, { value: string, checked: Boolean })`"}}}}},s=n(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(c,{...a,value:"123",id:"checkbox-11",onChange:n((t,l)=>r("onChange")(t,l),"onChange"),onFocus:n((t,l)=>r("onFocus")(t,l),"onFocus"),onKeyDown:n((t,l)=>r("onKeyDown")(t,l),"onKeyDown")},e.createElement(o,null,"Default"))),e.createElement("p",null,e.createElement(c,{...a,value:"123",id:"checkbox-12",size:"large"},e.createElement(o,null,"Large")))),"DefaultCheckboxButton"),b=n(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(c,{...a,checked:!0,value:"123",id:"checkbox-21"},e.createElement(o,null,"Default"))),e.createElement("p",null,e.createElement(c,{...a,checked:!0,value:"123",id:"checkbox-22",size:"large"},e.createElement(o,null,"Large")))),"SelectedCheckboxButton"),i=n(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(c,{...a,disabled:!0,value:"123",id:"checkbox-31"},e.createElement(o,null,"Default disabled"))),e.createElement("p",null,e.createElement(c,{...a,disabled:!0,value:"123",id:"checkbox-32",size:"large"},e.createElement(o,null,"Large disabled")))),"DisabledCheckboxButton"),u=n(a=>e.createElement("fieldset",null,e.createElement("legend",null,"Choose an Option"),e.createElement("span",{className:"field"},e.createElement(c,{...a,id:"group-checkbox-1",value:"1",onChange:r("checkbox-change"),name:"checkbox-group"},e.createElement(o,null,"Option 1"))),e.createElement("span",{className:"field"},e.createElement(c,{...a,id:"group-checkbox-2",value:"2",onChange:r("checkbox-change"),name:"checkbox-group"},e.createElement(o,null,"Option 2"))),e.createElement("span",{className:"field"},e.createElement(c,{...a,id:"group-checkbox-3",value:"3",onChange:r("checkbox-change"),name:"checkbox-group"},e.createElement(o,null,"Option 3")))),"GroupedCheckboxButtons"),d=n(a=>e.createElement("span",{className:"checkbox"},e.createElement("style",{dangerouslySetInnerHTML:{__html:`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            `}}),e.createElement(c,{...a,className:"custom","aria-label":"custom color checkbox example",id:"checkbox-30"},e.createElement(o,null,"Custom style"))),"StyledCheckboxButton"),m=n(a=>{const t=n(()=>{const[l,E]=p.useState(!0),[k,g]=p.useState(!1),h=p.useRef(0),x=n((f,{checked:y})=>{h.current<4?E(y):g(!0),h.current++},"handleOnChange");return e.createElement(c,{...a,className:"custom",onChange:x,checked:l,"aria-label":"custom color checkbox example",id:"checkbox-30",disabled:k},k?e.createElement(o,null,"Disabled"):e.createElement(o,null,"Gets disabled after ",5-h.current," clicks"))},"Controller");return e.createElement(e.Fragment,null,e.createElement(t,null))},"ControlValueFromOutside");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...s.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...b.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <fieldset>
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
    </fieldset>`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <span className="checkbox">
        <style dangerouslySetInnerHTML={{
    __html: \`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            \`
  }} />
        <EbayCheckbox {...args} className="custom" aria-label="custom color checkbox example" id="checkbox-30">
            <EbayLabel>Custom style</EbayLabel>
        </EbayCheckbox>
    </span>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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
}`,...m.parameters?.docs?.source}}};const F=["DefaultCheckboxButton","SelectedCheckboxButton","DisabledCheckboxButton","GroupedCheckboxButtons","StyledCheckboxButton","ControlValueFromOutside"];export{m as ControlValueFromOutside,s as DefaultCheckboxButton,i as DisabledCheckboxButton,u as GroupedCheckboxButtons,b as SelectedCheckboxButton,d as StyledCheckboxButton,F as __namedExportsOrder,N as default};
