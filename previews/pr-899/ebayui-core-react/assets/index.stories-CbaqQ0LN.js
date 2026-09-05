var z=Object.defineProperty;var r=(n,m)=>z(n,"name",{value:m,configurable:!0});import{R as e,r as D}from"./iframe-DIKo1UuP.js";import{E as N}from"./ebay-icon-settings-16-DWv-YIas.js";import{E as a,a as W,b as P}from"./menu-button-sFE6FOPy.js";import{E as t}from"./menu-item-separator-Tcd6fTEC.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-D6G4_PXp.js";import"./button-DLe-DxkP.js";import"./progress-spinner-BeyfpBTx.js";import"./ebay-icon-spinner-30-DOBtZz7N.js";import"./ebay-icon-chevron-down-12-DL2sidxq.js";import"./icon-button-BOmHALg9.js";import"./badge-wj4d5dv0.js";import"./index-DhKlWmW_.js";import"./index-BzamGs-v.js";import"./floating-ui-pQ1Xryzh.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-CX8kTK6s.js";import"./index-D4gsu9Bi.js";import"./ebay-icon-overflow-vertical-16-DFJNQ7pG.js";import"./ebay-icon-tick-16-BPuWTdQy.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,le={title:"buttons/ebay-menu-button",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import {
    EbayMenuButton,
    EbayMenuButtonItem as Item,
    EbayMenuButtonSeparator as Separator,
    EbayMenuButtonLabel as Label
} from "@ebay/ui-core-react/ebay-menu-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/icon";
import "@ebay/skin/menu";
import "@ebay/skin/menu-button";

// For variant=overflow
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";

/* For variant=overflow */
@import "@ebay/skin/icon-button.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayMenuButton text="Menu">
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Separator />
    <Item>Item 3</Item>
</EbayMenuButton>
\`\`\``}}},argTypes:{text:{description:"button label text",control:"text"},a11yText:{description:"a11y text for the button",control:"text"},noToggleIcon:{description:"whether to hide the chevron toggle icon",control:"boolean"},expanded:{description:"whether content is expanded",control:"boolean"},type:{description:"can be `radio` or `checkbox`",options:["radio","checkbox"],control:{type:"select"}},reverse:{description:"expand menu flyout to the left",control:"boolean"},fixWidth:{description:"Constrain items container width to button width",control:"boolean"},borderless:{description:"Whether button has borders",control:"boolean"},size:{description:"button size: `small` or `large`",options:["small","large"],control:{type:"select"}},priority:{description:"button size: `primary`, `secondary` (default), `tertiary`, `none`",options:["primary","secondary","tertiary","none"],control:{type:"select"}},checked:{description:"will set the corresponding index item to checked state and use the `aria-checked` attribute in markup",control:"number"},disabled:{description:"will disable the entire dropdown (disables the ebay-button label) if set to true",control:"boolean"},variant:{description:"will change the button style: `overflow`, `form` or `button`",options:["overflow","form","button"],control:{type:"select"}},collapseOnSelect:{description:"Will collapse whole menu when an item is selected in menu. Typically used in type=`radio`",control:"boolean"},prefixId:{description:"The id of an external element to use as the prefix label for the menu button. Cannot be used with `prefix-label`",control:"text"},prefixLabel:{description:"The label to add before each selected item on the button. Cannot be used with `prefix-id` (NOT YET IMPLEMENTED)",control:"text"},onExpand:{description:"Called when content is expanded",action:"onExpand",table:{category:"Events"}},onCollapse:{description:"Called when content is collapsed",action:"onCollapse",table:{category:"Events"}},onSelect:{description:"props: (e: event, { index: number }), triggered on item clicked (not for type `radio`/`checkbox`)",action:"onSelect",table:{category:"Events"}},onChange:{description:"props: (e: event, { index: number, checked: number[], checkedValues: string[] }), triggered on item `checked` change, (for type `radio`/`checkbox` only)",action:"onChange",table:{category:"Events"}},strategy:{description:"Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",options:["fixed","absolute","fixed"],control:{type:"select"}},value:{description:"for type `radio`, `checkbox`: the value to use with callbacks for `checkedValues[]`",options:["radio","checkbox","checkedValues[]"],control:{type:"select"}},badgeNumber:{description:"used as the number to be placed in the badge",control:"number"},badgeAriaLabel:{description:"used as the number to be placed in the badge (NOT YET IMPLEMENTED)",control:"number"},onClick:{description:"For a non-link menu item, with param `{ originalEvent }`",action:"onClick",table:{category:"Events"}},icon:{description:"Icon element to display alongside button text",control:{type:"object"}}}},E=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"eBay Menu",onKeyDown:o("key down"),onClick:o("click button"),onSelect:r((m,{index:i,checked:l})=>o("select")(m,{index:i,checked:l}),"onSelect"),onExpand:o("expand"),onCollapse:o("collapse")},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"Default"),h=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,expanded:!0,text:"eBay Menu"},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"Expanded"),b=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"eBay Menu",disabled:!0},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"Disabled"),y={render:r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"Settings",icon:e.createElement(N,null)},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"render"),name:"With icon"},I={render:r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,noToggleIcon:!0,text:"Menu"},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"render"),name:"Without toggle icon"},x=r(n=>e.createElement(e.Fragment,null,e.createElement("h3",null,"Button"),e.createElement(a,{...n,variant:"button",text:"Button",a11yText:"Menu inside the form"},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3")),e.createElement("h3",null,"Form"),e.createElement(a,{...n,variant:"form",text:"Form",a11yText:"Menu inside the form"},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3")),e.createElement("h3",null,"Overflow"),e.createElement(a,{...n,variant:"overflow",a11yText:"Menu"},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"Variants"),g=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,priority:"primary",text:"Primary","a11y-text":"Menu"},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3")),e.createElement(a,{...n,priority:"tertiary",text:"Tertiary","a11y-text":"Menu"},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"Priorities"),M=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"eBay Menu without borders!",borderless:!0},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"Borderless"),S=r(n=>e.createElement(e.Fragment,null,e.createElement("h2",null,"Custom style label"),e.createElement(a,{...n},e.createElement(W,null,e.createElement("span",{style:{background:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='15' viewBox='0 0 5 3'%3E%3Cpath d='M0 0h5v3H0z'/%3E%3Cpath fill='%23D00' d='M0 1h5v2H0z'/%3E%3Cpath fill='%23FFCE00' d='M0 2h5v1H0z'/%3E%3C/svg%3E") no-repeat 50% 50%`,display:"inline-block",height:"20px",marginRight:"8px",verticalAlign:"middle",width:"26px"}}),"Fun with flags!"),e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3")),e.createElement("br",null),e.createElement("br",null),e.createElement("h2",{id:"external-label"},"External label"),e.createElement(a,{...n,prefixId:"external-label"},e.createElement(W,null,"Using external label for a11y"),e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3")),e.createElement("br",null),e.createElement("br",null),e.createElement("h2",null,"Prefix Label"),e.createElement(a,{...n,prefixLabel:"Prefix:"},e.createElement(W,null,"Label"),e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3")),e.createElement("br",null),e.createElement("br",null),e.createElement("h2",null,"No Label"),e.createElement(a,{...n,split:"end"},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"WithCustomLabel"),k=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"Complex menu",onExpand:o("Menu expanded!"),onCollapse:o("Menu collapsed!")},e.createElement(t,null,"item 1"),e.createElement(t,null,"item 2"),e.createElement(P,null),e.createElement(t,null,"item 3"),e.createElement(t,null,"item 4"),e.createElement(t,null,"item 5"),e.createElement(P,null),e.createElement(t,{onClick:o("Open login popup!")},"Log in"))),"WithSeparator"),f={render:r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"Sort order",type:"radio"},e.createElement(t,null,"Date"),e.createElement(t,{checked:!0},"Price"),e.createElement(t,null,"Relevance"))),"render"),name:"Single-Select Menu Button (item.checked)"},B={render:r(n=>{const i=["Date","Price","Relevance"],[l,d]=D.useState(1);return e.createElement(a,{...n,prefixLabel:"Sort order:",text:i[l],type:"radio",collapseOnSelect:!0,checked:1,onChange:r((p,{index:s})=>d(s),"onChange")},i.map((p,s)=>e.createElement(t,{key:s},p)))},"render"),name:"Single-Select Menu Button (collapse on click)"},v={render:r(n=>{const l=["Date","Price","Relevance"],d=["Cars","Phones","Computers"],[p,s]=D.useState(2),[O,R]=D.useState(1);return e.createElement(e.Fragment,null,e.createElement(a,{...n,prefixLabel:"Topic:",text:d[O],type:"radio",checked:1,onChange:r((u,{index:c})=>R(c),"onChange")},d.map((u,c)=>e.createElement(t,{key:c},u)))," ",e.createElement(a,{prefixLabel:"Sort order:",text:l[p],type:"radio",checked:2,onChange:r((u,{index:c})=>s(c),"onChange")},l.map((u,c)=>e.createElement(t,{key:c},u))))},"render"),name:"Single-Select Menu Button (menu.checked)"},C={render:r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"Filter",type:"checkbox"},e.createElement(t,{checked:!0},"Snickers"),e.createElement(t,null,"T-Shirts"),e.createElement(t,{checked:!0},"Pants"))),"render"),name:"Multi-Select Menu Button"},w=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"Menu has a button width",fixWidth:!0},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"FixedWidth"),T={render:r(n=>e.createElement("div",{style:{marginLeft:"100px"}},e.createElement(a,{...n,text:"Menu grows to the left",reverse:!0},e.createElement(t,null,"item 1 that has very very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"))),"render"),name:"Reverse (Menu grows to the left)"},L=r(n=>e.createElement(a,{...n,strategy:"fixed",text:"Menu has a button width"},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3")),"WithFixedStrategy"),F=r(n=>e.createElement(e.Fragment,null,e.createElement(a,{...n,text:"eBay Menu",onKeyDown:o("key down"),onClick:o("click button"),onSelect:r((m,{index:i,checked:l})=>o("select")(m,{index:i,checked:l}),"onSelect"),onExpand:o("expand"),onCollapse:o("collapse"),collapseOnSelect:!1,type:"radio"},e.createElement(t,null,"item 1 that has very long text"),e.createElement(t,null,"item 2"),e.createElement(t,null,"item 3"),e.createElement(t,{disabled:!0},"item 4"))),"WithDisabledItem");E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="eBay Menu" onKeyDown={action("key down")} onClick={action("click button")} onSelect={(e, {
    index,
    checked
  }) => action("select")(e, {
    index,
    checked
  })} onExpand={action("expand")} onCollapse={action("collapse")}>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...E.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} expanded text="eBay Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="eBay Menu" disabled>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Settings" icon={<EbayIconSettings16 />}>
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>,
  name: "With icon"
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} noToggleIcon text="Menu">
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>,
  name: "Without toggle icon"
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
        <h3>Button</h3>
        <EbayMenuButton {...args} variant="button" text="Button" a11yText="Menu inside the form">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <h3>Form</h3>
        <EbayMenuButton {...args} variant="form" text="Form" a11yText="Menu inside the form">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <h3>Overflow</h3>
        <EbayMenuButton {...args} variant="overflow" a11yText="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} priority="primary" text="Primary" a11y-text="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
        <EbayMenuButton {...args} priority="tertiary" text="Tertiary" a11y-text="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...g.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="eBay Menu without borders!" borderless>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <>
        <h2>Custom style label</h2>
        <EbayMenuButton {...args}>
            <EbayMenuButtonLabel>
                <span style={{
        background: "url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='15' viewBox='0 0 5 3'%3E%3Cpath d='M0 0h5v3H0z'/%3E%3Cpath fill='%23D00' d='M0 1h5v2H0z'/%3E%3Cpath fill='%23FFCE00' d='M0 2h5v1H0z'/%3E%3C/svg%3E\\") no-repeat 50% 50%",
        display: "inline-block",
        height: "20px",
        marginRight: "8px",
        verticalAlign: "middle",
        width: "26px"
      }} />
                Fun with flags!
            </EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2 id="external-label">External label</h2>
        <EbayMenuButton {...args} prefixId="external-label">
            <EbayMenuButtonLabel>Using external label for a11y</EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2>Prefix Label</h2>
        <EbayMenuButton {...args} prefixLabel="Prefix:">
            <EbayMenuButtonLabel>Label</EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2>No Label</h2>
        <EbayMenuButton {...args} split="end">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="Complex menu" onExpand={action("Menu expanded!")} onCollapse={action("Menu collapsed!")}>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Separator />
            <Item>item 3</Item>
            <Item>item 4</Item>
            <Item>item 5</Item>
            <Separator />
            <Item onClick={action("Open login popup!")}>Log in</Item>
        </EbayMenuButton>
    </>`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Sort order" type="radio">
                <Item>Date</Item>
                <Item checked>Price</Item>
                <Item>Relevance</Item>
            </EbayMenuButton>
        </>,
  name: "Single-Select Menu Button (item.checked)"
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const defaultSortIndex = 1;
    const sortItems = ["Date", "Price", "Relevance"];
    const [checkedSort, setCheckedSort] = useState(defaultSortIndex);
    return <EbayMenuButton {...args} prefixLabel="Sort order:" text={sortItems[checkedSort]} type="radio" collapseOnSelect checked={defaultSortIndex} onChange={(e, {
      index
    }) => setCheckedSort(index)}>
                {sortItems.map((item, i) => <Item key={i}>{item}</Item>)}
            </EbayMenuButton>;
  },
  name: "Single-Select Menu Button (collapse on click)"
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const defaultSortIndex = 2;
    const defaultTopicIndex = 1;
    const sortItems = ["Date", "Price", "Relevance"];
    const topicItems = ["Cars", "Phones", "Computers"];
    const [checkedSort, setCheckedSort] = useState(defaultSortIndex);
    const [checkedTopic, setCheckedTopic] = useState(defaultTopicIndex);
    return <>
                <EbayMenuButton {...args} prefixLabel="Topic:" text={topicItems[checkedTopic]} type="radio" checked={defaultTopicIndex} onChange={(e, {
        index
      }) => setCheckedTopic(index)}>
                    {topicItems.map((item, i) => <Item key={i}>{item}</Item>)}
                </EbayMenuButton>
                &nbsp;
                <EbayMenuButton prefixLabel="Sort order:" text={sortItems[checkedSort]} type="radio" checked={defaultSortIndex} onChange={(e, {
        index
      }) => setCheckedSort(index)}>
                    {sortItems.map((item, i) => <Item key={i}>{item}</Item>)}
                </EbayMenuButton>
            </>;
  },
  name: "Single-Select Menu Button (menu.checked)"
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Filter" type="checkbox">
                <Item checked>Snickers</Item>
                <Item>T-Shirts</Item>
                <Item checked>Pants</Item>
            </EbayMenuButton>
        </>,
  name: "Multi-Select Menu Button"
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="Menu has a button width" fixWidth>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    marginLeft: "100px"
  }}>
            <EbayMenuButton {...args} text="Menu grows to the left" reverse>
                <Item>item 1 that has very very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </div>,
  name: "Reverse (Menu grows to the left)"
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <EbayMenuButton {...args} strategy="fixed" text="Menu has a button width">
        <Item>item 1 that has very long text</Item>
        <Item>item 2</Item>
        <Item>item 3</Item>
    </EbayMenuButton>`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="eBay Menu" onKeyDown={action("key down")} onClick={action("click button")} onSelect={(e, {
    index,
    checked
  }) => action("select")(e, {
    index,
    checked
  })} onExpand={action("expand")} onCollapse={action("collapse")} collapseOnSelect={false} type="radio">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
            <Item disabled>item 4</Item>
        </EbayMenuButton>
    </>`,...F.parameters?.docs?.source}}};const me=["Default","Expanded","Disabled","WithIcon","WithoutToggleIcon","Variants","Priorities","Borderless","WithCustomLabel","WithSeparator","SingleSelectMenuButtonItemChecked","SingleSelectMenuButtonCollapseOnClick","SingleSelectMenuButtonMenuChecked","MultiSelectMenuButton","FixedWidth","ReverseMenuGrowsToTheLeft","WithFixedStrategy","WithDisabledItem"];export{M as Borderless,E as Default,b as Disabled,h as Expanded,w as FixedWidth,C as MultiSelectMenuButton,g as Priorities,T as ReverseMenuGrowsToTheLeft,B as SingleSelectMenuButtonCollapseOnClick,f as SingleSelectMenuButtonItemChecked,v as SingleSelectMenuButtonMenuChecked,x as Variants,S as WithCustomLabel,F as WithDisabledItem,L as WithFixedStrategy,y as WithIcon,k as WithSeparator,I as WithoutToggleIcon,me as __namedExportsOrder,le as default};
