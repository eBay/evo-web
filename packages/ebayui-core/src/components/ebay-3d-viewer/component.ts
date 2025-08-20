import { load as modelViewerLoad } from "@internal/model-viewer";
import type { WithNormalizedProps } from "../../global";

interface ViewerInput {
    "cdn-url"?: string;
    version?: string;
    class?: Marko.HTMLAttributes["class"];
    "a11y-text"?: Marko.HTMLAttributes["aria-label"];
    src?: string;
    "error-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-start-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-load-text"?: Marko.HTMLAttributes["aria-label"];
    // TODO: import types from @google/model-viewer instead of
    // listing manually from https://modelviewer.dev/docs
    poster?: string;
    loading?: "auto" | "lazy" | "eager";
    reveal?: "auto" | "manual";
    "with-credentials"?: boolean;
    "on-load-error"?: (err: CustomEvent) => void;
    "on-load"?: () => void;
    "on-progress"?: () => void;
    "on-model-visibility"?: () => void;
    "on-poster-dismissed"?: () => void;
    "on-render-scale"?: () => void;
}

export interface Input extends WithNormalizedProps<ViewerInput> {}

interface State {
    showLoading: boolean;
    isLoaded: boolean;
    failed: boolean;
}

class Viewer extends Marko.Component<Input, State> {
    declare viewer: HTMLElement;

    handleError(err: Error) {
        this.state.failed = true;
        this.state.isLoaded = true;
        this.emit("load-error", err);
    }

    onCreate() {
        this.state = {
            showLoading: false,
            isLoaded: true,
            failed: false,
        };
    }

    handleSuccess() {
        this.state.isLoaded = true;
        this.state.showLoading = false;
        this.state.failed = false;
    }

    onMount() {
        this.viewer = this.getEl("3d-viewer");
        this._loadViewer();
    }

    _loadViewer() {
        this.state.failed = false;
        this.state.isLoaded = false;
        modelViewerLoad()
            .then(() => {
                this.handleSuccess();
            })
            .catch((e: Error) => {
                this.handleError(e);
            });
    }
}

export default Viewer;
