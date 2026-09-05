import{r as p,j as e}from"./iframe-DjAcWYNC.js";import{c as V}from"./index-C04a5A_d.js";import{d as q,E as i,a as t,b as L,c as a}from"./details-content-CDFwWVKJ.js";import{E as D,a as k,b as z}from"./pencil-24-CwX3s9Zf.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-16-BFMMh2yt.js";import"./icon-OW-XSJJv.js";const C=p.createContext(void 0);function R(){const o=p.use(C);if(!o)throw new Error("EvoAccordionItem must be used within an EvoAccordion component");return o}function I({open:o,isControlled:n,onItemToggle:s,children:l}){const r=p.useMemo(()=>({open:o,isControlled:n,onItemToggle:s}),[o,n,s]);return e.jsx(C,{value:r,children:l})}try{I.displayName="AccordionProvider",I.__docgenInfo={description:"",displayName:"AccordionProvider",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/context.tsx",methods:[],props:{open:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/context.tsx",name:"TypeLiteral"}],description:"",name:"open",required:!0,tags:{},type:{name:"OpenValue"}},isControlled:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/context.tsx",name:"TypeLiteral"}],description:"",name:"isControlled",required:!0,tags:{},type:{name:"boolean"}},onItemToggle:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/context.tsx",name:"TypeLiteral"}],description:"",name:"onItemToggle",required:!0,tags:{},type:{name:"(id: string, open: boolean) => void"}}},tags:{}}}catch{}try{C.displayName="AccordionContext",C.__docgenInfo={description:"",displayName:"AccordionContext",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/context.tsx",methods:[],props:{},tags:{}}}catch{}function P(o,n,s){return Array.isArray(o)?s?o.includes(n)?o:[...o,n]:o.includes(n)?o.filter(l=>l!==n):o:s?n:o===n?void 0:o}function m(o){const{size:n,a11yText:s="accordion",open:l,defaultOpen:r,onOpenChange:u,className:S,children:v,...E}=o,[x,O]=p.useState(r),[_,T]=p.useState(!1),g="open"in o,h=g?l:x,N=p.useCallback((w,M)=>{const A=P(h,w,M);A!==h&&(T(!0),g||O(A),Array.isArray(h),u?.(A))},[h,g,u]);return e.jsx(I,{open:h,isControlled:g,onItemToggle:N,children:e.jsx("ul",{...E,"aria-roledescription":s,className:V("accordion",n==="large"&&"accordion--large",_&&"accordion--animated",S),children:v})})}try{m.displayName="EvoAccordion",m.__docgenInfo={description:"",displayName:"EvoAccordion",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/accordion.tsx",methods:[],props:{size:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/types.ts",name:"TypeLiteral"}],description:"Size of the accordion.",name:"size",required:!1,tags:{},type:{name:"Size"}},a11yText:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/types.ts",name:"TypeLiteral"}],description:'Localized role description announced to a11y users. English default to be overridden is `"accordion"`.',name:"a11yText",required:!1,tags:{},type:{name:"string"}},open:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/types.ts",name:"TypeLiteral"}],description:"Controlled id or ids of the open items. Use a string for single-open mode or a string array for multi-open mode.",name:"open",required:!1,tags:{},type:{name:"MultipleOpenValue"}},defaultOpen:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/types.ts",name:"TypeLiteral"}],description:"Initial uncontrolled id or ids of the open items. Use an empty string array for uncontrolled multi-open mode.",name:"defaultOpen",required:!1,tags:{},type:{name:"MultipleOpenValue"}},onOpenChange:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/types.ts",name:"TypeLiteral"}],description:"Fired when the open item id or ids change.",name:"onOpenChange",required:!1,tags:{},type:{name:"(open: MultipleOpenValue) => void"}}},tags:{}}}catch{}function c({id:o,children:n,onOpenChange:s,...l}){const{open:r,isControlled:u,onItemToggle:S}=R(),v=Array.isArray(r)?r.includes(o):r===o;return e.jsx("li",{children:e.jsx(q,{...l,open:v,onToggle:(E,x)=>{S(o,x.open),s?.(x.open),u&&E.currentTarget.open!==v&&(E.currentTarget.open=v)},children:n})})}try{c.displayName="EvoAccordionItem",c.__docgenInfo={description:"",displayName:"EvoAccordionItem",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/accordion-item.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/types.ts",name:"TypeLiteral"}],description:"",name:"id",required:!0,tags:{},type:{name:"string"}},onOpenChange:{defaultValue:null,declarations:[{fileName:"evo-react/src/accordion/types.ts",name:"TypeLiteral"}],description:"",name:"onOpenChange",required:!1,tags:{},type:{name:"(open: boolean) => void"}}},tags:{}}}catch{}const d="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",K={title:"navigation & disclosure/evo-accordion",component:m,subcomponents:{EvoAccordionItem:c,EvoAccordionSummary:a,EvoAccordionLeading:L,EvoAccordionLabel:t,EvoAccordionContent:i},tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["regular","large"],table:{defaultValue:{summary:"regular"}}},a11yText:{type:{name:"string",required:!0},control:"text",table:{defaultValue:{summary:"accordion"}}},open:{control:"object",table:{type:{summary:"string | string[]"}}},defaultOpen:{control:"object",table:{type:{summary:"string | string[]"}}},onOpenChange:{action:"onOpenChange",table:{category:"Events"}}},args:{size:"regular",a11yText:"accordion"},render(o){return e.jsxs(m,{...o,children:[e.jsxs(c,{id:"one",children:[e.jsx(a,{children:e.jsx(t,{children:"Shipping and returns"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"two",children:[e.jsx(a,{children:e.jsx(t,{children:"Description"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"three",children:[e.jsx(a,{children:e.jsx(t,{children:"Specifications"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]})]})}},y={},j={render(o){return e.jsxs(m,{size:o.size,a11yText:o.a11yText,defaultOpen:[],children:[e.jsxs(c,{id:"one",children:[e.jsx(a,{children:e.jsx(t,{children:"Shipping and returns"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"two",children:[e.jsx(a,{children:e.jsx(t,{children:"Description"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"three",children:[e.jsx(a,{children:e.jsx(t,{children:"Specifications"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]})]})}},f={args:{open:"0"},render(o){const[n,s]=p.useState(o?.open||""),l=r=>{s(r)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:["0","1","2"].map(r=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"accordion-control",value:r,checked:n===r,onChange:()=>l(r)})," ",r]},r))}),e.jsxs(m,{...o,open:n,onOpenChange:l,a11yText:"Accordion Menu",children:[e.jsxs(c,{id:"0",children:[e.jsx(a,{children:e.jsx(t,{children:"Shipping and returns"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"1",children:[e.jsx(a,{children:e.jsx(t,{children:"Description"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"2",children:[e.jsx(a,{children:e.jsx(t,{children:"Specifications"})}),e.jsx(i,{children:e.jsx("p",{children:d})})]})]})]})}},b={render(o){return e.jsxs(m,{...o,children:[e.jsxs(c,{id:"lightbulb",children:[e.jsxs(a,{children:[e.jsx(L,{children:e.jsx(D,{})}),e.jsx(t,{children:"Shipping and returns"})]}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"pencil",children:[e.jsxs(a,{children:[e.jsx(L,{children:e.jsx(k,{})}),e.jsx(t,{children:"Description"})]}),e.jsx(i,{children:e.jsx("p",{children:d})})]}),e.jsxs(c,{id:"graph",children:[e.jsxs(a,{children:[e.jsx(L,{children:e.jsx(z,{})}),e.jsx(t,{children:"Specifications"})]}),e.jsx(i,{children:e.jsx("p",{children:d})})]})]})}},Q=["Default","MultipleSelection","Controlled","WithLeadingIcon"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"{}",...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};export{f as Controlled,y as Default,j as MultipleSelection,b as WithLeadingIcon,Q as __namedExportsOrder,K as default};
