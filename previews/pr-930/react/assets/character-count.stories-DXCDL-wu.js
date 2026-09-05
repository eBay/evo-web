import{r as u,j as e}from"./iframe-DjAcWYNC.js";/* empty css              */import{E as b}from"./input-CzAkbxuE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C04a5A_d.js";import"./textbox-Bw4QjpyS.js";import"./icon-button-CXOadnWZ.js";/* empty css               */const g="Segmenter"in Intl?new Intl.Segmenter(void 0,{granularity:"grapheme"}):null;function y(t){return g?[...g.segment(t)].length:[...t].length}function d({text:t,count:m,max:s,a11yText:n="characters used",inputRef:r,children:c,...p}){const h=m??y(t??""),x=h>s;return u.useEffect(()=>{const a=r?.current;if(!a)return;const v=a.getAttribute("aria-live");return()=>{v===null?a.removeAttribute("aria-live"):a.setAttribute("aria-live",v)}},[r]),u.useEffect(()=>{const a=r?.current;a&&a.setAttribute("aria-live",x?"polite":"off")},[r,x]),e.jsx("span",{...p,children:c!==void 0?c:e.jsxs(e.Fragment,{children:[h,"/",s,n&&e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{className:"clipped",children:n})]})]})})}try{d.displayName="EvoCharacterCount",d.__docgenInfo={description:"",displayName:"EvoCharacterCount",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/character-count/character-count.tsx",methods:[],props:{text:{defaultValue:null,declarations:[{fileName:"evo-react/src/character-count/types.ts",name:"TypeLiteral"},{fileName:"evo-react/src/character-count/types.ts",name:"TypeLiteral"}],description:"Text whose grapheme characters are counted. Required unless `count` is provided.",name:"text",required:!1,tags:{},type:{name:"string"}},count:{defaultValue:null,declarations:[{fileName:"evo-react/src/character-count/types.ts",name:"TypeLiteral"},{fileName:"evo-react/src/character-count/types.ts",name:"TypeLiteral"}],description:"Manual count used instead of calculating from `text`.",name:"count",required:!1,tags:{},type:{name:"number"}},max:{defaultValue:null,declarations:[{fileName:"evo-react/src/character-count/types.ts",name:"TypeLiteral"}],description:"Maximum number of characters allowed.",name:"max",required:!0,tags:{},type:{name:"number"}},a11yText:{defaultValue:{value:"characters used"},declarations:[{fileName:"evo-react/src/character-count/types.ts",name:"TypeLiteral"}],description:'Clipped text announced after the count. English default to be overridden\nis `"characters used"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:"a11yText",required:!1,tags:{},type:{name:"string"}},inputRef:{defaultValue:null,declarations:[{fileName:"evo-react/src/character-count/types.ts",name:"TypeLiteral"}],description:'Reference to the associated input or textarea. Its `aria-live` becomes `"polite"` above the maximum.',name:"inputRef",required:!1,tags:{},type:{name:"CharacterCountInputRef"}}},tags:{}}}catch{}const w={title:"building blocks/evo-character-count",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`
Displays the number of grapheme characters in text relative to a maximum.

## Usage

\`\`\`tsx
import { EvoCharacterCount } from "@evo-web/react/character-count";
\`\`\`
        `}}},argTypes:{text:{control:"text"},count:{control:"number"},max:{control:"number"},a11yText:{type:{name:"string",required:!0},control:"text"},inputRef:{control:!1},children:{control:!1,description:"Custom content that replaces the default count display."}},args:{text:"Hello world",max:120,a11yText:"characters used"}},o={},i={args:{text:"",max:120,a11yText:"characters remaining"},render:({text:t="",max:m,a11yText:s})=>{const[n,r]=u.useState(t),c=u.useRef(null);return e.jsxs("span",{className:"field",children:[e.jsx("label",{className:"field__label field__label--stacked",htmlFor:"character-count-input",children:"Field Label"}),e.jsx("span",{className:"field__control",children:e.jsx(b,{ref:c,value:n,type:"text","aria-describedby":"character-count-description character-count-value",id:"character-count-input",onChange:p=>r(p.currentTarget.value)})}),e.jsxs("div",{className:"field__description field__description--group",children:[e.jsx("span",{id:"character-count-description",children:"Brief description"}),e.jsx(d,{text:n,max:m,a11yText:s,inputRef:c,id:"character-count-value"})]})]})}},_="Custom",f=y(_),l={args:{text:void 0,count:f,max:120,children:`${f} of 120 (${120-f} remaining)`}},F=["Default","InField","CustomContent"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "",
    max: 120,
    a11yText: "characters remaining"
  },
  render: ({
    text: initialText = "",
    max,
    a11yText
  }) => {
    const [text, setText] = useState(initialText);
    const inputRef = useRef<HTMLInputElement>(null);
    return <span className="field">
        <label className="field__label field__label--stacked" htmlFor="character-count-input">
          Field Label
        </label>
        <span className="field__control">
          <EvoInput ref={inputRef} value={text} type="text" aria-describedby="character-count-description character-count-value" id="character-count-input" onChange={event => setText(event.currentTarget.value)} />
        </span>
        <div className="field__description field__description--group">
          <span id="character-count-description">Brief description</span>
          <EvoCharacterCount text={text} max={max} a11yText={a11yText} inputRef={inputRef} id="character-count-value" />
        </div>
      </span>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: undefined,
    count: customCount,
    max: 120,
    children: \`\${customCount} of 120 (\${120 - customCount} remaining)\`
  }
}`,...l.parameters?.docs?.source}}};export{l as CustomContent,o as Default,i as InField,F as __namedExportsOrder,w as default};
