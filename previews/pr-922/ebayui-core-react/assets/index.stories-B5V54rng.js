import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{r as i,t as a}from"./random-id-C4JIZuFN.js";import{n as o}from"./iframe-RezWaW69.js";import{n as s,t as c}from"./ebay-icon-star-dynamic-DDalmJv5.js";import{n as l,t as u}from"./range--Ieurv_H.js";var d,f,p,m,h;function g(){return(g=t((()=>{d=e(n()),f=e(r()),u(),a(),s(),p=l(1,5),m=e=>{let t=parseInt(e,0)||0;return t>5&&(t=0),t},h=({value:e=0,a11yText:t,className:n,a11yStarText:r=[],disabled:a,onChange:o=()=>{},onFocus:s=()=>{},onKeyDown:l=()=>{},name:u,...h})=>{let g=i(),_=u||`star-rating-${g}`,[v,y]=(0,d.useState)(m(e));(0,d.useEffect)(()=>{y(m(e))},[e]);let b=e=>t=>{a||l(t,{value:e})},x=e=>t=>{a||(y(m(e)),o(t,{value:e}))},S=e=>t=>{a||s(t,{value:e})};return d.createElement(`div`,{role:t&&`radiogroup`,"aria-label":t,className:(0,f.default)(`star-rating-select`,n),...h},p.map(e=>d.createElement(`span`,{className:`star-rating-select__radio`,key:e},d.createElement(`input`,{"aria-label":r?.[e-1],className:(0,f.default)(`star-rating-select__control`,{"star-rating-select__control--filled":e<=v}),type:`radio`,name:_,value:e,disabled:a,defaultChecked:v===e,onClick:x(e),onFocus:S(e),onKeyDown:b(e)}),d.createElement(`span`,{className:`star-rating-select__radio-icon`},d.createElement(c,{className:`star-rating__icon`})))))};try{h.displayName=`starratingselect`,h.__docgenInfo={description:``,displayName:`starratingselect`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx`,methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx`,name:`TypeLiteral`}],description:``,name:`a11yText`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:{value:`0`},declarations:[{fileName:`ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},a11yStarText:{defaultValue:{value:`[]`},declarations:[{fileName:`ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx`,name:`TypeLiteral`}],description:``,name:`a11yStarText`,required:!1,tags:{},type:{name:`string[] | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},name:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-star-rating-select/star-rating-select.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function _(){return(_=t((()=>{g()})))()}var v,y,b,x,S;function C(){return(C=t((()=>{n(),_(),v=o(),y={disabled:!1,a11yStarText:[`1 star`,`2 stars`,`3 stars`,`4 stars`,`5 stars`],a11yText:`Rate product`,value:0,name:`star-rating`},b=e=>(0,v.jsx)(h,{...y,...e}),x={disabled:!1,a11yStarText:[`1 star`,`2 stars`,`3 stars`,`4 stars`,`5 stars`],value:`0`,name:`star-rating`},S=e=>(0,v.jsxs)(`fieldset`,{children:[(0,v.jsx)(`legend`,{children:`Rate Product`}),(0,v.jsx)(h,{...x,...e})]});try{b.displayName=`Isolated`,b.__docgenInfo={description:``,displayName:`Isolated`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating-select/__tests__/mocks.tsx`,methods:[],props:{},tags:{}}}catch{}try{S.displayName=`Fieldset`,S.__docgenInfo={description:``,displayName:`Fieldset`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating-select/__tests__/mocks.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,E,D,O;function k(){return(k=t((()=>{n(),_(),C(),w=o(),T={component:h,title:`form input/ebay-star-rating-select`,argTypes:{disabled:{control:{type:`boolean`}},value:{control:{type:`number`},description:`1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected`},a11yStarText:{control:`object`,description:`Array object which sets the aria label for each star`},a11yText:{control:{type:`text`},description:`The aria label for the outer container. Only used on isolated case.`},onChange:{action:`onChange`,description:`Triggered on change`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }, value`}}},onFocus:{action:`onFocus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }, value`}}},onKeyDown:{action:`onKeyDown`,description:`Triggered on keydown`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent }, value`}}},name:{control:{type:`text`},description:`Name attribute for the rating input`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},E={render:e=>(0,w.jsx)(h,{...y,...e}),args:y},D={render:e=>(0,w.jsxs)(`fieldset`,{children:[(0,w.jsx)(`legend`,{children:`Rate Product`}),(0,w.jsx)(h,{...x,...e})]}),args:x},O=[`Isolated`,`Fieldset`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <EbayStarRatingSelect {...IsolatedDefaultProps} {...args} />,
  args: IsolatedDefaultProps
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <fieldset>
            <legend>Rate Product</legend>
            <EbayStarRatingSelect {...FieldsetDefaultProps} {...args} />
        </fieldset>,
  args: FieldsetDefaultProps
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Fieldset,E as Isolated,O as __namedExportsOrder,T as default};