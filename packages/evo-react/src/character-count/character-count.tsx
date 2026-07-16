import { useEffect } from "react";
import { countCharacters } from "./count-characters";
import type { EvoCharacterCountProps } from "./types";
import "@ebay/skin/utility.mjs";

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
    input.setAttribute("aria-live", isOverLimit ? "polite" : "off");

    return () => {
      if (previousAriaLive === null) {
        input.removeAttribute("aria-live");
      } else {
        input.setAttribute("aria-live", previousAriaLive);
      }
    };
  }, [isOverLimit]);

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
