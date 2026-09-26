import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-C1du1mzm.js";import{i as a,n as o,r as s,t as c}from"./combobox-option-DMJ8lA0m.js";import{n as l,t as u}from"./clear-16-CMbUH4PY.js";var d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{d=t(),r(),l(),a(),o(),f=n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m={title:`Form Input/EvoCombobox`,component:s,subcomponents:{EvoComboboxOption:c},argTypes:{filterMethod:{control:`select`,options:[`auto`,`manual`,`none`],table:{defaultValue:{summary:`auto`}}},listSelection:{control:`select`,options:[`automatic`,`manual`],table:{defaultValue:{summary:`automatic`}}},strategy:{control:`select`,options:[`absolute`,`fixed`],table:{defaultValue:{summary:`absolute`}}},borderless:{control:`boolean`,table:{defaultValue:{summary:`false`}}},defaultOpen:{control:`boolean`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`},floatingLabel:{control:`text`},fluid:{control:`boolean`,table:{defaultValue:{summary:`false`}}},open:{control:`boolean`},postfix:{control:!1},onValueChange:{action:`valueChange`,table:{category:`Events`}},onOpenChange:{action:`openChange`,table:{category:`Events`}}},args:{floatingLabel:`Advertising campaign`,filterMethod:`auto`,listSelection:`automatic`,placeholder:`Choose a campaign`}},h={render:e=>(0,f.jsxs)(s,{...e,children:[(0,f.jsx)(c,{text:`Back-to-school promotion`}),(0,f.jsx)(c,{text:`Fourth of July sale (paused)`}),(0,f.jsx)(c,{text:`Store subscriber coupon`})]})},g={args:{value:`Back-to-school promotion`},render:()=>{let[e,t]=p(),n=e=>t({value:e}),r=t=>{e.onValueChange?.(t),n(t)};return(0,f.jsxs)(`div`,{style:{alignItems:`flex-start`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsxs)(s,{...e,onValueChange:r,children:[(0,f.jsx)(c,{text:`Back-to-school promotion`}),(0,f.jsx)(c,{text:`Fourth of July sale (paused)`}),(0,f.jsx)(c,{text:`Store subscriber coupon`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,f.jsx)(i,{type:`button`,onClick:()=>n(`Back-to-school promotion`),children:`Select back-to-school promotion`}),(0,f.jsx)(i,{type:`button`,onClick:()=>n(`Store subscriber coupon`),children:`Select store subscriber coupon`}),(0,f.jsx)(i,{type:`button`,onClick:()=>n(``),children:`Clear campaign`})]})]})}},_={render:e=>{let[t,n]=(0,d.useState)(``),r=[{text:`New York`,aliases:[`nyc`]},{text:`London`,aliases:[`ldn`]},{text:`Tokyo`,aliases:[`tyo`]}],i=t.trim().toLowerCase(),a=r.filter(({text:e,aliases:t})=>!i||[e,...t].some(e=>e.toLowerCase().includes(i)));return(0,f.jsx)(s,{...e,floatingLabel:`Item location`,placeholder:`Search cities`,filterMethod:`manual`,value:t,onValueChange:n,children:a.map(({text:e})=>(0,f.jsx)(c,{text:e},e))})}},v={render:e=>{let[t,n]=(0,d.useState)(`Back-to-school promotion`);return(0,f.jsxs)(s,{...e,value:t,onValueChange:n,postfix:{icon:(0,f.jsx)(u,{}),buttonProps:{a11yText:`Clear campaign`,onClick:()=>n(``)}},children:[(0,f.jsx)(c,{text:`Back-to-school promotion`}),(0,f.jsx)(c,{text:`Fourth of July sale (paused)`}),(0,f.jsx)(c,{text:`Store subscriber coupon`})]})}},y=[`Default`,`Controlled`,`ManualFiltering`,`Postfix`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <EvoCombobox {...args}>
      <EvoComboboxOption text="Back-to-school promotion" />
      <EvoComboboxOption text="Fourth of July sale (paused)" />
      <EvoComboboxOption text="Store subscriber coupon" />
    </EvoCombobox>
}`,...h.parameters?.docs?.source},description:{story:`Filters options automatically as the input value changes.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Back-to-school promotion"
  },
  render: () => {
    const [args, updateArgs] = useArgs<StoryArgs>();
    const setValue = (value: string) => updateArgs({
      value
    });
    const handleValueChange = (nextValue: string) => {
      args.onValueChange?.(nextValue);
      setValue(nextValue);
    };
    return <div style={{
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <EvoCombobox {...args} onValueChange={handleValueChange}>
          <EvoComboboxOption text="Back-to-school promotion" />
          <EvoComboboxOption text="Fourth of July sale (paused)" />
          <EvoComboboxOption text="Store subscriber coupon" />
        </EvoCombobox>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          <EvoButton type="button" onClick={() => setValue("Back-to-school promotion")}>
            Select back-to-school promotion
          </EvoButton>
          <EvoButton type="button" onClick={() => setValue("Store subscriber coupon")}>
            Select store subscriber coupon
          </EvoButton>
          <EvoButton type="button" onClick={() => setValue("")}>
            Clear campaign
          </EvoButton>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Synchronizes the input value with externally controlled state.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const options = [{
      text: "New York",
      aliases: ["nyc"]
    }, {
      text: "London",
      aliases: ["ldn"]
    }, {
      text: "Tokyo",
      aliases: ["tyo"]
    }];
    const query = value.trim().toLowerCase();
    const visibleOptions = options.filter(({
      text,
      aliases
    }) => !query || [text, ...aliases].some(term => term.toLowerCase().includes(query)));
    return <EvoCombobox {...args} floatingLabel="Item location" placeholder="Search cities" filterMethod="manual" value={value} onValueChange={setValue}>
        {visibleOptions.map(({
        text
      }) => <EvoComboboxOption key={text} text={text} />)}
      </EvoCombobox>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Delegates option filtering to the application while retaining listbox interaction.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Back-to-school promotion");
    return <EvoCombobox {...args} value={value} onValueChange={setValue} postfix={{
      icon: <EvoIconClear16 />,
      buttonProps: {
        a11yText: "Clear campaign",
        onClick: () => setValue("")
      }
    }}>
        <EvoComboboxOption text="Back-to-school promotion" />
        <EvoComboboxOption text="Fourth of July sale (paused)" />
        <EvoComboboxOption text="Store subscriber coupon" />
      </EvoCombobox>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Adds an actionable postfix that clears the current input value.`,...v.parameters?.docs?.description}}}})))()}b();export{g as Controlled,h as Default,_ as ManualFiltering,v as Postfix,y as __namedExportsOrder,m as default};