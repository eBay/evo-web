import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./use-ref-tee-dqU7tx9A.js";import{n as s,t as c}from"./button-967Tc_DW.js";import{n as l,t as u}from"./icon-button-CcDvPZir.js";import{n as d,t as f}from"./use-form-reset-DCx6l1Hy.js";import{n as p,t as m}from"./input-BzAxGDyI.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./remove-24-DHv91YEP.js";function x(){return(x=t((()=>{})))()}function S({a11yDeleteText:e,a11yText:t=`Number input`,className:n,defaultValue:r,disabled:i,id:o,label:s,max:c,min:l,onChange:f,onDelete:p,readOnly:g,ref:_,value:v,...x}){let S=(0,C.useId)(),E=o??S,D=!!e,O=l??+!!D,k=c??1/0,A=!!(i||g),[j,M]=(0,C.useState)(r??O),N=(0,C.useRef)(null),[P,F]=a(_,null),I=v===void 0?j:v;d(F,r??O,M);let L=(0,C.useCallback)(e=>Number.isNaN(e)?O:Math.min(Math.max(e,O),k),[k,O]),R=(0,C.useCallback)(e=>{let t=N.current;t&&(t.classList.remove(`number-input--increment`,`number-input--decrement`,`number-input--increment-disabled`,`number-input--decrement-disabled`),t.offsetWidth,t.classList.add(`number-input--${e}`))},[]),z=(0,C.useCallback)(()=>{F.current?.focus()},[F]),B=(0,C.useCallback)(()=>{let e=L(I+1);R(e>=k?`increment-disabled`:`increment`),v===void 0&&M(e),f?.(e),z()},[L,I,z,R,f,k,v]),V=(0,C.useCallback)(()=>{let e=L(I-1);R(e<=O?`decrement-disabled`:`decrement`),v===void 0&&M(e),f?.(e),z()},[L,I,z,R,f,O,v]),H=(0,C.useCallback)(e=>{let t=L(parseInt(e.currentTarget.value,10));e.currentTarget.value=String(t),v===void 0&&M(t),f?.(t)},[L,f,v]),U=(0,C.useMemo)(()=>({icon:(0,T.jsxs)(T.Fragment,{children:[s&&(0,T.jsx)(`label`,{htmlFor:E,children:s}),(0,T.jsx)(u,{"aria-hidden":`true`,a11yText:null,className:`number-input__decrement`,disabled:A||I<=O,onClick:V,size:`small`,tabIndex:-1,transparent:!0,children:(0,T.jsx)(b,{})})]})}),[A,I,V,E,s,O]),W=(0,C.useMemo)(()=>({icon:(0,T.jsxs)(T.Fragment,{children:[D&&(0,T.jsx)(u,{a11yText:e??null,className:`number-input__delete`,disabled:A,onClick:p,size:`small`,transparent:!0,children:(0,T.jsx)(y,{})}),(0,T.jsx)(u,{"aria-hidden":`true`,a11yText:null,className:`number-input__increment`,disabled:A||I>=k,onClick:B,size:`small`,tabIndex:-1,transparent:!0,children:(0,T.jsx)(h,{})})]})}),[e,A,I,B,D,p,k]),G=(0,w.default)(`number-input`,D&&I===O&&`number-input--show-delete`,n);return(0,T.jsx)(`span`,{ref:N,className:G,children:(0,T.jsx)(m,{...x,"aria-label":s?void 0:t??void 0,disabled:i,id:E,readOnly:g,ref:P,type:`number`,value:I,min:O,max:k,onChange:H,prefix:U,postfix:W})})}var C,w,T;function E(){return(E=t((()=>{C=n(),w=e(i(),1),v(),g(),_(),l(),p(),o(),f(),x(),T=r();try{S.displayName=`EvoNumberInput`,S.__docgenInfo={description:`Number inputs let users select a number from a range of values with larger
increment and decrement buttons than the browser's default spin controls.
A delete action can be added for quantity-input patterns such as shopping
carts.

## Usage

\`\`\`tsx
import { EvoNumberInput } from "@evo-web/react/number-input";

<EvoNumberInput
  label="Item quantity"
  min={1}
  defaultValue={2}
/>
\`\`\``,displayName:`EvoNumberInput`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/number-input/number-input.tsx`,methods:[],props:{fluid:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:`Makes the input fill its containing block.`,name:`fluid`,required:!1,tags:{},type:{name:`boolean`}},inputSize:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:'Selects the regular or large Skin input treatment. Defaults to `"regular"`.',name:`inputSize`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"large"`},{value:`"regular"`}]}},invalid:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:'Applies invalid styling and sets `aria-invalid="true"` on the input.',name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Visible label placed before the decrement button.`,name:`label`,required:!1,tags:{},type:{name:`string`}},a11yText:{defaultValue:{value:`Number input`},declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:'Accessible name used when no visible `label` is supplied. English\ndefault to be overridden is `"Number input"`. Pass `null` explicitly\n_only_ if alternative accessibility information is present.',name:`a11yText`,required:!1,tags:{},type:{name:`string | null`}},a11yDeleteText:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Accessible name for the delete button, which enables the quantity-input variant.`,name:`a11yDeleteText`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Controlled numeric value.`,name:`value`,required:!1,tags:{},type:{name:`number`}},defaultValue:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Initial numeric value for uncontrolled usage.`,name:`defaultValue`,required:!1,tags:{},type:{name:`number`}},min:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:"Minimum numeric value. Defaults to `0`, or `1` when delete is enabled.",name:`min`,required:!1,tags:{},type:{name:`number`}},max:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:"Maximum numeric value. Defaults to `Infinity`.",name:`max`,required:!1,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Called with the next value after direct input or a paddle click.`,name:`onChange`,required:!1,tags:{},type:{name:`((value: number) => void)`}},onDelete:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Called when the delete button is clicked.`,name:`onDelete`,required:!1,tags:{},type:{name:`((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`}}},tags:{summary:`Numeric input with increment and decrement controls.`}}}catch{}})))()}var D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{D=n(),s(),E(),O=r(),k={title:`Form Input/EvoNumberInput`,component:S,argTypes:{value:{control:`number`},defaultValue:{control:`number`},min:{control:`number`},max:{control:`number`},label:{control:`text`},a11yText:{type:{name:`string`,required:!0},control:`text`},a11yDeleteText:{control:`text`},fluid:{control:`boolean`},inputSize:{control:`select`,options:[`regular`,`large`]},invalid:{control:`boolean`},onChange:{action:`onChange`,table:{category:`Events`}},onDelete:{action:`onDelete`,table:{category:`Events`}}},args:{a11yText:`Item quantity`,defaultValue:2,min:1,max:10}},A={},j={args:{label:`Item quantity`,a11yText:null}},M={args:{a11yDeleteText:`Remove headphones from cart`,label:`Headphones quantity`,a11yText:null,defaultValue:1}},N={args:{a11yText:`Item quantity`,value:0,min:0,max:100,defaultValue:void 0},render:e=>{let[t,n]=(0,D.useState)(e.value??0);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}}),(0,O.jsxs)(`p`,{children:[`Current quantity: `,t]}),(0,O.jsx)(`p`,{children:`Set quantity to:`}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,O.jsx)(c,{onClick:()=>n(0),children:`Set to 0`}),(0,O.jsx)(c,{onClick:()=>n(10),children:`Set to 10`}),(0,O.jsx)(c,{onClick:()=>n(25),children:`Set to 25`}),(0,O.jsx)(c,{onClick:()=>n(50),children:`Set to 50`})]})]})}},P=[`Default`,`WithLabel`,`WithDelete`,`Controlled`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source},description:{story:`A number input for selecting an item quantity.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Item quantity",
    a11yText: null
  }
}`,...j.parameters?.docs?.source},description:{story:`A visible label identifies the quantity field.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    a11yDeleteText: "Remove headphones from cart",
    label: "Headphones quantity",
    a11yText: null,
    defaultValue: 1
  }
}`,...M.parameters?.docs?.source},description:{story:`A delete action supports removing an item from a cart.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    a11yText: "Item quantity",
    value: 0,
    min: 0,
    max: 100,
    defaultValue: undefined
  },
  render: args => {
    const [value, setValue] = useState(args.value ?? 0);
    return <>
        <EvoNumberInput {...args} value={value} onChange={nextValue => {
        setValue(nextValue);
        args.onChange?.(nextValue);
      }} />

        <p>Current quantity: {value}</p>
        <p>Set quantity to:</p>
        <div style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap"
      }}>
          <EvoButton onClick={() => setValue(0)}>Set to 0</EvoButton>
          <EvoButton onClick={() => setValue(10)}>Set to 10</EvoButton>
          <EvoButton onClick={() => setValue(25)}>Set to 25</EvoButton>
          <EvoButton onClick={() => setValue(50)}>Set to 50</EvoButton>
        </div>
      </>;
  }
}`,...N.parameters?.docs?.source},description:{story:`Parent state controls the quantity and can replace it through external actions.`,...N.parameters?.docs?.description}}}})))()}F();export{N as Controlled,A as Default,M as WithDelete,j as WithLabel,P as __namedExportsOrder,k as default};