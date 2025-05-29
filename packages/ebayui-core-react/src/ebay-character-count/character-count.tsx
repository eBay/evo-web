import React, { FC, useState, useEffect, ComponentProps } from "react";

export type CharacterCountEvent = {
    count: number;
    inputAriaLive: "polite" | "off";
};

export type EbayCharacterCountProps = ComponentProps<"span"> & {
    max: number;
    clippedText?: string;
    value?: string | number;
    onChange?: (event: CharacterCountEvent) => void;
};

const countFromValue = (value?: string | number) => {
    if (typeof value === "string") {
        return [...value].length;
    }
    if (typeof value === "number") {
        return value;
    }
    return 0;
};

const EbayCharacterCount: FC<EbayCharacterCountProps> = ({
    children,
    max,
    clippedText,
    value,
    onChange,
    ...htmlInput
}) => {
    const [count, setCount] = useState(countFromValue(value));

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newCount = countFromValue(value);
            setCount(newCount);
            if (onChange) {
                onChange({
                    count: newCount,
                    inputAriaLive: newCount >= max ? "polite" : "off",
                });
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [value, max, onChange]);

    return (
        <span {...htmlInput}>
            {children ? (
                children
            ) : (
                <>
                    {count}/{max}
                    {clippedText && <span className="clipped">{clippedText}</span>}
                </>
            )}
        </span>
    );
};

export default EbayCharacterCount;
