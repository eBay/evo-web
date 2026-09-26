import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./settings-24-Bp_UwF5X.js";import{n as i,t as a}from"./toggle-button-D8FlY7Mc.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),s={title:`Buttons/EvoToggleButton`,component:a,argTypes:{layoutType:{control:`select`,options:[`minimal`,`list`,`gallery`],table:{defaultValue:{summary:`minimal`}}},onToggle:{action:`onToggle`,table:{category:`Events`}}},args:{defaultPressed:!1,disabled:!1,layoutType:`minimal`}},c={args:{title:`Show sold items`,subtitle:`Include completed listings in search results`}},l={args:{title:`Buying preferences`,subtitle:`Use my saved preferences`,icon:(0,o.jsx)(r,{}),layoutType:`list`}},u={args:{title:`Landscape prints`,img:{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,alt:``,fillPlacement:`center`},layoutType:`gallery`}},d={args:{children:(0,o.jsx)(`span`,{children:`Show local pickup listings`})}},f=[`Default`,`WithIcon`,`WithImage`,`WithChildren`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Show sold items",
    subtitle: "Include completed listings in search results"
  }
}`,...c.parameters?.docs?.source},description:{story:`The pressed state changes without changing the button's visible label.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Buying preferences",
    subtitle: "Use my saved preferences",
    icon: <EvoIconSettings24 />,
    layoutType: "list"
  }
}`,...l.parameters?.docs?.source},description:{story:`Icon media fits the list layout and remains decorative beside visible text.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Landscape prints",
    img: {
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",
      alt: "",
      fillPlacement: "center"
    },
    layoutType: "gallery"
  }
}`,...u.parameters?.docs?.source},description:{story:`Image media can fill its frame while title text names the button.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span>Show local pickup listings</span>
  }
}`,...d.parameters?.docs?.source},description:{story:`Custom child content replaces the title and subtitle paragraphs.`,...d.parameters?.docs?.description}}}})))()}p();export{c as Default,d as WithChildren,l as WithIcon,u as WithImage,f as __namedExportsOrder,s as default};