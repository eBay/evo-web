import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./input-Dv6N7F-V.js";import{n as s,t as c}from"./clear-16-BJ0k9HhJ.js";import{n as l,t as u}from"./search-16-BT8nyMlC.js";function d(){return(d=t((()=>{})))()}function f({a11yClearButtonText:e,a11yControlsId:t,className:n,defaultValue:r,disabled:i,onChange:a,onValueChange:s,placeholder:l=`Filter`,ref:d,size:f,value:g,..._}){let[v,y]=(0,p.useState)(String(r??``)),b=g!==void 0,x=b?g:v,S=e=>{let t=e.currentTarget.value;b||y(t),a?.(e),s?.(t)},C=()=>{b||y(``),s?.(``)};return(0,h.jsx)(`span`,{className:(0,m.default)(`filter-input`,f&&`filter-input--${f}`,n),children:(0,h.jsx)(o,{..._,"aria-controls":t,disabled:i,fluid:!0,inputSize:f===`large`?`large`:`regular`,onChange:S,placeholder:l,postfix:e?{icon:(0,h.jsx)(c,{}),buttonProps:{a11yText:e,className:`filter-input__clear-btn`,onClick:C,size:`small`}}:void 0,prefix:{icon:(0,h.jsx)(u,{})},ref:d,type:`search`,value:x})})}var p,m,h;function g(){return(g=t((()=>{p=n(),m=e(i(),1),s(),l(),a(),d(),h=r();try{f.displayName=`EvoFilterInput`,f.__docgenInfo={description:`A filter input is a text box used to filter visible content.

\`EvoFilterInput\` renders a search box with a leading search icon. Supply
\`a11yControlsId\` for the results it controls. When \`a11yClearButtonText\` is
provided, the trailing button clears the value and calls \`onValueChange\`
with an empty string. Native input props and a React 19 \`ref\` are supported.

## Usage

\`\`\`tsx
import { EvoFilterInput } from "@evo-web/react/filter-input";

<EvoFilterInput
  a11yControlsId="filtered-items"
  a11yClearButtonText="Clear filter"
  aria-label="Filter items"
  placeholder="Filter items"
/>
<ul id="filtered-items">...</ul>
\`\`\``,displayName:`EvoFilterInput`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/filter-input/filter-input.tsx`,methods:[],props:{floatingLabel:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:`Label shown using the floating-label treatment.`,name:`floatingLabel`,required:!1,tags:{},type:{name:`string`}},floatingLabelStatic:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:`Keeps the floating label raised even when the input is empty.`,name:`floatingLabelStatic`,required:!1,tags:{},type:{name:`boolean`}},invalid:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:'Applies invalid styling and sets `aria-invalid="true"` on the input.',name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},a11yControlsId:{defaultValue:null,declarations:[{fileName:`evo-react/src/filter-input/types.ts`,name:`TypeLiteral`}],description:"Names the results element controlled by the search box. The matching\nelement must have this `id` so `aria-controls` points to it.",name:`a11yControlsId`,required:!0,tags:{},type:{name:`string`}},a11yClearButtonText:{defaultValue:null,declarations:[{fileName:`evo-react/src/filter-input/types.ts`,name:`TypeLiteral`}],description:`Shows a clear button with this accessible name when provided.`,name:`a11yClearButtonText`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/filter-input/types.ts`,name:`TypeLiteral`}],description:`Called with the new text after typing or activating the clear button.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},placeholder:{defaultValue:{value:`Filter`},declarations:[{fileName:`evo-react/src/filter-input/types.ts`,name:`TypeLiteral`}],description:'Search hint. Defaults to `"Filter"` at runtime.',name:`placeholder`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/filter-input/types.ts`,name:`TypeLiteral`}],description:`Applies the large or small filter treatment.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`FilterInputSize`,value:[{value:`"small"`},{value:`"large"`}]}}},tags:{summary:`Search box for filtering content.`}}}catch{}})))()}var _,v,y,b;function x(){return(x=t((()=>{g(),_=r(),v={title:`Form Input/EvoFilterInput`,component:f,argTypes:{size:{control:`select`,options:[`small`,`large`]}},args:{a11yControlsId:`filtered-items`,a11yClearButtonText:`Clear filter`,"aria-label":`Filter items`,placeholder:`Filter items`}},y={render:e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{...e}),(0,_.jsxs)(`ul`,{id:`filtered-items`,children:[(0,_.jsx)(`li`,{children:`Camera`}),(0,_.jsx)(`li`,{children:`Lens`})]})]})},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <EvoFilterInput {...args} />
      <ul id="filtered-items">
        <li>Camera</li>
        <li>Lens</li>
      </ul>
    </>
}`,...y.parameters?.docs?.source},description:{story:`A search box controls a visible list of filtered results.`,...y.parameters?.docs?.description}}}})))()}x();export{y as Default,b as __namedExportsOrder,v as default};