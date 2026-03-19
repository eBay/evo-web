/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useLayoutEffect, useRef } from "react";
// @ts-ignore
import shaka from "shaka-player/dist/shaka-player.ui";

// Captions uses Shaka's built-in TextSelection control
// We can't use useShakaControl because we need to instantiate the built-in class
export const CaptionsControl: FC = () => {
    const isMountedRef = useRef(true);

    useLayoutEffect(() => {
        isMountedRef.current = true;

        shaka.ui.Controls.registerElement("captions", {
            create: (rootElement: HTMLElement, controls: unknown) => {
                if (!isMountedRef.current) return null;
                return new shaka.ui.TextSelection(rootElement, controls);
            },
        });

        return () => {
            isMountedRef.current = false;
        };
    }, []);

    return null;
};
