var v=Object.defineProperty;var n=(t,a)=>v(t,"name",{value:a,configurable:!0});import{r as b,R as e}from"./iframe-DXKVC7Wu.js";import{E as C}from"./textbox-BKx_afX3.js";import{a as E,E as f,b as x}from"./description-Dia7aKRM.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-4VXCHhuo.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./hooks-BqzEUAcn.js";const g=n(t=>typeof t=="string"?[...t].length:typeof t=="number"?t:0,"countFromValue"),s=n(({children:t,max:a,clippedText:u,value:r,onChange:o,...p})=>{const[l,c]=b.useState(g(r));return b.useEffect(()=>{const y=setTimeout(()=>{const i=g(r);c(i),o&&o({count:i,inputAriaLive:i>=a?"polite":"off"})},500);return()=>clearTimeout(y)},[r,a,o]),e.createElement("span",{...p},t||e.createElement(e.Fragment,null,l,"/",a,u&&e.createElement("span",{className:"clipped"},u)))},"EbayCharacterCount");try{s.displayName="charactercount",s.__docgenInfo={description:"",displayName:"charactercount",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-character-count/character-count.tsx",methods:[],props:{max:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-character-count/character-count.tsx",name:"TypeLiteral"}],description:"",name:"max",required:!0,tags:{},type:{name:"number"}},clippedText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-character-count/character-count.tsx",name:"TypeLiteral"}],description:"",name:"clippedText",required:!1,tags:{},type:{name:"string"}},value:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-character-count/character-count.tsx",name:"TypeLiteral"}],description:"",name:"value",required:!1,tags:{},type:{name:"string | number"}}},tags:{}}}catch{}const D={title:"building blocks/ebay-character-count",component:s,parameters:{docs:{description:{component:'## Usage\n\n### Import\n\n```jsx harmony\nimport { EbayCharacterCount } from "@ebay/ui-core-react/ebay-character-count";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/character-count";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/character-count.css";\n```'}}},argTypes:{children:{description:"If set, will override the default body content"},value:{control:{type:"text"},description:"String to count characters from, or a number representing the current character count"},max:{control:{type:"number"},description:"Maximum number of characters allowed in the input."},clippedText:{control:{type:"text"},description:"Clipped text should be provided after the character count for screen readers to announce."},onChange:{action:"onChange",description:"Triggered when the character count changes. Debounced by 500ms."}},tags:["autodocs"]},m=n(t=>e.createElement(s,{...t}),"Default");m.args={value:"Hello world",clippedText:"characters remaining",max:120};const d=n(t=>{const[a,u]=e.useState(t.value||""),[r,o]=e.useState("off"),p=n(c=>{u(c.target.value)},"handleTextChange"),l=n(c=>{o(c.inputAriaLive)},"handleCharCountChange");return e.createElement(E,null,e.createElement(f,{stacked:!0,htmlFor:"my-input"},"Field Label"),e.createElement("span",{className:"field__control"},e.createElement(C,{value:a,type:"text","aria-describedby":"my-input-description my-input-charcount",id:"my-input","aria-live":r,onInputChange:p})),e.createElement(x,{type:"group"},e.createElement("span",{id:"my-input-description"},"Brief description"),e.createElement(s,{...t,id:"my-input-charcount",value:a,onChange:l})))},"InField");d.args={clippedText:"characters remaining",max:120};const h=n(t=>{const[a,u]=e.useState(String(t.value||"")),[r,o]=e.useState(a.length),[p,l]=e.useState("off"),c=n(i=>{u(i.target.value)},"handleTextChange"),y=n(i=>{l(i.inputAriaLive),o(i.count)},"handleCharCountChange");return e.createElement(E,null,e.createElement(f,{stacked:!0,htmlFor:"my-input"},"Field Label"),e.createElement("span",{className:"field__control"},e.createElement(C,{value:a,type:"text","aria-describedby":"my-input-description my-input-charcount",id:"my-input","aria-live":p,onInputChange:c})),e.createElement(x,{type:r>t.max?"attention":"group"},e.createElement("span",{id:"my-input-description"},"Description"),e.createElement(s,{...t,id:"my-input-charcount",value:a,onChange:y},r," of ",t.max," (",t.max-r," remaining)")))},"CustomText");h.args={value:"Custom",clippedText:"custom clipped text",max:150};const k=["Default","InField","CustomText"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <EbayCharacterCount {...args} />",...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const [inputValue, setInputValue] = React.useState(args.value || "");
  const [inputAriaLive, setInputAriaLive] = React.useState<"polite" | "off">("off");
  const handleTextChange: EbayTextboxProps["onInputChange"] = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleCharCountChange: EbayCharacterCountProps["onChange"] = event => {
    setInputAriaLive(event.inputAriaLive);
  };
  return <EbayField>
            <EbayLabel stacked htmlFor="my-input">
                Field Label
            </EbayLabel>

            <span className="field__control">
                <EbayTextbox value={inputValue} type="text" aria-describedby="my-input-description my-input-charcount" id="my-input" aria-live={inputAriaLive} onInputChange={handleTextChange} />
            </span>
            <EbayFieldDescription type="group">
                <span id="my-input-description">Brief description</span>

                <EbayCharacterCount {...args} id="my-input-charcount" value={inputValue} onChange={handleCharCountChange} />
            </EbayFieldDescription>
        </EbayField>;
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [inputValue, setInputValue] = React.useState(String(args.value || ""));
  const [charCount, setCharCount] = React.useState(inputValue.length);
  const [inputAriaLive, setInputAriaLive] = React.useState<"polite" | "off">("off");
  const handleTextChange: EbayTextboxProps["onInputChange"] = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleCharCountChange: EbayCharacterCountProps["onChange"] = event => {
    setInputAriaLive(event.inputAriaLive);
    setCharCount(event.count);
  };
  return <EbayField>
            <EbayLabel stacked htmlFor="my-input">
                Field Label
            </EbayLabel>

            <span className="field__control">
                <EbayTextbox value={inputValue} type="text" aria-describedby="my-input-description my-input-charcount" id="my-input" aria-live={inputAriaLive} onInputChange={handleTextChange} />
            </span>
            <EbayFieldDescription type={charCount > args.max ? "attention" : "group"}>
                <span id="my-input-description">Description</span>

                <EbayCharacterCount {...args} id="my-input-charcount" value={inputValue} onChange={handleCharCountChange}>
                    {charCount} of {args.max} ({args.max - charCount} remaining)
                </EbayCharacterCount>
            </EbayFieldDescription>
        </EbayField>;
}`,...h.parameters?.docs?.source}}};export{h as CustomText,m as Default,d as InField,k as __namedExportsOrder,D as default};
