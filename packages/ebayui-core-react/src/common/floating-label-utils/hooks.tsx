import React, { useRef, FC, useCallback, ComponentProps, forwardRef, useLayoutEffect } from "react";
import classNames from "classnames";
import FloatingLabel from "makeup-floating-label";

type MakeupFloatingLabelHookProps = {
    text?: string;
    disabled?: boolean;
    invalid?: boolean;
    size?: "default" | "large";
    opaqueLabel?: boolean;
    static?: boolean;
    containerTagName?: "span" | "div";
    onMount?: () => void;
};

type MakeupFloatingLabelHookReturn = {
    Label: FC<Omit<ComponentProps<"label">, "children">> | FC;
    Container: FC<ComponentProps<"div" | "span">> | FC;
};

export function useFloatingLabel({
    text,
    disabled,
    invalid,
    size,
    opaqueLabel,
    static: floatingLabelStatic,
    containerTagName: Container = "span",
    onMount = () => {},
}: MakeupFloatingLabelHookProps): MakeupFloatingLabelHookReturn {
    const containerRef = useRef(null);
    const floatingLabel = useRef<typeof FloatingLabel>(null);

    // This effect needs to be defined before the initialization effect
    // as it is only intended for subsequent updates
    useLayoutEffect(() => {
        floatingLabel.current?.refresh();
    });

    // Use layout effect to avoid flickering of floating label
    useLayoutEffect(() => {
        if (!text || floatingLabelStatic) {
            return;
        }

        if (containerRef.current) {
            floatingLabel.current = new FloatingLabel(containerRef.current);

            onMount();
        }

        return () => {
            floatingLabel.current?.destroy();
        };
    }, [text, floatingLabelStatic]);

    const containerClassName = classNames(`floating-label`, {
        "floating-label--large": size === `large`,
        "floating-label--opaque": opaqueLabel,
    });

    const FragmentContainer = useCallback(({ children }) => <>{children}</>, []);

    const FloatingLabelContainer: FC<ComponentProps<"div" | "span">> = useCallback(
        // eslint-disable-next-line react/display-name
        forwardRef(({ className, ...rest }, forwardedRef) => (
            <Container
                {...rest}
                ref={(value) => {
                    containerRef.current = value;

                    if (typeof forwardedRef === "function") {
                        forwardedRef(value);
                    } else if (forwardedRef) {
                        forwardedRef.current = value;
                    }
                }}
                className={classNames(className, containerClassName)}
            />
        )),
        [containerClassName],
    );

    const labelClassName = classNames("floating-label__label", {
        "floating-label__label--disabled": disabled,
        "floating-label__label--invalid": invalid,
    });

    const Label: FC<Omit<ComponentProps<"label">, "children">> = useCallback(
        ({ className, ...props }) => (
            <label {...props} className={classNames(className, labelClassName)}>
                {text}
            </label>
        ),
        [labelClassName, text],
    );

    if (!text) {
        return {
            Label: () => null,
            Container: FragmentContainer,
        };
    }

    return {
        Label,
        Container: FloatingLabelContainer,
    };
}
