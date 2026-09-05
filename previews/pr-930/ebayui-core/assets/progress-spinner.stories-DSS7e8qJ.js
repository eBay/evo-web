import{t as o}from"./storybook-code-source-CCz6reEH.js";import{_ as n}from"./index-CV1wlU-t.js";import"./defineComponent-B-Bg3Ud2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CuXUxThH.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./render-tag-B9T2mz-j.js";const a=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-spinner
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<ebay-progress-spinner size="large" aria-label="busy"/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/progress-ebay-progress-spinner)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/progress-ebay-progress-spinner)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-progress-spinner/examples)
`,t=r=>({input:{...r,renderBody:r.renderBody?s=>{s.html(r.renderBody)}:null}}),b={title:"progress/ebay-progress-spinner",component:n,parameters:{docs:{description:{component:a}}},argTypes:{size:{options:["small","large"],control:{type:"select"},description:'size of spinner - can be "small", "large". default is small '},ariaLabel:{control:{type:"text"},description:"Description for accessibility"}}},e=t.bind({});e.args={ariaLabel:"loading"};e.parameters={docs:{source:{code:'<ebay-progress-spinner aria-label="Busy"/>'}}};e.parameters={docs:{source:{code:o("ebay-progress-spinner",e.args)}}};const u=["Loading"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...e.parameters?.docs?.source}}};export{e as Loading,u as __namedExportsOrder,b as default};
