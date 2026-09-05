import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{i,t as a}from"./ebay-textbox-BpT_GSbE.js";import{i as o,n as s,o as c,t as l}from"./ebay-field-BAldZaAE.js";var u,d,f;function p(){return(p=t((()=>{u=e(n()),d=e=>typeof e==`string`?[...e].length:typeof e==`number`?e:0,f=({children:e,max:t,clippedText:n,value:r,onChange:i,...a})=>{let[o,s]=(0,u.useState)(d(r));return(0,u.useEffect)(()=>{let e=setTimeout(()=>{let e=d(r);s(e),i&&i({count:e,inputAriaLive:e>=t?`polite`:`off`})},500);return()=>clearTimeout(e)},[r,t,i]),u.createElement(`span`,a,e||u.createElement(u.Fragment,null,o,`/`,t,n&&u.createElement(`span`,{className:`clipped`},n)))};try{f.displayName=`charactercount`,f.__docgenInfo={description:``,displayName:`charactercount`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-character-count/character-count.tsx`,methods:[],props:{max:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-character-count/character-count.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!0,tags:{},type:{name:`number`}},clippedText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-character-count/character-count.tsx`,name:`TypeLiteral`}],description:``,name:`clippedText`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-character-count/character-count.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | number | undefined`}}},tags:{}}}catch{}})))()}function m(){return(m=t((()=>{p()})))()}var h,g,_,v,y,b,x;function S(){return(S=t((()=>{h=e(n()),a(),l(),m(),g=r(),_={title:`building blocks/ebay-character-count`,component:f,parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayCharacterCount } from "@ebay/ui-core-react/ebay-character-count";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/character-count";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/character-count.css";
\`\`\``}}},argTypes:{children:{description:`If set, will override the default body content`},value:{control:{type:`text`},description:`String to count characters from, or a number representing the current character count`},max:{control:{type:`number`},description:`Maximum number of characters allowed in the input.`},clippedText:{control:{type:`text`},description:`Clipped text should be provided after the character count for screen readers to announce.`},onChange:{action:`onChange`,description:`Triggered when the character count changes. Debounced by 500ms.`}},tags:[`autodocs`]},v=e=>(0,g.jsx)(f,{...e}),v.args={value:`Hello world`,clippedText:`characters remaining`,max:120},y=e=>{let[t,n]=h.useState(e.value||``),[r,a]=h.useState(`off`),l=e=>{n(e.target.value)},u=e=>{a(e.inputAriaLive)};return(0,g.jsxs)(c,{children:[(0,g.jsx)(o,{stacked:!0,htmlFor:`my-input`,children:`Field Label`}),(0,g.jsx)(`span`,{className:`field__control`,children:(0,g.jsx)(i,{value:t,type:`text`,"aria-describedby":`my-input-description my-input-charcount`,id:`my-input`,"aria-live":r,onInputChange:l})}),(0,g.jsxs)(s,{type:`group`,children:[(0,g.jsx)(`span`,{id:`my-input-description`,children:`Brief description`}),(0,g.jsx)(f,{...e,id:`my-input-charcount`,value:t,onChange:u})]})]})},y.args={clippedText:`characters remaining`,max:120},b=e=>{let[t,n]=h.useState(String(e.value||``)),[r,a]=h.useState(t.length),[l,u]=h.useState(`off`),d=e=>{n(e.target.value)},p=e=>{u(e.inputAriaLive),a(e.count)};return(0,g.jsxs)(c,{children:[(0,g.jsx)(o,{stacked:!0,htmlFor:`my-input`,children:`Field Label`}),(0,g.jsx)(`span`,{className:`field__control`,children:(0,g.jsx)(i,{value:t,type:`text`,"aria-describedby":`my-input-description my-input-charcount`,id:`my-input`,"aria-live":l,onInputChange:d})}),(0,g.jsxs)(s,{type:r>e.max?`attention`:`group`,children:[(0,g.jsx)(`span`,{id:`my-input-description`,children:`Description`}),(0,g.jsxs)(f,{...e,id:`my-input-charcount`,value:t,onChange:p,children:[r,` of `,e.max,` (`,e.max-r,` remaining)`]})]})]})},b.args={value:`Custom`,clippedText:`custom clipped text`,max:150},x=[`Default`,`InField`,`CustomText`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <EbayCharacterCount {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as CustomText,v as Default,y as InField,x as __namedExportsOrder,_ as default};