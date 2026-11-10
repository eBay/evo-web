export default { title: "Skin/Tooltip" };

export const collapsed = () => `
<span class="tooltip">
    <button accesskey="s" class="icon-button tooltip__host" aria-describedby="tooltip-0" aria-label="Settings">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-0" role="tooltip" style="bottom: calc(100% + 12px); left: 0">
        <span class="tooltip__pointer tooltip__pointer--bottom-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Use Access Key 'S' to display settings.</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const expanded = () => `
<span class="tooltip tooltip--expanded">
    <button accesskey="s" class="icon-button tooltip__host" aria-describedby="tooltip-0" aria-label="Settings">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-0" role="tooltip" style="left: calc(50% - 16px); right: auto; top: calc(100% + 8px); bottom: auto;">
        <span class="tooltip__pointer tooltip__pointer--top-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Use Access Key 'S' to display settings.</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const textSpacing = () => `
<span class="tooltip tooltip--expanded demo-a11y-text-spacing">
    <button accesskey="s" class="icon-button tooltip__host" aria-describedby="tooltip-0" aria-label="Settings">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-0" role="tooltip" style="left: calc(50% - 16px); right: auto; top: calc(100% + 8px); bottom: auto;">
        <span class="tooltip__pointer tooltip__pointer--top-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Use Access Key 'S' to display settings.</p>
                </div>
            </div>
        </div>
    </div>
</span>`;

export const disabledLinks = () => `
<span class="tooltip">
    <button class="icon-button tooltip__host" type="button" aria-describedby="tooltip-disabled-links" aria-expanded="true" aria-label="Settings">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-disabled-links" role="tooltip" style="left: calc(50% - 16px); right: auto; top: calc(100% + 8px);">
        <span class="tooltip__pointer tooltip__pointer--top-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p><a>Link without href</a></p>
                    <p><a href="#" aria-disabled="true">Link with aria-disabled</a></p>
                </div>
            </div>
        </div>
    </div>
</span>`;
