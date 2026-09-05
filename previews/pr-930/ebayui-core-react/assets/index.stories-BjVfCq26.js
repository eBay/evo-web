var w=Object.defineProperty;var l=(a,t)=>w(a,"name",{value:t,configurable:!0});import{u as D,r as F,R as e,c as I}from"./iframe-DXKVC7Wu.js";import{f as C,e as k}from"./utils-4VXCHhuo.js";import{E as H}from"./ebay-icon-upload-24-D1eFZNhe.js";import{E as v}from"./file-preview-card-group-DkrJssTI.js";import{E as x}from"./file-preview-card-DAaQ17q2.js";import"./preload-helper-Cc2_yIPf.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./menu-button-CGALqQxv.js";import"./menu-item-separator-qLY6E2OH.js";import"./index-ChCx--2D.js";import"./ebay-icon-tick-16-BRYYV87n.js";import"./button-BAvxCJp2.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./index-BzamGs-v.js";import"./floating-ui-Dh-39v5u.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-BiwhiUzw.js";import"./index-JeB-DIMX.js";import"./ebay-icon-overflow-vertical-16-VPm-z0Xi.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./ebay-icon-delete-16-K6EaJ9I9.js";import"./ebay-icon-play-16-BvSSooW5.js";const p=l(({className:a,as:t="span",...r})=>e.createElement(t,{className:I("file-input__content-header",a),...r}),"EbayFileInputHeader"),f=l(({className:a,as:t="span",...r})=>e.createElement(t,{className:I("file-input__content-subheader",a),...r}),"EbayFileInputSubheader"),g=l(({children:a,onInput:t,className:r,...s})=>{const o=D(),[i,n]=F.useState(!1),c=l(y=>{t&&t(y,{files:y.target.files})},"handleFileChange"),d=l(()=>n(!0),"handleDragOver"),m=l(()=>n(!1),"handleDragLeave"),u=C(a,p),S=C(a,f),_=k(a,p).filter(({type:y})=>y!==f);return e.createElement("div",{className:I("file-input",i&&"file-input___container--dragged-over",r)},e.createElement("div",{className:"file-input__container"},e.createElement("div",{className:"file-input__upload-icon"},e.createElement(H,null)),e.createElement("div",{className:"file-input__content"},u,S,_&&e.createElement("label",{htmlFor:s.id||o},e.createElement("span",{className:"file-input__content-cta"},_)))),e.createElement("input",{...s,id:s.id||o,type:"file",className:"file-input__input",onChange:c,onDragEnter:d,onDragOver:d,onDragLeave:m,onDrop:m}))},"EbayFileInput");try{p.displayName="EbayFileInputHeader",p.__docgenInfo={description:"",displayName:"EbayFileInputHeader",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-file-input/file-input.tsx",methods:[],props:{},tags:{}}}catch{}try{f.displayName="EbayFileInputSubheader",f.__docgenInfo={description:"",displayName:"EbayFileInputSubheader",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-file-input/file-input.tsx",methods:[],props:{},tags:{}}}catch{}const ne={title:"form input/ebay-file-input",component:g,argTypes:{multiple:{type:"boolean",control:{type:"boolean"},description:"Whether multiple files can be uploaded"},onInput:{action:"onInput",description:"Triggered when the file(s) are uploaded",table:{category:"Events",defaultValue:{summary:"event, { files }"}}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},E=l(a=>e.createElement(g,{...a},e.createElement(p,null,"Upload your files"),e.createElement(f,null,"Supported formats: .jpg, .png"),e.createElement("span",null,"Click or drag files here to upload")),"Default"),b=l(a=>{const[t,r]=F.useState([]),s=l((i,n)=>{r(t.concat(Array.from(n.files)))},"handleInput"),o=l((i,n)=>{r([...t.slice(0,n.index),...t.slice(n.index+1)])},"handleDelete");return e.createElement(e.Fragment,null,e.createElement(g,{...a,onInput:s},e.createElement(p,null,"Custom Header"),e.createElement("span",null,"Click or drag files here to upload")),e.createElement(v,{onDelete:o,onCancel:o},t.map((i,n)=>e.createElement(x,{key:n,file:i,deleteText:"Delete",a11yCancelUploadText:"Cancel upload"}))))},"WithPreviewCards"),h=l(a=>{const[t,r]=F.useState([]),s=l((i,n)=>{const c=Array.from(n.files);r(t.concat(c.map(d=>[d,void 0]))),c.forEach(async(d,m)=>{await new Promise(u=>setTimeout(u,Math.random()*5e3)),r(u=>[...u.slice(0,m),[d,`https://fakeurl.com/${Math.random().toString(36).substring(7)}`],...u.slice(m+1)])})},"handleInput"),o=l((i,n)=>{r([...t.slice(0,n.index),...t.slice(n.index+1)])},"handleDelete");return e.createElement(e.Fragment,null,e.createElement(g,{multiple:!0,...a,onInput:s},e.createElement(p,null,e.createElement("p",null,"Multiple files")),e.createElement("span",null,"Browse files")),e.createElement(v,{onDelete:o,onCancel:o},t.map(([i,n],c)=>e.createElement(x,{key:c,file:i,deleteText:"Delete",status:n?void 0:"uploading",a11yCancelUploadText:"Cancel upload"}))))},"WithMockUploads"),le=["Default","WithPreviewCards","WithMockUploads"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayFileInput {...args}>
        <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
        <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
        <span>Click or drag files here to upload</span>
    </EbayFileInput>`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}};export{E as Default,h as WithMockUploads,b as WithPreviewCards,le as __namedExportsOrder,ne as default};
