const d={title:"Skin/Snackbar Dialog/RTL"},a=()=>`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
            </div>
        </aside>
    </div>
`,i=()=>`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
                <div class="snackbar-dialog__actions">
                    <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button>
                </div>
            </div>
        </aside>
    </div>
`,s=()=>`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
                <div class="snackbar-dialog__actions">
                    <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button> |
                    <button accesskey="d" class="fake-link snackbar-dialog__close">Close</button>
                </div>
            </div>
        </aside>
    </div>
`,o=()=>`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window snackbar-dialog__window--column">
                <div class="snackbar-dialog__main">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="snackbar-dialog__actions">
                <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button> |
                <button accesskey="d" class="fake-link snackbar-dialog__close">Close</button>
                </div>
            </div>
        </aside>
    </div>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
            </div>
        </aside>
    </div>
\``,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
                <div class="snackbar-dialog__actions">
                    <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button>
                </div>
            </div>
        </aside>
    </div>
\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
                <div class="snackbar-dialog__actions">
                    <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button> |
                    <button accesskey="d" class="fake-link snackbar-dialog__close">Close</button>
                </div>
            </div>
        </aside>
    </div>
\``,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window snackbar-dialog__window--column">
                <div class="snackbar-dialog__main">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="snackbar-dialog__actions">
                <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button> |
                <button accesskey="d" class="fake-link snackbar-dialog__close">Close</button>
                </div>
            </div>
        </aside>
    </div>
\``,...o.parameters?.docs?.source}}};const l=["noAction","action","actionAndDismiss","actionsStacked"];export{l as __namedExportsOrder,i as action,s as actionAndDismiss,o as actionsStacked,d as default,a as noAction};
