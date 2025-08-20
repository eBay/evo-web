import Expander from "makeup-expander";
import { DropdownUtil } from "../../common/dropdown";
import * as eventUtils from "../../common/event-utils";
import setupMenu, {
    MenuUtils,
    type BaseMenuInput,
    type MenuState,
} from "../../common/menu-utils";
import type { FilterMenuEvent } from "../ebay-filter-menu/component";
import type { WithNormalizedProps } from "../../global";

export interface FilterMenuButtonEvent {
    el?: Element;
    checked: string[];
    originalEvent?: Event;
    index?: number;
    currentChecked?: boolean;
}

interface FilterMenuButtonInput
    extends BaseMenuInput,
        Omit<Marko.HTML.Span, `on${string}`> {
    text?: string;
    "footer-text"?: string;
    "a11y-footer-text"?: Marko.HTMLAttributes["aria-label"];
    footer?: WithNormalizedProps<
        Omit<Marko.HTML.Button, `on${string}`> & {
            "a11y-footer-text"?: Marko.HTMLAttributes["aria-label"];
        }
    >;
    variant?: "form";
    "form-name"?: string;
    "form-action"?: string;
    "form-method"?: string;
    disabled?: boolean;
    "a11y-text"?: Marko.HTMLAttributes["aria-label"];
    "search-header-value"?: string;
    "search-header-placeholder-text"?: string;
    "a11y-search-header-clear-text"?: Marko.HTMLAttributes["aria-label"];
    "on-expand"?: () => void;
    "on-change"?: (event: FilterMenuButtonEvent) => void;
    "on-collapse"?: (event: FilterMenuButtonEvent) => void;
    "on-footer-click"?: (event: FilterMenuButtonEvent) => void;
    "on-form-submit"?: (event: FilterMenuButtonEvent) => void;
    "on-search-change"?: (value: string) => void;
}

export interface Input extends WithNormalizedProps<FilterMenuButtonInput> {}

export default class extends MenuUtils<Input, MenuState> {
    declare _expander: any;
    declare dropdownUtil: DropdownUtil;

    onCreate() {
        setupMenu(this);
    }

    handleMenuKeydown({ originalEvent }: FilterMenuEvent) {
        eventUtils.handleEscapeKeydown(originalEvent as KeyboardEvent, () => {
            this._expander.expanded = false;
            (this.getEl("button") as HTMLElement).focus();
        });
    }

    handleMenuChange({
        checkedIndex,
        el,
        originalEvent,
        index,
        currentChecked,
    }: FilterMenuEvent) {
        // TODO: the event data from the filter-menu should probably
        // change to include which items are checked not just the values.
        if (checkedIndex !== undefined) this.toggleChecked(checkedIndex);
        this._emitComponentEvent("change", originalEvent, {
            el,
            index,
            currentChecked,
        });
    }

    handleFooterButtonClick() {
        this._emitComponentEvent("footer-click");
        this._expander.expanded = false;
    }

    handleFormSubmit({ originalEvent }: FilterMenuEvent) {
        this._emitComponentEvent("form-submit", originalEvent);
    }

    handleExpand({ originalEvent }: FilterMenuEvent) {
        this.dropdownUtil.show();
        this._emitComponentEvent("expand", originalEvent);
    }

    handleCollapse({ originalEvent }: FilterMenuEvent) {
        this.dropdownUtil.hide();
        this._emitComponentEvent("collapse", originalEvent);
    }

    onInput(input: Input) {
        input.item = input.item || ([] as any);
        this.state = this.getInputState(input);
    }

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    onRender() {
        if (typeof window !== "undefined") {
            this._cleanupMakeup();
        }
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _emitComponentEvent(
        eventType: string,
        originalEvent?: Event,
        args?: { el?: Element; index?: number; currentChecked?: boolean },
    ) {
        const { el, index, currentChecked } = args || {};
        switch (eventType) {
            case "expand":
                this.emit(eventType);
                break;
            case "change":
            case "collapse":
            case "form-submit":
            case "footer-click": {
                const checked = this.getCheckedValues();
                this.emit(eventType, {
                    el,
                    checked: checked as string[],
                    originalEvent,
                    index,
                    currentChecked,
                } satisfies FilterMenuButtonEvent);
                break;
            }
            default:
                break;
        }
    }

    _setupMakeup() {
        this._expander = new Expander(this.getEl("container"), {
            hostSelector: ".filter-menu-button__button",
            contentSelector: ".filter-menu-button__menu",
            focusManagement: "interactive",
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        });
        this.dropdownUtil = new DropdownUtil(
            this.getEl("button"),
            this.getEl("menu"),
            {
                offset: 8,
            },
        );
    }

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.destroy();
            this._expander = undefined;
        }
        this.dropdownUtil?.cleanup();
    }
}
