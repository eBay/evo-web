import { load as shakaLoad } from "@internal/shaka-player";
import type { WithNormalizedProps } from "../../global";
import { getElements } from "./elements";
const DEFAULT_SPINNER_TIMEOUT = 2000;

declare global {
    interface Window {
        shaka: any;
    }
}

const eventList = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "encrypted",
    "ended",
    "error",
    "loadstart",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "waiting",
];

const defaultControlPanelElements = [
        "play_pause",
        "current_time",
        "spacer",
        "total_time",
        "captions",
        "mute_popover",
        "report",
        "fullscreen_button"
];

const compactLayoutControlPanelElements = [
    "remaining_time",
    "mute_popover",
    "play_pause"
];


const videoConfig = {
    doubleClickForFullscreen: true,
    singleClickForPlayAndPause: true,
    addBigPlayButton: false,
    addSeekBar: true,
    controlPanelElements: defaultControlPanelElements
};

const compactConfig = {
    doubleClickForFullscreen: true,
    singleClickForPlayAndPause: true,
    addBigPlayButton: false,
    addSeekBar: false,
    controlPanelElements: compactLayoutControlPanelElements
};

export interface PlayPauseEvent {
    originalEvent: Event;
    player: any;
    isAutoPlay?: boolean;
    isAutoPause?: boolean;
}

export interface VolumeEvent {
    originalEvent: Event;
    volume: number;
    muted: boolean;
}

interface VideoInput extends Omit<Marko.HTML.Video, `on${string}`> {
    "play-view"?: "fullscreen" | "inline";
    volume?: number;
    action?: "play" | "pause";
    "volume-slider"?: boolean;
    clip?: any[];
    source: Marko.AttrTag<Marko.HTML.Source>;
    /**
     * Whether to show the default layout or compact layout
     * @default default
     */
    layout?: "default" | "compact";
    /**
     * The navigation link for the video
     * @example <@nav href="www.ebay.com" target="_blank"/>
     */
    nav?: Marko.AttrTag<Marko.HTML.A>,
    /**
     * Whether to pause the video when it is less than 50% visible in the viewport
     * @default false
     */
    offscreenPause?: boolean,
    /**
     * @deprecated Use `a11y-report-text` instead
     */
    "report-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-report-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-mute-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-unmute-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-fullscreen-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-exit-fullscreen-text"?: Marko.HTMLAttributes["aria-label"];
    "spinner-timeout"?: number;
    thumbnail?: string;
    track?: Marko.AttrTag<Marko.HTML.Track>;
    "error-text"?: string;
    "a11y-play-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-load-text"?: Marko.HTMLAttributes["aria-label"];
    "on-play"?: (event: PlayPauseEvent) => void;
    "on-pause"?: (event: PlayPauseEvent) => void;
    "on-volume-change"?: (event: VolumeEvent) => void;
    "on-load-error"?: (err: Error) => void;
    "shaka-config"?: any;
}

export interface Input extends WithNormalizedProps<VideoInput> {}

interface State {
    played: boolean;
    failed: boolean;
    isLoaded: boolean;
    volumeSlider: boolean;
    action: "play" | "pause" | "";
}

class Video extends Marko.Component<Input, State> {
    declare video: HTMLVideoElement;
    declare root: HTMLElement;
    declare containerEl: HTMLElement;
    declare playButtonContainer: HTMLElement;
    declare player: any;
    declare ui: any;
    declare shaka: any;
    declare observer: IntersectionObserver;
    private isAutoPlay: boolean = false;
    private isAutoPause: boolean = false;
    private userPaused: boolean = false;


    isPlaylist(source: Marko.HTML.Source & { src: string }) {
        const type = source.type && source.type.toLowerCase();
        const src = source.src;
        if (type === "dash" || type === "hls") {
            return true;
        } else if (source.src) {
            return (
                src.indexOf(".mpd") === src.length - 5 ||
                src.indexOf(".m3u8") === src.length - 6
            );
        }
        return false;
    }

    handleResize() {
        if (!this.input.width && this.video && this.root) {
            const { width: containerWidth } = this.root.getBoundingClientRect();
            this.containerEl.setAttribute("width", containerWidth.toString());
            this.alignSeekbar();
        }
    }

    alignSeekbar() {
        if (this.el) {
            const buttonPanel = this.el.querySelector<HTMLElement>(
                ".shaka-controls-button-panel",
            )!;
            const spacer = buttonPanel.querySelector(".shaka-spacer")!;
            const rangeContainer = this.el.querySelector<HTMLElement>(
                ".shaka-range-container",
            )!;
            if (buttonPanel && spacer) {
                const buttonPanelRect = buttonPanel.getBoundingClientRect();
                const spacerRect = spacer.getBoundingClientRect();

                rangeContainer.style.marginRight = `${buttonPanelRect.right - spacerRect.right}px`;
                rangeContainer.style.marginLeft = `${spacerRect.left - buttonPanelRect.left}px`;
            }
        }
    }

    handlePause(originalEvent: Event) {
        // On IOS, the controls force showing up if the video exist fullscreen while playing.
        // This forces the controls to always hide
        this.video.controls = false;

        if (!this.isAutoPause) {
            this.userPaused = true;
        }

        this.emit("pause", { 
            originalEvent, 
            player: this.player,
            isAutoPause: this.isAutoPause
        });
        
        // Reset isAutoPause after emitting the event
        this.isAutoPause = false;
        this.alignSeekbar();
    }

    handlePlaying(originalEvent: Event) {
        this.showControls();
        this.alignSeekbar();

        if (this.input.playView === "fullscreen") {
            this.video.requestFullscreen();
        }
        this.state.played = true;
        this.userPaused = false;

        this.emit("play", { 
            originalEvent, 
            player: this.player,
            isAutoPlay: this.isAutoPlay
        });
        
        // Reset isAutoPlay after emitting the event
        this.isAutoPlay = false;
    }

    handleVolumeChange(originalEvent: Event) {
        this.emit("volume-change", {
            originalEvent,
            volume: this.video.volume,
            muted: this.video.muted,
        });
    }

    handleError(err: Error) {
        this.state.failed = true;
        this.state.isLoaded = true;
        this.playButtonContainer.remove();
        
        this.emit("load-error", err);
    }

    showControls() {
        let copyConfig = Object.assign({}, videoConfig);
        copyConfig.controlPanelElements = [...videoConfig.controlPanelElements];
        
        if(this.input.layout === "compact") {
            copyConfig = Object.assign({}, compactConfig);
        }

        if(this.input.nav) {
            copyConfig.doubleClickForFullscreen = false;
            copyConfig.singleClickForPlayAndPause = false;
        }

        if (this.state.volumeSlider === true) {
            const insertAt =
                copyConfig.controlPanelElements.length - 2 > 0
                    ? copyConfig.controlPanelElements.length - 2
                    : copyConfig.controlPanelElements.length;
            copyConfig.controlPanelElements.splice(insertAt, 0, "volume");
        }
        
        this.ui.configure(copyConfig);
        this.video.controls = false;
    }
    takeAction() {
        switch (this.state.action) {
            case "play":
                this.video.play();
                break;
            case "pause":
                this.video.pause();
                break;
            default:
        }
    }

    onInput(input: Input) {
        if (this.video) {
            if (input.width || input.height) {
                this.containerEl.style.width = `${input.width}px`;
            }
            this.video.volume = input.volume ?? 0;
            this.video.muted = !!input.muted;
        }

        // Check if action is changed
        if (this.state.action !== input.action) {
            this.state.action = input.action ?? "";
            this.takeAction();
        }
        if (input.volumeSlider === true) {
            this.state.volumeSlider = input.volumeSlider;
        }
    }

    onCreate(input: Input) {
        this.state = {
            volumeSlider: false,
            action: "",
            isLoaded: true,
            failed: false,
            played: false
        };

        
         if(input.action === "play" || input.autoplay === true) {
            this.isAutoPlay = true;
         }
    }

    _addTextTracks() {
        (this.input.clip || []).forEach((track) => {
            this.player.addTextTrack(track.src, track.srclang, track.kind);
        });

        const [track] = this.player.getTextTracks();
        if (track) {
            this.player.selectTextTrack(track.id); // => this finds the id and everythings fine but it does nothing
        }
    }

    _loadSrc(index?: number) {
        const currentIndex = index || 0;
        const sources = [...this.input.source];
        const src = sources[currentIndex];
        let nextIndex: number;
        if (src && sources.length > currentIndex + 1) {
            nextIndex = currentIndex + 1;
        }

        this.player
            .load(src.src)
            .then(() => {
                this._addTextTracks();
                this.state.isLoaded = true;
                this.state.failed = false;
            })
            .catch((err: Error & { code: number }) => {
                if (err.code === 7000) {
                    // Load interrupted by another load, just return
                    return;
                } else if (err.code === 11) {
                    // Retry, player is not loaded yet
                    setTimeout(() => this._loadSrc(currentIndex), 0);
                }
                if (nextIndex) {
                    setTimeout(() => this._loadSrc(nextIndex), 0);
                } else {
                    this.handleError(err);
                }
            });
    }

    _attach() {
        const {
            Report,
            CurrentTime,
            RemainingTime,
            TotalTime,
            MuteButton,
            FullscreenButton,
            TextSelection,
        } = getElements(this);
        // eslint-disable-next-line no-undef,new-cap
        this.ui = new this.shaka.ui.Overlay(
            this.player,
            this.containerEl,
            this.video,
        );

        if (document?.documentElement?.lang) {
            this.ui
                .getControls()
                .getLocalization()
                .changeLocale([document.documentElement.lang]);
        }

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement("report", new Report.Factory());

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "current_time",
            new CurrentTime.Factory(),
        );

         this.shaka.ui.Controls.registerElement(
            "remaining_time",
            new RemainingTime.Factory(),
        );


        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "total_time",
            new TotalTime.Factory(),
        );

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "mute_popover",
            new MuteButton.Factory(),
        );

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "fullscreen_button",
            new FullscreenButton.Factory(),
        );

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "captions",
            new TextSelection.Factory(),
        );

        this.ui.configure({
            controlPanelElements: [],
            addSeekBar: false,
        });

        // Replace play icon
        if (this.el) {
            const playIcon =
                this.getComponent("play-icon")!.el!.cloneNode(true);
            const container = this.el.querySelector<HTMLElement>(
                ".shaka-controls-container",
            )!;
            this.playButtonContainer = document.createElement("div");
            this.playButtonContainer.classList.add(
                "shaka-play-button-container",
            );

            this.playButtonContainer.appendChild(playIcon);
            container.appendChild(this.playButtonContainer);

            const shakaSpinner =
                this.el.querySelector<HTMLElement>(".shaka-spinner");
            if (shakaSpinner) {
                setTimeout(() => {
                    shakaSpinner.hidden = true;
                }, this.input.spinnerTimeout || DEFAULT_SPINNER_TIMEOUT);
            }
        }
    }

    handleSuccess() {
        // eslint-disable-next-line no-undef,new-cap
        this.shaka.polyfill.installAll();

        // eslint-disable-next-line no-undef,new-cap
        this.player = new this.shaka.Player(this.video);
        this.player.configure(this.input.shakaConfig || {});
        this._attach();

        this._loadSrc();
    }

    onMount() {
        this.root = this.getEl("root");
        this.video = this.root.querySelector("video")!;
        this.containerEl = this.root.querySelector(".video-player__container")!;
        this.video.volume = this.input.volume || 1;
        this.video.muted = this.input.muted !== false;

        this.subscribeTo(this.video)
            .on("playing", this.handlePlaying.bind(this))
            .on("pause", this.handlePause.bind(this))
            .on("volumechange", this.handleVolumeChange.bind(this));

        eventList.forEach((eventName) => {
            this.subscribeTo(this.video).on(eventName, (e) =>
                this.emit(eventName, e),
            );
        });

        if(this.input.offscreenPause) {
            // Set up Intersection Observer to detect when video is 50% in viewport
            this.setupIntersectionObserver();
        }

       

        this._loadVideo();
    }

    setupIntersectionObserver() {
        const options = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.5 
        };

        this.observer = new IntersectionObserver((entries) => {
             // Auto-play when 50% visible and pause when less than 50% visible
            entries.forEach(entry => {
                if(this.userPaused) {
                    // If user has manually paused, do not auto-play/pause
                    return;
                }
                
               
                if (entry.isIntersecting) {
                    if (this.state.isLoaded && !this.state.failed && this.video.paused) {
                        this.isAutoPlay = true;
                        this.video.play().catch(e => {
                            this.isAutoPlay = false;
                        });
                    }
                } else {
                    if (!this.video.paused) {
                        this.isAutoPause = true;
                        this.video.pause();
                    }
                }
            });
        }, options);

        this.observer.observe(this.containerEl);
    }

    onDestroy() {
        if (this.ui) {
            this.ui.destroy();
        }
        
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    _loadVideo() {
        this.state.failed = false;
        this.state.isLoaded = false;
        shakaLoad()
            .then((shaka: any) => {
                this.shaka = shaka.default || shaka;
                window.shaka = this.shaka; // Set global object for some components to access

                this.handleSuccess();
            })
            .catch((e: Error) => {
                console.log(e);
                this.handleError(e);
            });
    }
}

export default Video;
