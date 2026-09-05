const a={title:"Skin/Snackbar Dialog/Font-Size"},i=()=>`
    <div class="font-large">
        <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
            <div class="snackbar-dialog__window">
                <div class="snackbar-dialog__main">
                    <p>1 item deleted from watch list.</p>
                </div>
            </div>
        </aside>
    </div>
`,s=()=>`
    <div class="font-large">
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
    <div class="font-large">
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
`,l=()=>`
    <div class="font-large">
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
`,d=["noAction","action","actionAndDismiss","actionsStacked"];export{d as __namedExportsOrder,s as action,o as actionAndDismiss,l as actionsStacked,a as default,i as noAction};
