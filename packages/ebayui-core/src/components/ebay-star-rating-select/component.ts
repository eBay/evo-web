import type { WithNormalizedProps } from "../../global";

export interface StarRatingEvent<T extends Event> {
    originalEvent: T;
    value: number;
}

interface StarRatingSelectInput extends Omit<Marko.HTML.Div, `on${string}`> {
    value?: string | number;
    "a11y-star-text"?: [string, string, string, string, string];
    "a11y-text"?: Marko.HTMLAttributes["aria-label"];
    disabled?: boolean;
    "on-change"?: (event: StarRatingEvent<PointerEvent>) => void;
    "on-focus"?: (event: StarRatingEvent<FocusEvent>) => void;
    "on-keydown"?: (event: StarRatingEvent<KeyboardEvent>) => void;
}

export interface Input extends WithNormalizedProps<StarRatingSelectInput> {}

export interface State {
    value: number;
}

class StarRating extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            value: 0,
        };
    }
    onInput(input: Input) {
        let value = parseInt(input.value as string) || 0;
        if (value > 5) {
            value = 0;
        }
        this.state.value = value;
    }
    handleClick(
        value: number,
        originalEvent: PointerEvent,
        el: HTMLInputElement,
    ) {
        if (!el.disabled) {
            this.state.value = value;
        }
        this.emitEvent("change", value, originalEvent, el);
    }

    emitEvent<T extends Event>(
        name: string,
        value: number,
        originalEvent: T,
        el: HTMLInputElement,
    ) {
        if (!el.disabled) {
            this.emit(name, {
                originalEvent,
                value: value,
            } satisfies StarRatingEvent<T>);
        }
    }
}

export default StarRating;
