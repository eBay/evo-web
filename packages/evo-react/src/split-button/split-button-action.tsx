import { EvoButton } from "../button/button";
import type { AnchorButtonProps, NativeButtonProps } from "../button/types";
import { useSplitButton } from "./context";
import type { EvoSplitButtonActionProps } from "./types";

/**
 * The primary action is a native button or, with `href`, an anchor. Its label
 * stays inside the same Skin cell and text wrappers as the legacy control.
 *
 * @summary Primary action of a split button.
 */
export function EvoSplitButtonAction({
  a11yLoadingText,
  bodyState,
  children,
  href,
  onClick,
  ...rest
}: EvoSplitButtonActionProps) {
  const split = useSplitButton();
  const content = (
    <span className="btn__cell">
      <span className="btn__text">{children}</span>
    </span>
  );
  const common = {
    ...rest,
    bodyState: bodyState === "expand" ? undefined : bodyState,
    priority: split.priority,
    size: split.size,
    disabled: split.disabled,
    partiallyDisabled: split.partiallyDisabled,
    transparent: split.transparent,
    borderless: split.borderless,
    split: "start" as const,
    "aria-label":
      bodyState === "loading" ? a11yLoadingText : rest["aria-label"],
    "aria-disabled": split.partiallyDisabled || undefined,
  };
  if (href) {
    return (
      <EvoButton
        {...(common as AnchorButtonProps)}
        href={href}
        onClick={(event) => {
          if (split.disabled || split.partiallyDisabled) {
            event.preventDefault();
            return;
          }
          (onClick as AnchorButtonProps["onClick"])?.(event);
        }}
      >
        {content}
      </EvoButton>
    );
  }
  return (
    <EvoButton
      {...(common as NativeButtonProps)}
      onClick={(event) => {
        if (split.disabled || split.partiallyDisabled) {
          event.preventDefault();
          return;
        }
        (onClick as NativeButtonProps["onClick"])?.(event);
      }}
    >
      {content}
    </EvoButton>
  );
}
