import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{n as i,t as a}from"./ebay-icon-settings-24-B6AJHQk4.js";import{n as o,t as s}from"./ebay-toggle-button-Bj7Fmc7f.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{c=e(n()),s(),i(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Buttons/ebay-toggle-button`,component:o,argTypes:{title:{control:{type:`text`},description:`Title attribute for the button`,table:{type:{summary:`string`}}},subtitle:{control:{type:`text`},description:`Subtitle attribute for the button`,table:{type:{summary:`string`}}},pressed:{control:{type:`boolean`},description:`Pressed state of the button`,type:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},description:`Pressed state of the button`,type:`boolean`,table:{type:{summary:`boolean`}}},layoutType:{options:[`minimal`,`list`,`gallery`],control:{type:`select`},table:{defaultValue:{summary:`minimal`}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},icon:{description:`Name of EbayIcon for the component`,table:{type:{summary:`EbayIcon`}}},img:{description:`Image for the component`,table:{type:{summary:`ToggleButtonImge = {src: string; alt: string; fillPlacement?: string}`}}},onToggle:{description:`Triggered when the button is toggled: { originalEvent, pressed }`,action:`onToggle`,table:{category:`Events`}}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayToggleButton } from "@ebay/ui-core-react/ebay-toggle-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/toggle-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/toggle-button.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayToggleButton title="Label" subtitle="Subtitle" />
\`\`\``}}}},f={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(o,{className:`toggle-button--custom-modifier`,pressed:t,onToggle:()=>n(!t),title:`Button 1`,subtitle:`subtitle`,...e})}},p=e=>(0,l.jsx)(o,{...e,pressed:!1,onToggle:u(`toggle`),children:(0,l.jsx)(`p`,{children:`Button 1`})}),m=e=>(0,l.jsx)(o,{...e,pressed:!1,title:`Button 1`,subtitle:`Some context here`,onToggle:u(`toggle`),icon:(0,l.jsx)(a,{})}),h=e=>(0,l.jsx)(o,{...e,pressed:!1,title:`Button 1`,subtitle:`Some context here`,onToggle:u(`toggle`),img:{src:`https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg`,alt:`image alt`}}),g=e=>(0,l.jsx)(o,{...e,pressed:!1,title:`Button 1`,subtitle:`Some context here`,onToggle:u(`toggle`),layoutType:`gallery`,img:{src:`https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg`,alt:`image alt`,fillPlacement:`top`}}),_=[`Default`,`WithChildren`,`IconButton`,`ImageButton`,`ImageButtonWithPlacement`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isPressed, setIsPressed] = useState(false);
    return <EbayToggleButton className="toggle-button--custom-modifier" pressed={isPressed} onToggle={() => setIsPressed(!isPressed)} title={"Button 1"} subtitle={"subtitle"} {...args}></EbayToggleButton>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} onToggle={action("toggle")}>
        <p>Button 1</p>
    </EbayToggleButton>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} icon={<EbayIconSettings24 />}></EbayToggleButton>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} img={{
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  alt: "image alt"
}}></EbayToggleButton>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} layoutType="gallery" img={{
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  alt: "image alt",
  fillPlacement: "top"
}}></EbayToggleButton>`,...g.parameters?.docs?.source}}}})))()}v();export{f as Default,m as IconButton,h as ImageButton,g as ImageButtonWithPlacement,p as WithChildren,_ as __namedExportsOrder,d as default};