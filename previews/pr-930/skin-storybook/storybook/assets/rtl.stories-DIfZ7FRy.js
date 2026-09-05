const a={title:"Skin/Snackbar Dialog/RTL"},i=()=>`
    <div dir="rtl">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
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
                    <button accesskey="u" class="fake-link snackbar-dialog__cta">Undo</button>
                </div>
            </div>
        </aside>
    </div>
`,o=()=>`
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
`,d=()=>`
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
`,l=["noAction","action","actionAndDismiss","actionsStacked"];export{l as __namedExportsOrder,s as action,o as actionAndDismiss,d as actionsStacked,a as default,i as noAction};
