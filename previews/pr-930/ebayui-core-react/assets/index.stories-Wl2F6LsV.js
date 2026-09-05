var J=Object.defineProperty;var a=(n,t)=>J(n,"name",{value:t,configurable:!0});import{r as i,R as e,c as k}from"./iframe-DXKVC7Wu.js";import{E as l}from"./button-BAvxCJp2.js";import{E as q,D as X,a as H}from"./dialog-previous-button-CGrVTs3d.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./index-CSGTE6jH.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./ebay-icon-chevron-left-16-D70GS6Gt.js";const S=30,u="drawer-dialog",s=a(({expanded:n=!1,noHandle:t,onClose:o=a(()=>{},"onClose"),onCollapsed:c=a(()=>{},"onCollapsed"),onExpanded:T=a(()=>{},"onExpanded"),a11yMaximizeText:V,a11yMinimizeText:L,children:R,...M})=>{let d=[];const[y,z]=i.useState(n);i.useEffect(()=>{z(n)},[n]);const b=a(r=>{z(r),r?T():c()},"setExpandedState"),F=a(r=>{d=Array.from(r.changedTouches).map(({identifier:p,pageY:m})=>({identifier:p,pageY:m}))},"handleTouchStart"),P=a(r=>{Array.from(r.changedTouches).forEach(({identifier:p})=>{const m=d.findIndex(N=>N.identifier===p);m>-1&&d.splice(m,1)})},"handleTouchEnd"),A=a(r=>{d.length&&Array.from(r.changedTouches).forEach(({identifier:p,pageY:m})=>{const N=d.findIndex(j=>j.identifier===p),v=m-d[N].pageY;v>S?(y?b(!1):o(),P(r)):v<-S&&(b(!0),P(r))})},"handleTouchMove"),U=t?null:e.createElement("button",{"aria-label":y?L:V,className:`${u}__handle`,onClick:a(()=>b(!y),"onClick"),onScroll:a(()=>b(!0),"onScroll"),onTouchStart:F,onTouchMove:A,onTouchEnd:P,type:"button"}),O=i.Children.toArray(R),W=O.find(({type:r})=>r===q),I=O.filter(({type:r})=>r!==q);return e.createElement(X,{...M,classPrefix:u,onCloseBtnClick:o,className:k(M.className,`${u}--mask-fade-slow`),windowClass:k(M.windowClass,`${u}__window`,`${u}__window--slide`,{[`${u}__window--expanded`]:y}),onBackgroundClick:o,top:U},W||e.createElement(q,null),I)},"EbayDrawerDialogDeprecated");try{s.displayName="drawer",s.__docgenInfo={description:"",displayName:"drawer",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",methods:[],props:{expanded:{defaultValue:{value:"false"},declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"expanded",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"boolean"}},open:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"open",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"boolean"}},noHandle:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"noHandle",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"boolean"}},focus:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"focus",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"RefObject<HTMLAnchorElement & HTMLButtonElement>"}},a11yMinimizeText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"a11yMinimizeText",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"string"}},a11yMaximizeText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"a11yMaximizeText",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"string"}},onClose:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"onClose",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"() => void"}},onExpanded:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"onExpanded",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"() => void"}},onCollapsed:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"}],description:"",name:"onCollapsed",parent:{fileName:"ebayui-core-react/src/ebay-drawer-dialog-deprecated/components/drawer.tsx",name:"EbayDrawerProps"},required:!1,tags:{},type:{name:"() => void"}},baseEl:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"baseEl",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:'"aside" | "div" | "span"'}},classPrefix:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"classPrefix",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ClassPrefix"}},windowClass:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"windowClass",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"string"}},windowType:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"windowType",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:'"compact"'}},header:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"header",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ReactElement<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, string | JSXElementConstructor<...>>"}},footer:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"footer",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},actions:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"actions",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},isModal:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"isModal",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"boolean"}},top:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"top",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},buttonPosition:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"buttonPosition",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ButtonPosition"}},ariaLabelledby:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"ariaLabelledby",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"string"}},a11yCloseText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"a11yCloseText",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"string"}},onOpen:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"onOpen",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"() => void"}},onCloseBtnClick:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"onCloseBtnClick",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"DialogCloseEventHandler"}},onBackgroundClick:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"onBackgroundClick",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"DialogCloseEventHandler"}},mainId:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"mainId",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"string"}},ignoreEscape:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"ignoreEscape",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"boolean"}},closeButton:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"closeButton",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},previousButton:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"previousButton",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},animated:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"animated",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"boolean"}},closeButtonClass:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"closeButtonClass",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"string"}},transitionElement:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"}],description:"",name:"transitionElement",parent:{fileName:"ebayui-core-react/src/ebay-dialog-base/components/dialogBase.tsx",name:"DialogBaseProps"},required:!1,tags:{},type:{name:"TransitionElement"}}},tags:{}}}catch{}const{action:g}=__STORYBOOK_MODULE_ACTIONS__,se={component:s,title:"deprecated/ebay-drawer-dialog-deprecated",tags:["autodocs"],parameters:{docs:{description:{component:`**Deprecated will be removed next major** (Use \`EbayLightboxDialog\` instead)

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
\`\`\``}}},argTypes:{expanded:{description:"Whether the drawer is expanded to full height or max 50%. Controlled.",control:"boolean"},open:{description:"Whether drawer is open. Controlled.",control:"boolean"},noHandle:{description:"Whether handle will be shown or not.",control:"boolean"},focus:{description:"An id for an element which will receive focus when the drawer opens (defaults to close button).",control:"text"},a11yCloseText:{description:"A11y text for close button and mask. Required only when close button exists.",control:"text"},a11yMinimizeText:{description:"A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer. Required only when draggable handle exists.",control:"text"},a11yMaximizeText:{description:"A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer. Required only when draggable handle exists.",control:"text"},animated:{description:"Renders the dialog with an animation. Note that the dialog will always be present in the DOM",control:"boolean"},onClose:{description:"Triggered when the drawer is closed",action:"onClose",table:{category:"Events"}},onExpanded:{description:"Triggered when the drawer is expanded to full height",action:"onExpanded",table:{category:"Events"}},onCollapsed:{description:"Triggered when the drawer is collapsed",action:"onCollapsed",table:{category:"Events"}}}},_=Array(100).fill(1).map((n,t)=>e.createElement("p",{key:t},t+1)),f=a(n=>{const[t,o]=i.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:a(()=>o(!t),"onClick")},"Open Drawer"),e.createElement(s,{...n,open:t,onOpen:g("onOpen"),onClose:a(()=>{g("onClose")(),o(!1)},"onClose"),onExpanded:g("onExpanded"),onCollapsed:g("onCollapsed"),a11yCloseText:"Close",a11yMaximizeText:"Maximize",a11yMinimizeText:"Minimize"},e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))))},"_Default"),x=a(n=>e.createElement(e.Fragment,null,e.createElement(s,{...n,open:!0,onClose:g("Close button clicked."),a11yCloseText:"Close drawer",a11yMaximizeText:"Maximize",a11yMinimizeText:"Minimize"},e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"_Opened"),w=a(n=>{const[t,o]=i.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:a(()=>o(!t),"onClick")},"Open Drawer"),e.createElement(s,{...n,noHandle:!0,open:t,onClose:a(()=>o(!1),"onClose"),a11yMaximizeText:"Maximize",a11yMinimizeText:"Minimize",a11yCloseText:"Close"},e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))))},"_WithoutHandle"),E=a(n=>{const[t,o]=i.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:a(()=>o(!t),"onClick")},"Open Drawer"),e.createElement(s,{...n,noHandle:!0,buttonPosition:"hidden",open:t,onClose:a(()=>o(!1),"onClose")},e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))))},"_WithoutHandleAndCloseButton"),D=a(n=>{const[t,o]=i.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:a(()=>o(!t),"onClick")},"Open Drawer"),_,e.createElement(s,{...n,open:t,onClose:a(()=>o(!1),"onClose"),a11yMaximizeText:"Maximize",a11yMinimizeText:"Minimize",a11yCloseText:"Close"},e.createElement(q,null,"Scrollable content"),_,e.createElement(H,null,e.createElement(l,{onClick:a(()=>o(!1),"onClick")},"Close"))))},"_LotsOfContent"),h=a(n=>{const[t,o]=i.useState(!1),c=i.createRef();return e.createElement(e.Fragment,null,e.createElement(l,{onClick:a(()=>o(!t),"onClick")},"Open Drawer"),e.createElement(s,{...n,open:t,focus:c,onClose:a(()=>o(!1),"onClose"),a11yMaximizeText:"Maximize",a11yMinimizeText:"Minimize",a11yCloseText:"Close"},e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")),e.createElement(H,null,e.createElement(l,{ref:c,onClick:a(()=>o(!1),"onClick")},"Close"))))},"_CustomFocus"),B=a(n=>{const[t,o]=i.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:a(()=>o(!t),"onClick")},"Open Drawer"),e.createElement(s,{...n,open:t,onClose:a(()=>o(!1),"onClose"),animated:!1,a11yMaximizeText:"Maximize",a11yMinimizeText:"Minimize",a11yCloseText:"Close"},e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))))},"_WithoutAnimation"),C=a(n=>{const[t,o]=i.useState(!1),[c,T]=i.useState(!1);return e.createElement(e.Fragment,null,e.createElement(l,{onClick:a(()=>o(!t),"onClick")},"Open Drawer"),e.createElement(s,{...n,open:t,onClose:a(()=>o(!1),"onClose"),expanded:c,a11yMaximizeText:"Maximize",a11yMinimizeText:"Minimize",a11yCloseText:"Close"},e.createElement("p",null,"Trigger Dialog Expanded programmatically."),e.createElement(l,{onClick:a(()=>T(!c),"onClick"),priority:"secondary"},c?"Collapse Drawer":"Expand Drawer")))},"_TriggerExpanded"),le=["_Default","_Opened","_WithoutHandle","_WithoutHandleAndCloseButton","_LotsOfContent","_CustomFocus","_WithoutAnimation","_TriggerExpanded"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
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
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
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
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
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
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
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
}`,...C.parameters?.docs?.source}}};export{h as _CustomFocus,f as _Default,D as _LotsOfContent,x as _Opened,C as _TriggerExpanded,B as _WithoutAnimation,w as _WithoutHandle,E as _WithoutHandleAndCloseButton,le as __namedExportsOrder,se as default};
