import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./use-ref-tee-D2-WpPlp.js";import{n as ee,t as s}from"./use-controllable-id-BAx7nHf3.js";import{t as c}from"./dialog-Dd2_jjCz.js";import{n as te,t as l}from"./button-wWS1HgGa.js";import{n as u,t as d}from"./icon-button-DE-W2DMa.js";import{n as f,t as p}from"./close-16-DTG5IIUU.js";import{n as m,t as h}from"./chevron-left-16-DS2da_A7.js";function g(){let e=(0,v.use)(b);if(!e)throw Error(`EvoDialog sub-components must be used within EvoDialog!`);return e}function _({headerId:e,setHeaderId:t,requestClose:n,children:r}){let i=(0,v.useMemo)(()=>({headerId:e,setHeaderId:t,requestClose:n}),[e,t,n]);return(0,y.jsx)(b,{value:i,children:r})}var v,y,b;function x(){return(x=t((()=>{v=n(),y=r(),b=(0,v.createContext)(null);try{_.displayName=`DialogProvider`,_.__docgenInfo={description:``,displayName:`DialogProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/context.tsx`,methods:[],props:{headerId:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`headerId`,required:!0,tags:{},type:{name:`string`}},setHeaderId:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`setHeaderId`,required:!0,tags:{},type:{name:`(id: string) => void`}},requestClose:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`requestClose`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function ne(){return typeof HTMLDialogElement<`u`&&`closedBy`in HTMLDialogElement.prototype}function S({open:e,defaultOpen:t=!1,onOpenChange:n,size:r,closedby:i=`any`,banner:o,className:s,children:c,ref:te,"aria-labelledby":l,onCancel:u,onAnimationEnd:d,onClick:f,onKeyDown:p,...m}){let h=e!==void 0,[g,v]=(0,C.useState)(t),y=h?e:g,[b,x]=a(te),[S,T]=ee();(0,C.useEffect)(()=>{let e=x.current;y&&e&&!e.open&&e.showModal()},[y,x]);let E=(0,C.useCallback)(()=>{h||v(!1),n?.(!1)},[h,n]),D=(0,C.useCallback)(()=>{let e=x.current;e&&typeof e.requestClose==`function`?e.requestClose():E()},[E,x]),O=(0,C.useCallback)(e=>{e.preventDefault(),E(),u?.(e)},[E,u]),k=(0,C.useCallback)(e=>{let t=x.current;e.target===t&&!y&&t.close(),d?.(e)},[y,x,d]),A=(0,C.useCallback)(e=>{f?.(e),!ne()&&i===`any`&&e.target===e.currentTarget&&E()},[E,i,f]),j=(0,C.useCallback)(e=>{p?.(e),!ne()&&i===`none`&&e.key===`Escape`&&e.preventDefault()},[i,p]),M=l?`${l} ${S}`:S;return(0,w.jsx)(_,{headerId:S,setHeaderId:T,requestClose:D,children:(0,w.jsxs)(`dialog`,{...m,ref:b,closedby:i,"aria-labelledby":M,className:(0,re.default)(`dialog`,!y&&`dialog--close`,r&&`dialog--${r}`,o&&`dialog--expressive`,s),onCancel:O,onAnimationEnd:k,onClick:A,onKeyDown:j,children:[o,c]})})}var C,re,w;function T(){return(T=t((()=>{C=n(),re=e(i(),1),x(),s(),o(),c(),w=r();try{S.displayName=`EvoDialog`,S.__docgenInfo={description:`Standard dialogs focus the user's attention on a specific piece of content or
task.

Use \`open\` with \`onOpenChange\` for controlled state, or \`defaultOpen\` for
state managed by the dialog. \`EvoDialogTitle\` labels the dialog, while
\`EvoDialogHeader\` and \`EvoDialogMain\` provide its named regions.

## Usage

\`\`\`tsx
import {
  EvoDialog,
  EvoDialogClose,
  EvoDialogHeader,
  EvoDialogMain,
  EvoDialogTitle,
} from "@evo-web/react/dialog";

<EvoDialog open={isOpen} onOpenChange={setIsOpen}>
  <EvoDialogHeader>
    <EvoDialogTitle>Order details</EvoDialogTitle>
    <EvoDialogClose a11yText="Close order details" />
  </EvoDialogHeader>
  <EvoDialogMain>Review the items in your order.</EvoDialogMain>
</EvoDialog>
\`\`\``,displayName:`EvoDialog`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Controls whether the dialog is open. Pair with `onOpenChange`; omit to use\n`defaultOpen` for uncontrolled state.",name:`open`,required:!1,tags:{},type:{name:`boolean`}},defaultOpen:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Sets the initial open state when `open` is omitted. Defaults to `false`.",name:`defaultOpen`,required:!1,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Called with `false` when the dialog receives an allowed close request.",name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void)`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`Selects a supported dialog width treatment.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`DialogSize`,value:[{value:`"large"`},{value:`"wide"`},{value:`"narrow"`}]}},closedby:{defaultValue:{value:`any`},declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:'Sets which user interactions can request dismissal through the native\n`closedby` behavior. Defaults to `"any"`.',name:`closedby`,required:!1,tags:{},type:{name:`enum`,raw:`DialogClosedBy`,value:[{value:`"none"`},{value:`"any"`},{value:`"closerequest"`}]}},banner:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Banner rendered before the dialog contents. Use `EvoDialogBanner` to apply\nthe expressive image structure expected by Skin.",name:`banner`,required:!1,tags:{},type:{name:`ReactElement<EvoDialogBannerProps, string | JSXElementConstructor<any>> | null`}}},tags:{summary:`Modal window for focused tasks or information.`}}}catch{}})))()}function E({src:e,position:t,className:n,style:r,children:i,...a}){return(0,O.jsx)(`div`,{...a,className:(0,D.default)(`dialog__image`,n),style:{...r,backgroundImage:e?`url(${e})`:r?.backgroundImage,backgroundPosition:t??r?.backgroundPosition},children:i})}var D,O;function k(){return(k=t((()=>{D=e(i(),1),O=r();try{E.displayName=`EvoDialogBanner`,E.__docgenInfo={description:"A banner adds visual context to an expressive dialog. Use a background image\nor provide custom content when it helps set the tone for the task.\n\nPass the banner to `EvoDialog` through its `banner` prop.",displayName:`EvoDialogBanner`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-banner.tsx`,methods:[],props:{src:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`Image URL rendered as the banner's CSS background image.`,name:`src`,required:!1,tags:{},type:{name:`string`}},position:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Background position applied to the image supplied through `src`.",name:`position`,required:!1,tags:{},type:{name:`BackgroundPosition<string | number>`}}},tags:{summary:`Expressive banner region for a dialog.`}}}catch{}})))()}function A({className:e,onClick:t,...n}){let{requestClose:r}=g(),i=(0,j.useCallback)(e=>{r(),t?.(e)},[t,r]);return(0,N.jsx)(d,{...n,className:(0,M.default)(`dialog__close`,e),onClick:i,children:(0,N.jsx)(p,{})})}var j,M,N;function ie(){return(ie=t((()=>{j=n(),M=e(i(),1),u(),f(),x(),N=r();try{A.displayName=`EvoDialogClose`,A.__docgenInfo={description:`Dismisses the dialog when activated.

Provide localized \`a11yText\` that identifies the action. Activating the
button requests the containing dialog to close.`,displayName:`EvoDialogClose`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-close.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement>`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:`a11yText`,required:!0,tags:{},type:{name:`string | null`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Alternative size: `large` or `small`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`Size`,value:[{value:`"small"`},{value:`"large"`}]}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},priority:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Button priority level.`,name:`priority`,required:!1,tags:{},type:{name:`enum`,raw:`Priority`,value:[{value:`"none"`},{value:`"primary"`},{value:`"secondary"`},{value:`"tertiary"`}]}},partiallyDisabled:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Visually disabled but still focusable (`aria-disabled`).",name:`partiallyDisabled`,required:!1,tags:{},type:{name:`boolean`}},transparent:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Transparent background.`,name:`transparent`,required:!1,tags:{},type:{name:`boolean`}},href:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`undefined`}},onEscape:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Triggered on `Escape` key press.",name:`onEscape`,required:!1,tags:{},type:{name:`((e: KeyboardEvent<HTMLButtonElement>) => void)`}}},tags:{summary:`Close action for a dialog.`}}}catch{}})))()}function P({className:e,children:t,...n}){return(0,oe.jsx)(`div`,{...n,className:(0,ae.default)(`dialog__footer`,e),children:t})}var ae,oe;function se(){return(se=t((()=>{ae=e(i(),1),oe=r();try{P.displayName=`EvoDialogFooter`,P.__docgenInfo={description:`Use the footer for supporting information or actions that belong at the end
of a dialog.`,displayName:`EvoDialogFooter`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-footer.tsx`,methods:[],props:{},tags:{summary:`Footer action region for a dialog.`}}}catch{}})))()}function F({className:e,children:t,...n}){return(0,L.jsx)(`div`,{...n,className:(0,I.default)(`dialog__header`,e),children:t})}var I,L;function R(){return(R=t((()=>{I=e(i(),1),L=r();try{F.displayName=`EvoDialogHeader`,F.__docgenInfo={description:`Use the header to keep the dialog title and any previous or close actions
together at the top of the dialog.`,displayName:`EvoDialogHeader`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-header.tsx`,methods:[],props:{},tags:{summary:`Header region for a dialog.`}}}catch{}})))()}function z({className:e,children:t,...n}){return(0,V.jsx)(`div`,{...n,className:(0,B.default)(`dialog__main`,e),children:t})}var B,V;function H(){return(H=t((()=>{B=e(i(),1),V=r();try{z.displayName=`EvoDialogMain`,z.__docgenInfo={description:`The main region holds the information or task at the center of a dialog.`,displayName:`EvoDialogMain`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-main.tsx`,methods:[],props:{},tags:{summary:`Main content region for a dialog.`}}}catch{}})))()}function U({className:e,...t}){return(0,G.jsx)(d,{...t,className:(0,W.default)(`dialog__prev`,e),children:(0,G.jsx)(h,{})})}var W,G;function ce(){return(ce=t((()=>{W=e(i(),1),u(),m(),G=r();try{U.displayName=`EvoDialogPrevious`,U.__docgenInfo={description:`Moves back within a multi-step dialog.

Provide localized \`a11yText\` that identifies the destination or action. The
application owns the navigation behavior.`,displayName:`EvoDialogPrevious`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-previous.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement>`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:'Accessible label for the button, mapped to `aria-label`. English default to\nbe overridden is `"button"`. Pass `null` explicitly _only_ if alternative\naccessibility information is present.',name:`a11yText`,required:!0,tags:{},type:{name:`string | null`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Alternative size: `large` or `small`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`Size`,value:[{value:`"small"`},{value:`"large"`}]}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},priority:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Button priority level.`,name:`priority`,required:!1,tags:{},type:{name:`enum`,raw:`Priority`,value:[{value:`"none"`},{value:`"primary"`},{value:`"secondary"`},{value:`"tertiary"`}]}},partiallyDisabled:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Visually disabled but still focusable (`aria-disabled`).",name:`partiallyDisabled`,required:!1,tags:{},type:{name:`boolean`}},transparent:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:`Transparent background.`,name:`transparent`,required:!1,tags:{},type:{name:`boolean`}},href:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`undefined`}},onEscape:{defaultValue:null,declarations:[{fileName:`evo-react/src/icon-button/types.ts`,name:`TypeLiteral`}],description:"Triggered on `Escape` key press.",name:`onEscape`,required:!1,tags:{},type:{name:`((e: KeyboardEvent<HTMLButtonElement>) => void)`}}},tags:{summary:`Previous-step action for a dialog.`}}}catch{}})))()}function K({as:e=`h2`,id:t,className:n,children:r,...i}){let{headerId:a,setHeaderId:o}=g(),ee=t??a;return t&&o(t),(0,ue.jsx)(e,{...i,id:ee,className:(0,le.default)(`dialog__title`,n),children:r})}var le,ue;function de(){return(de=t((()=>{le=e(i(),1),x(),ue=r();try{K.displayName=`EvoDialogTitle`,K.__docgenInfo={description:`Names the purpose of the dialog.

The title automatically labels the dialog. Use \`as\` to choose the heading
level that fits the page hierarchy, and provide \`id\` only when another part
of the page needs to reference the title.`,displayName:`EvoDialogTitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-title.tsx`,methods:[],props:{as:{defaultValue:{value:`h2`},declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`Heading element used for the dialog title. Match it to the surrounding
page's heading hierarchy. Defaults to \`"h2"\`.`,name:`as`,required:!1,tags:{},type:{name:`ElementType`}}},tags:{summary:`Accessible title for a dialog.`}}}catch{}})))()}var q,J,Y,X,Z,Q,$,fe;function pe(){return(pe=t((()=>{q=n(),te(),T(),k(),ie(),se(),R(),H(),ce(),de(),J=r(),Y={title:`Navigation & Disclosure/EvoDialog`,component:S,subcomponents:{EvoDialogBanner:E,EvoDialogHeader:F,EvoDialogTitle:K,EvoDialogClose:A,EvoDialogPrevious:U,EvoDialogMain:z,EvoDialogFooter:P},argTypes:{open:{control:`boolean`},defaultOpen:{control:`boolean`},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}},size:{control:`select`},closedby:{control:`select`},banner:{control:!1},children:{control:!1}},args:{closedby:`any`}},X={render:e=>{let[t,n]=(0,q.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog`}),(0,J.jsx)(`p`,{children:`Some outside content...`}),(0,J.jsxs)(S,{...e,open:t,onOpenChange:r,children:[(0,J.jsxs)(F,{children:[(0,J.jsx)(K,{children:`Dialog Title`}),(0,J.jsx)(A,{a11yText:`Close Dialog`})]}),(0,J.jsxs)(z,{children:[(0,J.jsx)(`p`,{children:`This is the default dialog content.`}),(0,J.jsx)(`p`,{children:(0,J.jsx)(`a`,{href:`https://www.ebay.com`,children:`www.ebay.com`})})]}),(0,J.jsx)(P,{children:(0,J.jsx)(l,{priority:`primary`,onClick:()=>r(!1),children:`Done`})})]})]})}},Z={render:e=>{let[t,n]=(0,q.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog With Banner`}),(0,J.jsxs)(S,{...e,open:t,onOpenChange:r,banner:(0,J.jsx)(E,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,position:`top`}),children:[(0,J.jsxs)(F,{children:[(0,J.jsx)(K,{children:`Dialog Title`}),(0,J.jsx)(A,{a11yText:`Close Dialog`})]}),(0,J.jsx)(z,{children:(0,J.jsx)(`p`,{children:`This dialog uses an expressive banner image.`})})]})]})}},Q={render:e=>{let[t,n]=(0,q.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`style`,{children:`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        `}),(0,J.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog With Custom Banner`}),(0,J.jsxs)(S,{...e,open:t,onOpenChange:r,banner:(0,J.jsx)(E,{className:`banner-demo`,children:`Custom Banner`}),children:[(0,J.jsxs)(F,{children:[(0,J.jsx)(U,{a11yText:`Back`}),(0,J.jsx)(K,{children:`Dialog Title`}),(0,J.jsx)(A,{a11yText:`Close Dialog`})]}),(0,J.jsx)(z,{children:(0,J.jsx)(`p`,{children:`This dialog uses custom content inside the banner instead of a background image.`})})]})]})}},$={render:e=>{let[t,n]=(0,q.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,J.jsxs)(`div`,{children:[(0,J.jsx)(l,{priority:`secondary`,onClick:()=>n(!0),children:`Open Dialog With Previous Action`}),(0,J.jsxs)(S,{...e,open:t,onOpenChange:r,children:[(0,J.jsxs)(F,{children:[(0,J.jsx)(U,{a11yText:`Back`}),(0,J.jsx)(K,{children:`Dialog Title`}),(0,J.jsx)(A,{a11yText:`Close Dialog`})]}),(0,J.jsx)(z,{children:(0,J.jsx)(`p`,{children:`This dialog includes a previous navigation action.`})})]})]})}},fe=[`Default`,`Banner`,`CustomBanner`,`WithPreviousAction`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`A standard dialog pairs a clear title with focused content and an action.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`An image provides visual context for the dialog.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`A banner can also hold branded or custom visual content.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`A multi-step flow includes a way to return to the previous step.`,...$.parameters?.docs?.description}}}})))()}pe();export{Z as Banner,Q as CustomBanner,X as Default,$ as WithPreviousAction,fe as __namedExportsOrder,Y as default};