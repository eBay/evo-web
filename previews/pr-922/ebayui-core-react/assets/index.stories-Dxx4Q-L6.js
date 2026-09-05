import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{i,n as a,t as o}from"./ebay-listbox-button-BPSS4Tsj.js";var s,c,l;function u(){return(u=t((()=>{s=e(n()),o(),c=r(),l=()=>{let[e,t]=(0,s.useState)(`BB`),n=e=>{t(e)};return(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(a,{value:e,children:[(0,c.jsx)(i,{value:`California`,children:`California`}),(0,c.jsx)(i,{value:`New York`,children:`New York`}),(0,c.jsx)(i,{value:`Washington`,children:`Washington`})]}),(0,c.jsxs)(`label`,{children:[(0,c.jsx)(`input`,{type:`radio`,onClick:()=>n(`California`),name:`listbox-value`}),`California`]}),(0,c.jsxs)(`label`,{children:[(0,c.jsx)(`input`,{type:`radio`,onClick:()=>n(`New York`),name:`listbox-value`}),`New York`]}),(0,c.jsxs)(`label`,{children:[(0,c.jsx)(`input`,{type:`radio`,onClick:()=>n(`Washington`),name:`listbox-value`}),`Washington`]})]})}})))()}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{n(),o(),u(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`buttons/ebay-listbox-button`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Import

\`\`\`jsx harmony
import { EbayListboxButton, EbayListboxButtonOption } from "@ebay/ui-core-react/ebay-listbox-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/button";
import "@ebay/skin/listbox-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/button.css";
@import "@ebay/skin/listbox-button.css";
\`\`\``}}},argTypes:{value:{description:"Allows you to set the selected option to the one with `value`",control:`text`},selected:{description:"Allows you to set the selected index option to `selected`",control:`number`},"aria-disabled":{description:`Set to true if the field is disabled`,control:`boolean`},"aria-invalid":{description:`Set to true if the field is invalid`,control:`boolean`},fluid:{description:`To make the listbox fluid`,control:`boolean`},borderless:{description:`To make the listbox borderless`,control:`boolean`},maxHeight:{description:`example: 100px, 200px, 10rem`,control:`text`},prefixId:{description:`The id of an external element to use as the a11y prefix label for the listbox button.`,control:`text`},prefixLabel:{description:"The label to add before selected option on the button. Cannot be used with `prefixId`",control:`text`},floatingLabel:{description:`Indicates that the listbox is a floating label type and renders it with a label`,control:`text`},unselectedText:{description:"The text to be shown when no options are selected. Default is '-'. Cannot be used with `floating-label`",control:`text`},strategy:{description:"Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",options:[`fixed`,`absolute`,`fixed`],control:{type:`select`}},a11ySelectedText:{description:`Accessible text for selected option. Default is "selected".`,control:`text`},onChange:{description:`triggered on change`,action:`onChange`,table:{category:`Events`,defaultValue:{summary:"`(ChangeEvent, { index: number, selected: string[] , wasClicked: boolean })`"}}},split:{description:`Split button appearance`,options:[`none`,`start`,`end`],control:{type:`select`}},onCollapse:{description:`triggered on collapse`,action:`onCollapse`,table:{category:`Events`,defaultValue:{summary:"`()`"}}},onExpand:{description:`triggered on expand`,action:`onExpand`,table:{category:`Events`,defaultValue:{summary:"`()`"}}}}},m=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,value:`BB`,onChange:(e,t)=>f(`onChange`)(e,t),onCollapse:()=>f(`onCollapse`)(),onExpand:()=>f(`onExpand`)(),children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),h=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,selected:1,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),g=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,onChange:(e,t)=>f(`onChange`)(e,t),children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),_={render:e=>{let t=`listbox-button__label`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`label`,{htmlFor:`btn-id`,id:t,children:`Select these items:`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(a,{...e,id:`btn-id`,value:`BB`,prefixId:t,onChange:(e,t)=>f(`onChange`)(e,t),children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})]})},name:`Default with A11y Prefix`},v=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,value:`BB`,disabled:!0,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),y=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,value:`BB`,"aria-invalid":`true`,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),b=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,value:`BB`,borderless:!0,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),x=e=>(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(a,{...e,value:`BB`,fluid:!0,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),S=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l,{...e})}),C=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,value:`BB`,maxHeight:`200px`,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`}),(0,d.jsx)(i,{value:`DD`,children:`Option 4`}),(0,d.jsx)(i,{value:`EE`,children:`Option 5`}),(0,d.jsx)(i,{value:`FF`,children:`Option 6`}),(0,d.jsx)(i,{value:`GG`,children:`Option 7`}),(0,d.jsx)(i,{value:`HH`,children:`Option 8`}),(0,d.jsx)(i,{value:`II`,children:`Option 9`}),(0,d.jsx)(i,{value:`JJ`,children:`Option 10`}),(0,d.jsx)(i,{value:`KK`,children:`Option 11`}),(0,d.jsx)(i,{value:`LL`,children:`Option 12`}),(0,d.jsx)(i,{value:`MM`,children:`Option 13`}),(0,d.jsx)(i,{value:`NN`,children:`Option 14`}),(0,d.jsx)(i,{value:`OO`,children:`Option 15`}),(0,d.jsx)(i,{value:`PP`,children:`Option 16`}),(0,d.jsx)(i,{value:`QQ`,children:`Option 17`}),(0,d.jsx)(i,{value:`RR`,children:`Option 18`}),(0,d.jsx)(i,{value:`SS`,children:`Option 19`}),(0,d.jsx)(i,{value:`TT`,children:`Option 20`}),(0,d.jsx)(i,{value:`UU`,children:`Option 21`}),(0,d.jsx)(i,{value:`VV`,children:`Option 22`}),(0,d.jsx)(i,{value:`YY`,children:`Option 23`}),(0,d.jsx)(i,{value:`XX`,children:`Option 24`}),(0,d.jsx)(i,{value:`YY`,children:`Option 25`}),(0,d.jsx)(i,{value:`ZZ`,children:`Option 26`}),(0,d.jsx)(i,{value:`11`,children:`Option 27`}),(0,d.jsx)(i,{value:`22`,children:`Option 28`}),(0,d.jsx)(i,{value:`33`,children:`Option 29`}),(0,d.jsx)(i,{value:`44`,children:`Option 30`}),(0,d.jsx)(i,{value:`55`,children:`Option 31`}),(0,d.jsx)(i,{value:`66`,children:`Option 32`}),(0,d.jsx)(i,{value:`77`,children:`Option 33`}),(0,d.jsx)(i,{value:`88`,children:`Option 34`}),(0,d.jsx)(i,{value:`99`,children:`Option 35`}),(0,d.jsx)(i,{value:`100`,children:`Option 36`}),(0,d.jsx)(i,{value:`101`,children:`Option 37`}),(0,d.jsx)(i,{value:`102`,children:`Option 38`}),(0,d.jsx)(i,{value:`102`,children:`Option 39`})]})}),w=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,prefixLabel:`Selected:`,value:`BB`,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),T=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a,{...e,floatingLabel:`Select`,value:`BB`,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]})}),E=e=>(0,d.jsxs)(a,{...e,floatingLabel:`Select`,value:`BB`,strategy:`fixed`,children:[(0,d.jsx)(i,{value:`AA`,children:`Option 1`}),(0,d.jsx)(i,{value:`BB`,children:`Option 2`}),(0,d.jsx)(i,{value:`CC`,children:`Option 3`})]}),D=[`Default`,`PreselectedIndex`,`DefaultNoSelectedOption`,`DefaultWithA11YPrefix`,`DisabledState`,`InvalidState`,`Borderless`,`Fluid`,`StatefullComponent`,`TooManyOptions`,`PrefixLabel`,`FloatingLabel`,`WithFixedStrategy`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)} onCollapse={() => action("onCollapse")()} onExpand={() => action("onExpand")()}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} selected={1}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const listboxBtnLabel = "listbox-button__label";
    return <>
                <label htmlFor="btn-id" id={listboxBtnLabel}>
                    Select these items:
                </label>
                <br />
                <br />
                <EbayListboxButton {...args} id="btn-id" value="BB" prefixId={listboxBtnLabel} onChange={(e, props) => action("onChange")(e, props)}>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                </EbayListboxButton>
            </>;
  },
  name: "Default with A11y Prefix"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" disabled>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" aria-invalid="true">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" borderless>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "500px"
}}>
        <EbayListboxButton {...args} value="BB" fluid>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </div>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <>
        <StateFullTest {...args} />
    </>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" maxHeight="200px">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
            <EbayListboxButtonOption value="DD">Option 4</EbayListboxButtonOption>
            <EbayListboxButtonOption value="EE">Option 5</EbayListboxButtonOption>
            <EbayListboxButtonOption value="FF">Option 6</EbayListboxButtonOption>
            <EbayListboxButtonOption value="GG">Option 7</EbayListboxButtonOption>
            <EbayListboxButtonOption value="HH">Option 8</EbayListboxButtonOption>
            <EbayListboxButtonOption value="II">Option 9</EbayListboxButtonOption>
            <EbayListboxButtonOption value="JJ">Option 10</EbayListboxButtonOption>
            <EbayListboxButtonOption value="KK">Option 11</EbayListboxButtonOption>
            <EbayListboxButtonOption value="LL">Option 12</EbayListboxButtonOption>
            <EbayListboxButtonOption value="MM">Option 13</EbayListboxButtonOption>
            <EbayListboxButtonOption value="NN">Option 14</EbayListboxButtonOption>
            <EbayListboxButtonOption value="OO">Option 15</EbayListboxButtonOption>
            <EbayListboxButtonOption value="PP">Option 16</EbayListboxButtonOption>
            <EbayListboxButtonOption value="QQ">Option 17</EbayListboxButtonOption>
            <EbayListboxButtonOption value="RR">Option 18</EbayListboxButtonOption>
            <EbayListboxButtonOption value="SS">Option 19</EbayListboxButtonOption>
            <EbayListboxButtonOption value="TT">Option 20</EbayListboxButtonOption>
            <EbayListboxButtonOption value="UU">Option 21</EbayListboxButtonOption>
            <EbayListboxButtonOption value="VV">Option 22</EbayListboxButtonOption>
            <EbayListboxButtonOption value="YY">Option 23</EbayListboxButtonOption>
            <EbayListboxButtonOption value="XX">Option 24</EbayListboxButtonOption>
            <EbayListboxButtonOption value="YY">Option 25</EbayListboxButtonOption>
            <EbayListboxButtonOption value="ZZ">Option 26</EbayListboxButtonOption>
            <EbayListboxButtonOption value="11">Option 27</EbayListboxButtonOption>
            <EbayListboxButtonOption value="22">Option 28</EbayListboxButtonOption>
            <EbayListboxButtonOption value="33">Option 29</EbayListboxButtonOption>
            <EbayListboxButtonOption value="44">Option 30</EbayListboxButtonOption>
            <EbayListboxButtonOption value="55">Option 31</EbayListboxButtonOption>
            <EbayListboxButtonOption value="66">Option 32</EbayListboxButtonOption>
            <EbayListboxButtonOption value="77">Option 33</EbayListboxButtonOption>
            <EbayListboxButtonOption value="88">Option 34</EbayListboxButtonOption>
            <EbayListboxButtonOption value="99">Option 35</EbayListboxButtonOption>
            <EbayListboxButtonOption value="100">Option 36</EbayListboxButtonOption>
            <EbayListboxButtonOption value="101">Option 37</EbayListboxButtonOption>
            <EbayListboxButtonOption value="102">Option 38</EbayListboxButtonOption>
            <EbayListboxButtonOption value="102">Option 39</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} prefixLabel="Selected:" value="BB">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} floatingLabel="Select" value="BB">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayListboxButton {...args} floatingLabel="Select" value="BB" strategy="fixed">
        <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
        <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
        <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
    </EbayListboxButton>`,...E.parameters?.docs?.source}}}})))()}O();export{b as Borderless,m as Default,g as DefaultNoSelectedOption,_ as DefaultWithA11YPrefix,v as DisabledState,T as FloatingLabel,x as Fluid,y as InvalidState,w as PrefixLabel,h as PreselectedIndex,S as StatefullComponent,C as TooManyOptions,E as WithFixedStrategy,D as __namedExportsOrder,p as default};