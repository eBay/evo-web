import type { WithNormalizedProps } from "../../global";
import type { AttrBoolean } from "marko/tags-html";

interface SelectionChipInput extends Omit<Marko.HTML.Button, `on${string}`> {
    renderBody?: Marko.Body;
    selected?: AttrBoolean;
    "on-click"?: () => void;
}
export interface Input extends WithNormalizedProps<SelectionChipInput> {}

export interface State {
    selected?: boolean;
    mounted: boolean;
}

class SelectionChip extends Marko.Component<Input, State> {
    onMount() {
        this.state.mounted = true;
    }
    handleButtonClick(originalEvent: MouseEvent) {
        if (!this.input.disabled) {
            const selected = !this.state.selected;
            this.state.selected = selected;
            this.emit("click", {
                selected,
                originalEvent,
            });
        }
    }

    onInput(input: Input) {
        this.state = {
            selected: input.selected || false,
            mounted: false
        };
    }
}

export default SelectionChip;
