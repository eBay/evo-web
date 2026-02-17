/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any */
import React from "react";
import { createRoot } from "react-dom/client";
// need that for broken definitions workaround
// @ts-ignore
import { ui } from "shaka-player/dist/shaka-player.ui";
import { ReportButton } from "./reportButton";

function buildTimeString(displayTime: number, showHour: boolean) {
    const h = Math.floor(displayTime / 3600);
    const m = Math.floor((displayTime / 60) % 60);
    let s: number | string = Math.floor(displayTime % 60);
    if (s < 10) {
        s = "0" + s;
    }
    let text = m + ":" + s;
    if (showHour) {
        if (m < 10) {
            text = "0" + text;
        }
        text = h + ":" + text;
    }
    return text;
}

export function customControls(onReport = () => {}): { Report: any } {
    // Have to contain in order to not execute until shaka is downloaded

    const Report = class extends (ui.Element as any) {
        constructor(parent, controls, text) {
            super(parent, controls);

            const tempEl: HTMLElement = document.createElement("div");
            const buttonCallback = () => {
                const reportButton = tempEl.firstChild;
                parent.appendChild(reportButton);
                tempEl.remove();

                // have to listen to clicks this way (React onClick will not work):
                this.eventManager.listen(reportButton, "click", onReport);
            };
            createRoot(tempEl).render(<ReportButton callback={buttonCallback}>{text}</ReportButton>);
        }
    };

    Report.Factory = class {
        private readonly reportText: string;

        constructor(reportText) {
            this.reportText = reportText;
        }

        create(rootElement, controls) {
            return new Report(rootElement, controls, this.reportText);
        }
    };

    return { Report };
}

export const CurrentTime = class extends ui.Element {
    constructor(parent: HTMLElement, controls: any) {
        super(parent, controls);
        /** Button element for displaying current time */
        this.currentTime_ = document.createElement("button");
        this.currentTime_.classList.add("shaka-current-time");
        this.currentTime_.disabled = true;
        this.setValue_("0:00");
        this.parent.appendChild(this.currentTime_);
        this.eventManager.listen(this.currentTime_, "click", () => {
            // Jump to LIVE if the user clicks on the current time.
            if (this.player.isLive()) {
                this.video.currentTime = this.player.seekRange().end;
            }
        });
        this.eventManager.listen(this.controls, "timeandseekrangeupdated", () => {
            this.updateTime_();
        });
        this.eventManager.listen(this.player, "trackschanged", () => {
            this.onTracksChanged_();
        });
    }

    setValue_(value: string) {
        // To avoid constant updates to the DOM, which makes debugging more
        // difficult, only set the value if it has changed.  If we don't do this
        // check, the DOM updates constantly, this element flashes in the debugger
        // in Chrome, and you can't make changes in the CSS panel.
        if (value != this.currentTime_.textContent) {
            this.currentTime_.textContent = value;
        }
    }
    updateTime_() {
        const isSeeking = this.controls.isSeeking();
        let displayTime = this.controls.getDisplayTime();
        const seekRange = this.player.seekRange();
        const seekRangeSize = seekRange.end - seekRange.start;
        if (!isFinite(seekRangeSize)) {
            this.setValue_(this.localization.resolve(ui.Locales.Ids.LIVE));
        } else if (this.player.isLive()) {
            // The amount of time we are behind the live edge.
            const behindLive = Math.floor(seekRange.end - displayTime);
            displayTime = Math.max(0, behindLive);
            const showHour = seekRangeSize >= 3600;
            // Consider "LIVE" when less than 1 second behind the live-edge.  Always
            // show the full time string when seeking, including the leading '-';
            // otherwise, the time string "flickers" near the live-edge.
            // The button should only be clickable when it's live stream content, and
            // the current play time is behind live edge.
            if (displayTime >= 1 || isSeeking) {
                this.setValue_("- " + buildTimeString(displayTime, showHour));
            } else {
                this.setValue_(this.localization.resolve(ui.Locales.Ids.LIVE));
            }
        } else {
            const showHour = seekRangeSize >= 3600;
            const currentTime = Math.max(0, displayTime - seekRange.start);
            const value = buildTimeString(currentTime, showHour);
            this.setValue_(value);
        }
    }
    onTracksChanged_() {
        if (this.player.isLive()) {
            const ariaLabel = ui.Locales.Ids.SKIP_TO_LIVE;
            this.currentTime_.ariaLabel = this.localization.resolve(ariaLabel);
        }
    }
};
CurrentTime.Factory = class {
    create(rootElement: HTMLElement, controls: any) {
        return new CurrentTime(rootElement, controls);
    }
};

export const TotalTime = class extends ui.Element {
    constructor(parent: HTMLElement, controls: any) {
        super(parent, controls);
        /** Button element for displaying total time */
        this.currentTime_ = document.createElement("button");
        this.currentTime_.classList.add("shaka-current-time");
        this.currentTime_.disabled = true;
        this.parent.appendChild(this.currentTime_);
        this.eventManager.listen(this.controls, "timeandseekrangeupdated", () => {
            this.updateTime_();
        });
        this.eventManager.listen(this.player, "trackschanged", () => {
            this.onTracksChanged_();
        });
    }

    setValue_(value: string) {
        // To avoid constant updates to the DOM, which makes debugging more
        // difficult, only set the value if it has changed.  If we don't do this
        // check, the DOM updates constantly, this element flashes in the debugger
        // in Chrome, and you can't make changes in the CSS panel.
        if (value != this.currentTime_.textContent) {
            this.currentTime_.textContent = value;
        }
    }
    updateTime_() {
        const seekRange = this.player.seekRange();
        const seekRangeSize = seekRange.end - seekRange.start;
        if (isFinite(seekRangeSize) && seekRangeSize) {
            const showHour = seekRangeSize >= 3600;
            this.setValue_(buildTimeString(seekRangeSize, showHour));
        }
    }

    onTracksChanged_() {
        if (this.player.isLive()) {
            const ariaLabel = ui.Locales.Ids.SKIP_TO_LIVE;
            this.currentTime_.ariaLabel = this.localization.resolve(ariaLabel);
        }
    }
};
TotalTime.Factory = class {
    create(rootElement: HTMLElement, controls: any) {
        return new TotalTime(rootElement, controls);
    }
};
