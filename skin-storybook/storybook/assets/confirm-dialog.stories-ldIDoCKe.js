const d={title:"Skin/Confirm Dialog"},i=()=>`
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">Delete Address?</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
`,o=()=>`
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade demo-a11y-text-spacing" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">Delete Address?</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
`,a=()=>`
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">This title is long enough that it needs to wrap into multiple lines. No dialog header should ever be this long.</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
`;i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">Delete Address?</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
\``,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade demo-a11y-text-spacing" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">Delete Address?</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
\``,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div aria-labelledby="confirm-dialog-title" aria-modal="true" class="confirm-dialog confirm-dialog--mask-fade" role="dialog">
    <div class="confirm-dialog__window confirm-dialog__window--fade">
        <div class="confirm-dialog__header">
            <h2 id="confirm-dialog-title" class="confirm-dialog__title">This title is long enough that it needs to wrap into multiple lines. No dialog header should ever be this long.</h2>
        </div>
        <div class="confirm-dialog__main">
            <p id="confirm-dialog__description">You will permanently lose this address.</p>
        </div>
        <div class="confirm-dialog__footer">
            <button class="btn confirm-dialog__reject">Cancel</button>
            <button class="btn btn--primary confirm-dialog__confirm" aria-describedby="confirm-dialog__description">Delete</button>
        </div>
    </div>
</div>
\``,...a.parameters?.docs?.source}}};const n=["base","textSpacing","baseWithHeaderOverflow"];export{n as __namedExportsOrder,i as base,a as baseWithHeaderOverflow,d as default,o as textSpacing};
