import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotip-jr0pGm1C.js";import{n as i,t as a}from"./infotip-heading-DHYt_Rj_.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),s={title:`Notices & Tips/EvoInfotip`,component:r,subcomponents:{EvoInfotipHeading:a},argTypes:{open:{control:`boolean`},defaultOpen:{control:`boolean`,table:{defaultValue:{summary:`false`}}},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}},placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`right`,`right-start`,`right-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`],table:{defaultValue:{summary:`bottom`}}},offset:{control:`number`,table:{defaultValue:{summary:`8`}}},flip:{control:`boolean`,table:{defaultValue:{summary:`true`}}},shift:{control:`boolean`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`},icon:{control:!1},a11yIconText:{control:`text`,type:{name:`string`,required:!0},table:{defaultValue:{summary:`Help`}}},a11yCloseText:{control:`text`,type:{name:`string`,required:!0},table:{defaultValue:{summary:`Dismiss infotip`}}}},args:{a11yIconText:`More pricing information`,a11yCloseText:`Close price details`}},c={render:e=>(0,o.jsxs)(r,{...e,children:[(0,o.jsx)(a,{children:`Price details`}),(0,o.jsx)(`p`,{children:`The total may change when shipping and taxes are calculated.`})]})},l={render:e=>(0,o.jsx)(`div`,{style:{width:240},children:(0,o.jsxs)(`p`,{children:[`Check how shipping costs are calculated`,` `,(0,o.jsxs)(r,{...e,a11yIconText:`More shipping information`,a11yCloseText:`Close shipping costs`,defaultOpen:!0,placement:`bottom`,children:[(0,o.jsx)(a,{children:`Shipping costs`}),`Shipping is calculated from the item location and delivery address.`]}),` `,`before checkout.`]})}),parameters:{docs:{description:{story:`Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps.`}}}},u=[`Default`,`WrappedParagraph`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <EvoInfotip {...args}>
      <EvoInfotipHeading>Price details</EvoInfotipHeading>
      <p>The total may change when shipping and taxes are calculated.</p>
    </EvoInfotip>
}`,...c.parameters?.docs?.source},description:{story:`A clickable help trigger reveals supporting information.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 240
  }}>
      <p>
        Check how shipping costs are calculated{" "}
        <EvoInfotip {...args} a11yIconText="More shipping information" a11yCloseText="Close shipping costs" defaultOpen placement="bottom">
          <EvoInfotipHeading>Shipping costs</EvoInfotipHeading>
          Shipping is calculated from the item location and delivery address.
        </EvoInfotip>{" "}
        before checkout.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps."
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`The overlay shifts to stay aligned with a trigger inside wrapping text.`,...l.parameters?.docs?.description}}}})))()}d();export{c as Default,l as WrappedParagraph,u as __namedExportsOrder,s as default};