import React, { Children, cloneElement, ComponentProps, FC, ReactElement, RefObject } from "react";
import classNames from "classnames";
import { EbayFakeMenuItemProps } from "./index";
import { EbayKeyboardEventHandler, EbayMouseEventHandler } from "../common/event-utils/types";
import { withForwardRef } from "../utils";

type SpanProps = Omit<ComponentProps<"div">, "onKeyDown" | "onSelect">;
export type EbayFakeMenuProps = SpanProps & {
    itemMatchesUrl?: boolean;
    onKeyDown?: EbayKeyboardEventHandler<HTMLElement, { index: number }>;
    onSelect?: EbayMouseEventHandler<HTMLAnchorElement, { index: number }>;
    forwardedRef?: RefObject<HTMLDivElement>;
};

const EbayFakeMenu: FC<EbayFakeMenuProps> = ({
    className,
    itemMatchesUrl = true,
    onKeyDown = () => {},
    onSelect = () => {},
    children,
    forwardedRef,
    ...rest
}) => {
    const childrenArray = Children.toArray(children);
    const defaultAriaCurrent = itemMatchesUrl === false ? "true" : "page";

    return (
        <div {...rest} ref={forwardedRef} className={classNames(className, "fake-menu")}>
            <ul className="fake-menu__items" tabIndex={-1}>
                {childrenArray.map((child: ReactElement, i) => {
                    const { current, onClick = () => {}, ...itemRest }: EbayFakeMenuItemProps = child.props;

                    return (
                        <li key={i}>
                            {cloneElement(child, {
                                ...itemRest,
                                "aria-current": current ? defaultAriaCurrent : undefined,
                                onClick: (e) => {
                                    onSelect(e, { index: i });
                                    onClick(e);
                                },
                                onKeyDown: (e) => {
                                    onKeyDown(e, { index: i });
                                },
                            } as EbayFakeMenuItemProps)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default withForwardRef(EbayFakeMenu);
