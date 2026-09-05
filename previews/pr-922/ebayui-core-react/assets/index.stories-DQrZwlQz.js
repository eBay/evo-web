import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{n as a,t as o}from"./ebay-icon-star-dynamic-DDalmJv5.js";import{n as s,t as c}from"./range--Ieurv_H.js";var l,u,d,f;function p(){return(p=t((()=>{l=e(n()),u=e(r()),a(),c(),d=s(1,5),f=({value:e,a11yText:t,className:n,...r})=>l.createElement(`div`,{role:`img`,"aria-label":t,className:(0,u.default)(`star-rating`,n),"data-stars":e,...r},d.map(e=>l.createElement(o,{key:e,className:`star-rating__icon`})));try{f.displayName=`starrating`,f.__docgenInfo={description:``,displayName:`starrating`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-star-rating/star-rating.tsx`,methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-star-rating/star-rating.tsx`,name:`TypeLiteral`}],description:``,name:`a11yText`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-star-rating/star-rating.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function m(){return(m=t((()=>{p()})))()}var h,g,_,v,y;function b(){return(b=t((()=>{n(),m(),h=i(),g={component:f,title:`graphics & icons/ebay-star-rating`,argTypes:{value:{control:{type:`select`},options:[`0`,`0-5`,`1`,`1-5`,`2`,`2-5`,`3`,`3-5`,`4`,`4-5`,`5`],description:`How many stars are selected, "1" - "5". If "0" or null defaults to no stars selected. Can use "2-5" for 2 and a half stars`},a11yText:{description:`The aria label for the outer container.`}},tags:[`autodocs`],parameters:{docs:{description:{component:`For full stars use (rating from 0-5): \`ebay-star-rating-{rating}\`

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
\`\`\``}}}},_=e=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{...e,a11yText:`star-rating`}),(0,h.jsx)(f,{...e,value:`3-5`,a11yText:`star-rating`}),(0,h.jsx)(f,{...e,value:`5`,a11yText:`star-rating`})]}),v={render:e=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`h2`,{children:"Change stars using `Controls` addon"}),(0,h.jsx)(f,{...e,a11yText:`star-rating`})]})},y=[`Stars`,`StarsWithControls`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <>
        <EbayStarRating {...args} a11yText="star-rating" />
        <EbayStarRating {...args} value="3-5" a11yText="star-rating" />
        <EbayStarRating {...args} value="5" a11yText="star-rating" />
    </>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <h2>Change stars using \`Controls\` addon</h2>
            <EbayStarRating {...args} a11yText="star-rating" />
        </>
}`,...v.parameters?.docs?.source}}}})))()}b();export{_ as Stars,v as StarsWithControls,y as __namedExportsOrder,g as default};