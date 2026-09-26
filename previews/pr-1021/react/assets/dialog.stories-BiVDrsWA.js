import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./button-C9NWfPCt.js";import{a as s,c,d as l,f as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./dialog-title-CwfJdF0I.js";function x({src:e,position:t,className:n,style:r,children:i,...a}){return(0,C.jsx)(`div`,{...a,className:(0,S.default)(`dialog__image`,n),style:{...r,backgroundImage:e?`url(${e})`:r?.backgroundImage,backgroundPosition:t??r?.backgroundPosition},children:i})}var S,C;function w(){return(w=t((()=>{S=e(i(),1),C=r();try{x.displayName=`EvoDialogBanner`,x.__docgenInfo={description:"A banner adds visual context to an expressive dialog. Use a background image\nor provide custom content when it helps set the tone for the task.\n\nPass the banner to `EvoDialog` through its `banner` prop.",displayName:`EvoDialogBanner`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/dialog/dialog-banner.tsx`,methods:[],props:{src:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:`Image URL rendered as the banner's CSS background image.`,name:`src`,required:!1,tags:{},type:{name:`string`}},position:{defaultValue:null,declarations:[{fileName:`evo-react/src/dialog/types.ts`,name:`TypeLiteral`}],description:"Background position applied to the image supplied through `src`.",name:`position`,required:!1,tags:{},type:{name:`BackgroundPosition<string | number>`}}},tags:{summary:`Expressive banner region for a dialog.`}}}catch{}})))()}var T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{T=n(),a(),p(),w(),u(),b(),c(),h(),d(),m(),E=r(),D={title:`Navigation & Disclosure/EvoDialog`,component:g,subcomponents:{EvoDialogBanner:x,EvoDialogHeader:v,EvoDialogTitle:y,EvoDialogClose:l,EvoDialogPrevious:_,EvoDialogMain:s,EvoDialogFooter:f},argTypes:{open:{control:`boolean`},defaultOpen:{control:`boolean`},onOpenChange:{action:`onOpenChange`,table:{category:`Events`}},size:{control:`select`},closedby:{control:`select`},banner:{control:!1},children:{control:!1}},args:{closedby:`any`}},O={render:e=>{let[t,n]=(0,T.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(o,{priority:`secondary`,onClick:()=>n(!0),children:`Review order`}),(0,E.jsx)(`p`,{children:`Order total: $84.99`}),(0,E.jsxs)(g,{...e,open:t,onOpenChange:r,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(y,{children:`Review your order`}),(0,E.jsx)(l,{a11yText:`Close order review`})]}),(0,E.jsxs)(s,{children:[(0,E.jsx)(`p`,{children:`Confirm your shipping address and payment method before placing the order.`}),(0,E.jsx)(`p`,{children:(0,E.jsx)(`a`,{href:`https://www.ebay.com/help/buying/returns-refunds/return-item-refund?id=4041`,children:`Review return policy`})})]}),(0,E.jsx)(f,{children:(0,E.jsx)(o,{priority:`primary`,onClick:()=>r(!1),children:`Continue to checkout`})})]})]})}},k={render:e=>{let[t,n]=(0,T.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(o,{priority:`secondary`,onClick:()=>n(!0),children:`View refurbished benefits`}),(0,E.jsxs)(g,{...e,open:t,onOpenChange:r,banner:(0,E.jsx)(x,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg`,position:`top`}),children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(y,{children:`eBay Refurbished`}),(0,E.jsx)(l,{a11yText:`Close refurbished benefits`})]}),(0,E.jsx)(s,{children:(0,E.jsx)(`p`,{children:`Shop professionally inspected products backed by the applicable seller guarantee.`})})]})]})}},A={render:e=>{let[t,n]=(0,T.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`style`,{children:`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        `}),(0,E.jsx)(o,{priority:`secondary`,onClick:()=>n(!0),children:`View certified refurbished`}),(0,E.jsxs)(g,{...e,open:t,onOpenChange:r,banner:(0,E.jsx)(x,{className:`banner-demo`,children:`Certified refurbished`}),children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(_,{a11yText:`Back to item photos`}),(0,E.jsx)(y,{children:`Shop with confidence`}),(0,E.jsx)(l,{a11yText:`Close refurbished details`})]}),(0,E.jsx)(s,{children:(0,E.jsx)(`p`,{children:`Review the item’s condition, seller details, and included accessories.`})})]})]})}},j={render:e=>{let[t,n]=(0,T.useState)(!1),r=t=>{n(t),e.onOpenChange?.(t)};return(0,E.jsxs)(`div`,{children:[(0,E.jsx)(o,{priority:`secondary`,onClick:()=>n(!0),children:`Continue listing`}),(0,E.jsxs)(g,{...e,open:t,onOpenChange:r,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(_,{a11yText:`Back to photos`}),(0,E.jsx)(y,{children:`Set your price`}),(0,E.jsx)(l,{a11yText:`Close listing`})]}),(0,E.jsx)(s,{children:(0,E.jsx)(`p`,{children:`Choose a starting price or add a Buy It Now price.`})})]})]})}},M=[`Default`,`Banner`,`CustomBanner`,`WithPreviousAction`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Review order
        </EvoButton>
        <p>Order total: $84.99</p>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogTitle>Review your order</EvoDialogTitle>
            <EvoDialogClose a11yText="Close order review" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              Confirm your shipping address and payment method before placing
              the order.
            </p>
            <p>
              <a href="https://www.ebay.com/help/buying/returns-refunds/return-item-refund?id=4041">
                Review return policy
              </a>
            </p>
          </EvoDialogMain>
          <EvoDialogFooter>
            <EvoButton priority="primary" onClick={() => handleOpenChange(false)}>
              Continue to checkout
            </EvoButton>
          </EvoDialogFooter>
        </EvoDialog>
      </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:`A standard dialog pairs a clear title with focused content and an action.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          View refurbished benefits
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange} banner={<EvoDialogBanner src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" position="top" />}>
          <EvoDialogHeader>
            <EvoDialogTitle>eBay Refurbished</EvoDialogTitle>
            <EvoDialogClose a11yText="Close refurbished benefits" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              Shop professionally inspected products backed by the applicable
              seller guarantee.
            </p>
          </EvoDialogMain>
        </EvoDialog>
      </div>;
  }
}`,...k.parameters?.docs?.source},description:{story:`An image provides visual context for the dialog.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <style>{\`
          .banner-demo {
            align-items: center;
            background: linear-gradient(90deg, #2f7ede, #17a7ce);
            color: white;
            display: flex;
            font-size: 24px;
            font-weight: bold;
            justify-content: center;
          }
        \`}</style>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          View certified refurbished
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange} banner={<EvoDialogBanner className="banner-demo">
              Certified refurbished
            </EvoDialogBanner>}>
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back to item photos" />
            <EvoDialogTitle>Shop with confidence</EvoDialogTitle>
            <EvoDialogClose a11yText="Close refurbished details" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>
              Review the item’s condition, seller details, and included
              accessories.
            </p>
          </EvoDialogMain>
        </EvoDialog>
      </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:`A banner can also hold branded or custom visual content.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      args.onOpenChange?.(nextOpen);
    };
    return <div>
        <EvoButton priority="secondary" onClick={() => setOpen(true)}>
          Continue listing
        </EvoButton>
        <EvoDialog {...args} open={open} onOpenChange={handleOpenChange}>
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back to photos" />
            <EvoDialogTitle>Set your price</EvoDialogTitle>
            <EvoDialogClose a11yText="Close listing" />
          </EvoDialogHeader>
          <EvoDialogMain>
            <p>Choose a starting price or add a Buy It Now price.</p>
          </EvoDialogMain>
        </EvoDialog>
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:`A multi-step flow includes a way to return to the previous step.`,...j.parameters?.docs?.description}}}})))()}N();export{k as Banner,A as CustomBanner,O as Default,j as WithPreviousAction,M as __namedExportsOrder,D as default};