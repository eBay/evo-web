// Phone mask utility - pure functions for React-based masking

export interface MaskResult {
    maskedValue: string;
    cursorPosition?: number;
}

/**
 * Apply phone mask and calculate new cursor position
 * @param value - The current input value (may be partially formatted)
 * @param mask - The mask pattern (e.g., "(000) 000-0000")
 * @param cursorPosition - Current cursor position
 * @param isDelete - Whether this is a delete operation
 * @returns Object with masked value and new cursor position
 */
export function applyMaskWithCursor(
    value: string,
    mask: string,
    cursorPosition: number,
    isDelete: boolean = false,
): MaskResult {
    const maskedValue = applyMask(value, mask);
    const newCursorPosition = resolveCursorPosition(maskedValue, value, cursorPosition, isDelete);

    return {
        maskedValue,
        cursorPosition: newCursorPosition,
    };
}

/**
 * Strip all non-digit characters from a string
 */
export function stripNonDigits(value: string) {
    return value.replace(/\D+/g, "");
}

/**
 * Apply mask pattern to a value
 */
export function applyMask(value: string, mask: string) {
    const digits = stripNonDigits(value);
    let maskedValue = "";
    let currentDigit = 0;
    if (digits.length) {
        for (const char of mask) {
            if (char === "0") {
                maskedValue += digits[currentDigit++];
                if (currentDigit === digits.length) {
                    break;
                }
            } else maskedValue += char;
        }
        if (currentDigit < digits.length) {
            maskedValue += " " + digits.slice(currentDigit);
        }
    }
    return maskedValue;
}

/**
 * Calculate the correct cursor position after masking
 */
function resolveCursorPosition(updatedValue: string, initialValue: string, initialPosition: number, isDelete: boolean) {
    const cursorAtEnd = initialPosition === initialValue.length;
    if (isDelete || !cursorAtEnd) {
        const before = initialValue.slice(0, initialPosition);
        const after = initialValue.slice(initialPosition);
        if (updatedValue.startsWith(before)) {
            return initialPosition;
        } else if (updatedValue.endsWith(after)) {
            return updatedValue.length - after.length;
        } else {
            const relevantChars = stripSpacesAndPunctuation(before);
            let pos = 0;
            let relevantIndex = 0;
            while (relevantIndex < relevantChars.length) {
                if (stripSpacesAndPunctuation(updatedValue[pos])) relevantIndex++;
                pos++;
            }
            return pos;
        }
    }
}

function stripSpacesAndPunctuation(str: string) {
    return str.replace(/[.,\\/#!$%^&*;:{}=+\-_`~()\s]/g, "");
}
