var w=Object.defineProperty;var s=(e,t)=>w(e,"name",{value:t,configurable:!0});import{R as a,c as l,r as f}from"./iframe-DXKVC7Wu.js";import{E as T}from"./button-BAvxCJp2.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";const r=s(({children:e,className:t,color:o,...n})=>a.createElement("div",{role:"img",className:l("skeleton",o&&`skeleton--${o}`,t),...n},e),"EbaySkeleton");try{r.displayName="ebayskeleton",r.__docgenInfo={description:"",displayName:"ebayskeleton",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-skeleton/ebay-skeleton.tsx",methods:[],props:{},tags:{}}}catch{}const S=s(e=>{const{as:t="div",className:o,...n}=e;return a.createElement(t,{className:l("skeleton__avatar",o),...n})},"EbaySkeletonAvatar");try{S.displayName="ebayskeletonavatar",S.__docgenInfo={description:"",displayName:"ebayskeletonavatar",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-skeleton/ebay-skeleton-avatar.tsx",methods:[],props:{as:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/types.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"SupportedElements"}}},tags:{}}}catch{}const c=s(e=>{const{as:t="div",className:o,size:n,...i}=e;return a.createElement(t,{className:l("skeleton__button",n&&`skeleton__button--${n}`,o),...i})},"EbaySkeletonButton");try{c.displayName="ebayskeletonbutton",c.__docgenInfo={description:"",displayName:"ebayskeletonbutton",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-skeleton/ebay-skeleton-button.tsx",methods:[],props:{as:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/types.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"SupportedElements"}},size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/ebay-skeleton-button.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:'"small" | "large"'}}},tags:{}}}catch{}const h=s(e=>{const{as:t="div",className:o,...n}=e;return a.createElement(t,{className:l("skeleton__image",o),...n})},"EbaySkeletonImage");try{h.displayName="ebayskeletonimage",h.__docgenInfo={description:"",displayName:"ebayskeletonimage",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-skeleton/ebay-skeleton-image.tsx",methods:[],props:{as:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/types.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"SupportedElements"}}},tags:{}}}catch{}const m=s(e=>{const{as:t="div",className:o,size:n,multiline:i,...v}=e;return a.createElement(t,{className:l("skeleton__text",i&&"skeleton__text--multiline",n==="large"&&"skeleton__text--large",o),...v})},"EbaySkeletonText");try{m.displayName="ebayskeletontext",m.__docgenInfo={description:"",displayName:"ebayskeletontext",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-skeleton/ebay-skeleton-text.tsx",methods:[],props:{as:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/types.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"SupportedElements"}},size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/ebay-skeleton-text.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:'"small" | "large"'}},multiline:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/ebay-skeleton-text.tsx",name:"TypeLiteral"}],description:"",name:"multiline",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const _=s(e=>{const{as:t="div",className:o,...n}=e;return a.createElement(t,{className:l("skeleton__textbox",o),...n})},"EbaySkeletonTextbox");try{_.displayName="ebayskeletontextbox",_.__docgenInfo={description:"",displayName:"ebayskeletontextbox",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-skeleton/ebay-skeleton-textbox.tsx",methods:[],props:{as:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-skeleton/types.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"SupportedElements"}}},tags:{}}}catch{}const V={component:r,title:"building blocks/ebay-skeleton",argTypes:{color:{description:"Color of the skeleton",options:["","purple","green","blue"],control:{type:"select"}},as:{description:"Element type to render",table:{defaultValue:{summary:"div"}},options:["div","span"],control:{type:"select"}},size:{description:"Size of the EbaySkeletonButton or EbaySkeletonText",options:["","small","large"],control:{type:"select"}},multiline:{description:"Render multiple lines of text on EbaySkeletonText",control:{type:"boolean"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Import

\`\`\`jsx harmony
import {
    EbaySkeleton,
    EbaySkeletonAvatar,
    EbaySkeletonButton,
    EbaySkeletonImage,
    EbaySkeletonText,
    EbaySkeletonTextbox,
} from "@ebay/ui-core-react/ebay-skeleton";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/skeleton";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/skeleton.css";
\`\`\`
### Composite

### Basic

\`\`\`jsx
<EbaySkeleton color={color} style={{ width: "300px" }}>
    <div>
        <EbaySkeletonAvatar as="span" />
        <EbaySkeletonText
            multiline={multiline}
            as="span"
            size={size}
            style={{ width: "220px", verticalAlign: "top" }}
        />
    </div>
    <EbaySkeletonButton size={size} />
</EbaySkeleton>
\`\`\`

### Tile

\`\`\`jsx
<EbaySkeleton color={color} style={{ width: "220px" }}>
    <EbaySkeletonImage style={{ width: "220px", height: "220px" }} />
    <EbaySkeletonText multiline={multiline} size={size} />
</EbaySkeleton>
\`\`\``}}}},p=s(({color:e,as:t})=>a.createElement(r,{color:e,style:{width:"220px"},"aria-label":"Loading..."},a.createElement(_,{as:t})),"Default"),y=s(({color:e,as:t})=>a.createElement(r,{color:e,"aria-label":"Loading..."},a.createElement(S,{as:t})),"Avatar"),d=s(({color:e,as:t,size:o})=>a.createElement(r,{color:e,style:{width:"220px"},"aria-label":"Loading..."},a.createElement(c,{as:t,size:o})),"Button"),u=s(({color:e,as:t,multiline:o,size:n})=>a.createElement(r,{color:e,style:{width:"220px"},"aria-label":"Loading..."},a.createElement(m,{as:t,multiline:o,size:n})),"Text"),b=s(({color:e,as:t})=>a.createElement(r,{color:e,style:{width:"220px"},"aria-label":"Loading..."},a.createElement(_,{as:t})),"TextBox"),k=s(({color:e,as:t})=>a.createElement(r,{color:e,"aria-label":"Loading..."},a.createElement(h,{style:{width:"220px",height:"220px"},as:t})),"Image"),g=s(({color:e,multiline:t=!0,size:o="large"})=>a.createElement(r,{color:e,style:{width:"220px"},"aria-label":"Loading..."},a.createElement(h,{style:{width:"220px",height:"220px"}}),a.createElement(m,{multiline:t,size:o})),"Tile"),E=s(({color:e,size:t,multiline:o=!0})=>a.createElement(r,{color:e,style:{width:"300px"},"aria-label":"Loading..."},a.createElement("div",null,a.createElement(S,{as:"span"}),a.createElement(m,{multiline:o,as:"span",size:t,style:{width:"220px",verticalAlign:"top"}})),a.createElement(c,{size:t})),"Composite"),x=s(({color:e,as:t})=>{const[o,n]=f.useState(!0);return f.useEffect(()=>{const i=setTimeout(()=>{n(!1)},2e3);return()=>{clearTimeout(i)}},[]),a.createElement("div",{style:{width:"88px"}},o?a.createElement(r,{color:e,"aria-label":"Loading..."},a.createElement(c,{as:t})):a.createElement("div",null,a.createElement(T,null,"Button")))},"WithContent"),q=["Default","Avatar","Button","Text","TextBox","Image","Tile","Composite","WithContent"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  color,
  as
}) => <EbaySkeleton color={color} style={{
  width: "220px"
}} aria-label="Loading...">
        <EbaySkeletonTextbox as={as} />
    </EbaySkeleton>`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
  color,
  as
}) => <EbaySkeleton color={color} aria-label="Loading...">
        <EbaySkeletonAvatar as={as} />
    </EbaySkeleton>`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  color,
  as,
  size
}) => <EbaySkeleton color={color} style={{
  width: "220px"
}} aria-label="Loading...">
        <EbaySkeletonButton as={as} size={size} />
    </EbaySkeleton>`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  color,
  as,
  multiline,
  size
}) => <EbaySkeleton color={color} style={{
  width: "220px"
}} aria-label="Loading...">
        <EbaySkeletonText as={as} multiline={multiline} size={size} />
    </EbaySkeleton>`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  color,
  as
}) => <EbaySkeleton color={color} style={{
  width: "220px"
}} aria-label="Loading...">
        <EbaySkeletonTextbox as={as} />
    </EbaySkeleton>`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`({
  color,
  as
}) => <EbaySkeleton color={color} aria-label="Loading...">
        <EbaySkeletonImage style={{
    width: "220px",
    height: "220px"
  }} as={as} />
    </EbaySkeleton>`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  color,
  multiline = true,
  size = "large"
}) => <EbaySkeleton color={color} style={{
  width: "220px"
}} aria-label="Loading...">
        <EbaySkeletonImage style={{
    width: "220px",
    height: "220px"
  }} />
        <EbaySkeletonText multiline={multiline} size={size} />
    </EbaySkeleton>`,...g.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`({
  color,
  size,
  multiline = true
}) => <EbaySkeleton color={color} style={{
  width: "300px"
}} aria-label="Loading...">
        <div>
            <EbaySkeletonAvatar as="span" />
            <EbaySkeletonText multiline={multiline} as="span" size={size} style={{
      width: "220px",
      verticalAlign: "top"
    }} />
        </div>
        <EbaySkeletonButton size={size} />
    </EbaySkeleton>`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
  color,
  as
}) => {
  // TODO: Replace this example with "use()" hook and Suspense when upgrading to React 19
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <div style={{
    width: "88px"
  }}>
            {isLoading ? <EbaySkeleton color={color} aria-label="Loading...">
                    <EbaySkeletonButton as={as} />
                </EbaySkeleton> : <div>
                    <EbayButton>Button</EbayButton>
                </div>}
        </div>;
}`,...x.parameters?.docs?.source}}};export{y as Avatar,d as Button,E as Composite,p as Default,k as Image,u as Text,b as TextBox,g as Tile,x as WithContent,q as __namedExportsOrder,V as default};
