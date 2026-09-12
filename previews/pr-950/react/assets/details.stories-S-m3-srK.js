import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./details-content-H6mu5xyp.js";import{n as f,t as p}from"./lightbulb-16-AAu8h-pC.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{d(),r(),s(),i(),o(),f(),m=t(),h=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,g={title:`Navigation & Disclosure/EvoDetails`,component:a,subcomponents:{EvoDetailsSummary:l,EvoDetailsLeading:n,EvoDetailsLabel:c,EvoDetailsContent:u},argTypes:{size:{control:`select`,options:[`regular`,`small`],table:{defaultValue:{summary:`regular`}}},alignment:{control:`select`,options:[`regular`,`center`],table:{defaultValue:{summary:`regular`}}},open:{control:`boolean`,table:{defaultValue:{summary:`false`}}},onToggle:{action:`onToggle`,table:{category:`Events`}}},args:{size:`regular`,alignment:`regular`,open:!1}},_={render:e=>(0,m.jsxs)(a,{...e,children:[(0,m.jsx)(l,{children:(0,m.jsx)(c,{children:`Show me the details!`})}),(0,m.jsx)(u,{children:h})]})},v={render:e=>(0,m.jsxs)(a,{...e,children:[(0,m.jsxs)(l,{children:[(0,m.jsx)(n,{children:(0,m.jsx)(p,{})}),(0,m.jsx)(c,{children:`Show me the details!`})]}),(0,m.jsx)(u,{children:h})]})},y=[`Default`,`WithLeadingIcon`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>{LOREM}</EvoDetailsContent>
    </EvoDetails>
}`,..._.parameters?.docs?.source},description:{story:`Native disclosure keeps secondary information collapsed until opened.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLeading>
          <EvoIconLightbulb16 />
        </EvoDetailsLeading>
        <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>{LOREM}</EvoDetailsContent>
    </EvoDetails>
}`,...v.parameters?.docs?.source},description:{story:`A decorative icon distinguishes the disclosure section.`,...v.parameters?.docs?.description}}}})))()}b();export{_ as Default,v as WithLeadingIcon,y as __namedExportsOrder,g as default};