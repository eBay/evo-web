var L=Object.defineProperty;var o=(t,n)=>L(t,"name",{value:n,configurable:!0});import{R as e,r as m}from"./iframe-M0EPxDeV.js";import{a as s,E as d,b}from"./dialog-previous-button-C5hGzRll.js";import{E as p}from"./button-DxPbCkBI.js";import{E as T}from"./checkbox-Cx0LBbnT.js";import{E as B}from"./description-CZ8g-d4y.js";import{E as i}from"./lightbox-dialog-CQGsAkL4.js";import{E as z}from"./progress-spinner-DXtCru84.js";import"./preload-helper-Cc2_yIPf.js";import"./index-CSGTE6jH.js";import"./ebay-icon-close-16-DZJqEMm3.js";import"./icon-button-8uydnlmN.js";import"./badge-Dq40JVe9.js";import"./ebay-icon-chevron-left-16-uYWu-5Ig.js";import"./ebay-icon-chevron-down-12-zK4hOhEc.js";import"./utils-B7PsQHny.js";import"./ebay-icon-checkbox-unchecked-18-BzqfAwq-.js";import"./ebay-icon-spinner-30-BVnY0aru.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"dialogs/ebay-lightbox-dialog",component:i,argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open."},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},bannerImgSrc:{control:{type:"text"},description:"Image source for the expressive variant"},bannerImgPosition:{control:{type:"text"},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},size:{options:["wide","narrow","fullscreen","large"],description:"The size of the dialog",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},onOpen:{action:"onOpen",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"onClose",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},mode:{description:"Can be `default`, `mini`.",options:["default","mini"],control:{type:"select"}},buttonPosition:{control:{type:"text"},description:"Close button placement"},isModal:{control:{type:"boolean"},description:"Whether the dialog is modal"},ignoreEscape:{control:{type:"boolean"},description:"Whether to ignore Escape key"},animated:{description:"Renders the dialog with an animation. Note that the dialog will always be present in the DOM",control:"boolean"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},a=e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),y=o(t=>{const[n,r]=m.useState(!1),l=o(()=>r(!1),"close");return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:o(()=>r(!n),"onClick")},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:n,onOpen:o(()=>c("onOpen")(),"onOpen"),onClose:o(()=>{c("onClose")(),l()},"onClose"),a11yCloseText:"Close"},e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")),e.createElement(d,null,e.createElement(p,{priority:"primary",onClick:l},"OK"),e.createElement(p,{onClick:l},"Cancel"))))},"Default"),E=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:!0,a11yCloseText:"Close dialog"},e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"AlwaysOpened"),h=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:!0,a11yCloseText:"Close"},e.createElement(s,null,"Heading"),a,a,a,a,a,a,a,a,a,a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"ScrollingContent"),w=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,mode:"mini",open:!0,a11yCloseText:"Close"},e.createElement(s,null),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),"MiniDialog"),C=o(t=>{const[n,r]=m.useState(!1),[l,g]=m.useState(!0),u=o(()=>{l&&r(!1)},"closeDialog");return e.createElement("div",null,e.createElement(p,{onClick:o(()=>r(!n),"onClick")},"Show Dialog"),e.createElement(i,{...t,open:n,onClose:u,a11yCloseText:"Close"},e.createElement(s,null,"Heading"),e.createElement("p",null,"Unselect the following checkbox to prevent user to close the dialog"),e.createElement(T,{id:"checkbox-closeable",checked:l,onChange:o(()=>g(!l),"onChange")},e.createElement(B,null,"Enable closing dialog")),e.createElement("p",null,"Normally, the dialog can be closed by either:",e.createElement("ul",null,e.createElement("li",null,"clicking [X] icon on top of the dialog"),e.createElement("li",null,"clicking OK button"),e.createElement("li",null,"clicking the overlay or area outside the dialog"),e.createElement("li",null,"Press Esc key on keyboard"))),e.createElement(d,null,e.createElement(p,{onClick:u},"OK"))))},"DisableDialogClose"),D=o(t=>{const[n,r]=m.useState(!1),l=o(()=>r(!1),"close");return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:o(()=>r(!n),"onClick")},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:n,onClose:l,animated:!0,a11yCloseText:"Close"},e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")),e.createElement(d,null,e.createElement(p,{priority:"primary",onClick:l},"OK"),e.createElement(p,{onClick:l},"Cancel"))))},"WithAnimation"),x=o(t=>{const[n,r]=m.useState(!1),l=o(()=>r(!1),"close");return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:o(()=>r(!n),"onClick")},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:n,onClose:l,buttonPosition:"hidden",a11yCloseText:"Close"},e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")),e.createElement(d,null,e.createElement(p,{priority:"primary",onClick:l},"OK"),e.createElement(p,{onClick:l},"Cancel"))))},"WithNoBackgroundClick"),f=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:!0,a11yCloseText:"Close dialog"},e.createElement(b,{"aria-label":"Previous",onClick:c("previous button click")}),e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"WithPreviousButton"),v=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:!0,a11yCloseText:"Close dialog",size:"wide"},e.createElement(b,{"aria-label":"Previous",onClick:c("previous button click")}),e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"WithWideSize"),S=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:!0,a11yCloseText:"Close dialog",size:"narrow"},e.createElement(b,{"aria-label":"Previous",onClick:c("previous button click")}),e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"WithNarrowSize"),k=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:!0,a11yCloseText:"Close dialog",size:"fullscreen"},e.createElement(b,{"aria-label":"Previous",onClick:c("previous button click")}),e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"WithFullscreenSize"),O=o(t=>e.createElement("div",null,e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:!0,a11yCloseText:"Close dialog",size:"large"},e.createElement(b,{"aria-label":"Previous",onClick:c("previous button click")}),e.createElement(s,null,"Heading"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com")))),"WithLargeSize"),P=o(t=>{const[n,r]=m.useState(!1);return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:o(()=>r(!n),"onClick")},"Open Dialog"),e.createElement(i,{...t,bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",bannerImgPosition:"top",open:n,onOpen:o(()=>c("onOpen")(),"onOpen"),onClose:o(()=>{c("onClose")(),r(!1)},"onClose"),a11yCloseText:"Close"},e.createElement(s,null,"Heading Text"),a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))))},"Expressive"),H=o(t=>{const[n,r]=m.useState(!1),[l,g]=m.useState(!1),u=o(()=>{r(!1),g(!1)},"close");return e.createElement("div",null,e.createElement("button",{className:"btn btn--secondary",onClick:o(()=>{r(!n),g(!0),setTimeout(()=>g(!1),1e3)},"onClick")},"Open Dialog"),e.createElement("p",null,"Some outside content..."),e.createElement(i,{...t,open:n,onOpen:o(()=>c("onOpen")(),"onOpen"),onClose:o(()=>{c("onClose")(),u()},"onClose"),a11yCloseText:"Close"},e.createElement(s,null,"Heading"),l?e.createElement("div",{style:{display:"flex",justifyContent:"center"}},e.createElement(z,null)):e.createElement(e.Fragment,null,a,e.createElement("p",null,e.createElement("a",{href:"http://www.ebay.com"},"www.ebay.com"))),l?null:e.createElement(d,null,e.createElement(p,{priority:"primary",onClick:u},"OK"),e.createElement(p,{onClick:u},"Cancel"))))},"LazyContent");y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
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
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...E.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div>
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
    </div>`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} mode="mini" open a11yCloseText="Close">
            <EbayDialogHeader />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </EbayLightboxDialog>
    </div>`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
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
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="wide">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="narrow">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="fullscreen">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="large">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action("previous button click")} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
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
}`,...P.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
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
}`,...H.parameters?.docs?.source}}};const $=["Default","AlwaysOpened","ScrollingContent","MiniDialog","DisableDialogClose","WithAnimation","WithNoBackgroundClick","WithPreviousButton","WithWideSize","WithNarrowSize","WithFullscreenSize","WithLargeSize","Expressive","LazyContent"];export{E as AlwaysOpened,y as Default,C as DisableDialogClose,P as Expressive,H as LazyContent,w as MiniDialog,h as ScrollingContent,D as WithAnimation,k as WithFullscreenSize,O as WithLargeSize,S as WithNarrowSize,x as WithNoBackgroundClick,f as WithPreviousButton,v as WithWideSize,$ as __namedExportsOrder,Z as default};
