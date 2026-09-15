import { useEffect } from "react";
import { countCharacters } from "./count-characters";
import type { EvoCharacterCountProps } from "./types";
import "@ebay/skin/utility.mjs";

/**
 * A character count shows how much text has been entered against a set limit.
 *
 * `text` is counted as grapheme characters. Pass `count` when the value is
 * calculated elsewhere, or provide custom children to replace the default
 * count. `inputRef` sets `aria-live="polite"` on the `<input>` or `<textarea>`
 * only when the count exceeds `max`.
 *
 * ## Usage
 *
 * ```tsx
 * import { useRef, useState } from "react";
 * import { EvoCharacterCount } from "@evo-web/react/character-count";
 * import { EvoInput } from "@evo-web/react/input";
 *
 * function Example() {
 *   const [value, setValue] = useState("");
 *   const inputRef = useRef<HTMLInputElement>(null);
 *
 *   return (
 *     <>
 *       <EvoInput
 *         ref={inputRef}
 *         value={value}
 *         onChange={(event) => setValue(event.currentTarget.value)}
 *         aria-label="Message"
 *       />
 *       <EvoCharacterCount
 *         text={value}
 *         max={120}
 *         inputRef={inputRef}
 *       />
 *     </>
 *   );
 * }
 * ```
 *
 * @summary Tracks text length against a maximum.
 */
export function EvoCharacterCount({
  text,
  count: inputCount,
  max,
  a11yText = "characters used",
  inputRef,
  children,
  ...rest
}: EvoCharacterCountProps) {
  const count = inputCount ?? countCharacters(text ?? "");
  const isOverLimit = count > max;

  useEffect(() => {
    const input = inputRef?.current;
    if (!input) {
      return;
    }

    const previousAriaLive = input.getAttribute("aria-live");

    return () => {
      if (previousAriaLive === null) {
        input.removeAttribute("aria-live");
      } else {
        input.setAttribute("aria-live", previousAriaLive);
      }
    };
  }, [inputRef]);

  useEffect(() => {
    const input = inputRef?.current;
    if (input) {
      input.setAttribute("aria-live", isOverLimit ? "polite" : "off");
    }
  }, [inputRef, isOverLimit]);

  return (
    <span {...rest}>
      {children !== undefined ? (
        children
      ) : (
        <>
          {count}/{max}
          {a11yText && (
            <>
              {" "}
              <span className="clipped">{a11yText}</span>
            </>
          )}
        </>
      )}
    </span>
  );
}
