var _=Object.defineProperty;var a=(n,s)=>_(n,"name",{value:s,configurable:!0});import{R as e,r as O}from"./iframe-DEK81gme.js";import{E as R}from"./button-b9GpvPi6.js";import{E as t,b as q,a as W,c as z,d as H}from"./textbox-QGT7WtRC.js";import{E as U}from"./ebay-icon-clear-16-wWpuZM7S.js";import{E as j}from"./ebay-icon-search-16-CVVhFn3D.js";import{E as N,a as $}from"./ebay-icon-profile-20-DeoBwsrV.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-ORK8K31X.js";import"./ebay-icon-spinner-30-Cox1pv5J.js";import"./ebay-icon-chevron-down-12-DBS9dix-.js";import"./utils-_oSgwHXy.js";import"./icon-button-B__jesz1.js";import"./badge-DC9q_P49.js";import"./hooks-OITPvwng.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,ce={title:"form input/ebay-textbox",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{fluid:{description:"Takes the full width of the container",control:"boolean"},multiline:{description:"Renders a multi-line textbox if true",control:"boolean"},opaqueLabel:{description:"Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap",control:"boolean"},invalid:{description:"Indicates a field-level error with red border if true",control:"boolean"},type:{description:"Default: `text`, can be `password` if needed",options:["text","password"],control:{type:"select"}},value:{description:"Indicates the value of the input element, required for a controlled component.",control:"text"},defaultValue:{description:"Indicates the default input element value. Use when the component is not controlled.",control:"text"},inputSize:{description:"`default` (default), `large`",options:["default","large"],control:{type:"select"}},floatingLabel:{description:"Indicates that the input is a floating label type and renders it as a label",control:"text"},floatingLabelStatic:{description:"Forces floating label to static/raised position",control:"boolean"},onChange:{description:"Triggered when focus leaves and value is changed.",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onInputChange:{description:"Triggered when the value of the input is changed.",action:"onInputChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onFocus:{description:"Called when input gets focus",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(FocusEvent, { value: string })`"}}},onBlur:{description:"Called when input loses focus",action:"onBlur",table:{category:"Events",defaultValue:{summary:"`(FocusEvent, { value: string })`"}}},onKeyPress:{description:"Called on key press",action:"onKeyPress",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onKeyUp:{description:"Called on key up",action:"onKeyUp",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onKeyDown:{description:"Called on key down",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent, { value: string })`"}}},onInvalid:{description:"Triggered when value is invalid",action:"onInvalid",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { value: string })`"}}},onFloatingLabelInit:{description:"Triggered when floating label is initialized",action:"onFloatingLabelInit",table:{category:"Events",defaultValue:{summary:"`()`"}}},onButtonClick:{description:"Triggers when clicking on postfix-icon-button. Requires `buttonAriaLabel` to be present in order to attach correctly",action:"onButtonClick",table:{category:"Events",defaultValue:{summary:"`(MouseEvent, { value: string })`"}}},name:{description:"Name of the icon to show",control:"text"},buttonAriaLabel:{description:"Aria-label for postfix icon/button. Required in order to render postfix button",control:"text"}}},p={render:a(n=>e.createElement(t,{...n,defaultValue:"EbayTextbox"}),"render"),name:"Default textbox"},m={render:a(n=>{const s=a(()=>{const c=e.useRef(null),[i,u]=O.useState(""),D=a((r,l)=>{o("onInputChange")(r,l),u(l.value)},"handleInputChange"),d=a((r,l)=>{o("onButtonClick")(r,l),u("")},"handleButtonClick");return e.createElement("form",{ref:c},e.createElement("p",null,e.createElement(t,{...n,value:i,onChange:a((r,l)=>o("onChange")(r,l),"onChange"),onInputChange:a((r,l)=>D(r,l),"onInputChange"),onFocus:a((r,l)=>o("onFocus")(r,l),"onFocus"),onBlur:a((r,l)=>o("onBlur")(r,l),"onBlur"),onKeyPress:a((r,l)=>o("onKeyPress")(r,l),"onKeyPress"),onKeyUp:a((r,l)=>o("onKeyUp")(r,l),"onKeyUp"),onKeyDown:a((r,l)=>o("onKeyDown")(r,l),"onKeyDown"),onInvalid:a((r,l)=>o("onInvalid")(r,l),"onInvalid"),onButtonClick:a((r,l)=>d(r,l),"onButtonClick"),required:!0},e.createElement(W,{icon:e.createElement(U,null),buttonAriaLabel:"Clear",style:{opacity:i.length?"1":"0"}}))),e.createElement("p",null,e.createElement(R,{onClick:a(r=>{r.preventDefault(),c.current?.reportValidity()},"onClick")},"Check value presence")))},"TestComponent");return e.createElement(e.Fragment,null,e.createElement(s,null))},"render"),name:"Testing callbacks"},b={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,disabled:!0})),"render"),name:"Disabled textbox"},g={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,placeholder:"placeholder text"})),"render"),name:"Placeholder textbox"},x={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,invalid:!0})),"render"),name:"Invalid textbox"},h={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,fluid:!0})),"render"),name:"Fluid textbox"},E={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,type:"password"})),"render"),name:"Password textbox"},f={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,multiline:!0,defaultValue:`some default value
next line`})),"render"),name:"Multiline textbox"},y={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,multiline:!0,invalid:!0,defaultValue:"some default value"})),"render"),name:"Multiline invalid textbox"},C={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,autoFocus:!0,placeholder:"Should focus here"})),"render"),name:"Autofocused textbox"},v={render:a(n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,placeholder:"placeholder text",inputSize:"large"})),"render"),name:"Large textbox"},F={render:a(n=>e.createElement("div",null,e.createElement("p",null,e.createElement(t,{...n,placeholder:"email"},e.createElement(q,{icon:e.createElement(N,null)}))),e.createElement("p",null,e.createElement(t,{...n,placeholder:"username"},e.createElement(W,{icon:e.createElement($,null)}))),e.createElement("p",null,e.createElement(t,{...n,placeholder:"search",onButtonClick:o("Clear!")},e.createElement(q,{icon:e.createElement(j,null)}),e.createElement(W,{icon:e.createElement(U,null),buttonAriaLabel:"Clear"})))),"render"),name:"With icon"},T={render:a(n=>e.createElement("div",null,e.createElement("p",null,e.createElement(t,{...n,placeholder:"0.00"},e.createElement(z,{id:"prefix"},"$"))),e.createElement("p",null,e.createElement(t,{...n,placeholder:"0"},e.createElement(H,{id:"postfix"},"in.")))),"render"),name:"With Pre/Post fix text"},I={render:a(n=>{const s=a(()=>{const[c,i]=O.useState(""),u=a((D,d)=>{i(d.value.substring(0,10))},"handleOnChange");return e.createElement(t,{...n,onInputChange:u,value:c,placeholder:"Max 10 chars"})},"Component");return e.createElement(e.Fragment,null,e.createElement(s,null))},"render"),name:"Control value from outside"},L={render:a(n=>{const s=e.createRef();return e.createElement(e.Fragment,null,e.createElement(t,{...n,forwardedRef:s}))},"render"),name:"Ref forwarding"},w={render:a(n=>e.createElement(t,{...n,floatingLabel:"Floating label",onChange:o("onChange"),onInputChange:o("onInputChange"),onFloatingLabelInit:a(()=>o("onFloatingLabelInit")(),"onFloatingLabelInit")}),"render"),name:"Floating label"},S={render:a(n=>e.createElement(t,{...n,fluid:!0,floatingLabel:"Floating label",onChange:o("onChange"),onInputChange:o("onInputChange"),onFloatingLabelInit:a(()=>o("onFloatingLabelInit")(),"onFloatingLabelInit")}),"render"),name:"Floating label fluid"},P={render:a(n=>e.createElement(t,{...n,type:"date",floatingLabel:"Floating label",onChange:o("onChange"),onInputChange:o("onInputChange"),onFloatingLabelInit:a(()=>o("onFloatingLabelInit")(),"onFloatingLabelInit")}),"render"),name:"Floating label type date"},V={render:a(n=>e.createElement(t,{...n,onChange:o("textbox-changed"),floatingLabel:"Floating label",defaultValue:"Default value"}),"render"),name:"Floating label with value"},k={render:a(n=>e.createElement(t,{...n,invalid:!0,onChange:o("textbox-changed"),floatingLabel:"Invalid Floating label"}),"render"),name:"Floating label invalid"},B={render:a(n=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(t,{...n,floatingLabel:"Regular field"})),e.createElement("p",null,e.createElement(t,{...n,floatingLabel:"Autofocused field",autoFocus:!0,onFocus:o("onFocus")}))),"render"),name:"Floating label with autofocus"},K={render:a(n=>{const s=a(()=>{const[c,i]=O.useState(""),u=a((D,{value:d})=>{i(d.toLowerCase())},"handleOnChange");return e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(t,{...n,floatingLabel:"Will convert to lowercase",placeholder:"Enter some UPPERCASE",onChange:u,value:c,size:30})),e.createElement("p",null,e.createElement(R,{onClick:a(()=>{i("changed text")},"onClick")},"Change text")),e.createElement("p",null,e.createElement(R,{onClick:a(()=>{i("")},"onClick")},"Clear")))},"Component");return e.createElement(e.Fragment,null,e.createElement(s,null))},"render"),name:"Floating label with placeholder, controlled"},M={render:a(n=>e.createElement(t,{...n,onChange:o("textbox-changed"),floatingLabel:"Floating label",multiline:!0}),"render"),name:"Floating label with multiline"},A={render:a(n=>e.createElement(t,{...n,onChange:o("textbox-changed"),floatingLabel:"Floating label",multiline:!0,opaqueLabel:!0}),"render"),name:"Floating label with multiline and opaque label"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} defaultValue="EbayTextbox" />,
  name: "Default textbox"
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} disabled />
        </>,
  name: "Disabled textbox"
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} placeholder="placeholder text" />
        </>,
  name: "Placeholder textbox"
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} invalid />
        </>,
  name: "Invalid textbox"
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} fluid />
        </>,
  name: "Fluid textbox"
}`,...h.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} type="password" />
        </>,
  name: "Password textbox"
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} multiline defaultValue={"some default value\\nnext line"} />
        </>,
  name: "Multiline textbox"
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} multiline invalid defaultValue="some default value" />
        </>,
  name: "Multiline invalid textbox"
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} autoFocus placeholder="Should focus here" />
        </>,
  name: "Autofocused textbox"
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTextbox {...args} placeholder="placeholder text" inputSize="large" />
        </>,
  name: "Large textbox"
}`,...v.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = React.createRef<HTMLInputElement>();
    return <>
                <EbayTextbox {...args} forwardedRef={ref} />
            </>;
  },
  name: "Ref forwarding"
}`,...L.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label"
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} fluid floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label fluid"
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} type="date" floatingLabel="Floating label" onChange={action("onChange")} onInputChange={action("onInputChange")} onFloatingLabelInit={() => action("onFloatingLabelInit")()} />,
  name: "Floating label type date"
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" defaultValue="Default value" />,
  name: "Floating label with value"
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} invalid onChange={action("textbox-changed")} floatingLabel="Invalid Floating label" />,
  name: "Floating label invalid"
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayTextbox {...args} floatingLabel="Regular field" />
            </p>
            <p>
                <EbayTextbox {...args} floatingLabel="Autofocused field" autoFocus onFocus={action("onFocus")} />
            </p>
        </>,
  name: "Floating label with autofocus"
}`,...B.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" multiline />,
  name: "Floating label with multiline"
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <EbayTextbox {...args} onChange={action("textbox-changed")} floatingLabel="Floating label" multiline opaqueLabel />,
  name: "Floating label with multiline and opaque label"
}`,...A.parameters?.docs?.source}}};const ue=["DefaultTextbox","TestingCallbacks","DisabledTextbox","PlaceholderTextbox","InvalidTextbox","FluidTextbox","PasswordTextbox","MultilineTextbox","MultilineInvalidTextbox","AutofocusedTextbox","LargeTextbox","WithIcon","WithPrePostfixText","ControlValueFromOutside","RefForwarding","FloatingLabel","FloatingLabelFluid","FloatingLabelTypeDate","FloatingLabelWithValue","FloatingLabelInvalid","FloatingLabelWithAutofocus","FloatingLabelWithPlaceholderControlled","FloatingLabelWithMultiline","FloatingLabelWithMultilineAndOpaqueLabel"];export{C as AutofocusedTextbox,I as ControlValueFromOutside,p as DefaultTextbox,b as DisabledTextbox,w as FloatingLabel,S as FloatingLabelFluid,k as FloatingLabelInvalid,P as FloatingLabelTypeDate,B as FloatingLabelWithAutofocus,M as FloatingLabelWithMultiline,A as FloatingLabelWithMultilineAndOpaqueLabel,K as FloatingLabelWithPlaceholderControlled,V as FloatingLabelWithValue,h as FluidTextbox,x as InvalidTextbox,v as LargeTextbox,y as MultilineInvalidTextbox,f as MultilineTextbox,E as PasswordTextbox,g as PlaceholderTextbox,L as RefForwarding,m as TestingCallbacks,F as WithIcon,T as WithPrePostfixText,ue as __namedExportsOrder,ce as default};
