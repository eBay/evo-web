import React, { Children, FC, ReactElement, RefObject, Touch, TouchEvent, useEffect, useState } from "react";
import classNames from "classnames";
import { DialogBaseProps, DialogBaseWithState, EbayDialogHeader } from "../../ebay-dialog-base";

const THRESHOLD_TOUCH = 30;
const classPrefix = "drawer-dialog";

export interface EbayDrawerProps<T> extends DialogBaseProps<T> {
    expanded?: boolean;
    open?: boolean;
    noHandle?: boolean;
    focus?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    a11yMinimizeText?: string;
    a11yMaximizeText?: string;
    onClose?: () => void;
    onExpanded?: () => void;
    onCollapsed?: () => void;
}

// eslint-disable-next-line
const EbayDrawerDialogDeprecated: FC<EbayDrawerProps<any>> = ({
    expanded: controlledExpanded = false,
    noHandle,
    onClose = () => {},
    onCollapsed = () => {},
    onExpanded = () => {},
    a11yMaximizeText,
    a11yMinimizeText,
    children,
    ...rest
}) => {
    let touches: Partial<Touch>[] = [];
    const [expanded, setExpanded] = useState(controlledExpanded);

    useEffect(() => {
        setExpanded(controlledExpanded);
    }, [controlledExpanded]);

    const setExpandedState = (expand: boolean) => {
        setExpanded(expand);
        if (expand) {
            onExpanded();
        } else {
            onCollapsed();
        }
    };

    const handleTouchStart = (e: TouchEvent) => {
        touches = Array.from(e.changedTouches).map(({ identifier, pageY }) => ({ identifier, pageY }));
    };

    const handleTouchEnd = (e: TouchEvent) => {
        Array.from(e.changedTouches).forEach(({ identifier }) => {
            const idx = touches.findIndex((touch) => touch.identifier === identifier);
            if (idx > -1) {
                touches.splice(idx, 1);
            }
        });
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (touches.length) {
            Array.from(e.changedTouches).forEach(({ identifier, pageY }) => {
                const compare = touches.findIndex((touch) => touch.identifier === identifier);
                const diff = pageY - touches[compare].pageY;
                if (diff > THRESHOLD_TOUCH) {
                    // Drag down, collpase
                    if (expanded) {
                        setExpandedState(false);
                    } else {
                        onClose();
                    }
                    handleTouchEnd(e);
                } else if (diff < -THRESHOLD_TOUCH) {
                    setExpandedState(true);
                    handleTouchEnd(e);
                }
            });
        }
    };

    const handle = noHandle ? null : (
        <button
            aria-label={expanded ? a11yMinimizeText : a11yMaximizeText}
            className={`${classPrefix}__handle`}
            onClick={() => setExpandedState(!expanded)}
            onScroll={() => setExpandedState(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            type="button"
        />
    );

    const childrenArray = Children.toArray(children) as ReactElement[];
    const header = childrenArray.find(({ type }) => type === EbayDialogHeader);
    const withoutHeader = childrenArray.filter(({ type }) => type !== EbayDialogHeader);

    return (
        <DialogBaseWithState
            {...rest}
            classPrefix={classPrefix}
            onCloseBtnClick={onClose}
            className={classNames(rest.className, `${classPrefix}--mask-fade-slow`)}
            windowClass={classNames(rest.windowClass, `${classPrefix}__window`, `${classPrefix}__window--slide`, {
                [`${classPrefix}__window--expanded`]: expanded,
            })}
            onBackgroundClick={onClose}
            top={handle}
        >
            {header || <EbayDialogHeader />}
            {withoutHeader}
        </DialogBaseWithState>
    );
};

export default EbayDrawerDialogDeprecated;
