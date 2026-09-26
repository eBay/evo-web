import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";function a({children:e,close:t,onAction:n}){let r=(0,s.useMemo)(()=>({close:t,onAction:n}),[t,n]);return(0,c.jsx)(l,{value:r,children:e})}function o(){let e=(0,s.use)(l);if(!e)throw Error(`EvoSnackbarDialogAction must be inside EvoSnackbarDialog`);return e}var s,c,l;function u(){return(u=t((()=>{s=n(),c=r(),l=(0,s.createContext)(null);try{a.displayName=`SnackbarDialogProvider`,a.__docgenInfo={description:``,displayName:`SnackbarDialogProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/snackbar-dialog/context.tsx`,methods:[],props:{close:{defaultValue:null,declarations:[{fileName:`evo-react/src/snackbar-dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`close`,required:!0,tags:{},type:{name:`() => void`}},onAction:{defaultValue:null,declarations:[{fileName:`evo-react/src/snackbar-dialog/context.tsx`,name:`TypeLiteral`}],description:``,name:`onAction`,required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}}},tags:{}}}catch{}})))()}function d(){return(d=t((()=>{})))()}function f({a11yText:e=`Notification`,animated:t=!0,children:n,className:r,layout:i=`row`,onAction:o,onBlurCapture:s,onClose:c,onFocusCapture:l,onMouseEnter:u,onMouseLeave:d,onOpen:f,open:_=!1,ref:v,...y}){let[b,x]=(0,p.useState)(_),[S,C]=(0,p.useState)(!1),[w,T]=(0,p.useState)(!1),E=(0,p.useRef)(!1),D=(0,p.useRef)(_),[O,k]=(0,p.useState)(_?`shown`:`hidden`),A=(0,p.useEffectEvent)(()=>f?.()),j=(0,p.useEffectEvent)(()=>c?.());(0,p.useEffect)(()=>{x(_)},[_]),(0,p.useEffect)(()=>{if(D.current===b)return;if(D.current=b,!t){k(b?`shown`:`hidden`);return}let e=0,n=0,r=0;return k(b?`show-init`:`hide-init`),e=window.requestAnimationFrame(()=>{n=window.requestAnimationFrame(()=>{k(b?`shown`:`hiding`)})}),b||(r=window.setTimeout(()=>k(`hidden`),250)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n),window.clearTimeout(r)}},[b,t]),(0,p.useEffect)(()=>{E.current!==b&&(b?A():j(),E.current=b)},[b]),(0,p.useEffect)(()=>{if(!b||S||w)return;let e=window.setTimeout(()=>x(!1),g);return()=>window.clearTimeout(e)},[b,S,w]);let M=(0,p.useCallback)(()=>x(!1),[]);return(0,h.jsx)(a,{close:M,onAction:o,children:(0,h.jsx)(`aside`,{...y,ref:v,role:`dialog`,"aria-label":e,"aria-modal":`false`,"aria-live":`polite`,hidden:O===`hidden`,"aria-hidden":!b||void 0,className:(0,m.default)(`snackbar-dialog`,t&&`snackbar-dialog--transition`,t&&O===`show-init`&&`snackbar-dialog--show-init`,t&&O===`shown`&&`snackbar-dialog--show`,t&&O===`hide-init`&&`snackbar-dialog--hide-init`,t&&O===`hiding`&&`snackbar-dialog--hide`,r),onFocusCapture:e=>{C(!0),l?.(e)},onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||C(!1),s?.(e)},onMouseEnter:e=>{T(!0),u?.(e)},onMouseLeave:e=>{T(!1),d?.(e)},children:(0,h.jsx)(`div`,{className:(0,m.default)(`snackbar-dialog__window`,i===`column`&&`snackbar-dialog__window--column`),children:n})})})}var p,m,h,g;function _(){return(_=t((()=>{p=n(),m=e(i(),1),u(),d(),h=r(),g=6e3;try{f.displayName=`EvoSnackbarDialog`,f.__docgenInfo={description:`Snackbars are nonmodal dialogs that appear after a lightweight user action.

\`EvoSnackbarDialog\` closes after six seconds without focus or pointer hover.
Put the message in \`EvoSnackbarDialogMain\` and an optional
\`EvoSnackbarDialogAction\` inside \`EvoSnackbarDialogActions\`. The action
closes the dialog and calls \`onAction\`. Update \`open\` to show the snackbar
again; \`onClose\` lets the application synchronize its state.

## Usage

\`\`\`tsx
import {
  EvoSnackbarDialog,
  EvoSnackbarDialogAction,
  EvoSnackbarDialogActions,
  EvoSnackbarDialogMain,
} from "@evo-web/react/snackbar-dialog";

<EvoSnackbarDialog open={open} onClose={() => setOpen(false)}>
  <EvoSnackbarDialogMain>Item removed from your watchlist.</EvoSnackbarDialogMain>
  <EvoSnackbarDialogActions>
    <EvoSnackbarDialogAction onClick={undoRemoval}>Undo</EvoSnackbarDialogAction>
  </EvoSnackbarDialogActions>
</EvoSnackbarDialog>
\`\`\``,displayName:`EvoSnackbarDialog`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/snackbar-dialog/snackbar-dialog.tsx`,methods:[],props:{open:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:"Whether the snackbar is open. Changes to this prop synchronize its visibility. Defaults to `false`.",name:`open`,required:!1,tags:{},type:{name:`boolean`}},layout:{defaultValue:{value:`row`},declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:'Stacks the action below the message when set to `"column"`. Defaults to `"row"`.',name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`"row" | "column"`,value:[{value:`"row"`},{value:`"column"`}]}},animated:{defaultValue:{value:`true`},declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:"Applies the Skin transition classes. Defaults to `true`.",name:`animated`,required:!1,tags:{},type:{name:`boolean`}},a11yText:{defaultValue:{value:`Notification`},declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:'Accessible name for the nonmodal dialog. English default to be overridden is `"Notification"`.',name:`a11yText`,required:!1,tags:{},type:{name:`string`}},onOpen:{defaultValue:null,declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:`Called when the snackbar opens.`,name:`onOpen`,required:!1,tags:{},type:{name:`(() => void)`}},onClose:{defaultValue:null,declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:`Called when the snackbar closes, including automatic dismissal.`,name:`onClose`,required:!1,tags:{},type:{name:`(() => void)`}},onAction:{defaultValue:null,declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:"Called when `EvoSnackbarDialogAction` is activated.",name:`onAction`,required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}}},tags:{summary:`Timed, nonmodal feedback dialog with an optional action.`}}}catch{}})))()}function v({children:e,className:t,ref:n,...r}){return(0,b.jsx)(`div`,{...r,ref:n,className:(0,y.default)(`snackbar-dialog__main`,t),children:e})}var y,b;function x(){return(x=t((()=>{y=e(i(),1),b=r();try{v.displayName=`EvoSnackbarDialogMain`,v.__docgenInfo={description:"Main message region of `EvoSnackbarDialog`.",displayName:`EvoSnackbarDialogMain`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/snackbar-dialog/snackbar-dialog-main.tsx`,methods:[],props:{},tags:{summary:`Main content of a snackbar dialog.`}}}catch{}})))()}function S({children:e,className:t,ref:n,...r}){return(0,w.jsx)(`div`,{...r,ref:n,className:(0,C.default)(`snackbar-dialog__actions`,t),children:e})}var C,w;function T(){return(T=t((()=>{C=e(i(),1),w=r();try{S.displayName=`EvoSnackbarDialogActions`,S.__docgenInfo={description:"Action region placed after `EvoSnackbarDialogMain`.",displayName:`EvoSnackbarDialogActions`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/snackbar-dialog/snackbar-dialog-actions.tsx`,methods:[],props:{},tags:{summary:`Action area of a snackbar dialog.`}}}catch{}})))()}function E({a11yText:e,children:t,className:n,onClick:r,ref:i,...a}){let{close:s,onAction:c}=o();return(0,O.jsxs)(`button`,{...a,ref:i,type:`button`,"aria-label":e,className:(0,D.default)(`fake-link`,n),onClick:e=>{r?.(e),c?.(e),s()},children:[t,a.accessKey&&(0,O.jsxs)(`span`,{className:`clipped`,children:[` - Access Key: `,a.accessKey]})]})}var D,O;function k(){return(k=t((()=>{D=e(i(),1),u(),O=r();try{E.displayName=`EvoSnackbarDialogAction`,E.__docgenInfo={description:"Fake link action that closes `EvoSnackbarDialog` when activated.",displayName:`EvoSnackbarDialogAction`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/snackbar-dialog/snackbar-dialog-action.tsx`,methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/snackbar-dialog/types.ts`,name:`TypeLiteral`}],description:`Accessible label when the visible action text does not explain the action.`,name:`a11yText`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Optional action for a snackbar dialog.`}}}catch{}})))()}var A,j,M,N,P,F;function I(){return(I=t((()=>{A=n(),_(),k(),T(),x(),j=r(),M={title:`Dialogs/EvoSnackbarDialog`,component:f,subcomponents:{EvoSnackbarDialogMain:v,EvoSnackbarDialogActions:S,EvoSnackbarDialogAction:E},argTypes:{layout:{control:`select`,options:[`row`,`column`]},animated:{control:`boolean`}},args:{a11yText:`Watchlist update`}},N={render:e=>{function t(){let[t,n]=(0,A.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`button`,{type:`button`,onClick:()=>n(!0),children:`Remove from watchlist`}),(0,j.jsx)(f,{...e,open:t,onClose:()=>n(!1),children:(0,j.jsx)(v,{children:(0,j.jsx)(`p`,{children:`Item removed from your watchlist.`})})})]})}return(0,j.jsx)(t,{})}},P={render:e=>{function t(){let[t,n]=(0,A.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`button`,{type:`button`,onClick:()=>n(!0),children:`Remove from watchlist`}),(0,j.jsxs)(f,{...e,open:t,onClose:()=>n(!1),children:[(0,j.jsx)(v,{children:(0,j.jsx)(`p`,{children:`Item removed from your watchlist.`})}),(0,j.jsx)(S,{children:(0,j.jsx)(E,{onClick:()=>n(!1),children:`Undo`})})]})]})}return(0,j.jsx)(t,{})}},F=[`Default`,`WithAction`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Example() {
      const [open, setOpen] = useState(false);
      return <>
          <button type="button" onClick={() => setOpen(true)}>
            Remove from watchlist
          </button>
          <EvoSnackbarDialog {...args} open={open} onClose={() => setOpen(false)}>
            <EvoSnackbarDialogMain>
              <p>Item removed from your watchlist.</p>
            </EvoSnackbarDialogMain>
          </EvoSnackbarDialog>
        </>;
    }
    return <Example />;
  }
}`,...N.parameters?.docs?.source},description:{story:`A snackbar confirms a lightweight action and closes after six seconds.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Example() {
      const [open, setOpen] = useState(false);
      return <>
          <button type="button" onClick={() => setOpen(true)}>
            Remove from watchlist
          </button>
          <EvoSnackbarDialog {...args} open={open} onClose={() => setOpen(false)}>
            <EvoSnackbarDialogMain>
              <p>Item removed from your watchlist.</p>
            </EvoSnackbarDialogMain>
            <EvoSnackbarDialogActions>
              <EvoSnackbarDialogAction onClick={() => setOpen(false)}>
                Undo
              </EvoSnackbarDialogAction>
            </EvoSnackbarDialogActions>
          </EvoSnackbarDialog>
        </>;
    }
    return <Example />;
  }
}`,...P.parameters?.docs?.source},description:{story:`The action lets users reverse a change before the snackbar closes.`,...P.parameters?.docs?.description}}}})))()}I();export{N as Default,P as WithAction,F as __namedExportsOrder,M as default};