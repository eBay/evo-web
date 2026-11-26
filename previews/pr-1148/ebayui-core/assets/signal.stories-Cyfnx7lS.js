import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r}from"./utils-C7m-hPxw.js";import{n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as c}from"./render-tag-hXgrwudm.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{n as u,t as d}from"./ebay-promotion-12-icon-C6zEd33v.js";import{n as f,t as p}from"./ebay-signal-CKCndbWz.js";var m;function h(){return(h=t((()=>{m=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

\`\`\`marko
<ebay-signal tone="information">Information</ebay-signal>
<ebay-signal tone="positive" emphasis="strong">
    <@icon>
        <ebay-promotion-12-icon/>
    </@icon>
    Positive
</ebay-signal>
\`\`\`

## Attributes

| Name       | Type                                                                   | Required | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| \`tone\`     | \`"neutral" \\| "information" \\| "positive" \\| "warning" \\| "attention"\` | No       | Color tone. Takes precedence over \`status\`                                                           |
| \`emphasis\` | \`"default" \\| "strong" \\| "subtle"\`                                    | No       | Visual emphasis. Defaults to \`"default"\`                                                             |
| \`status\`   | \`"neutral" \\| "trustworthy" \\| "recent" \\| "time-sensitive"\`           | No       | **Deprecated**, use \`tone\`. trustworthy → information, recent → positive, time-sensitive → attention |

## Attribute Tags

| Name    | Description                                                                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`@icon\` | Optional leading icon, rendered before the label. Pass a 12px icon such as \`<ebay-promotion-12-icon/>\`, which is \`aria-hidden\` by default (don't pass \`a11yText\`) |

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-ebay-signal)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-ebay-signal)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-signal/examples)
`})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{g=s(),u(),_=e(c()),v=l(),f(),y=e(i()),b=o(),x=e(a()),S=`GRFzJ$J`,C=(0,g.t)(S),(0,b.r)(S,()=>C),w={},C._=(0,y.default)(function(e,t,n,r,i,a){(0,_.default)(p,(0,v.i)(()=>((0,v.a)(`icon`,{renderBody:e=>{(0,_.default)(d,{},e,n,`1`)}}),e=>{e.t(`Positive`,r)}),{tone:`positive`,emphasis:`strong`}),t,n,`0`)},{t:S,i:!0},w),C.Component=(0,x.default)(w,C._)})))()}var E;function D(){return(D=t((()=>{E=`<ebay-signal tone="positive" emphasis="strong">
    <@icon>
        <ebay-promotion-12-icon/>
    </@icon>
    Positive
</ebay-signal>
`})))()}var O,k,A,j,M;function N(){return(N=t((()=>{h(),T(),D(),f(),O=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),k={title:`graphics & icons/ebay-signal`,component:p,parameters:{docs:{description:{component:m}}},argTypes:{tone:{type:`enum`,control:{type:`select`},options:[`neutral`,`information`,`positive`,`warning`,`attention`]},emphasis:{type:`enum`,control:{type:`select`},options:[`default`,`strong`,`subtle`]},icon:{name:`@icon`,description:`Optional leading 12px icon, rendered before the label. See the WithIcon story`,table:{category:`@Attribute Tags`}},status:{type:`enum`,control:{type:`select`},options:[`trustworthy`,`recent`,`time-sensitive`,`neutral`],description:"Deprecated: use `tone`. trustworthy → information, recent → positive, time-sensitive → attention, neutral → neutral"}}},A=O.bind({}),A.args={renderBody:`Signal text`},A.parameters={docs:{source:{code:n(`ebay-signal`,A.args)}}},j=r(C,E),M=[`Standard`,`WithIcon`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithIconTemplate, WithIconTemplateCode)`,...j.parameters?.docs?.source}}}})))()}N();export{A as Standard,j as WithIcon,M as __namedExportsOrder,k as default};