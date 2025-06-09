import React, { ComponentPropsWithoutRef, FC, forwardRef } from "react";

const getDisplayName = <Props,>(Component: FC<Props>) => Component.displayName || Component.name || "Component";

// Typescript will automatically find the return type crom forwardRef() function
// Disabling eslint for this use case
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withForwardRef = <T extends ComponentPropsWithoutRef<any>>(Component: FC<T>) => {
    const ForwardRef = forwardRef<FC<T>, T>((props, ref) => <Component {...props} forwardedRef={ref} />);

    ForwardRef.displayName = getDisplayName<T>(Component);

    return ForwardRef;
};
