var P=Object.defineProperty;var t=(e,s)=>P(e,"name",{value:s,configurable:!0});import{u as D,r as o,R as r,c as f}from"./iframe-DXKVC7Wu.js";import{r as V}from"./range-BuyY3gfh.js";import{E as C}from"./ebay-icon-star-dynamic-CK09XJcK.js";import"./preload-helper-Cc2_yIPf.js";const j=V(1,5),m=t(e=>{let s=parseInt(e,0)||0;return s>5&&(s=0),s},"getValue"),n=t(({value:e=0,a11yText:s,className:h,a11yStarText:E=[],disabled:c,onChange:x=t(()=>{},"onChange"),onFocus:v=t(()=>{},"onFocus"),onKeyDown:S=t(()=>{},"onKeyDown"),name:k,...I})=>{const N=D(),T=k||`star-rating-${N}`,[g,y]=o.useState(m(e));o.useEffect(()=>{y(m(e))},[e]);const w=t(a=>l=>{c||S(l,{value:a})},"handleKeyDown"),R=t(a=>l=>{c||(y(m(a)),x(l,{value:a}))},"handleClick"),F=t(a=>l=>{c||v(l,{value:a})},"handleFocus");return r.createElement("div",{role:s&&"radiogroup","aria-label":s,className:f("star-rating-select",h),...I},j.map(a=>r.createElement("span",{className:"star-rating-select__radio",key:a},r.createElement("input",{"aria-label":E?.[a-1],className:f("star-rating-select__control",{"star-rating-select__control--filled":a<=g}),type:"radio",name:T,value:a,disabled:c,defaultChecked:g===a,onClick:R(a),onFocus:F(a),onKeyDown:w(a)}),r.createElement("span",{className:"star-rating-select__radio-icon"},r.createElement(C,{className:"star-rating__icon"})))))},"EbayStarRatingSelect");try{n.displayName="starratingselect",n.__docgenInfo={description:"",displayName:"starratingselect",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx",methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx",name:"TypeLiteral"}],description:"",name:"a11yText",required:!1,tags:{},type:{name:"string"}},value:{defaultValue:{value:"0"},declarations:[{fileName:"ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx",name:"TypeLiteral"}],description:"",name:"value",required:!1,tags:{},type:{name:"string"}},a11yStarText:{defaultValue:{value:"[]"},declarations:[{fileName:"ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx",name:"TypeLiteral"}],description:"",name:"a11yStarText",required:!1,tags:{},type:{name:"string[]"}},disabled:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx",name:"TypeLiteral"}],description:"",name:"disabled",required:!1,tags:{},type:{name:"boolean"}},name:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx",name:"TypeLiteral"}],description:"",name:"name",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const u={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],a11yText:"Rate product",value:0,name:"star-rating"},b=t(e=>o.createElement(n,{...u,...e}),"Isolated$1"),p={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],value:"0",name:"star-rating"},_=t(e=>o.createElement("fieldset",null,o.createElement("legend",null,"Rate Product"),o.createElement(n,{...p,...e})),"Fieldset$1");try{b.displayName="Isolated",b.__docgenInfo={description:"",displayName:"Isolated",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating-select/__tests__/mocks.tsx",methods:[],props:{},tags:{}}}catch{}try{_.displayName="Fieldset",_.__docgenInfo={description:"",displayName:"Fieldset",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating-select/__tests__/mocks.tsx",methods:[],props:{},tags:{}}}catch{}const A={component:n,title:"form input/ebay-star-rating-select",argTypes:{disabled:{control:{type:"boolean"}},value:{control:{type:"number"},description:"1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected"},a11yStarText:{control:"object",description:"Array object which sets the aria label for each star"},a11yText:{control:{type:"text"},description:"The aria label for the outer container. Only used on isolated case."},onChange:{action:"onChange",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent }, value"}}},onFocus:{action:"onFocus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }, value"}}},onKeyDown:{action:"onKeyDown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent }, value"}}},name:{control:{type:"text"},description:"Name attribute for the rating input"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayStarRatingSelect } from "@ebay/ui-core-react/ebay-star-rating-select";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/star-rating-select";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/star-rating-select.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayStarRatingSelect a11yText="Rate this item" />
\`\`\``}}}},i={render:t(e=>r.createElement(n,{...u,...e}),"render"),args:u},d={render:t(e=>r.createElement("fieldset",null,r.createElement("legend",null,"Rate Product"),r.createElement(n,{...p,...e})),"render"),args:p},B=["Isolated","Fieldset"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <EbayStarRatingSelect {...IsolatedDefaultProps} {...args} />,
  args: IsolatedDefaultProps
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <fieldset>
            <legend>Rate Product</legend>
            <EbayStarRatingSelect {...FieldsetDefaultProps} {...args} />
        </fieldset>,
  args: FieldsetDefaultProps
}`,...d.parameters?.docs?.source}}};export{d as Fieldset,i as Isolated,B as __namedExportsOrder,A as default};
