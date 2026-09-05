var u=Object.defineProperty;var i=(e,l)=>u(e,"name",{value:l,configurable:!0});import{R as r}from"./iframe-OjOZgKk-.js";import{E as n}from"./ebay-details-nrGwK879.js";import"./preload-helper-Cc2_yIPf.js";import"./ebay-icon-chevron-down-16-Cyj_u7El.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,b={component:n,title:"navigation & disclosure/ebay-details",argTypes:{alignment:{description:"The position of the details",table:{defaultValue:{summary:"regular"}},options:["regular","center"]},size:{description:"Size of the details",table:{defaultValue:{summary:"regular"}},options:["regular","small"]},open:{type:"boolean",description:"Whether details is open",table:{defaultValue:{summary:"false"}}},as:{description:"The root element.",table:{defaultValue:{summary:"div"}}},onToggle:{action:"onToggle",description:"Triggered on toggle",table:{category:"Events",defaultValue:{summary:"event, { open }"}}},text:{description:"Text for the summary",control:"text"},leading:{description:"Leading icon/element for the summary",control:{type:"text"}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayDetails } from "@ebay/ui-core-react/ebay-details";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/details";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/details.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayDetails text="details">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</EbayDetails>
\`\`\``}}}},t=i(e=>r.createElement(n,{...e,onToggle:s("onToggle"),text:"Show me the details!",size:"regular",as:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),"Default"),a=i(e=>r.createElement(n,{...e,onToggle:s("onToggle"),text:"Show me the details!",size:"regular",alignment:"center",as:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),"CenterAlignment"),o=i(e=>r.createElement(n,{...e,onToggle:s("onToggle"),text:"Show me the details!",size:"small",as:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),"SmallSize");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <EbayDetails {...args} onToggle={action("onToggle")} text="Show me the details!" size="regular" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </EbayDetails>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <EbayDetails {...args} onToggle={action("onToggle")} text="Show me the details!" size="regular" alignment="center" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </EbayDetails>`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <EbayDetails {...args} onToggle={action("onToggle")} text="Show me the details!" size="small" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </EbayDetails>`,...o.parameters?.docs?.source}}};const f=["Default","CenterAlignment","SmallSize"];export{a as CenterAlignment,t as Default,o as SmallSize,f as __namedExportsOrder,b as default};
