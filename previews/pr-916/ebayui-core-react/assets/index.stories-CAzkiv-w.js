var A=Object.defineProperty;var n=(i,c)=>A(i,"name",{value:c,configurable:!0});import{r as x,R as e,c as T}from"./iframe-BndibQPF.js";import{E as U,a as s}from"./combobox-BospJQS8.js";import{f as N}from"./utils-GuDFCsPF.js";import{E as W}from"./chip-BjChKMed.js";import{E as j}from"./button-CKenLiLa.js";import"./preload-helper-Cc2_yIPf.js";import"./hooks-LjTRtDQV.js";import"./dropdown-BOQVpIzj.js";import"./index-BZgJnV42.js";import"./index-BzamGs-v.js";import"./index-CTkqkN4l.js";import"./index-CSGTE6jH.js";import"./index-2_4bbC34.js";import"./index-BikfbKQM.js";import"./floating-ui-BHx6gLJH.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-Dg7ImhnL.js";import"./index-ndikhgGc.js";import"./ebay-icon-close-12-BOu0cmL8.js";import"./progress-spinner-CC98nkKQ.js";import"./ebay-icon-spinner-30-KCpLKd0o.js";import"./ebay-icon-chevron-down-12-BNLuv1By.js";const u=n(({className:i,fluid:c,error:l,disabled:p,selected:b,defaultSelected:m,a11yDeleteButtonText:O="Remove",onChange:C,children:S,...k})=>{const v=N(S,s),[w,y]=x.useState(m||[]),r=b||w,[D,E]=x.useState(""),f=e.useRef(null),g=n((o,t)=>{const a=[...r,t];y(a),C?.(o,{selected:[...a]}),E("")},"handleSelect"),I=n((o,t)=>{const a=r.filter((K,_)=>_!==t);y(a),C?.(o,{selected:[...a]})},"handleDelete"),B=n(o=>{if(o.key==="Enter"){const t=o.target.value;o.preventDefault(),t&&!r.includes(t)&&g(o,t)}},"handleKeydown"),R=n((o,t)=>{E(t.currentInputValue)},"handleComboboxInputChange");if(b&&m)throw new Error('EbayChipsCombobox: You cannot use "selected" and "defaultSelected" at the same time.');if(b&&!C)throw new Error('EbayChipsCombobox: You must provide an "onChange" prop when using the "selected" prop.');return e.createElement("span",{ref:f,className:T(i,"chips-combobox",{"chips-combobox--fluid":c,"chips-combobox--error":l}),"aria-disabled":p?"true":void 0},r.length?e.createElement("ul",{className:"chips-combobox__items"},r.map((o,t)=>e.createElement("li",{key:t},e.createElement(W,{a11yDeleteButtonText:`${O} ${o}`,onDelete:n(a=>I(a,t),"onDelete"),disabled:p},o)))):null,e.createElement(U,{...k,className:"chips-combobox__combobox",disabled:p,dropdownRef:f,value:D,autocomplete:"list",onSelect:n((o,t)=>g(o,t.selectedOption.text),"onSelect"),onInputChange:R,onKeyDown:B},v.filter(o=>!r.includes(o.props.text))))},"EbayChipsCombobox"),ce={component:u,title:"form input/ebay-chips-combobox",argTypes:{expanded:{control:"boolean",description:"Whether the combobox is expanded"},fluid:{control:"boolean",description:"Whether the combobox should take full width"},error:{control:"boolean",description:"Whether the combobox is in an error state"},listSelection:{control:"select",options:["manual","automatic"],description:"Selection mode for the list"},defaultSelected:{control:"array",description:"Initial selected options. Use it for uncontrolled components"},selected:{control:"array",description:"Currently selected option. Use it for controlled components"},disabled:{control:"boolean",description:"Whether the combobox is disabled"},a11yDeleteButtonText:{control:"text",description:"Accessibility text for the delete button"},borderless:{control:"boolean",description:"Removes input borders"},floatingLabel:{control:"text",description:"Floating label text"},autocomplete:{control:"select",options:["list","none"],description:"Auto-filtering mode"},onExpand:{action:"onExpand"},onCollapse:{action:"onCollapse"},onChange:{action:"onChange"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayChipsCombobox, EbayComboboxOption } from "@ebay/ui-core-react/ebay-chips-combobox";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/chip";
import "@ebay/skin/chips-combobox";
import "@ebay/skin/combobox";
import "@ebay/skin/floating-label";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/chip.css";
@import "@ebay/skin/chips-combobox.css";
@import "@ebay/skin/combobox.css";
@import "@ebay/skin/floating-label.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayChipsCombobox onChange={handleChange}>
    <EbayComboboxOption value="option1">Option 1</EbayComboboxOption>
    <EbayComboboxOption value="option2">Option 2</EbayComboboxOption>
    <EbayComboboxOption value="option3">Option 3</EbayComboboxOption>
</EbayChipsCombobox>
\`\`\``}}}},d=n(i=>e.createElement(u,{placeholder:"Add item",...i},e.createElement(s,{text:"Chip 1"}),e.createElement(s,{text:"Chip 2"}),e.createElement(s,{text:"Chip 3"})),"Default"),h=n(i=>{const[c,l]=x.useState([]),p=n((b,m)=>{l(m?.selected||[])},"handleChange");return e.createElement(e.Fragment,null,e.createElement(u,{placeholder:"Add item",...i,selected:c,onChange:p},e.createElement(s,{text:"Chip 1"}),e.createElement(s,{text:"Chip 2"}),e.createElement(s,{text:"Chip 3"})),e.createElement("div",{style:{marginTop:16}},e.createElement(j,{onClick:n(()=>l(["Chip 2"]),"onClick")},"Update with Chip 2")))},"ControlledCombobox");d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayChipsCombobox placeholder="Add item" {...args}>
        <EbayComboboxOption text="Chip 1" />
        <EbayComboboxOption text="Chip 2" />
        <EbayComboboxOption text="Chip 3" />
    </EbayChipsCombobox>`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange: ChipsComboboxChangeHandler = (event, data) => {
    setSelected(data?.selected || []);
  };
  return <>
            <EbayChipsCombobox placeholder="Add item" {...args} selected={selected} onChange={handleChange}>
                <EbayComboboxOption text="Chip 1" />
                <EbayComboboxOption text="Chip 2" />
                <EbayComboboxOption text="Chip 3" />
            </EbayChipsCombobox>

            <div style={{
      marginTop: 16
    }}>
                <EbayButton onClick={() => setSelected(["Chip 2"])}>Update with Chip 2</EbayButton>
            </div>
        </>;
}`,...h.parameters?.docs?.source}}};const pe=["Default","ControlledCombobox"];export{h as ControlledCombobox,d as Default,pe as __namedExportsOrder,ce as default};
