import { EvoIconChevronDown12 } from "../icon/icons/chevron-down-12";
import { EvoMenuButton } from "../menu-button/menu-button";
import { EvoMenuButtonMenu } from "../menu-button/menu-button-menu";
import { EvoMenuButtonTrigger } from "../menu-button/menu-button-trigger";
import { useSplitButton } from "./context";
import type { EvoSplitButtonMenuProps } from "./types";

/**
 * Adjacent menu control. Command items use `EvoMenuButtonItem`; radio and
 * checkbox items use the same value-based groups as `EvoMenu`.
 *
 * @summary Menu half of a split button.
 */
export function EvoSplitButtonMenu({
  a11yText,
  children,
  footer,
  ...rest
}: EvoSplitButtonMenuProps) {
  const split = useSplitButton();
  return (
    <EvoMenuButton
      {...rest}
      a11yText={a11yText ?? split.a11yMenuText}
      priority={split.priority}
      size={split.size}
      disabled={split.disabled}
      partiallyDisabled={split.partiallyDisabled}
      transparent={split.transparent}
      borderless={split.borderless}
      split="end"
      reverse
      noToggleIcon
    >
      <EvoMenuButtonTrigger>
        <EvoIconChevronDown12 />
      </EvoMenuButtonTrigger>
      <EvoMenuButtonMenu footer={footer}>{children}</EvoMenuButtonMenu>
    </EvoMenuButton>
  );
}
