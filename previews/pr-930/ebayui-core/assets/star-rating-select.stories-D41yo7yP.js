import{t as B}from"./storybook-code-source-CCz6reEH.js";import{v as b,b as f,_,d as F,e as y,p as R,c as h}from"./defineComponent-B-Bg3Ud2.js";import{_ as $}from"./index-ItOVh5og.js";import{_ as v}from"./render-tag-B9T2mz-j.js";import{_ as j}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             */const z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-star-rating-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## ebay-star-rating-select Usage

\`\`\`marko
<ebay-star-rating-select/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-star-rating-select)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-star-rating-select)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-star-rating-select/examples)
`;class G extends Marko.Component{onCreate(){this.state={value:0}}onInput(e){let t=parseInt(e.value)||0;t>5&&(t=0),this.state.value=t}handleClick(e,t,a){a.disabled||(this.state.value=e),this.emitEvent("change",e,t,a)}emitEvent(e,t,a,i){i.disabled||this.emit(e,{originalEvent:a,value:t})}}const p="mPx8hXX",l=b.t(p);f.r(p,()=>l);const k=G;l._=_(function(n,e,t,a,i,T){const{class:S,value:V,a11yText:g,a11yStarText:w=[],disabled:E,...C}=n;e.be("div",F({role:!!g&&"radiogroup","aria-label":g,class:y(["star-rating-select",S])},R(C)),"0",a,null,4);for(let I=4/1,m=0;m<=I;m++){const s=1+m*1,d=`[${s}]`;e.be("span",{class:"star-rating-select__radio"},"1"+d,a,null,1),e.e("input",{"aria-label":w[s-1],class:y(["star-rating-select__control",s<=i.value&&"star-rating-select__control--filled"]),type:"radio",name:t.elId("star-rating"),value:s,disabled:E,checked:i.value===s},"2"+d,a,0,0,{onclick:t.d("click","handleClick",!1,[s]),onfocus:t.d("focus","emitEvent",!1,["focus",s]),onkeydown:t.d("keydown","emitEvent",!1,["keydown",s])}),e.be("span",{class:"star-rating-select__radio-icon"},"3"+d,a,null,1),v($,{},e,t,"4"+d),e.ee(),e.ee()}e.ee()},{t:p},k);l.Component=h(k,l._);const u="KcGGOGa",c=b.t(u),K=j("legend",null,1).t("Rate Product");f.r(u,()=>c);const x={};c._=_(function(n,e,t,a,i,T){e.be("fieldset",null,"0",a,null,0),e.n(K,a),v(l,{value:n.value,a11yStarText:n.a11yStarText},e,t,"2",[["change","emit",!1,["change"]],["keydown","emit",!1,["keydown"]],["focus","emit",!1,["focus"]]]),e.ee()},{t:u},x);c.Component=h(x,c._);const O=`export interface Input {
    value: number;
    a11yStarText: [string, string, string, string, string];
}
class {}

<fieldset>
    <legend>Rate Product</legend>
    <ebay-star-rating-select
        value=input.value
        a11yStarText=input.a11yStarText
        onChange("emit", "change")
        onKeydown("emit", "keydown")
        onFocus("emit", "focus")
    />
</fieldset>
`,P=n=>({input:{...n,renderBody:n.renderBody?e=>{e.html(n.renderBody)}:null}}),N={title:"form input/ebay-star-rating-select",component:l,parameters:{docs:{description:{component:z}}},argTypes:{disabled:{control:{type:"boolean"}},value:{control:{type:"number"},description:"1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected"},a11yStarText:{control:"object",description:"Localized, array object which sets the aria label for each star"},a11yText:{control:{type:"text"},description:"Localized, the aria label for the outer container. Only used on isolated case."},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},r=P.bind({});r.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],a11yText:"Rate product",value:0};r.parameters={docs:{source:{code:B("ebay-star-rating-select",r.args)}}};const o=n=>({input:n,component:c});o.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],value:0};o.parameters={docs:{source:{code:O}}};const Q=["Isolated","Fieldset"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: FieldsetTemplate
})`,...o.parameters?.docs?.source}}};export{o as Fieldset,r as Isolated,Q as __namedExportsOrder,N as default};
