import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{f as a,o,t as s,u as c}from"./ebay-dialog-base-Dkvy9hiC.js";import{n as l,t as u}from"./ebay-button-B_FEPJ7h.js";var d,f,p,m,h;function g(){return(g=t((()=>{d=e(n()),f=e(r()),s(),p=30,m=`drawer-dialog`,h=({expanded:e=!1,noHandle:t,onClose:n=()=>{},onCollapsed:r=()=>{},onExpanded:i=()=>{},a11yMaximizeText:s,a11yMinimizeText:c,children:l,...u})=>{let h=[],[g,_]=(0,d.useState)(e);(0,d.useEffect)(()=>{_(e)},[e]);let v=e=>{_(e),e?i():r()},y=e=>{h=Array.from(e.changedTouches).map(({identifier:e,pageY:t})=>({identifier:e,pageY:t}))},b=e=>{Array.from(e.changedTouches).forEach(({identifier:e})=>{let t=h.findIndex(t=>t.identifier===e);t>-1&&h.splice(t,1)})},x=t?null:d.createElement(`button`,{"aria-label":g?c:s,className:`${m}__handle`,onClick:()=>v(!g),onScroll:()=>v(!0),onTouchStart:y,onTouchMove:e=>{h.length&&Array.from(e.changedTouches).forEach(({identifier:t,pageY:r})=>{let i=h.findIndex(e=>e.identifier===t),a=r-h[i].pageY;a>p?(g?v(!1):n(),b(e)):a<-30&&(v(!0),b(e))})},onTouchEnd:b,type:`button`}),S=d.Children.toArray(l),C=S.find(({type:e})=>e===a),w=S.filter(({type:e})=>e!==a);return d.createElement(o,{...u,classPrefix:m,onCloseBtnClick:n,className:(0,f.default)(u.className,`${m}--mask-fade-slow`),windowClass:(0,f.default)(u.windowClass,`${m}__window`,`${m}__window--slide`,{[`${m}__window--expanded`]:g}),onBackgroundClick:n,top:x},C||d.createElement(a,null),w)};try{h.displayName=`drawer`,h.__docgenInfo={description:``,displayName:`drawer`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,methods:[],props:{expanded:{defaultValue:{value:`false`},declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`expanded`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},open:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`open`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},noHandle:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`noHandle`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},focus:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`focus`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`RefObject<HTMLAnchorElement & HTMLButtonElement> | undefined`}},a11yMinimizeText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`a11yMinimizeText`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`string | undefined`}},a11yMaximizeText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`a11yMaximizeText`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`string | undefined`}},onClose:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`onClose`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`(() => void) | undefined`}},onExpanded:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`onExpanded`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`(() => void) | undefined`}},onCollapsed:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`}],description:``,name:`onCollapsed`,parent:{fileName:`ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx`,name:`EbayDrawerProps`},required:!1,tags:{},type:{name:`(() => void) | undefined`}},baseEl:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`baseEl`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`"aside" | "div" | "span" | undefined`}},classPrefix:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`classPrefix`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ClassPrefix | undefined`}},windowClass:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`windowClass`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`string | undefined`}},windowType:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`windowType`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`"compact" | undefined`}},header:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`header`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ReactElement<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, string | JSXElementConstructor<...>> | undefined`}},footer:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`footer`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},actions:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`actions`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},isModal:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`isModal`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},top:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`top`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},buttonPosition:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`buttonPosition`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ButtonPosition | undefined`}},ariaLabelledby:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`ariaLabelledby`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`string | undefined`}},a11yCloseText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`a11yCloseText`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`string | undefined`}},onOpen:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`onOpen`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`(() => void) | undefined`}},onCloseBtnClick:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`onCloseBtnClick`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`DialogCloseEventHandler | undefined`}},onBackgroundClick:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`onBackgroundClick`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`DialogCloseEventHandler | undefined`}},mainId:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`mainId`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`string | undefined`}},ignoreEscape:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`ignoreEscape`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},closeButton:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`closeButton`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},previousButton:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`previousButton`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | undefined`}},animated:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`animated`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},closeButtonClass:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`closeButtonClass`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`string | undefined`}},transitionElement:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`}],description:``,name:`transitionElement`,parent:{fileName:`ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx`,name:`DialogBaseProps`},required:!1,tags:{},type:{name:`TransitionElement | undefined`}}},tags:{}}}catch{}})))()}function _(){return(_=t((()=>{g()})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{v=e(n()),u(),s(),_(),y=i(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={component:h,title:`deprecated/ebay-drawer-dialog-deprecated`,tags:[`autodocs`],parameters:{docs:{description:{component:`**Deprecated will be removed next major** (Use \`EbayLightboxDialog\` instead)

## Usage

### Import

\`\`\`jsx harmony
import { EbayDrawerDialogDeprecated } from "@ebay/ui-core-react/ebay-drawer-dialog-deprecated";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/drawer-dialog";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/drawer-dialog.css";
@import "@ebay/skin/icon.css";
\`\`\`
### Simple opened dialog

### Basic

\`\`\`jsx
<EbayDrawerDialogDeprecated open a11yClosetext="Close Drawer">
    Hello World
</EbayDrawerDialogDeprecated>
\`\`\`

## Child components

### EbayDialogHeader

Will render a header content for the dialog. Will always render the header element even if this is not present

### EbayDialogFooter

Will render the footer content for the dialog. If not present then will not have any footer.

\`\`\`jsx
<EbayDrawerDialogDeprecated>
    <EbayDialogHeader>Title</EbayDialogHeader>
    Some text
    <EbayDialogFooter>(c)2021 eBay Inc.</EbayDialogFooter>
</EbayDrawerDialogDeprecated>
\`\`\``}}},argTypes:{expanded:{description:`Whether the drawer is expanded to full height or max 50%. Controlled.`,control:`boolean`},open:{description:`Whether drawer is open. Controlled.`,control:`boolean`},noHandle:{description:`Whether handle will be shown or not.`,control:`boolean`},focus:{description:`An id for an element which will receive focus when the drawer opens (defaults to close button).`,control:`text`},a11yCloseText:{description:`A11y text for close button and mask. Required only when close button exists.`,control:`text`},a11yMinimizeText:{description:`A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer. Required only when draggable handle exists.`,control:`text`},a11yMaximizeText:{description:`A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer. Required only when draggable handle exists.`,control:`text`},animated:{description:`Renders the dialog with an animation. Note that the dialog will always be present in the DOM`,control:`boolean`},onClose:{description:`Triggered when the drawer is closed`,action:`onClose`,table:{category:`Events`}},onExpanded:{description:`Triggered when the drawer is expanded to full height`,action:`onExpanded`,table:{category:`Events`}},onCollapsed:{description:`Triggered when the drawer is collapsed`,action:`onCollapsed`,table:{category:`Events`}}}},S=Array(100).fill(1).map((e,t)=>(0,y.jsx)(`p`,{children:t+1},t)),C=e=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!t),children:`Open Drawer`}),(0,y.jsxs)(h,{...e,open:t,onOpen:b(`onOpen`),onClose:()=>{b(`onClose`)(),n(!1)},onExpanded:b(`onExpanded`),onCollapsed:b(`onCollapsed`),a11yCloseText:`Close`,a11yMaximizeText:`Maximize`,a11yMinimizeText:`Minimize`,children:[(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]})},w=e=>(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{...e,open:!0,onClose:b(`Close button clicked.`),a11yCloseText:`Close drawer`,a11yMaximizeText:`Maximize`,a11yMinimizeText:`Minimize`,children:[(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})}),T=e=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!t),children:`Open Drawer`}),(0,y.jsxs)(h,{...e,noHandle:!0,open:t,onClose:()=>n(!1),a11yMaximizeText:`Maximize`,a11yMinimizeText:`Minimize`,a11yCloseText:`Close`,children:[(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]})},E=e=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!t),children:`Open Drawer`}),(0,y.jsxs)(h,{...e,noHandle:!0,buttonPosition:`hidden`,open:t,onClose:()=>n(!1),children:[(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]})},D=e=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!t),children:`Open Drawer`}),S,(0,y.jsxs)(h,{...e,open:t,onClose:()=>n(!1),a11yMaximizeText:`Maximize`,a11yMinimizeText:`Minimize`,a11yCloseText:`Close`,children:[(0,y.jsx)(a,{children:`Scrollable content`}),S,(0,y.jsx)(c,{children:(0,y.jsx)(l,{onClick:()=>n(!1),children:`Close`})})]})]})},O=e=>{let[t,n]=(0,v.useState)(!1),r=(0,v.createRef)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!t),children:`Open Drawer`}),(0,y.jsxs)(h,{...e,open:t,focus:r,onClose:()=>n(!1),a11yMaximizeText:`Maximize`,a11yMinimizeText:`Minimize`,a11yCloseText:`Close`,children:[(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})}),(0,y.jsx)(c,{children:(0,y.jsx)(l,{ref:r,onClick:()=>n(!1),children:`Close`})})]})]})},k=e=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!t),children:`Open Drawer`}),(0,y.jsxs)(h,{...e,open:t,onClose:()=>n(!1),animated:!1,a11yMaximizeText:`Maximize`,a11yMinimizeText:`Minimize`,a11yCloseText:`Close`,children:[(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]})},A=e=>{let[t,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>n(!t),children:`Open Drawer`}),(0,y.jsxs)(h,{...e,open:t,onClose:()=>n(!1),expanded:r,a11yMaximizeText:`Maximize`,a11yMinimizeText:`Minimize`,a11yCloseText:`Close`,children:[(0,y.jsx)(`p`,{children:`Trigger Dialog Expanded programmatically.`}),(0,y.jsx)(l,{onClick:()=>i(!r),priority:`secondary`,children:r?`Collapse Drawer`:`Expand Drawer`})]})]})},j=[`_Default`,`_Opened`,`_WithoutHandle`,`_WithoutHandleAndCloseButton`,`_LotsOfContent`,`_CustomFocus`,`_WithoutAnimation`,`_TriggerExpanded`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated {...args} open={open} onOpen={action("onOpen")} onClose={() => {
      action("onClose")();
      setOpen(false);
    }} onExpanded={action("onExpanded")} onCollapsed={action("onCollapsed")} a11yCloseText="Close" a11yMaximizeText="Maximize" a11yMinimizeText="Minimize">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialogDeprecated>
        </>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <>
        <EbayDrawerDialogDeprecated {...args} open onClose={action("Close button clicked.")} a11yCloseText="Close drawer" a11yMaximizeText="Maximize" a11yMinimizeText="Minimize">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayDrawerDialogDeprecated>
    </>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated {...args} noHandle open={open} onClose={() => setOpen(false)} a11yMaximizeText="Maximize" a11yMinimizeText="Minimize" a11yCloseText="Close">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialogDeprecated>
        </>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated {...args} noHandle buttonPosition="hidden" open={open} onClose={() => setOpen(false)}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialogDeprecated>
        </>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            {numbers}
            <EbayDrawerDialogDeprecated {...args} open={open} onClose={() => setOpen(false)} a11yMaximizeText="Maximize" a11yMinimizeText="Minimize" a11yCloseText="Close">
                <EbayDialogHeader>Scrollable content</EbayDialogHeader>
                {numbers}
                <EbayDialogFooter>
                    <EbayButton onClick={() => setOpen(false)}>Close</EbayButton>
                </EbayDialogFooter>
            </EbayDrawerDialogDeprecated>
        </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const focusRef = createRef<HTMLButtonElement>();
  return <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated {...args} open={open} focus={focusRef as unknown as ComponentProps<typeof EbayDrawerDialogDeprecated>["focus"]} onClose={() => setOpen(false)} a11yMaximizeText="Maximize" a11yMinimizeText="Minimize" a11yCloseText="Close">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton ref={focusRef as unknown as ComponentProps<typeof EbayButton>["ref"]} onClick={() => setOpen(false)}>
                        Close
                    </EbayButton>
                </EbayDialogFooter>
            </EbayDrawerDialogDeprecated>
        </>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated {...args} open={open} onClose={() => setOpen(false)} animated={false} a11yMaximizeText="Maximize" a11yMinimizeText="Minimize" a11yCloseText="Close">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialogDeprecated>
        </>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialogDeprecated {...args} open={open} onClose={() => setOpen(false)} expanded={expanded} a11yMaximizeText="Maximize" a11yMinimizeText="Minimize" a11yCloseText="Close">
                <p>Trigger Dialog Expanded programmatically.</p>

                <EbayButton onClick={() => setExpanded(!expanded)} priority="secondary">
                    {expanded ? "Collapse Drawer" : "Expand Drawer"}
                </EbayButton>
            </EbayDrawerDialogDeprecated>
        </>;
}`,...A.parameters?.docs?.source}}}})))()}M();export{O as _CustomFocus,C as _Default,D as _LotsOfContent,w as _Opened,A as _TriggerExpanded,k as _WithoutAnimation,T as _WithoutHandle,E as _WithoutHandleAndCloseButton,j as __namedExportsOrder,x as default};