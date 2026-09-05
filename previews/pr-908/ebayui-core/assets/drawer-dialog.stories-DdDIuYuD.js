import{a as B}from"./utils-DWCsNc5l.js";import{v as g,b as f,_ as x,c as b}from"./defineComponent-B-Bg3Ud2.js";import{_}from"./dynamic-tag-B3Rndxlm.js";import{a as w}from"./attr-tag-Dvq4QMvY.js";import{_ as L}from"./index-I3zWZF9K.js";import{_ as s}from"./render-tag-B9T2mz-j.js";import{_ as h}from"./index-Cw3bSwrm.js";import{_ as D}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css                    */import"./index-D7kkco59.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-CeRTVWM9.js";import"./index-CJDBRdqY.js";import"./index-eAGEw84U.js";import"./index-Dc9wtS83.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";const O=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-drawer-dialog-deprecated
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

** Deprecated will be removed next major ** (Use lightbox-dialog instead)
Dialog which slides in from the bottom of the screen. Used mainly on moble.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-drawer-dialog)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-drawer-dialog)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-drawer-dialog/examples)
`;class F extends Marko.Component{setExpandedState(o){o!==this.state.expanded&&(this.state.expanded=o,o?this.emit("expanded"):this.emit("collapsed"))}handleExpand(){this.setExpandedState(!this.state.expanded)}handleScroll(){this.setExpandedState(!0)}handleTouchStart(o){const e=o.changedTouches;this.touches=[];for(let t=0;t<e.length;t++){const{identifier:n,pageY:i}=e[t];this.touches.push({identifier:n,pageY:i})}}handleTouchMove(o){if(this.touches.length)for(let e=0;e<o.changedTouches.length;e++){const t=o.changedTouches[e],n=this.touches.findIndex(a=>a.identifier===t.identifier),i=t.pageY-this.touches[n].pageY;i>30?(this.state.expanded?this.setExpandedState(!1):this.getComponent("dialog").state.open=!1,this.handleTouchEnd(o)):i<-30&&(this.setExpandedState(!0),this.handleTouchEnd(o))}}handleTouchEnd(o){for(let e=0;e<o.changedTouches.length;e++){const t=o.changedTouches[e],n=this.touches.findIndex(i=>i.identifier===t.identifier);n>-1&&this.touches.splice(n,1)}}onMount(){this.touches=[]}onInput(o){this.state={expanded:o.expanded||!1}}}const k="faJd5$K",c=g.t(k);f.r(k,()=>c);const E=F;c._=x(function(r,o,e,t,n,i){const{class:a,noHandle:p,renderBody:M,a11yMaximizeText:S="Maximize Drawer",a11yMinimizeText:$="Minimize Drawer",...q}=r,I=n.expanded?$:S;s(L,w.i(()=>(p||w.a("top",{renderBody:y=>{y.e("button",{"aria-label":I,type:"button",class:"drawer-dialog__handle"},"0",t,0,0,{onclick:e.d("click","handleExpand",!1),ontouchstart:e.d("touchstart","handleTouchStart",!1),ontouchmove:e.d("touchmove","handleTouchMove",!1),ontouchend:e.d("touchend","handleTouchEnd",!1),ontouchcancel:e.d("touchcancel","handleTouchEnd",!1)})}}),y=>{_(y,M,null,null,null,null,e,"1")}),{...q,classPrefix:"drawer-dialog",class:[a,"drawer-dialog--mask-fade-slow"],windowClass:["drawer-dialog__window","drawer-dialog__window--slide",n.expanded&&"drawer-dialog__window--expanded"],top:void 0}),o,e,"@dialog",[["scroll","handleScroll",!1],["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:k},E);c.Component=b(E,c._);const T="Cfq8jn0",m=g.t(T);f.r(T,()=>m);const v={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};m._=x(function(r,o,e,t,n,i){s(c,{a11yCloseText:"Close drawer",open:n.open,...r,renderBody:a=>{_(a,r.renderBody,null,null,null,null,e,"1")}},o,e,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),s(h,{renderBody:a=>{a.t("Open drawer",t)}},o,e,"2",[["click","openDrawer",!1]])},{t:T},v);m.Component=b(v,m._);const W=`export interface Input {
    renderBody?: Marko.Body;
}

<ebay-drawer-dialog-deprecated
    a11y-close-text="Close drawer"
    open=state.open
    on-close("closeDrawer")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    on-open("emit", "open")
    ...input
>
    <\${input.renderBody}/>
</ebay-drawer-dialog-deprecated>
<ebay-button on-click("openDrawer")>
    Open drawer
</ebay-button>
class {
    declare state: {
        open: boolean;
    };
    onCreate() {
        this.state = { open: false };
    }
    openDrawer() {
        this.state.open = true;
    }
    closeDrawer() {
        this.state.open = false;
        this.emit("close", arguments);
    }
}
`,C="Q9Q6h_D",u=g.t(C),H=D("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),R=D("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");f.r(C,()=>u);const z={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};u._=x(function(r,o,e,t,n,i){s(c,w.i(()=>(w.a("footer",{renderBody:a=>{s(h,{renderBody:p=>{p.t("Cancel",t)}},a,e,"1",[["click","closeDrawer",!1]]),s(h,{priority:"primary",renderBody:p=>{p.t("Confirm",t)}},a,e,"2",[["click","closeDrawer",!1]])}}),a=>{_(a,r.renderBody,null,null,null,null,e,"3"),a.n(H,t),a.n(R,t)}),{a11yCloseText:"Close drawer",open:n.open,...r,footer:void 0}),o,e,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),s(h,{renderBody:a=>{a.t("Open drawer",t)}},o,e,"7",[["click","openDrawer",!1]])},{t:C},z);u.Component=b(z,u._);const U=`export interface Input {
    renderBody?: Marko.Body;
}

<ebay-drawer-dialog-deprecated
    a11y-close-text="Close drawer"
    open=state.open
    on-close("closeDrawer")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    on-open("emit", "open")
    ...input
>
    <@footer>
        <ebay-button on-click("closeDrawer")>
            Cancel
        </ebay-button>
        <ebay-button priority="primary" on-click("closeDrawer")>
            Confirm
        </ebay-button>
    </@footer>
    <\${input.renderBody}/>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-drawer-dialog-deprecated>
<ebay-button on-click("openDrawer")>
    Open drawer
</ebay-button>
class {
    declare state: {
        open: boolean;
    };

    onCreate() {
        this.state = { open: false };
    }
    openDrawer() {
        this.state.open = true;
    }
    closeDrawer() {
        this.state.open = false;
        this.emit("close", arguments);
    }
}
`,le={title:"deprecated/ebay-drawer-dialog-deprecated",component:m,parameters:{docs:{description:{component:O}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},noHandle:{type:"boolean",control:{type:"boolean"},description:"Whether handle will be shown or not."},expanded:{type:"boolean",control:{type:"boolean"},description:"Whether the drawer is expanded to full height or max 50%"},closeButtonText:{control:{type:"text"},description:"If set, then will show this text instead of a close button"},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the drawer opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"Localized, a11y text for close button and mask."},a11yMinimizeText:{control:{type:"text"},description:"Localized, a11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer."},a11yMaximizeText:{control:{type:"text"},description:"Localized, a11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on drawer opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on drawer closed. Triggered also when user drags down on handle (touch only) when drawer is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onCollapsed:{action:"on-collapsed",description:"drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded",table:{category:"Events",defaultValue:{summary:""}}}}},d=r=>({input:B(r)});d.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};d.parameters={docs:{source:{code:W}}};const l=r=>({component:u,input:B(r)});l.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};l.parameters={docs:{source:{code:U}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  component: withFooter,
  input: addRenderBodies(args)
})`,...l.parameters?.docs?.source}}};const ce=["Standard","WithFooter"];export{d as Standard,l as WithFooter,ce as __namedExportsOrder,le as default};
