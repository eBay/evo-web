import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{a as i,i as a,t as o}from"./utils-i55QFFMK.js";import{r as s}from"./random-id-C4JIZuFN.js";import{n as c}from"./iframe-RezWaW69.js";import{t as l}from"./utils-BI15M-bA.js";import{n as u,t as d}from"./ebay-icon-upload-24-DVgePFw7.js";import{n as f,t as p}from"./ebay-file-preview-card-CJLPsubx.js";import{n as m,t as h}from"./ebay-file-preview-card-group-D44UuZEl.js";var g,_,v,y,b;function x(){return(x=t((()=>{g=e(n()),i(),_=e(r()),l(),u(),v=({className:e,as:t=`span`,...n})=>g.createElement(t,{className:(0,_.default)(`file-input__content-header`,e),...n}),y=({className:e,as:t=`span`,...n})=>g.createElement(t,{className:(0,_.default)(`file-input__content-subheader`,e),...n}),b=({children:e,onInput:t,className:n,...r})=>{let i=s(),[c,l]=(0,g.useState)(!1),u=e=>{t&&t(e,{files:e.target.files})},f=()=>l(!0),p=()=>l(!1),m=a(e,v),h=a(e,y),b=o(e,v).filter(({type:e})=>e!==y);return g.createElement(`div`,{className:(0,_.default)(`file-input`,c&&`file-input___container--dragged-over`,n)},g.createElement(`div`,{className:`file-input__container`},g.createElement(`div`,{className:`file-input__upload-icon`},g.createElement(d,null)),g.createElement(`div`,{className:`file-input__content`},m,h,b&&g.createElement(`label`,{htmlFor:r.id||i},g.createElement(`span`,{className:`file-input__content-cta`},b)))),g.createElement(`input`,{...r,id:r.id||i,type:`file`,className:`file-input__input`,onChange:u,onDragEnter:f,onDragOver:f,onDragLeave:p,onDrop:p}))};try{v.displayName=`EbayFileInputHeader`,v.__docgenInfo={description:``,displayName:`EbayFileInputHeader`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-file-input/file-input.tsx`,methods:[],props:{},tags:{}}}catch{}try{y.displayName=`EbayFileInputSubheader`,y.__docgenInfo={description:``,displayName:`EbayFileInputSubheader`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-file-input/file-input.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function S(){return(S=t((()=>{x()})))()}var C,w,T,E,D,O,k;function A(){return(A=t((()=>{C=e(n()),S(),h(),p(),w=c(),T={title:`form input/ebay-file-input`,component:b,argTypes:{multiple:{type:`boolean`,control:{type:`boolean`},description:`Whether multiple files can be uploaded`},onInput:{action:`onInput`,description:`Triggered when the file(s) are uploaded`,table:{category:`Events`,defaultValue:{summary:`event, { files }`}}}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFileInput, EbayFileInputHeader, EbayFileInputSubheader } from "@ebay/ui-core-react/ebay-file-input";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/file-input";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/file-input.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayFileInput onInput={(event, { files }) => console.log(files)}>
    <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
    <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
    <span>Click or drag files here to upload</span>
</EbayFileInput>
\`\`\``}}}},E=e=>(0,w.jsxs)(b,{...e,children:[(0,w.jsx)(v,{children:`Upload your files`}),(0,w.jsx)(y,{children:`Supported formats: .jpg, .png`}),(0,w.jsx)(`span`,{children:`Click or drag files here to upload`})]}),D=e=>{let[t,n]=(0,C.useState)([]),r=(e,r)=>{n(t.concat(Array.from(r.files)))},i=(e,r)=>{n([...t.slice(0,r.index),...t.slice(r.index+1)])};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b,{...e,onInput:r,children:[(0,w.jsx)(v,{children:`Custom Header`}),(0,w.jsx)(`span`,{children:`Click or drag files here to upload`})]}),(0,w.jsx)(m,{onDelete:i,onCancel:i,children:t.map((e,t)=>(0,w.jsx)(f,{file:e,deleteText:`Delete`,a11yCancelUploadText:`Cancel upload`},t))})]})},O=e=>{let[t,n]=(0,C.useState)([]),r=(e,r)=>{let i=Array.from(r.files);n(t.concat(i.map(e=>[e,void 0]))),i.forEach(async(e,t)=>{await new Promise(e=>setTimeout(e,Math.random()*5e3)),n(n=>[...n.slice(0,t),[e,`https://fakeurl.com/${Math.random().toString(36).substring(7)}`],...n.slice(t+1)])})},i=(e,r)=>{n([...t.slice(0,r.index),...t.slice(r.index+1)])};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b,{multiple:!0,...e,onInput:r,children:[(0,w.jsx)(v,{children:(0,w.jsx)(`p`,{children:`Multiple files`})}),(0,w.jsx)(`span`,{children:`Browse files`})]}),(0,w.jsx)(m,{onDelete:i,onCancel:i,children:t.map(([e,t],n)=>(0,w.jsx)(f,{file:e,deleteText:`Delete`,status:t?void 0:`uploading`,a11yCancelUploadText:`Cancel upload`},n))})]})},k=[`Default`,`WithPreviewCards`,`WithMockUploads`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayFileInput {...args}>
        <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
        <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
        <span>Click or drag files here to upload</span>
    </EbayFileInput>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<File[]>([]);
  const handleInput = (_, data) => {
    setFiles(files.concat(Array.from(data.files)));
  };
  const handleDelete: FilePreviewCardActionHandler = (_, data) => {
    setFiles([...files.slice(0, data!.index), ...files.slice(data!.index + 1)]);
  };
  return <>
            <EbayFileInput {...args} onInput={handleInput}>
                <EbayFileInputHeader>Custom Header</EbayFileInputHeader>
                <span>Click or drag files here to upload</span>
            </EbayFileInput>

            <EbayFilePreviewCardGroup onDelete={handleDelete} onCancel={handleDelete}>
                {files.map((file, i) => <EbayFilePreviewCard key={i} file={file} deleteText="Delete" a11yCancelUploadText="Cancel upload" />)}
            </EbayFilePreviewCardGroup>
        </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<[File, string?][]>([]);
  const handleInput: FileInputHandler = (_, data) => {
    const fileList = Array.from(data!.files);
    setFiles(files.concat(fileList.map(file => [file, undefined])));
    fileList.forEach(async (file, index) => {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
      setFiles(prevFiles => [...prevFiles.slice(0, index), [file, \`https://fakeurl.com/\${Math.random().toString(36).substring(7)}\`], ...prevFiles.slice(index + 1)]);
    });
  };
  const handleDelete: FilePreviewCardActionHandler = (_, data) => {
    setFiles([...files.slice(0, data!.index), ...files.slice(data!.index + 1)]);
  };
  return <>
            <EbayFileInput multiple {...args} onInput={handleInput}>
                <EbayFileInputHeader>
                    <p>Multiple files</p>
                </EbayFileInputHeader>
                <span>Browse files</span>
            </EbayFileInput>

            <EbayFilePreviewCardGroup onDelete={handleDelete} onCancel={handleDelete}>
                {files.map(([file, url], i) => <EbayFilePreviewCard key={i} file={file} deleteText="Delete" status={!url ? "uploading" : undefined} a11yCancelUploadText="Cancel upload" />)}
            </EbayFilePreviewCardGroup>
        </>;
}`,...O.parameters?.docs?.source}}}})))()}A();export{E as Default,O as WithMockUploads,D as WithPreviewCards,k as __namedExportsOrder,T as default};