import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./use-ref-tee-D2-WpPlp.js";import{n as s,t as c}from"./button-DPLRoO2z.js";import{n as l,t as u}from"./icon-button-DE-W2DMa.js";import{n as d,t as f}from"./input-Dv6N7F-V.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./remove-24-bZvTQJrX.js";function y(){return(y=t((()=>{})))()}function b({a11yDeleteText:e,a11yText:t=`Number input`,className:n,defaultValue:r,disabled:i,id:o,label:s,max:c,min:l,onChange:d,onDelete:m,readOnly:h,ref:g,value:y,...b}){let w=(0,x.useId)(),T=o??w,E=!!e,D=l??+!!E,O=c??1/0,k=!!(i||h),[A,j]=(0,x.useState)(r??D),M=(0,x.useRef)(null),[N,P]=a(g,null),F=y===void 0?A:y,I=(0,x.useCallback)(e=>Number.isNaN(e)?D:Math.min(Math.max(e,D),O),[O,D]),L=(0,x.useCallback)(e=>{let t=M.current;t&&(t.classList.remove(`number-input--increment`,`number-input--decrement`,`number-input--increment-disabled`,`number-input--decrement-disabled`),t.offsetWidth,t.classList.add(`number-input--${e}`))},[]),R=(0,x.useCallback)(()=>{P.current?.focus()},[P]),z=(0,x.useCallback)(()=>{let e=I(F+1);L(e>=O?`increment-disabled`:`increment`),y===void 0&&j(e),d?.(e),R()},[I,F,R,L,d,O,y]),B=(0,x.useCallback)(()=>{let e=I(F-1);L(e<=D?`decrement-disabled`:`decrement`),y===void 0&&j(e),d?.(e),R()},[I,F,R,L,d,D,y]),V=(0,x.useCallback)(e=>{let t=I(parseInt(e.currentTarget.value,10));e.currentTarget.value=String(t),y===void 0&&j(t),d?.(t)},[I,d,y]),H=(0,x.useMemo)(()=>({icon:(0,C.jsxs)(C.Fragment,{children:[s&&(0,C.jsx)(`label`,{htmlFor:T,children:s}),(0,C.jsx)(u,{"aria-hidden":`true`,a11yText:null,className:`number-input__decrement`,disabled:k||F<=D,onClick:B,size:`small`,tabIndex:-1,transparent:!0,children:(0,C.jsx)(v,{})})]})}),[k,F,B,T,s,D]),U=(0,x.useMemo)(()=>({icon:(0,C.jsxs)(C.Fragment,{children:[E&&(0,C.jsx)(u,{a11yText:e??null,className:`number-input__delete`,disabled:k,onClick:m,size:`small`,transparent:!0,children:(0,C.jsx)(_,{})}),(0,C.jsx)(u,{"aria-hidden":`true`,a11yText:null,className:`number-input__increment`,disabled:k||F>=O,onClick:z,size:`small`,tabIndex:-1,transparent:!0,children:(0,C.jsx)(p,{})})]})}),[e,k,F,z,E,m,O]),W=(0,S.default)(`number-input`,E&&F===D&&`number-input--show-delete`,n);return(0,C.jsx)(`span`,{ref:M,className:W,children:(0,C.jsx)(f,{...b,"aria-label":s?void 0:t??void 0,disabled:i,id:T,readOnly:h,ref:N,type:`number`,value:F,min:D,max:O,onChange:V,prefix:H,postfix:U})})}var x,S,C;function w(){return(w=t((()=>{x=n(),S=e(i(),1),g(),m(),h(),l(),d(),o(),y(),C=r();try{b.displayName=`EvoNumberInput`,b.__docgenInfo={description:`Number inputs let users select a number from a range of values with larger
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
\`\`\``,displayName:`EvoNumberInput`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/number-input/number-input.tsx`,methods:[],props:{fluid:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:`Makes the input fill its containing block.`,name:`fluid`,required:!1,tags:{},type:{name:`boolean`}},inputSize:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:'Selects the regular or large Skin input treatment. Defaults to `"regular"`.',name:`inputSize`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"large"`},{value:`"regular"`}]}},invalid:{defaultValue:null,declarations:[{fileName:`evo-react/src/input/types.ts`,name:`TypeLiteral`}],description:'Applies invalid styling and sets `aria-invalid="true"` on the input.',name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Visible label placed before the decrement button.`,name:`label`,required:!1,tags:{},type:{name:`string`}},a11yText:{defaultValue:{value:`Number input`},declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:'Accessible name used when no visible `label` is supplied. English\ndefault to be overridden is `"Number input"`. Pass `null` explicitly\n_only_ if alternative accessibility information is present.',name:`a11yText`,required:!1,tags:{},type:{name:`string | null`}},a11yDeleteText:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Accessible name for the delete button, which enables the quantity-input variant.`,name:`a11yDeleteText`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Controlled numeric value.`,name:`value`,required:!1,tags:{},type:{name:`number`}},defaultValue:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Initial numeric value for uncontrolled usage.`,name:`defaultValue`,required:!1,tags:{},type:{name:`number`}},min:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:"Minimum numeric value. Defaults to `0`, or `1` when delete is enabled.",name:`min`,required:!1,tags:{},type:{name:`number`}},max:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:"Maximum numeric value. Defaults to `Infinity`.",name:`max`,required:!1,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Called with the next value after direct input or a paddle click.`,name:`onChange`,required:!1,tags:{},type:{name:`((value: number) => void)`}},onDelete:{defaultValue:null,declarations:[{fileName:`evo-react/src/number-input/types.ts`,name:`TypeLiteral`}],description:`Called when the delete button is clicked.`,name:`onDelete`,required:!1,tags:{},type:{name:`((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`}}},tags:{summary:`Numeric input with increment and decrement controls.`}}}catch{}})))()}var T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{T=n(),s(),w(),E=r(),D={title:`Form Input/EvoNumberInput`,component:b,argTypes:{value:{control:`number`},defaultValue:{control:`number`},min:{control:`number`},max:{control:`number`},label:{control:`text`},a11yText:{type:{name:`string`,required:!0},control:`text`},a11yDeleteText:{control:`text`},fluid:{control:`boolean`},inputSize:{control:`select`,options:[`regular`,`large`]},invalid:{control:`boolean`},onChange:{action:`onChange`,table:{category:`Events`}},onDelete:{action:`onDelete`,table:{category:`Events`}}},args:{a11yText:`Item quantity`,defaultValue:2,min:1,max:10}},O={},k={args:{label:`Item quantity`,a11yText:null}},A={args:{a11yDeleteText:`Remove headphones from cart`,label:`Headphones quantity`,a11yText:null,defaultValue:1}},j={args:{a11yText:`Item quantity`,value:0,min:0,max:100,defaultValue:void 0},render:e=>{let[t,n]=(0,T.useState)(e.value??0);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(b,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}}),(0,E.jsxs)(`p`,{children:[`Current quantity: `,t]}),(0,E.jsx)(`p`,{children:`Set quantity to:`}),(0,E.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,E.jsx)(c,{onClick:()=>n(0),children:`Set to 0`}),(0,E.jsx)(c,{onClick:()=>n(10),children:`Set to 10`}),(0,E.jsx)(c,{onClick:()=>n(25),children:`Set to 25`}),(0,E.jsx)(c,{onClick:()=>n(50),children:`Set to 50`})]})]})}},M=[`Default`,`WithLabel`,`WithDelete`,`Controlled`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source},description:{story:`A number input for selecting an item quantity.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Item quantity",
    a11yText: null
  }
}`,...k.parameters?.docs?.source},description:{story:`A visible label identifies the quantity field.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    a11yDeleteText: "Remove headphones from cart",
    label: "Headphones quantity",
    a11yText: null,
    defaultValue: 1
  }
}`,...A.parameters?.docs?.source},description:{story:`A delete action supports removing an item from a cart.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Parent state controls the quantity and can replace it through external actions.`,...j.parameters?.docs?.description}}}})))()}N();export{j as Controlled,O as Default,A as WithDelete,k as WithLabel,M as __namedExportsOrder,D as default};