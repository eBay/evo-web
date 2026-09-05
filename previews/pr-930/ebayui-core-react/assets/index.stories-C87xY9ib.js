var k=Object.defineProperty;var a=(t,n)=>k(t,"name",{value:n,configurable:!0});import{r as u,R as e,c as C}from"./iframe-DXKVC7Wu.js";import{E as _}from"./button-BAvxCJp2.js";import{E as w,a as x,b as D}from"./ebay-icon-stepper-upcoming-24-D9xpt2h6.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";const l=a(({direction:t="row",defaultState:n="active",children:c,className:m,...y})=>{const p=u.Children.toArray(c),i=I(p,n);return e.createElement("div",{...y,className:C(m,"progress-stepper",{"progress-stepper--vertical":t==="column"})},e.createElement("div",{role:"list",className:"progress-stepper__items"},p.map((d,o)=>e.createElement(u.Fragment,{key:o},o>0&&e.createElement("hr",{className:"progress-stepper__separator",role:"presentation"}),u.cloneElement(d,{state:M(o,i),...d.props,current:i===o})))))},"EbayProgressStepper");function I(t,n){const c=t.findIndex(m=>m.props.current);if(c===-1)switch(n){case"complete":return t.length-1;case"upcoming":return 0}return c}a(I,"currentIndexByDefaultState");function M(t,n){if(t<=n)return"complete";if(t>n)return"upcoming"}a(M,"stepState");try{l.displayName="ebayprogressstepper",l.__docgenInfo={description:"",displayName:"ebayprogressstepper",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx",methods:[],props:{direction:{defaultValue:{value:"row"},declarations:[{fileName:"ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx",name:"TypeLiteral"}],description:"",name:"direction",required:!1,tags:{},type:{name:"StepperDirection"}},defaultState:{defaultValue:{value:"active"},declarations:[{fileName:"ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx",name:"TypeLiteral"}],description:"",name:"defaultState",required:!1,tags:{},type:{name:"StepState"}},className:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const A={complete:w,attention:D,upcoming:x,active:w},r=a(({current:t,state:n="complete",children:c,className:m,...y})=>{const p=u.Children.toArray(c),i=p.find(g=>g.type===s),d=p.filter(g=>g.type!==s),o=C(m,"progress-stepper__item",{"progress-stepper__item--attention":n==="attention"}),S=A[n],N=t?"current":n;return e.createElement("div",{...y,className:o,role:"listitem","aria-current":t?"step":void 0},e.createElement("div",{className:"progress-stepper__icon"},e.createElement(S,{"aria-label":N})),e.createElement("div",{className:"progress-stepper__text"},i,d))},"EbayProgressStep");try{r.displayName="ebayprogressstep",r.__docgenInfo={description:"",displayName:"ebayprogressstep",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx",methods:[],props:{state:{defaultValue:{value:"complete"},declarations:[{fileName:"ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx",name:"TypeLiteral"}],description:"",name:"state",required:!1,tags:{},type:{name:"StepState"}},current:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx",name:"TypeLiteral"}],description:"",name:"current",required:!1,tags:{},type:{name:"boolean"}},className:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const s=a(({as:t="h4",children:n})=>u.createElement(t,{},n),"EbayProgressTitle");try{s.displayName="ebayprogresstitle",s.__docgenInfo={description:"",displayName:"ebayprogresstitle",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-stepper/ebay-progress-title.tsx",methods:[],props:{as:{defaultValue:{value:"h4"},declarations:[{fileName:"ebayui-core-react/src/ebay-progress-stepper/ebay-progress-title.tsx",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const W={title:"progress/ebay-progress-stepper",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{direction:{description:"Either `column` or `row` (default). Will display stepper as a vertical column or horizontal row.",options:["column","row"],control:{type:"select"}},defaultState:{description:"`complete`: all items will be in `complete` state by default, `upcoming`:all items will be in `upcoming` state, `attention`: current item will be shown as blocked. Otherwise, default state (`active`) will change items based on the current item (defaults to first step if not set).",options:["complete","complete","upcoming","upcoming","attention","active"],control:{type:"select"}},current:{description:"The current step. Only first step that has this property will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any step, then will render based on `defaultState` property",control:"boolean"},as:{description:"HTML tag to use instead of `h4`",control:"text"},state:{description:"State of a progress step",options:["complete","upcoming","attention","active"],control:{type:"select"}}}},b=a(t=>e.createElement("div",{style:{padding:50}},e.createElement(l,{...t},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,{current:!0},"Transit"),e.createElement(r,null,"Delivered"))),"Default"),E={render:a(t=>e.createElement("div",{style:{padding:50}},e.createElement(l,{...t,defaultState:"upcoming"},e.createElement(r,null,e.createElement(s,null,"Paid"),"July 3rd"),e.createElement(r,null,e.createElement(s,null,"Shipped"),"July 4th"),e.createElement(r,null,e.createElement(s,null,"Transit"),"July 5th"),e.createElement(r,null,e.createElement(s,null,"Delivered"),"July 6th"))),"render"),name:"Default state: upcoming"},f={render:a(t=>e.createElement("div",{style:{padding:50}},e.createElement(l,{...t,defaultState:"complete"},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,null,"Transit"),e.createElement(r,null,"Delivered"))),"render"),name:"Default state: complete"},h=a(t=>e.createElement("div",{style:{padding:50}},e.createElement(l,{...t},e.createElement(r,null,"Started"),e.createElement(r,null,"Shipped"),e.createElement(r,{state:"attention",current:!0},"Blocked"),e.createElement(r,null,"Delivered"))),"Blocked"),v=a(t=>e.createElement("div",{style:{padding:50}},e.createElement(l,{...t},e.createElement(r,null,e.createElement(s,{as:"h1"},"H1")),e.createElement(r,{current:!0},e.createElement(s,{as:"small"},"Small")),e.createElement(r,null,e.createElement(s,{as:"h2"},"H2")))),"CustomTitles"),T={render:a(t=>e.createElement("div",{style:{padding:50}},e.createElement(l,{...t,direction:"column"},e.createElement(r,null,e.createElement(s,null,"Order placed"),e.createElement("p",null,"New Mens Addidas Ultra Boost"),e.createElement("p",null,"Order total $220")),e.createElement(r,{current:!0},e.createElement(s,null,"Preparing for shipment"),e.createElement("p",null,"We will notify you once it ships.")),e.createElement(r,null,e.createElement(s,null,"Delivered"),e.createElement("p",null,"Guaranteed Wednesday, October 09.")))),"render"),name:"Vertical (column)"},P=a(t=>{const n=a(()=>{const y=a((o,S=0)=>Array.from(Array(o-S+1)).map((N,g)=>S+g),"range"),[p,i]=u.useState(2),d=a(()=>p<1?"upcoming":(p>4,"complete"),"defaultState");return e.createElement("div",{style:{padding:50}},e.createElement(l,{...t,defaultState:d()},y(4,1).map(o=>e.createElement(r,{current:p===o,key:o},"Step ",o))),e.createElement("p",null,e.createElement(_,{onClick:a(()=>{i(Math.max(1,p-1))},"onClick")},"Back")," ",e.createElement(_,{onClick:a(()=>{i(Math.min(4,p+1))},"onClick")},"Forward")))},"TestingComponent");return e.createElement(e.Fragment,null,e.createElement(n,null))},"Controlled"),F=["Default","DefaultStateUpcoming","DefaultStateComplete","Blocked","CustomTitles","VerticalColumn","Controlled"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step current>Transit</Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    </div>`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
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
}`,...P.parameters?.docs?.source}}};export{h as Blocked,P as Controlled,v as CustomTitles,b as Default,f as DefaultStateComplete,E as DefaultStateUpcoming,T as VerticalColumn,F as __namedExportsOrder,W as default};
