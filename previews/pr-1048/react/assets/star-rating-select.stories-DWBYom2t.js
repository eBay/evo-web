import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./star-dynamic-Dufy-j_6.js";function s(){return(s=t((()=>{})))()}function c({value:e,defaultValue:t=0,a11yText:n=`Rating`,a11yStarText:r=p,disabled:i,name:a,onValueChange:s,className:c,...m}){let h=(0,l.useId)(),g=a??`evo-star-rating-${h}`,[_,v]=(0,l.useState)(t),y=e!==void 0,b=y?e:_;return(0,d.jsx)(`div`,{...m,role:`radiogroup`,"aria-label":n??void 0,className:(0,u.default)(`star-rating-select`,c),children:f.map(e=>(0,d.jsxs)(`span`,{className:`star-rating-select__radio`,children:[(0,d.jsx)(`input`,{"aria-label":r[e-1],className:(0,u.default)(`star-rating-select__control`,{"star-rating-select__control--filled":e<=b}),type:`radio`,name:g,value:e,disabled:i,checked:b===e,onChange:()=>{y||v(e),s?.(e)}}),(0,d.jsx)(`span`,{className:`star-rating-select__radio-icon`,children:(0,d.jsx)(o,{className:`star-rating__icon`})})]},e))})}var l,u,d,f,p;function m(){return(m=t((()=>{l=n(),u=e(i(),1),a(),s(),d=r(),f=[1,2,3,4,5],p=[`1 star`,`2 stars`,`3 stars`,`4 stars`,`5 stars`];try{c.displayName=`EvoStarRatingSelect`,c.__docgenInfo={description:`Lets users pick a rating from 1 to 5 with five native radio buttons.

Use \`value\` to control the rating or \`defaultValue\` to set a starting
rating. \`a11yText\` names the group and \`a11yStarText\` names each star. For a
read-only score, use \`EvoStarRating\`.

## Usage

\`\`\`tsx
import { EvoStarRatingSelect } from "@evo-web/react/star-rating-select";

<EvoStarRatingSelect
  name="purchase-rating"
  a11yText="Rate your purchase"
  a11yStarText={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
  onValueChange={(value) => setRating(value)}
/>
\`\`\``,displayName:`EvoStarRatingSelect`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/star-rating-select/star-rating-select.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`evo-react/src/star-rating-select/types.ts`,name:`TypeLiteral`}],description:"Controlled selected rating from `0` to `5`; `0` means no selection.",name:`value`,required:!1,tags:{},type:{name:`enum`,raw:`StarRatingSelectValue`,value:[{value:`0`},{value:`1`},{value:`2`},{value:`3`},{value:`4`},{value:`5`}]}},disabled:{defaultValue:null,declarations:[{fileName:`evo-react/src/star-rating-select/types.ts`,name:`TypeLiteral`}],description:`Disables all five radio options.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`evo-react/src/star-rating-select/types.ts`,name:`TypeLiteral`}],description:`Shared name of the radio inputs. A stable generated name is used when omitted.`,name:`name`,required:!1,tags:{},type:{name:`string`}},a11yText:{defaultValue:{value:`Rating`},declarations:[{fileName:`evo-react/src/star-rating-select/types.ts`,name:`TypeLiteral`}],description:'Accessible name for the radio group. English default to be overridden is\n`"Rating"`. Pass `null` explicitly _only_ if alternative accessibility\ninformation is present, such as `aria-labelledby`.',name:`a11yText`,required:!1,tags:{},type:{name:`string | null`}},a11yStarText:{defaultValue:{value:`[
  "1 star",
  "2 stars",
  "3 stars",
  "4 stars",
  "5 stars",
]`},declarations:[{fileName:`evo-react/src/star-rating-select/types.ts`,name:`TypeLiteral`}],description:'Accessible names for the five radio choices, in order. English default to\nbe overridden is `"1 star", "2 stars", "3 stars", "4 stars", "5 stars"`.',name:`a11yStarText`,required:!1,tags:{},type:{name:`readonly [string, string, string, string, string]`}},onValueChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/star-rating-select/types.ts`,name:`TypeLiteral`}],description:`Fired when a radio becomes selected, with the selected rating.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: StarRatingSelectValue) => void)`}}},tags:{summary:`Interactive five-star rating with native radios.`}}}catch{}})))()}var h,g,_,v,y;function b(){return(b=t((()=>{m(),h=r(),g={title:`Form Input/EvoStarRatingSelect`,component:c,argTypes:{value:{control:{type:`range`,min:0,max:5,step:1}},defaultValue:{control:{type:`range`,min:0,max:5,step:1}},onValueChange:{action:`onValueChange`,table:{category:`Events`}}},args:{a11yText:`Rate your purchase`,a11yStarText:[`1 star`,`2 stars`,`3 stars`,`4 stars`,`5 stars`],defaultValue:0,disabled:!1,name:`purchase-rating`}},_={},v={render:e=>(0,h.jsxs)(`fieldset`,{children:[(0,h.jsx)(`legend`,{id:`purchase-rating-legend`,children:`Rate your purchase`}),(0,h.jsx)(c,{...e,a11yText:null,"aria-labelledby":`purchase-rating-legend`})]})},y=[`Default`,`InFieldset`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`The rating starts empty. Click a star or use the arrow keys to select one.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <fieldset>
      <legend id="purchase-rating-legend">Rate your purchase</legend>
      <EvoStarRatingSelect {...args} a11yText={null} aria-labelledby="purchase-rating-legend" />
    </fieldset>
}`,...v.parameters?.docs?.source},description:{story:"A visible legend can name the group through `aria-labelledby`.",...v.parameters?.docs?.description}}}})))()}b();export{_ as Default,v as InFieldset,y as __namedExportsOrder,g as default};