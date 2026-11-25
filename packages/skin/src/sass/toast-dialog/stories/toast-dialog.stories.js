export default { title: "Skin/Toast Dialog" };

export const primaryAction = () => `
<button class="button button--primary dialog-button" data-makeup-for="toast-dialog-1">Show Default Toast</button>
<div class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog" hidden id="toast-dialog-1">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-button icon-button--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
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
            <button accesskey="a" class="button button--primary">Accept</button>
        </div>
    </div>
</div>
<script>document.getElementById("toast-dialog-1").hidden = false;</script>
`;

export const secondaryAction = () => `
<button class="button button--primary dialog-button" data-makeup-for="toast-dialog-2">Show Secondary Action Toast</button>
<div class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog" hidden id="toast-dialog-2">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-button icon-button--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
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
            <button accesskey="d" class="button button--secondary">Dismiss</button>
            <button accesskey="a" class="button button--primary">Accept</button>
        </div>
    </div>
</div>
<script>document.getElementById("toast-dialog-2").hidden = false;</script>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
        <div class="toast-dialog__window">
            <div class="toast-dialog__header">
                <h2>User Privacy Preferences</h2>
                <button class="icon-button icon-button--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
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
                <button accesskey="d" class="button button--secondary">Dismiss</button>
                <button accesskey="a" class="button button--primary">Accept</button>
            </div>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div class="toast-dialog demo-a11y-text-spacing" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences</h2>
            <button class="icon-button icon-button--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
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
            <button accesskey="d" class="button button--secondary">Dismiss</button>
            <button accesskey="a" class="button button--primary">Accept</button>
        </div>
    </div>
</div>
`;

export const primaryActionWithHeaderOverflow = () => `
<div class="toast-dialog" aria-label="Notification" aria-live="polite" aria-modal="false" role="dialog">
    <div class="toast-dialog__window">
        <div class="toast-dialog__header">
            <h2>User Privacy Preferences but with a title that's super long so it wraps to the next line. No dialog header should ever be this long.</h2>
            <button class="icon-button icon-button--transparent toast-dialog__close" type="button" aria-label="Close notification dialog">
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
            <button accesskey="a" class="button button--primary">Accept</button>
        </div>
    </div>
</div>
`;
