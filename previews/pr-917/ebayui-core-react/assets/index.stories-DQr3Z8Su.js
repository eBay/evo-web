var I=Object.defineProperty;var a=(e,v)=>I(e,"name",{value:v,configurable:!0});import{R as t}from"./iframe-xJqlUA9m.js";import{E as n,a as L}from"./button-B5bq_2Pf.js";import{E as F}from"./ebay-icon-menu-20-DeLogUM4.js";import{E as k}from"./ebay-icon-settings-16-i1vqrB1j.js";import{E as D}from"./ebay-icon-delete-16-Bkyh8K4o.js";import{E as w}from"./ebay-icon-chevron-down-12-B4NZJYvo.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-BxXRvOg1.js";import"./ebay-icon-spinner-30-BLWjaJ7S.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,V={component:n,title:"buttons/ebay-button",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{priority:{description:"`primary`, `secondary` (default), `tertiary`, `none`",options:["primary","secondary","tertiary","none"],control:{type:"select"}},variant:{description:"`standard` (default), `destructive`, `form`",options:["standard","destructive","form"],control:{type:"select"}},size:{description:"`small` or `large`",options:["small","large"],control:{type:"select"}},split:{description:"Split button visual position",options:["start","end"],control:{type:"select"}},bodyState:{description:"`loading`, `expand`",options:["loading","expand"],control:{type:"select"}},href:{description:"for link that looks like a button",control:"text"},fluid:{description:"takes the whole width of the parent element",control:"boolean"},disabled:{control:"boolean"},partiallyDisabled:{description:"sets `aria-disabled` but not `disabled` prop",control:"boolean"},transparent:{description:"transparent background color (overrides `priority` prop)",control:"boolean"},truncate:{description:"will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows",control:"boolean"},borderless:{description:"shows button without border",control:"boolean"},fixedHeight:{description:"fixes the height based on `size`",control:"boolean"},onClick:{description:"click or action key pressed (`Space` / `Enter`)",action:"onClick",table:{category:"Events",defaultValue:{summary:"`(event: MouseEvent"}}},onEscape:{description:"`Esc`-key pressed",action:"onEscape",table:{category:"Events",defaultValue:{summary:"`(event: KeyboardEvent)`"}}},onFocus:{description:"triggered on focus",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(event: FocusEvent)`"}}},onBlur:{description:"triggered on blur",action:"onBlur",table:{category:"Events",defaultValue:{summary:"`(event: FocusEvent)`"}}}}},o=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,onClick:r("clicked"),onEscape:r("escape pressed"),onBlur:r("blur"),onFocus:a(v=>r("focus")(v),"onFocus"),onKeyDown:r("key down")},"Hello, I am a button!")),t.createElement("p",null,t.createElement(n,{...e,href:"https://ebay.com"},"Hello, I am a link!"))),"Default"),l=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,size:"large"},"Large Button")),t.createElement("p",null,t.createElement(n,{...e,href:"https://ebay.com",size:"large"},"Large Link")),t.createElement("p",null,t.createElement(n,{...e},"Default Size Button")),t.createElement("p",null,t.createElement(n,{...e,href:"https://ebay.com"},"Default Size Link"))),"Size"),i=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,priority:"primary"},"Primary Button")),t.createElement("p",null,t.createElement(n,{...e,priority:"primary",href:"https://ebay.com"},"Primary Link")),t.createElement("p",null,t.createElement(n,{...e,priority:"secondary"},"Secondary Button")),t.createElement("p",null,t.createElement(n,{...e,priority:"secondary",href:"https://ebay.com"},"Secondary Link")),t.createElement("p",null,t.createElement(n,null,"Secondary Button (Default)")),t.createElement("p",null,t.createElement(n,{...e,href:"https://ebay.com"},"Secondary Link (Default)")),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary"},"Tertiary Button")),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary",href:"https://ebay.com"},"Tertiary Link")),t.createElement("p",null,t.createElement(n,{...e,priority:"none"},"Base Button"))),"Priority"),p=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,priority:"primary",variant:"destructive"},"Primary Button")),t.createElement("p",null,t.createElement(n,{...e,priority:"primary",variant:"destructive",href:"https://ebay.com"},"Primary Link")),t.createElement("p",null,t.createElement(n,{...e,priority:"secondary",variant:"destructive"},"Secondary Button")),t.createElement("p",null,t.createElement(n,{...e,priority:"secondary",variant:"destructive",href:"https://ebay.com"},"Secondary Link")),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary",variant:"destructive"},"Tertiary Button")),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary",variant:"destructive",href:"https://ebay.com"},"Tertiary Link"))),"DestructiveVariant"),s=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,priority:"primary",fluid:!0},"Primary Button")),t.createElement("p",null,t.createElement(n,{...e,fluid:!0},"Secondary Button")),t.createElement("p",null,t.createElement(n,{...e,fluid:!0,href:"https://www.ebay.com"},"Link"))),"Fluid"),u=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,"Form button:",t.createElement("br",null),t.createElement(n,{...e,"aria-label":"Menu button"},t.createElement(F,null),t.createElement("span",null,"Button with icon"))),t.createElement("p",null,"Form fake-button (link):",t.createElement("br",null),t.createElement(n,{...e,href:"#",variant:"form","aria-label":"Settings link"},t.createElement(k,null),t.createElement("span",null,"Button with icon"))),t.createElement("p",null,"Delete button:",t.createElement("br",null),t.createElement(n,{...e,variant:"destructive","aria-label":"Destructive button"},t.createElement(D,null),t.createElement("span",null,"Button with icon"))),t.createElement("p",null,"Expand button:",t.createElement("br",null),t.createElement(n,{...e,bodyState:"expand","aria-label":"Destructive button"},t.createElement(k,null),t.createElement("span",null,"Expand button")))),"WithIcon"),c=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,"Form button:",t.createElement("br",null),t.createElement(n,{...e,variant:"form","aria-label":"Menu button"},t.createElement(F,null))),t.createElement("p",null,"Form fake-button (link):",t.createElement("br",null),t.createElement(n,{...e,href:"#",variant:"form","aria-label":"Settings link"},t.createElement(k,null))),t.createElement("p",null,"Delete button:",t.createElement("br",null),t.createElement(n,{...e,variant:"destructive","aria-label":"Destructive button"},t.createElement(D,null)))),"IconOnly"),y=a(e=>t.createElement("div",{style:{background:"rgba(66, 214, 205, 0.5)"}},t.createElement("p",null,t.createElement(n,{...e},"Default Button")),t.createElement("p",null,t.createElement(n,{...e,transparent:!0},"Transparent Button")),t.createElement("p",null,t.createElement(n,{...e,transparent:!0,priority:"secondary",variant:"destructive"},"Transparent Destructive Button")),t.createElement("p",null,t.createElement(n,{...e,href:"https://ebay.com",transparent:!0},"Transparent Link"))),"Transparent"),m=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,priority:"primary",disabled:!0},"Primary Button")),t.createElement("p",null,t.createElement(n,{...e,disabled:!0},"Secondary Button")),t.createElement("p",null,t.createElement(n,{...e,href:"https://ebay.com",disabled:!0},"Link"))),"Disabled"),b=a(e=>t.createElement(n,{...e,priority:"primary",partiallyDisabled:!0},"Hello, I am a button!"),"PartiallyDisabledButton"),E=a(e=>t.createElement("div",null,t.createElement("p",null,t.createElement(n,{...e,truncate:!0,style:{maxWidth:"200px"}},"Hello, I am a button! this is a long text")),t.createElement("p",null,t.createElement(n,{...e,size:"large",truncate:!0,style:{maxWidth:"200px"}},"Hello, I am a BIG button! this is a long text")),t.createElement("p",null,t.createElement(n,{...e,href:"https://ebay.com",truncate:!0,style:{maxWidth:"200px"}},"Hello, I am a link! this is a long text"))),"Truncated"),d=a(e=>t.createElement(n,{...e,priority:"primary",fluid:!0},t.createElement(L,{style:{justifyContent:"space-between"}},t.createElement("span",null,"Select"),t.createElement("span",{style:{display:"inline-flex"}},t.createElement("span",null,"Any"),t.createElement(w,null)))),"FlexButton"),B=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,bodyState:"loading"})),t.createElement("p",null,t.createElement(n,{...e,priority:"primary",bodyState:"loading"})),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary",bodyState:"loading"})),t.createElement("p",null,t.createElement(n,{...e,variant:"form",bodyState:"loading"})),t.createElement("p",null,t.createElement(n,{...e,variant:"destructive",bodyState:"loading"}))),"LoadingButton"),g=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,priority:"primary",bodyState:"expand"},"Primary expand button")," ",t.createElement(n,{...e,priority:"primary",bodyState:"expand","aria-expanded":"true"},"Expanded button")),t.createElement("p",null,t.createElement(n,{...e,bodyState:"expand"},"Expand button")),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary",bodyState:"expand"},"Tertiary expand button")),t.createElement("p",null,t.createElement(n,{...e,variant:"form",bodyState:"expand"},"Form expand button")," ",t.createElement(n,{...e,variant:"form",bodyState:"expand"})," ",t.createElement(n,{variant:"form",bodyState:"expand","aria-expanded":!0})),t.createElement("p",null,t.createElement(n,{...e,priority:"primary",bodyState:"expand",borderless:!0},"Borderless expand button"))),"ExpandButton"),h=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,priority:"primary",split:"start"},"Primary split start button"),t.createElement(n,{...e,priority:"primary",split:"end"},"Primary split end button")),t.createElement("p",null,t.createElement(n,{...e,split:"start"},"Split start button"),t.createElement(n,{...e,split:"end"},"Split end button")),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary",split:"start"},"Tertiary split start button"),t.createElement(n,{...e,priority:"tertiary",split:"end"},"Tertiary split end button")),t.createElement("p",null,t.createElement(n,{...e,priority:"primary",split:"start"},"Primary Split button"),t.createElement(n,{...e,priority:"primary",bodyState:"expand",split:"end"})),t.createElement("p",null,t.createElement(n,{...e,split:"start"},"Split button"),t.createElement(n,{...e,bodyState:"expand",split:"end"})),t.createElement("p",null,t.createElement(n,{...e,priority:"tertiary",split:"start"},"Tertiary split button"),t.createElement(n,{...e,priority:"tertiary",bodyState:"expand",split:"end"}))),"SplitButton"),f=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,variant:"form"},"Form button"))),"FormButton"),S=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,borderless:!0},"Borderless button"))),"BorderlessButton"),x=a(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(n,{...e,fixedHeight:!0},"Fixed height button")),t.createElement("p",null,t.createElement(n,{...e,fixedHeight:!0,size:"large"},"Fixed height large button"))),"FixedHeight");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...c.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <EbayButton {...args} priority="primary" partiallyDisabled>
        Hello, I am a button!
    </EbayButton>`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <div>
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
    </div>`,...E.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayButton {...args} priority="primary" fluid>
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
    </EbayButton>`,...d.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} variant="form">
                Form button
            </EbayButton>
        </p>
    </>`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayButton {...args} borderless>
                Borderless button
            </EbayButton>
        </p>
    </>`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...x.parameters?.docs?.source}}};const K=["Default","Size","Priority","DestructiveVariant","Fluid","WithIcon","IconOnly","Transparent","Disabled","PartiallyDisabledButton","Truncated","FlexButton","LoadingButton","ExpandButton","SplitButton","FormButton","BorderlessButton","FixedHeight"];export{S as BorderlessButton,o as Default,p as DestructiveVariant,m as Disabled,g as ExpandButton,x as FixedHeight,d as FlexButton,s as Fluid,f as FormButton,c as IconOnly,B as LoadingButton,b as PartiallyDisabledButton,i as Priority,l as Size,h as SplitButton,y as Transparent,E as Truncated,u as WithIcon,K as __namedExportsOrder,V as default};
