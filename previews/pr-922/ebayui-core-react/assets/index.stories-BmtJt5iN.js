import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{n as i,t as a}from"./ebay-icon-settings-16-CVHTLz0R.js";import{i as o,l as s,n as c,o as l,t as u}from"./ebay-menu-button-BfXXHc3N.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{d=e(n()),i(),u(),f=r(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`buttons/ebay-menu-button`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{text:{description:`button label text`,control:`text`},a11yText:{description:`a11y text for the button`,control:`text`},noToggleIcon:{description:`whether to hide the chevron toggle icon`,control:`boolean`},expanded:{description:`whether content is expanded`,control:`boolean`},type:{description:"can be `radio` or `checkbox`",options:[`radio`,`checkbox`],control:{type:`select`}},reverse:{description:`expand menu flyout to the left`,control:`boolean`},fixWidth:{description:`Constrain items container width to button width`,control:`boolean`},borderless:{description:`Whether button has borders`,control:`boolean`},size:{description:"button size: `small` or `large`",options:[`small`,`large`],control:{type:`select`}},priority:{description:"button size: `primary`, `secondary` (default), `tertiary`, `none`",options:[`primary`,`secondary`,`tertiary`,`none`],control:{type:`select`}},checked:{description:"will set the corresponding index item to checked state and use the `aria-checked` attribute in markup",control:`number`},disabled:{description:`will disable the entire dropdown (disables the ebay-button label) if set to true`,control:`boolean`},variant:{description:"will change the button style: `overflow`, `form` or `button`",options:[`overflow`,`form`,`button`],control:{type:`select`}},collapseOnSelect:{description:"Will collapse whole menu when an item is selected in menu. Typically used in type=`radio`",control:`boolean`},prefixId:{description:"The id of an external element to use as the prefix label for the menu button. Cannot be used with `prefix-label`",control:`text`},prefixLabel:{description:"The label to add before each selected item on the button. Cannot be used with `prefix-id` (NOT YET IMPLEMENTED)",control:`text`},onExpand:{description:`Called when content is expanded`,action:`onExpand`,table:{category:`Events`}},onCollapse:{description:`Called when content is collapsed`,action:`onCollapse`,table:{category:`Events`}},onSelect:{description:"props: (e: event, { index: number }), triggered on item clicked (not for type `radio`/`checkbox`)",action:`onSelect`,table:{category:`Events`}},onChange:{description:"props: (e: event, { index: number, checked: number[], checkedValues: string[] }), triggered on item `checked` change, (for type `radio`/`checkbox` only)",action:`onChange`,table:{category:`Events`}},strategy:{description:"Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",options:[`fixed`,`absolute`,`fixed`],control:{type:`select`}},value:{description:"for type `radio`, `checkbox`: the value to use with callbacks for `checkedValues[]`",options:[`radio`,`checkbox`,`checkedValues[]`],control:{type:`select`}},badgeNumber:{description:`used as the number to be placed in the badge`,control:`number`},badgeAriaLabel:{description:`used as the number to be placed in the badge (NOT YET IMPLEMENTED)`,control:`number`},onClick:{description:"For a non-link menu item, with param `{ originalEvent }`",action:`onClick`,table:{category:`Events`}},icon:{description:`Icon element to display alongside button text`,control:{type:`object`}}}},h=e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`eBay Menu`,onKeyDown:p(`key down`),onClick:p(`click button`),onSelect:(e,{index:t,checked:n})=>p(`select`)(e,{index:t,checked:n}),onExpand:p(`expand`),onCollapse:p(`collapse`),children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),g=e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,expanded:!0,text:`eBay Menu`,children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),_=e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`eBay Menu`,disabled:!0,children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),v={render:e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`Settings`,icon:(0,f.jsx)(a,{}),children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),name:`With icon`},y={render:e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,noToggleIcon:!0,text:`Menu`,children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),name:`Without toggle icon`},b=e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`h3`,{children:`Button`}),(0,f.jsxs)(c,{...e,variant:`button`,text:`Button`,a11yText:`Menu inside the form`,children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]}),(0,f.jsx)(`h3`,{children:`Form`}),(0,f.jsxs)(c,{...e,variant:`form`,text:`Form`,a11yText:`Menu inside the form`,children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]}),(0,f.jsx)(`h3`,{children:`Overflow`}),(0,f.jsxs)(c,{...e,variant:`overflow`,a11yText:`Menu`,children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})]}),x=e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c,{...e,priority:`primary`,text:`Primary`,"a11y-text":`Menu`,children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]}),(0,f.jsxs)(c,{...e,priority:`tertiary`,text:`Tertiary`,"a11y-text":`Menu`,children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})]}),S=e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`eBay Menu without borders!`,borderless:!0,children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),C=e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`h2`,{children:`Custom style label`}),(0,f.jsxs)(c,{...e,children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(`span`,{style:{background:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='15' viewBox='0 0 5 3'%3E%3Cpath d='M0 0h5v3H0z'/%3E%3Cpath fill='%23D00' d='M0 1h5v2H0z'/%3E%3Cpath fill='%23FFCE00' d='M0 2h5v1H0z'/%3E%3C/svg%3E") no-repeat 50% 50%`,display:`inline-block`,height:`20px`,marginRight:`8px`,verticalAlign:`middle`,width:`26px`}}),`Fun with flags!`]}),(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`h2`,{id:`external-label`,children:`External label`}),(0,f.jsxs)(c,{...e,prefixId:`external-label`,children:[(0,f.jsx)(o,{children:`Using external label for a11y`}),(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`h2`,{children:`Prefix Label`}),(0,f.jsxs)(c,{...e,prefixLabel:`Prefix:`,children:[(0,f.jsx)(o,{children:`Label`}),(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`h2`,{children:`No Label`}),(0,f.jsxs)(c,{...e,split:`end`,children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})]}),w=e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`Complex menu`,onExpand:p(`Menu expanded!`),onCollapse:p(`Menu collapsed!`),children:[(0,f.jsx)(s,{children:`item 1`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(l,{}),(0,f.jsx)(s,{children:`item 3`}),(0,f.jsx)(s,{children:`item 4`}),(0,f.jsx)(s,{children:`item 5`}),(0,f.jsx)(l,{}),(0,f.jsx)(s,{onClick:p(`Open login popup!`),children:`Log in`})]})}),T={render:e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`Sort order`,type:`radio`,children:[(0,f.jsx)(s,{children:`Date`}),(0,f.jsx)(s,{checked:!0,children:`Price`}),(0,f.jsx)(s,{children:`Relevance`})]})}),name:`Single-Select Menu Button (item.checked)`},E={render:e=>{let t=[`Date`,`Price`,`Relevance`],[n,r]=(0,d.useState)(1);return(0,f.jsx)(c,{...e,prefixLabel:`Sort order:`,text:t[n],type:`radio`,collapseOnSelect:!0,checked:1,onChange:(e,{index:t})=>r(t),children:t.map((e,t)=>(0,f.jsx)(s,{children:e},t))})},name:`Single-Select Menu Button (collapse on click)`},D={render:e=>{let t=[`Date`,`Price`,`Relevance`],n=[`Cars`,`Phones`,`Computers`],[r,i]=(0,d.useState)(2),[a,o]=(0,d.useState)(1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{...e,prefixLabel:`Topic:`,text:n[a],type:`radio`,checked:1,onChange:(e,{index:t})=>o(t),children:n.map((e,t)=>(0,f.jsx)(s,{children:e},t))}),`\xA0`,(0,f.jsx)(c,{prefixLabel:`Sort order:`,text:t[r],type:`radio`,checked:2,onChange:(e,{index:t})=>i(t),children:t.map((e,t)=>(0,f.jsx)(s,{children:e},t))})]})},name:`Single-Select Menu Button (menu.checked)`},O={render:e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`Filter`,type:`checkbox`,children:[(0,f.jsx)(s,{checked:!0,children:`Snickers`}),(0,f.jsx)(s,{children:`T-Shirts`}),(0,f.jsx)(s,{checked:!0,children:`Pants`})]})}),name:`Multi-Select Menu Button`},k=e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`Menu has a button width`,fixWidth:!0,children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),A={render:e=>(0,f.jsx)(`div`,{style:{marginLeft:`100px`},children:(0,f.jsxs)(c,{...e,text:`Menu grows to the left`,reverse:!0,children:[(0,f.jsx)(s,{children:`item 1 that has very very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]})}),name:`Reverse (Menu grows to the left)`},j=e=>(0,f.jsxs)(c,{...e,strategy:`fixed`,text:`Menu has a button width`,children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`})]}),M=e=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c,{...e,text:`eBay Menu`,onKeyDown:p(`key down`),onClick:p(`click button`),onSelect:(e,{index:t,checked:n})=>p(`select`)(e,{index:t,checked:n}),onExpand:p(`expand`),onCollapse:p(`collapse`),collapseOnSelect:!1,type:`radio`,children:[(0,f.jsx)(s,{children:`item 1 that has very long text`}),(0,f.jsx)(s,{children:`item 2`}),(0,f.jsx)(s,{children:`item 3`}),(0,f.jsx)(s,{disabled:!0,children:`item 4`})]})}),N=[`Default`,`Expanded`,`Disabled`,`WithIcon`,`WithoutToggleIcon`,`Variants`,`Priorities`,`Borderless`,`WithCustomLabel`,`WithSeparator`,`SingleSelectMenuButtonItemChecked`,`SingleSelectMenuButtonCollapseOnClick`,`SingleSelectMenuButtonMenuChecked`,`MultiSelectMenuButton`,`FixedWidth`,`ReverseMenuGrowsToTheLeft`,`WithFixedStrategy`,`WithDisabledItem`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} expanded text="eBay Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="eBay Menu" disabled>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Settings" icon={<EbayIconSettings16 />}>
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>,
  name: "With icon"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} noToggleIcon text="Menu">
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>,
  name: "Without toggle icon"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="eBay Menu without borders!" borderless>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Sort order" type="radio">
                <Item>Date</Item>
                <Item checked>Price</Item>
                <Item>Relevance</Item>
            </EbayMenuButton>
        </>,
  name: "Single-Select Menu Button (item.checked)"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Filter" type="checkbox">
                <Item checked>Snickers</Item>
                <Item>T-Shirts</Item>
                <Item checked>Pants</Item>
            </EbayMenuButton>
        </>,
  name: "Multi-Select Menu Button"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="Menu has a button width" fixWidth>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <EbayMenuButton {...args} strategy="fixed" text="Menu has a button width">
        <Item>item 1 that has very long text</Item>
        <Item>item 2</Item>
        <Item>item 3</Item>
    </EbayMenuButton>`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...M.parameters?.docs?.source}}}})))()}P();export{S as Borderless,h as Default,_ as Disabled,g as Expanded,k as FixedWidth,O as MultiSelectMenuButton,x as Priorities,A as ReverseMenuGrowsToTheLeft,E as SingleSelectMenuButtonCollapseOnClick,T as SingleSelectMenuButtonItemChecked,D as SingleSelectMenuButtonMenuChecked,b as Variants,C as WithCustomLabel,M as WithDisabledItem,j as WithFixedStrategy,v as WithIcon,w as WithSeparator,y as WithoutToggleIcon,N as __namedExportsOrder,m as default};