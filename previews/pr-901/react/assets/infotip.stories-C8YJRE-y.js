import{j as e}from"./iframe-D9crypn6.js";import{u,E as i}from"./infotip-CnTpRIGK.js";import{c as f}from"./index-BQGrUzVk.js";import"./preload-helper-PPVm8Dsz.js";import"./close-16-CVPaxD_K.js";import"./icon-BppzJdT1.js";import"./icon-button-CQvn-WS7.js";/* empty css               */import"./use-controllable-id-qzdDPQur.js";import"./use-expander-BpDP-4Xp.js";function n({as:t="span",id:r,className:s,children:p,...l}){const{headingId:d,setHeadingId:c}=u(),m=r??d;return r&&c(r),e.jsx(t,{...l,id:m,className:f("infotip__heading",s),children:p})}try{n.displayName="EvoInfotipHeading",n.__docgenInfo={description:"",displayName:"EvoInfotipHeading",props:{as:{defaultValue:{value:"span"},description:"Element used for the heading. Defaults to `span`.",name:"as",required:!1,type:{name:"ElementType"}}}}}catch{}const _={title:"notices & tips/evo-infotip",component:i,subcomponents:{EvoInfotipHeading:n},tags:["autodocs"],parameters:{docs:{description:{component:`
An infotip provides additional information through a clickable information icon.

## Usage

\`\`\`tsx
import { EvoInfotip, EvoInfotipHeading } from "@evo-web/react/infotip";
\`\`\`
        `}}},argTypes:{open:{control:"boolean"},defaultOpen:{control:"boolean",table:{defaultValue:{summary:"false"}}},onOpenChange:{action:"onOpenChange",table:{category:"Events"}},placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],table:{defaultValue:{summary:"bottom"}}},offset:{control:"number",table:{defaultValue:{summary:"8"}}},flip:{control:"boolean",table:{defaultValue:{summary:"true"}}},shift:{control:"boolean",table:{defaultValue:{summary:"true"}}},disabled:{control:"boolean"},icon:{control:!1},a11yIconText:{control:"text",type:{name:"string",required:!0},table:{defaultValue:{summary:"Help"}}},a11yCloseText:{control:"text",type:{name:"string",required:!0},table:{defaultValue:{summary:"Dismiss infotip"}}}},args:{a11yIconText:"Important information",a11yCloseText:"Dismiss infotip"}},o={render:t=>e.jsxs(i,{...t,children:[e.jsx(n,{children:"Heading"}),e.jsx("p",{children:"Content"})]})},a={render:t=>e.jsx("div",{style:{width:240},children:e.jsxs("p",{children:["This paragraph wraps around the infotip button"," ",e.jsxs(i,{...t,defaultOpen:!0,placement:"bottom",children:[e.jsx(n,{children:"Positioning check"}),"The infotip should remain aligned with its icon button as the paragraph wraps."]})," ","while the button itself remains a single box."]})}),parameters:{docs:{description:{story:"Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <EvoInfotip {...args}>
      <EvoInfotipHeading>Heading</EvoInfotipHeading>
      <p>Content</p>
    </EvoInfotip>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
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
}`,...a.parameters?.docs?.source}}};const j=["Default","WrappedParagraph"];export{o as Default,a as WrappedParagraph,j as __namedExportsOrder,_ as default};
