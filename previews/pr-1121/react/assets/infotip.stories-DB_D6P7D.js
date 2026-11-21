import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./infotip-CZ_ecLfq.js";function o({as:e=`span`,className:t,children:n,...r}){return(0,c.jsx)(e,{...r,className:(0,s.default)(`infotip__heading`,t),children:n})}var s,c;function l(){return(l=t((()=>{s=e(r(),1),c=n();try{o.displayName=`EvoInfotipHeading`,o.__docgenInfo={description:"Heading for the infotip content. It is visual and semantic content only and\ndoes not create an `aria-labelledby` relationship.",displayName:`EvoInfotipHeading`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/infotip/infotip-heading.tsx`,methods:[],props:{as:{defaultValue:{value:`span`},declarations:[{fileName:`evo-react/src/infotip/types.ts`,name:`TypeLiteral`}],description:"Element used for the heading. Defaults to `span`.",name:`as`,required:!1,tags:{},type:{name:`ElementType`}}},tags:{summary:`Infotip heading.`}}}catch{}})))()}var u,d,f,p,m;function h(){return(h=t((()=>{i(),l(),u=n(),d={title:`Notices & Tips/EvoInfotip`,component:a,subcomponents:{EvoInfotipHeading:o},argTypes:{open:{control:`boolean`},defaultOpen:{control:`boolean`,table:{defaultValue:{summary:`false`}}},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}},placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`right`,`right-start`,`right-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`],table:{defaultValue:{summary:`bottom`}}},offset:{control:`number`,table:{defaultValue:{summary:`8`}}},flip:{control:`boolean`,table:{defaultValue:{summary:`true`}}},shift:{control:`boolean`,table:{defaultValue:{summary:`true`}}},detachPopover:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`},icon:{control:!1},a11yIconText:{control:`text`,type:{name:`string`,required:!0},table:{defaultValue:{summary:`Help`}}},a11yCloseText:{control:`text`,type:{name:`string`,required:!0},table:{defaultValue:{summary:`Dismiss infotip`}}}},args:{a11yIconText:`More pricing information`,a11yCloseText:`Close price details`}},f={render:e=>(0,u.jsxs)(a,{...e,children:[(0,u.jsx)(o,{children:`Price details`}),(0,u.jsx)(`p`,{children:`The total may change when shipping and taxes are calculated.`})]})},p={render:e=>(0,u.jsx)(`div`,{style:{width:240},children:(0,u.jsxs)(`p`,{children:[`Check how shipping costs are calculated`,` `,(0,u.jsxs)(a,{...e,a11yIconText:`More shipping information`,a11yCloseText:`Close shipping costs`,defaultOpen:!0,placement:`bottom`,children:[(0,u.jsx)(o,{children:`Shipping costs`}),`Shipping is calculated from the item location and delivery address.`]}),` `,`before checkout.`]})}),parameters:{docs:{description:{story:`Resize the canvas and confirm that the infotip remains aligned with its icon button while the surrounding paragraph wraps.`}}}},m=[`Default`,`WrappedParagraph`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <EvoInfotip {...args}>
      <EvoInfotipHeading>Price details</EvoInfotipHeading>
      <p>The total may change when shipping and taxes are calculated.</p>
    </EvoInfotip>
}`,...f.parameters?.docs?.source},description:{story:`A clickable help trigger reveals supporting information.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`The overlay shifts to stay aligned with a trigger inside wrapping text.`,...p.parameters?.docs?.description}}}})))()}h();export{f as Default,p as WrappedParagraph,m as __namedExportsOrder,d as default};