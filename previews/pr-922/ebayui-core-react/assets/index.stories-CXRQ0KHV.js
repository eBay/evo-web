import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{n as a,t as o}from"./ebay-button-B_FEPJ7h.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./ebay-icon-stepper-upcoming-24-C7p1CdDO.js";function p(e,t){let n=e.findIndex(e=>e.props.current);if(n===-1)switch(t){case`complete`:return e.length-1;case`upcoming`:return 0}return n}function m(e,t){if(e<=t)return`complete`;if(e>t)return`upcoming`}var h,g,_;function v(){return(v=t((()=>{h=e(n()),g=e(r()),_=({direction:e=`row`,defaultState:t=`active`,children:n,className:r,...i})=>{let a=h.Children.toArray(n),o=p(a,t);return h.createElement(`div`,{...i,className:(0,g.default)(r,`progress-stepper`,{"progress-stepper--vertical":e===`column`})},h.createElement(`div`,{role:`list`,className:`progress-stepper__items`},a.map((e,t)=>h.createElement(h.Fragment,{key:t},t>0&&h.createElement(`hr`,{className:`progress-stepper__separator`,role:`presentation`}),(0,h.cloneElement)(e,{state:m(t,o),...e.props,current:o===t})))))};try{_.displayName=`ebayprogressstepper`,_.__docgenInfo={description:``,displayName:`ebayprogressstepper`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx`,methods:[],props:{direction:{defaultValue:{value:`row`},declarations:[{fileName:`ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx`,name:`TypeLiteral`}],description:``,name:`direction`,required:!1,tags:{},type:{name:`StepperDirection | undefined`}},defaultState:{defaultValue:{value:`active`},declarations:[{fileName:`ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx`,name:`TypeLiteral`}],description:``,name:`defaultState`,required:!1,tags:{},type:{name:`StepState | undefined`}},className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-stepper/ebay-progress-stepper.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var y,b,x,S;function C(){return(C=t((()=>{y=e(n()),b=e(r()),c(),u(),l(),D(),x={complete:d,attention:s,upcoming:f,active:d},S=({current:e,state:t=`complete`,children:n,className:r,...i})=>{let a=y.Children.toArray(n),o=a.find(e=>e.type===T),s=a.filter(e=>e.type!==T),c=(0,b.default)(r,`progress-stepper__item`,{"progress-stepper__item--attention":t===`attention`}),l=x[t],u=e?`current`:t;return y.createElement(`div`,{...i,className:c,role:`listitem`,"aria-current":e?`step`:void 0},y.createElement(`div`,{className:`progress-stepper__icon`},y.createElement(l,{"aria-label":u})),y.createElement(`div`,{className:`progress-stepper__text`},o,s))};try{S.displayName=`ebayprogressstep`,S.__docgenInfo={description:``,displayName:`ebayprogressstep`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx`,methods:[],props:{state:{defaultValue:{value:`complete`},declarations:[{fileName:`ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx`,name:`TypeLiteral`}],description:``,name:`state`,required:!1,tags:{},type:{name:`StepState | undefined`}},current:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx`,name:`TypeLiteral`}],description:``,name:`current`,required:!1,tags:{},type:{name:`boolean | undefined`}},className:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-stepper/ebay-progress-step.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var w,T;function E(){return(E=t((()=>{w=n(),T=({as:e=`h4`,children:t})=>(0,w.createElement)(e,{},t);try{T.displayName=`ebayprogresstitle`,T.__docgenInfo={description:``,displayName:`ebayprogresstitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-stepper/ebay-progress-title.tsx`,methods:[],props:{as:{defaultValue:{value:`h4`},declarations:[{fileName:`ebayui-core-react/src/ebay-progress-stepper/ebay-progress-title.tsx`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function D(){return(D=t((()=>{v(),C(),E()})))()}var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{O=e(n()),o(),D(),k=i(),A={title:`progress/ebay-progress-stepper`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{direction:{description:"Either `column` or `row` (default). Will display stepper as a vertical column or horizontal row.",options:[`column`,`row`],control:{type:`select`}},defaultState:{description:"`complete`: all items will be in `complete` state by default, `upcoming`:all items will be in `upcoming` state, `attention`: current item will be shown as blocked. Otherwise, default state (`active`) will change items based on the current item (defaults to first step if not set).",options:[`complete`,`complete`,`upcoming`,`upcoming`,`attention`,`active`],control:{type:`select`}},current:{description:"The current step. Only first step that has this property will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any step, then will render based on `defaultState` property",control:`boolean`},as:{description:"HTML tag to use instead of `h4`",control:`text`},state:{description:`State of a progress step`,options:[`complete`,`upcoming`,`attention`,`active`],control:{type:`select`}}}},j=e=>(0,k.jsx)(`div`,{style:{padding:50},children:(0,k.jsxs)(_,{...e,children:[(0,k.jsx)(S,{children:`Started`}),(0,k.jsx)(S,{children:`Shipped`}),(0,k.jsx)(S,{current:!0,children:`Transit`}),(0,k.jsx)(S,{children:`Delivered`})]})}),M={render:e=>(0,k.jsx)(`div`,{style:{padding:50},children:(0,k.jsxs)(_,{...e,defaultState:`upcoming`,children:[(0,k.jsxs)(S,{children:[(0,k.jsx)(T,{children:`Paid`}),`July 3rd`]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(T,{children:`Shipped`}),`July 4th`]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(T,{children:`Transit`}),`July 5th`]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(T,{children:`Delivered`}),`July 6th`]})]})}),name:`Default state: upcoming`},N={render:e=>(0,k.jsx)(`div`,{style:{padding:50},children:(0,k.jsxs)(_,{...e,defaultState:`complete`,children:[(0,k.jsx)(S,{children:`Started`}),(0,k.jsx)(S,{children:`Shipped`}),(0,k.jsx)(S,{children:`Transit`}),(0,k.jsx)(S,{children:`Delivered`})]})}),name:`Default state: complete`},P=e=>(0,k.jsx)(`div`,{style:{padding:50},children:(0,k.jsxs)(_,{...e,children:[(0,k.jsx)(S,{children:`Started`}),(0,k.jsx)(S,{children:`Shipped`}),(0,k.jsx)(S,{state:`attention`,current:!0,children:`Blocked`}),(0,k.jsx)(S,{children:`Delivered`})]})}),F=e=>(0,k.jsx)(`div`,{style:{padding:50},children:(0,k.jsxs)(_,{...e,children:[(0,k.jsx)(S,{children:(0,k.jsx)(T,{as:`h1`,children:`H1`})}),(0,k.jsx)(S,{current:!0,children:(0,k.jsx)(T,{as:`small`,children:`Small`})}),(0,k.jsx)(S,{children:(0,k.jsx)(T,{as:`h2`,children:`H2`})})]})}),I={render:e=>(0,k.jsx)(`div`,{style:{padding:50},children:(0,k.jsxs)(_,{...e,direction:`column`,children:[(0,k.jsxs)(S,{children:[(0,k.jsx)(T,{children:`Order placed`}),(0,k.jsx)(`p`,{children:`New Mens Addidas Ultra Boost`}),(0,k.jsx)(`p`,{children:`Order total $220`})]}),(0,k.jsxs)(S,{current:!0,children:[(0,k.jsx)(T,{children:`Preparing for shipment`}),(0,k.jsx)(`p`,{children:`We will notify you once it ships.`})]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(T,{children:`Delivered`}),(0,k.jsx)(`p`,{children:`Guaranteed Wednesday, October 09.`})]})]})}),name:`Vertical (column)`},L=e=>(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(()=>{let t=(e,t=0)=>Array.from(Array(e-t+1)).map((e,n)=>t+n),[n,r]=(0,O.useState)(2),i=()=>n<1?`upcoming`:`complete`;return(0,k.jsxs)(`div`,{style:{padding:50},children:[(0,k.jsx)(_,{...e,defaultState:i(),children:t(4,1).map(e=>(0,k.jsxs)(S,{current:n===e,children:[`Step `,e]},e))}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(a,{onClick:()=>{r(Math.max(1,n-1))},children:`Back`}),`\xA0`,(0,k.jsx)(a,{onClick:()=>{r(Math.min(4,n+1))},children:`Forward`})]})]})},{})}),R=[`Default`,`DefaultStateUpcoming`,`DefaultStateComplete`,`Blocked`,`CustomTitles`,`VerticalColumn`,`Controlled`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 50
}}>
        <EbayProgressStepper {...args}>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step current>Transit</Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
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
}`,...L.parameters?.docs?.source}}}})))()}z();export{P as Blocked,L as Controlled,F as CustomTitles,j as Default,N as DefaultStateComplete,M as DefaultStateUpcoming,I as VerticalColumn,R as __namedExportsOrder,A as default};