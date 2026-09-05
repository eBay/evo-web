import{j as e}from"./iframe-UCdZcB8D.js";import{u,E as r}from"./infotip-Y1ImWiDF.js";import{c as f}from"./index-xPHnp5zA.js";import"./preload-helper-PPVm8Dsz.js";import"./close-16-BcergkzV.js";import"./icon-W77tVzv7.js";import"./icon-button-uczaLB6v.js";/* empty css               */import"./use-controllable-id-DtxLtMVh.js";function n({as:t="span",id:i,className:s,children:p,...l}){const{headingId:d,setHeadingId:c}=u(),m=i??d;return i&&c(i),e.jsx(t,{...l,id:m,className:f("infotip__heading",s),children:p})}try{n.displayName="EvoInfotipHeading",n.__docgenInfo={description:"",displayName:"EvoInfotipHeading",props:{as:{defaultValue:{value:"span"},description:"Element used for the heading. Defaults to `span`.",name:"as",required:!1,type:{name:"ElementType"}}}}}catch{}const H={title:"notices & tips/evo-infotip",component:r,subcomponents:{EvoInfotipHeading:n},tags:["autodocs"],parameters:{docs:{description:{component:`
An infotip provides additional information through a clickable information icon.

## Usage

\`\`\`tsx
import { EvoInfotip, EvoInfotipHeading } from "@evo-web/react/infotip";
\`\`\`
        `}}},argTypes:{open:{control:"boolean"},defaultOpen:{control:"boolean",table:{defaultValue:{summary:"false"}}},onOpenChange:{action:"onOpenChange",table:{category:"Events"}},placement:{control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],table:{defaultValue:{summary:"bottom"}}},offset:{control:"number",table:{defaultValue:{summary:"8"}}},flip:{control:"boolean",table:{defaultValue:{summary:"true"}}},shift:{control:"boolean",table:{defaultValue:{summary:"true"}}},disabled:{control:"boolean"},icon:{control:!1},a11yIconText:{control:"text",type:{name:"string",required:!0},table:{defaultValue:{summary:"Help"}}},a11yCloseText:{control:"text",type:{name:"string",required:!0},table:{defaultValue:{summary:"Dismiss infotip"}}}},args:{a11yIconText:"Important information",a11yCloseText:"Dismiss infotip"}},a={render:t=>e.jsx("div",{style:{margin:200},children:e.jsxs(r,{...t,children:[e.jsx(n,{children:"Heading"}),e.jsx("p",{children:"Content"})]})})},o={render:t=>e.jsx("div",{style:{margin:200,width:240},children:e.jsxs("p",{children:["This paragraph wraps around the infotip button"," ",e.jsxs(r,{...t,defaultOpen:!0,placement:"bottom",children:[e.jsx(n,{children:"Positioning check"}),"The infotip should remain aligned with its icon button as the paragraph wraps."]})," ","while the button itself remains a single box."]})}),parameters:{docs:{description:{story:"Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    margin: 200
  }}>
      <EvoInfotip {...args}>
        <EvoInfotipHeading>Heading</EvoInfotipHeading>
        <p>Content</p>
      </EvoInfotip>
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const _=["Default","WrappedParagraph"];export{a as Default,o as WrappedParagraph,_ as __namedExportsOrder,H as default};
