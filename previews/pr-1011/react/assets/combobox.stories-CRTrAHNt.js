import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./use-ref-tee-D2-WpPlp.js";import{n as s,t as c}from"./button-DPLRoO2z.js";import{n as l,t as u}from"./icon-button-DE-W2DMa.js";import{n as d,t as f}from"./use-floating-label-DAZePmyn.js";import{n as p,t as m}from"./clear-16-BJ0k9HhJ.js";import{n as ee,t as h}from"./use-expander-D8QIC7SU.js";function g(e,t){let n=e.ref.current,r=t.ref.current;return!n||!r||n===r?0:n.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}function te({containerRef:e,scrollIntoView:t,shouldWrap:n=!0}){let r=(0,v.useRef)(new Map),[i,a]=(0,v.useState)(null),o=(0,v.useRef)(null);o.current=i;let s=(0,v.useCallback)(()=>{let t=e.current;return[...r.current.values()].filter(({ref:e})=>{let n=e.current;return!!(n&&t?.contains(n))}).sort(g)},[e]),c=(0,v.useCallback)(()=>{let e=o.current;if(e!==null)return s().find(t=>t.key===e)},[s]),l=(0,v.useCallback)(e=>{if(e===null){o.current=null,a(null);return}let n=r.current.get(e);n&&n.ref.current&&(o.current=e,a(e),t&&n.ref.current.scrollIntoView?.(t))},[t]),u=(0,v.useCallback)(()=>{l(null)},[l]),d=(0,v.useCallback)(e=>{let t=e.key;return r.current.set(t,e),()=>{r.current.get(t)===e&&(r.current.delete(t),o.current===t&&l(null))}},[l]),f=(0,v.useCallback)(e=>{let t=s();if(t.length===0)return;let r=t.findIndex(({key:e})=>e===o.current),i;if(r===-1)i=e===1?0:t.length-1;else{let a=r+e;i=a<0||a>=t.length?n?null:r:a}if(i===null){l(null);return}let a=t[i];return l(a.key),a},[l,s,n]),p=(0,v.useCallback)(()=>f(1),[f]),m=(0,v.useCallback)(()=>f(-1),[f]);return(0,v.useMemo)(()=>({activeKey:i,registerItem:d,getActiveItem:c,activateNext:p,activatePrevious:m,reset:u}),[i,p,m,c,d,u])}function _({activeDescendant:e,item:t,enabled:n=!0}){let r=(0,v.useRef)(t);return r.current.key=t.key,r.current.id=t.id,r.current.ref=t.ref,r.current.data=t.data,(0,v.useLayoutEffect)(()=>{if(n)return e.registerItem(r.current)},[e.registerItem,n]),{isActive:n&&e.activeKey===t.key}}var v;function y(){return(y=t((()=>{v=n()})))()}function b(){let e=(0,S.use)(w);if(!e)throw Error(`EvoComboboxOption must be used within an EvoCombobox component`);return e}function x({activeDescendant:e,filterMethod:t,displayedValue:n,filterValue:r,disabled:i,selectOption:a,children:o}){let s=(0,S.useMemo)(()=>({activeDescendant:e,filterMethod:t,displayedValue:n,filterValue:r,disabled:i,selectOption:a}),[e,t,i,n,r,a]);return(0,C.jsx)(w,{value:s,children:o})}var S,C,w;function T(){return(T=t((()=>{S=n(),C=r(),w=(0,S.createContext)(void 0);try{x.displayName=`ComboboxProvider`,x.__docgenInfo={description:``,displayName:`ComboboxProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/combobox/context.tsx`,methods:[],props:{activeDescendant:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/context.tsx`,name:`TypeLiteral`}],description:``,name:`activeDescendant`,required:!0,tags:{},type:{name:`ActiveDescendant<string, string>`}},filterMethod:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/context.tsx`,name:`TypeLiteral`}],description:``,name:`filterMethod`,required:!0,tags:{},type:{name:`enum`,raw:`ComboboxFilterMethod`,value:[{value:`"none"`},{value:`"auto"`},{value:`"manual"`}]}},displayedValue:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/context.tsx`,name:`TypeLiteral`}],description:``,name:`displayedValue`,required:!0,tags:{},type:{name:`string`}},filterValue:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/context.tsx`,name:`TypeLiteral`}],description:``,name:`filterValue`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/context.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},selectOption:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/context.tsx`,name:`TypeLiteral`}],description:``,name:`selectOption`,required:!0,tags:{},type:{name:`(text: string) => void`}}},tags:{}}}catch{}})))()}function E(){return(E=t((()=>{})))()}function D({filterMethod:e=`auto`,borderless:t=!1,children:n,className:r,defaultOpen:i=!1,defaultValue:o=``,disabled:s,floatingLabel:c,fluid:l=!1,id:f,listSelection:p=`automatic`,onBlur:m,onChange:h,onClick:g,onFocus:_,onKeyDown:v,onOpenChange:y,onValueChange:b,open:S,placeholder:C,postfix:w,ref:T,strategy:E=`absolute`,style:D,value:j,...re}){let M=(0,O.useId)(),N=f??M,P=`${N}-listbox`,F=j!==void 0,[I,L]=(0,O.useState)(o),[R,z]=(0,O.useState)(null),[ie,B]=(0,O.useState)(!1),V=F?j:I,H=ee({defaultOpen:i,offset:4,onOpenChange:y,open:S,placement:`bottom-start`,resetOnDisabled:!!s,strategy:E}),U=!s&&H.open,[W,G]=a(H.refs.setFloating,null),[ae]=a(T,null),K=te({containerRef:G,scrollIntoView:ne,shouldWrap:!0}),oe=U?K.getActiveItem():void 0,q=R!==null&&p===`automatic`&&R.origin===V&&R.key===oe?.key;R!==null&&!q&&z(null);let J=q?R.value:V,Y=q?R.value:null;(0,O.useEffect)(()=>{s&&K.reset()},[K.reset,s]);let X=d({containerTagName:l?`div`:`span`,disabled:s,focused:ie||U,text:c,value:J}),se=(0,O.useCallback)(e=>{H.refs.setReference(e),ae(e)},[H.refs.setReference,ae]),Z=(0,O.useCallback)(e=>{s&&e||e!==H.open&&H.setOpen(e)},[s,H.open,H.setOpen]),Q=(0,O.useCallback)(e=>{z(null),F||L(e),e!==V&&b?.(e)},[V,F,b]),ce=(0,O.useCallback)(e=>{s||(Q(e),K.reset(),Z(!1))},[K.reset,s,Z,Q]),le=(0,O.useCallback)(e=>{e.currentTarget.contains(e.relatedTarget)||(B(!1),Z(!1),K.reset(),Y!==null&&Q(Y))},[K.reset,Y,Z,Q]),ue=(0,O.useCallback)(e=>{s||(K.reset(),Q(e.currentTarget.value),Z(!0),h?.(e))},[K.reset,s,h,Z,Q]),de=(0,O.useCallback)(e=>{s||(B(!0),Z(!0),_?.(e))},[s,_,Z]),fe=(0,O.useCallback)(e=>{m?.(e)},[m]),pe=(0,O.useCallback)(e=>{s||(Z(!0),g?.(e))},[s,g,Z]),me=(0,O.useCallback)(e=>{if(!s){if(e.key===`ArrowDown`||e.key===`ArrowUp`){if(e.preventDefault(),!U)Z(!0);else{let t=e.key===`ArrowDown`?K.activateNext():K.activatePrevious();p===`automatic`&&z(t?{key:t.key,origin:V,value:t.data}:null)}}else if(e.key===`Enter`&&U){let t=K.getActiveItem();t?(e.preventDefault(),ce(t.data)):Z(!1)}else e.key===`Escape`&&(z(null),K.reset(),Z(!1));v?.(e)}},[K.activateNext,K.activatePrevious,K.getActiveItem,K.reset,V,s,U,p,v,Z,ce]),he=l?`div`:`span`,$=w?.buttonProps,ge=$?.onMouseDown,_e=$?.onClick,ve=(0,O.useCallback)(e=>{s||(z(null),K.reset(),_e?.(e))},[K.reset,s,_e]),ye=(0,O.useCallback)(e=>{e.preventDefault(),s||ge?.(e)},[s,ge]);return(0,A.jsx)(x,{activeDescendant:K,filterMethod:e,displayedValue:J,filterValue:V,disabled:s,selectOption:ce,children:(0,A.jsxs)(X.Container,{...X.containerProps,children:[(0,A.jsx)(X.Label,{...X.labelProps,htmlFor:N}),(0,A.jsxs)(he,{className:(0,k.default)(`combobox`,l&&`combobox--fluid`,U&&`combobox--expanded`,r),style:D,onBlurCapture:le,children:[(0,A.jsxs)(`span`,{className:(0,k.default)(`combobox__control`,{"combobox__control--actionable":!!$,"combobox__control--borderless":t}),children:[(0,A.jsx)(`input`,{...re,id:N,ref:se,type:`text`,role:`combobox`,disabled:s,value:J,placeholder:X.showPlaceholder?C:void 0,autoComplete:`off`,"aria-autocomplete":e===`none`?`none`:`list`,"aria-haspopup":`listbox`,"aria-expanded":U,"aria-owns":P,"aria-controls":P,"aria-activedescendant":oe?.id,onBlur:fe,onChange:ue,onClick:pe,onFocus:de,onKeyDown:me}),w&&($?(0,A.jsx)(u,{...$,disabled:s||$.disabled,transparent:!0,onClick:ve,onMouseDown:ye,children:w.icon}):w.icon)]}),(0,A.jsx)(`div`,{id:P,ref:W,role:`listbox`,className:(0,k.default)(`combobox__listbox`,`combobox__listbox--set-position`,E===`fixed`&&`combobox__listbox--fixed`),style:H.floatingStyles,children:n})]})]})})}var O,k,A,ne;function j(){return(j=t((()=>{O=n(),k=e(i(),1),l(),y(),h(),f(),o(),T(),E(),A=r(),ne={block:`nearest`};try{D.displayName=`EvoCombobox`,D.__docgenInfo={description:`A combobox combines a text input with a list of suggested values.

Users can filter and select one option with pointer or keyboard interaction.
\`filterMethod="auto"\` filters supplied options, \`filterMethod="manual"\`
leaves filtering to the application, and \`filterMethod="none"\` displays
options independently of the input. \`value\` with \`onValueChange\` supports
controlled usage, while \`defaultValue\` supports uncontrolled usage.

## Usage

\`\`\`tsx
import {
  EvoCombobox,
  EvoComboboxOption,
} from "@evo-web/react/combobox";

<EvoCombobox
  floatingLabel="Advertising campaign"
  placeholder="Choose a campaign"
>
  <EvoComboboxOption text="Back-to-school promotion" />
  <EvoComboboxOption text="Fourth of July sale (paused)" />
  <EvoComboboxOption text="Store subscriber coupon" />
</EvoCombobox>;
\`\`\``,displayName:`EvoCombobox`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/combobox/combobox.tsx`,methods:[],props:{filterMethod:{defaultValue:{value:`auto`},declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:'Controls who filters the supplied options. Defaults to `"auto"`.\n`"manual"` leaves filtering to the application, while `"none"` treats\noptions as independent of the input value.',name:`filterMethod`,required:!1,tags:{},type:{name:`enum`,raw:`ComboboxFilterMethod`,value:[{value:`"none"`},{value:`"auto"`},{value:`"manual"`}]}},borderless:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Removes the input border.`,name:`borderless`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:"`EvoComboboxOption` children rendered in the component's listbox.",name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Class name applied to the combobox wrapper.`,name:`className`,required:!1,tags:{},type:{name:`string`}},defaultOpen:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:"Initial open state for uncontrolled usage. Ignored when `open` is provided.",name:`defaultOpen`,required:!1,tags:{},type:{name:`boolean`}},defaultValue:{defaultValue:{value:``},declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:"Initial input value for uncontrolled usage. Ignored when `value` is provided.",name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},floatingLabel:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Floating label text shown above the input when focused or filled.`,name:`floatingLabel`,required:!1,tags:{},type:{name:`string`}},fluid:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Stretches the component to fill its container.`,name:`fluid`,required:!1,tags:{},type:{name:`boolean`}},listSelection:{defaultValue:{value:`automatic`},declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:'Whether arrow-key navigation previews the highlighted option text in the\ninput. Defaults to `"automatic"`.',name:`listSelection`,required:!1,tags:{},type:{name:`enum`,raw:`ComboboxListSelection`,value:[{value:`"manual"`},{value:`"automatic"`}]}},onValueChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Called with the displayed input value after typing or option selection.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Called when the listbox requests to open or close.`,name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void)`}},open:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:"Controlled listbox visibility. Manage changes with `onOpenChange`.",name:`open`,required:!1,tags:{},type:{name:`boolean`}},postfix:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Optional icon or icon button rendered after the input.`,name:`postfix`,required:!1,tags:{},type:{name:`EvoComboboxPostfixProps`}},strategy:{defaultValue:{value:`absolute`},declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:'Listbox positioning strategy. Defaults to `"absolute"`.',name:`strategy`,required:!1,tags:{},type:{name:`enum`,raw:`Strategy`,value:[{value:`"absolute"`},{value:`"fixed"`}]}},style:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Style applied to the combobox wrapper.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}},value:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Controlled displayed input value.`,name:`value`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Filterable single-selection text input.`}}}catch{}})))()}function re(e,t){return e.toLowerCase().includes(t.trim().toLowerCase())}function M({className:e,onClick:t,onKeyDown:n,onMouseDown:r,ref:i,text:o,...s}){let c=(0,N.useId)(),{activeDescendant:l,filterMethod:u,displayedValue:d,filterValue:f,selectOption:p,disabled:m}=b(),[ee,h]=a(i,null),g=u===`auto`&&!re(o,f),{isActive:te}=_({activeDescendant:l,enabled:!g,item:{key:c,id:c,ref:h,data:o}});return g?null:(0,F.jsx)(`div`,{...s,id:c,ref:ee,role:`option`,tabIndex:-1,"aria-selected":o===d,className:(0,P.default)(`combobox__option`,te&&`combobox__option--active`,e),onMouseDown:e=>{e.preventDefault(),m||r?.(e)},onClick:e=>{m||(t?.(e),e.defaultPrevented||p(o))},onKeyDown:e=>{m||(n?.(e),!e.defaultPrevented&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),p(o)))},children:o})}var N,P,F;function I(){return(I=t((()=>{N=n(),P=e(i(),1),y(),o(),T(),F=r();try{M.displayName=`EvoComboboxOption`,M.__docgenInfo={description:"Represents a selectable value within `EvoCombobox`.\n\n`text` is displayed in the listbox and written into the input when\nselected. This component must be nested in `EvoCombobox`.",displayName:`EvoComboboxOption`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/combobox/combobox-option.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`evo-react/src/combobox/types.ts`,name:`TypeLiteral`}],description:`Display text shown by the option and written into the input when selected.`,name:`text`,required:!0,tags:{},type:{name:`string`}}},tags:{summary:"Selectable option in an `EvoCombobox`."}}}catch{}})))()}var L,R,z,ie,B,V,H,U,W;function G(){return(G=t((()=>{L=n(),s(),p(),j(),I(),R=r(),{useArgs:z}=__STORYBOOK_MODULE_PREVIEW_API__,ie={title:`Form Input/EvoCombobox`,component:D,subcomponents:{EvoComboboxOption:M},argTypes:{filterMethod:{control:`select`,options:[`auto`,`manual`,`none`],table:{defaultValue:{summary:`auto`}}},listSelection:{control:`select`,options:[`automatic`,`manual`],table:{defaultValue:{summary:`automatic`}}},strategy:{control:`select`,options:[`absolute`,`fixed`],table:{defaultValue:{summary:`absolute`}}},borderless:{control:`boolean`,table:{defaultValue:{summary:`false`}}},defaultOpen:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`},floatingLabel:{control:`text`},fluid:{control:`boolean`,table:{defaultValue:{summary:`false`}}},open:{control:`boolean`},postfix:{control:!1},onValueChange:{action:`valueChange`,table:{category:`Events`}},onOpenChange:{action:`openChange`,table:{category:`Events`}}},args:{floatingLabel:`Advertising campaign`,filterMethod:`auto`,listSelection:`automatic`,placeholder:`Choose a campaign`}},B={render:e=>(0,R.jsxs)(D,{...e,children:[(0,R.jsx)(M,{text:`Back-to-school promotion`}),(0,R.jsx)(M,{text:`Fourth of July sale (paused)`}),(0,R.jsx)(M,{text:`Store subscriber coupon`})]})},V={args:{value:`Back-to-school promotion`},render:()=>{let[e,t]=z(),n=e=>t({value:e}),r=t=>{e.onValueChange?.(t),n(t)};return(0,R.jsxs)(`div`,{style:{alignItems:`flex-start`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,R.jsxs)(D,{...e,onValueChange:r,children:[(0,R.jsx)(M,{text:`Back-to-school promotion`}),(0,R.jsx)(M,{text:`Fourth of July sale (paused)`}),(0,R.jsx)(M,{text:`Store subscriber coupon`})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,R.jsx)(c,{type:`button`,onClick:()=>n(`Back-to-school promotion`),children:`Select back-to-school promotion`}),(0,R.jsx)(c,{type:`button`,onClick:()=>n(`Store subscriber coupon`),children:`Select store subscriber coupon`}),(0,R.jsx)(c,{type:`button`,onClick:()=>n(``),children:`Clear campaign`})]})]})}},H={render:e=>{let[t,n]=(0,L.useState)(``),r=[{text:`New York`,aliases:[`nyc`]},{text:`London`,aliases:[`ldn`]},{text:`Tokyo`,aliases:[`tyo`]}],i=t.trim().toLowerCase(),a=r.filter(({text:e,aliases:t})=>!i||[e,...t].some(e=>e.toLowerCase().includes(i)));return(0,R.jsx)(D,{...e,floatingLabel:`Item location`,placeholder:`Search cities`,filterMethod:`manual`,value:t,onValueChange:n,children:a.map(({text:e})=>(0,R.jsx)(M,{text:e},e))})}},U={render:e=>{let[t,n]=(0,L.useState)(`Back-to-school promotion`);return(0,R.jsxs)(D,{...e,value:t,onValueChange:n,postfix:{icon:(0,R.jsx)(m,{}),buttonProps:{a11yText:`Clear campaign`,onClick:()=>n(``)}},children:[(0,R.jsx)(M,{text:`Back-to-school promotion`}),(0,R.jsx)(M,{text:`Fourth of July sale (paused)`}),(0,R.jsx)(M,{text:`Store subscriber coupon`})]})}},W=[`Default`,`Controlled`,`ManualFiltering`,`Postfix`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <EvoCombobox {...args}>
      <EvoComboboxOption text="Back-to-school promotion" />
      <EvoComboboxOption text="Fourth of July sale (paused)" />
      <EvoComboboxOption text="Store subscriber coupon" />
    </EvoCombobox>
}`,...B.parameters?.docs?.source},description:{story:`Filters options automatically as the input value changes.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Back-to-school promotion"
  },
  render: () => {
    const [args, updateArgs] = useArgs<StoryArgs>();
    const setValue = (value: string) => updateArgs({
      value
    });
    const handleValueChange = (nextValue: string) => {
      args.onValueChange?.(nextValue);
      setValue(nextValue);
    };
    return <div style={{
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <EvoCombobox {...args} onValueChange={handleValueChange}>
          <EvoComboboxOption text="Back-to-school promotion" />
          <EvoComboboxOption text="Fourth of July sale (paused)" />
          <EvoComboboxOption text="Store subscriber coupon" />
        </EvoCombobox>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          <EvoButton type="button" onClick={() => setValue("Back-to-school promotion")}>
            Select back-to-school promotion
          </EvoButton>
          <EvoButton type="button" onClick={() => setValue("Store subscriber coupon")}>
            Select store subscriber coupon
          </EvoButton>
          <EvoButton type="button" onClick={() => setValue("")}>
            Clear campaign
          </EvoButton>
        </div>
      </div>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Synchronizes the input value with externally controlled state.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const options = [{
      text: "New York",
      aliases: ["nyc"]
    }, {
      text: "London",
      aliases: ["ldn"]
    }, {
      text: "Tokyo",
      aliases: ["tyo"]
    }];
    const query = value.trim().toLowerCase();
    const visibleOptions = options.filter(({
      text,
      aliases
    }) => !query || [text, ...aliases].some(term => term.toLowerCase().includes(query)));
    return <EvoCombobox {...args} floatingLabel="Item location" placeholder="Search cities" filterMethod="manual" value={value} onValueChange={setValue}>
        {visibleOptions.map(({
        text
      }) => <EvoComboboxOption key={text} text={text} />)}
      </EvoCombobox>;
  }
}`,...H.parameters?.docs?.source},description:{story:`Delegates option filtering to the application while retaining listbox interaction.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Back-to-school promotion");
    return <EvoCombobox {...args} value={value} onValueChange={setValue} postfix={{
      icon: <EvoIconClear16 />,
      buttonProps: {
        a11yText: "Clear campaign",
        onClick: () => setValue("")
      }
    }}>
        <EvoComboboxOption text="Back-to-school promotion" />
        <EvoComboboxOption text="Fourth of July sale (paused)" />
        <EvoComboboxOption text="Store subscriber coupon" />
      </EvoCombobox>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Adds an actionable postfix that clears the current input value.`,...U.parameters?.docs?.description}}}})))()}G();export{V as Controlled,B as Default,H as ManualFiltering,U as Postfix,W as __namedExportsOrder,ie as default};