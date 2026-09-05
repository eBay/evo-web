import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{n as i,t as a}from"./ebay-icon-settings-16-CVHTLz0R.js";import{c as o,i as s,n as c,o as l,t as u}from"./ebay-infotip-wAncS0JK.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{d=e(n()),u(),i(),f=r(),p=[`top`,`top-left`,`top-right`,`right`,`right-bottom`,`right-top`,`bottom`,`bottom-left`,`bottom-right`,`left`,`left-bottom`,`left-top`],m={title:`buttons/ebay-infotip`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayInfotip, EbayInfotipHost, EbayInfotipContent, EbayInfotipHeading } from "@ebay/ui-core-react/ebay-infotip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/infotip";

// When using variant="modal"
import "@ebay/skin/lightbox-dialog"
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/infotip.css";

/* When using variant="modal" */
@import "@ebay/skin/lightbox-dialog.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayInfotip>
    <EbayInfotipHeading>Heading</EbayInfotipHeading>
    <EbayInfotipContent>
        <p>Here's a tip to help you be successful at your task.</p>
    </EbayInfotipContent>
</EbayInfotip>
\`\`\``}}},argTypes:{variant:{description:`Either modal or default. If modal will show the mobile version of infotip`,control:`text`},pointer:{description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`",options:[`top-left`,`top`,`top-right`,`right`,`right-bottom`,`right-top`,`bottom-left`,`bottom-right`,`bottom`,`left`,`left-bottom`,`left-top`],control:{type:`select`}},icon:{description:"Different icon to be used than `information-small`. Full list [here](https://ebay.github.io/skin/index.html#icon)",control:`text`},disabled:{description:`Define if the infotip is disabled or not`,control:`boolean`},overlayStyle:{description:"Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",options:[`top`,`left`,`bottom`,`right`],control:{type:`select`}},initialExpanded:{description:`Open the tooltip on the initial render`,control:`boolean`},open:{description:`Control the visibility of the infotip from the parent`,control:`boolean`},a11yCloseText:{description:`A11y text for close button and mask.`,control:`text`},"aria-label":{description:`A descriptive label of what the infotip button represents (e.g. "Important information")`,control:`text`},offset:{description:`Numeric offset for floating-ui positioning`,control:{type:`number`}},noFlip:{description:`Disable automatic flip behavior`,control:`boolean`},noShift:{description:`Disable automatic shift behavior`,control:`boolean`},notInline:{description:`Opt out of inline display`,control:`boolean`},onExpand:{description:`overlay has been expanded`,action:`onExpand`,table:{category:`Events`}},onCollapse:{description:`overlay has been collapsed`,action:`onCollapse`,table:{category:`Events`}},EbayInfotipHost:{description:`The custom host-button (trigger) for the Infotip`,control:`text`},EbayInfotipHeading:{description:`The heading to be displayed in the infotip`,control:`text`},EbayInfotipContent:{description:`The content to be displayed in the infotip`,control:`text`}}},h=e=>(0,f.jsx)(`div`,{style:{display:`flex`,margin:200},children:(0,f.jsxs)(l,{...e,a11yCloseText:`Close`,"aria-label":`Infotip`,children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:`Content`})})]})}),g={render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,margin:200},children:(0,f.jsx)(l,{...e,icon:(0,f.jsx)(a,{}),"aria-label":`Infotip`,a11yCloseText:`Close`,children:(0,f.jsxs)(c,{children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(`p`,{children:`Content`})]})})}),name:`Custom icon`},_=e=>(0,f.jsx)(`div`,{style:{display:`flex`,margin:200},children:(0,f.jsxs)(l,{...e,disabled:!0,a11yCloseText:`Close`,"aria-label":`Infotip`,children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:`Content`})})]})}),v={render:e=>(0,f.jsxs)(`div`,{style:{width:`100%`,margin:100},children:[(0,f.jsx)(`em`,{children:`NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content with that will break`}),(0,f.jsxs)(`p`,{children:[`Some paragraph content`,` `,(0,f.jsxs)(l,{...e,a11yCloseText:`Dismiss infotip`,"aria-label":`Important information`,children:[(0,f.jsx)(s,{children:`Important`}),(0,f.jsx)(c,{children:(0,f.jsx)(`span`,{children:`This is some important info`})})]}),` `,`More paragraph content`]})]}),name:`In paragraph`},y=e=>(0,f.jsx)(`div`,{style:{width:`100%`,margin:100},children:(0,f.jsxs)(l,{variant:`modal`,a11yCloseText:`Close`,"aria-label":`Infotip`,...e,children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})]})}),b={render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,marginLeft:300},children:p.map((t,n)=>(0,f.jsxs)(`div`,{style:{margin:`100px 0`},children:[t,` `,(0,f.jsxs)(l,{pointer:t,a11yCloseText:`Close`,"aria-label":`Infotip`,...e,children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})]},n))}),name:`Pointer direction`},x={render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,margin:200},children:(0,f.jsxs)(l,{...e,pointer:`top-left`,overlayStyle:{top:40,left:-16},a11yCloseText:`Close`,"aria-label":`Infotip`,children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})}),name:`Pointer with custom location`},S={render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,margin:200},children:(0,f.jsxs)(l,{...e,pointer:`top-left`,a11yCloseText:`Close`,children:[(0,f.jsx)(o,{children:`Click for infotip`}),(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})}),name:`Text instead of icon`},C={render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,margin:200},children:(0,f.jsxs)(l,{...e,pointer:`top-left`,a11yCloseText:`Close`,"aria-label":`Wrong aria-label, should be overwritten`,children:[(0,f.jsx)(o,{"aria-label":`Click to open infotip`,style:{height:`auto`,width:`auto`},children:({icon:e})=>(0,f.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`},children:[e,(0,f.jsx)(`span`,{style:{marginLeft:5},children:`Click me`})]})}),(0,f.jsxs)(c,{children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})]})]})}),name:`Custom button content (With render prop)`},w={render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,margin:200},children:(0,f.jsxs)(l,{...e,pointer:`top-left`,initialExpanded:!0,a11yCloseText:`Close`,"aria-label":`Infotip`,children:[(0,f.jsx)(s,{children:`Title`}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:`Use Access Key 'S' to display settings.`})})]})}),name:`Expanded by default`},T={render:()=>{let e=[`First infotip content`,`Second infotip content`,`Third infotip content`];return(0,f.jsx)(()=>{let[t,n]=(0,d.useState)(null);return(0,f.jsx)(`div`,{style:{display:`flex`,gap:24,margin:200},children:e.map((e,r)=>(0,f.jsxs)(l,{open:t===r,onExpand:()=>n(r),onCollapse:()=>n(null),a11yCloseText:`Close`,"aria-label":`Infotip ${r+1}`,children:[(0,f.jsxs)(s,{children:[`Item `,r+1]}),(0,f.jsx)(c,{children:(0,f.jsx)(`p`,{children:e})})]},r))})},{})},name:`Controlled (mutual exclusivity)`},E=[`Default`,`CustomIcon`,`Disabled`,`InParagraph`,`Modal`,`_PointerDirection`,`PointerWithCustomLocation`,`TextInsteadOfIcon`,`CustomButtonContentWithRenderProp`,`ExpandedByDefault`,`Controlled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  margin: 200
}}>
        <EbayInfotip {...args} a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} icon={<EbayIconSettings16 />} aria-label="Infotip" a11yCloseText="Close">
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Content</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Custom icon"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  margin: 200
}}>
        <EbayInfotip {...args} disabled a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 100
  }}>
            <em>
                NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content
                with that will break
            </em>
            <p>
                Some paragraph content{" "}
                <EbayInfotip {...args} a11yCloseText="Dismiss infotip" aria-label="Important information">
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <span>This is some important info</span>
                    </EbayInfotipContent>
                </EbayInfotip>{" "}
                More paragraph content
            </p>
        </div>,
  name: "In paragraph"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  margin: 100
}}>
        <EbayInfotip variant="modal" a11yCloseText="Close" aria-label="Infotip" {...args}>
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    marginLeft: 300
  }}>
            {allPointers.map((pointerType, index) => <div key={index} style={{
      margin: "100px 0"
    }}>
                    {pointerType}{" "}
                    <EbayInfotip pointer={pointerType} a11yCloseText="Close" aria-label="Infotip" {...args}>
                        <EbayInfotipHeading>Title</EbayInfotipHeading>
                        <EbayInfotipContent>
                            <p>Use Access Key &apos;S&apos; to display settings.</p>
                        </EbayInfotipContent>
                    </EbayInfotip>
                </div>)}
        </div>,
  name: "Pointer direction"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" overlayStyle={{
      top: 40,
      left: -16
    }} a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Pointer with custom location"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" a11yCloseText="Close">
                <EbayInfotipHost>Click for infotip</EbayInfotipHost>
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Text instead of icon"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" a11yCloseText="Close" aria-label="Wrong aria-label, should be overwritten">
                <EbayInfotipHost aria-label="Click to open infotip" style={{
        height: "auto",
        width: "auto"
      }}>
                    {({
          icon
        }) => <span style={{
          display: "inline-flex",
          alignItems: "center"
        }}>
                            {icon}
                            <span style={{
            marginLeft: 5
          }}>Click me</span>
                        </span>}
                </EbayInfotipHost>
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Custom button content (With render prop)"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    margin: 200
  }}>
            <EbayInfotip {...args} pointer="top-left" initialExpanded a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: "Expanded by default"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ["First infotip content", "Second infotip content", "Third infotip content"];
    const Component = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(null);
      return <div style={{
        display: "flex",
        gap: 24,
        margin: 200
      }}>
                    {items.map((text, i) => <EbayInfotip key={i} open={openIndex === i} onExpand={() => setOpenIndex(i)} onCollapse={() => setOpenIndex(null)} a11yCloseText="Close" aria-label={\`Infotip \${i + 1}\`}>
                            <EbayInfotipHeading>Item {i + 1}</EbayInfotipHeading>
                            <EbayInfotipContent>
                                <p>{text}</p>
                            </EbayInfotipContent>
                        </EbayInfotip>)}
                </div>;
    };
    return <Component />;
  },
  name: "Controlled (mutual exclusivity)"
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as Controlled,C as CustomButtonContentWithRenderProp,g as CustomIcon,h as Default,_ as Disabled,w as ExpandedByDefault,v as InParagraph,y as Modal,x as PointerWithCustomLocation,S as TextInsteadOfIcon,b as _PointerDirection,E as __namedExportsOrder,m as default};