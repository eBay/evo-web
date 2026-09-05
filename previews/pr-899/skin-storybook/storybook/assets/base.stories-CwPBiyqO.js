const l={title:"Skin/Snackbar Dialog/Base"},a=()=>`
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
        </div>
    </aside>
`,i=()=>`
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
`,s=()=>`
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
`,o=()=>`
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
`,e=()=>`
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog demo-a11y-text-spacing" role="dialog">
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
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
        </div>
    </aside>
\``,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
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
\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
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
\``,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
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
\``,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
    <aside aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog demo-a11y-text-spacing" role="dialog">
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
\``,...e.parameters?.docs?.source}}};const n=["noAction","action","actionAndDismiss","actionsStacked","textSpacing"];export{n as __namedExportsOrder,i as action,s as actionAndDismiss,o as actionsStacked,l as default,a as noAction,e as textSpacing};
