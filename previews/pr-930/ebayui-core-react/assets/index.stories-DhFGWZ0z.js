var P=Object.defineProperty;var a=(e,r)=>P(e,"name",{value:r,configurable:!0});import{r as I,c as w,R as t}from"./iframe-DXKVC7Wu.js";import{E as K,a as W,b as A}from"./textbox-BKx_afX3.js";import{E as _}from"./ebay-icon-search-16-Bzs8Vlog.js";import{E as R}from"./ebay-icon-clear-16-B--40G6l.js";import{E as j}from"./button-BAvxCJp2.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-4VXCHhuo.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./hooks-BqzEUAcn.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";const F=["large","small"],l=a(({size:e,a11yClearButton:r,a11yControlsId:n,onClear:u=a(()=>{},"onClear"),className:o,placeholder:i="Filter",value:c,defaultValue:B,onInputChange:p,inputRef:S,...H})=>{const T=c!==void 0,[N,L]=I.useState(B||""),k=T?c:N,M=e&&F.includes(e)?e==="small"?"default":"large":void 0,q=a((s,{value:V})=>{T||L(V),p&&p(s,{value:V})},"handleInputChange"),z=a(s=>{T||L(""),p&&p(s,{value:""}),u(s,{value:""})},"handleButtonClick"),D=w("filter-input",e&&F.includes(e)&&`filter-input--${e}`,o);return t.createElement("span",{className:D},t.createElement(K,{...H,inputRef:S,value:k,onInputChange:q,fluid:!0,type:"search","aria-controls":n,placeholder:i,inputSize:M},t.createElement(W,{icon:t.createElement(_,null)}),r&&t.createElement(A,{icon:t.createElement(R,null),buttonAriaLabel:r,className:"filter-input__clear-btn",onClick:a(s=>z(s),"onClick")})))},"EbayFilterInput");try{l.displayName="filterinput",l.__docgenInfo={description:"",displayName:"filterinput",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-filter-input/filter-input.tsx",methods:[],props:{onFocus:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onFocus",required:!1,tags:{},type:{name:"EbayFocusEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>"}},onBlur:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onBlur",required:!1,tags:{},type:{name:"EbayFocusEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>"}},onChange:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onChange",required:!1,tags:{},type:{name:"EbayChangeEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>"}},onInvalid:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onInvalid",required:!1,tags:{},type:{name:"EbayEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>"}},onKeyDown:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onKeyDown",required:!1,tags:{},type:{name:"EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>"}},onKeyPress:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onKeyPress",required:!1,tags:{},type:{name:"EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>"}},onKeyUp:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onKeyUp",required:!1,tags:{},type:{name:"EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>"}},forwardedRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"forwardedRef",required:!1,tags:{},type:{name:"Ref<HTMLInputElement | HTMLTextAreaElement>"}},defaultValue:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"},{fileName:"evo-web/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],description:"",name:"defaultValue",required:!1,tags:{},type:{name:"string | (string & readonly string[])"}},floatingLabel:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"floatingLabel",required:!1,tags:{},type:{name:"string"}},fluid:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"fluid",required:!1,tags:{},type:{name:"boolean"}},opaqueLabel:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"opaqueLabel",required:!1,tags:{},type:{name:"boolean"}},onFloatingLabelInit:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onFloatingLabelInit",required:!1,tags:{},type:{name:"() => void"}},invalid:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"invalid",required:!1,tags:{},type:{name:"boolean"}},multiline:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"multiline",required:!1,tags:{},type:{name:"boolean"}},floatingLabelStatic:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"floatingLabelStatic",required:!1,tags:{},type:{name:"boolean"}},onButtonClick:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"}],description:"",name:"onButtonClick",required:!1,tags:{},type:{name:"EbayKeyboardEventHandler<HTMLInputElement, TextboxEventProps> & EbayMouseEventHandler<HTMLInputElement, TextboxEventProps>"}},inputRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-textbox/textbox.tsx",name:"TypeLiteral"},{fileName:"ebayui-core-react/src/ebay-filter-input/filter-input.tsx",name:"TypeLiteral"}],description:"",name:"inputRef",required:!1,tags:{},type:{name:"Ref<HTMLInputElement | HTMLTextAreaElement>"}},size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-input/filter-input.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"Size"}},a11yClearButton:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-input/filter-input.tsx",name:"TypeLiteral"}],description:"",name:"a11yClearButton",required:!1,tags:{},type:{name:"string"}},a11yControlsId:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-input/filter-input.tsx",name:"TypeLiteral"}],description:"",name:"a11yControlsId",required:!1,tags:{},type:{name:"string"}},onClear:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-filter-input/filter-input.tsx",name:"TypeLiteral"}],description:"",name:"onClear",required:!1,tags:{},type:{name:"EbayMouseEventHandler<HTMLButtonElement, FilterInputEventProps>"}},onInputChange:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter-input/filter-input.tsx",name:"TypeLiteral"}],description:"",name:"onInputChange",required:!1,tags:{},type:{name:"EbayEventHandler<HTMLInputElement | HTMLButtonElement, FilterInputEventProps>"}}},tags:{}}}catch{}const ne={component:l,title:"form input/ebay-filter-input",argTypes:{size:{description:"Filter input size",table:{defaultValue:{summary:"large"}},options:["small","large"],control:{type:"select"}},placeholder:{type:"string",description:"Placeholder text",table:{defaultValue:{summary:"Filter"}}},a11yClearButton:{type:"string",description:"Aria-label for clear button. When provided, shows clear button",table:{defaultValue:{summary:"undefined"}}},a11yControlsId:{type:"string",description:"ID of element that this input controls (for aria-controls)"},defaultValue:{type:"string",description:"Default value for uncontrolled input"},value:{type:"string",description:"Value for controlled input"},disabled:{type:"boolean",description:"Whether the input is disabled",table:{defaultValue:{summary:"false"}}},onInputChange:{action:"onInputChange",description:"Triggered on input value change",table:{category:"Events",defaultValue:{summary:"(event, { value }) => {}"}}},onClear:{action:"onClear",description:"Triggered when clear button is clicked",table:{category:"Events",defaultValue:{summary:"(event, { value }) => {}"}}},onChange:{description:"Callback for input blur: `(event, { value }) => void`",action:"onChange",table:{category:"Events"}},onFocus:{description:"Callback for input focus: `(event, { value }) => void`",action:"onFocus",table:{category:"Events"}},onBlur:{description:"Callback for input blur: `(event, { value }) => void`",action:"onBlur",table:{category:"Events"}},onKeyDown:{description:"Callback for key down: `(event, { value }) => void`",action:"onKeyDown",table:{category:"Events"}},onKeyPress:{description:"Callback for key press: `(event, { value }) => void`",action:"onKeyPress",table:{category:"Events"}},onKeyUp:{description:"Callback for key up: `(event, { value }) => void`",action:"onKeyUp",table:{category:"Events"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx
import { EbayFilterInput } from "@ebay/ui-core-react/ebay-filter-input";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/filter-input";
import "@ebay/skin/icon";
import "@ebay/skin/textbox";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/filter-input.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/textbox.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayFilterInput placeholder="Search items" />
\`\`\`

## Examples

### Basic Filter Input

\`\`\`jsx
<EbayFilterInput placeholder="Filter results" />
\`\`\`

### With Clear Button

\`\`\`jsx
<EbayFilterInput
    placeholder="Filter results"
    a11yClearButton="Clear filters"
    onClear={(event, { value }) => console.log("Cleared:", value)}
/>
\`\`\`

### With Size Variants

\`\`\`jsx
<EbayFilterInput size="large" placeholder="Large filter input" />
<EbayFilterInput size="small" placeholder="Small filter input" />
\`\`\`

### With Event Handlers

\`\`\`jsx
<EbayFilterInput
    placeholder="Search items"
    a11yClearButton="Clear search"
    onInputChange={(event, { value }) => console.log("Input changed:", value)}
    onKeyDown={(event, { value }) => {
        if (event.key === "Enter") {
            console.log("Search submitted:", value);
        }
    }}
    onClear={(event, { value }) => console.log("Search cleared")}
/>
\`\`\`

### Controlling Results List

\`\`\`jsx
<EbayFilterInput
    placeholder="Filter list items"
    a11yControlsId="filtered-list"
    onInputChange={(event, { value }) => filterList(value)}
/>
<ul id="filtered-list">
    {/* Filtered list items */}
</ul>
\`\`\``}}}},d=a(e=>t.createElement(l,{...e}),"Default"),m=a(e=>t.createElement(l,{...e,a11yClearButton:"Clear filter"}),"WithClearButton"),y=a(e=>t.createElement(l,{...e,defaultValue:"Initial value",a11yClearButton:"Clear filter"}),"WithDefaultValue"),b=a(e=>t.createElement(l,{...e,size:"large",a11yClearButton:"Clear filter"}),"LargeSize"),f=a(e=>t.createElement(l,{...e,size:"small",a11yClearButton:"Clear filter"}),"SmallSize"),x=a(e=>t.createElement(l,{...e,disabled:!0,a11yClearButton:"Clear filter"}),"Disabled"),g=a(e=>t.createElement(l,{...e,placeholder:"Search items...",a11yClearButton:"Clear search"}),"CustomPlaceholder"),E=a(e=>{const[r,n]=I.useState("Controlled value");return t.createElement("div",null,t.createElement(l,{...e,value:r,a11yClearButton:"Clear filter",onInputChange:a((u,o)=>n(o.value),"onInputChange"),onClear:a(()=>n(""),"onClear")}),t.createElement("div",{style:{marginTop:"8px"}},"Current value: ",t.createElement("strong",null,r)),t.createElement(j,{onClick:a(()=>n("Controlled value"),"onClick")},"Set initial value"))},"Controlled"),v=a(e=>{const[r,n]=I.useState("");return t.createElement("div",null,t.createElement(l,{...e,defaultValue:"Initial value",a11yClearButton:"Clear filter",onInputChange:a((u,o)=>n(o.value),"onInputChange")}),t.createElement("div",{style:{marginTop:"8px"}},"Last input value: ",t.createElement("strong",null,r)))},"Uncontrolled"),C=a(e=>{const[r,n]=I.useState(""),o=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"].filter(i=>i.toLowerCase().includes(r.toLowerCase()));return t.createElement("div",null,t.createElement(l,{...e,value:r,a11yClearButton:"Clear filter",a11yControlsId:"filtered-list",placeholder:"Filter items...",onInputChange:a((i,c)=>n(c.value),"onInputChange"),onClear:a(()=>n(""),"onClear")}),t.createElement("ul",{id:"filtered-list",style:{marginTop:"8px",listStyle:"none",padding:0}},o.length>0?o.map(i=>t.createElement("li",{key:i,style:{padding:"4px 0"}},i)):t.createElement("li",{style:{padding:"4px 0",color:"#999"}},"No items found")))},"WithControlledList"),h=a(e=>t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"}},t.createElement(l,{...e,placeholder:"Default"}),t.createElement(l,{...e,placeholder:"With clear button",a11yClearButton:"Clear"}),t.createElement(l,{...e,size:"large",placeholder:"Large size",a11yClearButton:"Clear"}),t.createElement(l,{...e,size:"small",placeholder:"Small size",a11yClearButton:"Clear"}),t.createElement(l,{...e,disabled:!0,placeholder:"Disabled",a11yClearButton:"Clear"})),"Collection"),oe=["Default","WithClearButton","WithDefaultValue","LargeSize","SmallSize","Disabled","CustomPlaceholder","Controlled","Uncontrolled","WithControlledList","Collection"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <EbayFilterInput {...args} />",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'args => <EbayFilterInput {...args} a11yClearButton="Clear filter" />',...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'args => <EbayFilterInput {...args} defaultValue="Initial value" a11yClearButton="Clear filter" />',...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'args => <EbayFilterInput {...args} size="large" a11yClearButton="Clear filter" />',...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'args => <EbayFilterInput {...args} size="small" a11yClearButton="Clear filter" />',...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'args => <EbayFilterInput {...args} disabled a11yClearButton="Clear filter" />',...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'args => <EbayFilterInput {...args} placeholder="Search items..." a11yClearButton="Clear search" />',...g.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState("Controlled value");
  return <div>
            <EbayFilterInput {...args} value={value} a11yClearButton="Clear filter" onInputChange={(e, data) => setValue(data!.value)} onClear={() => setValue("")} />
            <div style={{
      marginTop: "8px"
    }}>
                Current value: <strong>{value}</strong>
            </div>
            <EbayButton onClick={() => setValue("Controlled value")}>Set initial value</EbayButton>
        </div>;
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [lastValue, setLastValue] = useState("");
  return <div>
            <EbayFilterInput {...args} defaultValue="Initial value" a11yClearButton="Clear filter" onInputChange={(e, data) => setLastValue(data!.value)} />
            <div style={{
      marginTop: "8px"
    }}>
                Last input value: <strong>{lastValue}</strong>
            </div>
        </div>;
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [filterValue, setFilterValue] = useState("");
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
  const filteredItems = items.filter(item => item.toLowerCase().includes(filterValue.toLowerCase()));
  return <div>
            <EbayFilterInput {...args} value={filterValue} a11yClearButton="Clear filter" a11yControlsId="filtered-list" placeholder="Filter items..." onInputChange={(e, data) => setFilterValue(data!.value)} onClear={() => setFilterValue("")} />
            <ul id="filtered-list" style={{
      marginTop: "8px",
      listStyle: "none",
      padding: 0
    }}>
                {filteredItems.length > 0 ? filteredItems.map(item => <li key={item} style={{
        padding: "4px 0"
      }}>
                            {item}
                        </li>) : <li style={{
        padding: "4px 0",
        color: "#999"
      }}>No items found</li>}
            </ul>
        </div>;
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  maxWidth: "400px"
}}>
        <EbayFilterInput {...args} placeholder="Default" />
        <EbayFilterInput {...args} placeholder="With clear button" a11yClearButton="Clear" />
        <EbayFilterInput {...args} size="large" placeholder="Large size" a11yClearButton="Clear" />
        <EbayFilterInput {...args} size="small" placeholder="Small size" a11yClearButton="Clear" />
        <EbayFilterInput {...args} disabled placeholder="Disabled" a11yClearButton="Clear" />
    </div>`,...h.parameters?.docs?.source}}};export{h as Collection,E as Controlled,g as CustomPlaceholder,d as Default,x as Disabled,b as LargeSize,f as SmallSize,v as Uncontrolled,m as WithClearButton,C as WithControlledList,y as WithDefaultValue,oe as __namedExportsOrder,ne as default};
