import{j as e}from"./iframe-bB5R6y3z.js";import{a as s,b as i,c as l,d as n,E as r}from"./details-content-Bu_Gihh0.js";import{E as u}from"./lightbulb-16-BFsOFYgU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRxJUMT1.js";import"./chevron-down-16-BzwH90m1.js";import"./icon-UUHrkSKK.js";const m="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",h={title:"navigation & disclosure/evo-details",component:r,subcomponents:{EvoDetailsSummary:n,EvoDetailsLeading:l,EvoDetailsLabel:i,EvoDetailsContent:s},tags:["autodocs"],parameters:{docs:{description:{component:'\nA disclosure component that shows/hides content using the native `<details>` element. Composed using sub-components: `EvoDetailsSummary`, `EvoDetailsLabel`, `EvoDetailsLeading`, and `EvoDetailsContent`.\n\n## Usage\n\n```tsx\nimport {\n  EvoDetails,\n  EvoDetailsSummary,\n  EvoDetailsLabel,\n  EvoDetailsLeading,\n  EvoDetailsContent,\n} from "@evo-web/react/details";\n```\n        '}}},argTypes:{size:{control:"select",options:["regular","small"],table:{defaultValue:{summary:"regular"}}},alignment:{control:"select",options:["regular","center"],table:{defaultValue:{summary:"regular"}}},open:{control:"boolean",description:"Whether the details is open",table:{defaultValue:{summary:"false"}}},onToggle:{action:"onToggle",table:{category:"Events"}}},args:{size:"regular",alignment:"regular",open:!1}},t={render:o=>e.jsxs(r,{...o,children:[e.jsx(n,{children:e.jsx(i,{children:"Show me the details!"})}),e.jsx(s,{children:m})]})},a={render:o=>e.jsxs(r,{...o,children:[e.jsxs(n,{children:[e.jsx(l,{children:e.jsx(u,{})}),e.jsx(i,{children:"Show me the details!"})]}),e.jsx(s,{children:m})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>{LOREM}</EvoDetailsContent>
    </EvoDetails>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLeading>
          <EvoIconLightbulb16 />
        </EvoDetailsLeading>
        <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>{LOREM}</EvoDetailsContent>
    </EvoDetails>
}`,...a.parameters?.docs?.source}}};const b=["Default","WithLeading"];export{t as Default,a as WithLeading,b as __namedExportsOrder,h as default};
