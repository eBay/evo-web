import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./button-C1du1mzm.js";function o(){return(o=t((()=>{})))()}function s({className:e,style:t,ref:n,...r}){return(0,l.jsxs)(`span`,{className:(0,c.default)(`switch`,e),style:t,children:[(0,l.jsx)(`input`,{...r,ref:n,type:`checkbox`,role:`switch`,className:`switch__control`}),(0,l.jsx)(`span`,{className:`switch__button`})]})}var c,l;function u(){return(u=t((()=>{c=e(r(),1),o(),l=n();try{s.displayName=`EvoSwitch`,s.__docgenInfo={description:`A switch turns a setting on or off. Use it for changes that apply as soon as
it is toggled, typically handled by client-side JavaScript, rather than for
values collected and submitted with a form.

\`EvoSwitch\` uses a native checkbox input with \`role="switch"\`. Its \`checked\`,
\`defaultChecked\`, and \`onChange\` props follow native React input behavior.
Provide a visible label, or group related switches under a group label.

## Usage

\`\`\`tsx
import { EvoSwitch } from "@evo-web/react/switch";

<label>
  <EvoSwitch name="saved-search-alerts" defaultChecked />
  Email me about new listings in my saved searches
</label>
\`\`\``,displayName:`EvoSwitch`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/switch/switch.tsx`,methods:[],props:{},tags:{summary:`On or off setting with native input behavior.`}}}catch{}})))()}var d,f,p,m,h,g;function _(){return(_=t((()=>{i(),u(),d=n(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:`Form Input/EvoSwitch`,component:s,argTypes:{checked:{control:`boolean`},defaultChecked:{control:`boolean`},disabled:{control:`boolean`},onChange:{action:`onChange`,table:{category:`Events`}}},args:{name:`saved-search-alerts`},render:e=>(0,d.jsxs)(`span`,{className:`field`,children:[(0,d.jsx)(s,{...e,id:`saved-search-alerts`}),(0,d.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`saved-search-alerts`,children:`Email me about new listings in my saved searches`})]})},m={},h={args:{checked:!1},render:()=>{let[e,t]=f(),n=e=>t({checked:e});return(0,d.jsxs)(`div`,{style:{alignItems:`flex-start`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsxs)(`span`,{className:`field`,children:[(0,d.jsx)(s,{...e,id:`saved-search-alerts`,onChange:t=>{e.onChange?.(t),n(t.target.checked)}}),(0,d.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`saved-search-alerts`,children:`Email me about new listings in my saved searches`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,d.jsx)(a,{type:`button`,onClick:()=>n(!0),children:`Turn on`}),(0,d.jsx)(a,{type:`button`,onClick:()=>n(!1),children:`Turn off`}),(0,d.jsx)(a,{type:`button`,onClick:()=>n(!e.checked),children:`Toggle`})]})]})}},g=[`Default`,`Controlled`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:`A visible label names the switch.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  },
  render: () => {
    const [args, updateArgs] = useArgs<StoryArgs>();
    const setChecked = (checked: boolean) => updateArgs({
      checked
    });
    return <div style={{
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <span className="field">
          <EvoSwitch {...args} id="saved-search-alerts" onChange={event => {
          args.onChange?.(event);
          setChecked(event.target.checked);
        }} />
          <label className="field__label field__label--end" htmlFor="saved-search-alerts">
            Email me about new listings in my saved searches
          </label>
        </span>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          <EvoButton type="button" onClick={() => setChecked(true)}>
            Turn on
          </EvoButton>
          <EvoButton type="button" onClick={() => setChecked(false)}>
            Turn off
          </EvoButton>
          <EvoButton type="button" onClick={() => setChecked(!args.checked)}>
            Toggle
          </EvoButton>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`Synchronizes the switch with externally controlled state.`,...h.parameters?.docs?.description}}}})))()}_();export{h as Controlled,m as Default,g as __namedExportsOrder,p as default};