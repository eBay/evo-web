var v=Object.defineProperty;var n=(t,r)=>v(t,"name",{value:r,configurable:!0});import{R as e,r as T}from"./iframe-DIKo1UuP.js";import{E as o,a as h,b as a,c as i}from"./ebay-infotip-content-Q8SdFQt8.js";import{E as S}from"./ebay-icon-settings-16-DWv-YIas.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-D6G4_PXp.js";import"./use-tooltip-DgJNxbzv.js";import"./ebay-icon-close-16-C0_o9Uqp.js";import"./dialog-previous-button-rt1ulcPY.js";import"./index-CSGTE6jH.js";import"./icon-button-BOmHALg9.js";import"./badge-wj4d5dv0.js";import"./ebay-icon-chevron-left-16-DbYJ1SCC.js";import"./lightbox-dialog-BZcTkXhM.js";import"./ebay-icon-information-16-Bha8IKHy.js";import"./floating-ui-pQ1Xryzh.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-CX8kTK6s.js";import"./index-D4gsu9Bi.js";const H=["top","top-left","top-right","right","right-bottom","right-top","bottom","bottom-left","bottom-right","left","left-bottom","left-top"],z={title:"buttons/ebay-infotip",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{variant:{description:"Either modal or default. If modal will show the mobile version of infotip",control:"text"},pointer:{description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`",options:["top-left","top","top-right","right","right-bottom","right-top","bottom-left","bottom-right","bottom","left","left-bottom","left-top"],control:{type:"select"}},icon:{description:"Different icon to be used than `information-small`. Full list [here](https://ebay.github.io/skin/index.html#icon)",control:"text"},disabled:{description:"Define if the infotip is disabled or not",control:"boolean"},overlayStyle:{description:"Style object to customize default values for the overlay. It can be used all CSS properties like `top`, `left`, `bottom`, `right`.",options:["top","left","bottom","right"],control:{type:"select"}},initialExpanded:{description:"Open the tooltip on the initial render",control:"boolean"},open:{description:"Control the visibility of the infotip from the parent",control:"boolean"},a11yCloseText:{description:"A11y text for close button and mask.",control:"text"},"aria-label":{description:'A descriptive label of what the infotip button represents (e.g. "Important information")',control:"text"},offset:{description:"Numeric offset for floating-ui positioning",control:{type:"number"}},noFlip:{description:"Disable automatic flip behavior",control:"boolean"},noShift:{description:"Disable automatic shift behavior",control:"boolean"},notInline:{description:"Opt out of inline display",control:"boolean"},onExpand:{description:"overlay has been expanded",action:"onExpand",table:{category:"Events"}},onCollapse:{description:"overlay has been collapsed",action:"onCollapse",table:{category:"Events"}},EbayInfotipHost:{description:"The custom host-button (trigger) for the Infotip",control:"text"},EbayInfotipHeading:{description:"The heading to be displayed in the infotip",control:"text"},EbayInfotipContent:{description:"The content to be displayed in the infotip",control:"text"}}},s=n(t=>e.createElement("div",{style:{display:"flex",margin:200}},e.createElement(o,{...t,a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(i,null,"Title"),e.createElement(a,null,e.createElement("p",null,"Content")))),"Default"),p={render:n(t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(o,{...t,icon:e.createElement(S,null),"aria-label":"Infotip",a11yCloseText:"Close"},e.createElement(a,null,e.createElement(i,null,"Title"),e.createElement("p",null,"Content")))),"render"),name:"Custom icon"},c=n(t=>e.createElement("div",{style:{display:"flex",margin:200}},e.createElement(o,{...t,disabled:!0,a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(i,null,"Title"),e.createElement(a,null,e.createElement("p",null,"Content")))),"Disabled"),m={render:n(t=>e.createElement("div",{style:{width:"100%",margin:100}},e.createElement("em",null,"NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content with that will break"),e.createElement("p",null,"Some paragraph content"," ",e.createElement(o,{...t,a11yCloseText:"Dismiss infotip","aria-label":"Important information"},e.createElement(i,null,"Important"),e.createElement(a,null,e.createElement("span",null,"This is some important info")))," ","More paragraph content")),"render"),name:"In paragraph"},d=n(t=>e.createElement("div",{style:{width:"100%",margin:100}},e.createElement(o,{variant:"modal",a11yCloseText:"Close","aria-label":"Infotip",...t},e.createElement(i,null,"Title"),e.createElement(a,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),"Modal"),y={render:n(t=>e.createElement("div",{style:{width:"100%",marginLeft:300}},H.map((r,I)=>e.createElement("div",{key:I,style:{margin:"100px 0"}},r," ",e.createElement(o,{pointer:r,a11yCloseText:"Close","aria-label":"Infotip",...t},e.createElement(i,null,"Title"),e.createElement(a,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))))),"render"),name:"Pointer direction"},f={render:n(t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(o,{...t,pointer:"top-left",overlayStyle:{top:40,left:-16},a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(i,null,"Title"),e.createElement(a,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"render"),name:"Pointer with custom location"},b={render:n(t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(o,{...t,pointer:"top-left",a11yCloseText:"Close"},e.createElement(h,null,"Click for infotip"),e.createElement(i,null,"Title"),e.createElement(a,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"render"),name:"Text instead of icon"},E={render:n(t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(o,{...t,pointer:"top-left",a11yCloseText:"Close","aria-label":"Wrong aria-label, should be overwritten"},e.createElement(h,{"aria-label":"Click to open infotip",style:{height:"auto",width:"auto"}},({icon:r})=>e.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},r,e.createElement("span",{style:{marginLeft:5}},"Click me"))),e.createElement(a,null,e.createElement(i,null,"Title"),e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"render"),name:"Custom button content (With render prop)"},u={render:n(t=>e.createElement("div",{style:{width:"100%",margin:200}},e.createElement(o,{...t,pointer:"top-left",initialExpanded:!0,a11yCloseText:"Close","aria-label":"Infotip"},e.createElement(i,null,"Title"),e.createElement(a,null,e.createElement("p",null,"Use Access Key 'S' to display settings.")))),"render"),name:"Expanded by default"},g={render:n(()=>{const t=["First infotip content","Second infotip content","Third infotip content"],r=n(()=>{const[I,C]=T.useState(null);return e.createElement("div",{style:{display:"flex",gap:24,margin:200}},t.map((x,l)=>e.createElement(o,{key:l,open:I===l,onExpand:n(()=>C(l),"onExpand"),onCollapse:n(()=>C(null),"onCollapse"),a11yCloseText:"Close","aria-label":`Infotip ${l+1}`},e.createElement(i,null,"Item ",l+1),e.createElement(a,null,e.createElement("p",null,x)))))},"Component");return e.createElement(r,null)},"render"),name:"Controlled (mutual exclusivity)"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  margin: 200
}}>
        <EbayInfotip {...args} a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  margin: 200
}}>
        <EbayInfotip {...args} disabled a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const G=["Default","CustomIcon","Disabled","InParagraph","Modal","_PointerDirection","PointerWithCustomLocation","TextInsteadOfIcon","CustomButtonContentWithRenderProp","ExpandedByDefault","Controlled"];export{g as Controlled,E as CustomButtonContentWithRenderProp,p as CustomIcon,s as Default,c as Disabled,u as ExpandedByDefault,m as InParagraph,d as Modal,f as PointerWithCustomLocation,b as TextInsteadOfIcon,y as _PointerDirection,G as __namedExportsOrder,z as default};
