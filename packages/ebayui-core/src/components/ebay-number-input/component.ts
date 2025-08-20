import type {
    Input as TextboxInput,
    TextboxEvent,
} from "../ebay-textbox/component-browser";
import type { WithNormalizedProps } from "../../global";

export interface State {
    value: number;
    min: number;
    max: number;
}

interface NumberInputInput extends Omit<TextboxInput, `on${string}`> {
    label?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    "a11y-delete-text"?: Marko.HTMLAttributes["aria-label"];
    "on-keydown"?: (event: TextboxEvent) => void;
    "on-keypress"?: (event: TextboxEvent) => void;
    "on-keyup"?: (event: TextboxEvent) => void;
    "on-change"?: (event: TextboxEvent) => void;
    "on-input-change"?: (event: TextboxEvent) => void;
    "on-focus"?: (event: TextboxEvent) => void;
    "on-blur"?: (event: TextboxEvent) => void;
    "on-delete-click"?: (event: TextboxEvent) => void;
    "on-increment"?: (event: TextboxEvent) => void;
    "on-decrement"?: (event: TextboxEvent) => void;
}

export interface Input extends WithNormalizedProps<NumberInputInput> {}

class NumberInput extends Marko.Component<Input, State> {
    declare textbox: HTMLInputElement;

    onCreate() {
        this.state = {
            value: 0,
            min: 0,
            max: Infinity,
        };
    }

    onMount() {
        this.textbox = this.getComponent("input")?.getEl(
            "input",
        ) as HTMLInputElement;
    }

    onInput(input: Input) {
        const defaultMin = input.a11yDeleteText ? 1 : 0;
        this.state.min = input.min
            ? parseInt(input.min.toString(), 10)
            : defaultMin;
        this.state.max = input.max
            ? parseInt(input.max.toString(), 10)
            : Infinity;

        const value = input.value ?? defaultMin;
        this.state.value =
            typeof value !== "number" ? parseInt(value.toString(), 10) : value;
    }

    checkBoundary(value: any, inc: number = 0) {
        const defaultMin = this.input.a11yDeleteText ? 1 : 0;
        let newValue = parseInt(value, 10) + inc;
        if (isNaN(newValue)) {
            newValue = defaultMin;
        } else if (newValue > this.state.max) {
            newValue = this.state.max;
        } else if (newValue < this.state.min) {
            newValue = this.state.min;
        }
        return newValue;
    }

    updateInputValue(event: TextboxEvent) {
        const value = this.checkBoundary(this.textbox.value, 0);
        this.state.value = value;
        // Update the input field's value to reflect the bounded value
        this.textbox.value = value.toString();
        this.emit("input-change", {
            originalEvent: event.originalEvent,
            value,
        });
        this.emit("change", { originalEvent: event.originalEvent, value });
    }

    updateInputValueChange(event: TextboxEvent) {
        const value = this.checkBoundary(this.textbox.value, 0);
        this.state.value = value;
        // Update the input field's value to reflect the bounded value
        this.textbox.value = value.toString();
        this.emit("change", { originalEvent: event.originalEvent, value });
    }

    handleAnimation(action: string) {
        // Normally we dont want to use dom manipulation for removing or adding classes,
        // but for this animation to work we need to trigger a reflow.

        const el = this.el as HTMLElement;
        el.classList.remove(`number-input--increment`);
        el.classList.remove(`number-input--decrement`);
        el.classList.remove(`number-input--increment-disabled`);
        el.classList.remove(`number-input--decrement-disabled`);
        // Trigger a reflow to ensure the animation starts
        void el.offsetWidth;
        // Add the class for the animation
        el.classList.add(`number-input--${action}`);
    }

    handleIncrement(event: { originalEvent: MouseEvent }) {
        const value = this.checkBoundary(this.textbox.value, 1);
        this.handleAnimation(
            value >= this.state.max ? "increment-disabled" : "increment",
        );
        this.state.value = value;
        // Update the input field's value to reflect the bounded value
        this.textbox.value = value.toString();
        this.emit("increment", { originalEvent: event.originalEvent, value });
        this.emit("change", { originalEvent: event.originalEvent, value });
    }

    handleDecrement(event: { originalEvent: MouseEvent }) {
        const value = this.checkBoundary(this.textbox.value, -1);
        this.handleAnimation(
            value <= this.state.min ? "decrement-disabled" : "decrement",
        );
        this.state.value = value;
        // Update the input field's value to reflect the bounded value
        this.textbox.value = value.toString();
        this.emit("decrement", { originalEvent: event.originalEvent, value });
        this.emit("change", { originalEvent: event.originalEvent, value });
    }
}

export default NumberInput;
