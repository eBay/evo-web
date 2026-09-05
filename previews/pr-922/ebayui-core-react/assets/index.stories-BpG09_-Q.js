import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{i as r,n as i,t as a}from"./ebay-button-B_FEPJ7h.js";import{n as o,t as s}from"./ebay-icon-chevron-down-12-oXJrdfNI.js";import{n as c,t as l}from"./ebay-icon-menu-20-D20EjCYn.js";import{n as u,t as d}from"./ebay-icon-settings-16-CVHTLz0R.js";import{n as f,t as p}from"./ebay-icon-delete-16-CbJ-yoB4.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{t(),a(),c(),u(),f(),o(),m=n(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={component:i,title:`buttons/ebay-button`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayButton } from "@ebay/ui-core-react/ebay-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";

// When using bodyState=loading
import "@ebay/skin/icon";
import "@ebay/skin/progress-spinner";

// When using bodyState=expand
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";

/* When using bodyState=loading */
@import "@ebay/skin/icon.css";
@import "@ebay/skin/progress-spinner.css";

/* When using bodyState=expand */
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayButton>Click me!</EbayButton>
\`\`\`

### With an Icon

\`\`\`jsx
<EbayButton aria-label="Menu button">
    <EbayIconMenu20 />
</EbayButton>
\`\`\`

### Complex button

\`\`\`jsx
<EbayButton priority="primary" fluid>
    <EbayButtonCell style={{ justifyContent: "space-between" }}>
        <span>Label</span>
        <span>Filter</span>
    </EbayButtonCell>
</EbayButton>
\`\`\``}}},argTypes:{priority:{description:"`primary`, `secondary` (default), `tertiary`, `none`",options:[`primary`,`secondary`,`tertiary`,`none`],control:{type:`select`}},variant:{description:"`standard` (default), `destructive`, `form`",options:[`standard`,`destructive`,`form`],control:{type:`select`}},size:{description:"`small` or `large`",options:[`small`,`large`],control:{type:`select`}},split:{description:`Split button visual position`,options:[`start`,`end`],control:{type:`select`}},bodyState:{description:"`loading`, `expand`",options:[`loading`,`expand`],control:{type:`select`}},href:{description:`for link that looks like a button`,control:`text`},fluid:{description:`takes the whole width of the parent element`,control:`boolean`},disabled:{control:`boolean`},partiallyDisabled:{description:"sets `aria-disabled` but not `disabled` prop",control:`boolean`},transparent:{description:"transparent background color (overrides `priority` prop)",control:`boolean`},truncate:{description:`will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows`,control:`boolean`},borderless:{description:`shows button without border`,control:`boolean`},fixedHeight:{description:"fixes the height based on `size`",control:`boolean`},onClick:{description:"click or action key pressed (`Space` / `Enter`)",action:`onClick`,table:{category:`Events`,defaultValue:{summary:"`(event: MouseEvent"}}},onEscape:{description:"`Esc`-key pressed",action:`onEscape`,table:{category:`Events`,defaultValue:{summary:"`(event: KeyboardEvent)`"}}},onFocus:{description:`triggered on focus`,action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(event: FocusEvent)`"}}},onBlur:{description:`triggered on blur`,action:`onBlur`,table:{category:`Events`,defaultValue:{summary:"`(event: FocusEvent)`"}}}}},_=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,onClick:h(`clicked`),onEscape:h(`escape pressed`),onBlur:h(`blur`),onFocus:e=>h(`focus`)(e),onKeyDown:h(`key down`),children:`Hello, I am a button!`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,href:`https://ebay.com`,children:`Hello, I am a link!`})})]}),v=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,size:`large`,children:`Large Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,href:`https://ebay.com`,size:`large`,children:`Large Link`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,children:`Default Size Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,href:`https://ebay.com`,children:`Default Size Link`})})]}),y=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,children:`Primary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,href:`https://ebay.com`,children:`Primary Link`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`secondary`,children:`Secondary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`secondary`,href:`https://ebay.com`,children:`Secondary Link`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{children:`Secondary Button (Default)`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,href:`https://ebay.com`,children:`Secondary Link (Default)`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`tertiary`,children:`Tertiary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`tertiary`,href:`https://ebay.com`,children:`Tertiary Link`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`none`,children:`Base Button`})})]}),b=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,variant:`destructive`,children:`Primary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,variant:`destructive`,href:`https://ebay.com`,children:`Primary Link`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`secondary`,variant:`destructive`,children:`Secondary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`secondary`,variant:`destructive`,href:`https://ebay.com`,children:`Secondary Link`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`tertiary`,variant:`destructive`,children:`Tertiary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`tertiary`,variant:`destructive`,href:`https://ebay.com`,children:`Tertiary Link`})})]}),x=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,fluid:!0,children:`Primary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,fluid:!0,children:`Secondary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,fluid:!0,href:`https://www.ebay.com`,children:`Link`})})]}),S=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`p`,{children:[`Form button:`,(0,m.jsx)(`br`,{}),(0,m.jsxs)(i,{...e,"aria-label":`Menu button`,children:[(0,m.jsx)(l,{}),(0,m.jsx)(`span`,{children:`Button with icon`})]})]}),(0,m.jsxs)(`p`,{children:[`Form fake-button (link):`,(0,m.jsx)(`br`,{}),(0,m.jsxs)(i,{...e,href:`#`,variant:`form`,"aria-label":`Settings link`,children:[(0,m.jsx)(d,{}),(0,m.jsx)(`span`,{children:`Button with icon`})]})]}),(0,m.jsxs)(`p`,{children:[`Delete button:`,(0,m.jsx)(`br`,{}),(0,m.jsxs)(i,{...e,variant:`destructive`,"aria-label":`Destructive button`,children:[(0,m.jsx)(p,{}),(0,m.jsx)(`span`,{children:`Button with icon`})]})]}),(0,m.jsxs)(`p`,{children:[`Expand button:`,(0,m.jsx)(`br`,{}),(0,m.jsxs)(i,{...e,bodyState:`expand`,"aria-label":`Destructive button`,children:[(0,m.jsx)(d,{}),(0,m.jsx)(`span`,{children:`Expand button`})]})]})]}),C=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`p`,{children:[`Form button:`,(0,m.jsx)(`br`,{}),(0,m.jsx)(i,{...e,variant:`form`,"aria-label":`Menu button`,children:(0,m.jsx)(l,{})})]}),(0,m.jsxs)(`p`,{children:[`Form fake-button (link):`,(0,m.jsx)(`br`,{}),(0,m.jsx)(i,{...e,href:`#`,variant:`form`,"aria-label":`Settings link`,children:(0,m.jsx)(d,{})})]}),(0,m.jsxs)(`p`,{children:[`Delete button:`,(0,m.jsx)(`br`,{}),(0,m.jsx)(i,{...e,variant:`destructive`,"aria-label":`Destructive button`,children:(0,m.jsx)(p,{})})]})]}),w=e=>(0,m.jsxs)(`div`,{style:{background:`rgba(66, 214, 205, 0.5)`},children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,children:`Default Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,transparent:!0,children:`Transparent Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,transparent:!0,priority:`secondary`,variant:`destructive`,children:`Transparent Destructive Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,href:`https://ebay.com`,transparent:!0,children:`Transparent Link`})})]}),T=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,disabled:!0,children:`Primary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,disabled:!0,children:`Secondary Button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,href:`https://ebay.com`,disabled:!0,children:`Link`})})]}),E=e=>(0,m.jsx)(i,{...e,priority:`primary`,partiallyDisabled:!0,children:`Hello, I am a button!`}),D=e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,truncate:!0,style:{maxWidth:`200px`},children:`Hello, I am a button! this is a long text`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,size:`large`,truncate:!0,style:{maxWidth:`200px`},children:`Hello, I am a BIG button! this is a long text`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,href:`https://ebay.com`,truncate:!0,style:{maxWidth:`200px`},children:`Hello, I am a link! this is a long text`})})]}),O=e=>(0,m.jsx)(i,{...e,priority:`primary`,fluid:!0,children:(0,m.jsxs)(r,{style:{justifyContent:`space-between`},children:[(0,m.jsx)(`span`,{children:`Select`}),(0,m.jsxs)(`span`,{style:{display:`inline-flex`},children:[(0,m.jsx)(`span`,{children:`Any`}),(0,m.jsx)(s,{})]})]})}),k=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,bodyState:`loading`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,bodyState:`loading`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`tertiary`,bodyState:`loading`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,variant:`form`,bodyState:`loading`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,variant:`destructive`,bodyState:`loading`})})]}),A=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,priority:`primary`,bodyState:`expand`,children:`Primary expand button`}),` `,(0,m.jsx)(i,{...e,priority:`primary`,bodyState:`expand`,"aria-expanded":`true`,children:`Expanded button`})]}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,bodyState:`expand`,children:`Expand button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`tertiary`,bodyState:`expand`,children:`Tertiary expand button`})}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,variant:`form`,bodyState:`expand`,children:`Form expand button`}),` `,(0,m.jsx)(i,{...e,variant:`form`,bodyState:`expand`}),` `,(0,m.jsx)(i,{variant:`form`,bodyState:`expand`,"aria-expanded":!0})]}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,priority:`primary`,bodyState:`expand`,borderless:!0,children:`Borderless expand button`})})]}),j=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,priority:`primary`,split:`start`,children:`Primary split start button`}),(0,m.jsx)(i,{...e,priority:`primary`,split:`end`,children:`Primary split end button`})]}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,split:`start`,children:`Split start button`}),(0,m.jsx)(i,{...e,split:`end`,children:`Split end button`})]}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,priority:`tertiary`,split:`start`,children:`Tertiary split start button`}),(0,m.jsx)(i,{...e,priority:`tertiary`,split:`end`,children:`Tertiary split end button`})]}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,priority:`primary`,split:`start`,children:`Primary Split button`}),(0,m.jsx)(i,{...e,priority:`primary`,bodyState:`expand`,split:`end`})]}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,split:`start`,children:`Split button`}),(0,m.jsx)(i,{...e,bodyState:`expand`,split:`end`})]}),(0,m.jsxs)(`p`,{children:[(0,m.jsx)(i,{...e,priority:`tertiary`,split:`start`,children:`Tertiary split button`}),(0,m.jsx)(i,{...e,priority:`tertiary`,bodyState:`expand`,split:`end`})]})]}),M=e=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,variant:`form`,children:`Form button`})})}),N=e=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,borderless:!0,children:`Borderless button`})})}),P=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,fixedHeight:!0,children:`Fixed height button`})}),(0,m.jsx)(`p`,{children:(0,m.jsx)(i,{...e,fixedHeight:!0,size:`large`,children:`Fixed height large button`})})]}),F=[`Default`,`Size`,`Priority`,`DestructiveVariant`,`Fluid`,`WithIcon`,`IconOnly`,`Transparent`,`Disabled`,`PartiallyDisabledButton`,`Truncated`,`FlexButton`,`LoadingButton`,`ExpandButton`,`SplitButton`,`FormButton`,`BorderlessButton`,`FixedHeight`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} onClick={action("clicked")} onEscape={action("escape pressed")} onBlur={action("blur")} onFocus={e => action("focus")(e)} onKeyDown={action("key down")}>
                Hello, I am a button!
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} href="https://ebay.com">
                Hello, I am a link!
            </EbayButton>
        </p>
    </>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} size="large">
                Large Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} href="https://ebay.com" size="large">
                Large Link
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args}>Default Size Button</EbayButton>
        </p>
        <p>
            <EbayButton {...args} href="https://ebay.com">
                Default Size Link
            </EbayButton>
        </p>
    </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} priority="primary">
                Primary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="primary" href="https://ebay.com">
                Primary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="secondary">
                Secondary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="secondary" href="https://ebay.com">
                Secondary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton>Secondary Button (Default)</EbayButton>
        </p>
        <p>
            <EbayButton {...args} href="https://ebay.com">
                Secondary Link (Default)
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="tertiary">
                Tertiary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="tertiary" href="https://ebay.com">
                Tertiary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="none">
                Base Button
            </EbayButton>
        </p>
    </>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} priority="primary" variant="destructive">
                Primary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="primary" variant="destructive" href="https://ebay.com">
                Primary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="secondary" variant="destructive">
                Secondary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="secondary" variant="destructive" href="https://ebay.com">
                Secondary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="tertiary" variant="destructive">
                Tertiary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="tertiary" variant="destructive" href="https://ebay.com">
                Tertiary Link
            </EbayButton>
        </p>
    </>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} priority="primary" fluid>
                Primary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} fluid>
                Secondary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} fluid href="https://www.ebay.com">
                Link
            </EbayButton>
        </p>
    </>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <>
        <p>
            Form button:
            <br />
            <EbayButton {...args} aria-label="Menu button">
                <EbayIconMenu20 />
                <span>Button with icon</span>
            </EbayButton>
        </p>
        <p>
            Form fake-button (link):
            <br />
            <EbayButton {...args} href="#" variant="form" aria-label="Settings link">
                <EbayIconSettings16 />
                <span>Button with icon</span>
            </EbayButton>
        </p>
        <p>
            Delete button:
            <br />
            <EbayButton {...args} variant="destructive" aria-label="Destructive button">
                <EbayIconDelete16 />
                <span>Button with icon</span>
            </EbayButton>
        </p>
        <p>
            Expand button:
            <br />
            <EbayButton {...args} bodyState="expand" aria-label="Destructive button">
                <EbayIconSettings16 />
                <span>Expand button</span>
            </EbayButton>
        </p>
    </>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <>
        <p>
            Form button:
            <br />
            <EbayButton {...args} variant="form" aria-label="Menu button">
                <EbayIconMenu20 />
            </EbayButton>
        </p>
        <p>
            Form fake-button (link):
            <br />
            <EbayButton {...args} href="#" variant="form" aria-label="Settings link">
                <EbayIconSettings16 />
            </EbayButton>
        </p>
        <p>
            Delete button:
            <br />
            <EbayButton {...args} variant="destructive" aria-label="Destructive button">
                <EbayIconDelete16 />
            </EbayButton>
        </p>
    </>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <div style={{
  background: "rgba(66, 214, 205, 0.5)"
}}>
        <p>
            <EbayButton {...args}>Default Button</EbayButton>
        </p>
        <p>
            <EbayButton {...args} transparent>
                Transparent Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} transparent priority="secondary" variant="destructive">
                Transparent Destructive Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} href="https://ebay.com" transparent>
                Transparent Link
            </EbayButton>
        </p>
    </div>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} priority="primary" disabled>
                Primary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} disabled>
                Secondary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} href="https://ebay.com" disabled>
                Link
            </EbayButton>
        </p>
    </>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayButton {...args} priority="primary" partiallyDisabled>
        Hello, I am a button!
    </EbayButton>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <div>
        <p>
            <EbayButton {...args} truncate style={{
      maxWidth: "200px"
    }}>
                Hello, I am a button! this is a long text
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} size="large" truncate style={{
      maxWidth: "200px"
    }}>
                Hello, I am a BIG button! this is a long text
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} href="https://ebay.com" truncate style={{
      maxWidth: "200px"
    }}>
                Hello, I am a link! this is a long text
            </EbayButton>
        </p>
    </div>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <EbayButton {...args} priority="primary" fluid>
        <EbayButtonCell style={{
    justifyContent: "space-between"
  }}>
            <span>Select</span>
            <span style={{
      display: "inline-flex"
    }}>
                <span>Any</span>
                <EbayIconChevronDown12 />
            </span>
        </EbayButtonCell>
    </EbayButton>`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} bodyState="loading" />
        </p>
        <p>
            <EbayButton {...args} priority="primary" bodyState="loading" />
        </p>
        <p>
            <EbayButton {...args} priority="tertiary" bodyState="loading" />
        </p>
        <p>
            <EbayButton {...args} variant="form" bodyState="loading" />
        </p>
        <p>
            <EbayButton {...args} variant="destructive" bodyState="loading" />
        </p>
    </>`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} priority="primary" bodyState="expand">
                Primary expand button
            </EbayButton>{" "}
            <EbayButton {...args} priority="primary" bodyState="expand" aria-expanded="true">
                Expanded button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} bodyState="expand">
                Expand button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="tertiary" bodyState="expand">
                Tertiary expand button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} variant="form" bodyState="expand">
                Form expand button
            </EbayButton>{" "}
            <EbayButton {...args} variant="form" bodyState="expand" />{" "}
            <EbayButton variant="form" bodyState="expand" aria-expanded />
        </p>
        <p>
            <EbayButton {...args} priority="primary" bodyState="expand" borderless>
                Borderless expand button
            </EbayButton>
        </p>
    </>`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} priority="primary" split="start">
                Primary split start button
            </EbayButton>
            <EbayButton {...args} priority="primary" split="end">
                Primary split end button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} split="start">
                Split start button
            </EbayButton>
            <EbayButton {...args} split="end">
                Split end button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="tertiary" split="start">
                Tertiary split start button
            </EbayButton>
            <EbayButton {...args} priority="tertiary" split="end">
                Tertiary split end button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} priority="primary" split="start">
                Primary Split button
            </EbayButton>
            <EbayButton {...args} priority="primary" bodyState="expand" split="end" />
        </p>
        <p>
            <EbayButton {...args} split="start">
                Split button
            </EbayButton>
            <EbayButton {...args} bodyState="expand" split="end" />
        </p>
        <p>
            <EbayButton {...args} priority="tertiary" split="start">
                Tertiary split button
            </EbayButton>
            <EbayButton {...args} priority="tertiary" bodyState="expand" split="end" />
        </p>
    </>`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} variant="form">
                Form button
            </EbayButton>
        </p>
    </>`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} borderless>
                Borderless button
            </EbayButton>
        </p>
    </>`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} fixedHeight>
                Fixed height button
            </EbayButton>
        </p>
        <p>
            <EbayButton {...args} fixedHeight size="large">
                Fixed height large button
            </EbayButton>
        </p>
    </>`,...P.parameters?.docs?.source}}}})))()}I();export{N as BorderlessButton,_ as Default,b as DestructiveVariant,T as Disabled,A as ExpandButton,P as FixedHeight,O as FlexButton,x as Fluid,M as FormButton,C as IconOnly,k as LoadingButton,E as PartiallyDisabledButton,y as Priority,v as Size,j as SplitButton,w as Transparent,D as Truncated,S as WithIcon,F as __namedExportsOrder,g as default};