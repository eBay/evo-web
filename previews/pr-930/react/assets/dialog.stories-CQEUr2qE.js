import{r as s,j as e}from"./iframe-DjAcWYNC.js";import{c}from"./index-C04a5A_d.js";import{u as Z}from"./use-controllable-id-DgzLbo8y.js";import{u as ee}from"./use-ref-tee-DDE7PttZ.js";/* empty css               */import{E as ae}from"./close-16-CIbcQht1.js";import{E as S}from"./icon-button-CXOadnWZ.js";import{E as ne}from"./chevron-left-16-CxSxAY8-.js";import{E as h}from"./button-D4UgqfgQ.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-OW-XSJJv.js";/* empty css               */import"./chevron-down-16-BFMMh2yt.js";const M=s.createContext(null);function z(){const a=s.use(M);if(!a)throw new Error("EvoDialog sub-components must be used within EvoDialog!");return a}function w({headerId:a,setHeaderId:n,requestClose:o,children:r}){const t=s.useMemo(()=>({headerId:a,setHeaderId:n,requestClose:o}),[a,n,o]);return e.jsx(M,{value:t,children:r})}try{w.displayName="DialogProvider",w.__docgenInfo={description:"",displayName:"DialogProvider",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/context.tsx",methods:[],props:{headerId:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/context.tsx",name:"TypeLiteral"}],description:"",name:"headerId",required:!0,tags:{},type:{name:"string"}},setHeaderId:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/context.tsx",name:"TypeLiteral"}],description:"",name:"setHeaderId",required:!0,tags:{},type:{name:"(id: string) => void"}},requestClose:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/context.tsx",name:"TypeLiteral"}],description:"",name:"requestClose",required:!0,tags:{},type:{name:"() => void"}}},tags:{}}}catch{}function H(){return typeof HTMLDialogElement<"u"&&"closedBy"in HTMLDialogElement.prototype}function d({open:a,defaultOpen:n=!1,onOpenChange:o,size:r,closedby:t="any",banner:l,className:O,children:j,ref:W,"aria-labelledby":B,onCancel:q,onAnimationEnd:L,onClick:V,onKeyDown:P,...A}){const k=a!==void 0,[R,F]=s.useState(n),f=k?a:R,[U,v]=ee(W),[N,$]=Z();s.useEffect(()=>{const i=v.current;f&&i&&!i.open&&i.showModal()},[f,v]);const y=s.useCallback(()=>{k||F(!1),o?.(!1)},[k,o]),K=s.useCallback(()=>{const i=v.current;i&&typeof i.requestClose=="function"?i.requestClose():y()},[y,v]),J=s.useCallback(i=>{i.preventDefault(),y(),q?.(i)},[y,q]),X=s.useCallback(i=>{const I=v.current;i.target===I&&!f&&I.close(),L?.(i)},[f,v,L]),G=s.useCallback(i=>{V?.(i),!H()&&t==="any"&&i.target===i.currentTarget&&y()},[y,t,V]),Q=s.useCallback(i=>{P?.(i),!H()&&t==="none"&&i.key==="Escape"&&i.preventDefault()},[t,P]),Y=B?`${B} ${N}`:N;return e.jsx(w,{headerId:N,setHeaderId:$,requestClose:K,children:e.jsxs("dialog",{...A,ref:U,closedby:t,"aria-labelledby":Y,className:c("dialog",!f&&"dialog--close",r&&`dialog--${r}`,l&&"dialog--expressive",O),onCancel:J,onAnimationEnd:X,onClick:G,onKeyDown:Q,children:[l,j]})})}try{d.displayName="EvoDialog",d.__docgenInfo={description:"",displayName:"EvoDialog",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog.tsx",methods:[],props:{open:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"Controlled open state. When provided, the consumer manages it via `onOpenChange`.",name:"open",required:!1,tags:{},type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"Initial open state for uncontrolled usage. Ignored when `open` is provided.",name:"defaultOpen",required:!1,tags:{},type:{name:"boolean"}},onOpenChange:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"Callback fired when the dialog requests to change its open state.",name:"onOpenChange",required:!1,tags:{},type:{name:"(open: boolean) => void"}},size:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"Size variant of the dialog.",name:"size",required:!1,tags:{},type:{name:"DialogSize"}},closedby:{defaultValue:{value:"any"},declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"User actions that may close the native dialog. Defaults to `any`.",name:"closedby",required:!1,tags:{},type:{name:"DialogClosedBy"}},banner:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"Optional banner rendered before the dialog header.",name:"banner",required:!1,tags:{},type:{name:"ReactElement<EvoDialogBannerProps, string | JSXElementConstructor<any>>"}}},tags:{}}}catch{}function b({src:a,position:n,className:o,style:r,children:t,...l}){return e.jsx("div",{...l,className:c("dialog__image",o),style:{...r,backgroundImage:a?`url(${a})`:r?.backgroundImage,backgroundPosition:n??r?.backgroundPosition},children:t})}try{b.displayName="EvoDialogBanner",b.__docgenInfo={description:"",displayName:"EvoDialogBanner",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-banner.tsx",methods:[],props:{src:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"URL of the banner image.",name:"src",required:!1,tags:{},type:{name:"string"}},position:{defaultValue:null,declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"CSS background position used for the banner image.",name:"position",required:!1,tags:{},type:{name:"BackgroundPosition<string | number>"}}},tags:{}}}catch{}function p({className:a,onClick:n,...o}){const{requestClose:r}=z(),t=s.useCallback(l=>{r(),n?.(l)},[n,r]);return e.jsx(S,{...o,className:c("dialog__close",a),onClick:t,children:e.jsx(ae,{})})}try{p.displayName="EvoDialogClose",p.__docgenInfo={description:"",displayName:"EvoDialogClose",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-close.tsx",methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"",name:"ref",required:!1,tags:{},type:{name:"Ref<HTMLButtonElement>"}},href:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"",name:"href",required:!1,tags:{},type:{name:"never"}},as:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"never"}},size:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Alternative size: `large` or `small`.",name:"size",required:!1,tags:{},type:{name:"Size"}},a11yText:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:"a11yText",required:!0,tags:{},type:{name:"string"}},partiallyDisabled:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Visually disabled but still focusable (`aria-disabled`).",name:"partiallyDisabled",required:!1,tags:{},type:{name:"boolean"}},priority:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Button priority level.",name:"priority",required:!1,tags:{},type:{name:"Priority"}},transparent:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Transparent background.",name:"transparent",required:!1,tags:{},type:{name:"boolean"}},onEscape:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Triggered on Escape key press.",name:"onEscape",required:!1,tags:{},type:{name:"(e: KeyboardEvent<HTMLButtonElement>) => void"}}},tags:{}}}catch{}function T({className:a,children:n,...o}){return e.jsx("div",{...o,className:c("dialog__footer",a),children:n})}try{T.displayName="EvoDialogFooter",T.__docgenInfo={description:"",displayName:"EvoDialogFooter",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-footer.tsx",methods:[],props:{},tags:{}}}catch{}function u({className:a,children:n,...o}){return e.jsx("div",{...o,className:c("dialog__header",a),children:n})}try{u.displayName="EvoDialogHeader",u.__docgenInfo={description:"",displayName:"EvoDialogHeader",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-header.tsx",methods:[],props:{},tags:{}}}catch{}function g({className:a,children:n,...o}){return e.jsx("div",{...o,className:c("dialog__main",a),children:n})}try{g.displayName="EvoDialogMain",g.__docgenInfo={description:"",displayName:"EvoDialogMain",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-main.tsx",methods:[],props:{},tags:{}}}catch{}function D({className:a,...n}){return e.jsx(S,{...n,className:c("dialog__prev",a),children:e.jsx(ne,{})})}try{D.displayName="EvoDialogPrevious",D.__docgenInfo={description:"",displayName:"EvoDialogPrevious",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-previous.tsx",methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"",name:"ref",required:!1,tags:{},type:{name:"Ref<HTMLButtonElement>"}},href:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"",name:"href",required:!1,tags:{},type:{name:"never"}},as:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"never"}},size:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Alternative size: `large` or `small`.",name:"size",required:!1,tags:{},type:{name:"Size"}},a11yText:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:"a11yText",required:!0,tags:{},type:{name:"string"}},partiallyDisabled:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Visually disabled but still focusable (`aria-disabled`).",name:"partiallyDisabled",required:!1,tags:{},type:{name:"boolean"}},priority:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Button priority level.",name:"priority",required:!1,tags:{},type:{name:"Priority"}},transparent:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Transparent background.",name:"transparent",required:!1,tags:{},type:{name:"boolean"}},onEscape:{defaultValue:null,declarations:[{fileName:"evo-react/src/icon-button/types.ts",name:"TypeLiteral"}],description:"Triggered on Escape key press.",name:"onEscape",required:!1,tags:{},type:{name:"(e: KeyboardEvent<HTMLButtonElement>) => void"}}},tags:{}}}catch{}function m({as:a="h2",id:n,className:o,children:r,...t}){const{headerId:l,setHeaderId:O}=z(),j=n??l;return n&&O(n),e.jsx(a,{...t,id:j,className:c("dialog__title",o),children:r})}try{m.displayName="EvoDialogTitle",m.__docgenInfo={description:"",displayName:"EvoDialogTitle",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-title.tsx",methods:[],props:{as:{defaultValue:{value:"h2"},declarations:[{fileName:"evo-react/src/dialog/types.ts",name:"TypeLiteral"}],description:"Heading element used for the dialog title. Defaults to `h2`.",name:"as",required:!1,tags:{},type:{name:"ElementType"}}},tags:{}}}catch{}const ye={title:"navigation & disclosure/evo-dialog",component:d,subcomponents:{EvoDialogBanner:b,EvoDialogHeader:u,EvoDialogTitle:m,EvoDialogClose:p,EvoDialogPrevious:D,EvoDialogMain:g,EvoDialogFooter:T},tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{open:{control:"boolean"},defaultOpen:{control:"boolean",table:{defaultValue:{summary:"false"}}},onOpenChange:{action:"onOpenChange",table:{category:"Events"}},size:{control:"select",options:["wide","narrow","large"]},closedby:{control:"select",options:["any","closerequest","none"],table:{defaultValue:{summary:"any"}}},banner:{control:!1},children:{control:!1}},args:{closedby:"any"}},E={render:a=>{const[n,o]=s.useState(!1),r=t=>{o(t),a.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx(h,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog"}),e.jsx("p",{children:"Some outside content..."}),e.jsxs(d,{...a,open:n,onOpenChange:r,children:[e.jsxs(u,{children:[e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsxs(g,{children:[e.jsx("p",{children:"This is the default dialog content."}),e.jsx("p",{children:e.jsx("a",{href:"https://www.ebay.com",children:"www.ebay.com"})})]}),e.jsx(T,{children:e.jsx(h,{priority:"primary",onClick:()=>r(!1),children:"Done"})})]})]})}},x={render:a=>{const[n,o]=s.useState(!1),r=t=>{o(t),a.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx(h,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog With Banner"}),e.jsxs(d,{...a,open:n,onOpenChange:r,banner:e.jsx(b,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",position:"top"}),children:[e.jsxs(u,{children:[e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsx(g,{children:e.jsx("p",{children:"This dialog uses an expressive banner image."})})]})]})}},C={render:a=>{const[n,o]=s.useState(!1),r=t=>{o(t),a.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx("style",{children:`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        `}),e.jsx(h,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog With Custom Banner"}),e.jsxs(d,{...a,open:n,onOpenChange:r,banner:e.jsx(b,{className:"banner-demo",children:"Custom Banner"}),children:[e.jsxs(u,{children:[e.jsx(D,{a11yText:"Back"}),e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsx(g,{children:e.jsx("p",{children:"This dialog uses custom content inside the banner instead of a background image."})})]})]})}},_={render:a=>{const[n,o]=s.useState(!1),r=t=>{o(t),a.onOpenChange?.(t)};return e.jsxs("div",{children:[e.jsx(h,{priority:"secondary",onClick:()=>o(!0),children:"Open Dialog With Previous Action"}),e.jsxs(d,{...a,open:n,onOpenChange:r,children:[e.jsxs(u,{children:[e.jsx(D,{a11yText:"Back"}),e.jsx(m,{children:"Dialog Title"}),e.jsx(p,{a11yText:"Close Dialog"})]}),e.jsx(g,{children:e.jsx("p",{children:"This dialog includes a previous navigation action."})})]})]})}},fe=["Default","Banner","CustomBanner","WithPrevious"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};export{x as Banner,C as CustomBanner,E as Default,_ as WithPrevious,fe as __namedExportsOrder,ye as default};
