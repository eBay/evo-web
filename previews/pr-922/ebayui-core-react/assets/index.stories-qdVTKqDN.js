import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{n as i,t as a}from"./ebay-button-B_FEPJ7h.js";import{i as o,n as s,t as c}from"./ebay-select-7-_UnZLa.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{l=e(n()),a(),c(),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`form input/ebay-select`,tags:[`autodocs`],parameters:{docs:{description:{component:`This component is used to create a native \`<select>\` form element with default browser styling.

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
\`\`\``}}},argTypes:{name:{description:"passed to the `<select>` element",control:`text`},value:{description:"Set the value of the `<select>` element. Use this for **controlled component**.",control:`text`},defaultValue:{description:"Set the initial value for `<select>` element, only for **uncontrolled component**.",control:`text`},disabled:{description:"passed to the `<select>` element, default is `false`",options:[`<select>`,`false`],control:{type:`select`}},className:{description:"passed to the wrapper-element of the `<select>` element",control:`text`},borderless:{description:"whether select is borderless, default is `false`",control:`boolean`},fluid:{description:"whether select takes full width of its container, default is `false`",control:`boolean`},floatingLabel:{description:`Indicates that the select is a floating label type and renders it as a label`,control:`text`},inputSize:{description:"`default` (default), `large`",options:[`default`,`large`],control:{type:`select`}},invalid:{description:`Indicates a field-level error with red border if true`,control:`boolean`},onChange:{description:"Called on option change with arguments: `(ChangeEvent, { index: number, selected: string[] }`",action:`onChange`,table:{category:`Events`}}}},p=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,onChange:(e,t)=>d(`onChange`)(e,t),children:[(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),m={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,value:`3`,"aria-invalid":`true`,onChange:d(`select-change`),"aria-label":`Please select a option`,children:[(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),name:`Invalid select`},h={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,onChange:d(`select-change`),children:[(0,u.jsx)(o,{value:`pre`,children:`Option PRE`}),(0,u.jsx)(o,{optgroup:`Group 1`,value:`1`,children:`Option 1[Group 1]`}),(0,u.jsx)(o,{optgroup:`Group 1`,value:`2`,children:`Option 2[Group 1]`}),(0,u.jsx)(o,{optgroup:`Group 1`,value:`3`,children:`Option 3[Group 1]`}),(0,u.jsx)(o,{value:`mid`,children:`Option MID`}),(0,u.jsx)(o,{optgroup:`Group 2`,value:`4`,children:`Option 4[Group 2]`}),(0,u.jsx)(o,{optgroup:`Group 2`,value:`5`,children:`Option 5[Group 2]`}),(0,u.jsx)(o,{optgroup:`Group 2`,value:`6`,children:`Option 6[Group 2]`}),(0,u.jsx)(o,{optgroup:`Group 3`,value:`7`,children:`Option 7[Group 3]`}),(0,u.jsx)(o,{optgroup:`Group 3`,value:`8`,children:`Option 8[Group 3]`}),(0,u.jsx)(o,{optgroup:`Group 3`,value:`9`,children:`Option 9[Group 3]`}),(0,u.jsx)(o,{value:`post`,children:`Option POST`})]})}),name:`Grouped options`},g={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,borderless:!0,defaultValue:`4`,name:`formSelect`,onChange:d(`select-change`),children:[(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),name:`Borderless select`},_={args:{fluid:!0},render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,onChange:d(`select-change`),children:[(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),name:`Fluid select`},v={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,className:`customclass`,disabled:!0,name:`formSelect`,children:[(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`})]})}),name:`Disabled select`},y={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,defaultValue:`3`,onChange:d(`select-change`),children:[(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),name:`Uncontrolled component with defaultValue`},b={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(()=>{let[t,n]=(0,l.useState)(`UK`),r=(e,{selected:t})=>{n(t[0])};return(0,u.jsx)(`div`,{style:{width:`500px`},children:(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,u.jsxs)(s,{...e,name:`selectCountry`,value:t,onChange:r,children:[(0,u.jsx)(o,{value:`DE`,children:`DE`}),(0,u.jsx)(o,{value:`US`,children:`US`}),(0,u.jsx)(o,{value:`UK`,children:`UK`}),(0,u.jsx)(o,{value:`AU`,children:`AU`})]}),(0,u.jsxs)(`div`,{style:{margin:`0 2rem`},children:[`Current selected: `,(0,u.jsx)(`strong`,{children:t})]}),(0,u.jsx)(i,{onClick:()=>n(`US`),children:`Set selected to US`})]})})},{})}),name:`Controlled component`},x={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,onChange:d(`select-change`),floatingLabel:`Label`,children:[(0,u.jsx)(o,{value:``,children:`Choose an option`}),(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),name:`Floating label`},S={render:e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,value:`3`,"aria-invalid":`true`,onChange:d(`select-change`),floatingLabel:`Invalid label`,"aria-label":`Please select a option`,children:[(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),name:`Invalid floating label select`},C=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s,{...e,name:`formSelect`,onChange:d(`select-change`),floatingLabel:`Label`,inputSize:`large`,children:[(0,u.jsx)(o,{value:``,children:`Choose an option`}),(0,u.jsx)(o,{value:`1`,children:`Option 1`}),(0,u.jsx)(o,{value:`2`,children:`Option 2`}),(0,u.jsx)(o,{value:`3`,children:`Option 3`})]})}),w=[`Basic`,`InvalidSelect`,`GroupedOptions`,`BorderlessSelect`,`FluidSelect`,`DisabledSelect`,`UncontrolledComponentWithDefaultValue`,`ControlledComponent`,`FloatingLabel`,`InvalidFloatingLabelSelect`,`LargeSelect`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbaySelect {...args} name="formSelect" onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" value="3" aria-invalid="true" onChange={action("select-change")} aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Invalid select"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} borderless defaultValue="4" name="formSelect" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Borderless select"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} className="customclass" disabled name="formSelect">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Disabled select"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" defaultValue="3" onChange={action("select-change")}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Uncontrolled component with defaultValue"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" onChange={action("select-change")} floatingLabel="Label">
                <EbaySelectOption value="">Choose an option</EbaySelectOption>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Floating label"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbaySelect {...args} name="formSelect" value="3" aria-invalid="true" onChange={action("select-change")} floatingLabel="Invalid label" aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: "Invalid floating label select"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <>
        <EbaySelect {...args} name="formSelect" onChange={action("select-change")} floatingLabel="Label" inputSize="large">
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...C.parameters?.docs?.source}}}})))()}T();export{p as Basic,g as BorderlessSelect,b as ControlledComponent,v as DisabledSelect,x as FloatingLabel,_ as FluidSelect,h as GroupedOptions,S as InvalidFloatingLabelSelect,m as InvalidSelect,C as LargeSelect,y as UncontrolledComponentWithDefaultValue,w as __namedExportsOrder,f as default};