import { typeRoles } from "./constants";
import type { WithNormalizedProps } from "../../../global";

interface TooltipOverlayInput {
    "style-top"?: string;
    "style-left"?: string;
    "style-right"?: string;
    "style-bottom"?: string;
    heading?: Marko.HTML.Span & {
        as?: keyof Marko.NativeTags;
        renderBody?: Marko.Body;
    } & Iterable<any>;
    id?: string;
    type: keyof typeof typeRoles;
    content?: Marko.AttrTag<Marko.HTML.Span>;
    "a11y-close-text"?: Marko.HTMLAttributes["aria-label"];
    footer?: Marko.AttrTag<
        Marko.Renderable & {
            class?: Marko.HTMLAttributes["class"];
        }
    >;
    "on-overlay-close"?: (event: { originalEvent: Event }) => void;
}

export interface Input extends WithNormalizedProps<TooltipOverlayInput> {}

class TooltipOverlay extends Marko.Component<Input> {
    handleCloseButton(originalEvent: Event) {
        this.emit("overlay-close", { originalEvent });
    }
}

export default TooltipOverlay;
