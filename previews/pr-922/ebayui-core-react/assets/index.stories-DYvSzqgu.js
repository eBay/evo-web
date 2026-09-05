import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{i as r}from"./utils-i55QFFMK.js";import{t as i}from"./component-utils-CjDOSXvC.js";import{n as a}from"./iframe-RezWaW69.js";import{n as o,t as s}from"./ebay-button-B_FEPJ7h.js";import{i as c,t as l}from"./ebay-textbox-BpT_GSbE.js";import{r as u,t as d}from"./floating-ui-CkGigB0R.js";import{a as f,n as p}from"./event-utils-CG3Cx4b4.js";import{r as m,t as h}from"./use-roving-index-BY7ftmKL.js";import{i as g,l as _,r as v,t as y,u as b}from"./tooltip-utils-DdR5VpNO.js";var x;function S(){return(S=t((()=>{x=()=>null;try{x.displayName=`ebaytooltipcontent`,x.__docgenInfo={description:`This Component is used only for finding it as a child of EbayTooltip
and pass the properties to TooltipContent`,displayName:`ebaytooltipcontent`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tooltip/ebay-tooltip-content.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},type:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`TooltipType | undefined`}},style:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}},pointer:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`pointer`,required:!1,tags:{},type:{name:`PointerDirection | undefined`}},showCloseButton:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`showCloseButton`,required:!1,tags:{},type:{name:`boolean | undefined`}},a11yCloseText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`a11yCloseText`,required:!1,tags:{},type:{name:`string | undefined`}},ariaLabelledBy:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`ariaLabelledBy`,required:!1,tags:{},type:{name:`string | undefined`}},onClose:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},overlayRef:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`overlayRef`,required:!1,tags:{},type:{name:`((node: HTMLElement | null) => void) | undefined`}},arrowRef:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`arrowRef`,required:!1,tags:{},type:{name:`RefObject<HTMLElement> | undefined`}},arrowStyle:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx`,name:`TypeLiteral`}],description:``,name:`arrowStyle`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var C;function w(){return(w=t((()=>{C=()=>null;try{C.displayName=`ebaytooltiphost`,C.__docgenInfo={description:`This Component is used only for finding it as a child of EbayTooltip
and pass the properties to TooltipHost`,displayName:`ebaytooltiphost`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tooltip/ebay-tooltip-host.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function T(){return(T=t((()=>{f(),m(),h()})))()}var E,D;function O(){return(O=t((()=>{E=e(n()),i(),y(),S(),w(),T(),d(),D=({className:e,pointer:t,overlayStyle:n,noHover:i,open:a,offset:o,noFlip:s,noShift:c,notInline:l,onFocus:d=()=>{},onBlur:f=()=>{},onMouseEnter:m=()=>{},onMouseLeave:h=()=>{},onExpand:y,onCollapse:S,children:w,...T})=>{let D=(0,E.useRef)(null),{isExpanded:O,expandTooltip:k,collapseTooltip:A}=v({onCollapse:S,onExpand:y,expanded:a}),j=(0,E.useRef)(null),{overlayStyles:M,arrowStyles:N,refs:P}=u({open:O,hostRef:D,options:{pointer:t,offset:o,noFlip:s,noShift:c,notInline:l}});(0,E.useEffect)(()=>{let e=function(e){p(e,A)};return O&&document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[O]);let F=e=>{m(e),i||(clearTimeout(j.current),k())},I=e=>{h(e),i||(clearTimeout(j.current),j.current=setTimeout(()=>{A()},300))},L=e=>{d(e),k()},R=e=>{f(e),A()},z=r(w,x),B=r(w,C);if(!B)throw Error(`EbayTooltip: Please use a EbayTooltipHost that defines the host of the tooltip`);if(!z)throw Error(`EbayTooltip: Please use a EbayTooltipContent that defines the content of the tooltip`);return E.createElement(_,{...T,className:e,type:`tooltip`,isExpanded:O,onFocus:L,onBlur:R,onMouseEnter:F,onMouseLeave:I},E.createElement(b,{...B.props,forwardedRef:D}),E.createElement(g,{...z.props,type:`tooltip`,style:{...M,...n},pointer:t,arrowStyle:N,overlayRef:P.setOverlay,arrowRef:P.arrow}))};try{D.displayName=`ebaytooltip`,D.__docgenInfo={description:``,displayName:`ebaytooltip`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,methods:[],props:{type:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`TooltipType | undefined`}},forwardedRef:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`forwardedRef`,required:!1,tags:{},type:{name:`RefObject<HTMLSpanElement> | undefined`}},isExpanded:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/common/tooltip-utils/tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`isExpanded`,required:!1,tags:{},type:{name:`boolean | undefined`}},noHover:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`noHover`,required:!1,tags:{},type:{name:`boolean | undefined`}},open:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}},onExpand:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`onExpand`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},onCollapse:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`onCollapse`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},pointer:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`pointer`,required:!1,tags:{},type:{name:`PointerDirection | undefined`}},overlayStyle:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`overlayStyle`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}},offset:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`offset`,required:!1,tags:{},type:{name:`number | undefined`}},noFlip:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`noFlip`,required:!1,tags:{},type:{name:`boolean | undefined`}},noShift:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`noShift`,required:!1,tags:{},type:{name:`boolean | undefined`}},notInline:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`notInline`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}function k(){return(k=t((()=>{O(),S(),w(),y()})))()}var A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{A=e(n()),s(),l(),k(),j=a(),M=[`top`,`top-left`,`top-right`,`right`,`right-bottom`,`right-top`,`bottom`,`bottom-left`,`bottom-right`,`left`,`left-bottom`,`left-top`],N={title:`notices & tips/ebay-tooltip`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayTooltip, EbayTooltipHost, EbayTooltipContent } from "@ebay/ui-core-react/ebay-tooltip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon-button";
import "@ebay/skin/tooltip";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/tooltip.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayTooltip pointer="bottom-left">
    <EbayTooltipHost>
        <EbayButton>Info</EbayButton>
    </EbayTooltipHost>
    <EbayTooltipContent>
        <span>Here's a tip to help you be successful at your task.</span>
    </EbayTooltipContent>
</EbayTooltip>
\`\`\``}}},argTypes:{pointer:{description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`",options:[`top-left`,`top`,`top-right`,`right`,`right-bottom`,`right-top`,`bottom-left`,`bottom-right`,`bottom`,`left`,`left-bottom`,`left-top`],control:{type:`select`}},overlayStyle:{description:"Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",control:{type:`object`}},noHover:{description:`disable hover (and only use focus) to open the tooltip`,control:`boolean`},open:{description:`Control the visibility of the tooltip from the parent`,control:`boolean`},onExpand:{description:`overlay has been expanded`,action:`onExpand`,table:{category:`Events`}},onCollapse:{description:`overlay has been collapsed`,action:`onCollapse`,table:{category:`Events`}},EbayTooltipHost:{description:`Wrapper for trigger that shows the tooltip`,control:`text`},EbayTooltipContent:{description:`The content to be displayed in the tooltip`,control:`text`},offset:{description:`Numeric offset for positioning`,control:{type:`number`}},noFlip:{description:`Disable automatic flip behavior`,control:`boolean`},noShift:{description:`Disable automatic shift behavior`,control:`boolean`},notInline:{description:`Opt out of inline display`,control:`boolean`}}},P=e=>(0,j.jsx)(`div`,{style:{width:`100%`,textAlign:`center`,marginTop:100},children:(0,j.jsxs)(D,{...e,children:[(0,j.jsx)(C,{children:(0,j.jsx)(o,{children:`Info`})}),(0,j.jsx)(x,{children:(0,j.jsx)(`p`,{children:`Content`})})]})}),F=e=>(0,j.jsx)(`div`,{style:{width:`100%`,textAlign:`center`,marginTop:100},children:(0,j.jsxs)(D,{...e,children:[(0,j.jsx)(C,{children:(0,j.jsx)(`a`,{href:`https://www.ebay.com`,children:`View options`})}),(0,j.jsx)(x,{children:(0,j.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})}),I=e=>(0,j.jsx)(`div`,{children:M.map((t,n)=>(0,j.jsx)(`div`,{style:{margin:`100px 0`,width:`100%`,textAlign:`center`},children:(0,j.jsxs)(D,{...e,pointer:t,children:[(0,j.jsx)(C,{children:(0,j.jsx)(`a`,{href:`https://www.ebay.com`,children:t})}),(0,j.jsx)(x,{children:(0,j.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})},n))}),L=e=>(0,j.jsx)(`div`,{style:{width:`100%`,textAlign:`center`,marginTop:100},children:(0,j.jsxs)(D,{...e,pointer:`top-left`,overlayStyle:{top:40,left:-16},children:[(0,j.jsx)(C,{children:(0,j.jsx)(`a`,{href:`https://www.ebay.com`,children:`View options`})}),(0,j.jsx)(x,{children:(0,j.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})}),R=e=>(0,j.jsx)(`div`,{style:{width:`100%`,textAlign:`center`,marginTop:100},children:(0,j.jsxs)(D,{...e,noHover:!0,pointer:`bottom`,children:[(0,j.jsx)(C,{children:(0,j.jsx)(c,{placeholder:`Email address`})}),(0,j.jsx)(x,{children:(0,j.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})}),z={render:()=>{let e=[`First tooltip`,`Second tooltip`,`Third tooltip`];return(0,j.jsx)(()=>{let[t,n]=(0,A.useState)(null);return(0,j.jsx)(`div`,{style:{display:`flex`,gap:24,justifyContent:`center`,marginTop:100},children:e.map((e,r)=>(0,j.jsxs)(D,{open:t===r,onExpand:()=>n(r),onCollapse:()=>n(null),pointer:`bottom`,children:[(0,j.jsx)(C,{children:(0,j.jsx)(o,{children:e})}),(0,j.jsx)(x,{children:(0,j.jsxs)(`p`,{children:[`Tooltip `,r+1,` content`]})})]},r))})},{})},name:`Controlled (mutual exclusivity)`},B=[`DefaultTooltip`,`AnchorHost`,`PointersWithAllDirections`,`PointerWithCustomLocation`,`NoHover`,`Controlled`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  textAlign: "center",
  marginTop: 100
}}>
        <EbayTooltip {...args}>
            <EbayTooltipHost>
                <EbayButton>Info</EbayButton>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Content</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  textAlign: "center",
  marginTop: 100
}}>
        <EbayTooltip {...args}>
            <EbayTooltipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <div>
        {allPointers.map((pointerType, index) => <div key={index} style={{
    margin: "100px 0",
    width: "100%",
    textAlign: "center"
  }}>
                <EbayTooltip {...args} pointer={pointerType}>
                    <EbayTooltipHost>
                        <a href="https://www.ebay.com">{pointerType}</a>
                    </EbayTooltipHost>

                    <EbayTooltipContent>
                        <p>Use Access Key &apos;S&apos; to display settings.</p>
                    </EbayTooltipContent>
                </EbayTooltip>
            </div>)}
    </div>`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  textAlign: "center",
  marginTop: 100
}}>
        <EbayTooltip {...args} pointer="top-left" overlayStyle={{
    top: 40,
    left: -16
  }}>
            <EbayTooltipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  textAlign: "center",
  marginTop: 100
}}>
        <EbayTooltip {...args} noHover pointer="bottom">
            <EbayTooltipHost>
                <EbayTextbox placeholder="Email address" />
            </EbayTooltipHost>

            <EbayTooltipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTooltipContent>
        </EbayTooltip>
    </div>`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ["First tooltip", "Second tooltip", "Third tooltip"];
    const Component = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(null);
      return <div style={{
        display: "flex",
        gap: 24,
        justifyContent: "center",
        marginTop: 100
      }}>
                    {items.map((label, i) => <EbayTooltip key={i} open={openIndex === i} onExpand={() => setOpenIndex(i)} onCollapse={() => setOpenIndex(null)} pointer="bottom">
                            <EbayTooltipHost>
                                <EbayButton>{label}</EbayButton>
                            </EbayTooltipHost>
                            <EbayTooltipContent>
                                <p>Tooltip {i + 1} content</p>
                            </EbayTooltipContent>
                        </EbayTooltip>)}
                </div>;
    };
    return <Component />;
  },
  name: "Controlled (mutual exclusivity)"
}`,...z.parameters?.docs?.source}}}})))()}V();export{F as AnchorHost,z as Controlled,P as DefaultTooltip,R as NoHover,L as PointerWithCustomLocation,I as PointersWithAllDirections,B as __namedExportsOrder,N as default};