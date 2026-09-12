import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{c as a,h as o,l as s,n as c,r as l,s as ee,t as u,u as d}from"./registry-95LfxIAE.js";import{t as f}from"./render-tag-hXgrwudm.js";import{t as p}from"./of-fallback-rY0Dkoru.js";import{t as m}from"./attr-tag--AgZ8oJt.js";import{n as h,t as g}from"./ebay-button-ev-RMJXM.js";import{a as te,c as ne,i as re,l as ie,n as ae,o as oe,r as se,s as ce,t as le,u as ue}from"./ebay-snowmobile-24-icon-CRsiI9Tq.js";import{n as de,t as fe}from"./ebay-cart-24-icon-DzcX9mI2.js";import{n as pe,t as me}from"./ebay-toggle-button-DgBow4wv.js";var he;function ge(){return(ge=t((()=>{he=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-toggle-button-group
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-toggle-button-group)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-toggle-button-group)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-toggle-button-group/examples)
`})))()}function _e(){return(_e=t((()=>{})))()}function ve(){return(ve=t((()=>{_e()})))()}var ye;function be(){return(be=t((()=>{ye=class extends Marko.Component{onCreate(){this.state={pressed:{}}}onInput(e){this.state.pressed=Object.fromEntries([...e.button||[]].map(({pressed:e},t)=>[t,!!e]))}handleToggle(e,{originalEvent:t,pressed:n}){this.input.variant===`radio`?this.state.pressed={[e]:!0}:this.input.variant===`radio-toggle`?this.state.pressed={[e]:n}:this.state.pressed={...this.state.pressed,[e]:n},this.emit(`change`,{originalEvent:t,pressed:Object.keys(this.state.pressed).filter(e=>this.state.pressed[+e]).map(e=>+e)})}}})))()}var xe,Se,Ce,we,Te,Ee,De,Oe,_,v,y;function b(){return(b=t((()=>{xe=d(),ve(),a(),pe(),Se=e(f()),Ce=e(p()),we=e(o()),Te=e(ee()),be(),Ee=e(c()),De=u(),Oe=e(l()),_=`Ob`,v=(0,xe.t)(_),(0,De.r)(_,()=>v),y=ye,v._=(0,Ee.default)(function(e,t,n,r,i,a){let{class:o,layoutType:c,columnsMin:l,columnsXS:ee,columnsSM:u,columnsMD:d,columnsXL:f,a11yText:p,a11yLabelId:m,button:h=[],...g}=e;t.be(`div`,(0,Te.default)({class:(0,we.default)([`toggle-button-group`,o]),"data-columns-min":l,"data-columns-xs":ee,"data-columns-sm":u,"data-columns-md":d,"data-columns-xl":f},s(g)),`0`,r,null,4),t.be(`ul`,{"aria-label":p,"aria-labelledby":m},`1`,r,null,0);{let e=0;for(let{layoutType:a=c,pressed:o,...s}of(0,Ce.default)(h)){let o=e++,c=`[${o}]`;t.be(`li`,null,`2`+c,r,null,0),(0,Se.default)(me,{layoutType:a,pressed:i.pressed[o],...s},t,n,`3`+c,[[`toggle`,`handleToggle`,!1,[o]]]),t.ee()}}t.ee(),t.ee()},{t:_},y),v.Component=(0,Oe.default)(y,v._)})))()}var x,S,C,w,T,E,D,O,k;function ke(){return(ke=t((()=>{x=d(),S=m(),ne(),C=e(f()),ue(),de(),oe(),re(),ae(),b(),w=e(c()),T=u(),E=e(l()),D=`zOVIl6q`,O=(0,x.t)(D),(0,T.r)(D,()=>O),k={},O._=(0,w.default)(function(e,t,n,r,i,a){(0,C.default)(v,(0,S.i)(()=>{(0,S.r)(`button`,(0,S.i)(()=>((0,S.a)(`subtitle`,{renderBody:e=>{e.t(`Car`,r)}}),(0,S.a)(`icon`,{renderBody:e=>{(0,C.default)(ce,{},e,n,`1`)}}),e=>{e.t(`Icon 1`,r)}))),(0,S.r)(`button`,(0,S.i)(()=>((0,S.a)(`subtitle`,{renderBody:e=>{e.t(`ATV`,r)}}),(0,S.a)(`icon`,{renderBody:e=>{(0,C.default)(ie,{},e,n,`2`)}}),e=>{e.t(`Icon 2`,r)}))),(0,S.r)(`button`,(0,S.i)(()=>((0,S.a)(`subtitle`,{renderBody:e=>{e.t(`Cart`,r)}}),(0,S.a)(`icon`,{renderBody:e=>{(0,C.default)(fe,{},e,n,`3`)}}),e=>{e.t(`Icon 3`,r)}))),(0,S.r)(`button`,(0,S.i)(()=>((0,S.a)(`subtitle`,{renderBody:e=>{e.t(`Jet Ski`,r)}}),(0,S.a)(`icon`,{renderBody:e=>{(0,C.default)(te,{},e,n,`4`)}}),e=>{e.t(`Icon 4`,r)}))),(0,S.r)(`button`,(0,S.i)(()=>((0,S.a)(`subtitle`,{renderBody:e=>{e.t(`Motorcycle`,r)}}),(0,S.a)(`icon`,{renderBody:e=>{(0,C.default)(se,{},e,n,`5`)}}),e=>{e.t(`Icon 5`,r)}))),(0,S.r)(`button`,(0,S.i)(()=>((0,S.a)(`subtitle`,{renderBody:e=>{e.t(`Snowmobile`,r)}}),(0,S.a)(`icon`,{renderBody:e=>{(0,C.default)(le,{},e,n,`6`)}}),e=>{e.t(`Icon 6`,r)})))},{layoutType:`list`,...e,button:void 0}),t,n,`0`)},{t:D,i:!0},k),O.Component=(0,E.default)(k,O._)})))()}var Ae;function je(){return(je=t((()=>{Ae=`<ebay-toggle-button-group layoutType="list" ...input>
    <@button>
        <@subtitle>Car</@subtitle>
        <@icon>
            <ebay-car-24-icon/>
        </@icon>
        Icon 1
    </@button>
    <@button>
        <@subtitle>ATV</@subtitle>
        <@icon>
            <ebay-atv-24-icon/>
        </@icon>
        Icon 2
    </@button>
    <@button>
        <@subtitle>Cart</@subtitle>
        <@icon>
            <ebay-cart-24-icon/>
        </@icon>
        Icon 3
    </@button>
    <@button>
        <@subtitle>Jet Ski</@subtitle>
        <@icon>
            <ebay-jet-ski-24-icon/>
        </@icon>
        Icon 4
    </@button>
    <@button>
        <@subtitle>Motorcycle</@subtitle>
        <@icon>
            <ebay-motorcycle-24-icon/>
        </@icon>
        Icon 5
    </@button>
    <@button>
        <@subtitle>Snowmobile</@subtitle>
        <@icon>
            <ebay-snowmobile-24-icon/>
        </@icon>
        Icon 6
    </@button>
</ebay-toggle-button-group>
`})))()}var Me,A,Ne,Pe,Fe,Ie,j,M,N;function Le(){return(Le=t((()=>{Me=d(),A=m(),b(),Ne=e(f()),Pe=e(c()),Fe=u(),Ie=e(l()),j=`LysiJUy`,M=(0,Me.t)(j),(0,Fe.r)(j,()=>M),N={},M._=(0,Pe.default)(function(e,t,n,r,i,a){(0,Ne.default)(v,(0,A.i)(()=>{(0,A.r)(`button`,(0,A.i)(()=>((0,A.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`First Item`,r)}))),(0,A.r)(`button`,(0,A.i)(()=>((0,A.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Second Item`,r)}))),(0,A.r)(`button`,(0,A.i)(()=>((0,A.a)(`subtitle`,{renderBody:e=>{e.t(`Pressed on load`,r)}}),e=>{e.t(`Third Item`,r)}),{pressed:!0})),(0,A.r)(`button`,(0,A.i)(()=>((0,A.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Fourth Item`,r)}))),(0,A.r)(`button`,(0,A.i)(()=>((0,A.a)(`subtitle`,{renderBody:e=>{e.t(`Pressed on load`,r)}}),e=>{e.t(`Fifth Item`,r)}),{pressed:!0})),(0,A.r)(`button`,(0,A.i)(()=>((0,A.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Sixth Item`,r)})))},{...e,button:void 0}),t,n,`0`)},{t:j,i:!0},N),M.Component=(0,Ie.default)(N,M._)})))()}var Re;function ze(){return(ze=t((()=>{Re=`<ebay-toggle-button-group ...input>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        First Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Second Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Third Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Fourth Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Fifth Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Sixth Item
    </@button>
</ebay-toggle-button-group>
`})))()}var Be,P,F,Ve,He,Ue,We,I,L,R;function Ge(){return(Ge=t((()=>{Be=d(),h(),P=e(f()),F=m(),Ve=e(p()),b(),He=e(c()),Ue=u(),We=e(l()),I=`Ck8y1gb`,L=(0,Be.t)(I),(0,Ue.r)(I,()=>L),R={onCreate(){this.state={pressed:[]}},handleChange({pressed:e}){this.state.pressed=e},clearSelection(){this.state.pressed=[]}},L._=(0,He.default)(function(e,t,n,r,i,a){let o=[`Option 1`,`Option 2`,`Option 3`];t.be(`div`,{style:`width:100%`},`0`,r,null,1),(0,P.default)(g,{renderBody:e=>{e.t(`Clear Selection`,r)}},t,n,`1`,[[`click`,`clearSelection`,!1]]),(0,P.default)(v,(0,F.i)(()=>{let e=0;for(let t of(0,Ve.default)(o)){let n=e++;(0,F.r)(`button`,{pressed:i.pressed.includes(n),renderBody:e=>{e.t(t,r)}})}},{a11yText:`Toggle Button Group`,...e,button:void 0}),t,n,`2`,[[`change`,`handleChange`,!1]]),t.ee()},{t:I},R),L.Component=(0,We.default)(R,L._)})))()}var Ke;function qe(){return(qe=t((()=>{Ke=`$ const titles = ["Option 1", "Option 2", "Option 3"];

<div style={ width: "100%" }>
    <ebay-button onClick("clearSelection")>
        Clear Selection
    </ebay-button>
    <ebay-toggle-button-group
        on-change("handleChange")
        a11yText="Toggle Button Group"
        ...input
    >
        <for|title, i| of=titles>
            <@button pressed=state.pressed.includes(i)>
                \${title}
            </@button>
        </for>
    </ebay-toggle-button-group>
</div>
class {
    declare state: {
        pressed: number[];
    };
    onCreate() {
        this.state = {
            pressed: [],
        };
    }
    handleChange({ pressed }: { pressed: number[] }) {
        this.state.pressed = pressed;
    }
    clearSelection() {
        this.state.pressed = [];
    }
}
`})))()}var Je,z,Ye,Xe,Ze,Qe,B,V,H;function $e(){return($e=t((()=>{Je=d(),z=m(),b(),Ye=e(f()),Xe=e(c()),Ze=u(),Qe=e(l()),B=`WfweuYH`,V=(0,Je.t)(B),(0,Ze.r)(B,()=>V),H={},V._=(0,Xe.default)(function(e,t,n,r,i,a){t.be(`h5`,{id:n.elId(`label`)},`0`,r,null,1),t.t(`Select Items`,r),t.ee(),(0,Ye.default)(v,(0,z.i)(()=>{(0,z.r)(`button`,(0,z.i)(()=>((0,z.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`First Item`,r)}))),(0,z.r)(`button`,(0,z.i)(()=>((0,z.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Second Item`,r)}))),(0,z.r)(`button`,(0,z.i)(()=>((0,z.a)(`subtitle`,{renderBody:e=>{e.t(`Pressed on load`,r)}}),e=>{e.t(`Third Item`,r)}),{pressed:!0})),(0,z.r)(`button`,(0,z.i)(()=>((0,z.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Fourth Item`,r)}))),(0,z.r)(`button`,(0,z.i)(()=>((0,z.a)(`subtitle`,{renderBody:e=>{e.t(`Pressed on load`,r)}}),e=>{e.t(`Fifth Item`,r)}),{pressed:!0})),(0,z.r)(`button`,(0,z.i)(()=>((0,z.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Sixth Item`,r)})))},{a11yLabelId:n.elId(`label`),...e,button:void 0}),t,n,`1`)},{t:B,i:!0},H),V.Component=(0,Qe.default)(H,V._)})))()}var et;function tt(){return(tt=t((()=>{et=`<h5 id:scoped="label">
    Select Items
</h5>
<ebay-toggle-button-group a11y-label-id:scoped="label" ...input>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        First Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Second Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Third Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Fourth Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Fifth Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Sixth Item
    </@button>
</ebay-toggle-button-group>
`})))()}var nt,U,rt,it,at,ot,W,G,K;function st(){return(st=t((()=>{nt=d(),U=m(),b(),rt=e(f()),it=e(c()),at=u(),ot=e(l()),W=`SUx65xA`,G=(0,nt.t)(W),(0,at.r)(W,()=>G),K={},G._=(0,it.default)(function(e,t,n,r,i,a){(0,rt.default)(v,(0,U.i)(()=>{(0,U.r)(`button`,(0,U.i)(()=>((0,U.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`First Item`,r)}))),(0,U.r)(`button`,(0,U.i)(()=>((0,U.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Second Item`,r)}))),(0,U.r)(`button`,(0,U.i)(()=>((0,U.a)(`subtitle`,{renderBody:e=>{e.t(`Pressed on load`,r)}}),e=>{e.t(`Third Item`,r)}),{pressed:!0})),(0,U.r)(`button`,(0,U.i)(()=>((0,U.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Fourth Item`,r)}))),(0,U.r)(`button`,(0,U.i)(()=>((0,U.a)(`subtitle`,{renderBody:e=>{e.t(`Pressed on load`,r)}}),e=>{e.t(`Fifth Item`,r)}),{pressed:!0})),(0,U.r)(`button`,(0,U.i)(()=>((0,U.a)(`subtitle`,{renderBody:e=>{e.t(`Empty on load`,r)}}),e=>{e.t(`Sixth Item`,r)})))},{columnsMin:1,columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8,...e,button:void 0}),t,n,`0`)},{t:W,i:!0},K),G.Component=(0,ot.default)(K,G._)})))()}var ct;function lt(){return(lt=t((()=>{ct=`<ebay-toggle-button-group
    columnsMin=1
    columnsSM=3
    columnsXS=2
    columnsMD=6
    columnsXL=8
    ...input
>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        First Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Second Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Third Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Fourth Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Fifth Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Sixth Item
    </@button>
</ebay-toggle-button-group>
`})))()}var ut,q,J,Y,X,Z,Q,$,dt;function ft(){return(ft=t((()=>{ge(),b(),ke(),je(),Le(),ze(),Ge(),qe(),$e(),tt(),st(),lt(),ut=e=>({input:i(e)}),q={title:`buttons/ebay-toggle-button-group`,component:v,parameters:{docs:{description:{component:he}}},argTypes:{variant:{type:`string`,control:{type:`select`},options:[`checkbox`,`radio`,`radio-toggle`],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columnsMin:{type:`number`,control:{type:`number`},description:`Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsXS:{type:`number`,control:{type:`number`},description:`Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsSM:{type:`number`,control:{type:`number`},description:`Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsMD:{type:`number`,control:{type:`number`},description:`Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsXL:{type:`number`,control:{type:`number`},description:`Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},a11yText:{type:`string`,description:"Localized, accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{type:`string`,description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},layoutType:{type:`string`,control:{type:`select`},options:[`minimal`,`list`,`gallery`],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:`@button`,description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:`@attribute tags`}},onChange:{action:`on-change`,description:`Triggered when the pressed state changes`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, pressed }`}}}}},J=ut.bind({}),J.args={a11yText:`Toggle Button Group`,button:[{renderBody:`Button 1`},{renderBody:`Button 2`},{renderBody:`Button 3`},{renderBody:`Button 4`},{renderBody:`Button 5`},{renderBody:`Button 6`}]},J.parameters={docs:{source:{code:n(`ebay-toggle-button`,J.args)}}},Y=r(O,Ae),X=r(M,Re),Z=r(V,et),Q=r(L,Ke),$=r(G,ct,{columnsMin:1,columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8}),dt=[`Default`,`WithIcons`,`WithDefaultSelected`,`externalLabel`,`Controlled`,`PerferedColumns`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withIconsTemplate, withIconsCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withDefaultTemplate, withDefaultCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(externalLabelTemplate, externalLabelCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(controlledTemplate, controlledCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(columnsTemplate, columnsCode, {
  columnsMin: 1,
  columnsSM: 3,
  columnsXS: 2,
  columnsMD: 6,
  columnsXL: 8
})`,...$.parameters?.docs?.source}}}})))()}ft();export{Q as Controlled,J as Default,$ as PerferedColumns,X as WithDefaultSelected,Y as WithIcons,dt as __namedExportsOrder,q as default,Z as externalLabel};