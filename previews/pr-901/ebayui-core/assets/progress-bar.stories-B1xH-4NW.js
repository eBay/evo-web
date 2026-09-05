import{t as d}from"./storybook-code-source-CCz6reEH.js";import{v as l,b,_ as u,d as g,p as y,e as _,c as h}from"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-bar
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<ebay-progress-bar value=50 max=100/>
\`\`\`

The progress bar gives an immediate, real-time visualisation of the current task completion status.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/progress-ebay-progress-bar)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/progress-ebay-progress-bar)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-progress-bar/examples)
`,s="Kjpm9r0",o=l.t(s);b.r(s,()=>o);const t={};o._=u(function(r,a,f,n,k,B){const{class:p,max:m=100,value:i=0,...c}=r;a.e("progress",g(y(c),{class:_(["progress-bar",p]),max:m,value:i}),"0",n,0,4)},{t:s,i:!0},t);o.Component=h(t,o._);const v=r=>({input:{...r,renderBody:r.renderBody?a=>{a.html(r.renderBody)}:null}}),D={title:"progress/ebay-progress-bar",component:o,parameters:{docs:{description:{component:x}}},argTypes:{value:{control:{type:"number",min:1,max:100},description:"HTML value of progress bar"},max:{control:{type:"number",min:1,max:100},description:"HTML max. Defaults to 100"}}},e=v.bind({});e.args={value:50};e.parameters={docs:{source:{code:d("ebay-progress-bar",e.args)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...e.parameters?.docs?.source}}};const E=["Standard"];export{e as Standard,E as __namedExportsOrder,D as default};
