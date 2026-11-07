import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./button-DRcDBJCe.js";import{n as s,t as c}from"./icon-button-CHwG1WMR.js";import{t as l}from"./link-DJNtH3mE.js";import{n as u,t as d}from"./close-16-DRF7KPqH.js";import{i as ee,n as te,r as ne,t as re}from"./lightbulb-24-3qvojrJF.js";function f({children:e,a11yText:t,a11yDismissText:n,dismiss:r}){let i=(0,m.useMemo)(()=>({a11yText:t,a11yDismissText:n,dismiss:r}),[t,n,r]);return(0,h.jsx)(g,{value:i,children:e})}function p(){let e=(0,m.use)(g);if(!e)throw Error(`Education notice regions must be inside EvoEducationNotice`);return e}var m,h,g;function _(){return(_=t((()=>{m=n(),h=r(),g=(0,m.createContext)(null);try{f.displayName=`EducationNoticeProvider`,f.__docgenInfo={description:``,displayName:`EducationNoticeProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/education-notice/context.tsx`,methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/context.tsx`,name:`TypeLiteral`}],description:``,name:`a11yText`,required:!0,tags:{},type:{name:`string`}},a11yDismissText:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/context.tsx`,name:`TypeLiteral`}],description:``,name:`a11yDismissText`,required:!1,tags:{},type:{name:`string`}},dismiss:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/context.tsx`,name:`TypeLiteral`}],description:``,name:`dismiss`,required:!0,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}}},tags:{}}}catch{}})))()}function v(){return(v=t((()=>{})))()}function y({a11yDismissText:e,a11yRoleDescription:t=`Notice`,a11yText:n=`Education notice`,children:r,className:i,dismissed:a,onDismiss:o,ref:s,variant:c=`none`,...l}){let[u,d]=(0,b.useState)(!1);return(a===void 0?u:a)?null:(0,S.jsx)(f,{a11yText:n,a11yDismissText:e,dismiss:e=>{a===void 0&&d(!0),o?.(e)},children:(0,S.jsx)(`section`,{...l,ref:s,"aria-label":n,"aria-roledescription":t,className:(0,x.default)(`education-notice`,c===`prominent`&&`education-notice--prominent`,i),children:r})})}var b,x,S;function C(){return(C=t((()=>{b=n(),x=e(i(),1),_(),v(),S=r();try{y.displayName=`EvoEducationNotice`,y.__docgenInfo={description:`Education notices explain a concept or feature within a page.

\`a11yText\` names the notice region. Compose
\`EvoEducationNoticeHeader\` with \`EvoEducationNoticeTitle\`, followed by
\`EvoEducationNoticeMain\` and an optional \`EvoEducationNoticeFooter\`.
Include \`EvoEducationNoticeIcon\` in the header to show an icon. The header
can also contain the optional dismiss button.

## Usage

\`\`\`tsx
import {
  EvoEducationNotice,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
  EvoEducationNoticeIcon,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "@evo-web/react/education-notice";

<EvoEducationNotice a11yText="Listing guidance">
  <EvoEducationNoticeHeader>
    <EvoEducationNoticeIcon />
    <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
  </EvoEducationNoticeHeader>
  <EvoEducationNoticeMain>Describe the condition.</EvoEducationNoticeMain>
  <EvoEducationNoticeFooter>
    <a href="/seller-center">Read listing tips</a>
  </EvoEducationNoticeFooter>
</EvoEducationNotice>
\`\`\``,displayName:`EvoEducationNotice`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/education-notice/education-notice.tsx`,methods:[],props:{a11yText:{defaultValue:{value:`Education notice`},declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:'Accessible name of the notice region.\nEnglish default to be overridden is `"Education notice"`.',name:`a11yText`,required:!1,tags:{},type:{name:`string`}},a11yRoleDescription:{defaultValue:{value:`Notice`},declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:'Describes the region role in the page language. English default to be overridden is `"Notice"`.',name:`a11yRoleDescription`,required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:{value:`none`},declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:'Makes the notice background more prominent. Defaults to `"none"`.',name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`EducationNoticeVariant`,value:[{value:`"none"`},{value:`"prominent"`}]}},a11yDismissText:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:"Adds a dismiss button with this accessible name to `EvoEducationNoticeHeader`; include that header to make the notice dismissible.",name:`a11yDismissText`,required:!1,tags:{},type:{name:`string`}},dismissed:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:"Omit to start visible and let the dismiss button remove the notice.\nPassing `false` makes the notice controlled: it stays rendered until the\nparent sets `true` from `onDismiss`.",name:`dismissed`,required:!1,tags:{},type:{name:`boolean`}},onDismiss:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:`Called when the user activates the dismiss button, before the notice
unmounts. The dismiss button had focus and leaves the DOM with the
notice, so move focus here to an element that stays on the page.`,name:`onDismiss`,required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}}},tags:{summary:`Educational notice with title, content, and optional dismissal.`}}}catch{}})))()}function w({children:e,className:t,ref:n,...r}){let i=p();return(0,E.jsxs)(`div`,{...r,ref:n,className:(0,T.default)(`education-notice__header`,t),children:[e,i.a11yDismissText&&(0,E.jsx)(c,{a11yText:i.a11yDismissText,size:`small`,className:`education-notice__dismiss`,onClick:i.dismiss,children:(0,E.jsx)(d,{})})]})}var T,E;function D(){return(D=t((()=>{T=e(i(),1),u(),s(),_(),E=r();try{w.displayName=`EvoEducationNoticeHeader`,w.__docgenInfo={description:"Header for the notice title and optional dismiss button. Place\n`EvoEducationNoticeIcon` inside it to render an icon.",displayName:`EvoEducationNoticeHeader`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/education-notice/education-notice-header.tsx`,methods:[],props:{},tags:{summary:`Header of an education notice.`}}}catch{}})))()}function O({icon:e,a11yText:t,prominent:n=!1}){let r=p();return e??(0,k.jsx)(re,{a11yText:t??r.a11yText,a11yVariant:`label`,prominent:n})}var k;function A(){return(A=t((()=>{te(),_(),k=r();try{O.displayName=`EvoEducationNoticeIcon`,O.__docgenInfo={description:"Optional icon for an education notice. Place it inside\n`EvoEducationNoticeHeader` to render the default lightbulb. Pass a custom\nEvo icon with `icon`, or omit this component for a notice without an icon.\n\nThe default lightbulb uses the notice's accessible name unless `a11yText`\noverrides it. Set `prominent` to emphasize the default lightbulb. Custom\nicons are rendered as supplied, so set their own `a11yText` and `prominent`\nprops when needed.",displayName:`EvoEducationNoticeIcon`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/education-notice/education-notice-icon.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:`Custom Evo icon. Configure its accessible label and prominent style on the icon itself.`,name:`icon`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:'Accessible label for the default lightbulb. Defaults to the notice\'s `a11yText`; the English default to be overridden is `"Education notice"`.',name:`a11yText`,required:!1,tags:{},type:{name:`string`}},prominent:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:`Makes the default lightbulb prominent.`,name:`prominent`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Optional icon for an education notice.`}}}catch{}})))()}function j({as:e=`h2`,children:t,className:n,ref:r,...i}){return(0,N.jsx)(e,{...i,ref:r,className:(0,M.default)(`education-notice__title`,n),children:t})}var M,N;function P(){return(P=t((()=>{M=e(i(),1),N=r();try{j.displayName=`EvoEducationNoticeTitle`,j.__docgenInfo={description:"Heading inside `EvoEducationNoticeHeader`; choose `as` for the page hierarchy.",displayName:`EvoEducationNoticeTitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/education-notice/education-notice-title.tsx`,methods:[],props:{as:{defaultValue:{value:`h2`},declarations:[{fileName:`evo-react/src/education-notice/types.ts`,name:`TypeLiteral`}],description:'Heading level used for the notice title. Defaults to `"h2"`.',name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`,value:[{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`}]}}},tags:{summary:`Heading for an education notice.`}}}catch{}})))()}function F({children:e,className:t,ref:n,...r}){return(0,L.jsx)(`div`,{...r,ref:n,className:(0,I.default)(`education-notice__main`,t),children:e})}var I,L;function R(){return(R=t((()=>{I=e(i(),1),L=r();try{F.displayName=`EvoEducationNoticeMain`,F.__docgenInfo={description:"Main `div` for the explanatory content of `EvoEducationNotice`.",displayName:`EvoEducationNoticeMain`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/education-notice/education-notice-main.tsx`,methods:[],props:{},tags:{summary:`Main content region of an education notice.`}}}catch{}})))()}function z({children:e,className:t,ref:n,...r}){return(0,V.jsx)(`div`,{...r,ref:n,className:(0,B.default)(`education-notice__footer`,t),children:e})}var B,V;function H(){return(H=t((()=>{B=e(i(),1),l(),V=r();try{z.displayName=`EvoEducationNoticeFooter`,z.__docgenInfo={description:'Optional footer `div` for additional links or actions. Skin styles links\nhere; give a `button` action `className="fake-link"` for Skin link styling.',displayName:`EvoEducationNoticeFooter`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/education-notice/education-notice-footer.tsx`,methods:[],props:{},tags:{summary:`Footer for an education notice.`}}}catch{}})))()}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{U=n(),a(),ee(),C(),H(),D(),A(),R(),P(),W=r(),{useArgs:G}=__STORYBOOK_MODULE_PREVIEW_API__,K={title:`Notices & Tips/EvoEducationNotice`,component:y,subcomponents:{EvoEducationNoticeHeader:w,EvoEducationNoticeIcon:O,EvoEducationNoticeTitle:j,EvoEducationNoticeMain:F,EvoEducationNoticeFooter:z},argTypes:{a11yText:{control:`text`,type:{name:`string`,required:!0},table:{defaultValue:{summary:`Education notice`}}},a11yDismissText:{control:`text`},variant:{control:`select`,options:[`none`,`prominent`]},dismissed:{control:!1},onDismiss:{action:`onDismiss`,table:{category:`Events`}}},args:{a11yText:`Listing guidance`,variant:`none`}},q={render:e=>(0,W.jsxs)(y,{...e,children:[(0,W.jsxs)(w,{children:[(0,W.jsx)(O,{}),(0,W.jsx)(j,{children:`Write a clear title`})]}),(0,W.jsx)(F,{children:`Describe the item, its condition, and what is included.`})]})},J={render:e=>(0,W.jsxs)(y,{...e,children:[(0,W.jsxs)(w,{children:[(0,W.jsx)(O,{}),(0,W.jsx)(j,{children:`Write a clear title`})]}),(0,W.jsx)(F,{children:`Describe the item, its condition, and what is included.`}),(0,W.jsx)(z,{children:(0,W.jsx)(`a`,{href:`/seller-center`,children:`Read listing tips`})})]})},Y={render:e=>(0,W.jsxs)(y,{...e,children:[(0,W.jsxs)(w,{children:[(0,W.jsx)(O,{icon:(0,W.jsx)(ne,{a11yText:`Listing insight`,a11yVariant:`label`,prominent:!0})}),(0,W.jsx)(j,{children:`Improve your listing`})]}),(0,W.jsx)(F,{children:`Add clear photos from several angles.`})]})},X={render:e=>(0,W.jsxs)(y,{...e,children:[(0,W.jsx)(w,{children:(0,W.jsx)(j,{children:`Write a clear title`})}),(0,W.jsx)(F,{children:`Describe the item, its condition, and what is included.`})]})},Z={args:{a11yDismissText:`Dismiss guidance`,dismissed:!1},argTypes:{dismissed:{control:`boolean`}},render:()=>{let[e,t]=G(),n=(0,U.useRef)(null);return(0,W.jsxs)(`div`,{style:{alignItems:`flex-start`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,W.jsxs)(y,{...e,onDismiss:r=>{e.onDismiss?.(r),n.current?.focus(),t({dismissed:!0})},children:[(0,W.jsxs)(w,{children:[(0,W.jsx)(O,{}),(0,W.jsx)(j,{children:`Write a clear title`})]}),(0,W.jsx)(F,{children:`Describe the item, its condition, and what is included.`})]}),(0,W.jsx)(o,{ref:n,type:`button`,onClick:()=>t({dismissed:!1}),children:`Show listing guidance`})]})}},Q=[`Default`,`WithFooter`,`CustomIcon`,`Iconless`,`Controlled`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeIcon />
        <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Describe the item, its condition, and what is included.
      </EvoEducationNoticeMain>
    </EvoEducationNotice>
}`,...q.parameters?.docs?.source},description:{story:"Including `EvoEducationNoticeIcon` adds the default lightbulb.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeIcon />
        <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Describe the item, its condition, and what is included.
      </EvoEducationNoticeMain>
      <EvoEducationNoticeFooter>
        <a href="/seller-center">Read listing tips</a>
      </EvoEducationNoticeFooter>
    </EvoEducationNotice>
}`,...J.parameters?.docs?.source},description:{story:`Add footer links to direct readers to more detailed guidance.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeIcon icon={<EvoIconLightningBolt24 a11yText="Listing insight" a11yVariant="label" prominent />} />
        <EvoEducationNoticeTitle>Improve your listing</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Add clear photos from several angles.
      </EvoEducationNoticeMain>
    </EvoEducationNotice>
}`,...Y.parameters?.docs?.source},description:{story:`Pass a custom Evo icon and set its accessible label and prominence on the icon.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <EvoEducationNotice {...args}>
      <EvoEducationNoticeHeader>
        <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
      </EvoEducationNoticeHeader>
      <EvoEducationNoticeMain>
        Describe the item, its condition, and what is included.
      </EvoEducationNoticeMain>
    </EvoEducationNotice>
}`,...X.parameters?.docs?.source},description:{story:"Omit `EvoEducationNoticeIcon` to show the notice without an icon.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    a11yDismissText: "Dismiss guidance",
    dismissed: false
  },
  argTypes: {
    dismissed: {
      control: "boolean"
    }
  },
  render: () => {
    const [args, updateArgs] = useArgs<EvoEducationNoticeProps>();
    const restoreRef = useRef<HTMLButtonElement>(null);
    return <div style={{
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <EvoEducationNotice {...args} onDismiss={event => {
        args.onDismiss?.(event);
        restoreRef.current?.focus();
        updateArgs({
          dismissed: true
        });
      }}>
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeIcon />
            <EvoEducationNoticeTitle>
              Write a clear title
            </EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
          <EvoEducationNoticeMain>
            Describe the item, its condition, and what is included.
          </EvoEducationNoticeMain>
        </EvoEducationNotice>
        <EvoButton ref={restoreRef} type="button" onClick={() => updateArgs({
        dismissed: false
      })}>
          Show listing guidance
        </EvoButton>
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:"This controlled notice sets `dismissed` to true in `onDismiss` before\nunmounting. It moves focus to the persistent button that restores it.",...Z.parameters?.docs?.description}}}})))()}$();export{Z as Controlled,Y as CustomIcon,q as Default,X as Iconless,J as WithFooter,Q as __namedExportsOrder,K as default};