import classNames from "classnames";
import { SplitButtonProvider } from "./context";
import type { EvoSplitButtonProps } from "./types";
import "@ebay/skin/split-button.mjs";

/**
 * Split buttons pair a primary action with a related menu. Compose an
 * `EvoSplitButtonAction` and `EvoSplitButtonMenu` in that order. Shared visual
 * and disabled props are supplied once on this wrapper.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoSplitButton, EvoSplitButtonAction, EvoSplitButtonMenu, EvoMenuButtonItem } from "@evo-web/react/split-button";
 *
 * <EvoSplitButton priority="primary" a11yMenuText="More save options">
 *   <EvoSplitButtonAction onClick={save}>Save</EvoSplitButtonAction>
 *   <EvoSplitButtonMenu>
 *     <EvoMenuButtonItem onSelect={saveAs}>Save as</EvoMenuButtonItem>
 *   </EvoSplitButtonMenu>
 * </EvoSplitButton>
 * ```
 *
 * @summary Primary action with an adjacent menu.
 */
export function EvoSplitButton({
  a11yMenuText = "Menu",
  borderless = false,
  children,
  className,
  disabled = false,
  partiallyDisabled = false,
  priority,
  ref,
  size,
  transparent = false,
  ...rest
}: EvoSplitButtonProps) {
  return (
    <SplitButtonProvider
      a11yMenuText={a11yMenuText}
      borderless={borderless}
      disabled={disabled}
      partiallyDisabled={partiallyDisabled}
      priority={priority}
      size={size}
      transparent={transparent}
    >
      <span
        {...rest}
        ref={ref}
        className={classNames("split-button", className)}
      >
        {children}
      </span>
    </SplitButtonProvider>
  );
}
