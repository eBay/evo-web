import{v as y,b as _,_ as v,e as x,p as T,d as U,c as k}from"./defineComponent-B-Bg3Ud2.js";import{_ as j}from"./index-H2tXU2Th.js";import{_ as u}from"./render-tag-B9T2mz-j.js";import{_ as b}from"./dynamic-tag-B3Rndxlm.js";import{a as s}from"./attr-tag-Dvq4QMvY.js";import{_ as o}from"./const-element-Ea3wmYuQ.js";import{_ as W}from"./of-fallback-DrWEmKV1.js";import{_ as A}from"./index-DSfwKluY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-FyAlw5u2.js";import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-BXTIgzdK.js";import"./index-D7kkco59.js";import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";import"./index-DjQpa7MO.js";/* empty css                    */import"./index-BeNpkb6R.js";import"./index-CZw0tK3j.js";import"./index-Cw3bSwrm.js";import"./index-D4_UUNUd.js";import"./index-n7KuEsog.js";import"./index-B5lUsV-x.js";/* empty css             */import"./index-Bue5N1gN.js";import"./index-BSoKmMuk.js";import"./index-CiJctCOb.js";import"./style-value-D9hyxyYb.js";import"./index-DptDIuuf.js";import"./index-D1mN6L1e.js";import"./index-Ktyjf5Jd.js";import"./index-CNiudnPv.js";import"./index-By62WOW2.js";import"./index-DvCAfrCY.js";import"./dynamic-import-DdmK3sM_.js";import"./index-CJDBRdqY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVXY2btv.js";const R=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-file-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Wrapper for \`<input type="file">\` with additional styles applied.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-file-input)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-file-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-file-input/examples)
`;class V extends Marko.Component{onCreate(){this.state={dragging:!1}}handleFileChange(e){const t=e.target;this.emit("input",{files:t.files,originalEvent:e})}handleDragOver(){this.state.dragging=!0}handleDragLeave(){this.state.dragging=!1}}const $="Gz6clbZ",r=y.t($);_.r($,()=>r);const L=V;r._=v(function(n,e,t,i,l,f){const{header:a,class:C,subheader:I,renderBody:F,...H}=n;if(e.be("div",{class:x(["file-input",C])},"0",i,null,1),e.be("div",{class:x(["file-input__container",l.dragging&&"file-input___container--dragged-over"])},"1",i,null,1),e.be("div",{class:"file-input__upload-icon"},"2",i,null,1),u(j,{},e,t,"3"),e.ee(),e.be("div",{class:"file-input__content"},"4",i,null,1),a){const{as:w,class:M,renderBody:S,...q}=a;b(e,w||"span",()=>({class:["file-input__content-header",M],...T(q),id:a.id}),z=>{b(z,a.renderBody,null,null,null,null,t,"6")},null,null,t,"5")}if(I){const{class:w,renderBody:M,...S}=I;e.be("span",U({class:x(["file-input__content-subheader",w])},T(S)),"7",i,null,4),b(e,I.renderBody,null,null,null,null,t,"8"),e.ee()}F&&(e.be("label",{for:t.elId("input")},"9",i,null,0),e.be("span",{class:"file-input__content-cta"},"10",i,null,1),b(e,F,null,null,null,null,t,"11"),e.ee(),e.ee()),e.ee(),e.ee(),e.e("input",U({type:"file",class:"file-input__input",id:t.elId("input")},T(H)),"12",i,0,4,{onchange:t.d("change","handleFileChange",!1),ondragenter:t.d("dragenter","handleDragOver",!1),ondragover:t.d("dragover","handleDragOver",!1),ondragleave:t.d("dragleave","handleDragLeave",!1),ondrop:t.d("drop","handleDragLeave",!1)}),e.ee()},{t:$},L);r.Component=k(L,r._);const B="lGTF9sq",m=y.t(B),Z=o("p",null,1).t("Subtitle 1"),J=o("p",null,1).t("Subtitle 2"),K=o("span",null,1).t("Browse files");_.r(B,()=>m);const P={};m._=v(function(n,e,t,i,l,f){u(r,s.i(()=>(s.a("header",{class:"titleClass",id:"titleId",renderBody:a=>{a.t("Title",i)}}),s.a("subheader",{class:"subtitleClass",id:"subtitleId",renderBody:a=>{a.n(Z,i),a.n(J,i)}}),a=>{a.n(K,i)}),{...n,header:void 0,subheader:void 0}),e,t,"0")},{t:B,i:!0},P);m.Component=k(P,m._);const N=`<ebay-file-input ...input>
    <@header class="titleClass" id="titleId">
        Title
    </@header>
    <@subheader class="subtitleClass" id="subtitleId">
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subheader>
    <span>Browse files</span>
</ebay-file-input>
`,D="o1b8A5c",h=y.t(D),Q=o("p",null,1).t("Multiple files"),X=o("span",null,1).t("Browse files");_.r(D,()=>h);const O={onCreate(){this.state={files:[]}},handleInput({files:n}){this.state.files=this.state.files.concat(Array.from(n))},handleDelete(n){this.state.files=[...this.state.files.slice(0,n),...this.state.files.slice(n+1)]}};h._=v(function(n,e,t,i,l,f){u(r,s.i(()=>(s.a("header",{class:"subtitleClass",id:"subtitleId",renderBody:a=>{a.n(Q,i)}}),a=>{a.n(X,i)}),{multiple:!0,...n,header:void 0}),e,t,"0",[["input","handleInput",!1]]),u(A,s.i(()=>{for(const a of W(l.files))s.a("card",{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:a})}),e,t,"3",[["delete","handleDelete",!1],["cancel","handleDelete",!1]])},{t:D},O);h.Component=k(O,h._);const Y=`import type { FileInputEvent } from "../component";
class {
    declare state: {
        files: File[];
    };

    onCreate() {
        this.state = {
            files: [],
        };
    }

    handleInput({ files }: FileInputEvent) {
        this.state.files = this.state.files.concat(Array.from(files));
    }

    handleDelete(index: number) {
        this.state.files = [
            ...this.state.files.slice(0, index),
            ...this.state.files.slice(index + 1),
        ];
    }
}
<ebay-file-input multiple on-input("handleInput") ...input>
    <@header class="subtitleClass" id="subtitleId">
        <p>Multiple files</p>
    </@header>
    <span>Browse files</span>
</ebay-file-input>

<ebay-file-preview-card-group
    on-delete("handleDelete")
    on-cancel("handleDelete")
>
    <for|file| of=state.files>
        <@card
            a11yCancelUploadText="Cancel upload"
            deleteText="Delete"
            file=file
        />
    </for>
</ebay-file-preview-card-group>
`,E="Gu1qlSC",g=y.t(E);async function ee(){return await new Promise(n=>setTimeout(n,Math.random()*5e3)),`https://fakeurl.com/${Math.random().toString(36).substring(7)}`}const te=o("p",null,1).t("Multiple files"),ne=o("span",null,1).t("Browse files");_.r(E,()=>g);const G={onCreate(){this.state={files:[]}},handleInput({files:n}){const e=Array.from(n);this.state.files=this.state.files.concat(e.map(t=>[t,void 0]));for(const t of e)ee().then(i=>{const l=this.state.files.findIndex(([f])=>f===t);this.state.files=[...this.state.files.slice(0,l),[t,i],...this.state.files.slice(l+1)]})},handleDelete(n){this.state.files=[...this.state.files.slice(0,n),...this.state.files.slice(n+1)]}};g._=v(function(n,e,t,i,l,f){u(r,s.i(()=>(s.a("header",{class:"subtitleClass",id:"subtitleId",renderBody:a=>{a.n(te,i)}}),a=>{a.n(ne,i)}),{multiple:!0,...n,header:void 0}),e,t,"0",[["input","handleInput",!1]]),u(A,s.i(()=>{for(const[a,C]of W(l.files))s.a("card",{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:a,status:C?void 0:"uploading"})}),e,t,"3",[["delete","handleDelete",!1],["cancel","handleDelete",!1]])},{t:E},G);g.Component=k(G,g._);const ae=`import type { FileInputEvent } from "../component";
static async function mockFetch() {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
    return \`https://fakeurl.com/\${Math.random().toString(36).substring(7)}\`;
}
class {
    declare state: {
        files: [File, string | undefined][];
    };

    onCreate() {
        this.state = {
            files: [],
        };
    }

    handleInput({ files }: FileInputEvent) {
        const fileList = Array.from(files);
        this.state.files = this.state.files.concat(
            fileList.map((file) => [file, undefined]),
        );
        for (const file of fileList) {
            mockFetch().then((url) => {
                const index = this.state.files.findIndex(([f]) => f === file);
                this.state.files = [
                    ...this.state.files.slice(0, index),
                    [file, url],
                    ...this.state.files.slice(index + 1),
                ];
            });
        }
    }

    handleDelete(index: number) {
        this.state.files = [
            ...this.state.files.slice(0, index),
            ...this.state.files.slice(index + 1),
        ];
    }
}
<ebay-file-input multiple on-input("handleInput") ...input>
    <@header class="subtitleClass" id="subtitleId">
        <p>Multiple files</p>
    </@header>
    <span>Browse files</span>
</ebay-file-input>

<ebay-file-preview-card-group
    on-delete("handleDelete")
    on-cancel("handleDelete")
>
    <for|[file, url]| of=state.files>
        <@card
            a11yCancelUploadText="Cancel upload"
            deleteText="Delete"
            file=file
            status=(url ? undefined : "uploading")
        />
    </for>
</ebay-file-preview-card-group>
`,Ke={title:"form input/ebay-file-input",component:r,parameters:{docs:{description:{component:R}}},argTypes:{multiple:{type:"boolean",control:{type:"boolean"},description:"Whether multiple files can be uploaded"},renderBody:{description:"CTA render body"},subheader:{name:"@subheader",table:{category:"@attribute tags"}},header:{name:"@header",table:{category:"@attribute tags"}},onInput:{action:"on-input",description:"Triggered when the file(s) are uploaded",table:{category:"Events",defaultValue:{summary:"{ originalEvent, files }"}}}}},p=n=>({input:n,component:m});p.args={};p.parameters={docs:{description:{story:"In this story you can trigger the native file input picker only. Uploading files will have no effect."},source:{code:N}}};const d=n=>({input:n,component:h});d.args={};d.parameters={docs:{description:{story:" In this story you can trigger the native file input picker. Uploading files will render each ebay-file-preview-card component in preview status."},source:{code:Y}}};const c=n=>({input:n,component:g});c.args={};c.parameters={docs:{description:{story:"In this story you can trigger the native file input picker. Uploading files will render each ebay-file-preview-card component in uploading status."},source:{code:ae}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DefaultTemplate
})`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithPreviewCardsTemplate
})`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithMockUploadsTemplate
})`,...c.parameters?.docs?.source}}};const Ne=["Default","WithPreviewCards","WithMockUploads"];export{p as Default,c as WithMockUploads,d as WithPreviewCards,Ne as __namedExportsOrder,Ke as default};
