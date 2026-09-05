var D=Object.defineProperty;var n=(t,a)=>D(t,"name",{value:a,configurable:!0});import{r as u,R as e,c as w}from"./iframe-COOdMPPe.js";import{E as _}from"./button-i0GaxGTx.js";import{a as C,b as I,E as M}from"./ebay-icon-stepper-upcoming-24-DfnxiM5K.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-Dwk18Mjs.js";import"./ebay-icon-spinner-30-CXhMF6m0.js";import"./ebay-icon-chevron-down-12-B1pR0mbV.js";const i=n(({direction:t="row",defaultState:a="active",children:p,className:m,...y})=>{const o=u.Children.toArray(p),c=k(o,a);return e.createElement("div",{...y,className:w(m,"progress-stepper",{"progress-stepper--vertical":t==="column"})},e.createElement("div",{role:"list",className:"progress-stepper__items"},o.map((d,s)=>e.createElement(u.Fragment,{key:s},s>0&&e.createElement("hr",{className:"progress-stepper__separator",role:"presentation"}),u.cloneElement(d,{state:A(s,c),...d.props,current:c===s})))))},"EbayProgressStepper");function k(t,a){const p=t.findIndex(m=>m.props.current);if(p===-1)switch(a){case"complete":return t.length-1;case"upcoming":return 0}return p}n(k,"currentIndexByDefaultState");function A(t,a){if(t<=a)return"complete";if(t>a)return"upcoming"}n(A,"stepState");try{ebayprogressstepper.displayName="ebayprogressstepper",ebayprogressstepper.__docgenInfo={description:"",displayName:"ebayprogressstepper",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"StepperDirection"}},defaultState:{defaultValue:{value:"active"},description:"",name:"defaultState",required:!1,type:{name:"StepState"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const x={complete:C,attention:M,upcoming:I,active:C},r=n(({current:t,state:a="complete",children:p,className:m,...y})=>{const o=u.Children.toArray(p),c=o.find(g=>g.type===l),d=o.filter(g=>g.type!==l),s=w(m,"progress-stepper__item",{"progress-stepper__item--attention":a==="attention"}),S=x[a],N=t?"current":a;return e.createElement("div",{...y,className:s,role:"listitem","aria-current":t?"step":void 0},e.createElement("div",{className:"progress-stepper__icon"},e.createElement(S,{"aria-label":N})),e.createElement("div",{className:"progress-stepper__text"},c,d))},"EbayProgressStep");try{ebayprogressstep.displayName="ebayprogressstep",ebayprogressstep.__docgenInfo={description:"",displayName:"ebayprogressstep",props:{state:{defaultValue:{value:"complete"},description:"",name:"state",required:!1,type:{name:"StepState"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const l=n(({as:t="h4",children:a})=>u.createElement(t,{},a),"EbayProgressTitle");try{ebayprogresstitle.displayName="ebayprogresstitle",ebayprogresstitle.__docgenInfo={description:"",displayName:"ebayprogresstitle",props:{as:{defaultValue:{value:"h4"},description:"",name:"as",required:!1,type:{name:"string"}}}}}catch{}const F={title:"progress/ebay-progress-stepper",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayProgressStepper, EbayProgressStep, EbayProgressTitle } from "@ebay/ui-core-react/ebay-progress-stepper";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/progress-stepper";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/progress-stepper.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayProgressStepper>
    <EbayProgressStep>Started</EbayProgressStep>
    <EbayProgressStep>Shipped</EbayProgressStep>
    <EbayProgressStep current>Transit</EbayProgressStep>
    <EbayProgressStep>Delivered</EbayProgressStep>
</EbayProgressStepper>
\`\`\`

## Components

### EbayProgressStepper

This is the container of the wizard stepper and you can define the direction of the stepper and pass properties to
customize the layout (\`className\` or \`style\`)

### EbayProgressStep

This component is used to render each step. It renders an icon, a title and a text label.

### EbayProgressTitle

The bolded title for each step. Will be rendered in an \`h4\` by default.

#### Example

\`\`\`jsx
<EbayProgressStepper>
    <EbayProgressStep>
        <EbayProgressTitle>Started</EbayProgressTitle>
        July 3rd
    </EbayProgressStep>

    <EbayProgressStep current>
        <EbayProgressTitle>Shipped</EbayProgressTitle>
        July 4th
    </EbayProgressStep>
</EbayProgressStepper>
\`\`\``}}},argTypes:{direction:{description:"Either `column` or `row` (default). Will display stepper as a vertical column or horizontal row.",options:["column","row"],control:{type:"select"}},defaultState:{description:"`complete`: all items will be in `complete` state by default, `upcoming`:all items will be in `upcoming` state, `attention`: current item will be shown as blocked. Otherwise, default state (`active`) will change items based on the current item (defaults to first step if not set).",options:["complete","complete","upcoming","upcoming","attention","active"],control:{type:"select"}},current:{description:"The current step. Only first step that has this property will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any step, then will render based on `defaultState` property",control:"boolean"},as:{description:"HTML tag to use instead of `h4`",control:"text"},state:{description:"State of a progress step",options:["complete","upcoming","attention","active"],control:{type:"select"}}}},E=n(t=>e.createElement("div",{style:{padding:50}},e.createElement(i,{...t},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,{current:!0},"Transit"),e.createElement(r,null,"Delivered"))),"Default"),b={render:n(t=>e.createElement("div",{style:{padding:50}},e.createElement(i,{...t,defaultState:"upcoming"},e.createElement(r,null,e.createElement(l,null,"Paid"),"July 3rd"),e.createElement(r,null,e.createElement(l,null,"Shipped"),"July 4th"),e.createElement(r,null,e.createElement(l,null,"Transit"),"July 5th"),e.createElement(r,null,e.createElement(l,null,"Delivered"),"July 6th"))),"render"),name:"Default state: upcoming"},f={render:n(t=>e.createElement("div",{style:{padding:50}},e.createElement(i,{...t,defaultState:"complete"},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,null,"Transit"),e.createElement(r,null,"Delivered"))),"render"),name:"Default state: complete"},h=n(t=>e.createElement("div",{style:{padding:50}},e.createElement(i,{...t},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,{state:"attention",current:!0},"Blocked"),e.createElement(r,null,"Delivered"))),"Blocked"),v=n(t=>e.createElement("div",{style:{padding:50}},e.createElement(i,{...t},e.createElement(r,null,e.createElement(l,{as:"h1"},"H1")),e.createElement(r,{current:!0},e.createElement(l,{as:"small"},"Small")),e.createElement(r,null,e.createElement(l,{as:"h2"},"H2")))),"CustomTitles"),P={render:n(t=>e.createElement("div",{style:{padding:50}},e.createElement(i,{...t,direction:"column"},e.createElement(r,null,e.createElement(l,null,"Order placed"),e.createElement("p",null,"New Mens Addidas Ultra Boost"),e.createElement("p",null,"Order total $220")),e.createElement(r,{current:!0},e.createElement(l,null,"Preparing for shipment"),e.createElement("p",null,"We will notify you once it ships.")),e.createElement(r,null,e.createElement(l,null,"Delivered"),e.createElement("p",null,"Guaranteed Wednesday, October 09.")))),"render"),name:"Vertical (column)"},T=n(t=>{const a=n(()=>{const y=n((s,S=0)=>Array.from(Array(s-S+1)).map((N,g)=>S+g),"range"),[o,c]=u.useState(2),d=n(()=>o<1?"upcoming":(o>4,"complete"),"defaultState");return e.createElement("div",{style:{padding:50}},e.createElement(i,{...t,defaultState:d()},y(4,1).map(s=>e.createElement(r,{current:o===s,key:s},"Step ",s))),e.createElement("p",null,e.createElement(_,{onClick:n(()=>{c(Math.max(1,o-1))},"onClick")},"Back")," ",e.createElement(_,{onClick:n(()=>{c(Math.min(4,o+1))},"onClick")},"Forward")))},"TestingComponent");return e.createElement(e.Fragment,null,e.createElement(a,null))},"Controlled");E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step current>Transit</Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper {...args} defaultState="upcoming">
                <Step>
                    <Title>Paid</Title>
                    July 3rd
                </Step>
                <Step>
                    <Title>Shipped</Title>
                    July 4th
                </Step>
                <Step>
                    <Title>Transit</Title>
                    July 5th
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    July 6th
                </Step>
            </EbayProgressStepper>
        </div>,
  name: "Default state: upcoming"
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper {...args} defaultState="complete">
                <Step>Started</Step>
                <Step>Shipped</Step>
                <Step>Transit</Step>
                <Step>Delivered</Step>
            </EbayProgressStepper>
        </div>,
  name: "Default state: complete"
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step state="attention" current>
                Blocked
            </Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>
                <Title as="h1">H1</Title>
            </Step>
            <Step current>
                <Title as="small">Small</Title>
            </Step>
            <Step>
                <Title as="h2">H2</Title>
            </Step>
        </EbayProgressStepper>
    </div>`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper {...args} direction="column">
                <Step>
                    <Title>Order placed</Title>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </Step>
                <Step current>
                    <Title>Preparing for shipment</Title>
                    <p>We will notify you once it ships.</p>
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    <p>Guaranteed Wednesday, October 09.</p>
                </Step>
            </EbayProgressStepper>
        </div>,
  name: "Vertical (column)"
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const TestingComponent: FC = () => {
    const MIN = 1;
    const MAX = 4;
    const range = (to: number, from = 0): number[] => Array.from(Array(to - from + 1)).map((v, k) => from + k);
    const [currentNumber, setCurrentNumber] = useState<number>(2);
    const defaultState = (): StepState => {
      if (currentNumber < MIN) return "upcoming";
      if (currentNumber > MAX) return "complete";
      return "complete";
    };
    return <div style={{
      padding: 50
    }}>
                <EbayProgressStepper {...args} defaultState={defaultState()}>
                    {range(MAX, MIN).map(n => <Step current={currentNumber === n} key={n}>
                            Step {n}
                        </Step>)}
                </EbayProgressStepper>
                <p>
                    <EbayButton onClick={() => {
          setCurrentNumber(Math.max(MIN, currentNumber - 1));
        }}>
                        Back
                    </EbayButton>
                    &nbsp;
                    <EbayButton onClick={() => {
          setCurrentNumber(Math.min(MAX, currentNumber + 1));
        }}>
                        Forward
                    </EbayButton>
                </p>
            </div>;
  };
  return <>
            <TestingComponent />
        </>;
}`,...T.parameters?.docs?.source}}};const H=["Default","DefaultStateUpcoming","DefaultStateComplete","Blocked","CustomTitles","VerticalColumn","Controlled"];export{h as Blocked,T as Controlled,v as CustomTitles,E as Default,f as DefaultStateComplete,b as DefaultStateUpcoming,P as VerticalColumn,H as __namedExportsOrder,F as default};
