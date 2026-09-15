import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./details-content-IkenoWM_.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./pencil-24-DoQ0eAlv.js";function x(){let e=(0,C.use)(T);if(!e)throw Error(`EvoAccordionItem must be used within an EvoAccordion component`);return e}function S({open:e,isControlled:t,onItemToggle:n,children:r}){let i=(0,C.useMemo)(()=>({open:e,isControlled:t,onItemToggle:n}),[e,t,n]);return(0,w.jsx)(T,{value:i,children:r})}var C,w,T;function E(){return(E=t((()=>{C=n(),w=r(),T=(0,C.createContext)(void 0);try{S.displayName=`AccordionProvider`,S.__docgenInfo={description:``,displayName:`AccordionProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/context.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/context.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!0,tags:{},type:{name:`OpenValue`}},isControlled:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/context.tsx`,name:`TypeLiteral`}],description:``,name:`isControlled`,required:!0,tags:{},type:{name:`boolean`}},onItemToggle:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/context.tsx`,name:`TypeLiteral`}],description:``,name:`onItemToggle`,required:!0,tags:{},type:{name:`(id: string, open: boolean) => void`}}},tags:{}}}catch{}try{T.displayName=`AccordionContext`,T.__docgenInfo={description:``,displayName:`AccordionContext`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/context.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function D(){return(D=t((()=>{})))()}function O(e,t,n){return Array.isArray(e)?n?e.includes(t)?e:[...e,t]:e.includes(t)?e.filter(e=>e!==t):e:n?t:e===t?void 0:e}function k(e){let{size:t,a11yText:n=`accordion`,open:r,defaultOpen:i,onOpenChange:a,className:o,children:s,...c}=e,[l,u]=(0,j.useState)(i),[d,f]=(0,j.useState)(!1),p=`open`in e,m=p?r:l,h=(0,j.useCallback)((e,t)=>{let n=O(m,e,t);n!==m&&(f(!0),p||u(n),a?.(n))},[m,p,a]);return(0,M.jsx)(S,{open:m,isControlled:p,onItemToggle:h,children:(0,M.jsx)(`ul`,{...c,"aria-roledescription":n,className:(0,A.default)(`accordion`,t===`large`&&`accordion--large`,d&&`accordion--animated`,o),children:s})})}var A,j,M;function N(){return(N=t((()=>{A=e(i(),1),j=n(),E(),D(),M=r();try{k.displayName=`EvoAccordion`,k.__docgenInfo={description:``,displayName:`EvoAccordion`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/accordion.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:`Size of the accordion.`,name:`size`,required:!1,tags:{},type:{name:`Size | undefined`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:'Localized role description announced to a11y users. English default to be overridden is `"accordion"`.',name:`a11yText`,required:!1,tags:{},type:{name:`string | undefined`}},open:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:`Controlled id or ids of the open items. Use a string for single-open mode or a string array for multi-open mode.`,name:`open`,required:!1,tags:{},type:{name:`MultipleOpenValue | undefined`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:`Initial uncontrolled id or ids of the open items. Use an empty string array for uncontrolled multi-open mode.`,name:`defaultOpen`,required:!1,tags:{},type:{name:`MultipleOpenValue | undefined`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:`Fired when the open item id or ids change.`,name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: MultipleOpenValue) => void) | undefined`}}},tags:{}}}catch{}})))()}function P({id:e,children:t,onOpenChange:n,...r}){let{open:i,isControlled:a,onItemToggle:o}=x(),s=Array.isArray(i)?i.includes(e):i===e;return(0,F.jsx)(`li`,{children:(0,F.jsx)(c,{...r,open:s,onToggle:(t,r)=>{o(e,r.open),n?.(r.open),a&&t.currentTarget.open!==s&&(t.currentTarget.open=s)},children:t})})}var F;function I(){return(I=t((()=>{m(),E(),F=r();try{P.displayName=`EvoAccordionItem`,P.__docgenInfo={description:``,displayName:`EvoAccordionItem`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/accordion-item.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:``,name:`id`,required:!0,tags:{},type:{name:`string`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:``,name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void) | undefined`}}},tags:{}}}catch{}})))()}var L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{L=n(),N(),I(),l(),s(),u(),o(),v(),g(),_(),R=r(),z=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,B={title:`navigation & disclosure/evo-accordion`,component:k,subcomponents:{EvoAccordionItem:P,EvoAccordionSummary:f,EvoAccordionLeading:a,EvoAccordionLabel:d,EvoAccordionContent:p},tags:[`autodocs`],parameters:{docs:{description:{component:`
A grouped disclosure component that coordinates open items by id.

## Usage

\`\`\`tsx
import {
  EvoAccordion,
  EvoAccordionItem,
  EvoAccordionSummary,
  EvoAccordionLabel,
  EvoAccordionContent,
} from "@evo-web/react/accordion";
\`\`\`
        `}}},argTypes:{size:{control:`select`,options:[`regular`,`large`],table:{defaultValue:{summary:`regular`}}},a11yText:{type:{name:`string`,required:!0},control:`text`,table:{defaultValue:{summary:`accordion`}}},open:{control:`object`,table:{type:{summary:`string | string[]`}}},defaultOpen:{control:`object`,table:{type:{summary:`string | string[]`}}},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}}},args:{size:`regular`,a11yText:`accordion`},render(e){return(0,R.jsxs)(k,{...e,children:[(0,R.jsxs)(P,{id:`one`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Shipping and returns`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`two`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Description`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`three`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Specifications`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]})]})}},V={},H={render(e){return(0,R.jsxs)(k,{size:e.size,a11yText:e.a11yText,defaultOpen:[],children:[(0,R.jsxs)(P,{id:`one`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Shipping and returns`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`two`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Description`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`three`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Specifications`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]})]})}},U={args:{open:`0`},render(e){let[t,n]=(0,L.useState)(e?.open||``),r=e=>{n(e)};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{children:[`0`,`1`,`2`].map(e=>(0,R.jsxs)(`label`,{children:[(0,R.jsx)(`input`,{type:`radio`,name:`accordion-control`,value:e,checked:t===e,onChange:()=>r(e)}),` `,e]},e))}),(0,R.jsxs)(k,{...e,open:t,onOpenChange:r,a11yText:`Accordion Menu`,children:[(0,R.jsxs)(P,{id:`0`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Shipping and returns`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`1`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Description`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`2`,children:[(0,R.jsx)(f,{children:(0,R.jsx)(d,{children:`Specifications`})}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]})]})]})}},W={render(e){return(0,R.jsxs)(k,{...e,children:[(0,R.jsxs)(P,{id:`lightbulb`,children:[(0,R.jsxs)(f,{children:[(0,R.jsx)(a,{children:(0,R.jsx)(y,{})}),(0,R.jsx)(d,{children:`Shipping and returns`})]}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`pencil`,children:[(0,R.jsxs)(f,{children:[(0,R.jsx)(a,{children:(0,R.jsx)(b,{})}),(0,R.jsx)(d,{children:`Description`})]}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]}),(0,R.jsxs)(P,{id:`graph`,children:[(0,R.jsxs)(f,{children:[(0,R.jsx)(a,{children:(0,R.jsx)(h,{})}),(0,R.jsx)(d,{children:`Specifications`})]}),(0,R.jsx)(p,{children:(0,R.jsx)(`p`,{children:z})})]})]})}},G=[`Default`,`MultipleSelection`,`Controlled`,`WithLeadingIcon`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <EvoAccordion size={args.size} a11yText={args.a11yText} defaultOpen={[]}>
        <EvoAccordionItem id="one">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="two">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="three">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    open: "0"
  },
  render(args: Story["args"]) {
    const [open, setOpen] = useState<string | undefined>(args?.open || "");
    const handleOpenChange = (nextOpen: string | undefined) => {
      setOpen(nextOpen);
    };
    return <>
        <div>
          {["0", "1", "2"].map(id => <label key={id}>
              <input type="radio" name="accordion-control" value={id} checked={open === id} onChange={() => handleOpenChange(id)} />{" "}
              {id}
            </label>)}
        </div>

        <EvoAccordion {...args} open={open} onOpenChange={handleOpenChange} a11yText="Accordion Menu">
          <EvoAccordionItem id="0">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>{LOREM}</p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="1">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Description</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>{LOREM}</p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="2">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Specifications</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>{LOREM}</p>
            </EvoAccordionContent>
          </EvoAccordionItem>
        </EvoAccordion>
      </>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <EvoAccordion {...args}>
        <EvoAccordionItem id="lightbulb">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconLightbulb24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="pencil">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconPencil24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="graph">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconGraph24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>;
  }
}`,...W.parameters?.docs?.source}}}})))()}K();export{U as Controlled,V as Default,H as MultipleSelection,W as WithLeadingIcon,G as __namedExportsOrder,B as default};