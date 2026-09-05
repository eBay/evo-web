var G=Object.defineProperty;var t=(o,n)=>G(o,"name",{value:n,configurable:!0});import{r as T,R as e}from"./iframe-DXKVC7Wu.js";import{E as V}from"./button-BAvxCJp2.js";import{E as J}from"./textbox-BKx_afX3.js";import{f as H}from"./utils-4VXCHhuo.js";import{u as Q,T as X,a as Y,b as Z}from"./use-tooltip-QRjquAyh.js";import{b as $}from"./index-ChCx--2D.js";import{a as ee}from"./floating-ui-Dh-39v5u.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./hooks-BqzEUAcn.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-BiwhiUzw.js";import"./index-JeB-DIMX.js";const l=t(()=>null,"EbayTooltipContent");try{l.displayName="ebaytooltipcontent",l.__docgenInfo={description:`This Component is used only for finding it as a child of EbayTooltip
and pass the properties to TooltipContent`,displayName:"ebaytooltipcontent",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tooltip/ebay-tooltip-content.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"id",required:!1,tags:{},type:{name:"string"}},type:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"type",required:!1,tags:{},type:{name:"TooltipType"}},style:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"style",required:!1,tags:{},type:{name:"CSSProperties"}},pointer:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"pointer",required:!1,tags:{},type:{name:"PointerDirection"}},showCloseButton:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"showCloseButton",required:!1,tags:{},type:{name:"boolean"}},a11yCloseText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"a11yCloseText",required:!1,tags:{},type:{name:"string"}},ariaLabelledBy:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"ariaLabelledBy",required:!1,tags:{},type:{name:"string"}},onClose:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"onClose",required:!1,tags:{},type:{name:"() => void"}},overlayRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"overlayRef",required:!1,tags:{},type:{name:"(node: HTMLElement) => void"}},arrowRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"arrowRef",required:!1,tags:{},type:{name:"RefObject<HTMLElement>"}},arrowStyle:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"arrowStyle",required:!1,tags:{},type:{name:"CSSProperties"}}},tags:{}}}catch{}const i=t(()=>null,"EbayTooltipHost");try{i.displayName="ebaytooltiphost",i.__docgenInfo={description:`This Component is used only for finding it as a child of EbayTooltip
and pass the properties to TooltipHost`,displayName:"ebaytooltiphost",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tooltip/ebay-tooltip-host.tsx",methods:[],props:{},tags:{}}}catch{}const r=t(({className:o,pointer:n,overlayStyle:p,noHover:c,open:g,offset:s,noFlip:_,noShift:q,notInline:A,onFocus:I=t(()=>{},"onFocus"),onBlur:k=t(()=>{},"onBlur"),onMouseEnter:R=t(()=>{},"onMouseEnter"),onMouseLeave:P=t(()=>{},"onMouseLeave"),onExpand:B,onCollapse:O,children:v,...K})=>{const w=T.useRef(null),{isExpanded:m,expandTooltip:C,collapseTooltip:h}=Q({onCollapse:O,onExpand:B,expanded:g}),x=T.useRef(null),{overlayStyles:j,arrowStyles:U,refs:S}=ee({open:m,hostRef:w,options:{pointer:n,offset:s,noFlip:_,noShift:q,notInline:A}});T.useEffect(()=>{const a=t(function(z){$(z,h)},"handleKeydown");return m&&document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[m]);const D=t(a=>{R(a),c||(clearTimeout(x.current),C())},"handleOnMouseEnter"),F=t(a=>{P(a),c||(clearTimeout(x.current),x.current=setTimeout(()=>{h()},300))},"handleOnMouseLeave"),M=t(a=>{I(a),C()},"handleOnFocus"),W=t(a=>{k(a),h()},"handleOnBlur"),L=H(v,l),N=H(v,i);if(!N)throw new Error("EbayTooltip: Please use a EbayTooltipHost that defines the host of the tooltip");if(!L)throw new Error("EbayTooltip: Please use a EbayTooltipContent that defines the content of the tooltip");return e.createElement(X,{...K,className:o,type:"tooltip",isExpanded:m,onFocus:M,onBlur:W,onMouseEnter:D,onMouseLeave:F},e.createElement(Y,{...N.props,forwardedRef:w}),e.createElement(Z,{...L.props,type:"tooltip",style:{...j,...p},pointer:n,arrowStyle:U,overlayRef:S.setOverlay,arrowRef:S.arrow}))},"EbayTooltip");try{r.displayName="ebaytooltip",r.__docgenInfo={description:"",displayName:"ebaytooltip",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",methods:[],props:{type:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip.tsx",name:"TypeLiteral"}],description:"",name:"type",required:!1,tags:{},type:{name:"TooltipType"}},forwardedRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip.tsx",name:"TypeLiteral"}],description:"",name:"forwardedRef",required:!1,tags:{},type:{name:"RefObject<HTMLSpanElement>"}},isExpanded:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip.tsx",name:"TypeLiteral"}],description:"",name:"isExpanded",required:!1,tags:{},type:{name:"boolean"}},noHover:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"noHover",required:!1,tags:{},type:{name:"boolean"}},open:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"open",required:!1,tags:{},type:{name:"boolean"}},onExpand:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"onExpand",required:!1,tags:{},type:{name:"() => void"}},onCollapse:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"onCollapse",required:!1,tags:{},type:{name:"() => void"}},pointer:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"pointer",required:!1,tags:{},type:{name:"PointerDirection"}},overlayStyle:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"overlayStyle",required:!1,tags:{},type:{name:"CSSProperties"}},offset:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"offset",required:!1,tags:{},type:{name:"number"}},noFlip:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"noFlip",required:!1,tags:{},type:{name:"boolean"}},noShift:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"noShift",required:!1,tags:{},type:{name:"boolean"}},notInline:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tooltip/ebay-tooltip.tsx",name:"TypeLiteral"}],description:"",name:"notInline",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const te=["top","top-left","top-right","right","right-bottom","right-top","bottom","bottom-left","bottom-right","left","left-bottom","left-top"],xe={title:"notices & tips/ebay-tooltip",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{pointer:{description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`",options:["top-left","top","top-right","right","right-bottom","right-top","bottom-left","bottom-right","bottom","left","left-bottom","left-top"],control:{type:"select"}},overlayStyle:{description:"Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",control:{type:"object"}},noHover:{description:"disable hover (and only use focus) to open the tooltip",control:"boolean"},open:{description:"Control the visibility of the tooltip from the parent",control:"boolean"},onExpand:{description:"overlay has been expanded",action:"onExpand",table:{category:"Events"}},onCollapse:{description:"overlay has been collapsed",action:"onCollapse",table:{category:"Events"}},EbayTooltipHost:{description:"Wrapper for trigger that shows the tooltip",control:"text"},EbayTooltipContent:{description:"The content to be displayed in the tooltip",control:"text"},offset:{description:"Numeric offset for positioning",control:{type:"number"}},noFlip:{description:"Disable automatic flip behavior",control:"boolean"},noShift:{description:"Disable automatic shift behavior",control:"boolean"},notInline:{description:"Opt out of inline display",control:"boolean"}}},y=t(o=>e.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:100}},e.createElement(r,{...o},e.createElement(i,null,e.createElement(V,null,"Info")),e.createElement(l,null,e.createElement("p",null,"Content")))),"DefaultTooltip"),d=t(o=>e.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:100}},e.createElement(r,{...o},e.createElement(i,null,e.createElement("a",{href:"https://www.ebay.com"},"View options")),e.createElement(l,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"AnchorHost"),u=t(o=>e.createElement("div",null,te.map((n,p)=>e.createElement("div",{key:p,style:{margin:"100px 0",width:"100%",textAlign:"center"}},e.createElement(r,{...o,pointer:n},e.createElement(i,null,e.createElement("a",{href:"https://www.ebay.com"},n)),e.createElement(l,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))))),"PointersWithAllDirections"),b=t(o=>e.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:100}},e.createElement(r,{...o,pointer:"top-left",overlayStyle:{top:40,left:-16}},e.createElement(i,null,e.createElement("a",{href:"https://www.ebay.com"},"View options")),e.createElement(l,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"PointerWithCustomLocation"),f=t(o=>e.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:100}},e.createElement(r,{...o,noHover:!0,pointer:"bottom"},e.createElement(i,null,e.createElement(J,{placeholder:"Email address"})),e.createElement(l,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"NoHover"),E={render:t(()=>{const o=["First tooltip","Second tooltip","Third tooltip"],n=t(()=>{const[p,c]=T.useState(null);return e.createElement("div",{style:{display:"flex",gap:24,justifyContent:"center",marginTop:100}},o.map((g,s)=>e.createElement(r,{key:s,open:p===s,onExpand:t(()=>c(s),"onExpand"),onCollapse:t(()=>c(null),"onCollapse"),pointer:"bottom"},e.createElement(i,null,e.createElement(V,null,g)),e.createElement(l,null,e.createElement("p",null,"Tooltip ",s+1," content")))))},"Component");return e.createElement(n,null)},"render"),name:"Controlled (mutual exclusivity)"},ve=["DefaultTooltip","AnchorHost","PointersWithAllDirections","PointerWithCustomLocation","NoHover","Controlled"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div>
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
    </div>`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};export{d as AnchorHost,E as Controlled,y as DefaultTooltip,f as NoHover,b as PointerWithCustomLocation,u as PointersWithAllDirections,ve as __namedExportsOrder,xe as default};
