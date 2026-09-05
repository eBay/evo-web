var y=Object.defineProperty;var r=(a,m)=>y(a,"name",{value:m,configurable:!0});import{c as d,R as e}from"./iframe-CCU1rlUb.js";import{E as k,a as b}from"./ebay-icon-eek-arrow-CGWGDvuG.js";import"./preload-helper-Cc2_yIPf.js";const u={"A+++":["D","E","G"],"A++":["E","G"],"A+":["F","G"],A:["G"]},G=r(a=>{const{max:m,min:i,rating:x}=a,l=u[m];if(!(l&&l.indexOf(i)>-1))return null;let t=m,E=1;for(;t!==x;){if(E++,i===t)return null;t.length>1?t=t.slice(0,t.length-1):t=String.fromCharCode(t.charCodeAt(0)+1)}return E>7?7:E},"eekUtil"),n=r(({min:a="",max:m="",rating:i,a11yText:x,className:l})=>{const t=G({rating:i,min:a,max:m}),E=d(l,"eek",{[`eek--rating-${t}`]:!!t}),o=`Energy Rating: ${i}. Range: ${m} - ${a}.`;return e.createElement("div",{className:E,role:"img","aria-label":x||o},e.createElement("div",{className:"eek__container","aria-hidden":!0},e.createElement("span",{className:"eek__rating-range"},e.createElement("span",null,m),e.createElement(k,null),e.createElement("span",null,a)),e.createElement("span",{className:"eek__rating"},i)),e.createElement(b,null))},"EbayEek");try{eekrating.displayName="eekrating",eekrating.__docgenInfo={description:"",displayName:"eekrating",props:{rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"string"}},max:{defaultValue:{value:""},description:"",name:"max",required:!1,type:{name:"string"}},min:{defaultValue:{value:""},description:"",name:"min",required:!1,type:{name:"string"}},a11yText:{defaultValue:null,description:"",name:"a11yText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C={component:n,title:"graphics & icons/ebay-eek",tags:["autodocs"],parameters:{docs:{description:{component:`This component displays the current European Union Energy (EEK) rating of certain items that consume energy.

## Usage

### Import

\`\`\`jsx harmony
import { EbayEek } from "@ebay/ui-core-react/ebay-eek";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/eek";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/eek.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayEek max="A+++" min="E" rating="C" />
\`\`\``}}},argTypes:{rating:{description:"The energy rating",control:"text"},max:{description:"The maximum range",control:"text"},min:{description:"The minimum range",control:"text"},a11yText:{description:"Accessible label for the energy rating graphic",control:"text"}}},g=r(a=>e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(n,{...a,max:"A",min:"G",rating:"A"}),e.createElement(n,{...a,max:"A",min:"G",rating:"B"}),e.createElement(n,{...a,max:"A",min:"G",rating:"C"}),e.createElement(n,{...a,max:"A",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A",min:"G",rating:"E"}),e.createElement(n,{...a,max:"A",min:"G",rating:"F"}),e.createElement(n,{...a,max:"A",min:"G",rating:"G"}))),"RegularA"),A={render:r(a=>e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(n,{...a,max:"A++",min:"E",rating:"A++"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"A+"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"A"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"B"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"C"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"D"}),e.createElement(n,{...a,max:"A++",min:"E",rating:"E"})),e.createElement("div",null,e.createElement(n,{...a,max:"A++",min:"G",rating:"A++"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"A+"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"A"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"B"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"C"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"E"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"F"}),e.createElement(n,{...a,max:"A++",min:"G",rating:"G"}))),"render"),name:"A++"},c={render:r(a=>e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(n,{...a,max:"A+++",min:"D",rating:"A+++"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"A++"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"A+"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"A"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"B"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"C"}),e.createElement(n,{...a,max:"A+++",min:"D",rating:"D"})),e.createElement("div",null,e.createElement(n,{...a,max:"A+++",min:"E",rating:"A+++"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"A++"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"A+"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"A"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"B"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"C"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"D"}),e.createElement(n,{...a,max:"A+++",min:"E",rating:"E"})),e.createElement("div",null,e.createElement(n,{...a,max:"A+++",min:"G",rating:"A+++"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"A++"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"A+"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"A"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"B"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"C"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"E"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"F"}),e.createElement(n,{...a,max:"A+++",min:"G",rating:"G"}))),"render"),name:"Valid A+++"},s=r(a=>e.createElement(e.Fragment,null,e.createElement(n,{...a,max:"B",min:"G",rating:"D"}),e.createElement(n,{...a,max:"A",min:"G",rating:"A+++"}),e.createElement(n,{...a,max:"A++",min:"B",rating:"A++"}),e.createElement(n,{...a,max:"A+",min:"B",rating:"A++"})),"InvalidCombinations");g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <div>
            <EbayEek {...args} max="A" min="G" rating="A" />
            <EbayEek {...args} max="A" min="G" rating="B" />
            <EbayEek {...args} max="A" min="G" rating="C" />
            <EbayEek {...args} max="A" min="G" rating="D" />
            <EbayEek {...args} max="A" min="G" rating="E" />
            <EbayEek {...args} max="A" min="G" rating="F" />
            <EbayEek {...args} max="A" min="G" rating="G" />
        </div>
    </>`,...g.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <div>
                <EbayEek {...args} max="A++" min="E" rating="A++" />
                <EbayEek {...args} max="A++" min="E" rating="A+" />
                <EbayEek {...args} max="A++" min="E" rating="A" />
                <EbayEek {...args} max="A++" min="E" rating="B" />
                <EbayEek {...args} max="A++" min="E" rating="C" />
                <EbayEek {...args} max="A++" min="E" rating="D" />
                <EbayEek {...args} max="A++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek {...args} max="A++" min="G" rating="A++" />
                <EbayEek {...args} max="A++" min="G" rating="A+" />
                <EbayEek {...args} max="A++" min="G" rating="A" />
                <EbayEek {...args} max="A++" min="G" rating="B" />
                <EbayEek {...args} max="A++" min="G" rating="C" />
                <EbayEek {...args} max="A++" min="G" rating="D" />
                <EbayEek {...args} max="A++" min="G" rating="E" />
                <EbayEek {...args} max="A++" min="G" rating="F" />
                <EbayEek {...args} max="A++" min="G" rating="G" />
            </div>
        </>,
  name: "A++"
}`,...A.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <div>
                <EbayEek {...args} max="A+++" min="D" rating="A+++" />
                <EbayEek {...args} max="A+++" min="D" rating="A++" />
                <EbayEek {...args} max="A+++" min="D" rating="A+" />
                <EbayEek {...args} max="A+++" min="D" rating="A" />
                <EbayEek {...args} max="A+++" min="D" rating="B" />
                <EbayEek {...args} max="A+++" min="D" rating="C" />
                <EbayEek {...args} max="A+++" min="D" rating="D" />
            </div>
            <div>
                <EbayEek {...args} max="A+++" min="E" rating="A+++" />
                <EbayEek {...args} max="A+++" min="E" rating="A++" />
                <EbayEek {...args} max="A+++" min="E" rating="A+" />
                <EbayEek {...args} max="A+++" min="E" rating="A" />
                <EbayEek {...args} max="A+++" min="E" rating="B" />
                <EbayEek {...args} max="A+++" min="E" rating="C" />
                <EbayEek {...args} max="A+++" min="E" rating="D" />
                <EbayEek {...args} max="A+++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek {...args} max="A+++" min="G" rating="A+++" />
                <EbayEek {...args} max="A+++" min="G" rating="A++" />
                <EbayEek {...args} max="A+++" min="G" rating="A+" />
                <EbayEek {...args} max="A+++" min="G" rating="A" />
                <EbayEek {...args} max="A+++" min="G" rating="B" />
                <EbayEek {...args} max="A+++" min="G" rating="C" />
                <EbayEek {...args} max="A+++" min="G" rating="D" />
                <EbayEek {...args} max="A+++" min="G" rating="E" />
                <EbayEek {...args} max="A+++" min="G" rating="F" />
                <EbayEek {...args} max="A+++" min="G" rating="G" />
            </div>
        </>,
  name: "Valid A+++"
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <EbayEek {...args} max="B" min="G" rating="D" />
        <EbayEek {...args} max="A" min="G" rating="A+++" />
        <EbayEek {...args} max="A++" min="B" rating="A++" />
        <EbayEek {...args} max="A+" min="B" rating="A++" />
    </>`,...s.parameters?.docs?.source}}};const B=["RegularA","A","ValidA","InvalidCombinations"];export{A,s as InvalidCombinations,g as RegularA,c as ValidA,B as __namedExportsOrder,C as default};
