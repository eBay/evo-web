import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{c as r,h as i,l as a,n as o,r as s,s as c,t as l,u}from"./registry-95LfxIAE.js";var d;function f(){return(f=t((()=>{d=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function p(){return(p=t((()=>{})))()}function m(){return(m=t((()=>{p()})))()}var h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{h=u(),m(),r(),g=e(i()),_=e(c()),v=e(o()),y=l(),b=e(s()),x=`rb`,S=(0,h.t)(x),(0,y.r)(x,()=>S),C={},S._=(0,v.default)(function(e,t,n,r,i,o){let{class:s,max:c=100,value:l=0,...u}=e;t.e(`progress`,(0,_.default)(a(u),{class:(0,g.default)([`progress-bar`,s]),max:c,value:l}),`0`,r,0,4)},{t:x,i:!0},C),S.Component=(0,b.default)(C,S._)})))()}var T,E,D,O;function k(){return(k=t((()=>{f(),w(),T=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),E={title:`progress/ebay-progress-bar`,component:S,parameters:{docs:{description:{component:d}}},argTypes:{value:{control:{type:`number`,min:1,max:100},description:`HTML value of progress bar`},max:{control:{type:`number`,min:1,max:100},description:`HTML max. Defaults to 100`}}},D=T.bind({}),D.args={value:50},D.parameters={docs:{source:{code:n(`ebay-progress-bar`,D.args)}}},O=[`Standard`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...D.parameters?.docs?.source}}}})))()}k();export{D as Standard,O as __namedExportsOrder,E as default};