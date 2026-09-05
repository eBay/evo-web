var g=Object.defineProperty;var n=(o,i)=>g(o,"name",{value:i,configurable:!0});import{r as C,R as t}from"./iframe-4EwwH2XN.js";import{E as a,a as e}from"./listbox-button-NFA1KOjz.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-Bnl589Wh.js";import"./ebay-icon-tick-16-BlhFHx3Z.js";import"./index-BzamGs-v.js";import"./floating-ui-DvYWyi_4.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-DUkbruGn.js";import"./index-eAI8HhFn.js";import"./ebay-icon-chevron-down-16-BT1lAmH-.js";const f=n(()=>{const[o,i]=C.useState("BB"),l=n(d=>{i(d)},"onRadioChange");return t.createElement("div",null,t.createElement(a,{value:o},t.createElement(e,{value:"California"},"California"),t.createElement(e,{value:"New York"},"New York"),t.createElement(e,{value:"Washington"},"Washington")),t.createElement("label",null,t.createElement("input",{type:"radio",onClick:n(()=>l("California"),"onClick"),name:"listbox-value"}),"California"),t.createElement("label",null,t.createElement("input",{type:"radio",onClick:n(()=>l("New York"),"onClick"),name:"listbox-value"}),"New York"),t.createElement("label",null,t.createElement("input",{type:"radio",onClick:n(()=>l("Washington"),"onClick"),name:"listbox-value"}),"Washington"))},"StateFullTest"),{action:s}=__STORYBOOK_MODULE_ACTIONS__,N={title:"buttons/ebay-listbox-button",tags:["autodocs"],parameters:{docs:{description:{component:`## Import

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
\`\`\``}}},argTypes:{value:{description:"Allows you to set the selected option to the one with `value`",control:"text"},selected:{description:"Allows you to set the selected index option to `selected`",control:"number"},"aria-disabled":{description:"Set to true if the field is disabled",control:"boolean"},"aria-invalid":{description:"Set to true if the field is invalid",control:"boolean"},fluid:{description:"To make the listbox fluid",control:"boolean"},borderless:{description:"To make the listbox borderless",control:"boolean"},maxHeight:{description:"example: 100px, 200px, 10rem",control:"text"},prefixId:{description:"The id of an external element to use as the a11y prefix label for the listbox button.",control:"text"},prefixLabel:{description:"The label to add before selected option on the button. Cannot be used with `prefixId`",control:"text"},floatingLabel:{description:"Indicates that the listbox is a floating label type and renders it with a label",control:"text"},unselectedText:{description:"The text to be shown when no options are selected. Default is '-'. Cannot be used with `floating-label`",control:"text"},strategy:{description:"Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",options:["fixed","absolute","fixed"],control:{type:"select"}},a11ySelectedText:{description:'Accessible text for selected option. Default is "selected".',control:"text"},onChange:{description:"triggered on change",action:"onChange",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { index: number, selected: string[] , wasClicked: boolean })`"}}},split:{description:"Split button appearance",options:["none","start","end"],control:{type:"select"}},onCollapse:{description:"triggered on collapse",action:"onCollapse",table:{category:"Events",defaultValue:{summary:"`()`"}}},onExpand:{description:"triggered on expand",action:"onExpand",table:{category:"Events",defaultValue:{summary:"`()`"}}}}},r=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,value:"BB",onChange:n((i,l)=>s("onChange")(i,l),"onChange"),onCollapse:n(()=>s("onCollapse")(),"onCollapse"),onExpand:n(()=>s("onExpand")(),"onExpand")},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"Default"),u=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,selected:1},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"PreselectedIndex"),p=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,onChange:n((i,l)=>s("onChange")(i,l),"onChange")},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"DefaultNoSelectedOption"),b={render:n(o=>{const i="listbox-button__label";return t.createElement(t.Fragment,null,t.createElement("label",{htmlFor:"btn-id",id:i},"Select these items:"),t.createElement("br",null),t.createElement("br",null),t.createElement(a,{...o,id:"btn-id",value:"BB",prefixId:i,onChange:n((l,d)=>s("onChange")(l,d),"onChange")},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3")))},"render"),name:"Default with A11y Prefix"},c=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,value:"BB",disabled:!0},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"DisabledState"),E=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,value:"BB","aria-invalid":"true"},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"InvalidState"),O=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,value:"BB",borderless:!0},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"Borderless"),B=n(o=>t.createElement("div",{style:{width:"500px"}},t.createElement(a,{...o,value:"BB",fluid:!0},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"Fluid"),x=n(o=>t.createElement(t.Fragment,null,t.createElement(f,{...o})),"StatefullComponent"),m=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,value:"BB",maxHeight:"200px"},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"),t.createElement(e,{value:"DD"},"Option 4"),t.createElement(e,{value:"EE"},"Option 5"),t.createElement(e,{value:"FF"},"Option 6"),t.createElement(e,{value:"GG"},"Option 7"),t.createElement(e,{value:"HH"},"Option 8"),t.createElement(e,{value:"II"},"Option 9"),t.createElement(e,{value:"JJ"},"Option 10"),t.createElement(e,{value:"KK"},"Option 11"),t.createElement(e,{value:"LL"},"Option 12"),t.createElement(e,{value:"MM"},"Option 13"),t.createElement(e,{value:"NN"},"Option 14"),t.createElement(e,{value:"OO"},"Option 15"),t.createElement(e,{value:"PP"},"Option 16"),t.createElement(e,{value:"QQ"},"Option 17"),t.createElement(e,{value:"RR"},"Option 18"),t.createElement(e,{value:"SS"},"Option 19"),t.createElement(e,{value:"TT"},"Option 20"),t.createElement(e,{value:"UU"},"Option 21"),t.createElement(e,{value:"VV"},"Option 22"),t.createElement(e,{value:"YY"},"Option 23"),t.createElement(e,{value:"XX"},"Option 24"),t.createElement(e,{value:"YY"},"Option 25"),t.createElement(e,{value:"ZZ"},"Option 26"),t.createElement(e,{value:"11"},"Option 27"),t.createElement(e,{value:"22"},"Option 28"),t.createElement(e,{value:"33"},"Option 29"),t.createElement(e,{value:"44"},"Option 30"),t.createElement(e,{value:"55"},"Option 31"),t.createElement(e,{value:"66"},"Option 32"),t.createElement(e,{value:"77"},"Option 33"),t.createElement(e,{value:"88"},"Option 34"),t.createElement(e,{value:"99"},"Option 35"),t.createElement(e,{value:"100"},"Option 36"),t.createElement(e,{value:"101"},"Option 37"),t.createElement(e,{value:"102"},"Option 38"),t.createElement(e,{value:"102"},"Option 39"))),"TooManyOptions"),y=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,prefixLabel:"Selected:",value:"BB"},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"PrefixLabel"),v=n(o=>t.createElement(t.Fragment,null,t.createElement(a,{...o,floatingLabel:"Select",value:"BB"},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3"))),"FloatingLabel"),L=n(o=>t.createElement(a,{...o,floatingLabel:"Select",value:"BB",strategy:"fixed"},t.createElement(e,{value:"AA"},"Option 1"),t.createElement(e,{value:"BB"},"Option 2"),t.createElement(e,{value:"CC"},"Option 3")),"WithFixedStrategy");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)} onCollapse={() => action("onCollapse")()} onExpand={() => action("onExpand")()}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} selected={1}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} onChange={(e: ChangeEvent, props: ChangeEventProps) => action("onChange")(e, props)}>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" disabled>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...c.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" aria-invalid="true">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} value="BB" borderless>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => <div style={{
  width: "500px"
}}>
        <EbayListboxButton {...args} value="BB" fluid>
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </div>`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
        <StateFullTest {...args} />
    </>`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} prefixLabel="Selected:" value="BB">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
        <EbayListboxButton {...args} floatingLabel="Select" value="BB">
            <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
            <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
            <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
        </EbayListboxButton>
    </>`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <EbayListboxButton {...args} floatingLabel="Select" value="BB" strategy="fixed">
        <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
        <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
        <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
    </EbayListboxButton>`,...L.parameters?.docs?.source}}};const V=["Default","PreselectedIndex","DefaultNoSelectedOption","DefaultWithA11YPrefix","DisabledState","InvalidState","Borderless","Fluid","StatefullComponent","TooManyOptions","PrefixLabel","FloatingLabel","WithFixedStrategy"];export{O as Borderless,r as Default,p as DefaultNoSelectedOption,b as DefaultWithA11YPrefix,c as DisabledState,v as FloatingLabel,B as Fluid,E as InvalidState,y as PrefixLabel,u as PreselectedIndex,x as StatefullComponent,m as TooManyOptions,L as WithFixedStrategy,V as __namedExportsOrder,N as default};
