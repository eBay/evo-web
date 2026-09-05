var g=Object.defineProperty;var r=(t,o)=>g(t,"name",{value:o,configurable:!0});import{R as a,c as m}from"./iframe-DXKVC7Wu.js";import{E as y}from"./ebay-icon-star-dynamic-CK09XJcK.js";import{r as p}from"./range-BuyY3gfh.js";import"./preload-helper-Cc2_yIPf.js";const d=p(1,5),e=r(({value:t,a11yText:o,className:i,...c})=>a.createElement("div",{role:"img","aria-label":o,className:m("star-rating",i),"data-stars":t,...c},d.map(l=>a.createElement(y,{key:l,className:"star-rating__icon"}))),"EbayStarRating");try{e.displayName="starrating",e.__docgenInfo={description:"",displayName:"starrating",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating/star-rating.tsx",methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-star-rating/star-rating.tsx",name:"TypeLiteral"}],description:"",name:"a11yText",required:!1,tags:{},type:{name:"string"}},value:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-star-rating/star-rating.tsx",name:"TypeLiteral"}],description:"",name:"value",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const E={component:e,title:"graphics & icons/ebay-star-rating",argTypes:{value:{control:{type:"select"},options:["0","0-5","1","1-5","2","2-5","3","3-5","4","4-5","5"],description:'How many stars are selected, "1" - "5". If "0" or null defaults to no stars selected. Can use "2-5" for 2 and a half stars'},a11yText:{description:"The aria label for the outer container."}},tags:["autodocs"],parameters:{docs:{description:{component:`For full stars use (rating from 0-5): \`ebay-star-rating-{rating}\`

For half stars use: \`ebay-star-rating-{rating}-5\`

## Usage

### Import

\`\`\`jsx harmony
import { EbayStarRating } from "@ebay/ui-core-react/ebay-star-rating";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/star-rating";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/star-rating.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayStarRating a11yText="Rated 3 out of 5 stars" value="3" />
\`\`\``}}}},s=r(t=>a.createElement(a.Fragment,null,a.createElement(e,{...t,a11yText:"star-rating"}),a.createElement(e,{...t,value:"3-5",a11yText:"star-rating"}),a.createElement(e,{...t,value:"5",a11yText:"star-rating"})),"Stars"),n={render:r(t=>a.createElement(a.Fragment,null,a.createElement("h2",null,"Change stars using `Controls` addon"),a.createElement(e,{...t,a11yText:"star-rating"})),"render")},h=["Stars","StarsWithControls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <EbayStarRating {...args} a11yText="star-rating" />
        <EbayStarRating {...args} value="3-5" a11yText="star-rating" />
        <EbayStarRating {...args} value="5" a11yText="star-rating" />
    </>`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <h2>Change stars using \`Controls\` addon</h2>
            <EbayStarRating {...args} a11yText="star-rating" />
        </>
}`,...n.parameters?.docs?.source}}};export{s as Stars,n as StarsWithControls,h as __namedExportsOrder,E as default};
