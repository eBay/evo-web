import type { WithNormalizedProps } from "../../global";

interface Image extends Marko.HTML.Img {
    as?: string;
}

interface FilterChipInput
    extends Omit<Marko.HTML.Button, `on${string}` | "type">,
        Omit<Marko.HTML.A, `on${string}`> {
    renderBody?: Marko.Body;
    selected?: boolean;
    variant?: "default" | "expressive" | "menu";
    icon?: Marko.AttrTag<{ renderBody?: Marko.Body }>;
    image?: Marko.AttrTag<Image>;
    "a11y-selected-text"?: Marko.HTMLAttributes["aria-label"];
    expanded?: boolean;
    "on-click"?: (event: {
        originalEvent: MouseEvent;
        expanded: boolean;
        selected: boolean;
    }) => void;
}
export interface Input extends WithNormalizedProps<FilterChipInput> {}

export interface State {
    expanded?: boolean;
    selected?: boolean;
    mounted: boolean;
}

class SelectionChip extends Marko.Component<Input, State> {
    handleButtonClick(originalEvent: MouseEvent) {
        let expanded = this.state.expanded;
        let selected = this.state.selected;
        if (!this.input.disabled) {
            if (this.input.variant === "menu") {
                expanded = !expanded;
                this.state.expanded = expanded;
            } else {
                selected = !selected;
                this.state.selected = selected;
            }
            this.emit("click", {
                expanded,
                selected,
                originalEvent,
            });
        }
    }

    onMount() {
        this.state.mounted = true;
    }

    onCreate() {
        this.state = {
            selected: false,
            expanded: false,
            mounted: false,
        };
    }

    onInput(input: Input) {
        this.state.selected = input.selected || false;
        this.state.expanded = input.expanded || false;
    }
}

export default SelectionChip;
