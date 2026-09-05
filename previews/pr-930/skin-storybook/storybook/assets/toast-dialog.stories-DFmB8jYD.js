const a={title:"Skin/Toast Dialog"},t=()=>`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`,o=()=>`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`,s=()=>`
<div dir="rtl">
    <aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
        <div class="toast-dialog__window">
            <div class="toast-dialog__header">
                <h2>User Privacy Preferences</h2>
                <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                    <svg class="icon icon--16">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
            <div class="toast-dialog__main">
                <p>We detected something unusual about a recent sign-in to your eBay account.
                To help keep you safe, we recommend you change the password.</p>
            </div>
            <div class="toast-dialog__footer">
                <button accesskey="d" class="btn btn--secondary">Dismiss</button>
                <button accesskey="a" class="btn btn--primary">Accept</button>
            </div>
        </div>
    </aside>
</div>
`,e=()=>`
<aside class="toast-dialog demo-a11y-text-spacing" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="d" class="btn btn--secondary">Dismiss</button>
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`,i=()=>`
<aside class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences but with a title that's super long so it wraps to the next line. No dialog header should ever be this long.</h2>
            <button class="icon-btn icon-btn--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
                <svg class="icon icon--16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="toast-dialog__main">
            <p>We detected something unusual about a recent sign-in to your eBay account.
            To help keep you safe, we recommend you change the password.</p>
        </div>
        <div class="toast-dialog__footer">
            <button accesskey="a" class="btn btn--primary">Accept</button>
        </div>
    </div>
</aside>
`,n=["primaryAction","secondaryAction","RTL","textSpacing","primaryActionWithHeaderOverflow"];export{s as RTL,n as __namedExportsOrder,a as default,t as primaryAction,i as primaryActionWithHeaderOverflow,o as secondaryAction,e as textSpacing};
