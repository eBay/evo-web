import { ComponentProps } from "react";

export type Activation = "auto" | "manual";
export type Size = "medium" | "large";

export type OnSelectProps = {
    selectedIndex: number;
};

export type TabsProps = Omit<ComponentProps<"div">, "onSelect"> & {
    selectedIndex?: number;
    size?: Size;
    activation?: Activation;
    onSelect?: (props: OnSelectProps) => void;
};
