import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{r as i,t as a}from"./utils-i55QFFMK.js";import{t as o}from"./component-utils-CjDOSXvC.js";import{n as s}from"./iframe-RezWaW69.js";var c,l,u;function d(){return(d=t((()=>{c=e(n()),l=e(r()),u=({children:e,href:t,ariaCurrent:n,className:r,...i})=>c.createElement(`li`,{...i,className:(0,l.default)(r,`fake-tabs__item`)},c.createElement(`a`,{href:t,"aria-current":n},e));try{u.displayName=`tab`,u.__docgenInfo={description:``,displayName:`tab`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-fake-tabs/tab.tsx`,methods:[],props:{href:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-fake-tabs/tab.tsx`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`string | undefined`}},ariaCurrent:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-fake-tabs/tab.tsx`,name:`TypeLiteral`}],description:``,name:`ariaCurrent`,required:!1,tags:{},type:{name:`"true" | "page" | undefined`}}},tags:{}}}catch{}})))()}var f,p,m;function h(){return(h=t((()=>{f=e(n()),p=e(r()),o(),d(),m=({selectedIndex:e=0,tabMatchesCurrentUrl:t,size:n,className:r,children:o,...s})=>{let c=t===!1?`true`:`page`,l=i(o,u).map((t,n)=>(0,f.cloneElement)(t,{...t.props,ariaCurrent:e===n?c:null})),d=a(o,u),m=n===`large`;return f.createElement(`div`,{...s,className:(0,p.default)(r,`fake-tabs`,{"fake-tabs--large":m})},f.createElement(`ul`,{className:`fake-tabs__items`},l),f.createElement(`div`,{className:`fake-tabs__content`},f.createElement(`div`,{className:`fake-tabs__cell`},d)))};try{m.displayName=`faketabs`,m.__docgenInfo={description:``,displayName:`faketabs`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx`,methods:[],props:{selectedIndex:{defaultValue:{value:`0`},declarations:[{fileName:`ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx`,name:`TypeLiteral`}],description:``,name:`selectedIndex`,required:!1,tags:{},type:{name:`number | undefined`}},size:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`Size | undefined`}},tabMatchesCurrentUrl:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-fake-tabs/fake-tabs.tsx`,name:`TypeLiteral`}],description:``,name:`tabMatchesCurrentUrl`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}function g(){return(g=t((()=>{h(),d()})))()}var _,v,y,b,x,S,C;function w(){return(w=t((()=>{n(),g(),_=s(),v={title:`navigation & disclosure/ebay-fake-tabs`,tags:[`autodocs`],parameters:{docs:{description:{component:'## Import\n\n```jsx harmony\nimport { EbayFakeTabs, EbayFakeTab } from "@ebay/ui-core-react/ebay-fake-tabs";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/tabs";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/tabs.css";\n```'}}},argTypes:{selectedIndex:{description:`0-based index of selected tab heading`,control:`number`},size:{description:`Sets the size of the tabs. Can be either regular (Default) or large`,control:`text`},tabMatchesCurrentUrl:{description:`Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").`,control:`boolean`},href:{description:`The link to take the user to for each tab`,control:`text`}}},y=e=>(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(m,{...e,children:[(0,_.jsx)(u,{href:`http://ebay.com`,children:`eBay.com`}),(0,_.jsx)(u,{href:`http://ebay.de`,children:`eBay.de`}),(0,_.jsx)(u,{href:`http://ebay.co.uk`,children:`eBay.co.uk`}),(0,_.jsx)(`h3`,{children:`eBay.com Content`}),(0,_.jsx)(`p`,{children:`Some US content...`})]})}),b={render:e=>(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(m,{...e,selectedIndex:1,children:[(0,_.jsx)(u,{href:`http://ebay.com`,children:`eBay.com`}),(0,_.jsx)(u,{href:`http://ebay.de`,children:`eBay.de`}),(0,_.jsx)(u,{href:`http://ebay.co.uk`,children:`eBay.co.uk`}),(0,_.jsx)(`h3`,{children:`eBay.de Content`}),(0,_.jsx)(`p`,{children:`Some German content...`})]})}),name:`Pre-selected Tab`},x=e=>(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(m,{...e,children:[(0,_.jsx)(u,{href:`http://ebay.com`,children:`eBay.com`}),(0,_.jsx)(u,{children:`eBay.de`}),(0,_.jsx)(u,{href:`http://ebay.co.uk`,children:`eBay.co.uk`}),(0,_.jsx)(`h3`,{children:`eBay.com Content`}),(0,_.jsx)(`p`,{children:`Some US content...`})]})}),S={render:e=>(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(m,{...e,tabMatchesCurrentUrl:!1,selectedIndex:2,children:[(0,_.jsx)(u,{href:`http://ebay.com`,children:`eBay.com`}),(0,_.jsx)(u,{href:`http://ebay.de`,children:`eBay.de`}),(0,_.jsx)(u,{href:`http://ebay.co.uk`,children:`eBay.co.uk`}),(0,_.jsx)(`h3`,{children:`eBay.co.uk Content`}),(0,_.jsx)(`p`,{children:`Some British content...`})]})}),name:`tabMatchesCurrentUrl: false`},C=[`DefaultTabs`,`PreSelectedTab`,`Disabled`,`TabMatchesCurrentUrlFalse`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeTabs {...args}>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab href="http://ebay.de">eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.com Content</h3>
            <p>Some US content...</p>
        </EbayFakeTabs>
    </>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeTabs {...args}>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab>eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.com Content</h3>
            <p>Some US content...</p>
        </EbayFakeTabs>
    </>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{y as DefaultTabs,x as Disabled,b as PreSelectedTab,S as TabMatchesCurrentUrlFalse,C as __namedExportsOrder,v as default};