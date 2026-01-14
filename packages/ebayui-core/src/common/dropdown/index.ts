import {
    autoUpdate,
    computePosition,
    shift,
    flip,
    offset,
    type ReferenceElement,
    type Middleware,
} from "@floating-ui/dom";

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

    constructor(
        host: HTMLElement,
        overlay: HTMLElement,
        options?: DropdownUtilOptions,
    ) {
        this.host = host as ReferenceElement;
        this.overlay = overlay as HTMLElement;
        this.options = options ?? {};
    }

    show() {
        this.cleanupFn = autoUpdate(
            this.host,
            this.overlay,
            this.update.bind(this),
        );
    }

    update() {
        const middleware = [] as Middleware[];
        middleware.push(offset(this.options.offset ?? 4));
        if (this.options.flip) {
            middleware.push(
                flip({
                    crossAxis: true,
                }),
            );
        }
        middleware.push(shift());
        computePosition(this.host, this.overlay, {
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
