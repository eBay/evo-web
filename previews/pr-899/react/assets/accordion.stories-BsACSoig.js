import{r as p,j as n}from"./iframe-Cyzu4zx4.js";import{c as D}from"./index-BQfZW6u4.js";import{E as z,a as i,b as t,c as C,d}from"./details-content-sny5MK8o.js";import{E as N,a as R,b as w}from"./pencil-24-b7pdFqvg.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-16-DjK-AxUF.js";import"./icon-CWDwH7Q0.js";const S=p.createContext(void 0);function P(){const e=p.use(S);if(!e)throw new Error("EvoAccordionItem must be used within an EvoAccordion component");return e}function I({open:e,isControlled:o,onItemToggle:s,children:l}){const r=p.useMemo(()=>({open:e,isControlled:o,onItemToggle:s}),[e,o,s]);return n.jsx(S,{value:r,children:l})}try{I.displayName="AccordionProvider",I.__docgenInfo={description:"",displayName:"AccordionProvider",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"OpenValue"}},isControlled:{defaultValue:null,description:"",name:"isControlled",required:!0,type:{name:"boolean"}},onItemToggle:{defaultValue:null,description:"",name:"onItemToggle",required:!0,type:{name:"(id: string, open: boolean) => void"}}}}}catch{}try{S.displayName="AccordionContext",S.__docgenInfo={description:"",displayName:"AccordionContext",props:{}}}catch{}function U(e,o,s){return Array.isArray(e)?s?e.includes(o)?e:[...e,o]:e.includes(o)?e.filter(l=>l!==o):e:s?o:e===o?void 0:e}function u(e){const{size:o,a11yText:s="accordion",open:l,defaultOpen:r,onOpenChange:m,className:L,children:v,...h}=e,[A,O]=p.useState(r),[_,M]=p.useState(!1),x="open"in e,E=x?l:A,T=p.useCallback((V,q)=>{const g=U(E,V,q);g!==E&&(M(!0),x||O(g),Array.isArray(E),m?.(g))},[E,x,m]);return n.jsx(I,{open:E,isControlled:x,onItemToggle:T,children:n.jsx("ul",{...h,"aria-roledescription":s,className:D("accordion",o==="large"&&"accordion--large",_&&"accordion--animated",L),children:v})})}try{u.displayName="EvoAccordion",u.__docgenInfo={description:"",displayName:"EvoAccordion",props:{size:{defaultValue:null,description:"Size of the accordion.",name:"size",required:!1,type:{name:"Size"}},a11yText:{defaultValue:null,description:'Localized role description announced to a11y users. English default to be overridden is `"accordion"`.',name:"a11yText",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Controlled id or ids of the open items. Use a string for single-open mode or a string array for multi-open mode.",name:"open",required:!1,type:{name:"MultipleOpenValue"}},defaultOpen:{defaultValue:null,description:"Initial uncontrolled id or ids of the open items. Use an empty string array for uncontrolled multi-open mode.",name:"defaultOpen",required:!1,type:{name:"MultipleOpenValue"}},onOpenChange:{defaultValue:null,description:"Fired when the open item id or ids change.",name:"onOpenChange",required:!1,type:{name:"(open: MultipleOpenValue) => void"}}}}}catch{}function c({id:e,children:o,onOpenChange:s,...l}){const{open:r,isControlled:m,onItemToggle:L}=P(),v=Array.isArray(r)?r.includes(e):r===e;return n.jsx("li",{children:n.jsx(z,{...l,open:v,onToggle:(h,A)=>{L(e,A.open),s?.(A.open),m&&h.currentTarget.open!==v&&(h.currentTarget.open=v)},children:o})})}try{c.displayName="EvoAccordionItem",c.__docgenInfo={description:"",displayName:"EvoAccordionItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"(open: boolean) => void"}}}}}catch{}const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",K={title:"navigation & disclosure/evo-accordion",component:u,subcomponents:{EvoAccordionItem:c,EvoAccordionSummary:d,EvoAccordionLeading:C,EvoAccordionLabel:t,EvoAccordionContent:i},tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["regular","large"],table:{defaultValue:{summary:"regular"}}},a11yText:{type:{name:"string",required:!0},control:"text",table:{defaultValue:{summary:"accordion"}}},open:{control:"object",table:{type:{summary:"string | string[]"}}},defaultOpen:{control:"object",table:{type:{summary:"string | string[]"}}},onOpenChange:{action:"onOpenChange",table:{category:"Events"}}},args:{size:"regular",a11yText:"accordion"},render(e){return n.jsxs(u,{...e,children:[n.jsxs(c,{id:"one",children:[n.jsx(d,{children:n.jsx(t,{children:"Shipping and returns"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"two",children:[n.jsx(d,{children:n.jsx(t,{children:"Description"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"three",children:[n.jsx(d,{children:n.jsx(t,{children:"Specifications"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]})]})}},j={},y={render(e){return n.jsxs(u,{size:e.size,a11yText:e.a11yText,defaultOpen:[],children:[n.jsxs(c,{id:"one",children:[n.jsx(d,{children:n.jsx(t,{children:"Shipping and returns"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"two",children:[n.jsx(d,{children:n.jsx(t,{children:"Description"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"three",children:[n.jsx(d,{children:n.jsx(t,{children:"Specifications"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]})]})}},f={args:{open:"0"},render(e){const[o,s]=p.useState(e?.open||""),l=r=>{s(r)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{children:["0","1","2"].map(r=>n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"accordion-control",value:r,checked:o===r,onChange:()=>l(r)})," ",r]},r))}),n.jsxs(u,{...e,open:o,onOpenChange:l,a11yText:"Accordion Menu",children:[n.jsxs(c,{id:"0",children:[n.jsx(d,{children:n.jsx(t,{children:"Shipping and returns"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"1",children:[n.jsx(d,{children:n.jsx(t,{children:"Description"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"2",children:[n.jsx(d,{children:n.jsx(t,{children:"Specifications"})}),n.jsx(i,{children:n.jsx("p",{children:a})})]})]})]})}},b={render(e){return n.jsxs(u,{...e,children:[n.jsxs(c,{id:"lightbulb",children:[n.jsxs(d,{children:[n.jsx(C,{children:n.jsx(N,{})}),n.jsx(t,{children:"Shipping and returns"})]}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"pencil",children:[n.jsxs(d,{children:[n.jsx(C,{children:n.jsx(R,{})}),n.jsx(t,{children:"Description"})]}),n.jsx(i,{children:n.jsx("p",{children:a})})]}),n.jsxs(c,{id:"graph",children:[n.jsxs(d,{children:[n.jsx(C,{children:n.jsx(w,{})}),n.jsx(t,{children:"Specifications"})]}),n.jsx(i,{children:n.jsx("p",{children:a})})]})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"{}",...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Q=["Default","MultipleSelection","Controlled","WithLeadingIcon"];export{f as Controlled,j as Default,y as MultipleSelection,b as WithLeadingIcon,Q as __namedExportsOrder,K as default};
