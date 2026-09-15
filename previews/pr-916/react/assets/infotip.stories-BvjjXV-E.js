import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{a as i,n as a,o,t as s}from"./infotip-C6tS3MPH.js";function c({as:e=`span`,id:t,className:n,children:r,...i}){let{headingId:a,setHeadingId:s}=o(),c=t??a;return t&&s(t),(0,u.jsx)(e,{...i,id:c,className:(0,l.default)(`infotip__heading`,n),children:r})}var l,u;function d(){return(d=t((()=>{l=e(r(),1),i(),u=n();try{c.displayName=`EvoInfotipHeading`,c.__docgenInfo={description:``,displayName:`EvoInfotipHeading`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/infotip/infotip-heading.tsx`,methods:[],props:{as:{defaultValue:{value:`span`},declarations:[{fileName:`evo-react/src/infotip/types.ts`,name:`TypeLiteral`}],description:"Element used for the heading. Defaults to `span`.",name:`as`,required:!1,tags:{},type:{name:`ElementType | undefined`}}},tags:{}}}catch{}})))()}var f,p,m,h,g;function _(){return(_=t((()=>{a(),d(),f=n(),p={title:`notices & tips/evo-infotip`,component:s,subcomponents:{EvoInfotipHeading:c},tags:[`autodocs`],parameters:{docs:{description:{component:`
An infotip provides additional information through a clickable information icon.

## Usage

\`\`\`tsx
import { EvoInfotip, EvoInfotipHeading } from "@evo-web/react/infotip";
\`\`\`
        `}}},argTypes:{open:{control:`boolean`},defaultOpen:{control:`boolean`,table:{defaultValue:{summary:`false`}}},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}},placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`right`,`right-start`,`right-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`],table:{defaultValue:{summary:`bottom`}}},offset:{control:`number`,table:{defaultValue:{summary:`8`}}},flip:{control:`boolean`,table:{defaultValue:{summary:`true`}}},shift:{control:`boolean`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`},icon:{control:!1},a11yIconText:{control:`text`,type:{name:`string`,required:!0},table:{defaultValue:{summary:`Help`}}},a11yCloseText:{control:`text`,type:{name:`string`,required:!0},table:{defaultValue:{summary:`Dismiss infotip`}}}},args:{a11yIconText:`Important information`,a11yCloseText:`Dismiss infotip`}},m={render:e=>(0,f.jsx)(`div`,{style:{margin:200},children:(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(c,{children:`Heading`}),(0,f.jsx)(`p`,{children:`Content`})]})})},h={render:e=>(0,f.jsx)(`div`,{style:{margin:200,width:240},children:(0,f.jsxs)(`p`,{children:[`This paragraph wraps around the infotip button`,` `,(0,f.jsxs)(s,{...e,defaultOpen:!0,placement:`bottom`,children:[(0,f.jsx)(c,{children:`Positioning check`}),`The infotip should remain aligned with its icon button as the paragraph wraps.`]}),` `,`while the button itself remains a single box.`]})}),parameters:{docs:{description:{story:`Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps.`}}}},g=[`Default`,`WrappedParagraph`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    margin: 200
  }}>
      <EvoInfotip {...args}>
        <EvoInfotipHeading>Heading</EvoInfotipHeading>
        <p>Content</p>
      </EvoInfotip>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    margin: 200,
    width: 240
  }}>
      <p>
        This paragraph wraps around the infotip button{" "}
        <EvoInfotip {...args} defaultOpen placement="bottom">
          <EvoInfotipHeading>Positioning check</EvoInfotipHeading>
          The infotip should remain aligned with its icon button as the
          paragraph wraps.
        </EvoInfotip>{" "}
        while the button itself remains a single box.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps."
      }
    }
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Default,h as WrappedParagraph,g as __namedExportsOrder,p as default};