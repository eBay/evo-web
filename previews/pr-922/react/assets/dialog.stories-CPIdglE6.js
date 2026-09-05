import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./use-ref-tee-DzOuSCbA.js";import{n as ee,t as s}from"./use-controllable-id-BAx7nHf3.js";import{t as c}from"./dialog-Dd2_jjCz.js";import{n as te,t as l}from"./button-Ce0hufhd.js";import{n as u,t as d}from"./icon-button-IEekM1Tz.js";import{n as f,t as p}from"./close-16-BMiAWW-w.js";import{n as ne,t as m}from"./chevron-left-16-B3h7H-PP.js";function h(){let e=(0,_.use)(y);if(!e)throw Error(`EvoDialog sub-components must be used within EvoDialog!`);return e}function g({headerId:e,setHeaderId:t,requestClose:n,children:r}){let i=(0,_.useMemo)(()=>({headerId:e,setHeaderId:t,requestClose:n}),[e,t,n]);return(0,v.jsx)(y,{value:i,children:r})}var _,v,y;function b(){return(b=t((()=>{_=n(),v=r(),y=(0,_.createContext)(null);try{g.displayName=`DialogProvider`,g.__docgenInfo={description:``,displayName:`DialogProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/context.tsx`,methods:[],props:{headerId:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`headerId`,required:!0,tags:{},type:{name:`string`}},setHeaderId:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`setHeaderId`,required:!0,tags:{},type:{name:`(id: string) => void`}},requestClose:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`requestClose`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function re(){return typeof HTMLDialogElement<`u`&&`closedBy`in HTMLDialogElement.prototype}function x({open:e,defaultOpen:t=!1,onOpenChange:n,size:r,closedby:i=`any`,banner:o,className:s,children:c,ref:te,"aria-labelledby":l,onCancel:u,onAnimationEnd:d,onClick:f,onKeyDown:p,...ne}){let m=e!==void 0,[h,_]=(0,S.useState)(t),v=m?e:h,[y,b]=a(te),[x,w]=ee();(0,S.useEffect)(()=>{let e=b.current;v&&e&&!e.open&&e.showModal()},[v,b]);let T=(0,S.useCallback)(()=>{m||_(!1),n?.(!1)},[m,n]),E=(0,S.useCallback)(()=>{let e=b.current;e&&typeof e.requestClose==`function`?e.requestClose():T()},[T,b]),D=(0,S.useCallback)(e=>{e.preventDefault(),T(),u?.(e)},[T,u]),O=(0,S.useCallback)(e=>{let t=b.current;e.target===t&&!v&&t.close(),d?.(e)},[v,b,d]),k=(0,S.useCallback)(e=>{f?.(e),!re()&&i===`any`&&e.target===e.currentTarget&&T()},[T,i,f]),A=(0,S.useCallback)(e=>{p?.(e),!re()&&i===`none`&&e.key===`Escape`&&e.preventDefault()},[i,p]),j=l?`${l} ${x}`:x;return(0,C.jsx)(g,{headerId:x,setHeaderId:w,requestClose:E,children:(0,C.jsxs)(`dialog`,{...ne,ref:y,closedby:i,"aria-labelledby":j,className:(0,ie.default)(`dialog`,!v&&`dialog--close`,r&&`dialog--${r}`,o&&`dialog--expressive`,s),onCancel:D,onAnimationEnd:O,onClick:k,onKeyDown:A,children:[o,c]})})}var S,ie,C;function w(){return(w=t((()=>{S=n(),ie=e(i(),1),b(),s(),o(),c(),C=r();try{x.displayName=`EvoDialog`,x.__docgenInfo={description:``,displayName:`EvoDialog`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Controlled open state. When provided, the consumer manages it via `onOpenChange`.",name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}},defaultOpen:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Initial open state for uncontrolled usage. Ignored when `open` is provided.",name:`defaultOpen`,required:!1,tags:{},type:{name:`boolean | undefined`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`Callback fired when the dialog requests to change its open state.`,name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void) | undefined`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`Size variant of the dialog.`,name:`size`,required:!1,tags:{},type:{name:`DialogSize | undefined`}},closedby:{defaultValue:{value:`any`},declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"User actions that may close the native dialog. Defaults to `any`.",name:`closedby`,required:!1,tags:{},type:{name:`DialogClosedBy | undefined`}},banner:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`Optional banner rendered before the dialog header.`,name:`banner`,required:!1,tags:{},type:{name:`ReactElement<EvoDialogBannerProps, string | JSXElementConstructor<any>> | null | undefined`}}},tags:{}}}catch{}})))()}function T({src:e,position:t,className:n,style:r,children:i,...a}){return(0,D.jsx)(`div`,{...a,className:(0,E.default)(`dialog__image`,n),style:{...r,backgroundImage:e?`url(${e})`:r?.backgroundImage,backgroundPosition:t??r?.backgroundPosition},children:i})}var E,D;function O(){return(O=t((()=>{E=e(i(),1),D=r();try{T.displayName=`EvoDialogBanner`,T.__docgenInfo={description:``,displayName:`EvoDialogBanner`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-banner.tsx`,methods:[],props:{src:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`URL of the banner image.`,name:`src`,required:!1,tags:{},type:{name:`string | undefined`}},position:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`CSS background position used for the banner image.`,name:`position`,required:!1,tags:{},type:{name:`BackgroundPosition<string | number> | undefined`}}},tags:{}}}catch{}})))()}function k({className:e,onClick:t,...n}){let{requestClose:r}=h(),i=(0,A.useCallback)(e=>{r(),t?.(e)},[t,r]);return(0,M.jsx)(d,{...n,className:(0,j.default)(`dialog__close`,e),onClick:i,children:(0,M.jsx)(p,{})})}var A,j,M;function N(){return(N=t((()=>{A=n(),j=e(i(),1),u(),f(),b(),M=r();try{k.displayName=`EvoDialogClose`,k.__docgenInfo={description:``,displayName:`EvoDialogClose`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-close.tsx`,methods:[],props:{priority:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Button priority level.`,name:`priority`,required:!1,tags:{},type:{name:`Priority | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement> | undefined`}},partiallyDisabled:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Visually disabled but still focusable (`aria-disabled`).",name:`partiallyDisabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Alternative size: `large` or `small`.",name:`size`,required:!1,tags:{},type:{name:`Size | undefined`}},transparent:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Transparent background.`,name:`transparent`,required:!1,tags:{},type:{name:`boolean | undefined`}},href:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`undefined`}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},onEscape:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Triggered on Escape key press.`,name:`onEscape`,required:!1,tags:{},type:{name:`((e: KeyboardEvent<HTMLButtonElement>) => void) | undefined`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:`a11yText`,required:!0,tags:{},type:{name:`string | null`}}},tags:{}}}catch{}})))()}function P({className:e,children:t,...n}){return(0,ae.jsx)(`div`,{...n,className:(0,F.default)(`dialog__footer`,e),children:t})}var F,ae;function oe(){return(oe=t((()=>{F=e(i(),1),ae=r();try{P.displayName=`EvoDialogFooter`,P.__docgenInfo={description:``,displayName:`EvoDialogFooter`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-footer.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function I({className:e,children:t,...n}){return(0,R.jsx)(`div`,{...n,className:(0,L.default)(`dialog__header`,e),children:t})}var L,R;function z(){return(z=t((()=>{L=e(i(),1),R=r();try{I.displayName=`EvoDialogHeader`,I.__docgenInfo={description:``,displayName:`EvoDialogHeader`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-header.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function B({className:e,children:t,...n}){return(0,H.jsx)(`div`,{...n,className:(0,V.default)(`dialog__main`,e),children:t})}var V,H;function U(){return(U=t((()=>{V=e(i(),1),H=r();try{B.displayName=`EvoDialogMain`,B.__docgenInfo={description:``,displayName:`EvoDialogMain`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-main.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function W({className:e,...t}){return(0,K.jsx)(d,{...t,className:(0,G.default)(`dialog__prev`,e),children:(0,K.jsx)(m,{})})}var G,K;function se(){return(se=t((()=>{G=e(i(),1),u(),ne(),K=r();try{W.displayName=`EvoDialogPrevious`,W.__docgenInfo={description:``,displayName:`EvoDialogPrevious`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-previous.tsx`,methods:[],props:{priority:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Button priority level.`,name:`priority`,required:!1,tags:{},type:{name:`Priority | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement> | undefined`}},partiallyDisabled:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Visually disabled but still focusable (`aria-disabled`).",name:`partiallyDisabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Alternative size: `large` or `small`.",name:`size`,required:!1,tags:{},type:{name:`Size | undefined`}},transparent:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Transparent background.`,name:`transparent`,required:!1,tags:{},type:{name:`boolean | undefined`}},href:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`undefined`}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},onEscape:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Triggered on Escape key press.`,name:`onEscape`,required:!1,tags:{},type:{name:`((e: KeyboardEvent<HTMLButtonElement>) => void) | undefined`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:`a11yText`,required:!0,tags:{},type:{name:`string | null`}}},tags:{}}}catch{}})))()}function q({as:e=`h2`,id:t,className:n,children:r,...i}){let{headerId:a,setHeaderId:o}=h(),ee=t??a;return t&&o(t),(0,le.jsx)(e,{...i,id:ee,className:(0,ce.default)(`dialog__title`,n),children:r})}var ce,le;function ue(){return(ue=t((()=>{ce=e(i(),1),b(),le=r();try{q.displayName=`EvoDialogTitle`,q.__docgenInfo={description:``,displayName:`EvoDialogTitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-title.tsx`,methods:[],props:{as:{defaultValue:{value:`h2`},declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Heading element used for the dialog title. Defaults to `h2`.",name:`as`,required:!1,tags:{},type:{name:`ElementType | undefined`}}},tags:{}}}catch{}})))()}var J,Y,de,X,Z,Q,$,fe;function pe(){return(pe=t((()=>{J=n(),te(),w(),O(),N(),oe(),z(),U(),se(),ue(),Y=r(),de={title:`navigation & disclosure/evo-dialog`,component:x,subcomponents:{EvoDialogBanner:T,EvoDialogHeader:I,EvoDialogTitle:q,EvoDialogClose:k,EvoDialogPrevious:W,EvoDialogMain:B,EvoDialogFooter:P},tags:[`autodocs`],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{open:{control:`boolean`},defaultOpen:{control:`boolean`,table:{defaultValue:{summary:`false`}}},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}},size:{control:`select`,options:[`wide`,`narrow`,`large`]},closedby:{control:`select`,options:[`any`,`closerequest`,`none`],table:{defaultValue:{summary:`any`}}},banner:{control:!1},children:{control:!1}},args:{closedby:`any`}},X={render:e=>{let[t,n]=(0,J.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog`}),(0,Y.jsx)(`p`,{children:`Some outside content...`}),(0,Y.jsxs)(x,{...e,open:t,onOpenChange:r,children:[(0,Y.jsxs)(I,{children:[(0,Y.jsx)(q,{children:`Dialog Title`}),(0,Y.jsx)(k,{a11yText:`Close Dialog`})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(`p`,{children:`This is the default dialog content.`}),(0,Y.jsx)(`p`,{children:(0,Y.jsx)(`a`,{href:`https://www.ebay.com`,children:`www.ebay.com`})})]}),(0,Y.jsx)(P,{children:(0,Y.jsx)(l,{priority:`primary`,onClick:()=>r(!1),children:`Done`})})]})]})}},Z={render:e=>{let[t,n]=(0,J.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog With Banner`}),(0,Y.jsxs)(x,{...e,open:t,onOpenChange:r,banner:(0,Y.jsx)(T,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,position:`top`}),children:[(0,Y.jsxs)(I,{children:[(0,Y.jsx)(q,{children:`Dialog Title`}),(0,Y.jsx)(k,{a11yText:`Close Dialog`})]}),(0,Y.jsx)(B,{children:(0,Y.jsx)(`p`,{children:`This dialog uses an expressive banner image.`})})]})]})}},Q={render:e=>{let[t,n]=(0,J.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`style`,{children:`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        `}),(0,Y.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog With Custom Banner`}),(0,Y.jsxs)(x,{...e,open:t,onOpenChange:r,banner:(0,Y.jsx)(T,{className:`banner-demo`,children:`Custom Banner`}),children:[(0,Y.jsxs)(I,{children:[(0,Y.jsx)(W,{a11yText:`Back`}),(0,Y.jsx)(q,{children:`Dialog Title`}),(0,Y.jsx)(k,{a11yText:`Close Dialog`})]}),(0,Y.jsx)(B,{children:(0,Y.jsx)(`p`,{children:`This dialog uses custom content inside the banner instead of a background image.`})})]})]})}},$={render:e=>{let[t,n]=(0,J.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog With Previous Action`}),(0,Y.jsxs)(x,{...e,open:t,onOpenChange:r,children:[(0,Y.jsxs)(I,{children:[(0,Y.jsx)(W,{a11yText:`Back`}),(0,Y.jsx)(q,{children:`Dialog Title`}),(0,Y.jsx)(k,{a11yText:`Close Dialog`})]}),(0,Y.jsx)(B,{children:(0,Y.jsx)(`p`,{children:`This dialog includes a previous navigation action.`})})]})]})}},fe=[`Default`,`Banner`,`CustomBanner`,`WithPrevious`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}pe();export{Z as Banner,Q as CustomBanner,X as Default,$ as WithPrevious,fe as __namedExportsOrder,de as default};