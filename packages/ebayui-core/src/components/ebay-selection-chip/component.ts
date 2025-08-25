import type { WithNormalizedProps } from "../../global";

interface SelectionChipInput extends Omit<Marko.HTML.Button, `on${string}`> {
    renderBody?: Marko.Body;
    selected?: boolean;
    "on-click"?: () => void;
}
export interface Input extends WithNormalizedProps<SelectionChipInput> {}

export interface State {
    selected?: boolean;
    mounted: boolean;
}

class SelectionChip extends Marko.Component<Input, State> {
    onCreate(input: Input) {
        this.state = {
            mounted: false,
            selected: input.selected || false,
        };
    }
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
        if (input.selected !== undefined) {
            this.state.selected = input.selected;
        }
    }
}

export default SelectionChip;
