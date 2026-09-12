import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./utility-oi1a8k1U.js";import{n as i,t as a}from"./input-BHY8JV8b.js";import{t as o}from"./field-CbbNu1w4.js";function s(e){return c?[...c.segment(e)].length:[...e].length}var c;function l(){return(l=e((()=>{c=`Segmenter`in Intl?new Intl.Segmenter(void 0,{granularity:`grapheme`}):null})))()}function u({text:e,count:t,max:n,a11yText:r=`characters used`,inputRef:i,children:a,...o}){let c=t??s(e??``),l=c>n;return(0,d.useEffect)(()=>{let e=i?.current;if(!e)return;let t=e.getAttribute(`aria-live`);return()=>{t===null?e.removeAttribute(`aria-live`):e.setAttribute(`aria-live`,t)}},[i]),(0,d.useEffect)(()=>{let e=i?.current;e&&e.setAttribute(`aria-live`,l?`polite`:`off`)},[i,l]),(0,f.jsx)(`span`,{...o,children:a===void 0?(0,f.jsxs)(f.Fragment,{children:[c,`/`,n,r&&(0,f.jsxs)(f.Fragment,{children:[` `,(0,f.jsx)(`span`,{className:`clipped`,children:r})]})]}):a})}var d,f;function p(){return(p=e((()=>{d=t(),l(),r(),f=n();try{u.displayName=`EvoCharacterCount`,u.__docgenInfo={description:`A character count shows how much text has been entered against a set limit.

\`text\` is counted as grapheme characters. Pass \`count\` when the value is
calculated elsewhere, or provide custom children to replace the default
count. \`inputRef\` sets \`aria-live="polite"\` on the \`<input>\` or \`<textarea>\`
only when the count exceeds \`max\`.

## Usage

\`\`\`tsx
import { useRef, useState } from "react";
import { EvoCharacterCount } from "@evo-web/react/character-count";
import { EvoInput } from "@evo-web/react/input";

function Example() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <EvoInput
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        aria-label="Message"
      />
      <EvoCharacterCount
        text={value}
        max={120}
        inputRef={inputRef}
      />
    </>
  );
}
\`\`\``,displayName:`EvoCharacterCount`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/character-count/character-count.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`evo-react/src/character-count/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/character-count/types.ts`,name:`TypeLiteral`}],description:"Text whose grapheme characters are counted. Required unless `count` is provided.",name:`text`,required:!1,tags:{},type:{name:`string`}},count:{defaultValue:null,declarations:[{fileName:`evo-react/src/character-count/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/character-count/types.ts`,name:`TypeLiteral`}],description:"Manual count used instead of calculating from `text`.",name:`count`,required:!1,tags:{},type:{name:`number`}},max:{defaultValue:null,declarations:[{fileName:`evo-react/src/character-count/types.ts`,name:`TypeLiteral`}],description:`Maximum number of characters allowed.`,name:`max`,required:!0,tags:{},type:{name:`number`}},a11yText:{defaultValue:{value:`characters used`},declarations:[{fileName:`evo-react/src/character-count/types.ts`,name:`TypeLiteral`}],description:'Clipped text announced after the count. English default to be overridden\nis `"characters used"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:`a11yText`,required:!1,tags:{},type:{name:`string | null`}},inputRef:{defaultValue:null,declarations:[{fileName:`evo-react/src/character-count/types.ts`,name:`TypeLiteral`}],description:'Reference to an input or textarea. Its `aria-live` is set to `"polite"` only when the count exceeds `max`.',name:`inputRef`,required:!1,tags:{},type:{name:`CharacterCountInputRef`}}},tags:{summary:`Tracks text length against a maximum.`}}}catch{}})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{m=t(),i(),p(),l(),o(),h=n(),g={title:`Building Blocks/EvoCharacterCount`,component:u,argTypes:{text:{control:`text`},count:{control:`number`},max:{control:`number`},a11yText:{type:{name:`string`,required:!0},control:`text`},inputRef:{control:!1},children:{control:!1}},args:{text:`Vintage leather messenger bag`,max:80,a11yText:`characters used`}},_={},v={args:{text:``,max:120,a11yText:`characters remaining`},render:({text:e=``,max:t,a11yText:n})=>{let[r,i]=(0,m.useState)(e),o=(0,m.useRef)(null);return(0,h.jsxs)(`span`,{className:`field`,children:[(0,h.jsx)(`label`,{className:`field__label field__label--stacked`,htmlFor:`character-count-input`,children:`Item description`}),(0,h.jsx)(`span`,{className:`field__control`,children:(0,h.jsx)(a,{ref:o,value:r,type:`text`,"aria-describedby":`character-count-description character-count-value`,id:`character-count-input`,onChange:e=>i(e.currentTarget.value)})}),(0,h.jsxs)(`div`,{className:`field__description field__description--group`,children:[(0,h.jsx)(`span`,{id:`character-count-description`,children:`Describe the condition, defects, and included accessories.`}),(0,h.jsx)(u,{text:r,max:t,a11yText:n,inputRef:o,id:`character-count-value`})]})]})}},y=s(`Refurbished headphones with charging case and USB-C cable`),b={args:{text:void 0,count:y,max:120,children:`${y} of 120 (${120-y} remaining)`}},x=[`Default`,`InField`,`CustomContent`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`A calculated count compares text with a configured maximum.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
          Item description
        </label>
        <span className="field__control">
          <EvoInput ref={inputRef} value={text} type="text" aria-describedby="character-count-description character-count-value" id="character-count-input" onChange={event => setText(event.currentTarget.value)} />
        </span>
        <div className="field__description field__description--group">
          <span id="character-count-description">
            Describe the condition, defects, and included accessories.
          </span>
          <EvoCharacterCount text={text} max={max} a11yText={a11yText} inputRef={inputRef} id="character-count-value" />
        </div>
      </span>;
  }
}`,...v.parameters?.docs?.source},description:{story:'The `inputRef` target receives `aria-live="polite"` when the count exceeds the maximum.',...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    text: undefined,
    count: customCount,
    max: 120,
    children: \`\${customCount} of 120 (\${120 - customCount} remaining)\`
  }
}`,...b.parameters?.docs?.source},description:{story:`Custom content replaces the default count wording.`,...b.parameters?.docs?.description}}}})))()}S();export{b as CustomContent,_ as Default,v as InField,x as __namedExportsOrder,g as default};