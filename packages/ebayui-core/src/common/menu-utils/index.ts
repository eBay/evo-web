export interface MenuItem extends Omit<Marko.HTML.Button, `on${string}`> {
    href?: string;
    value?: string;
    renderBody?: Marko.Body;
    separator?: boolean;
    checked?: boolean;
    badgeNumber?: number;
}

export interface BaseMenuInput {
    item?: Marko.AttrTag<MenuItem>;
    type?: string;
    variant?: string;
}

export interface MenuState {
    checkedIndex?: number;
    checkedItems?: boolean[];
    isSelected: boolean;
    selectedCount: number;
}

const Component = (typeof Marko === "object"
    ? Marko.Component
    : function () {}) as any as typeof Marko.Component;

export class MenuUtils<
    Input extends BaseMenuInput,
    State extends MenuState,
> extends Component<Input, State> {
    declare type?: string;
    declare items: MenuItem[];

    isRadio() {
        return this.type === "radio";
    }

    getCheckedValues() {
        if (this.isRadio()) {
            const item = this.items[this.state.checkedIndex!] || {};
            return [item.value];
        }
        return this.items
            .filter((item, index) => this.state.checkedItems![index])
            .map((item) => item.value);
    }

    getCheckedIndexes() {
        if (this.isRadio()) {
            return this.state.checkedIndex === undefined
                ? undefined
                : [this.state.checkedIndex];
        }
        return this.items
            .map((item, i) => this.state.checkedItems![i] && i)
            .filter((item) => item !== false && item !== undefined) as number[];
    }

    getInputState(input: Input) {
        /*
            ebay-menu uses separators and we need to exclude these
            from items to pass correct indexes to state
            Any other component that doesn't have separator should pass through
        */
        this.items = [...(input.item || [])].filter((item) => !item.separator);
        this.type = input.type;
        if (
            this.type !== "radio" &&
            this.type !== "checkbox" &&
            input.variant === "filter"
        ) {
            this.type = "checkbox";
        }
        if (this.isRadio()) {
            const checkedIndex = (this.items || []).findIndex(
                (item) => item.checked || false,
            );
            return {
                checkedIndex,
                isSelected: checkedIndex !== -1,
                selectedCount: 0,
            };
        }
        const checkedItems = (this.items || []).map(
            (item) => item.checked || false,
        );
        const selectedCount = this.getSelectedCount(checkedItems);
        return {
            checkedItems,
            isSelected: selectedCount > 0,
            selectedCount,
        };
    }

    getSelectedCount(checkedItems?: boolean[]) {
        return (checkedItems || []).reduce(
            (prev, item) => prev + (item ? 1 : 0),
            0,
        );
    }

    isChecked(index: number) {
        if (this.isRadio()) {
            return index === this.state.checkedIndex;
        }
        return this.state.checkedItems![index];
    }

    isDisabled(index: number) {
        return this.items[index].disabled;
    }

    toggleChecked(index: number | number[]) {
        if (Array.isArray(index)) {
            if (this.isRadio()) {
                this.state.checkedIndex = index[0];
                this.state.isSelected = index[0] !== -1;
            } else {
                this.state.checkedItems = this.state.checkedItems!.map(
                    (item, i) => index.indexOf(i) !== -1,
                );
                this.state.selectedCount = this.getSelectedCount(
                    this.state.checkedItems,
                );
                this.state.isSelected = this.state.selectedCount > 0;
            }
            return;
        }

        if (this.isRadio() && index !== this.state.checkedIndex) {
            this.state.checkedIndex = index;
            this.state.isSelected = index !== -1;
        } else if (this.type !== "radio") {
            this.state.checkedItems![index] = !this.state.checkedItems![index];
            this.state.selectedCount = this.getSelectedCount(
                this.state.checkedItems,
            );
            this.state.isSelected = this.state.selectedCount > 0;
            this.setStateDirty("checkedItems");
        }
    }

    getSeparatorMap(input: Input) {
        let separatorCount = 0;
        return [...(input.item || [])].reduce(
            (map, item, index) => {
                if (item.separator) {
                    map[index - separatorCount] = true;
                    separatorCount++;
                }
                return map;
            },
            {} as Record<number, boolean>,
        );
    }
}

export default function setupMenu(instance: any) {
    Object.defineProperties(
        instance,
        Object.getOwnPropertyDescriptors(MenuUtils.prototype),
    );
}
