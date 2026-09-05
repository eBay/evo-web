var z=Object.defineProperty;var o=(t,a)=>z(t,"name",{value:a,configurable:!0});import{R as e,c as G,r as x,u as J}from"./iframe-DXKVC7Wu.js";import{E as C}from"./button-BAvxCJp2.js";import{f as d}from"./utils-4VXCHhuo.js";import{u as Q,T as X,a as Y,b as Z,c as ee}from"./use-tooltip-QRjquAyh.js";import{a as te}from"./floating-ui-Dh-39v5u.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-BiwhiUzw.js";import"./index-JeB-DIMX.js";const i=o(()=>null,"EbayTourtipContent");try{i.displayName="ebaytourtipcontent",i.__docgenInfo={description:`This Component is used only for finding it as a child of EbayTooltip
and pass the properties to TourtipContent`,displayName:"ebaytourtipcontent",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tourtip/ebay-tourtip-content.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"id",required:!1,tags:{},type:{name:"string"}},type:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"type",required:!1,tags:{},type:{name:"TooltipType"}},style:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"style",required:!1,tags:{},type:{name:"CSSProperties"}},pointer:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"pointer",required:!1,tags:{},type:{name:"PointerDirection"}},showCloseButton:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"showCloseButton",required:!1,tags:{},type:{name:"boolean"}},a11yCloseText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"a11yCloseText",required:!1,tags:{},type:{name:"string"}},ariaLabelledBy:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"ariaLabelledBy",required:!1,tags:{},type:{name:"string"}},onClose:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"onClose",required:!1,tags:{},type:{name:"() => void"}},overlayRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"overlayRef",required:!1,tags:{},type:{name:"(node: HTMLElement) => void"}},arrowRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"arrowRef",required:!1,tags:{},type:{name:"RefObject<HTMLElement>"}},arrowStyle:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip-content.tsx",name:"TypeLiteral"}],description:"",name:"arrowStyle",required:!1,tags:{},type:{name:"CSSProperties"}}},tags:{}}}catch{}const l=o(()=>null,"EbayTourtipHost");try{l.displayName="ebaytourtiphost",l.__docgenInfo={description:`This Component is used only for finding it as a child of EbayTooltip
and pass the properties to TourtipHost`,displayName:"ebaytourtiphost",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tourtip/ebay-tourtip-host.tsx",methods:[],props:{},tags:{}}}catch{}const c=o(({index:t,children:a})=>e.createElement(e.Fragment,null,t!==void 0&&e.createElement("span",{className:"tourtip__index"},t),a),"EbayTourtipFooter");try{c.displayName="ebaytourtipfooter",c.__docgenInfo={description:"",displayName:"ebaytourtipfooter",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tourtip/ebay-tourtip-footer.tsx",methods:[],props:{index:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip-footer.tsx",name:"TypeLiteral"}],description:"",name:"index",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const y=o(({as:t,children:a,className:p,...r})=>{const u=t||"h2";return e.createElement(u,{...r,className:G("tourtip__heading",p)},a)},"EbayTourtipHeading");try{y.displayName="ebaytourtipheading",y.__docgenInfo={description:"",displayName:"ebaytourtipheading",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tourtip/ebay-tourtip-heading.tsx",methods:[],props:{},tags:{}}}catch{}const s=o(({a11yCloseText:t,"aria-label":a,className:p,children:r,onCollapse:u,onExpand:n,overlayStyle:V,open:B,pointer:S,offset:P,noFlip:F,noShift:R,notInline:O,...A})=>{const w=x.useRef(null),{isExpanded:v,collapseTooltip:D}=Q({onExpand:n,onCollapse:u,initialExpanded:!0,expanded:B,hostRef:w}),{overlayStyles:j,arrowStyles:K,refs:_}=te({open:v,hostRef:w,options:{pointer:S,offset:P,noFlip:F,noShift:R,notInline:O}}),U=x.useRef(null),k=d(r,i);if(!k)throw new Error("EbayTourtip: Please use a EbayTourtipContent that defines the content of the tourtip");const{children:$,...W}=k.props,H=d(r,l);if(!H)throw new Error("EbayTourtip: Please use a EbayTourtipHost that defines the host of the tourtip");const m=d(r,y),L=d(r,c),I=J(),q=m?.props.id,N=m?q??(I?`tourtip-label-${I}`:void 0):void 0,M=m&&N&&!q?x.cloneElement(m,{id:N}):m;return e.createElement(X,{...A,className:p,type:"tourtip",isExpanded:v,ref:U},e.createElement(Y,{...H.props,forwardedRef:w,"aria-label":a,"aria-expanded":v}),e.createElement(Z,{...W,a11yCloseText:t,ariaLabelledBy:N,onClose:D,pointer:S,showCloseButton:!0,style:{...j,...V},type:"tourtip",overlayRef:_.setOverlay,arrowRef:_.arrow,arrowStyle:K},M,$,L&&e.createElement(ee,{type:"tourtip"},L)))},"EbayTourtip");try{s.displayName="ebaytourtip",s.__docgenInfo={description:"",displayName:"ebaytourtip",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",methods:[],props:{type:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip.tsx",name:"TypeLiteral"}],description:"",name:"type",required:!1,tags:{},type:{name:"TooltipType"}},forwardedRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip.tsx",name:"TypeLiteral"}],description:"",name:"forwardedRef",required:!1,tags:{},type:{name:"RefObject<HTMLSpanElement>"}},isExpanded:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/common/tooltip-utils/tooltip.tsx",name:"TypeLiteral"}],description:"",name:"isExpanded",required:!1,tags:{},type:{name:"boolean"}},a11yCloseText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"a11yCloseText",required:!0,tags:{},type:{name:"string"}},open:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"open",required:!1,tags:{},type:{name:"boolean"}},pointer:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"pointer",required:!1,tags:{},type:{name:"PointerDirection"}},onExpand:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"onExpand",required:!1,tags:{},type:{name:"() => void"}},onCollapse:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"onCollapse",required:!1,tags:{},type:{name:"() => void"}},overlayStyle:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"overlayStyle",required:!1,tags:{},type:{name:"CSSProperties"}},offset:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"offset",required:!1,tags:{},type:{name:"number"}},noFlip:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"noFlip",required:!1,tags:{},type:{name:"boolean"}},noShift:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"noShift",required:!1,tags:{},type:{name:"boolean"}},notInline:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-tourtip/ebay-tourtip.tsx",name:"TypeLiteral"}],description:"",name:"notInline",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const oe=["top","top-left","top-right","right","right-bottom","right-top","bottom","bottom-left","bottom-right","left","left-bottom","left-top"],Ee={title:"notices & tips/ebay-tourtip",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayTourtip, EbayTourtipHost, EbayTourtipContent, EbayTourtipHeading } from "@ebay/ui-core-react/ebay-tourtip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon-button";
import "@ebay/skin/tourtip";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/tourtip.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayTourtip a11yCloseText="close" pointer="bottom">
    <EbayTourtipHost>
        <EbayButton>Info</EbayButton>
    </EbayTourtipHost>
    <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
    <EbayTourtipContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </EbayTourtipContent>
</EbayTourtip>
\`\`\``}}},argTypes:{pointer:{description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`",options:["top-left","top","top-right","right","right-bottom","right-top","bottom-left","bottom-right","bottom","left","left-bottom","left-top"],control:{type:"select"}},overlayStyle:{description:"Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",options:["top","left","bottom","right"],control:{type:"select"}},initialExpanded:{description:"Open the tooltip on the initial render, needs to be true for the case of Tourtips",control:"boolean"},open:{description:"Control the visibility of the tourtip from the parent",control:"boolean"},a11yCloseText:{description:"A11y text for close button and mask.",control:"text"},"aria-label":{description:'A descriptive label of what the tourtip button represents (e.g. "Important information")',control:"text"},onExpand:{description:"overlay has been expanded",action:"onExpand",table:{category:"Events"}},onCollapse:{description:"overlay has been collapsed",action:"onCollapse",table:{category:"Events"}},EbayTourtipHost:{description:"The custom host-button (trigger) for the tourtip",control:"text"},EbayTourtipHeading:{description:"The heading to be displayed in the tourtip",control:"text"},EbayTourtipFooter:{description:"The footer to be displayed in the tourtip",control:"text"},EbayTourtipContent:{description:"The content to be displayed in the tourtip",control:"text"},index:{description:"defines the text to be displayed as index of the Tourtip if any. e.g `1 - 3` meaning Tourtip 1 of 3",control:"text"},offset:{description:"Numeric offset for positioning",control:{type:"number"}},noFlip:{description:"Disable automatic flip behavior",control:"boolean"},noShift:{description:"Disable automatic shift behavior",control:"boolean"},notInline:{description:"Opt out of inline display",control:"boolean"}}},b=o(t=>e.createElement("div",{style:{width:"100%",margin:300}},e.createElement(s,{...t,a11yCloseText:"close"},e.createElement(i,null,e.createElement("p",null,"Content")),e.createElement(l,null,e.createElement(C,null,"Info")))),"DefaultTourtip"),f=o(t=>e.createElement("div",null,oe.map((a,p)=>e.createElement("div",{key:p,style:{width:"100%",margin:300}},e.createElement(s,{...t,pointer:a,a11yCloseText:"close"},e.createElement(l,null,e.createElement("a",{href:"https://www.ebay.com"},a)),e.createElement(i,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))))),"PointersWithAllDirections"),E=o(t=>e.createElement("div",{style:{width:"100%",margin:300}},e.createElement(s,{...t,a11yCloseText:"close",pointer:"top-left",overlayStyle:{top:40,left:-16}},e.createElement(l,null,e.createElement("a",{href:"https://www.ebay.com"},"View options")),e.createElement(i,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"PointerWithCustomLocation"),T=o(t=>e.createElement("div",{style:{width:"100%",margin:300}},e.createElement(s,{...t,a11yCloseText:"close",pointer:"bottom"},e.createElement(l,null,e.createElement(C,null,"Info")),e.createElement(i,null,e.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")),e.createElement(c,{index:"1 of 3"},e.createElement("button",{className:"fake-link"},"Back"),e.createElement("button",{className:"btn btn--primary"},"Next")))),"FooterTourtip"),g=o(t=>e.createElement("div",{style:{width:"100%",margin:300}},e.createElement(s,{...t,a11yCloseText:"close",pointer:"bottom"},e.createElement(l,null,e.createElement(C,null,"Info")),e.createElement(y,{type:"tourtip"},"Title"),e.createElement(i,null,e.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")),e.createElement(c,{index:"1 of 3"},e.createElement("button",{className:"fake-link"},"Back"),e.createElement("button",{className:"btn btn--primary"},"Next")))),"FooterAndHeadingTourtip"),h={render:o(()=>{const t=["Step 1 content","Step 2 content","Step 3 content"],a=o(()=>{const[p,r]=x.useState(0);return e.createElement("div",{style:{display:"flex",gap:80,margin:300}},t.map((u,n)=>e.createElement(s,{key:n,open:p===n,onExpand:o(()=>r(n),"onExpand"),onCollapse:o(()=>r(null),"onCollapse"),a11yCloseText:"close",pointer:"bottom"},e.createElement(l,null,e.createElement(C,null,"Step ",n+1)),e.createElement(y,{type:"tourtip"},"Step ",n+1),e.createElement(i,null,e.createElement("p",null,u)),e.createElement(c,{index:`${n+1} of ${t.length}`},n>0&&e.createElement("button",{className:"fake-link",onClick:o(()=>r(n-1),"onClick")},"Back"),n<t.length-1&&e.createElement("button",{className:"btn btn--primary",onClick:o(()=>r(n+1),"onClick")},"Next")))))},"Component");return e.createElement(a,null)},"render"),name:"Controlled (sequential steps)"},Te=["DefaultTourtip","PointersWithAllDirections","PointerWithCustomLocation","FooterTourtip","FooterAndHeadingTourtip","Controlled"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  margin: 300
}}>
        <EbayTourtip {...args} a11yCloseText="close">
            <EbayTourtipContent>
                <p>Content</p>
            </EbayTourtipContent>

            <EbayTourtipHost>
                <EbayButton>Info</EbayButton>
            </EbayTourtipHost>
        </EbayTourtip>
    </div>`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div>
        {allPointers.map((pointerType, index) => <div key={index} style={{
    width: "100%",
    margin: 300
  }}>
                <EbayTourtip {...args} pointer={pointerType} a11yCloseText="close">
                    <EbayTourtipHost>
                        <a href="https://www.ebay.com">{pointerType}</a>
                    </EbayTourtipHost>

                    <EbayTourtipContent>
                        <p>Use Access Key &apos;S&apos; to display settings.</p>
                    </EbayTourtipContent>
                </EbayTourtip>
            </div>)}
    </div>`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  margin: 300
}}>
        <EbayTourtip {...args} a11yCloseText="close" pointer="top-left" overlayStyle={{
    top: 40,
    left: -16
  }}>
            <EbayTourtipHost>
                <a href="https://www.ebay.com">View options</a>
            </EbayTourtipHost>

            <EbayTourtipContent>
                <p>Use Access Key &apos;S&apos; to display settings.</p>
            </EbayTourtipContent>
        </EbayTourtip>
    </div>`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  margin: 300
}}>
        <EbayTourtip {...args} a11yCloseText="close" pointer="bottom">
            <EbayTourtipHost>
                <EbayButton>Info</EbayButton>
            </EbayTourtipHost>
            <EbayTourtipContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </EbayTourtipContent>
            <EbayTourtipFooter index="1 of 3">
                <button className="fake-link">Back</button>
                <button className="btn btn--primary">Next</button>
            </EbayTourtipFooter>
        </EbayTourtip>
    </div>`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  margin: 300
}}>
        <EbayTourtip {...args} a11yCloseText="close" pointer="bottom">
            <EbayTourtipHost>
                <EbayButton>Info</EbayButton>
            </EbayTourtipHost>
            <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
            <EbayTourtipContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </EbayTourtipContent>
            <EbayTourtipFooter index="1 of 3">
                <button className="fake-link">Back</button>
                <button className="btn btn--primary">Next</button>
            </EbayTourtipFooter>
        </EbayTourtip>
    </div>`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ["Step 1 content", "Step 2 content", "Step 3 content"];
    const Component = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(0);
      return <div style={{
        display: "flex",
        gap: 80,
        margin: 300
      }}>
                    {items.map((text, i) => <EbayTourtip key={i} open={openIndex === i} onExpand={() => setOpenIndex(i)} onCollapse={() => setOpenIndex(null)} a11yCloseText="close" pointer="bottom">
                            <EbayTourtipHost>
                                <EbayButton>Step {i + 1}</EbayButton>
                            </EbayTourtipHost>
                            <EbayTourtipHeading type="tourtip">Step {i + 1}</EbayTourtipHeading>
                            <EbayTourtipContent>
                                <p>{text}</p>
                            </EbayTourtipContent>
                            <EbayTourtipFooter index={\`\${i + 1} of \${items.length}\`}>
                                {i > 0 && <button className="fake-link" onClick={() => setOpenIndex(i - 1)}>
                                        Back
                                    </button>}
                                {i < items.length - 1 && <button className="btn btn--primary" onClick={() => setOpenIndex(i + 1)}>
                                        Next
                                    </button>}
                            </EbayTourtipFooter>
                        </EbayTourtip>)}
                </div>;
    };
    return <Component />;
  },
  name: "Controlled (sequential steps)"
}`,...h.parameters?.docs?.source}}};export{h as Controlled,b as DefaultTourtip,g as FooterAndHeadingTourtip,T as FooterTourtip,E as PointerWithCustomLocation,f as PointersWithAllDirections,Te as __namedExportsOrder,Ee as default};
