var D=Object.defineProperty;var l=(a,t)=>D(a,"name",{value:t,configurable:!0});import{u as w,r as F,R as e,c as I}from"./iframe-B-WwXkW8.js";import{b as C,e as k}from"./utils-Bu2XGOMB.js";import{E as H}from"./ebay-icon-upload-24-CV7rsw85.js";import{E as v}from"./file-preview-card-group-Bf5EvSjY.js";import{E as S}from"./file-preview-card-D-3llEFj.js";import"./preload-helper-Cc2_yIPf.js";import"./icon-button-qow2nyV_.js";import"./badge-Bku_qsPb.js";import"./menu-button-D2DRPG9Z.js";import"./menu-item-separator-BhgAht2W.js";import"./index-DhKlWmW_.js";import"./ebay-icon-tick-16-COb6Kp2f.js";import"./button-dea1nGQ7.js";import"./progress-spinner-Ltm17U7i.js";import"./ebay-icon-spinner-30-C_4sW2qs.js";import"./ebay-icon-chevron-down-12-CuD0NX1z.js";import"./index-BzamGs-v.js";import"./floating-ui-BjdPRm0J.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-DpUCIB_4.js";import"./index-YJ3PNYhx.js";import"./ebay-icon-overflow-vertical-16-uAJXi20n.js";import"./ebay-icon-close-16-DcYx1HXj.js";import"./ebay-icon-delete-16-BShXO29k.js";import"./ebay-icon-play-16-B9V_2S_q.js";const p=l(({className:a,as:t="span",...r})=>e.createElement(t,{className:I("file-input__content-header",a),...r}),"EbayFileInputHeader"),f=l(({className:a,as:t="span",...r})=>e.createElement(t,{className:I("file-input__content-subheader",a),...r}),"EbayFileInputSubheader"),h=l(({children:a,onInput:t,className:r,...o})=>{const s=w(),[i,n]=F.useState(!1),c=l(y=>{t&&t(y,{files:y.target.files})},"handleFileChange"),d=l(()=>n(!0),"handleDragOver"),m=l(()=>n(!1),"handleDragLeave"),u=C(a,p),x=C(a,f),_=k(a,p).filter(({type:y})=>y!==f);return e.createElement("div",{className:I("file-input",i&&"file-input___container--dragged-over",r)},e.createElement("div",{className:"file-input__container"},e.createElement("div",{className:"file-input__upload-icon"},e.createElement(H,null)),e.createElement("div",{className:"file-input__content"},u,x,_&&e.createElement("label",{htmlFor:o.id||s},e.createElement("span",{className:"file-input__content-cta"},_)))),e.createElement("input",{...o,id:o.id||s,type:"file",className:"file-input__input",onChange:c,onDragEnter:d,onDragOver:d,onDragLeave:m,onDrop:m}))},"EbayFileInput");try{p.displayName="EbayFileInputHeader",p.__docgenInfo={description:"",displayName:"EbayFileInputHeader",props:{}}}catch{}try{f.displayName="EbayFileInputSubheader",f.__docgenInfo={description:"",displayName:"EbayFileInputSubheader",props:{}}}catch{}const ne={title:"form input/ebay-file-input",component:h,argTypes:{multiple:{type:"boolean",control:{type:"boolean"},description:"Whether multiple files can be uploaded"},onInput:{action:"onInput",description:"Triggered when the file(s) are uploaded",table:{category:"Events",defaultValue:{summary:"event, { files }"}}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},E=l(a=>e.createElement(h,{...a},e.createElement(p,null,"Upload your files"),e.createElement(f,null,"Supported formats: .jpg, .png"),e.createElement("span",null,"Click or drag files here to upload")),"Default"),b=l(a=>{const[t,r]=F.useState([]),o=l((i,n)=>{r(t.concat(Array.from(n.files)))},"handleInput"),s=l((i,n)=>{r([...t.slice(0,n.index),...t.slice(n.index+1)])},"handleDelete");return e.createElement(e.Fragment,null,e.createElement(h,{...a,onInput:o},e.createElement(p,null,"Custom Header"),e.createElement("span",null,"Click or drag files here to upload")),e.createElement(v,{onDelete:s,onCancel:s},t.map((i,n)=>e.createElement(S,{key:n,file:i,deleteText:"Delete",a11yCancelUploadText:"Cancel upload"}))))},"WithPreviewCards"),g=l(a=>{const[t,r]=F.useState([]),o=l((i,n)=>{const c=Array.from(n.files);r(t.concat(c.map(d=>[d,void 0]))),c.forEach(async(d,m)=>{await new Promise(u=>setTimeout(u,Math.random()*5e3)),r(u=>[...u.slice(0,m),[d,`https://fakeurl.com/${Math.random().toString(36).substring(7)}`],...u.slice(m+1)])})},"handleInput"),s=l((i,n)=>{r([...t.slice(0,n.index),...t.slice(n.index+1)])},"handleDelete");return e.createElement(e.Fragment,null,e.createElement(h,{multiple:!0,...a,onInput:o},e.createElement(p,null,e.createElement("p",null,"Multiple files")),e.createElement("span",null,"Browse files")),e.createElement(v,{onDelete:s,onCancel:s},t.map(([i,n],c)=>e.createElement(S,{key:c,file:i,deleteText:"Delete",status:n?void 0:"uploading",a11yCancelUploadText:"Cancel upload"}))))},"WithMockUploads");E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayFileInput {...args}>
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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
}`,...g.parameters?.docs?.source}}};const le=["Default","WithPreviewCards","WithMockUploads"];export{E as Default,g as WithMockUploads,b as WithPreviewCards,le as __namedExportsOrder,ne as default};
