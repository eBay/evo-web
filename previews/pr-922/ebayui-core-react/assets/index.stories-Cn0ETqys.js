import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{n as i,t as a}from"./ebay-button-B_FEPJ7h.js";import{a as o,d as s,i as c,l,s as u,t as d}from"./ebay-textbox-BpT_GSbE.js";import{n as f,t as p}from"./ebay-icon-clear-16-elXIj3Sx.js";import{n as m,t as h}from"./ebay-icon-search-16-rtGos0ae.js";import{i as g,n as _,r as v,t as y}from"./ebay-icon-profile-20-CAwXx2oR.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=t((()=>{b=e(n()),a(),d(),f(),m(),g(),_(),x=r(),{action:S}=__STORYBOOK_MODULE_ACTIONS__,C={title:`form input/ebay-textbox`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayTextbox } from "@ebay/ui-core-react/ebay-textbox";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/floating-label";
import "@ebay/skin/textbox";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/floating-label.css";
@import "@ebay/skin/textbox.css";
@import "@ebay/skin/icon-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayTextbox value="Search for anything" />
\`\`\``}}},argTypes:{fluid:{description:`Takes the full width of the container`,control:`boolean`},multiline:{description:`Renders a multi-line textbox if true`,control:`boolean`},opaqueLabel:{description:`Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap`,control:`boolean`},invalid:{description:`Indicates a field-level error with red border if true`,control:`boolean`},type:{description:"Default: `text`, can be `password` if needed",options:[`text`,`password`],control:{type:`select`}},value:{description:`Indicates the value of the input element, required for a controlled component.`,control:`text`},defaultValue:{description:`Indicates the default input element value. Use when the component is not controlled.`,control:`text`},inputSize:{description:"`default` (default), `large`",options:[`default`,`large`],control:{type:`select`}},floatingLabel:{description:`Indicates that the input is a floating label type and renders it as a label`,control:`text`},floatingLabelStatic:{description:`Forces floating label to static/raised position`,control:`boolean`},onChange:{description:`Triggered when focus leaves and value is changed.`,action:`onChange`,table:{category:`Events`,defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onInputChange:{description:`Triggered when the value of the input is changed.`,action:`onInputChange`,table:{category:`Events`,defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onFocus:{description:`Called when input gets focus`,action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent, { value: string })`"}}},onBlur:{description:`Called when input loses focus`,action:`onBlur`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent, { value: string })`"}}},onKeyPress:{description:`Called on key press`,action:`onKeyPress`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onKeyUp:{description:`Called on key up`,action:`onKeyUp`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onKeyDown:{description:`Called on key down`,action:`onKeyDown`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onInvalid:{description:`Triggered when value is invalid`,action:`onInvalid`,table:{category:`Events`,defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onFloatingLabelInit:{description:`Triggered when floating label is initialized`,action:`onFloatingLabelInit`,table:{category:`Events`,defaultValue:{summary:"`()`"}}},onButtonClick:{description:"Triggers when clicking on postfix-icon-button. Requires `buttonAriaLabel` to be present in order to attach correctly",action:`onButtonClick`,table:{category:`Events`,defaultValue:{summary:"`(MouseEvent, { value: string })`"}}},name:{description:`Name of the icon to show`,control:`text`},buttonAriaLabel:{description:`Aria-label for postfix icon/button. Required in order to render postfix button`,control:`text`}}},w={render:e=>(0,x.jsx)(c,{...e,defaultValue:`EbayTextbox`}),name:`Default textbox`},T={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(()=>{let t=b.useRef(null),[n,r]=(0,b.useState)(``),a=(e,t)=>{S(`onInputChange`)(e,t),r(t.value)},o=(e,t)=>{S(`onButtonClick`)(e,t),r(``)};return(0,x.jsxs)(`form`,{ref:t,children:[(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,value:n,onChange:(e,t)=>S(`onChange`)(e,t),onInputChange:(e,t)=>a(e,t),onFocus:(e,t)=>S(`onFocus`)(e,t),onBlur:(e,t)=>S(`onBlur`)(e,t),onKeyPress:(e,t)=>S(`onKeyPress`)(e,t),onKeyUp:(e,t)=>S(`onKeyUp`)(e,t),onKeyDown:(e,t)=>S(`onKeyDown`)(e,t),onInvalid:(e,t)=>S(`onInvalid`)(e,t),onButtonClick:(e,t)=>o(e,t),required:!0,children:(0,x.jsx)(s,{icon:(0,x.jsx)(p,{}),buttonAriaLabel:`Clear`,style:{opacity:n.length?`1`:`0`}})})}),(0,x.jsx)(`p`,{children:(0,x.jsx)(i,{onClick:e=>{e.preventDefault(),t.current?.reportValidity()},children:`Check value presence`})})]})},{})}),name:`Testing callbacks`},E={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,disabled:!0})}),name:`Disabled textbox`},D={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,placeholder:`placeholder text`})}),name:`Placeholder textbox`},O={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,invalid:!0})}),name:`Invalid textbox`},k={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,fluid:!0})}),name:`Fluid textbox`},A={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,type:`password`})}),name:`Password textbox`},j={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,multiline:!0,defaultValue:`some default value
next line`})}),name:`Multiline textbox`},M={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,multiline:!0,invalid:!0,defaultValue:`some default value`})}),name:`Multiline invalid textbox`},N={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,autoFocus:!0,placeholder:`Should focus here`})}),name:`Autofocused textbox`},P={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,placeholder:`placeholder text`,inputSize:`large`})}),name:`Large textbox`},F={render:e=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,placeholder:`email`,children:(0,x.jsx)(u,{icon:(0,x.jsx)(v,{})})})}),(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,placeholder:`username`,children:(0,x.jsx)(s,{icon:(0,x.jsx)(y,{})})})}),(0,x.jsx)(`p`,{children:(0,x.jsxs)(c,{...e,placeholder:`search`,onButtonClick:S(`Clear!`),children:[(0,x.jsx)(u,{icon:(0,x.jsx)(h,{})}),(0,x.jsx)(s,{icon:(0,x.jsx)(p,{}),buttonAriaLabel:`Clear`})]})})]}),name:`With icon`},I={render:e=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,placeholder:`0.00`,children:(0,x.jsx)(o,{id:`prefix`,children:`$`})})}),(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,placeholder:`0`,children:(0,x.jsx)(l,{id:`postfix`,children:`in.`})})})]}),name:`With Pre/Post fix text`},L={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(()=>{let[t,n]=(0,b.useState)(``),r=(e,t)=>{n(t.value.substring(0,10))};return(0,x.jsx)(c,{...e,onInputChange:r,value:t,placeholder:`Max 10 chars`})},{})}),name:`Control value from outside`},R={render:e=>{let t=b.createRef();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c,{...e,forwardedRef:t})})},name:`Ref forwarding`},z={render:e=>(0,x.jsx)(c,{...e,floatingLabel:`Floating label`,onChange:S(`onChange`),onInputChange:S(`onInputChange`),onFloatingLabelInit:()=>S(`onFloatingLabelInit`)()}),name:`Floating label`},B={render:e=>(0,x.jsx)(c,{...e,fluid:!0,floatingLabel:`Floating label`,onChange:S(`onChange`),onInputChange:S(`onInputChange`),onFloatingLabelInit:()=>S(`onFloatingLabelInit`)()}),name:`Floating label fluid`},V={render:e=>(0,x.jsx)(c,{...e,type:`date`,floatingLabel:`Floating label`,onChange:S(`onChange`),onInputChange:S(`onInputChange`),onFloatingLabelInit:()=>S(`onFloatingLabelInit`)()}),name:`Floating label type date`},H={render:e=>(0,x.jsx)(c,{...e,onChange:S(`textbox-changed`),floatingLabel:`Floating label`,defaultValue:`Default value`}),name:`Floating label with value`},U={render:e=>(0,x.jsx)(c,{...e,invalid:!0,onChange:S(`textbox-changed`),floatingLabel:`Invalid Floating label`}),name:`Floating label invalid`},W={render:e=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,floatingLabel:`Regular field`})}),(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,floatingLabel:`Autofocused field`,autoFocus:!0,onFocus:S(`onFocus`)})})]}),name:`Floating label with autofocus`},G={render:e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(()=>{let[t,n]=(0,b.useState)(``),r=(e,{value:t})=>{n(t.toLowerCase())};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`p`,{children:(0,x.jsx)(c,{...e,floatingLabel:`Will convert to lowercase`,placeholder:`Enter some UPPERCASE`,onChange:r,value:t,size:30})}),(0,x.jsx)(`p`,{children:(0,x.jsx)(i,{onClick:()=>{n(`changed text`)},children:`Change text`})}),(0,x.jsx)(`p`,{children:(0,x.jsx)(i,{onClick:()=>{n(``)},children:`Clear`})})]})},{})}),name:`Floating label with placeholder, controlled`},K={render:e=>(0,x.jsx)(c,{...e,onChange:S(`textbox-changed`),floatingLabel:`Floating label`,multiline:!0}),name:`Floating label with multiline`},q={render:e=>(0,x.jsx)(c,{...e,onChange:S(`textbox-changed`),floatingLabel:`Floating label`,multiline:!0,opaqueLabel:!0}),name:`Floating label with multiline and opaque label`},J=[`DefaultTextbox`,`TestingCallbacks`,`DisabledTextbox`,`PlaceholderTextbox`,`InvalidTextbox`,`FluidTextbox`,`PasswordTextbox`,`MultilineTextbox`,`MultilineInvalidTextbox`,`AutofocusedTextbox`,`LargeTextbox`,`WithIcon`,`WithPrePostfixText`,`ControlValueFromOutside`,`RefForwarding`,`FloatingLabel`,`FloatingLabelFluid`,`FloatingLabelTypeDate`,`FloatingLabelWithValue`,`FloatingLabelInvalid`,`FloatingLabelWithAutofocus`,`FloatingLabelWithPlaceholderControlled`,`FloatingLabelWithMultiline`,`FloatingLabelWithMultilineAndOpaqueLabel`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} defaultValue="EbayTextbox" />,
  name: "Default textbox"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const TestComponent: FC = () => {
      const ref = React.useRef(null);
      const [value, setValue] = useState("");
      const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>, props: {
        value: string;
      }) => {
        action("onInputChange")(e, props);
        setValue(props.value);
      };
      const handleButtonClick = (e: KeyboardEvent & MouseEvent<HTMLTextAreaElement & HTMLInputElement>, props: {
        value: string;
      }) => {
        action("onButtonClick")(e, props);
        setValue("");
      };
      return <form ref={ref}>
                    <p>
                        <EbayTextbox {...args} value={value} onChange={(e, props) => action("onChange")(e, props)} onInputChange={(e, props) => handleInputChange(e, props)} onFocus={(e, props) => action("onFocus")(e, props)} onBlur={(e, props) => action("onBlur")(e, props)} onKeyPress={(e, props) => action("onKeyPress")(e, props)} onKeyUp={(e, props) => action("onKeyUp")(e, props)} onKeyDown={(e, props) => action("onKeyDown")(e, props)} onInvalid={(e, props) => action("onInvalid")(e, props)} onButtonClick={(e, props) => handleButtonClick(e, props)} required>
                            <EbayTextboxPostfixIcon icon={<EbayIconClear16 />} buttonAriaLabel="Clear" style={{
              opacity: value.length ? "1" : "0"
            }} />
                        </EbayTextbox>
                    </p>
                    <p>
                        <EbayButton onClick={e => {
            e.preventDefault();
            ref.current?.reportValidity();
          }}>
                            Check value presence
                        </EbayButton>
                    </p>
                </form>;
    };
    return <>
                <TestComponent />
            </>;
  },
  name: "Testing callbacks"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} disabled />
        </>,
  name: "Disabled textbox"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} placeholder="placeholder text" />
        </>,
  name: "Placeholder textbox"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} invalid />
        </>,
  name: "Invalid textbox"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} fluid />
        </>,
  name: "Fluid textbox"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} type="password" />
        </>,
  name: "Password textbox"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} multiline defaultValue={"some default value\\nnext line"} />
        </>,
  name: "Multiline textbox"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} multiline invalid defaultValue="some default value" />
        </>,
  name: "Multiline invalid textbox"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} autoFocus placeholder="Should focus here" />
        </>,
  name: "Autofocused textbox"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} placeholder="placeholder text" inputSize="large" />
        </>,
  name: "Large textbox"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <p>
                <EbayTextbox {...args} placeholder="email">
                    <EbayTextboxPrefixIcon icon={<EbayIconMail16 />} />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox {...args} placeholder="username">
                    <EbayTextboxPostfixIcon icon={<EbayIconProfile20 />} />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox {...args} placeholder="search" onButtonClick={action("Clear!")}>
                    <EbayTextboxPrefixIcon icon={<EbayIconSearch16 />} />
                    <EbayTextboxPostfixIcon icon={<EbayIconClear16 />} buttonAriaLabel="Clear" />
                </EbayTextbox>
            </p>
        </div>,
  name: "With icon"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <div>
            <p>
                <EbayTextbox {...args} placeholder="0.00">
                    <EbayTextboxPrefixText id="prefix">$</EbayTextboxPrefixText>
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox {...args} placeholder="0">
                    <EbayTextboxPostfixText id="postfix">in.</EbayTextboxPostfixText>
                </EbayTextbox>
            </p>
        </div>,
  name: "With Pre/Post fix text"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Component = () => {
      const [value, setValue] = useState("");
      const handleOnChange = (e, props) => {
        setValue(props.value.substring(0, 10));
      };
      return <EbayTextbox {...args} onInputChange={handleOnChange} value={value} placeholder="Max 10 chars" />;
    };
    return <>
                <Component />
            </>;
  },
  name: "Control value from outside"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = React.createRef<HTMLInputElement>();
    return <>
                <EbayTextbox {...args} forwardedRef={ref} />
            </>;
  },
  name: "Ref forwarding"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} fluid floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label fluid"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} type="date" floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label type date"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" defaultValue="Default value" />,
  name: "Floating label with value"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} invalid onChange={action("textbox-changed")} floatingLabel="Invalid Floating label" />,
  name: "Floating label invalid"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayTextbox {...args} floatingLabel="Regular field" />
            </p>
            <p>
                <EbayTextbox {...args} floatingLabel="Autofocused field" autoFocus onFocus={action("onFocus")} />
            </p>
        </>,
  name: "Floating label with autofocus"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Component = () => {
      const [value, setValue] = useState("");
      const handleOnChange = (e, {
        value: newValue
      }) => {
        setValue(newValue.toLowerCase());
      };
      return <>
                    <p>
                        <EbayTextbox {...args} floatingLabel="Will convert to lowercase" placeholder="Enter some UPPERCASE" onChange={handleOnChange} value={value} size={30} />
                    </p>
                    <p>
                        <EbayButton onClick={() => {
            setValue("changed text");
          }}>
                            Change text
                        </EbayButton>
                    </p>
                    <p>
                        <EbayButton onClick={() => {
            setValue("");
          }}>
                            Clear
                        </EbayButton>
                    </p>
                </>;
    };
    return <>
                <Component />
            </>;
  },
  name: "Floating label with placeholder, controlled"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" multiline />,
  name: "Floating label with multiline"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" multiline opaqueLabel />,
  name: "Floating label with multiline and opaque label"
}`,...q.parameters?.docs?.source}}}})))()}Y();export{N as AutofocusedTextbox,L as ControlValueFromOutside,w as DefaultTextbox,E as DisabledTextbox,z as FloatingLabel,B as FloatingLabelFluid,U as FloatingLabelInvalid,V as FloatingLabelTypeDate,W as FloatingLabelWithAutofocus,K as FloatingLabelWithMultiline,q as FloatingLabelWithMultilineAndOpaqueLabel,G as FloatingLabelWithPlaceholderControlled,H as FloatingLabelWithValue,k as FluidTextbox,O as InvalidTextbox,P as LargeTextbox,M as MultilineInvalidTextbox,j as MultilineTextbox,A as PasswordTextbox,D as PlaceholderTextbox,R as RefForwarding,T as TestingCallbacks,F as WithIcon,I as WithPrePostfixText,J as __namedExportsOrder,C as default};