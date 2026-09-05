import{r as i,j as e}from"./iframe-D9crypn6.js";import{E as R}from"./button-BVihhR-N.js";import{E as z}from"./settings-24-CMSxNyVJ.js";import{c as j}from"./index-BQGrUzVk.js";import{u as G}from"./use-expander-BpDP-4Xp.js";import{u as k}from"./use-ref-tee-CzIcytTc.js";import{E as J}from"./icon-button-CQvn-WS7.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-16-BTVB4-UJ.js";import"./icon-BppzJdT1.js";/* empty css               */const D=i.createContext(null);function B(){const t=i.use(D);if(!t)throw new Error("EvoTooltip sub-components must be used within an EvoTooltip component");return t}function H({open:t,tooltipId:o,setReference:s,setFloating:a,arrowRef:l,floatingStyles:d,arrowStyles:c,children:u}){const m=i.useMemo(()=>({open:t,tooltipId:o,setReference:s,setFloating:a,arrowRef:l,floatingStyles:d,arrowStyles:c}),[t,o,s,a,l,d,c]);return e.jsx(D,{value:m,children:u})}try{H.displayName="TooltipProvider",H.__docgenInfo={description:"",displayName:"TooltipProvider",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},tooltipId:{defaultValue:null,description:"",name:"tooltipId",required:!0,type:{name:"string"}},setReference:{defaultValue:null,description:"",name:"setReference",required:!0,type:{name:"(node: Element) => void"}},setFloating:{defaultValue:null,description:"",name:"setFloating",required:!0,type:{name:"(node: HTMLElement) => void"}},arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!0,type:{name:"RefObject<HTMLElement>"}},floatingStyles:{defaultValue:null,description:"",name:"floatingStyles",required:!0,type:{name:"CSSProperties"}},arrowStyles:{defaultValue:null,description:"",name:"arrowStyles",required:!0,type:{name:"CSSProperties"}}}}}catch{}function f({open:t,defaultOpen:o=!1,onOpenChange:s,placement:a="bottom",offset:l=8,flip:d=!0,shift:c=!0,inline:u=!0,className:m,children:v,onMouseEnter:g,onMouseLeave:E,onFocus:N,onBlur:S,ref:P,...A}){const F=i.useId(),T=i.useRef(null),n=G({open:t,defaultOpen:o,onOpenChange:s,placement:a,strategy:"absolute",offset:l,flip:d,shift:c,inline:u}),p=i.useCallback(()=>{T.current!==null&&(clearTimeout(T.current),T.current=null)},[]),L=i.useCallback(r=>{g?.(r),p(),n.setOpen(!0)},[p,n.setOpen,g]),M=i.useCallback(r=>{E?.(r),p(),T.current=setTimeout(()=>{n.setOpen(!1)},300)},[p,n.setOpen,E]),U=i.useCallback(r=>{N?.(r),p(),n.setOpen(!0)},[p,n.setOpen,N]),K=i.useCallback(r=>{S?.(r),r.currentTarget.contains(r.relatedTarget)||(p(),n.setOpen(!1))},[p,n.setOpen,S]),[V]=k(P,null),W=i.useCallback(r=>{if(V(r),!r)return;const q=r.ownerDocument,I=O=>{n.open&&(O.key==="Escape"||O.key==="Esc")&&(p(),n.setOpen(!1))};return q.addEventListener("keydown",I),()=>{q.removeEventListener("keydown",I),p(),V(null)}},[p,n.open,n.setOpen,V]);return e.jsx(H,{open:n.open,tooltipId:F,setReference:n.refs.setReference,setFloating:n.refs.setFloating,arrowRef:n.refs.arrow,floatingStyles:n.floatingStyles,arrowStyles:n.arrowStyles,children:e.jsx("span",{...A,ref:W,className:j("tooltip",n.open&&"tooltip--expanded",m),onMouseEnter:L,onMouseLeave:M,onFocus:U,onBlur:K,children:v})})}try{f.displayName="EvoTooltip",f.__docgenInfo={description:"",displayName:"EvoTooltip",props:{open:{defaultValue:null,description:"Controlled open state. When provided, the consumer manages it via `onOpenChange`.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Initial open state for uncontrolled usage. Ignored when `open` is provided.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the tooltip requests to change its open state.",name:"onOpenChange",required:!1,type:{name:"(open: boolean) => void"}},placement:{defaultValue:{value:"bottom"},description:"Position of the overlay relative to the host. Defaults to `bottom`.",name:"placement",required:!1,type:{name:"TooltipPlacement"}},offset:{defaultValue:{value:"8"},description:"Distance between the host and overlay in pixels. Defaults to `8`.",name:"offset",required:!1,type:{name:"number"}},flip:{defaultValue:{value:"true"},description:"Flips the tooltip when there is insufficient space. Defaults to `true`.",name:"flip",required:!1,type:{name:"boolean"}},shift:{defaultValue:{value:"true"},description:"Shifts the tooltip to keep it within the viewport. Defaults to `true`.",name:"shift",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"true"},description:"Uses inline positioning for hosts that wrap across multiple lines. Defaults to `true`.",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}function y({className:t,style:o,ref:s,children:a,...l}){const{open:d,tooltipId:c,setFloating:u,arrowRef:m,floatingStyles:v,arrowStyles:g}=B(),[E]=k([u,s],null);return e.jsxs("span",{...l,id:c,ref:E,className:j("tooltip__overlay",t),style:{...o,...v},role:"tooltip",tabIndex:d?-1:void 0,children:[e.jsx("span",{ref:m,className:"tooltip__pointer",style:g}),e.jsx("span",{className:"tooltip__mask",children:e.jsx("span",{className:"tooltip__cell",children:e.jsx("span",{className:"tooltip__content",children:a})})})]})}try{y.displayName="EvoTooltipContent",y.__docgenInfo={description:"",displayName:"EvoTooltipContent",props:{}}}catch{}function C({as:t,className:o,children:s,...a}){const l=t??"span";return e.jsx(l,{...a,className:j("tooltip__heading",o),children:s})}try{C.displayName="EvoTooltipHeading",C.__docgenInfo={description:"",displayName:"EvoTooltipHeading",props:{as:{defaultValue:null,description:"Element or component used for the heading. Defaults to `span`.",name:"as",required:!1,type:{name:"ElementType"}},children:{defaultValue:null,description:"Content rendered inside the tooltip heading.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional class name merged with the Skin heading class.",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Ref forwarded to the rendered heading.",name:"ref",required:!1,type:{name:"any"}}}}}catch{}function h({as:t,children:o,className:s,ref:a,...l}){const{open:d,tooltipId:c,setReference:u}=B(),[m]=k([u,a],null),v=t??R;return e.jsx(v,{...l,ref:m,className:j("tooltip__host",s),"aria-expanded":d,"aria-describedby":c,children:o})}try{h.displayName="EvoTooltipHost",h.__docgenInfo={description:"",displayName:"EvoTooltipHost",props:{as:{defaultValue:null,description:"Element or component rendered as the tooltip host. Defaults to `EvoButton`.",name:"as",required:!1,type:{name:"ElementType"}},children:{defaultValue:null,description:"Content rendered inside the tooltip host.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional class name merged with the Skin host class.",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Ref forwarded to the rendered host. Custom components must pass it to their DOM element.",name:"ref",required:!1,type:{name:"any"}}}}}catch{}const pe={title:"notices & tips/evo-tooltip",component:f,subcomponents:{EvoTooltipHost:h,EvoTooltipContent:y,EvoTooltipHeading:C},tags:["autodocs"],parameters:{docs:{description:{component:`
A tooltip provides brief, supplementary information when its host is hovered or focused.

## Usage

\`\`\`tsx
import {
  EvoTooltip,
  EvoTooltipContent,
  EvoTooltipHost,
} from "@evo-web/react/tooltip";
\`\`\`
        `}}},argTypes:{open:{control:"boolean"},defaultOpen:{control:"boolean",table:{defaultValue:{summary:"false"}}},onOpenChange:{action:"onOpenChange",table:{category:"Events"}},placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],table:{defaultValue:{summary:"bottom"}}},offset:{control:"number",table:{defaultValue:{summary:"8"}}},flip:{control:"boolean",table:{defaultValue:{summary:"true"}}},shift:{control:"boolean",table:{defaultValue:{summary:"true"}}},inline:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},b={render:t=>e.jsxs(f,{...t,children:[e.jsx(h,{children:"View options"}),e.jsx(y,{children:"Use Access Key 'S' to display settings."})]})},_={render:t=>e.jsxs(f,{...t,placement:"right",children:[e.jsx(h,{as:J,a11yText:"Settings",children:e.jsx(z,{})}),e.jsx(y,{children:"Configure your settings"})]})},Q=["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],x={render:t=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4rem",justifyItems:"center"},children:Q.map(o=>i.createElement(f,{...t,key:o,placement:o,flip:!1},e.jsx(h,{children:o}),e.jsxs(y,{children:[e.jsxs("span",{style:{display:"block"},children:["Tooltip content for ",e.jsx("code",{children:o})]}),e.jsxs("span",{style:{display:"block"},children:["Here we explicitly set ",e.jsx("code",{children:"flip=false"})," for demonstration. By default, the tooltip will not extend outside the window."]})]})))})};function X({to:t,ref:o,children:s,...a}){return e.jsx("a",{...a,ref:o,href:t,"data-custom-link":"true",children:s})}function Y({ref:t,href:o,...s}){return e.jsx(R,{...s,ref:t,href:o,as:({href:a,...l})=>e.jsx(X,{...l,to:a??""})})}const w={render:t=>e.jsxs(f,{...t,children:[e.jsx(h,{as:Y,href:"https://www.ebay.com",priority:"secondary",children:"View options"}),e.jsxs(y,{children:[e.jsx(C,{children:"Available options"}),"Use this link to view available options."]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <EvoTooltip {...args}>
      <EvoTooltipHost>View options</EvoTooltipHost>
      <EvoTooltipContent>
        Use Access Key &apos;S&apos; to display settings.
      </EvoTooltipContent>
    </EvoTooltip>
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <EvoTooltip {...args} placement="right">
      <EvoTooltipHost as={EvoIconButton} a11yText="Settings">
        <EvoIconSettings24 />
      </EvoTooltipHost>
      <EvoTooltipContent>Configure your settings</EvoTooltipContent>
    </EvoTooltip>
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "4rem",
    justifyItems: "center"
  }}>
      {placements.map(placement => <EvoTooltip {...args} key={placement} placement={placement} flip={false}>
          <EvoTooltipHost>{placement}</EvoTooltipHost>
          <EvoTooltipContent>
            <span style={{
          display: "block"
        }}>
              Tooltip content for <code>{placement}</code>
            </span>
            <span style={{
          display: "block"
        }}>
              Here we explicitly set <code>flip=false</code> for demonstration.
              By default, the tooltip will not extend outside the window.
            </span>
          </EvoTooltipContent>
        </EvoTooltip>)}
    </div>
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <EvoTooltip {...args}>
      <EvoTooltipHost as={CustomEvoButton} href="https://www.ebay.com" priority="secondary">
        View options
      </EvoTooltipHost>
      <EvoTooltipContent>
        <EvoTooltipHeading>Available options</EvoTooltipHeading>
        Use this link to view available options.
      </EvoTooltipContent>
    </EvoTooltip>
}`,...w.parameters?.docs?.source}}};const de=["Default","IconButtonHost","Placements","CustomHost"];export{w as CustomHost,b as Default,_ as IconButtonHost,x as Placements,de as __namedExportsOrder,pe as default};
