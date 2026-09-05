import{t as A}from"./storybook-code-source-CCz6reEH.js";import{b as D,a as M}from"./utils-DWCsNc5l.js";import{v as I,b as B,_ as C,d as k,e as v,p as x,c as T}from"./defineComponent-B-Bg3Ud2.js";import{_ as m}from"./dynamic-tag-B3Rndxlm.js";import{_ as O}from"./of-fallback-DrWEmKV1.js";import{_ as R,a as j}from"./index-AIOB22RF.js";import{_ as b}from"./render-tag-B9T2mz-j.js";import{a as r}from"./attr-tag-Dvq4QMvY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             */class V extends Marko.Component{onCreate(){this.state={selectedIndex:0}}onInput(e){let t=(e.button||[]).findIndex(n=>n.selected);t===-1&&(t=0),this.state.selectedIndex=t}onButtonClick(e,t){if(e!==this.state.selectedIndex){this.state.selectedIndex=e;const n=this.input.button&&[...this.input.button][e].value||void 0;this.emit("change",{index:e,value:n,originalEvent:t})}}}const p="yt$leqY",i=I.t(p),H=["large"];B.r(p,()=>i);const E=V;i._=C(function(s,e,t,n,y,$){let{size:o,class:G,button:J=[],...w}=s;var h=o&&H.includes(o)?o:null;e.be("div",k({class:v(["segmented-buttons",h&&`segmented-buttons--${h}`,s.class])},x(w)),"0",n,null,4),e.be("ul",null,"1",n,null,0);{let q=0;for(const _ of O(s.button||[])){let d=q++;const a=`[${d}]`,{class:z,icon:f,renderBody:W,...Q}=_;e.be("li",null,"2"+a,n,null,0),e.be("button",k({class:v(["segmented-buttons__button",z]),"aria-current":y.selectedIndex===d&&"true"},x(Q)),"3"+a,n,null,4,{onclick:t.d("click","onButtonClick",!1,[d])}),f?(e.be("span",{class:"segmented-buttons__button-cell"},"4"+a,n,null,1),m(e,f,null,null,null,null,t,"5"+a),e.be("span",null,"6"+a,n,null,0),m(e,_,null,null,null,null,t,"7"+a),e.ee(),e.ee()):m(e,W,null,null,null,null,t,"8"+a),e.ee(),e.ee()}}e.ee(),e.ee()},{t:p},E);i.Component=T(E,i._);const L=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-segmented-buttons
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-segmented-buttons)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-segmented-buttons)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-segmented-buttons/examples)
`,g="DLgqvqC",u=I.t(g);B.r(g,()=>u);const S={};u._=C(function(s,e,t,n,y,$){b(i,r.i(()=>{r.r("button",r.i(()=>(r.a("icon",{renderBody:o=>{b(R,{},o,t,"1")}}),o=>{o.t("Desktop",n)}))),r.r("button",r.i(()=>(r.a("icon",{renderBody:o=>{b(j,{},o,t,"2")}}),o=>{o.t("Mobile",n)})))}),e,t,"0",[["change","emit",!1,["change"]]])},{t:g,s:!0},S);u.Component=T(S,u._);const Y=`<ebay-segmented-buttons on-change("emit", "change")>
    <@button>
        <@icon>
            <ebay-full-view-24-icon/>
        </@icon>
        Desktop
    </@button>
    <@button>
        <@icon>
            <ebay-mobile-24-icon/>
        </@icon>
        Mobile
    </@button>
</ebay-segmented-buttons>
`,F=s=>({input:M(s)}),ae={title:"buttons/ebay-segmented-buttons",component:i,parameters:{docs:{description:{component:L}}},argTypes:{button:{description:"Each button in the segmented button",name:"@button",table:{category:"@Attribute Tags"}},selected:{description:"If true, this will be the selected button",table:{category:"@button attribute"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},icon:{description:"The icon to show before the text",name:"@icon",table:{category:"@button attribute"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, index, value }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},l=F.bind({});l.args={button:[{renderBody:"Q1",value:"quarter1"},{renderBody:"Q2",value:"quarter2"},{renderBody:"Q3",value:"quarter3"},{renderBody:"Q4",value:"quarter4"}]};l.parameters={docs:{source:{code:A("ebay-segmented-buttons",l.args,{button:"button"})}}};const c=D(u,Y),re=["Default","WithIcons"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...c.parameters?.docs?.source}}};export{l as Default,c as WithIcons,re as __namedExportsOrder,ae as default};
