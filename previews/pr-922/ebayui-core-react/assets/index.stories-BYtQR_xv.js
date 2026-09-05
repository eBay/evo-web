import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{n as r}from"./iframe-RezWaW69.js";import{f as i,n as a,t as o,u as s}from"./ebay-dialog-base-Dkvy9hiC.js";import{n as c,t as l}from"./ebay-button-B_FEPJ7h.js";import{n as u,t as d}from"./ebay-progress-spinner-qgNlXfna.js";import{n as f,t as p}from"./ebay-lightbox-dialog-CzJDL8Ef.js";import{i as m,t as h}from"./ebay-field-BAldZaAE.js";import{n as g,t as _}from"./ebay-checkbox-CrS3fqEa.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{v=e(n()),o(),l(),_(),h(),p(),d(),y=r(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`dialogs/ebay-lightbox-dialog`,component:f,argTypes:{open:{type:`boolean`,control:{type:`boolean`},description:`Whether dialog is open.`},focus:{control:{type:`text`},description:`An id for an element which will receive focus when the dialog opens (defaults to close button).`},a11yCloseText:{control:{type:`text`},description:`A11y text for close button and mask.`},bannerImgSrc:{control:{type:`text`},description:`Image source for the expressive variant`},bannerImgPosition:{control:{type:`text`},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},size:{options:[`wide`,`narrow`,`fullscreen`,`large`],description:`The size of the dialog`,table:{defaultValue:{summary:`regular`}},type:{category:`Options`}},onOpen:{action:`onOpen`,description:`Triggered on dialog opened`,table:{category:`Events`,defaultValue:{summary:``}}},onClose:{action:`onClose`,description:`Triggered on dialog closed.`,table:{category:`Events`,defaultValue:{summary:``}}},mode:{description:"Can be `default`, `mini`.",options:[`default`,`mini`],control:{type:`select`}},buttonPosition:{control:{type:`text`},description:`Close button placement`},isModal:{control:{type:`boolean`},description:`Whether the dialog is modal`},ignoreEscape:{control:{type:`boolean`},description:`Whether to ignore Escape key`},animated:{description:`Renders the dialog with an animation. Note that the dialog will always be present in the DOM`,control:`boolean`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayLightboxDialog } from "@ebay/ui-core-react/ebay-lightbox-dialog";
import { EbayDialogHeader, EbayDialogFooter } from "@ebay/ui-core-react/ebay-dialog-base";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/lightbox-dialog";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/lightbox-dialog.css";
\`\`\``}}}},S=(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),C=e=>{let[t,n]=(0,v.useState)(!1),r=()=>n(!1);return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`button`,{className:`btn btn--secondary`,onClick:()=>n(!t),children:`Open Dialog`}),(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:t,onOpen:()=>b(`onOpen`)(),onClose:()=>{b(`onClose`)(),r()},a11yCloseText:`Close`,children:[(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})}),(0,y.jsxs)(s,{children:[(0,y.jsx)(c,{priority:`primary`,onClick:r,children:`OK`}),(0,y.jsx)(c,{onClick:r,children:`Cancel`})]})]})]})},w=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:!0,a11yCloseText:`Close dialog`,children:[(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]}),T=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:!0,a11yCloseText:`Close`,children:[(0,y.jsx)(i,{children:`Heading`}),S,S,S,S,S,S,S,S,S,S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]}),E=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,mode:`mini`,open:!0,a11yCloseText:`Close`,children:[(0,y.jsx)(i,{}),(0,y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]})]}),D=e=>{let[t,n]=(0,v.useState)(!1),[r,a]=(0,v.useState)(!0),o=()=>{r&&n(!1)};return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(c,{onClick:()=>n(!t),children:`Show Dialog`}),(0,y.jsxs)(f,{...e,open:t,onClose:o,a11yCloseText:`Close`,children:[(0,y.jsx)(i,{children:`Heading`}),(0,y.jsx)(`p`,{children:`Unselect the following checkbox to prevent user to close the dialog`}),(0,y.jsx)(g,{id:`checkbox-closeable`,checked:r,onChange:()=>a(!r),children:(0,y.jsx)(m,{children:`Enable closing dialog`})}),(0,y.jsxs)(`p`,{children:[`Normally, the dialog can be closed by either:`,(0,y.jsxs)(`ul`,{children:[(0,y.jsx)(`li`,{children:`clicking [X] icon on top of the dialog`}),(0,y.jsx)(`li`,{children:`clicking OK button`}),(0,y.jsx)(`li`,{children:`clicking the overlay or area outside the dialog`}),(0,y.jsx)(`li`,{children:`Press Esc key on keyboard`})]})]}),(0,y.jsx)(s,{children:(0,y.jsx)(c,{onClick:o,children:`OK`})})]})]})},O=e=>{let[t,n]=(0,v.useState)(!1),r=()=>n(!1);return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`button`,{className:`btn btn--secondary`,onClick:()=>n(!t),children:`Open Dialog`}),(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:t,onClose:r,animated:!0,a11yCloseText:`Close`,children:[(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})}),(0,y.jsxs)(s,{children:[(0,y.jsx)(c,{priority:`primary`,onClick:r,children:`OK`}),(0,y.jsx)(c,{onClick:r,children:`Cancel`})]})]})]})},k=e=>{let[t,n]=(0,v.useState)(!1),r=()=>n(!1);return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`button`,{className:`btn btn--secondary`,onClick:()=>n(!t),children:`Open Dialog`}),(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:t,onClose:r,buttonPosition:`hidden`,a11yCloseText:`Close`,children:[(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})}),(0,y.jsxs)(s,{children:[(0,y.jsx)(c,{priority:`primary`,onClick:r,children:`OK`}),(0,y.jsx)(c,{onClick:r,children:`Cancel`})]})]})]})},A=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:!0,a11yCloseText:`Close dialog`,children:[(0,y.jsx)(a,{"aria-label":`Previous`,onClick:b(`previous button click`)}),(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]}),j=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:!0,a11yCloseText:`Close dialog`,size:`wide`,children:[(0,y.jsx)(a,{"aria-label":`Previous`,onClick:b(`previous button click`)}),(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]}),M=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:!0,a11yCloseText:`Close dialog`,size:`narrow`,children:[(0,y.jsx)(a,{"aria-label":`Previous`,onClick:b(`previous button click`)}),(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]}),N=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:!0,a11yCloseText:`Close dialog`,size:`fullscreen`,children:[(0,y.jsx)(a,{"aria-label":`Previous`,onClick:b(`previous button click`)}),(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]}),P=e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:!0,a11yCloseText:`Close dialog`,size:`large`,children:[(0,y.jsx)(a,{"aria-label":`Previous`,onClick:b(`previous button click`)}),(0,y.jsx)(i,{children:`Heading`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]}),F=e=>{let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`button`,{className:`btn btn--secondary`,onClick:()=>n(!t),children:`Open Dialog`}),(0,y.jsxs)(f,{...e,bannerImgSrc:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg`,bannerImgPosition:`top`,open:t,onOpen:()=>b(`onOpen`)(),onClose:()=>{b(`onClose`)(),n(!1)},a11yCloseText:`Close`,children:[(0,y.jsx)(i,{children:`Heading Text`}),S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]})]})},I=e=>{let[t,n]=(0,v.useState)(!1),[r,a]=(0,v.useState)(!1),o=()=>{n(!1),a(!1)};return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`button`,{className:`btn btn--secondary`,onClick:()=>{n(!t),a(!0),setTimeout(()=>a(!1),1e3)},children:`Open Dialog`}),(0,y.jsx)(`p`,{children:`Some outside content...`}),(0,y.jsxs)(f,{...e,open:t,onOpen:()=>b(`onOpen`)(),onClose:()=>{b(`onClose`)(),o()},a11yCloseText:`Close`,children:[(0,y.jsx)(i,{children:`Heading`}),r?(0,y.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,y.jsx)(u,{})}):(0,y.jsxs)(y.Fragment,{children:[S,(0,y.jsx)(`p`,{children:(0,y.jsx)(`a`,{href:`http://www.ebay.com`,children:`www.ebay.com`})})]}),r?null:(0,y.jsxs)(s,{children:[(0,y.jsx)(c,{priority:`primary`,onClick:o,children:`OK`}),(0,y.jsx)(c,{onClick:o,children:`Cancel`})]})]})]})},L=[`Default`,`AlwaysOpened`,`ScrollingContent`,`MiniDialog`,`DisableDialogClose`,`WithAnimation`,`WithNoBackgroundClick`,`WithPreviousButton`,`WithWideSize`,`WithNarrowSize`,`WithFullscreenSize`,`WithLargeSize`,`Expressive`,`LazyContent`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onOpen={() => action("onOpen")()} onClose={() => {
      action("onClose")();
      close();
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} mode="mini" open a11yCloseText="Close">
            <EbayDialogHeader />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </EbayLightboxDialog>
    </div>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogCloseable, setDialogCloseable] = useState(true);
  const closeDialog = () => {
    if (dialogCloseable) {
      setShowDialog(false);
    }
  };
  return <div>
            <EbayButton onClick={() => setShowDialog(!showDialog)}>Show Dialog</EbayButton>

            <EbayLightboxDialog {...args} open={showDialog} onClose={closeDialog} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>

                <p>Unselect the following checkbox to prevent user to close the dialog</p>
                <EbayCheckbox id="checkbox-closeable" checked={dialogCloseable} onChange={() => setDialogCloseable(!dialogCloseable)}>
                    <EbayLabel>Enable closing dialog</EbayLabel>
                </EbayCheckbox>

                <p>
                    Normally, the dialog can be closed by either:
                    <ul>
                        <li>clicking [X] icon on top of the dialog</li>
                        <li>clicking OK button</li>
                        <li>clicking the overlay or area outside the dialog</li>
                        <li>Press Esc key on keyboard</li>
                    </ul>
                </p>

                <EbayDialogFooter>
                    <EbayButton onClick={closeDialog}>OK</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} animated a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} buttonPosition="hidden" a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="wide">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="narrow">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="fullscreen">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="large">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <EbayLightboxDialog {...args} bannerImgSrc="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg" bannerImgPosition="top" open={open} onOpen={() => action("onOpen")()} onClose={() => {
      action("onClose")();
      setOpen(false);
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading Text</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayLightboxDialog>
        </div>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const close = () => {
    setOpen(false);
    setIsPending(false);
  };
  return <div>
            <button className="btn btn--secondary" onClick={() => {
      setOpen(!open);
      setIsPending(true);
      setTimeout(() => setIsPending(false), 1000);
    }}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onOpen={() => action("onOpen")()} onClose={() => {
      action("onClose")();
      close();
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {isPending ? <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
                        <EbayProgressSpinner />
                    </div> : <>
                        {textParagraph}
                        <p>
                            <a href="http://www.ebay.com">www.ebay.com</a>
                        </p>
                    </>}

                {isPending ? null : <EbayDialogFooter>
                        <EbayButton priority="primary" onClick={close}>
                            OK
                        </EbayButton>
                        <EbayButton onClick={close}>Cancel</EbayButton>
                    </EbayDialogFooter>}
            </EbayLightboxDialog>
        </div>;
}`,...I.parameters?.docs?.source}}}})))()}R();export{w as AlwaysOpened,C as Default,D as DisableDialogClose,F as Expressive,I as LazyContent,E as MiniDialog,T as ScrollingContent,O as WithAnimation,N as WithFullscreenSize,P as WithLargeSize,M as WithNarrowSize,k as WithNoBackgroundClick,A as WithPreviousButton,j as WithWideSize,L as __namedExportsOrder,x as default};