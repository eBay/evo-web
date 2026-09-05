var f=Object.defineProperty;var a=(n,r)=>f(n,"name",{value:r,configurable:!0});import{R as e,r as C}from"./iframe-4EwwH2XN.js";import{E as G}from"./button-D8p2Adwq.js";import{E as l,a as t}from"./ebay-select-Btu7Cx13.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DXRWgmLj.js";import"./ebay-icon-spinner-30-BDMVQOkD.js";import"./ebay-icon-chevron-down-12-DlNsH3Cc.js";import"./utils-Bnl589Wh.js";import"./hooks-BYpAJnSN.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,P={title:"form input/ebay-select",tags:["autodocs"],parameters:{docs:{description:{component:`This component is used to create a native \`<select>\` form element with default browser styling.

## Import

\`\`\`jsx harmony
import { EbaySelect, EbaySelectOption } from "@ebay/ui-core-react/ebay-select";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/select";
import "@ebay/skin/icon";
import "@ebay/skin/floating-label";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/select.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/floating-label.css";
\`\`\``}}},argTypes:{name:{description:"passed to the `<select>` element",control:"text"},value:{description:"Set the value of the `<select>` element. Use this for **controlled component**.",control:"text"},defaultValue:{description:"Set the initial value for `<select>` element, only for **uncontrolled component**.",control:"text"},disabled:{description:"passed to the `<select>` element, default is `false`",options:["<select>","false"],control:{type:"select"}},className:{description:"passed to the wrapper-element of the `<select>` element",control:"text"},borderless:{description:"whether select is borderless, default is `false`",control:"boolean"},fluid:{description:"whether select takes full width of its container, default is `false`",control:"boolean"},floatingLabel:{description:"Indicates that the select is a floating label type and renders it as a label",control:"text"},inputSize:{description:"`default` (default), `large`",options:["default","large"],control:{type:"select"}},invalid:{description:"Indicates a field-level error with red border if true",control:"boolean"},onChange:{description:"Called on option change with arguments: `(ChangeEvent, { index: number, selected: string[] }`",action:"onChange",table:{category:"Events"}}}},i=a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",onChange:a((r,c)=>o("onChange")(r,c),"onChange")},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"Basic"),p={render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",value:"3","aria-invalid":"true",onChange:o("select-change"),"aria-label":"Please select a option"},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"render"),name:"Invalid select"},s={render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",onChange:o("select-change")},e.createElement(t,{value:"pre"},"Option PRE"),e.createElement(t,{optgroup:"Group 1",value:"1"},"Option 1[Group 1]"),e.createElement(t,{optgroup:"Group 1",value:"2"},"Option 2[Group 1]"),e.createElement(t,{optgroup:"Group 1",value:"3"},"Option 3[Group 1]"),e.createElement(t,{value:"mid"},"Option MID"),e.createElement(t,{optgroup:"Group 2",value:"4"},"Option 4[Group 2]"),e.createElement(t,{optgroup:"Group 2",value:"5"},"Option 5[Group 2]"),e.createElement(t,{optgroup:"Group 2",value:"6"},"Option 6[Group 2]"),e.createElement(t,{optgroup:"Group 3",value:"7"},"Option 7[Group 3]"),e.createElement(t,{optgroup:"Group 3",value:"8"},"Option 8[Group 3]"),e.createElement(t,{optgroup:"Group 3",value:"9"},"Option 9[Group 3]"),e.createElement(t,{value:"post"},"Option POST"))),"render"),name:"Grouped options"},u={render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,borderless:!0,defaultValue:"4",name:"formSelect",onChange:o("select-change")},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"render"),name:"Borderless select"},m={args:{fluid:!0},render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",onChange:o("select-change")},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"render"),name:"Fluid select"},E={render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,className:"customclass",disabled:!0,name:"formSelect"},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"))),"render"),name:"Disabled select"},d={render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",defaultValue:"3",onChange:o("select-change")},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"render"),name:"Uncontrolled component with defaultValue"},S={render:a(n=>{const r=a(()=>{const[c,y]=C.useState("UK"),v=a((U,{selected:h})=>{y(h[0])},"handleChange");return e.createElement("div",{style:{width:"500px"}},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(l,{...n,name:"selectCountry",value:c,onChange:v},e.createElement(t,{value:"DE"},"DE"),e.createElement(t,{value:"US"},"US"),e.createElement(t,{value:"UK"},"UK"),e.createElement(t,{value:"AU"},"AU")),e.createElement("div",{style:{margin:"0 2rem"}},"Current selected: ",e.createElement("strong",null,c)),e.createElement(G,{onClick:a(()=>y("US"),"onClick")},"Set selected to US")))},"TestControlledComponent");return e.createElement(e.Fragment,null,e.createElement(r,null))},"render"),name:"Controlled component"},O={render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",onChange:o("select-change"),floatingLabel:"Label"},e.createElement(t,{value:""},"Choose an option"),e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"render"),name:"Floating label"},b={render:a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",value:"3","aria-invalid":"true",onChange:o("select-change"),floatingLabel:"Invalid label","aria-label":"Please select a option"},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"render"),name:"Invalid floating label select"},g=a(n=>e.createElement(e.Fragment,null,e.createElement(l,{...n,name:"formSelect",onChange:o("select-change"),floatingLabel:"Label",inputSize:"large"},e.createElement(t,{value:""},"Choose an option"),e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3"))),"LargeSelect");i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <EbaySelect {...args} name="formSelect" onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" value="3" aria-invalid="true" onChange={action("select-change")} aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Invalid select"
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="pre">Option PRE</EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="1">
                    Option 1[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="2">
                    Option 2[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="3">
                    Option 3[Group 1]
                </EbaySelectOption>
                <EbaySelectOption value="mid">Option MID</EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="4">
                    Option 4[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="5">
                    Option 5[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="6">
                    Option 6[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="7">
                    Option 7[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="8">
                    Option 8[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="9">
                    Option 9[Group 3]
                </EbaySelectOption>
                <EbaySelectOption value="post">Option POST</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Grouped options"
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} borderless defaultValue="4" name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Borderless select"
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fluid: true
  },
  render: args => <>
            <EbaySelect {...args} name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Fluid select"
}`,...m.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} className="customclass" disabled name="formSelect">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Disabled select"
}`,...E.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" defaultValue="3" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Uncontrolled component with defaultValue"
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const TestControlledComponent = () => {
      const [selectedValue, setSelectedValue] = useState("UK");
      const handleChange = (e: ChangeEvent<HTMLSelectElement>, {
        selected
      }: {
        index: number;
        selected: string[];
      }) => {
        setSelectedValue(selected[0]);
      };
      return <div style={{
        width: "500px"
      }}>
                    <div style={{
          display: "flex",
          alignItems: "center"
        }}>
                        <EbaySelect {...args} name="selectCountry" value={selectedValue} onChange={handleChange}>
                            <EbaySelectOption value="DE">DE</EbaySelectOption>
                            <EbaySelectOption value="US">US</EbaySelectOption>
                            <EbaySelectOption value="UK">UK</EbaySelectOption>
                            <EbaySelectOption value="AU">AU</EbaySelectOption>
                        </EbaySelect>

                        <div style={{
            margin: "0 2rem"
          }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>
                        <EbayButton onClick={() => setSelectedValue("US")}>Set selected to US</EbayButton>
                    </div>
                </div>;
    };
    return <>
                <TestControlledComponent />
            </>;
  },
  name: "Controlled component"
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" onChange={action("select-change")} floatingLabel="Label">
                <EbaySelectOption value="">Choose an option</EbaySelectOption>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Floating label"
}`,...O.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" value="3" aria-invalid="true" onChange={action("select-change")} floatingLabel="Invalid label" aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Invalid floating label select"
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbaySelect {...args} name="formSelect" onChange={action("select-change")} floatingLabel="Label" inputSize="large">
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...g.parameters?.docs?.source}}};const _=["Basic","InvalidSelect","GroupedOptions","BorderlessSelect","FluidSelect","DisabledSelect","UncontrolledComponentWithDefaultValue","ControlledComponent","FloatingLabel","InvalidFloatingLabelSelect","LargeSelect"];export{i as Basic,u as BorderlessSelect,S as ControlledComponent,E as DisabledSelect,O as FloatingLabel,m as FluidSelect,s as GroupedOptions,b as InvalidFloatingLabelSelect,p as InvalidSelect,g as LargeSelect,d as UncontrolledComponentWithDefaultValue,_ as __namedExportsOrder,P as default};
