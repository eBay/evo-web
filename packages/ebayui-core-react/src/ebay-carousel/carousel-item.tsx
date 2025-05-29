import React, {
    ComponentPropsWithoutRef,
    FC,
    RefCallback,
    RefObject,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { withForwardRef } from "../common/component-utils";
import { getRelativeRects } from "./helpers";
import { ListItemRef } from "./types";

export type CarouselItemProps = ComponentPropsWithoutRef<"li"> & {
    slideWidth?: number;
    offset?: number;
    className?: string;
    ref?: RefCallback<ListItemRef>;
    forwardedRef?: RefObject<ListItemRef>;
};

const EbayCarouselItem: FC<CarouselItemProps> = ({ slideWidth, offset, forwardedRef, children, ...rest }) => {
    const itemRef = useRef<HTMLLIElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(forwardedRef, () => {
        if (!itemRef.current) return;

        const { left, right } = getRelativeRects(itemRef.current);
        const fullyVisible = left === undefined || (left - offset >= -0.01 && right - offset <= slideWidth + 0.01);

        setIsVisible(fullyVisible);

        return {
            element: itemRef.current,
            left,
            right,
            fullyVisible,
        };
    }, [slideWidth, offset]);

    return (
        <li {...rest} ref={itemRef} aria-hidden={!isVisible}>
            {children}
        </li>
    );
};

export default withForwardRef(EbayCarouselItem);
