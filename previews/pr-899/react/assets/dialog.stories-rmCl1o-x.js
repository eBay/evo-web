import{r as l,j as e}from"./iframe-BX13EBDJ.js";import{c as d}from"./index-gZX501Lh.js";import{u as Z}from"./use-controllable-id-CcCGz1dv.js";import{u as ee}from"./use-ref-tee-5Z9Cfwal.js";/* empty css               */import{E as ne}from"./close-16-CZ4gipvZ.js";import{E as P}from"./icon-button-PwjE1Rtx.js";import{E as ae}from"./chevron-left-16-CkbLP58g.js";import{E as y}from"./button-D0QbQC28.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-0NJhB9Xo.js";/* empty css               */import"./chevron-down-16-M6jRsPtd.js";const z=l.createContext(null);function W(){const n=l.use(z);if(!n)throw new Error("EvoDialog sub-components must be used within EvoDialog!");return n}function q({headerId:n,setHeaderId:a,requestClose:o,children:i}){const t=l.useMemo(()=>({headerId:n,setHeaderId:a,requestClose:o}),[n,a,o]);return e.jsx(z,{value:t,children:i})}try{q.displayName="DialogProvider",q.__docgenInfo={description:"",displayName:"DialogProvider",props:{headerId:{defaultValue:null,description:"",name:"headerId",required:!0,type:{name:"string"}},setHeaderId:{defaultValue:null,description:"",name:"setHeaderId",required:!0,type:{name:"(id: string) => void"}},requestClose:{defaultValue:null,description:"",name:"requestClose",required:!0,type:{name:"() => void"}}}}}catch{}function M(){return typeof HTMLDialogElement<"u"&&"closedBy"in HTMLDialogElement.prototype}function c({open:n,defaultOpen:a=!1,onOpenChange:o,size:i,closedby:t="any",banner:s,className:j,children:T,ref:A,"aria-labelledby":V,onCancel:N,onAnimationEnd:w,onClick:I,onKeyDown:H,...R}){const B=n!==void 0,[L,F]=l.useState(a),v=B?n:L,[U,f]=ee(A),[k,$]=Z();l.useEffect(()=>{const r=f.current;v&&r&&!r.open&&r.showModal()},[v,f]);const h=l.useCallback(()=>{B||F(!1),o?.(!1)},[B,o]),K=l.useCallback(()=>{const r=f.current;r&&typeof r.requestClose=="function"?r.requestClose():h()},[h,f]),J=l.useCallback(r=>{r.preventDefault(),h(),N?.(r)},[h,N]),X=l.useCallback(r=>{const S=f.current;r.target===S&&!v&&S.close(),w?.(r)},[v,f,w]),G=l.useCallback(r=>{I?.(r),!M()&&t==="any"&&r.target===r.currentTarget&&h()},[h,t,I]),Q=l.useCallback(r=>{H?.(r),!M()&&t==="none"&&r.key==="Escape"&&r.preventDefault()},[t,H]),Y=V?`${V} ${k}`:k;return e.jsx(q,{headerId:k,setHeaderId:$,requestClose:K,children:e.jsxs("dialog",{...R,ref:U,closedby:t,"aria-labelledby":Y,className:d("dialog",!v&&"dialog--close",i&&`dialog--${i}`,s&&"dialog--expressive",j),onCancel:J,onAnimationEnd:X,onClick:G,onKeyDown:Q,children:[s,T]})})}try{c.displayName="EvoDialog",c.__docgenInfo={description:"",displayName:"EvoDialog",props:{open:{defaultValue:null,description:"Controlled open state. When provided, the consumer manages it via `onOpenChange`.",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Initial open state for uncontrolled usage. Ignored when `open` is provided.",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the dialog requests to change its open state.",name:"onOpenChange",required:!1,type:{name:"(open: boolean) => void"}},size:{defaultValue:null,description:"Size variant of the dialog.",name:"size",required:!1,type:{name:"DialogSize"}},closedby:{defaultValue:{value:"any"},description:"User actions that may close the native dialog. Defaults to `any`.",name:"closedby",required:!1,type:{name:"DialogClosedBy"}},banner:{defaultValue:null,description:"Optional banner rendered before the dialog header.",name:"banner",required:!1,type:{name:"ReactElement<EvoDialogBannerProps, string | JSXElementConstructor<any>>"}}}}}catch{}function D({src:n,position:a,className:o,style:i,children:t,...s}){return e.jsx("div",{...s,className:d("dialog__image",o),style:{...i,backgroundImage:n?`url(${n})`:i?.backgroundImage,backgroundPosition:a??i?.backgroundPosition},children:t})}try{D.displayName="EvoDialogBanner",D.__docgenInfo={description:"",displayName:"EvoDialogBanner",props:{src:{defaultValue:null,description:"URL of the banner image.",name:"src",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"CSS background position used for the banner image.",name:"position",required:!1,type:{name:"BackgroundPosition<string | number>"}}}}}catch{}function p({className:n,onClick:a,...o}){const{requestClose:i}=W(),t=l.useCallback(s=>{i(),a?.(s)},[a,i]);return e.jsx(P,{...o,className:d("dialog__close",n),onClick:t,children:e.jsx(ne,{})})}try{p.displayName="EvoDialogClose",p.__docgenInfo={description:"",displayName:"EvoDialogClose",props:{priority:{defaultValue:null,description:"Button priority level.",name:"priority",required:!1,type:{name:"Priority"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},partiallyDisabled:{defaultValue:null,description:"Visually disabled but still focusable (`aria-disabled`).",name:"partiallyDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Alternative size: `large` or `small`.",name:"size",required:!1,type:{name:"Size"}},transparent:{defaultValue:null,description:"Transparent background.",name:"transparent",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"never"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}},onEscape:{defaultValue:null,description:"Triggered on Escape key press.",name:"onEscape",required:!1,type:{name:"(e: KeyboardEvent<HTMLButtonElement>) => void"}},a11yText:{defaultValue:null,description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:"a11yText",required:!0,type:{name:"string"}}}}}catch{}function O({className:n,children:a,...o}){return e.jsx("div",{...o,className:d("dialog__footer",n),children:a})}try{O.displayName="EvoDialogFooter",O.__docgenInfo={description:"",displayName:"EvoDialogFooter",props:{}}}catch{}function u({className:n,children:a,...o}){return e.jsx("div",{...o,className:d("dialog__header",n),children:a})}try{u.displayName="EvoDialogHeader",u.__docgenInfo={description:"",displayName:"EvoDialogHeader",props:{}}}catch{}function g({className:n,children:a,...o}){return e.jsx("div",{...o,className:d("dialog__main",n),children:a})}try{g.displayName="EvoDialogMain",g.__docgenInfo={description:"",displayName:"EvoDialogMain",props:{}}}catch{}function E({className:n,...a}){return e.jsx(P,{...a,className:d("dialog__prev",n),children:e.jsx(ae,{})})}try{E.displayName="EvoDialogPrevious",E.__docgenInfo={description:"",displayName:"EvoDialogPrevious",props:{priority:{defaultValue:null,description:"Button priority level.",name:"priority",required:!1,type:{name:"Priority"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},partiallyDisabled:{defaultValue:null,description:"Visually disabled but still focusable (`aria-disabled`).",name:"partiallyDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Alternative size: `large` or `small`.",name:"size",required:!1,type:{name:"Size"}},transparent:{defaultValue:null,description:"Transparent background.",name:"transparent",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"never"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}},onEscape:{defaultValue:null,description:"Triggered on Escape key press.",name:"onEscape",required:!1,type:{name:"(e: KeyboardEvent<HTMLButtonElement>) => void"}},a11yText:{defaultValue:null,description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:"a11yText",required:!0,type:{name:"string"}}}}}catch{}function m({as:n="h2",id:a,className:o,children:i,...t}){const{headerId:s,setHeaderId:j}=W(),T=a??s;return a&&j(a),e.jsx(n,{...t,id:T,className:d("dialog__title",o),children:i})}try{m.displayName="EvoDialogTitle",m.__docgenInfo={description:"",displayName:"EvoDialogTitle",props:{as:{defaultValue:{value:"h2"},description:"Heading element used for the dialog title. Defaults to `h2`.",name:"as",required:!1,type:{name:"ElementType"}}}}}catch{}const he={title:"navigation & disclosure/evo-dialog",component:c,subcomponents:{EvoDialogBanner:D,EvoDialogHeader:u,EvoDialogTitle:m,EvoDialogClose:p,EvoDialogPrevious:E,EvoDialogMain:g,EvoDialogFooter:O},tags:["autodocs"],parameters:{docs:{description:{component:`
A native modal dialog with a backdrop scrim, close animation, size variants, and optional expressive banner.

## Usage

\`\`\`tsx
import {
  EvoDialog,
  EvoDialogClose,
  EvoDialogHeader,
  EvoDialogTitle,
  EvoDialogMain,
} from "@evo-web/react/dialog";
\`\`\`
        `}}},argTypes:{open:{control:"boolean"},defaultOpen:{control:"boolean",table:{defaultValue:{summary:"false"}}},onOpenChange:{action:"onOpenChange",table:{category:"Events"}},size:{control:"select",options:["wide","narrow","large"]},closedby:{control:"select",options:["any","closerequest","none"],table:{defaultValue:{summary:"any"}}},banner:{control:!1},children:{control:!1}},args:{closedby:"any"}},b={render:n=>{const[a,o]=l.useState(!1),i=t=>{o(t),n.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx(y,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog"}),e.jsx("p",{children:"Some outside content..."}),e.jsxs(c,{...n,open:a,onOpenChange:i,children:[e.jsxs(u,{children:[e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsxs(g,{children:[e.jsx("p",{children:"This is the default dialog content."}),e.jsx("p",{children:e.jsx("a",{href:"https://www.ebay.com",children:"www.ebay.com"})})]}),e.jsx(O,{children:e.jsx(y,{priority:"primary",onClick:()=>i(!1),children:"Done"})})]})]})}},x={render:n=>{const[a,o]=l.useState(!1),i=t=>{o(t),n.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx(y,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog With Banner"}),e.jsxs(c,{...n,open:a,onOpenChange:i,banner:e.jsx(D,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",position:"top"}),children:[e.jsxs(u,{children:[e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsx(g,{children:e.jsx("p",{children:"This dialog uses an expressive banner image."})})]})]})}},C={render:n=>{const[a,o]=l.useState(!1),i=t=>{o(t),n.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx("style",{children:`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        `}),e.jsx(y,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog With Custom Banner"}),e.jsxs(c,{...n,open:a,onOpenChange:i,banner:e.jsx(D,{className:"banner-demo",children:"Custom Banner"}),children:[e.jsxs(u,{children:[e.jsx(E,{a11yText:"Back"}),e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsx(g,{children:e.jsx("p",{children:"This dialog uses custom content inside the banner instead of a background image."})})]})]})}},_={render:n=>{const[a,o]=l.useState(!1),i=t=>{o(t),n.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx(y,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog With Previous Action"}),e.jsxs(c,{...n,open:a,onOpenChange:i,children:[e.jsxs(u,{children:[e.jsx(E,{a11yText:"Back"}),e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsx(g,{children:e.jsx("p",{children:"This dialog includes a previous navigation action."})})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Open Dialog
        </EvoButton>
        <p>Some outside content...</p>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>This is the default dialog content.</p>
            <p>
              <a href="https://www.ebay.com">www.ebay.com</a>
            </p>
          </EvoDialogMain>
          <EvoDialogFooter>
            <EvoButton priority="primary" onClick={() => handleOpenChange(false)}>
              Done
            </EvoButton>
          </EvoDialogFooter>
        </EvoDialog>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Open Dialog With Banner
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange} banner={<EvoDialogBanner src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" position="top" />}>
          <EvoDialogHeader>
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>This dialog uses an expressive banner image.</p>
          </EvoDialogMain>
        </EvoDialog>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <style>{\`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        \`}</style>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Open Dialog With Custom Banner
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange} banner={<EvoDialogBanner className="banner-demo">
              Custom Banner
            </EvoDialogBanner>}>
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back" />
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              This dialog uses custom content inside the banner instead of a
              background image.
            </p>
          </EvoDialogMain>
        </EvoDialog>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Open Dialog With Previous Action
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back" />
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>This dialog includes a previous navigation action.</p>
          </EvoDialogMain>
        </EvoDialog>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const ve=["Default","Banner","CustomBanner","WithPrevious"];export{x as Banner,C as CustomBanner,b as Default,_ as WithPrevious,ve as __namedExportsOrder,he as default};
