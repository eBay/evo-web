import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./promotion-12-C9VK-I6p.js";function o(){return(o=t((()=>{})))()}function s({tone:e=`neutral`,emphasis:t=`default`,icon:n,className:r,children:i,...a}){return(0,l.jsxs)(`span`,{...a,className:(0,c.default)(`signal`,`signal--${e}`,t!=="default"&&`signal--${t}`,r),children:[n,i]})}var c,l;function u(){return(u=t((()=>{c=e(r(),1),o(),l=n();try{s.displayName=`EvoSignal`,s.__docgenInfo={description:`Signals are non-interactive, informational elements that show data-backed
recommendations to help users make informed decisions.

\`EvoSignal\` renders a \`<span>\` with a tone color. Keep the visible text
descriptive so it communicates the meaning without color alone. Native
\`<span>\` attributes and a React 19 \`ref\` pass through.

## Usage

\`\`\`tsx
import { EvoSignal } from "@evo-web/react/signal";

<EvoSignal tone="positive">Listed today</EvoSignal>
\`\`\`

### Tone, emphasis and icon

Use \`emphasis\` for visual weight. The icon renders before the label.

\`\`\`tsx
import { EvoIconPromotion12 } from "@evo-web/react/icons/promotion-12";

<EvoSignal tone="positive" emphasis="strong" icon={<EvoIconPromotion12 />}>
  Listed today
</EvoSignal>
\`\`\``,displayName:`EvoSignal`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/signal/signal.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`evo-react/src/signal/types.ts`,name:`TypeLiteral`}],description:`Visible text that communicates the signal without relying on color.`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},tone:{defaultValue:{value:`neutral`},declarations:[{fileName:`evo-react/src/signal/types.ts`,name:`TypeLiteral`}],description:'Sets the signal color and meaning. Defaults to `"neutral"`.',name:`tone`,required:!1,tags:{},type:{name:`enum`,raw:`SignalTone`,value:[{value:`"information"`},{value:`"attention"`},{value:`"neutral"`},{value:`"positive"`},{value:`"warning"`}]}},emphasis:{defaultValue:{value:`default`},declarations:[{fileName:`evo-react/src/signal/types.ts`,name:`TypeLiteral`}],description:'Visual emphasis. Defaults to `"default"`.',name:`emphasis`,required:!1,tags:{},type:{name:`enum`,raw:`SignalEmphasis`,value:[{value:`"strong"`},{value:`"default"`},{value:`"subtle"`}]}},icon:{defaultValue:null,declarations:[{fileName:`evo-react/src/signal/types.ts`,name:`TypeLiteral`}],description:"Optional leading icon, rendered before the label. Pass a 12px icon such as\n`<EvoIconPromotion12 />`. Icons are `aria-hidden` unless `a11yText` is\ngiven, so don't pass it.",name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Text signal for a data-backed recommendation.`}}}catch{}})))()}var d,f,p,m,h;function g(){return(g=t((()=>{u(),i(),d=n(),f={title:`Graphics & Icons/EvoSignal`,component:s,argTypes:{tone:{control:`select`,options:[`neutral`,`information`,`positive`,`warning`,`attention`],description:`Color tone.`,table:{defaultValue:{summary:`neutral`}}},emphasis:{control:`radio`,options:[`default`,`strong`,`subtle`],table:{defaultValue:{summary:`default`}}},icon:{control:!1,description:`Optional leading 12px icon, rendered before the label. See the WithIcon story.`},children:{control:`text`}},args:{children:`Price trend is stable`,tone:`neutral`,emphasis:`default`}},p={},m={args:{tone:`positive`,emphasis:`strong`,icon:(0,d.jsx)(a,{})}},h=[`Default`,`WithIcon`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source},description:{story:`The visible text communicates the recommendation when color is unavailable.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "positive",
    emphasis: "strong",
    icon: <EvoIconPromotion12 />
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as Default,m as WithIcon,h as __namedExportsOrder,f as default};