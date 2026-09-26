import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./use-ref-tee-D2-WpPlp.js";import{t as s}from"./field-CbbNu1w4.js";import{i as c,n as l,r as u,t as d}from"./checkbox-unchecked-18-BDJIqbgB.js";import{i as f,n as p,r as m,t as h}from"./checkbox-unchecked-24-uAVlmLUW.js";import{n as g,r as _,t as v}from"./checkbox-D8xPVyOE.js";import{i as y,n as b,r as x,t as S}from"./checkbox-mixed-24-DehnMHyL.js";function C({checked:e,checkedValues:t,className:n,defaultChecked:r=`false`,onChange:i,onCheckedChange:o,onCheckedValuesChange:s,ref:c,size:l=`regular`,skipMixed:f=!1,style:p,values:g,..._}){let[v,y]=(0,w.useState)(r),[b,C]=a(c,null),D=(0,w.useRef)(null),O=g!==void 0&&t!==void 0,k=O?g.filter(e=>t.includes(e)).length:0,A=O?k===0?`false`:k===g.length?`true`:`mixed`:e??v;(0,w.useEffect)(()=>{C.current&&(C.current.indeterminate=A===`mixed`)},[A,C]);let j=n=>{if(i?.(n),O){let e;A===`true`?e=[]:A===`mixed`?(D.current=[...t],e=[...g]):e=D.current??[...g],s?.(e);return}let r=A===`true`?`false`:A===`false`&&!f?`mixed`:`true`;e===void 0&&y(r),o?.(r)},M=l===`large`,N=A===`true`?M?(0,E.jsx)(m,{className:`checkbox__checked`}):(0,E.jsx)(u,{className:`checkbox__checked`}):A===`mixed`?M?(0,E.jsx)(S,{}):(0,E.jsx)(x,{}):M?(0,E.jsx)(h,{className:`checkbox__unchecked`}):(0,E.jsx)(d,{className:`checkbox__unchecked`});return(0,E.jsxs)(`span`,{className:(0,T.default)(`checkbox`,M&&`checkbox--large`,n),style:p,children:[(0,E.jsx)(`input`,{..._,ref:b,"aria-checked":A,checked:A===`true`,className:`checkbox__control`,onChange:j,type:`checkbox`}),(0,E.jsx)(`span`,{className:`checkbox__icon`,hidden:!0,children:N})]})}var w,T,E;function D(){return(D=t((()=>{w=n(),T=e(i(),1),c(),f(),y(),b(),l(),p(),o(),_(),E=r();try{C.displayName=`EvoTriStateCheckbox`,C.__docgenInfo={description:`A tri-state checkbox toggles between unchecked, partially checked, and fully
checked states. It uses a native checkbox with Skin icons.

\`checked\` and \`onCheckedChange\` support controlled standalone use. Provide
\`values\` and \`checkedValues\` to derive the state of a controlled group, then
update the group through \`onCheckedValuesChange\`. Give the input a visible
label or another accessible name.

## Usage

\`\`\`tsx
import { EvoTriStateCheckbox } from "@evo-web/react/tri-state-checkbox";

<label>
  <EvoTriStateCheckbox
    checked={selectionState}
    onCheckedChange={setSelectionState}
  />
  Select all items
</label>
\`\`\``,displayName:`EvoTriStateCheckbox`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/tri-state-checkbox/tri-state-checkbox.tsx`,methods:[],props:{checked:{defaultValue:null,declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:"Controlled checkbox state. Use `onCheckedChange` to apply requested changes;\nomit to use `defaultChecked` and internal state.",name:`checked`,required:!1,tags:{},type:{name:`enum`,raw:`TriStateCheckboxState`,value:[{value:`"true"`},{value:`"false"`},{value:`"mixed"`}]}},defaultChecked:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:'Initial state when `checked` is omitted. Defaults to `"false"`.',name:`defaultChecked`,required:!1,tags:{},type:{name:`enum`,raw:`TriStateCheckboxState`,value:[{value:`"true"`},{value:`"false"`},{value:`"mixed"`}]}},onCheckedChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:`Called with the next state after the checkbox is activated.`,name:`onCheckedChange`,required:!1,tags:{},type:{name:`((checked: TriStateCheckboxState) => void)`}},values:{defaultValue:null,declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:"All values controlled by this checkbox. Pair with `checkedValues` and\n`onCheckedValuesChange` to manage a group of choices.",name:`values`,required:!1,tags:{},type:{name:`readonly string[]`}},checkedValues:{defaultValue:null,declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:"Selected values in the controlled group. With `values`, this determines\nwhether the checkbox is unchecked, mixed, or checked.",name:`checkedValues`,required:!1,tags:{},type:{name:`readonly string[]`}},onCheckedValuesChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:`Called with the next group selection after the checkbox is activated.`,name:`onCheckedValuesChange`,required:!1,tags:{},type:{name:`((checkedValues: string[]) => void)`}},skipMixed:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:`Cycles directly between unchecked and checked in standalone mode.`,name:`skipMixed`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`regular`},declarations:[{fileName:`evo-react/src/tri-state-checkbox/types.ts`,name:`TypeLiteral`}],description:'Selects regular or large checkbox icons. Defaults to `"regular"`.',name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`TriStateCheckboxSize`,value:[{value:`"large"`},{value:`"regular"`}]}}},tags:{summary:`Three-state checkbox for grouped selections.`}}}catch{}})))()}var O,k,A,j,M,N;function P(){return(P=t((()=>{O=n(),g(),D(),s(),k=r(),A={title:`Form Input/EvoTriStateCheckbox`,component:C,argTypes:{checked:{control:`select`,options:[`false`,`mixed`,`true`]},defaultChecked:{control:`select`,options:[`false`,`mixed`,`true`]},size:{control:`select`,options:[`regular`,`large`]},values:{control:!1},checkedValues:{control:!1}},args:{defaultChecked:`false`,size:`regular`}},j={render:e=>(0,k.jsxs)(`span`,{className:`field`,children:[(0,k.jsx)(C,{...e,id:`select-inventory`}),(0,k.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`select-inventory`,children:`Select inventory`})]})},M={render:e=>{let t=[`Camera`,`Lens`,`Tripod`];function n(){let[n,r]=(0,O.useState)([`Camera`]);return(0,k.jsxs)(`fieldset`,{children:[(0,k.jsx)(`legend`,{children:`Inventory to include`}),(0,k.jsxs)(`span`,{className:`field`,children:[(0,k.jsx)(C,{...e,id:`select-all-inventory`,values:t,checkedValues:n,onCheckedValuesChange:r}),(0,k.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`select-all-inventory`,children:`Select all inventory`})]}),t.map(e=>(0,k.jsxs)(`span`,{className:`field`,children:[(0,k.jsx)(v,{id:`inventory-${e.toLowerCase()}`,checked:n.includes(e),onChange:t=>{r(t.currentTarget.checked?[...n,e]:n.filter(t=>t!==e))}}),(0,k.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`inventory-${e.toLowerCase()}`,children:e})]},e))]})}return(0,k.jsx)(n,{})}},N=[`Default`,`WithGroup`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <EvoTriStateCheckbox {...args} id="select-inventory" />
      <label className="field__label field__label--end" htmlFor="select-inventory">
        Select inventory
      </label>
    </span>
}`,...j.parameters?.docs?.source},description:{story:`Each activation moves through unchecked, mixed, and checked.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const items = ["Camera", "Lens", "Tripod"];
    function InventoryGroup() {
      const [selected, setSelected] = useState(["Camera"]);
      return <fieldset>
          <legend>Inventory to include</legend>
          <span className="field">
            <EvoTriStateCheckbox {...args} id="select-all-inventory" values={items} checkedValues={selected} onCheckedValuesChange={setSelected} />
            <label className="field__label field__label--end" htmlFor="select-all-inventory">
              Select all inventory
            </label>
          </span>
          {items.map(item => <span className="field" key={item}>
              <EvoCheckbox id={\`inventory-\${item.toLowerCase()}\`} checked={selected.includes(item)} onChange={event => {
            setSelected(event.currentTarget.checked ? [...selected, item] : selected.filter(value => value !== item));
          }} />
              <label className="field__label field__label--end" htmlFor={\`inventory-\${item.toLowerCase()}\`}>
                {item}
              </label>
            </span>)}
        </fieldset>;
    }
    return <InventoryGroup />;
  }
}`,...M.parameters?.docs?.source},description:{story:`The parent checkbox summarizes and updates a group of choices.`,...M.parameters?.docs?.description}}}})))()}P();export{j as Default,M as WithGroup,N as __namedExportsOrder,A as default};