import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{i,n as a,o,t as s}from"./ebay-tabs-C_gjSv2P.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{c=e(n()),s(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={component:a,title:`navigation & disclosure/ebay-tabs`,tags:[`autodocs`],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbayTabs, EbayTab, EbayTabPanel } from "@ebay/ui-core-react/ebay-tabs";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/tabs";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/tabs.css";\n```'}}},argTypes:{selectedIndex:{description:`0-based index of selected tab heading and panel`,control:`number`},activation:{description:"whether to use automatic or manual activation when navigating by keyboard, can be `auto` (default) or `manual`",options:[`auto`,`manual`],control:{type:`select`}},size:{description:"Whether to opt into larger font-size for tab headings, can be `medium` (default) or `large`",options:[`medium`,`large`],control:{type:`select`}},onSelect:{description:`Called when a tab is selected`,action:`onSelect`,table:{category:`Events`,defaultValue:{summary:`(Event)`}}}}},f=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a,{onSelect:u(`onSelect(props`),...e,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{children:`Tab 2`}),(0,l.jsx)(o,{children:`Tab 3`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 1`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 2`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 3`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)"]})]})]})}),p={render:e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a,{...e,selectedIndex:2,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{children:`Tab 2`}),(0,l.jsx)(o,{children:`Tab 3`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 1`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 2`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 3`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)"]})]})]})}),name:`Pre-selected Tab`},m={render:e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(()=>{let[t,n]=(0,c.useState)(0);return(0,l.jsxs)(l.Fragment,{children:[[0,1,2].map(e=>(0,l.jsxs)(`button`,{onClick:()=>n(e),children:[`Select Tab `,e+1]},e)),(0,l.jsxs)(a,{...e,selectedIndex:t,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{children:`Tab 2`}),(0,l.jsx)(o,{children:`Tab 3`}),(0,l.jsx)(i,{children:(0,l.jsx)(`h3`,{children:`Panel 1`})}),(0,l.jsx)(i,{children:(0,l.jsx)(`h3`,{children:`Panel 2`})}),(0,l.jsx)(i,{children:(0,l.jsx)(`h3`,{children:`Panel 3`})})]})]})},{})}),name:`Programmatically selected Tabs`},h=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a,{activation:`manual`,...e,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{children:`Tab 2`}),(0,l.jsx)(o,{children:`Tab 3`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 1`}),(0,l.jsx)(`p`,{children:`These tabs are activated manually on Space/Enter key press`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 2`}),(0,l.jsx)(`p`,{children:`These tabs are activated manually on Space/Enter key press`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`p`,{children:`These tabs are activated manually on Space/Enter key press`}),(0,l.jsx)(`h3`,{children:`Panel 3`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)"]})]})]})}),g=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a,{...e,size:`large`,children:[(0,l.jsx)(o,{children:`Large Tab 1`}),(0,l.jsx)(o,{children:`Large Tab 2`}),(0,l.jsx)(o,{children:`Large Tab 3`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 1`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 2`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 3`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)"]})]})]})}),_=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a,{onSelect:u(`onSelect(props`),...e,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{disabled:!0,children:`Tab 2`}),(0,l.jsx)(o,{children:`Tab 3`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 1`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 2`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)"]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 3`}),(0,l.jsxs)(`p`,{children:[`Focus should go to `,(0,l.jsx)(`a`,{href:`#link`,children:`this link`})," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)"]})]})]})}),v=e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`div`,{children:(0,l.jsxs)(a,{...e,id:`tab-upper`,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{children:`Tab 2`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 1`}),(0,l.jsxs)(`p`,{children:[`Panel 1 content. Here is a `,(0,l.jsx)(`a`,{href:`#link`,children:`link`}),`.`]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 2`}),(0,l.jsxs)(`p`,{children:[`Panel 2 content. Here is a `,(0,l.jsx)(`a`,{href:`#link`,children:`link`}),`.`]})]})]})}),(0,l.jsx)(`div`,{style:{marginTop:`64px`},children:(0,l.jsxs)(a,{...e,id:`tab-lower`,children:[(0,l.jsx)(o,{children:`Tab A`}),(0,l.jsx)(o,{children:`Tab B`}),(0,l.jsx)(o,{children:`Tab C`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel A`}),(0,l.jsxs)(`p`,{children:[`Panel A content. Here is a `,(0,l.jsx)(`a`,{href:`#link`,children:`link`}),`.`]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel B`}),(0,l.jsxs)(`p`,{children:[`Panel B content. Here is a `,(0,l.jsx)(`a`,{href:`#link`,children:`link`}),`.`]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel C`}),(0,l.jsxs)(`p`,{children:[`Panel C content. Here is a `,(0,l.jsx)(`a`,{href:`#link`,children:`link`}),`.`]})]})]})})]}),y={render:e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(()=>{let[t,n]=(0,c.useState)(`John Doe`);return(0,l.jsxs)(a,{...e,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{children:`Tab 2`}),(0,l.jsx)(o,{children:`Tab 3`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`label`,{htmlFor:`name`,children:`Name `}),(0,l.jsx)(`input`,{id:`name`,onChange:e=>n(e.target.value),type:`text`,placeholder:`john doe`,value:t}),(0,l.jsxs)(`p`,{children:[`My name is `,t]})]}),(0,l.jsx)(i,{children:(0,l.jsx)(`h3`,{children:`Panel 2`})}),(0,l.jsx)(i,{children:(0,l.jsx)(`h3`,{children:`Panel 3`})})]})},{})}),name:`Tabs with inputs`},b={render:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsx)(`p`,{style:{margin:`10em 0`},children:`Scroll down for more content...`}),(0,l.jsxs)(a,{...e,children:[(0,l.jsx)(o,{children:`Tab 1`}),(0,l.jsx)(o,{children:`Tab 2`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 1`}),(0,l.jsx)(`p`,{children:`Panel 1 content.`})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`h3`,{children:`Panel 2`}),(0,l.jsx)(`p`,{children:`Panel 2 content.`})]})]})]}),name:`Bottom Tabs on Long Page`},x=[`DefaultTabs`,`PreSelectedTab`,`ProgrammaticallySelectedTabs`,`ManuallyActivatedTabs`,`LargeTabs`,`Disabled`,`MultipleTabs`,`TabsWithInputs`,`BottomTabsOnLongPage`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <EbayTabs onSelect={action("onSelect(props")} {...args}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 1\`
                    (skipping \`Tab 2\` and \`Tab 3\`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 2\`
                    (skipping \`Tab 3\` and \`Tab 1\`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 3</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 3\`
                    (skipping \`Tab 1\` and \`Tab 2\`)
                </p>
            </Panel>
        </EbayTabs>
    </>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayTabs {...args} selectedIndex={2}>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
                <Panel>
                    <h3>Panel 1</h3>
                    <p>
                        Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 1\`
                        (skipping \`Tab 2\` and \`Tab 3\`)
                    </p>
                </Panel>
                <Panel>
                    <h3>Panel 2</h3>
                    <p>
                        Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 2\`
                        (skipping \`Tab 3\` and \`Tab 1\`)
                    </p>
                </Panel>
                <Panel>
                    <h3>Panel 3</h3>
                    <p>
                        Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 3\`
                        (skipping \`Tab 1\` and \`Tab 2\`)
                    </p>
                </Panel>
            </EbayTabs>
        </>,
  name: "Pre-selected Tab"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Component = () => {
      const [selectedTab, selectTab] = useState(0);
      return <>
                    {[0, 1, 2].map(i => <button key={i} onClick={() => selectTab(i)}>
                            Select Tab {i + 1}
                        </button>)}
                    <EbayTabs {...args} selectedIndex={selectedTab}>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                        <Panel>
                            <h3>Panel 1</h3>
                        </Panel>
                        <Panel>
                            <h3>Panel 2</h3>
                        </Panel>
                        <Panel>
                            <h3>Panel 3</h3>
                        </Panel>
                    </EbayTabs>
                </>;
    };
    return <>
                <Component />
            </>;
  },
  name: "Programmatically selected Tabs"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
        <EbayTabs activation="manual" {...args}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>These tabs are activated manually on Space/Enter key press</p>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 1\`
                    (skipping \`Tab 2\` and \`Tab 3\`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>These tabs are activated manually on Space/Enter key press</p>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 2\`
                    (skipping \`Tab 3\` and \`Tab 1\`)
                </p>
            </Panel>
            <Panel>
                <p>These tabs are activated manually on Space/Enter key press</p>
                <h3>Panel 3</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 3\`
                    (skipping \`Tab 1\` and \`Tab 2\`)
                </p>
            </Panel>
        </EbayTabs>
    </>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbayTabs {...args} size="large">
            <Tab>Large Tab 1</Tab>
            <Tab>Large Tab 2</Tab>
            <Tab>Large Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 1\`
                    (skipping \`Tab 2\` and \`Tab 3\`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 2\`
                    (skipping \`Tab 3\` and \`Tab 1\`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 3</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 3\`
                    (skipping \`Tab 1\` and \`Tab 2\`)
                </p>
            </Panel>
        </EbayTabs>
    </>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <>
        <EbayTabs onSelect={action("onSelect(props")} {...args}>
            <Tab>Tab 1</Tab>
            <Tab disabled>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 1\`
                    (skipping \`Tab 2\` and \`Tab 3\`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 2\`
                    (skipping \`Tab 3\` and \`Tab 1\`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 3</h3>
                <p>
                    Focus should go to <a href="#link">this link</a> using \`tab\`-key immediately after the \`Tab 3\`
                    (skipping \`Tab 1\` and \`Tab 2\`)
                </p>
            </Panel>
        </EbayTabs>
    </>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
        <div>
            <EbayTabs {...args} id="tab-upper">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Panel>
                    <h3>Panel 1</h3>
                    <p>
                        Panel 1 content. Here is a <a href="#link">link</a>.
                    </p>
                </Panel>
                <Panel>
                    <h3>Panel 2</h3>
                    <p>
                        Panel 2 content. Here is a <a href="#link">link</a>.
                    </p>
                </Panel>
            </EbayTabs>
        </div>
        <div style={{
    marginTop: "64px"
  }}>
            <EbayTabs {...args} id="tab-lower">
                <Tab>Tab A</Tab>
                <Tab>Tab B</Tab>
                <Tab>Tab C</Tab>
                <Panel>
                    <h3>Panel A</h3>
                    <p>
                        Panel A content. Here is a <a href="#link">link</a>.
                    </p>
                </Panel>
                <Panel>
                    <h3>Panel B</h3>
                    <p>
                        Panel B content. Here is a <a href="#link">link</a>.
                    </p>
                </Panel>
                <Panel>
                    <h3>Panel C</h3>
                    <p>
                        Panel C content. Here is a <a href="#link">link</a>.
                    </p>
                </Panel>
            </EbayTabs>
        </div>
    </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Component = () => {
      const [name, setName] = useState("John Doe");
      return <EbayTabs {...args}>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                    <Panel>
                        <label htmlFor="name">Name </label>
                        <input id="name" onChange={e => setName(e.target.value)} type="text" placeholder="john doe" value={name} />
                        <p>My name is {name}</p>
                    </Panel>
                    <Panel>
                        <h3>Panel 2</h3>
                    </Panel>
                    <Panel>
                        <h3>Panel 3</h3>
                    </Panel>
                </EbayTabs>;
    };
    return <>
                <Component />
            </>;
  },
  name: "Tabs with inputs"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <p style={{
      margin: "10em 0"
    }}>Scroll down for more content...</p>
            <EbayTabs {...args}>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Panel>
                    <h3>Panel 1</h3>
                    <p>Panel 1 content.</p>
                </Panel>
                <Panel>
                    <h3>Panel 2</h3>
                    <p>Panel 2 content.</p>
                </Panel>
            </EbayTabs>
        </>,
  name: "Bottom Tabs on Long Page"
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as BottomTabsOnLongPage,f as DefaultTabs,_ as Disabled,g as LargeTabs,h as ManuallyActivatedTabs,v as MultipleTabs,p as PreSelectedTab,m as ProgrammaticallySelectedTabs,y as TabsWithInputs,x as __namedExportsOrder,d as default};