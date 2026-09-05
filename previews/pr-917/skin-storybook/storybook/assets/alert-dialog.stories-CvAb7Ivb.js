const i={title:"Skin/Alert Dialog"},a=()=>`
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert!</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
`,e=()=>`
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade demo-a11y-text-spacing" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert!</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
`,l=()=>`
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert! This title is so long that it wraps to the next line. No dialog should ever have a title this long.</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert!</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade demo-a11y-text-spacing" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert!</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
\``,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<div aria-labelledby="alert-dialog-title" aria-modal="true" class="alert-dialog alert-dialog--mask-fade" role="alertdialog">
    <div class="alert-dialog__window alert-dialog__window--fade">
        <div class="alert-dialog__header">
            <h2 id="alert-dialog-title" class="alert-dialog__title">Alert! This title is so long that it wraps to the next line. No dialog should ever have a title this long.</h2>
        </div>
        <div class="alert-dialog__main">
            <p id="alert-description-0">You must acknowledge this alert to continue.</p>
        </div>
        <div class="alert-dialog__footer">
            <button class="btn btn--primary alert-dialog__acknowledge" aria-describedby="alert-description-0">OK</button>
        </div>
    </div>
</div>
\``,...l.parameters?.docs?.source}}};const t=["base","textSpacing","baseWithHeaderOverflow"];export{t as __namedExportsOrder,a as base,l as baseWithHeaderOverflow,i as default,e as textSpacing};
