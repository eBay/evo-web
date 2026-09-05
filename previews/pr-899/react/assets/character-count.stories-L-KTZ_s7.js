import{r as l,j as e}from"./iframe-CnvCg6_n.js";/* empty css              */import{E as b}from"./input-tAcbabl2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYwgEna0.js";import"./textbox-DU7uFQSl.js";import"./icon-button-BEkZej73.js";/* empty css               */const v="Segmenter"in Intl?new Intl.Segmenter(void 0,{granularity:"grapheme"}):null;function _(t){return v?[...v.segment(t)].length:[...t].length}function d({text:t,count:m,max:c,a11yText:n="characters used",inputRef:a,children:s,...p}){const f=m??_(t??""),h=f>c;return l.useEffect(()=>{const r=a?.current;if(!r)return;const g=r.getAttribute("aria-live");return()=>{g===null?r.removeAttribute("aria-live"):r.setAttribute("aria-live",g)}},[a]),l.useEffect(()=>{const r=a?.current;r&&r.setAttribute("aria-live",h?"polite":"off")},[a,h]),e.jsx("span",{...p,children:s!==void 0?s:e.jsxs(e.Fragment,{children:[f,"/",c,n&&e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{className:"clipped",children:n})]})]})})}try{d.displayName="EvoCharacterCount",d.__docgenInfo={description:"",displayName:"EvoCharacterCount",props:{text:{defaultValue:null,description:"Text whose grapheme characters are counted. Required unless `count` is provided.",name:"text",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"Manual count used instead of calculating from `text`.",name:"count",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Maximum number of characters allowed.",name:"max",required:!0,type:{name:"number"}},a11yText:{defaultValue:{value:"characters used"},description:'Clipped text announced after the count. English default to be overridden\nis `"characters used"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:"a11yText",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:'Reference to the associated input or textarea. Its `aria-live` becomes `"polite"` above the maximum.',name:"inputRef",required:!1,type:{name:"CharacterCountInputRef"}}}}}catch{}const q={title:"building blocks/evo-character-count",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`
Displays the number of grapheme characters in text relative to a maximum.

## Usage

\`\`\`tsx
import { EvoCharacterCount } from "@evo-web/react/character-count";
\`\`\`
        `}}},argTypes:{text:{control:"text"},count:{control:"number"},max:{control:"number"},a11yText:{type:{name:"string",required:!0},control:"text"},inputRef:{control:!1},children:{control:!1,description:"Custom content that replaces the default count display."}},args:{text:"Hello world",max:120,a11yText:"characters used"}},o={},i={args:{text:"",max:120,a11yText:"characters remaining"},render:({text:t="",max:m,a11yText:c})=>{const[n,a]=l.useState(t),s=l.useRef(null);return e.jsxs("span",{className:"field",children:[e.jsx("label",{className:"field__label field__label--stacked",htmlFor:"character-count-input",children:"Field Label"}),e.jsx("span",{className:"field__control",children:e.jsx(b,{ref:s,value:n,type:"text","aria-describedby":"character-count-description character-count-value",id:"character-count-input",onChange:p=>a(p.currentTarget.value)})}),e.jsxs("div",{className:"field__description field__description--group",children:[e.jsx("span",{id:"character-count-description",children:"Brief description"}),e.jsx(d,{text:n,max:m,a11yText:c,inputRef:s,id:"character-count-value"})]})]})}},y="Custom",x=_(y),u={args:{text:void 0,count:x,max:120,children:`${x} of 120 (${120-x} remaining)`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: undefined,
    count: customCount,
    max: 120,
    children: \`\${customCount} of 120 (\${120 - customCount} remaining)\`
  }
}`,...u.parameters?.docs?.source}}};const S=["Default","InField","CustomContent"];export{u as CustomContent,o as Default,i as InField,S as __namedExportsOrder,q as default};
