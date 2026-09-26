import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./button-CfujlczH.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./menu-button-item-BQhzXpQL.js";import{n as g,t as _}from"./overflow-vertical-16-B_bWHZV6.js";import{a as v,c as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./menu-footer-DrL3r6CQ.js";function E(e){return(0,D.jsx)(w,{...e})}var D;function O(){return(O=t((()=>{y(),D=n();try{E.displayName=`EvoMenuButtonSeparator`,E.__docgenInfo={description:`Divides related actions or selection groups in the menu.`,displayName:`EvoMenuButtonSeparator`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/menu-button/menu-button-separator.tsx`,methods:[],props:{},tags:{summary:`Separator for a menu button.`}}}catch{}})))()}function k({className:e,children:t,...n}){return(0,j.jsx)(`span`,{...n,className:(0,A.default)(`menu-button-prefix-label`,e),children:t})}var A,j;function M(){return(M=t((()=>{A=e(r(),1),j=n();try{k.displayName=`EvoMenuButtonLabel`,k.__docgenInfo={description:`Adds a short leading label before the trigger's action text.`,displayName:`EvoMenuButtonLabel`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/menu-button/menu-button-label.tsx`,methods:[],props:{},tags:{summary:`Prefix label for a menu button trigger.`}}}catch{}})))()}var N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{i(),x(),g(),h(),c(),M(),d(),O(),s(),b(),S(),N=n(),P={title:`Buttons/EvoMenuButton`,component:l,subcomponents:{EvoMenuButtonTrigger:p,EvoMenuButtonMenu:o,EvoMenuButtonItem:u,EvoMenuButtonRadioItem:f,EvoMenuButtonCheckboxItem:m,EvoMenuButtonSeparator:E,EvoMenuButtonLabel:k},argTypes:{variant:{control:`select`,options:[`button`,`form`,`icon`,`filter`]},priority:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`none`]},size:{control:`select`,options:[`small`,`large`]},strategy:{control:`select`,options:[`absolute`,`fixed`]}}},F={render:e=>(0,N.jsxs)(l,{...e,children:[(0,N.jsx)(p,{children:`Listing actions`}),(0,N.jsxs)(o,{footer:(0,N.jsx)(T,{children:(0,N.jsx)(a,{priority:`tertiary`,children:`Done`})}),children:[(0,N.jsx)(u,{children:`Edit listing`}),(0,N.jsx)(E,{}),(0,N.jsx)(u,{children:`End listing`})]})]})},I={render:e=>(0,N.jsxs)(l,{...e,collapseOnSelect:!0,children:[(0,N.jsx)(p,{children:`Preferences`}),(0,N.jsxs)(o,{children:[(0,N.jsxs)(v,{defaultSelected:`recent`,children:[(0,N.jsx)(f,{value:`recent`,children:`Most recent`}),(0,N.jsx)(f,{value:`price`,children:`Lowest price`})]}),(0,N.jsx)(E,{}),(0,N.jsxs)(C,{defaultSelected:[`free`],children:[(0,N.jsx)(m,{value:`free`,children:`Free shipping`}),(0,N.jsx)(m,{value:`returns`,children:`Returns accepted`})]})]})]})},L={args:{variant:`icon`,a11yText:`More listing actions`},render:e=>(0,N.jsxs)(l,{...e,children:[(0,N.jsx)(p,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(o,{children:(0,N.jsx)(u,{children:`Share`})})]})},R={render:e=>(0,N.jsxs)(l,{...e,children:[(0,N.jsxs)(p,{children:[(0,N.jsx)(k,{children:`Sort by:`}),` Best match`]}),(0,N.jsx)(o,{children:(0,N.jsx)(u,{children:`Newest first`})})]})},z={args:{variant:`filter`,hasSelection:!0},render:e=>(0,N.jsxs)(l,{...e,children:[(0,N.jsx)(p,{children:`Delivery`}),(0,N.jsx)(o,{children:(0,N.jsx)(u,{children:`Free shipping`})})]})},B=[`Default`,`Choices`,`Icon`,`PrefixLabel`,`Filter`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>Listing actions</EvoMenuButtonTrigger>
      <EvoMenuButtonMenu footer={<EvoMenuFooter>
            <EvoButton priority="tertiary">Done</EvoButton>
          </EvoMenuFooter>}>
        <EvoMenuButtonItem>Edit listing</EvoMenuButtonItem>
        <EvoMenuButtonSeparator />
        <EvoMenuButtonItem>End listing</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
}`,...F.parameters?.docs?.source},description:{story:`Command menu with a separator and optional footer.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <EvoMenuButton {...args} collapseOnSelect>
      <EvoMenuButtonTrigger>Preferences</EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuRadioGroup defaultSelected="recent">
          <EvoMenuButtonRadioItem value="recent">
            Most recent
          </EvoMenuButtonRadioItem>
          <EvoMenuButtonRadioItem value="price">
            Lowest price
          </EvoMenuButtonRadioItem>
        </EvoMenuRadioGroup>
        <EvoMenuButtonSeparator />
        <EvoMenuCheckboxGroup defaultSelected={["free"]}>
          <EvoMenuButtonCheckboxItem value="free">
            Free shipping
          </EvoMenuButtonCheckboxItem>
          <EvoMenuButtonCheckboxItem value="returns">
            Returns accepted
          </EvoMenuButtonCheckboxItem>
        </EvoMenuCheckboxGroup>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
}`,...I.parameters?.docs?.source},description:{story:`Radio and checkbox items share the same value-based selection API as EvoMenu.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "icon",
    a11yText: "More listing actions"
  },
  render: args => <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>
        <EvoIconOverflowVertical16 />
      </EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuButtonItem>Share</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
}`,...L.parameters?.docs?.source},description:{story:`Icon variant uses a visible icon and an accessible trigger name.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>
        <EvoMenuButtonLabel>Sort by:</EvoMenuButtonLabel> Best match
      </EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuButtonItem>Newest first</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
}`,...R.parameters?.docs?.source},description:{story:`Prefix label adds context while preserving the trigger text.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "filter",
    hasSelection: true
  },
  render: args => <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>Delivery</EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuButtonItem>Free shipping</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
}`,...z.parameters?.docs?.source},description:{story:`Filter trigger shows the selected treatment when requested.`,...z.parameters?.docs?.description}}}})))()}V();export{I as Choices,F as Default,z as Filter,L as Icon,R as PrefixLabel,B as __namedExportsOrder,P as default};