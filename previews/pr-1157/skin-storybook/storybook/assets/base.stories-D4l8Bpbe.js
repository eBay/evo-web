import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s;function c(){return(c=e((()=>{t={title:`Skin/Snackbar Dialog/Base`},n=()=>`
    <button class="button button--primary dialog-button" data-makeup-for="snackbar-dialog-1">Show Default Snackbar</button>
    <div aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog snackbar-dialog--transition" role="dialog" hidden id="snackbar-dialog-1">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
        </div>
    </div>
<script>document.getElementById("snackbar-dialog-1").hidden = false;<\/script>
`,r=()=>`
    <button class="button button--primary dialog-button" data-makeup-for="snackbar-dialog-2">Show Action Snackbar</button>
    <div aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog snackbar-dialog--transition" role="dialog" hidden id="snackbar-dialog-2">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
            <div class="snackbar-dialog__actions">
                <button accesskey="u" class="link-button snackbar-dialog__cta">Undo <span class="clipped">- Access Key: U</span></button>
            </div>
        </div>
    </div>
<script>document.getElementById("snackbar-dialog-2").hidden = false;<\/script>
`,i=()=>`
    <div aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog" role="dialog">
        <div class="snackbar-dialog__window">
            <div class="snackbar-dialog__main">
                <p>1 item deleted from watch list.</p>
            </div>
            <div class="snackbar-dialog__actions">
                <button accesskey="u" class="link-button snackbar-dialog__cta">Undo</button> |
                <button accesskey="d" class="link-button snackbar-dialog__close">Close</button>
            </div>
        </div>
    </div>
`,a=()=>`
    <button class="button button--primary dialog-button" data-makeup-for="snackbar-dialog-3">Show Stacked Snackbar</button>
    <div aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog snackbar-dialog--transition" role="dialog" hidden id="snackbar-dialog-3">
        <div class="snackbar-dialog__window snackbar-dialog__window--column">
            <div class="snackbar-dialog__main">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="snackbar-dialog__actions">
            <button accesskey="u" class="link-button snackbar-dialog__cta">Undo <span class="clipped">- Access Key: U</span></button> |
            <button accesskey="d" class="link-button snackbar-dialog__close">Close</button>
            </div>
        </div>
    </div>
<script>document.getElementById("snackbar-dialog-3").hidden = false;<\/script>
`,o=()=>`
    <div aria-label="Notification" aria-live="polite" aria-modal="false" class="snackbar-dialog demo-a11y-text-spacing" role="dialog">
        <div class="snackbar-dialog__window snackbar-dialog__window--column">
            <div class="snackbar-dialog__main">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="snackbar-dialog__actions">
            <button accesskey="u" class="link-button snackbar-dialog__cta">Undo</button> |
            <button accesskey="d" class="link-button snackbar-dialog__close">Close</button>
            </div>
        </div>
    </div>
`,s=[`noAction`,`action`,`actionAndDismiss`,`actionsStacked`,`textSpacing`]})))()}c();export{s as __namedExportsOrder,r as action,i as actionAndDismiss,a as actionsStacked,t as default,n as noAction,o as textSpacing};