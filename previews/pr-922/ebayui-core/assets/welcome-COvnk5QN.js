import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-CkXiLnOg.js";import{a as r}from"./chunk-W22LQPXL-xjpAY3hq.js";import{o as i,s as a}from"./blocks-BnIb2ITy.js";function o(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Welcome`}),`
`,(0,c.jsx)(n.h1,{id:`ebayui-core`,children:`eBayUI Core`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`Collection of Marko widgets; considered to be the core building blocks for all eBay components, pages & apps.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`requirements`,children:`Requirements`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`https://nodejs.org/en/`,rel:`nofollow`,children:`Node.js`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`https://markojs.com`,rel:`nofollow`,children:`Marko`}),` (v4+)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`https://ebay.github.io/skin/`,rel:`nofollow`,children:`eBay Skin`}),` (v13+)`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`Note: eBayUI Core components utilize Marko flags and, therefore, require `,(0,c.jsx)(n.code,{children:`<lasso-page/>`}),` to be added to any page which will have core components.`]})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`Note: `,(0,c.jsx)(n.code,{children:`@ebay/skin/global`}),` and `,(0,c.jsx)(n.code,{children:`@ebay/skin/marketsans`}),` are required to be loaded by your app for all modules to load correctly.`]})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`Note: In order for spread attributes to work properly, `,(0,c.jsx)(n.code,{children:`marko@4.18.22`}),` at least is required`]})}),`
`,(0,c.jsx)(n.h3,{id:`browser-policy`,children:`Browser Policy`}),`
`,(0,c.jsxs)(n.p,{children:[`All components are developed and tested cross-browser using `,(0,c.jsx)(n.a,{href:`https://www.browserstack.com/automate/public-build/M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f`,rel:`nofollow`,children:`BrowserStack`}),`, in accordance with our official `,(0,c.jsx)(n.a,{href:`https://github.com/eBay/browserslist-config`,rel:`nofollow`,children:`eBay Browser Policy`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`accessibility-a11y`,children:`Accessibility (A11Y)`}),`
`,(0,c.jsxs)(n.p,{children:[`We take accessibility very seriously. Very seriously indeed. Therefore, all components are built in accordance to the `,(0,c.jsx)(`a`,{href:`https://ebay.gitbooks.io/mindpatterns/content/`,children:`eBay MIND Patterns`}),`. These patterns, in turn, build on from the specifications provided by the `,(0,c.jsx)(`a`,{href:`https://w3c.github.io/aria-practices/`,children:`WAI-ARIA Authoring Practices`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Components are built in a layered, progressively enhanced fashion, utilizing the following resources:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(`a`,{href:`https://github.com/ianmcburnie/bones`,children:`Bones (HTML)`}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(`a`,{href:`https://github.com/eBay/skin`,children:`eBay Skin (CSS)`}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(`a`,{href:`https://github.com/makeup-js`,children:`MakeupJS (JavaScript)`}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Each layer does its bit to enforce and enhance accessibility. We consider this level of support to be one of our chief selling points, and we hope you do too!`}),`
`,(0,c.jsx)(n.h2,{id:`releases--milestones`,children:`Releases & Milestones`}),`
`,(0,c.jsxs)(n.p,{children:[`For upcoming roadmap and release history, please refer to our `,(0,c.jsx)(n.a,{href:`https://github.com/eBay/ebayui-core/releases`,rel:`nofollow`,children:`releases`}),` and `,(0,c.jsx)(n.a,{href:`https://github.com/eBay/ebayui-core/milestones`,rel:`nofollow`,children:`milestones`}),` pages.`]}),`
`,(0,c.jsx)(n.h3,{id:`versioning`,children:`Versioning`}),`
`,(0,c.jsxs)(n.p,{children:[`The ebayui-core package follows strict `,(0,c.jsx)(n.a,{href:`http://semver.org`,rel:`nofollow`,children:`Semantic Versioning`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Given a version number MAJOR.MINOR.PATCH:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`MAJOR version is incremented when we make incompatible API changes`}),`
`,(0,c.jsx)(n.li,{children:`MINOR version is incremented when we add functionality in a backwards-compatible manner`}),`
`,(0,c.jsx)(n.li,{children:`PATCH version is incremented when we make backwards-compatible bug fixes.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`deprecations`,children:`Deprecations`}),`
`,(0,c.jsxs)(n.p,{children:[`Deprecations will be communicated via `,(0,c.jsx)(n.a,{href:`https://github.com/eBay/ebayui-core/releases`,rel:`nofollow`,children:`release notes`}),`, so please ensure that you read those carefully. In general, expect any deprecated feature to be removed in the next major version. However, in some cases we may wait a while longer.`]}),`
`,(0,c.jsx)(n.h3,{id:`issues`,children:`Issues`}),`
`,(0,c.jsxs)(n.p,{children:[`Please use our `,(0,c.jsx)(n.a,{href:`https://github.com/eBay/ebayui-core/issues`,rel:`nofollow`,children:`issues page`}),` to ask questions, report issues or submit feature requests.`]}),`
`,(0,c.jsx)(n.p,{children:`To help track your issue, our admins will assign it with one or more coloured labels:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Black: Issue Type (e.g. bug, question, test case)`}),`
`,(0,c.jsx)(n.li,{children:`White: Resolution (e.g. wont fix, invalid, duplicate)`}),`
`,(0,c.jsx)(n.li,{children:`Gray: Status (e.g. backlog, in progress, help wanted)`}),`
`,(0,c.jsx)(n.li,{children:`Red: Blocker (e.g. dependency, discussion, design)`}),`
`,(0,c.jsx)(n.li,{children:`Green: Module (e.g. button, radio, dialog)`}),`
`,(0,c.jsx)(n.li,{children:`Blue: Aspect (e.g. build, documentation, website)`}),`
`,(0,c.jsx)(n.li,{children:`Yellow: Semver Guidance (e.g. breaking change, backwards compatible)`}),`
`,(0,c.jsx)(n.li,{children:`Purple: Sprint (e.g. sprint 1, sprint 2, etc)`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`license`,children:`License`}),`
`,(0,c.jsx)(n.p,{children:`Copyright (c) 2018 eBay Inc.`}),`
`,(0,c.jsxs)(n.p,{children:[`Use of this source code is governed by a MIT-style license that can be found in the LICENSE file or at `,(0,c.jsx)(n.a,{href:`https://opensource.org/licenses/MIT`,rel:`nofollow`,children:`https://opensource.org/licenses/MIT`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),n(),a()})))()}l();export{s as default};