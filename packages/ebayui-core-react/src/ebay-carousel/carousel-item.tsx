import React, { ComponentPropsWithoutRef, FC, Ref } from "react";
import { withForwardRef } from "../common/component-utils";

export type CarouselItemProps = ComponentPropsWithoutRef<"li"> & {
    fullyVisible?: boolean;
    className?: string;
    forwardedRef?: Ref<HTMLLIElement>;
};

const EbayCarouselItem: FC<CarouselItemProps> = ({ fullyVisible = true, forwardedRef, children, ...rest }) => (
    <li {...rest} ref={forwardedRef} aria-hidden={!fullyVisible}>
        {children}
    </li>
);

export default withForwardRef(EbayCarouselItem);
