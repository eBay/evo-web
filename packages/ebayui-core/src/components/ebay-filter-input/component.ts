import type {
    Input as TextboxInput,
    TextboxEvent,
} from "../ebay-textbox/component-browser";
import type { WithNormalizedProps } from "../../global";
import { validSizes } from "./constants";

interface FilterInputInput extends Omit<TextboxInput, `on${string}`> {
    size?: (typeof validSizes)[number];
    "a11y-clear-button"?: string;
    "a11y-controls-id"?: string;
    "on-clear"?: (event: TextboxEvent) => void;
    "on-keydown"?: (event: TextboxEvent) => void;
    "on-keypress"?: (event: TextboxEvent) => void;
    "on-keyup"?: (event: TextboxEvent) => void;
    "on-change"?: (event: TextboxEvent) => void;
    "on-input-change"?: (event: TextboxEvent) => void;
    "on-focus"?: (event: TextboxEvent) => void;
    "on-blur"?: (event: TextboxEvent) => void;
}

export interface Input extends WithNormalizedProps<FilterInputInput> {}

class FilterInput extends Marko.Component<Input> {
    declare textbox: HTMLInputElement;

    onMount() {
        this.textbox = this.getComponent("input")?.getEl(
            "input",
        ) as HTMLInputElement;
    }

    handleClear(event: { originalEvent: MouseEvent }) {
        const originalEvent = event.originalEvent;
        this.textbox.value = "";
        this.emit("input-change", {
            originalEvent,
            value: "",
        });
        this.emit("clear", {
            originalEvent,
            value: "",
        });
    }
}

export default FilterInput;
