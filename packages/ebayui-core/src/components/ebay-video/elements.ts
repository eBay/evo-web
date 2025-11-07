import type EbayVideo from "./component";

/**
 * Builds a time string, e.g., 01:04:23, from displayTime.
 *
 * @param displayTime - Time in seconds
 * @param showHour - Whether to show the hour component
 * @returns Formatted time string
 */
function buildTimeString(displayTime: any, showHour: any) {
    const h = Math.floor(displayTime / 3600);
    const m = Math.floor((displayTime / 60) % 60);
    let s: any = Math.floor(displayTime % 60);
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

/**
 * Depending on the value of display, sets/removes the css class of element to
 * either display it or hide it.
 *
 * @param element - The DOM element to show or hide
 * @param display - Whether to display the element
 */
function setDisplay(element: any, display: any) {
    if (!element) {
        return;
    }

    if (display) {
        // Removing a non-existent class doesn't throw, so, even if
        // the element is not hidden, this should be fine.
        element.classList.remove("shaka-hidden");
    } else {
        element.classList.add("shaka-hidden");
    }
}

/* eslint-disable no-undef,new-cap */
// Have to contain in order to not execute until shaka is downloaded
function getElements(self: EbayVideo) {
    self.shaka.ui.Utils = self.shaka.ui.Utils || {
        setDisplay,
        buildTimeString,
    };
    const Report = class extends self.shaka.ui.Element {
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);

            if (!self.input.reportText || !self.input.a11yReportText) {
                return;
            }

            // The actual button that will be displayed
            this.button_ = document.createElement("button");
            this.button_.classList.add("video-player__report-button");

            const flagIcon = self
                .getComponent("flag-icon")!
                .el!.cloneNode(true);
            this.button_.prepend(flagIcon);
            this.parent.appendChild(this.button_);

            this.eventManager.listen(this.button_, "click", () => {
                self.emit("report");
            });
        }
    };
    Report.Factory = class {
        create(rootElement: HTMLElement, controls: any) {
            return new Report(rootElement, controls);
        }
    };

    const TextSelection = self.shaka.ui.TextSelection;

    TextSelection.Factory = class {
        /**
         * Creates a new TextSelection element.
         * @override
         */
        create(rootElement: HTMLElement, controls: any) {
            return new self.shaka.ui.TextSelection(rootElement, controls);
        }
    };

    /**
     * Displays the current time of the video.
     * Extends shaka.ui.Element.
     */
    const CurrentTime = class extends self.shaka.ui.Element {
        /**
         * @param parent - The parent element
         * @param controls - The Shaka controls
         */
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
            this.eventManager.listen(
                this.controls,
                "timeandseekrangeupdated",
                () => {
                    this.updateTime_();
                },
            );
            this.eventManager.listen(this.player, "trackschanged", () => {
                this.onTracksChanged_();
            });
        }
        /**
         * Sets the text content of the time display.
         * 
         * @param value - The time value to display
         * @private
         */
        setValue_(value: any) {
            // To avoid constant updates to the DOM, which makes debugging more
            // difficult, only set the value if it has changed.  If we don't do this
            // check, the DOM updates constantly, this element flashes in the debugger
            // in Chrome, and you can't make changes in the CSS panel.
            if (value != this.currentTime_.textContent) {
                this.currentTime_.textContent = value;
            }
        }
        /**
         * Updates the time display.
         * @private
         */
        updateTime_() {
            const isSeeking = this.controls.isSeeking();
            let displayTime = this.controls.getDisplayTime();
            const seekRange = this.player.seekRange();
            const seekRangeSize = seekRange.end - seekRange.start;
            if (!isFinite(seekRangeSize)) {
                this.setValue_(
                    this.localization.resolve(self.shaka.ui.Locales.Ids.LIVE),
                );
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
                    this.setValue_(
                        "- " + buildTimeString(displayTime, showHour),
                    );
                } else {
                    this.setValue_(
                        this.localization.resolve(
                            self.shaka.ui.Locales.Ids.LIVE,
                        ),
                    );
                }
            } else {
                const showHour = seekRangeSize >= 3600;
                const currentTime = Math.max(0, displayTime - seekRange.start);
                let value = buildTimeString(currentTime, showHour);
                this.setValue_(value);
            }
        }
        /**
         * Sets the aria label to be 'Live' when the content is live stream.
         * @private
         */
        onTracksChanged_() {
            if (this.player.isLive()) {
                const ariaLabel = self.shaka.ui.Locales.Ids.SKIP_TO_LIVE;
                this.currentTime_.ariaLabel =
                    this.localization.resolve(ariaLabel);
            }
        }
    };
    /**
     * Factory for creating CurrentTime elements.
     * Implements shaka.extern.IUIElement.Factory.
     */
    CurrentTime.Factory = class {
        /**
         * Creates a new CurrentTime element.
         * @override
         */
        create(rootElement: HTMLElement, controls: any) {
            return new CurrentTime(rootElement, controls);
        }
    };

    /**
     * Displays the total duration of the video.
     * Extends shaka.ui.Element.
     */
    const TotalTime = class extends self.shaka.ui.Element {
        /**
         * @param parent - The parent element
         * @param controls - The Shaka controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** Button element for displaying total time */
            this.currentTime_ = document.createElement("button");
            this.currentTime_.classList.add("shaka-current-time");
            this.currentTime_.disabled = true;
            this.parent.appendChild(this.currentTime_);
            this.eventManager.listen(
                this.controls,
                "timeandseekrangeupdated",
                () => {
                    this.updateTime_();
                },
            );
            this.eventManager.listen(this.player, "trackschanged", () => {
                this.onTracksChanged_();
            });
        }
        /**
         * Sets the text content of the time display.
         * 
         * @param value - The time value to display
         * @private
         */
        setValue_(value: any) {
            // To avoid constant updates to the DOM, which makes debugging more
            // difficult, only set the value if it has changed.  If we don't do this
            // check, the DOM updates constantly, this element flashes in the debugger
            // in Chrome, and you can't make changes in the CSS panel.
            if (value != this.currentTime_.textContent) {
                this.currentTime_.textContent = value;
            }
        }
        /**
         * Updates the time display.
         * @private
         */
        updateTime_() {
            const seekRange = this.player.seekRange();
            const seekRangeSize = seekRange.end - seekRange.start;
            if (isFinite(seekRangeSize) && seekRangeSize) {
                const showHour = seekRangeSize >= 3600;
                this.setValue_(buildTimeString(seekRangeSize, showHour));
            }
        }

        /**
         * Set the aria label to be 'Live' when the content is live stream.
         * @private
         */
        onTracksChanged_() {
            if (this.player.isLive()) {
                const ariaLabel = self.shaka.ui.Locales.Ids.SKIP_TO_LIVE;
                this.currentTime_.ariaLabel =
                    this.localization.resolve(ariaLabel);
            }
        }
    };
    /**
     * Factory for creating TotalTime elements.
     * Implements shaka.extern.IUIElement.Factory.
     */
    TotalTime.Factory = class {
        /**
         * Creates a new TotalTime element.
         * @override
         */
        create(rootElement: HTMLElement, controls: any) {
            return new TotalTime(rootElement, controls);
        }
    };

    /**
     * Button to mute/unmute the video.
     * Extends shaka.ui.Element.
     */
    const MuteButton = class extends self.shaka.ui.Element {
        /**
         * @param parent - The parent element
         * @param controls - The Shaka controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** Button element for mute/unmute */
            this.button_ = document.createElement("button");
            this.button_.classList.add("shaka-mute-button");
            this.button_.classList.add("shaka-tooltip");

            this.audioOff = self
                .getComponent("audio-off-icon")!
                .el!.cloneNode(true);

            this.audioHigh = self
                .getComponent("audio-high-icon")!
                .el!.cloneNode(true);

            /** Icon element for mute/unmute button */
            this.icon_ = this.audioOff.cloneNode(true);
            this.button_.appendChild(this.icon_);
            /** Element for displaying current state */
            this.currentState_ = document.createElement("span");
            this.currentState_.classList.add("shaka-current-selection-span");
            this.parent.appendChild(this.button_);
            this.updateIcon_();
            this.eventManager.listen(this.button_, "click", () => {
                if (!this.video.muted && this.video.volume == 0) {
                    this.video.volume = 1;
                } else {
                    this.video.muted = !this.video.muted;
                }
            });
            this.eventManager.listen(this.video, "volumechange", () => {
                this.updateIcon_();
            });
        }
        /**
         * Updates the mute button icon based on current volume state.
         * @private
         */
        updateIcon_() {
            const icon =
                this.video.muted || this.video.volume == 0
                    ? this.audioOff
                    : this.audioHigh;
            this.button_.childNodes[0].replaceWith(icon);
        }
    };
    /**
     * Factory for creating MuteButton elements.
     * Implements shaka.extern.IUIElement.Factory.
     */
    MuteButton.Factory = class {
        /**
         * Creates a new MuteButton element.
         * @override
         */
        create(rootElement: HTMLElement, controls: any) {
            return new MuteButton(rootElement, controls);
        }
    };

    /**
     * Button to toggle fullscreen mode.
     * Extends shaka.ui.Element.
     */
    const FullscreenButton = class extends self.shaka.ui.Element {
        /**
         * @param parent - The parent element
         * @param controls - The Shaka controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** Local video element reference */
            this.localVideo_ = this.controls.getLocalVideo();

            this.fullscreenIcon = self
                .getComponent("expand-icon")!
                .el!.cloneNode(true);
            this.exitFullscreenIcon = self
                .getComponent("contract-icon")!
                .el!.cloneNode(true);

            /** Button element for fullscreen toggle */
            this.button_ = document.createElement("button");
            this.button_.classList.add("shaka-fullscreen-button");
            this.button_.classList.add("shaka-tooltip");
            this.checkSupport_();
            this.button_.appendChild(this.fullscreenIcon);
            this.parent.appendChild(this.button_);
            this.eventManager.listen(this.button_, "click", async () => {
                await this.controls.toggleFullScreen();
            });
            this.eventManager.listen(document, "fullscreenchange", () => {
                this.updateIcon_();
            });
            this.eventManager.listen(this.localVideo_, "loadedmetadata", () => {
                this.checkSupport_();
            });
            this.eventManager.listen(this.localVideo_, "loadeddata", () => {
                this.checkSupport_();
            });
        }
        /**
         * Checks if fullscreen is supported and shows/hides button accordingly.
         * @private
         */
        checkSupport_() {
            // Don't show the button if fullscreen is not supported
            if (!this.controls.isFullScreenSupported()) {
                this.button_.classList.add("shaka-hidden");
            } else {
                this.button_.classList.remove("shaka-hidden");
            }
        }
        /**
         * Updates the fullscreen button icon based on current state.
         * @private
         */
        updateIcon_() {
            const icon = this.controls.isFullScreenEnabled()
                ? this.exitFullscreenIcon
                : this.fullscreenIcon;
            this.button_.childNodes[0].replaceWith(icon);
        }
    };
    /**
     * Factory for creating FullscreenButton elements.
     * Implements shaka.extern.IUIElement.Factory.
     */
    FullscreenButton.Factory = class {
        /**
         * Creates a new FullscreenButton element.
         * @override
         */
        create(rootElement: HTMLElement, controls: any) {
            return new FullscreenButton(rootElement, controls);
        }
    };

    /**
     * Displays the remaining time of the video.
     * Extends shaka.ui.Element.
     */
    const RemainingTime = class extends self.shaka.ui.Element {
        /**
         * @param parent - The parent element
         * @param controls - The Shaka controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** Button element for displaying remaining time */
            this.remainingTime_ = document.createElement("button");
            this.remainingTime_.classList.add("shaka-remaining-time");
            this.remainingTime_.disabled = true;
            this.setValue_("0:00");
            this.parent.appendChild(this.remainingTime_);
            this.eventManager.listen(
                this.controls,
                "timeandseekrangeupdated",
                () => {
                    this.updateTime_();
                },
            );
        }
        /**
         * Sets the text content of the remaining time display.
         * 
         * @param value - The time value to display
         * @private
         */
        setValue_(value: any) {
            // To avoid constant updates to the DOM, which makes debugging more
            // difficult, only set the value if it has changed.  If we don't do this
            // check, the DOM updates constantly, this element flashes in the debugger
            // in Chrome, and you can't make changes in the CSS panel.
            if (value != this.remainingTime_.textContent) {
                this.remainingTime_.textContent = value;
            }
        }
        /**
         * Updates the remaining time display.
         * @private
         */
        updateTime_() {
            const displayTime = this.controls.getDisplayTime();
            const seekRange = this.player.seekRange();
            const seekRangeSize = seekRange.end - seekRange.start;
            
            if (!isFinite(seekRangeSize)) {
                this.setValue_("0:00");
            } else if (this.player.isLive()) {
                // For live content, don't show remaining time
                this.setValue_("");
            } else {
                const showHour = seekRangeSize >= 3600;
                // Calculate remaining time (total duration - current time)
                const remainingTime = Math.max(0, seekRange.end - displayTime);
                const value = "- " + buildTimeString(remainingTime, showHour);
                this.setValue_(value);
            }
        }
    };
    /**
     * Factory for creating RemainingTime elements.
     * Implements shaka.extern.IUIElement.Factory.
     */
    RemainingTime.Factory = class {
        /**
         * Creates a new RemainingTime element.
         * @override
         */
        create(rootElement: HTMLElement, controls: any) {
            return new RemainingTime(rootElement, controls);
        }
    };

    return {
        Report,
        MuteButton,
        CurrentTime,
        TotalTime,
        RemainingTime,
        FullscreenButton,
        TextSelection,
    };
}

export { getElements };
