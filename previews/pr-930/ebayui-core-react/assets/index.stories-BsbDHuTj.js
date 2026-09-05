var B=Object.defineProperty;var o=(n,i)=>B(n,"name",{value:i,configurable:!0});import{R as e,r as C}from"./iframe-DXKVC7Wu.js";import{E as L,b as h}from"./menu-button-CGALqQxv.js";import{b as N,a as V}from"./utils-4VXCHhuo.js";import{E as q}from"./button-BAvxCJp2.js";import{E as t}from"./menu-item-separator-qLY6E2OH.js";import{E as D,a as I}from"./ebay-icon-attention-16-Y2VW6D3k.js";import"./preload-helper-Cc2_yIPf.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./index-ChCx--2D.js";import"./index-BzamGs-v.js";import"./floating-ui-Dh-39v5u.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-BiwhiUzw.js";import"./index-JeB-DIMX.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./ebay-icon-overflow-vertical-16-VPm-z0Xi.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-tick-16-BRYYV87n.js";const r=o(({a11yMenuText:n,children:i,type:l,bodyState:s,a11yButtonLoadingText:g,onCollapse:E,onExpand:S,onSelect:k=o(()=>{},"onSelect"),onChange:T=o(()=>{},"onChange"),...c})=>{const x=[t,h],v=N(i,w=>!x.includes(w.type)),M=V(i,x);return e.createElement("span",{className:"split-button"},e.createElement(q,{"aria-label":s==="loading"?g:void 0,...c,ref:void 0,split:"start",bodyState:s==="expand"?void 0:s},v),e.createElement(L,{priority:c.priority,disabled:c.disabled,transparent:c.transparent,partiallyDisabled:c.partiallyDisabled,size:c.size,type:l,split:"end",reverse:!0,a11yText:n,onCollapse:E,onExpand:S,onSelect:k,onChange:T},M))},"EbaySplitButton");try{r.displayName="splitbutton",r.__docgenInfo={description:"",displayName:"splitbutton",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-split-button/split-button.tsx",methods:[],props:{a11yMenuText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-split-button/types.ts",name:"TypeLiteral"}],description:"",name:"a11yMenuText",required:!1,tags:{},type:{name:"string"}},a11yButtonLoadingText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-split-button/types.ts",name:"TypeLiteral"}],description:"",name:"a11yButtonLoadingText",required:!1,tags:{},type:{name:"string"}},onCollapse:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-split-button/types.ts",name:"TypeLiteral"}],description:"",name:"onCollapse",required:!1,tags:{},type:{name:"() => void"}},onExpand:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-split-button/types.ts",name:"TypeLiteral"}],description:"",name:"onExpand",required:!1,tags:{},type:{name:"() => void"}},href:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"},{fileName:"evo-web/node_modules/@types/react/index.d.ts",name:"AnchorHTMLAttributes"}],description:"",name:"href",required:!1,tags:{},type:{name:"string"}},onClick:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"},{fileName:"evo-web/node_modules/@types/react/index.d.ts",name:"DOMAttributes"},{fileName:"evo-web/node_modules/@types/react/index.d.ts",name:"DOMAttributes"},{fileName:"evo-web/node_modules/@types/react/index.d.ts",name:"DOMAttributes"},{fileName:"evo-web/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],description:"",name:"onClick",required:!1,tags:{},type:{name:"((e: MouseEvent<Element, MouseEvent>) => void) & MouseEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<...> & MouseEventHandler<...>"}},forwardedRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"},{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"forwardedRef",required:!1,tags:{},type:{name:"RefObject<HTMLAnchorElement & HTMLButtonElement> & Ref<HTMLDivElement & HTMLSpanElement>"}},size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"Size"}},fluid:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"fluid",required:!1,tags:{},type:{name:"boolean"}},borderless:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"borderless",required:!1,tags:{},type:{name:"boolean"}},variant:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"variant",required:!1,tags:{},type:{name:"Variant"}},partiallyDisabled:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"partiallyDisabled",required:!1,tags:{},type:{name:"boolean"}},truncate:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"truncate",required:!1,tags:{},type:{name:"boolean"}},priority:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"priority",required:!1,tags:{},type:{name:"Priority"}},bodyState:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"bodyState",required:!1,tags:{},type:{name:"BodyState"}},split:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"split",required:!1,tags:{},type:{name:"Split"}},transparent:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"transparent",required:!1,tags:{},type:{name:"boolean"}},onEscape:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"onEscape",required:!1,tags:{},type:{name:"(e: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => void"}},fixedHeight:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-button/button.tsx",name:"TypeLiteral"}],description:"",name:"fixedHeight",required:!1,tags:{},type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"onChange",required:!1,tags:{},type:{name:"EbayMenuChangeEventHandler"}},onSelect:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"onSelect",required:!1,tags:{},type:{name:"EbayMenuSelectEventHandler"}},reverse:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"reverse",required:!1,tags:{},type:{name:"boolean"}},checked:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"checked",required:!1,tags:{},type:{name:"number"}},fixWidth:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"fixWidth",required:!1,tags:{},type:{name:"boolean"}},fixed:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"fixed",required:!1,tags:{},type:{name:"boolean"}},baseEl:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"baseEl",required:!1,tags:{},type:{name:'"div" | "span"'}},classPrefix:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"classPrefix",required:!1,tags:{},type:{name:'"menu-button"'}},autofocus:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"autofocus",required:!1,tags:{},type:{name:"boolean"}},menuRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-menu/types.ts",name:"TypeLiteral"}],description:"",name:"menuRef",required:!1,tags:{},type:{name:"Ref<HTMLDivElement>"}}},tags:{}}}catch{}const{action:a}=__STORYBOOK_MODULE_ACTIONS__;t.displayName="Item";t.toString=()=>"Item";const ne={title:"buttons/ebay-split-button",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbaySplitButton } from "@ebay/ui-core-react/ebay-split-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/button";
import "@ebay/skin/menu-button";
import "@ebay/skin/split-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/button.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/split-button.css";
\`\`\`
### Icon button

### Basic

\`\`\`jsx harmony
<EbaySplitButton a11yMenuText="Show save options">
    Save document
    <Item>Save as...</Item>
    <Item>Export</Item>
</EbaySplitButton>
\`\`\``}}}},u={render:o(n=>e.createElement(r,{...n},"Save document",e.createElement(t,null,"Save as..."),e.createElement(t,null,"Export")),"render"),parameters:{component:r,args:{priority:"secondary",a11yMenuText:"Show save options"},argTypes:{priority:{options:["primary","secondary","tertiary","none"],control:"select"},onClick:{action:"clicked"},onKeyDown:{action:"key down"},onEscape:{action:"Esc pressed"},onFocus:{action:"focused"},onBlur:{action:"blured"},onCollapse:{action:"collapsed"},onExpand:{action:"expanded"},onSelect:{action:"selected"},a11yMenuText:{description:"aria label for menu button part",control:"text"},href:{description:"url for link behaviour (switches to anchor tag)",control:"text"},size:{description:"button size: `small` or `large`",options:["small","large"],control:{type:"select"}},bodyState:{description:"`loading` adds progress spinner, when user interacts with button, `reset` should be called to reset `aria-live` state, default is `none`",options:["loading","reset","aria-live","none"],control:{type:"select"}},a11yButtonLoadingText:{description:"`aria-label` for button when `bodyState` is `loading`",options:["aria-label","bodyState","loading"],control:{type:"select"}},type:{description:"menu items type: `radio` or `checkbox`",options:["radio","checkbox"],control:{type:"select"}},borderless:{description:"shows button without border",control:"boolean"},fixedHeight:{description:"fixes the height based on size",control:"boolean"},fluid:{description:"takes the whole width of the parent element",control:"boolean"},transparent:{description:"for transparent background",control:"boolean"},truncate:{description:"truncates the button text with an ellipsis",control:"boolean"},variant:{description:"button variant: `standard` (default), `destructive`, `form`",options:["standard","destructive","form"],control:{type:"select"}},disabled:{control:"boolean"},partiallyDisabled:{description:"sets `aria-disabled` but not `disabled` prop",control:"boolean"},onChange:{description:"Arguments: (e: event, { index: number, checked: number[], checkedValues: string[] }) for type `radio`/`checkbox`",action:"onChange",table:{category:"Events"}}}}},m=o(n=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(r,{...n,priority:"primary",a11yMenuText:"Show save options",onClick:a("click"),onKeyDown:o(i=>a("key down")(i),"onKeyDown"),onSelect:o((i,{index:l,checked:s})=>a("select")(i,{index:l,checked:s}),"onSelect"),onChange:o((i,{index:l,checked:s})=>a("change")(i,{index:l,checked:s}),"onChange"),onEscape:a("escape"),onFocus:a("focus"),onBlur:a("blur"),onCollapse:a("collapse"),onExpand:a("expand")},"Save document",e.createElement(t,null,"Save as..."),e.createElement(t,null,"Export"))),e.createElement("p",null,e.createElement(r,{...n,a11yMenuText:"Menu",onClick:a("clicked")},"Split Button Menu with Separator",e.createElement(t,null,"Item 1"),e.createElement(t,null,"Item 2"),e.createElement(h,null),e.createElement(t,null,"Item 3"))),e.createElement("p",null,e.createElement(r,{...n,priority:"tertiary",a11yMenuText:"Expand",onClick:a("clicked")},"Tertiary button menu with icons",e.createElement(t,null,e.createElement(D,{style:{marginRight:"8px"}})," Confirmed"),e.createElement(t,null,e.createElement(I,{style:{marginRight:"8px"}})," Not yet confirmed"),e.createElement(t,null,e.createElement(I,{style:{marginRight:"8px"}})," Not yet confirmed")))),"Default"),p=o(n=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(r,{...n,priority:"primary",size:"large",type:"checkbox",a11yMenuText:"Show options",onClick:a("clicked"),onChange:a("change")},"Primary multi-select",e.createElement(t,null,"Item 1"),e.createElement(t,{checked:!0},"Item 2"),e.createElement(t,null,"Item 3"),e.createElement(t,{checked:!0},"Item 4"))),e.createElement("p",null,e.createElement(r,{...n,size:"large",type:"radio",a11yMenuText:"Menu",onClick:a("clicked"),onChange:a("change")},"Single-select",e.createElement(t,null,"Item 1"),e.createElement(t,{checked:!0},"Item 2"),e.createElement(t,null,"Item 3"))),e.createElement("p",null,e.createElement(r,{...n,size:"large",priority:"tertiary",a11yMenuText:"Expand",onClick:a("clicked"),onSelect:a("select")},"Tertiary",e.createElement(t,null,"Item 1"),e.createElement(t,null,"Item 2"),e.createElement(t,null,"Item 3")))),"Size"),d=o(n=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(r,{...n,priority:"primary",style:{maxWidth:"200px"},truncate:!0,a11yMenuText:"Show options",onClick:a("clicked")},"Primary Split Button with truncated text label",e.createElement(t,null,"Item 1"),e.createElement(t,null,"Item 2"),e.createElement(t,null,"Item 3"))),e.createElement("p",null,e.createElement(r,{...n,style:{maxWidth:"200px"},truncate:!0,a11yMenuText:"Menu",onClick:a("clicked")},"Split Button with truncated text label",e.createElement(t,null,"Item 1"),e.createElement(t,null,"Item 2"),e.createElement(t,null,"Item 3")))),"Truncated"),y=o(n=>{const[i,l]=C.useState(!1);return e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(r,{bodyState:i?"loading":"reset",a11yMenuText:"Show options",a11yButtonLoadingText:"Stand by or stop loading by using menu",onClick:o(()=>l(!0),"onClick"),onSelect:o((s,{index:g})=>{const E=[!0,!1][g];l(E)},"onSelect"),...n},"Load",e.createElement(t,{disabled:i},"Start loading"),e.createElement(t,{disabled:!i},"Stop loading"))))},"Loading"),b=o(n=>e.createElement("div",{style:{background:"lightcyan",padding:"1em"}},e.createElement("p",null,e.createElement(r,{...n,transparent:!0,a11yMenuText:"Show options",onClick:a("clicked")},"Transparent split button",e.createElement(t,null,"Item 1"),e.createElement(t,null,"Item 2"),e.createElement(t,null,"Item 3"))),e.createElement("p",null,e.createElement(r,{...n,priority:"tertiary",transparent:!0,a11yMenuText:"Show options",onClick:a("clicked")},"Transparent tertiary split button",e.createElement(t,null,"Item 1"),e.createElement(t,null,"Item 2"),e.createElement(t,null,"Item 3")))),"Transparent"),f=o(n=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(r,{...n,disabled:!0,a11yMenuText:"Show options",onClick:a("clicked")},"Disabled Split Button"))),"Disabled"),ae=["Controls","Default","Size","Truncated","Loading","Transparent","Disabled"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <EbaySplitButton {...args}>
            Save document
            <Item>Save as...</Item>
            <Item>Export</Item>
        </EbaySplitButton>,
  parameters: {
    component: EbaySplitButton,
    args: {
      priority: "secondary",
      a11yMenuText: "Show save options"
    },
    argTypes: {
      priority: {
        options: ["primary", "secondary", "tertiary", "none"] as Priority[],
        control: "select"
      },
      onClick: {
        action: "clicked"
      },
      onKeyDown: {
        action: "key down"
      },
      onEscape: {
        action: "Esc pressed"
      },
      onFocus: {
        action: "focused"
      },
      onBlur: {
        action: "blured"
      },
      onCollapse: {
        action: "collapsed"
      },
      onExpand: {
        action: "expanded"
      },
      onSelect: {
        action: "selected"
      },
      a11yMenuText: {
        description: "aria label for menu button part",
        control: "text"
      },
      href: {
        description: "url for link behaviour (switches to anchor tag)",
        control: "text"
      },
      size: {
        description: "button size: \`small\` or \`large\`",
        options: ["small", "large"],
        control: {
          type: "select"
        }
      },
      bodyState: {
        description: "\`loading\` adds progress spinner, when user interacts with button, \`reset\` should be called to reset \`aria-live\` state, default is \`none\`",
        options: ["loading", "reset", "aria-live", "none"],
        control: {
          type: "select"
        }
      },
      a11yButtonLoadingText: {
        description: "\`aria-label\` for button when \`bodyState\` is \`loading\`",
        options: ["aria-label", "bodyState", "loading"],
        control: {
          type: "select"
        }
      },
      type: {
        description: "menu items type: \`radio\` or \`checkbox\`",
        options: ["radio", "checkbox"],
        control: {
          type: "select"
        }
      },
      borderless: {
        description: "shows button without border",
        control: "boolean"
      },
      fixedHeight: {
        description: "fixes the height based on size",
        control: "boolean"
      },
      fluid: {
        description: "takes the whole width of the parent element",
        control: "boolean"
      },
      transparent: {
        description: "for transparent background",
        control: "boolean"
      },
      truncate: {
        description: "truncates the button text with an ellipsis",
        control: "boolean"
      },
      variant: {
        description: "button variant: \`standard\` (default), \`destructive\`, \`form\`",
        options: ["standard", "destructive", "form"],
        control: {
          type: "select"
        }
      },
      disabled: {
        control: "boolean"
      },
      partiallyDisabled: {
        description: "sets \`aria-disabled\` but not \`disabled\` prop",
        control: "boolean"
      },
      onChange: {
        description: "Arguments: (e: event, { index: number, checked: number[], checkedValues: string[] }) for type \`radio\`/\`checkbox\`",
        action: "onChange",
        table: {
          category: "Events"
        }
      }
    }
  } as Meta<typeof EbaySplitButton>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbaySplitButton {...args} priority="primary" a11yMenuText="Show save options" onClick={action("click")}
    // testing TS compilation here:
    onKeyDown={e => action("key down")(e)} onSelect={(e, {
      index,
      checked
    }) => action("select")(e, {
      index,
      checked
    })} onChange={(e, {
      index,
      checked
    }) => action("change")(e, {
      index,
      checked
    })}
    //
    onEscape={action("escape")} onFocus={action("focus")} onBlur={action("blur")} onCollapse={action("collapse")} onExpand={action("expand")}>
                Save document
                <Item>Save as...</Item>
                <Item>Export</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton {...args} a11yMenuText="Menu" onClick={action("clicked")}>
                Split Button Menu with Separator
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Separator />
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton {...args} priority="tertiary" a11yMenuText="Expand" onClick={action("clicked")}>
                Tertiary button menu with icons
                <Item>
                    <EbayIconConfirmation16 style={{
          marginRight: "8px"
        }} /> Confirmed
                </Item>
                <Item>
                    <EbayIconAttention16 style={{
          marginRight: "8px"
        }} /> Not yet confirmed
                </Item>
                <Item>
                    <EbayIconAttention16 style={{
          marginRight: "8px"
        }} /> Not yet confirmed
                </Item>
            </EbaySplitButton>
        </p>
    </>`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbaySplitButton {...args} priority="primary" size="large" type="checkbox" a11yMenuText="Show options" onClick={action("clicked")} onChange={action("change")}>
                Primary multi-select
                <Item>Item 1</Item>
                <Item checked>Item 2</Item>
                <Item>Item 3</Item>
                <Item checked>Item 4</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton {...args} size="large" type="radio" a11yMenuText="Menu" onClick={action("clicked")} onChange={action("change")}>
                Single-select
                <Item>Item 1</Item>
                <Item checked>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton {...args} size="large" priority="tertiary" a11yMenuText="Expand" onClick={action("clicked")} onSelect={action("select")}>
                Tertiary
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </>`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbaySplitButton {...args} priority="primary" style={{
      maxWidth: "200px"
    }} truncate a11yMenuText="Show options" onClick={action("clicked")}>
                Primary Split Button with truncated text label
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton {...args} style={{
      maxWidth: "200px"
    }} truncate a11yMenuText="Menu" onClick={action("clicked")}>
                Split Button with truncated text label
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </>`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(false);
  return <>
            <p>
                <EbaySplitButton bodyState={loading ? "loading" : "reset"} a11yMenuText="Show options" a11yButtonLoadingText="Stand by or stop loading by using menu" onClick={() => setLoading(true)} onSelect={(e, {
        index
      }) => {
        const value = [true, false][index];
        setLoading(value);
      }} {...args}>
                    Load
                    <Item disabled={loading}>Start loading</Item>
                    <Item disabled={!loading}>Stop loading</Item>
                </EbaySplitButton>
            </p>
        </>;
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <div style={{
  background: "lightcyan",
  padding: "1em"
}}>
        <p>
            <EbaySplitButton {...args} transparent a11yMenuText="Show options" onClick={action("clicked")}>
                Transparent split button
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton {...args} priority="tertiary" transparent a11yMenuText="Show options" onClick={action("clicked")}>
                Transparent tertiary split button
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </div>`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbaySplitButton {...args} disabled a11yMenuText="Show options" onClick={action("clicked")}>
                Disabled Split Button
            </EbaySplitButton>
        </p>
    </>`,...f.parameters?.docs?.source}}};export{u as Controls,m as Default,f as Disabled,y as Loading,p as Size,b as Transparent,d as Truncated,ae as __namedExportsOrder,ne as default};
