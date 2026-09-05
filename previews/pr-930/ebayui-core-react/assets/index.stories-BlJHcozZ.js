var g=Object.defineProperty;var r=(t,s)=>g(t,"name",{value:s,configurable:!0});import{R as e,c as p,r as B}from"./iframe-DXKVC7Wu.js";import{a as S,e as C}from"./utils-4VXCHhuo.js";import"./preload-helper-Cc2_yIPf.js";const a=r(({children:t,href:s,ariaCurrent:i,className:u,...c})=>e.createElement("li",{...c,className:p(u,"fake-tabs__item")},e.createElement("a",{href:s,"aria-current":i},t)),"EbayFakeTab");try{a.displayName="tab",a.__docgenInfo={description:"",displayName:"tab",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-fake-tabs/tab.tsx",methods:[],props:{href:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-fake-tabs/tab.tsx",name:"TypeLiteral"}],description:"",name:"href",required:!1,tags:{},type:{name:"string"}},ariaCurrent:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-fake-tabs/tab.tsx",name:"TypeLiteral"}],description:"",name:"ariaCurrent",required:!1,tags:{},type:{name:'"true" | "page"'}}},tags:{}}}catch{}const n=r(({selectedIndex:t=0,tabMatchesCurrentUrl:s,size:i,className:u,children:c,...d})=>{const h=s===!1?"true":"page",f=S(c,a).map((y,E)=>B.cloneElement(y,{...y.props,ariaCurrent:t===E?h:null})),k=C(c,a),T=i==="large";return e.createElement("div",{...d,className:p(u,"fake-tabs",{"fake-tabs--large":T})},e.createElement("ul",{className:"fake-tabs__items"},f),e.createElement("div",{className:"fake-tabs__content"},e.createElement("div",{className:"fake-tabs__cell"},k)))},"EbayFakeTabs");try{n.displayName="faketabs",n.__docgenInfo={description:"",displayName:"faketabs",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx",methods:[],props:{selectedIndex:{defaultValue:{value:"0"},declarations:[{fileName:"ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx",name:"TypeLiteral"}],description:"",name:"selectedIndex",required:!1,tags:{},type:{name:"number"}},size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"Size"}},tabMatchesCurrentUrl:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx",name:"TypeLiteral"}],description:"",name:"tabMatchesCurrentUrl",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const U={title:"navigation & disclosure/ebay-fake-tabs",tags:["autodocs"],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbayFakeTabs, EbayFakeTab } from "@ebay/ui-core-react/ebay-fake-tabs";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/tabs";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/tabs.css";\n```'}}},argTypes:{selectedIndex:{description:"0-based index of selected tab heading",control:"number"},size:{description:"Sets the size of the tabs. Can be either regular (Default) or large",control:"text"},tabMatchesCurrentUrl:{description:'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").',control:"boolean"},href:{description:"The link to take the user to for each tab",control:"text"}}},o=r(t=>e.createElement(e.Fragment,null,e.createElement(n,{...t},e.createElement(a,{href:"http://ebay.com"},"eBay.com"),e.createElement(a,{href:"http://ebay.de"},"eBay.de"),e.createElement(a,{href:"http://ebay.co.uk"},"eBay.co.uk"),e.createElement("h3",null,"eBay.com Content"),e.createElement("p",null,"Some US content..."))),"DefaultTabs"),l={render:r(t=>e.createElement(e.Fragment,null,e.createElement(n,{...t,selectedIndex:1},e.createElement(a,{href:"http://ebay.com"},"eBay.com"),e.createElement(a,{href:"http://ebay.de"},"eBay.de"),e.createElement(a,{href:"http://ebay.co.uk"},"eBay.co.uk"),e.createElement("h3",null,"eBay.de Content"),e.createElement("p",null,"Some German content..."))),"render"),name:"Pre-selected Tab"},b=r(t=>e.createElement(e.Fragment,null,e.createElement(n,{...t},e.createElement(a,{href:"http://ebay.com"},"eBay.com"),e.createElement(a,null,"eBay.de"),e.createElement(a,{href:"http://ebay.co.uk"},"eBay.co.uk"),e.createElement("h3",null,"eBay.com Content"),e.createElement("p",null,"Some US content..."))),"Disabled"),m={render:r(t=>e.createElement(e.Fragment,null,e.createElement(n,{...t,tabMatchesCurrentUrl:!1,selectedIndex:2},e.createElement(a,{href:"http://ebay.com"},"eBay.com"),e.createElement(a,{href:"http://ebay.de"},"eBay.de"),e.createElement(a,{href:"http://ebay.co.uk"},"eBay.co.uk"),e.createElement("h3",null,"eBay.co.uk Content"),e.createElement("p",null,"Some British content..."))),"render"),name:"tabMatchesCurrentUrl: false"},I=["DefaultTabs","PreSelectedTab","Disabled","TabMatchesCurrentUrlFalse"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeTabs {...args}>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab href="http://ebay.de">eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.com Content</h3>
            <p>Some US content...</p>
        </EbayFakeTabs>
    </>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayFakeTabs {...args} selectedIndex={1}>
                <Tab href="http://ebay.com">eBay.com</Tab>
                <Tab href="http://ebay.de">eBay.de</Tab>
                <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
                <h3>eBay.de Content</h3>
                <p>Some German content...</p>
            </EbayFakeTabs>
        </>,
  name: "Pre-selected Tab"
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeTabs {...args}>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab>eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.com Content</h3>
            <p>Some US content...</p>
        </EbayFakeTabs>
    </>`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayFakeTabs {...args} tabMatchesCurrentUrl={false} selectedIndex={2}>
                <Tab href="http://ebay.com">eBay.com</Tab>
                <Tab href="http://ebay.de">eBay.de</Tab>
                <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
                <h3>eBay.co.uk Content</h3>
                <p>Some British content...</p>
            </EbayFakeTabs>
        </>,
  name: "tabMatchesCurrentUrl: false"
}`,...m.parameters?.docs?.source}}};export{o as DefaultTabs,b as Disabled,l as PreSelectedTab,m as TabMatchesCurrentUrlFalse,I as __namedExportsOrder,U as default};
