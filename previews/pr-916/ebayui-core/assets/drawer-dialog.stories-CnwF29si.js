import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./utils-C7m-hPxw.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as c}from"./dynamic-tag-CCbAf3a9.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as ee}from"./const-element-BfQ4jh6r.js";import{n as u,t as d}from"./ebay-button-ev-RMJXM.js";import{n as te,t as ne}from"./ebay-dialog-base-BxJ4_-JJ.js";var f;function p(){return(p=t((()=>{f=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function m(){return(m=t((()=>{})))()}function h(){return(h=t((()=>{m()})))()}var g;function _(){return(_=t((()=>{g=class extends Marko.Component{setExpandedState(e){e!==this.state.expanded&&(this.state.expanded=e,e?this.emit(`expanded`):this.emit(`collapsed`))}handleExpand(){this.setExpandedState(!this.state.expanded)}handleScroll(){this.setExpandedState(!0)}handleTouchStart(e){let t=e.changedTouches;this.touches=[];for(let e=0;e<t.length;e++){let{identifier:n,pageY:r}=t[e];this.touches.push({identifier:n,pageY:r})}}handleTouchMove(e){if(this.touches.length)for(let t=0;t<e.changedTouches.length;t++){let n=e.changedTouches[t],r=this.touches.findIndex(e=>e.identifier===n.identifier),i=n.pageY-this.touches[r].pageY;i>30?(this.state.expanded?this.setExpandedState(!1):this.getComponent(`dialog`).state.open=!1,this.handleTouchEnd(e)):i<-30&&(this.setExpandedState(!0),this.handleTouchEnd(e))}}handleTouchEnd(e){for(let t=0;t<e.changedTouches.length;t++){let n=e.changedTouches[t],r=this.touches.findIndex(e=>e.identifier===n.identifier);r>-1&&this.touches.splice(r,1)}}onMount(){this.touches=[]}onInput(e){this.state={expanded:e.expanded||!1}}}})))()}var v,y,b,x,S,re,ie,C,w,T;function E(){return(E=t((()=>{v=o(),h(),y=l(),b=e(c()),te(),x=e(s()),_(),S=e(r()),re=a(),ie=e(i()),C=`G`,w=(0,v.t)(C),(0,re.r)(C,()=>w),T=g,w._=(0,S.default)(function(e,t,n,r,i,a){let{class:o,noHandle:s,renderBody:c,a11yMaximizeText:l=`Maximize Drawer`,a11yMinimizeText:ee=`Minimize Drawer`,...u}=e,d=i.expanded?ee:l;(0,x.default)(ne,(0,y.i)(()=>(s||(0,y.a)(`top`,{renderBody:e=>{e.e(`button`,{"aria-label":d,type:`button`,class:`drawer-dialog__handle`},`0`,r,0,0,{onclick:n.d(`click`,`handleExpand`,!1),ontouchstart:n.d(`touchstart`,`handleTouchStart`,!1),ontouchmove:n.d(`touchmove`,`handleTouchMove`,!1),ontouchend:n.d(`touchend`,`handleTouchEnd`,!1),ontouchcancel:n.d(`touchcancel`,`handleTouchEnd`,!1)})}}),e=>{(0,b.default)(e,c,null,null,null,null,n,`1`)}),{...u,classPrefix:`drawer-dialog`,class:[o,`drawer-dialog--mask-fade-slow`],windowClass:[`drawer-dialog__window`,`drawer-dialog__window--slide`,i.expanded&&`drawer-dialog__window--expanded`],top:void 0}),t,n,`@dialog`,[[`scroll`,`handleScroll`,!1],[`open`,`emit`,!1,[`open`]],[`close`,`emit`,!1,[`close`]]])},{t:C},T),w.Component=(0,ie.default)(T,w._)})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{D=o(),O=e(c()),E(),k=e(s()),u(),A=e(r()),j=a(),M=e(i()),N=`Cfq8jn0`,P=(0,D.t)(N),(0,j.r)(N,()=>P),F={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit(`close`,arguments)}},P._=(0,A.default)(function(e,t,n,r,i,a){(0,k.default)(w,{a11yCloseText:`Close drawer`,open:i.open,...e,renderBody:t=>{(0,O.default)(t,e.renderBody,null,null,null,null,n,`1`)}},t,n,`0`,[[`close`,`closeDrawer`,!1],[`expanded`,`emit`,!1,[`expanded`]],[`collapsed`,`emit`,!1,[`collapsed`]],[`open`,`emit`,!1,[`open`]]]),(0,k.default)(d,{renderBody:e=>{e.t(`Open drawer`,r)}},t,n,`2`,[[`click`,`openDrawer`,!1]])},{t:N},F),P.Component=(0,M.default)(F,P._)})))()}var L;function R(){return(R=t((()=>{L=`export interface Input {
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
`})))()}var z,B,V,H,U,W,G,K,q,J,Y,ae,X;function oe(){return(oe=t((()=>{z=o(),u(),B=e(s()),V=l(),H=e(c()),U=e(ee()),E(),W=e(r()),G=a(),K=e(i()),q=`Q9Q6h_D`,J=(0,z.t)(q),Y=(0,U.default)(`p`,null,1).t(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),ae=(0,U.default)(`p`,null,1).e(`a`,{href:`http://www.ebay.com`},1).t(`www.ebay.com`),(0,G.r)(q,()=>J),X={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit(`close`,arguments)}},J._=(0,W.default)(function(e,t,n,r,i,a){(0,B.default)(w,(0,V.i)(()=>((0,V.a)(`footer`,{renderBody:e=>{(0,B.default)(d,{renderBody:e=>{e.t(`Cancel`,r)}},e,n,`1`,[[`click`,`closeDrawer`,!1]]),(0,B.default)(d,{priority:`primary`,renderBody:e=>{e.t(`Confirm`,r)}},e,n,`2`,[[`click`,`closeDrawer`,!1]])}}),t=>{(0,H.default)(t,e.renderBody,null,null,null,null,n,`3`),t.n(Y,r),t.n(ae,r)}),{a11yCloseText:`Close drawer`,open:i.open,...e,footer:void 0}),t,n,`0`,[[`close`,`closeDrawer`,!1],[`expanded`,`emit`,!1,[`expanded`]],[`collapsed`,`emit`,!1,[`collapsed`]],[`open`,`emit`,!1,[`open`]]]),(0,B.default)(d,{renderBody:e=>{e.t(`Open drawer`,r)}},t,n,`7`,[[`click`,`openDrawer`,!1]])},{t:q},X),J.Component=(0,K.default)(X,J._)})))()}var se;function ce(){return(ce=t((()=>{se=`export interface Input {
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
`})))()}var le,Z,Q,$;function ue(){return(ue=t((()=>{p(),I(),R(),oe(),ce(),le={title:`deprecated/ebay-drawer-dialog-deprecated`,component:P,parameters:{docs:{description:{component:f}}},argTypes:{open:{type:`boolean`,control:{type:`boolean`},description:`Whether dialog is open.`,table:{disable:!0}},noHandle:{type:`boolean`,control:{type:`boolean`},description:`Whether handle will be shown or not.`},expanded:{type:`boolean`,control:{type:`boolean`},description:`Whether the drawer is expanded to full height or max 50%`},closeButtonText:{control:{type:`text`},description:`If set, then will show this text instead of a close button`},focus:{control:{type:`text`},description:`An id for an element which will receive focus when the drawer opens (defaults to close button).`},closeFocus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened`},a11yCloseText:{control:{type:`text`},description:`Localized, a11y text for close button and mask.`},a11yMinimizeText:{control:{type:`text`},description:`Localized, a11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer.`},a11yMaximizeText:{control:{type:`text`},description:`Localized, a11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer.`},header:{name:`@header`,table:{category:`@attribute tags`}},footer:{name:`@footer`,table:{category:`@attribute tags`}},onOpen:{action:`on-open`,description:`Triggered on drawer opened`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`on-close`,description:`Triggered on drawer closed. Triggered also when user drags down on handle (touch only) when drawer is not expanded`,table:{category:`Events`,defaultValue:{summary:``}}},onExpanded:{action:`on-expanded`,description:`drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded`,table:{category:`Events`,defaultValue:{summary:``}}},onCollapsed:{action:`on-collapsed`,description:`drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded`,table:{category:`Events`,defaultValue:{summary:``}}}}},Z=e=>({input:n(e)}),Z.args={header:{renderBody:`Heading Text`},renderBody:`Body Content`,a11yMinimizeText:`Minimize Drawer`,a11yMaximizeText:`Maximize Drawer`},Z.parameters={docs:{source:{code:L}}},Q=e=>({component:J,input:n(e)}),Q.args={header:{renderBody:`Heading Text`},renderBody:`Body Content`,a11yMinimizeText:`Minimize Drawer`,a11yMaximizeText:`Maximize Drawer`},Q.parameters={docs:{source:{code:se}}},$=[`Standard`,`WithFooter`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  component: withFooter,
  input: addRenderBodies(args)
})`,...Q.parameters?.docs?.source}}}})))()}ue();export{Z as Standard,Q as WithFooter,$ as __namedExportsOrder,le as default};