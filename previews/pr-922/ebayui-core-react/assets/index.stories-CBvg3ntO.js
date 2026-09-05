import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{r as i}from"./utils-i55QFFMK.js";import{n as a}from"./iframe-RezWaW69.js";import{t as o}from"./utils-BI15M-bA.js";import{n as s,t as c}from"./ebay-button-B_FEPJ7h.js";import{n as l,t as u}from"./ebay-chip-D1tgzItt.js";import{i as d,n as f,t as p}from"./ebay-combobox-JHR6N2IN.js";var m,h,g;function _(){return(_=t((()=>{m=e(n()),h=e(r()),p(),o(),u(),g=({className:e,fluid:t,error:n,disabled:r,selected:a,defaultSelected:o,a11yDeleteButtonText:s=`Remove`,onChange:c,children:u,...p})=>{let g=i(u,d),[_,v]=(0,m.useState)(o||[]),y=a||_,[b,x]=(0,m.useState)(``),S=m.useRef(null),C=(e,t)=>{let n=[...y,t];v(n),c?.(e,{selected:[...n]}),x(``)},w=(e,t)=>{let n=y.filter((e,n)=>n!==t);v(n),c?.(e,{selected:[...n]})},T=e=>{if(e.key===`Enter`){let t=e.target.value;e.preventDefault(),t&&!y.includes(t)&&C(e,t)}},E=(e,t)=>{x(t.currentInputValue)};if(a&&o)throw Error(`EbayChipsCombobox: You cannot use "selected" and "defaultSelected" at the same time.`);if(a&&!c)throw Error(`EbayChipsCombobox: You must provide an "onChange" prop when using the "selected" prop.`);return m.createElement(`span`,{ref:S,className:(0,h.default)(e,`chips-combobox`,{"chips-combobox--fluid":t,"chips-combobox--error":n}),"aria-disabled":r?`true`:void 0},y.length?m.createElement(`ul`,{className:`chips-combobox__items`},y.map((e,t)=>m.createElement(`li`,{key:t},m.createElement(l,{a11yDeleteButtonText:`${s} ${e}`,onDelete:e=>w(e,t),disabled:r},e)))):null,m.createElement(f,{...p,className:`chips-combobox__combobox`,disabled:r,dropdownRef:S,value:b,autocomplete:`list`,onSelect:(e,t)=>C(e,t.selectedOption.text),onInputChange:E,onKeyDown:T},g.filter(e=>!y.includes(e.props.text))))}})))()}var v,y,b,x,S,C;function w(){return(w=t((()=>{v=e(n()),_(),p(),c(),y=a(),b={component:g,title:`form input/ebay-chips-combobox`,argTypes:{expanded:{control:`boolean`,description:`Whether the combobox is expanded`},fluid:{control:`boolean`,description:`Whether the combobox should take full width`},error:{control:`boolean`,description:`Whether the combobox is in an error state`},listSelection:{control:`select`,options:[`manual`,`automatic`],description:`Selection mode for the list`},defaultSelected:{control:`array`,description:`Initial selected options. Use it for uncontrolled components`},selected:{control:`array`,description:`Currently selected option. Use it for controlled components`},disabled:{control:`boolean`,description:`Whether the combobox is disabled`},a11yDeleteButtonText:{control:`text`,description:`Accessibility text for the delete button`},borderless:{control:`boolean`,description:`Removes input borders`},floatingLabel:{control:`text`,description:`Floating label text`},autocomplete:{control:`select`,options:[`list`,`none`],description:`Auto-filtering mode`},onExpand:{action:`onExpand`},onCollapse:{action:`onCollapse`},onChange:{action:`onChange`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},x=e=>(0,y.jsxs)(g,{placeholder:`Add item`,...e,children:[(0,y.jsx)(d,{text:`Chip 1`}),(0,y.jsx)(d,{text:`Chip 2`}),(0,y.jsx)(d,{text:`Chip 3`})]}),S=e=>{let[t,n]=(0,v.useState)([]),r=(e,t)=>{n(t?.selected||[])};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(g,{placeholder:`Add item`,...e,selected:t,onChange:r,children:[(0,y.jsx)(d,{text:`Chip 1`}),(0,y.jsx)(d,{text:`Chip 2`}),(0,y.jsx)(d,{text:`Chip 3`})]}),(0,y.jsx)(`div`,{style:{marginTop:16},children:(0,y.jsx)(s,{onClick:()=>n([`Chip 2`]),children:`Update with Chip 2`})})]})},C=[`Default`,`ControlledCombobox`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <EbayChipsCombobox placeholder="Add item" {...args}>
        <EbayComboboxOption text="Chip 1" />
        <EbayComboboxOption text="Chip 2" />
        <EbayComboboxOption text="Chip 3" />
    </EbayChipsCombobox>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as ControlledCombobox,x as Default,C as __namedExportsOrder,b as default};