import type {
    autoUpdate,
    computePosition,
    shift,
    flip,
    offset,
    ReferenceElement,
    Middleware,
} from "@floating-ui/dom";
import { load as floatinguiLoad } from "@internal/floating-ui";

interface DropdownUtilOptions {
    reverse?: boolean;
    flip?: boolean;
    strategy?: "absolute" | "fixed";
    offset?: number;
}

export class DropdownUtil {
    declare host: ReferenceElement;
    declare overlay: HTMLElement;
    declare cleanupFn: any;
    declare options: DropdownUtilOptions;
    declare loaded: boolean;
    declare triggerShow: boolean;
    declare computePosition: typeof computePosition;
    declare autoUpdate: typeof autoUpdate;
    declare offset: typeof offset;
    declare flip: typeof flip;
    declare shift: typeof shift;

    constructor(
        host: HTMLElement,
        overlay: HTMLElement,
        options?: DropdownUtilOptions,
    ) {
        this.host = host as ReferenceElement;
        this.overlay = overlay as HTMLElement;
        this.options = options ?? {};

        floatinguiLoad().then((floatingUI) => {
            this.computePosition =
                floatingUI.computePosition as typeof computePosition;
            this.autoUpdate = floatingUI.autoUpdate as typeof autoUpdate;
            this.offset = floatingUI.offset;
            this.flip = floatingUI.flip;
            this.shift = floatingUI.shift;

            this.loaded = true;
            if (this.triggerShow) {
                this.triggerShow = false;
                this.show();
            }
        });
    }

    show() {
        if (this.loaded) {
            this.cleanupFn = this.autoUpdate(
                this.host,
                this.overlay,
                this.update.bind(this),
            );
        } else {
            this.triggerShow = true;
        }
    }

    update() {
        const middleware = [] as Middleware[];
        middleware.push(this.offset(this.options.offset ?? 4));
        if (this.options.flip) {
            middleware.push(
                this.flip({
                    crossAxis: true,
                }),
            );
        }
        middleware.push(this.shift());
        this.computePosition(this.host, this.overlay, {
            placement: this.options.reverse ? "bottom-end" : "bottom-start",
            strategy: this.options.strategy ?? "fixed",
            middleware,
        }).then(({ x, y }) => {
            Object.assign(this.overlay.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    }

    cleanup() {
        this.cleanupFn?.();
    }

    hide() {
        if (this.cleanup) this.cleanup();
    }
}
