import type { WithNormalizedProps } from "../../../global";

interface NoticeBaseInput
    extends Omit<Marko.HTML.Section, "title" | `on${string}`> {
    status?: "confirmation" | "attention" | "information" | "education";
    type?: "section";
    "prefix-class"?: string;
    root?: Marko.Renderable;
    "no-a11y-label"?: boolean;
    "a11y-role-description"?: Marko.HTMLAttributes["aria-label"];
    icon?: "none";
    "icon-class"?: Marko.HTMLAttributes["class"];
    "header-root"?: Marko.Renderable;
    "a11y-text"?: Marko.HTMLAttributes["aria-label"];
    "a11y-icon-text"?: Marko.HTMLAttributes["aria-label"];
    "main-root"?: Marko.Renderable;
    footer?: Marko.AttrTag<Marko.Renderable>;
    "a11y-dismiss-text"?: Marko.HTMLAttributes["aria-label"];
    title?: Marko.AttrTag<
        Marko.HTML.Title & {
            as?: Marko.Renderable;
        }
    >;
    cta?: Marko.AttrTag<
        Marko.HTML.A & {
            renderBody?: Marko.Renderable;
            as?: Marko.Renderable;
        }
    >;
    "education-icon"?: Marko.AttrTag<Marko.Renderable> | Marko.Renderable;
    prominent?: boolean;
    "on-dismiss"?: () => void;
    "on-cta-click"?: () => void;
}

export interface Input extends WithNormalizedProps<NoticeBaseInput> {}

class NoticeBase extends Marko.Component<Input> {}

export default NoticeBase;
