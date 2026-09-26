import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./button-BTBy6h7W.js";import{n as o,t as s}from"./overflow-vertical-16-B_bWHZV6.js";import{n as c,t as l}from"./menu-checkbox-group-CFy3uirp.js";import{i as u,n as d,r as f,t as p}from"./menu-radio-group-BxTSX1Hp.js";import{a as m,c as h,d as g,f as _,i as v,l as y,n as b,o as x,r as S,s as C,t as w,u as T}from"./menu-button-separator-DOs7_D0L.js";function E({className:e,children:t,...n}){return(0,O.jsx)(`span`,{...n,className:(0,D.default)(`menu-button-prefix-label`,e),children:t})}var D,O;function k(){return(k=t((()=>{D=e(r(),1),O=n();try{E.displayName=`EvoMenuButtonLabel`,E.__docgenInfo={description:`Adds a short leading label before the trigger's action text.`,displayName:`EvoMenuButtonLabel`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/menu-button/menu-button-label.tsx`,methods:[],props:{},tags:{summary:`Prefix label for a menu button trigger.`}}}catch{}})))()}var A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{i(),u(),o(),_(),x(),k(),h(),b(),T(),c(),d(),A=n(),j={title:`Buttons/EvoMenuButton`,component:g,subcomponents:{EvoMenuButtonTrigger:y,EvoMenuButtonMenu:C,EvoMenuButtonItem:v,EvoMenuButtonRadioItem:m,EvoMenuButtonCheckboxItem:S,EvoMenuButtonSeparator:w,EvoMenuButtonLabel:E},argTypes:{variant:{control:`select`,options:[`button`,`form`,`icon`,`filter`]},priority:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`none`]},size:{control:`select`,options:[`small`,`large`]},strategy:{control:`select`,options:[`absolute`,`fixed`]}}},M={render:e=>(0,A.jsxs)(g,{...e,children:[(0,A.jsx)(y,{children:`Listing actions`}),(0,A.jsxs)(C,{footer:(0,A.jsx)(f,{children:(0,A.jsx)(a,{priority:`tertiary`,children:`Done`})}),children:[(0,A.jsx)(v,{children:`Edit listing`}),(0,A.jsx)(w,{}),(0,A.jsx)(v,{children:`End listing`})]})]})},N={render:e=>(0,A.jsxs)(g,{...e,collapseOnSelect:!0,children:[(0,A.jsx)(y,{children:`Preferences`}),(0,A.jsxs)(C,{children:[(0,A.jsxs)(p,{defaultSelected:`recent`,children:[(0,A.jsx)(m,{value:`recent`,children:`Most recent`}),(0,A.jsx)(m,{value:`price`,children:`Lowest price`})]}),(0,A.jsx)(w,{}),(0,A.jsxs)(l,{defaultSelected:[`free`],children:[(0,A.jsx)(S,{value:`free`,children:`Free shipping`}),(0,A.jsx)(S,{value:`returns`,children:`Returns accepted`})]})]})]})},P={args:{variant:`icon`,a11yText:`More listing actions`},render:e=>(0,A.jsxs)(g,{...e,children:[(0,A.jsx)(y,{children:(0,A.jsx)(s,{})}),(0,A.jsx)(C,{children:(0,A.jsx)(v,{children:`Share`})})]})},F={render:e=>(0,A.jsxs)(g,{...e,children:[(0,A.jsxs)(y,{children:[(0,A.jsx)(E,{children:`Sort by:`}),` Best match`]}),(0,A.jsx)(C,{children:(0,A.jsx)(v,{children:`Newest first`})})]})},I={args:{variant:`filter`,hasSelection:!0},render:e=>(0,A.jsxs)(g,{...e,children:[(0,A.jsx)(y,{children:`Delivery`}),(0,A.jsx)(C,{children:(0,A.jsx)(v,{children:`Free shipping`})})]})},L=[`Default`,`Choices`,`Icon`,`PrefixLabel`,`Filter`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Command menu with a separator and optional footer.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Radio and checkbox items share the same value-based selection API as EvoMenu.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Icon variant uses a visible icon and an accessible trigger name.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>
        <EvoMenuButtonLabel>Sort by:</EvoMenuButtonLabel> Best match
      </EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuButtonItem>Newest first</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
}`,...F.parameters?.docs?.source},description:{story:`Prefix label adds context while preserving the trigger text.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Filter trigger shows the selected treatment when requested.`,...I.parameters?.docs?.description}}}})))()}R();export{N as Choices,M as Default,I as Filter,P as Icon,F as PrefixLabel,L as __namedExportsOrder,j as default};