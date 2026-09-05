var m=Object.defineProperty;var t=(e,n)=>m(e,"name",{value:n,configurable:!0});import{r as p,R as o}from"./iframe-DGu6SM1O.js";import{E as s}from"./toggle-button-DaFf81dI.js";import{E as d}from"./ebay-icon-settings-24-CBLw4yFF.js";import"./preload-helper-Cc2_yIPf.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,S={title:"Buttons/ebay-toggle-button",component:s,argTypes:{title:{control:{type:"text"},description:"Title attribute for the button",table:{type:{summary:"string"}}},subtitle:{control:{type:"text"},description:"Subtitle attribute for the button",table:{type:{summary:"string"}}},pressed:{control:{type:"boolean"},description:"Pressed state of the button",type:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Pressed state of the button",type:"boolean",table:{type:{summary:"boolean"}}},layoutType:{options:["minimal","list","gallery"],control:{type:"select"},table:{defaultValue:{summary:"minimal"}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},icon:{description:"Name of EbayIcon for the component",table:{type:{summary:"EbayIcon"}}},img:{description:"Image for the component",table:{type:{summary:"ToggleButtonImge = {src: string; alt: string; fillPlacement?: string}"}}},onToggle:{description:"Triggered when the button is toggled: { originalEvent, pressed }",action:"onToggle",table:{category:"Events"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},a={render:t(e=>{const[n,u]=p.useState(!1);return o.createElement(s,{className:"toggle-button--custom-modifier",pressed:n,onToggle:t(()=>u(!n),"onToggle"),title:"Button 1",subtitle:"subtitle",...e})},"render")},r=t(e=>o.createElement(s,{...e,pressed:!1,onToggle:c("toggle")},o.createElement("p",null,"Button 1")),"WithChildren"),l=t(e=>o.createElement(s,{...e,pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:c("toggle"),icon:o.createElement(d,null)}),"IconButton"),g=t(e=>o.createElement(s,{...e,pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:c("toggle"),img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt"}}),"ImageButton"),i=t(e=>o.createElement(s,{...e,pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:c("toggle"),layoutType:"gallery",img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt",fillPlacement:"top"}}),"ImageButtonWithPlacement");a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isPressed, setIsPressed] = useState(false);
    return <EbayToggleButton className="toggle-button--custom-modifier" pressed={isPressed} onToggle={() => setIsPressed(!isPressed)} title={"Button 1"} subtitle={"subtitle"} {...args}></EbayToggleButton>;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} onToggle={action("toggle")}>
        <p>Button 1</p>
    </EbayToggleButton>`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} icon={<EbayIconSettings24 />}></EbayToggleButton>',...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} img={{
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  alt: "image alt"
}}></EbayToggleButton>`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <EbayToggleButton {...args} pressed={false} title={"Button 1"} subtitle={"Some context here"} onToggle={action("toggle")} layoutType="gallery" img={{
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  alt: "image alt",
  fillPlacement: "top"
}}></EbayToggleButton>`,...i.parameters?.docs?.source}}};const E=["Default","WithChildren","IconButton","ImageButton","ImageButtonWithPlacement"];export{a as Default,l as IconButton,g as ImageButton,i as ImageButtonWithPlacement,r as WithChildren,E as __namedExportsOrder,S as default};
