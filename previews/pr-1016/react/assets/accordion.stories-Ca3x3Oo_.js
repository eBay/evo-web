import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./truck-24-CRWY3D4Z.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./details-content-CdolXhqb.js";function x(){let e=(0,C.use)(T);if(!e)throw Error(`EvoAccordionItem must be used within an EvoAccordion component`);return e}function S({open:e,isControlled:t,a11yHeadingTag:n,onItemToggle:r,children:i}){let a=(0,C.useMemo)(()=>({open:e,isControlled:t,a11yHeadingTag:n,onItemToggle:r}),[e,t,n,r]);return(0,w.jsx)(T,{value:a,children:i})}var C,w,T;function E(){return(E=t((()=>{C=n(),w=r(),T=(0,C.createContext)(void 0);try{S.displayName=`AccordionProvider`,S.__docgenInfo={description:``,displayName:`AccordionProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/context.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/context.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!0,tags:{},type:{name:`OpenValue`}},isControlled:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/context.tsx`,name:`TypeLiteral`}],description:``,name:`isControlled`,required:!0,tags:{},type:{name:`boolean`}},a11yHeadingTag:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/context.tsx`,name:`TypeLiteral`}],description:``,name:`a11yHeadingTag`,required:!0,tags:{},type:{name:`enum`,raw:`keyof HTMLElementTagNameMap | undefined`,value:[{value:`undefined`},{value:`"object"`},{value:`"button"`},{value:`"a"`},{value:`"abbr"`},{value:`"address"`},{value:`"area"`},{value:`"article"`},{value:`"aside"`},{value:`"audio"`},{value:`"b"`},{value:`"base"`},{value:`"bdi"`},{value:`"bdo"`},{value:`"blockquote"`},{value:`"body"`},{value:`"br"`},{value:`"canvas"`},{value:`"caption"`},{value:`"cite"`},{value:`"code"`},{value:`"col"`},{value:`"colgroup"`},{value:`"data"`},{value:`"datalist"`},{value:`"dd"`},{value:`"del"`},{value:`"details"`},{value:`"dfn"`},{value:`"dialog"`},{value:`"div"`},{value:`"dl"`},{value:`"dt"`},{value:`"em"`},{value:`"embed"`},{value:`"fieldset"`},{value:`"figcaption"`},{value:`"figure"`},{value:`"footer"`},{value:`"form"`},{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`},{value:`"head"`},{value:`"header"`},{value:`"hgroup"`},{value:`"hr"`},{value:`"html"`},{value:`"i"`},{value:`"iframe"`},{value:`"img"`},{value:`"input"`},{value:`"ins"`},{value:`"kbd"`},{value:`"label"`},{value:`"legend"`},{value:`"li"`},{value:`"link"`},{value:`"main"`},{value:`"map"`},{value:`"mark"`},{value:`"menu"`},{value:`"meta"`},{value:`"meter"`},{value:`"nav"`},{value:`"noscript"`},{value:`"ol"`},{value:`"optgroup"`},{value:`"option"`},{value:`"output"`},{value:`"p"`},{value:`"picture"`},{value:`"pre"`},{value:`"progress"`},{value:`"q"`},{value:`"rp"`},{value:`"rt"`},{value:`"ruby"`},{value:`"s"`},{value:`"samp"`},{value:`"search"`},{value:`"slot"`},{value:`"script"`},{value:`"section"`},{value:`"select"`},{value:`"small"`},{value:`"source"`},{value:`"span"`},{value:`"strong"`},{value:`"style"`},{value:`"sub"`},{value:`"summary"`},{value:`"sup"`},{value:`"table"`},{value:`"template"`},{value:`"tbody"`},{value:`"td"`},{value:`"textarea"`},{value:`"tfoot"`},{value:`"th"`},{value:`"thead"`},{value:`"time"`},{value:`"title"`},{value:`"tr"`},{value:`"track"`},{value:`"u"`},{value:`"ul"`},{value:`"var"`},{value:`"video"`},{value:`"wbr"`}]}},onItemToggle:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/context.tsx`,name:`TypeLiteral`}],description:``,name:`onItemToggle`,required:!0,tags:{},type:{name:`(id: string, open: boolean) => void`}}},tags:{}}}catch{}try{T.displayName=`AccordionContext`,T.__docgenInfo={description:``,displayName:`AccordionContext`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/context.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function D(){return(D=t((()=>{})))()}function O(e,t,n){return Array.isArray(e)?n?e.includes(t)?e:[...e,t]:e.includes(t)?e.filter(e=>e!==t):e:n?t:e===t?void 0:e}function k(e){let{size:t,a11yText:n=`accordion`,a11yHeadingTag:r=`h4`,open:i,defaultOpen:a,onOpenChange:o,className:s,children:c,...l}=e,[u,d]=(0,j.useState)(a),[f,p]=(0,j.useState)(!1),m=`open`in e,h=m?i:u,g=(0,j.useCallback)((e,t)=>{let n=O(h,e,t);n!==h&&(p(!0),m||d(n),o?.(n))},[h,m,o]);return(0,M.jsx)(S,{open:h,isControlled:m,a11yHeadingTag:r,onItemToggle:g,children:(0,M.jsx)(`ul`,{...l,"aria-roledescription":n,className:(0,A.default)(`accordion`,t===`large`&&`accordion--large`,f&&`accordion--animated`,s),children:c})})}var A,j,M;function N(){return(N=t((()=>{A=e(i(),1),j=n(),E(),D(),M=r();try{k.displayName=`EvoAccordion`,k.__docgenInfo={description:`An accordion is a vertically stacked set of sections that users can expand
or collapse to reveal related content.

A \`string\` \`open\` value keeps one section open, while a \`string[]\` value allows
multiple sections to remain open. Localize the \`a11yText\` value, which
defaults to \`"accordion"\`.

## Usage

\`\`\`tsx
import {
  EvoAccordion,
  EvoAccordionContent,
  EvoAccordionItem,
  EvoAccordionLabel,
  EvoAccordionSummary,
} from "@evo-web/react/accordion";

<EvoAccordion>
  <EvoAccordionItem id="shipping">
    <EvoAccordionSummary>
      <EvoAccordionLabel>Shipping</EvoAccordionLabel>
    </EvoAccordionSummary>
    <EvoAccordionContent>Shipping details.</EvoAccordionContent>
  </EvoAccordionItem>
  <EvoAccordionItem id="returns">
    <EvoAccordionSummary>
      <EvoAccordionLabel>Returns</EvoAccordionLabel>
    </EvoAccordionSummary>
    <EvoAccordionContent>Return details.</EvoAccordionContent>
  </EvoAccordionItem>
</EvoAccordion>
\`\`\``,displayName:`EvoAccordion`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/accordion.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:`Size of the accordion.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`Size`,value:[{value:`"large"`},{value:`"regular"`}]}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:'Localized role description announced to a11y users. English default to be overridden is `"accordion"`.',name:`a11yText`,required:!1,tags:{},type:{name:`string`}},a11yHeadingTag:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:'Heading tag used for each accordion header. Defaults to `"h4"`.',name:`a11yHeadingTag`,required:!1,tags:{},type:{name:`enum`,raw:`keyof HTMLElementTagNameMap`,value:[{value:`"object"`},{value:`"button"`},{value:`"a"`},{value:`"abbr"`},{value:`"address"`},{value:`"area"`},{value:`"article"`},{value:`"aside"`},{value:`"audio"`},{value:`"b"`},{value:`"base"`},{value:`"bdi"`},{value:`"bdo"`},{value:`"blockquote"`},{value:`"body"`},{value:`"br"`},{value:`"canvas"`},{value:`"caption"`},{value:`"cite"`},{value:`"code"`},{value:`"col"`},{value:`"colgroup"`},{value:`"data"`},{value:`"datalist"`},{value:`"dd"`},{value:`"del"`},{value:`"details"`},{value:`"dfn"`},{value:`"dialog"`},{value:`"div"`},{value:`"dl"`},{value:`"dt"`},{value:`"em"`},{value:`"embed"`},{value:`"fieldset"`},{value:`"figcaption"`},{value:`"figure"`},{value:`"footer"`},{value:`"form"`},{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`},{value:`"head"`},{value:`"header"`},{value:`"hgroup"`},{value:`"hr"`},{value:`"html"`},{value:`"i"`},{value:`"iframe"`},{value:`"img"`},{value:`"input"`},{value:`"ins"`},{value:`"kbd"`},{value:`"label"`},{value:`"legend"`},{value:`"li"`},{value:`"link"`},{value:`"main"`},{value:`"map"`},{value:`"mark"`},{value:`"menu"`},{value:`"meta"`},{value:`"meter"`},{value:`"nav"`},{value:`"noscript"`},{value:`"ol"`},{value:`"optgroup"`},{value:`"option"`},{value:`"output"`},{value:`"p"`},{value:`"picture"`},{value:`"pre"`},{value:`"progress"`},{value:`"q"`},{value:`"rp"`},{value:`"rt"`},{value:`"ruby"`},{value:`"s"`},{value:`"samp"`},{value:`"search"`},{value:`"slot"`},{value:`"script"`},{value:`"section"`},{value:`"select"`},{value:`"small"`},{value:`"source"`},{value:`"span"`},{value:`"strong"`},{value:`"style"`},{value:`"sub"`},{value:`"summary"`},{value:`"sup"`},{value:`"table"`},{value:`"template"`},{value:`"tbody"`},{value:`"td"`},{value:`"textarea"`},{value:`"tfoot"`},{value:`"th"`},{value:`"thead"`},{value:`"time"`},{value:`"title"`},{value:`"tr"`},{value:`"track"`},{value:`"u"`},{value:`"ul"`},{value:`"var"`},{value:`"video"`},{value:`"wbr"`}]}},open:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:"Controlled `open` value. Use a `string` for single-open mode or a `string[]` for multi-open mode.",name:`open`,required:!1,tags:{},type:{name:`MultipleOpenValue`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:"Initial uncontrolled `defaultOpen` value. Use an empty `string[]` for uncontrolled multi-open mode.",name:`defaultOpen`,required:!1,tags:{},type:{name:`MultipleOpenValue`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:"Fired when the open item `id` or ids change.",name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: MultipleOpenValue) => void)`}}},tags:{summary:`Expandable group of related sections.`}}}catch{}})))()}function P({id:e,children:t,onOpenChange:n,...r}){let{open:i,isControlled:a,a11yHeadingTag:o,onItemToggle:s}=x(),c=Array.isArray(i)?i.includes(e):i===e;return(0,F.jsx)(`li`,{children:(0,F.jsx)(m,{...r,a11yHeadingTag:o,open:c,onToggle:(t,r)=>{s(e,r.open),n?.(r.open),a&&t.currentTarget.open!==c&&(t.currentTarget.open=c)},children:t})})}var F;function I(){return(I=t((()=>{b(),E(),F=r();try{P.displayName=`EvoAccordionItem`,P.__docgenInfo={description:"An accordion item contains a summary and its associated content. Its `id`\nlets `EvoAccordion` track the item's open state.",displayName:`EvoAccordionItem`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/accordion/accordion-item.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:"Unique `id` used by the parent to track this item's `open` state.",name:`id`,required:!0,tags:{},type:{name:`string`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/accordion/types.ts`,name:`TypeLiteral`}],description:"Called when this item changes `open` state.",name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void)`}}},tags:{summary:`Accordion section.`}}}catch{}})))()}var L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{L=n(),c(),o(),s(),N(),I(),h(),p(),g(),f(),R=r(),z={title:`Navigation & Disclosure/EvoAccordion`,component:k,subcomponents:{EvoAccordionItem:P,EvoAccordionSummary:v,EvoAccordionLeading:d,EvoAccordionLabel:_,EvoAccordionContent:y},argTypes:{size:{control:`select`,options:[`regular`,`large`],table:{defaultValue:{summary:`regular`}}},a11yText:{type:{name:`string`,required:!0},control:`text`,table:{defaultValue:{summary:`accordion`}}},a11yHeadingTag:{control:`text`,table:{defaultValue:{summary:`h4`}}},open:{control:`object`,table:{type:{summary:`string | string[]`}}},defaultOpen:{control:`object`,table:{type:{summary:`string | string[]`}}},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}}},args:{size:`regular`,a11yText:`Product details`},render(e){return(0,R.jsxs)(k,{...e,children:[(0,R.jsxs)(P,{id:`shipping`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Shipping and returns`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Free delivery in 3–5 business days. Returns are accepted within 30 days.`})})]}),(0,R.jsxs)(P,{id:`description`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Description`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Refurbished noise-canceling headphones with a charging case and USB-C cable.`})})]}),(0,R.jsxs)(P,{id:`specifications`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Specifications`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Bluetooth 5.3 · Up to 30 hours of battery life · Black`})})]})]})}},B={},V={render(e){return(0,R.jsxs)(k,{size:e.size,a11yText:e.a11yText,defaultOpen:[],children:[(0,R.jsxs)(P,{id:`shipping`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Shipping and returns`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Free delivery in 3–5 business days. Returns are accepted within 30 days.`})})]}),(0,R.jsxs)(P,{id:`description`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Description`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Refurbished noise-canceling headphones with a charging case and USB-C cable.`})})]}),(0,R.jsxs)(P,{id:`specifications`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Specifications`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Bluetooth 5.3 · Up to 30 hours of battery life · Black`})})]})]})}},H={args:{open:`shipping`},render(e){let[t,n]=(0,L.useState)(e?.open||``),r=e=>{n(e)};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{children:[[`shipping`,`Shipping and returns`],[`description`,`Description`],[`specifications`,`Specifications`]].map(([e,n])=>(0,R.jsxs)(`label`,{children:[(0,R.jsx)(`input`,{type:`radio`,name:`accordion-control`,value:e,checked:t===e,onChange:()=>r(e)}),` `,n]},e))}),(0,R.jsxs)(k,{...e,open:t,onOpenChange:r,a11yText:`Product details`,children:[(0,R.jsxs)(P,{id:`shipping`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Shipping and returns`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Free delivery in 3–5 business days. Returns are accepted within 30 days.`})})]}),(0,R.jsxs)(P,{id:`description`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Description`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Refurbished noise-canceling headphones with a charging case and USB-C cable.`})})]}),(0,R.jsxs)(P,{id:`specifications`,children:[(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:`Specifications`})}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Bluetooth 5.3 · Up to 30 hours of battery life · Black`})})]})]})]})}},U={render(e){return(0,R.jsxs)(k,{...e,children:[(0,R.jsxs)(P,{id:`shipping`,children:[(0,R.jsxs)(v,{children:[(0,R.jsx)(d,{children:(0,R.jsx)(u,{})}),(0,R.jsx)(_,{children:`Shipping and returns`})]}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Free delivery in 3–5 business days. Returns are accepted within 30 days.`})})]}),(0,R.jsxs)(P,{id:`description`,children:[(0,R.jsxs)(v,{children:[(0,R.jsx)(d,{children:(0,R.jsx)(l,{})}),(0,R.jsx)(_,{children:`Description`})]}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Refurbished noise-canceling headphones with a charging case and USB-C cable.`})})]}),(0,R.jsxs)(P,{id:`specifications`,children:[(0,R.jsxs)(v,{children:[(0,R.jsx)(d,{children:(0,R.jsx)(a,{})}),(0,R.jsx)(_,{children:`Specifications`})]}),(0,R.jsx)(y,{children:(0,R.jsx)(`p`,{children:`Bluetooth 5.3 · Up to 30 hours of battery life · Black`})})]})]})}},W=[`Default`,`MultipleSelection`,`Controlled`,`WithLeadingIcon`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source},description:{story:`The default accordion keeps one section open at a time.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <EvoAccordion size={args.size} a11yText={args.a11yText} defaultOpen={[]}>
        <EvoAccordionItem id="shipping">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Free delivery in 3–5 business days. Returns are accepted within 30
              days.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="description">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Refurbished noise-canceling headphones with a charging case and
              USB-C cable.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="specifications">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>Bluetooth 5.3 · Up to 30 hours of battery life · Black</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Multiple selection allows several sections to remain open.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    open: "shipping"
  },
  render(args: Story["args"]) {
    const [open, setOpen] = useState<string | undefined>(args?.open || "");
    const handleOpenChange = (nextOpen: string | undefined) => {
      setOpen(nextOpen);
    };
    return <>
        <div>
          {[["shipping", "Shipping and returns"], ["description", "Description"], ["specifications", "Specifications"]].map(([id, label]) => <label key={id}>
              <input type="radio" name="accordion-control" value={id} checked={open === id} onChange={() => handleOpenChange(id)} />{" "}
              {label}
            </label>)}
        </div>

        <EvoAccordion {...args} open={open} onOpenChange={handleOpenChange} a11yText="Product details">
          <EvoAccordionItem id="shipping">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>
                Free delivery in 3–5 business days. Returns are accepted within
                30 days.
              </p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="description">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Description</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>
                Refurbished noise-canceling headphones with a charging case and
                USB-C cable.
              </p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="specifications">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Specifications</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>Bluetooth 5.3 · Up to 30 hours of battery life · Black</p>
            </EvoAccordionContent>
          </EvoAccordionItem>
        </EvoAccordion>
      </>;
  }
}`,...H.parameters?.docs?.source},description:{story:`Controlled state synchronizes the open item with the parent.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <EvoAccordion {...args}>
        <EvoAccordionItem id="shipping">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconTruck24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Free delivery in 3–5 business days. Returns are accepted within 30
              days.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="description">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconPencil24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Refurbished noise-canceling headphones with a charging case and
              USB-C cable.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="specifications">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconGraph24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>Bluetooth 5.3 · Up to 30 hours of battery life · Black</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Leading icons provide a decorative cue for each section.`,...U.parameters?.docs?.description}}}})))()}G();export{H as Controlled,B as Default,V as MultipleSelection,U as WithLeadingIcon,W as __namedExportsOrder,z as default};