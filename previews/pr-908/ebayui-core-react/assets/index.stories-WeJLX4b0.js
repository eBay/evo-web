var P=Object.defineProperty;var l=(t,s)=>P(t,"name",{value:s,configurable:!0});import{R as e,r as k}from"./iframe-CVwxB9bq.js";import{E as r,a as n,b as a}from"./tabs-DmER6wbX.js";import"./preload-helper-Cc2_yIPf.js";import"./index-DhKlWmW_.js";import"./utils-HTvyuM3F.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,x={component:r,title:"navigation & disclosure/ebay-tabs",tags:["autodocs"],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbayTabs, EbayTab, EbayTabPanel } from "@ebay/ui-core-react/ebay-tabs";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/tabs";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/tabs.css";\n```'}}},argTypes:{selectedIndex:{description:"0-based index of selected tab heading and panel",control:"number"},activation:{description:"whether to use automatic or manual activation when navigating by keyboard, can be `auto` (default) or `manual`",options:["auto","manual"],control:{type:"select"}},size:{description:"Whether to opt into larger font-size for tab headings, can be `medium` (default) or `large`",options:["medium","large"],control:{type:"select"}},onSelect:{description:"Called when a tab is selected",action:"onSelect",table:{category:"Events",defaultValue:{summary:"(Event)"}}}}},m=l(t=>e.createElement(e.Fragment,null,e.createElement(r,{onSelect:y("onSelect(props"),...t},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2"),e.createElement(n,null,"Tab 3"),e.createElement(a,null,e.createElement("h3",null,"Panel 1"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 2"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 3"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)")))),"DefaultTabs"),c={render:l(t=>e.createElement(e.Fragment,null,e.createElement(r,{...t,selectedIndex:2},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2"),e.createElement(n,null,"Tab 3"),e.createElement(a,null,e.createElement("h3",null,"Panel 1"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 2"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 3"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)")))),"render"),name:"Pre-selected Tab"},b={render:l(t=>{const s=l(()=>{const[i,g]=k.useState(0);return e.createElement(e.Fragment,null,[0,1,2].map(o=>e.createElement("button",{key:o,onClick:l(()=>g(o),"onClick")},"Select Tab ",o+1)),e.createElement(r,{...t,selectedIndex:i},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2"),e.createElement(n,null,"Tab 3"),e.createElement(a,null,e.createElement("h3",null,"Panel 1")),e.createElement(a,null,e.createElement("h3",null,"Panel 2")),e.createElement(a,null,e.createElement("h3",null,"Panel 3"))))},"Component");return e.createElement(e.Fragment,null,e.createElement(s,null))},"render"),name:"Programmatically selected Tabs"},u=l(t=>e.createElement(e.Fragment,null,e.createElement(r,{activation:"manual",...t},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2"),e.createElement(n,null,"Tab 3"),e.createElement(a,null,e.createElement("h3",null,"Panel 1"),e.createElement("p",null,"These tabs are activated manually on Space/Enter key press"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 2"),e.createElement("p",null,"These tabs are activated manually on Space/Enter key press"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)")),e.createElement(a,null,e.createElement("p",null,"These tabs are activated manually on Space/Enter key press"),e.createElement("h3",null,"Panel 3"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)")))),"ManuallyActivatedTabs"),p=l(t=>e.createElement(e.Fragment,null,e.createElement(r,{...t,size:"large"},e.createElement(n,null,"Large Tab 1"),e.createElement(n,null,"Large Tab 2"),e.createElement(n,null,"Large Tab 3"),e.createElement(a,null,e.createElement("h3",null,"Panel 1"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 2"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 3"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)")))),"LargeTabs"),T=l(t=>e.createElement(e.Fragment,null,e.createElement(r,{onSelect:y("onSelect(props"),...t},e.createElement(n,null,"Tab 1"),e.createElement(n,{disabled:!0},"Tab 2"),e.createElement(n,null,"Tab 3"),e.createElement(a,null,e.createElement("h3",null,"Panel 1"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 1` (skipping `Tab 2` and `Tab 3`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 2"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 2` (skipping `Tab 3` and `Tab 1`)")),e.createElement(a,null,e.createElement("h3",null,"Panel 3"),e.createElement("p",null,"Focus should go to ",e.createElement("a",{href:"#link"},"this link")," using `tab`-key immediately after the `Tab 3` (skipping `Tab 1` and `Tab 2`)")))),"Disabled"),h=l(t=>e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(r,{...t,id:"tab-upper"},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2"),e.createElement(a,null,e.createElement("h3",null,"Panel 1"),e.createElement("p",null,"Panel 1 content. Here is a ",e.createElement("a",{href:"#link"},"link"),".")),e.createElement(a,null,e.createElement("h3",null,"Panel 2"),e.createElement("p",null,"Panel 2 content. Here is a ",e.createElement("a",{href:"#link"},"link"),".")))),e.createElement("div",{style:{marginTop:"64px"}},e.createElement(r,{...t,id:"tab-lower"},e.createElement(n,null,"Tab A"),e.createElement(n,null,"Tab B"),e.createElement(n,null,"Tab C"),e.createElement(a,null,e.createElement("h3",null,"Panel A"),e.createElement("p",null,"Panel A content. Here is a ",e.createElement("a",{href:"#link"},"link"),".")),e.createElement(a,null,e.createElement("h3",null,"Panel B"),e.createElement("p",null,"Panel B content. Here is a ",e.createElement("a",{href:"#link"},"link"),".")),e.createElement(a,null,e.createElement("h3",null,"Panel C"),e.createElement("p",null,"Panel C content. Here is a ",e.createElement("a",{href:"#link"},"link"),"."))))),"MultipleTabs"),d={render:l(t=>{const s=l(()=>{const[i,g]=k.useState("John Doe");return e.createElement(r,{...t},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2"),e.createElement(n,null,"Tab 3"),e.createElement(a,null,e.createElement("label",{htmlFor:"name"},"Name "),e.createElement("input",{id:"name",onChange:l(o=>g(o.target.value),"onChange"),type:"text",placeholder:"john doe",value:i}),e.createElement("p",null,"My name is ",i)),e.createElement(a,null,e.createElement("h3",null,"Panel 2")),e.createElement(a,null,e.createElement("h3",null,"Panel 3")))},"Component");return e.createElement(e.Fragment,null,e.createElement(s,null))},"render"),name:"Tabs with inputs"},E={render:l(t=>e.createElement(e.Fragment,null,e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement("p",{style:{margin:"10em 0"}},"Scroll down for more content..."),e.createElement(r,{...t},e.createElement(n,null,"Tab 1"),e.createElement(n,null,"Tab 2"),e.createElement(a,null,e.createElement("h3",null,"Panel 1"),e.createElement("p",null,"Panel 1 content.")),e.createElement(a,null,e.createElement("h3",null,"Panel 2"),e.createElement("p",null,"Panel 2 content.")))),"render"),name:"Bottom Tabs on Long Page"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const L=["DefaultTabs","PreSelectedTab","ProgrammaticallySelectedTabs","ManuallyActivatedTabs","LargeTabs","Disabled","MultipleTabs","TabsWithInputs","BottomTabsOnLongPage"];export{E as BottomTabsOnLongPage,m as DefaultTabs,T as Disabled,p as LargeTabs,u as ManuallyActivatedTabs,h as MultipleTabs,c as PreSelectedTab,b as ProgrammaticallySelectedTabs,d as TabsWithInputs,L as __namedExportsOrder,x as default};
